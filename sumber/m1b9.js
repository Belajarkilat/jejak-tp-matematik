/* Sumber kandungan — Matematik KSSM Tingkatan 1, Bab 9 Poligon Asas.
   Fail ini disunting tangan. Jalankan `node bina.js m1b9` untuk menyemaknya
   dan menghasilkan bank-m1b9.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 1, Bahagian Pembangunan Kurikulum, muka 68 (dskp/matematik-t1.pdf).
   DSKP Tingkatan 1 menulis satu jadual Standard Prestasi bagi bab ini
   (tahap 1 hingga 6), jadi semua enam tahap diambil terus. Tahap 1 dan 2
   dipecahkan kepada dua ayat kerana jadual asal menyusunnya dalam dua lajur.

   Rajah interaktif ialah widget `t1poligon` dalam widget-m1b9.js. Semua jawapan
   berangka dikira dengan kod dalam medan `kira` dan dibandingkan oleh
   tools/semak-jawapan.js. */

const SPI = [
"Mempamerkan pengetahuan asas tentang poligon.",
"Mempamerkan kefahaman tentang segi tiga dan sisi empat.",
"Mengaplikasikan kefahaman tentang garis dan sudut untuk melaksanakan tugasan mudah yang berkaitan dengan sudut pedalaman dan sudut peluaran segi tiga dan sisi empat.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang segi tiga dan sisi empat dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang segi tiga dan sisi empat dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang segi tiga dan sisi empat dalam konteks penyelesaian masalah bukan rutin."];

/* ---------- lampiran: rajah poligon interaktif ---------- */

const pol = (spec, kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t1poligon", kapsyen, alt }, spec, extra || {});

const R_POL1 = pol({ mod: "poligon", ns: [3, 4, 5, 6, 7, 8, 9, 10], i: 3 },
  "Rajah 1 · Gerakkan gelongsor untuk menukar bilangan sisi. Garis merah ialah pepenjuru dari bucu A.",
  "Rajah interaktif poligon sekata dengan bucu berlabel; gelongsor menukar bilangan sisi dari 3 hingga 10 dan menunjukkan bilangan bucu, sisi dan pepenjuru");
const R_POL2 = pol({ mod: "segitiga", pasang: [[60, 60], [50, 50], [40, 70], [30, 60], [45, 45], [35, 105], [50, 60], [25, 25]], i: 1 },
  "Rajah 1 · Gerakkan gelongsor untuk memilih segi tiga 1 hingga 8. Garis kecil pada sisi menunjukkan sisi sama panjang.",
  "Rajah interaktif lapan segi tiga berbeza dengan sudut A, B dan C, jenis sisi, jenis sudut dan bilangan paksi simetri; gelongsor memilih segi tiga");
const R_POL3 = pol({ mod: "peluaran", pasang: [[40, 70], [50, 60], [30, 100], [65, 45], [35, 85], [55, 75]], i: 1 },
  "Rajah 1 · Sisi AB dipanjangkan ke D. Pilih segi tiga dengan gelongsor dan bandingkan sudut peluaran CBD dengan ∠A + ∠C.",
  "Rajah interaktif segi tiga ABC dengan sisi AB dipanjangkan ke D; sudut peluaran CBD dibandingkan dengan jumlah sudut A dan C");
const R_POL4 = pol({ mod: "sisiempat", bentuk: ["tepat", "sama", "selari", "rombus", "lelayang", "trapezium"], i: 2 },
  "Rajah 1 · Bentuk 1 hingga 6: segi empat tepat, segi empat sama, segi empat selari, rombus, lelayang, trapezium. Kira dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif enam jenis sisi empat dengan pepenjuru putus-putus; gelongsor memilih bentuk dan menunjukkan sisi selari, sisi sama, pepenjuru dan paksi simetri",
  { cabar: true });
const R_POL5 = pol({ mod: "jumlah", set: [[30, 50, 40, 60], [45, 45, 35, 55], [50, 40, 30, 70], [35, 60, 45, 50], [40, 30, 50, 55], [25, 65, 35, 45]], i: 0 },
  "Rajah 1 · Sisi empat ABCD dan sisi BC dipanjangkan ke E. Pilih sisi empat 1 hingga 6. Kira dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif sisi empat ABCD yang dibahagi dua segi tiga oleh pepenjuru AC, dengan sudut A, B, C dan D serta sudut peluaran DCE; gelongsor memilih sisi empat",
  { cabar: true });
const R_POL6 = pol({ mod: "selari", sudut: [50, 60, 70, 80, 100, 110, 120, 130], i: 2 },
  "Rajah 1 · Segi empat selari ABCD. Gerakkan gelongsor untuk menukar ∠A dan perhatikan ∠B, ∠C dan ∠D.",
  "Rajah interaktif segi empat selari ABCD; gelongsor menukar sudut A dan menunjukkan sudut bertentangan sama dan sudut bersebelahan berjumlah 180 darjah");

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Kampung Bucu", sk:"9.1.1 / 9.1.2 Poligon: sisi, bucu dan pepenjuru", lampiran:"pol1",
 kadNama:"Poligon", kadEm:"\u{1F537}", kadFakta:"Perkataan poligon datang daripada bahasa Yunani: 'poly' bermaksud banyak dan 'gonia' bermaksud sudut. Poligon ialah bentuk tertutup yang banyak sudutnya.",
 bosKadNama:"Pepenjuru", bosKadEm:"\u{1F4CF}", bosKadFakta:"Pepenjuru ialah garis yang menyambung dua bucu yang tidak bersebelahan. Segi tiga tiada pepenjuru sebab semua bucunya bersebelahan.",
 soalan:[
 {j:"pilih",t:"Poligon ialah bentuk tertutup yang dibatasi oleh:",p:["Tiga atau lebih sisi lurus","Satu garis lengkung tertutup","Dua garis lurus yang bersilang","Sisi lurus dan sisi melengkung"],b:0,u:"Poligon dibatasi oleh sisi-sisi lurus sahaja, sekurang-kurangnya tiga sisi."},
 {j:"pilih",t:"Bucu sesebuah poligon ialah:",p:["Titik pertemuan dua sisi","Garis yang menyambung dua sisi","Sudut yang paling besar","Titik tengah sesuatu sisi"],b:0,u:"Bucu ialah titik tempat dua sisi bertemu. Bilangan bucu sentiasa sama dengan bilangan sisi."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan gelongsor kepada 6 sisi. Berapakah bilangan bucu poligon itu?",b:6,tol:0.01,u:"Bilangan bucu sama dengan bilangan sisi, iaitu 6.",kira:()=>6},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan gelongsor kepada 8 sisi. Berapakah bilangan pepenjuru yang dilukis dari bucu A?",b:5,tol:0.01,u:"Dari satu bucu, pepenjuru tidak dilukis ke dirinya dan dua bucu bersebelahan. Bilangan pepenjuru = 8 − 3 = 5.",kira:()=>8-3},
 {j:"pilih",t:"Poligon yang mempunyai 5 sisi dinamakan:",p:["Segi lima","Segi empat","Segi enam","Segi tiga"],b:0,u:"Poligon dinamakan mengikut bilangan sisinya. Lima sisi ialah segi lima."},
 {j:"nombor",t:"Sebuah poligon mempunyai 7 sisi. Berapakah bilangan pepenjuru yang boleh dilukis dari satu bucu?",b:4,tol:0.01,u:"Bilangan pepenjuru dari satu bucu = bilangan sisi − 3 = 7 − 3 = 4.",kira:()=>7-3},
 {j:"susun",t:"Susun langkah melukis dan menamakan segi lima ABCDE.",p:["Lukis lima titik sebagai bucu","Label bucu dengan A, B, C, D dan E mengikut arah","Sambungkan setiap bucu berturutan dengan garis lurus","Namakan poligon itu segi lima ABCDE"],b:[0,1,2,3],u:"Tandakan bucu dahulu, labelkan, sambungkan dengan sisi, kemudian namakan mengikut huruf bucu."},
 {j:"pilih",t:"Dalam Rajah 1, apabila bilangan sisi bertambah 1, bilangan pepenjuru dari bucu A bertambah:",p:["1","2","3","Tidak berubah"],b:0,u:"Pepenjuru dari satu bucu = n − 3. Apabila n bertambah 1, bilangan itu bertambah 1."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang poligon.",p:["Bilangan sisi sama dengan bilangan bucu","Sisi empat mempunyai dua pepenjuru","Poligon n sisi ada (n − 3) pepenjuru dari satu bucu","Segi tiga mempunyai satu pepenjuru","Sisi sesebuah poligon boleh melengkung","Segi enam mempunyai lima bucu"],b:[0,1,2],u:"Segi tiga tiada pepenjuru, sisi poligon mesti lurus dan segi enam mempunyai enam bucu."}},

{n:2, tempat:"Khemah Segi Tiga", sk:"9.2.1 Sifat geometri dan pengelasan segi tiga", lampiran:"pol2",
 kadNama:"Segi Tiga Kukuh", kadEm:"\u{26FA}", kadFakta:"Segi tiga ialah bentuk yang tidak berubah bila ditolak, jadi ia digunakan pada rangka bumbung, jambatan dan tiang menara.",
 bosKadNama:"Paksi Simetri", bosKadEm:"\u{1FA9E}", bosKadFakta:"Paksi simetri ialah garis yang membahagi bentuk kepada dua bahagian yang menjadi bayang cermin antara satu sama lain.",
 soalan:[
 {j:"pilih",t:"Segi tiga sama sisi mempunyai:",p:["Tiga sisi sama panjang dan tiga sudut 60°","Dua sisi sama panjang dan satu sudut 90°","Tiga sisi berbeza dan tiga sudut berbeza","Dua sisi sama panjang dan tiga sudut sama"],b:0,u:"Segi tiga sama sisi ada semua sisi sama dan semua sudut 60°, dengan 3 paksi simetri."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan segi tiga 1 (sama sisi). Berapakah bilangan paksi simetri segi tiga itu?",b:3,tol:0.01,u:"Segi tiga sama sisi mempunyai 3 paksi simetri, satu dari setiap bucu ke tengah sisi bertentangan.",kira:()=>3},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan segi tiga 2 dengan ∠A = 50° dan ∠B = 50°. Berapakah ∠C (darjah)?",b:80,tol:0.01,suf:"°",u:"Jumlah sudut dalam segi tiga ialah 180°. ∠C = 180° − 50° − 50° = 80°.",kira:()=>180-50-50},
 {j:"pilih",t:"Dalam Rajah 1, segi tiga 4 mempunyai sudut 30°, 60° dan 90°. Segi tiga itu ialah:",p:["Segi tiga bersudut tegak","Segi tiga sama sisi","Segi tiga sama kaki","Segi tiga sudut cakah"],b:0,u:"Satu sudut 90° menjadikannya segi tiga bersudut tegak. Sudutnya tidak sama, jadi ia bukan sama kaki."},
 {j:"pilih",t:"Dalam Rajah 1, segi tiga 8 mempunyai sudut 25°, 25° dan 130°. Mengapakah ia segi tiga sama kaki?",p:["Dua sudutnya sama, maka dua sisinya sama panjang","Ketiga-tiga sisinya mempunyai panjang yang sama","Ia mempunyai satu sudut tegak","Jumlah dua sudutnya ialah 90°"],b:0,u:"Dalam segi tiga, sudut yang sama bertentangan dengan sisi yang sama panjang. Dua sudut 25° bermakna dua sisi sama panjang."},
 {j:"nombor",t:"Berapakah bilangan paksi simetri bagi segi tiga sama kaki yang bukan sama sisi?",b:1,tol:0.01,u:"Segi tiga sama kaki mempunyai satu paksi simetri, dari puncak ke tengah tapak.",kira:()=>1},
 {j:"pilih",t:"Sisi empat yang mempunyai empat sisi sama panjang dan empat sudut tegak ialah:",p:["Segi empat sama","Segi empat tepat","Rombus","Lelayang"],b:0,u:"Segi empat sama mempunyai empat sisi sama dan empat sudut 90°."},
 {j:"pilih",t:"Sebuah segi tiga mempunyai sisi 5 cm, 5 cm dan 8 cm. Segi tiga itu ialah segi tiga:",p:["Sama kaki","Sama sisi","Bersudut tegak","Sebarang"],b:0,u:"Dua sisi sama panjang (5 cm dan 5 cm), maka ia segi tiga sama kaki."}],
 bos:{j:"banyak",t:"Pilih SEMUA sifat yang BENAR bagi segi tiga sama kaki.",p:["Dua sisinya sama panjang","Dua sudutnya sama besar","Ia mempunyai satu paksi simetri","Ia mempunyai tiga paksi simetri","Semua sudutnya ialah 60°","Jumlah sudutnya ialah 360°"],b:[0,1,2],u:"Tiga paksi simetri dan sudut 60° ialah sifat segi tiga sama sisi. Jumlah sudut segi tiga ialah 180°, bukan 360°."}},

{n:3, tempat:"Kilang Sudut", sk:"9.2.2 / 9.2.3 Sudut pedalaman dan sudut peluaran segi tiga", lampiran:"pol3",
 kadNama:"180 Darjah", kadEm:"\u{1F4D0}", kadFakta:"Jumlah tiga sudut dalam segi tiga sentiasa 180°, sama ada segi tiga itu sebesar padang atau sekecil kuku.",
 bosKadNama:"Sudut Peluaran", bosKadEm:"\u{27A1}\u{FE0F}", bosKadFakta:"Sudut peluaran terbentuk apabila satu sisi dipanjangkan. Ia dan sudut dalam di bucu yang sama berada pada garis lurus, jadi berjumlah 180°.",
 soalan:[
 {j:"nombor",t:"Dua sudut sebuah segi tiga ialah 65° dan 45°. Berapakah sudut yang ketiga (darjah)?",b:70,tol:0.01,suf:"°",u:"Sudut ketiga = 180° − 65° − 45° = 70°.",kira:()=>180-65-45},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan segi tiga 1 dengan ∠A = 40° dan ∠B = 70°. Berapakah sudut peluaran ∠CBD (darjah)?",b:110,tol:0.01,suf:"°",u:"∠CBD = 180° − ∠ABC = 180° − 70° = 110°.",kira:()=>180-70},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan segi tiga 2 dengan ∠A = 50° dan ∠B = 60°. Berapakah ∠A + ∠C (darjah)?",b:120,tol:0.01,suf:"°",u:"∠C = 180° − 50° − 60° = 70°. ∠A + ∠C = 50° + 70° = 120°, sama dengan sudut peluaran di B.",kira:()=>50+(180-50-60)},
 {j:"pilih",t:"Sudut pedalaman dan sudut peluaran bersebelahan pada satu bucu segi tiga berjumlah:",p:["180°","90°","360°","Bergantung pada segi tiga"],b:0,u:"Keduanya berada pada garis lurus, jadi jumlahnya sentiasa 180°."},
 {j:"nombor",t:"Sudut peluaran sebuah segi tiga ialah 125°. Satu sudut pedalaman bertentangan ialah 55°. Berapakah sudut pedalaman bertentangan yang satu lagi (darjah)?",b:70,tol:0.01,suf:"°",u:"Sudut peluaran = jumlah dua sudut dalam bertentangan. 125° − 55° = 70°.",kira:()=>125-55},
 {j:"nombor",t:"Sudut puncak sebuah segi tiga sama kaki ialah 40°. Berapakah setiap sudut tapaknya (darjah)?",b:70,tol:0.01,suf:"°",u:"Dua sudut tapak sama. Setiap satu = (180° − 40°) ÷ 2 = 70°.",kira:()=>(180-40)/2},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan segi tiga 3 dengan ∠A = 30° dan ∠B = 100°. Berapakah sudut peluaran ∠CBD (darjah)?",b:80,tol:0.01,suf:"°",u:"∠CBD = 180° − 100° = 80°. Ia juga sama dengan ∠A + ∠C = 30° + 50°.",kira:()=>180-100},
 {j:"pilih",t:"Sudut peluaran suatu segi tiga sentiasa sama dengan:",p:["Jumlah dua sudut pedalaman yang bertentangan","Jumlah ketiga-tiga sudut pedalaman","Sudut pedalaman bersebelahan dengannya","Separuh daripada sudut pedalaman bersebelahan"],b:0,u:"Sudut peluaran = jumlah dua sudut dalam bertentangan, kerana 180° − ∠B = ∠A + ∠C."}],
 bos:{j:"nombor",t:"Dalam segi tiga ABC, ∠A = x, ∠B = x + 20° dan sudut peluaran di C ialah 130°. Berapakah nilai x (darjah)?",b:55,tol:0.01,suf:"°",u:"Sudut peluaran di C = ∠A + ∠B. Maka x + (x + 20) = 130, 2x = 110 dan x = 55.",kira:()=>(130-20)/2}},

{n:4, tempat:"Bengkel Sisi Empat", sk:"9.3.1 Sifat geometri dan pengelasan sisi empat", lampiran:"pol4",
 kadNama:"Lelayang", kadEm:"\u{1FA81}", kadFakta:"Layang-layang yang awak main ialah contoh bentuk lelayang: dua pasang sisi bersebelahan sama panjang dan pepenjuru yang bersilang serenjang.",
 bosKadNama:"Trapezium", bosKadEm:"\u{1F4D0}", bosKadFakta:"Trapezium hanya ada satu pasang sisi selari. Segi empat selari pula ada dua pasang, jadi setiap segi empat selari ialah trapezium khas.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan bentuk 5 (lelayang). Berapakah bilangan paksi simetri lelayang itu?",b:1,tol:0.01,u:"Lelayang mempunyai satu paksi simetri, iaitu pepenjuru yang menghubungkan dua bucu yang dikongsi oleh sisi-sisi sama panjang.",kira:()=>1},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan bentuk 1 (segi empat tepat). Berapakah bilangan paksi simetri?",b:2,tol:0.01,u:"Segi empat tepat mempunyai 2 paksi simetri, melalui titik tengah sisi bertentangan.",kira:()=>2},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan bentuk 2 (segi empat sama). Berapakah bilangan paksi simetri?",b:4,tol:0.01,u:"Segi empat sama mempunyai 4 paksi simetri: dua pepenjuru dan dua garis melalui titik tengah sisi.",kira:()=>4},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan bentuk 6 (trapezium). Berapakah bilangan pasang sisi selari?",b:1,tol:0.01,u:"Trapezium hanya ada satu pasang sisi selari.",kira:()=>1},
 {j:"pilih",t:"Sisi empat yang mempunyai dua pasang sisi bersebelahan sama panjang dan pepenjurunya bersilang serenjang ialah:",p:["Lelayang","Segi empat tepat","Segi empat selari","Trapezium"],b:0,u:"Lelayang mempunyai dua pasang sisi bersebelahan sama panjang. Pepenjurunya bersilang serenjang."},
 {j:"pilih",t:"Antara sisi empat berikut, yang manakah pepenjurunya sama panjang tetapi tidak semestinya bersilang serenjang?",p:["Segi empat tepat","Rombus","Lelayang","Segi empat selari"],b:0,u:"Pepenjuru segi empat tepat sama panjang. Pepenjuru rombus dan lelayang bersilang serenjang, manakala pepenjuru segi empat selari tidak sama panjang."},
 {j:"nombor",t:"Rombus ABCD mempunyai sisi 6 cm. Berapakah perimeternya (cm)?",b:24,tol:0.01,suf:"cm",u:"Semua sisi rombus sama panjang. Perimeter = 4 × 6 = 24 cm.",kira:()=>4*6},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan bentuk 3 (segi empat selari). Berapakah bilangan paksi simetrinya?",b:0,tol:0.01,u:"Segi empat selari yang bukan segi empat tepat atau rombus tiada paksi simetri.",kira:()=>0}],
 bos:{j:"banyak",t:"Pilih SEMUA sisi empat yang mempunyai dua pasang sisi selari.",p:["Segi empat tepat","Segi empat sama","Segi empat selari","Rombus","Lelayang","Trapezium"],b:[0,1,2,3],u:"Lelayang dan trapezium tidak mempunyai dua pasang sisi selari. Trapezium hanya ada satu pasang."}},

{n:5, tempat:"Lot Tanah Ayah", sk:"9.3.2 / 9.3.3 Sudut pedalaman dan sudut peluaran sisi empat", lampiran:"pol5",
 kadNama:"360 Darjah", kadEm:"\u{1F4D0}", kadFakta:"Satu pepenjuru membahagi sisi empat kepada dua segi tiga. Setiap segi tiga berjumlah 180°, maka sisi empat berjumlah 2 × 180° = 360°.",
 bosKadNama:"Jurukur Tanah", bosKadEm:"\u{1F5FA}\u{FE0F}", bosKadFakta:"Jurukur tanah menggunakan sudut dan panjang untuk menentukan sempadan sesebuah lot tanah supaya tepat dan tidak bertindih dengan lot jiran.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan sisi empat 1 dengan ∠A = 70°, ∠B = 100° dan ∠C = 110°. Berapakah ∠D (darjah)?",b:80,tol:0.01,suf:"°",u:"Jumlah sudut dalam sisi empat ialah 360°. ∠D = 360° − 70° − 100° − 110° = 80°.",kira:()=>360-70-100-110},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan sisi empat 2 dengan ∠C = 100°. Berapakah sudut peluaran ∠DCE (darjah)?",b:80,tol:0.01,suf:"°",u:"Sudut peluaran = 180° − sudut pedalaman di C = 180° − 100° = 80°.",kira:()=>180-100},
 {j:"nombor",t:"Tiga sudut sebuah sisi empat ialah 85°, 100° dan 95°. Berapakah sudut yang keempat (darjah)?",b:80,tol:0.01,suf:"°",u:"Sudut keempat = 360° − 85° − 100° − 95° = 80°.",kira:()=>360-85-100-95},
 {j:"nombor",t:"Empat sudut sebuah sisi empat berada dalam nisbah x, 2x, 3x dan 4x. Berapakah nilai x (darjah)?",b:36,tol:0.01,suf:"°",u:"x + 2x + 3x + 4x = 10x = 360°, maka x = 36°.",kira:()=>360/(1+2+3+4)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan sisi empat 3 dengan ∠C = 110°. Berapakah sudut peluaran ∠DCE (darjah)?",b:70,tol:0.01,suf:"°",u:"∠DCE = 180° − 110° = 70°.",kira:()=>180-110},
 {j:"pilih",t:"Sudut peluaran sebuah sisi empat pada satu bucu ialah 75°. Berapakah sudut pedalaman di bucu itu?",p:["105°","75°","285°","15°"],b:0,u:"Sudut pedalaman + sudut peluaran = 180°. Maka 180° − 75° = 105°.",kira:()=>180-75===105},
 {j:"nombor",t:"Sudut-sudut sisi empat ialah 90°, 90°, x dan (x + 30°). Berapakah nilai x (darjah)?",b:75,tol:0.01,suf:"°",u:"90° + 90° + x + (x + 30°) = 360°. Maka 2x + 210° = 360°, 2x = 150° dan x = 75°.",kira:()=>(360-90-90-30)/2},
 {j:"susun",t:"Susun langkah mencari sudut D bagi sisi empat ABCD apabila ∠A, ∠B dan ∠C diketahui.",p:["Tulis jumlah sudut dalam sisi empat ialah 360°","Jumlahkan ∠A, ∠B dan ∠C","Tolak jumlah itu daripada 360°","Tulis jawapan bersama unit darjah"],b:[0,1,2,3],u:"Guna jumlah 360°, tambah tiga sudut yang diketahui, tolak daripada 360°, kemudian tulis unit."}],
 bos:{j:"nombor",t:"Sudut-sudut sisi empat ABCD ialah ∠A = 2y, ∠B = (y + 20)°, ∠C = 90° dan ∠D = (y + 10)°. Berapakah nilai y?",b:60,tol:0.01,u:"2y + (y + 20) + 90 + (y + 10) = 360. Maka 4y + 120 = 360, 4y = 240 dan y = 60.",kira:()=>(360-20-90-10)/4}},

{n:6, tempat:"Reka Corak Batik", sk:"9.3.2 (iii) / 9.3.4 Segi empat selari dan gabungan segi tiga dengan sisi empat", lampiran:"pol6",
 kadNama:"Corak Batik", kadEm:"\u{1F3A8}", kadFakta:"Corak batik sering menyusun segi tiga, segi empat selari dan lelayang yang berulang-ulang sehingga membentuk reka bentuk yang cantik.",
 bosKadNama:"Bukti Matematik", bosKadEm:"\u{1F50D}", bosKadFakta:"Konjektur hanya boleh dipercayai selepas diuji pada banyak contoh dan dijelaskan dengan sebab, bukan sekadar berdasarkan satu lukisan.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan ∠A = 70°. Berapakah ∠B (darjah)?",b:110,tol:0.01,suf:"°",u:"Sudut bersebelahan dalam segi empat selari berjumlah 180°. ∠B = 180° − 70° = 110°.",kira:()=>180-70},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan ∠A = 120°. Berapakah ∠C (darjah)?",b:120,tol:0.01,suf:"°",u:"Sudut bertentangan dalam segi empat selari sama besar. ∠C = ∠A = 120°.",kira:()=>120},
 {j:"nombor",t:"PQRS ialah segi empat selari. ∠P = (3x + 10)° dan ∠R = (5x − 30)°. Berapakah nilai x?",b:20,tol:0.01,u:"Sudut bertentangan sama: 3x + 10 = 5x − 30. Maka 40 = 2x dan x = 20.",kira:()=>(10+30)/(5-3)},
 {j:"nombor",t:"ABCD ialah segi empat selari. ∠A = 2x dan ∠B = (x + 30)°. Berapakah nilai x?",b:50,tol:0.01,u:"Sudut bersebelahan berjumlah 180°: 2x + x + 30 = 180. Maka 3x = 150 dan x = 50.",kira:()=>(180-30)/3},
 {j:"nombor",t:"Sisi empat ABCD terdiri daripada segi tiga ABC dan segi tiga ACD yang berkongsi AC. ∠BAC = 30°, ∠ACB = 50°, ∠CAD = 40° dan ∠ACD = 60°. Berapakah ∠ABC + ∠ADC (darjah)?",b:180,tol:0.01,suf:"°",u:"∠ABC = 180° − 30° − 50° = 100° dan ∠ADC = 180° − 40° − 60° = 80°. Jumlahnya 180°.",kira:()=>(180-30-50)+(180-40-60)},
 {j:"nombor",t:"Dalam segi empat selari ABCD, ∠A = 65°. Sisi AB dipanjangkan melalui B. Berapakah sudut peluaran di B (darjah)?",b:65,tol:0.01,suf:"°",u:"∠ABC = 180° − 65° = 115°. Sudut peluaran di B = 180° − 115° = 65°.",kira:()=>180-(180-65)},
 {j:"pilih",t:"Antara berikut, yang manakah TIDAK benar bagi segi empat selari?",p:["Pepenjurunya sentiasa sama panjang","Sudut bertentangan sama besar","Sudut bersebelahan berjumlah 180°","Sisi bertentangan selari dan sama panjang"],b:0,u:"Pepenjuru segi empat selari yang umum tidak sama panjang. Ia hanya sama panjang pada segi empat tepat dan segi empat sama."},
 {j:"susun",t:"Susun langkah menguji konjektur bahawa sudut bertentangan segi empat selari sama besar, menggunakan Rajah 1.",p:["Baca ∠A, ∠B, ∠C dan ∠D pada segi empat selari","Bandingkan ∠A dengan ∠C dan ∠B dengan ∠D","Ulang dengan menukar ∠A melalui gelongsor","Buat kesimpulan bersama sebab yang jelas"],b:[0,1,2,3],u:"Uji pada beberapa contoh, bandingkan pasangan sudut bertentangan, kemudian buat kesimpulan."}],
 bos:{j:"buka",
  t:"Awak mahu mereka bentuk sebuah corak batik daripada satu segi empat selari dan dua segi tiga yang dilukis di dalamnya.",
  arahan:"Lukis atau huraikan reka bentuk itu. Nyatakan nilai empat sudut segi empat selari, sudut bagi segi tiga yang terbentuk oleh pepenjurunya, dan tunjukkan pengiraan yang menggunakan jumlah sudut segi tiga (180°) serta sifat sudut bertentangan.",
  u:"Jawapan TP6 yang kukuh memilih nilai sudut yang sah, menunjukkan pengiraan jumlah sudut segi tiga dan sudut segi empat selari, dan menerangkan sebab setiap langkah."}}
];

module.exports = {
  id:"m1b9", tingkatan:1, kod:"9.0 Poligon Asas",
  tajuk:"Kampung Bucu",
  subtajuk:"Matematik Ting. 1 · Bab 9 Poligon Asas",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat menyatakan bahawa bilangan sisi dan bucu poligon adalah sama, serta menentukan bilangan pepenjuru dari satu bucu. Langkah seterusnya ialah mengenal sifat segi tiga dan sisi empat.",
   2:"{n} memahami sifat segi tiga dan sisi empat serta dapat mengkelaskannya mengikut sisi, sudut dan paksi simetri. Perlu lebih latihan sebelum menggunakan sifat itu untuk mengira sudut.",
   3:"{n} boleh mengira sudut pedalaman dan sudut peluaran segi tiga menggunakan jumlah 180° dan hubungan sudut peluaran. Galakkan menulis langkah pengiraan dengan jelas.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah tentang segi tiga dan sisi empat, termasuk membezakan sisi empat khas melalui sisi, pepenjuru dan paksi simetri. Seterusnya latih masalah dengan banyak langkah.",
   5:"{n} dapat menyelesaikan masalah kompleks yang melibatkan jumlah sudut sisi empat dan sudut peluaran serta persamaan mudah. Sudah bersedia untuk masalah gabungan dan bukan rutin.",
   6:"{n} berjaya menggabungkan sifat segi tiga dan sisi empat, khususnya segi empat selari, untuk menyelesaikan masalah bukan rutin dan menghuraikan langkahnya dengan sebab. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Poligon Asas. Cadangan: ulang hentian pertama menggunakan Rajah 1 dan kira bilangan sisi, bucu dan pepenjuru bagi beberapa poligon dengan bimbingan rakan sebaya."
  },
  lampiran:{ pol1:R_POL1, pol2:R_POL2, pol3:R_POL3, pol4:R_POL4, pol5:R_POL5, pol6:R_POL6 },
  aras:ARAS
};
