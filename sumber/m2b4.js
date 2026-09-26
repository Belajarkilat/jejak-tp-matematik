/* Sumber kandungan — Matematik KSSM Tingkatan 2, Bab 4 Poligon.
   Fail ini disunting tangan. Jalankan `node bina.js m2b4` untuk menyemaknya
   dan menghasilkan bank-m2b4.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 45 (dskp/matematik-t2.pdf).
   DSKP menulis satu jadual enam tahap bagi bab ini, jadi kesemua enam tahap
   diambil terus; tiada tahap yang ditulis sendiri.

   Rajah interaktif ialah widget `t2poligon` dalam widget-m2b4.js. Semua jawapan
   berangka dikira dengan kod dalam medan `kira` dan dibandingkan oleh
   tools/semak-jawapan.js. */

const SPI = [
"Mempamerkan pengetahuan asas tentang poligon sekata dan tak sekata.",
"Mempamerkan kefahaman tentang pembinaan poligon sekata.",
"Mengaplikasikan kefahaman tentang sudut pedalaman, sudut peluaran dan bilangan sisi suatu poligon untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang poligon dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang poligon dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang poligon dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* Pengiraan bebas bagi semakan jawapan (tidak menggunakan widget). */
const dalam = n => (n - 2) * 180;
const luar = n => 360 / n;

/* ---------- lampiran: rajah poligon interaktif ---------- */

const pol = (spec, kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t2poligon", kapsyen, alt }, spec, extra || {});

const R_SIF = pol({ mod: "sifat", i: 3, j: 0 },
  "Rajah 1 · Pilih bilangan sisi dan jenis poligon. Garis putus-putus ialah paksi simetri.",
  "Rajah interaktif poligon sekata atau tak sekata; gelongsor menukar bilangan sisi dan jenis, dan menunjukkan sudut serta bilangan paksi simetri");
const R_BIN = pol({ mod: "bina", i: 2, l: 3 },
  "Rajah 1 · Pilih bilangan sisi, kemudian gerakkan gelongsor langkah untuk membina poligon sekata daripada bulatan.",
  "Rajah interaktif membina poligon sekata daripada bulatan dalam empat langkah; sudut pusat ialah 360 darjah dibahagi bilangan sisi");
const R_SUD = pol({ mod: "sudut", i: 2 },
  "Rajah 1 · Poligon sekata dibahagi kepada segi tiga oleh pepenjuru dari bucu A. Hijau ialah sudut pedalaman dan merah ialah sudut peluaran di B.",
  "Rajah interaktif poligon sekata dibahagi kepada segi tiga oleh pepenjuru dari A; menunjukkan jumlah sudut pedalaman serta sudut pedalaman dan peluaran setiap bucu");
const R_CAR = pol({ mod: "cari", i: 2 },
  "Rajah 1 · Pilih sudut peluaran. Kira dahulu bilangan sisi dan sudut pedalaman, kemudian semak dengan rajah.",
  "Rajah interaktif poligon sekata dengan sudut peluaran yang diberi; gelongsor memilih sudut peluaran dan menunjukkan bilangan sisi dan sudut pedalaman",
  { cabar: true });
const R_HIL = pol({ mod: "hilang", i: 0 },
  "Rajah 1 · Pilih poligon 1 hingga 6. Satu sudut pedalaman ialah x. Kira dahulu nilai x, kemudian semak dengan rajah.",
  "Rajah interaktif enam poligon tak sekata dengan satu sudut pedalaman x yang hilang; gelongsor memilih poligon dan menunjukkan jumlah sudut pedalaman serta nilai x",
  { cabar: true });
const R_PEL = pol({ mod: "peluaran", i: 3, k: 0 },
  "Rajah 1 · Pilih bilangan sisi, kemudian kumpul sudut peluaran satu demi satu dan lihat jumlahnya.",
  "Rajah interaktif poligon sekata dengan sudut peluaran di setiap bucu; gelongsor mengumpul sudut peluaran dan jumlahnya menjadi 360 darjah");

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Kampung Sekata", sk:"4.1.1 Sifat geometri poligon sekata dan tak sekata", lampiran:"sif",
 kadNama:"Sarang Lebah", kadEm:"\u{1F41D}", kadFakta:"Sarang lebah madu disusun daripada sel berbentuk segi enam sekata. Bentuk ini muat rapat tanpa ruang kosong dan menjimatkan lilin.",
 bosKadNama:"Papan Tanda", bosKadEm:"\u{1F6D1}", bosKadFakta:"Papan tanda berhenti berbentuk segi lapan sekata: lapan sisi sama panjang dan lapan sudut sama besar.",
 soalan:[
 {j:"pilih",t:"Poligon sekata ialah poligon yang:",p:["Semua sisi sama panjang dan semua sudut sama besar","Semua sisinya sama panjang tetapi sudutnya boleh berbeza","Semua sudutnya sama besar tetapi sisinya boleh berbeza","Mempunyai paling kurang satu paksi simetri sahaja"],b:0,u:"Poligon sekata mesti mempunyai kedua-dua sifat: semua sisi sama panjang dan semua sudut sama besar."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan poligon sekata 6 sisi. Berapakah bilangan paksi simetrinya?",b:6,tol:0.01,u:"Poligon sekata n sisi mempunyai n paksi simetri. Segi enam sekata ada 6.",kira:()=>6},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan poligon sekata 8 sisi. Berapakah bilangan paksi simetrinya?",b:8,tol:0.01,u:"Bilangan paksi simetri poligon sekata sama dengan bilangan sisinya, iaitu 8.",kira:()=>8},
 {j:"pilih",t:"Dalam Rajah 1, tukar jenis kepada tak sekata. Apakah yang berlaku kepada paksi simetri poligon itu?",p:["Semua paksi simetri hilang","Bilangan paksi simetri bertambah dua","Bilangan paksi simetri kekal seperti sebelum ini","Hanya paksi mencancang yang tinggal"],b:0,u:"Poligon tak sekata dalam rajah tidak mempunyai paksi simetri kerana sisi dan sudutnya tidak sama."},
 {j:"pilih",t:"Segi empat sama ialah poligon sekata kerana:",p:["Empat sisinya sama panjang dan empat sudutnya tegak","Sisi bertentangan sahaja yang sama panjang","Sudutnya sama besar tetapi sisinya berbeza","Ia mempunyai bilangan sisi yang genap"],b:0,u:"Segi empat sama mempunyai semua sisi sama dan semua sudut 90°, jadi ia sekata."},
 {j:"pilih",t:"Segi empat tepat yang bukan segi empat sama ialah poligon tak sekata kerana:",p:["Sisinya tidak semua sama panjang","Sudut-sudutnya tidak semua sama besar","Ia tidak mempunyai sebarang paksi simetri","Ia mempunyai lebih daripada empat sisi"],b:0,u:"Sudut segi empat tepat semuanya 90°, tetapi sisinya dua panjang dan dua pendek. Poligon sekata mesti sama sisi juga."},
 {j:"nombor",t:"Sebuah poligon sekata mempunyai 5 paksi simetri. Berapakah bilangan sisinya?",b:5,tol:0.01,u:"Bilangan paksi simetri poligon sekata sama dengan bilangan sisinya, jadi poligon itu ada 5 sisi.",kira:()=>5},
 {j:"pilih",t:"Poligon sekata yang mempunyai tiga sisi dinamakan:",p:["Segi tiga sama sisi","Segi tiga sama kaki","Segi tiga bersudut tegak","Segi tiga sebarang"],b:0,u:"Poligon sekata mesti sama sisi dan sama sudut. Segi tiga sama sisi ada tiga sisi sama dan tiga sudut 60°."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang poligon sekata.",p:["Bilangan paksi simetrinya sama dengan bilangan sisinya","Semua sudut pedalamannya sama besar","Segi tiga sama sisi ialah poligon sekata","Rombus yang bukan segi empat sama ialah poligon sekata","Segi empat tepat sentiasa poligon sekata","Poligon sekata boleh mempunyai sisi yang berbeza panjang"],b:[0,1,2],u:"Rombus mempunyai sisi sama tetapi sudutnya tidak semua sama. Segi empat tepat mempunyai sudut sama tetapi sisinya tidak semua sama. Poligon sekata mesti sama sisi dan sama sudut."}},

{n:2, tempat:"Bengkel Bulatan", sk:"4.1.2 Membina poligon sekata dan rasional langkah pembinaan", lampiran:"bin",
 kadNama:"Jangka Lukis", kadEm:"\u{270F}\u{FE0F}", kadFakta:"Jangka lukis melukis bulatan dengan jejari tetap, jadi semua titik pada lilitan sama jauh dari pusat. Itulah sebab sisi poligon yang dibina daripada bulatan sama panjang.",
 bosKadNama:"Lipat Kertas", bosKadEm:"\u{1F4C4}", bosKadFakta:"Melipat kertas dengan sudut yang sama ialah cara membina poligon sekata tanpa pembaris, dan inilah asas seni origami.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan 6 sisi. Berapakah sudut pusat (darjah) yang digunakan untuk membina segi enam sekata?",b:60,tol:0.01,suf:"°",u:"Sudut pusat = 360° ÷ 6 = 60°.",kira:()=>360/6},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan 8 sisi. Berapakah sudut pusat (darjah) yang digunakan?",b:45,tol:0.01,suf:"°",u:"Sudut pusat = 360° ÷ 8 = 45°.",kira:()=>360/8},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan 5 sisi. Berapakah sudut pusat (darjah) yang digunakan?",b:72,tol:0.01,suf:"°",u:"Sudut pusat = 360° ÷ 5 = 72°.",kira:()=>360/5},
 {j:"pilih",t:"Mengapakah semua sisi poligon yang dibina daripada bulatan dengan sudut pusat sama adalah sama panjang?",p:["Setiap bucu sama jauh dari pusat dan sudut pusatnya sama","Setiap sisi dilukis dengan pembaris yang sama","Jejari bulatan sentiasa lebih panjang daripada sisi","Bucu dipilih secara rawak pada lilitan bulatan"],b:0,u:"Semua bucu berada pada lilitan (jejari sama) dan sudut pusat antara bucu berturutan sama, jadi setiap sisi ialah tapak segi tiga sama kaki yang serupa."},
 {j:"nombor",t:"Untuk membina segi sembilan sekata daripada bulatan, berapakah sudut pusat (darjah)?",b:40,tol:0.01,suf:"°",u:"Sudut pusat = 360° ÷ 9 = 40°.",kira:()=>360/9},
 {j:"susun",t:"Susun langkah membina segi enam sekata menggunakan bulatan.",p:["Lukis bulatan dan tanda pusat O","Bahagi 360° dengan 6 untuk mendapat sudut pusat 60°","Tanda enam bucu pada lilitan dengan sudut pusat 60°","Sambung bucu berturutan dengan garis lurus"],b:[0,1,2,3],u:"Bulatan dahulu, kemudian kira sudut pusat, tanda bucu, dan akhir sekali sambung bucu."},
 {j:"nombor",t:"Sudut pusat yang digunakan untuk membina sebuah poligon sekata ialah 30°. Berapakah bilangan sisi poligon itu?",b:12,tol:0.01,u:"Bilangan sisi = 360° ÷ 30° = 12.",kira:()=>360/30},
 {j:"pilih",t:"Dalam Rajah 1, apabila bilangan sisi bertambah, sudut pusat:",p:["Semakin kecil","Semakin besar","Kekal sama","Menjadi 360°"],b:0,u:"Sudut pusat = 360° ÷ n. Apabila n bertambah, nilainya semakin kecil."}],
 bos:{j:"nombor",t:"Sudut pusat sebuah poligon sekata yang dibina daripada bulatan ialah 24°. Berapakah bilangan sisi poligon itu?",b:15,tol:0.01,u:"Bilangan sisi = 360° ÷ 24° = 15.",kira:()=>360/24}},

{n:3, tempat:"Kilang Segi Tiga", sk:"4.2.1 Hasil tambah sudut pedalaman, sudut peluaran dan bilangan sisi", lampiran:"sud",
 kadNama:"180 Darjah", kadEm:"\u{1F4D0}", kadFakta:"Setiap segi tiga berjumlah 180°. Sebab itu jumlah sudut pedalaman poligon n sisi ialah (n − 2) × 180°.",
 bosKadNama:"Pepenjuru", bosKadEm:"\u{1F4CF}", bosKadFakta:"Pepenjuru dari satu bucu membahagi poligon n sisi kepada (n − 2) segi tiga.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan 5 sisi. Berapakah jumlah sudut pedalaman segi lima itu (darjah)?",b:540,tol:0.01,suf:"°",u:"Segi lima dibahagi kepada 3 segi tiga. Jumlah = 3 × 180° = 540°.",kira:()=>dalam(5)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan 6 sisi. Berapakah jumlah sudut pedalaman segi enam itu (darjah)?",b:720,tol:0.01,suf:"°",u:"Segi enam dibahagi kepada 4 segi tiga. Jumlah = 4 × 180° = 720°.",kira:()=>dalam(6)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan 8 sisi. Berapakah bilangan segi tiga yang terbentuk oleh pepenjuru dari bucu A?",b:6,tol:0.01,u:"Bilangan segi tiga = n − 2 = 8 − 2 = 6.",kira:()=>8-2},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan 6 sisi. Berapakah setiap sudut pedalaman segi enam sekata itu (darjah)?",b:120,tol:0.01,suf:"°",u:"Setiap sudut pedalaman = 720° ÷ 6 = 120°.",kira:()=>dalam(6)/6},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan 9 sisi. Berapakah setiap sudut peluaran segi sembilan sekata itu (darjah)?",b:40,tol:0.01,suf:"°",u:"Setiap sudut peluaran = 360° ÷ 9 = 40°.",kira:()=>luar(9)},
 {j:"pilih",t:"Rumus hasil tambah sudut pedalaman sebuah poligon n sisi ialah:",p:["(n − 2) × 180°","(n − 1) × 180°","n × 180°","(n + 2) × 180°"],b:0,u:"Poligon n sisi dibahagi kepada (n − 2) segi tiga, setiap satu berjumlah 180°."},
 {j:"nombor",t:"Berapakah hasil tambah sudut pedalaman sebuah poligon 10 sisi (darjah)?",b:1440,tol:0.01,suf:"°",u:"(10 − 2) × 180° = 8 × 180° = 1 440°.",kira:()=>dalam(10)},
 {j:"nombor",t:"Sebuah poligon sekata mempunyai sudut peluaran 60°. Berapakah bilangan sisinya?",b:6,tol:0.01,u:"Bilangan sisi = 360° ÷ 60° = 6.",kira:()=>360/60}],
 bos:{j:"nombor",t:"Setiap sudut pedalaman sebuah poligon sekata ialah 144°. Berapakah bilangan sisi poligon itu?",b:10,tol:0.01,u:"Sudut peluaran = 180° − 144° = 36°. Bilangan sisi = 360° ÷ 36° = 10.",kira:()=>360/(180-144)}},

{n:4, tempat:"Stesen Putaran", sk:"4.2.2 / 4.2.3 Sudut peluaran, sudut pedalaman dan bilangan sisi", lampiran:"car",
 kadNama:"Satu Pusingan", kadEm:"\u{1F504}", kadFakta:"Kalau awak berjalan mengelilingi sebuah poligon dan berpusing di setiap bucu, jumlah semua pusingan awak ialah 360°, iaitu satu pusingan penuh.",
 bosKadNama:"Garis Lurus", bosKadEm:"\u{27A1}\u{FE0F}", bosKadFakta:"Sudut pedalaman dan sudut peluaran di satu bucu sentiasa berjumlah 180° kerana kedua-duanya terletak pada satu garis lurus.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan sudut peluaran 72°. Berapakah bilangan sisi poligon sekata itu?",b:5,tol:0.01,u:"Bilangan sisi = 360° ÷ 72° = 5.",kira:()=>360/72},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan sudut peluaran 45°. Berapakah sudut pedalaman poligon itu (darjah)?",b:135,tol:0.01,suf:"°",u:"Sudut pedalaman = 180° − 45° = 135°.",kira:()=>180-45},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan sudut peluaran 36°. Berapakah bilangan sisi poligon sekata itu?",b:10,tol:0.01,u:"Bilangan sisi = 360° ÷ 36° = 10.",kira:()=>360/36},
 {j:"nombor",t:"Sudut pedalaman sebuah poligon sekata ialah 156°. Berapakah bilangan sisinya?",b:15,tol:0.01,u:"Sudut peluaran = 180° − 156° = 24°. Bilangan sisi = 360° ÷ 24° = 15.",kira:()=>360/(180-156)},
 {j:"pilih",t:"Hasil tambah sudut peluaran sebuah poligon (satu sudut pada setiap bucu) ialah:",p:["360°, tidak kira bilangan sisi","180°, tidak kira bilangan sisi","(n − 2) × 180°, bergantung pada n","n × 180°, bergantung pada n"],b:0,u:"Jumlah sudut peluaran sebuah poligon sentiasa 360°, iaitu satu pusingan penuh."},
 {j:"nombor",t:"Sudut pedalaman sebuah poligon sekata ialah 108°. Berapakah sudut peluarannya (darjah)?",b:72,tol:0.01,suf:"°",u:"Sudut peluaran = 180° − 108° = 72°.",kira:()=>180-108},
 {j:"nombor",t:"Berapakah setiap sudut peluaran sebuah segi lapan sekata (darjah)?",b:45,tol:0.01,suf:"°",u:"Sudut peluaran = 360° ÷ 8 = 45°.",kira:()=>luar(8)},
 {j:"pilih",t:"Dalam Rajah 1, apabila sudut peluaran semakin kecil, bilangan sisi poligon sekata:",p:["Semakin banyak","Semakin sedikit","Kekal sama","Menjadi sifar"],b:0,u:"n = 360° ÷ sudut peluaran. Sudut peluaran yang lebih kecil memberikan n yang lebih besar."}],
 bos:{j:"nombor",t:"Setiap sudut pedalaman sebuah poligon sekata ialah 162°. Berapakah hasil tambah sudut pedalaman poligon itu (darjah)?",b:3240,tol:0.01,suf:"°",u:"Sudut peluaran = 18°, maka n = 360° ÷ 18° = 20. Hasil tambah = (20 − 2) × 180° = 3 240°.",kira:()=>dalam(360/(180-162))}},

{n:5, tempat:"Ukur Lot Tanah", sk:"4.2.3 / 4.2.4 Sudut pedalaman poligon tak sekata", lampiran:"hil",
 kadNama:"Ukur Tanah", kadEm:"\u{1F5FA}\u{FE0F}", kadFakta:"Jurukur tanah menyemak jumlah sudut di dalam sesebuah lot. Jika jumlahnya tidak menyamai (n − 2) × 180°, bermakna ada ukuran yang silap.",
 bosKadNama:"Sudut Hilang", bosKadEm:"\u{1F50E}", bosKadFakta:"Bila satu sudut hilang, tolak jumlah sudut yang diketahui daripada jumlah sudut poligon itu.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan poligon 1 (segi lima). Berapakah nilai x (darjah)?",b:105,tol:0.01,suf:"°",u:"Jumlah = 540°. x = 540° − (100° + 110° + 120° + 105°) = 105°.",kira:()=>dalam(5)-(100+110+120+105)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan poligon 2 (segi lima). Berapakah nilai x (darjah)?",b:100,tol:0.01,suf:"°",u:"Jumlah = 540°. x = 540° − (90° + 125° + 135° + 90°) = 100°.",kira:()=>dalam(5)-(90+125+135+90)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan poligon 3 (segi enam). Berapakah nilai x (darjah)?",b:120,tol:0.01,suf:"°",u:"Jumlah = 720°. x = 720° − (110° + 120° + 130° + 100° + 140°) = 120°.",kira:()=>dalam(6)-(110+120+130+100+140)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan poligon 4 (segi enam). Berapakah nilai x (darjah)?",b:95,tol:0.01,suf:"°",u:"Jumlah = 720°. x = 720° − (125° + 115° + 140° + 130° + 115°) = 95°.",kira:()=>dalam(6)-(125+115+140+130+115)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan poligon 5 (segi tujuh). Berapakah nilai x (darjah)?",b:140,tol:0.01,suf:"°",u:"Jumlah = 900°. x = 900° − (130° + 120° + 140° + 125° + 135° + 110°) = 140°.",kira:()=>dalam(7)-(130+120+140+125+135+110)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan poligon 6 (segi empat). Berapakah nilai x (darjah)?",b:85,tol:0.01,suf:"°",u:"Jumlah = 360°. x = 360° − (80° + 100° + 95°) = 85°.",kira:()=>dalam(4)-(80+100+95)},
 {j:"nombor",t:"Empat sudut sebuah segi lima ialah 100°, 110°, 120° dan 130°. Sudut yang kelima ialah x°. Berapakah nilai x?",b:80,tol:0.01,u:"Jumlah = 540°. x = 540 − (100 + 110 + 120 + 130) = 80.",kira:()=>dalam(5)-(100+110+120+130)},
 {j:"nombor",t:"Sudut-sudut sebuah segi lima ialah 2x, 3x, 100°, 120° dan 140°. Berapakah nilai x?",b:36,tol:0.01,u:"2x + 3x + 360° = 540°. Maka 5x = 180° dan x = 36°.",kira:()=>(dalam(5)-(100+120+140))/5}],
 bos:{j:"nombor",t:"Sudut-sudut sebuah segi enam ialah 100°, 110°, 130°, 140°, x dan (x + 20°). Berapakah nilai x (darjah)?",b:110,tol:0.01,suf:"°",u:"Jumlah = 720°. 100 + 110 + 130 + 140 + x + x + 20 = 720. Maka 2x + 500 = 720, 2x = 220 dan x = 110.",kira:()=>(dalam(6)-(100+110+130+140)-20)/2}},

{n:6, tempat:"Reka Jubin", sk:"4.2.4 Masalah yang melibatkan poligon", lampiran:"pel",
 kadNama:"Jubin Lantai", kadEm:"\u{1F9F1}", kadFakta:"Jubin segi enam sekata boleh disusun rapat kerana tiga sudut 120° bertemu di satu titik dan berjumlah 360°.",
 bosKadNama:"Corak Sendiri", bosKadEm:"\u{1F3A8}", bosKadFakta:"Reka corak sendiri bermula dengan menyemak sama ada sudut yang bertemu di satu titik berjumlah tepat 360°.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan 8 sisi dan kumpul 8 sudut. Berapakah jumlah sudut peluaran itu (darjah)?",b:360,tol:0.01,suf:"°",u:"Semua sudut peluaran poligon berjumlah 360°, iaitu satu pusingan penuh.",kira:()=>8*luar(8)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan 6 sisi dan kumpul 4 sudut. Berapakah jumlah 4 sudut peluaran itu (darjah)?",b:240,tol:0.01,suf:"°",u:"Setiap sudut peluaran = 360° ÷ 6 = 60°. Empat sudut = 4 × 60° = 240°.",kira:()=>4*luar(6)},
 {j:"nombor",t:"Sebuah robot berjalan mengelilingi sebuah poligon sekata dan berpusing 40° pada setiap bucu. Berapakah bilangan sisi poligon itu?",b:9,tol:0.01,u:"Jumlah pusingan sepenuhnya ialah 360°. Bilangan sisi = 360° ÷ 40° = 9.",kira:()=>360/40},
 {j:"nombor",t:"Sebuah taman berbentuk segi lapan sekata. Seorang pengawal berjalan mengelilinginya dan berpusing di setiap bucu. Berapakah sudut pusingan di setiap bucu (darjah)?",b:45,tol:0.01,suf:"°",u:"Sudut pusingan = sudut peluaran = 360° ÷ 8 = 45°.",kira:()=>luar(8)},
 {j:"nombor",t:"Sebuah gelanggang berbentuk segi dua belas sekata. Berapakah setiap sudut pedalamannya (darjah)?",b:150,tol:0.01,suf:"°",u:"Sudut peluaran = 360° ÷ 12 = 30°. Sudut pedalaman = 180° − 30° = 150°.",kira:()=>dalam(12)/12},
 {j:"pilih",t:"Mengapakah jumlah sudut peluaran sebuah poligon sentiasa 360° tanpa mengira bilangan sisi?",p:["Berjalan mengelilingi poligon ialah satu pusingan penuh","Semua poligon mempunyai empat sudut tegak yang sama","Setiap sudut peluaran poligon ialah tepat 90°","Jumlah sudut pedalaman poligon sentiasa 360°"],b:0,u:"Bila kita berjalan mengelilingi sebuah poligon dan kembali ke tempat asal, jumlah semua pusingan ialah satu pusingan penuh iaitu 360°."},
 {j:"nombor",t:"Sebuah poligon sekata mempunyai jumlah sudut pedalaman 720°. Poligon kedua mempunyai jumlah sudut pedalaman 360° lebih banyak. Berapakah bilangan sisi poligon kedua?",b:8,tol:0.01,u:"Jumlah kedua = 720° + 360° = 1 080°. (n − 2) × 180° = 1 080°, maka n − 2 = 6 dan n = 8.",kira:()=>(dalam(6)+360)/180+2},
 {j:"pilih",t:"Seorang murid berkata, 'Poligon yang lebih banyak sisi mempunyai sudut peluaran yang lebih besar.' Adakah dia betul?",p:["Salah, sudut peluaran ialah 360° ÷ n jadi semakin kecil","Betul, kerana bilangan sudut peluaran bertambah","Betul, kerana jumlah sudut peluaran bertambah","Salah, kerana sudut peluaran sentiasa 90°"],b:0,u:"Untuk poligon sekata, sudut peluaran = 360° ÷ n. Apabila n bertambah, nilai itu semakin kecil, dan jumlah semua sudut peluaran tetap 360°."}],
 bos:{j:"buka",
  t:"Awak mahu mereka bentuk sebuah lantai jubin daripada poligon sekata. Pilih satu jenis poligon sekata dan tunjukkan bagaimana awak menentukan sudut pedalaman dan sudut peluarannya.",
  arahan:"Tunjukkan pengiraan jumlah sudut pedalaman dengan (n − 2) × 180°, sudut pedalaman setiap bucu, dan sudut peluaran dengan 360° ÷ n. Kemudian nyatakan sama ada jubin jenis itu boleh disusun rapat tanpa ruang kosong di satu titik (jumlah sudut di satu titik ialah 360°) dan terangkan sebabnya.",
  u:"Jawapan TP6 yang kukuh memilih poligon sekata yang sah, mengira jumlah sudut pedalaman, sudut pedalaman dan sudut peluaran dengan betul, dan menggunakan jumlah sudut di satu titik (360°) untuk memutuskan sama ada jubin itu boleh disusun rapat, dengan sebab yang jelas."}}
];

module.exports = {
  id:"m2b4", tingkatan:2, kod:"4.0 Poligon",
  tajuk:"Kota Poligon",
  subtajuk:"Matematik Ting. 2 · Bab 4 Poligon",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal poligon sekata dan tak sekata serta menyatakan sifatnya, termasuk bilangan paksi simetri poligon sekata. Langkah seterusnya ialah memahami cara poligon sekata dibina.",
   2:"{n} memahami cara membina poligon sekata daripada bulatan menggunakan sudut pusat 360° ÷ n serta boleh memberi sebab langkahnya. Perlu lebih latihan sebelum mengira sudut pedalaman dan peluaran.",
   3:"{n} boleh menggunakan (n − 2) × 180° dan 360° ÷ n untuk menentukan sudut pedalaman, sudut peluaran dan bilangan sisi poligon sekata. Galakkan menulis langkah pengiraan dengan jelas.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah tentang sudut peluaran, sudut pedalaman dan bilangan sisi. Seterusnya latih masalah poligon tak sekata yang melibatkan sudut hilang.",
   5:"{n} dapat menyelesaikan masalah kompleks yang melibatkan sudut hilang pada poligon tak sekata dan persamaan mudah daripada jumlah sudut. Sudah bersedia untuk masalah bukan rutin dan reka cipta.",
   6:"{n} berjaya menggunakan sifat poligon untuk menyelesaikan masalah bukan rutin dan menerangkan sebab langkahnya dengan jelas. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Poligon. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyebut sifat poligon sekata bersama rakan sebaya."
  },
  lampiran:{ sif:R_SIF, bin:R_BIN, sud:R_SUD, car:R_CAR, hil:R_HIL, pel:R_PEL },
  aras:ARAS
};
