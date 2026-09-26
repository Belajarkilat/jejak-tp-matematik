/* Sumber kandungan — Matematik KSSM Tingkatan 2, Bab 7 Koordinat.
   Fail ini disunting tangan. Jalankan `node bina.js m2b7` untuk menyemaknya
   dan menghasilkan bank-m2b7.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 57 (dskp/matematik-t2.pdf).
   DSKP menulis satu jadual enam tahap bagi bab ini, jadi semua enam tahap
   diambil terus.

   Rajah interaktif ialah widget `t2kor` dalam widget-m2b7.js. Semua jawapan
   berangka dikira dengan kod dalam medan `kira` (Math.hypot dan purata) dan
   dibandingkan oleh tools/semak-jawapan.js dengan jawapan yang ditulis. */
const { s } = require("./_k");
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
const H = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);
const tepat = (x1, y1, x2, y2, n) => bunda(Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)), n);
const sub = (a, n) => `${a}<sub>${n}</sub>`;

const SPI = [
"Mempamerkan pengetahuan asas tentang jarak dan titik tengah pada satah Cartes.",
"Mempamerkan kefahaman tentang jarak dan titik tengah pada satah Cartes.",
"Mengaplikasikan kefahaman tentang jarak dan titik tengah pada satah Cartes untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sistem koordinat Cartes dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sistem koordinat Cartes dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sistem koordinat Cartes dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran: satah Cartes interaktif ---------- */

const kor = (spec, kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t2kor", kapsyen, alt }, spec, extra || {});

const R_KOR1 = kor({ mod: "jarak", A: [-3, -2], B: [3, 2] },
  "Rajah 1 · Titik A tetap. Gerakkan gelongsor untuk menukar titik B dan perhatikan jarak mendatar, jarak mencancang dan jarak AB.",
  "Rajah interaktif satah Cartes dengan titik A tetap dan titik B yang digerakkan; segi tiga bersudut tegak menunjukkan jarak mendatar, jarak mencancang dan jarak AB");
const R_KOR2 = kor({ mod: "tengah", A: [-4, -2], B: [2, 4] },
  "Rajah 1 · Titik A tetap. Gerakkan gelongsor untuk menukar titik B dan perhatikan titik tengah M bagi AB.",
  "Rajah interaktif satah Cartes dengan titik A tetap dan titik B yang digerakkan; titik tengah M bagi AB ditunjukkan");
const R_KOR3 = kor({ mod: "kedua", A: [-2, 1], B: [4, 5] },
  "Rajah 1 · Titik A tetap. Tukar titik B, kemudian kira jarak AB dan titik tengah M.",
  "Rajah interaktif satah Cartes dengan titik A tetap dan titik B yang digerakkan; jarak AB dan titik tengah M dipaparkan");
const R_KOR4 = kor({ mod: "peta", tempat: [
    { k: "S", n: "Sekolah", x: -4, y: 2 }, { k: "P", n: "Pasar", x: 2, y: 4 }, { k: "K", n: "Klinik", x: 4, y: -2 },
    { k: "M", n: "Masjid", x: -2, y: -3 }, { k: "H", n: "Hentian", x: 1, y: 0 }], skala: 1, unit: "km", dari: 0, ke: 1 },
  "Rajah 1 · Peta bandar, 1 unit = 1 km. Pilih dua tempat dengan gelongsor. Kira dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif peta bandar pada satah Cartes dengan lima tempat berlabel S, P, K, M dan H; gelongsor memilih dua tempat dan menunjukkan jarak serta titik tengah",
  { cabar: true });
const R_KOR5 = kor({ mod: "segitiga", A: [-3, -2], B: [3, -2], C: [0, 3] },
  "Rajah 1 · A dan B tetap. Gerakkan titik C. Kira dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif satah Cartes dengan segi tiga ABC; A dan B tetap dan titik C digerakkan, dengan kuasa dua panjang tiga sisi dan jenis segi tiga",
  { cabar: true });
const R_KOR6 = kor({ mod: "cari", A: [-3, -1], M: [1, 2], B: [1, 1] },
  "Rajah 1 · A dan titik tengah M diberi. Gerakkan B sehingga titik tengah AB sama dengan M.",
  "Rajah interaktif satah Cartes dengan titik A dan titik tengah M yang diberi; gerakkan titik B sehingga titik tengah AB sama dengan M");

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Peta Harta Karun", sk:"7.1.1 / 7.1.2 Maksud jarak dan rumus jarak", lampiran:"kor1",
 kadNama:"René Descartes", kadEm:"\u{1F9D1}‍\u{1F3EB}", kadFakta:"Satah Cartes dinamakan sempena René Descartes, ahli matematik Perancis. Beliau menggunakan dua garis nombor yang bersilang untuk menentukan kedudukan sesuatu titik.",
 bosKadNama:"Pythagoras Menyelamatkan", bosKadEm:"\u{1F4D0}", bosKadFakta:"Rumus jarak sebenarnya ialah Teorem Pythagoras yang menyamar. Jarak mendatar dan jarak mencancang ialah dua sisi tegak, dan jarak AB ialah hipotenus.",
 soalan:[
 {j:"pilih",t:"Jarak antara dua titik pada satah Cartes ialah:",p:["Panjang garis lurus paling pendek yang menyambung kedua-dua titik","Jumlah koordinat x dan koordinat y kedua-dua titik","Beza antara koordinat x kedua-dua titik sahaja","Panjang laluan mengikut petak grid dari satu titik ke satu titik"],b:0,u:"Jarak ialah panjang garis lurus paling pendek antara dua titik, bukan laluan mengikut petak."},
 {j:"pilih",t:"Dalam Rajah 1, garis putus-putus hijau yang mengufuk dari A mewakili:",p:["Jarak mendatar, iaitu beza koordinat x antara A dan B","Jarak AB, iaitu jarak lurus antara A dan B","Jarak mencancang, iaitu beza koordinat y antara A dan B","Titik tengah bagi garis AB"],b:0,u:"Garis hijau mengufuk ialah beza koordinat x. Garis merah menegak ialah beza koordinat y, dan garis ungu tebal ialah jarak AB."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x bagi B = 5 dan y bagi B = −2. Berapakah jarak AB (unit)?",b:8,tol:0.01,suf:"unit",u:"A(−3, −2) dan B(5, −2) berada pada garis mengufuk yang sama. Jarak = 5 − (−3) = 8.",kira:()=>H(-3,-2,5,-2)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan B kepada (−3, 3). Berapakah jarak AB (unit)?",b:5,tol:0.01,suf:"unit",u:"A(−3, −2) dan B(−3, 3) berada pada garis menegak yang sama. Jarak = 3 − (−2) = 5.",kira:()=>H(-3,-2,-3,3)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan B kepada (0, 2). Berapakah jarak mendatar dari A ke B (unit)?",b:3,tol:0.01,suf:"unit",u:"Jarak mendatar ialah beza koordinat x: 0 − (−3) = 3.",kira:()=>Math.abs(0-(-3))},
 {j:"pilih",t:"Bagi A(x"+"<sub>1</sub>, y<sub>1</sub>) dan B(x<sub>2</sub>, y<sub>2</sub>), jarak AB ialah:",p:["√[(x<sub>2</sub> − x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> − y<sub>1</sub>)<sup>2</sup>]","√[(x<sub>2</sub> + x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub> + y<sub>1</sub>)<sup>2</sup>]","(x<sub>2</sub> − x<sub>1</sub>) + (y<sub>2</sub> − y<sub>1</sub>)","√(x<sub>2</sub> − x<sub>1</sub>) + √(y<sub>2</sub> − y<sub>1</sub>)"],b:0,u:"Rumus jarak datang daripada Teorem Pythagoras: kuasa dua jarak mendatar tambah kuasa dua jarak mencancang, kemudian ambil punca kuasa dua."},
 {j:"pilih",t:"Dalam Rajah 1, segi tiga bersudut tegak dapat digunakan untuk mengira jarak AB kerana AB ialah:",p:["Hipotenus segi tiga bersudut tegak itu","Sisi mendatar segi tiga bersudut tegak itu","Sisi mencancang segi tiga bersudut tegak itu","Garis serenjang dengan paksi-x"],b:0,u:"AB menyambung dua bucu yang bukan sudut tegak, jadi AB ialah hipotenus. Dua sisi lagi ialah jarak mendatar dan jarak mencancang."},
 {j:"susun",t:"Susun langkah mencari jarak antara A(1, 2) dan B(4, 6).",p:["Cari beza mendatar: 4 − 1 = 3","Cari beza mencancang: 6 − 2 = 4","Guna Pythagoras: "+s(3,2)+" + "+s(4,2)+" = 25","Ambil punca kuasa dua: jarak = 5"],b:[0,1,2,3],u:"Cari dua beza dahulu, kuasa duakan dan tambah, kemudian ambil punca kuasa dua.",kira:()=>H(1,2,4,6)===5}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang jarak antara dua titik pada satah Cartes.",p:["Jarak sentiasa positif atau sifar","Jarak AB sama dengan jarak BA","Jika dua titik mempunyai koordinat x yang sama, jaraknya ialah beza koordinat y","Jarak ialah beza koordinat x tambah beza koordinat y","Jarak boleh negatif jika B berada di sebelah kiri A","Jarak sentiasa nombor bulat"],b:[0,1,2],u:"Jarak tidak pernah negatif dan tidak bergantung pada arah. Jarak ialah punca kuasa dua jumlah kuasa dua dua beza, bukan jumlah dua beza, dan ia tidak semestinya nombor bulat."}},

{n:2, tempat:"Jambatan Tengah", sk:"7.2.1 / 7.2.2 Maksud titik tengah dan rumus titik tengah", lampiran:"kor2",
 kadNama:"Purata Koordinat", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Titik tengah ialah purata koordinat dua hujung. Cari purata x dan purata y, dan itulah titik yang sama jauh dari kedua-dua hujung.",
 bosKadNama:"Pusat Tarikan", bosKadEm:"\u{1F3AF}", bosKadFakta:"Titik tengah juga dipanggil pusat sesuatu garis lurus. Ahli arkitek menggunakannya untuk meletakkan tiang penyokong di tengah jambatan.",
 soalan:[
 {j:"pilih",t:"Titik tengah antara dua titik ialah titik yang:",p:["Terletak di tengah garis yang menyambungnya, sama jauh dari kedua-dua hujung","Terletak pada paksi-x antara dua titik itu","Mempunyai koordinat x dan koordinat y yang sama","Terletak dua kali lebih jauh dari salah satu hujung"],b:0,u:"Titik tengah membahagi garis kepada dua bahagian yang sama panjang."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan B kepada (2, 4). Berapakah koordinat x bagi titik tengah M?",b:-1,tol:0.01,u:"x = (−4 + 2) ÷ 2 = −1.",kira:()=>(-4+2)/2},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan B kepada (2, 4). Berapakah koordinat y bagi titik tengah M?",b:1,tol:0.01,u:"y = (−2 + 4) ÷ 2 = 1.",kira:()=>(-2+4)/2},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan B kepada (4, 2). Berapakah koordinat x bagi titik tengah M?",b:0,tol:0.01,u:"x = (−4 + 4) ÷ 2 = 0. Titik tengah berada pada paksi-y.",kira:()=>(-4+4)/2},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan B kepada (−2, −4). Berapakah koordinat y bagi titik tengah M?",b:-3,tol:0.01,u:"y = (−2 + (−4)) ÷ 2 = −6 ÷ 2 = −3.",kira:()=>(-2+(-4))/2},
 {j:"pilih",t:"Bagi A(x"+"<sub>1</sub>, y<sub>1</sub>) dan B(x<sub>2</sub>, y<sub>2</sub>), titik tengah AB ialah:",p:["((x<sub>1</sub> + x<sub>2</sub>) ÷ 2, (y<sub>1</sub> + y<sub>2</sub>) ÷ 2)","((x<sub>2</sub> − x<sub>1</sub>) ÷ 2, (y<sub>2</sub> − y<sub>1</sub>) ÷ 2)","(x<sub>1</sub> + x<sub>2</sub>, y<sub>1</sub> + y<sub>2</sub>)","((x<sub>1</sub> × x<sub>2</sub>) ÷ 2, (y<sub>1</sub> × y<sub>2</sub>) ÷ 2)"],b:0,u:"Titik tengah ialah min bagi koordinat x dan min bagi koordinat y."},
 {j:"pilih",t:"M ialah titik tengah AB. Apakah hubungan antara panjang AM dengan panjang MB?",p:["AM = MB","AM = 2 × MB","AM = ½ × MB","AM + MB = 0"],b:0,u:"Titik tengah membahagi AB kepada dua bahagian sama panjang, jadi AM = MB."},
 {j:"susun",t:"Susun langkah mencari titik tengah A(2, 6) dan B(8, 2).",p:["Tambah koordinat x: 2 + 8 = 10","Bahagi dua: x = 10 ÷ 2 = 5","Tambah koordinat y: 6 + 2 = 8","Bahagi dua: y = 8 ÷ 2 = 4, jadi M(5, 4)"],b:[0,1,2,3],u:"Tambah koordinat dan bahagi dua, x dahulu kemudian y.",kira:()=>(2+8)/2===5&&(6+2)/2===4}],
 bos:{j:"pilih",t:"Mengapakah titik tengah dikira dengan mencari min (purata) koordinat dua hujung?",p:["Kerana titik tengah terletak separuh jalan mengikut arah mendatar dan arah mencancang","Kerana titik tengah sentiasa terletak pada salah satu paksi","Kerana jarak mesti dibahagi dua mengikut rumus Pythagoras sahaja","Kerana koordinat mesti didarab dengan dua sebelum dijumlahkan"],b:0,u:"Separuh jalan dari x1 ke x2 ialah min x, dan separuh jalan dari y1 ke y2 ialah min y."}},

{n:3, tempat:"Kompas Kampung", sk:"7.1.3 / 7.2.3 Menentukan jarak dan titik tengah", lampiran:"kor3",
 kadNama:"Jarak Terpendek", kadEm:"\u{1F9ED}", kadFakta:"Garis lurus ialah laluan paling pendek antara dua titik. Itulah sebabnya pesawat terbang mengikut garis yang hampir lurus pada peta dunia.",
 bosKadNama:"Segi Tiga Tersembunyi", bosKadEm:"\u{1F53A}", bosKadFakta:"Setiap jarak pada satah Cartes yang tidak mengufuk atau menegak menyembunyikan satu segi tiga bersudut tegak. Lukis segi tiga itu dan soalan menjadi mudah.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan B kepada (2, 4). Berapakah jarak AB (unit)?",b:5,tol:0.01,suf:"unit",u:"A(−2, 1), B(2, 4): jarak mendatar 4 dan jarak mencancang 3. AB = √(16 + 9) = 5.",kira:()=>H(-2,1,2,4)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan B kepada (4, 5). Berapakah jarak AB, kepada 2 tempat perpuluhan?",b:tepat(-2,1,4,5,2),tol:0.01,suf:"unit",u:"Jarak mendatar 6 dan jarak mencancang 4. AB = √(36 + 16) = √52 = 7.21.",kira:()=>bunda(H(-2,1,4,5),2)},
 {j:"nombor",t:"Kira jarak antara P(1, 1) dan Q(7, 9).",b:10,tol:0.01,suf:"unit",u:"PQ = √(6² + 8²) = √100 = 10.",kira:()=>H(1,1,7,9)},
 {j:"nombor",t:"Kira jarak antara P(−3, 4) dan Q(2, −8).",b:13,tol:0.01,suf:"unit",u:"Jarak mendatar 5 dan jarak mencancang 12. PQ = √(25 + 144) = 13.",kira:()=>H(-3,4,2,-8)},
 {j:"nombor",t:"Berapakah koordinat x bagi titik tengah P(1, 1) dan Q(7, 9)?",b:4,tol:0.01,u:"x = (1 + 7) ÷ 2 = 4.",kira:()=>(1+7)/2},
 {j:"nombor",t:"Berapakah koordinat y bagi titik tengah P(1, 1) dan Q(7, 9)?",b:5,tol:0.01,u:"y = (1 + 9) ÷ 2 = 5.",kira:()=>(1+9)/2},
 {j:"pilih",t:"Titik tengah bagi P(−6, 3) dan Q(4, −5) ialah:",p:["(−1, −1)","(−5, 4)","(−2, −2)","(5, −4)"],b:0,u:"x = (−6 + 4) ÷ 2 = −1 dan y = (3 + (−5)) ÷ 2 = −1.",kira:()=>(-6+4)/2===-1&&(3-5)/2===-1},
 {j:"pilih",t:"Antara pasangan titik berikut, yang manakah berjarak tepat 5 unit?",p:["(0, 0) dan (3, 4)","(0, 0) dan (4, 4)","(1, 2) dan (4, 4)","(2, 1) dan (5, 6)"],b:0,u:"(0, 0) dan (3, 4): √(9 + 16) = 5. Pasangan lain memberi √32, √13 dan √34.",kira:()=>H(0,0,3,4)===5&&H(0,0,4,4)!==5&&H(1,2,4,4)!==5&&H(2,1,5,6)!==5}],
 bos:{j:"nombor",t:"M ialah titik tengah AB dengan A(−3, 2) dan B(5, 8). Berapakah jarak AM (unit)?",b:5,tol:0.01,suf:"unit",u:"M = ((−3 + 5) ÷ 2, (2 + 8) ÷ 2) = (1, 5). AM = √(4² + 3²) = 5. Ini juga separuh daripada AB = 10.",kira:()=>H(-3,2,(-3+5)/2,(2+8)/2)}},

{n:4, tempat:"Peta Bandar", sk:"7.1.4 / 7.2.4 Masalah jarak dan titik tengah", lampiran:"kor4",
 kadNama:"Peta Grid", kadEm:"\u{1F5FA}\u{FE0F}", kadFakta:"Peta dalam buku atlas menggunakan grid supaya setiap tempat ada koordinat. Sistem GPS dalam telefon menggunakan idea yang sama untuk mencari lokasi awak.",
 bosKadNama:"Jarak Berbeza", bosKadEm:"\u{1F6B6}", bosKadFakta:"Jarak lurus antara dua tempat sentiasa lebih pendek atau sama dengan jarak mengikut jalan. Jalan raya jarang lurus, jadi jarak perjalanan lebih panjang.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, 1 unit = 1 km. Berapakah jarak terus dari Sekolah (S) ke Pasar (P), kepada 2 tempat perpuluhan (km)?",b:tepat(-4,2,2,4,2),tol:0.01,suf:"km",u:"S(−4, 2) dan P(2, 4): jarak mendatar 6, mencancang 2. √(36 + 4) = √40 = 6.32 km.",kira:()=>bunda(H(-4,2,2,4),2)},
 {j:"nombor",t:"Berapakah jarak terus dari Sekolah (S) ke Masjid (M) dalam Rajah 1, kepada 2 tempat perpuluhan (km)?",b:tepat(-4,2,-2,-3,2),tol:0.01,suf:"km",u:"S(−4, 2) dan M(−2, −3): jarak mendatar 2, mencancang 5. √(4 + 25) = √29 = 5.39 km.",kira:()=>bunda(H(-4,2,-2,-3),2)},
 {j:"nombor",t:"Berapakah jarak terus dari Hentian (H) ke Klinik (K) dalam Rajah 1, kepada 2 tempat perpuluhan (km)?",b:tepat(1,0,4,-2,2),tol:0.01,suf:"km",u:"H(1, 0) dan K(4, −2): jarak mendatar 3, mencancang 2. √(9 + 4) = √13 = 3.61 km.",kira:()=>bunda(H(1,0,4,-2),2)},
 {j:"nombor",t:"Sebuah bas akan berhenti di titik tengah antara Sekolah (S) dan Klinik (K). Berapakah koordinat x titik itu?",b:0,tol:0.01,u:"x = (−4 + 4) ÷ 2 = 0.",kira:()=>(-4+4)/2},
 {j:"nombor",t:"Sebuah bas akan berhenti di titik tengah antara Sekolah (S) dan Klinik (K). Berapakah koordinat y titik itu?",b:0,tol:0.01,u:"y = (2 + (−2)) ÷ 2 = 0. Bas berhenti di asalan.",kira:()=>(2+(-2))/2},
 {j:"pilih",t:"Antara tempat berikut dalam Rajah 1, manakah paling hampir dengan Hentian (H)?",p:["Klinik (K)","Pasar (P)","Masjid (M)","Sekolah (S)"],b:0,u:"Jarak dari H: K = √13 = 3.61, P = √17 = 4.12, M = √18 = 4.24, S = √29 = 5.39. Klinik paling hampir.",kira:()=>{const d={K:H(1,0,4,-2),P:H(1,0,2,4),M:H(1,0,-2,-3),S:H(1,0,-4,2)};return Object.keys(d).sort((a,b)=>d[a]-d[b])[0]==="K";}},
 {j:"pilih",t:"Titik tengah antara Pasar (P) dan Masjid (M) dalam Rajah 1 ialah:",p:["(0, 0.5)","(2, 3.5)","(0, 3.5)","(4, 1)"],b:0,u:"P(2, 4) dan M(−2, −3): x = (2 + (−2)) ÷ 2 = 0, y = (4 + (−3)) ÷ 2 = 0.5.",kira:()=>(2-2)/2===0&&(4-3)/2===0.5},
 {j:"nombor",t:"Sebuah menara diletakkan tepat di tengah antara Sekolah (S) dan Pasar (P). Berapakah jarak menara itu dari Sekolah, kepada 2 tempat perpuluhan (km)?",b:bunda(tepat(-4,2,2,4,4)/2,2),tol:0.01,suf:"km",u:"SP = √40 = 6.3246. Menara di titik tengah, jadi jaraknya separuh: 3.16 km.",kira:()=>bunda(H(-4,2,2,4)/2,2)}],
 bos:{j:"nombor",t:"Seorang murid berjalan terus dari Hentian (H) ke Sekolah (S), kemudian terus ke Klinik (K) dalam Rajah 1. Berapakah jumlah jarak perjalanan itu, kepada 2 tempat perpuluhan (km)?",b:bunda(tepat(1,0,-4,2,4)+tepat(-4,2,4,-2,4),2),tol:0.02,suf:"km",u:"HS = √29 = 5.385. SK = √(64 + 16) = √80 = 8.944. Jumlah = 14.33 km.",kira:()=>bunda(H(1,0,-4,2)+H(-4,2,4,-2),2)}},

{n:5, tempat:"Segi Tiga Sakti", sk:"7.3.1 Sistem koordinat Cartes: sifat bentuk", lampiran:"kor5",
 kadNama:"Sama Kaki", kadEm:"\u{1F53A}", kadFakta:"Segi tiga sama kaki mempunyai dua sisi sama panjang. Pada satah Cartes, awak boleh membuktikannya dengan mengira jarak dua sisi dan membandingkannya.",
 bosKadNama:"Semak Sudut Tegak", bosKadEm:"\u{1F4D0}", bosKadFakta:"Untuk menyemak sudut tegak tanpa protraktor, kira kuasa dua tiga sisi. Jika dua kuasa dua tambah jadi kuasa dua ketiga, sudut itu tegak.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, A(−3, −2) dan B(3, −2). Berapakah panjang AB (unit)?",b:6,tol:0.01,suf:"unit",u:"A dan B mempunyai koordinat y yang sama. AB = 3 − (−3) = 6.",kira:()=>H(-3,-2,3,-2)},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan C kepada (0, 3). Segi tiga ABC ialah segi tiga:",p:["Sama kaki dengan AC = BC","Sama sisi","Bersudut tegak di C","Yang ketiga-tiga sisinya berbeza"],b:0,u:"AC² = 9 + 25 = 34 dan BC² = 9 + 25 = 34, jadi AC = BC. AB² = 36 dan 34 + 34 ≠ 36, jadi bukan bersudut tegak.",kira:()=>{const ac=9+25,bc=9+25,ab=36;return ac===bc&&ab!==ac&&ac+bc!==ab;}},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan C kepada (0, 3). Berapakah nilai AC<sup>2</sup>?",b:34,tol:0.01,u:"AC² = (0 − (−3))² + (3 − (−2))² = 9 + 25 = 34.",kira:()=>Math.pow(0+3,2)+Math.pow(3+2,2)},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan C kepada (3, 4). Adakah segi tiga ABC bersudut tegak di B?",p:["Ya, kerana AB² + BC² = AC²","Tidak, kerana AB tidak sama dengan BC","Tidak, kerana AC ialah sisi yang terpendek","Ya, kerana C dan A mempunyai koordinat y yang sama"],b:0,u:"AB² = 36, BC² = 36 dan AC² = 72. Oleh sebab 36 + 36 = 72, sudut di B ialah sudut tegak.",kira:()=>36+36===Math.pow(3+3,2)+Math.pow(4+2,2)},
 {j:"nombor",t:"Bucu segi tiga PQR ialah P(1, 1), Q(5, 1) dan R(3, 4). Berapakah panjang PR, kepada 2 tempat perpuluhan?",b:tepat(1,1,3,4,2),tol:0.01,suf:"unit",u:"PR = √(2² + 3²) = √13 = 3.61.",kira:()=>bunda(H(1,1,3,4),2)},
 {j:"pilih",t:"Bucu segi tiga PQR ialah P(1, 1), Q(5, 1) dan R(3, 4). Segi tiga PQR ialah segi tiga:",p:["Sama kaki dengan PR = QR","Sama sisi","Bersudut tegak di R","Yang ketiga-tiga sisinya berbeza"],b:0,u:"PR = √13 dan QR = √(4 + 9) = √13, manakala PQ = 4. Dua sisi sama, jadi segi tiga itu sama kaki.",kira:()=>H(1,1,3,4)===H(5,1,3,4)&&H(1,1,5,1)!==H(1,1,3,4)},
 {j:"nombor",t:"Segi empat tepat ABCD mempunyai A(0, 0), B(4, 0), C(4, 3) dan D(0, 3). Berapakah panjang pepenjuru AC?",b:5,tol:0.01,suf:"unit",u:"AC = √(4² + 3²) = √25 = 5.",kira:()=>H(0,0,4,3)},
 {j:"susun",t:"Susun langkah menentukan sama ada segi tiga dengan bucu (0, 0), (4, 0) dan (0, 3) bersudut tegak.",p:["Kira panjang tiga sisi: 4, 3 dan 5","Kenal pasti sisi terpanjang, iaitu 5","Semak: 4² + 3² = 16 + 9 = 25 = 5²","Kesimpulan: segi tiga itu bersudut tegak"],b:[0,1,2,3],u:"Kira sisi, pilih yang terpanjang, semak hubungan Pythagoras, kemudian buat kesimpulan.",kira:()=>H(0,0,4,0)**2+H(0,0,0,3)**2===H(4,0,0,3)**2}],
 bos:{j:"banyak",t:"A(−3, −2) dan B(3, −2). Titik C dipilih supaya AC = BC. Pilih SEMUA titik C yang memenuhi syarat itu dan membentuk segi tiga.",p:["C(0, 3)","C(0, −5)","C(0, 0)","C(1, 3)","C(3, 3)","C(2, −2)"],b:[0,1,2],u:"AC = BC apabila C berada pada garis x = 0. Ketiga-tiga C(0, 3), C(0, −5) dan C(0, 0) memenuhinya dan bukan pada garis AB. C(1, 3), C(3, 3) dan C(2, −2) tidak sama jarak dari A dan B.",kira:()=>[[0,3],[0,-5],[0,0]].every(c=>Math.abs(H(-3,-2,c[0],c[1])-H(3,-2,c[0],c[1]))<1e-9)&&[[1,3],[3,3],[2,-2]].every(c=>Math.abs(H(-3,-2,c[0],c[1])-H(3,-2,c[0],c[1]))>1e-9)}},

{n:6, tempat:"Studio Reka Peta", sk:"7.3.1 Masalah bukan rutin pada satah Cartes", lampiran:"kor6",
 kadNama:"Cari Hujung", kadEm:"\u{1F50D}", kadFakta:"Jika awak tahu satu hujung dan titik tengah, awak boleh cari hujung yang satu lagi dengan menggandakan titik tengah dan menolak hujung yang diketahui.",
 bosKadNama:"Reka Sendiri", bosKadEm:"✏\u{FE0F}", bosKadFakta:"Pereka bandar merancang lokasi sekolah, klinik dan taman menggunakan peta berkoordinat. Jarak dan titik tengah membantu mereka memilih tempat yang adil untuk semua.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, M(1, 2) ialah titik tengah AB dan A(−3, −1). Berapakah koordinat x bagi B?",b:5,tol:0.01,u:"(−3 + x) ÷ 2 = 1, jadi −3 + x = 2 dan x = 5.",kira:()=>2*1-(-3)},
 {j:"nombor",t:"Dalam Rajah 1, M(1, 2) ialah titik tengah AB dan A(−3, −1). Berapakah koordinat y bagi B?",b:5,tol:0.01,u:"(−1 + y) ÷ 2 = 2, jadi −1 + y = 4 dan y = 5.",kira:()=>2*2-(-1)},
 {j:"pilih",t:"M(2, 3) ialah titik tengah PQ dan P(−1, 4). Koordinat Q ialah:",p:["(5, 2)","(0.5, 3.5)","(3, −1)","(1, 7)"],b:0,u:"Q = (2 × 2 − (−1), 2 × 3 − 4) = (5, 2).",kira:()=>2*2-(-1)===5&&2*3-4===2},
 {j:"nombor",t:"A(2, −3) dan B(8, 5). C ialah titik tengah AB. Berapakah jarak CB (unit)?",b:5,tol:0.01,suf:"unit",u:"AB = √(6² + 8²) = 10. C ialah titik tengah, jadi CB = 10 ÷ 2 = 5.",kira:()=>H(2,-3,8,5)/2},
 {j:"nombor",t:"Titik P(−2, 1) dan Q(4, k) berjarak 10 unit. Cari nilai k yang positif.",b:9,tol:0.01,u:"36 + (k − 1)² = 100, jadi (k − 1)² = 64 dan k − 1 = ±8. Nilai positif ialah k = 9.",kira:()=>1+Math.sqrt(100-36)},
 {j:"nombor",t:"A(1, 2) dan B(a, 2). Titik tengah AB ialah (4, 2). Cari nilai a.",b:7,tol:0.01,u:"(1 + a) ÷ 2 = 4, jadi 1 + a = 8 dan a = 7.",kira:()=>2*4-1},
 {j:"pilih",t:"Segi empat tepat mempunyai bucu A(0, 0), B(6, 0), C(6, 8) dan D(0, 8). Titik tengah pepenjuru AC ialah:",p:["(3, 4)","(6, 4)","(3, 8)","(6, 8)"],b:0,u:"Titik tengah AC = ((0 + 6) ÷ 2, (0 + 8) ÷ 2) = (3, 4).",kira:()=>(0+6)/2===3&&(0+8)/2===4},
 {j:"nombor",t:"Sebuah kapal berada di A(−6, 2) dan kapal lain di B(6, 7). Berapakah jarak antara kedua-dua kapal (unit)?",b:13,tol:0.01,suf:"unit",u:"Jarak mendatar 12 dan jarak mencancang 5. √(144 + 25) = 13.",kira:()=>H(-6,2,6,7)}],
 bos:{j:"buka",
  t:"Reka satu peta kampung awak pada satah Cartes dengan sekurang-kurangnya 4 tempat. Cari lokasi terbaik untuk sebuah pusat kutipan sampah supaya adil untuk dua tempat yang berjauhan.",
  arahan:"Tulis koordinat setiap tempat. Kira satu jarak antara dua tempat, kemudian kira titik tengah dua tempat yang berjauhan sebagai lokasi pusat itu. Tunjukkan semua langkah dan terangkan mengapa titik tengah ialah lokasi yang adil.",
  u:"Jawapan TP6 yang kukuh memberi koordinat yang jelas, mengira jarak dengan rumus yang betul, mengira titik tengah dengan betul, dan menerangkan mengapa titik tengah sama jauh dari kedua-dua tempat."}}
];

module.exports = {
  id:"m2b7", tingkatan:2, kod:"7.0 Koordinat",
  tajuk:"Kompas Bandar",
  subtajuk:"Matematik Ting. 2 · Bab 7 Koordinat",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat menerangkan maksud jarak antara dua titik pada satah Cartes dan mengenal rumus jarak. Langkah seterusnya ialah memahami titik tengah dan mula mengira dengan rumus.",
   2:"{n} memahami maksud dan rumus titik tengah serta bagaimana jarak dikira menggunakan segi tiga bersudut tegak. Perlu lebih latihan mengira sebelum bergerak ke TP3.",
   3:"{n} boleh mengira jarak antara dua titik dan koordinat titik tengah dengan betul. Galakkan menulis setiap langkah supaya tanda negatif tidak tersalah.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah menggunakan jarak dan titik tengah dalam konteks peta. Seterusnya latih masalah yang menggabungkan beberapa langkah.",
   5:"{n} dapat menyelesaikan masalah kompleks yang melibatkan sifat segi tiga dan segi empat pada satah Cartes. Sudah bersedia untuk masalah bukan rutin dan tugasan mereka cipta.",
   6:"{n} berjaya menyelesaikan masalah bukan rutin dan mereka cipta peta berkoordinat dengan jarak dan titik tengah yang betul serta penerangan yang jelas. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Koordinat. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyebut jarak mendatar dan jarak mencancang dengan bimbingan rakan sebaya."
  },
  lampiran:{ kor1:R_KOR1, kor2:R_KOR2, kor3:R_KOR3, kor4:R_KOR4, kor5:R_KOR5, kor6:R_KOR6 },
  aras:ARAS
};
