/* Asas untuk semua penjana rajah.

   Rajah dalam app ini TIDAK ditulis sebagai SVG dengan tangan. Sumber bab
   hanya menyimpan spesifikasi (objek biasa), dan bina.js memanggil penjana
   di sini untuk menghasilkan SVG. Sebabnya tiga:

   1. Spesifikasi boleh dibaca dan disemak cikgu; SVG satu baris 3KB tidak.
   2. Penjana boleh mengira semula jawapan daripada geometri, jadi bina.js
      dapat menolak jawapan tangan yang tidak sepadan dengan rajah.
   3. Semua rajah mewarisi peraturan yang sama: warna tema, saiz fon minimum,
      dan teks yang tidak bertindih.

   PERATURAN WARNA: guna nama warna logik sahaja (lihat WARNA di bawah), yang
   menjadi var(--...) CSS. Warna tetap seperti #000 akan lesap dalam tema
   gelap, dan bina.js menolaknya. */

/* Nama logik -> pemboleh ubah CSS yang sudah wujud dalam index.html. */
const WARNA = {
  garis: "var(--line)",
  garis2: "var(--line2)",
  tinta: "var(--ink)",
  tinta2: "var(--ink2)",
  tinta3: "var(--ink3)",
  kertas: "var(--surface)",
  kertas2: "var(--surface2)",
  merah: "var(--arteri)",
  merahLembut: "var(--arteri-soft)",
  ungu: "var(--vena)",
  hijau: "var(--teal)",
  hijauLembut: "var(--teal-soft)",
  kuning: "var(--amber)",
  kuningLembut: "var(--amber-soft)",
  lembayung: "var(--gen)",
  lembayungLembut: "var(--gen-soft)",
};

const FON = "DM Mono,monospace";
const FON_MIN = 11;          /* di bawah ini tidak terbaca pada telefon */

/* Anggaran lebar teks DM Mono: fon monoruang, jadi lebar = aksara x 0.6 x saiz.
   Digunakan untuk menyemak teks muat dalam kotak sebelum SVG ditulis. */
function lebarTeks(teks, saiz){
  return String(teks).length * saiz * 0.6;
}

function esc(t){
  return String(t)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function warna(nama){
  if(WARNA[nama]) return WARNA[nama];
  throw new Error(`warna "${nama}" tidak dikenali; guna nama logik dalam tools/lukis/asas.js`);
}

function teks(x, y, isi, o){
  o = o || {};
  const saiz = o.saiz || 12;
  if(saiz < FON_MIN) throw new Error(`teks "${isi}" saiz ${saiz}px, minimum ${FON_MIN}px`);
  const bit = [
    `x="${bulat(x)}"`, `y="${bulat(y)}"`,
    `font-family="${FON}"`, `font-size="${saiz}"`,
    `fill="${warna(o.warna || "tinta2")}"`,
  ];
  if(o.tengah) bit.push('text-anchor="middle"');
  if(o.kanan) bit.push('text-anchor="end"');
  if(o.tebal) bit.push('font-weight="700"');
  return `<text ${bit.join(" ")}>${esc(isi)}</text>`;
}

/* Kepala anak panah dilukis sebagai segi tiga biasa, bukan <marker>.

   Dulu setiap rajah membawa <marker id="panah"> sendiri. Sebaik sahaja dua
   rajah muncul pada halaman yang sama - galeri audit, dan Mod Semak yang
   memaparkan lampiran bagi setiap soalan - semua url(#panah) merujuk id
   yang pertama dalam dokumen, dan Chrome langsung tidak melukis kepala
   panah itu. Rajah tetap nampak kemas, cuma setiap panah bertukar menjadi
   garis pendek tanpa arah, jadi rajah proses kehilangan maknanya tanpa
   sebarang amaran. Segi tiga sebaris tidak boleh bertembung dengan apa-apa. */
function kepalaPanah(x, y, dx, dy, o){
  const jarak = Math.hypot(dx, dy) || 1;
  const ux = dx / jarak, uy = dy / jarak;
  const tebal = o.tebal || 1.5;
  const panjang = tebal * 5, separuh = tebal * 2.4;
  const bx = x - ux * panjang, by = y - uy * panjang;
  return `<path d="M${bulat(x)} ${bulat(y)} ` +
    `L${bulat(bx - uy * separuh)} ${bulat(by + ux * separuh)} ` +
    `L${bulat(bx + uy * separuh)} ${bulat(by - ux * separuh)} z" ` +
    `fill="${warna(o.warna || "garis2")}"></path>`;
}

function garis(x1, y1, x2, y2, o){
  o = o || {};
  const bit = [
    `x1="${bulat(x1)}"`, `y1="${bulat(y1)}"`, `x2="${bulat(x2)}"`, `y2="${bulat(y2)}"`,
    `stroke="${warna(o.warna || "garis2")}"`, `stroke-width="${o.tebal || 1.5}"`,
  ];
  if(o.putus) bit.push(`stroke-dasharray="${o.putus}"`);
  if(o.hujungBulat) bit.push('stroke-linecap="round"');
  return `<line ${bit.join(" ")}></line>` +
    (o.panah ? kepalaPanah(x2, y2, x2 - x1, y2 - y1, o) : "");
}

function kotak(x, y, l, t, o){
  o = o || {};
  const bit = [
    `x="${bulat(x)}"`, `y="${bulat(y)}"`, `width="${bulat(l)}"`, `height="${bulat(t)}"`,
    `rx="${o.bulat == null ? 8 : o.bulat}"`,
    `fill="${o.isi ? warna(o.isi) : "none"}"`,
    `stroke="${warna(o.garis || "garis2")}"`, `stroke-width="${o.tebal || 1.5}"`,
  ];
  if(o.putus) bit.push(`stroke-dasharray="${o.putus}"`);
  return `<rect ${bit.join(" ")}></rect>`;
}

function bulatan(cx, cy, r, o){
  o = o || {};
  return `<circle cx="${bulat(cx)}" cy="${bulat(cy)}" r="${bulat(r)}" ` +
    `fill="${o.isi ? warna(o.isi) : "none"}" stroke="${warna(o.garis || "garis2")}" ` +
    `stroke-width="${o.tebal || 1.5}"${o.putus ? ` stroke-dasharray="${o.putus}"` : ""}></circle>`;
}

function laluan(d, o){
  o = o || {};
  const bit = [
    `d="${d}"`, `fill="${o.isi ? warna(o.isi) : "none"}"`,
    `stroke="${warna(o.warna || "garis2")}"`, `stroke-width="${o.tebal || 2}"`,
    'stroke-linejoin="round"',
  ];
  if(o.putus) bit.push(`stroke-dasharray="${o.putus}"`);
  let s = `<path ${bit.join(" ")}></path>`;
  if(o.panah){
    /* Arah di hujung lengkung ialah tangen, iaitu dari titik kawalan
       terakhir ke titik akhir. Dua pasangan koordinat terakhir dalam d
       sudah memberikannya, bagi garis lurus mahupun lengkung Q. */
    const ttk = (d.match(/-?[0-9.]+\s+-?[0-9.]+/g) || []).map(t => t.split(/\s+/).map(Number));
    if(ttk.length < 2) throw new Error("laluan berpanah perlu sekurang-kurangnya dua titik");
    const [px, py] = ttk[ttk.length - 2], [x, y] = ttk[ttk.length - 1];
    s += kepalaPanah(x, y, x - px, y - py, o);
  }
  return s;
}

function bulat(n){
  return Math.round(Number(n) * 10) / 10;
}

/* Bungkus isi SVG menjadi <figure> yang sudah bergaya dalam index.html. */
function figura(o){
  if(!o.alt || o.alt.length < 15) throw new Error("rajah perlu aria-label yang menerangkan");
  if(!o.kapsyen) throw new Error("rajah perlu kapsyen");
  const svg =
    `<svg viewBox="0 0 ${o.lebar} ${o.tinggi}" role="img" aria-label="${esc(o.alt)}">` +
    o.isi + "</svg>";
  return `<figure class="figure">${svg}<figcaption>${esc(o.kapsyen)}</figcaption></figure>`;
}

module.exports = {
  WARNA, FON, FON_MIN,
  esc, warna, teks, garis, kotak, bulatan, laluan, kepalaPanah, bulat,
  lebarTeks, figura,
};
