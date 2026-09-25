/* Rajah kanta: pembentukan imej oleh kanta cembung dan kanta cekung.

   Kedudukan imej TIDAK dilukis dengan agakan. Ia dikira daripada rumus
   kanta nipis (konvensyen nyata-adalah-positif yang diajar dalam DSKP
   Sains Tingkatan 5): 1/f = 1/u + 1/v, m = |v/u|.

   Kanta cembung f > 0, kanta cekung f < 0. Imej nyata (v > 0) sentiasa
   songsang; imej maya (v < 0) sentiasa tegak. Ini bukan pilihan lukisan,
   ia peraturan optik dan dikira dari tanda v.

   Dua daripada tiga sinar utama dilukis:
     Sinar 1: selari dengan paksi dari hujung objek, membias melalui titik
              fokus di sisi imej (kanta cembung) atau kelihatan datang dari
              fokus di sisi objek (kanta cekung).
     Sinar 2: melalui pusat optik tanpa pesongan.
   Kedua-dua sinar bertemu (atau sambungannya bertemu) tepat di hujung
   imej yang telah dikira, kerana itulah takrif imej bagi kanta nipis. */
const A = require("./asas");

const LEBAR = 260;
const SAIZ = 11;

function kiraImej(f, u){
  if(u <= 0) throw new Error("jarak objek u mesti positif");
  if(Math.abs(u - f) < 1e-6) return { v: Infinity, m: Infinity, nyata: null };
  const v = 1 / (1 / f - 1 / u);
  const m = Math.abs(v / u);
  const nyata = v > 0;
  return { v, m, nyata };
}

function lensa(spec){
  const jenis = spec.jenisKanta || "cembung";
  const fUnit = spec.f;
  if(!(fUnit > 0)) throw new Error("f mesti positif (magnitud panjang fokus)");
  const f = jenis === "cembung" ? fUnit : -fUnit;
  const u = spec.u;
  if(!(u > 0)) throw new Error("u mesti positif");

  const skala = spec.skala || 16;      /* piksel per unit f */
  const ho = spec.ho || 0.7;           /* tinggi objek, unit f */
  const cx = 140, cy = 92;
  const paksiKiri = 10, paksiKanan = LEBAR - 10;

  const { v, m, nyata } = kiraImej(f, u);
  const tinggiCanvas = 176;
  if(Number.isFinite(v)){
    const xImejSemak = cx + v * skala;
    const hiPxSemak = -(ho * fUnit * skala) * (v / u);
    if(xImejSemak < paksiKiri + 4 || xImejSemak > paksiKanan - 4)
      throw new Error(`imej pada v=${A.bulat(v)} jatuh di luar rajah pada skala ini`);
    if(Math.abs(hiPxSemak) > tinggiCanvas / 2 - 20)
      throw new Error(`imej pada m=${A.bulat(m)}× terlalu tinggi untuk rajah ini`);
  }

  let isi = "";
  /* Paksi utama */
  isi += A.garis(paksiKiri, cy, paksiKanan, cy, { warna: "tinta3", tebal: 1 });

  /* Simbol kanta: garis tegak dengan kepala anak panah ke luar (cembung)
     atau ke dalam (cekung), lambang standard buku teks. */
  const setengahKanta = 46;
  isi += A.garis(cx, cy - setengahKanta, cx, cy + setengahKanta, { warna: jenis === "cembung" ? "hijau" : "merah", tebal: 2 });
  if(jenis === "cembung"){
    isi += A.laluan(`M${cx - 7} ${cy - setengahKanta + 7} L${cx} ${cy - setengahKanta} L${cx + 7} ${cy - setengahKanta + 7}`, { warna: "hijau", tebal: 2 });
    isi += A.laluan(`M${cx - 7} ${cy + setengahKanta - 7} L${cx} ${cy + setengahKanta} L${cx + 7} ${cy + setengahKanta - 7}`, { warna: "hijau", tebal: 2 });
  } else {
    isi += A.laluan(`M${cx - 7} ${cy - setengahKanta} L${cx} ${cy - setengahKanta + 7} L${cx + 7} ${cy - setengahKanta}`, { warna: "merah", tebal: 2 });
    isi += A.laluan(`M${cx - 7} ${cy + setengahKanta} L${cx} ${cy + setengahKanta - 7} L${cx + 7} ${cy + setengahKanta}`, { warna: "merah", tebal: 2 });
  }

  /* Titik F dan 2F pada kedua-dua belah. */
  const fPx = fUnit * skala;
  [[-1, "F"], [1, "F"], [-2, "2F"], [2, "2F"]].forEach(([n, label]) => {
    const x = cx + n * fPx;
    if(x < paksiKiri + 4 || x > paksiKanan - 4) return;
    isi += A.bulatan(x, cy, 2, { isi: "tinta3", garis: "tinta3" });
    isi += A.teks(x, cy + 15, label, { saiz: 11, tengah: true, warna: "tinta3" });
  });

  /* Objek: anak panah tegak berdiri di atas paksi pada jarak u. */
  const xO = cx - u * skala;
  if(xO < paksiKiri + 4) throw new Error(`u=${u} terlalu jauh untuk dilukiskan pada skala ini`);
  const hoPx = ho * fUnit * skala;
  isi += A.garis(xO, cy, xO, cy - hoPx, { warna: "kuning", tebal: 2, panah: true });

  /* Sinar 1: selari dari hujung objek ke kanta pada ketinggian hoPx. */
  const yTuju = cy - hoPx;
  isi += A.garis(xO, yTuju, cx, yTuju, { warna: "lembayung", tebal: 1.5 });

  let labelImej = "";
  if(!Number.isFinite(v)){
    /* u = f: sinar 1 keluar selari (tiada penumpuan). Sinar 2 (melalui
       pusat) diteruskan pada kecerunan asalnya sahaja, sebab tiada
       imej untuk dituju. */
    const hujung = paksiKanan - 4;
    isi += A.garis(cx, yTuju, hujung, yTuju, { warna: "lembayung", tebal: 1.5, panah: true, putus: "4 3" });
    const kecerunan = (cy - yTuju) / (cx - xO);
    isi += A.garis(xO, yTuju, hujung, yTuju - kecerunan * (hujung - xO) + hoPx, { warna: "hijau", tebal: 1.5, panah: true });
    labelImej = "u = f: sinar keluar selari, tiada imej terbentuk";
  } else {
    /* Ketinggian imej dikira daripada geometri sinar-melalui-pusat itu
       sendiri: hi = -ho × (v/u). Songsang untuk imej nyata, tegak untuk
       imej maya, muncul secara automatik daripada tanda v — bukan
       ditetapkan secara berasingan. */
    const xImej = cx + v * skala;
    const hiPx = -hoPx * (v / u);
    const yImej = cy - hiPx;
    /* Sinar 1 lanjutan lepas kanta menuju hujung imej (nyata, garis
       penuh) atau sambungan putus ke belakang menuju imej maya. */
    isi += A.garis(cx, yTuju, xImej, yImej, {
      warna: "lembayung", tebal: 1.5, panah: nyata, putus: nyata ? null : "4 3",
    });
    /* Sinar 2: dari hujung objek melalui pusat optik terus ke hujung
       imej — satu garis lurus, sebab ketiga-tiga titik (objek, pusat,
       imej) dijamin sebaris oleh formula hi di atas. */
    isi += A.garis(xO, yTuju, xImej, yImej, {
      warna: "hijau", tebal: 1.5, panah: nyata, putus: nyata ? null : "4 3",
    });
    /* Anak panah imej. */
    isi += A.garis(xImej, cy, xImej, yImej, { warna: "merah", tebal: 2, panah: true });
    labelImej = `v = ${A.bulat(Math.abs(v))} f · m = ${A.bulat(m)}× · ${nyata ? "nyata, songsang" : "maya, tegak"}`;
  }

  isi += A.teks(cx, cy + 30, jenis === "cembung" ? "Kanta cembung" : "Kanta cekung", { saiz: SAIZ, tengah: true, warna: "tinta2" });
  isi += A.teks(LEBAR / 2, 160, labelImej, { saiz: 11, tengah: true, warna: "tinta3" });

  return {
    isi, lebar: LEBAR, tinggi: tinggiCanvas,
    jawapan: { v: Number.isFinite(v) ? Math.round(v * 100) / 100 : null, m: Number.isFinite(v) ? Math.round(m * 100) / 100 : null, nyata },
  };
}

function lukis(spec){
  const hasil = lensa(spec);
  return A.figura({
    lebar: hasil.lebar, tinggi: hasil.tinggi, isi: hasil.isi,
    alt: spec.alt, kapsyen: spec.kapsyen,
  });
}

module.exports = { lukis, LEBAR, kiraImej };
