/* Semak gaya pilihan jawapan: kesan isyarat yang membocorkan jawapan betul tanpa perlu faham.
   Murid yang pandai meneka boleh mendapat markah dengan mengelak 'sahaja', kata mutlak,
   atau memilih pilihan yang berlainan gaya. Skor yang tinggi tidak lagi membuktikan penguasaan.

   Peraturan (untuk soalan jenis pilih, dan banyak dengan hanya satu betul tidak dikira):
   1. sahaja   : >=2 pengganggu mengandungi "sahaja" tetapi jawapan betul tidak.
   2. mutlak   : >=2 pengganggu mengandungi kata mutlak (sentiasa, tidak pernah, semua, hanya,
                 mesti, tanpa) tetapi jawapan betul tidak.
   3. kurungan : >=2 pengganggu mengandungi kurungan penjelasan "( ... )" tetapi jawapan betul tidak.
   4. ya-tidak : sekurang-kurangnya 3 pilihan bermula Ya/Tidak/Betul/Salah dan jawapan betul
                 ialah satu-satunya yang berkutub itu (contoh 1 "Ya" lawan 3 "Tidak").
   Guna:  node tools/semak-gaya.js [m1b3 ...]   (tanpa hujah = semua bab)
   Keluar dengan kod 1 jika ada isyarat. Juga diimport oleh bina.js. */
const fs = require("fs"), path = require("path");
const strip = h => String(h).replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\s+/g, " ").trim();
const RE = {
  sahaja: /\bsahaja\b/i,
  mutlak: /\b(sentiasa|tidak pernah|semua|hanya|mesti|tanpa|tiada satu pun)\b/i,
  kurungan: /\(/
};
const kutub = t => /^(ya|betul)\b/i.test(t) ? "ya" : /^(tidak|salah|bukan)\b/i.test(t) ? "tidak" : null;

function gaya(bab) {
  const isu = [];
  for (const a of bab.aras) {
    a.soalan.concat([a.bos]).forEach((q, i) => {
      if (q.j !== "pilih") return;
      const ref = `${bab.id} H${a.n}${i === a.soalan.length ? " BOS" : " S" + (i + 1)}`;
      const ps = q.p.map(strip);
      for (const [nama, re] of Object.entries(RE)) {
        const ada = ps.map(p => re.test(p));
        const lain = ada.filter((_, j) => j !== q.b).filter(Boolean).length;
        if (lain >= 2 && !ada[q.b]) isu.push(`${ref}: isyarat "${nama}" (betul: ${ps[q.b].slice(0, 50)})`);
      }
      const k = ps.map(kutub);
      if (k.filter(Boolean).length >= 3 && k[q.b] && k.filter(x => x === k[q.b]).length === 1)
        isu.push(`${ref}: isyarat "ya-tidak" (betul satu-satunya "${k[q.b]}": ${ps[q.b].slice(0, 50)})`);
    });
  }
  return isu;
}
module.exports = { gaya };

if (require.main === module) {
  const dir = path.join(__dirname, "..", "sumber");
  const minta = process.argv.slice(2);
  const ids = minta.length ? minta : fs.readdirSync(dir).filter(f => /^m\db\d+\.js$/.test(f)).map(f => f.replace(".js", ""))
    .sort((a, b) => (+a[1] - +b[1]) || (+a.slice(3) - +b.slice(3)));
  let jum = 0;
  for (const id of ids) {
    const isu = gaya(require(path.join(dir, id + ".js")));
    isu.forEach(x => console.log(x)); jum += isu.length;
  }
  console.log(jum ? `\n${jum} isyarat gaya ditemui` : "tiada isyarat gaya");
  process.exit(jum ? 1 : 0);
}
