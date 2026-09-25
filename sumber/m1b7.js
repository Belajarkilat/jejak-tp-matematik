/* Sumber kandungan — Matematik KSSM Tingkatan 1, Bab 7 Ketaksamaan Linear.
   Fail ini disunting tangan. Jalankan `node bina.js m1b7` untuk menyemaknya
   dan menghasilkan bank-m1b7.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 1, Bahagian Pembangunan Kurikulum, muka 59 (dskp/matematik-t1.pdf).
   DSKP Tingkatan 1 menulis satu jadual enam tahap bagi setiap bab, jadi tiada
   penyesuaian diperlukan. Perhatikan bahawa Tahap 6 dalam DSKP Tingkatan 1
   berbunyi "masalah bukan rutin" tanpa "secara kreatif".

   Rajah interaktif ialah widget `t1ketaksamaan` dalam widget-m1b7.js. Semua
   jawapan berangka dikira dengan kod dalam medan `kira` dan dibandingkan oleh
   tools/semak-jawapan.js. Tanda < dan > dalam teks soalan ditulis sebagai
   entiti HTML oleh fungsi htmlkan() di hujung fail (raw < mengganggu HTML). */

const SPI = [
"Mempamerkan pengetahuan asas tentang ketaksamaan linear dalam satu pemboleh ubah.",
"Mempamerkan kefahaman tentang ketaksamaan linear dalam satu pemboleh ubah.",
"Mengaplikasikan kefahaman tentang ketaksamaan linear dalam satu pemboleh ubah untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang ketaksamaan linear dalam satu pemboleh ubah dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang ketaksamaan linear dalam satu pemboleh ubah dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang ketaksamaan linear dalam satu pemboleh ubah dalam konteks penyelesaian masalah bukan rutin."];

/* Pembantu semakan bebas: nombor bulat pada garis nombor yang memenuhi syarat. */
const julat = (lo, hi, dl = 1) => { const o = []; for (let v = lo; v <= hi + 1e-9; v += dl) o.push(Math.round(v * 1000) / 1000); return o; };
const ok = (s, v, k) => s === ">" ? v > k : s === "≥" ? v >= k : s === "<" ? v < k : v <= k;
const GE = "≥", LE = "≤";

/* ---------- lampiran: rajah garis nombor interaktif ---------- */

const R_KT1 = {
  jenis:"interaktif", w:"t1ketaksamaan", mod:"garis", nama:"t", tajuk:"Suhu (°C)",
  nilai:[-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6], lo:-8, hi:8, dl:1, lb:2, awal:{ k:9, s:0 },
  kapsyen:"Rajah 1 · Gerakkan gelongsor untuk menukar nilai sempadan dan tanda. Titik penuh ialah nombor yang memenuhi syarat.",
  alt:"Rajah interaktif garis nombor dari negatif lapan hingga lapan; gelongsor menukar nilai sempadan dan tanda ketaksamaan, dan titik yang memenuhi syarat diserlahkan"
};
const R_KT2 = {
  jenis:"interaktif", w:"t1ketaksamaan", mod:"sifat", a:-4, b:6, julat:12, lb:4,
  ops:[["+",4],["-",7],["*",2],["*",-1],["/",2],["/",-2]],
  kapsyen:"Rajah 1 · a = -4 dan b = 6, jadi a < b. Pilih operasi untuk kedua-dua belah dan lihat sama ada tanda berubah.",
  alt:"Rajah interaktif dua nombor a sama dengan negatif empat dan b sama dengan enam pada garis nombor; gelongsor memilih operasi tambah, tolak, darab atau bahagi dan menunjukkan sama ada tanda ketaksamaan berubah"
};
const R_KT3 = {
  jenis:"interaktif", w:"t1ketaksamaan", mod:"garis", nama:"v", tajuk:"Laju kenderaan (km/j)",
  nilai:[60,70,80,90,100,110], lo:40, hi:120, dl:10, lb:20, awal:{ k:3, s:3 },
  kapsyen:"Rajah 1 · Papan tanda had laju. Pilih had dan tanda untuk melihat laju yang dibenarkan.",
  alt:"Rajah interaktif garis nombor laju dari empat puluh hingga seratus dua puluh kilometer sejam; gelongsor memilih had laju dan tanda ketaksamaan"
};
const R_KT4 = {
  jenis:"interaktif", w:"t1ketaksamaan", mod:"uji", nama:"x", a:2, b:3, s:"<", c:11, lo:-8, hi:8, dl:1, lb:2, x0:8, cabar:true,
  kapsyen:"Rajah 1 · Uji nilai x dalam 2x + 3 < 11. Selesaikan dahulu di kertas conteng, kemudian semak dengan rajah.",
  alt:"Rajah interaktif menguji nilai x dalam ketaksamaan dua x tambah tiga kurang daripada sebelas pada garis nombor; sinar penyelesaian disembunyikan dalam mod cabar"
};
const R_KT5 = {
  jenis:"interaktif", w:"t1ketaksamaan", mod:"uji", nama:"n", a:7, b:15, s:LE, c:60, lo:0, hi:10, dl:1, lb:2, x0:6, cabar:true,
  kapsyen:"Rajah 1 · Aina ada RM60. Bekas RM15 dan setiap kuih RM7. Uji bilangan kuih n dalam 7n + 15 ≤ 60, kemudian semak.",
  alt:"Rajah interaktif menguji bilangan kuih n dalam ketaksamaan tujuh n tambah lima belas kurang daripada atau sama dengan enam puluh; sinar penyelesaian disembunyikan dalam mod cabar"
};
const R_KT6 = {
  jenis:"interaktif", w:"t1ketaksamaan", mod:"serentak", nama:"x", s1:">", s2:LE,
  p:[-4,-3,-2,-1,0,1,2], q:[1,2,3,4,5,6,7], p0:2, q0:2, lo:-8, hi:8, dl:1, lb:2,
  kapsyen:"Rajah 1 · Dua syarat serentak. Gerakkan sempadan 1 dan sempadan 2 untuk melihat bahagian yang dikongsi oleh kedua-duanya.",
  alt:"Rajah interaktif dua ketaksamaan serentak pada garis nombor; dua gelongsor menukar sempadan dan bahagian persilangan menunjukkan penyelesaian"
};

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Peti Sejuk Pasar Raya", sk:"7.1.1 Membanding nombor dan garis nombor", lampiran:"kt1",
 kadNama:"Suhu Negatif", kadEm:"❄️", kadFakta:"Suhu di bawah 0°C ditulis dengan tanda negatif. Suhu -5°C lebih sejuk daripada -2°C, walaupun 5 lebih besar daripada 2.",
 bosKadNama:"Garis Nombor", bosKadEm:"\u{1F4CF}", bosKadFakta:"Pada garis nombor, nombor di sebelah kanan sentiasa lebih besar. Jadi -1 lebih besar daripada -7.",
 soalan:[
 {j:"pilih",t:"Pada garis nombor, nombor yang terletak lebih ke kanan sentiasa:",p:["Lebih besar","Lebih kecil daripada yang di kiri","Sama nilai dengan sifar","Sentiasa bernilai negatif"],b:0,u:"Semakin ke kanan, semakin besar nilainya. Semakin ke kiri, semakin kecil."},
 {j:"pilih",t:"Yang manakah pernyataan yang BENAR?",p:["-3 < 2","-3 > 2","-1 < -6","0 < -4"],b:0,u:"-3 berada di sebelah kiri 2 pada garis nombor, jadi -3 < 2.",kira:()=>-3<2},
 {j:"pilih",t:"Susunan menaik (terkecil ke terbesar) bagi -4, 3 dan -1 ialah:",p:["-4, -1, 3","-1, -4, 3","3, -1, -4","-4, 3, -1"],b:0,u:"Pada garis nombor, -4 paling kiri, kemudian -1, dan 3 paling kanan."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan t > 2. Berapakah nombor bulat terkecil pada garis nombor (-8 hingga 8) yang memenuhi syarat itu?",b:3,tol:0.01,u:"t > 2 tidak termasuk 2. Nombor bulat pertama selepas 2 ialah 3.",kira:()=>julat(-8,8).find(v=>ok(">",v,2))},
 {j:"nombor",t:"Suhu di puncak sebuah bukit ialah -3°C dan suhu di kaki bukit ialah 5°C. Berapakah beza suhu itu (dalam °C)?",b:8,tol:0.01,u:"Beza = 5 - (-3) = 5 + 3 = 8. Kaki bukit lebih panas 8°C.",kira:()=>5-(-3)},
 {j:"pilih",t:"Simbol ≤ dibaca:",p:["Kurang daripada atau sama dengan","Kurang daripada","Lebih daripada atau sama dengan","Tidak sama dengan"],b:0,u:"≤ bermaksud kurang daripada atau sama dengan. Garis kecil di bawah simbol < ialah tanda 'sama dengan'."},
 {j:"pilih",t:"Dalam Rajah 1, pilih tanda ≥ dan nilai 1. Bulatan pada 1 ialah:",p:["Penuh, kerana 1 termasuk","Kosong, kerana 1 tidak termasuk","Penuh, kerana 1 tidak termasuk","Kosong, kerana 1 termasuk"],b:0,u:"≥ termasuk nilai sempadan, jadi bulatan diwarnakan penuh."},
 {j:"susun",t:"Susun langkah melukis t > 3 pada garis nombor.",p:["Tandakan 3 pada garis nombor","Lukis bulatan kosong pada 3","Lukis anak panah ke kanan dari 3","Semak dengan satu nombor, contohnya 5"],b:[0,1,2,3],u:"Tanda > tidak termasuk 3 (bulatan kosong) dan nilai yang lebih besar berada di kanan."}],
 bos:{j:"banyak",t:"Pilih SEMUA ketaksamaan yang BENAR.",p:["-2 > -5","0 > -1","-7 < -3","4 < -4","-1 > 1","3 ≥ 3"],b:[0,1,2,5],u:"-2 di kanan -5, 0 di kanan -1, -7 di kiri -3 dan 3 sama dengan 3. Tetapi 4 bukan kurang daripada -4, dan -1 bukan lebih besar daripada 1."}},

{n:2, tempat:"Neraca Sifat", sk:"7.1.2 Sifat akas, transitif, songsangan dan operasi asas", lampiran:"kt2",
 kadNama:"Songsang Tanda", kadEm:"↔️", kadFakta:"Bila darab atau bahagi kedua-dua belah dengan nombor negatif, tanda ketaksamaan mesti dibalikkan. Ini kesilapan paling biasa.",
 bosKadNama:"Sifat Akas", bosKadEm:"\u{1FA9E}", bosKadFakta:"Jika a < b, maka b > a. Baca dari kanan ke kiri, tanda ikut berpusing arah.",
 soalan:[
 {j:"pilih",t:"Diberi a < b. Sifat akas menyatakan bahawa:",p:["b > a","b < a","a > b","a = b"],b:0,u:"Sifat akas: a < b sama maksudnya dengan b > a."},
 {j:"pilih",t:"Jika a < b dan b < c, maka menurut sifat transitif:",p:["a < c","a > c","c < a","a = c"],b:0,u:"a lebih kecil daripada b, b lebih kecil daripada c, jadi a lebih kecil daripada c."},
 {j:"pilih",t:"Dalam Rajah 1, pilih operasi 'tambah 4'. Selepas itu tanda antara a dan b:",p:["Kekal <","Bertukar kepada >","Menjadi =","Tidak boleh dibandingkan"],b:0,u:"Menambah nombor yang sama pada kedua-dua belah tidak mengubah tanda. -4 + 4 = 0 dan 6 + 4 = 10, jadi 0 < 10."},
 {j:"pilih",t:"Dalam Rajah 1, pilih operasi 'darab -1'. Tanda antara a dan b:",p:["Bertukar kepada >","Kekal <","Menjadi =","Hilang"],b:0,u:"Darab dengan nombor negatif membalikkan tanda. -4 menjadi 4 dan 6 menjadi -6, jadi 4 > -6."},
 {j:"nombor",t:"Dalam Rajah 1, pilih operasi 'darab 2'. Berapakah nilai b selepas operasi?",b:12,tol:0.01,u:"b = 6, jadi 6 × 2 = 12.",kira:()=>6*2},
 {j:"nombor",t:"Diberi 3 < 7. Kedua-dua belah didarab dengan -2. Berapakah nilai di sebelah kanan (yang tadi 7)?",b:-14,tol:0.01,u:"7 × (-2) = -14 dan 3 × (-2) = -6. Tanda berbalik, jadi -6 > -14.",kira:()=>7*-2},
 {j:"pilih",t:"Diberi 2 < 5. Songsangan terhadap pendaraban (bentuk 1 ÷ nombor) memberikan:",p:["1/2 > 1/5","1/2 < 1/5","1/2 = 1/5","2/1 > 5/1"],b:0,u:"Kalau dua nombor positif, mengambil songsangan membalikkan tanda. 1/2 = 0.5 dan 1/5 = 0.2, jadi 0.5 > 0.2."},
 {j:"pilih",t:"Diberi 8 > 2. Kedua-dua belah dibahagi dengan -2. Hasilnya ialah:",p:["-4 < -1","-4 > -1","4 < 1","-4 = -1"],b:0,u:"8 ÷ (-2) = -4 dan 2 ÷ (-2) = -1. Bahagi dengan nombor negatif membalikkan tanda, jadi -4 < -1."}],
 bos:{j:"pilih",t:"Seorang murid menulis: 'Diberi 4 < 9, maka 4 × (-3) < 9 × (-3)'. Apakah kesilapannya?",p:["Tanda patut bertukar kepada >, kerana darab dengan nombor negatif","Tanda patut kekal <, kerana 4 lebih kecil daripada 9","4 × (-3) dan 9 × (-3) tidak boleh dibandingkan","Nombor negatif tidak boleh didarab dalam ketaksamaan"],b:0,u:"4 × (-3) = -12 dan 9 × (-3) = -27. -12 lebih besar daripada -27, jadi tanda mesti menjadi >."}},

{n:3, tempat:"Papan Tanda Jalan", sk:"7.2.1 Membentuk ketaksamaan daripada situasi harian", lampiran:"kt3",
 kadNama:"Simbol Situasi", kadEm:"\u{1F6A6}", kadFakta:"'Tidak melebihi' bermaksud ≤, manakala 'melebihi' bermaksud >. Satu perkataan boleh mengubah bulatan kosong kepada bulatan penuh.",
 bosKadNama:"Kata Kunci", bosKadEm:"\u{1F511}", bosKadFakta:"Sekurang-kurangnya bermaksud ≥, paling banyak bermaksud ≤, lebih daripada bermaksud >, dan kurang daripada bermaksud <.",
 soalan:[
 {j:"pilih",t:"Had laju sebuah lebuh raya ialah 110 km/j. Laju v yang dibenarkan dinyatakan sebagai:",p:["v ≤ 110","v ≥ 110 km/j sahaja","v < 110 km/j sahaja","v > 110 km/j sahaja"],b:0,u:"Had laju bermaksud tidak boleh melebihi 110, dan tepat 110 masih dibenarkan. Maka v ≤ 110."},
 {j:"pilih",t:"Sebuah lif boleh membawa paling banyak 8 orang. Jika n ialah bilangan orang, maka:",p:["n ≤ 8","n ≥ 8 orang sahaja","n < 8 orang sahaja","n > 8 orang sahaja"],b:0,u:"Paling banyak 8 bermaksud 8 atau kurang, jadi n ≤ 8."},
 {j:"pilih",t:"Untuk menaiki wahana, tinggi t mesti sekurang-kurangnya 120 cm. Ketaksamaan yang betul ialah:",p:["t ≥ 120","t ≤ 120","t > 120","t < 120"],b:0,u:"Sekurang-kurangnya 120 bermaksud 120 atau lebih, jadi t ≥ 120."},
 {j:"pilih",t:"'Umur u mesti melebihi 17 tahun.' Ini ditulis sebagai:",p:["u > 17","u ≥ 17","u < 17","u ≤ 17"],b:0,u:"Melebihi 17 tidak termasuk 17 sendiri, jadi u > 17."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan v ≤ 90. Berapakah bilangan titik (kelipatan 10 dari 40 hingga 120) yang memenuhi syarat itu?",b:6,tol:0.01,u:"Titik yang memenuhi ialah 40, 50, 60, 70, 80 dan 90, iaitu 6 titik.",kira:()=>julat(40,120,10).filter(v=>ok(LE,v,90)).length},
 {j:"nombor",t:"Sebuah bas boleh membawa paling banyak 40 penumpang. Berapakah nilai maksimum n, iaitu bilangan penumpang?",b:40,tol:0.01,u:"Ketaksamaan ialah n ≤ 40, jadi nilai terbesar n ialah 40.",kira:()=>40},
 {j:"pilih",t:"Wang Aina, w, kurang daripada RM50. Ketaksamaan yang betul ialah:",p:["w < 50","w ≤ 50 (termasuk RM50)","w > 50 (lebih daripada)","w ≥ 50 (sekurang-kurangnya)"],b:0,u:"Kurang daripada 50 tidak termasuk 50, jadi w < 50."},
 {j:"pilih",t:"Situasi manakah yang sepadan dengan x ≥ 5?",p:["Bilangan ahli sekurang-kurangnya 5","Bilangan ahli kurang daripada 5","Bilangan ahli paling banyak 5","Bilangan ahli melebihi 5"],b:0,u:"x ≥ 5 bermaksud 5 atau lebih, iaitu sekurang-kurangnya 5."}],
 bos:{j:"nombor",t:"Sebuah kedai memberi diskaun jika jumlah belian sekurang-kurangnya RM80. Aina membeli barang berharga RM35 dan RM28. Berapakah jumlah minimum tambahan (dalam RM) supaya dia layak mendapat diskaun?",b:17,tol:0.01,u:"Jumlah sekarang ialah 35 + 28 = 63. Perlu 63 + x ≥ 80, maka x ≥ 17. Minimumnya RM17.",kira:()=>80-(35+28)}},

{n:4, tempat:"Bengkel Penyelesai", sk:"7.2.2 Menyelesaikan ketaksamaan linear dalam satu pemboleh ubah", lampiran:"kt4",
 kadNama:"Uji Nombor", kadEm:"\u{1F9EA}", kadFakta:"Kalau ragu-ragu dengan jawapan, ganti satu nombor ke dalam ketaksamaan asal. Kalau ia benar, nombor itu ada dalam penyelesaian.",
 bosKadNama:"Balik Tanda", bosKadEm:"\u{1F504}", bosKadFakta:"Bahagi atau darab kedua-dua belah dengan nombor negatif? Ingat balikkan tanda ketaksamaan.",
 soalan:[
 {j:"pilih",t:"Selesaikan x + 5 > 9.",p:["x > 4","x > 14 (tolak dahulu)","x < 4 (tanda dibalikkan)","x < 14 (tambah 5 dahulu)"],b:0,u:"Tolak 5 daripada kedua-dua belah: x > 9 - 5, iaitu x > 4."},
 {j:"pilih",t:"Selesaikan x - 3 ≤ 2.",p:["x ≤ 5","x ≤ -1 (tolak 3 dahulu)","x ≥ 5 (tanda dibalikkan)","x ≥ -1 (tolak 3 dahulu)"],b:0,u:"Tambah 3 pada kedua-dua belah: x ≤ 2 + 3, iaitu x ≤ 5."},
 {j:"nombor",t:"Selesaikan 3x < 18. Berapakah nilai sempadan x (x < ...)?",b:6,tol:0.01,u:"Bahagi kedua-dua belah dengan 3 (positif, tanda kekal): x < 6.",kira:()=>18/3},
 {j:"nombor",t:"Dalam Rajah 1 (2x + 3 < 11), berapakah nilai maksimum x yang merupakan nombor bulat dan memenuhi ketaksamaan itu?",b:3,tol:0.01,u:"2x < 8, maka x < 4. Nombor bulat terbesar yang kurang daripada 4 ialah 3.",kira:()=>Math.max(...julat(-8,8).filter(x=>2*x+3<11))},
 {j:"pilih",t:"Selesaikan -2x > 6.",p:["x < -3","x > -3 (tanda kekal)","x < 3 (lupa tanda negatif)","x > 3 (lupa tanda negatif)"],b:0,u:"Bahagi kedua-dua belah dengan -2 dan balikkan tanda: x < -3."},
 {j:"pilih",t:"Selesaikan 2x + 3 ≥ 11.",p:["x ≥ 4","x ≤ 4 (tanda dibalikkan)","x ≥ 7 (tidak ditolak 3)","x ≥ 14 (tidak dibahagi 2)"],b:0,u:"Tolak 3: 2x ≥ 8. Bahagi dengan 2: x ≥ 4."},
 {j:"nombor",t:"Selesaikan 5x - 7 > 13. Berapakah nilai bulat terkecil x?",b:5,tol:0.01,u:"5x > 20, maka x > 4. Nombor bulat terkecil lebih besar daripada 4 ialah 5.",kira:()=>Math.min(...julat(-20,20).filter(x=>5*x-7>13))},
 {j:"nombor",t:"Selesaikan 4 - x ≥ 1. Berapakah nilai bulat terbesar x?",b:3,tol:0.01,u:"Tolak 4: -x ≥ -3. Bahagi dengan -1 dan balikkan tanda: x ≤ 3. Nilai terbesar ialah 3.",kira:()=>Math.max(...julat(-20,20).filter(x=>4-x>=1))}],
 bos:{j:"susun",t:"Susun langkah menyelesaikan -3x + 2 < 11.",p:["Tolak 2 daripada kedua-dua belah: -3x < 9","Bahagi kedua-dua belah dengan -3","Balikkan tanda ketaksamaan: x > -3","Semak dengan x = 0, iaitu 2 < 11 (benar)"],b:[0,1,2,3],u:"-3x < 9. Bahagi dengan -3 dan balikkan tanda: x > -3. Semak x = 0: -3(0) + 2 = 2 dan 2 < 11, benar."}},

{n:5, tempat:"Pasar Malam Bajet", sk:"7.2.2 Menyelesaikan masalah yang melibatkan ketaksamaan linear", lampiran:"kt5",
 kadNama:"Bajet", kadEm:"\u{1F4B0}", kadFakta:"Dalam masalah bajet, wang yang ada ialah had atas. Jumlah belanja mesti kurang daripada atau sama dengan wang yang ada.",
 bosKadNama:"Nombor Bulat", bosKadEm:"\u{1F522}", bosKadFakta:"Bila jawapan ialah bilangan orang atau barang, pilih nombor bulat yang masih memenuhi syarat. Kuih tak boleh dibeli 6.43 biji.",
 soalan:[
 {j:"nombor",t:"Aina ada RM60. Dia membeli sebuah bekas RM15 dan beberapa keping kuih RM7 sekeping. Berapakah bilangan kuih maksimum yang boleh dia beli?",b:6,tol:0.01,u:"7n + 15 ≤ 60, maka 7n ≤ 45 dan n ≤ 6.43. Nombor bulat terbesar ialah 6.",kira:()=>Math.max(...julat(0,20).filter(n=>7*n+15<=60))},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan n = 6. Berapakah nilai 7n + 15?",b:57,tol:0.01,u:"7 × 6 + 15 = 42 + 15 = 57. Nilai ini kurang daripada 60, jadi n = 6 memenuhi.",kira:()=>7*6+15},
 {j:"nombor",t:"Sebuah teksi mengenakan tambang RM4 ditambah RM2 setiap kilometer. Farid ada RM30. Berapakah jarak maksimum yang boleh dia tempuh (dalam km)?",b:13,tol:0.01,u:"4 + 2d ≤ 30, maka 2d ≤ 26 dan d ≤ 13. Jarak maksimum ialah 13 km.",kira:()=>(30-4)/2},
 {j:"pilih",t:"Sewa gelanggang ialah RM12 sejam dan yuran tetap RM5. Belanjawan ialah RM50. Jika j ialah bilangan jam, ketaksamaan yang betul ialah:",p:["12j + 5 ≤ 50","12j + 5 ≥ 50","12j - 5 ≤ 50","5j + 12 ≤ 50"],b:0,u:"Jumlah bayaran ialah 12j + 5 dan ia mesti tidak melebihi 50, jadi 12j + 5 ≤ 50."},
 {j:"nombor",t:"Sewa gelanggang ialah RM12 sejam dan yuran tetap RM5. Belanjawan ialah RM50. Berapakah jam maksimum (nombor bulat) yang boleh disewa?",b:3,tol:0.01,u:"12j ≤ 45, maka j ≤ 3.75. Nombor bulat terbesar ialah 3 jam.",kira:()=>Math.max(...julat(0,20).filter(j=>12*j+5<=50))},
 {j:"nombor",t:"Purata tiga ujian mesti sekurang-kurangnya 60 markah. Markah dua ujian ialah 55 dan 62. Berapakah markah minimum ujian ketiga?",b:63,tol:0.01,u:"(55 + 62 + m) ÷ 3 ≥ 60. 117 + m ≥ 180, maka m ≥ 63.",kira:()=>60*3-(55+62)},
 {j:"pilih",t:"Sebuah lif menanggung berat maksimum 600 kg. Empat orang seberat purata 70 kg masuk. Ketaksamaan bagi berat b barang tambahan ialah:",p:["b ≤ 320","b ≥ 320","b ≤ 530","b ≥ 880"],b:0,u:"Berat empat orang ialah 4 × 70 = 280 kg. 280 + b ≤ 600, maka b ≤ 320.",kira:()=>600-4*70===320},
 {j:"pilih",t:"Dalam Rajah 1, mengapa n = 6.43 tidak sesuai sebagai bilangan kuih yang dibeli?",p:["Bilangan kuih mesti nombor bulat, jadi n = 6","Nombor perpuluhan tidak boleh dalam ketaksamaan","Kerana 6.43 lebih besar daripada 60","Kerana n mesti sentiasa negatif"],b:0,u:"Penyelesaian ketaksamaan ialah n ≤ 6.43, tetapi kuih dibeli biji demi biji. Nombor bulat terbesar yang memenuhi ialah 6."}],
 bos:{j:"nombor",t:"Puan Sari mempunyai RM100. Dia mahu membeli x buah buku berharga RM8 seunit dan 2 batang pen berharga RM3 seunit, serta mahu baki wangnya sekurang-kurangnya RM20. Berapakah bilangan buku maksimum yang boleh dia beli?",b:9,tol:0.01,u:"Belanja = 8x + 6 dan baki = 100 - (8x + 6) ≥ 20. Maka 8x + 6 ≤ 80, 8x ≤ 74 dan x ≤ 9.25. Nombor bulat terbesar ialah 9.",kira:()=>Math.max(...julat(0,30).filter(x=>100-(8*x+6)>=20))}},

{n:6, tempat:"Zon Selamat", sk:"7.2.3 Menyelesaikan ketaksamaan linear serentak dalam satu pemboleh ubah", lampiran:"kt6",
 kadNama:"Bahagian Kongsi", kadEm:"\u{1F91D}", kadFakta:"Ketaksamaan serentak bermaksud nilai x mesti memenuhi kedua-dua syarat. Pada garis nombor, jawapannya ialah bahagian yang dikongsi oleh kedua-dua sinar.",
 bosKadNama:"Tiada Titik Temu", bosKadEm:"\u{1F6AB}", bosKadFakta:"Kadang-kadang dua sinar bergerak menjauhi satu sama lain dan tidak pernah bertemu. Ketika itu, tiada penyelesaian.",
 soalan:[
 {j:"pilih",t:"Penyelesaian serentak bagi x > 2 dan x < 7 ialah:",p:["2 < x < 7","x > 7","x < 2","Tiada penyelesaian"],b:0,u:"Nilai x mesti lebih besar daripada 2 dan lebih kecil daripada 7, iaitu 2 < x < 7."},
 {j:"pilih",t:"Penyelesaian serentak bagi x ≥ 3 dan x > 5 ialah:",p:["x > 5","x ≥ 3","3 ≤ x < 5","Tiada penyelesaian"],b:0,u:"Nombor yang lebih besar daripada 5 pasti juga lebih besar daripada atau sama dengan 3, jadi x > 5."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x > -2 dan x ≤ 3. Berapakah bilangan nombor bulat yang memenuhi kedua-dua syarat?",b:5,tol:0.01,u:"Nombor bulat yang memenuhi -2 < x ≤ 3 ialah -1, 0, 1, 2 dan 3, iaitu 5 nombor.",kira:()=>julat(-8,8).filter(v=>ok(">",v,-2)&&ok(LE,v,3)).length},
 {j:"nombor",t:"Berapakah nombor bulat terbesar yang memenuhi x > 1 dan x ≤ 6?",b:6,tol:0.01,u:"1 < x ≤ 6. Nombor terbesar ialah 6, kerana ≤ termasuk 6.",kira:()=>Math.max(...julat(-8,8).filter(v=>ok(">",v,1)&&ok(LE,v,6)))},
 {j:"pilih",t:"Yang manakah nombor yang memenuhi 2 < x ≤ 5?",p:["5","2","6","1"],b:0,u:"5 memenuhi kerana ≤ 5 termasuk 5. 2 tidak termasuk, dan 6 serta 1 berada di luar julat.",kira:()=>ok(">",5,2)&&ok(LE,5,5)},
 {j:"nombor",t:"Selesaikan serentak 2x - 1 > 3 dan x + 4 ≤ 9. Berapakah bilangan nombor bulat x yang memenuhi?",b:3,tol:0.01,u:"2x > 4 memberi x > 2, dan x ≤ 5. Jadi 2 < x ≤ 5, iaitu x = 3, 4, 5, tiga nombor.",kira:()=>julat(-20,20).filter(x=>2*x-1>3&&x+4<=9).length},
 {j:"pilih",t:"Selesaikan serentak 3x + 1 < 13 dan x - 2 ≥ -3.",p:["-1 ≤ x < 4","-1 < x < 4","-1 ≤ x ≤ 4","-5 ≤ x < 4"],b:0,u:"3x < 12 memberi x < 4. x ≥ -3 + 2 memberi x ≥ -1. Jadi -1 ≤ x < 4."},
 {j:"pilih",t:"Penyelesaian serentak bagi x < -1 dan x > 3 ialah:",p:["Tiada penyelesaian","-1 < x < 3","3 < x < -1","Semua nombor"],b:0,u:"Tiada nombor yang kurang daripada -1 dan lebih besar daripada 3 pada masa yang sama."}],
 bos:{j:"buka",
  t:"Sebuah taman tema membenarkan pengunjung menaiki wahana jika tinggi t sekurang-kurangnya 110 cm dan kurang daripada 160 cm. Bina dan tunjukkan penyelesaiannya.",
  arahan:"Tulis ketaksamaan serentak, lukis penyelesaian pada garis nombor (bulatan kosong atau penuh) dan cadangkan dua tinggi yang layak serta dua tinggi yang tidak layak. Jelaskan pilihan awak.",
  u:"Jawapan TP6 yang kukuh menulis t ≥ 110 dan t < 160 (110 ≤ t < 160), melukis bulatan penuh pada 110 dan bulatan kosong pada 160, memberi contoh sah seperti 110 dan 150, contoh tidak sah seperti 105 dan 160, serta menjelaskan kenapa sempadan dilukis begitu."}}
];

/* Tanda < dan > dalam teks paparan ditulis sebagai entiti HTML. */
const htmlkan = t => typeof t === "string" ? t.replace(/</g, "&lt;").replace(/>/g, "&gt;") : t;
ARAS.forEach(a => a.soalan.concat([a.bos]).forEach(q => {
  ["t", "u", "arahan"].forEach(k => { if (q[k]) q[k] = htmlkan(q[k]); });
  if (q.p) q.p = q.p.map(htmlkan);
}));

module.exports = {
  id:"m1b7", tingkatan:1, kod:"7.0 Ketaksamaan Linear",
  tajuk:"Zon Selamat",
  subtajuk:"Matematik Ting. 1 · Bab 7 Ketaksamaan Linear",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat membanding nombor termasuk nombor negatif, membaca simbol >, <, ≥ dan ≤, serta menandakannya pada garis nombor. Langkah seterusnya ialah memahami sifat-sifat ketaksamaan.",
   2:"{n} memahami sifat akas, sifat transitif dan kesan operasi asas ke atas ketaksamaan, termasuk tanda yang bertukar apabila didarab atau dibahagi dengan nombor negatif. Latih menggunakan sifat ini dalam bentuk algebra sebelum ke TP3.",
   3:"{n} boleh menukar situasi harian seperti had laju dan had bilangan kepada ketaksamaan linear yang betul. Galakkan {n} menghafal kata kunci seperti sekurang-kurangnya dan paling banyak.",
   4:"{n} mampu menyelesaikan ketaksamaan linear satu pemboleh ubah, termasuk membalikkan tanda apabila membahagi dengan nombor negatif, dan menyemaknya dengan satu nilai ujian. Seterusnya latih masalah berayat.",
   5:"{n} dapat membentuk dan menyelesaikan ketaksamaan bagi masalah kompleks seperti bajet dan purata, serta memilih nombor bulat yang sesuai. Sudah bersedia untuk ketaksamaan serentak.",
   6:"{n} berjaya menyelesaikan ketaksamaan linear serentak, melukis penyelesaian pada garis nombor dan menjelaskan sempadan yang termasuk atau tidak. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Ketaksamaan Linear. Cadangan: ulang hentian pertama menggunakan Rajah 1, sambil menerangkan kenapa bulatan pada sempadan kosong atau penuh."
  },
  lampiran:{ kt1:R_KT1, kt2:R_KT2, kt3:R_KT3, kt4:R_KT4, kt5:R_KT5, kt6:R_KT6 },
  aras:ARAS
};
