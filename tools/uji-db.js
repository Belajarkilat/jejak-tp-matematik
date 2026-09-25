/* Ujian hujung ke hujung pangkalan data Jejak TP Matematik (projek Supabase
   berasingan). Mencipta guru ujian, kelas, murid, menghantar percubaan,
   membaca papan, dan memeriksa RLS; kemudian MEMBERSIHKAN semuanya.

     node tools/uji-db.js

   Kunci dibaca daripada .env (tidak dicommit). Semua data ujian berawalan
   "uji-" dan dipadam pada akhir. */
const fs = require("fs");
const env = {};
fs.readFileSync(".env", "utf8").split(/\r?\n/).forEach(l => { const m = /^([A-Z_]+)=(.*)$/.exec(l); if (m) env[m[1]] = m[2]; });
const U = env.SUPABASE_URL, ANON = env.SUPABASE_ANON_KEY, SVC = env.SUPABASE_SERVICE_ROLE_KEY;
let gagal = 0;
const ok = (b, msg, x) => { console.log((b ? "✓ " : "✗ ") + msg + (b || x === undefined ? "" : "  -> " + JSON.stringify(x).slice(0, 160))); if (!b) gagal++; };
const j = async (r) => { const t = await r.text(); try { return JSON.parse(t); } catch (e) { return t; } };
const H = (kunci, jwt) => ({ apikey: kunci, Authorization: "Bearer " + (jwt || kunci), "Content-Type": "application/json", Prefer: "return=representation" });

(async () => {
  const emel = `uji-${Date.now()}@example.com`, kata = "Uji-" + Math.random().toString(36).slice(2, 10) + "A1!";
  let idGuru = null;
  try {
    /* 1. guru */
    let r = await fetch(U + "/auth/v1/admin/users", { method: "POST", headers: H(SVC), body: JSON.stringify({ email: emel, password: kata, email_confirm: true }) });
    const g = await j(r); idGuru = g.id; ok(!!idGuru, "cipta guru ujian", g);
    r = await fetch(U + "/auth/v1/token?grant_type=password", { method: "POST", headers: H(ANON), body: JSON.stringify({ email: emel, password: kata }) });
    const tok = await j(r); const jwt = tok.access_token; ok(!!jwt, "log masuk guru", tok);
    const HG = H(ANON, jwt);
    /* 2. profil guru + kelas */
    r = await fetch(U + "/rest/v1/jm_guru", { method: "POST", headers: { ...HG, Prefer: "resolution=merge-duplicates,return=representation" }, body: JSON.stringify({ id: idGuru, nama: "uji-guru", sekolah: "uji-sekolah", telefon: "", setuju_pemasaran: false }) });
    const guru = await j(r); ok(r.status < 300, "simpan profil guru", guru);
    r = await fetch(U + "/rest/v1/jm_kelas", { method: "POST", headers: HG, body: JSON.stringify({ nama: "uji-3 Amanah" }) });
    const kelasArr = await j(r); const kelas = Array.isArray(kelasArr) ? kelasArr[0] : null;
    ok(kelas && kelas.id && kelas.kod, "cipta kelas dan kod kelas dijana", kelasArr);
    /* 3. murid */
    r = await fetch(U + "/rest/v1/rpc/jm_guru_simpan_murid", { method: "POST", headers: HG, body: JSON.stringify({ p_kelas: kelas.id, p_murid: [{ no: "1", nama: "Aina", pin: "1234" }, { no: "2", nama: "Budi", pin: "4321" }] }) });
    ok(r.status < 300, "simpan senarai murid", await j(r));
    /* 4. murid masuk tanpa akaun: kod kelas + PIN */
    r = await fetch(U + "/rest/v1/rpc/jm_kelas_buka", { method: "POST", headers: H(ANON), body: JSON.stringify({ p_kod: kelas.kod }) });
    const buka = await j(r); ok(buka && (buka.id === kelas.id || buka.nama), "murid buka kelas dengan kod", buka);
    r = await fetch(U + "/rest/v1/rpc/jm_masuk", { method: "POST", headers: H(ANON), body: JSON.stringify({ p_kelas: kelas.id, p_no: "1", p_pin: "1234" }) });
    ok((await j(r)) === true, "PIN betul diterima");
    r = await fetch(U + "/rest/v1/rpc/jm_masuk", { method: "POST", headers: H(ANON), body: JSON.stringify({ p_kelas: kelas.id, p_no: "1", p_pin: "9999" }) });
    ok((await j(r)) === false, "PIN salah ditolak");
    /* 5. hantar percubaan bab Matematik */
    const soalan = [{ qid: "a1q1", betul: true }, { qid: "a1q2", betul: true }, { qid: "a1q3", betul: false }, { qid: "a1bos", betul: true }];
    r = await fetch(U + "/rest/v1/rpc/jm_simpan_cubaan", { method: "POST", headers: H(ANON), body: JSON.stringify({ p_bab: "m3b1", p_kelas: kelas.id, p_no: "1", p_kod: "1234", p_aras: 1, p_kini: { masa: Date.now(), betul: 3, jumlah: 3, bos: true, lulus: true, skor: 500, mod: "tenang", soalan: soalan }, p_karangan: null }) });
    const sim = await j(r); ok(r.status < 300 && sim && !sim.ralat, "hantar percubaan m3b1 hentian 1", sim);
    /* 6. papan (murid nampak bacaan sendiri melalui PIN) */
    r = await fetch(U + "/rest/v1/rpc/jm_papan", { method: "POST", headers: H(ANON), body: JSON.stringify({ p_bab: "m3b1", p_kelas: kelas.id, p_no: "1", p_pin: "1234" }) });
    const papan = await j(r); ok(r.status < 300 && papan, "papan skor dibaca", papan);
    /* 7. guru baca percubaan kelas sendiri (RLS) */
    r = await fetch(U + "/rest/v1/jm_cubaan?select=bab,aras,no&kelas=eq." + kelas.id, { headers: HG });
    const cub = await j(r); ok(Array.isArray(cub) && cub.length >= 1 && cub[0].bab === "m3b1", "guru nampak percubaan kelas sendiri", cub);
    /* 8. RLS: anon tidak boleh baca jadual */
    for (const t of ["jm_cubaan", "jm_murid", "jm_kelas", "jm_guru"]) {
      r = await fetch(U + "/rest/v1/" + t + "?select=*&limit=1", { headers: H(ANON) });
      const x = await j(r); ok(r.status === 401 || (Array.isArray(x) && x.length === 0), "anon tidak boleh baca " + t, x);
    }
    /* 9. id bab Sains ditolak */
    r = await fetch(U + "/rest/v1/rpc/jm_ping", { method: "POST", headers: H(ANON), body: JSON.stringify({ p_jenis: "buka", p_peranti: "abcd1234", p_bab: "t3b1" }) });
    ok(r.status < 300, "ping bab Sains tidak merosakkan (diabaikan)");
  } finally {
    /* pembersihan: padam guru (cascade) dan pastikan tiada baki */
    if (idGuru) {
      await fetch(U + "/auth/v1/admin/users/" + idGuru, { method: "DELETE", headers: H(SVC) });
      const baki = await j(await fetch(U + "/rest/v1/jm_kelas?select=id&nama=like.uji-*", { headers: H(SVC) }));
      if (Array.isArray(baki) && baki.length) { await fetch(U + "/rest/v1/jm_kelas?nama=like.uji-*", { method: "DELETE", headers: H(SVC) }); }
      const lagi = await j(await fetch(U + "/rest/v1/jm_kelas?select=id&nama=like.uji-*", { headers: H(SVC) }));
      ok(Array.isArray(lagi) && lagi.length === 0, "data ujian dibersihkan");
    }
  }
  console.log(gagal ? gagal + " ujian gagal" : "semua ujian DB lulus");
  process.exit(gagal ? 1 : 0);
})().catch(e => { console.error("ralat:", e.message); process.exit(1); });
