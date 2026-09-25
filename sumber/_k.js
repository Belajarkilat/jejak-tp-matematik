/* Pembantu untuk sumber bab Matematik. Fail berawalan _ diabaikan oleh bina.js.
   Nombor dalam pilihan jawapan dikira di sini, bukan ditaip tangan, supaya
   pilihan yang mengandungi hasil pengiraan tidak boleh tersilap aritmetik. */
const s = (a, n) => `${a}<sup>${n}</sup>`;
const kuasa = (a, n) => Math.pow(a, n);
module.exports = { s, kuasa };

/* Format ringgit: RM1 200 (bulat) atau RM444.64 (dua tempat perpuluhan). */
const rm = (n) => {
  const bulat = Math.abs(n - Math.round(n)) < 1e-9;
  const t = (bulat ? Math.round(n) : Math.round(n * 100) / 100).toFixed(bulat ? 0 : 2);
  const [a, b] = t.split(".");
  return "RM" + a.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + (b ? "." + b : "");
};
module.exports.rm = rm;
