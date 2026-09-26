/* Sumber kandungan — Matematik KSSM Tingkatan 2, Bab 9 Laju dan Pecutan.
   Fail ini disunting tangan. Jalankan `node bina.js m2b9` untuk menyemaknya
   dan menghasilkan bank-m2b9.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 65 (dskp/matematik-t2.pdf).
   DSKP Tingkatan 2 menulis enam tahap penguasaan bab ini pada satu jadual dan
   tahap 6 berbunyi "...konteks penyelesaian masalah bukan rutin secara kreatif."
   Semua enam tahap ada dalam DSKP, jadi tiada tahap yang ditulis sendiri.

   Semua jawapan berangka dikira dengan kod dalam medan `kira` dan dibandingkan
   oleh tools/semak-jawapan.js. Tanda < dan > dalam teks ditulis sebagai entiti
   HTML. Skop mengikut DSKP: laju, laju seragam dan tak seragam, laju purata,
   penukaran unit laju, pecutan dan nyahpecutan (arah tetap sahaja). */
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);

const SPI = [
"Mempamerkan pengetahuan asas tentang laju dan pecutan.",
"Mempamerkan kefahaman tentang laju dan pecutan.",
"Mengaplikasikan kefahaman tentang laju dan pecutan untuk melaksanakan pengiraan.",
"Mengaplikasikan pengetahuan dan kemahiran tentang laju dan pecutan dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran tentang laju dan pecutan dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran tentang laju dan pecutan dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran: rajah interaktif ---------- */

const R_LAJ1 = { jenis:"interaktif", w:"t2lajujarak", tajuk:"Basikal Aina", seg:[[0,0],[5,60]], masa:[0,1,2,3,4,5],
  unitJ:"km", unitM:"jam", unitL:"km/j", langkahX:1, langkahY:20, i:2,
  kapsyen:"Rajah 1 · Graf jarak melawan masa bagi basikal Aina. Gerakkan gelongsor masa dan lihat basikal bergerak di atas jalan.",
  alt:"Rajah interaktif graf jarak melawan masa bagi basikal yang bergerak dengan laju seragam; gelongsor masa menggerakkan basikal dan titik pada graf serta menunjukkan jarak dan laju" };

const R_LAJ2 = { jenis:"interaktif", w:"t2lajujarak", tajuk:"Bas ekspres", seg:[[0,0],[1,60],[1.5,60],[3,120]], masa:[0,0.5,1,1.5,2,2.5,3],
  unitJ:"km", unitM:"jam", unitL:"km/j", langkahX:0.5, langkahY:30, i:2,
  kapsyen:"Rajah 1 · Graf jarak melawan masa bagi perjalanan sebuah bas. Gerakkan gelongsor masa dan perhatikan kecuraman garis.",
  alt:"Rajah interaktif graf jarak melawan masa bagi bas yang berhenti seketika; gelongsor masa menunjukkan jarak, laju semasa dan laju purata pada setiap masa" };

const R_LAJ3 = { jenis:"interaktif", w:"t2lajutukar", arah:"kmj", pasang:[[18,5],[36,10],[54,15],[72,20],[90,25],[108,30],[126,35],[144,40]], i:3,
  kapsyen:"Rajah 1 · Menukar km/j kepada m/s. Gerakkan gelongsor laju dan ikut langkah penukaran.",
  alt:"Rajah interaktif menukar laju daripada kilometer sejam kepada meter sesaat; gelongsor menukar laju dan menunjukkan langkah pendaraban dengan seribu dan pembahagian dengan tiga ribu enam ratus" };

const R_LAJ4 = { jenis:"interaktif", w:"t2lajupurata", d1:60, v1:60, d2:60, v2:[20,30,40,60,120], unitJ:"km", unitM:"jam", unitL:"km/j", tMaks:4, i:1, cabar:true,
  kapsyen:"Rajah 1 · Perjalanan dua bahagian. Kira dahulu laju purata, kemudian semak dengan rajah.",
  alt:"Rajah interaktif perjalanan dua bahagian dengan jarak sama; gelongsor menukar laju bahagian kedua dan rajah menunjukkan masa, jumlah jarak dan laju purata" };

const R_LAJ5 = { jenis:"interaktif", w:"t2lajumasa", tajuk:"Kereta memecut", u:4, a:3, masa:[0,1,2,3,4,5,6], vMaks:24, langkahX:1, langkahY:6,
  unitV:"m/s", unitM:"s", unitP:"m/s²", i:2, cabar:true,
  kapsyen:"Rajah 1 · Graf laju melawan masa sebuah kereta. Kira dahulu laju dan pecutan, kemudian semak dengan rajah.",
  alt:"Rajah interaktif graf laju melawan masa bagi kereta yang memecut; gelongsor masa menunjukkan laju, perubahan laju dan pecutan" };

const R_LAJ6 = { jenis:"interaktif", w:"t2lajumasa", tajuk:"Kereta membrek", u:20, a:-4, masa:[0,1,2,3,4,5], vMaks:20, langkahX:1, langkahY:5,
  unitV:"m/s", unitM:"s", unitP:"m/s²", i:2,
  kapsyen:"Rajah 1 · Graf laju melawan masa sebuah kereta yang membrek. Gerakkan gelongsor masa dan perhatikan laju berkurang.",
  alt:"Rajah interaktif graf laju melawan masa bagi kereta yang membrek; gelongsor masa menunjukkan laju yang berkurang dan nyahpecutan" };

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Padang Lari", sk:"9.1.1 Maksud laju sebagai kadar jarak dan masa", lampiran:"laj1",
 kadNama:"Laju", kadEm:"\u{1F6B2}", kadFakta:"Laju ialah jarak yang dilalui dalam satu unit masa. Laju 12 km/j bermaksud basikal itu melalui 12 km setiap jam.",
 bosKadNama:"Graf Lurus", bosKadEm:"\u{1F4C8}", bosKadFakta:"Pada graf jarak melawan masa, garis lurus yang naik bermaksud laju seragam. Makin curam garis itu, makin laju pergerakannya.",
 soalan:[
 {j:"pilih",t:"Laju ialah kadar yang membandingkan:",p:["Jarak yang dilalui dengan masa diambil","Jarak yang dilalui dengan jarak yang lain","Masa yang diambil dengan masa yang lain","Berat objek dengan panjang jalannya dalam sehari"],b:0,u:"Laju = jarak ÷ masa. Ia menyatakan berapa jauh objek bergerak dalam satu unit masa.",kira:()=>true},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan masa 3 jam. Berapakah jarak yang dilalui basikal Aina (km)?",b:36,tol:0.01,suf:"km",u:"Graf menunjukkan 12 km setiap jam. Selepas 3 jam, jarak = 12 × 3 = 36 km.",kira:()=>12*3},
 {j:"nombor",t:"Aina berlari 400 m dalam 80 saat. Berapakah lajunya (m/s)?",b:5,tol:0.01,suf:"m/s",u:"Laju = jarak ÷ masa = 400 ÷ 80 = 5 m/s.",kira:()=>400/80},
 {j:"pilih",t:"Antara unit berikut, yang manakah sesuai bagi laju?",p:["km/j","km × j","km + j","j ÷ km"],b:0,u:"Laju ialah jarak dibahagi masa, jadi unitnya kilometer sejam (km/j).",kira:()=>true},
 {j:"nombor",t:"Sebuah kereta bergerak 150 km dalam 3 jam. Berapakah lajunya (km/j)?",b:50,tol:0.01,suf:"km/j",u:"Laju = 150 ÷ 3 = 50 km/j.",kira:()=>150/3},
 {j:"pilih",t:"Dalam Rajah 1, apabila masa bertambah, garis graf jarak melawan masa itu:",p:["Naik dengan kecuraman sama","Mendatar sepanjang masa","Turun ke bawah semula","Naik dan turun berselang-seli"],b:0,u:"Basikal bergerak dengan laju yang sama, jadi garisnya lurus dan naik dengan kecuraman yang sama.",kira:()=>true},
 {j:"susun",t:"Susun langkah mencari laju sebuah objek.",p:["Tulis jarak yang telah dilalui","Tulis masa yang diambil","Bahagi jarak dengan masa","Tulis unit laju, contohnya km/j"],b:[0,1,2,3],u:"Kenal jarak dan masa dahulu, bahagi jarak dengan masa, kemudian tulis unit yang betul."},
 {j:"banyak",t:"Pilih SEMUA rumus yang BENAR tentang laju, jarak dan masa.",p:["Laju = jarak ÷ masa","Jarak = laju × masa","Masa = jarak ÷ laju","Laju = jarak × masa","Laju = masa ÷ jarak","Jarak = laju ÷ masa"],b:[0,1,2],u:"Ketiga-tiga rumus yang betul saling berkaitan. Laju ialah jarak dibahagi masa, dan bukan didarab atau dibalikkan."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang graf jarak melawan masa dalam Rajah 1.",p:["Garisnya lurus","Makin curam garis, makin laju pergerakan","Pada masa 0, jarak ialah 0","Garis mendatar bermaksud bergerak paling laju","Jarak berkurang apabila masa bertambah","Graf itu ialah graf laju melawan masa"],b:[0,1,2],u:"Laju seragam menghasilkan garis lurus yang bermula dari 0. Garis mendatar bermaksud jarak tidak bertambah, iaitu berhenti. Graf ini ialah graf jarak melawan masa."}},

{n:2, tempat:"Lebuh Raya", sk:"9.1.2 Laju seragam dan laju tak seragam", lampiran:"laj2",
 kadNama:"Laju Seragam", kadEm:"\u{1F697}", kadFakta:"Laju seragam bermaksud laju yang tidak berubah. Kereta yang menggunakan kawalan kelajuan di lebuh raya cuba mengekalkan laju seragam.",
 bosKadNama:"Garis Mendatar", bosKadEm:"\u{1F6D1}", bosKadFakta:"Pada graf jarak melawan masa, garis mendatar bermaksud jarak tidak berubah, iaitu objek itu berhenti.",
 soalan:[
 {j:"pilih",t:"Laju seragam bermaksud laju yang:",p:["Tidak berubah sepanjang jalan","Sentiasa naik","Sentiasa berkurang dengan masa","Berubah pada setiap minit perjalanan"],b:0,u:"Laju seragam ialah laju yang sama pada setiap masa. Jika laju berubah, ia laju tak seragam.",kira:()=>true},
 {j:"pilih",t:"Dalam Rajah 1, bas itu berhenti pada selang masa antara:",p:["1 jam hingga 1.5 jam","0 jam hingga 1 jam","1.5 jam hingga 3 jam","2 jam hingga 3 jam"],b:0,u:"Pada selang 1 jam hingga 1.5 jam, garis graf mendatar pada 60 km. Jarak tidak bertambah, jadi bas berhenti.",kira:()=>true},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan masa 1 jam. Berapakah laju bas pada ketika itu (km/j)?",b:60,tol:0.01,suf:"km/j",u:"Dalam 1 jam pertama, bas bergerak 60 km. Laju = 60 ÷ 1 = 60 km/j.",kira:()=>60/1},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan masa 2 jam. Berapakah laju bas pada ketika itu (km/j)?",b:40,tol:0.01,suf:"km/j",u:"Antara 1.5 jam dan 3 jam, jarak bertambah 120 − 60 = 60 km dalam 1.5 jam. Laju = 60 ÷ 1.5 = 40 km/j.",kira:()=>(120-60)/(3-1.5)},
 {j:"pilih",t:"Adakah perjalanan bas dalam Rajah 1 ialah laju seragam?",p:["Tidak, kerana kecuraman garis itu berubah","Ya, kerana bas bergerak","Ya, kerana graf bermula dari titik sifar","Tidak, kerana bas tidak bergerak langsung"],b:0,u:"Garis graf mempunyai tiga bahagian dengan kecuraman berbeza (60 km/j, berhenti, 40 km/j), jadi lajunya tak seragam.",kira:()=>true},
 {j:"pilih",t:"Pada graf jarak melawan masa, garis mendatar menunjukkan objek itu:",p:["Berhenti seketika","Bergerak laju","Berpatah balik","Makin perlahan"],b:0,u:"Garis mendatar bermaksud jarak tidak berubah walaupun masa bertambah, jadi objek itu berhenti.",kira:()=>true},
 {j:"nombor",t:"Sebuah kereta mencatat jarak 50 km pada masa 1 jam, 100 km pada 2 jam dan 150 km pada 3 jam. Jika laju kekal seragam, berapakah jarak pada masa 4 jam (km)?",b:200,tol:0.01,suf:"km",u:"Jarak bertambah 50 km setiap jam, jadi laju seragam ialah 50 km/j. Pada 4 jam, jarak = 50 × 4 = 200 km.",kira:()=>50*4},
 {j:"susun",t:"Susun langkah menentukan sama ada laju seragam atau tak seragam daripada jadual jarak dan masa.",p:["Kira laju bagi setiap selang masa","Bandingkan laju bagi semua selang masa","Jika semua laju sama, laju itu seragam","Jika ada laju yang berbeza, laju itu tak seragam"],b:[0,1,2,3],u:"Kira laju setiap selang, bandingkan, kemudian buat kesimpulan seragam atau tak seragam."}],
 bos:{j:"nombor",t:"Dalam Rajah 1, berapakah jarak yang dilalui bas semasa 1.5 jam yang terakhir (km)?",b:60,tol:0.01,suf:"km",u:"Pada 1.5 jam, jarak ialah 60 km. Pada 3 jam, jarak ialah 120 km. Jarak dalam 1.5 jam terakhir = 120 − 60 = 60 km.",kira:()=>120-60}},

{n:3, tempat:"Bengkel Penukar Unit", sk:"9.1.3 Penukaran unit laju km/j dan m/s", lampiran:"laj3",
 kadNama:"Penukar Unit", kadEm:"\u{1F504}", kadFakta:"Untuk menukar km/j kepada m/s, bahagikan dengan 3.6. Untuk menukar m/s kepada km/j, darabkan dengan 3.6.",
 bosKadNama:"Jam Kepada Saat", bosKadEm:"\u{23F1}\u{FE0F}", bosKadFakta:"Satu jam ada 60 minit dan setiap minit ada 60 saat, jadi 1 jam = 3 600 saat.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih laju 54 km/j. Berapakah laju itu dalam m/s?",b:15,tol:0.01,suf:"m/s",u:"54 km = 54 000 m dan 1 jam = 3 600 s. Laju = 54 000 ÷ 3 600 = 15 m/s.",kira:()=>54*1000/3600},
 {j:"nombor",t:"Tukarkan 36 km/j kepada m/s.",b:10,tol:0.01,suf:"m/s",u:"36 × 1 000 ÷ 3 600 = 10 m/s.",kira:()=>36*1000/3600},
 {j:"nombor",t:"Tukarkan 20 m/s kepada km/j.",b:72,tol:0.01,suf:"km/j",u:"20 m/s dalam 1 jam ialah 20 × 3 600 = 72 000 m = 72 km. Maka 20 m/s = 72 km/j.",kira:()=>20*3600/1000},
 {j:"pilih",t:"Untuk menukar laju daripada km/j kepada m/s, kita:",p:["Darab dengan 1 000 dan bahagi dengan 3 600","Darab dengan 3 600 dan bahagi dengan 1 000","Darab dengan 60 sahaja","Bahagi dengan 1 000 sahaja"],b:0,u:"1 km = 1 000 m dan 1 jam = 3 600 s. Maka km/j × 1 000 ÷ 3 600 = m/s.",kira:()=>true},
 {j:"pilih",t:"Satu jam bersamaan dengan berapa saat?",p:["3 600","60","360","1 000"],b:0,u:"1 jam = 60 minit dan 1 minit = 60 saat, jadi 1 jam = 60 × 60 = 3 600 saat.",kira:()=>60*60},
 {j:"nombor",t:"Seekor cheetah berlari dengan laju 30 m/s. Berapakah lajunya dalam km/j?",b:108,tol:0.01,suf:"km/j",u:"30 × 3 600 ÷ 1 000 = 108 km/j.",kira:()=>30*3600/1000},
 {j:"nombor",t:"Laju bunyi di udara ialah 340 m/s. Berapakah laju itu dalam km/j?",b:1224,tol:0.5,suf:"km/j",u:"340 × 3 600 ÷ 1 000 = 1 224 km/j.",kira:()=>340*3600/1000},
 {j:"susun",t:"Susun langkah menukar 72 km/j kepada m/s.",p:["Tukar 72 km kepada meter: 72 × 1 000 = 72 000 m","Tukar 1 jam kepada saat: 60 × 60 = 3 600 s","Bahagi jarak dengan masa: 72 000 ÷ 3 600","Tulis jawapan akhir, iaitu 20 m/s"],b:[0,1,2,3],u:"Tukar jarak kepada meter, tukar masa kepada saat, bahagi, kemudian tulis jawapan dengan unit m/s."}],
 bos:{j:"nombor",t:"Sebuah kereta api bergerak dengan laju 90 km/j. Berapakah jarak yang dilalui dalam 10 saat (m)?",b:250,tol:0.5,suf:"m",u:"90 km/j = 90 ÷ 3.6 = 25 m/s. Dalam 10 saat, jarak = 25 × 10 = 250 m.",kira:()=>90*1000/3600*10}},

{n:4, tempat:"Stesen Laju Purata", sk:"9.1.3 / 9.1.4 Laju purata dan masalah laju", lampiran:"laj4",
 kadNama:"Laju Purata", kadEm:"\u{1F6E3}\u{FE0F}", kadFakta:"Laju purata ialah jumlah jarak dibahagi jumlah masa. Ia bukan purata bagi dua laju.",
 bosKadNama:"Masa Lebih Lama", bosKadEm:"\u{23F3}", bosKadFakta:"Bahagian perjalanan yang lebih perlahan mengambil masa lebih lama. Itu sebabnya ia mempengaruhi laju purata lebih banyak.",
 soalan:[
 {j:"pilih",t:"Laju purata dikira dengan:",p:["Jumlah jarak ÷ jumlah masa","Purata bagi semua laju yang diberi","Jarak terjauh ÷ masa terpendek","Jumlah masa ÷ jumlah jarak"],b:0,u:"Laju purata = jumlah jarak ÷ jumlah masa untuk seluruh perjalanan.",kira:()=>true},
 {j:"nombor",t:"Dalam Rajah 1, sebuah kereta memandu 60 km pada 60 km/j dan 60 km pada 30 km/j. Berapakah jumlah masa perjalanan (jam)?",b:3,tol:0.01,suf:"jam",u:"Bahagian pertama: 60 ÷ 60 = 1 jam. Bahagian kedua: 60 ÷ 30 = 2 jam. Jumlah masa = 1 + 2 = 3 jam.",kira:()=>60/60+60/30},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan laju bahagian kedua 30 km/j. Berapakah laju purata seluruh perjalanan (km/j)?",b:40,tol:0.01,suf:"km/j",u:"Jumlah jarak = 120 km dan jumlah masa = 3 jam. Laju purata = 120 ÷ 3 = 40 km/j.",kira:()=>(60+60)/(60/60+60/30)},
 {j:"nombor",t:"Aiman berjalan 6 km dalam 2 jam pertama dan 4 km dalam 3 jam berikutnya. Berapakah laju purata (km/j)?",b:2,tol:0.01,suf:"km/j",u:"Jumlah jarak = 10 km dan jumlah masa = 5 jam. Laju purata = 10 ÷ 5 = 2 km/j.",kira:()=>(6+4)/(2+3)},
 {j:"nombor",t:"Sebuah bas bergerak 120 km dalam 2 jam dan kemudian 60 km dalam 1 jam. Berapakah laju purata seluruh perjalanan (km/j)?",b:60,tol:0.01,suf:"km/j",u:"Jumlah jarak = 180 km dan jumlah masa = 3 jam. Laju purata = 180 ÷ 3 = 60 km/j.",kira:()=>(120+60)/(2+1)},
 {j:"pilih",t:"Seorang murid berkata laju purata bagi 60 km/j dan 30 km/j ialah (60 + 30) ÷ 2 = 45 km/j, dengan jarak kedua-dua bahagian sama. Adakah dia betul?",p:["Salah, kerana bahagian perlahan ambil masa lebih lama","Betul, kerana purata dua nombor itu ialah 45","Betul, kerana jarak kedua-dua bahagian adalah sama","Salah, kerana laju purata mestilah 90 km/j sahaja"],b:0,u:"Bahagian pada 30 km/j mengambil masa dua kali ganda lebih lama, jadi laju purata lebih dekat dengan 30. Nilai sebenar ialah 40 km/j.",kira:()=>bunda((60+60)/(60/60+60/30),0)===40},
 {j:"nombor",t:"Sebuah motosikal bergerak dari A ke B sejauh 90 km pada laju 90 km/j dan pulang pada laju 45 km/j. Berapakah laju purata seluruh perjalanan (km/j)?",b:60,tol:0.01,suf:"km/j",u:"Pergi mengambil 1 jam dan pulang 2 jam. Jumlah jarak = 180 km, jumlah masa = 3 jam. Laju purata = 180 ÷ 3 = 60 km/j.",kira:()=>(90+90)/(90/90+90/45)},
 {j:"susun",t:"Susun langkah mencari laju purata sebuah perjalanan dua bahagian.",p:["Tambah semua jarak untuk mendapat jumlah jarak","Kira masa setiap bahagian dengan jarak ÷ laju","Tambah semua masa untuk mendapat jumlah masa","Bahagi jumlah jarak dengan jumlah masa"],b:[0,1,2,3],u:"Cari jumlah jarak dan jumlah masa dahulu. Laju purata ialah jumlah jarak dibahagi jumlah masa."}],
 bos:{j:"nombor",t:"Ali memandu 100 km pada 50 km/j dan 100 km pada 100 km/j. Berapakah laju purata (km/j) kepada 1 tempat perpuluhan?",b:bunda(200/(100/50+100/100),1),tol:0.05,suf:"km/j",u:"Masa pertama = 2 jam dan masa kedua = 1 jam, jumlah masa 3 jam. Laju purata = 200 ÷ 3 = 66.7 km/j. Ini bukan (50 + 100) ÷ 2 = 75.",kira:()=>bunda(200/(100/50+100/100),1)}},

{n:5, tempat:"Litar Pecutan", sk:"9.2.1 / 9.2.2 / 9.2.3 Pecutan, nyahpecutan dan penukaran unit", lampiran:"laj5",
 kadNama:"Pecutan", kadEm:"\u{1F3CE}\u{FE0F}", kadFakta:"Pecutan ialah kadar perubahan laju. Pecutan 3 m/s² bermaksud laju bertambah 3 m/s setiap saat.",
 bosKadNama:"Nyahpecutan", bosKadEm:"\u{1F6D1}", bosKadFakta:"Nyahpecutan ialah pecutan bagi laju yang berkurang. Lori yang membrek mengalami nyahpecutan.",
 soalan:[
 {j:"pilih",t:"Pecutan ialah kadar perubahan:",p:["Laju terhadap masa","Jarak terhadap masa","Masa terhadap jarak","Jarak terhadap laju"],b:0,u:"Pecutan = perubahan laju ÷ masa. Ia menyatakan berapa cepat laju berubah.",kira:()=>true},
 {j:"nombor",t:"Sebuah kereta memecut daripada 0 m/s kepada 20 m/s dalam 5 saat. Berapakah pecutannya (m/s²)?",b:4,tol:0.01,suf:"m/s²",u:"Perubahan laju = 20 − 0 = 20 m/s. Pecutan = 20 ÷ 5 = 4 m/s².",kira:()=>(20-0)/5},
 {j:"nombor",t:"Dalam Rajah 1, laju awal kereta ialah 4 m/s dan pecutan tetap. Berapakah laju kereta pada masa 4 saat (m/s)?",b:16,tol:0.01,suf:"m/s",u:"Daripada graf, laju bertambah 3 m/s setiap saat. Pada 4 saat, laju = 4 + 3 × 4 = 16 m/s.",kira:()=>4+3*4},
 {j:"nombor",t:"Dalam Rajah 1, berapakah pecutan kereta itu (m/s²)?",b:3,tol:0.01,suf:"m/s²",u:"Pada 4 saat, laju berubah daripada 4 kepada 16 m/s, iaitu 12 m/s. Pecutan = 12 ÷ 4 = 3 m/s².",kira:()=>((4+3*4)-4)/4},
 {j:"pilih",t:"Nyahpecutan bermaksud:",p:["Laju berkurang dengan masa","Laju bertambah dengan masa","Laju kekal tetap","Objek bergerak ke belakang"],b:0,u:"Nyahpecutan ialah pecutan bagi objek yang laju berkurang, contohnya kereta yang membrek. Pergerakan dianggap pada arah yang tetap.",kira:()=>true},
 {j:"nombor",t:"Sebuah kereta bergerak pada 30 m/s dan membrek sehingga berhenti dalam 6 saat. Berapakah nyahpecutannya (m/s²)?",b:5,tol:0.01,suf:"m/s²",u:"Laju berkurang daripada 30 kepada 0 m/s, iaitu 30 m/s dalam 6 saat. Nyahpecutan = 30 ÷ 6 = 5 m/s².",kira:()=>(30-0)/6},
 {j:"nombor",t:"Pecutan sebuah motosikal ialah 1.5 m/s². Berapakah pertambahan lajunya selepas 8 saat (m/s)?",b:12,tol:0.01,suf:"m/s",u:"Pertambahan laju = pecutan × masa = 1.5 × 8 = 12 m/s.",kira:()=>1.5*8},
 {j:"pilih",t:"Satu m/s² bersamaan dengan berapa km/j² (kilometer sejam sejam)?",p:["12 960","3.6","3 600 000","1 000"],b:0,u:"1 m = 0.001 km dan 1 saat = 1/3 600 jam. 1 m/s² = 0.001 × 3 600 × 3 600 = 12 960 km/j².",kira:()=>0.001*3600*3600}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang graf laju melawan masa dalam Rajah 1.",p:["Garis yang naik menunjukkan pecutan","Makin curam garis, makin besar pecutan","Laju awal ialah 4 m/s pada masa 0","Garis yang turun menunjukkan pecutan bertambah","Garis mendatar menunjukkan pecutan 3 m/s²","Graf itu ialah graf jarak melawan masa"],b:[0,1,2],u:"Garis yang naik bermaksud laju bertambah, iaitu pecutan, dan kecuraman menyatakan besarnya. Garis yang turun bermaksud nyahpecutan. Garis mendatar bermaksud pecutan sifar."}},

{n:6, tempat:"Studio Reka", sk:"9.1.4 / 9.2.3 Masalah laju dan pecutan bukan rutin",  lampiran:"laj6",
 kadNama:"Jarak Brek", kadEm:"\u{1F6A6}", kadFakta:"Kereta yang lebih laju memerlukan masa yang lebih lama untuk berhenti. Itu sebabnya had laju di kawasan sekolah rendah.",
 bosKadNama:"Reka Perjalanan", bosKadEm:"\u{270F}\u{FE0F}", bosKadFakta:"Perjalanan sebenar jarang seragam. Ia ada pecutan, laju tetap dan nyahpecutan. Graf membantu kita nampak semuanya sekali gus.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, laju kereta ialah 20 m/s pada masa 0 dan berkurang 4 m/s setiap saat. Kereta itu mengalami:",p:["Nyahpecutan","Pecutan","Laju seragam","Laju sifar sepanjang masa"],b:0,u:"Laju berkurang dengan masa, jadi kereta itu mengalami nyahpecutan.",kira:()=>true},
 {j:"nombor",t:"Dalam Rajah 1, berapakah laju kereta pada masa 3 saat (m/s)?",b:8,tol:0.01,suf:"m/s",u:"Laju = 20 − 4 × 3 = 8 m/s.",kira:()=>20-4*3},
 {j:"nombor",t:"Dalam Rajah 1, pada saat yang ke berapakah kereta itu berhenti?",b:5,tol:0.01,suf:"saat",u:"Laju berkurang 4 m/s setiap saat, jadi 20 ÷ 4 = 5 saat untuk laju menjadi 0.",kira:()=>20/4},
 {j:"nombor",t:"Berapakah nyahpecutan kereta dalam Rajah 1 (m/s²)?",b:4,tol:0.01,suf:"m/s²",u:"Pada 5 saat laju berubah daripada 20 kepada 0 m/s. Nyahpecutan = 20 ÷ 5 = 4 m/s².",kira:()=>(20-0)/5},
 {j:"nombor",t:"Seorang pelari memecut daripada 3 m/s kepada 9 m/s dengan pecutan 1.5 m/s². Berapakah masa yang diambil (saat)?",b:4,tol:0.01,suf:"saat",u:"Perubahan laju = 9 − 3 = 6 m/s. Masa = perubahan laju ÷ pecutan = 6 ÷ 1.5 = 4 saat.",kira:()=>(9-3)/1.5},
 {j:"nombor",t:"Kereta A memecut 2 m/s² dari keadaan pegun selama 10 saat. Kereta B memecut 3 m/s² dari keadaan pegun selama 6 saat. Berapakah beza laju akhir kedua-dua kereta (m/s)?",b:2,tol:0.01,suf:"m/s",u:"Laju akhir A = 2 × 10 = 20 m/s dan laju akhir B = 3 × 6 = 18 m/s. Bezanya 20 − 18 = 2 m/s.",kira:()=>2*10-3*6},
 {j:"pilih",t:"Sebuah lif bergerak pada 4 m/s dan berhenti dalam 2 saat. Berapakah nyahpecutan lif itu?",p:["2 m/s²","8 m/s²","0.5 m/s²","6 m/s²"],b:0,u:"Laju berkurang 4 m/s dalam 2 saat. Nyahpecutan = 4 ÷ 2 = 2 m/s².",kira:()=>4/2===2},
 {j:"nombor",t:"Sebuah kereta bergerak pada 72 km/j dan membrek sehingga berhenti dalam 5 saat. Berapakah nyahpecutan kereta itu (m/s²)?",b:4,tol:0.01,suf:"m/s²",u:"72 km/j = 20 m/s. Nyahpecutan = 20 ÷ 5 = 4 m/s².",kira:()=>(72*1000/3600)/5}],
 bos:{j:"buka",
  t:"Reka satu perjalanan pendek sebuah kenderaan (contohnya motosikal di simpang lampu isyarat) yang ada pecutan, laju tetap dan nyahpecutan.",
  arahan:"Nyatakan laju awal, berapa lama setiap bahagian, dan hitung pecutan serta nyahpecutan dengan unit yang betul. Kira laju purata seluruh perjalanan. Jelaskan sama ada laju itu seragam atau tak seragam pada setiap bahagian.",
  u:"Jawapan TP6 yang kukuh memberi data yang masuk akal, mengira pecutan dan nyahpecutan sebagai perubahan laju ÷ masa dengan unit yang betul, mengira laju purata sebagai jumlah jarak ÷ jumlah masa, dan mengaitkan bahagian perjalanan dengan laju seragam atau tak seragam."}}
];

module.exports = {
  id:"m2b9", tingkatan:2, kod:"9.0 Laju dan Pecutan",
  tajuk:"Litar Laju",
  subtajuk:"Matematik Ting. 2 · Bab 9 Laju dan Pecutan",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat menerangkan maksud laju sebagai jarak dibahagi masa dan mengenal unit laju. Langkah seterusnya ialah membezakan laju seragam daripada laju tak seragam dengan membaca graf.",
   2:"{n} memahami laju seragam dan tak seragam serta boleh mentafsir graf jarak melawan masa. Perlu lebih latihan menukar unit dan mengira laju purata sebelum bergerak ke TP3.",
   3:"{n} boleh mengira laju dan menukar unit km/j kepada m/s dan sebaliknya, serta mengira pecutan daripada perubahan laju dan masa. Galakkan menyemak unit pada setiap jawapan.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah tentang laju, laju purata dan pecutan. Seterusnya latih masalah yang melibatkan dua bahagian perjalanan dan pertukaran unit.",
   5:"{n} dapat menyelesaikan masalah kompleks yang melibatkan laju purata, pecutan, nyahpecutan dan penukaran unit. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya mereka bentuk perjalanan dengan pecutan, laju tetap dan nyahpecutan serta mengira laju purata dengan betul. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Laju dan Pecutan. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyatakan laju sebagai jarak dibahagi masa dengan bimbingan rakan sebaya."
  },
  lampiran:{ laj1:R_LAJ1, laj2:R_LAJ2, laj3:R_LAJ3, laj4:R_LAJ4, laj5:R_LAJ5, laj6:R_LAJ6 },
  aras:ARAS
};
