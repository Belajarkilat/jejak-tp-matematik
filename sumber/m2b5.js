/* Sumber kandungan — Matematik KSSM Tingkatan 2, Bab 5 Bulatan.
   Fail ini disunting tangan. Jalankan `node bina.js m2b5` untuk menyemaknya
   dan menghasilkan bank-m2b5.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 50 (dskp/matematik-t2.pdf).
   Bab ini mempunyai enam tahap penguasaan penuh; Tahap 6 dalam DSKP berbunyi
   "masalah bukan rutin secara kreatif".

   Semua pengiraan menggunakan π = 22/7 dan soalan menyatakannya. Jawapan
   berangka dikira dengan kod dalam medan `kira` dan dibandingkan oleh
   tools/semak-jawapan.js. Rajah interaktif menggunakan widget t2bulat
   (widget-m2b5.js). Pembinaan geometri dengan jangka lukis (SP 5.1.2) dan
   penentuan pusat bulatan melalui pembinaan (SP 5.2.2) dinilai secara
   konsep dan langkah, bukan lukisan. */
const PI = 22 / 7;
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
const lilit = r => 2 * PI * r;
const luasB = r => PI * r * r;
const lengkok = (th, r) => th / 360 * 2 * PI * r;
const luasS = (th, r) => th / 360 * PI * r * r;

const SPI = [
"Mempamerkan pengetahuan asas tentang bulatan.",
"Mempamerkan kefahaman tentang bulatan.",
"Mengaplikasikan kefahaman tentang bulatan untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang bulatan dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang bulatan dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang bulatan dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran: bulatan interaktif ---------- */

const bul = (spec, kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t2bulat", kapsyen, alt }, spec, extra || {});
const R_BUL1 = bul({ mod: "bahagian", i: 0 },
  "Rajah 1 · Gerakkan gelongsor untuk memilih bahagian bulatan. Bahagian itu diserlahkan.",
  "Rajah interaktif bulatan; gelongsor memilih jejari, diameter, perentas, lilitan, lengkok, sektor atau tembereng dan menyerlahkannya");
const R_BUL2 = bul({ mod: "simetri", r: 5, dlist: [0, 1, 2, 3, 4], unit: "cm", i: 3 },
  "Rajah 1 · Jejari 5 cm. Gerakkan gelongsor d untuk menukar jarak perentas AB dari pusat O.",
  "Rajah interaktif bulatan berjejari 5 cm dengan perentas AB; gelongsor menukar jarak perentas dari pusat dan menunjukkan panjang AM dan AB");
const R_BUL3 = bul({ mod: "lilluas", nilai: [3.5, 7, 10.5, 14, 21], i: 1 },
  "Rajah 1 · Gerakkan gelongsor jejari. Lihat berapa kali diameter dan petak jejari memenuhi lilitan dan luas.",
  "Rajah interaktif bulatan; gelongsor jejari menukar lilitan dan luas, dengan perbandingan tiga diameter dan tiga petak jejari");
const R_BUL4 = bul({ mod: "sektor", rlist: [7, 14, 21], r: 7, i: 4 },
  "Rajah 1 · Tetapkan sudut dan jejari sektor. Kira dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif sektor bulatan; gelongsor sudut dan jejari menukar panjang lengkok, luas dan perimeter sektor",
  { cabar: true });
const R_BUL5 = bul({ mod: "trek", r: 7, L: [0, 7, 14, 21, 28], unit: "m", i: 2 },
  "Rajah 1 · Trek dibina daripada dua separuh bulatan dan bahagian lurus L. Kira dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif trek dengan dua separuh bulatan berjejari 7 meter dan bahagian lurus L; gelongsor L menukar perimeter dan luas",
  { cabar: true });
const R_BUL6 = bul({ mod: "cincin", R: [10.5, 14, 21], rk: [3.5, 7], b: 1, k: 1 },
  "Rajah 1 · Gerakkan gelongsor R dan r. Luas cincin ialah luas bulatan besar tolak bulatan kecil.",
  "Rajah interaktif cincin di antara dua bulatan sepusat; gelongsor jejari luar dan dalam menukar luas cincin");

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Padang Roda", sk:"5.1.1 / 5.1.2 Bahagian bulatan dan pembinaan", lampiran:"bul1",
 kadNama:"Jejari dan Diameter", kadEm:"\u{1F3A1}", kadFakta:"Diameter sentiasa dua kali panjang jejari. Sebab itu roda basikal berdiameter 70 cm mempunyai jejari 35 cm.",
 bosKadNama:"Perentas Terpanjang", bosKadEm:"\u{1F4CF}", bosKadFakta:"Diameter ialah perentas yang paling panjang dalam sesebuah bulatan kerana ia melalui pusat.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih Jejari. Garis yang diserlahkan menyambung pusat O dengan:",p:["Satu titik pada lilitan","Dua titik pada lilitan","Pusat bulatan yang lain","Satu titik di luar bulatan"],b:0,u:"Jejari ialah garis dari pusat ke satu titik pada lilitan."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Diameter. Apakah yang istimewa tentang garis ini?",p:["Ia melalui pusat bulatan","Ia tidak menyentuh lilitan","Ia lebih pendek daripada jejari","Ia melengkung mengikut lilitan"],b:0,u:"Diameter ialah perentas yang melalui pusat, dengan kedua-dua hujung pada lilitan."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Perentas. Perentas sentiasa menyambung:",p:["Dua titik pada lilitan","Pusat dengan lilitan","Dua jejari yang bersebelahan","Dua titik di luar bulatan"],b:0,u:"Perentas ialah garis lurus yang menyambung dua titik pada lilitan. Ia tidak semestinya melalui pusat."},
 {j:"nombor",t:"Jejari sebuah bulatan ialah 6 cm. Berapakah diameternya (cm)?",b:12,tol:0.01,suf:"cm",u:"Diameter = 2 × jejari = 2 × 6 = 12 cm.",kira:()=>2*6},
 {j:"nombor",t:"Diameter sebuah roda ialah 70 cm. Berapakah jejarinya (cm)?",b:35,tol:0.01,suf:"cm",u:"Jejari = diameter ÷ 2 = 70 ÷ 2 = 35 cm.",kira:()=>70/2},
 {j:"pilih",t:"Tembereng ialah kawasan bulatan yang terletak di antara:",p:["Perentas dengan lengkok","Dua jejari dengan lengkok","Diameter dengan pusat","Lilitan dengan pusat"],b:0,u:"Tembereng dibatasi oleh satu perentas dan satu lengkok. Kawasan antara dua jejari dan lengkok ialah sektor."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Sektor. Sektor dibatasi oleh:",p:["Dua jejari dan satu lengkok","Satu perentas dan satu lengkok","Satu diameter sahaja","Dua perentas dan satu jejari"],b:0,u:"Sektor ialah kawasan antara dua jejari dan lengkok di antara hujung kedua-dua jejari itu."},
 {j:"susun",t:"Susun langkah membina bulatan berjejari 3 cm dengan jangka lukis.",p:["Buka jangka lukis sehingga jarak antara hujung tajam dengan mata pensel ialah 3 cm","Letakkan hujung tajam pada titik yang dipilih sebagai pusat","Putar jangka lukis satu pusingan penuh","Tanda pusat dengan huruf O dan tulis jejari 3 cm"],b:[0,1,2,3],u:"Laraskan jejari dahulu, letakkan pusat, lukis bulatan, kemudian label."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang bulatan.",p:["Diameter ialah perentas yang paling panjang","Semua jejari dalam satu bulatan sama panjang","Diameter sentiasa dua kali jejari","Setiap perentas melalui pusat bulatan","Lengkok ialah garis lurus antara dua titik pada lilitan","Sektor dibatasi oleh dua perentas"],b:[0,1,2],u:"Perentas tidak semestinya melalui pusat; hanya diameter yang melaluinya. Lengkok melengkung mengikut lilitan, bukan garis lurus, dan sektor dibatasi oleh dua jejari."}},

{n:2, tempat:"Cermin Simetri", sk:"5.2.1 / 5.2.2 Sifat simetri perentas", lampiran:"bul2",
 kadNama:"Paksi Simetri", kadEm:"\u{1F4D0}", kadFakta:"Bulatan mempunyai paksi simetri tanpa had. Setiap diameter ialah satu paksi simetri, jadi awak boleh lipat bulatan melalui mana-mana diameter dan kedua-dua separuh bertindih tepat.",
 bosKadNama:"Cari Pusat", bosKadEm:"\u{1F50D}", bosKadFakta:"Untuk mencari pusat bulatan yang hilang, lukis dua perentas dan pembahagi dua sama serenjang setiap satu. Kedua-dua garis bertemu di pusat.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, jejari berserenjang dengan perentas AB dan memotongnya di M. Apakah hubungan AM dengan MB?",p:["AM sama dengan MB","AM dua kali MB","AM separuh daripada MB","AM tiada kaitan dengan MB"],b:0,u:"Jejari yang berserenjang dengan perentas membahagi dua sama perentas itu, jadi AM = MB."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan d = 3 cm. Berapakah panjang AM (cm)?",b:4,tol:0.01,suf:"cm",u:"Dalam segi tiga OAM bersudut tegak, AM = √(5² − 3²) = √16 = 4 cm.",kira:()=>Math.sqrt(25-9)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan d = 3 cm. Berapakah panjang perentas AB (cm)?",b:8,tol:0.01,suf:"cm",u:"AB = 2 × AM = 2 × 4 = 8 cm.",kira:()=>2*Math.sqrt(25-9)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan d = 4 cm. Berapakah panjang perentas AB (cm)?",b:6,tol:0.01,suf:"cm",u:"AM = √(5² − 4²) = 3 cm, jadi AB = 2 × 3 = 6 cm.",kira:()=>2*Math.sqrt(25-16)},
 {j:"pilih",t:"Dalam Rajah 1, apabila d = 0 cm, perentas AB menjadi:",p:["Diameter bulatan","Jejari bulatan","Tangen bulatan","Satu titik pada lilitan"],b:0,u:"Apabila perentas berada di pusat, ia melalui pusat dan menjadi diameter, iaitu 2 × 5 = 10 cm."},
 {j:"pilih",t:"Dua perentas yang sama panjang dalam satu bulatan mempunyai:",p:["Jarak yang sama dari pusat","Jarak berbeza dari pusat","Jarak sifar dari pusat","Lengkok yang berbeza panjang"],b:0,u:"Perentas yang sama panjang sama jarak dari pusat dan menghasilkan lengkok yang sama panjang."},
 {j:"pilih",t:"Pembahagi dua sama serenjang bagi dua perentas yang berlainan akan bertemu di:",p:["Pusat bulatan","Lilitan bulatan","Tengah salah satu perentas","Luar bulatan"],b:0,u:"Pembahagi dua sama serenjang setiap perentas melalui pusat, jadi dua daripadanya bertemu di pusat."},
 {j:"nombor",t:"Sebuah perentas 16 cm berjarak 6 cm dari pusat bulatan. Berapakah jejari bulatan itu (cm)?",b:10,tol:0.01,suf:"cm",u:"Separuh perentas = 8 cm. Jejari = √(8² + 6²) = √100 = 10 cm.",kira:()=>Math.sqrt(8*8+6*6)}],
 bos:{j:"pilih",t:"Mengapakah setiap diameter ialah paksi simetri bagi bulatan?",p:["Bulatan dilipat mengikut diameter, kedua-dua separuh bertindih tepat","Diameter ialah garis yang paling panjang dalam bulatan","Diameter membahagi lilitan kepada tiga bahagian sama","Diameter sentiasa berserenjang dengan semua perentas"],b:0,u:"Paksi simetri ialah garis yang membahagi bentuk kepada dua bahagian yang bertindih tepat apabila dilipat. Setiap diameter berbuat begitu pada bulatan."}},

{n:3, tempat:"Kilang Pizza", sk:"5.3.1 / 5.3.2 / 5.3.3 Lilitan dan luas bulatan", lampiran:"bul3",
 kadNama:"Nombor Pi", kadEm:"\u{1F355}", kadFakta:"π ialah nisbah lilitan kepada diameter, kira-kira 3.14 atau 22/7. Nilainya sama untuk semua bulatan, sama ada sebesar duit syiling atau sebesar bumi.",
 bosKadNama:"Pizza Besar", bosKadEm:"\u{1F967}", bosKadFakta:"Luas bulatan bergantung pada jejari kuasa dua, jadi pizza yang diameternya dua kali ganda memberi luas empat kali ganda.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan jejari 7 cm. Berapakah lilitan bulatan (cm)? Guna π = 22/7.",b:44,tol:0.01,suf:"cm",u:"Lilitan = 2πj = 2 × 22/7 × 7 = 44 cm.",kira:()=>lilit(7)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan jejari 7 cm. Berapakah luas bulatan (cm²)? Guna π = 22/7.",b:154,tol:0.01,suf:"cm²",u:"Luas = πj² = 22/7 × 7 × 7 = 154 cm².",kira:()=>luasB(7)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan jejari 14 cm. Berapakah lilitan bulatan (cm)? Guna π = 22/7.",b:88,tol:0.01,suf:"cm",u:"Lilitan = 2 × 22/7 × 14 = 88 cm.",kira:()=>lilit(14)},
 {j:"pilih",t:"Rumus lilitan bulatan berdiameter d ialah:",p:["πd","πd²","π ÷ d","d ÷ π"],b:0,u:"Lilitan = π × diameter = πd. Ia juga sama dengan 2πj."},
 {j:"pilih",t:"Rumus luas bulatan berjejari j ialah:",p:["πj²","2πj","πj","½πj"],b:0,u:"Luas bulatan = π × jejari × jejari = πj²."},
 {j:"nombor",t:"Lilitan sebuah roda basikal ialah 176 cm. Berapakah diameternya (cm)? Guna π = 22/7.",b:56,tol:0.01,suf:"cm",u:"Diameter = lilitan ÷ π = 176 ÷ 22/7 = 56 cm.",kira:()=>176/PI},
 {j:"nombor",t:"Berapakah luas bulatan berdiameter 28 cm (cm²)? Guna π = 22/7.",b:616,tol:0.01,suf:"cm²",u:"Jejari = 14 cm. Luas = 22/7 × 14 × 14 = 616 cm².",kira:()=>luasB(14)},
 {j:"pilih",t:"Apabila jejari sebuah bulatan digandakan, luasnya menjadi:",p:["Empat kali ganda","Dua kali ganda","Tiga kali ganda","Enam kali ganda"],b:0,u:"Luas = πj². Jika j menjadi 2j, luas = π(2j)² = 4πj², iaitu empat kali ganda.",kira:()=>Math.pow(2,2)===4}],
 bos:{j:"nombor",t:"Sebuah pizza bulat berdiameter 28 cm. Berapakah jumlah luas dua pizza yang sama saiz (cm²)? Guna π = 22/7.",b:1232,tol:0.01,suf:"cm²",u:"Luas satu pizza = 22/7 × 14 × 14 = 616 cm². Dua pizza = 2 × 616 = 1 232 cm².",kira:()=>2*luasB(14)}},

{n:4, tempat:"Jam Sektor", sk:"5.3.3 Panjang lengkok dan luas sektor", lampiran:"bul4",
 kadNama:"Jam Dinding", kadEm:"\u{1F570}\u{FE0F}", kadFakta:"Jam dinding ialah bulatan. Apabila jarum minit bergerak dari nombor 12 ke nombor 3, ia melalui sektor 90°, iaitu suku daripada bulatan.",
 bosKadNama:"Pecahan Bulatan", bosKadEm:"\u{1F370}", bosKadFakta:"Sektor bersudut θ ialah θ/360 daripada bulatan penuh. Panjang lengkok dan luasnya mengikut pecahan yang sama.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan jejari 7 cm dan sudut 90°. Berapakah panjang lengkok (cm)? Guna π = 22/7.",b:11,tol:0.01,suf:"cm",u:"Lengkok = 90/360 × 2 × 22/7 × 7 = 1/4 × 44 = 11 cm.",kira:()=>lengkok(90,7)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan jejari 7 cm dan sudut 90°. Berapakah luas sektor (cm²)? Guna π = 22/7.",b:38.5,tol:0.01,suf:"cm²",u:"Luas = 90/360 × 22/7 × 7 × 7 = 1/4 × 154 = 38.5 cm².",kira:()=>luasS(90,7)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan jejari 14 cm dan sudut 60°. Berapakah panjang lengkok (cm) kepada 2 tempat perpuluhan? Guna π = 22/7.",b:bunda(lengkok(60,14),2),tol:0.01,suf:"cm",u:"Lengkok = 60/360 × 2 × 22/7 × 14 = 1/6 × 88 = 14.67 cm.",kira:()=>bunda(lengkok(60,14),2)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan jejari 21 cm dan sudut 120°. Berapakah panjang lengkok (cm)? Guna π = 22/7.",b:44,tol:0.01,suf:"cm",u:"Lengkok = 120/360 × 2 × 22/7 × 21 = 1/3 × 132 = 44 cm.",kira:()=>lengkok(120,21)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan jejari 21 cm dan sudut 120°. Berapakah luas sektor (cm²)? Guna π = 22/7.",b:462,tol:0.01,suf:"cm²",u:"Luas = 1/3 × 22/7 × 21 × 21 = 1/3 × 1 386 = 462 cm².",kira:()=>luasS(120,21)},
 {j:"nombor",t:"Sebuah sektor berjejari 7 cm mempunyai sudut pusat 240°. Berapakah perimeter sektor itu (cm) kepada 2 tempat perpuluhan? Guna π = 22/7.",b:bunda(lengkok(240,7)+14,2),tol:0.01,suf:"cm",u:"Lengkok = 2/3 × 44 = 29.33 cm. Perimeter = lengkok + dua jejari = 29.33 + 14 = 43.33 cm.",kira:()=>bunda(lengkok(240,7)+14,2)},
 {j:"pilih",t:"Sudut pusat sebuah sektor ialah 90°. Sektor itu ialah ... daripada bulatan penuh.",p:["Suku","Separuh","Sepertiga","Tiga suku"],b:0,u:"90/360 = 1/4, jadi sektor itu ialah suku bulatan.",kira:()=>90/360===0.25},
 {j:"nombor",t:"Panjang lengkok sebuah sektor ialah 22 cm dan jejarinya 21 cm. Berapakah sudut pusat sektor itu (°)? Guna π = 22/7.",b:60,tol:0.5,suf:"°",u:"Lilitan penuh = 2 × 22/7 × 21 = 132 cm. Sudut = 22/132 × 360 = 60°.",kira:()=>22/lilit(21)*360}],
 bos:{j:"nombor",t:"Sebuah jam dinding bulat berjejari 14 cm. Jarum minit bergerak dari nombor 12 ke nombor 4. Berapakah luas sektor yang dilalui jarum itu (cm²) kepada 2 tempat perpuluhan? Guna π = 22/7.",b:bunda(luasS(120,14),2),tol:0.01,suf:"cm²",u:"Dari 12 ke 4 ialah 4 daripada 12 bahagian, iaitu 120°. Luas = 1/3 × 22/7 × 14 × 14 = 1/3 × 616 = 205.33 cm².",kira:()=>bunda(luasS(120,14),2)}},

{n:5, tempat:"Trek Larian", sk:"5.3.3 / 5.3.4 Perimeter dan luas bentuk gabungan", lampiran:"bul5",
 kadNama:"Trek Olahraga", kadEm:"\u{1F3C3}", kadFakta:"Trek olahraga biasa mempunyai dua bahagian lurus dan dua lengkok separuh bulatan di hujungnya, supaya pelari boleh berlari satu pusingan tanpa berhenti.",
 bosKadNama:"Satu Pusingan", bosKadEm:"\u{1F3C1}", bosKadFakta:"Jarak satu pusingan trek ialah lilitan satu bulatan penuh ditambah dua kali panjang bahagian lurus.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan L = 14 m. Berapakah perimeter trek (m)? Guna π = 22/7.",b:72,tol:0.01,suf:"m",u:"Perimeter = 2πj + 2L = 44 + 28 = 72 m.",kira:()=>lilit(7)+2*14},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan L = 14 m. Berapakah luas trek (m²)? Guna π = 22/7.",b:350,tol:0.01,suf:"m²",u:"Luas = πj² + 2jL = 154 + 2 × 7 × 14 = 154 + 196 = 350 m².",kira:()=>luasB(7)+2*7*14},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan L = 28 m. Berapakah perimeter trek (m)? Guna π = 22/7.",b:100,tol:0.01,suf:"m",u:"Perimeter = 44 + 2 × 28 = 100 m.",kira:()=>lilit(7)+2*28},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan L = 21 m. Berapakah luas trek (m²)? Guna π = 22/7.",b:448,tol:0.01,suf:"m²",u:"Luas = 154 + 2 × 7 × 21 = 154 + 294 = 448 m².",kira:()=>luasB(7)+2*7*21},
 {j:"nombor",t:"Sebuah trek mempunyai dua separuh bulatan berjejari 35 m dan dua bahagian lurus, setiap satu 100 m. Berapakah jarak satu pusingan (m)? Guna π = 22/7.",b:420,tol:0.01,suf:"m",u:"Dua separuh bulatan = 2 × 22/7 × 35 = 220 m. Dua bahagian lurus = 200 m. Jumlah = 420 m.",kira:()=>lilit(35)+200},
 {j:"nombor",t:"Sebuah taman segi empat tepat berukuran 20 m × 14 m mempunyai kolam bulat berjejari 7 m. Berapakah luas kawasan berumput (m²)? Guna π = 22/7.",b:126,tol:0.01,suf:"m²",u:"Luas taman = 20 × 14 = 280 m². Luas kolam = 154 m². Berumput = 280 − 154 = 126 m².",kira:()=>20*14-luasB(7)},
 {j:"nombor",t:"Roda sebuah lori berjejari 35 cm. Berapakah jarak (cm) yang dilalui lori selepas roda berputar 10 kali? Guna π = 22/7.",b:2200,tol:0.01,suf:"cm",u:"Lilitan roda = 2 × 22/7 × 35 = 220 cm. Sepuluh putaran = 2 200 cm.",kira:()=>10*lilit(35)},
 {j:"pilih",t:"Jarak satu pusingan trek dengan dua separuh bulatan dan dua bahagian lurus dikira dengan:",p:["Lilitan bulatan penuh + dua bahagian lurus","Luas bulatan penuh + dua bahagian lurus","Diameter + satu bahagian lurus","Lilitan satu separuh bulatan sahaja"],b:0,u:"Dua separuh bulatan bersama menjadi satu bulatan penuh, jadi jarak = lilitan + dua bahagian lurus."}],
 bos:{j:"nombor",t:"Sebuah trek berjejari 14 m pada lengkok dan bahagian lurus 50 m. Ali berlari 5 pusingan penuh. Berapakah jarak yang dilarinya (m)? Guna π = 22/7.",b:940,tol:0.01,suf:"m",u:"Satu pusingan = 2 × 22/7 × 14 + 2 × 50 = 88 + 100 = 188 m. Lima pusingan = 5 × 188 = 940 m.",kira:()=>5*(lilit(14)+100)}},

{n:6, tempat:"Studio Cincin", sk:"5.3.4 Masalah bulatan dan cincin, bukan rutin", lampiran:"bul6",
 kadNama:"Cincin", kadEm:"\u{1F48D}", kadFakta:"Luas cincin ialah luas bulatan besar tolak luas bulatan kecil di tengah. Cakera padat (CD) ialah contoh cincin yang biasa kita jumpa.",
 bosKadNama:"Reka Taman", bosKadEm:"\u{1F333}", bosKadFakta:"Arkitek landskap sering mengira luas laluan bulat di sekeliling kolam untuk menentukan bilangan jubin yang perlu dibeli.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan R = 14 cm dan r = 7 cm. Berapakah luas cincin (cm²)? Guna π = 22/7.",b:462,tol:0.01,suf:"cm²",u:"Luas = 22/7 × (14² − 7²) = 22/7 × 147 = 462 cm².",kira:()=>PI*(14*14-7*7)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan R = 21 cm dan r = 7 cm. Berapakah luas cincin (cm²)? Guna π = 22/7.",b:1232,tol:0.01,suf:"cm²",u:"Luas = 22/7 × (441 − 49) = 22/7 × 392 = 1 232 cm².",kira:()=>PI*(21*21-7*7)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan R = 10.5 cm dan r = 3.5 cm. Berapakah luas cincin (cm²)? Guna π = 22/7.",b:308,tol:0.01,suf:"cm²",u:"Luas = 22/7 × (110.25 − 12.25) = 22/7 × 98 = 308 cm².",kira:()=>PI*(10.5*10.5-3.5*3.5)},
 {j:"nombor",t:"Sebuah CD mempunyai jejari luar 6 cm dan lubang tengah berjejari 1 cm. Berapakah luas permukaan CD itu (cm²)? Guna π = 22/7.",b:110,tol:0.01,suf:"cm²",u:"Luas = 22/7 × (6² − 1²) = 22/7 × 35 = 110 cm².",kira:()=>PI*(36-1)},
 {j:"nombor",t:"Sebuah semibulatan berdiameter 14 cm. Berapakah perimeternya termasuk garis lurus (cm)? Guna π = 22/7.",b:36,tol:0.01,suf:"cm",u:"Lengkok = separuh lilitan = 1/2 × 22/7 × 14 = 22 cm. Perimeter = 22 + 14 = 36 cm.",kira:()=>lilit(7)/2+14},
 {j:"nombor",t:"Lilitan sebuah bulatan ialah 88 cm. Berapakah luasnya (cm²)? Guna π = 22/7.",b:616,tol:0.01,suf:"cm²",u:"Jejari = 88 ÷ (2 × 22/7) = 14 cm. Luas = 22/7 × 14 × 14 = 616 cm².",kira:()=>luasB(88/(2*PI))},
 {j:"nombor",t:"Luas sebuah bulatan ialah 154 cm². Berapakah lilitannya (cm)? Guna π = 22/7.",b:44,tol:0.01,suf:"cm",u:"j² = 154 ÷ 22/7 = 49, jadi j = 7 cm. Lilitan = 2 × 22/7 × 7 = 44 cm.",kira:()=>lilit(Math.sqrt(154/PI))},
 {j:"pilih",t:"Pizza A berdiameter 20 cm dan pizza B berdiameter 30 cm. Luas pizza B ialah ... kali luas pizza A.",p:["2.25","1.5","3","2"],b:0,u:"Nisbah luas = (30 ÷ 20)² = 1.5² = 2.25. Luas bergantung pada kuasa dua diameter.",kira:()=>bunda(Math.pow(30/20,2),2)}],
 bos:{j:"buka",
  t:"Reka sebuah taman kecil yang mempunyai satu kolam bulat dan satu laluan berbentuk cincin di sekeliling kolam itu.",
  arahan:"Nyatakan jejari kolam dan lebar laluan yang awak pilih, kira luas kolam dan luas laluan (guna π = 22/7), dan terangkan bagaimana awak memastikan taman itu muat dalam kawasan segi empat tepat yang awak tentukan.",
  u:"Jawapan TP6 yang kukuh memilih ukuran yang munasabah, mengira luas kolam πj² dan luas laluan π(R² − j²) dengan betul, menunjukkan langkah kerja, dan menyemak bahawa diameter luar cincin muat dalam ukuran taman."}}
];

module.exports = {
  id:"m2b5", tingkatan:2, kod:"5.0 Bulatan",
  tajuk:"Kilang Roda dan Pizza",
  subtajuk:"Matematik Ting. 2 · Bab 5 Bulatan",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal jejari, diameter, perentas, lengkok, sektor dan tembereng, serta menyatakan hubungan diameter dengan jejari. Langkah seterusnya ialah memahami sifat simetri perentas.",
   2:"{n} memahami bahawa jejari yang berserenjang dengan perentas membahagi dua sama perentas itu, dan bahawa perentas yang sama panjang sama jarak dari pusat. Perlu lebih latihan sebelum bergerak ke TP3.",
   3:"{n} boleh menggunakan rumus lilitan dan luas bulatan untuk melaksanakan tugasan mudah, termasuk mencari diameter daripada lilitan. Galakkan menyatakan nilai π yang digunakan.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah tentang panjang lengkok, luas dan perimeter sektor menggunakan pecahan sudut pusat. Seterusnya latih bentuk gabungan.",
   5:"{n} dapat menyelesaikan masalah kompleks yang melibatkan bulatan dan bentuk gabungan seperti trek, roda dan kawasan berumput. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya mereka bentuk dan menyelesaikan masalah bukan rutin yang melibatkan cincin dan luas bulatan dengan ukuran yang munasabah dan langkah kerja yang jelas. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Bulatan. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyebut nama setiap bahagian bulatan dan mengukur jejari serta diameter benda bulat di rumah."
  },
  lampiran:{ bul1:R_BUL1, bul2:R_BUL2, bul3:R_BUL3, bul4:R_BUL4, bul5:R_BUL5, bul6:R_BUL6 },
  aras:ARAS
};
