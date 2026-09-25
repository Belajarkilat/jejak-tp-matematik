/* Pemantau pergeseran antara Jejak TP Sains (teras) dan Jejak TP Matematik.

   Kedua-dua app bermula daripada index.html yang sama. Setiap pembaikan
   dalam Sains yang tidak disalin ke Matematik (atau sebaliknya) ialah
   pergeseran. Skrip ini melaporkan saiz perbezaan supaya ia tidak membesar
   tanpa disedari.

     node tools/beza-teras.js [laluan/ke/cikgunani/index.html]

   Untuk menyalin pembaikan Sains ke Matematik: lihat ARKITEKTUR.md. */
const { execFileSync } = require("child_process");
const fs = require("fs");
const sains = process.argv[2] || "../cikgunani/index.html";
if (!fs.existsSync(sains)) { console.error("index.html Sains tidak dijumpai: " + sains); process.exit(1); }
let stat;
try { stat = execFileSync("git", ["diff", "--no-index", "--numstat", sains, "index.html"], { encoding: "utf8" }); }
catch (e) { stat = e.stdout || ""; }          /* git diff --no-index keluar dengan 1 apabila ada beza */
const [tambah, buang] = (stat.trim().split(/\s+/) || []).map(Number);
const jumlahSains = fs.readFileSync(sains, "utf8").split("\n").length;
const jumlahMat = fs.readFileSync("index.html", "utf8").split("\n").length;
console.log(`index.html Sains: ${jumlahSains} baris   Matematik: ${jumlahMat} baris`);
console.log(`Perbezaan: +${tambah} / -${buang} baris (${Math.round(100 * (tambah + buang) / jumlahSains)}% daripada teras)`);
console.log("Fail tambahan Matematik di luar index.html: interaktif.js, muzik.js, conteng.js, akses.js, math-ext.css, sw.js, konfig.js");
if (tambah + buang > 1500) console.log("AMARAN: pergeseran besar. Pertimbangkan mengekstrak perubahan ke fail luaran atau teras kongsi (ARKITEKTUR.md).");
