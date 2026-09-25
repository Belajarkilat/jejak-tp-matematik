/* Rajah sinar: pantulan dan pembiasan.

   DSKP KSSM Sains Tingkatan 1 menyebut kemahiran ini secara tersurat
   (8.4.2 melukis gambar rajah sinar pembiasan, dan melukis rajah sinar
   pantulan), dan ia tidak boleh diuji dengan teks sahaja.

   Sudut dikira, bukan dilukis dengan agakan: sudut pantulan disalin
   daripada sudut tuju, dan sudut biasan dikira dengan hukum Snell
   daripada indeks biasan yang diberi. Jadi rajah tidak boleh menunjukkan
   sesuatu yang bercanggah dengan jawapan soalan. */
const A = require("./asas");

const LEBAR = 260;
const SAIZ = 11.5;

const darjah = (d) => d * Math.PI / 180;

/* Lengkok penanda sudut antara sinar dan garis normal. */
function lengkokSudut(px, py, dariRad, hinggaRad, r){
  const x1 = px + Math.sin(dariRad) * r, y1 = py - Math.cos(dariRad) * r;
  const x2 = px + Math.sin(hinggaRad) * r, y2 = py - Math.cos(hinggaRad) * r;
  const besar = Math.abs(hinggaRad - dariRad) > Math.PI ? 1 : 0;
  const arah = hinggaRad > dariRad ? 1 : 0;
  return `<path d="M${A.bulat(x1)} ${A.bulat(y1)} A${r} ${r} 0 ${besar} ${arah} ${A.bulat(x2)} ${A.bulat(y2)}" ` +
    `fill="none" stroke="${A.warna("tinta3")}" stroke-width="1"></path>`;
}

function pantulan(spec){
  const i = spec.sudutTuju;
  if(!(i > 5 && i < 85)) throw new Error(`sudut tuju ${i} mesti antara 5 dan 85 darjah`);
  const px = LEBAR / 2, py = 148, L = 104;
  const ri = darjah(i);
  const hujungTuju = [px - Math.sin(ri) * L, py - Math.cos(ri) * L];
  const hujungPantul = [px + Math.sin(ri) * L, py - Math.cos(ri) * L];
  if(hujungTuju[0] < 8 || hujungPantul[0] > LEBAR - 8)
    throw new Error(`sudut tuju ${i} menjadikan sinar keluar dari rajah`);

  let isi = "";
  /* Cermin: garis tebal dengan lorekan di bawahnya. */
  isi += A.garis(16, py, LEBAR - 16, py, { warna: "tinta2", tebal: 2.5 });
  for(let x = 20; x < LEBAR - 16; x += 9) isi += A.garis(x, py, x - 6, py + 7, { warna: "garis2", tebal: 1 });
  isi += A.garis(px, py, px, py - L - 12, { warna: "tinta3", tebal: 1.2, putus: "5 4" });
  isi += A.teks(px + 5, py - L - 16, "Normal", { saiz: SAIZ, warna: "tinta3" });

  isi += A.garis(hujungTuju[0], hujungTuju[1], px, py, { warna: "merah", tebal: 2, panah: true });
  isi += A.garis(px, py, hujungPantul[0], hujungPantul[1], { warna: "ungu", tebal: 2, panah: true });
  isi += lengkokSudut(px, py, -ri, 0, 40);
  isi += lengkokSudut(px, py, 0, ri, 32);
  isi += A.teks(px - Math.sin(ri / 2) * 52, py - Math.cos(ri / 2) * 52, "i", { saiz: 13, tengah: true, warna: "merah", tebal: true });
  isi += A.teks(px + Math.sin(ri / 2) * 44, py - Math.cos(ri / 2) * 44, "r", { saiz: 13, tengah: true, warna: "ungu", tebal: true });
  isi += A.teks(16, py + 22, "Cermin satah", { saiz: SAIZ, warna: "tinta2" });
  isi += A.teks(LEBAR - 16, py + 22, `i = ${i}°`, { saiz: SAIZ, kanan: true, warna: "tinta2" });
  return { isi, lebar: LEBAR, tinggi: py + 32, jawapan: { sudutPantulan: i } };
}

function pembiasan(spec){
  const i = spec.sudutTuju;
  const n = spec.indeks || 1.5;
  if(!(i > 5 && i < 85)) throw new Error(`sudut tuju ${i} mesti antara 5 dan 85 darjah`);
  const sinR = Math.sin(darjah(i)) / n;
  if(sinR >= 1) throw new Error("pembiasan mustahil dengan sudut dan indeks itu");
  const r = Math.asin(sinR);
  const rDarjah = Math.round(Math.asin(sinR) * 180 / Math.PI);

  const px = LEBAR / 2, py = 112, L = 86;
  const ri = darjah(i);
  const mulaTuju = [px - Math.sin(ri) * L, py - Math.cos(ri) * L];
  const hujungBias = [px + Math.sin(r) * L, py + Math.cos(r) * L];
  if(mulaTuju[0] < 8) throw new Error(`sudut tuju ${i} menjadikan sinar keluar dari rajah`);

  let isi = "";
  /* Medium kedua dilorek supaya sempadan jelas. */
  isi += A.kotak(12, py, LEBAR - 24, 92, { isi: "kertas2", garis: "garis", bulat: 4 });
  isi += A.garis(12, py, LEBAR - 12, py, { warna: "tinta2", tebal: 2 });
  /* Garis normal bermula di bawah label, bukan di atasnya: pada y = 8 baseline
     teks, bahagian atas huruf "N" keluar daripada viewBox dan terpotong. */
  isi += A.garis(px, py - L - 2, px, py + L + 6, { warna: "tinta3", tebal: 1.2, putus: "5 4" });
  isi += A.teks(px + 5, py - L - 6, "Normal", { saiz: SAIZ, warna: "tinta3" });

  isi += A.garis(mulaTuju[0], mulaTuju[1], px, py, { warna: "merah", tebal: 2, panah: true });
  isi += A.garis(px, py, hujungBias[0], hujungBias[1], { warna: "ungu", tebal: 2, panah: true });
  isi += lengkokSudut(px, py, -ri, 0, 34);
  isi += A.teks(px - Math.sin(ri / 2) * 46, py - Math.cos(ri / 2) * 46, "i", { saiz: 13, tengah: true, warna: "merah", tebal: true });
  /* Sudut biasan diukur dari normal di bawah sempadan. */
  const x1 = px + Math.sin(r) * 30, y1 = py + Math.cos(r) * 30;
  isi += `<path d="M${A.bulat(px)} ${A.bulat(py + 30)} A30 30 0 0 0 ${A.bulat(x1)} ${A.bulat(y1)}" fill="none" stroke="${A.warna("tinta3")}" stroke-width="1"></path>`;
  isi += A.teks(px + Math.sin(r / 2) * 44, py + Math.cos(r / 2) * 44 + 4, "r", { saiz: 13, tengah: true, warna: "ungu", tebal: true });

  isi += A.teks(18, py - 8, spec.atas || "Udara", { saiz: SAIZ, warna: "tinta2" });
  isi += A.teks(18, py + 18, spec.bawah || "Kaca", { saiz: SAIZ, warna: "tinta2" });
  isi += A.teks(LEBAR - 16, py + L + 24, `i = ${i}° · r = ${rDarjah}°`, { saiz: SAIZ, kanan: true, warna: "tinta2" });
  return { isi, lebar: LEBAR, tinggi: py + L + 34, jawapan: { sudutBiasan: rDarjah } };
}

function lukis(spec){
  const mod = spec.mod || "pantulan";
  const hasil = mod === "pantulan" ? pantulan(spec)
    : mod === "pembiasan" ? pembiasan(spec)
    : (() => { throw new Error(`mod sinar "${mod}" tidak dikenali`); })();
  return A.figura({
    lebar: hasil.lebar, tinggi: hasil.tinggi, isi: hasil.isi,
    alt: spec.alt, kapsyen: spec.kapsyen,
  });
}

module.exports = { lukis, LEBAR };
