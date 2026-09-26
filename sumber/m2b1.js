/* Sumber kandungan — Matematik KSSM Tingkatan 2, Bab 1 Pola dan Jujukan.
   Fail ini disunting tangan. Jalankan `node bina.js m2b1` untuk menyemaknya
   dan menghasilkan bank-m2b1.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 33 (dskp/matematik-t2.pdf).
   DSKP menulis enam tahap penuh bagi bab ini, jadi tiada penyesuaian diperlukan.

   Rajah interaktif ialah widget `t2pola` dalam widget-m2b1.js. Semua jawapan
   berangka dikira dengan kod dalam medan `kira` dan dibandingkan oleh
   tools/semak-jawapan.js. Tanda < dan > dalam teks ditulis sebagai entiti HTML
   oleh fungsi htmlkan() di hujung fail. */

const lin = (a, d, n) => a + (n - 1) * d;
const fib = n => { let a = 1, b = 1; for (let i = 3; i <= n; i++) { const t = a + b; a = b; b = t; } return n <= 2 ? 1 : b; };
const segi3 = n => n * (n + 1) / 2;
const C = (r, k) => { let v = 1; for (let i = 1; i <= k; i++) v = v * (r - k + i) / i; return Math.round(v); };

const SPI = [
"Mempamerkan pengetahuan asas tentang jujukan.",
"Mempamerkan kefahaman tentang pola dan jujukan.",
"Mengaplikasikan kefahaman tentang pola dan jujukan untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang pola dan jujukan dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang pola dan jujukan dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang pola dan jujukan dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran: rajah pola interaktif ---------- */

const R_POL1 = {
  jenis:"interaktif", w:"t2pola", mod:"jujukan", nMaks:8, awal:{ j:0, n:5 },
  set:[
    { nama:"Nombor genap", t:"lin", a:2, d:2, rumus:"2n" },
    { nama:"Nombor ganjil", t:"lin", a:1, d:2, rumus:"2n - 1" },
    { nama:"Fibonacci", t:"fib", rumus:"T(n-1) + T(n-2)" },
    { nama:"Nombor ganda dua", t:"ganda", a:1, r:2, rumus:["2", { p:"n-1" }] }],
  kapsyen:"Rajah 1 · Pilih jenis jujukan dan gerakkan n. Perhatikan beza antara sebutan berturut-turut.",
  alt:"Rajah interaktif jubin jujukan nombor genap, nombor ganjil, Fibonacci dan nombor ganda dua; gelongsor memilih jenis jujukan dan bilangan sebutan"
};
const R_POL2 = {
  jenis:"interaktif", w:"t2pola", mod:"pascal", rMaks:7, awal:{ r:4 },
  kapsyen:"Rajah 1 · Gerakkan gelongsor untuk menambah baris Segi Tiga Pascal. Baris terakhir berwarna merah.",
  alt:"Rajah interaktif Segi Tiga Pascal dari baris sifar hingga baris tujuh; gelongsor menentukan bilangan baris dan jumlah baris terakhir ditunjukkan"
};
const R_POL3 = {
  jenis:"interaktif", w:"t2pola", mod:"mancis", bentuk:["segiempat", "segitiga"], nMaks:8, awal:{ n:3, b:0 },
  kapsyen:"Rajah 1 · Susun batang mancis berderet. Batang baharu berwarna merah. Pilih corak dan gerakkan n.",
  alt:"Rajah interaktif corak batang mancis berbentuk segi empat atau segi tiga berderet; gelongsor menukar bilangan bentuk dan corak, dan bilangan batang ditunjukkan"
};
const R_POL4 = {
  jenis:"interaktif", w:"t2pola", mod:"jujukan", nMaks:8, awal:{ j:0, n:4 }, cabar:true,
  set:[{ nama:"Kerusi dalam setiap baris", t:"lin", a:5, d:4, rumus:"4n + 1" }],
  kapsyen:"Rajah 1 · Baris pertama 5 kerusi, setiap baris seterusnya bertambah 4. Kira dahulu, kemudian semak dengan rajah.",
  alt:"Rajah interaktif jubin jujukan bilangan kerusi setiap baris bermula lima dan bertambah empat; sebutan ke-n dan rumus disembunyikan dalam mod cabar"
};
const R_POL5 = {
  jenis:"interaktif", w:"t2pola", mod:"titik", bentuk:"segitiga", nMaks:8, awal:{ n:4 }, cabar:true,
  kapsyen:"Rajah 1 · Timbunan tin: baris pertama 1 tin, baris kedua 2 tin, dan seterusnya. Kira dahulu, kemudian semak.",
  alt:"Rajah interaktif timbunan titik berbentuk segi tiga; jumlah titik dan rumus disembunyikan dalam mod cabar sehingga murid menyemak"
};
const R_POL6 = {
  jenis:"interaktif", w:"t2pola", mod:"titik", bentuk:["segiempat", "segitiga", "oblong"], nMaks:8, awal:{ n:5, b:0 },
  kapsyen:"Rajah 1 · Pilih corak titik dan gerakkan n. Lapisan baharu berwarna merah. Bandingkan ketiga-tiga corak.",
  alt:"Rajah interaktif corak titik segi empat sama, segi tiga dan segi empat tepat; gelongsor menukar bilangan lapisan dan corak, dan jumlah titik ditunjukkan"
};

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Kedai Nombor", sk:"1.1.1 / 1.2.1 Pola nombor dan maksud jujukan", lampiran:"pol1",
 kadNama:"Jujukan", kadEm:"\u{1F522}", kadFakta:"Jujukan ialah senarai nombor yang disusun mengikut satu peraturan. Setiap nombor dalam senarai dipanggil sebutan.",
 bosKadNama:"Fibonacci", bosKadEm:"\u{1F407}", bosKadFakta:"Jujukan Fibonacci dinamakan sempena Leonardo dari Pisa, yang menulis tentang jujukan ini dalam bukunya pada tahun 1202 melalui masalah bilangan arnab.",
 soalan:[
 {j:"pilih",t:"Jujukan ialah senarai nombor yang disusun mengikut:",p:["Satu pola atau peraturan tertentu","Saiz nombor dari yang terkecil sahaja","Bilangan digit yang ada dalam setiap nombor","Susunan mana-mana yang murid itu suka"],b:0,u:"Sesuatu jujukan mempunyai pola, jadi kita boleh meneka sebutan seterusnya."},
 {j:"nombor",t:"Dalam Rajah 1, pilih Nombor ganjil dan tetapkan n = 6. Berapakah sebutan ke-6?",b:lin(1,2,6),tol:0.01,u:"Nombor ganjil ialah 1, 3, 5, 7, 9, 11. Sebutan ke-6 ialah 11.",kira:()=>lin(1,2,6)},
 {j:"nombor",t:"Dalam Rajah 1, pilih Nombor genap dan tetapkan n = 7. Berapakah sebutan ke-7?",b:lin(2,2,7),tol:0.01,u:"Nombor genap ialah 2, 4, 6, 8, 10, 12, 14. Sebutan ke-7 ialah 14.",kira:()=>lin(2,2,7)},
 {j:"pilih",t:"Dalam Rajah 1, pilih Fibonacci. Selepas dua sebutan pertama, setiap sebutan diperoleh dengan:",p:["Menambah dua sebutan sebelumnya","Menambah 2 kepada sebutan sebelumnya","Mendarab sebutan sebelumnya dengan 2","Menolak sebutan sebelumnya daripada 10"],b:0,u:"1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, dan seterusnya."},
 {j:"nombor",t:"Dalam Rajah 1, pilih Fibonacci dan tetapkan n = 8. Berapakah sebutan ke-8?",b:fib(8),tol:0.01,u:"Jujukan Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21. Sebutan ke-8 ialah 21.",kira:()=>fib(8)},
 {j:"pilih",t:"Jujukan 3, 6, 9, 12, ... mempunyai pola:",p:["Tambah 3 pada setiap sebutan","Darab 3 pada setiap sebutan","Tambah 2 pada setiap sebutan berturut","Tambah 4 pada setiap sebutan berturut"],b:0,u:"6 - 3 = 3, 9 - 6 = 3 dan 12 - 9 = 3, jadi setiap sebutan bertambah 3."},
 {j:"susun",t:"Susun langkah mengenal pola jujukan 5, 8, 11, 14.",p:["Kira beza antara 5 dan 8, iaitu 3","Semak beza antara 8 dan 11 serta 11 dan 14, juga 3","Simpulkan pola: tambah 3 setiap kali","Guna pola untuk menulis sebutan seterusnya, iaitu 17"],b:[0,1,2,3],u:"Cari beza, semak bezanya tetap, tulis pola, kemudian lanjutkan jujukan."},
 {j:"banyak",t:"Pilih SEMUA nombor genap.",p:["18","34","50","27","41","65"],b:[0,1,2],u:"Nombor genap boleh dibahagi tepat dengan 2 dan berakhir dengan 0, 2, 4, 6 atau 8."}],
 bos:{j:"banyak",t:"Dalam Rajah 1, semak sebutan keempat setiap jujukan. Pilih SEMUA jujukan yang sebutan keempatnya ialah 8.",p:["Nombor genap","Nombor ganda dua","Nombor ganjil","Fibonacci"],b:[0,1],u:"Nombor genap: 2, 4, 6, 8. Nombor ganda dua: 1, 2, 4, 8. Nombor ganjil ke-4 ialah 7 dan Fibonacci ke-4 ialah 3."}},

{n:2, tempat:"Taman Pascal", sk:"1.1.1 Pola nombor: Segi Tiga Pascal dan Fibonacci", lampiran:"pol2",
 kadNama:"Blaise Pascal", kadEm:"\u{1F53A}", kadFakta:"Segi Tiga Pascal dinamakan sempena ahli matematik Perancis Blaise Pascal, tetapi corak ini sudah dikenali di China dan Parsi berabad sebelum beliau.",
 bosKadNama:"Jumlah Baris", bosKadEm:"\u{2795}", bosKadFakta:"Jumlah nombor dalam setiap baris Segi Tiga Pascal ialah dua kuasa nombor baris, jadi ia berganda setiap kali: 1, 2, 4, 8, 16.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan baris 4. Berapakah nombor ketiga dari kiri dalam baris itu?",b:C(4,2),tol:0.01,u:"Baris 4 ialah 1, 4, 6, 4, 1. Nombor ketiga ialah 6.",kira:()=>C(4,2)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan baris 5. Berapakah jumlah semua nombor dalam baris itu?",b:32,tol:0.01,u:"Baris 5 ialah 1, 5, 10, 10, 5, 1. Jumlahnya ialah 32, iaitu 2 kuasa 5.",kira:()=>[0,1,2,3,4,5].reduce((j,k)=>j+C(5,k),0)},
 {j:"pilih",t:"Dalam Segi Tiga Pascal, setiap nombor di dalam (bukan 1 di tepi) diperoleh dengan:",p:["Menambah dua nombor tepat di atasnya","Mendarab dua nombor yang tepat di atasnya","Menolak nombor di atasnya daripada 10","Menambah 1 kepada nombor di sebelah kirinya"],b:0,u:"Contohnya 1 + 3 = 4 dan 3 + 3 = 6 dalam baris di bawahnya."},
 {j:"nombor",t:"Dalam baris 6 Segi Tiga Pascal, dua nombor bersebelahan ialah 15 dan 20. Berapakah nombor tepat di bawah kedua-duanya dalam baris 7?",b:35,tol:0.01,u:"Nombor itu ialah 15 + 20 = 35, iaitu nombor di tengah baris 7.",kira:()=>C(6,2)+C(6,3)},
 {j:"pilih",t:"Jumlah nombor dalam setiap baris Segi Tiga Pascal membentuk jujukan:",p:["1, 2, 4, 8, 16, ...","1, 3, 6, 10, 15, ...","2, 4, 6, 8, 10, ...","1, 1, 2, 3, 5, ..."],b:0,u:"Jumlah baris 0 hingga 4 ialah 1, 2, 4, 8, 16. Ia berganda setiap kali."},
 {j:"pilih",t:"Nombor Fibonacci: 1, 1, 2, 3, 5, 8, 13, ... Apakah sebutan seterusnya?",p:["21","20","18","26"],b:0,u:"8 + 13 = 21.",kira:()=>8+13},
 {j:"susun",t:"Susun langkah membina baris 4 Segi Tiga Pascal daripada baris 3, iaitu 1, 3, 3, 1.",p:["Tulis 1 di hujung kiri","Tambah 1 + 3 untuk mendapat 4","Tambah 3 + 3 untuk mendapat 6, kemudian 3 + 1 untuk mendapat 4","Tulis 1 di hujung kanan"],b:[0,1,2,3],u:"Baris 4 ialah 1, 4, 6, 4, 1."},
 {j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang Segi Tiga Pascal.",p:["Setiap baris bermula dan berakhir dengan 1","Baris 4 ialah 1, 4, 6, 4, 1","Nombor dalam setiap baris bersimetri","Jumlah baris 4 ialah 10","Baris 3 mempunyai 5 nombor","Nombor di tengah baris sentiasa 1"],b:[0,1,2],u:"Jumlah baris 4 ialah 16 dan baris 3 hanya ada 4 nombor (1, 3, 3, 1). Nombor di tengah bukan sentiasa 1."}],
 bos:{j:"nombor",t:"Dalam Rajah 1, jumlah nombor dalam baris r ialah 2 kuasa r. Jika jumlah suatu baris ialah 128, baris berapakah itu?",b:7,tol:0.01,u:"2 kuasa 7 = 128, jadi baris 7. Baris 7 ialah 1, 7, 21, 35, 35, 21, 7, 1.",kira:()=>Math.log2(128)}},

{n:3, tempat:"Kilang Mancis", sk:"1.2.2 Melengkapkan dan melanjutkan jujukan; 1.3.1 Generalisasi pola", lampiran:"pol3",
 kadNama:"Beza Tetap", kadEm:"\u{1F4CF}", kadFakta:"Apabila beza antara sebutan berturut-turut sentiasa sama, kita boleh menulis rumus untuk mana-mana sebutan tanpa menyenaraikan semua sebutan sebelumnya.",
 bosKadNama:"Rumus Linear", bosKadEm:"\u{1F9EE}", bosKadFakta:"Bagi corak 3n + 1, pekali n ialah beza antara sebutan, dan 1 ialah bilangan batang tambahan pada permulaan corak.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih segi empat dan tetapkan n = 4. Berapakah batang mancis yang digunakan?",b:13,tol:0.01,suf:"batang",u:"Segi empat pertama guna 4 batang, dan setiap segi empat tambahan guna 3 batang. 4 + 3 + 3 + 3 = 13.",kira:()=>4+3*3},
 {j:"nombor",t:"Dalam Rajah 1, pilih segi tiga dan tetapkan n = 5. Berapakah batang mancis yang digunakan?",b:11,tol:0.01,suf:"batang",u:"Segi tiga pertama guna 3 batang, dan setiap segi tiga tambahan guna 2 batang. 3 + 4 × 2 = 11.",kira:()=>3+4*2},
 {j:"pilih",t:"Pola segi empat mancis ialah 4, 7, 10, 13, ... Berapakah batang mancis bagi 6 segi empat?",p:["19","18","20","22"],b:0,u:"Sebutan ke-5 ialah 16 dan sebutan ke-6 ialah 19.",kira:()=>lin(4,3,6)},
 {j:"pilih",t:"Setiap kali satu segi empat ditambah pada baris mancis, bilangan batang mancis bertambah sebanyak:",p:["3 batang","4 batang","2 batang","1 batang"],b:0,u:"Segi empat baharu berkongsi satu sisi, jadi hanya 3 batang baharu diperlukan."},
 {j:"pilih",t:"Manakah ialah rumus bilangan batang mancis bagi n segi empat berderet?",p:["3n + 1","4n + 1","3n","n + 3"],b:0,u:"Bagi n = 1: 3 + 1 = 4. Bagi n = 2: 6 + 1 = 7. Jadi rumusnya 3n + 1."},
 {j:"nombor",t:"Corak segi tiga mancis ialah 3, 5, 7, 9, ... Berapakah sebutan ke-6?",b:lin(3,2,6),tol:0.01,u:"Beza ialah 2. Sebutan ke-6 = 3 + 5 × 2 = 13.",kira:()=>lin(3,2,6)},
 {j:"susun",t:"Susun langkah menulis rumus bagi corak segi tiga mancis 3, 5, 7, 9.",p:["Kira beza antara sebutan berturut-turut, iaitu 2","Tulis 2n kerana beza ialah 2","Bandingkan 2n dengan sebutan pertama: 2(1) = 2 tetapi sebutan pertama ialah 3","Tambah 1 kepada 2n, jadi rumusnya 2n + 1"],b:[0,1,2,3],u:"Rumus bentuk an + b: a ialah beza dan b membetulkan sebutan pertama."},
 {j:"banyak",t:"Pilih SEMUA jujukan yang mempunyai beza 3 antara sebutan berturut-turut.",p:["4, 7, 10, 13","10, 13, 16, 19","2, 5, 8, 11","3, 5, 7, 9","1, 4, 9, 16","6, 12, 18, 24"],b:[0,1,2],u:"3, 5, 7, 9 bertambah 2, 1, 4, 9, 16 bertambah 3, 5, 7 dan 6, 12, 18, 24 bertambah 6."}],
 bos:{j:"nombor",t:"Dalam Rajah 1, tetapkan n = 8 bagi corak segi empat dan segi tiga. Berapakah beza bilangan batang mancis antara 8 segi empat dengan 8 segi tiga?",b:8,tol:0.01,suf:"batang",u:"8 segi empat: 3 × 8 + 1 = 25 batang. 8 segi tiga: 2 × 8 + 1 = 17 batang. Beza ialah 25 - 17 = 8.",kira:()=>(3*8+1)-(2*8+1)}},

{n:4, tempat:"Deretan Kerusi", sk:"1.3.1 / 1.3.2 Rumus sebutan ke-n dan sebutan tertentu", lampiran:"pol4",
 kadNama:"Sebutan Ke-n", kadEm:"\u{1FA91}", kadFakta:"Rumus sebutan ke-n membolehkan kita mencari sebutan ke-100 tanpa menulis 99 sebutan sebelumnya.",
 bosKadNama:"Jujukan Menurun", bosKadEm:"\u{1F4C9}", bosKadFakta:"Jika beza negatif, jujukan menurun. Contohnya 50, 46, 42 mempunyai beza -4 dan sebutannya semakin kecil.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, baris pertama ada 5 kerusi dan setiap baris seterusnya bertambah 4 kerusi. Kira dahulu bilangan kerusi dalam baris ke-8, kemudian semak dengan rajah.",b:lin(5,4,8),tol:0.01,suf:"kerusi",u:"Sebutan ke-8 = 5 + 7 × 4 = 33, atau guna rumus 4n + 1 = 33.",kira:()=>lin(5,4,8)},
 {j:"nombor",t:"Menggunakan corak dalam Rajah 1, berapakah kerusi dalam baris ke-15?",b:lin(5,4,15),tol:0.01,suf:"kerusi",u:"Rumus sebutan ke-n ialah 4n + 1. Bagi n = 15: 4 × 15 + 1 = 61.",kira:()=>4*15+1},
 {j:"pilih",t:"Jujukan 7, 10, 13, 16, ... mempunyai rumus sebutan ke-n:",p:["3n + 4","3n + 7","4n + 3","7n + 3"],b:0,u:"Beza ialah 3. Bagi n = 1: 3 + 4 = 7. Bagi n = 2: 6 + 4 = 10."},
 {j:"nombor",t:"Sebutan ke-n bagi suatu jujukan ialah 3n + 4. Berapakah sebutan ke-10?",b:34,tol:0.01,u:"3 × 10 + 4 = 34.",kira:()=>3*10+4},
 {j:"nombor",t:"Jujukan 50, 46, 42, 38, ... Berapakah sebutan ke-9?",b:lin(50,-4,9),tol:0.01,u:"Beza ialah -4. Sebutan ke-9 = 50 + 8 × (-4) = 18.",kira:()=>lin(50,-4,9)},
 {j:"pilih",t:"Jujukan 50, 46, 42, 38, ... mempunyai rumus sebutan ke-n:",p:["54 − 4n","50 − 4n","46 − 4n","4n + 46"],b:0,u:"Bagi n = 1: 54 - 4 = 50. Bagi n = 2: 54 - 8 = 46."},
 {j:"nombor",t:"Sebutan ke-n bagi suatu jujukan ialah 5n − 3. Sebutan yang ke berapakah bernilai 37?",b:8,tol:0.01,u:"5n - 3 = 37, jadi 5n = 40 dan n = 8.",kira:()=>(37+3)/5},
 {j:"pilih",t:"Adakah 100 satu sebutan dalam jujukan 4, 8, 12, 16, ...?",p:["Ya, kerana 100 ÷ 4 = 25, iaitu sebutan ke-25","Tidak, kerana 100 bukan nombor ganjil","Tidak, kerana 100 melebihi sebutan ke-20","Ya, kerana 100 ialah nombor genap sahaja"],b:0,u:"Rumus sebutan ke-n ialah 4n. 4n = 100 memberi n = 25, iaitu nombor bulat."}],
 bos:{j:"nombor",t:"Dalam Rajah 1, dewan itu ada 12 baris. Berapakah jumlah kerusi dalam 3 baris terakhir, iaitu baris 10, 11 dan 12?",b:lin(5,4,10)+lin(5,4,11)+lin(5,4,12),tol:0.01,suf:"kerusi",u:"Baris 10 ialah 41, baris 11 ialah 45 dan baris 12 ialah 49. Jumlahnya 41 + 45 + 49 = 135.",kira:()=>(4*10+1)+(4*11+1)+(4*12+1)}},

{n:5, tempat:"Timbunan Tin", sk:"1.3.2 / 1.3.3 Nombor segi tiga dan masalah pola", lampiran:"pol5",
 kadNama:"Nombor Segi Tiga", kadEm:"\u{1F3B3}", kadFakta:"Nombor segi tiga 1, 3, 6, 10, 15 ialah bilangan tin dalam timbunan berbentuk segi tiga. Sepuluh pin dalam permainan boling juga tersusun dalam bentuk ini.",
 bosKadNama:"Dua Segi Tiga", bosKadEm:"\u{1F7E6}", bosKadFakta:"Dua nombor segi tiga berturut-turut sentiasa berjumlah nombor segi empat sama. Contohnya 6 + 10 = 16, iaitu 4 kuasa dua.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih n = 6 untuk timbunan tin itu. Kira dahulu jumlah tin, kemudian semak dengan rajah.",b:segi3(6),tol:0.01,suf:"tin",u:"1 + 2 + 3 + 4 + 5 + 6 = 21, atau 6 × 7 ÷ 2 = 21.",kira:()=>segi3(6)},
 {j:"nombor",t:"Dalam Rajah 1, berapakah tin tambahan diperlukan apabila timbunan bertambah daripada 5 baris kepada 6 baris?",b:segi3(6)-segi3(5),tol:0.01,suf:"tin",u:"Baris baharu ada 6 tin. 21 - 15 = 6.",kira:()=>segi3(6)-segi3(5)},
 {j:"pilih",t:"Nombor segi tiga 1, 3, 6, 10, 15, ... Beza antara sebutan berturut-turut ialah:",p:["2, 3, 4, 5, ...","2, 2, 2, 2, ...","3, 3, 3, 3, ...","1, 2, 4, 8, ..."],b:0,u:"3 - 1 = 2, 6 - 3 = 3, 10 - 6 = 4, 15 - 10 = 5. Bezanya bertambah 1 setiap kali."},
 {j:"nombor",t:"Berapakah jumlah tin dalam timbunan berbentuk segi tiga yang mempunyai 10 baris? Guna rumus n × (n + 1) ÷ 2.",b:segi3(10),tol:0.01,suf:"tin",u:"10 × 11 ÷ 2 = 55.",kira:()=>segi3(10)},
 {j:"nombor",t:"Sebuah timbunan tin berbentuk segi tiga mempunyai 28 tin. Berapakah bilangan barisnya?",b:7,tol:0.01,u:"Nombor segi tiga: 1, 3, 6, 10, 15, 21, 28. Sebutan ke-7 ialah 28.",kira:()=>{ let n = 1; while (segi3(n) < 28) n++; return n; }},
 {j:"pilih",t:"Dua nombor segi tiga berturut-turut, 10 dan 15, dijumlahkan menjadi 25. Nombor 25 juga ialah:",p:["Nombor segi empat sama","Nombor segi tiga","Nombor Fibonacci","Nombor genap"],b:0,u:"25 = 5 × 5, iaitu nombor segi empat sama. 25 bukan nombor segi tiga, bukan Fibonacci dan bukan genap."},
 {j:"susun",t:"Susun langkah mencari bilangan tin dalam timbunan 9 baris.",p:["Kenal pasti bahawa timbunan ialah nombor segi tiga","Guna rumus n × (n + 1) ÷ 2","Gantikan n = 9, iaitu 9 × 10 ÷ 2","Hitung, jadi jumlah tin ialah 45"],b:[0,1,2,3],u:"Kenal pola, tulis rumus, gantikan nilai, kemudian hitung."},
 {j:"banyak",t:"Pilih SEMUA nombor yang ialah nombor segi tiga.",p:["6","15","28","20","30","40"],b:[0,1,2],u:"Nombor segi tiga: 1, 3, 6, 10, 15, 21, 28, 36, 45, 55. Nombor 20, 30 dan 40 tiada dalam senarai."}],
 bos:{j:"nombor",t:"Seorang penjual menyusun 100 tin dalam timbunan berbentuk segi tiga. Berapakah bilangan baris penuh yang paling banyak boleh disusun?",b:13,tol:0.01,u:"13 baris memerlukan 13 × 14 ÷ 2 = 91 tin. 14 baris memerlukan 105 tin, lebih daripada 100. Jadi 13 baris penuh, dan 9 tin tinggal.",kira:()=>{ let n = 1; while (segi3(n + 1) <= 100) n++; return n; }}},

{n:6, tempat:"Studio Reka Corak", sk:"1.3.3 Masalah pola dan jujukan bukan rutin", lampiran:"pol6",
 kadNama:"Nombor Ganjil", kadEm:"\u{1F9E9}", kadFakta:"Jumlah n nombor ganjil pertama sentiasa n kuasa dua. Contohnya 1 + 3 + 5 = 9, iaitu 3 kuasa dua.",
 bosKadNama:"Reka Corak", bosKadEm:"\u{1F3A8}", bosKadFakta:"Pereka batik dan jubin menggunakan pola berulang. Ahli matematik memerihalkan pola itu dengan rumus supaya ia boleh dilanjutkan tanpa had.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih segi empat tepat dan tetapkan n = 6. Berapakah jumlah titik?",b:6*7,tol:0.01,suf:"titik",u:"Segi empat tepat ialah 6 baris dan 7 lajur. 6 × 7 = 42.",kira:()=>6*7},
 {j:"pilih",t:"Nombor segi empat tepat 2, 6, 12, 20, ... mempunyai rumus sebutan ke-n:",p:["n × (n + 1)","n × n","2n","n + 2"],b:0,u:"Bagi n = 1: 1 × 2 = 2. Bagi n = 2: 2 × 3 = 6. Bagi n = 3: 3 × 4 = 12."},
 {j:"nombor",t:"Berapakah nombor segi empat tepat ke-9, menggunakan rumus n × (n + 1)?",b:9*10,tol:0.01,u:"9 × 10 = 90.",kira:()=>9*10},
 {j:"pilih",t:"Apabila dua nombor segi tiga berturut-turut, seperti 6 dan 10, dijumlahkan, hasilnya ialah:",p:["Nombor segi empat sama","Nombor segi tiga lain","Nombor Fibonacci","Nombor segi empat tepat"],b:0,u:"6 + 10 = 16 = 4 × 4. Ini benar untuk mana-mana dua nombor segi tiga berturut-turut."},
 {j:"nombor",t:"Sebuah segi empat tepat titik 5 × 6 dipotong pada pepenjuru kepada dua segi tiga yang sama. Berapakah titik dalam satu segi tiga?",b:segi3(5),tol:0.01,suf:"titik",u:"Segi empat tepat ada 5 × 6 = 30 titik. Separuh ialah 15, sama dengan nombor segi tiga ke-5.",kira:()=>5*6/2},
 {j:"nombor",t:"Nombor segi empat sama ke-12 ialah 144 dan ke-11 ialah 121. Berapakah beza antara keduanya?",b:144-121,tol:0.01,u:"144 - 121 = 23, iaitu 2 × 12 - 1, nombor ganjil ke-12.",kira:()=>12*12-11*11},
 {j:"susun",t:"Susun langkah menunjukkan bahawa jumlah 5 nombor ganjil pertama ialah 25.",p:["Tulis 1 + 3 + 5 + 7 + 9","Susun titik supaya setiap nombor ganjil ialah satu lapisan berbentuk L","Gabungkan semua lapisan menjadi satu segi empat sama 5 × 5","Simpulkan 1 + 3 + 5 + 7 + 9 = 25 = 5 × 5"],b:[0,1,2,3],u:"Setiap lapisan L menambah satu baris dan satu lajur pada segi empat sama, seperti dalam Rajah 1."},
 {j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang corak titik.",p:["Nombor segi empat sama ke-n ialah n × n","Nombor segi tiga ke-n ialah n × (n + 1) ÷ 2","Nombor segi empat tepat ke-n ialah n × (n + 1)","Nombor segi tiga ke-4 ialah 12","Nombor segi empat sama ke-5 ialah 10","Nombor segi empat tepat ke-3 ialah 9"],b:[0,1,2],u:"Nombor segi tiga ke-4 ialah 10, nombor segi empat sama ke-5 ialah 25 dan nombor segi empat tepat ke-3 ialah 12."}],
 bos:{j:"buka",
  t:"Reka satu corak titik atau batang mancis anda sendiri. Corak itu mesti membentuk jujukan yang bertambah mengikut satu peraturan.",
  arahan:"Lukis atau huraikan empat sebutan pertama corak anda. Tulis jujukan bilangan titik atau batang, cari bezanya, dan tulis rumus sebutan ke-n. Kemudian gunakan rumus itu untuk mencari sebutan ke-20 dan terangkan bagaimana anda tahu rumus itu betul.",
  u:"Jawapan TP6 yang kukuh mereka corak yang jelas, mengenal pasti beza, menulis rumus sebutan ke-n yang benar dan menyemaknya dengan sebutan yang diketahui, serta menggunakan rumus itu untuk sebutan yang jauh."}}
];

/* Tanda < dan > dalam teks paparan ditulis sebagai entiti HTML. */
const htmlkan = t => typeof t === "string" ? t.replace(/</g, "&lt;").replace(/>/g, "&gt;") : t;
ARAS.forEach(a => a.soalan.concat([a.bos]).forEach(q => {
  ["t", "u", "arahan"].forEach(k => { if (q[k]) q[k] = htmlkan(q[k]); });
  if (q.p) q.p = q.p.map(htmlkan);
}));

module.exports = {
  id:"m2b1", tingkatan:2, kod:"1.0 Pola dan Jujukan",
  tajuk:"Kilang Pola",
  subtajuk:"Matematik Ting. 2 · Bab 1 Pola dan Jujukan",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal pola pada senarai nombor, menyebut maksud jujukan, dan melanjutkan jujukan mudah seperti nombor genap, nombor ganjil dan jujukan bertambah tetap. Langkah seterusnya ialah memahami pola istimewa seperti Segi Tiga Pascal dan Fibonacci.",
   2:"{n} memahami pola nombor genap, ganjil, Segi Tiga Pascal dan Fibonacci serta menerangkan bagaimana sebutan seterusnya diperoleh. Perlu lebih latihan menulis pola dengan perkataan sebelum bergerak ke TP3.",
   3:"{n} boleh melengkapkan dan melanjutkan jujukan daripada corak batang mancis, mencari beza antara sebutan, dan menulis rumus mudah bagi sebutan ke-n. Galakkan {n} menyemak rumus dengan dua atau tiga sebutan yang diketahui.",
   4:"{n} mampu menulis rumus sebutan ke-n bagi jujukan yang bertambah atau berkurang, dan menggunakannya untuk mencari sebutan tertentu atau kedudukan suatu nilai. Seterusnya latih masalah yang melibatkan beberapa jujukan.",
   5:"{n} dapat menyelesaikan masalah kompleks yang melibatkan nombor segi tiga dan pola bukan linear, termasuk menyelesaikan masalah berayat dengan rumus yang sesuai. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya mereka corak sendiri, menulis rumus sebutan ke-n yang benar, dan menghuraikan kaitan antara corak titik seperti nombor segi tiga, segi empat sama dan segi empat tepat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pola dan Jujukan. Cadangan: ulang hentian pertama menggunakan Rajah 1, sambil menyebut beza antara sebutan berturut-turut secara lisan."
  },
  lampiran:{ pol1:R_POL1, pol2:R_POL2, pol3:R_POL3, pol4:R_POL4, pol5:R_POL5, pol6:R_POL6 },
  aras:ARAS
};
