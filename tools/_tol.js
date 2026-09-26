/* Dasar toleransi jawapan nombor (27 Sep 2026).

   Sebelum ini toleransi ditulis tangan dalam sumber dan terlalu longgar: soalan yang
   meminta "2 tempat perpuluhan" menerima beza satu digit akhir (tol 0.01), dan sesetengah
   jawapan integer menerima ±0.5. Pembundaran salah jadi tidak kelihatan.

   Kini bina.js mengira toleransi daripada soalan itu sendiri:
   - "N tempat perpuluhan" -> setengah unit digit akhir (0.5 x 10^-N): hanya nilai yang
     dibundar dengan betul diterima.
   - "N angka bererti"    -> setengah unit angka bererti terakhir jawapan.
   - selain itu           -> setengah unit digit terakhir jawapan (integer: 0.001).
   Toleransi tulisan tangan dalam sumber hanya dipakai jika lebih KETAT daripada dasar ini. */
const strip = h => String(h).replace(/<[^>]+>/g, "").replace(/&[a-z]+;/g, " ").replace(/\s+/g, " ").trim();
const EPS = 1 + 1e-9;

function tempatDiminta(t) {
  const m = /(\d+)\s*tempat\s*perpuluhan/i.exec(t);
  return m ? +m[1] : null;
}
function angkaBererti(t) {
  const m = /(\d+)\s*angka\s*bererti/i.exec(t);
  return m ? +m[1] : null;
}
function tempatDalam(n) {
  if (Number.isInteger(n)) return 0;
  const s = String(n);
  if (/e-/i.test(s)) return Math.min(12, +s.split(/e-/i)[1] + (s.split(/e-/i)[0].split(".")[1] || "").length);
  return Math.min(12, (s.split(".")[1] || "").length);
}
function tolBaharu(q) {
  const t = strip(q.t);
  const asal = typeof q.tol === "number" && q.tol > 0 ? q.tol : Infinity;
  let dasar;
  const dp = tempatDiminta(t), sf = angkaBererti(t);
  if (dp !== null) dasar = 0.5 * Math.pow(10, -dp);
  else if (sf !== null && q.b !== 0) {
    const kuasa = Math.floor(Math.log10(Math.abs(q.b)));
    dasar = 0.5 * Math.pow(10, kuasa - sf + 1);
  } else if (Number.isInteger(q.b)) dasar = 0.001;
  else dasar = 0.5 * Math.pow(10, -tempatDalam(q.b));
  return +(Math.min(asal, dasar) * EPS).toPrecision(12);
}
module.exports = { tolBaharu, tempatDiminta, angkaBererti };
