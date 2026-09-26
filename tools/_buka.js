/* Pembantu ujian: buka SEMUA bab untuk konteks pelayar ujian.
   Sejak 27 Sep 2026 hanya Bab 1-2 setiap tingkatan percuma (bebasBab), jadi alat audit
   yang memuatkan bab 3 ke atas melalui localStorage "jm-bab" akan dilencongkan ke Bab 1.
   Fungsi ini memintas index.html dalam konteks ujian sahaja dan menjadikan bebasBab()
   sentiasa benar. Pengeluaran tidak berubah. Service worker disekat supaya pintasan
   tidak dielak oleh cache. */
const RE = /function bebasBab\(id\)\{[^}]*\}/;
async function bukaSemua(ctx) {
  await ctx.route(/\/index(-uji)?\.html(\?.*)?$/, async route => {
    const balas = await route.fetch();
    let html = await balas.text();
    if (!RE.test(html)) throw new Error("bebasBab() tidak dijumpai dalam index.html");
    html = html.replace(RE, "function bebasBab(id){ return true; }");
    await route.fulfill({ response: balas, body: html });
  });
}
module.exports = { bukaSemua, RE };
