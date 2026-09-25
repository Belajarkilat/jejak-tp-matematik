/* Sumber kandungan — Matematik KSSM Tingkatan 1, Bab 13 Teorem Pythagoras.
   Fail ini disunting tangan. Jalankan `node bina.js m1b13` untuk menyemaknya
   dan menghasilkan bank-m1b13.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 1, Bahagian Pembangunan Kurikulum, muka 83 (dskp/matematik-t1.pdf).
   Jadual DSKP Bab 13 menulis enam tahap penguasaan dalam satu ruang tafsiran;
   kata-katanya dipisahkan mengikut tahap 1 hingga 6 di bawah.

   Rajah interaktif ialah widget `t1pyth` dalam widget-m1b13.js. Semua jawapan
   berangka dikira dengan kod dalam medan `kira` dan dibandingkan oleh
   tools/semak-jawapan.js. Sukatan T1 tidak melibatkan trigonometri, jadi tiada
   soalan sin, kos atau tan di sini. */
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
const pyt = (a, b) => bunda(Math.sqrt(a * a + b * b), 2);
const kaki = (c, a) => bunda(Math.sqrt(c * c - a * a), 2);

const SPI = [
"Mempamerkan pengetahuan asas tentang sisi segi tiga bersudut tegak.",
"Mempamerkan kefahaman tentang hubungan antara sisi segi tiga bersudut tegak.",
"Mengaplikasikan kefahaman tentang teorem Pythagoras.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang teorem Pythagoras dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang teorem Pythagoras dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang teorem Pythagoras dalam konteks penyelesaian masalah bukan rutin."];

/* ---------- lampiran: rajah Pythagoras interaktif ---------- */

const pyth = (spec, kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t1pyth", kapsyen, alt }, spec, extra || {});
const R_PYT1 = pyth({ mod: "petak", ia: 1, ib: 2 },
  "Rajah 1 · Petak pada setiap sisi segi tiga bersudut tegak. Gerakkan gelongsor a dan b, kemudian perhatikan petak ungu.",
  "Rajah interaktif segi tiga bersudut tegak dengan petak pada setiap sisi; gelongsor menukar sisi a dan sisi b, petak ungu berada pada hipotenus");
const R_PYT2 = pyth({ mod: "petak", ia: 1, ib: 2 },
  "Rajah 1 · Bandingkan luas petak hijau dan merah dengan luas petak ungu pada hipotenus.",
  "Rajah interaktif segi tiga bersudut tegak dengan luas petak pada setiap sisi; luas dua petak kecil dijumlahkan dan dibandingkan dengan petak hipotenus");
const R_PYT3 = pyth({ mod: "cari", i: 0, x: 0 },
  "Rajah 1 · Pilih segi tiga dan sisi yang dicari. Cuba dahulu, kemudian semak langkahnya.",
  "Rajah interaktif segi tiga bersudut tegak dengan satu sisi disorok sebagai tanda soal; gelongsor memilih segi tiga dan sisi yang dicari");
const R_PYT4 = pyth({ mod: "tangga", L: 10, i: 5 },
  "Rajah 1 · Tangga 10 m bersandar pada dinding. Kira dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif tangga sepanjang 10 meter bersandar pada dinding; gelongsor menukar jarak kaki tangga dari dinding dan tinggi tangga pada dinding dikira",
  { cabar: true });
const R_PYT5 = pyth({ mod: "rumah", t: 3, i: 0 },
  "Rajah 1 · Rumah dengan dinding t = 3 m. w ialah lebar tapak dan r ialah tinggi bumbung. Kira dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif rumah dengan dinding segi empat tepat dan bumbung segi tiga; gelongsor menukar lebar dan tinggi bumbung, panjang kasau dan perimeter dikira",
  { cabar: true });
const R_PYT6 = pyth({ mod: "akas", i: 0 },
  "Rajah 1 · Pilih tiga sisi dan lihat sama ada a² + b² sama dengan c². Tekaan dahulu, kemudian semak.",
  "Rajah interaktif segi tiga dengan tiga sisi tertentu; gelongsor memilih sisi dan menunjukkan sama ada jumlah kuasa dua dua sisi pendek sama dengan kuasa dua sisi terpanjang");

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Khemah Pengakap", sk:"13.1.1 Hipotenus bagi segi tiga bersudut tegak", lampiran:"pyt1",
 kadNama:"Hipotenus", kadEm:"\u{1F4D0}", kadFakta:"Perkataan hipotenus datang daripada bahasa Yunani yang bermaksud sisi yang terentang di bawah sudut tegak. Ia sentiasa sisi terpanjang dalam segi tiga bersudut tegak.",
 bosKadNama:"Sudut Tegak", bosKadEm:"\u{1F4CF}", bosKadFakta:"Sudut tegak ialah sudut 90°, seperti bucu sekeping kertas A4. Semua bucu buku dan meja biasanya ialah sudut tegak.",
 soalan:[
 {j:"pilih",t:"Sisi yang bertentangan dengan sudut tegak dalam segi tiga bersudut tegak dipanggil:",p:["Hipotenus","Tapak segi tiga","Tinggi tegak","Pepenjuru sisi"],b:0,u:"Hipotenus ialah sisi di hadapan sudut tegak."},
 {j:"pilih",t:"Antara tiga sisi sebuah segi tiga bersudut tegak, sisi yang paling panjang ialah:",p:["Hipotenus","Sisi yang menyentuh sudut tegak","Sisi yang paling menegak","Sisi yang paling mengufuk"],b:0,u:"Hipotenus sentiasa sisi terpanjang."},
 {j:"pilih",t:"Dalam Rajah 1, petak berwarna ungu dilukis pada sisi yang mana?",p:["Hipotenus","Sisi a","Sisi b","Sudut tegak"],b:0,u:"Petak ungu dilukis pada hipotenus, iaitu sisi di hadapan sudut tegak."},
 {j:"nombor",t:"Dalam Rajah 1, a = 3 cm dan b = 4 cm. Berapakah luas petak pada sisi a (cm²)?",b:9,tol:0.01,suf:"cm²",u:"Luas petak = 3 × 3 = 9 cm².",kira:()=>3*3},
 {j:"pilih",t:"Sebuah segi tiga bersudut tegak mempunyai berapa hipotenus?",p:["Satu","Dua sahaja","Tiga sahaja","Bergantung pada saiznya"],b:0,u:"Hanya ada satu sudut tegak, jadi hanya ada satu hipotenus."},
 {j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang hipotenus.",p:["Ia bertentangan dengan sudut tegak","Ia sisi terpanjang","Ia lebih panjang daripada setiap sisi lain","Ia sentiasa berada di bawah segi tiga","Ia bertemu dengan sudut tegak","Segi tiga bersudut tegak ada dua hipotenus"],b:[0,1,2],u:"Hipotenus di hadapan sudut tegak dan tidak menyentuhnya. Ia sisi terpanjang. Kedudukannya bergantung pada cara segi tiga diletakkan, dan hanya ada satu."},
 {j:"susun",t:"Susun langkah mengenal pasti hipotenus.",p:["Cari sudut tegak (90°)","Kenal dua sisi yang bertemu di sudut tegak itu","Sisi yang tinggal, di hadapan sudut tegak, ialah hipotenus","Semak bahawa ia sisi terpanjang"],b:[0,1,2,3],u:"Kenal sudut tegak dahulu. Hipotenus ialah sisi yang tidak menyentuhnya."},
 {j:"pilih",t:"Sebuah segi tiga bersudut tegak diputar sehingga hipotenusnya menjadi sisi menegak. Hipotenus itu:",p:["Masih di hadapan sudut tegak","Menjadi sisi terpendek","Bertukar menjadi tapak","Hilang kerana sudah menegak"],b:0,u:"Hipotenus ditentukan oleh sudut tegak, bukan oleh arah segi tiga."}],
 bos:{j:"pilih",t:"Segi tiga PQR mempunyai sudut tegak di Q. Sisi manakah hipotenus?",p:["PR","PQ","QR","PQ dan QR"],b:0,u:"Sudut tegak di Q, jadi hipotenus ialah sisi di hadapan Q, iaitu PR."}},

{n:2, tempat:"Petak Ajaib", sk:"13.1.2 Hubungan antara sisi dan Teorem Pythagoras", lampiran:"pyt2",
 kadNama:"Pythagoras", kadEm:"\u{1F3DB}\u{FE0F}", kadFakta:"Teorem ini dinamakan sempena Pythagoras, ahli matematik Yunani purba. Namun hubungan 3-4-5 sudah dikenali oleh tukang bina di Mesir dan Babylon sebelum itu.",
 bosKadNama:"Tali Berbuku", bosKadEm:"\u{1FAA2}", bosKadFakta:"Tukang bina purba dipercayai menggunakan tali berbuku dengan jarak 3, 4 dan 5 untuk membuat sudut tegak yang tepat.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, a = 3 cm dan b = 4 cm. Berapakah jumlah luas petak hijau dan petak merah (cm²)?",b:25,tol:0.01,suf:"cm²",u:"9 + 16 = 25 cm², sama dengan luas petak ungu.",kira:()=>3*3+4*4},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 6 cm dan b = 8 cm. Berapakah luas petak pada hipotenus (cm²)?",b:100,tol:0.01,suf:"cm²",u:"Luas petak hipotenus = 36 + 64 = 100 cm².",kira:()=>6*6+8*8},
 {j:"pilih",t:"Teorem Pythagoras menyatakan bahawa dalam segi tiga bersudut tegak:",p:["Kuasa dua hipotenus sama dengan jumlah kuasa dua dua sisi lain","Hipotenus sama dengan jumlah dua sisi lain","Kuasa dua hipotenus sama dengan hasil tolak kuasa dua dua sisi lain","Jumlah tiga sisi ialah kuasa dua hipotenus"],b:0,u:"Jika hipotenus c dan sisi lain a dan b, maka c² = a² + b²."},
 {j:"pilih",t:"Sebuah segi tiga bersudut tegak mempunyai sisi 5 cm dan 12 cm serta hipotenus 13 cm. Hubungan yang betul ialah:",p:["13² = 5² + 12²","13 = 5 + 12","5² = 13² + 12²","13² = 5 + 12"],b:0,u:"Hipotenus dikuasaduakan ialah 169, sama dengan 25 + 144."},
 {j:"pilih",t:"Mengapakah kita tidak boleh menulis a + b = c bagi segi tiga bersudut tegak?",p:["Jumlah dua sisi pendek sentiasa lebih besar daripada hipotenus","Hipotenus sentiasa lebih pendek daripada a","Kerana a dan b mestilah sama panjang","Kerana c bukan sisi segi tiga"],b:0,u:"Contohnya 3 + 4 = 7 tetapi hipotenus ialah 5. Hubungan yang betul menggunakan kuasa dua."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 5 cm dan b = 12 cm. Berapakah nilai c² (cm²)?",b:169,tol:0.01,suf:"cm²",u:"c² = 25 + 144 = 169 cm².",kira:()=>5*5+12*12},
 {j:"pilih",t:"Sebuah segi tiga bersudut tegak mempunyai hipotenus r dan dua sisi lain p dan q. Hubungan yang betul ialah:",p:["r² = p² + q²","p² = r² + q²","r = p + q","p² + q² + r² = 0"],b:0,u:"Hipotenus dikuasaduakan sama dengan jumlah kuasa dua dua sisi lain."},
 {j:"susun",t:"Susun langkah untuk menunjukkan Teorem Pythagoras menggunakan petak.",p:["Lukis petak pada setiap sisi segi tiga","Kira luas petak pada sisi a dan sisi b","Tambah dua luas itu","Bandingkan jumlahnya dengan luas petak hipotenus"],b:[0,1,2,3],u:"Jumlah luas dua petak kecil sama dengan luas petak besar pada hipotenus."}],
 bos:{j:"nombor",t:"Dalam Rajah 1, tetapkan a = 6 cm dan b = 8 cm. Berapakah panjang hipotenus c (cm)?",b:10,tol:0.01,suf:"cm",u:"c² = 36 + 64 = 100, jadi c = 10 cm.",kira:()=>pyt(6,8)}},

{n:3, tempat:"Tangga Bomba", sk:"13.1.3 (i) Panjang sisi yang tidak diketahui dan 13.2.1 Akas", lampiran:"pyt3",
 kadNama:"Tiga Serangkai", kadEm:"\u{1F522}", kadFakta:"Set tiga nombor bulat seperti 3-4-5 dan 5-12-13 yang memenuhi a² + b² = c² dipanggil tiga serangkai Pythagoras.",
 bosKadNama:"Punca Kuasa Dua", bosKadEm:"\u{221A}", bosKadFakta:"Jika c² = 169, maka c = 13 kerana 13 × 13 = 169. Panjang sisi mestilah positif, jadi kita ambil punca kuasa dua yang positif sahaja.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, a = 3 cm dan b = 4 cm. Berapakah panjang hipotenus (cm)?",b:5,tol:0.01,suf:"cm",u:"c² = 9 + 16 = 25, jadi c = 5 cm.",kira:()=>pyt(3,4)},
 {j:"nombor",t:"Sebuah segi tiga bersudut tegak mempunyai sisi 5 cm dan 12 cm. Berapakah panjang hipotenus (cm)?",b:13,tol:0.01,suf:"cm",u:"c² = 25 + 144 = 169, jadi c = 13 cm.",kira:()=>pyt(5,12)},
 {j:"nombor",t:"Hipotenus sebuah segi tiga bersudut tegak ialah 10 cm dan satu sisi lagi 6 cm. Berapakah panjang sisi yang ketiga (cm)?",b:8,tol:0.01,suf:"cm",u:"Sisi² = 100 − 36 = 64, jadi sisi = 8 cm.",kira:()=>kaki(10,6)},
 {j:"nombor",t:"Dalam Rajah 1, pilih segi tiga 8-15-17 dan cari sisi a jika b = 15 cm dan c = 17 cm. Berapakah a (cm)?",b:8,tol:0.01,suf:"cm",u:"a² = 289 − 225 = 64, jadi a = 8 cm.",kira:()=>kaki(17,15)},
 {j:"nombor",t:"Dua sisi pendek sebuah segi tiga bersudut tegak masing-masing 1 cm. Berapakah panjang hipotenus, kepada 2 tempat perpuluhan (cm)?",b:1.41,tol:0.01,suf:"cm",u:"c² = 1 + 1 = 2, jadi c = 1.41 cm.",kira:()=>pyt(1,1)},
 {j:"nombor",t:"Dua sisi pendek sebuah segi tiga bersudut tegak ialah 4 cm dan 6 cm. Berapakah hipotenus, kepada 2 tempat perpuluhan (cm)?",b:7.21,tol:0.01,suf:"cm",u:"c² = 16 + 36 = 52, jadi c = 7.21 cm.",kira:()=>pyt(4,6)},
 {j:"pilih",t:"Hipotenus c dan satu sisi b diketahui. Untuk mencari sisi a, gunakan:",p:["a² = c² − b²","a² = c² + b²","a = c − b","a² = b² − c²"],b:0,u:"Daripada c² = a² + b², tolak b² pada kedua-dua belah."},
 {j:"pilih",t:"Sebuah segi tiga mempunyai sisi 6 cm, 8 cm dan 10 cm. Adakah ia segi tiga bersudut tegak?",p:["Ya, kerana 6² + 8² = 10²","Tidak, kerana 6 + 8 tidak sama dengan 10","Tidak, kerana semua sisi berbeza","Ya, kerana 6 + 8 lebih besar daripada 10"],b:0,u:"36 + 64 = 100, sama dengan 10². Ini akas Teorem Pythagoras."}],
 bos:{j:"nombor",t:"Dalam Rajah 1, pilih segi tiga 7-24-25 dan cari sisi b jika a = 7 cm dan c = 25 cm. Berapakah b (cm)?",b:24,tol:0.01,suf:"cm",u:"b² = 625 − 49 = 576, jadi b = 24 cm.",kira:()=>kaki(25,7)}},

{n:4, tempat:"Bomba Tolong", sk:"13.1.3 (i) dan 13.1.4 Masalah mudah melibatkan Teorem Pythagoras", lampiran:"pyt4",
 kadNama:"Tangga Selamat", kadEm:"\u{1FA9C}", kadFakta:"Tangga yang diletakkan terlalu tegak boleh terbalik ke belakang, dan yang terlalu landai boleh tergelincir. Mengira jarak kaki tangga membantu kita memilih kedudukan yang selamat.",
 bosKadNama:"Jarak Terus", bosKadEm:"\u{1F9ED}", bosKadFakta:"Jarak terus dari titik mula ke titik akhir ialah hipotenus bagi laluan dua arah yang bersudut tegak. Itulah sebabnya jalan pintas melintas padang lebih dekat.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tangga 10 m diletakkan dengan kakinya 6 m dari dinding. Berapakah tinggi tangga mencecah dinding (m)?",b:8,tol:0.01,suf:"m",u:"h² = 100 − 36 = 64, jadi h = 8 m.",kira:()=>kaki(10,6)},
 {j:"nombor",t:"Dalam Rajah 1, kaki tangga 10 m dialihkan 8 m dari dinding. Berapakah tinggi tangga mencecah dinding (m)?",b:6,tol:0.01,suf:"m",u:"h² = 100 − 64 = 36, jadi h = 6 m.",kira:()=>kaki(10,8)},
 {j:"nombor",t:"Dalam Rajah 1, kaki tangga 10 m berada 3 m dari dinding. Berapakah tinggi tangga mencecah dinding, kepada 2 tempat perpuluhan (m)?",b:9.54,tol:0.01,suf:"m",u:"h² = 100 − 9 = 91, jadi h = 9.54 m.",kira:()=>kaki(10,3)},
 {j:"nombor",t:"Sebatang tangga 13 m bersandar pada dinding dengan kaki tangga 5 m dari dinding. Berapakah tinggi tangga mencecah dinding (m)?",b:12,tol:0.01,suf:"m",u:"h² = 169 − 25 = 144, jadi h = 12 m.",kira:()=>kaki(13,5)},
 {j:"nombor",t:"Tali layang-layang sepanjang 25 m tegang lurus. Layang-layang itu berada 24 m tinggi. Berapakah jarak mengufuk pemegang layang-layang dari titik di bawahnya (m)?",b:7,tol:0.01,suf:"m",u:"Jarak² = 625 − 576 = 49, jadi jarak = 7 m.",kira:()=>kaki(25,24)},
 {j:"nombor",t:"Sebuah padang bola berbentuk segi empat tepat berukuran 40 m × 30 m. Berapakah panjang pepenjuru padang itu (m)?",b:50,tol:0.01,suf:"m",u:"Pepenjuru² = 1 600 + 900 = 2 500, jadi pepenjuru = 50 m.",kira:()=>pyt(40,30)},
 {j:"nombor",t:"Aiman berjalan 8 km ke utara, kemudian 15 km ke timur. Berapakah jarak terus dia dari tempat mula (km)?",b:17,tol:0.01,suf:"km",u:"Jarak² = 64 + 225 = 289, jadi jarak = 17 km.",kira:()=>pyt(8,15)},
 {j:"pilih",t:"Sebuah skrin TV berukuran 80 cm lebar dan 60 cm tinggi. Berapakah panjang pepenjuru skrin itu?",p:["100 cm","140 cm","70 cm","20 cm"],b:0,u:"Pepenjuru² = 6 400 + 3 600 = 10 000, jadi pepenjuru = 100 cm.",kira:()=>pyt(80,60)===100}],
 bos:{j:"nombor",t:"Nadia berjalan 12 m ke barat, kemudian 5 m ke selatan. Berapakah jarak terus dia dari tempat mula (m)?",b:13,tol:0.01,suf:"m",u:"Jarak² = 144 + 25 = 169, jadi jarak = 13 m.",kira:()=>pyt(12,5)}},

{n:5, tempat:"Rumah Kayu", sk:"13.1.3 (ii) Gabungan bentuk geometri dan 13.2 Akas Teorem Pythagoras", lampiran:"pyt5",
 kadNama:"Kasau", kadEm:"\u{1F3E0}", kadFakta:"Kasau ialah kayu condong pada rangka bumbung. Tukang bumbung mengira panjang kasau menggunakan Teorem Pythagoras sebelum memotong kayu.",
 bosKadNama:"Trapezium", bosKadEm:"\u{1F537}", bosKadFakta:"Sisi condong sebuah trapezium boleh dikira dengan melukis garis tegak supaya terbentuk segi tiga bersudut tegak. Itulah cara menukar bentuk gabungan kepada bentuk yang kita kenali.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, rumah berukuran 6 × 4 m (lebar × tinggi bumbung). Berapakah panjang kasau s (m)?",b:5,tol:0.01,suf:"m",u:"Separuh lebar = 3 m. s² = 9 + 16 = 25, jadi s = 5 m.",kira:()=>pyt(3,4)},
 {j:"nombor",t:"Dalam Rajah 1, pilih rumah berukuran 10 × 12 m. Berapakah panjang kasau s (m)?",b:13,tol:0.01,suf:"m",u:"Separuh lebar = 5 m. s² = 25 + 144 = 169, jadi s = 13 m.",kira:()=>pyt(5,12)},
 {j:"nombor",t:"Dalam Rajah 1, pilih rumah berukuran 16 × 6 m dengan dinding t = 3 m. Berapakah perimeter rumah (w + 2t + 2s) dalam m?",b:42,tol:0.01,suf:"m",u:"Separuh lebar = 8. s² = 64 + 36 = 100, jadi s = 10. Perimeter = 16 + 6 + 20 = 42 m.",kira:()=>16+2*3+2*pyt(8,6)},
 {j:"nombor",t:"Dalam Rajah 1, pilih rumah berukuran 12 × 8 m dengan dinding t = 3 m. Berapakah perimeter rumah (m)?",b:38,tol:0.01,suf:"m",u:"Separuh lebar = 6. s² = 36 + 64 = 100, jadi s = 10. Perimeter = 12 + 6 + 20 = 38 m.",kira:()=>12+2*3+2*pyt(6,8)},
 {j:"nombor",t:"Sebuah trapezium sama kaki mempunyai sisi selari 10 cm dan 16 cm, dan tinggi 8 cm. Berapakah panjang sisi condongnya, kepada 2 tempat perpuluhan (cm)?",b:8.54,tol:0.01,suf:"cm",u:"Beza sisi selari ÷ 2 = (16 − 10) ÷ 2 = 3 cm. Sisi condong² = 9 + 64 = 73, jadi sisi condong = 8.54 cm.",kira:()=>pyt(3,8)},
 {j:"nombor",t:"Sebuah segi tiga sama kaki mempunyai tapak 24 cm dan tinggi 5 cm. Berapakah panjang setiap sisi yang sama (cm)?",b:13,tol:0.01,suf:"cm",u:"Separuh tapak = 12 cm. Sisi² = 144 + 25 = 169, jadi sisi = 13 cm.",kira:()=>pyt(12,5)},
 {j:"pilih",t:"Sebuah segi tiga mempunyai sisi 9 cm, 12 cm dan 16 cm. Adakah ia bersudut tegak?",p:["Tidak, kerana 9² + 12² = 225 tetapi 16² = 256","Ya, kerana 9² + 12² = 16²","Ya, kerana 9 + 12 lebih besar daripada 16","Tidak, kerana 16 bukan nombor genap"],b:0,u:"81 + 144 = 225, tetapi 16² = 256. Nilai tidak sama, jadi ia bukan segi tiga bersudut tegak.",kira:()=>9*9+12*12!==16*16},
 {j:"pilih",t:"Seorang tukang kayu mengukur bucu sebuah bingkai. Dua sisi berukuran 60 cm dan 80 cm, dan jarak antara hujungnya 100 cm. Adakah bucu itu sudut tegak?",p:["Ya, kerana 60² + 80² = 100²","Tidak, kerana 60 + 80 = 140","Tidak, kerana 100 lebih besar daripada 80","Ya, kerana semua ukuran nombor bulat"],b:0,u:"3 600 + 6 400 = 10 000 = 100². Maka bucu itu sudut tegak.",kira:()=>60*60+80*80===100*100}],
 bos:{j:"nombor",t:"Dalam trapezium ABCD, AB selari dengan DC dan sudut A ialah sudut tegak. AB = 12 cm, DC = 20 cm dan AD = 15 cm. Berapakah panjang BC (cm)?",b:17,tol:0.01,suf:"cm",u:"Lukis garis dari B ke DC supaya terbentuk segi tiga bersudut tegak. Sisi mengufuk = 20 − 12 = 8 cm dan sisi tegak = 15 cm. BC² = 64 + 225 = 289, jadi BC = 17 cm.",kira:()=>pyt(8,15)}},

{n:6, tempat:"Ukur Tapak", sk:"13.2.1 / 13.2.2 Akas Teorem Pythagoras dan masalah bukan rutin", lampiran:"pyt6",
 kadNama:"Akas", kadEm:"\u{1F503}", kadFakta:"Akas Teorem Pythagoras: jika kuasa dua sisi terpanjang sama dengan jumlah kuasa dua dua sisi lain, maka segi tiga itu bersudut tegak.",
 bosKadNama:"Semak Bucu", bosKadEm:"\u{1F6E0}\u{FE0F}", bosKadFakta:"Tukang binaan menyemak sama ada bucu bangunan tepat sudut tegak dengan mengukur pepenjuru. Jika pepenjuru betul mengikut Teorem Pythagoras, bucu itu tepat.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih sisi 4, 5, 6. Adakah segi tiga itu bersudut tegak?",p:["Tidak, kerana 4² + 5² = 41 dan 6² = 36","Ya, kerana 4² + 5² = 6²","Ya, kerana 4 + 5 lebih besar daripada 6","Tidak, kerana ia tiada sisi sama panjang"],b:0,u:"16 + 25 = 41 tetapi 6² = 36. Nilai tidak sama, jadi tidak bersudut tegak.",kira:()=>4*4+5*5!==6*6},
 {j:"pilih",t:"Dalam Rajah 1, pilih sisi 8, 15, 17. Adakah segi tiga itu bersudut tegak?",p:["Ya, kerana 8² + 15² = 17²","Tidak, kerana 8 + 15 tidak sama dengan 17","Tidak, kerana 17 ialah nombor ganjil","Ya, kerana 8 + 15 = 17"],b:0,u:"64 + 225 = 289 = 17². Maka ia bersudut tegak.",kira:()=>8*8+15*15===17*17},
 {j:"pilih",t:"Dalam Rajah 1, pilih sisi 7, 8, 10. Bandingkan 7² + 8² dengan 10². Apakah kesimpulannya?",p:["113 lebih besar daripada 100, jadi bukan bersudut tegak","113 dan 100 sama, jadi bersudut tegak","100 lebih besar daripada 113, jadi bersudut tegak","Tidak boleh dibandingkan"],b:0,u:"49 + 64 = 113 tetapi 10² = 100. Nilainya tidak sama, jadi bukan segi tiga bersudut tegak.",kira:()=>7*7+8*8>10*10},
 {j:"nombor",t:"Sebuah segi tiga bersudut tegak mempunyai hipotenus 20 cm dan satu sisi 12 cm. Berapakah sisi yang ketiga (cm)?",b:16,tol:0.01,suf:"cm",u:"Sisi² = 400 − 144 = 256, jadi sisi = 16 cm.",kira:()=>kaki(20,12)},
 {j:"pilih",t:"Zul berkata segi tiga dengan sisi 2, 3 dan 4 bersudut tegak kerana 2 + 3 lebih besar daripada 4. Apakah kesilapan Zul?",p:["Dia sepatutnya menyemak 2² + 3² = 4²","Dia sepatutnya menyemak 2 + 3 = 4","Dia sepatutnya menyemak 2² + 4² = 3²","Tiada kesilapan"],b:0,u:"Akas Teorem Pythagoras menggunakan kuasa dua. 4 + 9 = 13 tetapi 4² = 16, jadi segi tiga itu tidak bersudut tegak."},
 {j:"pilih",t:"Segi tiga dengan sisi 3, 4 dan 5 cm ialah bersudut tegak. Adakah segi tiga dengan sisi 30, 40 dan 50 cm juga bersudut tegak?",p:["Ya, kerana 900 + 1 600 = 2 500","Tidak, kerana 30 bukan 3","Tidak, kerana sisinya lebih besar","Ya, kerana 30 + 40 = 70"],b:0,u:"Semua sisi didarab 10, dan 900 + 1 600 = 2 500 = 50². Bentuknya sama, cuma lebih besar.",kira:()=>30*30+40*40===50*50},
 {j:"nombor",t:"Sebuah bingkai pintu berbentuk segi empat tepat berukuran 1.5 m × 2 m. Berapakah panjang pepenjuru yang sepatutnya, supaya bucu bingkai tepat sudut tegak (m)?",b:2.5,tol:0.01,suf:"m",u:"Pepenjuru² = 2.25 + 4 = 6.25, jadi pepenjuru = 2.5 m.",kira:()=>pyt(1.5,2)},
 {j:"pilih",t:"Antara set tiga sisi berikut, yang manakah membentuk segi tiga bersudut tegak?",p:["5, 12, 13","6, 7, 8","4, 5, 7","8, 9, 10"],b:0,u:"25 + 144 = 169 = 13². Set lain tidak memenuhi hubungan itu.",kira:()=>5*5+12*12===13*13}],
 bos:{j:"buka",
  t:"Awak dan rakan mahu memasang khemah pengakap di padang dan mahu sudut tapaknya tepat sudut tegak, tetapi hanya ada tali dan pita ukur.",
  arahan:"Terangkan cara menyemak atau membuat sudut tegak menggunakan tali dan Teorem Pythagoras. Nyatakan panjang tali yang digunakan, tunjukkan pengiraan, dan terangkan mengapa kaedah itu berkesan.",
  u:"Jawapan TP6 yang kukuh memilih tiga serangkai seperti 3-4-5 atau 6-8-10, menunjukkan pengiraan 3² + 4² = 5², dan menjelaskan bahawa akas Teorem Pythagoras menjamin segi tiga itu bersudut tegak."}}
];

module.exports = {
  id:"m1b13", tingkatan:1, kod:"13.0 Teorem Pythagoras",
  tajuk:"Kem Pythagoras",
  subtajuk:"Matematik Ting. 1 · Bab 13 Teorem Pythagoras",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal pasti hipotenus dan sisi lain dalam segi tiga bersudut tegak. Langkah seterusnya ialah memahami hubungan antara panjang ketiga-tiga sisi.",
   2:"{n} memahami bahawa luas petak pada hipotenus sama dengan jumlah luas dua petak lain, iaitu Teorem Pythagoras. Perlu lebih latihan menulis hubungan itu sebelum menggunakannya untuk mengira.",
   3:"{n} boleh menggunakan teorem Pythagoras untuk mencari hipotenus dan sisi lain, serta menyemak sama ada sebuah segi tiga bersudut tegak. Galakkan menulis langkah kerja dengan kemas.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah seperti tangga, pepenjuru dan jarak terus menggunakan Teorem Pythagoras. Seterusnya latih masalah yang melibatkan gabungan bentuk.",
   5:"{n} dapat menyelesaikan masalah kompleks yang melibatkan gabungan bentuk seperti bumbung rumah dan trapezium, serta menggunakan akas Teorem Pythagoras. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya menggunakan Teorem Pythagoras dan akasnya dalam masalah bukan rutin serta merancang cara menyemak sudut tegak. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Teorem Pythagoras. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menamakan hipotenus, dan bandingkan luas petak pada setiap sisi dengan bimbingan rakan sebaya."
  },
  lampiran:{ pyt1:R_PYT1, pyt2:R_PYT2, pyt3:R_PYT3, pyt4:R_PYT4, pyt5:R_PYT5, pyt6:R_PYT6 },
  aras:ARAS
};
