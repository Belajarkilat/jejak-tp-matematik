/* Sumber kandungan — Matematik KSSM Tingkatan 2, Bab 11 Transformasi Isometri.
   Fail ini disunting tangan. Jalankan `node bina.js m2b11` untuk menyemaknya
   dan menghasilkan bank-m2b11.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 75 (dskp/matematik-t2.pdf).
   DSKP menulis enam tahap penguasaan bagi bab ini dalam satu jadual, jadi
   semua enam tahap disalin terus. Tiada tahap yang ditulis sendiri.

   Rajah interaktif ialah widget `t2iso` dalam widget-m2b11.js. Objek L bagi
   translasi ialah L_TRANS (titik A ialah (-1, -1)); objek L bagi pantulan dan
   putaran ialah L_LAIN (titik A ialah (1, 1)); segi tiga ABC bagi isometri
   ialah A(-4, 1), B(-2, 1), C(-4, 2). Semua jawapan berangka dikira dengan kod
   dalam medan `kira` dan dibandingkan oleh tools/semak-jawapan.js.
   Sukatan bab ini: objek dua dimensi sahaja; simbol perwakilan bagi pantulan
   dan putaran dikecualikan (DSKP 11.3 dan 11.4), maka tiada tatatanda simbolik. */
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
const m = n => (n < 0 ? "−" : "") + Math.abs(n);
const K = p => "(" + m(p[0]) + ", " + m(p[1]) + ")";
const trans = (p, a, b) => [p[0] + a, p[1] + b];
const putar = (p, c, d) => {
  const dx = p[0] - c[0], dy = p[1] - c[1];
  const r = d === 90 ? [-dy, dx] : d === 180 ? [-dx, -dy] : [dy, -dx];
  return [c[0] + r[0], c[1] + r[1]];
};
const jarak = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]);
const A_TRANS = [-1, -1], A_LAIN = [1, 1];
/* peringkat simetri putaran = bilangan sisi bagi poligon sekata, dan 2 bagi segi empat tepat/selari/rombus */
const peringkat = { "segi tiga sama sisi": 3, "segi empat sama": 4, "segi empat tepat": 2, "segi empat selari": 2, "segi enam sekata": 6, "bintang lima penjuru": 5, "trapezium sama kaki": 1, "rombus": 2 };
const sudutKecil = n => 360 / n;

const SPI = [
"Mempamerkan pengetahuan asas tentang translasi, pantulan dan putaran.",
"Mempamerkan kefahaman tentang translasi, pantulan dan putaran.",
"Mengaplikasikan kefahaman tentang translasi, pantulan dan putaran untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang translasi, pantulan dan putaran dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang translasi, pantulan dan putaran dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang translasi, pantulan dan putaran dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran: rajah transformasi interaktif ---------- */

const iso = (spec, kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t2iso", kapsyen, alt }, spec, extra || {});
const R_TRF1 = iso({ mod: "translasi", a: 6, b: 5 },
  "Rajah 1 · Objek L hijau digerakkan oleh vektor translasi. Gerakkan gelongsor a dan b, kemudian perhatikan imej merah.",
  "Rajah interaktif translasi pada grid: objek berbentuk L digerakkan oleh vektor (a, b); gelongsor a dan b menukar vektor");
const R_PAN2 = iso({ mod: "pantulan", p: 0 },
  "Rajah 1 · Objek L hijau dipantul pada garis putus-putus ungu. Pilih paksi pantulan dan bandingkan jarak A dan A′ ke paksi.",
  "Rajah interaktif pantulan pada grid: objek berbentuk L dipantul pada paksi yang dipilih; gelongsor menukar paksi pantulan");
const R_PUT3 = iso({ mod: "putaran", c: 0, u: 0 },
  "Rajah 1 · Objek L hijau diputar pada pusat P. +90° ialah lawan jam dan −90° ialah ikut jam. Perhatikan jarak PA dan PA′.",
  "Rajah interaktif putaran pada grid: objek berbentuk L diputar pada pusat P; gelongsor memilih pusat dan jenis putaran");
const R_TRF4 = iso({ mod: "translasi", a: 7, b: 4 },
  "Rajah 1 · Peta harta karun. Kira dahulu imej A′ di kertas conteng, kemudian semak dengan rajah.",
  "Rajah interaktif translasi pada grid dalam mod cabar: objek berbentuk L digerakkan oleh vektor (a, b); imej disembunyikan sehingga murid menyemak",
  { cabar: true });
const R_ISO5 = iso({ mod: "isometri", j: 0 },
  "Rajah 1 · Segi tiga ABC diubah oleh enam jenis transformasi. Kira dahulu panjang B′C′, kemudian semak dengan rajah.",
  "Rajah interaktif segi tiga ABC dan imejnya di bawah enam transformasi; gelongsor memilih transformasi dan panjang B'C' dibandingkan dengan BC",
  { cabar: true });
const R_SIM6 = iso({ mod: "simetri", i: 0, s: 0 },
  "Rajah 1 · Pilih bentuk dan putarkannya. Bentuk bergaris putus-putus ialah kedudukan asal; perhatikan bila bentuk itu padan semula.",
  "Rajah interaktif simetri putaran: bentuk yang dipilih diputar mengelilingi pusat dan dibandingkan dengan kedudukan asalnya");

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Taman Permainan", sk:"11.1.1 / 11.1.2 Transformasi dan kekongruenan", lampiran:"trf1",
 kadNama:"Padanan Titik", kadEm:"\u{1F3A0}", kadFakta:"Dalam transformasi, setiap titik pada objek dipadankan dengan tepat satu titik pada imej. Itulah sebabnya imej tidak ada titik lebih atau titik kurang berbanding objek.",
 bosKadNama:"Kongruen", bosKadEm:"\u{1F535}", bosKadFakta:"Dua bentuk kongruen boleh ditindihkan dan sepadan tepat. Kembar seiras ialah contoh yang mudah diingat: bentuk sama, saiz sama.",
 soalan:[
 {j:"pilih",t:"Sebuah gelongsor di taman permainan meluncur lurus tanpa berpusing. Perubahan kedudukan ini ialah:",p:["Translasi","Pantulan","Putaran","Pembesaran"],b:0,u:"Translasi menggerakkan objek ke arah tertentu tanpa memusingkannya."},
 {j:"pilih",t:"Bayangan awak dalam cermin ialah contoh transformasi jenis:",p:["Pantulan","Translasi","Putaran","Pengecilan"],b:0,u:"Cermin menghasilkan imej songsang di sebelah bertentangan, iaitu pantulan."},
 {j:"pilih",t:"Kincir angin berpusing pada satu titik tetap. Transformasi ini ialah:",p:["Putaran","Translasi","Pantulan","Pembesaran"],b:0,u:"Putaran memusingkan objek pada satu titik tetap yang dipanggil pusat putaran."},
 {j:"pilih",t:"Dalam transformasi, setiap titik pada objek dipadankan dengan tepat satu titik pada imej. Idea ini dipanggil:",p:["Padanan satu-dengan-satu","Padanan banyak-dengan-satu","Padanan satu-dengan-banyak","Padanan tanpa titik"],b:0,u:"Satu titik objek, satu titik imej: itulah padanan satu-dengan-satu."},
 {j:"pilih",t:"Dua bentuk yang kongruen mempunyai:",p:["Bentuk dan saiz yang sama","Bentuk sama, saiz berbeza","Saiz sama, bentuk berbeza","Bentuk dan saiz berbeza"],b:0,u:"Kongruen bermaksud sama bentuk dan sama saiz. Sama bentuk tetapi saiz berbeza dipanggil serupa."},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan a = 3 dan b = 2. Objek L hijau digerakkan ke imej merah. Apakah yang berubah?",p:["Kedudukan sahaja","Kedudukan dan saiz","Kedudukan dan orientasi","Bentuk dan saiz"],b:0,u:"Dalam translasi, hanya kedudukan berubah. Bentuk, saiz dan orientasi kekal sama."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 3 dan b = 2. Berapakah koordinat-x titik A′, imej bagi A(−1, −1)?",b:2,tol:0.01,u:"Koordinat-x imej = −1 + 3 = 2.",kira:()=>trans(A_TRANS,3,2)[0]},
 {j:"susun",t:"Susun langkah menentukan imej bagi objek yang ditranslasikan.",p:["Baca vektor translasi (a, b)","Ambil satu titik pada objek","Tambah a pada koordinat-x dan b pada koordinat-y","Tanda titik imej, kemudian sambung semua titik imej"],b:[0,1,2,3],u:"Baca vektor dahulu, gerakkan satu titik, kemudian buat yang sama untuk semua titik."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang transformasi.",p:["Translasi menggerakkan objek tanpa memusingkannya","Pantulan menghasilkan imej songsang seperti dalam cermin","Putaran memusingkan objek pada satu titik tetap","Translasi mengubah saiz objek kepada dua kali ganda","Dalam putaran, semua titik objek kekal di tempat asal","Kongruen bermaksud bentuk sama tetapi saiz berbeza"],b:[0,1,2],u:"Translasi tidak mengubah saiz. Dalam putaran, hanya pusat putaran yang kekal. Bentuk sama tetapi saiz berbeza ialah serupa, bukan kongruen."}},

{n:2, tempat:"Cermin Ajaib", sk:"11.3.1 - 11.3.4 Pantulan", lampiran:"pan2",
 kadNama:"Paksi Pantulan", kadEm:"\u{1F52E}", kadFakta:"Paksi pantulan ialah garis yang bertindak sebagai cermin. Titik yang berada tepat pada paksi tidak bergerak. Imejnya ialah titik itu sendiri.",
 bosKadNama:"Serenjang", bosKadEm:"\u{1F4D0}", bosKadFakta:"Garis yang menyambung sebarang titik dengan imejnya dalam pantulan sentiasa serenjang dengan paksi dan dipotong dua sama panjang oleh paksi itu.",
 soalan:[
 {j:"pilih",t:"Dalam pantulan, garis yang bertindak sebagai cermin dipanggil:",p:["Paksi pantulan","Pusat putaran","Vektor translasi","Garis binaan"],b:0,u:"Garis cermin dalam pantulan dipanggil paksi pantulan."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan paksi x = 2. Berapakah koordinat-x titik A′, imej bagi A(1, 1)?",b:3,tol:0.01,u:"A berada 1 unit di kiri x = 2, jadi A′ berada 1 unit di kanan: 2 + 1 = 3.",kira:()=>2*2-A_LAIN[0]},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan paksi x = 0. Berapakah koordinat-x titik A′, imej bagi A(1, 1)?",b:-1,tol:0.01,u:"Pantulan pada paksi-y menukar tanda koordinat-x: 1 menjadi −1.",kira:()=>-A_LAIN[0]},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan paksi y = 0. Berapakah koordinat-y titik A′, imej bagi A(1, 1)?",b:-1,tol:0.01,u:"Pantulan pada paksi-x menukar tanda koordinat-y: 1 menjadi −1.",kira:()=>-A_LAIN[1]},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan paksi y = x. Titik A(1, 1) terletak pada paksi itu. Imej A′ ialah:",p:["A′ = A = (1, 1)","A′ = (−1, −1)","A′ = (1, −1) di bawah","A′ = (−1, 1) di kiri"],b:0,u:"Titik yang terletak pada paksi pantulan tidak berubah kedudukan."},
 {j:"pilih",t:"Dalam pantulan, jarak sebuah titik objek ke paksi berbanding jarak imej ke paksi ialah:",p:["Sama, di sisi bertentangan","Dua kali ganda daripada jarak objek","Separuh daripada jarak objek","Bergantung pada saiz objek yang dipantul"],b:0,u:"Paksi pantulan sentiasa berada di tengah-tengah antara titik dan imejnya."},
 {j:"pilih",t:"Garis yang menyambung titik dengan imejnya dalam pantulan ialah ___ kepada paksi pantulan.",p:["Serenjang","Selari","Bersudut 45°","Bertindih"],b:0,u:"Garis AA′ serenjang dengan paksi dan dibahagi dua sama panjang oleh paksi."},
 {j:"susun",t:"Susun langkah memantulkan sebuah titik pada paksi menegak x = k.",p:["Ukur jarak titik itu ke garis x = k","Lukis garis serenjang dari titik ke paksi","Teruskan garis itu ke sebelah paksi yang satu lagi","Tanda imej pada jarak yang sama dari paksi"],b:[0,1,2,3],u:"Jarak dari paksi ke imej sama dengan jarak dari paksi ke titik asal."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang pantulan pada satu paksi.",p:["Objek dan imej mempunyai bentuk dan saiz yang sama","Imej terletak di sebelah bertentangan paksi pantulan","Titik pada paksi pantulan mempunyai imej yang sama dengan titik itu","Imej menjadi lebih besar daripada objek","Imej ialah objek yang digerakkan tanpa terbalik","Paksi pantulan mesti sentiasa garis mengufuk"],b:[0,1,2],u:"Pantulan mengekalkan saiz, dan mengubah orientasi (imej songsang). Paksi boleh menegak, mengufuk atau condong."}},

{n:3, tempat:"Roda Ferris", sk:"11.4.1 - 11.4.4 Putaran", lampiran:"put3",
 kadNama:"Pusat Putaran", kadEm:"\u{1F3A1}", kadFakta:"Roda ferris berputar mengelilingi satu titik tetap di tengah rodanya. Titik itu ialah pusat putaran dan ia tidak berpindah walaupun semua tempat duduk bergerak.",
 bosKadNama:"Jejari Sama", bosKadEm:"\u{1F4CF}", bosKadFakta:"Dalam putaran, jarak sebuah titik ke pusat putaran kekal sama dengan jarak imejnya ke pusat itu. Sebab itulah titik bergerak mengikut lingkaran.",
 soalan:[
 {j:"pilih",t:"Tiga butiran diperlukan untuk menerangkan satu putaran. Apakah ketiga-tiganya?",p:["Pusat, sudut dan arah putaran","Paksi, jarak dan vektor translasi","Pusat, vektor dan skala","Sudut, skala dan paksi"],b:0,u:"Putaran perlu pusat putaran, sudut putaran dan arah putaran (ikut jam atau lawan jam)."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan pusat P(0, 0) dan putaran +90° (lawan jam). Berapakah koordinat-x titik A′, imej bagi A(1, 1)?",b:-1,tol:0.01,u:"Putaran 90° lawan jam pada asalan menukar (1, 1) kepada (−1, 1). Koordinat-x ialah −1.",kira:()=>putar(A_LAIN,[0,0],90)[0]},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan pusat P(0, 0) dan putaran 180°. Berapakah koordinat-y titik A′, imej bagi A(1, 1)?",b:-1,tol:0.01,u:"Putaran 180° pada asalan menukar tanda kedua-dua koordinat: (1, 1) menjadi (−1, −1).",kira:()=>putar(A_LAIN,[0,0],180)[1]},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan pusat P(2, 2) dan putaran 180°. Berapakah koordinat-x titik A′, imej bagi A(1, 1)?",b:3,tol:0.01,u:"A ialah 1 unit di kiri dan 1 unit di bawah P. Putaran 180° meletakkan A′ 1 unit di kanan dan di atas P, iaitu (3, 3).",kira:()=>putar(A_LAIN,[2,2],180)[0]},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan pusat P(0, 0) dan putaran −90° (ikut jam). Imej A′ bagi A(1, 1) ialah:",p:["(1, −1)","(−1, 1)","(−1, −1)","(1, 1)"],b:0,u:"Putaran 90° ikut jam pada asalan menukar (x, y) kepada (y, −x), jadi (1, 1) menjadi (1, −1).",kira:()=>K(putar(A_LAIN,[0,0],-90))==="(1, −1)"},
 {j:"pilih",t:"Dalam putaran, jarak sebuah titik objek ke pusat putaran berbanding jarak imejnya ke pusat itu ialah:",p:["Sama, pada sebarang sudut","Dua kali ganda, pada 180°","Separuh, pada 90°","Berbeza mengikut arah putaran"],b:0,u:"Putaran mengekalkan jarak ke pusat. Titik hanya bergerak pada lingkaran."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan pusat P(0, 0). Berapakah panjang PA, kepada 2 tempat perpuluhan?",b:1.41,tol:0.01,u:"PA = √(1² + 1²) = √2 = 1.41. PA′ juga 1.41.",kira:()=>bunda(jarak([0,0],A_LAIN),2)},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan pusat P(1, 1). Titik A(1, 1) ialah pusat putaran itu. Imej A′ ialah:",p:["A′ = A = (1, 1)","A′ = (−1, 1), bergerak","A′ = (1, −1), bergerak","A′ = (3, 3), bergerak"],b:0,u:"Pusat putaran tidak bergerak. Imej pusat putaran ialah pusat itu sendiri.",kira:()=>K(putar(A_LAIN,[1,1],180))==="(1, 1)"}],
 bos:{j:"nombor",t:"Dalam Rajah 1, tetapkan pusat P(2, 2) dan putaran −90° (ikut jam). Berapakah jumlah koordinat-x dan koordinat-y bagi A′, imej bagi A(1, 1)?",b:4,tol:0.01,u:"A berada di (−1, −1) daripada P. Putaran 90° ikut jam menukar (x, y) kepada (y, −x): (−1, 1). Maka A′ = (2 − 1, 2 + 1) = (1, 3). Jumlah = 1 + 3 = 4.",kira:()=>{const q=putar(A_LAIN,[2,2],-90);return q[0]+q[1];}}},

{n:4, tempat:"Peta Harta Karun", sk:"11.2.3 / 11.2.4 Imej dan objek bagi translasi; masalah translasi", lampiran:"trf4",
 kadNama:"Vektor Translasi", kadEm:"\u{1F5FA}\u{FE0F}", kadFakta:"Vektor translasi ditulis sebagai dua nombor dalam kurungan lajur. Nombor atas ialah gerakan mendatar, nombor bawah ialah gerakan menegak. Nombor negatif bermaksud ke kiri atau ke bawah.",
 bosKadNama:"Dua Langkah", bosKadEm:"\u{1F9ED}", bosKadFakta:"Dua translasi berturutan sama dengan satu translasi tunggal yang vektornya ialah hasil tambah kedua-dua vektor. Peta harta karun sering menggunakan idea ini.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 3 dan b = 1. Kira koordinat-x imej A′ bagi A(−1, −1), kemudian semak dengan rajah.",b:2,tol:0.01,u:"Koordinat-x = −1 + 3 = 2.",kira:()=>trans(A_TRANS,3,1)[0]},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 3 dan b = 1. Kira koordinat-y imej A′ bagi A(−1, −1), kemudian semak dengan rajah.",b:0,tol:0.01,u:"Koordinat-y = −1 + 1 = 0.",kira:()=>trans(A_TRANS,3,1)[1]},
 {j:"nombor",t:"Pada peta harta karun, sebuah kapal berada di titik (2, 3). Ia ditranslasikan oleh vektor (−4, 5). Berapakah koordinat-y kedudukan baharu kapal?",b:8,tol:0.01,u:"Koordinat-y = 3 + 5 = 8. Kedudukan baharu ialah (−2, 8).",kira:()=>trans([2,3],-4,5)[1]},
 {j:"nombor",t:"Titik P(−3, 2) ditranslasikan kepada P′(1, −1). Berapakah nilai a bagi vektor translasi (a, b)?",b:4,tol:0.01,u:"a = 1 − (−3) = 4.",kira:()=>1-(-3)},
 {j:"nombor",t:"Titik P(−3, 2) ditranslasikan kepada P′(1, −1). Berapakah nilai b bagi vektor translasi (a, b)?",b:-3,tol:0.01,u:"b = −1 − 2 = −3.",kira:()=>-1-2},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 3 dan b = −3. Berapakah jarak AA′ dalam unit, kepada 2 tempat perpuluhan?",b:4.24,tol:0.01,u:"Jarak = √(3² + (−3)²) = √18 = 4.24 unit.",kira:()=>bunda(Math.hypot(3,-3),2)},
 {j:"pilih",t:"Translasi (2, −3) diikuti oleh translasi (−2, 3) menghasilkan:",p:["Objek kembali ke kedudukan asal","Imej dua kali lebih jauh dari objek","Imej yang dipantulkan pada paksi","Imej yang diputar 90° pada pusat"],b:0,u:"Hasil tambah dua vektor ialah (0, 0), jadi objek kembali ke tempat asalnya."},
 {j:"pilih",t:"Sebuah bot bergerak 5 unit ke timur dan 2 unit ke selatan. Ambil timur sebagai arah +x dan utara sebagai +y. Vektor translasi bot ialah:",p:["(5, −2)","(−5, 2)","(2, −5)","(−2, 5)"],b:0,u:"Timur 5 ialah a = 5. Selatan 2 ialah b = −2."}],
 bos:{j:"nombor",t:"Titik A(−1, −1) ditranslasikan oleh (a, b) kepada A′(3, 2). Kemudian A′ ditranslasikan oleh (−1, −3). Berapakah jumlah koordinat-x dan koordinat-y bagi imej akhir?",b:1,tol:0.01,u:"Imej akhir = (3 − 1, 2 − 3) = (2, −1). Jumlah = 2 + (−1) = 1.",kira:()=>{const q=trans([3,2],-1,-3);return q[0]+q[1];}}},

{n:5, tempat:"Bengkel Ubin", sk:"11.5.1 - 11.5.3 Isometri dan kekongruenan", lampiran:"iso5",
 kadNama:"Isometri", kadEm:"\u{1F9F1}", kadFakta:"Isometri ialah transformasi yang mengekalkan jarak antara sebarang dua titik. Translasi, pantulan dan putaran ialah isometri, jadi ubin yang digerakkan dengan cara itu tetap muat tepat di lantai.",
 bosKadNama:"Bukan Isometri", bosKadEm:"\u{1F50D}", bosKadFakta:"Pembesaran dan pengecilan mengubah jarak antara titik, jadi keduanya bukan isometri. Imejnya serupa dengan objek tetapi tidak kongruen.",
 soalan:[
 {j:"pilih",t:"Isometri ialah transformasi yang mengekalkan:",p:["Jarak antara sebarang dua titik","Kedudukan setiap titik pada objek","Orientasi objek sahaja","Saiz dan kedudukan objek"],b:0,u:"Isometri mengekalkan jarak antara sebarang dua titik, jadi bentuk dan saiz tidak berubah."},
 {j:"pilih",t:"Antara transformasi berikut, yang manakah BUKAN isometri?",p:["Pembesaran dengan skala 2","Translasi mengikut vektor","Pantulan pada satu paksi","Putaran pada satu pusat"],b:0,u:"Pembesaran mengubah saiz dan jarak antara titik. Tiga yang lain mengekalkan jarak."},
 {j:"nombor",t:"Dalam Rajah 1, pilih translasi. Berapakah panjang BC bagi segi tiga ABC, kepada 2 tempat perpuluhan?",b:2.24,tol:0.01,u:"B(−2, 1) dan C(−4, 2). BC = √(2² + 1²) = √5 = 2.24.",kira:()=>bunda(jarak([-2,1],[-4,2]),2)},
 {j:"nombor",t:"Dalam Rajah 1, pilih besar ×2 (pembesaran). Kira panjang B′C′, kepada 2 tempat perpuluhan, kemudian semak dengan rajah.",b:4.47,tol:0.01,u:"Pembesaran ×2 menggandakan semua panjang: B′C′ = 2 × 2.24 = 4.47.",kira:()=>bunda(2*jarak([-2,1],[-4,2]),2)},
 {j:"nombor",t:"Dalam Rajah 1, pilih kecil ×½ (pengecilan). Kira panjang B′C′, kepada 2 tempat perpuluhan, kemudian semak dengan rajah.",b:1.12,tol:0.01,u:"Pengecilan ×½ menjadikan semua panjang separuh: B′C′ = 2.24 ÷ 2 = 1.12.",kira:()=>bunda(jarak([-2,1],[-4,2])/2,2)},
 {j:"pilih",t:"Dalam Rajah 1, pilih kecil ×½ (pengecilan). Adakah segi tiga imej kongruen dengan ABC?",p:["Tidak, sisinya lebih pendek","Ya, kerana bentuknya sama","Ya, kerana sudutnya sama","Tidak, kerana sudutnya berubah"],b:0,u:"Kongruen memerlukan bentuk dan saiz yang sama. Sudut sama, tetapi sisi lebih pendek, jadi imej hanya serupa."},
 {j:"pilih",t:"Jika dua bentuk kongruen, satu bentuk boleh menjadi imej kepada satu lagi melalui:",p:["Satu atau lebih isometri","Satu pembesaran yang sesuai","Satu regangan yang sesuai","Satu pengecilan yang sesuai"],b:0,u:"Bentuk kongruen dihubungkan oleh isometri, iaitu translasi, pantulan, putaran atau gabungannya."},
 {j:"pilih",t:"Segi tiga ABC dipantulkan, kemudian imejnya ditranslasikan. Imej akhir ialah:",p:["Kongruen dengan ABC","Serupa tetapi lebih besar","Serupa tetapi lebih kecil","Tidak serupa dengan ABC"],b:0,u:"Kedua-dua pantulan dan translasi ialah isometri, jadi gabungannya juga mengekalkan bentuk dan saiz."}],
 bos:{j:"banyak",t:"Dalam Rajah 1, pilih setiap transformasi dan lihat imej merah. Pilih SEMUA transformasi yang menghasilkan imej kongruen dengan ABC.",p:["Translasi","Pantulan","Putaran","Pembesaran ×2","Pengecilan ×½","Regangan tegak"],b:[0,1,2],u:"Hanya translasi, pantulan dan putaran ialah isometri. Pembesaran, pengecilan dan regangan mengubah jarak antara titik."}},

{n:6, tempat:"Studio Corak Batik", sk:"11.6.1 / 11.6.2 Simetri putaran dan peringkat simetri putaran", lampiran:"sim6",
 kadNama:"Simetri Putaran", kadEm:"\u{1F3A8}", kadFakta:"Sesuatu bentuk ada simetri putaran jika ia kelihatan sama semula selepas diputar kurang daripada satu pusingan penuh. Corak batik dan kain songket sering menggunakan idea ini.",
 bosKadNama:"Peringkat", bosKadEm:"\u{1F522}", bosKadFakta:"Peringkat simetri putaran ialah berapa kali bentuk itu padan dengan dirinya dalam satu pusingan penuh 360°. Sudut putaran terkecil ialah 360° dibahagi peringkat.",
 soalan:[
 {j:"pilih",t:"Sesuatu bentuk mempunyai simetri putaran jika, apabila diputar kurang daripada 360°, bentuk itu:",p:["Kelihatan sama seperti asalnya","Bertukar menjadi lebih kecil","Bergerak ke tempat lain yang jauh","Mengubah warnanya secara beransur"],b:0,u:"Simetri putaran bermaksud bentuk padan semula dengan kedudukan asalnya sebelum satu pusingan penuh."},
 {j:"nombor",t:"Dalam Rajah 1, pilih segi tiga (sama sisi). Berapakah peringkat simetri putarannya?",b:3,tol:0.01,u:"Segi tiga sama sisi padan dengan dirinya pada 120°, 240° dan 360°, jadi peringkatnya 3.",kira:()=>peringkat["segi tiga sama sisi"]},
 {j:"nombor",t:"Dalam Rajah 1, pilih petak (segi empat sama). Berapakah peringkat simetri putarannya?",b:4,tol:0.01,u:"Segi empat sama padan pada 90°, 180°, 270° dan 360°, jadi peringkatnya 4.",kira:()=>peringkat["segi empat sama"]},
 {j:"nombor",t:"Dalam Rajah 1, pilih bintang (lima penjuru). Berapakah peringkat simetri putarannya?",b:5,tol:0.01,u:"Bintang lima penjuru padan lima kali dalam satu pusingan (setiap 72°).",kira:()=>peringkat["bintang lima penjuru"]},
 {j:"nombor",t:"Dalam Rajah 1, pilih selari (segi empat selari). Berapakah peringkat simetri putarannya?",b:2,tol:0.01,u:"Segi empat selari hanya padan selepas diputar 180° dan 360°, jadi peringkatnya 2.",kira:()=>peringkat["segi empat selari"]},
 {j:"nombor",t:"Dalam Rajah 1, pilih trapezium (sama kaki). Berapakah peringkat simetri putarannya?",b:1,tol:0.01,u:"Trapezium sama kaki hanya padan selepas satu pusingan penuh, jadi peringkatnya 1. Ini bermaksud ia tiada simetri putaran.",kira:()=>peringkat["trapezium sama kaki"]},
 {j:"pilih",t:"Dalam Rajah 1, pilih segi tepat (segi empat tepat). Sudut putaran terkecil (lebih besar daripada 0°) yang memadankannya dengan dirinya ialah:",p:["180°","90°","120°","60°"],b:0,u:"Peringkat segi empat tepat ialah 2, jadi sudut terkecil ialah 360° ÷ 2 = 180°.",kira:()=>sudutKecil(peringkat["segi empat tepat"])===180},
 {j:"pilih",t:"Sebuah bentuk mempunyai simetri putaran peringkat 6. Sudut putaran terkecil yang memadankannya dengan dirinya ialah:",p:["60°","90°","36°","120°"],b:0,u:"360° ÷ 6 = 60°.",kira:()=>sudutKecil(6)===60}],
 bos:{j:"buka",
  t:"Reka satu corak batik sendiri menggunakan satu bentuk asas dan simetri putaran.",
  arahan:"Nyatakan bentuk asas yang awak pilih dan peringkat simetri putarannya, serta sudut putaran terkecil yang memadankannya. Terangkan bagaimana translasi atau pantulan boleh digunakan untuk menyambung corak itu menjadi sehelai kain, dan sama ada imej setiap bentuk kongruen dengan bentuk asas.",
  u:"Jawapan TP6 yang kukuh memilih bentuk yang sesuai, menyatakan peringkat dan sudut putaran terkecil dengan betul (360° dibahagi peringkat), menerangkan penggunaan translasi atau pantulan untuk menyambung corak, dan menyatakan bahawa semua imej ialah isometri jadi kongruen dengan bentuk asas."}}
];

module.exports = {
  id:"m2b11", tingkatan:2, kod:"11.0 Transformasi Isometri",
  tajuk:"Kilang Ubin Ajaib",
  subtajuk:"Matematik Ting. 2 · Bab 11 Transformasi Isometri",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal pasti translasi, pantulan dan putaran dalam situasi harian serta menyebut maksud kongruen. Langkah seterusnya ialah menerangkan bagaimana setiap transformasi mengubah kedudukan objek pada satah.",
   2:"{n} memahami bahawa translasi menggerakkan objek, pantulan menghasilkan imej songsang dan putaran memusingkan objek pada pusat tetap. Perlu lebih latihan menentukan imej pada grid sebelum bergerak ke TP3.",
   3:"{n} boleh menentukan imej bagi titik dan objek di bawah translasi, pantulan dan putaran yang mudah, termasuk memakai vektor translasi dan kedudukan paksi atau pusat. Galakkan menyemak jawapan dengan melukis pada grid.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah melibatkan translasi, seperti mencari vektor daripada objek dan imej serta menggabungkan dua translasi. Seterusnya latih masalah yang melibatkan isometri dan kekongruenan.",
   5:"{n} dapat menerangkan isometri sebagai transformasi yang mengekalkan jarak, membezakannya daripada pembesaran dan pengecilan, serta menghubungkan isometri dengan kekongruenan. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya menggunakan simetri putaran dan menentukan peringkatnya, serta menggabungkan translasi, pantulan dan putaran untuk mereka corak dengan alasan yang jelas. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Transformasi Isometri. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menamakan jenis transformasi bagi setiap perubahan, dengan bimbingan rakan sebaya."
  },
  lampiran:{ trf1:R_TRF1, pan2:R_PAN2, put3:R_PUT3, trf4:R_TRF4, iso5:R_ISO5, sim6:R_SIM6 },
  aras:ARAS
};
