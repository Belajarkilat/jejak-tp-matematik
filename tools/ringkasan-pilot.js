/* Ringkasan pilot: analisis item daripada percubaan PERTAMA setiap murid.
   Untuk Cikgu Syamil dan Hasfi: soalan mana paling ramai murid salah, bab
   mana paling sukar, dan berapa ramai murid benar-benar menggunakan app.

     node tools/ringkasan-pilot.js [--kelas "nama"] [--fail ringkasan.txt]

   Membaca projek Supabase Matematik dengan kunci service_role dalam .env
   (jangan jalankan pada peranti awam). Hanya rekod dibaca; tiada apa diubah. */
const fs = require("fs"), path = require("path");
const env = {}; fs.readFileSync(".env", "utf8").split(/\r?\n/).forEach(l => { const m = /^([A-Z_]+)=(.*)$/.exec(l); if (m) env[m[1]] = m[2]; });
const arg = k => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : null; };
const H = { apikey: env.SUPABASE_SERVICE_ROLE_KEY, Authorization: "Bearer " + env.SUPABASE_SERVICE_ROLE_KEY };
const get = async q => { const r = await fetch(env.SUPABASE_URL + "/rest/v1/" + q, { headers: H }); if (!r.ok) throw new Error(q + " -> HTTP " + r.status); return r.json(); };

(async () => {
  const kelas = await get("jm_kelas?select=id,nama,kod,dicipta");
  const murid = await get("jm_murid?select=kelas,no");
  const cubaan = await get("jm_cubaan?select=bab,kelas,no,aras,pertama,terbaik,kali,akhir&limit=100000");
  const tp = await get("jm_tp?select=kelas,no,bab,tp&limit=100000").catch(() => []);
  const filter = arg("--kelas");
  const idKelas = new Set(kelas.filter(k => !filter || k.nama.includes(filter)).map(k => k.id));
  const data = cubaan.filter(c => idKelas.has(c.kelas));
  const teks = q => String(q).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  const bank = {};
  for (const f of fs.readdirSync(".").filter(f => /^bank-m\d+b\d+\.js$/.test(f))) { global.window = { BANK: {} }; delete require.cache[path.resolve(f)]; require(path.resolve(f)); Object.assign(bank, global.window.BANK); }

  const baris = [];
  const P = (s = "") => baris.push(s);
  P("RINGKASAN PILOT JEJAK TP MATEMATIK  " + new Date().toISOString().slice(0, 10));
  P("=".repeat(60));
  const ramai = new Set(data.map(c => c.kelas + ":" + c.no));
  P(`Kelas: ${idKelas.size}   Murid berdaftar: ${murid.filter(m => idKelas.has(m.kelas)).length}   Murid yang sudah bermain: ${ramai.size}`);
  P(`Percubaan hentian direkod: ${data.length}   Jumlah percubaan (termasuk ulangan): ${data.reduce((n, c) => n + (c.kali || 0), 0)}`);
  const tenang = data.filter(c => c.pertama && c.pertama.mod === "tenang").length;
  P(`Percubaan pertama dalam Mod tenang: ${tenang}/${data.length}`);
  if (!data.length) { P(); P("Belum ada data. Jalankan semula selepas murid bermain."); finish(); return; }

  /* ikut bab dan hentian: kadar lulus percubaan pertama */
  P(); P("KADAR LULUS PERCUBAAN PERTAMA (bab / hentian)"); P("-".repeat(60));
  const kum = {};
  data.forEach(c => { const k = c.bab + " H" + c.aras; (kum[k] = kum[k] || { n: 0, lulus: 0 }); kum[k].n++; if (c.pertama && c.pertama.lulus) kum[k].lulus++; });
  Object.keys(kum).sort().forEach(k => P(`${k.padEnd(10)} ${String(kum[k].lulus).padStart(3)}/${String(kum[k].n).padEnd(3)} ${Math.round(100 * kum[k].lulus / kum[k].n)}%`));

  /* analisis item: soalan paling banyak dijawab salah pada percubaan pertama */
  const item = {};
  data.forEach(c => (c.pertama && c.pertama.soalan || []).forEach(s => {
    const k = c.bab + "|" + s.qid; (item[k] = item[k] || { n: 0, betul: 0 }); item[k].n++; if (s.betul) item[k].betul++;
  }));
  const senarai = Object.keys(item).map(k => { const [bab, qid] = k.split("|"); const m = /^a(\d)(q(\d+)|bos)$/.exec(qid) || []; const a = +m[1]; const idx = m[3] ? +m[3] - 1 : null;
    const b = bank[bab]; const q = b && b.aras[a - 1] ? (idx === null ? b.aras[a - 1].bos : b.aras[a - 1].soalan[idx]) : null;
    return { bab, qid, n: item[k].n, kadar: item[k].betul / item[k].n, t: q ? teks(q.t).slice(0, 90) : "(soalan tidak dijumpai)" }; })
    .filter(x => x.n >= 3).sort((x, y) => x.kadar - y.kadar);
  P(); P("SOALAN PALING SUKAR (percubaan pertama, sekurang-kurangnya 3 jawapan)"); P("-".repeat(60));
  if (!senarai.length) P("Belum cukup jawapan (perlu >= 3 murid setiap soalan).");
  senarai.slice(0, 12).forEach(x => P(`${Math.round(100 * x.kadar)}% betul (${x.n})  ${x.bab} ${x.qid}  ${x.t}`));
  P(); P("Soalan dengan kadar betul di bawah 30% patut disemak: mungkin terlalu sukar, tersalah faham, atau jawapan/rajah bermasalah.");
  P("Soalan dengan kadar betul 100% hampir tak membezakan murid; pertimbangkan menambah aras.");
  finish();
  function finish() {
    const t = baris.join("\n"); console.log(t);
    const f = arg("--fail"); if (f) { fs.writeFileSync(f, t, "utf8"); console.log("\nDisimpan: " + f); }
  }
})().catch(e => { console.error("ralat:", e.message); process.exit(1); });
