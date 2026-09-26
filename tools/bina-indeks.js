/* Menjana bab-indeks.js: metadata ringan (id, tingkatan, kod, tajuk) bagi SEMUA bab, tanpa soalan.
   Aplikasi memuat bank soalan satu bab sahaja pada satu masa (bank-<id>.js dan widget-<id>.js jika ada);
   senarai bab pada peta dan papan guru dibina daripada indeks ini. Dipanggil oleh bina.js.
     node tools/bina-indeks.js */
const fs = require("fs"), path = require("path");
function bina() {
  const akar = path.join(__dirname, "..");
  const ids = fs.readdirSync(path.join(akar, "sumber")).filter(f => /^m\db\d+\.js$/.test(f)).map(f => f.replace(".js", ""))
    .sort((a, b) => (+a[1] - +b[1]) || (+a.slice(3) - +b.slice(3)));
  const indeks = {};
  for (const id of ids) {
    const b = require(path.join(akar, "sumber", id + ".js"));
    indeks[id] = { id, tingkatan: b.tingkatan, kod: b.kod, tajuk: b.tajuk, subtajuk: b.subtajuk, widget: fs.existsSync(path.join(akar, "widget-" + id + ".js")) };
  }
  const isi = "/* DIJANA oleh tools/bina-indeks.js (dipanggil bina.js). Jangan sunting. */\nwindow.BAB_INDEKS = " + JSON.stringify(indeks) + ";\n";
  const fail = path.join(akar, "bab-indeks.js");
  if (!fs.existsSync(fail) || fs.readFileSync(fail, "utf8") !== isi) fs.writeFileSync(fail, isi, "utf8");
  return Object.keys(indeks).length;
}
module.exports = { bina };
if (require.main === module) console.log("bab-indeks.js:", bina(), "bab");
