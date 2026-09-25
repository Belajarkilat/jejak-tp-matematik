/* Sumber kandungan — Matematik KSSM Tingkatan 1, Bab 8 Garis dan Sudut.
   Fail ini disunting tangan. Jalankan `node bina.js m1b8` untuk menyemaknya
   dan menghasilkan bank-m1b8.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 1, Bahagian Pembangunan Kurikulum, muka 64 (dskp/matematik-t1.pdf).
   Nota: DSKP Tingkatan 1 menulis Standard Prestasi bagi bab ini sahaja, tiada
   tema gabungan, jadi keenam-enam tahap digunakan seadanya.

   Widget interaktif ialah `t1sudut` (widget-m1b8.js), dengan enam mod.
   Semua jawapan berangka mempunyai `kira` sebagai semakan bebas. */

const SPI = [
"Mempamerkan pengetahuan asas tentang garis dan sudut.",
"Mempamerkan kefahaman tentang garis dan sudut.",
"Mengaplikasikan kefahaman tentang garis dan sudut untuk melaksanakan tugasan mudah.",
"Mengaplikasikan kefahaman dan kemahiran yang sesuai tentang garis dan sudut dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan kefahaman dan kemahiran yang sesuai tentang garis dan sudut dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan kefahaman dan kemahiran yang sesuai tentang garis dan sudut dalam konteks penyelesaian masalah bukan rutin."];

/* ---------- lampiran: rajah interaktif ---------- */

const rajah = (mod, kapsyen, alt, extra) => Object.assign({ jenis:"interaktif", w:"t1sudut", mod, kapsyen, alt }, extra || {});
const R_PROT = rajah("protraktor", "Rajah 1 · Gerakkan gelongsor untuk menukar sudut θ. Lihat jenis sudut dan sudut konjugatnya.",
  "Rajah interaktif protraktor; gelongsor menukar sudut dari 0 hingga 360 darjah dan menunjukkan jenis sudut");
const R_PAS = rajah("pasangan", "Rajah 1 · Pilih jenis pasangan sudut, kemudian gerakkan sudut a. Perhatikan sudut b.",
  "Rajah interaktif sudut pelengkap, penggenap dan konjugat; gelongsor menukar sudut a dan sudut b dikira");
const R_BINA = rajah("bina", "Rajah 1 · Gerakkan gelongsor langkah untuk melihat pembinaan dengan jangka lukis. AB = 8 cm dan sudut AOB = 70°.",
  "Rajah interaktif pembinaan jangka lukis bagi pembahagi dua sama serenjang dan pembahagi dua sama sudut, langkah demi langkah");
const R_SILANG = rajah("bersilang", "Rajah 1 · Dua garis bersilang. Kira sudut lain dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif dua garis bersilang dengan empat sudut a, b, c dan d", { i:3, cabar:true });
const R_SELARI = rajah("selari", "Rajah 1 · Garis selari dipotong garis rentas lintang. Kira sudut hijau dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif dua garis dipotong garis rentas lintang dengan sudut sepadan, selang-seli atau pedalaman", { condong:true, cabar:true });
const R_DONGAK = rajah("dongak", "Rajah 1 · P ialah pemerhati dan T ialah puncak menara. Gerakkan sudut dongak dan lihat sudut tunduk dari T.",
  "Rajah interaktif sudut dongak dari pemerhati P ke puncak T dan sudut tunduk yang sama dari T ke P");

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Padang Protraktor", sk:"8.1.1 / 8.1.2 / 8.1.3 Kekongruenan, jenis sudut, sudut refleks dan putaran lengkap", lampiran:"sud1",
 kadNama:"Protraktor", kadEm:"\u{1F4D0}", kadFakta:"Protraktor separuh bulatan mengukur sehingga 180°. Untuk sudut refleks, ukur sudut yang tinggal daripada 360° dan tolak.",
 bosKadNama:"Putaran Penuh", bosKadEm:"\u{1F504}", bosKadFakta:"Satu putaran lengkap ialah 360°. Angka 360 dipilih sebab ia boleh dibahagi dengan banyak nombor, jadi senang dibahagi sama rata.",
 soalan:[
 {j:"pilih",t:"Dua tembereng garis yang mempunyai panjang yang sama dikatakan:",p:["Kongruen","Selari","Serenjang","Bersilang"],b:0,u:"Kongruen bermaksud sama saiz. Dua tembereng garis kongruen jika panjangnya sama."},
 {j:"pilih",t:"Sudut yang tepat 90° dipanggil sudut:",p:["Tegak","Tirus","Cakah","Refleks"],b:0,u:"Sudut tegak ialah 90°, seperti bucu buku."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan sudut 210°. Berapakah sudut konjugatnya?",b:150,tol:0.01,suf:"°",u:"Sudut konjugat = 360° − 210° = 150°.",kira:()=>360-210},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan sudut 135°. Jenis sudut itu ialah:",p:["Cakah","Tirus","Tegak","Refleks"],b:0,u:"135° lebih daripada 90° tetapi kurang daripada 180°, jadi ia sudut cakah."},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan sudut 300°. Jenis sudut itu ialah:",p:["Refleks","Cakah","Lurus","Tirus"],b:0,u:"Sudut lebih daripada 180° tetapi kurang daripada 360° ialah sudut refleks."},
 {j:"pilih",t:"Satu putaran lengkap di sekeliling satu titik ialah:",p:["360°","180°","90°","270°"],b:0,u:"Putaran lengkap = 360°."},
 {j:"pilih",t:"Sudut pada satu garis lurus berjumlah:",p:["180°","90°","360°","270°"],b:0,u:"Garis lurus ialah separuh putaran, iaitu 180°."},
 {j:"susun",t:"Susun sudut berikut dari yang paling kecil kepada yang paling besar.",p:["30° (sudut tirus)","90° (sudut tegak)","120° (sudut cakah)","250° (sudut refleks)"],b:[0,1,2,3],u:"Tirus < tegak < cakah < lurus < refleks < putaran lengkap."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang jenis sudut.",p:["Sudut refleks lebih besar daripada 180°","Sudut cakah terletak antara 90° dan 180°","Sudut tirus kurang daripada 90°","Sudut lurus bernilai 90°","Sudut tegak lebih besar daripada sudut cakah","Sudut putaran lengkap bernilai 180°"],b:[0,1,2],u:"Sudut lurus ialah 180°, sudut tegak lebih kecil daripada sudut cakah, dan putaran lengkap ialah 360°."}},

{n:2, tempat:"Kedai Pasangan", sk:"8.1.4 / 8.1.5 Sudut pelengkap, penggenap dan konjugat", lampiran:"sud2",
 kadNama:"Sudut Pelengkap", kadEm:"\u{1F91D}", kadFakta:"Dua sudut pelengkap bergabung menjadi sudut tegak, macam dua kepingan yang melengkapkan sudut bucu buku.",
 bosKadNama:"Sudut Konjugat", bosKadEm:"\u{1F517}", bosKadFakta:"Sudut konjugat ialah dua sudut yang bergabung menjadi satu putaran penuh 360°. Satu daripadanya biasanya sudut refleks.",
 soalan:[
 {j:"pilih",t:"Dua sudut yang berjumlah 90° dipanggil sudut:",p:["Pelengkap","Penggenap","Konjugat","Bertentang bucu"],b:0,u:"Pelengkap: jumlah 90°."},
 {j:"pilih",t:"Dua sudut yang berjumlah 180° dipanggil sudut:",p:["Penggenap","Pelengkap","Konjugat","Bertentang bucu"],b:0,u:"Penggenap: jumlah 180°."},
 {j:"pilih",t:"Dua sudut yang berjumlah 360° dipanggil sudut:",p:["Konjugat","Pelengkap","Penggenap","Bersebelahan"],b:0,u:"Konjugat: jumlah 360°."},
 {j:"nombor",t:"Berapakah sudut pelengkap bagi 35°?",b:55,tol:0.01,suf:"°",u:"90° − 35° = 55°.",kira:()=>90-35},
 {j:"nombor",t:"Berapakah sudut penggenap bagi 128°?",b:52,tol:0.01,suf:"°",u:"180° − 128° = 52°.",kira:()=>180-128},
 {j:"nombor",t:"Dalam Rajah 1, pilih sudut konjugat dan tetapkan a = 80°. Berapakah sudut b?",b:280,tol:0.01,suf:"°",u:"b = 360° − 80° = 280°.",kira:()=>360-80},
 {j:"nombor",t:"Berapakah sudut konjugat bagi 250°?",b:110,tol:0.01,suf:"°",u:"360° − 250° = 110°.",kira:()=>360-250},
 {j:"pilih",t:"Sudut 40° dan 50° ialah pasangan sudut:",p:["Pelengkap","Penggenap","Konjugat","Bukan pasangan istimewa"],b:0,u:"40° + 50° = 90°, jadi keduanya sudut pelengkap."}],
 bos:{j:"nombor",t:"Dua sudut pelengkap. Satu sudut ialah dua kali ganda sudut yang lain. Berapakah sudut yang lebih besar?",b:60,tol:0.01,suf:"°",u:"Katakan sudut kecil x. x + 2x = 90°, maka x = 30° dan sudut besar = 60°.",kira:()=>90/3*2}},

{n:3, tempat:"Bengkel Jangka Lukis", sk:"8.1.6 / 8.1.7 Pembinaan garis dan sudut dengan rasional langkah", lampiran:"sud3",
 kadNama:"Jangka Lukis", kadEm:"\u{1F9ED}", kadFakta:"Jangka lukis dan pembaris tanpa skala sudah cukup untuk membina banyak bentuk geometri. Ahli matematik Yunani purba melakukannya beribu tahun lalu.",
 bosKadNama:"Sudut 60°", bosKadEm:"\u{1F53A}", bosKadFakta:"Sudut 60° dibina dengan jangka lukis dan pembaris sahaja kerana ia sudut dalam segi tiga sama sisi.",
 soalan:[
 {j:"pilih",t:"Semasa membina pembahagi dua sama serenjang bagi AB, jejari lengkok yang digunakan mesti:",p:["Lebih daripada separuh panjang AB","Kurang daripada separuh panjang AB","Sama dengan panjang AB sahaja","Sama dengan separuh panjang AB"],b:0,u:"Jika jejari kurang daripada separuh AB, dua lengkok tidak akan bersilang."},
 {j:"pilih",t:"Dalam Rajah 1, pilih pembahagi dua sama serenjang dan langkah 3. Sudut antara AB dengan garis binaan di M ialah:",p:["90°","45°","60°","180°"],b:0,u:"Garis itu serenjang dengan AB, jadi sudutnya 90°.",kira:()=>90},
 {j:"pilih",t:"Alat yang cukup untuk membina pembahagi dua sama sudut ialah:",p:["Jangka lukis dan alat tepi lurus","Protraktor sahaja","Pembaris bergraf sahaja","Set segi tiga sahaja"],b:0,u:"Pembinaan geometri hanya memerlukan jangka lukis dan alat tepi lurus."},
 {j:"nombor",t:"Dalam Rajah 1, pilih pembahagi dua sama serenjang dan langkah 3. AB = 8 cm. Berapakah panjang AM (cm)?",b:4,tol:0.01,suf:"cm",u:"M ialah titik tengah AB, jadi AM = 8 ÷ 2 = 4 cm.",kira:()=>8/2},
 {j:"nombor",t:"Dalam Rajah 1, pilih pembahagi dua sama sudut dan langkah 3. Sudut AOB = 70°. Berapakah setiap sudut yang terbentuk (darjah)?",b:35,tol:0.01,suf:"°",u:"70° ÷ 2 = 35°.",kira:()=>70/2},
 {j:"susun",t:"Susun langkah membina pembahagi dua sama sudut AOB.",p:["Lukis sudut AOB","Dari O, lukis lengkok yang memotong OA di P dan OB di Q","Dari P dan Q dengan jejari sama, lukis lengkok yang bersilang di R","Sambung O ke R"],b:[0,1,2,3],u:"Sudut dahulu, kemudian lengkok dari O, lengkok dari P dan Q, dan akhir sekali sambung O ke R."},
 {j:"pilih",t:"Sudut 60° dibina dengan jangka lukis dan alat tepi lurus sahaja kerana ia berkait dengan:",p:["Segi tiga sama sisi","Segi tiga bersudut tegak","Segi tiga tak sama sisi","Sisi empat sama sisi"],b:0,u:"Semua sudut segi tiga sama sisi ialah 60°."},
 {j:"pilih",t:"Mengapakah titik pada garis pembahagi dua sama serenjang AB sama jauh dari A dan B?",p:["Ia dilukis daripada dua lengkok berjejari sama dari A dan B","Ia dilukis dengan protraktor pada 90°","Ia sentiasa lebih pendek daripada AB","Ia dilukis daripada satu lengkok dari A sahaja"],b:0,u:"Setiap titik silang lengkok berjarak sama dari A dan B, jadi garis yang menyambungnya membahagi dua sama serenjang."}],
 bos:{j:"nombor",t:"Sudut tegak 90° dibahagi dua sama. Salah satu sudut yang terhasil dibahagi dua sama sekali lagi. Berapakah sudut terkecil itu?",b:22.5,tol:0.01,suf:"°",u:"90° ÷ 2 = 45°, kemudian 45° ÷ 2 = 22.5°.",kira:()=>90/2/2}},

{n:4, tempat:"Simpang Empat", sk:"8.2.1 / 8.2.2 / 8.2.3 Sudut pada garis bersilang", lampiran:"sud4",
 kadNama:"Bertentang Bucu", kadEm:"\u{1F500}", kadFakta:"Bila dua jalan bersilang di simpang, sudut yang bertentangan sentiasa sama, macam dua pasang bilah gunting yang sama besar.",
 bosKadNama:"Simpang Serenjang", bosKadEm:"\u{2795}", bosKadFakta:"Bila dua garis bersilang serenjang, keempat-empat sudut ialah 90°. Bentuk tanda tambah ialah contohnya.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, a = 70°. Berapakah sudut b?",b:110,tol:0.01,suf:"°",u:"Sudut a dan b bersebelahan pada garis lurus, jadi b = 180° − 70° = 110°.",kira:()=>180-70},
 {j:"nombor",t:"Dalam Rajah 1, a = 130°. Berapakah sudut c?",b:130,tol:0.01,suf:"°",u:"Sudut c bertentang bucu dengan a, jadi c = a = 130°.",kira:()=>130},
 {j:"nombor",t:"Dalam Rajah 1, a = 50°. Berapakah sudut d?",b:130,tol:0.01,suf:"°",u:"d bertentang bucu dengan b. b = 180° − 50° = 130°, jadi d = 130°.",kira:()=>180-50},
 {j:"pilih",t:"Sudut bertentang bucu pada dua garis bersilang sentiasa:",p:["Sama besar","Berjumlah 180°","Berjumlah 90°","Berjumlah 360°"],b:0,u:"Sudut bertentang bucu sama besar."},
 {j:"nombor",t:"Dua garis bersilang. Sudut bertentang bucu ialah (2x + 20)° dan (x + 50)°. Cari x.",b:30,tol:0.01,u:"2x + 20 = x + 50, maka x = 30.",kira:()=>50-20},
 {j:"nombor",t:"Dua sudut bersebelahan pada garis lurus ialah 2y° dan 3y°. Cari y.",b:36,tol:0.01,u:"2y + 3y = 180, maka y = 36.",kira:()=>180/5},
 {j:"pilih",t:"Dalam Rajah 1, jika a = 90°, sudut b, c dan d ialah:",p:["Semuanya 90°","b = 90°, c = 180°, d = 90°","b = 45°, c = 90°, d = 45°","b = 0°, c = 90°, d = 0°"],b:0,u:"Garis serenjang: keempat-empat sudut ialah 90°."},
 {j:"nombor",t:"Dalam Rajah 1, a = 150°. Berapakah sudut b?",b:30,tol:0.01,suf:"°",u:"b = 180° − 150° = 30°.",kira:()=>180-150}],
 bos:{j:"nombor",t:"Dua garis bersilang. Satu sudut ialah (5p − 10)° dan sudut bertentang bucunya ialah (3p + 20)°. Berapakah sudut bersebelahan dengan sudut itu?",b:115,tol:0.01,suf:"°",u:"5p − 10 = 3p + 20, maka p = 15. Sudut = 5(15) − 10 = 65°. Sudut bersebelahan = 180° − 65° = 115°.",kira:()=>180-(5*15-10)}},

{n:5, tempat:"Landasan Selari", sk:"8.3.1 hingga 8.3.5 Garis selari dan garis rentas lintang", lampiran:"sud5",
 kadNama:"Landasan Kereta Api", kadEm:"\u{1F686}", kadFakta:"Dua landasan kereta api selari kerana jaraknya sentiasa sama. Kayu palang yang memotongnya ialah garis rentas lintang.",
 bosKadNama:"Tanda Selari", bosKadEm:"\u{25B6}\u{FE0F}", bosKadFakta:"Dalam rajah, garis selari ditandakan dengan anak panah yang sama. Anak panah dua kali bermakna pasangan selari yang lain.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih pasangan sepadan dan condong 0°, dengan sudut 110°. Berapakah sudut hijau?",b:110,tol:0.01,suf:"°",u:"Sudut sepadan pada garis selari adalah sama, jadi sudut hijau = 110°.",kira:()=>110},
 {j:"nombor",t:"Dua garis selari dipotong garis rentas lintang. Satu sudut pedalaman ialah 110°. Berapakah sudut pedalaman satu lagi di sebelah yang sama?",b:70,tol:0.01,suf:"°",u:"Sudut pedalaman berjumlah 180°, maka 180° − 110° = 70°.",kira:()=>180-110},
 {j:"nombor",t:"Dua garis selari dipotong garis rentas lintang. Satu sudut selang-seli ialah 125°. Berapakah sudut selang-seli yang satu lagi?",b:125,tol:0.01,suf:"°",u:"Sudut selang-seli adalah sama, jadi sudutnya 125°.",kira:()=>125},
 {j:"pilih",t:"Dalam rajah, dua garis dinyatakan selari dengan menandakan:",p:["Anak panah yang sama pada kedua-dua garis","Sudut tegak pada satu garis","Garis putus-putus pada satu garis","Huruf besar di hujung garis"],b:0,u:"Tanda anak panah yang sama menunjukkan garis itu selari."},
 {j:"pilih",t:"Dalam Rajah 1, pilih pasangan sepadan dan condong 5°. Apakah kesimpulan yang betul?",p:["Garis tidak selari kerana sudut sepadan tidak sama","Garis selari kerana sudut sepadan sama","Garis selari kerana sudut berjumlah 180°","Garis serenjang kerana sudutnya berbeza"],b:0,u:"Jika garis selari, sudut sepadan mesti sama. Apabila tidak sama, garis tidak selari."},
 {j:"nombor",t:"PQ selari dengan RS. Dua sudut pedalaman ialah (3x + 10)° dan (2x + 20)°. Cari x.",b:30,tol:0.01,u:"Sudut pedalaman berjumlah 180°. 5x + 30 = 180, maka x = 30.",kira:()=>(180-30)/5},
 {j:"nombor",t:"PQ selari dengan RS. Dua sudut selang-seli ialah (4y − 15)° dan (y + 60)°. Cari y.",b:25,tol:0.01,u:"Sudut selang-seli adalah sama. 4y − 15 = y + 60, maka y = 25.",kira:()=>(60+15)/3},
 {j:"pilih",t:"Dua garis dipotong garis rentas lintang. Sudut sepadan ialah 75° dan 80°. Apakah kesimpulannya?",p:["Garis tidak selari","Garis selari","Garis serenjang","Garis bersilang tegak"],b:0,u:"Sudut sepadan tidak sama, jadi kedua-dua garis tidak selari."}],
 bos:{j:"nombor",t:"PQ selari dengan RS. Dua sudut sepadan ialah (5m − 20)° dan (3m + 30)°. Berapakah nilai sudut sepadan itu?",b:105,tol:0.01,suf:"°",u:"Sudut sepadan sama: 5m − 20 = 3m + 30, maka m = 25. Sudut = 5(25) − 20 = 105°.",kira:()=>5*25-20}},

{n:6, tempat:"Menara Pandang", sk:"8.3.5 / 8.3.6 Sudut dongak dan sudut tunduk, masalah bukan rutin", lampiran:"sud6",
 kadNama:"Sudut Dongak", kadEm:"\u{1F52D}", kadFakta:"Sudut dongak diukur dari garis mengufuk ke atas, ke arah objek yang kita pandang. Klinometer ialah alat mudah untuk mengukurnya.",
 bosKadNama:"Sudut Tunduk", bosKadEm:"\u{1F441}\u{FE0F}", bosKadFakta:"Sudut tunduk diukur dari garis mengufuk ke bawah. Sudut tunduk dari puncak sama dengan sudut dongak dari bawah kerana garis mengufuk selari.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan sudut dongak 40°. Berapakah sudut tunduk dari T?",b:40,tol:0.01,suf:"°",u:"Sudut tunduk sama dengan sudut dongak, iaitu 40°.",kira:()=>40},
 {j:"pilih",t:"Sudut dongak diukur dari:",p:["Garis mengufuk ke atas","Garis menegak ke bawah","Garis mengufuk ke bawah","Garis menegak ke atas"],b:0,u:"Sudut dongak bermula daripada garis mengufuk dan naik ke arah objek."},
 {j:"nombor",t:"Dari puncak menara, sudut tunduk ke sebuah bot ialah 28°. Berapakah sudut dongak dari bot ke puncak menara?",b:28,tol:0.01,suf:"°",u:"Sudut tunduk sama dengan sudut dongak (sudut selang-seli), iaitu 28°.",kira:()=>28},
 {j:"nombor",t:"Sudut dongak ke sebuah layang-layang ialah 35°. Berapakah sudut antara garis pandangan dengan garis menegak ke atas?",b:55,tol:0.01,suf:"°",u:"Garis mengufuk dan garis menegak berbeza 90°. 90° − 35° = 55°.",kira:()=>90-35},
 {j:"nombor",t:"Dari puncak bangunan, sudut tunduk ke kereta P ialah 32° dan ke kereta Q ialah 58°. Berapakah sudut PTQ antara dua garis pandangan?",b:26,tol:0.01,suf:"°",u:"Kedua-dua sudut diukur dari garis mengufuk yang sama. 58° − 32° = 26°.",kira:()=>58-32},
 {j:"pilih",t:"Mengapakah sudut tunduk dari T sama dengan sudut dongak dari P?",p:["Garis mengufuk di T dan P selari, jadi sudut selang-seli sama","Kerana T dan P sentiasa sama tinggi dari tanah","Kerana kedua-dua sudut itu ialah sudut tegak","Kerana jumlah kedua-dua sudut ialah 180°"],b:0,u:"Garis mengufuk di T selari dengan garis mengufuk di P. Sudut selang-seli antara garis selari adalah sama."},
 {j:"nombor",t:"Sudut tunduk dari sebuah kapal terbang ke landasan ialah 24°. Berapakah sudut antara garis pandangan dengan garis menegak ke bawah?",b:66,tol:0.01,suf:"°",u:"90° − 24° = 66°.",kira:()=>90-24},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan sudut dongak 50°. Berapakah jumlah sudut dongak dan sudut tunduk?",b:100,tol:0.01,suf:"°",u:"Sudut tunduk = 50°, jadi jumlahnya 50° + 50° = 100°.",kira:()=>50+50}],
 bos:{j:"buka",
  t:"Pilih satu tempat tinggi di sekolah awak (tingkap tingkat atas, tangga atau bumbung). Reka satu masalah yang melibatkan sudut tunduk atau sudut dongak dan garis selari.",
  arahan:"Lukis rajah yang menunjukkan garis mengufuk, garis pandangan, dan sudut yang diberi. Tunjukkan bagaimana awak mencari satu sudut lain dengan menyatakan sifat sudut yang digunakan.",
  u:"Jawapan TP6 yang kukuh mereka masalah yang jelas, melukis rajah dengan garis mengufuk selari, dan menggunakan sifat sudut selang-seli atau sudut pelengkap dengan betul."}}
];

module.exports = {
  id:"m1b8", tingkatan:1, kod:"8.0 Garis dan Sudut",
  tajuk:"Pusat Sudut",
  subtajuk:"Matematik Ting. 1 · Bab 8 Garis dan Sudut",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal jenis sudut, sudut refleks dan putaran lengkap serta kekongruenan tembereng garis. Langkah seterusnya ialah memahami hubungan antara pasangan sudut.",
   2:"{n} memahami sudut pelengkap, penggenap dan konjugat serta dapat menerangkan sifatnya. Perlu lebih latihan mencari nilai sudut sebelum bergerak ke TP3.",
   3:"{n} boleh membina garis dan sudut menggunakan jangka lukis serta menerangkan langkah pembinaannya untuk tugasan mudah. Galakkan menerangkan sebab setiap langkah dilakukan.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah tentang sudut pada garis bersilang, termasuk sudut bertentang bucu dan bersebelahan. Seterusnya latih penggunaan persamaan algebra pada sudut.",
   5:"{n} dapat menyelesaikan masalah kompleks yang melibatkan garis selari dan garis rentas lintang serta menentukan sama ada dua garis selari. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya mereka dan menyelesaikan masalah bukan rutin yang melibatkan sudut dongak, sudut tunduk dan garis selari. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Garis dan Sudut. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menamakan jenis sudut dengan bimbingan rakan sebaya."
  },
  lampiran:{ sud1:R_PROT, sud2:R_PAS, sud3:R_BINA, sud4:R_SILANG, sud5:R_SELARI, sud6:R_DONGAK },
  aras:ARAS
};
