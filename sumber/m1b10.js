/* Sumber kandungan — Matematik KSSM Tingkatan 1, Bab 10 Perimeter dan Luas.
   Fail ini disunting tangan. Jalankan `node bina.js m1b10` untuk menyemaknya
   dan menghasilkan bank-m1b10.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 1, Bahagian Pembangunan Kurikulum, muka 71 (dskp/matematik-t1.pdf).
   DSKP Tingkatan 1 menulis satu jadual Standard Prestasi bagi bab ini
   (tahap 1 hingga 6), jadi semua enam tahap diambil terus. Tahap 1 hanya
   menyebut perimeter kerana jadual asal begitu.

   Rajah interaktif ialah widget `t1bentuk` dalam widget-m1b10.js. Semua jawapan
   berangka dikira dengan kod dalam medan `kira` dan dibandingkan oleh
   tools/semak-jawapan.js. */
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);

const SPI = [
"Mempamerkan pengetahuan asas tentang perimeter.",
"Mempamerkan kefahaman tentang perimeter dan luas.",
"Mengaplikasikan kefahaman tentang perimeter dan luas untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang perimeter dan luas dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang perimeter dan luas dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang perimeter dan luas dalam konteks penyelesaian masalah bukan rutin."];

/* ---------- lampiran: rajah bentuk interaktif ---------- */

const bt = (spec, kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t1bentuk", kapsyen, alt }, spec, extra || {});
const R_BT1 = bt({ mod: "empat", pMaks: 10, lMaks: 6, p: 6, l: 4 },
  "Rajah 1 · Segi empat tepat pada kertas grid 1 cm. Gerakkan panjang dan lebar, lihat perimeter (garis merah) dan luas (petak hijau).",
  "Rajah interaktif segi empat tepat pada grid petak 1 sentimeter; gelongsor panjang dan lebar menukar saiz dan menunjukkan perimeter dan luas");
const R_BT2 = bt({ mod: "anggar", b: 0, k: 0 },
  "Rajah 1 · Kertas grid bersisi 1 unit. Pilih bentuk, kemudian tukar langkah untuk mengira petak penuh, petak separa dan anggaran luas.",
  "Rajah interaktif segi tiga, segi empat selari atau lelayang pada grid petak 1 unit; gelongsor langkah menunjukkan petak penuh, petak separa dan anggaran luas");
const R_BT3 = bt({ mod: "terbit", b: 0, a: 5, t: 4, s: 2 },
  "Rajah 1 · Segi empat selari atau segi tiga dibandingkan dengan segi empat tepat (putus-putus) yang sama asas dan tinggi.",
  "Rajah interaktif segi empat selari atau segi tiga dengan asas dan tinggi boleh diubah; segi empat tepat berputus-putus menunjukkan luas asas darab tinggi");
const R_BT4 = bt({ mod: "lt", bentuk: "trapezium", a: 3, b: 7, t: 4, l: 0 },
  "Rajah 1 · Trapezium dengan sisi selari a dan b. Kira luas dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif trapezium dengan dua sisi selari dan tinggi boleh diubah, dan salinan yang diputar 180 darjah membentuk segi empat selari",
  { cabar: true });
const R_BT5 = bt({ mod: "gabung", varian: "L", sw: 3, sh: 2 },
  "Rajah 1 · Segi empat tepat 8 cm × 6 cm dengan satu sudut dibuang. Kira dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif bentuk L yang terhasil daripada segi empat tepat 8 kali 6 sentimeter dengan sudut dibuang; gelongsor menukar saiz sudut yang dibuang",
  { cabar: true });
const R_BT6 = bt({ mod: "kaitan", p: 4 },
  "Rajah 1 · Perimeter tetap 24 cm. Tukar panjang dan lihat luas berubah.",
  "Rajah interaktif segi empat tepat berperimeter tetap 24 sentimeter; gelongsor panjang menukar lebar dan carta palang menunjukkan luas bagi setiap panjang");

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Padang Bola", sk:"10.1.1 Perimeter pelbagai bentuk", lampiran:"bt1",
 kadNama:"Sekeliling", kadEm:"\u{1F3DF}\u{FE0F}", kadFakta:"Perimeter bermaksud panjang sekeliling sesuatu bentuk. Trek larian sekolah sering dikira dengan perimeter, satu pusingan penuh ialah satu perimeter.",
 bosKadNama:"Pagar Kebun", bosKadEm:"\u{1F33E}", bosKadFakta:"Petani mengira perimeter kebun untuk tahu berapa panjang pagar yang perlu dibeli. Salah kira bermakna pagar terlebih atau terkurang.",
 soalan:[
 {j:"pilih",t:"Perimeter sesuatu bentuk ialah:",p:["Jumlah panjang semua sisi di sekeliling bentuk","Ukuran ruang yang diliputi di dalam bentuk itu","Panjang sisi yang paling panjang pada bentuk itu","Bilangan sudut yang terdapat pada bentuk itu"],b:0,u:"Perimeter ialah jumlah panjang semua sisi di sekeliling bentuk. Ruang di dalam bentuk ialah luas."},
 {j:"nombor",t:"Sebuah segi empat sama bersisi 7 cm. Berapakah perimeternya?",b:28,tol:0.01,suf:"cm",u:"Segi empat sama mempunyai 4 sisi sama panjang. Perimeter = 4 × 7 = 28 cm.",kira:()=>4*7},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan panjang 8 cm dan lebar 3 cm. Berapakah perimeter segi empat tepat itu?",b:22,tol:0.01,suf:"cm",u:"Perimeter = 2 × (8 + 3) = 2 × 11 = 22 cm.",kira:()=>2*(8+3)},
 {j:"pilih",t:"Unit yang sesuai bagi perimeter ialah:",p:["Sentimeter (cm)","Sentimeter persegi (cm²)","Sentimeter padu (cm³)","Kilogram per meter (kg/m)"],b:0,u:"Perimeter ialah ukuran panjang, jadi unitnya cm atau m. Unit persegi ialah untuk luas."},
 {j:"nombor",t:"Sebuah padang bola berukuran 100 m × 64 m. Murid berlari satu pusingan mengelilingi tepi padang. Berapakah jarak larian itu?",b:328,tol:0.01,suf:"m",u:"Perimeter = 2 × (100 + 64) = 2 × 164 = 328 m.",kira:()=>2*(100+64)},
 {j:"nombor",t:"Sebuah segi tiga sama sisi mempunyai sisi 9 cm. Berapakah perimeternya?",b:27,tol:0.01,suf:"cm",u:"Tiga sisi sama panjang. Perimeter = 3 × 9 = 27 cm.",kira:()=>3*9},
 {j:"nombor",t:"Perimeter sebuah segi empat tepat ialah 20 cm dan panjangnya 6 cm. Berapakah lebarnya?",b:4,tol:0.01,suf:"cm",u:"Panjang + lebar = 20 ÷ 2 = 10 cm. Lebar = 10 − 6 = 4 cm.",kira:()=>20/2-6},
 {j:"susun",t:"Susun langkah mencari perimeter segi empat tepat.",p:["Tulis panjang dan lebar","Tambah panjang dengan lebar","Darab hasil tambah itu dengan 2","Tulis jawapan bersama unit cm"],b:[0,1,2,3],u:"Panjang dan lebar dicatat dahulu, ditambah, digandakan dua, dan jawapan diberi unit panjang."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang perimeter.",p:["Perimeter segi empat sama ialah 4 kali panjang satu sisi","Perimeter diukur dalam unit panjang seperti cm atau m","Bentuk yang bersisi lengkung juga ada perimeter","Perimeter sentiasa sama nilainya dengan luas bentuk itu","Perimeter segi empat tepat ialah panjang darab lebar","Perimeter dinyatakan dalam unit persegi seperti cm²"],b:[0,1,2],u:"Perimeter ialah jumlah panjang sekeliling, jadi unitnya panjang. Luas ialah panjang darab lebar, dalam unit persegi, dan nilainya tidak semestinya sama dengan perimeter."}},

{n:2, tempat:"Kertas Grid", sk:"10.2.1 Menganggar luas dengan kertas grid", lampiran:"bt2",
 kadNama:"Petak Separa", kadEm:"\u{1F9EE}", kadFakta:"Bila bentuk tidak sekata, pakar sering menganggar luas dengan grid. Makin kecil petak grid, makin hampir anggaran dengan luas sebenar.",
 bosKadNama:"Luas Hutan", bosKadEm:"\u{1F332}", bosKadFakta:"Pemetaan hutan menggunakan grid pada peta untuk menganggar luas kawasan yang bentuknya tidak sekata, kerana ukuran terus mustahil dibuat.",
 soalan:[
 {j:"pilih",t:"Bagaimanakah luas bentuk tidak sekata dianggar pada kertas grid?",p:["Kira petak penuh, dan dua petak separa dikira satu petak","Kira semua petak yang disentuh oleh bentuk sebagai petak penuh","Kira petak separa sahaja dan abaikan semua petak penuh","Ukur perimeter, kemudian darabkan hasilnya dengan dua"],b:0,u:"Petak penuh dikira satu setiap satu. Petak separa dikira kira-kira setengah, jadi dua petak separa bersamaan satu petak."},
 {j:"nombor",t:"Dalam Rajah 1, pilih Segi tiga dan langkah 'petak penuh'. Berapakah bilangan petak penuh dalam segi tiga itu?",b:10,tol:0.01,u:"Rajah menunjukkan 10 petak hijau yang berada sepenuhnya di dalam segi tiga.",kira:()=>10},
 {j:"nombor",t:"Dalam Rajah 1, pilih Segi tiga dan langkah '+ separa'. Berapakah bilangan petak separa?",b:5,tol:0.01,u:"Rajah menunjukkan 5 petak kuning yang hanya separuh berada dalam segi tiga.",kira:()=>5},
 {j:"nombor",t:"Dalam Rajah 1, pilih Segi tiga dan langkah 'anggaran'. Berapakah anggaran luas segi tiga itu?",b:12.5,tol:0.05,suf:"unit²",u:"Anggaran = 10 + 5 ÷ 2 = 12.5 unit².",kira:()=>10+5/2},
 {j:"nombor",t:"Dalam Rajah 1, pilih Segi empat selari dan langkah 'anggaran'. Berapakah anggaran luasnya?",b:16,tol:0.05,suf:"unit²",u:"Ada 10 petak penuh dan 12 petak separa. Anggaran = 10 + 12 ÷ 2 = 16 unit².",kira:()=>10+12/2},
 {j:"pilih",t:"Bagi lelayang dalam Rajah 1, anggaran luas berbanding luas sebenar ½ × 6 × 6 ialah:",p:["Sama, iaitu 18 unit² juga","Anggaran lebih kecil sedikit","Anggaran lebih besar sedikit","Tidak dapat dibandingkan"],b:0,u:"Anggaran = 8 + 20 ÷ 2 = 18 unit², dan luas sebenar = ½ × 6 × 6 = 18 unit². Anggaran yang baik hampir dengan nilai sebenar.",kira:()=>(8+20/2)===0.5*6*6},
 {j:"pilih",t:"Mengapakah kertas grid sesuai untuk menganggar luas bentuk melengkung?",p:["Petak yang dipotong lengkung boleh dikira setengah","Kerana lengkung sentiasa mempunyai luas tepat 1 unit²","Kerana bentuk melengkung tiada perimeter langsung","Kerana petak grid sentiasa lebih besar daripada bentuk"],b:0,u:"Bentuk melengkung tiada rumus mudah, jadi petak penuh dikira dan petak separa dikira setengah untuk mendapat anggaran."},
 {j:"nombor",t:"Sebuah bentuk meliputi 14 petak penuh dan 8 petak separa pada grid 1 cm². Berapakah anggaran luasnya?",b:18,tol:0.05,suf:"cm²",u:"Anggaran = 14 + 8 ÷ 2 = 14 + 4 = 18 cm².",kira:()=>14+8/2}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang menganggar luas dengan grid.",p:["Petak penuh dikira satu petak setiap satu","Dua petak separa dikira bersamaan satu petak","Grid petak lebih kecil memberi anggaran lebih tepat","Anggaran dinilai dengan membandingkannya dengan nilai sebenar","Anggaran sentiasa sama tepat dengan luas sebenar","Petak separa boleh diabaikan sepenuhnya"],b:[0,1,2,3],u:"Anggaran hanya hampir dengan luas sebenar dan mungkin berbeza sedikit. Petak separa tidak boleh diabaikan kerana ia menyumbang kepada luas."}},

{n:3, tempat:"Layang-layang Kertas", sk:"10.2.2 Rumus luas segi empat selari dan segi tiga", lampiran:"bt3",
 kadNama:"Asas dan Tinggi", kadEm:"\u{1F4D0}", kadFakta:"Tinggi mesti diukur serenjang dengan asas, bukan sepanjang sisi condong. Itulah kesilapan paling biasa apabila mengira luas segi empat selari.",
 bosKadNama:"Potong Dua", bosKadEm:"✂\u{FE0F}", bosKadFakta:"Potong segi empat tepat mengikut pepenjuru dan dua segi tiga yang sama saiz terhasil. Sebab itulah luas segi tiga separuh daripada asas darab tinggi.",
 soalan:[
 {j:"pilih",t:"Luas sebuah segi empat selari dikira dengan:",p:["Asas × tinggi yang serenjang","Asas × panjang sisi condong","½ × asas × tinggi serenjang","2 × (asas + tinggi serenjang)"],b:0,u:"Segi empat selari boleh disusun semula menjadi segi empat tepat dengan asas dan tinggi serenjang yang sama, jadi luas = asas × tinggi."},
 {j:"nombor",t:"Dalam Rajah 1, pilih segi empat selari dengan asas 6 cm dan tinggi 3 cm. Berapakah luasnya?",b:18,tol:0.01,suf:"cm²",u:"Luas = asas × tinggi = 6 × 3 = 18 cm².",kira:()=>6*3},
 {j:"pilih",t:"Dalam Rajah 1 (segi empat selari), asas dan tinggi dikekalkan tetapi puncak digerakkan ke kanan. Luas segi empat selari itu:",p:["Kekal sama","Bertambah","Berkurang","Menjadi sifar"],b:0,u:"Luas hanya bergantung pada asas dan tinggi serenjang. Menggerakkan puncak hanya mencondongkan bentuk, luasnya tidak berubah."},
 {j:"pilih",t:"Luas sebuah segi tiga dikira dengan:",p:["½ × asas × tinggi","Asas × tinggi","½ × (asas + tinggi)","Asas + tinggi + sisi condong"],b:0,u:"Dua segi tiga yang sama saiz membentuk segi empat selari, jadi luas satu segi tiga ialah separuh daripada asas × tinggi."},
 {j:"nombor",t:"Sebuah segi tiga mempunyai asas 10 cm dan tinggi 6 cm. Berapakah luasnya?",b:30,tol:0.01,suf:"cm²",u:"Luas = ½ × 10 × 6 = 30 cm².",kira:()=>0.5*10*6},
 {j:"nombor",t:"Dalam Rajah 1, pilih segi tiga dengan asas 6 cm dan tinggi 5 cm. Berapakah luasnya?",b:15,tol:0.01,suf:"cm²",u:"Luas = ½ × 6 × 5 = 15 cm².",kira:()=>0.5*6*5},
 {j:"nombor",t:"Luas sebuah segi empat selari ialah 48 cm² dan asasnya 8 cm. Berapakah tinggi serenjangnya?",b:6,tol:0.01,suf:"cm",u:"Tinggi = luas ÷ asas = 48 ÷ 8 = 6 cm.",kira:()=>48/8},
 {j:"susun",t:"Susun langkah menerbitkan rumus luas segi tiga daripada segi empat tepat.",p:["Lukis segi empat tepat dengan asas dan tinggi yang sama","Potong segi empat tepat itu mengikut pepenjuru","Dua segi tiga yang sama saiz terhasil","Luas satu segi tiga ialah separuh luas segi empat tepat"],b:[0,1,2,3],u:"Segi empat tepat dipotong pepenjuru menjadi dua segi tiga yang sama, jadi luas segi tiga = ½ × asas × tinggi."}],
 bos:{j:"nombor",t:"Dalam Rajah 1, pilih segi empat selari dengan asas 6 cm, tinggi 3 cm dan puncak 4 ke kanan, jadi sisi condongnya 5 cm. Berapakah perimeter segi empat selari itu?",b:22,tol:0.05,suf:"cm",u:"Sisi condong ialah √(4² + 3²) = 5 cm. Perimeter = 2 × (6 + 5) = 22 cm. Perimeter guna sisi condong, luas guna tinggi serenjang.",kira:()=>2*(6+Math.sqrt(4*4+3*3))}},

{n:4, tempat:"Kebun Trapezium", sk:"10.2.2 / 10.2.3 Luas trapezium dan lelayang", lampiran:"bt4",
 kadNama:"Dua Sisi Selari", kadEm:"\u{1F33B}", kadFakta:"Trapezium ada tepat sepasang sisi selari. Purata dua sisi selari itu didarab dengan tinggi memberi luasnya.",
 bosKadNama:"Tanah Pusaka", bosKadEm:"\u{1F3E1}", bosKadFakta:"Banyak tanah kebun berbentuk trapezium kerana mengikut tebing sungai atau jalan. Tuan tanah perlu tahu luas untuk menaksir nilai dan cukai.",
 soalan:[
 {j:"pilih",t:"Luas sebuah trapezium dikira dengan:",p:["½ × (jumlah dua sisi selari) × tinggi","½ × asas × tinggi pada satu sisi selari","Hasil tambah dua sisi selari darab tinggi","Hasil tambah semua sisi × tinggi"],b:0,u:"Luas trapezium = ½ × (a + b) × tinggi, dengan a dan b ialah dua sisi selari."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan sisi atas 3 cm, sisi bawah 7 cm dan tinggi 4 cm. Berapakah luas trapezium itu?",b:20,tol:0.01,suf:"cm²",u:"Luas = ½ × (3 + 7) × 4 = ½ × 10 × 4 = 20 cm².",kira:()=>0.5*(3+7)*4},
 {j:"nombor",t:"Sebuah trapezium mempunyai sisi selari 5 cm dan 9 cm, dan tinggi 4 cm. Berapakah luasnya?",b:28,tol:0.01,suf:"cm²",u:"Luas = ½ × (5 + 9) × 4 = 28 cm².",kira:()=>0.5*(5+9)*4},
 {j:"pilih",t:"Dalam Rajah 1, salinan trapezium yang diputar 180° bercantum dengan trapezium asal. Bentuk gabungan itu ialah:",p:["Segi empat selari dengan asas sepanjang (a + b)","Segi tiga dengan asas sama dengan (a + b)","Lelayang dengan pepenjuru masing-masing (a + b)","Trapezium yang sama bentuk tetapi lebih besar"],b:0,u:"Dua trapezium yang sama membentuk segi empat selari beralas (a + b). Luas satu trapezium ialah separuh daripadanya."},
 {j:"nombor",t:"Sebuah lelayang mempunyai pepenjuru 10 cm dan 6 cm. Berapakah luasnya?",b:30,tol:0.01,suf:"cm²",u:"Luas lelayang = ½ × hasil darab dua pepenjuru = ½ × 10 × 6 = 30 cm².",kira:()=>0.5*10*6},
 {j:"nombor",t:"Luas sebuah lelayang ialah 48 cm² dan satu pepenjurunya 12 cm. Berapakah panjang pepenjuru yang satu lagi?",b:8,tol:0.01,suf:"cm",u:"½ × 12 × d = 48, jadi 6d = 48 dan d = 8 cm.",kira:()=>48*2/12},
 {j:"nombor",t:"Luas sebuah trapezium ialah 36 cm². Sisi selarinya 5 cm dan 7 cm. Berapakah tingginya?",b:6,tol:0.01,suf:"cm",u:"½ × (5 + 7) × t = 36, jadi 6t = 36 dan t = 6 cm.",kira:()=>36/(0.5*(5+7))},
 {j:"pilih",t:"Antara bentuk berikut, yang manakah mempunyai luas 24 cm²?",p:["Trapezium selari 5 dan 7, tinggi 4 cm","Lelayang berpepenjuru 6 cm dan 6 cm","Segi tiga beralas 8 cm dan tinggi 5 cm","Segi empat selari beralas 5 cm dan tinggi 6 cm"],b:0,u:"Trapezium: ½ × 12 × 4 = 24. Lelayang: 18. Segi tiga: 20. Segi empat selari: 30. Hanya trapezium ialah 24 cm².",kira:()=>0.5*(5+7)*4===24}],
 bos:{j:"nombor",t:"Sebidang tanah berbentuk trapezium mempunyai sisi selari 12 m dan 18 m, dengan jarak antara kedua-duanya 10 m. Rumput dipasang pada harga RM4 satu meter persegi. Berapakah kos memasang rumput di seluruh tanah itu (RM)?",b:600,tol:0.01,u:"Luas = ½ × (12 + 18) × 10 = 150 m². Kos = 150 × 4 = RM600.",kira:()=>0.5*(12+18)*10*4}},

{n:5, tempat:"Pelan Rumah", sk:"10.2.3 Luas dan perimeter bentuk gabungan", lampiran:"bt5",
 kadNama:"Bahagi dan Cantum", kadEm:"\u{1F9E9}", kadFakta:"Bentuk gabungan dikira dengan memecahkannya kepada bentuk yang kita tahu rumusnya, atau dengan menolak bahagian yang dibuang daripada bentuk besar.",
 bosKadNama:"Kos Pagar", bosKadEm:"\u{1F4B0}", bosKadFakta:"Kontraktor mengira perimeter untuk kos pagar dan luas untuk kos rumput, jubin atau cat. Dua ukuran berbeza untuk dua jenis kos.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, sudut yang dibuang berukuran 3 cm × 2 cm daripada segi empat tepat 8 cm × 6 cm. Berapakah luas bentuk L yang tinggal?",b:42,tol:0.01,suf:"cm²",u:"Luas = 8 × 6 − 3 × 2 = 48 − 6 = 42 cm².",kira:()=>8*6-3*2},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan sudut yang dibuang 4 cm × 3 cm. Berapakah luas bentuk L itu?",b:36,tol:0.01,suf:"cm²",u:"Luas = 48 − 4 × 3 = 48 − 12 = 36 cm².",kira:()=>8*6-4*3},
 {j:"pilih",t:"Dalam Rajah 1, sudut dibuang daripada penjuru segi empat tepat. Perimeter bentuk L berbanding perimeter segi empat tepat asal 8 cm × 6 cm ialah:",p:["Sama, iaitu 28 cm","Lebih kecil, kerana sebahagian sisi dibuang","Lebih besar, kerana ada sisi baharu","Separuh daripada perimeter asal"],b:0,u:"Dua sisi baharu yang terhasil bersamaan dengan dua sisi yang dibuang, jadi perimeter kekal 2 × (8 + 6) = 28 cm.",kira:()=>2*(8+6)===28},
 {j:"nombor",t:"Dalam Rajah 1, berapakah perimeter bentuk L itu, walau apa pun saiz sudut yang dibuang?",b:28,tol:0.01,suf:"cm",u:"Perimeter kekal sama dengan segi empat tepat asal: 2 × (8 + 6) = 28 cm.",kira:()=>2*(8+6)},
 {j:"nombor",t:"Sebuah pelan rumah terdiri daripada segi empat tepat 10 m × 6 m dan segi tiga di atas sisi 10 m dengan tinggi 4 m. Berapakah luas keseluruhannya?",b:80,tol:0.01,suf:"m²",u:"Segi empat tepat = 10 × 6 = 60 m². Segi tiga = ½ × 10 × 4 = 20 m². Jumlah = 80 m².",kira:()=>10*6+0.5*10*4},
 {j:"nombor",t:"Bilik berbentuk L diperoleh daripada segi empat tepat 9 m × 7 m dengan sudut 4 m × 3 m dibuang. Jubin berharga RM25 satu meter persegi. Berapakah kos jubin seluruh bilik (RM)?",b:1275,tol:0.01,u:"Luas = 9 × 7 − 4 × 3 = 63 − 12 = 51 m². Kos = 51 × 25 = RM1 275.",kira:()=>(9*7-4*3)*25},
 {j:"nombor",t:"Dinding sebuah pondok berbentuk segi empat tepat lebar 6 m dan tinggi 3 m, dengan bumbung segi tiga tinggi 2 m di atasnya. Berapakah luas muka depan pondok itu?",b:24,tol:0.01,suf:"m²",u:"Segi empat tepat = 6 × 3 = 18 m². Segi tiga = ½ × 6 × 2 = 6 m². Jumlah = 24 m².",kira:()=>6*3+0.5*6*2},
 {j:"susun",t:"Susun langkah mencari luas bentuk gabungan.",p:["Bahagikan bentuk kepada bentuk asas","Cari luas setiap bentuk asas","Tambah atau tolak luas-luas itu","Tulis jawapan bersama unit persegi"],b:[0,1,2,3],u:"Pecahkan kepada bentuk yang diketahui rumusnya, kira setiap satu, gabungkan, dan sertakan unit persegi."}],
 bos:{j:"nombor",t:"Sebuah padang berbentuk L diperoleh daripada segi empat tepat 50 m × 30 m dengan sudut 20 m × 10 m dibuang. Pagar mengelilingi padang pada harga RM12 satu meter, dan rumput pada harga RM3 satu meter persegi. Berapakah jumlah kos pagar dan rumput (RM)?",b:5820,tol:0.01,u:"Perimeter = 2 × (50 + 30) = 160 m, kos pagar = 160 × 12 = RM1 920. Luas = 50 × 30 − 20 × 10 = 1 300 m², kos rumput = 1 300 × 3 = RM3 900. Jumlah = RM5 820.",kira:()=>2*(50+30)*12+(50*30-20*10)*3}},

{n:6, tempat:"Reka Reban", sk:"10.3.1 / 10.3.2 Perkaitan antara perimeter dan luas", lampiran:"bt6",
 kadNama:"Perimeter Sama", kadEm:"\u{1F414}", kadFakta:"Dua bentuk boleh ada perimeter sama tetapi luas jauh berbeza. Segi empat sama memberi luas paling besar bagi perimeter yang tetap.",
 bosKadNama:"Reka Sendiri", bosKadEm:"✏\u{FE0F}", bosKadFakta:"Jurureka bermula dengan kekangan seperti panjang pagar atau bajet, kemudian mencari ukuran yang paling berbaloi. Itulah matematik dalam dunia sebenar.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, perimeter tetap 24 cm. Tetapkan panjang 6 cm. Berapakah luas segi empat tepat itu?",b:36,tol:0.01,suf:"cm²",u:"Lebar = 12 − 6 = 6 cm. Luas = 6 × 6 = 36 cm².",kira:()=>6*(12-6)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan panjang 11 cm. Berapakah luas segi empat tepat itu?",b:11,tol:0.01,suf:"cm²",u:"Lebar = 12 − 11 = 1 cm. Luas = 11 × 1 = 11 cm².",kira:()=>11*(12-11)},
 {j:"pilih",t:"Dalam Rajah 1, apabila perimeter tetap 24 cm, luas paling besar diperoleh apabila panjang ialah:",p:["Ukuran 6 cm × 6 cm","Ukuran 8 × 4 cm","Ukuran 10 cm × 2 cm","Ukuran 11 cm × 1 cm"],b:0,u:"Pada panjang 6 cm, lebar juga 6 cm dan luas ialah 36 cm², paling besar. Bentuk yang lebih memanjang mempunyai luas lebih kecil."},
 {j:"pilih",t:"Dua segi empat tepat mempunyai perimeter yang sama. Pernyataan yang benar ialah:",p:["Luas kedua-duanya mungkin berbeza","Luas kedua-duanya mesti sama","Yang lebih panjang sentiasa luas lebih besar","Luas kedua-duanya sentiasa sama dengan perimeter"],b:0,u:"Pada perimeter 24 cm, ukuran 6 × 6 memberi 36 cm² tetapi 10 × 2 memberi 20 cm². Perimeter sama tidak bermaksud luas sama."},
 {j:"nombor",t:"Seutas tali sepanjang 40 m digunakan membentuk segi empat sama. Berapakah luas kawasan yang dikelilingi tali itu?",b:100,tol:0.01,suf:"m²",u:"Sisi = 40 ÷ 4 = 10 m. Luas = 10 × 10 = 100 m².",kira:()=>(40/4)*(40/4)},
 {j:"nombor",t:"Perimeter sebuah segi empat tepat ialah 36 cm dan lebarnya 5 cm. Berapakah luasnya?",b:65,tol:0.01,suf:"cm²",u:"Panjang = 36 ÷ 2 − 5 = 13 cm. Luas = 13 × 5 = 65 cm².",kira:()=>(36/2-5)*5},
 {j:"nombor",t:"Luas sebuah segi empat sama ialah 64 m². Berapakah perimeternya?",b:32,tol:0.01,suf:"m",u:"Sisi = √64 = 8 m. Perimeter = 4 × 8 = 32 m.",kira:()=>4*Math.sqrt(64)},
 {j:"pilih",t:"Seutas dawai 20 m dibengkokkan menjadi segi empat tepat. Ukuran yang memberi luas paling besar ialah:",p:["5 m × 5 m","8.5 m × 1.5 m","7 × 3 m","9.5 m × 0.5 m"],b:0,u:"Luas: 5 × 5 = 25, 7 × 3 = 21, 8.5 × 1.5 = 12.75, 9.5 × 0.5 = 4.75. Segi empat sama memberi luas paling besar.",kira:()=>Math.max(5*5,8.5*1.5,7*3,9.5*0.5)===25}],
 bos:{j:"buka",
  t:"Awak ada 24 m dawai pagar untuk membina reban ayam berbentuk segi empat tepat. Awak mahu ayam-ayam mendapat ruang yang paling luas.",
  arahan:"Cari sekurang-kurangnya lima ukuran yang mungkin dan kira luas setiap satu dalam jadual. Nyatakan ukuran yang memberi ruang paling luas dan terangkan kenapa. Kemudian bandingkan dengan reban berbentuk segi empat tepat yang sangat panjang dan sempit.",
  u:"Jawapan TP6 yang kukuh memberi jadual ukuran dengan luas yang dikira betul, mengenal pasti segi empat sama 6 m × 6 m sebagai luas paling besar (36 m²), dan menerangkan bahawa bentuk yang semakin memanjang mempunyai luas yang semakin kecil walaupun perimeter sama."}}
];

module.exports = {
  id:"m1b10", tingkatan:1, kod:"10.0 Perimeter dan Luas",
  tajuk:"Reka Reban",
  subtajuk:"Matematik Ting. 1 · Bab 10 Perimeter dan Luas",
  spi:SPI,
  ulasan:{
   1:"{n} dapat menerangkan maksud perimeter dan mengira perimeter bentuk mudah seperti segi empat tepat dan segi empat sama. Langkah seterusnya ialah memahami perbezaan antara perimeter dan luas.",
   2:"{n} memahami perimeter dan luas serta boleh menganggar luas bentuk pada kertas grid dengan mengira petak penuh dan petak separa. Perlu lebih latihan menggunakan rumus luas sebelum bergerak ke TP3.",
   3:"{n} boleh menggunakan rumus luas segi empat selari dan segi tiga dengan betul, termasuk mengenal tinggi serenjang. Galakkan menyemak bahawa tinggi tidak sama dengan sisi condong.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah melibatkan luas trapezium, lelayang, segi tiga dan segi empat selari, termasuk mencari tinggi atau pepenjuru yang hilang. Seterusnya latih bentuk gabungan.",
   5:"{n} dapat menyelesaikan masalah kompleks yang melibatkan perimeter dan luas bentuk gabungan, termasuk kos pagar dan kos jubin. Sudah bersedia untuk masalah bukan rutin dan reka bentuk sendiri.",
   6:"{n} berjaya menyelesaikan masalah bukan rutin tentang perkaitan antara perimeter dan luas, dan boleh menjelaskan ukuran yang memberi luas paling besar. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Perimeter dan Luas. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menerangkan perbezaan perimeter (sekeliling) dan luas (ruang di dalam), dengan bimbingan rakan sebaya."
  },
  lampiran:{ bt1:R_BT1, bt2:R_BT2, bt3:R_BT3, bt4:R_BT4, bt5:R_BT5, bt6:R_BT6 },
  aras:ARAS
};
