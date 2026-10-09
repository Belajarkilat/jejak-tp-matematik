/* Senarai soalan pilih (satu jawapan) yang jawapan betulnya paling panjang atau paling pendek.
   Membantu memenuhi semakan bina.js: betul paling panjang <= 35%, betul paling pendek >= 10%.
     node tools/panjang-jawapan.js m5b3 */
const strip = h => String(h).replace(/<[^>]+>/g, "").trim();
const bab = require("../sumber/" + process.argv[2] + ".js");
let n = 0, panjang = 0, pendek = 0;
bab.aras.forEach(a => a.soalan.concat([a.bos]).forEach((q, i) => {
  if (q.j !== "pilih") return; n++;
  const L = q.p.map(x => strip(x).length), b = L[q.b], lain = L.filter((_, k) => k !== q.b);
  const tag = b > Math.max(...lain) ? "PANJANG" : b < Math.min(...lain) ? "pendek" : "";
  if (tag === "PANJANG") panjang++; if (tag === "pendek") pendek++;
  console.log(`H${a.n} ${i === a.soalan.length ? "BOS" : "S" + (i + 1)}  ${tag.padEnd(7)} [${L.join(", ")}] betul=${b}  ${strip(q.t).slice(0, 50)}`);
}));
console.log(`\n${n} soalan pilih: betul paling panjang ${panjang} (${Math.round(100 * panjang / n)}%), paling pendek ${pendek} (${Math.round(100 * pendek / n)}%)`);
