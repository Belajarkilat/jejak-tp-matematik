/* Sumber kandungan — Matematik KSSM Tingkatan 2, Bab 8 Graf Fungsi.
   Fail ini disunting tangan. Jalankan `node bina.js m2b8` untuk menyemaknya
   dan menghasilkan bank-m2b8.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 61 (dskp/matematik-t2.pdf).
   DSKP menulis kesemua enam tahap bagi bab ini, jadi tiada tahap yang ditambah.

   Standard Pembelajaran yang disasarkan: 8.1.1 dan 8.1.2 (fungsi, pasangan tertib,
   jadual, graf dan persamaan; satu kepada satu dan banyak kepada satu), 8.2.1
   (jadual nilai dan melukis graf), 8.2.2 (mentafsir graf) dan 8.2.3 (titik
   persilangan). Fungsi y = ax^n dengan n = -2, -1, 1, 2, 3 dilibatkan.

   Widget: t2mesin dan t2graf dalam widget-m2b8.js. Semua jawapan berangka
   dikira dalam medan `kira` dan dibandingkan oleh tools/semak-jawapan.js. */
const { s } = require("./_k");

const SPI = [
"Mempamerkan pengetahuan asas tentang fungsi.",
"Mempamerkan kefahaman tentang graf fungsi.",
"Mengaplikasikan kefahaman tentang graf fungsi untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang graf fungsi dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang graf fungsi dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang graf fungsi dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

const X2 = s("x", 2), X3 = s("x", 3);

/* ---------- lampiran ---------- */

const R_MESIN = {
  jenis:"interaktif", w:"t2mesin", mod:"mesin", a:2, n:1, b:1, x:[-2,-1,0,1,2,3,4], xAwal:3,
  kapsyen:"Rajah 1 · Mesin fungsi f(x) = 2x + 1. Gerakkan gelongsor input x dan lihat output f(x).",
  alt:"Rajah interaktif mesin fungsi f(x) = 2x + 1; gelongsor menukar input x dan mesin mengeluarkan output f(x), dengan jadual pasangan tertib"
};
const R_PEMETAAN = {
  jenis:"interaktif", w:"t2mesin", mod:"pemetaan", i0:0,
  hubungan:[
    { kod:"A", nama:"Hubungan A", a:[1,2,3], b:[2,4,6], p:[[1,2],[2,4],[3,6]] },
    { kod:"B", nama:"Hubungan B", a:[-2,-1,1,2], b:[1,4], p:[[-2,4],[-1,1],[1,1],[2,4]] },
    { kod:"C", nama:"Hubungan C", a:[1,2,3], b:[4,5,6,7], p:[[1,4],[1,5],[2,6],[3,7]] },
    { kod:"D", nama:"Hubungan D", a:[1,2,3], b:[5,6,7], p:[[1,5],[2,6]] },
    { kod:"E", nama:"Hubungan E", a:[1,2,3], b:[4], p:[[1,4],[2,4],[3,4]] }
  ],
  kapsyen:"Rajah 1 · Pilih hubungan A hingga E dengan gelongsor. Anak panah menunjukkan input dipetakan kepada output.",
  alt:"Rajah interaktif gambar rajah pemetaan lima hubungan dengan input di kiri dan output di kanan; gelongsor memilih hubungan dan jenisnya dipaparkan"
};
const R_PLOT = {
  jenis:"interaktif", w:"t2graf", mod:"plot", a:1, n:2, x:[-3,-2,-1,0,1,2,3], xa:-4, xb:4, ya:-2, yb:10, i0:0,
  kapsyen:"Rajah 1 · Jadual nilai bagi y = x². Gerakkan gelongsor untuk memalot titik satu demi satu, dan lihat lengkung terbentuk.",
  alt:"Rajah interaktif jadual nilai dan graf y = x kuasa dua; gelongsor memalot titik pada satah Cartes satu demi satu sehingga lengkung licin terbentuk"
};
const R_SITUASI = {
  jenis:"interaktif", w:"t2graf", mod:"situasi", s:"bola", i0:2, cabar:true,
  kapsyen:"Rajah 1 · Bola dilambung ke atas, h = 20t − 5t². Kira dahulu di kertas conteng, kemudian semak dengan rajah.",
  alt:"Rajah interaktif graf tinggi bola melawan masa bagi h = 20t tolak 5t kuasa dua; gelongsor menukar masa dan tinggi bola dipaparkan selepas semakan"
};
const R_SILANG = {
  jenis:"interaktif", w:"t2graf", mod:"silang", a:1, n:2, xa:-4, xb:4, ya:-2, yb:12, g0:0, cabar:true,
  garis:[[1,2],[2,3],[0,4],[-1,6],[0,0],[0,-1]],
  kapsyen:"Rajah 1 · Lengkung y = x² dan satu garis lurus. Pilih garis, kira titik persilangan dahulu, kemudian semak dengan rajah.",
  alt:"Rajah interaktif lengkung y = x kuasa dua dan enam pilihan garis lurus; gelongsor memilih garis dan titik persilangan dipaparkan selepas semakan"
};
const R_BENTUK = {
  jenis:"interaktif", w:"t2graf", mod:"bentuk", ns:[1,2,3,-1,-2], as:[-2,-1,1,2], xs:[-3,-2,-1,0,1,2,3], n0:2, a0:1, xAwal:2, xa:-4, xb:4, ya:-8, yb:8,
  kapsyen:"Rajah 1 · Graf y = ax^n. Tukar kuasa n, pekali a dan nilai x untuk melihat bentuk graf berubah.",
  alt:"Rajah interaktif graf y = a x kuasa n; tiga gelongsor menukar kuasa n, pekali a dan nilai x, dan titik pada graf dipaparkan"
};

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Mesin Ajaib", sk:"8.1.1 / 8.1.2 Maksud fungsi dan pasangan tertib", lampiran:"mesin1",
 kadNama:"Mesin Fungsi", kadEm:"\u{2699}\u{FE0F}", kadFakta:"Fungsi ibarat mesin: masukkan satu nombor, dan mesin memberi tepat satu nombor keluar. Masukkan nombor yang sama dua kali, dan keluarannya sentiasa sama.",
 bosKadNama:"Tatatanda f(x)", bosKadEm:"\u{1F524}", bosKadFakta:"Tatatanda f(x) dibaca 'f bagi x'. Ia bukan f darab x. f(3) bermaksud nilai output fungsi f apabila inputnya 3.",
 soalan:[
 {j:"pilih",t:"Apakah maksud fungsi?",p:["Hubungan yang memberi tepat satu output bagi setiap input","Hubungan yang memberi dua output bagi setiap input","Hubungan yang hanya menggunakan nombor bulat positif","Hubungan yang sentiasa membentuk satu garis lurus"],b:0,u:"Fungsi ialah hubungan yang memberi tepat satu output bagi setiap input. Ia tidak semestinya garis lurus."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan input x = 3. Berapakah output f(x)?",b:7,tol:0.01,u:"f(3) = 2(3) + 1 = 7.",kira:()=>2*3+1},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan input x = −2. Berapakah output f(x)?",b:-3,tol:0.01,u:"f(−2) = 2(−2) + 1 = −4 + 1 = −3.",kira:()=>2*(-2)+1},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan x = 4. Pasangan tertib (x, f(x)) ialah:",p:["(4, 9)","(9, 4)","(4, 8)","(4, 10)"],b:0,u:"f(4) = 2(4) + 1 = 9, jadi pasangan tertibnya (4, 9). Input ditulis dahulu, kemudian output.",kira:()=>2*4+1===9},
 {j:"nombor",t:"Diberi f(x) = 3x − 2. Cari nilai f(5).",b:13,tol:0.01,u:"f(5) = 3(5) − 2 = 15 − 2 = 13.",kira:()=>3*5-2},
 {j:"nombor",t:`Diberi f(x) = ${X2} + 1. Cari nilai f(−3).`,b:10,tol:0.01,u:"f(−3) = (−3)² + 1 = 9 + 1 = 10. Kuasa dua nombor negatif ialah positif.",kira:()=>(-3)*(-3)+1},
 {j:"nombor",t:"Dalam Rajah 1, input x yang manakah menghasilkan output f(x) = 5?",b:2,tol:0.01,u:"2x + 1 = 5, maka 2x = 4 dan x = 2. Semak dalam jadual Rajah 1: f(2) = 5.",kira:()=>(5-1)/2},
 {j:"susun",t:"Susun langkah mencari f(4) bagi f(x) = 2x + 1 menggunakan mesin fungsi.",p:["Masukkan input x = 4 ke dalam mesin","Darabkan input dengan 2 untuk mendapat 8","Tambah 1 untuk mendapat 9","Baca output: f(4) = 9"],b:[0,1,2,3],u:"Mesin menjalankan operasi mengikut susunan dalam rumus: darab dahulu, kemudian tambah."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang fungsi f(x) = 2x + 1.",p:["f(0) = 1","f(2) = 5","Setiap input mempunyai tepat satu output","f(1) = 4","(3, 8) ialah pasangan tertib bagi f","f(−1) = 1"],b:[0,1,2],u:"f(0) = 1 dan f(2) = 5 benar, dan fungsi memberi tepat satu output bagi setiap input. f(1) = 3 (bukan 4), f(3) = 7 (jadi (3, 8) bukan pasangan tertib) dan f(−1) = −1 (bukan 1).",kira:()=>2*0+1===1&&2*2+1===5&&2*1+1!==4&&2*3+1!==8&&2*(-1)+1!==1}},

{n:2, tempat:"Peta Pemetaan", sk:"8.1.2 Fungsi satu kepada satu dan banyak kepada satu", lampiran:"pem1",
 kadNama:"Anak Panah", kadEm:"\u{1F3F9}", kadFakta:"Dalam gambar rajah pemetaan, setiap input mesti ada tepat satu anak panah keluar. Dua input boleh berkongsi satu output, tetapi satu input tidak boleh mempunyai dua output.",
 bosKadNama:"Banyak Kepada Satu", bosKadEm:"\u{1F500}", bosKadFakta:"Fungsi y = x² ialah banyak kepada satu: input −3 dan 3 kedua-duanya memberi output 9. Tetapi ia tetap fungsi, kerana setiap input hanya ada satu output.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, tetapkan hubungan A. Hubungan itu ialah:",p:["Fungsi satu kepada satu","Fungsi banyak kepada satu","Bukan fungsi kerana ada input tiada output","Bukan fungsi kerana satu input mempunyai dua output"],b:0,u:"Hubungan A: 1→2, 2→4, 3→6. Setiap input ada satu output dan semua output berbeza, jadi ia fungsi satu kepada satu."},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan hubungan B. Hubungan itu ialah:",p:["Fungsi banyak kepada satu","Fungsi satu kepada satu","Bukan fungsi kerana ada input tiada output","Bukan fungsi kerana satu input mempunyai dua output"],b:0,u:"Hubungan B: −2 dan 2 kedua-duanya ke 4, manakala −1 dan 1 kedua-duanya ke 1. Setiap input hanya satu output, tetapi output berkongsi, jadi banyak kepada satu."},
 {j:"pilih",t:"Dalam Rajah 1, hubungan C bukan fungsi kerana:",p:["Input 1 mempunyai dua output, iaitu 4 dan 5","Input 1 tidak mempunyai output","Semua input dipetakan kepada satu output yang sama","Output lebih banyak daripada input"],b:0,u:"Fungsi mesti memberi tepat satu output bagi setiap input. Input 1 ada dua anak panah, jadi hubungan C bukan fungsi."},
 {j:"pilih",t:"Dalam Rajah 1, hubungan D bukan fungsi kerana:",p:["Input 3 tidak mempunyai output","Input 1 mempunyai dua output","Output 5 dan 6 terlalu kecil","Input lebih banyak daripada output"],b:0,u:"Setiap input mesti ada satu output. Input 3 tiada anak panah, jadi hubungan D bukan fungsi."},
 {j:"nombor",t:"Dalam Rajah 1 (hubungan A hingga E), berapakah bilangan hubungan yang ialah fungsi?",b:3,tol:0.01,u:"A (satu kepada satu), B (banyak kepada satu) dan E (semua ke 4) ialah fungsi. C dan D bukan fungsi.",kira:()=>[true,true,false,false,true].filter(Boolean).length},
 {j:"pilih",t:"Antara pasangan berikut, yang manakah TIDAK boleh menjadi sebahagian daripada satu fungsi yang sama?",p:["(2, 5) dan (2, 7)","(2, 5) dan (3, 5)","(1, 4) dan (2, 6)","(0, 0) dan (1, 1)"],b:0,u:"Input 2 dipetakan kepada dua output berbeza, 5 dan 7. Fungsi hanya membenarkan satu output bagi setiap input."},
 {j:"pilih",t:`Fungsi y = ${X2} memberi output 4 bagi input 2 dan juga input −2. Jenis fungsinya ialah:`,p:["Banyak kepada satu","Satu kepada satu","Satu kepada banyak","Bukan fungsi"],b:0,u:"Dua input berbeza berkongsi satu output, jadi banyak kepada satu. Ia tetap fungsi kerana setiap input hanya satu output."},
 {j:"nombor",t:"Dalam Rajah 1, hubungan A memetakan setiap input kepada dua kali ganda nilainya. Berapakah output bagi input 3?",b:6,tol:0.01,u:"Output = 2 × 3 = 6, seperti anak panah 3→6 dalam hubungan A.",kira:()=>2*3}],
 bos:{j:"banyak",t:"Pilih SEMUA hubungan dalam Rajah 1 yang ialah fungsi.",p:["Hubungan A","Hubungan B","Hubungan E","Hubungan C","Hubungan D","Tiada satu pun"],b:[0,1,2],u:"A (satu kepada satu), B dan E (banyak kepada satu) ialah fungsi. C ada satu input dengan dua output dan D ada satu input tanpa output."}},

{n:3, tempat:"Meja Jadual", sk:"8.2.1 Jadual nilai dan melukis graf", lampiran:"plot1",
 kadNama:"Titik Demi Titik", kadEm:"\u{1F4CD}", kadFakta:"Graf ialah gambar bagi semua pasangan tertib sesuatu fungsi. Untuk melukisnya, bina jadual nilai, palot titik, kemudian sambung dengan garis atau lengkung yang licin.",
 bosKadNama:"Lengkung Licin", bosKadEm:"\u{1F4C8}", bosKadFakta:"Graf kuasa dua dilukis sebagai lengkung licin, bukan dengan garis-garis patah. Semakin banyak titik dipalot, semakin tepat bentuk lengkung itu.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, apabila x = −3, berapakah nilai y dalam jadual?",b:9,tol:0.01,u:"y = (−3)² = 9.",kira:()=>(-3)*(-3)},
 {j:"nombor",t:`Jika y = ${X2}, berapakah nilai y apabila x = 2.5?`,b:6.25,tol:0.01,u:"y = 2.5 × 2.5 = 6.25.",kira:()=>2.5*2.5},
 {j:"pilih",t:`Bentuk graf y = ${X2} ialah:`,p:["Lengkung berbentuk U","Garis lurus","Lengkung berbentuk S","Dua cabang yang berasingan"],b:0,u:"Graf y = x² ialah lengkung berbentuk U yang dipanggil parabola."},
 {j:"pilih",t:`Dalam Rajah 1, mengapakah graf y = ${X2} tidak pernah berada di bawah paksi-x?`,p:["Kuasa dua sebarang nombor tidak pernah negatif","Kerana x sentiasa positif","Kerana graf melalui titik (0, 9)","Kerana kecerunan graf sentiasa sifar"],b:0,u:"Nombor positif dan negatif apabila dikuasa duakan memberi hasil positif atau sifar, jadi y ≥ 0."},
 {j:"nombor",t:"Lengkapkan jadual bagi y = 2x − 3. Berapakah y apabila x = 4?",b:5,tol:0.01,u:"y = 2(4) − 3 = 8 − 3 = 5.",kira:()=>2*4-3},
 {j:"nombor",t:`Lengkapkan jadual bagi y = ${X3}. Berapakah y apabila x = −2?`,b:-8,tol:0.01,u:"y = (−2)³ = (−2) × (−2) × (−2) = −8.",kira:()=>(-2)*(-2)*(-2)},
 {j:"pilih",t:"Selepas memalot semua titik daripada jadual nilai, langkah seterusnya ialah:",p:["Sambungkan titik dengan garis atau lengkung yang licin","Padamkan titik dan mulakan semula","Sambungkan titik dengan garis putus-putus sahaja","Tambah titik baharu di luar skala graf"],b:0,u:"Selepas titik dipalot, ia disambung dengan garis lurus atau lengkung yang licin untuk membentuk graf."},
 {j:"susun",t:"Susun langkah melukis graf y = x² menggunakan skala yang diberi.",p:["Pilih nilai x dan bina jadual nilai","Kira nilai y bagi setiap nilai x","Palot titik (x, y) pada satah Cartes","Sambung semua titik dengan lengkung licin"],b:[0,1,2,3],u:"Bina jadual dahulu, kira y, palot titik, dan akhir sekali sambungkan titik."}],
 bos:{j:"nombor",t:`Titik (a, 16) terletak pada graf y = ${X2} dengan a positif. Berapakah nilai a?`,b:4,tol:0.01,u:"a² = 16, maka a = 4 (nilai positif). Nilai −4 juga memberi 16, tetapi soalan meminta a positif.",kira:()=>Math.sqrt(16)}},

{n:4, tempat:"Padang Bola", sk:"8.2.2 Mentafsir graf fungsi", lampiran:"sit1",
 kadNama:"Bola Melambung", kadEm:"\u{26BD}", kadFakta:"Apabila bola dilambung ke atas, tingginya naik ke puncak kemudian turun semula. Graf tinggi melawan masa ialah lengkung berbentuk ∩, iaitu parabola.",
 bosKadNama:"Simetri Lengkung", bosKadEm:"\u{1FA9E}", bosKadFakta:"Lengkung parabola bersimetri pada paksi yang melalui puncaknya. Bola berada pada tinggi yang sama semasa naik dan semasa turun, pada selang masa yang sama dari puncak.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, berapakah tinggi bola (m) pada masa t = 1 saat?",b:15,tol:0.01,suf:"m",u:"h = 20(1) − 5(1)² = 20 − 5 = 15 m.",kira:()=>20*1-5*1*1},
 {j:"nombor",t:"Tambang teksi J = 3 + 2d (RM), dengan d ialah jarak dalam km. Berapakah tambang bagi perjalanan 8 km (dalam RM)?",b:19,tol:0.01,u:"J = 3 + 2(8) = 3 + 16 = RM19.",kira:()=>3+2*8},
 {j:"nombor",t:"Dalam Rajah 1, pada masa berapakah (saat) bola mencapai tinggi maksimum?",b:2,tol:0.01,suf:"saat",u:"Puncak lengkung berada di tengah antara t = 0 dan t = 4, iaitu t = 2 saat.",kira:()=>20/(2*5)},
 {j:"nombor",t:"Dalam Rajah 1, berapakah tinggi maksimum bola (m)?",b:20,tol:0.01,suf:"m",u:"Pada t = 2, h = 20(2) − 5(2)² = 40 − 20 = 20 m.",kira:()=>20*2-5*2*2},
 {j:"pilih",t:"Mengapakah graf tinggi bola melawan masa berbentuk lengkung dan bukan garis lurus?",p:["Kerana h bergantung pada t dan t kuasa dua","Kerana bola sentiasa bergerak dengan laju seragam","Kerana masa sentiasa berkurang apabila bola naik","Kerana tinggi bola sama pada setiap saat"],b:0,u:"Rumus h = 20t − 5t² mengandungi t², jadi graf ialah lengkung. Garis lurus hanya untuk fungsi linear."},
 {j:"nombor",t:"Dalam Rajah 1, pada masa berapakah (saat) bola menyentuh tanah semula selepas dilambung?",b:4,tol:0.01,suf:"saat",u:"h = 0 apabila 20t − 5t² = 0, iaitu 5t(4 − t) = 0. Selain t = 0, t = 4 saat.",kira:()=>20/5},
 {j:"pilih",t:"Dalam Rajah 1, apabila t bertambah daripada 2 saat kepada 4 saat, bola:",p:["Bergerak turun ke arah tanah","Bergerak naik ke arah puncak","Berhenti pada tinggi yang tetap","Menjadi semakin laju ke atas"],b:0,u:"Selepas puncak pada t = 2, tinggi berkurang. Graf menurun daripada 20 m kepada 0 m."},
 {j:"nombor",t:"Dalam Rajah 1, berapakah tinggi bola (m) pada t = 3.5 saat, kepada 2 tempat perpuluhan?",b:8.75,tol:0.01,suf:"m",u:"h = 20(3.5) − 5(3.5)² = 70 − 61.25 = 8.75 m.",kira:()=>20*3.5-5*3.5*3.5}],
 bos:{j:"nombor",t:"Dalam Rajah 1, bola berada pada tinggi 15 m pada t = 1 saat. Pada masa berapakah (saat) bola berada pada tinggi 15 m sekali lagi?",b:3,tol:0.01,suf:"saat",u:"Lengkung bersimetri pada t = 2. Masa 1 saat sebelum puncak ialah t = 1, jadi 1 saat selepas puncak ialah t = 3. Semak: 20(3) − 5(9) = 15.",kira:()=>{const d=Math.sqrt(16-12);return [(4-d)/2,(4+d)/2].find(t=>Math.abs(t-1)>1e-9);}}},

{n:5, tempat:"Simpang Persilangan", sk:"8.2.3 Titik persilangan dua graf fungsi", lampiran:"sil1",
 kadNama:"Titik Temu", kadEm:"\u{1F6A6}", kadFakta:"Titik persilangan dua graf ialah pasangan tertib yang memenuhi kedua-dua fungsi serentak. Koordinat x titik itu ialah penyelesaian bagi persamaan apabila dua fungsi disamakan.",
 bosKadNama:"Dua Persamaan", bosKadEm:"\u{270C}\u{FE0F}", bosKadFakta:"Apabila garis dan lengkung bersilang di dua titik, persamaannya mempunyai dua penyelesaian. Jika tiada persilangan, persamaan tiada penyelesaian nyata.",
 soalan:[
 {j:"nombor",t:`Dalam Rajah 1, pilih garis y = 4 dan lengkung y = ${X2}. Berapakah nilai x positif pada titik persilangan?`,b:2,tol:0.01,u:"x² = 4, maka x = 2 atau x = −2. Nilai positif ialah 2.",kira:()=>Math.sqrt(4)},
 {j:"nombor",t:"Dalam Rajah 1, pilih garis y = x + 2. Berapakah nilai x positif pada titik persilangan?",b:2,tol:0.01,u:"x² = x + 2, maka x² − x − 2 = 0, iaitu (x − 2)(x + 1) = 0. Nilai positif ialah x = 2.",kira:()=>(1+Math.sqrt(1+8))/2},
 {j:"nombor",t:"Dalam Rajah 1, pilih garis y = x + 2. Berapakah nilai x negatif pada titik persilangan?",b:-1,tol:0.01,u:"Daripada (x − 2)(x + 1) = 0, nilai negatif ialah x = −1.",kira:()=>(1-Math.sqrt(1+8))/2},
 {j:"nombor",t:"Dalam Rajah 1, pilih garis y = 2x + 3. Berapakah nilai y pada titik persilangan yang mempunyai x positif?",b:9,tol:0.01,u:"x² = 2x + 3, maka (x − 3)(x + 1) = 0. Nilai positif x = 3, jadi y = 3² = 9.",kira:()=>{const x=(2+Math.sqrt(4+12))/2;return x*x;}},
 {j:"pilih",t:`Dalam Rajah 1, pilih garis y = −1. Bilangan titik persilangan dengan lengkung y = ${X2} ialah:`,p:["Tiada titik persilangan","Satu titik persilangan","Dua titik persilangan","Tiga titik persilangan"],b:0,u:"x² tidak pernah negatif, jadi lengkung tidak pernah mencapai y = −1. Tiada titik persilangan."},
 {j:"pilih",t:`Dalam Rajah 1, garis y = 0 hanya menyentuh lengkung y = ${X2} pada satu titik. Titik itu ialah:`,p:["(0, 0)","(1, 1)","(0, 1)","(1, 0)"],b:0,u:"x² = 0 memberi x = 0 sahaja, dan y = 0. Titik sentuhan ialah (0, 0)."},
 {j:"pilih",t:`Titik persilangan graf y = ${X2} dan y = x + 2 menyelesaikan persamaan:`,p:[`${X2} = x + 2`,`${X2} = 2x`,"x + 2 = 0",`${X2} + 2 = x`],b:0,u:"Pada titik persilangan, nilai y bagi kedua-dua fungsi sama, jadi x² = x + 2."},
 {j:"nombor",t:"Dalam Rajah 1, pilih garis y = −x + 6. Berapakah hasil tambah kedua-dua nilai x pada titik persilangan?",b:-1,tol:0.01,u:"x² = −x + 6, maka (x − 2)(x + 3) = 0, jadi x = 2 dan x = −3. Hasil tambah = 2 + (−3) = −1.",kira:()=>2+(-3)}],
 bos:{j:"nombor",t:`Garis y = k bersilang dengan lengkung y = ${X2} pada dua titik yang berjarak 6 unit secara mengufuk. Berapakah nilai k?`,b:9,tol:0.01,u:"Dua titik itu bersimetri di sekitar paksi-y, jadi x = 3 dan x = −3. Maka k = 3² = 9.",kira:()=>3*3}},

{n:6, tempat:"Studio Reka", sk:"8.1.2 / 8.2.1 / 8.2.2 Fungsi y = ax^n dengan n = −2, −1, 1, 2, 3", lampiran:"bent1",
 kadNama:"Keluarga Fungsi", kadEm:"\u{1F468}\u{200D}\u{1F469}\u{200D}\u{1F467}", kadFakta:"Fungsi y = ax^n ialah satu keluarga. Kuasa n menentukan bentuk graf, manakala pekali a menentukan sama ada graf terbuka ke atas atau ke bawah dan seberapa curam ia.",
 bosKadNama:"Sifar Terlarang", bosKadEm:"\u{1F6AB}", bosKadFakta:"Bagi fungsi seperti y = 2/x, nilai x = 0 tidak dibenarkan kerana pembahagian dengan sifar tidak tertakrif. Graf itu terputus pada x = 0.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, tetapkan n = 2 dan a = −1. Graf y = −x² terbuka ke:",p:["Bawah","Atas","Kiri","Kanan"],b:0,u:"Apabila a negatif dan n = 2, lengkung ∩ terbuka ke bawah."},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan n = −1 dan a = 2. Kedua-dua cabang graf berada di sukuan:",p:["1 dan 3","2 dan 4","1 dan 2","3 dan 4"],b:0,u:"Bagi y = 2/x, x dan y sentiasa sama tanda, jadi cabang berada dalam sukuan 1 dan 3."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan n = 3 dan a = 1. Berapakah nilai y apabila x = −2?",b:-8,tol:0.01,u:"y = (−2)³ = −8.",kira:()=>(-2)*(-2)*(-2)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan n = −1 dan a = 2. Berapakah nilai y apabila x = 2?",b:1,tol:0.01,u:"y = 2/x = 2/2 = 1.",kira:()=>2/2},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan n = −1. Mengapakah graf tiada titik pada x = 0?",p:["Pembahagian dengan sifar tidak tertakrif","Kerana y sentiasa sama dengan sifar","Kerana graf berhenti pada x = 0","Kerana x negatif tidak dibenarkan"],b:0,u:"y = a/x. Apabila x = 0, pembahagian dengan sifar tidak tertakrif, jadi tiada titik dan graf terputus."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan n = 2 dan a = 2. Berapakah nilai y apabila x = −3?",b:18,tol:0.01,u:"y = 2(−3)² = 2 × 9 = 18.",kira:()=>2*(-3)*(-3)},
 {j:"pilih",t:"Fungsi manakah yang grafnya melalui (0, 0) dan (1, 2), dan ialah garis lurus?",p:["y = 2x","y = 2x²","y = 2/x","y = x³ + 1"],b:0,u:"y = 2x melalui (0, 0) dan (1, 2) dan ialah garis lurus. y = 2x² juga melalui kedua-dua titik tetapi melengkung. y = 2/x tidak tertakrif pada x = 0, dan y = x³ + 1 tidak melalui (0, 0)."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan n = 3 dan a = −2. Berapakah nilai y apabila x = 2?",b:-16,tol:0.01,u:"y = −2(2)³ = −2 × 8 = −16.",kira:()=>-2*2*2*2}],
 bos:{j:"buka",
  t:"Reka satu situasi harian yang boleh diwakili oleh fungsi berbentuk y = ax^n, contohnya luas petak, isi padu kubus atau kos berkadar, dan terangkan graf fungsi itu.",
  arahan:"Nyatakan situasi, tulis fungsinya, bina jadual nilai sekurang-kurangnya lima titik, terangkan bentuk graf dan tafsirkan satu titik pada graf dalam konteks situasi awak.",
  u:"Jawapan TP6 yang kukuh memilih situasi yang munasabah, menulis fungsi yang betul, membina jadual nilai dengan pengiraan tepat, menerangkan bentuk graf mengikut kuasa n dan pekali a, serta mentafsir titik pada graf dalam konteks."}}
];

module.exports = {
  id:"m2b8", tingkatan:2, kod:"8.0 Graf Fungsi",
  tajuk:"Kilang Graf",
  subtajuk:"Matematik Ting. 2 · Bab 8 Graf Fungsi",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat menerangkan maksud fungsi sebagai hubungan yang memberi tepat satu output bagi setiap input, serta menulis pasangan tertib. Langkah seterusnya ialah mengenal pasti fungsi daripada pelbagai perwakilan.",
   2:"{n} memahami fungsi dan bukan fungsi melalui gambar rajah pemetaan, serta perbezaan satu kepada satu dan banyak kepada satu. Perlu lebih latihan menghubungkan jadual, graf dan persamaan sebelum bergerak ke TP3.",
   3:"{n} boleh membina jadual nilai bagi fungsi linear dan bukan linear dan melukis graf menggunakan skala yang diberi. Galakkan menyemak setiap titik dipalot pada koordinat yang betul.",
   4:"{n} mampu mentafsir graf fungsi dalam situasi harian, termasuk mencari nilai, puncak dan trend. Seterusnya latih masalah yang melibatkan dua graf.",
   5:"{n} dapat menyelesaikan masalah yang melibatkan titik persilangan dua graf fungsi, termasuk kes dua titik, satu titik dan tiada titik. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya mereka dan menerangkan graf fungsi y = ax^n dalam situasi sebenar dengan penaakulan yang betul. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Graf Fungsi. Cadangan: ulang hentian pertama dengan Rajah 1 sambil menyebut apakah input dan apakah output bagi setiap pasangan tertib."
  },
  lampiran:{ mesin1:R_MESIN, pem1:R_PEMETAAN, plot1:R_PLOT, sit1:R_SITUASI, sil1:R_SILANG, bent1:R_BENTUK },
  aras:ARAS
};
