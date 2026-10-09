/* Sumber kandungan — Matematik KSSM Tingkatan 4, Bab 7 Graf Gerakan.
   Fail ini disunting tangan. Jalankan `node bina.js m4b7`.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 4
   dan 5, muka 61 (dskp/matematik-t4-t5.pdf). DSKP menulis enam tahap penuh.
   DSKP 7.2.2: luas di bawah graf laju-masa = jarak; 7.2.3: pecutan sebagai perubahan laju
   terhadap masa bagi gerakan dalam arah yang tetap.

   Nilai dikira daripada titik graf dengan fungsi di bawah (bebas daripada widget).
   Rajah: widget t4gerak (widget-m4b7.js). */

const nilai = (P, t) => { for (let i = 0; i < P.length - 1; i++) if (t <= P[i + 1][0]) { const [a, b] = [P[i], P[i + 1]]; return a[1] + (b[1] - a[1]) * (t - a[0]) / (b[0] - a[0]); } return P[P.length - 1][1]; };
const kec = (P, i) => (P[i + 1][1] - P[i][1]) / (P[i + 1][0] - P[i][0]);
const luas = (P, t) => { let L = 0; for (let i = 0; i < P.length - 1; i++) { const a = P[i], b = P[i + 1]; if (t <= a[0]) break; const e = Math.min(t, b[0]); L += (a[1] + nilai(P, e)) / 2 * (e - a[0]); } return L; };
const jarakJ = P => P.slice(1).reduce((j, p, i) => j + Math.abs(p[1] - P[i][1]), 0);
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);

const SPI = [
"Mempamerkan pengetahuan asas tentang graf gerakan.",
"Mempamerkan kefahaman tentang graf gerakan.",
"Mengaplikasikan kefahaman tentang graf gerakan untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang graf gerakan dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang graf gerakan dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang graf gerakan dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- data ---------- */
const JALAN = [[0, 0], [5, 300], [10, 600], [15, 600], [20, 900], [25, 1200]];
const BAS = [[0, 0], [20, 12], [30, 12], [60, 36], [80, 36], [120, 0]];
const OBJ = [[0, 0], [10, 20], [30, 20], [40, 0]];
const KERETA = [[0, 5], [4, 13], [10, 13], [14, 5], [18, 5]];
const A = [[0, 0], [60, 60]], B = [[0, 0], [20, 30], [40, 30], [60, 45]];
const KA = V => [[0, 0], [20, V], [80, V], [100, 0]];
const VS = [10, 15, 20, 25, 30];

/* ---------- lampiran ---------- */
const iw = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t4gerak", kapsyen, alt }, extra);
const R1 = iw("Rajah 1 · Ali berjalan dari rumah ke perpustakaan. Plot titik daripada jadual satu demi satu.",
  "Rajah interaktif plot graf jarak-masa perjalanan Ali daripada jadual enam pasangan masa dan jarak; gelongsor menambah titik yang diplot",
  { mod: "lukis", paksiY: "jarak", titik: JALAN, unit: { masa: "min", jarak: "m" }, tajuk: "Perjalanan Ali" });
const R2 = iw("Rajah 1 · Graf jarak-masa sebuah bas dari Bandar P. Gerakkan masa t.",
  "Rajah interaktif graf jarak-masa bas selama 120 minit dengan dua hentian dan perjalanan pulang; gelongsor masa menunjukkan jarak, keadaan dan laju",
  { mod: "jarakmasa", titik: BAS, langkah: 10, unit: { masa: "min", jarak: "km", laju: "km/j", faktor: 60 }, tajuk: "Bas dari Bandar P" });
const R3 = iw("Rajah 1 · Graf laju-masa suatu objek. Gerakkan t; luas berlorek ialah jarak yang dilalui.",
  "Rajah interaktif graf laju-masa objek selama 40 saat; luas di bawah graf hingga masa t dilorek dan dikira sebagai jarak",
  { mod: "lajumasa", titik: OBJ, langkah: 5, unit: { masa: "s", laju: "m/s", jarak: "m", pecutan: "m/s²" } });
const R4 = iw("Rajah 1 · Graf laju-masa sebuah kereta selama 18 saat. Gerakkan t.",
  "Rajah interaktif graf laju-masa kereta dengan pecutan, laju seragam, nyahpecutan dan laju seragam; gelongsor masa menunjukkan pecutan dan jarak",
  { mod: "lajumasa", titik: KERETA, langkah: 2, unit: { masa: "s", laju: "m/s", jarak: "m", pecutan: "m/s²" }, tajuk: "Kereta di jalan lurus" });
const R5 = iw("Rajah 1 · Kereta A dan motosikal B bertolak serentak dari titik yang sama. Kira dahulu, kemudian semak.",
  "Rajah interaktif dua graf jarak-masa bagi kereta A dan motosikal B selama 60 minit; gelongsor masa menunjukkan jarak setiap kenderaan dan jarak antara mereka, dalam mod cabar",
  { mod: "banding", cabar: true, A, B, namaA: "Kereta A", namaB: "Motosikal B", langkah: 10, unit: { masa: "min", jarak: "km" } });
const R6 = iw("Rajah 1 · Kereta api antara dua stesen. Ubah laju maksimum V, kemudian gerakkan t.",
  "Rajah interaktif graf laju-masa kereta api dengan laju maksimum V yang boleh diubah; luas di bawah graf ialah jarak antara stesen",
  { mod: "lajumasa", varian: VS.map(KA), varianLabel: VS.map(String), labelV: "V (m/s)", yMaks: 30, langkah: 10, unit: { masa: "s", laju: "m/s", jarak: "m", pecutan: "m/s²" }, tajuk: "Kereta api antara stesen" });

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Lorong Pejalan", sk:"7.1.1 / 7.1.2 Melukis dan mentafsir graf jarak-masa", lampiran:"r1",
 kadNama:"Graf Jarak-Masa", kadEm:"\u{1F6B6}", kadFakta:"Graf jarak-masa memplot masa pada paksi mengufuk dan jarak pada paksi mencancang. Garis mengufuk bermaksud objek pegun.",
 bosKadNama:"Kecerunan = Laju", bosKadEm:"\u{1F4D0}", bosKadFakta:"Kecerunan graf jarak-masa ialah laju. Semakin curam garis, semakin laju objek itu.",
 soalan:[
 {j:"pilih",t:"Dalam graf jarak-masa, paksi mengufuk mewakili:",p:["Masa","Jarak","Laju","Pecutan"],b:0,u:"Masa diplot pada paksi mengufuk dan jarak pada paksi mencancang."},
 {j:"nombor",t:"Dalam Rajah 1, plot semua titik. Berapakah jarak Ali dari rumah pada t = 10 minit, dalam m?",tol:0.01,b:600,u:"Daripada jadual, apabila t = 10, s = 600 m.",kira:()=>nilai(JALAN,10)},
 {j:"pilih",t:"Dalam Rajah 1, graf mengufuk antara t = 10 dan t = 15 minit. Ini bermaksud:",p:["Ali berhenti seketika","Ali berjalan dengan laju tetap","Ali berjalan pulang ke rumah","Ali berlari semakin laju"],b:0,u:"Jarak kekal 600 m walaupun masa bertambah, jadi Ali pegun.",kira:()=>nilai(JALAN,10)===nilai(JALAN,15)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah jumlah jarak yang dilalui oleh Ali dalam 25 minit, dalam m?",tol:0.01,b:1200,u:"Titik terakhir ialah (25, 1200), jadi Ali berjalan sejauh 1200 m.",kira:()=>nilai(JALAN,25)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapa lamakah Ali berhenti, dalam minit?",tol:0.01,b:5,u:"Ali pegun dari t = 10 hingga t = 15, iaitu 5 minit.",kira:()=>15-10},
 {j:"pilih",t:"Kecerunan graf jarak-masa mewakili:",p:["Laju","Jarak","Masa","Pecutan"],b:0,u:"Kecerunan = perubahan jarak ÷ perubahan masa, iaitu laju."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah laju Ali dalam 10 minit pertama, dalam m/min?",tol:0.01,b:60,u:"Laju = jarak ÷ masa = 600 ÷ 10 = 60 m/min.",kira:()=>kec(JALAN,0)},
 {j:"pilih",t:"Dalam Rajah 1, titik (25, 1200) bermaksud:",p:["Selepas 25 minit, Ali berada 1200 m dari rumah","Ali berjalan sejauh 25 m dalam 1200 minit","Laju Ali ialah 1200 m setiap minit","Ali berhenti selama 25 minit di perpustakaan"],b:0,u:"Koordinat pertama ialah masa dan koordinat kedua ialah jarak dari titik mula."}],
 bos:{j:"susun",t:"Susun langkah melukis graf jarak-masa daripada jadual.",p:["Lukis paksi masa (mengufuk) dan paksi jarak (mencancang)","Pilih skala yang sesuai bagi kedua-dua paksi","Plot setiap pasangan (masa, jarak) daripada jadual","Sambungkan titik-titik itu dengan garis lurus"],b:[0,1,2,3],u:"Paksi dan skala dahulu, kemudian plot titik, dan akhir sekali sambungkan titik."}},

{n:2, tempat:"Terminal Bas", sk:"7.1.2 / 7.1.3 Mentafsir graf jarak-masa dan masalah", lampiran:"r2",
 kadNama:"Laju Purata", kadEm:"\u{1F68C}", kadFakta:"Laju purata = jumlah jarak yang dilalui ÷ jumlah masa yang diambil, termasuk masa berhenti.",
 bosKadNama:"Kecerunan Negatif", bosKadEm:"\u{21A9}\u{FE0F}", bosKadFakta:"Dalam graf jarak-masa, kecerunan negatif bermaksud objek bergerak kembali ke arah titik mula.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan t = 40 minit. Berapakah jarak bas dari Bandar P, dalam km?",tol:0.01,b:20,u:"Antara t = 30 dan t = 60, bas bergerak 24 km dalam 30 minit (0.8 km/min). Pada t = 40: 12 + 0.8 × 10 = 20 km.",kira:()=>nilai(BAS,40)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah laju bas dalam 20 minit pertama, dalam km/j?",tol:0.01,b:36,u:"12 km dalam 20 minit = 12 ÷ (20/60) = 36 km/j.",kira:()=>kec(BAS,0)*60},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapa lamakah bas berhenti pada kali kedua, dalam minit?",tol:0.01,b:20,u:"Graf mengufuk dari t = 60 hingga t = 80, iaitu 20 minit.",kira:()=>80-60},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah laju bas antara t = 30 dan t = 60 minit, dalam km/j?",tol:0.01,b:48,u:"24 km dalam 30 minit = 24 ÷ 0.5 = 48 km/j.",kira:()=>kec(BAS,2)*60},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah laju bas semasa perjalanan pulang, dalam km/j?",tol:0.01,b:54,u:"36 km dalam 40 minit = 36 ÷ (40/60) = 54 km/j.",kira:()=>Math.abs(kec(BAS,4))*60},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah jumlah jarak yang dilalui oleh bas sepanjang 120 minit, dalam km?",tol:0.01,b:72,u:"36 km pergi dan 36 km pulang. Jumlah 72 km.",kira:()=>jarakJ(BAS)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah laju purata bas bagi keseluruhan perjalanan, dalam km/j?",tol:0.01,b:36,u:"Laju purata = 72 km ÷ 2 jam = 36 km/j. Masa berhenti turut dikira.",kira:()=>jarakJ(BAS)/2},
 {j:"pilih",t:"Dalam Rajah 1, kecerunan graf antara t = 80 dan t = 120 minit adalah negatif. Ini bermaksud:",p:["Bas bergerak kembali ke Bandar P","Bas bergerak dengan laju negatif","Bas sedang berhenti di stesen","Bas sedang bergerak dengan pecutan"],b:0,u:"Jarak dari Bandar P berkurang hingga sifar, jadi bas sedang pulang. Laju sentiasa positif; tanda negatif menunjukkan arah."}],
 bos:{j:"nombor",t:"Jika bas itu bergerak terus pada 48 km/j tanpa berhenti, berapa minitkah diperlukan untuk sampai ke jarak 36 km?",tol:0.01,b:45,u:"Masa = 36 ÷ 48 = 0.75 jam = 45 minit.",kira:()=>36/48*60}},

{n:3, tempat:"Makmal Laju", sk:"7.2.1 / 7.2.2 Graf laju-masa dan luas di bawah graf", lampiran:"r3",
 kadNama:"Luas = Jarak", kadEm:"\u{1F7E8}", kadFakta:"Luas di bawah graf laju-masa sama dengan jarak yang dilalui. Pecahkan kawasan kepada segi tiga, segi empat tepat atau trapezium.",
 bosKadNama:"Kecerunan = Pecutan", bosKadEm:"\u{1F4C8}", bosKadFakta:"Kecerunan graf laju-masa ialah pecutan. Kecerunan negatif ialah nyahpecutan.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan t = 10 s. Berapakah laju objek, dalam m/s?",tol:0.01,b:20,u:"Daripada graf, v = 20 m/s apabila t = 10 s.",kira:()=>nilai(OBJ,10)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah pecutan objek dalam 10 saat pertama, dalam m/s²?",tol:0.01,b:2,u:"Pecutan = perubahan laju ÷ masa = (20 − 0) ÷ 10 = 2 m/s².",kira:()=>kec(OBJ,0)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan t = 10 s. Berapakah jarak (luas berlorek) yang dilalui, dalam m?",tol:0.01,b:100,u:"Luas segi tiga = ½ × 10 × 20 = 100 m.",kira:()=>luas(OBJ,10)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah jumlah jarak yang dilalui dalam 40 saat, dalam m?",tol:0.01,b:600,u:"100 (segi tiga) + 20 × 20 (segi empat tepat) + 100 (segi tiga) = 600 m.",kira:()=>luas(OBJ,40)},
 {j:"pilih",t:"Luas di bawah graf laju-masa mewakili:",p:["Jarak yang dilalui","Pecutan objek","Laju purata objek","Masa perjalanan"],b:0,u:"Laju × masa = jarak, jadi luas di bawah graf laju-masa ialah jarak."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah kadar nyahpecutan objek dari t = 30 hingga t = 40 s, dalam m/s²?",tol:0.01,b:2,u:"Laju berkurang 20 m/s dalam 10 s. Nyahpecutan = 20 ÷ 10 = 2 m/s².",kira:()=>-kec(OBJ,2)},
 {j:"pilih",t:"Dalam Rajah 1, apakah yang berlaku antara t = 10 dan t = 30 s?",p:["Laju seragam 20 m/s","Objek pegun selama 20 saat","Objek memecut pada 20 m/s²","Objek bergerak ke arah bertentangan"],b:0,u:"Graf laju-masa mengufuk bermaksud laju tidak berubah. Ini berbeza daripada graf jarak-masa; dalam graf jarak-masa, garis mengufuk bermaksud objek pegun."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan t = 35 s. Berapakah jarak yang telah dilalui, dalam m?",tol:0.01,b:575,u:"Hingga 30 s: 500 m. Dari 30 hingga 35 s, laju turun daripada 20 kepada 10 m/s: trapezium ½ × (20 + 10) × 5 = 75 m. Jumlah 575 m.",kira:()=>luas(OBJ,35)}],
 bos:{j:"nombor",t:"Berdasarkan Rajah 1, berapakah laju purata objek bagi 40 saat itu, dalam m/s?",tol:0.01,b:15,u:"Laju purata = jumlah jarak ÷ jumlah masa = 600 ÷ 40 = 15 m/s.",kira:()=>luas(OBJ,40)/40}},

{n:4, tempat:"Jalan Lurus", sk:"7.2.3 / 7.2.4 Mentafsir graf laju-masa dan masalah rutin", lampiran:"r4",
 kadNama:"Trapezium", kadEm:"\u{1F697}", kadFakta:"Apabila laju awal bukan sifar, kawasan di bawah garis condong ialah trapezium: luas = ½ × (laju awal + laju akhir) × masa.",
 bosKadNama:"Tiga Keadaan", bosKadEm:"\u{1F6A6}", bosKadFakta:"Pada graf laju-masa: garis naik = pecutan, garis mengufuk = laju seragam, garis turun = nyahpecutan.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah pecutan kereta dalam 4 saat pertama, dalam m/s²?",tol:0.01,b:2,u:"Laju naik daripada 5 kepada 13 m/s dalam 4 s: (13 − 5) ÷ 4 = 2 m/s².",kira:()=>kec(KERETA,0)},
 {j:"pilih",t:"Dalam Rajah 1, gerakkan t ke antara 10 dan 14 s. Keadaan kereta ialah:",p:["Nyahpecutan 2 m/s²","Pecutan 2 m/s²","Laju seragam 13 m/s","Pegun selama 4 saat"],b:0,u:"Laju turun daripada 13 kepada 5 m/s dalam 4 s: kecerunan = −8 ÷ 4 = −2, iaitu nyahpecutan 2 m/s².",kira:()=>kec(KERETA,2)===-2},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah jarak yang dilalui dalam 4 saat pertama, dalam m?",tol:0.01,b:36,u:"Trapezium: ½ × (5 + 13) × 4 = 36 m.",kira:()=>luas(KERETA,4)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah jarak yang dilalui dari t = 4 hingga t = 10 s, dalam m?",tol:0.01,b:78,u:"Segi empat tepat: 13 × 6 = 78 m.",kira:()=>luas(KERETA,10)-luas(KERETA,4)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah jumlah jarak yang dilalui dalam 18 saat, dalam m?",tol:0.01,b:170,u:"36 + 78 + 36 + 5 × 4 = 170 m.",kira:()=>luas(KERETA,18)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan t = 2 s. Berapakah laju kereta, dalam m/s?",tol:0.01,b:9,u:"Laju bertambah 2 m/s setiap saat bermula dari 5 m/s: 5 + 2 × 2 = 9 m/s.",kira:()=>nilai(KERETA,2)},
 {j:"pilih",t:"Dalam Rajah 1, garis mengufuk pada v = 13 m/s bermaksud:",p:["Laju seragam 13 m/s","Kereta berhenti selama 13 saat","Kereta memecut pada kadar 13 m/s²","Kereta bergerak sejauh 13 meter"],b:0,u:"Laju tidak berubah, jadi pecutan sifar dan kereta bergerak dengan laju seragam."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah jarak yang dilalui semasa kereta mengalami nyahpecutan, dalam m?",tol:0.01,b:36,u:"Dari t = 10 hingga t = 14: trapezium ½ × (13 + 5) × 4 = 36 m.",kira:()=>luas(KERETA,14)-luas(KERETA,10)}],
 bos:{j:"nombor",t:"Berdasarkan Rajah 1, hitung laju purata kereta bagi 18 saat itu, dalam m/s. Berikan jawapan betul kepada dua tempat perpuluhan.",tol:0.005,b:9.44,u:"Laju purata = 170 ÷ 18 = 9.444... ≈ 9.44 m/s.",kira:()=>bunda(luas(KERETA,18)/18,2)}},

{n:5, tempat:"Lebuh Raya", sk:"7.1.3 Masalah graf jarak-masa (rutin kompleks)", lampiran:"r5",
 kadNama:"Titik Persilangan", kadEm:"\u{1F91D}", kadFakta:"Apabila dua graf jarak-masa (dari titik mula yang sama) bersilang, kedua-dua objek berada di kedudukan yang sama pada masa itu, iaitu bertemu.",
 bosKadNama:"Kejar-mengejar", bosKadEm:"\u{1F3C1}", bosKadFakta:"Objek yang lebih laju tetapi bermula lewat atau berhenti di tengah jalan boleh dipintas. Graf memudahkan perbandingan kedudukan pada setiap masa.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan t = 20 minit. Berapakah jarak antara kereta A dan motosikal B, dalam km? Kira dahulu.",tol:0.01,b:10,u:"A berada di 20 km dan B di 30 km. Jarak antara = 10 km.",kira:()=>Math.abs(nilai(A,20)-nilai(B,20))},
 {j:"nombor",t:"Berdasarkan Rajah 1, pada minit ke berapakah kereta A dan motosikal B bertemu (selepas bertolak)?",tol:0.01,b:30,u:"B pegun di 30 km dari t = 20 hingga t = 40. A sampai ke 30 km pada t = 30 minit (60 km/j).",kira:()=>{for(let t=1;t<=60;t++) if(Math.abs(nilai(A,t)-nilai(B,t))<1e-9) return t;}},
 {j:"pilih",t:"Berdasarkan Rajah 1, siapakah yang berada di hadapan pada t = 10 minit?",p:["Motosikal B","Kereta A","Kedua-duanya sama","Tidak dapat ditentukan"],b:0,u:"Pada t = 10: A di 10 km, B di 15 km. B di hadapan.",kira:()=>nilai(B,10)>nilai(A,10)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah laju motosikal B dalam 20 minit pertama, dalam km/j?",tol:0.01,b:90,u:"30 km dalam 20 minit = 30 ÷ (1/3) = 90 km/j.",kira:()=>kec(B,0)*60},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah laju kereta A, dalam km/j?",tol:0.01,b:60,u:"60 km dalam 60 minit = 60 km/j.",kira:()=>kec(A,0)*60},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah yang dilakukan oleh motosikal B dari t = 20 hingga t = 40 minit?",p:["Berhenti","Bergerak pada 30 km/j","Berpatah balik","Bergerak pada 90 km/j"],b:0,u:"Graf B mengufuk pada 30 km, jadi B pegun selama 20 minit."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah jarak antara A dan B pada t = 60 minit, dalam km?",tol:0.01,b:15,u:"A di 60 km dan B di 45 km. Jarak antara = 15 km.",kira:()=>nilai(A,60)-nilai(B,60)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah laju purata motosikal B bagi 60 minit itu, dalam km/j?",tol:0.01,b:45,u:"45 km dalam 1 jam = 45 km/j, walaupun B pernah bergerak pada 90 km/j.",kira:()=>nilai(B,60)}],
 bos:{j:"nombor",t:"Jika motosikal B tidak berhenti dan terus bergerak pada 90 km/j selepas t = 20 minit, pada minit ke berapakah B sampai ke jarak 60 km?",tol:0.01,b:40,u:"Selepas t = 20, B perlu bergerak 30 km lagi. 90 km/j = 1.5 km/min, jadi 30 ÷ 1.5 = 20 minit. B sampai pada t = 40 minit.",kira:()=>20+30/1.5}},

{n:6, tempat:"Stesen Kereta Api", sk:"7.2.4 Masalah graf laju-masa bukan rutin", lampiran:"r6",
 kadNama:"Jarak = 80V", kadEm:"\u{1F686}", kadFakta:"Bagi graf dalam Rajah 1, jarak = ½(20)V + 60V + ½(20)V = 80V. Jarak berkadar terus dengan laju maksimum V.",
 bosKadNama:"Jurutera Jadual", bosKadEm:"\u{1F680}", bosKadFakta:"Jadual kereta api mengimbangi masa perjalanan, keselesaan (had pecutan) dan jarak antara stesen.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan V = 20 m/s. Berapakah jumlah jarak antara dua stesen, dalam m?",tol:0.01,b:1600,u:"½ × 20 × 20 + 60 × 20 + ½ × 20 × 20 = 200 + 1200 + 200 = 1600 m.",kira:()=>luas(KA(20),100)},
 {j:"nombor",t:"Jarak antara dua stesen ialah 2000 m. Gunakan Rajah 1 untuk mencari laju maksimum V, dalam m/s.",tol:0.01,b:25,u:"80V = 2000, jadi V = 25 m/s. Semak dengan Rajah 1: V = 25 memberi 2000 m.",kira:()=>VS.find(V=>luas(KA(V),100)===2000)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan V = 20 m/s. Berapakah pecutan kereta api dalam 20 saat pertama, dalam m/s²?",tol:0.01,b:1,u:"Pecutan = 20 ÷ 20 = 1 m/s².",kira:()=>kec(KA(20),0)},
 {j:"pilih",t:"Jika laju maksimum V digandakan (masa kekal sama), jumlah jarak:",p:["Digandakan juga","Menjadi empat kali ganda","Kekal sama","Bertambah 20 m"],b:0,u:"Jarak = 80V, jadi jarak berkadar terus dengan V. Semak: V = 10 memberi 800 m, V = 20 memberi 1600 m.",kira:()=>luas(KA(20),100)===2*luas(KA(10),100)},
 {j:"nombor",t:"Had pecutan yang selesa bagi penumpang ialah 1.2 m/s². Antara nilai V dalam Rajah 1, berapakah V terbesar yang mematuhi had ini (masa memecut 20 s)?",tol:0.01,b:20,u:"Pecutan = V ÷ 20 ≤ 1.2, jadi V ≤ 24. Nilai V terbesar dalam Rajah 1 yang tidak melebihi 24 ialah 20 m/s.",kira:()=>Math.max(...VS.filter(V=>V/20<=1.2))},
 {j:"nombor",t:"Sebuah kereta api memecut selama 20 s hingga 20 m/s, bergerak seragam, kemudian memperlahan selama 20 s hingga berhenti. Jarak antara stesen ialah 1200 m. Berapakah jumlah masa perjalanan, dalam s?",tol:0.01,b:80,u:"Jarak semasa memecut dan memperlahan = 200 + 200 = 400 m. Baki 800 m pada 20 m/s mengambil 40 s. Jumlah masa = 20 + 40 + 20 = 80 s.",kira:()=>20+(1200-400)/20+20},
 {j:"pilih",t:"Dalam Rajah 1, bagi V = 20 m/s, laju purata kereta api ialah:",p:["16 m/s, kerana ada masa memecut dan memperlahan","20 m/s, kerana laju purata sama dengan laju maksimum","10 m/s, kerana laju purata ialah separuh laju maksimum","1600 m/s, iaitu jumlah jarak dibahagi satu saat"],b:0,u:"Laju purata = 1600 ÷ 100 = 16 m/s.",kira:()=>luas(KA(20),100)/100===16},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan V = 25 m/s. Berapakah jarak yang dilalui semasa kereta api memecut, dalam m?",tol:0.01,b:250,u:"Luas segi tiga = ½ × 20 × 25 = 250 m.",kira:()=>luas(KA(25),20)}],
 bos:{j:"buka",
  t:"Reka jadual perjalanan sebuah kenderaan (bas sekolah, kereta api atau lif) dan wakilkannya dengan graf gerakan.",
  arahan:"Lukis graf laju-masa atau jarak-masa dengan sekurang-kurangnya tiga bahagian (contohnya memecut, laju seragam dan memperlahan). Hitung jarak, pecutan dan laju purata. Kemudian ubah satu nilai (contohnya laju maksimum) supaya kenderaan tiba lebih awal, dan tunjukkan kesannya pada graf dan pengiraan.",
  u:"Jawapan TP6 yang kukuh mempunyai graf berlabel lengkap dengan unit, pengiraan luas dan kecerunan yang betul, laju purata yang tepat, serta perbandingan yang jelas antara reka bentuk asal dan reka bentuk yang diubah."}}
];

module.exports = {
  id:"m4b7", tingkatan:4, kod:"7.0 Graf Gerakan",
  tajuk:"Litar Gerakan",
  subtajuk:"Matematik Ting. 4 · Bab 7 Graf Gerakan",
  spi:SPI,
  ulasan:{
   1:"{n} dapat melukis graf jarak-masa daripada jadual dan membaca jarak serta masa daripadanya. Langkah seterusnya ialah mentafsir laju dan keadaan pegun.",
   2:"{n} memahami graf jarak-masa, termasuk laju sebagai kecerunan, keadaan pegun dan laju purata. Perlu lebih latihan graf laju-masa.",
   3:"{n} boleh mengaitkan luas di bawah graf laju-masa dengan jarak, dan kecerunannya dengan pecutan.",
   4:"{n} mampu mentafsir graf laju-masa dengan pecutan, laju seragam dan nyahpecutan, serta menyelesaikan masalah jarak dan laju purata. Seterusnya, latih perbandingan dua gerakan.",
   5:"{n} dapat menyelesaikan masalah rutin yang kompleks seperti masa bertemu dan jarak antara dua kenderaan. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya mereka jadual perjalanan dengan graf gerakan dan menganalisis kesan perubahan laju terhadap jarak dan masa. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Graf Gerakan. Cadangan: ulang hentian pertama dengan Rajah 1 dan plot perjalanan sendiri dari rumah ke sekolah bersama rakan sebaya."
  },
  lampiran:{ r1:R1, r2:R2, r3:R3, r4:R4, r5:R5, r6:R6 },
  aras:ARAS
};
