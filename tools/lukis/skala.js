/* Rajah skala: alat pengukur dengan bacaan.

   Soalan "berapa bacaan alat ini" tidak boleh ditulis dalam teks tanpa
   membocorkan jawapannya, jadi rajah di sini benar-benar diperlukan.
   Penjana mengira kedudukan penanda daripada nilai bacaan, jadi bina.js
   boleh membandingkan jawapan yang ditulis tangan dengan `bacaan`.

   Alat: pembaris, silinder (penyukat), termometer, dail (ammeter/voltmeter). */
const A = require("./asas");

const LEBAR = 260;

/* ---------- pembaris ---------- */
function pembaris(spec){
  const dari = spec.dari == null ? 0 : spec.dari;
  const hingga = spec.hingga == null ? 10 : spec.hingga;
  const bacaan = spec.bacaan;
  if(!(bacaan > dari - 1e-9 && bacaan < hingga + 1e-9))
    throw new Error(`bacaan ${bacaan} di luar skala ${dari}-${hingga}`);
  const x0 = 22, x1 = LEBAR - 22;
  const y = 74, tinggiP = 40;
  const skala = (v) => x0 + ((v - dari) / (hingga - dari)) * (x1 - x0);
  let isi = A.kotak(x0, y, x1 - x0, tinggiP, { isi: "kuningLembut", garis: "garis2", bulat: 4 });
  const langkah = spec.langkah || 1;
  const kecil = spec.kecil || langkah / 10;
  for(let v = dari; v <= hingga + 1e-9; v += kecil){
    const besar = Math.abs(v / langkah - Math.round(v / langkah)) < 1e-6;
    const sederhana = !besar && Math.abs(v / (langkah / 2) - Math.round(v / (langkah / 2))) < 1e-6;
    isi += A.garis(skala(v), y, skala(v), y + (besar ? 15 : sederhana ? 10 : 6),
      { warna: "tinta3", tebal: besar ? 1.4 : 1 });
    if(besar) isi += A.teks(skala(v), y + 28, String(Math.round(v * 100) / 100), { saiz: 11.5, tengah: true, warna: "tinta2" });
  }
  /* Objek yang diukur, dari hujung 0 hingga bacaan. */
  if(spec.objek){
    isi += A.kotak(skala(dari), y - 26, skala(bacaan) - skala(dari), 20,
      { isi: "merahLembut", garis: "merah", bulat: 3 });
    isi += A.teks((skala(dari) + skala(bacaan)) / 2, y - 12, spec.objek, { saiz: 11.5, tengah: true, warna: "merah" });
  }
  isi += A.garis(skala(bacaan), y - 32, skala(bacaan), y + tinggiP + 4, { warna: "merah", tebal: 1.6, putus: "4 3" });
  isi += A.teks(LEBAR / 2, 20, spec.unit ? `Skala dalam ${spec.unit}` : "", { saiz: 11.5, tengah: true, warna: "tinta3" });
  return { isi, lebar: LEBAR, tinggi: 134 };
}

/* ---------- silinder penyukat ---------- */
function silinder(spec){
  const hingga = spec.hingga || 50;
  const bacaan = spec.bacaan;
  if(!(bacaan >= 0 && bacaan <= hingga)) throw new Error(`bacaan ${bacaan} di luar silinder 0-${hingga}`);
  const x = 96, l = 86, atas = 26, bawah = 232;
  const skala = (v) => bawah - (v / hingga) * (bawah - atas);
  let isi = "";
  /* Air dahulu, kemudian dinding, supaya garis dinding kekal nampak. */
  const yAir = skala(bacaan);
  isi += A.kotak(x, yAir, l, bawah - yAir, { isi: "kertas2", garis: "garis", bulat: 2 });
  isi += `<path d="M${x} ${atas} L${x} ${bawah} L${x + l} ${bawah} L${x + l} ${atas}" fill="none" stroke="${A.warna("garis2")}" stroke-width="2"></path>`;
  const langkah = spec.langkah || 10;
  for(let v = 0; v <= hingga + 1e-9; v += langkah / 2){
    const besar = Math.abs(v / langkah - Math.round(v / langkah)) < 1e-6;
    isi += A.garis(x, skala(v), x + (besar ? 16 : 9), skala(v), { warna: "tinta3", tebal: 1 });
    if(besar) isi += A.teks(x - 6, skala(v) + 4, String(v), { saiz: 11.5, kanan: true, warna: "tinta2" });
  }
  /* Meniskus: lengkung cekung, dibaca pada bahagian paling bawah. */
  isi += A.laluan(`M${x + 1} ${A.bulat(yAir - 5)} Q${x + l / 2} ${A.bulat(yAir + 7)} ${x + l - 1} ${A.bulat(yAir - 5)}`,
    { warna: "ungu", tebal: 2 });
  isi += A.garis(x + l + 4, yAir, x + l + 34, yAir, { warna: "merah", tebal: 1.5, putus: "4 3" });
  isi += A.teks(x + l + 38, yAir + 4, "baca di sini", { saiz: 11.5, warna: "merah" });
  isi += A.teks(x + l / 2, 16, spec.unit || "ml", { saiz: 11.5, tengah: true, warna: "tinta3" });
  return { isi, lebar: LEBAR, tinggi: 252 };
}

/* ---------- termometer ---------- */
function termometer(spec){
  const dari = spec.dari == null ? 0 : spec.dari;
  const hingga = spec.hingga == null ? 100 : spec.hingga;
  const bacaan = spec.bacaan;
  if(!(bacaan >= dari && bacaan <= hingga)) throw new Error(`bacaan ${bacaan} di luar termometer ${dari}-${hingga}`);
  const x = 128, l = 26, atas = 24, bawah = 208;
  const skala = (v) => bawah - ((v - dari) / (hingga - dari)) * (bawah - atas);
  let isi = "";
  isi += A.kotak(x, atas, l, bawah - atas + 6, { isi: "kertas2", garis: "garis2", bulat: 12 });
  isi += A.kotak(x + 6, skala(bacaan), l - 12, bawah - skala(bacaan) + 6, { isi: "merah", garis: "merah", bulat: 6 });
  isi += A.bulatan(x + l / 2, bawah + 20, 15, { isi: "merah", garis: "merah" });
  const langkah = spec.langkah || 10;
  for(let v = dari; v <= hingga + 1e-9; v += langkah / 2){
    const besar = Math.abs((v - dari) / langkah - Math.round((v - dari) / langkah)) < 1e-6;
    isi += A.garis(x - (besar ? 12 : 6), skala(v), x, skala(v), { warna: "tinta3", tebal: 1 });
    if(besar) isi += A.teks(x - 16, skala(v) + 4, String(Math.round(v)), { saiz: 11.5, kanan: true, warna: "tinta2" });
  }
  isi += A.garis(x + l + 4, skala(bacaan), x + l + 30, skala(bacaan), { warna: "merah", tebal: 1.5, putus: "4 3" });
  isi += A.teks(x + l + 34, skala(bacaan) + 4, "aras raksa", { saiz: 11.5, warna: "merah" });
  isi += A.teks(x + l / 2, 14, spec.unit || "°C", { saiz: 11.5, tengah: true, warna: "tinta3" });
  return { isi, lebar: LEBAR, tinggi: 248 };
}

/* ---------- dail (ammeter / voltmeter) ---------- */
function dail(spec){
  const hingga = spec.hingga || 5;
  const bacaan = spec.bacaan;
  if(!(bacaan >= 0 && bacaan <= hingga)) throw new Error(`bacaan ${bacaan} di luar dail 0-${hingga}`);
  const cx = LEBAR / 2, cy = 150, r = 104;
  let isi = A.laluan(`M${cx - r} ${cy} A${r} ${r} 0 0 1 ${cx + r} ${cy}`, { warna: "garis2", tebal: 2 });
  isi += A.laluan(`M${cx - r} ${cy} L${cx + r} ${cy}`, { warna: "garis2", tebal: 2 });
  const langkah = spec.langkah || 1;
  const sudut = (v) => Math.PI - (v / hingga) * Math.PI;
  for(let v = 0; v <= hingga + 1e-9; v += langkah / 2){
    const besar = Math.abs(v / langkah - Math.round(v / langkah)) < 1e-6;
    const s = sudut(v), dalam = besar ? r - 16 : r - 9;
    isi += A.garis(cx + Math.cos(s) * dalam, cy - Math.sin(s) * dalam,
      cx + Math.cos(s) * r, cy - Math.sin(s) * r, { warna: "tinta3", tebal: besar ? 1.4 : 1 });
    if(besar) isi += A.teks(cx + Math.cos(s) * (r - 30), cy - Math.sin(s) * (r - 30) + 4,
      String(Math.round(v * 100) / 100), { saiz: 11.5, tengah: true, warna: "tinta2" });
  }
  const s = sudut(bacaan);
  isi += A.garis(cx, cy, cx + Math.cos(s) * (r - 22), cy - Math.sin(s) * (r - 22),
    { warna: "merah", tebal: 2.4, hujungBulat: true });
  isi += A.bulatan(cx, cy, 5, { isi: "merah", garis: "merah" });
  isi += A.teks(cx, cy + 26, spec.label || "A", { saiz: 13, tengah: true, warna: "tinta2", tebal: true });
  return { isi, lebar: LEBAR, tinggi: 178 };
}

const alat = { pembaris, silinder, termometer, dail };

function lukis(spec){
  const f = alat[spec.alat];
  if(!f) throw new Error(`alat "${spec.alat}" tidak dikenali; ada: ${Object.keys(alat).join(", ")}`);
  const hasil = f(spec);
  return A.figura({
    lebar: hasil.lebar, tinggi: hasil.tinggi, isi: hasil.isi,
    alt: spec.alt, kapsyen: spec.kapsyen,
  });
}

module.exports = { lukis, LEBAR };
