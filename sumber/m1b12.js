/* Sumber kandungan — Matematik KSSM Tingkatan 1, Bab 12 Pengendalian Data.
   Fail ini disunting tangan. Jalankan `node bina.js m1b12` untuk menyemaknya
   dan menghasilkan bank-m1b12.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 1, Bahagian Pembangunan Kurikulum, muka 80 (dskp/matematik-t1.pdf).
   DSKP T1 menulis Standard Prestasi bagi bab ini sebagai satu jadual enam tahap
   (pengumpulan, pengorganisasian, perwakilan dan pentafsiran data); semua enam
   tahap dikekalkan.

   Rajah interaktif ialah widget `t1data` dalam widget-m1b12.js. Semua jawapan
   berangka dikira daripada data yang sama dengan rajah, dalam medan `kira`,
   dan dibandingkan oleh tools/semak-jawapan.js. */
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
const kekerapan = (d, x) => d.filter(v => v === x).length;

const SPI = [
"Mempamerkan pengetahuan asas tentang pengumpulan, pengorganisasian dan perwakilan data.",
"Mempamerkan kefahaman tentang pengumpulan, pengorganisasian dan perwakilan data.",
"Mengaplikasikan kefahaman tentang perwakilan data untuk membina perwakilan data.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang perwakilan dan pentafsiran data dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang perwakilan dan pentafsiran data dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang perwakilan dan pentafsiran data dalam konteks penyelesaian masalah bukan rutin."];

/* ---------- data ---------- */

/* Hentian 2: markah kuiz 15 murid (plot titik dan jadual kekerapan). */
const D_KUIZ = [3, 5, 4, 3, 2, 5, 4, 3, 4, 3, 5, 3, 2, 4, 3];
/* Hentian 3: sukan kegemaran 40 murid. */
const D_SUKAN = [["Bola", 12], ["Renang", 8], ["Lari", 6], ["Silat", 4], ["Tenis", 10]];
const JUM_SUKAN = D_SUKAN.reduce((a, x) => a + x[1], 0);
const sudutSukan = f => bunda(f / JUM_SUKAN * 360, 1);
/* Hentian 4: markah 12 murid (batang-dan-daun). */
const D_BATANG = [23, 35, 28, 41, 36, 32, 45, 29, 38, 33, 27, 44];
/* Hentian 5: masa 15 murid berlari (minit), histogram. */
const D_MASA = [11, 14, 18, 21, 23, 24, 26, 27, 29, 31, 33, 34, 36, 38, 42];
const kelas = (d, lo, hi) => d.filter(v => v >= lo && v <= hi).length;
/* Hentian 6: jualan bulanan sebuah kedai (RM ribu). */
const D_JUAL = [["Jan", 42], ["Feb", 44], ["Mac", 43], ["Apr", 47], ["Mei", 50], ["Jun", 53]];
const PURATA_NAIK = (D_JUAL[5][1] - D_JUAL[0][1]) / 5;

/* ---------- lampiran: rajah data interaktif ---------- */

const dat = (spec, kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t1data", kapsyen, alt }, spec, extra || {});
const R_JEN = dat({ mod: "jenis", i: 0, senarai: [
    ["Warna", "Warna baju sukan kegemaran", "k", "Contoh: merah, biru, hijau"],
    ["Adik-beradik", "Bilangan adik-beradik murid", "d", "Contoh: 0, 1, 2, 3"],
    ["Tinggi", "Tinggi murid (cm)", "l", "Contoh: 152.5 cm"],
    ["Sukan", "Jenis sukan kegemaran", "k", "Contoh: bola, renang, lari"],
    ["Buku", "Bilangan buku dibaca sebulan", "d", "Contoh: 0, 1, 2, 3, 4"],
    ["Berat beg", "Jisim beg sekolah (kg)", "l", "Contoh: 3.4 kg"]] },
  "Rajah 1 · Pilih satu data dengan gelongsor. Kotak yang menyala menunjukkan jenis data itu.",
  "Rajah interaktif pokok jenis data; gelongsor memilih satu pemboleh ubah dan menyalakan kotak jenisnya iaitu kategori, numerik diskret atau numerik selanjar");
const R_TIT = dat({ mod: "titik", data: D_KUIZ, n: 6, nama: "Markah", tajuk: "markah kuiz 15 murid" },
  "Rajah 1 · Markah kuiz 15 murid. Tolak gelongsor data untuk menambah satu titik demi satu titik dan lihat jadual kekerapan.",
  "Rajah interaktif plot titik dan jadual kekerapan bagi markah kuiz 15 murid dari 2 hingga 5; gelongsor menambah data satu demi satu");
const R_PAL = dat({ mod: "palang", data: D_SUKAN, ymaks: 12, tajuk: "sukan kegemaran 40 murid" },
  "Rajah 1 · Sukan kegemaran 40 murid. Pilih kategori, dan tukar antara carta palang dengan carta pai.",
  "Rajah interaktif carta palang dan carta pai bagi sukan kegemaran 40 murid; gelongsor memilih kategori dan menukar paparan");
const R_BAT = dat({ mod: "batang", data: D_BATANG, tajuk: "markah 12 murid" },
  "Rajah 1 · Plot batang-dan-daun bagi markah 12 murid. Kira dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif plot batang-dan-daun bagi markah 12 murid dari 23 hingga 45; gelongsor menambah data dan menyusun daun", { cabar: true });
const R_HIS = dat({ mod: "histogram", data: D_MASA, lebar: [5, 10], unit: "min", paksi: "Masa (min)", tajuk: "masa 15 murid berlari" },
  "Rajah 1 · Masa 15 murid berlari. Ubah selang kelas dan tunjukkan poligon kekerapan, kemudian semak jawapan.",
  "Rajah interaktif histogram bagi masa 15 murid berlari dengan selang kelas 5 atau 10 minit dan poligon kekerapan pilihan", { cabar: true });
const R_GAR = dat({ mod: "garis", data: D_JUAL, ymaks: 60, mula: [0, 40], unit: "RM ribu", tajuk: "jualan bulanan sebuah kedai" },
  "Rajah 1 · Jualan bulanan sebuah kedai (RM ribu). Pilih bulan, dan tukar tempat paksi-y bermula.",
  "Rajah interaktif graf garis jualan bulanan sebuah kedai dari Januari hingga Jun; gelongsor memilih bulan dan menukar permulaan paksi-y antara sifar dan empat puluh");

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Kantin Tinjauan", sk:"12.1.1 / 12.1.2 Soalan statistik, kaedah dan jenis data", lampiran:"jen1",
 kadNama:"Data", kadEm:"\u{1F4CA}", kadFakta:"Perkataan data ialah kata jamak bagi datum, iaitu satu fakta atau ukuran. Setiap tinjauan bermula dengan satu soalan yang baik.",
 bosKadNama:"Inkuiri Statistik", bosKadEm:"\u{1F50D}", bosKadFakta:"Inkuiri statistik bergerak dalam enam langkah: soalan, kumpul data, susun, wakilkan, tafsir dan sampaikan hasil. Awak sedang lalui langkah-langkah itu dalam bab ini.",
 soalan:[
 {j:"pilih",t:"Bilangan kad yang dikutip oleh seorang murid ialah data jenis:",p:["Numerik diskret","Numerik selanjar","Kategori","Kategori dan selanjar"],b:0,u:"Bilangan kad ialah nombor yang dikira, dan nilainya nombor bulat. Ia data numerik diskret."},
 {j:"pilih",t:"Warna kegemaran murid ialah data:",p:["Kategori","Numerik diskret","Numerik selanjar","Numerik sahaja"],b:0,u:"Warna ialah nama, bukan nombor. Data seperti ini dipanggil data kategori."},
 {j:"pilih",t:"Tinggi murid diukur dalam sentimeter. Data ini ialah:",p:["Numerik selanjar","Numerik diskret","Kategori","Kategori diskret"],b:0,u:"Tinggi diukur dan boleh ada pecahan atau perpuluhan, contohnya 152.5 cm. Ia data numerik selanjar."},
 {j:"pilih",t:"Dalam Rajah 1, pilih 'Adik-beradik'. Data itu dikelaskan sebagai:",p:["Numerik diskret","Numerik selanjar","Kategori","Kategori diskret"],b:0,u:"Bilangan adik-beradik ialah nombor bulat yang dikira, jadi ia numerik diskret."},
 {j:"pilih",t:"Dalam Rajah 1, pilih 'Tinggi'. Kotak yang menyala pada pokok jenis data ialah:",p:["Numerik, kemudian selanjar","Kategori sahaja","Numerik, kemudian diskret","Kategori, kemudian diskret"],b:0,u:"Tinggi ialah data numerik yang diukur, jadi kotak Numerik dan Selanjar menyala."},
 {j:"pilih",t:"Yang manakah soalan statistik?",p:["Berapa buku murid Tingkatan 1 kita baca sebulan?","Berapakah hasil tambah 5 dan 7 dalam soalan ini?","Berapakah bilangan hari dalam bulan Mac tahun ini?","Berapakah luas segi empat sama bersisi 4 cm ini?"],b:0,u:"Soalan statistik boleh dijawab dengan mengumpul data, dan jawapannya berbeza-beza antara murid."},
 {j:"pilih",t:"Awak menjatuhkan bola dari tiga ketinggian dan mengukur ketinggian lantunan. Kaedah pengumpulan data ini ialah:",p:["Eksperimen","Tinjauan","Temu bual","Pemerhatian"],b:0,u:"Mengubah keadaan dengan sengaja dan mengukur hasilnya ialah eksperimen."},
 {j:"susun",t:"Susun langkah inkuiri statistik daripada awal hingga akhir.",p:["Kemukakan soalan dan kumpul data","Susun data ke dalam jadual","Wakilkan data dengan carta atau graf","Analisis dan tafsir data","Sampaikan hasil dan kesimpulan"],b:[0,1,2,3,4],u:"Mulakan dengan soalan, kumpul dan susun data, wakilkan, tafsir, kemudian sampaikan hasil."}],
 bos:{j:"banyak",t:"Pilih SEMUA data yang bersifat numerik.",p:["Jisim beg sekolah","Bilangan adik-beradik","Warna mata murid","Bilangan pen dalam kotak pensel","Jenis sukan kegemaran","Tinggi badan murid"],b:[0,1,3,5],u:"Jisim beg, bilangan adik-beradik, bilangan pen dan tinggi ialah nombor. Warna mata dan jenis sukan ialah kategori."}},

{n:2, tempat:"Kiraan Markah", sk:"12.1.2 / 12.1.3 Jadual kekerapan dan plot titik", lampiran:"tit1",
 kadNama:"Kekerapan", kadEm:"\u{1F522}", kadFakta:"Kekerapan ialah bilangan kali sesuatu nilai muncul dalam data. Jumlah semua kekerapan sentiasa sama dengan bilangan data.",
 bosKadNama:"Tanda Palang", bosKadEm:"\u{270D}\u{FE0F}", bosKadFakta:"Mengira dengan tanda palang dalam kumpulan lima (empat garis dan satu garis silang) menjadikan kiraan jauh lebih laju dan kurang tersilap.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, gelongsor data hingga 15. Berapakah kekerapan markah 3?",b:kekerapan(D_KUIZ, 3),tol:0.01,u:"Titik pada markah 3 ialah 6, jadi f = 6.",kira:()=>kekerapan(D_KUIZ, 3)},
 {j:"nombor",t:"Dalam Rajah 1, gelongsor data hingga 15. Berapakah kekerapan markah 5?",b:kekerapan(D_KUIZ, 5),tol:0.01,u:"Markah 5 muncul 3 kali, jadi f = 3.",kira:()=>kekerapan(D_KUIZ, 5)},
 {j:"nombor",t:"Dalam Rajah 1, gelongsor data hingga 15. Berapakah jumlah kekerapan?",b:D_KUIZ.length,tol:0.01,u:"Jumlah kekerapan sama dengan bilangan data, iaitu 15 murid.",kira:()=>D_KUIZ.length},
 {j:"pilih",t:"Dalam Rajah 1 (15 data), markah manakah mempunyai titik paling banyak?",p:["3","4","5","2"],b:0,u:"Markah 3 ada 6 titik, lebih banyak daripada markah lain.",kira:()=>[2,3,4,5].reduce((m, x) => kekerapan(D_KUIZ, x) > kekerapan(D_KUIZ, m) ? x : m, 2)},
 {j:"nombor",t:"Dalam Rajah 1 (15 data), berapakah bilangan murid yang mendapat markah kurang daripada 4?",b:kekerapan(D_KUIZ, 2) + kekerapan(D_KUIZ, 3),tol:0.01,u:"Markah 2 ada 2 murid dan markah 3 ada 6 murid. 2 + 6 = 8 murid.",kira:()=>kekerapan(D_KUIZ, 2) + kekerapan(D_KUIZ, 3)},
 {j:"pilih",t:"Dalam satu jadual kekerapan, f bagi markah 2, 3 dan 4 ialah 2, 6 dan 4. Jumlah kekerapan ialah 15. Berapakah f bagi markah 5?",p:["3","4","5","2"],b:0,u:"15 − 2 − 6 − 4 = 3.",kira:()=>15 - 2 - 6 - 4},
 {j:"pilih",t:"Setiap titik dalam plot titik mewakili:",p:["Satu data","Satu kategori","Satu selang kelas","Jumlah kekerapan"],b:0,u:"Satu titik ialah satu data, contohnya markah seorang murid."},
 {j:"pilih",t:"Markah kuiz dalam Rajah 1 ialah data jenis:",p:["Numerik diskret","Numerik selanjar","Kategori","Kategori diskret"],b:0,u:"Markah ialah nombor bulat yang dikira, jadi ia numerik diskret."}],
 bos:{j:"nombor",t:"Dalam Rajah 1 (15 data), 3 murid lagi mendapat markah 4. Berapakah kekerapan markah 4 sekarang?",b:kekerapan(D_KUIZ, 4) + 3,tol:0.01,u:"Kekerapan asal markah 4 ialah 4. Tambah 3 murid, jadi 4 + 3 = 7.",kira:()=>kekerapan(D_KUIZ, 4) + 3}},

{n:3, tempat:"Kelab Sukan", sk:"12.1.3 / 12.1.4 Carta palang, carta pai dan menukar perwakilan", lampiran:"pal1",
 kadNama:"Carta Pai", kadEm:"\u{1F967}", kadFakta:"Carta pai mewakili keseluruhan data sebagai satu bulatan 360°. Setiap sektor ialah bahagian daripada keseluruhan itu.",
 bosKadNama:"Sektor Gabungan", bosKadEm:"\u{1F9E9}", bosKadFakta:"Dua sektor bersebelahan boleh digabungkan dengan menambah sudut masing-masing, sama seperti menambah kekerapannya.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih Bola. Berapakah kekerapannya?",b:12,tol:0.01,u:"Palang Bola bernilai 12 murid.",kira:()=>D_SUKAN[0][1]},
 {j:"nombor",t:"Dalam Rajah 1, berapakah jumlah kekerapan semua sukan?",b:JUM_SUKAN,tol:0.01,u:"12 + 8 + 6 + 4 + 10 = 40 murid.",kira:()=>D_SUKAN.reduce((a, x) => a + x[1], 0)},
 {j:"nombor",t:"Dalam Rajah 1, tukar kepada carta pai dan pilih Renang. Berapakah sudut sektor Renang (darjah)?",b:sudutSukan(8),tol:0.1,suf:"°",u:"8 ÷ 40 × 360° = 72°.",kira:()=>sudutSukan(8)},
 {j:"nombor",t:"Dalam Rajah 1, pilih Lari. Berapakah peratus murid yang memilih Lari?",b:bunda(6 / JUM_SUKAN * 100, 1),tol:0.1,suf:"%",u:"6 ÷ 40 × 100 = 15%.",kira:()=>bunda(6 / JUM_SUKAN * 100, 1)},
 {j:"pilih",t:"Sukan Silat mempunyai kekerapan 4 daripada 40 murid. Berapakah sudut sektornya dalam carta pai?",p:["36°","40°","4°","90°"],b:0,u:"4 ÷ 40 × 360° = 36°.",kira:()=>sudutSukan(4)},
 {j:"pilih",t:"Untuk membandingkan kekerapan beberapa kategori dengan mudah, perwakilan yang paling sesuai ialah:",p:["Carta palang","Graf garis","Plot batang-dan-daun","Poligon kekerapan"],b:0,u:"Palang yang berasingan memudahkan perbandingan tinggi kekerapan antara kategori."},
 {j:"pilih",t:"Dalam carta pai, sudut sektor bagi sesuatu kategori dikira dengan:",p:["f ÷ jumlah f × 360°","f × jumlah f ÷ 360°","f ÷ 360° × jumlah f","jumlah f ÷ f × 360°"],b:0,u:"Bahagian kategori ialah f ÷ jumlah f. Darabkan dengan 360° untuk mendapat sudut."},
 {j:"pilih",t:"Semua sudut sektor dalam sebuah carta pai berjumlah:",p:["360°","180°","100°","90°"],b:0,u:"Sektor-sektor membentuk satu bulatan penuh, iaitu 360°.",kira:()=>D_SUKAN.reduce((a, x) => a + sudutSukan(x[1]), 0)}],
 bos:{j:"nombor",t:"Dalam Rajah 1, sektor Bola dan sektor Tenis digabungkan. Berapakah sudut sektor gabungan itu (darjah)?",b:sudutSukan(12) + sudutSukan(10),tol:0.1,suf:"°",u:"Bola = 12 ÷ 40 × 360° = 108°. Tenis = 10 ÷ 40 × 360° = 90°. Jumlah = 198°.",kira:()=>sudutSukan(12) + sudutSukan(10)}},

{n:4, tempat:"Studio Daun", sk:"12.1.3 / 12.1.5 Plot batang-dan-daun dan pentafsiran", lampiran:"bat1",
 kadNama:"Kekunci", kadEm:"\u{1F511}", kadFakta:"Setiap plot batang-dan-daun perlu ada kekunci. Contohnya '4 | 1' bermaksud 41. Tanpa kekunci, pembaca tidak tahu nilai sebenar.",
 bosKadNama:"Daun Menaik", bosKadEm:"\u{1F343}", bosKadFakta:"Menyusun daun daripada kecil ke besar tidak mengubah data, tetapi menjadikan nilai terkecil, terbesar dan data di tengah mudah dicari.",
 soalan:[
 {j:"nombor",t:"Markah 12 murid: 23, 35, 28, 41, 36, 32, 45, 29, 38, 33, 27, 44. Dalam Rajah 1, berapakah bilangan daun pada batang 3?",b:D_BATANG.filter(v => Math.floor(v / 10) === 3).length,tol:0.01,u:"Data 30-an ialah 35, 36, 32, 38 dan 33. Ada 5 daun.",kira:()=>D_BATANG.filter(v => Math.floor(v / 10) === 3).length},
 {j:"nombor",t:"Dalam Rajah 1, berapakah markah tertinggi?",b:Math.max(...D_BATANG),tol:0.01,u:"Batang 4 mempunyai daun 5, jadi markah tertinggi ialah 45.",kira:()=>Math.max(...D_BATANG)},
 {j:"nombor",t:"Dalam Rajah 1, berapakah markah terendah?",b:Math.min(...D_BATANG),tol:0.01,u:"Batang 2 mempunyai daun 3, jadi markah terendah ialah 23.",kira:()=>Math.min(...D_BATANG)},
 {j:"nombor",t:"Dalam Rajah 1, berapakah beza antara markah tertinggi dengan markah terendah?",b:Math.max(...D_BATANG) - Math.min(...D_BATANG),tol:0.01,u:"45 − 23 = 22.",kira:()=>Math.max(...D_BATANG) - Math.min(...D_BATANG)},
 {j:"pilih",t:"Dalam plot batang-dan-daun, '4 | 1' bermaksud:",p:["41","4.1","5","14"],b:0,u:"Batang 4 dan daun 1 membentuk 41, jika kekunci menyatakan puluh dan sa.",kira:()=>41},
 {j:"nombor",t:"Dalam Rajah 1, berapakah bilangan murid yang mendapat lebih daripada 35 markah?",b:D_BATANG.filter(v => v > 35).length,tol:0.01,u:"Markah lebih daripada 35 ialah 41, 36, 45, 38 dan 44. Ada 5 murid.",kira:()=>D_BATANG.filter(v => v > 35).length},
 {j:"pilih",t:"Kelebihan plot batang-dan-daun ialah:",p:["Nilai data asal masih boleh dibaca","Ia hanya sesuai untuk data kategori","Ia menunjukkan peratus setiap kategori","Ia tidak memerlukan kekunci"],b:0,u:"Setiap daun ialah digit sebenar, jadi data asal tidak hilang."},
 {j:"pilih",t:"Dalam Rajah 1, tukar daun kepada 'Disusun'. Apakah yang menjadi lebih mudah dicari?",p:["Nilai terkecil dan terbesar setiap batang","Jumlah semua data dalam plot","Jenis data yang dipaparkan","Sudut sektor bagi setiap batang"],b:0,u:"Daun yang disusun menaik menjadikan nilai terkecil dan terbesar setiap batang berada di hujung."}],
 bos:{j:"nombor",t:"Satu markah baharu, 39, ditambah kepada data dalam Rajah 1. Berapakah bilangan daun pada batang 3 sekarang?",b:D_BATANG.concat([39]).filter(v => Math.floor(v / 10) === 3).length,tol:0.01,u:"Batang 3 asalnya ada 5 daun. Markah 39 ditambah pada batang 3, jadi menjadi 6 daun.",kira:()=>D_BATANG.concat([39]).filter(v => Math.floor(v / 10) === 3).length}},

{n:5, tempat:"Larian Sekolah", sk:"12.1.3 / 12.1.5 Histogram dan poligon kekerapan", lampiran:"his1",
 kadNama:"Histogram", kadEm:"\u{1F4F6}", kadFakta:"Palang histogram bersentuhan kerana data selanjar tidak mempunyai jurang antara kelas. Luas setiap palang mewakili kekerapan kelas itu.",
 bosKadNama:"Poligon", bosKadEm:"\u{1F53A}", bosKadFakta:"Poligon kekerapan dilukis dengan menyambung titik tengah bahagian atas setiap palang, dan ditamatkan pada paksi dengan satu kelas kosong di setiap hujung.",
 soalan:[
 {j:"nombor",t:"Masa 15 murid berlari (minit): 11, 14, 18, 21, 23, 24, 26, 27, 29, 31, 33, 34, 36, 38, 42. Dalam Rajah 1, dengan selang 10 min, berapakah kekerapan kelas 20 - 29?",b:kelas(D_MASA, 20, 29),tol:0.01,u:"Data dalam kelas 20 - 29 ialah 21, 23, 24, 26, 27 dan 29. Ada 6 murid.",kira:()=>kelas(D_MASA, 20, 29)},
 {j:"nombor",t:"Dalam Rajah 1, dengan selang 5 min, berapakah bilangan kelas?",b:7,tol:0.01,u:"Kelas ialah 10 - 14, 15 - 19, 20 - 24, 25 - 29, 30 - 34, 35 - 39 dan 40 - 44. Ada 7 kelas.",kira:()=>Math.floor((42 - 10) / 5) + 1},
 {j:"nombor",t:"Dalam Rajah 1, dengan selang 5 min, berapakah kekerapan kelas 20 - 24?",b:kelas(D_MASA, 20, 24),tol:0.01,u:"Data dalam kelas 20 - 24 ialah 21, 23 dan 24. Ada 3 murid.",kira:()=>kelas(D_MASA, 20, 24)},
 {j:"nombor",t:"Dalam Rajah 1, dengan selang 10 min, berapakah kekerapan kelas 40 - 49?",b:kelas(D_MASA, 40, 49),tol:0.01,u:"Hanya 42 berada dalam kelas 40 - 49, jadi kekerapannya 1.",kira:()=>kelas(D_MASA, 40, 49)},
 {j:"nombor",t:"Dalam Rajah 1, berapakah jumlah kekerapan semua kelas?",b:D_MASA.length,tol:0.01,u:"Jumlah kekerapan sama dengan bilangan data, iaitu 15.",kira:()=>D_MASA.length},
 {j:"pilih",t:"Apakah beza histogram dengan carta palang biasa?",p:["Palang histogram bersentuhan kerana data selanjar","Histogram untuk data kategori sahaja","Histogram tiada paksi kekerapan","Palang histogram mesti berjarak"],b:0,u:"Data selanjar dibahagi kepada kelas tanpa jurang, jadi palang bersentuhan."},
 {j:"pilih",t:"Poligon kekerapan dilukis dengan menyambung:",p:["Titik tengah atas setiap palang","Sudut kiri atas setiap palang","Dasar setiap palang","Hujung kanan setiap palang"],b:0,u:"Titik tengah bahagian atas setiap palang disambung dengan garis lurus."},
 {j:"pilih",t:"Dalam Rajah 1, dengan selang 10 min, kelas manakah mempunyai kekerapan tertinggi?",p:["20 - 29","10 - 19","30 - 39","40 - 49"],b:0,u:"Kelas 20 - 29 mempunyai 6 murid, lebih banyak daripada kelas lain.",kira:()=>{ const k = [[10,19],[20,29],[30,39],[40,49]].map(x => kelas(D_MASA, x[0], x[1])); return k.indexOf(Math.max(...k)) === 1; }}],
 bos:{j:"nombor",t:"Dengan selang 5 min, berapa murid mengambil masa 25 min atau lebih tetapi kurang daripada 40 min?",b:kelas(D_MASA, 25, 39),tol:0.01,u:"Kelas 25 - 29 ada 3, kelas 30 - 34 ada 3 dan kelas 35 - 39 ada 2. 3 + 3 + 2 = 8 murid.",kira:()=>kelas(D_MASA, 25, 39)}},

{n:6, tempat:"Graf Jujur", sk:"12.1.5 / 12.1.6 Graf garis, ramalan dan perwakilan beretika", lampiran:"gar1",
 kadNama:"Paksi Dipotong", kadEm:"\u{2702}\u{FE0F}", kadFakta:"Memotong paksi-y supaya bermula dari nombor besar membuat kenaikan kecil kelihatan curam. Perwakilan yang beretika menunjukkan pemotongan itu dengan jelas.",
 bosKadNama:"Ramalan", bosKadEm:"\u{1F52E}", bosKadFakta:"Ramalan daripada graf garis hanya andaian berdasarkan corak lalu. Semakin panjang tempoh data dan semakin stabil coraknya, semakin munasabah ramalan itu.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih Jun. Berapakah jualan pada bulan Jun (RM ribu)?",b:D_JUAL[5][1],tol:0.01,u:"Titik Jun berada pada RM53 ribu.",kira:()=>D_JUAL[5][1]},
 {j:"nombor",t:"Dalam Rajah 1, berapakah kenaikan jualan dari Mac ke April (RM ribu)?",b:D_JUAL[3][1] - D_JUAL[2][1],tol:0.01,u:"47 − 43 = 4.",kira:()=>D_JUAL[3][1] - D_JUAL[2][1]},
 {j:"nombor",t:"Purata kenaikan sebulan dari Januari ke Jun ialah RM2.2 ribu. Anggarkan jualan Julai kepada 1 tempat perpuluhan (RM ribu).",b:bunda(D_JUAL[5][1] + PURATA_NAIK, 1),tol:0.05,u:"Jualan Jun ialah 53. Tambah purata kenaikan 2.2, jadi 53 + 2.2 = 55.2.",kira:()=>bunda(D_JUAL[5][1] + PURATA_NAIK, 1)},
 {j:"pilih",t:"Dalam Rajah 1, apabila paksi-y dipotong dan bermula dari 40, kenaikan jualan kelihatan:",p:["Lebih curam daripada sebenar","Lebih landai daripada sebenar","Sama seperti sebenar","Tiada kenaikan"],b:0,u:"Julat paksi menjadi lebih pendek, jadi garis kelihatan lebih curam."},
 {j:"pilih",t:"Perwakilan data yang beretika mesti:",p:["Bermula paksi-y dari sifar atau menunjukkan pemotongan","Memilih skala yang menonjolkan kesimpulan kita","Menyembunyikan data yang tidak menyokong kita","Menggunakan warna terang sahaja untuk garis"],b:0,u:"Pembaca berhak melihat data sebenar. Pemotongan paksi mesti dinyatakan supaya tidak mengelirukan."},
 {j:"nombor",t:"Dari Januari ke Jun, jualan naik daripada RM42 ribu kepada RM53 ribu. Berapakah peratus kenaikan itu kepada 1 tempat perpuluhan?",b:bunda((D_JUAL[5][1] - D_JUAL[0][1]) / D_JUAL[0][1] * 100, 1),tol:0.05,suf:"%",u:"Kenaikan = 53 − 42 = 11. 11 ÷ 42 × 100 = 26.2%.",kira:()=>bunda((D_JUAL[5][1] - D_JUAL[0][1]) / D_JUAL[0][1] * 100, 1)},
 {j:"pilih",t:"Ramalan daripada graf garis lebih boleh dipercayai jika:",p:["Corak data stabil dalam tempoh panjang","Hanya dua titik data yang digunakan","Paksi-y dipotong dengan banyak sekali","Data sebelum bulan Mac telah dibuang"],b:0,u:"Corak yang stabil dan data yang cukup memberi asas yang lebih baik untuk ramalan."},
 {j:"pilih",t:"Dalam Rajah 1, paksi-y bermula dari 0 atau dari 40 (dipotong). Yang manakah menunjukkan kenaikan sebenar dengan lebih jujur?",p:["Bermula dari 0","Bermula dari 40","Kedua-duanya sama jujur","Tidak ada perbezaan"],b:0,u:"Paksi dari 0 mengekalkan nisbah sebenar antara nilai. Paksi yang dipotong membesar-besarkan perubahan."}],
 bos:{j:"buka",
  t:"Sebuah kedai mahu menarik pelabur. Pemiliknya menunjukkan graf jualan dengan paksi-y bermula dari 40 supaya kenaikan kelihatan besar.",
  arahan:"Nilaikan sama ada perwakilan itu beretika. Nyatakan apa yang mengelirukan, lukis atau huraikan graf yang lebih jujur, dan terangkan sekurang-kurangnya satu perkara lain yang perlu dilaporkan bersama data.",
  u:"Jawapan TP6 yang kukuh mengenal pasti paksi yang dipotong, menerangkan kesannya kepada persepsi pembaca, mengesyorkan paksi dari sifar atau petunjuk pemotongan yang jelas, dan menyebut perkara seperti tempoh data dan sumber."}}
];

module.exports = {
  id:"m1b12", tingkatan:1, kod:"12.0 Pengendalian Data",
  tajuk:"Graf Jujur",
  subtajuk:"Matematik Ting. 1 · Bab 12 Pengendalian Data",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal jenis data (kategori, numerik diskret dan numerik selanjar) serta langkah dalam inkuiri statistik. Langkah seterusnya ialah membina jadual kekerapan daripada data.",
   2:"{n} memahami cara mengumpul dan menyusun data dalam jadual kekerapan dan plot titik. Perlu lebih latihan mengira kekerapan dan jumlah kekerapan sebelum bergerak ke TP3.",
   3:"{n} boleh membina dan menukar antara carta palang dan carta pai, termasuk mengira sudut sektor dan peratus. Galakkan menyemak jumlah sudut sentiasa 360°.",
   4:"{n} mampu membaca dan mentafsir plot batang-dan-daun serta menyelesaikan masalah rutin yang mudah menggunakan data. Seterusnya latih mentafsir histogram.",
   5:"{n} dapat mentafsir histogram dan poligon kekerapan, termasuk mengubah selang kelas dan menyelesaikan masalah kompleks. Sudah bersedia untuk menilai perwakilan data.",
   6:"{n} berjaya menilai perwakilan data secara beretika, mengenal pasti paksi yang dipotong dan membuat ramalan yang munasabah. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pengendalian Data. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyebut jenis setiap data dengan bimbingan rakan sebaya."
  },
  lampiran:{ jen1:R_JEN, tit1:R_TIT, pal1:R_PAL, bat1:R_BAT, his1:R_HIS, gar1:R_GAR },
  aras:ARAS
};
