/* Rajah struktur: lapisan sepusat dan rajah berlabel.

   Dua mod:
     lapisan - bulatan sepusat berlabel (struktur Bumi, lapisan Matahari,
               atom, atmosfera). Tebal setiap lapisan mengikut nisbah yang
               diberi, jadi rajah tidak boleh mengelirukan secara senyap.
     label   - bentuk mudah dengan label bergaris penunjuk di tepi. Bentuk
               sengaja SKEMATIK, bukan lukisan realistik: lukisan anatomi
               yang hampir betul lebih memudaratkan daripada tiada lukisan,
               dan buku teks murid sudah ada gambar sebenar. */
const A = require("./asas");

const LEBAR = 260;
const SAIZ = 12;

/* ---------- lapisan sepusat ---------- */
function lapisan(spec){
  const lap = spec.lapisan || [];
  if(lap.length < 2) throw new Error("rajah lapisan perlu sekurang-kurangnya dua lapisan");
  if(lap.length > 5) throw new Error("rajah lapisan lebih lima lapisan jadi terlalu padat");
  const jumlah = lap.reduce((a, l) => a + (l.tebal || 1), 0);
  const rMaks = 62;
  const cx = 68, cy = 76;
  const isiLalai = ["merahLembut", "kuningLembut", "hijauLembut", "kertas2", "kertas"];

  /* Lukis dari luar ke dalam supaya lapisan dalam berada di atas. */
  let isi = "";
  const jejari = [];
  let kumpul = 0;
  lap.forEach(l => { kumpul += (l.tebal || 1); jejari.push((kumpul / jumlah) * rMaks); });
  for(let i = lap.length - 1; i >= 0; i--){
    isi += A.bulatan(cx, cy, jejari[i], {
      isi: lap[i].isi || isiLalai[i % isiLalai.length], garis: "garis2", tebal: 1.4,
    });
  }
  /* Label di sebelah kanan, satu baris setiap lapisan, dengan garis penunjuk
     ke tengah-tengah lapisan itu. */
  const xLabel = cx + rMaks + 20;
  const muat = Math.floor((LEBAR - xLabel - 4) / (SAIZ * 0.6));
  lap.forEach((l, i) => {
    if(l.label.length > muat) throw new Error(`label "${l.label}" terlalu panjang (maksimum ${muat} aksara)`);
    const y = 26 + i * 22;
    const rTengah = (i === 0 ? 0 : jejari[i - 1]) + ((jejari[i] - (i === 0 ? 0 : jejari[i - 1])) / 2);
    isi += A.garis(cx + rTengah, cy - 0.5, xLabel - 6, y - 4, { warna: "tinta3", tebal: 1 });
    isi += A.bulatan(cx + rTengah, cy, 2.4, { isi: "tinta3", garis: "tinta3" });
    isi += A.teks(xLabel, y, l.label, { saiz: SAIZ, warna: "tinta2" });
  });
  return { isi, lebar: LEBAR, tinggi: Math.max(cy + rMaks + 12, 26 + lap.length * 22 + 10) };
}

/* ---------- bentuk berlabel ---------- */
/* bahagian: [{label, bentuk:"kotak"|"bulat", x, y, l, t, isi}]
   Koordinat dalam unit 0..100 pada paksi x dan 0..100 pada paksi y bagi
   kawasan lukisan, supaya spesifikasi mudah dibaca. */
function berlabel(spec){
  const bhg = spec.bahagian || [];
  if(!bhg.length) throw new Error("rajah berlabel perlu sekurang-kurangnya satu bahagian");
  const kiri = 8, atas = 8, lukisLebar = 130, lukisTinggi = spec.tinggiLukis || 150;
  const px = (v) => kiri + (v / 100) * lukisLebar;
  const py = (v) => atas + (v / 100) * lukisTinggi;
  const xLabel = kiri + lukisLebar + 18;
  const muat = Math.floor((LEBAR - xLabel - 4) / (SAIZ * 0.6));

  let isi = "";
  if(spec.rangka){
    isi += A.kotak(kiri, atas, lukisLebar, lukisTinggi,
      { isi: "kertas2", garis: "garis", bulat: 10, putus: "5 4" });
  }
  /* Bahagian mesti disenaraikan dari atas ke bawah mengikut kedudukannya
     dalam lukisan. Jika tidak, garis penunjuk akan bersilang dan rajah
     menjadi lebih mengelirukan daripada tiada rajah langsung. */
  let yLalu = -1;
  const titik = [];
  bhg.forEach((b, i) => {
    /* Hanya bahagian berlabel perlu disusun: bahagian tanpa label (zarah,
       hiasan) tiada garis penunjuk, jadi ia bebas diletak di mana-mana. */
    const anc = b.anchorY == null ? b.y : b.anchorY;
    if(b.label){
      if(anc < yLalu - 0.5) throw new Error(`bahagian "${b.label}" tidak disusun dari atas ke bawah; garis penunjuk akan bersilang`);
      yLalu = anc;
    }
    const x = px(b.x), y = py(b.y);
    if(b.bentuk === "bulat"){
      const r = (b.r / 100) * lukisLebar;
      isi += A.bulatan(x, y, r, { isi: b.isi || "kertas", garis: b.garis || "garis2" });
    } else {
      const l = (b.l / 100) * lukisLebar, t = (b.t / 100) * lukisTinggi;
      isi += A.kotak(x - l / 2, y - t / 2, l, t, { isi: b.isi || "kertas", garis: b.garis || "garis2", bulat: b.bulat });
    }
    /* Titik penunjuk boleh diletak di tepi bentuk, bukan di tengahnya:
       label "dinding sel" mesti menunjuk kepada dinding, bukan ke tengah
       sel yang diisi oleh struktur lain. */
    titik.push([px(b.anchorX == null ? b.x : b.anchorX), py(anc)]);
    if(b.dalam){
      isi += A.teks(x, y + 4, b.dalam, { saiz: 11.5, tengah: true, warna: "tinta3" });
    }
  });
  /* Baris label dikira daripada bahagian BERLABEL sahaja. Kalau indeks
     bahagian digunakan, zarah tanpa label akan meninggalkan baris kosong
     dan rajah menjadi terlalu tinggi untuk skrin telefon. */
  let baris = 0;
  bhg.forEach((b, i) => {
    if(!b.label) return;
    if(b.label.length > muat) throw new Error(`label "${b.label}" terlalu panjang (maksimum ${muat} aksara)`);
    const y = 22 + baris * 22;
    baris++;
    isi += A.garis(titik[i][0], titik[i][1], xLabel - 6, y - 4, { warna: "tinta3", tebal: 1 });
    isi += A.bulatan(titik[i][0], titik[i][1], 2.4, { isi: "tinta3", garis: "tinta3" });
    isi += A.teks(xLabel, y, b.label, { saiz: SAIZ, warna: "tinta2" });
  });
  return { isi, lebar: LEBAR, tinggi: Math.max(atas + lukisTinggi + 10, 22 + baris * 22 + 10) };
}

function lukis(spec){
  const mod = spec.mod || "lapisan";
  const hasil = mod === "lapisan" ? lapisan(spec)
    : mod === "label" ? berlabel(spec)
    : (() => { throw new Error(`mod struktur "${mod}" tidak dikenali`); })();
  return A.figura({
    lebar: hasil.lebar, tinggi: hasil.tinggi, isi: hasil.isi,
    alt: spec.alt, kapsyen: spec.kapsyen,
  });
}

module.exports = { lukis, LEBAR };
