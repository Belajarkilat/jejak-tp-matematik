/* Graf garis dan graf palang.

   Dijana daripada data, jadi paksi, senggatan dan titik tidak boleh tidak
   sepadan dengan nombor yang disebut dalam soalan. bina.js boleh membaca
   `siri` untuk menyemak jawapan berangka.

   Nota: graf pertama dalam app ini (kitaran pernafasan t3b2) ditulis tangan
   dengan viewBox 560 lebar. Pada telefon 360px, kotak rajah hanya lebih
   kurang 272px, jadi teks 11px dalam viewBox itu dipaparkan pada 5.3px dan
   tidak terbaca. Penjana ini menggunakan 260 supaya paparan hampir 1:1. */
const A = require("./asas");

const LEBAR = 260;
const WARNA_SIRI = ["ungu", "merah", "hijau", "kuning"];

function julat(nilai, spec){
  let min = spec.yMin != null ? spec.yMin : Math.min(...nilai);
  let maks = spec.yMaks != null ? spec.yMaks : Math.max(...nilai);
  if(min === maks) maks = min + 1;
  return [min, maks];
}

function garisan(spec){
  const siri = spec.siri || [];
  if(!siri.length) throw new Error("graf perlu sekurang-kurangnya satu siri");
  const x = spec.x || [];
  siri.forEach(s => {
    if(s.y.length !== x.length) throw new Error(`siri "${s.label}" ada ${s.y.length} nilai, paksi x ada ${x.length}`);
  });
  const semua = siri.reduce((a, s) => a.concat(s.y), []);
  const [yMin, yMaks] = julat(semua, spec);

  /* Paksi kanan untuk siri yang unitnya berbeza. Tanpa ini, dua kuantiti
     seperti isi padu (L) dan tekanan (kPa) terpaksa dipaksa pada satu skala,
     yang menjadikan graf itu salah walaupun bentuknya betul. */
  const duaPaksi = !!spec.yKanan;
  const kiri = 40, kanan = LEBAR - (duaPaksi ? 42 : 12);
  const atas = 16;
  const adaPetunjuk = siri.length > 1 || !!spec.petunjuk;
  const bawah = 150;
  const px = (i) => kiri + (x.length === 1 ? 0 : (i / (x.length - 1)) * (kanan - kiri));
  const py = (v) => bawah - ((v - yMin) / (yMaks - yMin)) * (bawah - atas);
  const pyKanan = (v) => duaPaksi
    ? bawah - ((v - spec.yKanan.min) / (spec.yKanan.maks - spec.yKanan.min)) * (bawah - atas)
    : py(v);

  let isi = "";
  if(spec.fasa){
    const a = px(x.indexOf(spec.fasa.dari)), b = px(x.indexOf(spec.fasa.hingga));
    if(a < 0 || b < 0) throw new Error("fasa merujuk nilai x yang tiada dalam data");
    isi += A.kotak(a, atas, b - a, bawah - atas, { isi: "kuningLembut", garis: "kuningLembut", bulat: 0 });
    isi += A.teks((a + b) / 2, atas + 13, spec.fasa.label, { saiz: 11.5, tengah: true, warna: "tinta2", tebal: true });
  }
  /* Garis grid mendatar dahulu supaya lengkung berada di atasnya. */
  const bilGrid = spec.grid || 4;
  for(let g = 0; g <= bilGrid; g++){
    const v = yMin + (g / bilGrid) * (yMaks - yMin);
    isi += A.garis(kiri, py(v), kanan, py(v), { warna: "garis", tebal: 1 });
    isi += A.teks(kiri - 5, py(v) + 4, String(Math.round(v * 100) / 100), { saiz: 11.5, kanan: true, warna: "tinta3" });
  }
  isi += A.garis(kiri, atas, kiri, bawah, { warna: "garis2", tebal: 1.5 });
  isi += A.garis(kiri, bawah, kanan, bawah, { warna: "garis2", tebal: 1.5 });

  x.forEach((v, i) => {
    if(spec.setiap && i % spec.setiap) return;
    isi += A.teks(px(i), bawah + 15, String(v), { saiz: 11.5, tengah: true, warna: "tinta3" });
  });
  isi += A.teks((kiri + kanan) / 2, bawah + 31, spec.xLabel || "", { saiz: 11.5, tengah: true, warna: "tinta3" });

  if(duaPaksi){
    isi += A.garis(kanan, atas, kanan, bawah, { warna: "garis2", tebal: 1.5 });
    for(let g = 0; g <= bilGrid; g++){
      const v = spec.yKanan.min + (g / bilGrid) * (spec.yKanan.maks - spec.yKanan.min);
      isi += A.teks(kanan + 5, pyKanan(v) + 4, String(Math.round(v * 100) / 100), { saiz: 11.5, warna: "tinta3" });
    }
  }

  siri.forEach((s, k) => {
    const w = s.warna || WARNA_SIRI[k % WARNA_SIRI.length];
    const f = s.paksi === "kanan" ? pyKanan : py;
    const d = s.y.map((v, i) => `${i ? "L" : "M"}${A.bulat(px(i))} ${A.bulat(f(v))}`).join(" ");
    isi += A.laluan(d, { warna: w, tebal: 2.2, putus: k ? "6 4" : null });
    if(spec.titik) s.y.forEach((v, i) => { isi += A.bulatan(px(i), f(v), 2.6, { isi: w, garis: w }); });
  });

  let tinggi = bawah + 38;
  if(adaPetunjuk){
    siri.forEach((s, k) => {
      const w = s.warna || WARNA_SIRI[k % WARNA_SIRI.length];
      const y = tinggi + 4 + k * 16;
      isi += A.garis(kiri, y, kiri + 22, y, { warna: w, tebal: 2.2, putus: k ? "6 4" : null });
      isi += A.teks(kiri + 28, y + 4, s.label, { saiz: 11.5, warna: "tinta2" });
    });
    tinggi += 4 + siri.length * 16;
  }
  return { isi, lebar: LEBAR, tinggi: tinggi + 6 };
}

/* Palang mendatar: label di kiri, palang memanjang ke kanan.

   Ini bentuk yang betul apabila label kategori ialah frasa Melayu penuh
   seperti "Ventrikel kanan". Dalam palang menegak, setiap label dipusatkan
   pada palangnya sendiri, jadi slot selebar 52px pada telefon tidak mungkin
   memuatkan label 103px dan label itu melanggar label jirannya. Di sini
   setiap label ada barisnya sendiri, jadi panjangnya tidak pernah
   bertembung dengan label lain. */
function mendatar(spec){
  const bar = spec.bar || [];
  if(bar.length < 2) throw new Error("graf palang perlu sekurang-kurangnya dua palang");
  if(bar.length > 6) throw new Error("graf palang mendatar lebih enam palang jadi terlalu tinggi");
  const SAIZ = 11.5;
  const teksNilai = bar.map(b => String(b.nilai));
  const x0 = Math.ceil(Math.max(...bar.map(b => A.lebarTeks(b.label, SAIZ)))) + 10;
  const x1 = LEBAR - Math.ceil(Math.max(...teksNilai.map(t => A.lebarTeks(t, SAIZ)))) - 10;
  if(x1 - x0 < 70)
    throw new Error(`label graf palang mendatar terlalu panjang; tinggal ${Math.round(x1 - x0)}px untuk palang`);
  const maks = spec.yMaks != null ? spec.yMaks : Math.max(...bar.map(b => b.nilai));
  const tb = 20, jurang = 12, atas = 12;

  let isi = "";
  bar.forEach((b, i) => {
    const y = atas + i * (tb + jurang);
    const w = Math.max((b.nilai / maks) * (x1 - x0), 1.5);
    isi += A.teks(x0 - 6, y + tb / 2 + 4, b.label, { saiz: SAIZ, kanan: true, warna: "tinta2" });
    isi += A.kotak(x0, y, w, tb, { isi: b.warna || "ungu", garis: b.warna || "ungu", bulat: 3 });
    isi += A.teks(x0 + w + 5, y + tb / 2 + 4, teksNilai[i], { saiz: SAIZ, warna: "tinta2" });
  });
  const bawah = atas + bar.length * tb + (bar.length - 1) * jurang;
  isi += A.garis(x0, atas - 5, x0, bawah + 5, { warna: "garis2", tebal: 1.5 });
  isi += A.teks(LEBAR / 2, bawah + 26, spec.xLabel || "", { saiz: SAIZ, tengah: true, warna: "tinta3" });
  return { isi, lebar: LEBAR, tinggi: bawah + 36 };
}

function palang(spec){
  const bar = spec.bar || [];
  if(bar.length < 2) throw new Error("graf palang perlu sekurang-kurangnya dua palang");
  if(bar.length > 6) throw new Error("graf palang lebih enam palang jadi sempit pada telefon");
  /* Label yang lebih lebar daripada slotnya akan melanggar label jiran. */
  const slot = (LEBAR - 12 - 40) / bar.length;
  for(const b of bar){
    if(A.lebarTeks(b.label, 11.5) > slot)
      throw new Error(`label palang "${b.label}" selebar ${Math.round(A.lebarTeks(b.label, 11.5))}px melebihi slot ${Math.round(slot)}px; guna mod:"mendatar"`);
  }
  const [yMin, yMaks] = julat(bar.map(b => b.nilai), { yMin: 0, yMaks: spec.yMaks });
  const kiri = 40, kanan = LEBAR - 12, atas = 16, bawah = 150;
  const py = (v) => bawah - ((v - yMin) / (yMaks - yMin)) * (bawah - atas);
  const lebarSlot = (kanan - kiri) / bar.length;
  const lebarBar = Math.min(38, lebarSlot * 0.6);

  let isi = "";
  const bilGrid = spec.grid || 4;
  for(let g = 0; g <= bilGrid; g++){
    const v = yMin + (g / bilGrid) * (yMaks - yMin);
    isi += A.garis(kiri, py(v), kanan, py(v), { warna: "garis", tebal: 1 });
    isi += A.teks(kiri - 5, py(v) + 4, String(Math.round(v * 100) / 100), { saiz: 11.5, kanan: true, warna: "tinta3" });
  }
  bar.forEach((b, i) => {
    const cx = kiri + lebarSlot * (i + 0.5);
    isi += A.kotak(cx - lebarBar / 2, py(b.nilai), lebarBar, bawah - py(b.nilai),
      { isi: b.warna || "ungu", garis: b.warna || "ungu", bulat: 3 });
    isi += A.teks(cx, bawah + 15, b.label, { saiz: 11.5, tengah: true, warna: "tinta2" });
  });
  isi += A.garis(kiri, atas, kiri, bawah, { warna: "garis2", tebal: 1.5 });
  isi += A.garis(kiri, bawah, kanan, bawah, { warna: "garis2", tebal: 1.5 });
  isi += A.teks((kiri + kanan) / 2, bawah + 31, spec.xLabel || "", { saiz: 11.5, tengah: true, warna: "tinta3" });
  return { isi, lebar: LEBAR, tinggi: bawah + 40 };
}

function lukis(spec){
  const hasil = (spec.mod === "mendatar") ? mendatar(spec)
    : (spec.mod === "palang") ? palang(spec)
    : garisan(spec);
  return A.figura({
    lebar: hasil.lebar, tinggi: hasil.tinggi, isi: hasil.isi,
    alt: spec.alt, kapsyen: spec.kapsyen,
  });
}

module.exports = { lukis, LEBAR };
