/* Sumber kandungan — Matematik KSSM Tingkatan 2, Bab 12 Sukatan Kecenderungan Memusat.
   Fail ini disunting tangan. Jalankan `node bina.js m2b12` untuk menyemaknya
   dan menghasilkan bank-m2b12.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 80 (dskp/matematik-t2.pdf).
   DSKP menulis enam tahap bagi bab ini, jadi semuanya dikekalkan.

   Rajah interaktif ialah widget `t2pusat` dalam widget-m2b12.js. Semua jawapan
   berangka dikira daripada data yang sama dengan rajah, dalam medan `kira`,
   dan dibandingkan oleh tools/semak-jawapan.js. */
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
const jumlah = d => d.reduce((a, b) => a + b, 0);
const min = d => jumlah(d) / d.length;
const median = d => { const s = d.slice().sort((a, b) => a - b), n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; };
const mod = d => { const f = {}; d.forEach(v => f[v] = (f[v] || 0) + 1); const m = Math.max(...Object.values(f)); return Object.keys(f).filter(k => f[k] === m).map(Number); };
const julat = d => Math.max(...d) - Math.min(...d);
const kali = (d, x) => d.filter(v => v === x).length;

const SPI = [
"Mempamerkan pengetahuan asas tentang mod, min dan median.",
"Mempamerkan kefahaman tentang mod, min dan median.",
"Mengaplikasikan kefahaman tentang mod, min dan median.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang mod, min dan median dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang mod, min dan median dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang mod, min dan median dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- data ---------- */
/* Hentian 1: markah kuiz 9 murid. */
const D1 = [2, 3, 3, 4, 4, 4, 5, 6, 9];
/* Hentian 2: data kecil supaya kesan tambah, darab dan ubah satu nilai jelas. */
const D2 = [2, 3, 3, 5, 7];
const ubah2 = (op, v) => D2.map((x, i) => op === 0 ? x + v : op === 1 ? x * v : (i === D2.length - 1 ? x + v : x));
/* Hentian 3: markah 20 murid (data terkumpul). */
const D3 = [21, 23, 24, 26, 27, 28, 29, 31, 32, 33, 33, 34, 35, 36, 38, 41, 43, 44, 46, 48];
const kelas3 = (w) => { const out = []; for (let lo = 20; lo <= 48; lo += w) { const f = D3.filter(v => v >= lo && v < lo + w).length; out.push({ lo, hi: lo + w - 1, f, x: lo + (w - 1) / 2 }); } return out; };
const minAnggar = w => { const k = kelas3(w); return k.reduce((a, q) => a + q.f * q.x, 0) / k.reduce((a, q) => a + q.f, 0); };
/* Hentian 4: masa bacaan 14 murid (minit), dipaparkan sebagai jadual, carta palang dan batang-dan-daun. */
const D4 = [24, 25, 25, 27, 27, 27, 28, 30, 30, 32, 33, 35, 35, 36];
/* Hentian 5: lapan nilai asas dan satu nilai terakhir yang boleh ditukar. */
const BASE5 = [4, 5, 5, 6, 7, 7, 7, 9];
const PIL5 = [8, 10, 20, 40, 80];
const d5 = p => BASE5.concat([p]);
/* Hentian 6: markah dua kelas; kelas B boleh ada satu nilai ekstrem. */
const A6 = [56, 60, 62, 64, 66, 68, 70, 72];
const B6 = [52, 58, 62, 64, 66, 70, 72, 75];
const EKS6 = 98;
const B6e = B6.slice(0, 7).concat([EKS6]);

/* ---------- lampiran: rajah interaktif ---------- */
const pus = (spec, kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t2pusat", kapsyen, alt }, spec, extra || {});
const R_PUS1 = pus({ mod: "asas", data: D1, tajuk: "Markah kuiz 9 murid", lo: 1, hi: 10 },
  "Rajah 1 · Markah kuiz 9 murid. Pilih Mod, Median atau Min dengan gelongsor.",
  "Rajah interaktif plot titik markah kuiz 9 murid; gelongsor memilih mod, median atau min dan menunjukkan cara mencarinya");
const R_PUS2 = pus({ mod: "ubah", data: D2, tajuk: "Data 2, 3, 3, 5, 7" },
  "Rajah 1 · Tukar cara data diubah dan nilainya. Lihat mod, median dan min yang baharu.",
  "Rajah interaktif kesan menambah semua nilai, mendarab semua nilai atau menambah satu nilai terhadap mod, median dan min");
const R_PUS3 = pus({ mod: "jadual", data: D3, mula: 20, lebar: [5, 10], tajuk: "Markah 20 murid" },
  "Rajah 1 · Markah 20 murid. Tukar selang kelas dan pilih satu baris untuk melihat kekerapan dan titik tengahnya.",
  "Rajah interaktif jadual kekerapan data terkumpul markah 20 murid dengan selang kelas 5 atau 10, kelas mod dan min anggaran");
const R_PUS4 = pus({ mod: "wakil", data: D4, tajuk: "Masa bacaan 14 murid (minit)" },
  "Rajah 1 · Masa bacaan 14 murid. Data yang sama dalam tiga paparan. Cari mod, median dan min, kemudian semak.",
  "Rajah interaktif masa bacaan 14 murid dalam jadual kekerapan, carta palang atau batang-dan-daun", { cabar: true, j: 2 });
const R_PUS5 = pus({ mod: "ekstrem", base: BASE5, pilihan: PIL5, tajuk: "Satu nilai terakhir boleh ditukar" },
  "Rajah 1 · Tukar nilai terakhir. Perhatikan mod, median dan min. Kira dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif sembilan nilai dengan nilai terakhir boleh ditukar menjadi ekstrem; menunjukkan mod, median, min dan julat", { cabar: true });
const R_PUS6 = pus({ mod: "banding", a: A6, b: B6, ekstrem: EKS6, lo: 50, hi: 100, langkah: 10, tajuk: "Markah Kelas A dan Kelas B" },
  "Rajah 1 · Markah 8 murid setiap kelas. Tukar nilai terakhir Kelas B dan ukuran yang dibandingkan.",
  "Rajah interaktif perbandingan markah dua kelas pada garis nombor, dengan nilai ekstrem dalam Kelas B dan ukuran min, median atau julat");

/* ---------- hentian ---------- */
const ARAS = [

{n:1, tempat:"Padang Data", sk:"12.1.1 Mod, min dan median data tak terkumpul", lampiran:"pus1",
 kadNama:"Tiga Sukatan", kadEm:"\u{1F4CA}", kadFakta:"Mod, median dan min ialah tiga cara berbeza untuk mewakili satu set data dengan satu nombor.",
 bosKadNama:"Data Tersusun", bosKadEm:"\u{1F522}", bosKadFakta:"Sebelum mencari median, data mesti disusun dahulu dari kecil ke besar.",
 soalan:[
 {j:"pilih",t:"Mod bagi satu set data ialah nilai yang:",p:["Paling kerap muncul","Berada di tengah selepas disusun","Diperoleh daripada jumlah dibahagi bilangan data","Terbesar tolak terkecil"],b:0,u:"Mod ialah nilai dengan kekerapan tertinggi."},
 {j:"pilih",t:"Median bagi satu set data ialah nilai yang:",p:["Berada di tengah selepas data disusun","Paling kerap muncul","Diperoleh daripada jumlah dibahagi bilangan data","Paling besar dalam data"],b:0,u:"Susun data dahulu, kemudian ambil nilai di tengah."},
 {j:"pilih",t:"Min bagi satu set data dikira dengan:",p:["Jumlah semua nilai dibahagi bilangan data itu","Nilai yang paling kerap muncul dalam data itu","Nilai di tengah selepas semua data disusun","Nilai terbesar tolak nilai terkecil dalam data"],b:0,u:"Min = jumlah nilai ÷ bilangan data."},
 {j:"nombor",t:"Dalam Rajah 1, pilih Mod. Berapakah mod markah kuiz itu?",b:mod(D1)[0],tol:0.01,u:"Markah 4 muncul 3 kali, paling banyak, jadi mod = 4.",kira:()=>mod(D1)[0]},
 {j:"nombor",t:"Dalam Rajah 1, berapa kali markah 4 muncul?",b:kali(D1, 4),tol:0.01,u:"Ada tiga titik pada markah 4.",kira:()=>kali(D1, 4)},
 {j:"nombor",t:"Jumlah semua markah dalam Rajah 1 ialah 40 dan ada 9 murid. Berapakah min markah, kepada 1 tempat perpuluhan?",b:bunda(min(D1), 1),tol:0.05,u:"Min = 40 ÷ 9 = 4.4.",kira:()=>bunda(jumlah(D1) / D1.length, 1)},
 {j:"susun",t:"Susun langkah mencari median bagi satu set data.",p:["Susun data dari kecil ke besar","Kira bilangan data","Cari nilai di tengah","Nyatakan nilai itu sebagai median"],b:[0,1,2,3],u:"Data mesti disusun dahulu sebelum nilai tengah dicari."},
 {j:"nombor",t:"Cari median bagi data 2, 5, 7, 10.",b:median([2, 5, 7, 10]),tol:0.01,u:"Bilangan data genap, jadi ambil purata dua nilai tengah: (5 + 7) ÷ 2 = 6.",kira:()=>median([2, 5, 7, 10])}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang data 2, 3, 3, 4, 4, 4, 5, 6, 9.",p:["Mod ialah 4","Median ialah 4","Julat ialah 7","Min tepat 5","Terdapat dua mod","Median ialah 5"],b:[0,1,2],u:"Mod = 4 (3 kali). Nilai kelima selepas disusun ialah 4, jadi median = 4. Julat = 9 − 2 = 7. Min = 40 ÷ 9 = 4.4, bukan 5.",kira:()=>mod(D1).length === 1 && mod(D1)[0] === 4 && median(D1) === 4 && julat(D1) === 7 && bunda(min(D1), 1) !== 5}},

{n:2, tempat:"Meja Berubah", sk:"12.1.2 Kesan perubahan set data terhadap mod, min dan median", lampiran:"pus2",
 kadNama:"Tambah dan Darab", kadEm:"\u{2795}", kadFakta:"Menambah nombor sama kepada setiap data menggerakkan min, median dan mod dengan jumlah yang sama. Mendarab pula mengubah kesemuanya mengikut faktor itu.",
 bosKadNama:"Satu Nilai", bosKadEm:"\u{261D}\u{FE0F}", bosKadFakta:"Jika hanya satu nilai berubah, min biasanya berubah tetapi median dan mod boleh kekal sama.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih Tambah semua dan nilai 3. Apakah yang berlaku kepada mod?",p:["Bertambah 3, iaitu menjadi 6","Kekal 3 kerana mod tidak berubah","Menjadi 9 kerana didarab dengan 3","Menjadi 0 kerana nilai ditolak"],b:0,u:"Semua nilai bertambah 3, jadi mod 3 menjadi 6.",kira:()=>mod(ubah2(0, 3))[0] === 6},
 {j:"nombor",t:"Dalam Rajah 1, pilih Tambah semua dan nilai 2. Berapakah min baharu?",b:min(ubah2(0, 2)),tol:0.01,u:"Data baharu 4, 5, 5, 7, 9 mempunyai jumlah 30. Min = 30 ÷ 5 = 6.",kira:()=>min(ubah2(0, 2))},
 {j:"nombor",t:"Dalam Rajah 1, pilih Darab semua dan nilai 2. Berapakah median baharu?",b:median(ubah2(1, 2)),tol:0.01,u:"Data baharu 4, 6, 6, 10, 14. Nilai tengah ialah 6.",kira:()=>median(ubah2(1, 2))},
 {j:"pilih",t:"Apabila setiap nilai ditambah dengan nombor yang sama, min, median dan mod:",p:["Ketiga-tiganya bertambah dengan nombor itu","Hanya min yang berubah, median dan mod kekal","Hanya mod yang berubah, min dan median kekal","Ketiga-tiganya kekal sama seperti asal"],b:0,u:"Seluruh set data bergerak sama jauh, jadi ketiga-tiga sukatan bergerak sama jauh."},
 {j:"pilih",t:"Apabila setiap nilai didarab dengan 3, min baharu ialah:",p:["3 kali min asal","Min asal tambah 3","Min asal dibahagi 3","Sama dengan min asal"],b:0,u:"Mendarab semua nilai dengan 3 mendarabkan jumlah dengan 3, jadi min juga didarab dengan 3."},
 {j:"nombor",t:"Dalam Rajah 1, pilih Tambah satu nilai dan nilai 5. Berapakah min baharu?",b:min(ubah2(2, 5)),tol:0.01,u:"Nilai 7 menjadi 12. Data 2, 3, 3, 5, 12 berjumlah 25, jadi min = 5.",kira:()=>min(ubah2(2, 5))},
 {j:"pilih",t:"Dalam Rajah 1, pilih Tambah satu nilai. Mengapakah median dan mod tidak berubah?",p:["Nilai yang diubah bukan nilai tengah dan bukan mod","Kerana min sentiasa sama dengan median dalam semua data","Kerana data langsung tidak berubah apabila satu nilai ditambah","Kerana median dan mod tidak pernah boleh berubah walau apa pun"],b:0,u:"Hanya nilai terbesar berubah. Nilai tengah ialah 3 dan nilai paling kerap ialah 3, jadi kedua-duanya kekal.",kira:()=>median(ubah2(2, 4)) === median(D2) && mod(ubah2(2, 4))[0] === mod(D2)[0]},
 {j:"nombor",t:"Sekumpulan data mempunyai min 12. Setiap nilai ditambah dengan 5, kemudian didarab dengan 2. Berapakah min baharu?",b:(12 + 5) * 2,tol:0.01,u:"Tambah 5: min menjadi 17. Darab 2: min menjadi 34.",kira:()=>(12 + 5) * 2}],
 bos:{j:"nombor",t:"Min lima nombor ialah 4. Satu nombor bernilai 7 diganti dengan 12. Berapakah min baharu?",b:(4 * 5 - 7 + 12) / 5,tol:0.01,u:"Jumlah asal = 4 × 5 = 20. Jumlah baharu = 20 − 7 + 12 = 25. Min baharu = 25 ÷ 5 = 5.",kira:()=>(4 * 5 - 7 + 12) / 5}},

{n:3, tempat:"Jadual Kelas", sk:"12.1.3 / 12.1.4 Jadual kekerapan, kelas mod dan min data terkumpul", lampiran:"pus3",
 kadNama:"Kelas Data", kadEm:"\u{1F5C2}\u{FE0F}", kadFakta:"Kelas dalam jadual kekerapan tidak boleh bertindih dan saiz selangnya mesti sama.",
 bosKadNama:"Titik Tengah", bosKadEm:"\u{1F3AF}", bosKadFakta:"Min anggaran menggunakan titik tengah kelas, sebab nilai sebenar setiap data sudah tidak dapat dikesan dalam jadual.",
 soalan:[
 {j:"pilih",t:"Dalam jadual kekerapan data terkumpul, kelas dibentuk dengan:",p:["Selang yang sama saiz dan tidak bertindih","Selang yang bertindih supaya tiada data tertinggal","Selang yang saiznya berbeza-beza","Satu kelas bagi setiap nilai"],b:0,u:"Setiap data mesti masuk tepat satu kelas, jadi selang mesti sama saiz dan tidak bertindih."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan selang 5 dan pilih Kelas 2 (25 - 29). Berapakah kekerapannya?",b:kelas3(5)[1].f,tol:0.01,u:"Markah 26, 27, 28 dan 29 berada dalam kelas 25 - 29. Kekerapan = 4.",kira:()=>kelas3(5)[1].f},
 {j:"nombor",t:"Dalam Rajah 1, berapakah titik tengah kelas 30 - 34?",b:kelas3(5)[2].x,tol:0.01,u:"Titik tengah = (30 + 34) ÷ 2 = 32.",kira:()=>kelas3(5)[2].x},
 {j:"pilih",t:"Dalam Rajah 1 dengan selang 5, kelas mod ialah:",p:["30 - 34 kerana kekerapan 5","25 - 29 kerana kekerapan 4","35 - 39 kerana kekerapan 3","40 - 44 kerana kekerapan 3"],b:0,u:"Kelas 30 - 34 mempunyai kekerapan tertinggi, iaitu 5.",kira:()=>{ const k = kelas3(5); const m = Math.max(...k.map(q => q.f)); const t = k.filter(q => q.f === m); return t.length === 1 && t[0].lo === 30; }},
 {j:"nombor",t:"Dalam Rajah 1, tukar selang kepada 10. Berapakah kekerapan kelas 30 - 39?",b:kelas3(10)[1].f,tol:0.01,u:"Ada 8 markah dari 31 hingga 38 dalam kelas 30 - 39.",kira:()=>kelas3(10)[1].f},
 {j:"nombor",t:"Dengan selang 5 dalam Rajah 1, jumlah kekerapan × titik tengah (jumlah fx) ialah 665. Berapakah min anggaran markah, kepada 2 tempat perpuluhan?",b:bunda(minAnggar(5), 2),tol:0.01,u:"Min anggaran = 665 ÷ 20 = 33.25.",kira:()=>bunda(minAnggar(5), 2)},
 {j:"pilih",t:"Min anggaran bagi data terkumpul dikira dengan:",p:["Jumlah (kekerapan × titik tengah) dibahagi jumlah kekerapan","Jumlah titik tengah dibahagi bilangan kelas sahaja","Titik tengah kelas mod digandakan dengan kekerapannya","Kekerapan paling besar dibahagi dua kali bilangan kelas"],b:0,u:"Setiap kelas diwakili titik tengahnya, ditimbang dengan kekerapan kelas itu."},
 {j:"susun",t:"Susun langkah membina jadual kekerapan bagi data terkumpul.",p:["Tentukan julat data dan saiz selang kelas","Tulis kelas yang tidak bertindih","Kira kekerapan setiap kelas","Semak jumlah kekerapan sama dengan bilangan data"],b:[0,1,2,3],u:"Semak akhir memastikan tiada data tertinggal atau dikira dua kali."}],
 bos:{j:"nombor",t:"Dalam Rajah 1, tetapkan selang 10. Berapakah min anggaran markah, kepada 1 tempat perpuluhan?",b:bunda(minAnggar(10), 1),tol:0.05,u:"Titik tengah 24.5, 34.5 dan 44.5 dengan kekerapan 7, 8 dan 5. Jumlah fx = 171.5 + 276 + 222.5 = 670. Min anggaran = 670 ÷ 20 = 33.5.",kira:()=>bunda(minAnggar(10), 1)}},

{n:4, tempat:"Papan Skor", sk:"12.1.6 Mod, min dan median daripada perwakilan data", lampiran:"pus4",
 kadNama:"Palang Tertinggi", kadEm:"\u{1F4F6}", kadFakta:"Dalam carta palang, mod ialah nilai pada palang paling tinggi.",
 bosKadNama:"Batang dan Daun", bosKadEm:"\u{1F33F}", bosKadFakta:"Plot batang dan daun mengekalkan setiap nilai asal, jadi kita boleh membaca mod dan median terus daripadanya.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, berapakah jumlah bilangan data (jumlah kekerapan)?",b:D4.length,tol:0.01,u:"Ada 14 murid dalam data itu.",kira:()=>D4.length},
 {j:"nombor",t:"Dalam Rajah 1, berapakah mod masa bacaan (minit)?",b:mod(D4)[0],tol:0.01,u:"Nilai 27 muncul 3 kali, paling banyak.",kira:()=>mod(D4)[0]},
 {j:"nombor",t:"Dalam Rajah 1, berapakah median masa bacaan (minit)?",b:median(D4),tol:0.01,u:"Ada 14 data. Nilai ke-7 ialah 28 dan nilai ke-8 ialah 30. Median = (28 + 30) ÷ 2 = 29.",kira:()=>median(D4)},
 {j:"nombor",t:"Dalam Rajah 1, berapakah min masa bacaan (minit), kepada 1 tempat perpuluhan?",b:bunda(min(D4), 1),tol:0.05,u:"Jumlah masa ialah 414 minit. Min = 414 ÷ 14 = 29.6.",kira:()=>bunda(jumlah(D4) / D4.length, 1)},
 {j:"pilih",t:"Dalam carta palang, mod ialah nilai yang mempunyai:",p:["Palang paling tinggi","Palang paling pendek","Palang di tengah carta","Palang paling kiri"],b:0,u:"Palang paling tinggi bermaksud kekerapan tertinggi."},
 {j:"pilih",t:"Dalam plot batang dan daun, median dicari dengan:",p:["Mengira daun dari awal hingga nilai tengah","Memilih batang yang paling besar nilainya","Menjumlahkan semua batang lalu dibahagi dua","Memilih batang yang mempunyai daun paling banyak"],b:0,u:"Daun sudah tersusun, jadi kira sehingga kedudukan tengah."},
 {j:"pilih",t:"Dalam jadual kekerapan, lajur kekerapan longgokan (Σf) paling membantu mencari:",p:["Median kedudukan","Mod paling kerap","Julat sebaran data","Min purata data"],b:0,u:"Jumlah longgokan menunjukkan di mana kedudukan tengah berada."},
 {j:"nombor",t:"Dalam Rajah 1, berapa daun berada pada batang 3 dalam paparan batang dan daun?",b:D4.filter(v => Math.floor(v / 10) === 3).length,tol:0.01,u:"Nilai dari 30 hingga 39 ialah 30, 30, 32, 33, 35, 35 dan 36, iaitu 7 daun.",kira:()=>D4.filter(v => Math.floor(v / 10) === 3).length}],
 bos:{j:"nombor",t:"Seorang murid dengan masa bacaan 40 minit ditambah kepada data dalam Rajah 1. Berapakah median baharu (minit)?",b:median(D4.concat([40])),tol:0.01,u:"Kini ada 15 data. Nilai ke-8 selepas disusun ialah 30, jadi median baharu = 30.",kira:()=>median(D4.concat([40]))}},

{n:5, tempat:"Pasar Ekstrem", sk:"12.1.5 Memilih sukatan yang sesuai, termasuk data bernilai ekstrem", lampiran:"pus5",
 kadNama:"Nilai Ekstrem", kadEm:"\u{1F680}", kadFakta:"Nilai ekstrem menarik min ke arahnya, tetapi median dan mod biasanya tidak berganjak.",
 bosKadNama:"Pilih Yang Adil", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Apabila data mempunyai nilai ekstrem, median selalunya lebih adil untuk mewakili kebanyakan data.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan nilai terakhir 8. Berapakah median?",b:median(d5(8)),tol:0.01,u:"Data disusun: 4, 5, 5, 6, 7, 7, 7, 8, 9. Nilai kelima ialah 7.",kira:()=>median(d5(8))},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan nilai terakhir 40. Berapakah min?",b:min(d5(40)),tol:0.01,u:"Jumlah = 50 + 40 = 90. Min = 90 ÷ 9 = 10.",kira:()=>min(d5(40))},
 {j:"pilih",t:"Apabila nilai terakhir dalam Rajah 1 ditukar daripada 10 kepada 80, ukuran yang berubah paling banyak ialah:",p:["Min","Median","Mod","Ketiga-tiganya sama banyak"],b:0,u:"Median kekal 7 dan mod kekal 7, tetapi min naik daripada 6.7 kepada 14.4.",kira:()=>median(d5(10)) === median(d5(80)) && mod(d5(10))[0] === mod(d5(80))[0] && min(d5(80)) > min(d5(10))},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan nilai terakhir 80. Berapakah min, kepada 1 tempat perpuluhan?",b:bunda(min(d5(80)), 1),tol:0.05,u:"Jumlah = 50 + 80 = 130. Min = 130 ÷ 9 = 14.4.",kira:()=>bunda(min(d5(80)), 1)},
 {j:"pilih",t:"Nilai ekstrem dalam satu set data ialah nilai yang:",p:["Jauh berbeza daripada kebanyakan nilai lain","Paling kerap muncul dalam set data itu","Tepat di tengah selepas data disusun","Sama nilainya dengan min bagi data itu"],b:0,u:"Nilai ekstrem ialah nilai yang jauh terpencil daripada kelompok data yang lain."},
 {j:"pilih",t:"Untuk data yang mempunyai nilai ekstrem, sukatan yang paling sesuai mewakili kebanyakan data ialah:",p:["Median","Min","Jumlah","Nilai terbesar"],b:0,u:"Median tidak banyak terkesan oleh nilai ekstrem."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan nilai terakhir 80. Berapakah julat?",b:julat(d5(80)),tol:0.01,u:"Julat = 80 − 4 = 76.",kira:()=>julat(d5(80))},
 {j:"pilih",t:"Gaji lima orang pekerja dan seorang pengurus (RM ribu) ialah 2, 2, 3, 3, 4 dan 40. Mengapakah min (RM9 ribu) tidak sesuai mewakili gaji kebanyakan?",p:["Nilai ekstrem 40 menarik min menjadi terlalu tinggi","Min sentiasa salah untuk data gaji seperti ini","Mod lebih besar daripada min dalam data ini","Median tidak wujud bagi data seperti ini"],b:0,u:"Kebanyakan gaji hanya 2 hingga 4, tetapi satu nilai 40 menaikkan min kepada 9.",kira:()=>min([2, 2, 3, 3, 4, 40]) === 9}],
 bos:{j:"banyak",t:"Dalam Rajah 1, nilai terakhir ialah 80. Pilih SEMUA pernyataan yang BENAR.",p:["Min lebih besar daripada median","Median masih 7","Julat ialah 76","Mod menjadi 80","Min masih kurang daripada 8","Median menjadi 14.4"],b:[0,1,2],u:"Min = 14.4 lebih besar daripada median 7. Median kekal 7 dan julat = 80 − 4 = 76. Mod kekal 7, dan min bukan kurang daripada 8.",kira:()=>min(d5(80)) > median(d5(80)) && median(d5(80)) === 7 && julat(d5(80)) === 76 && mod(d5(80))[0] === 7 && min(d5(80)) >= 8}},

{n:6, tempat:"Bilik Debat", sk:"12.1.7 Perbandingan set data, ramalan dan hujah", lampiran:"pus6",
 kadNama:"Julat", kadEm:"\u{1F4CF}", kadFakta:"Julat ialah nilai terbesar tolak nilai terkecil. Ia menunjukkan betapa tersebarnya data.",
 bosKadNama:"Hujah Bernas", bosKadEm:"\u{1F4AC}", bosKadFakta:"Hujah yang meyakinkan menggunakan lebih daripada satu sukatan, bukan min sahaja.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih Kelas B biasa dan ukuran Julat. Berapakah julat markah Kelas B?",b:julat(B6),tol:0.01,u:"Julat = 75 − 52 = 23.",kira:()=>julat(B6)},
 {j:"nombor",t:"Dalam Rajah 1, berapakah median markah Kelas A?",b:median(A6),tol:0.01,u:"Ada 8 markah. Nilai ke-4 ialah 64 dan nilai ke-5 ialah 66. Median = 65.",kira:()=>median(A6)},
 {j:"nombor",t:"Dalam Rajah 1, berapakah min markah Kelas A, kepada 2 tempat perpuluhan?",b:bunda(min(A6), 2),tol:0.01,u:"Jumlah markah ialah 518. Min = 518 ÷ 8 = 64.75.",kira:()=>bunda(min(A6), 2)},
 {j:"nombor",t:"Dalam Rajah 1, pilih Kelas B ada ekstrem. Berapakah min markah Kelas B, kepada 2 tempat perpuluhan?",b:bunda(min(B6e), 2),tol:0.01,u:"Jumlah markah ialah 542. Min = 542 ÷ 8 = 67.75.",kira:()=>bunda(min(B6e), 2)},
 {j:"pilih",t:"Kepentingan julat apabila membandingkan dua set data ialah:",p:["Menunjukkan betapa tersebarnya data","Menunjukkan nilai yang paling kerap muncul","Menunjukkan nilai di tengah","Menggantikan min dan median"],b:0,u:"Dua set boleh mempunyai min atau median sama tetapi taburan yang sangat berbeza."},
 {j:"pilih",t:"Dalam Rajah 1, Kelas B biasa dan Kelas A mempunyai median yang sama, iaitu 65. Kelas manakah lebih konsisten markahnya?",p:["Kelas A, sebab julatnya lebih kecil daripada B","Kelas B, sebab julatnya lebih besar daripada A","Kedua-duanya sama konsisten kerana median sama","Tidak dapat ditentukan tanpa min kedua-dua kelas"],b:0,u:"Julat A ialah 16 dan julat B ialah 23. Julat lebih kecil bermaksud markah lebih dekat antara satu sama lain.",kira:()=>julat(A6) < julat(B6) && median(A6) === median(B6)},
 {j:"nombor",t:"Min markah Kelas A ialah 64.75 daripada 8 murid. Seorang murid baharu mendapat 80 markah. Berapakah min baharu, kepada 2 tempat perpuluhan?",b:bunda((jumlah(A6) + 80) / 9, 2),tol:0.01,u:"Jumlah baharu = 518 + 80 = 598. Min baharu = 598 ÷ 9 = 66.44.",kira:()=>bunda((jumlah(A6) + 80) / 9, 2)},
 {j:"pilih",t:"Apabila Kelas B ada ekstrem 98, min B (67.75) lebih tinggi daripada min A (64.75) tetapi median kedua-dua kelas sama. Kesimpulan yang paling adil ialah:",p:["Min B naik kerana satu markah ekstrem, bukan semua murid B lebih baik","Kelas B lebih baik dalam semua aspek kerana min lebih tinggi","Kelas A lebih teruk dalam semua aspek kerana min lebih rendah","Tiada apa yang boleh disimpulkan tentang kedua-dua kelas itu"],b:0,u:"Median sama bermaksud kebanyakan murid setara. Kenaikan min hanya disebabkan satu markah 98.",kira:()=>median(A6) === median(B6e) && min(B6e) > min(A6)}],
 bos:{j:"buka",
  t:"Pengetua mahu memilih satu kelas untuk hadiah 'Prestasi Terbaik'. Guru Kelas B berhujah bahawa kelasnya patut menang kerana min markahnya lebih tinggi. Data Rajah 1 menunjukkan Kelas B ada satu markah 98.",
  arahan:"Bandingkan Kelas A dan Kelas B menggunakan min, median dan julat. Tulis hujah yang meyakinkan tentang kelas mana yang patut menang, dan nyatakan sukatan mana yang paling adil serta sebabnya.",
  u:"Jawapan TP6 yang kukuh membandingkan lebih daripada satu sukatan (min 64.75 berbanding 67.75, median sama 65, julat 16 berbanding 46), mengenal pasti markah 98 sebagai nilai ekstrem, menjustifikasikan sukatan yang dipilih dan menyimpulkan dengan hujah yang seimbang."}}
];

module.exports = {
  id:"m2b12", tingkatan:2, kod:"12.0 Sukatan Kecenderungan Memusat",
  tajuk:"Pusat Data",
  subtajuk:"Matematik Ting. 2 · Bab 12 Sukatan Kecenderungan Memusat",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal mod, min dan median serta mencarinya bagi data tak terkumpul yang mudah. Langkah seterusnya ialah memahami bagaimana ketiga-tiga sukatan berubah apabila data berubah.",
   2:"{n} memahami mod, min dan median serta kesan menambah atau mendarab data terhadapnya. Perlu lebih latihan sebelum bergerak ke TP3.",
   3:"{n} boleh membina jadual kekerapan bagi data terkumpul serta menentukan kelas mod dan min anggaran. Galakkan menyemak jumlah kekerapan sama dengan bilangan data.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah dengan membaca mod, min dan median daripada jadual, carta palang dan batang dan daun. Seterusnya latih mentafsir nilai ekstrem.",
   5:"{n} dapat memilih sukatan yang sesuai dan menjustifikasikannya apabila data mempunyai nilai ekstrem. Sudah bersedia untuk membanding dua set data.",
   6:"{n} berjaya membanding dua set data dengan min, median dan julat, dan membina hujah yang meyakinkan. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Sukatan Kecenderungan Memusat. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil mengira mod, median dan min dengan bimbingan rakan sebaya."
  },
  lampiran:{ pus1:R_PUS1, pus2:R_PUS2, pus3:R_PUS3, pus4:R_PUS4, pus5:R_PUS5, pus6:R_PUS6 },
  aras:ARAS
};
