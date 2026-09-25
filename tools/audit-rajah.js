/* Audit rajah interaktif: setiap keadaan gelongsor dilukis dan melalui
   semakan rajah bina.js, bukan keadaan awal sahaja. Guna:
     node tools/audit-rajah.js            (semua bank sumber)
     node tools/audit-rajah.js --contoh   (widget contoh sahaja) */
const path = require("path"), fs = require("fs");
const JMI = require("../interaktif");
const { semakRajah } = require("../bina");
function auditSpek(nama, spec){
  const m = [];
  for(const k of JMI.semuaKeadaan(spec)){
    const v = Object.assign({}, spec, { awal: k.s, kunci: true, jenis: "interaktif" });
    semakRajah({ lampiran: { [nama + " " + JSON.stringify(k.s)]: v } }).forEach(x => m.push(x));
  }
  return m;
}
module.exports = { auditSpek };
if(require.main === module){
  const contoh = process.argv.includes("--contoh");
  let senarai = [];
  if(contoh){
    senarai = [
      ["kuasa2", { jenis:"interaktif", w:"kuasa", asas:2, n:3, nMaks:7, kapsyen:"Rajah 1 · x", alt:"xxxxxxxxxxxxxxxxxx" }],
      ["kuasa3", { jenis:"interaktif", w:"kuasa", asas:3, n:2, nMaks:5, kapsyen:"Rajah 1 · x", alt:"xxxxxxxxxxxxxxxxxx" }],
      ["lipat", { jenis:"interaktif", w:"lipat", tebal:0.1, nMaks:8, kapsyen:"Rajah 1 · x", alt:"xxxxxxxxxxxxxxxxxx" }],
      ["darab", { jenis:"interaktif", w:"hukum", mod:"darab", kapsyen:"Rajah 1 · x", alt:"xxxxxxxxxxxxxxxxxx" }],
      ["bahagi", { jenis:"interaktif", w:"hukum", mod:"bahagi", kapsyen:"Rajah 1 · x", alt:"xxxxxxxxxxxxxxxxxx" }],
      ["kuasa", { jenis:"interaktif", w:"hukum", mod:"kuasa", kapsyen:"Rajah 1 · x", alt:"xxxxxxxxxxxxxxxxxx" }],
      ["piawai", { jenis:"interaktif", w:"piawai", nombor:"0.000345", unit:"m", kapsyen:"Rajah 1 · x", alt:"xxxxxxxxxxxxxxxxxx" }],
      ["piawai2", { jenis:"interaktif", w:"piawai", nombor:"384400000", kapsyen:"Rajah 1 · x", alt:"xxxxxxxxxxxxxxxxxx" }],
      ["ab", { jenis:"interaktif", w:"ab", nombor:"0.030457", kapsyen:"Rajah 1 · x", alt:"xxxxxxxxxxxxxxxxxx" }],
      ["kompaun", { jenis:"interaktif", w:"kompaun", P:5000, r:4, n:1, tMaks:10, kapsyen:"Rajah 1 · x", alt:"xxxxxxxxxxxxxxxxxx" }],
      ["pinjaman", { jenis:"interaktif", w:"pinjaman", P:30000, r:3.5, tMaks:9, kapsyen:"Rajah 1 · x", alt:"xxxxxxxxxxxxxxxxxx" }],
      ["kad", { jenis:"interaktif", w:"kad", baki:3000, kadar:15, minPeratus:5, minRM:50, bMaks:12, kapsyen:"Rajah 1 · x", alt:"xxxxxxxxxxxxxxxxxx" }],
    ];
  } else {
    for(const f of fs.readdirSync("sumber").filter(f => /^m\d+b\d+\.js$/.test(f))){
      const bab = require(path.resolve("sumber", f));
      for(const [k, v] of Object.entries(bab.lampiran || {}))
        if(v && v.jenis === "interaktif") senarai.push([bab.id + ":" + k, v]);
    }
  }
  let gagal = 0;
  for(const [n, s] of senarai){
    const m = auditSpek(n, s);
    console.log((m.length ? "✗ " : "✓ ") + n + " (" + JMI.semuaKeadaan(s).length + " keadaan)");
    m.slice(0, 6).forEach(x => console.log("    " + x));
    gagal += m.length;
  }
  process.exit(gagal ? 1 : 0);
}
