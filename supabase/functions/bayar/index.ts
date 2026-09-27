/* Bayaran Premium melalui toyyibPay (FPX sahaja).

   Satu fungsi, tiga pintu:
     POST {aksi:"cipta", peringkat:"rendah"|"atas"}   (guru log masuk)
       -> cipta bil, pulangkan {url} halaman bayaran toyyibPay
     POST {aksi:"semak", billcode}                    (guru log masuk)
       -> semak status terus dengan toyyibPay, aktifkan Premium jika berjaya
     POST ?cb=1  (borang daripada toyyibPay, tiada token)
       -> callback; status sentiasa disemak semula dengan getBillTransactions,
          jadi callback palsu tidak boleh mengaktifkan apa-apa.

   Premium hanya ditulis oleh fungsi SQL <prefix>_bayaran_berjaya (service_role),
   yang idempotent: callback + semak untuk bil yang sama tidak menambah hari dua kali.

   Rahsia (supabase secrets set ...):
     TOYYIB_SECRET    userSecretKey akaun toyyibPay (Nani)
     TOYYIB_KATEGORI  categoryCode
     TOYYIB_BASE      https://dev.toyyibpay.com (sandbox) | https://toyyibpay.com
     APP_URL          https://jejaktpsains.naikgred.com/
     PREFIX           lo (Sains) | jm (Matematik)
     PRODUK           Jejak TP Sains | Jejak TP Matematik

   Deploy:  supabase functions deploy bayar --project-ref <ref> --no-verify-jwt
   (--no-verify-jwt kerana toyyibPay tidak menghantar token; token guru
   disemak sendiri di bawah untuk cipta/semak.) */
import { createClient } from "npm:@supabase/supabase-js@2";
import { createHash } from "node:crypto";

const env = (k: string, lalai = "") => Deno.env.get(k) ?? lalai;
const P = env("PREFIX", "lo");
const BASE = env("TOYYIB_BASE", "https://dev.toyyibpay.com").replace(/\/$/, "");
const RAHSIA = env("TOYYIB_SECRET");
const KATEGORI = env("TOYYIB_KATEGORI");
const APP_URL = env("APP_URL");
const PRODUK = env("PRODUK", "Jejak TP Sains");
const FN_URL = env("SUPABASE_URL") + "/functions/v1/bayar";

const sb = createClient(env("SUPABASE_URL"), env("SUPABASE_SERVICE_ROLE_KEY"), {
  auth: { persistSession: false },
});

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { ...CORS, "Content-Type": "application/json" } });

const PERINGKAT: Record<string, string> = {
  rendah: "Premium Menengah Rendah Tingkatan 1 hingga 3 selama 365 hari",
  atas: "Premium Menengah Atas Tingkatan 4 hingga 5 selama 365 hari",
};

/* toyyibPay: billName/billDescription hanya huruf, nombor, ruang dan '_'. */
const bersih = (s: string, max: number) => s.replace(/[^A-Za-z0-9 _]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);

async function toyyib(laluan: string, medan: Record<string, string>) {
  const r = await fetch(BASE + "/index.php/api/" + laluan, {
    method: "POST",
    body: new URLSearchParams(medan),
    signal: AbortSignal.timeout(20000),
  });
  const teks = await r.text();
  try { return JSON.parse(teks); } catch { throw new Error("toyyibPay: " + teks.slice(0, 200)); }
}

async function guruDaripada(req: Request) {
  const jwt = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "");
  if (!jwt) return null;
  const { data } = await sb.auth.getUser(jwt);
  return data.user ?? null;
}

/* Sumber kebenaran: getBillTransactions. Pulangkan status bil selepas dikemas kini. */
async function sahkan(billcode: string) {
  const { data: bil } = await sb.from(P + "_bayaran").select("*").eq("billcode", billcode).maybeSingle();
  if (!bil) return { status: "tiada" };
  if (bil.status === "berjaya") return { status: "berjaya", tamat: bil.premium_tamat_baru, peringkat: bil.peringkat };

  const senarai = await toyyib("getBillTransactions", { billCode: billcode });
  const tx = Array.isArray(senarai) ? senarai : [];
  const ok = tx.find((t: any) => String(t.billpaymentStatus) === "1");
  if (ok) {
    if (ok.billExternalReferenceNo && ok.billExternalReferenceNo !== bil.id) {
      console.error("rujukan tidak sepadan", billcode, ok.billExternalReferenceNo, bil.id);
      return { status: "ralat" };
    }
    const sen = Math.round(parseFloat(String(ok.billpaymentAmount).replace(/,/g, "")) * 100);
    const { data, error } = await sb.rpc(P + "_bayaran_berjaya", {
      p_billcode: billcode,
      p_refno: String(ok.billpaymentInvoiceNo ?? ""),
      p_saluran: String(ok.billpaymentChannel ?? ""),
      p_jumlah_sen: sen,
    });
    if (error || !data?.ok) {
      console.error("aktifkan gagal", billcode, error ?? data);
      return { status: "ralat" };
    }
    return { status: "berjaya", tamat: data.tamat, peringkat: bil.peringkat };
  }
  const menunggu = tx.some((t: any) => ["2", "4"].includes(String(t.billpaymentStatus)));
  if (!menunggu && tx.some((t: any) => String(t.billpaymentStatus) === "3")) {
    await sb.from(P + "_bayaran").update({ status: "gagal" }).eq("id", bil.id).eq("status", "menunggu");
    return { status: "gagal" };
  }
  return { status: "menunggu" };
}

async function cipta(guru: { id: string; email?: string }, peringkat: string) {
  if (!PERINGKAT[peringkat]) return json({ ralat: "Peringkat tidak sah" }, 400);
  if (!RAHSIA || !KATEGORI || !APP_URL) return json({ ralat: "Bayaran dalam talian belum dibuka" }, 503);

  const { data: profil } = await sb.from(P + "_guru").select("nama, telefon").eq("id", guru.id).maybeSingle();
  if (!profil?.nama) return json({ ralat: "Lengkapkan profil guru dahulu" }, 400);

  const { data: harga, error: eh } = await sb.rpc(P + "_harga", { p_guru: guru.id, p_peringkat: peringkat });
  if (eh || !harga) return json({ ralat: "Harga tidak dapat dikira" }, 500);

  /* Guna semula bil yang masih baharu, supaya tekan dua kali tidak cipta dua bil. */
  const { data: lama } = await sb.from(P + "_bayaran").select("billcode")
    .eq("guru", guru.id).eq("peringkat", peringkat).eq("status", "menunggu").eq("jumlah_sen", harga)
    .not("billcode", "is", null).gt("dicipta", new Date(Date.now() - 20 * 60e3).toISOString())
    .order("dicipta", { ascending: false }).limit(1).maybeSingle();
  if (lama?.billcode) return json({ url: BASE + "/" + lama.billcode, billcode: lama.billcode });

  const { data: baris, error: ei } = await sb.from(P + "_bayaran")
    .insert({ guru: guru.id, emel: guru.email ?? "", peringkat, jumlah_sen: harga })
    .select("id").single();
  if (ei) return json({ ralat: "Tidak dapat merekod bil" }, 500);

  const kembali = APP_URL.replace(/\/?$/, "/") + "?cikgu=1&bayar=1";
  const hasil = await toyyib("createBill", {
    userSecretKey: RAHSIA,
    categoryCode: KATEGORI,
    billName: bersih(PRODUK + " Premium", 30),
    billDescription: bersih(PERINGKAT[peringkat], 100),
    billPriceSetting: "1",
    billPayorInfo: "1",
    billAmount: String(harga),
    billReturnUrl: kembali,
    billCallbackUrl: FN_URL + "?cb=1",
    billExternalReferenceNo: baris.id,
    billTo: String(profil.nama).slice(0, 100),
    billEmail: guru.email ?? "",
    /* toyyibPay live menolak billPhone kosong; telefon guru adalah pilihan,
       jadi guna nombor sokongan jika guru belum isi. */
    billPhone: String(profil.telefon ?? "").replace(/\D/g, "") || env("TOYYIB_TELEFON", "60193686146"),
    billPaymentChannel: "0",
    /* "0" = caj FPX (RM1) dibayar oleh pembeli, ditunjuk oleh toyyibPay di halaman bayar. */
    billChargeToCustomer: "0",
    billExpiryDays: "1",
  }).catch((e) => ({ ralat: String(e.message ?? e) }));

  const kod = Array.isArray(hasil) ? hasil[0]?.BillCode : null;
  if (!kod) {
    console.error("createBill gagal", JSON.stringify(hasil).slice(0, 300));
    await sb.from(P + "_bayaran").update({ status: "gagal" }).eq("id", baris.id);
    return json({ ralat: "toyyibPay tidak dapat mencipta bil. Cuba sebentar lagi." }, 502);
  }
  await sb.from(P + "_bayaran").update({ billcode: kod }).eq("id", baris.id);
  return json({ url: BASE + "/" + kod, billcode: kod });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ ralat: "POST sahaja" }, 405);

  try {
    /* Callback toyyibPay */
    if (new URL(req.url).searchParams.get("cb") === "1") {
      const f = await req.formData();
      const g = (k: string) => String(f.get(k) ?? "");
      const jangka = createHash("md5").update(RAHSIA + g("status") + g("order_id") + g("refno") + "ok").digest("hex");
      if (g("hash") && g("hash") !== jangka) console.warn("hash callback tidak sepadan", g("billcode"));
      if (g("billcode")) console.log("callback", g("billcode"), JSON.stringify(await sahkan(g("billcode"))));
      return new Response("OK", { headers: CORS });
    }

    const guru = await guruDaripada(req);
    if (!guru) return json({ ralat: "Sila log masuk semula" }, 401);
    const body = await req.json().catch(() => ({}));

    if (body.aksi === "cipta") return await cipta(guru, String(body.peringkat ?? ""));
    if (body.aksi === "semak") {
      const billcode = String(body.billcode ?? "");
      const { data: milik } = await sb.from(P + "_bayaran").select("id").eq("billcode", billcode).eq("guru", guru.id).maybeSingle();
      if (!milik) return json({ status: "tiada" }, 404);
      return json(await sahkan(billcode));
    }
    return json({ ralat: "Aksi tidak dikenali" }, 400);
  } catch (e) {
    console.error(e);
    return json({ ralat: "Ralat pelayan" }, 500);
  }
});
