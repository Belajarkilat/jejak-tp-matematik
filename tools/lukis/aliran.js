/* Rajah aliran: kotak berlabel disambung anak panah.

   Ini jenis rajah paling berguna dalam Sains menengah rendah kerana ia
   menerangkan PROSES, dan proses itulah yang ditanya dalam kebanyakan
   soalan TP1-TP2: laluan udara, arka refleks, edaran darah, kitar air,
   siratan makanan, kitar hidup bintang, pengekstrakan logam.

   Tiga mod:
     turun    - rantai menegak, satu kotak satu baris (laluan/proses)
     siratan  - kotak pada grid dengan panah antara mana-mana kotak (siratan makanan)
     kitar    - empat kotak mengelilingi bulatan (kitar semula jadi)

   LEBAR 260 bukan pilihan rawak: pada telefon 360px, kotak rajah hanya
   lebih kurang 272px, jadi viewBox yang lebih lebar akan mengecilkan teks
   sehingga tidak terbaca. 260 memberi paparan hampir 1:1. */
const A = require("./asas");

const LEBAR = 260;
const SAIZ = 12;
const TEPI = 6;

function pecahBaris(teks, lebarKotak, saiz){
  /* 11px pelapik: cukup ruang bernafas di tepi kotak, tetapi masih
     membenarkan label sembilan aksara seperti "Vertebrat" dalam lajur tiga. */
  const muat = Math.floor((lebarKotak - 11) / (saiz * 0.6));
  const kata = String(teks).split(/\s+/);
  const baris = [];
  let kini = "";
  for(const k of kata){
    if(!kini) { kini = k; continue; }
    if((kini + " " + k).length <= muat) kini += " " + k;
    else { baris.push(kini); kini = k; }
  }
  if(kini) baris.push(kini);
  for(const b of baris){
    if(b.length > muat) throw new Error(`label "${b}" terlalu panjang untuk kotak ${lebarKotak}px`);
  }
  return baris;
}

function kotakBerlabel(x, y, l, t, label, o){
  o = o || {};
  const baris = pecahBaris(label, l, SAIZ);
  const mula = y + t / 2 - ((baris.length - 1) * (SAIZ + 3)) / 2 + SAIZ * 0.36;
  let s = A.kotak(x, y, l, t, { isi: o.isi || "kertas2", garis: o.garis || "garis2", bulat: o.bulat });
  baris.forEach((b, i) => {
    s += A.teks(x + l / 2, mula + i * (SAIZ + 3), b,
      { saiz: SAIZ, tengah: true, warna: o.tinta || "tinta2", tebal: o.tebal });
  });
  return s;
}

function tinggiKotak(label, lebarKotak){
  return pecahBaris(label, lebarKotak, SAIZ).length === 1 ? 34 : 34 + SAIZ + 3;
}

/* ---------- mod turun ---------- */
function turun(spec){
  const nod = spec.nod || [];
  if(nod.length < 2) throw new Error("aliran turun perlu sekurang-kurangnya dua nod");
  if(nod.length > 6) throw new Error("aliran turun lebih enam nod jadi terlalu tinggi untuk telefon");
  const l = LEBAR - TEPI * 2;
  const x = TEPI;
  const jurang = 22;
  let y = 4;
  let isi = "";
  nod.forEach((n, i) => {
    const label = typeof n === "string" ? n : n.label;
    const gaya = typeof n === "string" ? {} : n;
    const t = tinggiKotak(label, l);
    isi += kotakBerlabel(x, y, l, t, label, {
      isi: gaya.isi || "kertas2", garis: gaya.garis || "garis2",
      tinta: gaya.tinta, tebal: gaya.tebal,
    });
    y += t;
    if(i < nod.length - 1){
      isi += A.garis(LEBAR / 2, y + 3, LEBAR / 2, y + jurang - 4,
        { panah: true, warna: gaya.panah || "ungu", tebal: 2 });
      if(gaya.nota){
        isi += A.teks(LEBAR / 2 + 8, y + jurang / 2 + 4, gaya.nota, { saiz: 11.5, warna: "tinta3" });
      }
      y += jurang;
    }
  });
  return { isi, lebar: LEBAR, tinggi: y + 4 };
}

/* ---------- mod siratan ---------- */
/* nod: [{id, label, x, y}] dengan x,y dalam unit grid 0..3.
   panah: [["a","b"], ...] bermaksud tenaga mengalir a -> b (a dimakan oleh b). */
function siratan(spec){
  const nod = spec.nod || [];
  const panah = spec.panah || [];
  if(nod.length < 3) throw new Error("siratan perlu sekurang-kurangnya tiga nod");
  const lajur = Math.max(...nod.map(n => n.x)) + 1;
  const bar = Math.max(...nod.map(n => n.y)) + 1;
  const lk = Math.floor((LEBAR - TEPI * 2 - (lajur - 1) * 10) / lajur);
  const tk = 34;
  const jurangY = 34;
  const peta = {};
  let isi = "";
  nod.forEach(n => {
    const x = TEPI + n.x * (lk + 10);
    const y = 4 + n.y * (tk + jurangY);
    peta[n.id] = { x, y, l: lk, t: tk, cx: x + lk / 2, cy: y + tk / 2 };
    isi += kotakBerlabel(x, y, lk, tk, n.label, { isi: n.isi || "kertas2" });
  });
  panah.forEach(([a, b]) => {
    const p = peta[a], q = peta[b];
    if(!p || !q) throw new Error(`panah merujuk nod yang tiada: ${a} -> ${b}`);
    /* Panah dilukis dari tepi kotak, bukan dari tengahnya, supaya ia tidak
       masuk ke dalam teks. */
    const dx = q.cx - p.cx, dy = q.cy - p.cy;
    const jarak = Math.hypot(dx, dy) || 1;
    const tolakP = (Math.abs(dy) > Math.abs(dx) ? p.t / 2 : p.l / 2) + 2;
    const tolakQ = (Math.abs(dy) > Math.abs(dx) ? q.t / 2 : q.l / 2) + 6;
    isi += A.garis(
      p.cx + (dx / jarak) * tolakP, p.cy + (dy / jarak) * tolakP,
      q.cx - (dx / jarak) * tolakQ, q.cy - (dy / jarak) * tolakQ,
      { panah: true, warna: "ungu", tebal: 1.8 });
  });
  return { isi, lebar: LEBAR, tinggi: 4 + bar * tk + (bar - 1) * jurangY + 4, peta };
}

/* ---------- mod kitar ---------- */
function kitar(spec){
  const nod = spec.nod || [];
  if(nod.length !== 4) throw new Error("aliran kitar perlu tepat empat nod");
  const lk = 104, tk = 40;
  const tinggi = 230;
  const cx = LEBAR / 2, cy = tinggi / 2;
  const jejariX = 68, jejariY = 72;
  const pos = [
    { x: cx - lk / 2, y: cy - jejariY - tk / 2 },
    { x: cx + jejariX - lk / 2, y: cy - tk / 2 },
    { x: cx - lk / 2, y: cy + jejariY - tk / 2 },
    { x: cx - jejariX - lk / 2, y: cy - tk / 2 },
  ];
  let isi = "";
  /* Lengkok penghubung dilukis dahulu supaya kotak berada di atasnya.

     Lengkok itu dipotong pada t = 0.28 hingga 0.72 supaya kedua-dua
     hujungnya berada di ruang terbuka antara kotak. Kalau ia dibiar
     bermula dan berakhir di tengah kotak, kepala anak panah tertimbus di
     bawah kotak dan kitaran kehilangan arahnya. */
  const lerp = (p, q, t) => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
  for(let i = 0; i < 4; i++){
    const a = pos[i], b = pos[(i + 1) % 4];
    const P0 = [a.x + lk / 2, a.y + tk / 2];
    const P2 = [b.x + lk / 2, b.y + tk / 2];
    const P1 = [cx + (P0[0] + P2[0] - 2 * cx) * 0.78, cy + (P0[1] + P2[1] - 2 * cy) * 0.78];
    const t0 = 0.28, t1 = 0.72;
    const pada = (t) => lerp(lerp(P0, P1, t), lerp(P1, P2, t), t);
    const Q0 = pada(t0), Q2 = pada(t1);
    /* Titik kawalan bagi keratan [t0, t1] sesuatu lengkung kuadratik. */
    const Q1 = lerp(lerp(P0, P1, t0), lerp(P1, P2, t0), t1);
    isi += A.laluan(`M${A.bulat(Q0[0])} ${A.bulat(Q0[1])} Q${A.bulat(Q1[0])} ${A.bulat(Q1[1])} ${A.bulat(Q2[0])} ${A.bulat(Q2[1])}`,
      { warna: "ungu", tebal: 1.8, panah: true });
  }
  nod.forEach((n, i) => {
    const label = typeof n === "string" ? n : n.label;
    const warnaIsi = typeof n === "string" ? "kertas" : (n.isi || "kertas");
    isi += kotakBerlabel(pos[i].x, pos[i].y, lk, tk, label, { isi: warnaIsi });
  });
  return { isi, lebar: LEBAR, tinggi };
}

function lukis(spec){
  const mod = spec.mod || "turun";
  const hasil = mod === "turun" ? turun(spec)
    : mod === "siratan" ? siratan(spec)
    : mod === "kitar" ? kitar(spec)
    : (() => { throw new Error(`mod aliran "${mod}" tidak dikenali`); })();
  return A.figura({
    lebar: hasil.lebar, tinggi: hasil.tinggi, isi: hasil.isi,
    alt: spec.alt, kapsyen: spec.kapsyen,
  });
}

module.exports = { lukis, LEBAR };
