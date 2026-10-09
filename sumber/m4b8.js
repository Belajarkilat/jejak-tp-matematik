/* Sumber kandungan — Matematik KSSM Tingkatan 4, Bab 8 Sukatan Serakan Data Tak Terkumpul.
   Fail ini disunting tangan. Jalankan `node bina.js m4b8`.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 4
   dan 5, muka 66 (dskp/matematik-t4-t5.pdf). DSKP menulis enam tahap penuh.
   Rumus ikut DSKP 8.2.1: varians σ² = Σx²/n − x̄², sisihan piawai σ = √σ².
   Kuartil: Q1 = nilai ke-¼(n + 1), Q3 = nilai ke-¾(n + 1). Semua set data yang memerlukan
   kuartil mempunyai n = 11 atau 15, jadi kedudukan itu integer dan kaedah median separuh
   data memberi nilai yang sama (tiada percanggahan kaedah buku teks).

   Semua sukatan dikira dengan stat() di bawah. Rajah: widget t4serak (widget-m4b8.js). */

const susun = d => d.slice().sort((a, b) => a - b);
const stat = d => {
  const x = susun(d), n = x.length, jum = x.reduce((a, b) => a + b, 0), jum2 = x.reduce((a, b) => a + b * b, 0), min = jum / n, v = jum2 / n - min * min;
  const r = { n, x, min: x[0], maks: x[n - 1], julat: x[n - 1] - x[0], purata: min, jum, jum2, varians: v, sp: Math.sqrt(v) };
  if ((n + 1) % 4 === 0) { r.Q1 = x[(n + 1) / 4 - 1]; r.Q3 = x[3 * (n + 1) / 4 - 1]; r.JAK = r.Q3 - r.Q1; }
  r.median = n % 2 ? x[(n - 1) / 2] : (x[n / 2 - 1] + x[n / 2]) / 2;
  return r;
};
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);

const SPI = [
"Mempamerkan pengetahuan asas tentang serakan.",
"Mempamerkan kefahaman tentang sukatan serakan data tak terkumpul.",
"Mengaplikasikan kefahaman tentang sukatan serakan data tak terkumpul untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sukatan serakan data tak terkumpul dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sukatan serakan data tak terkumpul dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sukatan serakan data tak terkumpul dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- data ---------- */
const AMANAH = [12, 14, 15, 15, 16, 17, 17, 18, 19, 20, 22], BESTARI = [8, 10, 12, 14, 15, 17, 18, 20, 22, 24, 26];
const MASA = [5, 8, 10, 12, 12, 15, 18, 20, 22, 25, 30];
const MARKAH = [35, 40, 42, 45, 48, 50, 52, 55, 58, 60, 62, 65, 70, 75, 90];
const U = [4, 6, 7, 8, 9, 10, 12];
const PA = [10, 12, 13, 14, 15, 15, 16, 17, 18, 19, 20], PB = [5, 8, 10, 12, 15, 16, 18, 20, 22, 25, 28];
const D6 = [6, 8, 10, 12];
const S2 = stat(MASA), S3 = stat(MARKAH), SU = stat(U), SA = stat(PA), SB = stat(PB);

/* ---------- lampiran ---------- */
const iw = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t4serak", kapsyen, alt }, extra);
const R1 = iw("Rajah 1 · Markah kuiz (daripada 30) dua kelas, 11 orang murid setiap kelas. Pilih perwakilan.",
  "Rajah interaktif markah kuiz dua kelas sebagai plot titik atau plot batang-dan-daun; julat setiap kelas dipaparkan",
  { mod: "plot", A: AMANAH, B: BESTARI, namaA: "4 Amanah", namaB: "4 Bestari", unit: "markah", tajuk: "Markah kuiz dua kelas" });
const R2 = iw("Rajah 1 · Masa perjalanan 11 orang murid ke sekolah (minit). Pilih sukatan serakan.",
  "Rajah interaktif sebelas nilai masa perjalanan yang tersusun; cip memilih julat, kuartil dan julat antara kuartil, atau varians dan sisihan piawai",
  { mod: "sukatan", data: MASA, unit: "minit", tajuk: "Masa ke sekolah" });
const R3 = iw("Rajah 1 · Markah ujian 15 orang murid. Bina plot kotak langkah demi langkah.",
  "Rajah interaktif membina plot kotak markah ujian lima belas murid dalam lima langkah: data, nilai minimum dan maksimum, median, kotak kuartil, dan misai",
  { mod: "kotak", data: MARKAH, unit: "markah", tajuk: "Markah ujian 15 orang murid" });
const R4 = iw("Rajah 1 · Data 4, 6, 7, 8, 9, 10, 12. Pilih perubahan dan perhatikan kesannya.",
  "Rajah interaktif kesan perubahan data terhadap min, julat dan sisihan piawai: tambah 5, darab 2, masukkan pencilan 40, atau buang nilai terbesar",
  { mod: "ubah", data: U, skala: [0, 40], ops: [{ nama: "Data asal", jenis: "asal" }, { nama: "Tambah 5", jenis: "tambah", k: 5 }, { nama: "Darab 2", jenis: "darab", k: 2 }, { nama: "Masuk pencilan 40", jenis: "masuk", k: 40 }, { nama: "Buang nilai terbesar", jenis: "buang" }] });
const R5 = iw("Rajah 1 · Mata dua pemain bola keranjang dalam 11 perlawanan. Kira dahulu, kemudian semak.",
  "Rajah interaktif perbandingan mata dua pemain bola keranjang dengan plot kotak atau plot titik serta min dan sisihan piawai, dalam mod cabar",
  { mod: "banding", cabar: true, A: PA, B: PB, namaA: "Pemain A", namaB: "Pemain B", unit: "mata", tajuk: "Mata setiap perlawanan" });
const R6 = iw("Rajah 1 · Data 6, 8, 10, 12 dan satu nilai k. Gerakkan k.",
  "Rajah interaktif lima nilai data dengan satu nilai k yang boleh diubah dari 0 hingga 30; min, sisihan piawai dan julat dikira semula",
  { mod: "cari", data: D6, kMin: 0, kMaks: 30, kAwal: 9 });

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Bilik Data", sk:"8.1.1 / 8.1.2 Maksud serakan; plot batang-dan-daun dan plot titik", lampiran:"r1",
 kadNama:"Serakan", kadEm:"\u{1F331}", kadFakta:"Serakan menunjukkan sejauh mana nilai data tersebar. Dua set data boleh mempunyai min yang sama tetapi serakan yang sangat berbeza.",
 bosKadNama:"Soalan Statistik", bosKadEm:"\u{2753}", bosKadFakta:"Soalan statistik ialah soalan yang dijawab dengan mengumpul data, dan data itu berubah-ubah (ada kebolehubahan).",
 soalan:[
 {j:"pilih",t:"Serakan suatu set data bermaksud:",p:["Sejauh mana data tersebar","Nilai yang paling kerap muncul","Nilai di tengah-tengah data","Jumlah bagi semua nilai data"],b:0,u:"Serakan mengukur sebaran data. Nilai paling kerap ialah mod dan nilai tengah ialah median."},
 {j:"nombor",t:"Dalam Rajah 1, berapakah julat markah kelas 4 Amanah?",tol:0.01,b:10,u:"Julat = nilai terbesar − nilai terkecil = 22 − 12 = 10.",kira:()=>stat(AMANAH).julat},
 {j:"nombor",t:"Dalam Rajah 1, berapakah julat markah kelas 4 Bestari?",tol:0.01,b:18,u:"Julat = 26 − 8 = 18.",kira:()=>stat(BESTARI).julat},
 {j:"pilih",t:"Min markah kedua-dua kelas dalam Rajah 1 hampir sama (kira-kira 16.9). Markah kelas manakah lebih tersebar?",p:["4 Bestari, kerana julatnya lebih besar","4 Amanah, kerana julatnya lebih besar","Kedua-duanya sama kerana min hampir sama","4 Amanah, kerana minnya lebih kecil"],b:0,u:"Plot titik 4 Bestari terbentang dari 8 hingga 26, manakala 4 Amanah berkumpul antara 12 dan 22. Min yang sama tidak bermaksud serakan yang sama.",kira:()=>Math.abs(stat(AMANAH).purata-stat(BESTARI).purata)<0.2&&stat(BESTARI).julat>stat(AMANAH).julat},
 {j:"pilih",t:"Dalam Rajah 1, pilih plot batang-dan-daun. Daun bagi batang 2 dalam kelas 4 Bestari ialah:",p:["0, 2, 4, 6","0, 2, 4","2, 4, 6, 8","0, 2, 4, 6, 8"],b:0,u:"Markah 20, 22, 24 dan 26 mempunyai batang 2 dan daun 0, 2, 4 dan 6.",kira:()=>BESTARI.filter(v=>Math.floor(v/10)===2).map(v=>v%10).join(", ")==="0, 2, 4, 6"},
 {j:"nombor",t:"Dalam Rajah 1, berapakah bilangan murid kelas 4 Amanah yang mendapat 17 markah?",tol:0.01,b:2,u:"Dalam plot titik, ada dua titik di atas nilai 17.",kira:()=>AMANAH.filter(v=>v===17).length},
 {j:"pilih",t:"Dalam plot batang-dan-daun dengan kekunci 1 | 2 bermaksud 12, entri 2 | 4 mewakili:",p:["24","2.4","42","6"],b:0,u:"Batang ialah digit puluh dan daun ialah digit sa, jadi 2 | 4 = 24."},
 {j:"pilih",t:"Soalan statistik ialah soalan yang:",p:["Dijawab dengan data yang berubah-ubah","Mempunyai satu jawapan yang tetap","Tidak memerlukan pengumpulan data","Hanya boleh dijawab oleh seorang guru"],b:0,u:"Menurut DSKP, soalan statistik dijawab dengan mengumpul data dan data itu mempunyai kebolehubahan."}],
 bos:{j:"pilih",t:"Antara soalan berikut, yang manakah soalan statistik?",p:["Berapakah masa perjalanan murid kelas saya ke sekolah?","Berapakah umur saya pada hari ini dalam tahun?","Berapakah ketinggian sebenar Menara Kuala Lumpur?","Berapakah bilangan hari dalam bulan Jun setiap tahun?"],b:0,u:"Masa perjalanan berbeza bagi setiap murid, jadi data perlu dikumpul dan ia berubah-ubah. Soalan lain mempunyai satu jawapan tetap."}},

{n:2, tempat:"Makmal Sukatan", sk:"8.2.1 / 8.2.2 Julat, julat antara kuartil, varians dan sisihan piawai", lampiran:"r2",
 kadNama:"Julat Antara Kuartil", kadEm:"\u{1F4CF}", kadFakta:"JAK = Q3 − Q1. Ia mengukur serakan 50% data di tengah, jadi tidak dipengaruhi oleh nilai ekstrem.",
 bosKadNama:"Sisihan Piawai", bosKadEm:"\u{03C3}", bosKadFakta:"σ² = Σx²/n − x̄² dan σ = √σ². Sisihan piawai menggunakan semua nilai data dan diukur dalam unit data.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih Julat. Berapakah julat masa perjalanan, dalam minit?",tol:0.01,b:25,u:"Julat = 30 − 5 = 25 minit.",kira:()=>S2.julat},
 {j:"nombor",t:"Dalam Rajah 1, pilih Kuartil dan JAK. Berapakah kuartil pertama, Q1?",tol:0.01,b:10,u:"n = 11, jadi Q1 ialah nilai ke-¼(11 + 1) = nilai ke-3, iaitu 10.",kira:()=>S2.Q1},
 {j:"nombor",t:"Dalam Rajah 1, berapakah kuartil ketiga, Q3?",tol:0.01,b:22,u:"Q3 ialah nilai ke-¾(11 + 1) = nilai ke-9, iaitu 22.",kira:()=>S2.Q3},
 {j:"nombor",t:"Dalam Rajah 1, berapakah julat antara kuartil?",tol:0.01,b:12,u:"JAK = Q3 − Q1 = 22 − 10 = 12.",kira:()=>S2.JAK},
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung min masa perjalanan, dalam minit. Berikan jawapan betul kepada dua tempat perpuluhan.",tol:0.005,b:bunda(S2.purata,2),u:"Σx = 177. x̄ = 177 ÷ 11 = 16.09.",kira:()=>bunda(S2.purata,2)},
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung varians masa perjalanan. Berikan jawapan betul kepada dua tempat perpuluhan.",tol:0.005,b:bunda(S2.varians,2),u:"Σx² = 3435. σ² = 3435 ÷ 11 − (177 ÷ 11)² = 312.27 − 258.92 = 53.35 (gunakan nilai tepat dalam kalkulator, bukan nilai yang telah dibundarkan).",kira:()=>bunda(S2.varians,2)},
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung sisihan piawai masa perjalanan, dalam minit. Berikan jawapan betul kepada dua tempat perpuluhan.",tol:0.005,b:bunda(S2.sp,2),u:"σ = √53.355 = 7.30 minit.",kira:()=>bunda(S2.sp,2)},
 {j:"pilih",t:"Bagi 11 nilai data yang tersusun, Q1 ialah nilai yang ke:",p:["3","2.75","4","6"],b:0,u:"Kedudukan Q1 = ¼(n + 1) = ¼(12) = 3. Nilai ke-6 ialah median."}],
 bos:{j:"pilih",t:"Apakah kelebihan julat antara kuartil berbanding julat?",p:["JAK tidak dipengaruhi nilai ekstrem","JAK menggunakan setiap nilai dalam data","JAK lebih besar daripada julat","JAK sama dengan sisihan piawai"],b:0,u:"JAK hanya melihat 50% data di tengah, jadi satu nilai ekstrem tidak mengubahnya. Julat bergantung pada dua nilai hujung sahaja."}},

{n:3, tempat:"Bengkel Kotak", sk:"8.2.3 Membina dan mentafsir plot kotak", lampiran:"r3",
 kadNama:"Plot Kotak", kadEm:"\u{1F4E6}", kadFakta:"Plot kotak menggunakan lima nilai: nilai minimum, Q1, median, Q3 dan nilai maksimum. Kotak merangkumi 50% data di tengah.",
 bosKadNama:"Tahan Ekstrem", bosKadEm:"\u{1F6E1}\u{FE0F}", bosKadFakta:"Menukar nilai maksimum tidak mengubah Q1, median dan Q3, jadi kotak dan JAK kekal sama. Hanya misai yang berubah.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, gerakkan ke langkah 3. Berapakah median markah?",tol:0.01,b:55,u:"n = 15, median ialah nilai ke-8, iaitu 55.",kira:()=>S3.median},
 {j:"nombor",t:"Dalam Rajah 1, berapakah kuartil pertama, Q1?",tol:0.01,b:45,u:"Q1 ialah nilai ke-¼(15 + 1) = nilai ke-4, iaitu 45.",kira:()=>S3.Q1},
 {j:"nombor",t:"Dalam Rajah 1, berapakah kuartil ketiga, Q3, bagi markah ujian itu?",tol:0.01,b:65,u:"Q3 ialah nilai ke-¾(15 + 1) = nilai ke-12, iaitu 65.",kira:()=>S3.Q3},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah julat antara kuartil?",tol:0.01,b:20,u:"JAK = 65 − 45 = 20, iaitu panjang kotak.",kira:()=>S3.JAK},
 {j:"pilih",t:"Panjang kotak dalam plot kotak mewakili:",p:["Julat antara kuartil","Julat keseluruhan data","Median bagi data","Min bagi data"],b:0,u:"Kotak bermula di Q1 dan berakhir di Q3, jadi panjangnya ialah Q3 − Q1."},
 {j:"pilih",t:"Dalam Rajah 1, misai kanan lebih panjang daripada misai kiri. Ini bermaksud:",p:["Markah tinggi lebih tersebar","Markah tinggi lebih padat","Median lebih besar daripada min","Tiada markah yang melebihi Q3"],b:0,u:"Misai kanan (65 hingga 90) lebih panjang daripada misai kiri (35 hingga 45), jadi 25% markah tertinggi lebih tersebar."},
 {j:"nombor",t:"Berdasarkan Rajah 1, kira-kira berapa peratus murid mendapat markah antara Q1 dan Q3?",tol:0.01,b:50,u:"Kotak dari Q1 hingga Q3 merangkumi 50% data di tengah.",kira:()=>50},
 {j:"pilih",t:"Lima nilai yang diperlukan untuk melukis plot kotak ialah:",p:["Nilai minimum, Q1, median, Q3 dan nilai maksimum","Min, mod, median, julat dan varians","Q1, Q2, Q3, julat dan sisihan piawai","Nilai minimum, min, mod, median dan nilai maksimum"],b:0,u:"Ringkasan lima nombor: nilai minimum, Q1, median (Q2), Q3 dan nilai maksimum."}],
 bos:{j:"nombor",t:"Dalam Rajah 1, markah 90 ditukar kepada 100. Berapakah julat antara kuartil yang baharu?",tol:0.01,b:20,u:"Q1 dan Q3 tidak berubah (45 dan 65), jadi JAK kekal 20. Hanya julat yang bertambah daripada 55 kepada 65.",kira:()=>stat(MARKAH.slice(0,14).concat([100])).JAK}},

{n:4, tempat:"Bilik Ubah Data", sk:"8.2.4 Kesan perubahan data terhadap serakan", lampiran:"r4",
 kadNama:"Tambah Seragam", kadEm:"\u{2795}", kadFakta:"Jika setiap data ditambah k, min bertambah k tetapi julat, JAK dan sisihan piawai tidak berubah.",
 bosKadNama:"Darab Seragam", bosKadEm:"\u{2716}\u{FE0F}", bosKadFakta:"Jika setiap data didarab k, min, julat dan sisihan piawai didarab k, dan varians didarab k².",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih Data asal. Berapakah sisihan piawai? Berikan jawapan betul kepada dua tempat perpuluhan.",tol:0.005,b:bunda(SU.sp,2),u:"x̄ = 56 ÷ 7 = 8. σ² = 490 ÷ 7 − 64 = 6, jadi σ = √6 = 2.45.",kira:()=>bunda(SU.sp,2)},
 {j:"pilih",t:"Dalam Rajah 1, pilih Tambah 5. Apakah kesannya terhadap sisihan piawai dan julat?",p:["Kedua-duanya tidak berubah","Kedua-duanya bertambah 5","σ bertambah 5, julat tidak berubah","σ tidak berubah, julat bertambah 5"],b:0,u:"Seluruh plot titik beralih 5 unit ke kanan tanpa mengubah jarak antara titik. Serakan kekal sama.",kira:()=>stat(U.map(v=>v+5)).julat===SU.julat&&Math.abs(stat(U.map(v=>v+5)).sp-SU.sp)<1e-9},
 {j:"nombor",t:"Dalam Rajah 1, pilih Tambah 5. Berapakah min yang baharu?",tol:0.01,b:13,u:"Min asal 8 bertambah 5 menjadi 13.",kira:()=>stat(U.map(v=>v+5)).purata},
 {j:"pilih",t:"Dalam Rajah 1, pilih Darab 2. Sisihan piawai yang baharu:",p:["Menjadi dua kali ganda","Bertambah sebanyak 2","Tidak berubah","Menjadi empat kali ganda"],b:0,u:"Jarak antara setiap titik digandakan, jadi σ = 2 × 2.45 = 4.90.",kira:()=>Math.abs(stat(U.map(v=>v*2)).sp-2*SU.sp)<1e-9},
 {j:"nombor",t:"Dalam Rajah 1, pilih Darab 2. Berapakah varians yang baharu?",tol:0.01,b:24,u:"Varians didarab 2² = 4: 6 × 4 = 24.",kira:()=>stat(U.map(v=>v*2)).varians},
 {j:"nombor",t:"Dalam Rajah 1, pilih Masuk pencilan 40. Berapakah sisihan piawai yang baharu? Berikan jawapan betul kepada dua tempat perpuluhan.",tol:0.005,b:bunda(stat(U.concat([40])).sp,2),u:"x̄ = 96 ÷ 8 = 12. σ² = 2090 ÷ 8 − 144 = 117.25, jadi σ = 10.83.",kira:()=>bunda(stat(U.concat([40])).sp,2)},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah kesan pencilan 40 terhadap sukatan serakan?",p:["Julat dan σ meningkat dengan ketara","Julat dan sisihan piawai tidak berubah","Nilai min sahaja yang berubah","Sisihan piawai menjadi lebih kecil"],b:0,u:"Julat naik daripada 8 kepada 36 dan σ naik daripada 2.45 kepada 10.83. Satu pencilan sangat mempengaruhi julat dan σ."},
 {j:"nombor",t:"Dalam Rajah 1, pilih Buang nilai terbesar. Berapakah julat yang baharu?",tol:0.01,b:6,u:"Tanpa 12, data ialah 4 hingga 10. Julat = 10 − 4 = 6.",kira:()=>stat(U.slice(0,6)).julat}],
 bos:{j:"pilih",t:"Setiap nilai dalam data asal Rajah 1 didarab 3 kemudian ditambah 2. Sisihan piawai yang baharu, betul kepada dua tempat perpuluhan, ialah:",p:["7.35","9.35","2.45","22.05"],b:0,u:"Darab 3 menggandakan σ sebanyak 3 kali; tambah 2 tidak mengubahnya. σ baharu = 3 × 2.449 = 7.35.",kira:()=>bunda(stat(U.map(v=>3*v+2)).sp,2)===7.35}},

{n:5, tempat:"Gelanggang", sk:"8.2.5 Membanding dan mentafsir dua set data", lampiran:"r5",
 kadNama:"Konsisten", kadEm:"\u{1F3C0}", kadFakta:"Set data dengan sisihan piawai yang lebih kecil lebih konsisten, kerana nilainya lebih dekat dengan min.",
 bosKadNama:"Pilih Sukatan", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Bandingkan sukatan kecenderungan memusat (min, median) dan sukatan serakan (σ, JAK) bersama-sama sebelum membuat keputusan.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung min mata Pemain A. Berikan jawapan betul kepada dua tempat perpuluhan. Kira dahulu, kemudian semak.",tol:0.005,b:bunda(SA.purata,2),u:"Σx = 169. x̄ = 169 ÷ 11 = 15.36.",kira:()=>bunda(SA.purata,2)},
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung sisihan piawai mata Pemain B. Berikan jawapan betul kepada dua tempat perpuluhan.",tol:0.005,b:bunda(SB.sp,2),u:"Σx = 179, Σx² = 3431. σ² = 3431 ÷ 11 − (179 ÷ 11)² = 47.11, jadi σ = 6.86.",kira:()=>bunda(SB.sp,2)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah julat antara kuartil bagi Pemain B?",tol:0.01,b:12,u:"Q1 = nilai ke-3 = 10, Q3 = nilai ke-9 = 22. JAK = 12.",kira:()=>SB.JAK},
 {j:"pilih",t:"Berdasarkan Rajah 1, pemain manakah lebih konsisten?",p:["Pemain A, kerana σ lebih kecil","Pemain B, kerana min matanya lebih tinggi","Pemain B, kerana julat matanya lebih besar","Pemain A, kerana median matanya lebih kecil"],b:0,u:"σ Pemain A = 2.90 dan σ Pemain B = 6.86. Mata Pemain A lebih dekat dengan minnya.",kira:()=>SA.sp<SB.sp},
 {j:"pilih",t:"Jurulatih memerlukan pemain yang berpeluang menjaringkan mata yang sangat tinggi dalam perlawanan akhir, walaupun berisiko. Pemain manakah lebih sesuai?",p:["Pemain B, kerana Q3 dan maksimumnya tinggi","Pemain A, kerana sisihan piawainya lebih kecil","Pemain A, kerana julatnya lebih kecil","Pemain B, kerana nilai minimumnya lebih rendah"],b:0,u:"Pemain B mempunyai Q3 = 22 dan nilai maksimum 28, berbanding 18 dan 20 bagi Pemain A. Serakan yang besar bermaksud peluang mata tinggi (dan rendah) lebih besar.",kira:()=>SB.Q3>SA.Q3&&SB.maks>SA.maks},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah beza median mata antara Pemain B dan Pemain A?",tol:0.01,b:1,u:"Median Pemain B = 16 dan median Pemain A = 15. Beza = 1.",kira:()=>SB.median-SA.median},
 {j:"pilih",t:"Mengapakah sisihan piawai lebih sesuai daripada julat untuk membandingkan konsistensi pemain?",p:["σ menggunakan semua nilai data","Sisihan piawai lebih mudah dikira","Julat menggunakan semua nilai data","Julat tidak dipengaruhi oleh pencilan"],b:0,u:"Julat hanya bergantung pada dua nilai hujung, manakala σ mengambil kira jarak setiap nilai dari min."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah beza julat mata antara Pemain B dan Pemain A?",tol:0.01,b:13,u:"Julat B = 28 − 5 = 23, julat A = 20 − 10 = 10. Beza = 13.",kira:()=>SB.julat-SA.julat}],
 bos:{j:"pilih",t:"Pemain C mempunyai min 15.5 mata dan sisihan piawai 4.1 mata. Susun Pemain A, B dan C daripada yang paling konsisten.",p:["A, C, B","B, C, A","C, A, B","A, B, C"],b:0,u:"Bandingkan σ: A = 2.90, C = 4.1 dan B = 6.86. Paling konsisten ialah σ terkecil.",kira:()=>SA.sp<4.1&&4.1<SB.sp}},

{n:6, tempat:"Studio Data", sk:"8.2.6 Masalah sukatan serakan (bukan rutin)", lampiran:"r6",
 kadNama:"Nilai Hilang", kadEm:"\u{1F50E}", kadFakta:"Jika min dan bilangan data diketahui, jumlah data = min × n. Ini membantu mencari nilai yang hilang.",
 bosKadNama:"Penyiasat Data", bosKadEm:"\u{1F52C}", bosKadFakta:"Inkuiri statistik bermula dengan soalan, diikuti pengumpulan data, perwakilan, pengiraan sukatan dan tafsiran yang beretika.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, gerakkan k. Berapakah nilai k supaya min kelima-lima data ialah 10?",tol:0.01,b:14,u:"(6 + 8 + 10 + 12 + k) ÷ 5 = 10, jadi 36 + k = 50 dan k = 14.",kira:()=>5*10-36},
 {j:"nombor",t:"Dalam Rajah 1, berapakah nilai k supaya min ialah 12?",tol:0.01,b:24,u:"36 + k = 60, jadi k = 24.",kira:()=>5*12-36},
 {j:"pilih",t:"Dalam Rajah 1, nilai k manakah memberi sisihan piawai yang paling kecil?",p:["9","10","8","0"],b:0,u:"Min empat data asal ialah 9. Apabila k = 9, k tidak menambah sebaran, jadi σ paling kecil (σ = 2).",kira:()=>[0,8,9,10].reduce((b,k)=>stat(D6.concat([k])).sp<stat(D6.concat([b])).sp?k:b,0)===9},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan k = 9. Berapakah sisihan piawai?",tol:0.01,b:2,u:"x̄ = 45 ÷ 5 = 9. σ² = 425 ÷ 5 − 81 = 4, jadi σ = 2.",kira:()=>stat(D6.concat([9])).sp},
 {j:"pilih",t:"Dalam Rajah 1, apabila k bertambah daripada 14 kepada 30, sisihan piawai:",p:["Bertambah, kerana k menjauhi data lain","Berkurang, kerana min turut bertambah","Tidak berubah, kerana satu nilai sahaja berubah","Menjadi sifar apabila k = 30"],b:0,u:"Semakin jauh k dari nilai lain, semakin besar sebaran data. Semak dengan Rajah 1: σ naik daripada 2.83 kepada 8.80.",kira:()=>stat(D6.concat([30])).sp>stat(D6.concat([14])).sp},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan k = 30. Berapakah julat data?",tol:0.01,b:24,u:"Julat = 30 − 6 = 24.",kira:()=>stat(D6.concat([30])).julat},
 {j:"nombor",t:"Lima nombor 5, 7, 8, 9 dan m mempunyai min 8. Cari nilai m.",tol:0.01,b:11,u:"Jumlah = 8 × 5 = 40. m = 40 − (5 + 7 + 8 + 9) = 11.",kira:()=>40-29},
 {j:"nombor",t:"Suatu set lima nombor mempunyai min 10 dan varians 8. Hitung Σx².",tol:0.01,b:540,u:"σ² = Σx²/n − x̄², jadi 8 = Σx² ÷ 5 − 100. Maka Σx² = 5 × 108 = 540.",kira:()=>5*(8+100)}],
 bos:{j:"buka",
  t:"Jalankan satu inkuiri statistik kecil yang membandingkan dua kumpulan, contohnya masa tidur murid Tingkatan 4 dan Tingkatan 5, atau masa yang diambil untuk menyelesaikan teka-teki.",
  arahan:"Tulis soalan statistik awak. Kumpul atau reka sekurang-kurangnya 11 data bagi setiap kumpulan. Wakilkan data itu dengan plot kotak atau plot titik, kira min, julat antara kuartil dan sisihan piawai, kemudian buat kesimpulan. Nyatakan satu cara data boleh dipaparkan secara tidak beretika sehingga mengelirukan.",
  u:"Jawapan TP6 yang kukuh mempunyai soalan statistik yang jelas, data yang munasabah, perwakilan yang betul, sukatan yang dikira dengan tepat, kesimpulan yang membandingkan pusat dan serakan, serta kesedaran tentang perwakilan data yang beretika."}}
];

module.exports = {
  id:"m4b8", tingkatan:4, kod:"8.0 Sukatan Serakan Data Tak Terkumpul",
  tajuk:"Makmal Data",
  subtajuk:"Matematik Ting. 4 · Bab 8 Sukatan Serakan Data Tak Terkumpul",
  spi:SPI,
  ulasan:{
   1:"{n} memahami maksud serakan dan dapat membandingkan sebaran dua set data menggunakan plot titik dan plot batang-dan-daun. Langkah seterusnya ialah mengira sukatan serakan.",
   2:"{n} dapat menentukan julat, kuartil, julat antara kuartil, varians dan sisihan piawai bagi data tak terkumpul. Perlu lebih latihan membina dan mentafsir plot kotak.",
   3:"{n} boleh membina dan mentafsir plot kotak serta mengaitkan panjang kotak dengan julat antara kuartil.",
   4:"{n} mampu menerangkan kesan perubahan data seperti penambahan seragam, pendaraban dan pencilan terhadap sukatan serakan. Seterusnya, latih membandingkan dua set data.",
   5:"{n} dapat membanding dan mentafsir dua set data menggunakan sukatan kecenderungan memusat dan sukatan serakan untuk membuat keputusan. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya menjalankan inkuiri statistik sendiri, mewakilkan dan menganalisis data dua kumpulan, serta membuat kesimpulan yang beretika. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Sukatan Serakan Data Tak Terkumpul. Cadangan: ulang hentian pertama dengan Rajah 1 dan bandingkan julat dua set data yang dikumpul daripada rakan sekelas."
  },
  lampiran:{ r1:R1, r2:R2, r3:R3, r4:R4, r5:R5, r6:R6 },
  aras:ARAS
};
