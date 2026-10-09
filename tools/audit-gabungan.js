/* Audit rajah interaktif bagi SEMUA gabungan kawalan (bukan satu kawalan pada satu masa).
   tools/audit-rajah.js mengubah satu gelongsor dari keadaan awal sahaja, jadi keadaan seperti
   "asas 2 DAN N = 40" boleh terlepas. Alat ini melukis hasil darab Cartes semua kawalan
   (had 4000 keadaan setiap rajah) dan menjalankan semakRajah() yang sama seperti bina.js.

     node tools/audit-gabungan.js m4b1 m4b2       (tanpa hujah = semua bab m4) */
const fs = require("fs"), path = require("path");
const JMI = require("../interaktif.js");
const { semakRajah } = require("../bina.js");

function gabungan(spec) {
  const wd = JMI.W[spec.w], s0 = JMI.keadaan(spec), kw = wd.kawalan(spec);
  let semua = [s0];
  for (const k of kw) {
    const baru = [];
    for (const s of semua) for (let v = k.min; v <= k.maks; v++) baru.push(Object.assign({}, s, { [k.k]: v }));
    semua = baru;
    if (semua.length > 4000) break;
  }
  return semua.slice(0, 4000);
}
function audit(nama, spec) {
  const m = [];
  for (const s of gabungan(spec)) {
    let isu;
    try { isu = semakRajah({ lampiran: { [nama + " " + JSON.stringify(s)]: Object.assign({}, spec, { awal: s, kunci: true }) } }); }
    catch (e) { isu = [nama + " " + JSON.stringify(s) + ": " + e.message]; }
    m.push(...isu);
  }
  return m;
}
module.exports = { audit, gabungan };

if (require.main === module) {
  const minta = process.argv.slice(2);
  const ids = minta.length ? minta : fs.readdirSync(path.join(__dirname, "..", "sumber")).filter(f => /^m4b\d+\.js$/.test(f)).map(f => f.slice(0, -3));
  let gagal = 0;
  for (const id of ids) {
    const bab = require(path.join(__dirname, "..", "sumber", id + ".js"));
    for (const [k, v] of Object.entries(bab.lampiran || {})) {
      if (!v || v.jenis !== "interaktif") continue;
      const m = audit(id + ":" + k, v);
      console.log((m.length ? "✗ " : "✓ ") + id + ":" + k + " (" + gabungan(v).length + " gabungan)");
      m.slice(0, 5).forEach(x => console.log("    " + x));
      gagal += m.length;
    }
  }
  process.exit(gagal ? 1 : 0);
}
