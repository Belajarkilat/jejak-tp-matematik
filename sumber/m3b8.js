/* Sumber kandungan — Matematik KSSM Tingkatan 3, Bab 8 Lokus dalam Dua Dimensi.
   Fail ini disunting tangan. Jalankan `node bina.js m3b8` untuk menyemaknya
   dan menghasilkan bank-m3b8.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 3, Bahagian Pembangunan Kurikulum, muka 63 (dskp/matematik-t3.pdf).

   Rajah interaktif ialah widget `lokus` dalam widget-m3b8.js. Semua jawapan
   berangka dikira dengan kod dalam medan `kira` dan dibandingkan oleh
   tools/semak-jawapan.js. */
const rad = d => d * Math.PI / 180;
const sin = d => Math.sin(rad(d)), kos = d => Math.cos(rad(d));
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
const PI = 3.142;

const SPI = [
"Mempamerkan pengetahuan asas tentang lokus.",
"Mempamerkan kefahaman tentang lokus.",
"Mengaplikasikan kefahaman tentang lokus dalam dua dimensi untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang lokus dalam dua dimensi dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang lokus dalam dua dimensi dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang lokus dalam dua dimensi dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran: rajah lokus interaktif ---------- */

const lok = (spec, kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "lokus", kapsyen, alt }, spec, extra || {});
const R_LOK1 = lok({ mod: "titik", r: 3, i: 3 },
  "Rajah 1 · O ialah titik tetap dan OP = r = 3 cm. Gerakkan arah P, kemudian tukar syarat untuk melihat kawasan.",
  "Rajah interaktif titik P berjarak 3 sentimeter dari titik tetap O; gelongsor menggerakkan P mengelilingi O dan syarat menukar kepada kurang atau lebih daripada 3 sentimeter");
const R_LOK2 = lok({ mod: "dua", D: 6 },
  "Rajah 1 · A dan B berjarak 6 cm. Gerakkan P dan bandingkan PA dengan PB.",
  "Rajah interaktif titik P dan dua titik tetap A dan B berjarak 6 sentimeter; gelongsor menggerakkan P dan menunjukkan PA dan PB sama apabila P pada pembahagi dua sama serenjang");
const R_LOK3 = lok({ mod: "garis", d: 3 },
  "Rajah 1 · Garis PQ (tebal) dan dua garis putus-putus, masing-masing 3 cm daripada PQ.",
  "Rajah interaktif garis lurus PQ dan dua garis selari putus-putus yang berjarak 3 sentimeter di atas dan di bawah PQ; gelongsor menggerakkan titik P sepanjang lokus");
const R_LOK4 = lok({ mod: "silang", sudut: 60, t: 1, a: 1 },
  "Rajah 1 · Garis 1 dan garis 2 bersilang di O dengan sudut 60°. Kira dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif dua garis bersilang di O dengan sudut 60 darjah dan dua pembahagi dua sudut putus-putus; gelongsor menggerakkan P dan menunjukkan jarak P ke kedua-dua garis",
  { cabar: true });
const R_LOK5 = lok({ mod: "gabung", D: 4, jejari: [1, 2, 3, 4], r: 2 },
  "Rajah 1 · A dan B berjarak 4 cm. Kira dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif bulatan berpusat A dan pembahagi dua sama serenjang AB dengan A dan B berjarak 4 sentimeter; gelongsor menukar jejari dan menunjukkan bilangan titik persilangan",
  { cabar: true });
const R_LOK6 = lok({ mod: "titik", r: 5, i: 6 },
  "Rajah 1 · Menara di O menjangkau r = 5 km. Tukar syarat untuk melihat titik dalam dan luar liputan.",
  "Rajah interaktif menara telekom di titik O dengan liputan 5 kilometer; titik P berada pada sempadan, di dalam atau di luar liputan mengikut syarat yang dipilih");

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Padang Permainan", sk:"8.1.1 / 8.2.1 (i) Lokus dan jarak tetap dari satu titik", lampiran:"lok1",
 kadNama:"Lokus", kadEm:"\u{1F4CD}", kadFakta:"Perkataan lokus bermaksud tempat. Dalam matematik, lokus ialah semua tempat yang boleh dilalui oleh satu titik yang mematuhi satu syarat.",
 bosKadNama:"Jangka Lukis", bosKadEm:"\u{1F58A}\u{FE0F}", bosKadFakta:"Jangka lukis ialah alat untuk melukis lokus jarak tetap. Hujung jarum kekal di pusat, hujung pensel mengekalkan jarak yang sama.",
 soalan:[
 {j:"pilih",t:"Lokus ialah satu set titik yang:",p:["Kedudukannya memenuhi syarat tertentu","Semuanya terletak pada satu garis lurus sahaja","Jaraknya dari pusat sentiasa berubah-ubah","Sentiasa membentuk bulatan penuh"],b:0,u:"Lokus ialah set titik yang kedudukannya memenuhi syarat tertentu. Bentuknya bergantung pada syarat itu, bukan sentiasa bulatan atau garis lurus."},
 {j:"pilih",t:"Bola diikat dengan tali 2 m pada tiang dan diputar mendatar dengan tali tegang. Lokus bola itu ialah:",p:["Bulatan berjejari 2 m","Garis lurus sepanjang 2 m","Setengah bulatan berjejari 4 m","Segi empat sama bersisi 2 m"],b:0,u:"Bola sentiasa 2 m dari tiang, jadi lokusnya bulatan berjejari 2 m yang berpusat pada tiang."},
 {j:"pilih",t:"Jarum saat sebuah jam dinding sepanjang 8 cm. Hujung jarum itu bergerak membentuk lokus berupa:",p:["Bulatan berjejari 8 cm","Bulatan berjejari 16 cm","Garis lurus sepanjang 8 cm","Satu titik tetap pada pusat jam"],b:0,u:"Hujung jarum sentiasa 8 cm dari pusat jam, jadi lokusnya bulatan berjejari 8 cm. Diameter ialah 16 cm."},
 {j:"nombor",t:"Dalam Rajah 1, P berada pada lokus. Berapakah jarak OP (cm)?",b:3,tol:0.01,suf:"cm",u:"Titik yang berada pada lokus berjarak tetap r = 3 cm dari O.",kira:()=>3},
 {j:"nombor",t:"Lokus titik yang berjarak 5 cm dari titik tetap O ialah sebuah bulatan. Berapakah diameter bulatan itu (cm)?",b:10,tol:0.01,suf:"cm",u:"Diameter = 2 × jejari = 2 × 5 = 10 cm.",kira:()=>2*5},
 {j:"pilih",t:"Dalam Rajah 1, tukar syarat kepada OP &lt; r. Titik P kini berada:",p:["Di dalam bulatan","Tepat pada bulatan","Di luar bulatan","Di pusat O sahaja"],b:0,u:"OP &lt; r bermaksud jarak P dari O kurang daripada jejari, jadi P berada di dalam bulatan."},
 {j:"pilih",t:"Titik yang berjarak lebih daripada 3 cm dari titik tetap O terletak:",p:["Di luar bulatan berjejari 3 cm","Di dalam bulatan berjejari 3 cm","Tepat pada bulatan berjejari 3 cm","Di pusat bulatan"],b:0,u:"Lebih jauh daripada 3 cm dari O bermaksud di luar bulatan berjejari 3 cm."},
 {j:"susun",t:"Susun langkah melukis lokus titik yang berjarak 3 cm dari titik O.",p:["Tandakan titik O","Buka jangka lukis sepanjang 3 cm","Letak hujung jarum jangka pada O","Putar jangka satu pusingan penuh"],b:[0,1,2,3],u:"Tandakan pusat, tetapkan jejari, letak jarum di pusat, kemudian putar penuh."}],
 bos:{j:"banyak",t:"Pilih SEMUA situasi yang lokusnya ialah bulatan.",p:["Hujung jarum jam yang berputar","Kambing ditambat pada tiang dengan tali tegang","Batu jatuh bebas dari tebing","Kereta sorong ditolak di jalan lurus","Bola dipusing pada hujung tali tegang","Lif bergerak naik dari aras 1 ke aras 5"],b:[0,1,4],u:"Jarum jam, kambing bertali tegang dan bola pada tali tegang sentiasa jarak tetap dari satu titik. Batu jatuh, kereta sorong dan lif bergerak pada garis lurus."}},

{n:2, tempat:"Dua Menara Wi-Fi", sk:"8.2.1 (ii) Jarak sama dari dua titik tetap", lampiran:"lok2",
 kadNama:"Sama Jauh", kadEm:"⚖\u{FE0F}", kadFakta:"Pembahagi dua sama serenjang AB ialah garis yang sama jauh dari A dan B. Ia melalui titik tengah AB dan menyilang AB pada sudut 90°.",
 bosKadNama:"Segi Tiga Sama Kaki", bosKadEm:"\u{1F53A}", bosKadFakta:"Bagi mana-mana titik P pada pembahagi dua sama serenjang AB, segi tiga PAB ialah segi tiga sama kaki kerana PA = PB.",
 soalan:[
 {j:"pilih",t:"Lokus titik yang sama jauh dari dua titik tetap A dan B ialah:",p:["Pembahagi dua sama serenjang AB","Garis lurus AB yang menyambung A dan B","Bulatan berpusat di A yang melalui B","Pembahagi dua sudut yang bertitik di A"],b:0,u:"Semua titik yang sama jauh dari A dan B terletak pada pembahagi dua sama serenjang AB."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan P ke tepi = 0 cm dan P naik/turun = 3 cm. Berapakah PA (cm), 2 tempat perpuluhan?",b:bunda(Math.sqrt(9+9),2),tol:0.01,suf:"cm",u:"P berada 3 cm dari titik tengah AB dan A berada 3 cm dari titik tengah. PA = √(3² + 3²) = √18 = 4.24 cm.",kira:()=>bunda(Math.sqrt(3*3+3*3),2)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan P ke tepi = 0 cm dan P naik/turun = 2 cm. Berapakah PB (cm), 2 tempat perpuluhan?",b:bunda(Math.sqrt(9+4),2),tol:0.01,suf:"cm",u:"PB = √(3² + 2²) = √13 = 3.61 cm.",kira:()=>bunda(Math.sqrt(3*3+2*2),2)},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan P ke tepi = 1 cm (ke kanan lokus). Yang manakah benar?",p:["PB &lt; PA","PA &lt; PB","PA = PB","PA + PB = 6 cm"],b:0,u:"P kini lebih dekat kepada B, jadi PB &lt; PA. Hanya titik pada pembahagi dua sama serenjang mempunyai PA = PB."},
 {j:"pilih",t:"Sudut antara garis AB dengan pembahagi dua sama serenjangnya ialah:",p:["90°","45°","60°","180°"],b:0,u:"Serenjang bermaksud membentuk sudut 90°."},
 {j:"nombor",t:"Titik P berada pada pembahagi dua sama serenjang AB. Jika PA = 7 cm, berapakah PB (cm)?",b:7,tol:0.01,suf:"cm",u:"Titik pada pembahagi dua sama serenjang sama jauh dari A dan B, jadi PB = PA = 7 cm.",kira:()=>7},
 {j:"pilih",t:"Semasa membina pembahagi dua sama serenjang AB dengan jangka lukis, jejari jangka mestilah:",p:["Lebih daripada separuh panjang AB","Tepat separuh panjang AB","Kurang daripada separuh panjang AB","Bebas, mana-mana ukuran boleh"],b:0,u:"Jika jejari tidak lebih daripada separuh AB, lengkok dari A dan B tidak bersilang."},
 {j:"susun",t:"Susun langkah membina pembahagi dua sama serenjang AB.",p:["Letak jarum jangka di A, lukis lengkok di atas dan bawah AB","Kekalkan jejari, letak jarum di B, lukis lengkok yang memotong lengkok pertama","Tandakan dua titik persilangan lengkok","Sambung dua titik itu dengan pembaris"],b:[0,1,2,3],u:"Lengkok dari A dan B bersilang pada dua titik yang sama jauh dari A dan B, lalu garis melalui dua titik itu ialah lokus."}],
 bos:{j:"nombor",t:"Dua menara Wi-Fi A dan B berjarak 8 m. Titik P sama jauh dari A dan B dan berjarak 3 m dari garis AB. Berapakah PA (m)?",b:5,tol:0.01,suf:"m",u:"Titik tengah AB ke A ialah 4 m, dan P berjarak 3 m dari AB. PA = √(4² + 3²) = √25 = 5 m.",kira:()=>Math.sqrt(4*4+3*3)}},

{n:3, tempat:"Lorong Selari", sk:"8.2.1 (iii) / (iv) Jarak tetap dari satu garis, jarak sama dari dua garis selari", lampiran:"lok3",
 kadNama:"Garis Selari", kadEm:"\u{1F6E3}\u{FE0F}", kadFakta:"Lokus titik berjarak tetap dari sebatang garis lurus yang tidak terhingga panjang ialah dua garis selari, satu di setiap sisi garis itu.",
 bosKadNama:"Jalur Selamat", bosKadEm:"\u{1F6A7}", bosKadFakta:"Papan tanda 'Kawasan larangan 50 m dari jalan' mewakili jalur di kedua-dua sisi jalan, iaitu kawasan kurang atau sama dengan 50 m dari garis itu.",
 soalan:[
 {j:"pilih",t:"Lokus titik yang berjarak 3 cm dari sebatang garis lurus PQ yang tidak terhingga panjang ialah:",p:["Dua garis selari dengan PQ, 3 cm di setiap sisi","Satu garis selari dengan PQ pada satu sisi sahaja","Bulatan berjejari 3 cm berpusat pada PQ","Garis serenjang dengan PQ melalui titik tengah"],b:0,u:"Titik boleh berada di kedua-dua sisi PQ, jadi lokusnya dua garis selari dengan PQ."},
 {j:"nombor",t:"Dalam Rajah 1, berapakah jarak antara dua garis putus-putus (cm)?",b:6,tol:0.01,suf:"cm",u:"Setiap garis putus-putus berjarak 3 cm dari PQ, jadi jarak antara keduanya = 3 + 3 = 6 cm.",kira:()=>3+3},
 {j:"nombor",t:"Dalam Rajah 1, P berada pada salah satu garis putus-putus. Berapakah jarak P ke garis PQ (cm)?",b:3,tol:0.01,suf:"cm",u:"Garis putus-putus ialah lokus titik yang berjarak 3 cm dari PQ.",kira:()=>3},
 {j:"pilih",t:"Dua garis selari berjarak 8 cm. Lokus titik yang sama jauh dari kedua-dua garis ialah:",p:["Garis selari di tengah, 4 cm dari setiap garis","Garis selari di tengah, 8 cm dari setiap garis","Bulatan berjejari 4 cm","Garis serenjang dengan kedua-dua garis"],b:0,u:"Lokus ialah garis selari tepat di tengah, jaraknya 8 ÷ 2 = 4 cm dari setiap garis."},
 {j:"nombor",t:"Dua garis selari berjarak 9 cm. Lokus titik yang sama jauh dari kedua-duanya berjarak berapa dari salah satu garis (cm)?",b:4.5,tol:0.01,suf:"cm",u:"9 ÷ 2 = 4.5 cm.",kira:()=>9/2},
 {j:"pilih",t:"Dalam Rajah 1, dua garis putus-putus selari. Lokus titik yang sama jauh dari kedua-dua garis putus-putus ialah:",p:["Garis PQ","Bulatan berpusat di P","Garis serenjang dengan PQ","Tiada lokus"],b:0,u:"PQ berada tepat di tengah dua garis putus-putus, jadi PQ ialah lokus titik sama jauh dari keduanya."},
 {j:"nombor",t:"Sebuah pasar mesti dibina tepat 50 m dari sebatang jalan lurus. Berapakah jarak antara dua garis lokus kedudukan pasar itu (m)?",b:100,tol:0.01,suf:"m",u:"Satu garis di setiap sisi jalan, masing-masing 50 m dari jalan. Jarak antara keduanya = 50 + 50 = 100 m.",kira:()=>50+50},
 {j:"susun",t:"Susun langkah melukis lokus titik yang berjarak 3 cm dari garis PQ.",p:["Lukis garis PQ","Tandakan titik 3 cm dari PQ di satu sisi menggunakan sudut tegak","Lukis garis selari PQ melalui titik itu","Ulang di sisi bertentangan untuk garis kedua"],b:[0,1,2,3],u:"Ukur jarak serenjang, lukis garis selari, kemudian ulang di sisi lain."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang lokus titik berjarak 2 cm dari garis lurus PQ (PQ tidak terhingga panjang).",p:["Terdapat dua garis lokus","Setiap garis lokus selari dengan PQ","Jarak antara dua garis lokus ialah 4 cm","Lokus ialah satu bulatan berjejari 2 cm","Lokus ialah garis serenjang dengan PQ","Jarak antara dua garis lokus ialah 2 cm"],b:[0,1,2],u:"Dua garis selari, satu di setiap sisi, jarak antara keduanya 2 + 2 = 4 cm. Lokus bukan bulatan dan bukan garis serenjang."}},

{n:4, tempat:"Simpang Empat", sk:"8.2.1 (v) Jarak sama dari dua garis yang bersilang", lampiran:"lok4",
 kadNama:"Pembahagi Dua Sudut", kadEm:"\u{1F500}", kadFakta:"Titik pada pembahagi dua sudut sama jauh dari dua garis yang membentuk sudut itu. Jarak dikira secara serenjang, bukan condong.",
 bosKadNama:"Dua Pembahagi", bosKadEm:"\u{2795}", bosKadFakta:"Dua garis bersilang menghasilkan dua pembahagi dua sudut yang saling serenjang: satu untuk sudut kecil dan satu untuk sudut besar.",
 soalan:[
 {j:"pilih",t:"Lokus titik yang sama jauh dari dua garis lurus yang bersilang ialah:",p:["Pembahagi dua sudut antara dua garis itu","Bulatan berpusat pada titik persilangan","Garis selari dengan salah satu garis","Pembahagi dua sama serenjang salah satu garis"],b:0,u:"Titik pada pembahagi dua sudut mempunyai jarak serenjang yang sama ke kedua-dua garis."},
 {j:"pilih",t:"Dua garis lurus bersilang menghasilkan berapa garis lokus titik sama jauh dari kedua-duanya?",p:["Dua garis yang saling serenjang","Satu garis sahaja, pada sudut kecil","Empat garis yang berbeza-beza","Dua garis selari antara satu sama lain"],b:0,u:"Ada dua pembahagi dua sudut, satu bagi sudut kecil dan satu bagi sudut besar. Keduanya saling serenjang."},
 {j:"nombor",t:"Dalam Rajah 1, sudut antara garis 1 dengan garis 2 ialah 60°. Berapakah sudut antara garis 1 dengan pembahagi dua sudut mengufuk (°)?",b:30,tol:0.01,suf:"°",u:"Pembahagi dua sudut membahagi 60° kepada dua bahagian sama: 60° ÷ 2 = 30°.",kira:()=>60/2},
 {j:"nombor",t:"Dalam Rajah 1, P berada pada pembahagi dua sudut mengufuk dengan OP = 4 cm. Berapakah jarak P ke garis 1 (cm)?",b:bunda(4*sin(30),2),tol:0.01,suf:"cm",u:"Jarak serenjang = OP × sin 30° = 4 × 0.5 = 2 cm.",kira:()=>bunda(4*sin(30),2)},
 {j:"nombor",t:"Dua garis bersilang pada sudut 80°. Pembahagi dua sudut membentuk sudut berapa dengan setiap garis (°)?",b:40,tol:0.01,suf:"°",u:"80° ÷ 2 = 40°.",kira:()=>80/2},
 {j:"nombor",t:"Dalam Rajah 1, P berada pada pembahagi dua sudut mengufuk dan OP = 6 cm. Berapakah jarak P ke garis 2 (cm)?",b:bunda(6*sin(30),2),tol:0.01,suf:"cm",u:"Jarak serenjang = 6 × sin 30° = 3 cm. Nilainya sama dengan jarak ke garis 1.",kira:()=>bunda(6*sin(30),2)},
 {j:"pilih",t:"Dalam Rajah 1, P berada pada pembahagi dua sudut menegak dengan OP = 2 cm. Jarak P ke garis 1 ialah:",p:["1.73 cm","1.00 cm","2.00 cm","3.46 cm"],b:0,u:"Pembahagi dua sudut menegak membentuk sudut 60° dengan garis 1. Jarak = 2 × sin 60° = 2 × kos 30° = 1.73 cm.",kira:()=>bunda(2*kos(30),2)},
 {j:"pilih",t:"Dua jalan bertemu pada sudut 90°. Lampu jalan mesti sama jauh dari kedua-dua jalan. Lampu itu terletak pada garis yang membentuk sudut berapa dengan setiap jalan?",p:["45°","90°","30°","60°"],b:0,u:"Pembahagi dua sudut 90° membentuk 90° ÷ 2 = 45° dengan setiap jalan."}],
 bos:{j:"nombor",t:"Dua jalan bersilang pada sudut 60°. Sebuah tiang lampu berada pada pembahagi dua sudut dan berjarak 5 m dari setiap jalan. Berapakah jarak tiang dari titik persilangan (m)?",b:10,tol:0.01,suf:"m",u:"Jarak serenjang = OP × sin 30° = 5, maka OP = 5 ÷ sin 30° = 5 ÷ 0.5 = 10 m.",kira:()=>bunda(5/sin(30),2)}},

{n:5, tempat:"Harta Karun", sk:"8.2.2 Lokus yang memenuhi dua atau lebih syarat", lampiran:"lok5",
 kadNama:"Titik Persilangan", kadEm:"\u{1F5FA}\u{FE0F}", kadFakta:"Bila dua syarat mesti dipenuhi serentak, lukis lokus bagi setiap syarat. Titik yang memenuhi kedua-duanya ialah titik persilangan dua lokus itu.",
 bosKadNama:"Tiada Titik", bosKadEm:"\u{1F6AB}", bosKadFakta:"Dua lokus tidak semestinya bersilang. Jika tiada persilangan, tiada titik yang memenuhi kedua-dua syarat.",
 soalan:[
 {j:"pilih",t:"Kedudukan yang memenuhi dua syarat lokus serentak ialah:",p:["Titik persilangan kedua-dua lokus","Semua titik pada lokus yang pertama sahaja","Titik tengah antara dua pusat lokus","Gabungan semua titik dua lokus itu"],b:0,u:"Titik itu mesti berada pada lokus pertama dan lokus kedua sekali gus, iaitu titik persilangan."},
 {j:"nombor",t:"Dalam Rajah 1 (A dan B berjarak 4 cm), tetapkan r = 3 cm. Berapakah bilangan titik yang sama jauh dari A dan B serta berjarak 3 cm dari A?",b:2,tol:0.01,u:"Titik tengah AB berjarak 2 cm dari A. Oleh sebab 3 &gt; 2, bulatan memotong pembahagi dua sama serenjang pada dua titik.",kira:()=>3>2?2:0},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan r = 2 cm. Berapakah bilangan titik yang sama jauh dari A dan B serta berjarak 2 cm dari A?",b:1,tol:0.01,u:"Titik tengah AB berjarak tepat 2 cm dari A, jadi bulatan hanya menyentuh pembahagi dua sama serenjang pada satu titik.",kira:()=>2===2?1:0},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan r = 1 cm. Berapakah bilangan titik yang sama jauh dari A dan B serta berjarak 1 cm dari A?",b:0,tol:0.01,u:"Titik tengah AB berjarak 2 cm dari A. Bulatan berjejari 1 cm tidak sampai pembahagi dua sama serenjang, jadi tiada titik.",kira:()=>1<2?0:1},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan r = 3 cm. Setiap titik yang memenuhi kedua-dua syarat berjarak berapa dari garis AB (cm), 2 tempat perpuluhan?",b:bunda(Math.sqrt(9-4),2),tol:0.01,suf:"cm",u:"Jarak dari titik tengah AB ke A ialah 2 cm. Jarak dari AB = √(3² − 2²) = √5 = 2.24 cm.",kira:()=>bunda(Math.sqrt(3*3-2*2),2)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan r = 4 cm. Berapakah jarak antara dua titik yang memenuhi kedua-dua syarat (cm), 2 tempat perpuluhan?",b:bunda(2*Math.sqrt(16-4),2),tol:0.01,suf:"cm",u:"Setiap titik berjarak √(4² − 2²) = √12 = 3.46 cm dari AB, di atas dan di bawah AB. Jarak antara keduanya = 2 × 3.46 = 6.93 cm.",kira:()=>bunda(2*Math.sqrt(4*4-2*2),2)},
 {j:"pilih",t:"A dan B berjarak 6 cm. Titik yang sama jauh dari A dan B serta berjarak 3 cm dari A ialah:",p:["Satu titik, iaitu titik tengah AB","Dua titik di atas dan di bawah AB","Tiada titik","Tak terhingga banyaknya"],b:0,u:"Titik tengah AB berjarak 3 cm dari A. Jejari sama dengan jarak itu, jadi bulatan hanya menyentuh pembahagi dua sama serenjang di titik tengah.",kira:()=>3===6/2},
 {j:"susun",t:"Susun langkah menentukan lokasi harta karun yang memenuhi dua syarat.",p:["Lukis lokus bagi syarat pertama","Lukis lokus bagi syarat kedua pada rajah yang sama","Cari titik persilangan kedua-dua lokus","Tandakan titik itu sebagai lokasi harta karun"],b:[0,1,2,3],u:"Lukis dua lokus pada satu rajah, kemudian titik persilangan ialah jawapan."}],
 bos:{j:"nombor",t:"A dan B berjarak 10 cm. Titik P sama jauh dari A dan B dan berjarak 13 cm dari A. Berapakah jarak P dari garis AB (cm)?",b:12,tol:0.01,suf:"cm",u:"Jarak dari titik tengah AB ke A ialah 5 cm. Jarak dari AB = √(13² − 5²) = √144 = 12 cm.",kira:()=>Math.sqrt(13*13-5*5)}},

{n:6, tempat:"Menara Telekom", sk:"8.2.3 Masalah melibatkan lokus, termasuk jarak lebih atau kurang daripada nilai tertentu", lampiran:"lok6",
 kadNama:"Liputan", kadEm:"\u{1F4E1}", kadFakta:"Liputan menara telekom ialah kawasan di dalam bulatan. Titik pada sempadan bulatan menerima isyarat paling lemah dalam liputan itu.",
 bosKadNama:"Reka Lokasi", bosKadEm:"\u{1F4A1}", bosKadFakta:"Jurutera memilih lokasi menara dengan menggabungkan beberapa syarat lokus: jarak dari bandar, jalan raya dan tapak lapang.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, syarat ditukar kepada OP &lt; r. Apakah maksudnya bagi isyarat menara?",p:["P berada dalam liputan menara","P tepat pada sempadan liputan menara itu","P berada di luar liputan menara itu","Menara tidak boleh dikesan oleh P"],b:0,u:"OP &lt; r bermaksud P lebih dekat daripada jejari liputan, jadi P menerima isyarat."},
 {j:"nombor",t:"Dalam Rajah 1, tukar syarat kepada OP &gt; r. Berapakah jarak OP (km)?",b:7,tol:0.01,suf:"km",u:"Dalam rajah, OP &gt; r ditunjukkan dengan P pada 1.4 × 5 km = 7 km dari O.",kira:()=>5*1.4},
 {j:"nombor",t:"Isyarat sebuah menara sejauh 6 km. Berapakah luas kawasan liputan (km²), guna π = 3.142 dan 1 tempat perpuluhan?",b:bunda(PI*6*6,1),tol:0.1,suf:"km²",u:"Luas = πj² = 3.142 × 6² = 113.1 km².",kira:()=>bunda(PI*6*6,1)},
 {j:"nombor",t:"Bandar A dan B berjarak 20 km. Sebuah menara mesti sama jauh dari A dan B serta 26 km dari A. Berapakah jarak menara dari garis AB (km)?",b:24,tol:0.01,suf:"km",u:"Titik tengah AB ke A ialah 10 km. Jarak dari AB = √(26² − 10²) = √576 = 24 km.",kira:()=>Math.sqrt(26*26-10*10)},
 {j:"pilih",t:"Kawasan larangan memancing ialah semua titik kurang daripada 200 m dari sebuah jeti. Sebuah bot berada 250 m dari jeti. Bot itu berada:",p:["Di luar kawasan larangan","Di dalam kawasan larangan","Tepat pada sempadan larangan","Tepat di jeti"],b:0,u:"250 m lebih besar daripada 200 m, jadi bot di luar kawasan larangan."},
 {j:"pilih",t:"Sebuah taman mesti lebih dekat dengan sekolah A daripada sekolah B, dan kurang daripada 3 km dari A. Kawasan itu terletak:",p:["Dalam bulatan 3 km pusat A, di sebelah A pembahagi dua sama serenjang","Dalam bulatan 3 km pusat B, di sebelah B garis pembahagi AB","Di luar bulatan 3 km pusat A, di sebelah B pembahagi AB","Pada garis lurus AB sahaja, antara sekolah A dan B"],b:0,u:"Kurang daripada 3 km dari A ialah dalam bulatan berpusat A. Lebih dekat A daripada B ialah di sebelah A pembahagi dua sama serenjang AB. Kawasan itu ialah persilangan kedua-duanya."},
 {j:"nombor",t:"Sebuah menara mesti 5 km dari bandar A dan sama jauh dari dua jalan raya lurus yang bersilang di A. Berapakah bilangan lokasi menara yang mungkin?",b:4,tol:0.01,u:"Dua jalan raya bersilang mempunyai dua pembahagi dua sudut. Setiap pembahagi memotong bulatan berjejari 5 km pada dua titik. Jumlah = 2 × 2 = 4 lokasi.",kira:()=>2*2},
 {j:"nombor",t:"Titik A dan B berjarak 8 cm. Berapakah bilangan titik yang sama jauh dari A dan B serta berjarak 2 cm dari A?",b:0,tol:0.01,u:"Titik tengah AB berjarak 4 cm dari A. Bulatan berjejari 2 cm tidak sampai pembahagi dua sama serenjang, jadi tiada titik.",kira:()=>2<8/2?0:1}],
 bos:{j:"buka",
  t:"Sebuah syarikat mahu membina menara telekom baharu di sekitar sekolah awak. Menara mesti sama jauh dari dua tempat pilihan awak, dan tidak melebihi 3 km dari salah satunya.",
  arahan:"Pilih dua tempat, lukis lokus bagi setiap syarat pada satu rajah, dan tandakan kawasan yang memenuhi kedua-dua syarat. Terangkan bila tiada lokasi yang boleh dipilih.",
  u:"Jawapan TP6 yang kukuh melukis pembahagi dua sama serenjang dan bulatan dengan betul, menandakan kawasan atau titik persilangan, dan menerangkan bahawa jika jarak antara dua tempat lebih daripada dua kali jejari, tiada titik yang memenuhi kedua-dua syarat."}}
];

module.exports = {
  id:"m3b8", tingkatan:3, kod:"8.0 Lokus dalam Dua Dimensi",
  tajuk:"Menara Telekom",
  subtajuk:"Matematik Ting. 3 · Bab 8 Lokus dalam Dua Dimensi",
  spi:SPI,
  ulasan:{
   1:"{n} dapat menerangkan maksud lokus dan mengenal lokus titik berjarak tetap dari satu titik sebagai bulatan. Langkah seterusnya ialah memahami lokus bagi titik yang sama jauh dari dua titik.",
   2:"{n} memahami lokus titik sama jauh dari dua titik dan lokus titik berjarak tetap dari garis lurus. Perlu lebih latihan membina lokus dengan jangka lukis sebelum bergerak ke TP3.",
   3:"{n} boleh memerihal dan membina lokus bagi jarak tetap dari satu titik, dua titik, satu garis dan dua garis selari, serta lokus sama jauh dari dua garis bersilang. Galakkan menyemak jarak serenjang pada rajah.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah menggunakan lokus, termasuk menentukan lokus yang memenuhi dua syarat dan mengira jarak menggunakan sin dan teorem Pythagoras. Seterusnya latih masalah dengan syarat kurang atau lebih daripada.",
   5:"{n} dapat menentukan lokus yang memenuhi dua atau lebih syarat, menentukan bilangan titik persilangan dan mengira jarak titik itu dari garis. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya menyelesaikan masalah bukan rutin yang melibatkan lokus dengan syarat lebih atau kurang daripada nilai tertentu, dan mereka bentuk lokasi yang memenuhi beberapa syarat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Lokus dalam Dua Dimensi. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyebut apa yang dimaksudkan dengan jarak tetap dari satu titik, dengan bimbingan rakan sebaya."
  },
  lampiran:{ lok1:R_LOK1, lok2:R_LOK2, lok3:R_LOK3, lok4:R_LOK4, lok5:R_LOK5, lok6:R_LOK6 },
  aras:ARAS
};
