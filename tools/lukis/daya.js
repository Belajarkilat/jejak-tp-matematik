/* Rajah daya dan tuas.

   DSKP KSSM Sains Tingkatan 2, 8.1.3, menyebut "melakar gambarajah daya
   untuk menunjukkan daya, arah dan titik aplikasi" secara tersurat. Daya
   ada magnitud DAN arah, jadi jadual tidak boleh menggantikan rajah ini.

   Mod:
     objek - satu objek dengan anak panah daya pada empat arah
     tuas  - rentang dengan fulkrum, beban dan daya pada kedudukan tertentu.
             Kelas tuas ditentukan oleh susunan ketiga-tiganya, jadi penjana
             mengiranya semula dan menolak spesifikasi yang bercanggah
             dengan kelas yang dinyatakan. */
const A = require("./asas");

const LEBAR = 260;
const SAIZ = 11.5;

/* ---------- mod objek ---------- */
function objek(spec){
  const cx = LEBAR / 2, cy = 110;
  const lb = 78, tb = 46;
  const panjang = 46;
  let isi = A.kotak(cx - lb / 2, cy - tb / 2, lb, tb, { isi: "kertas2", garis: "garis2", tebal: 2 });
  isi += A.teks(cx, cy + 4, spec.objek, { saiz: 12, tengah: true, warna: "tinta2", tebal: true });

  /* Label diletak di LUAR hujung anak panah, bukan di sepanjangnya. Jika
     jaraknya dikira dari pusat objek sahaja, label akan jatuh di atas
     batang anak panah dan kedua-duanya jadi sukar dibaca. */
  const hujung = tb / 2 + panjang;
  const hujungX = lb / 2 + panjang;
  const arah = {
    atas:  { dx: 0, dy: -1, tepi: tb / 2, tx: 0, ty: -(hujung + 12), jajar: "tengah" },
    bawah: { dx: 0, dy: 1,  tepi: tb / 2, tx: 0, ty: hujung + 20, jajar: "tengah" },
    kiri:  { dx: -1, dy: 0, tepi: lb / 2, tx: -(hujungX + 6), ty: -10, jajar: "kanan" },
    kanan: { dx: 1, dy: 0,  tepi: lb / 2, tx: hujungX + 6, ty: -10, jajar: "kiri" },
  };
  for(const d of spec.daya || []){
    const a = arah[d.arah];
    if(!a) throw new Error(`arah daya "${d.arah}" tidak dikenali`);
    const x0 = cx + a.dx * (a.tepi + 3), y0 = cy + a.dy * (a.tepi + 3);
    isi += A.garis(x0, y0, x0 + a.dx * panjang, y0 + a.dy * panjang,
      { warna: d.warna || "merah", tebal: 2.2, panah: true });
    const o = { saiz: SAIZ, warna: d.warna || "merah" };
    if(a.jajar === "tengah") o.tengah = true;
    if(a.jajar === "kanan") o.kanan = true;
    isi += A.teks(cx + a.tx, cy + a.ty, d.label, o);
  }
  return { isi, lebar: LEBAR, tinggi: 216 };
}

/* ---------- mod tuas ---------- */
function tuas(spec){
  const kiri = 26, kanan = LEBAR - 26, y = 112;
  const px = (t) => kiri + t * (kanan - kiri);
  const f = spec.fulkrum, b = spec.beban, d = spec.daya;
  for(const [nama, t] of [["fulkrum", f], ["beban", b], ["daya", d]]){
    if(!(t >= 0 && t <= 1)) throw new Error(`kedudukan ${nama} mesti antara 0 dan 1`);
  }
  /* Kelas tuas dikira semula daripada kedudukan, bukan dipercayai. */
  const kelas = (f > Math.min(b, d) && f < Math.max(b, d)) ? 1
    : (b > Math.min(f, d) && b < Math.max(f, d)) ? 2 : 3;
  if(spec.kelas && spec.kelas !== kelas)
    throw new Error(`kedudukan menunjukkan tuas kelas ${kelas}, bukan kelas ${spec.kelas}`);

  let isi = A.kotak(kiri, y - 7, kanan - kiri, 14, { isi: "kertas2", garis: "garis2", bulat: 4, tebal: 2 });
  /* Fulkrum sebagai segi tiga di bawah rentang. */
  isi += A.laluan(`M${A.bulat(px(f) - 13)} ${y + 30} L${A.bulat(px(f))} ${y + 8} L${A.bulat(px(f) + 13)} ${y + 30} Z`,
    { isi: "tinta3", warna: "tinta3", tebal: 1 });
  isi += A.teks(px(f), y + 46, "Fulkrum", { saiz: SAIZ, tengah: true, warna: "tinta3" });

  /* Beban ialah berat, jadi ia SENTIASA bertindak ke bawah. Arah daya pula
     bergantung pada jenis tuas: ditolak ke bawah pada jongkang-jongkit,
     tetapi diangkat ke atas pada kereta sorong. */
  isi += A.garis(px(b), y - 54, px(b), y - 12, { warna: "merah", tebal: 2.2, panah: true });
  isi += A.teks(px(b), y - 62, spec.labelBeban || "Beban", { saiz: SAIZ, tengah: true, warna: "merah" });
  const dayaKeAtas = (spec.arahDaya || "atas") === "atas";
  isi += dayaKeAtas
    ? A.garis(px(d), y - 12, px(d), y - 54, { warna: "ungu", tebal: 2.2, panah: true })
    : A.garis(px(d), y - 54, px(d), y - 12, { warna: "ungu", tebal: 2.2, panah: true });
  isi += A.teks(px(d), y - 62, spec.labelDaya || "Daya", { saiz: SAIZ, tengah: true, warna: "ungu" });

  return { isi, lebar: LEBAR, tinggi: y + 58, jawapan: { kelas } };
}

function lukis(spec){
  const mod = spec.mod || "objek";
  const hasil = mod === "objek" ? objek(spec)
    : mod === "tuas" ? tuas(spec)
    : (() => { throw new Error(`mod daya "${mod}" tidak dikenali`); })();
  return A.figura({
    lebar: hasil.lebar, tinggi: hasil.tinggi, isi: hasil.isi,
    alt: spec.alt, kapsyen: spec.kapsyen,
  });
}

module.exports = { lukis, LEBAR };
