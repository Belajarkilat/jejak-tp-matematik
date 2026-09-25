/* Sumber kandungan — Matematik KSSM Tingkatan 1, Bab 5 Ungkapan Algebra.
   Fail ini disunting tangan. Jalankan `node bina.js m1b5` untuk menyemaknya
   dan menghasilkan bank-m1b5.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 1, Bahagian Pembangunan Kurikulum, muka 51 (dskp/matematik-t1.pdf).
   DSKP Tingkatan 1 memberikan enam Standard Prestasi khusus bagi bab ini.

   Jawapan betul ditulis pada indeks 0 (b:0) bagi soalan pilih dan diagihkan oleh
   pembina. Medan `kira` ialah semakan bebas untuk tools/semak-jawapan.js: nilai
   berangka, atau boolean bagi kesetaraan ungkapan yang diuji pada beberapa nilai. */
const { s } = require("./_k");
const uji = [-3, -1, 0, 1, 2, 5, 7];
const dua = (f, g) => uji.every(v => f(v) === g(v));

const SPI = [
"Mempamerkan pengetahuan asas tentang pemboleh ubah dan ungkapan algebra.",
"Mempamerkan kefahaman tentang pemboleh ubah dan ungkapan algebra.",
"Mengaplikasikan kefahaman tentang ungkapan algebra untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang ungkapan algebra dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang ungkapan algebra dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang ungkapan algebra dalam konteks penyelesaian masalah bukan rutin."];

/* ---------- lampiran: rajah interaktif ---------- */

const W = "t1algebra";
const R_ALG1 = {
  jenis:"interaktif", w:W, mod:"nilai", a:1, b:3, xNilai:[1,2,3,4,5,6], i:1,
  kapsyen:"Rajah 1 · Beg berisi x guli dan 3 guli di luar beg. Gerakkan gelongsor x.",
  alt:"Rajah interaktif beg berisi x guli dan 3 guli di luar beg; gelongsor menukar nilai x"
};
const R_ALG2 = {
  jenis:"interaktif", w:W, mod:"nilai", a:3, b:2, xNilai:[1,2,3,4,5,6], i:1,
  kapsyen:"Rajah 1 · Tiga beg, setiap beg x guli, dan 2 guli di luar. Gerakkan gelongsor x.",
  alt:"Rajah interaktif tiga beg berisi x guli setiap satu dan 2 guli lepas; gelongsor menukar nilai x"
};
const R_ALG3 = {
  jenis:"interaktif", w:W, mod:"serupa", i:0,
  set:[
    [[3,"x"],[2,"y"],[5,"x"],[-4,""]],
    [[2,"x"],[3,"x2"],[-1,"x"],[6,""]],
    [[4,"xy"],[2,"x"],[-3,"xy"],[5,"y"]]
  ],
  kapsyen:"Rajah 1 · Pilih ungkapan A, B atau C. Sebutan berwarna sama ialah sebutan serupa.",
  alt:"Rajah interaktif cip sebutan algebra berwarna mengikut pemboleh ubah; gelongsor memilih ungkapan A, B atau C"
};
const R_ALG4 = {
  jenis:"interaktif", w:W, mod:"tambah", cabar:true, i:0, k:1,
  pasang:[
    [[2,3],[1,2],"+"],
    [[4,5],[1,3],"-"],
    [[3,2],[2,4],"+"],
    [[5,4],[2,1],"-"]
  ],
  kapsyen:"Rajah 1 · Pilih pasangan A hingga D. Ringkaskan dahulu, kemudian semak dengan jubin.",
  alt:"Rajah interaktif jubin algebra bagi penambahan dan penolakan dua ungkapan; gelongsor memilih pasangan"
};
const R_ALG5 = {
  jenis:"interaktif", w:W, mod:"ulang", cabar:true, n:3, nMaks:5, xNilai:[2,3,4], i:0,
  kapsyen:"Rajah 1 · Tetapkan n dan x. Kira dahulu, kemudian semak dengan rajah.",
  alt:"Rajah interaktif kotak x didarab berulang n kali menjadi x kuasa n; gelongsor menukar n dan nilai x"
};
const R_ALG6 = {
  jenis:"interaktif", w:W, mod:"darab", op:0, a:2, b:1,
  kapsyen:"Rajah 1 · Bar x disusun dalam baris. Tukar operasi, a dan b.",
  alt:"Rajah interaktif bar x disusun dalam baris untuk pendaraban dan pembahagian sebutan algebra"
};

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Kedai Beg Misteri", sk:"5.1.1 / 5.1.2 Pemboleh ubah dan ungkapan algebra", lampiran:"alg1",
 kadNama:"Huruf Ajaib", kadEm:"\u{1F524}", kadFakta:"Perkataan algebra datang daripada al-jabr, tajuk sebuah buku ahli matematik Parsi bernama Al-Khwarizmi. Beliau menulis kaedah menyelesaikan masalah menggunakan kuantiti yang belum diketahui.",
 bosKadNama:"Tetap atau Berubah", bosKadEm:"\u{1F504}", bosKadFakta:"Pemboleh ubah ialah kuantiti yang nilainya boleh berubah. Nombor biasa seperti 3 dalam x + 3 sentiasa tetap.",
 soalan:[
 {j:"pilih",t:"Dalam algebra, huruf seperti x atau n digunakan untuk mewakili:",p:["Kuantiti yang belum diketahui nilainya","Nombor yang sentiasa bernilai sifar","Tanda operasi bagi pendaraban","Jawapan akhir bagi sesuatu soalan"],b:0,u:"Huruf mewakili kuantiti yang belum diketahui nilainya. Ia dipanggil pemboleh ubah."},
 {j:"pilih",t:"Dalam Rajah 1, bar hijau x berubah panjang apabila gelongsor digerakkan, tetapi 3 kuub kekal. Yang manakah pemboleh ubah?",p:["Guli dalam beg","Bilangan guli di luar beg itu","Bilangan kuub berwarna kuning","Tiada satu pun daripadanya"],b:0,u:"Bilangan guli di dalam beg berubah mengikut x. Guli di luar beg sentiasa 3, jadi nilainya tetap."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x = 4. Berapakah jumlah semua guli, iaitu guli dalam beg dan guli di luar beg?",b:7,tol:0.01,u:"Jumlah = x + 3 = 4 + 3 = 7 guli.",kira:()=>4+3},
 {j:"pilih",t:"Antara kuantiti berikut, yang manakah bernilai tetap dan bukan pemboleh ubah?",p:["Bilangan hari dalam seminggu","Umur Aina dari tahun ke tahun","Harga sebiji mangga setiap musim","Bilangan murid hadir setiap hari"],b:0,u:"Seminggu sentiasa ada 7 hari. Umur, harga dan kehadiran murid boleh berubah."},
 {j:"pilih",t:"Ungkapan algebra bagi \"5 lebih daripada n\" ialah:",p:["n + 5","5n","n − 5","5 − n"],b:0,u:"Lebih daripada bermaksud tambah, jadi n + 5."},
 {j:"pilih",t:"Manakah antara berikut ialah ungkapan algebra?",p:["2y + 7","2 + 7","9 − 4 = 5","12 ÷ 3"],b:0,u:"Ungkapan algebra mengandungi huruf. Hanya 2y + 7 mempunyai pemboleh ubah y."},
 {j:"banyak",t:"Pilih SEMUA kuantiti yang boleh diwakili oleh pemboleh ubah kerana nilainya berubah.",p:["Bilangan penonton setiap perlawanan","Suhu air yang sedang dipanaskan","Bilangan sisi bagi sebuah segi tiga biasa","Bilangan bulan yang ada dalam setahun","Ketinggian pokok yang membesar","Bilangan jari pada satu tangan manusia"],b:[0,1,4],u:"Penonton, suhu air dan ketinggian pokok berubah. Sisi segi tiga, bulan dalam setahun dan jari pada tangan sentiasa tetap."},
 {j:"susun",t:"Susun langkah menerbitkan ungkapan bagi \"wang Ali ialah RM5 lebih daripada wang Bala\".",p:["Kenal pasti kuantiti yang belum diketahui: wang Bala","Wakilkan wang Bala dengan huruf b","Lebih RM5 bermaksud tambah 5","Tulis ungkapan wang Ali: b + 5"],b:[0,1,2,3],u:"Kenal kuantiti tidak diketahui, wakilkan dengan huruf, tafsir frasa, kemudian tulis ungkapan."}],
 bos:{j:"pilih",t:"Farah berkata, \"Dalam x + 3, nilai 3 boleh berubah kerana x berubah.\" Adakah Farah betul?",p:["Salah; hanya x berubah","Betul; semua nombor dalam ungkapan ikut berubah","Betul; 3 mesti bertambah apabila x bertambah","Salah; x juga tetap sepanjang masa"],b:0,u:"Nombor 3 sentiasa 3. Hanya pemboleh ubah x berubah, dan jumlahnya berubah mengikut x."}},

{n:2, tempat:"Kaunter Tiket", sk:"5.1.2 / 5.1.3 Menerbitkan ungkapan dan menentukan nilai", lampiran:"alg2",
 kadNama:"Tambang Teksi", kadEm:"\u{1F695}", kadFakta:"Banyak aplikasi mengira harga dengan ungkapan seperti tambang asas ditambah kadar setiap kilometer. Contohnya 4 + 2k, dengan k ialah jarak dalam kilometer.",
 bosKadNama:"Ganti Nilai", bosKadEm:"\u{1F522}", bosKadFakta:"Menggantikan huruf dengan nombor dipanggil penggantian. Kalau ragu-ragu, cuba nilai kecil seperti 1 atau 2 untuk menyemak ungkapan awak.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tiga beg mengandungi x guli setiap satu dan ada 2 guli di luar. Tetapkan x = 5. Berapakah jumlah semua guli?",b:17,tol:0.01,u:"Jumlah = 3x + 2 = 3(5) + 2 = 17 guli.",kira:()=>3*5+2},
 {j:"pilih",t:"Ungkapan algebra bagi jumlah guli dalam Rajah 1 ialah:",p:["3x + 2","3 + 2x","x + 5","5x"],b:0,u:"Ada 3 beg berisi x guli setiap satu, iaitu 3x, ditambah 2 guli di luar, maka 3x + 2."},
 {j:"pilih",t:"Sebuah buku berharga RM8 dan sebatang pen berharga RMp. Ungkapan bagi jumlah harga 2 buku dan 3 batang pen (RM) ialah:",p:["16 + 3p","8 + 3p","16p + 3","11p"],b:0,u:"2 buku = 2 × 8 = 16 dan 3 pen = 3p. Jumlahnya 16 + 3p.",kira:()=>dua(p=>2*8+3*p,p=>16+3*p)},
 {j:"nombor",t:"Cari nilai 5m − 4 apabila m = 6.",b:26,tol:0.01,u:"5(6) − 4 = 30 − 4 = 26.",kira:()=>5*6-4},
 {j:"nombor",t:"Cari nilai 2(p + 3) apabila p = 4.",b:14,tol:0.01,u:"2(4 + 3) = 2 × 7 = 14.",kira:()=>2*(4+3)},
 {j:"pilih",t:"Tambang sebuah teksi ialah RM4 ditambah RM2 bagi setiap kilometer. Ungkapan tambang (RM) bagi k kilometer ialah:",p:["4 + 2k","2 + 4k","6k","4k + 2k"],b:0,u:"RM4 ialah caj tetap dan RM2 dikali k ialah caj jarak. Jumlahnya 4 + 2k."},
 {j:"nombor",t:"Menggunakan ungkapan tambang 4 + 2k, berapakah tambang (RM) bagi perjalanan sejauh 7 km?",b:18,tol:0.01,u:"4 + 2(7) = 4 + 14 = 18.",kira:()=>4+2*7},
 {j:"pilih",t:"Ungkapan 20 − 3n mewakili baki wang (RM) selepas membeli n batang pen berharga RM3 sebatang daripada RM20. Berapakah baki (RM) apabila n = 4?",p:["8","17","12","60"],b:0,u:"20 − 3(4) = 20 − 12 = 8.",kira:()=>20-3*4}],
 bos:{j:"nombor",t:"Diberi a = 2 dan b = 3. Cari nilai 3(a + 2b) − 4.",b:20,tol:0.01,u:"3(2 + 2 × 3) − 4 = 3(8) − 4 = 24 − 4 = 20.",kira:()=>3*(2+2*3)-4}},

{n:3, tempat:"Padang Warna", sk:"5.1.4 / 5.1.5 Sebutan, pekali dan sebutan serupa", lampiran:"alg3",
 kadNama:"Sebutan Serupa", kadEm:"\u{1F3A8}", kadFakta:"Sebutan serupa mempunyai pemboleh ubah yang sama dengan kuasa yang sama. Hanya pekalinya berbeza, seperti 3xy dan −5xy.",
 bosKadNama:"Pekali", bosKadEm:"\u{1F522}", bosKadFakta:"Pekali ialah nombor di hadapan pemboleh ubah. Kalau tiada nombor kelihatan, pekalinya 1, jadi x bermaksud 1x.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih ungkapan A: 3x + 2y + 5x − 4. Berapakah bilangan sebutan dalam ungkapan itu?",b:4,tol:0.01,u:"Sebutan ialah 3x, 2y, 5x dan −4. Semuanya ada 4 sebutan.",kira:()=>4},
 {j:"pilih",t:"Berapakah pekali bagi x dalam sebutan 7x?",p:["7","x","7x","0"],b:0,u:"Pekali ialah nombor yang mendarab pemboleh ubah, iaitu 7."},
 {j:"pilih",t:"Manakah sebutan serupa dengan 4y?",p:["9y","4x","4","y<sup>2</sup>"],b:0,u:"Sebutan serupa mempunyai pemboleh ubah yang sama. Hanya 9y ada pemboleh ubah y sahaja."},
 {j:"pilih",t:"Dalam ungkapan A pada Rajah 1, pasangan sebutan manakah ialah sebutan serupa?",p:["3x dan 5x","3x dan 2y","2y dan −4","5x dan −4"],b:0,u:"3x dan 5x sama-sama mengandungi x, jadi serupa. Warna cipnya juga sama."},
 {j:"banyak",t:"Pilih SEMUA sebutan yang serupa dengan 3xy.",p:["−5xy","xy","3x","3y","3x" + "<sup>2</sup>","12xy"],b:[0,1,5],u:"Sebutan serupa mesti ada xy sahaja. 3x, 3y dan 3x² mempunyai pemboleh ubah yang berbeza."},
 {j:"nombor",t:"Dalam Rajah 1, pilih ungkapan B: 2x + 3x² − x + 6. Berapakah pekali bagi sebutan x²?",b:3,tol:0.01,u:"Sebutan 3x² mempunyai pekali 3.",kira:()=>3},
 {j:"pilih",t:"Dalam ungkapan 4p − 6, sebutan yang tidak mengandungi pemboleh ubah ialah:",p:["−6","4p","p","4"],b:0,u:"Sebutan −6 ialah nombor sahaja tanpa huruf, dipanggil sebutan malar."},
 {j:"pilih",t:"Manakah pasangan sebutan yang TIDAK serupa?",p:["3x dan 3x" + "<sup>2</sup>","4p dan −p","2xy dan 9xy","7 dan −2"],b:0,u:"3x dan 3x² mempunyai kuasa x yang berbeza. Pasangan lain mempunyai pemboleh ubah dan kuasa yang sama."}],
 bos:{j:"banyak",t:"Dalam ungkapan C pada Rajah 1 iaitu 4xy + 2x − 3xy + 5y, pilih SEMUA pernyataan yang BENAR.",p:["Terdapat empat sebutan","4xy dan −3xy ialah sebutan serupa","Pekali bagi y ialah 5","2x dan 5y ialah sebutan serupa","Sebutan malar ialah 5","Pekali bagi xy hanya 4"],b:[0,1,2],u:"Ada empat sebutan dan 4xy serta −3xy serupa. Pekali y ialah 5. 2x dan 5y tidak serupa, tiada sebutan malar, dan pekali xy ialah 4 dan −3."}},

{n:4, tempat:"Bengkel Jubin", sk:"5.2.1 Menambah dan menolak ungkapan algebra", lampiran:"alg4",
 kadNama:"Kumpul Jubin", kadEm:"\u{1F9E9}", kadFakta:"Menambah dan menolak ungkapan algebra bermaksud mengumpulkan sebutan serupa, macam mengumpul jubin yang sama warna.",
 bosKadNama:"Tolak Teliti", bosKadEm:"\u{26A0}\u{FE0F}", bosKadFakta:"Apabila menolak (x + 3), tanda bagi setiap sebutan dalam kurungan bertukar. Ini kesilapan paling biasa dalam bab ini.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih pasangan A: (2x + 3) + (x + 2). Ringkaskan ungkapan itu.",p:["3x + 5","2x<sup>2</sup> + 5","3x" + "<sup>2</sup>" + " + 5","3x + 6"],b:0,u:"Kumpul sebutan x: 2x + x = 3x. Kumpul sebutan malar: 3 + 2 = 5.",kira:()=>dua(x=>(2*x+3)+(x+2),x=>3*x+5)},
 {j:"pilih",t:"Dalam Rajah 1, pilih pasangan B: (4x + 5) − (x + 3). Ringkaskan ungkapan itu.",p:["3x + 2","3x + 8","5x + 2","3x − 2"],b:0,u:"4x − x = 3x dan 5 − 3 = 2, jadi 3x + 2.",kira:()=>dua(x=>(4*x+5)-(x+3),x=>3*x+2)},
 {j:"pilih",t:"Ringkaskan 7a + 2b − 3a + b.",p:["4a + 3b","4a + b","10a + 3b","4ab + 3"],b:0,u:"7a − 3a = 4a dan 2b + b = 3b. Jawapannya 4a + 3b."},
 {j:"pilih",t:"Ringkaskan (6m − 2) − (2m − 5).",p:["4m + 3","4m − 7","4m − 3","8m − 7"],b:0,u:"6m − 2 − 2m + 5 = 4m + 3. Tanda −5 bertukar kepada +5.",kira:()=>dua(m=>(6*m-2)-(2*m-5),m=>4*m+3)},
 {j:"nombor",t:"Ringkaskan 5x + 2 + 3x − 7, kemudian cari nilainya apabila x = 2.",b:11,tol:0.01,u:"5x + 2 + 3x − 7 = 8x − 5. Apabila x = 2, nilainya 8(2) − 5 = 11.",kira:()=>8*2-5},
 {j:"pilih",t:"Sekotak pensel mengandungi (3p + 4) batang dan kotak kedua mengandungi (2p − 1) batang. Ungkapan bagi jumlah pensel ialah:",p:["5p + 3","5p + 5","6p + 3","p + 5"],b:0,u:"3p + 2p = 5p dan 4 + (−1) = 3, jadi 5p + 3.",kira:()=>dua(p=>(3*p+4)+(2*p-1),p=>5*p+3)},
 {j:"nombor",t:"Panjang tiga sisi sebuah segi tiga ialah (x + 2), (2x + 1) dan (3x − 1) cm. Jika x = 3, berapakah perimeter segi tiga itu (cm)?",b:20,tol:0.01,u:"Perimeter = (x + 2) + (2x + 1) + (3x − 1) = 6x + 2. Apabila x = 3, perimeter = 20 cm.",kira:()=>6*3+2},
 {j:"pilih",t:"Aina menulis (5y − 3) − (2y − 3) = 3y − 6. Apakah kesilapannya?",p:["Tanda −3 kedua sepatutnya jadi +3; jawapan betul 3y","Tiada kesilapan kerana 3y − 6 betul","Sepatutnya 7y − 6 kerana kedua-duanya ditambah","Sepatutnya 3y + 6 kerana tanda −3 ditolak"],b:0,u:"Menolak −3 sama dengan menambah 3, jadi −3 + 3 = 0. Jawapan yang betul ialah 3y.",kira:()=>dua(y=>(5*y-3)-(2*y-3),y=>3*y)}],
 bos:{j:"nombor",t:"Cari nilai bagi (4x + 3) + (2x − 1) − (x + 5) apabila x = 4.",b:17,tol:0.01,u:"Ringkaskan: 4x + 2x − x = 5x dan 3 − 1 − 5 = −3. Jadi 5x − 3. Apabila x = 4, 5(4) − 3 = 17.",kira:()=>5*4-3}},

{n:5, tempat:"Menara Kuasa", sk:"5.2.2 Pendaraban berulang dan kuasa", lampiran:"alg5",
 kadNama:"Kuasa Berganda", kadEm:"\u{1F5FC}", kadFakta:"Hasil darab berulang ditulis sebagai kuasa: x × x × x = x³. Kuasa dua ialah luas sebuah petak bersisi x.",
 bosKadNama:"Kurungan Beza", bosKadEm:"\u{1F4A1}", bosKadFakta:"2x² dan (2x)² tidak sama. Dalam (2x)², nombor 2 juga dikuasa duakan, jadi hasilnya 4x².",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan n = 3 dan x = 2. Berapakah nilai x<sup>3</sup>?",b:8,tol:0.01,u:"x × x × x = 2 × 2 × 2 = 8.",kira:()=>Math.pow(2,3)},
 {j:"pilih",t:"Bagaimanakah x × x × x × x ditulis dengan lebih ringkas?",p:["x<sup>4</sup>","4x","x × 4","x + x + x + x"],b:0,u:"Pendaraban berulang empat kali ditulis sebagai kuasa x⁴, tetapi 4x bermaksud x + x + x + x."},
 {j:"nombor",t:"Apabila x = 5, berapakah nilai x<sup>2</sup> − 2x?",b:15,tol:0.01,u:"x² = 25 dan 2x = 10, jadi 25 − 10 = 15.",kira:()=>5*5-2*5},
 {j:"pilih",t:"Ringkaskan 3 × y × y.",p:["3y<sup>2</sup>","9y","(3y)<sup>2</sup>","3 + 2y"],b:0,u:"y × y = y², jadi 3 × y × y = 3y²."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan n = 4 dan x = 3. Berapakah nilai x<sup>4</sup>?",b:81,tol:0.01,u:"3 × 3 × 3 × 3 = 81.",kira:()=>Math.pow(3,4)},
 {j:"pilih",t:"Ringkaskan 2a × 3a.",p:["6a<sup>2</sup>","5a<sup>2</sup>","6a","5a"],b:0,u:"Darab pekali: 2 × 3 = 6. Darab pemboleh ubah: a × a = a². Jadi 6a².",kira:()=>dua(a=>2*a*3*a,a=>6*a*a)},
 {j:"pilih",t:"Mengapakah 2x<sup>2</sup> tidak sama dengan (2x)<sup>2</sup>?",p:["Hanya x dikuasa duakan dalam 2x², tetapi 2 juga dalam (2x)²","Kedua-duanya sama kerana mempunyai 2 dan x","Kerana 2x² sentiasa sama dengan 4x","Kerana kuasa dua tidak boleh digunakan pada 2"],b:0,u:"2x² = 2 × x × x manakala (2x)² = 2x × 2x = 4x². Contohnya apabila x = 3, 2x² = 18 tetapi (2x)² = 36.",kira:()=>2*3*3!==(2*3)*(2*3)},
 {j:"nombor",t:"Sebuah petak berbentuk segi empat sama mempunyai sisi 3p meter. Jika p = 2, berapakah luas petak itu (m<sup>2</sup>)?",b:36,tol:0.01,u:"Luas = 3p × 3p = 9p². Apabila p = 2, luas = 9 × 4 = 36 m².",kira:()=>9*2*2}],
 bos:{j:"nombor",t:"Isi padu sebuah kubus bersisi 2y cm ialah 2y × 2y × 2y. Berapakah isi padu (cm<sup>3</sup>) apabila y = 3?",b:216,tol:0.01,u:"2y × 2y × 2y = 8y³. Apabila y = 3, 8 × 27 = 216 cm³.",kira:()=>8*27}},

{n:6, tempat:"Studio Reka", sk:"5.2.3 Mendarab dan membahagi sebutan tunggal", lampiran:"alg6",
 kadNama:"Bahagi Sebutan", kadEm:"\u{2797}", kadFakta:"Apabila membahagi sebutan algebra, pemboleh ubah yang sama di atas dan di bawah boleh dibatalkan, contohnya 6x ÷ 2x = 3.",
 bosKadNama:"Reka Sendiri", bosKadEm:"\u{270F}\u{FE0F}", bosKadFakta:"Mereka masalah cerita sendiri ialah cara terbaik menguji sama ada awak benar-benar faham ungkapan algebra.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1 (operasi darab), tetapkan a = 3 dan b = 2. Berapakah jumlah bar x dalam 3 × (2x)?",b:6,tol:0.01,u:"3 baris, setiap baris 2 bar x. Jumlahnya 6 bar, iaitu 6x.",kira:()=>3*2},
 {j:"pilih",t:"Ringkaskan 4 × 5y.",p:["20y","9y","20","45y"],b:0,u:"Darab pekali: 4 × 5 = 20. Pemboleh ubah y kekal, jadi 20y."},
 {j:"pilih",t:"Ringkaskan 3x × 2y.",p:["6xy","5xy","6x + y","32xy"],b:0,u:"3 × 2 = 6 dan x × y = xy, jadi 6xy."},
 {j:"pilih",t:"Ringkaskan 12x ÷ 4.",p:["3x","8x","3","48x"],b:0,u:"12 ÷ 4 = 3 dan x kekal, jadi 3x."},
 {j:"nombor",t:"Ringkaskan 15ab ÷ 3a, kemudian cari nilainya apabila a = 2 dan b = 4.",b:20,tol:0.01,u:"15ab ÷ 3a = 5b. Apabila b = 4, nilainya 20.",kira:()=>5*4},
 {j:"pilih",t:"Ringkaskan 8x<sup>2</sup> ÷ 2x.",p:["4x","6x","4x<sup>2</sup>","4"],b:0,u:"8 ÷ 2 = 4 dan x² ÷ x = x, jadi 4x.",kira:()=>dua(x=>x===0?0:(8*x*x)/(2*x),x=>4*x)},
 {j:"nombor",t:"Sebuah segi empat tepat berlebar 3x cm dan panjang 5x cm. Jika x = 2, berapakah luasnya (cm<sup>2</sup>)?",b:60,tol:0.01,u:"Luas = 3x × 5x = 15x². Apabila x = 2, luas = 15 × 4 = 60 cm².",kira:()=>15*2*2},
 {j:"pilih",t:"Apakah hasil 6x × 2x dan 6x ÷ 2x mengikut turutan?",p:["12x<sup>2</sup> dan 3","12x dan 3x","12x<sup>2</sup> dan 3x","8x dan 4x"],b:0,u:"6x × 2x = 12x². Bagi 6x ÷ 2x, x dibatalkan dan tinggal 6 ÷ 2 = 3."}],
 bos:{j:"buka",
  t:"Reka satu masalah cerita daripada kehidupan seharian yang boleh diwakili oleh ungkapan algebra, kemudian selesaikannya.",
  arahan:"Nyatakan apa yang diwakili oleh pemboleh ubah awak. Terbitkan ungkapan algebra, ringkaskan jika ada sebutan serupa, dan gantikan satu nilai untuk mencari jawapan. Terangkan mengapa ungkapan awak sesuai dengan situasi itu.",
  u:"Jawapan TP6 yang kukuh mentakrif pemboleh ubah dengan jelas, menerbitkan ungkapan yang sepadan dengan situasi, meringkaskan sebutan serupa dengan betul dan menggantikan nilai dengan pengiraan yang tepat."}}
];

module.exports = {
  id:"m1b5", tingkatan:1, kod:"5.0 Ungkapan Algebra",
  tajuk:"Jubin Algebra",
  subtajuk:"Matematik Ting. 1 · Bab 5 Ungkapan Algebra",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat menyatakan bahawa huruf mewakili kuantiti yang belum diketahui, dan membezakan kuantiti tetap dengan pemboleh ubah. Langkah seterusnya ialah menerbitkan ungkapan algebra daripada situasi.",
   2:"{n} memahami pemboleh ubah dan boleh menerbitkan ungkapan algebra serta menentukan nilainya apabila nilai pemboleh ubah diberi. Perlu lebih latihan sebelum bergerak ke TP3.",
   3:"{n} boleh mengenal pasti sebutan, pekali, sebutan serupa dan sebutan tidak serupa dalam ungkapan algebra. Galakkan memeriksa pemboleh ubah dan kuasanya sebelum mengumpul sebutan.",
   4:"{n} mampu menambah dan menolak ungkapan algebra dengan mengumpul sebutan serupa, termasuk masalah rutin yang mudah. Tekankan penukaran tanda apabila menolak ungkapan dalam kurungan.",
   5:"{n} dapat menyelesaikan masalah rutin yang kompleks melibatkan ungkapan algebra dan kuasa, serta membezakan 2x² dengan (2x)². Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya mendarab dan membahagi sebutan algebra serta mereka masalah sendiri dengan ungkapan yang betul. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Ungkapan Algebra. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil membezakan pemboleh ubah dengan nilai tetap, dengan bimbingan rakan sebaya."
  },
  lampiran:{ alg1:R_ALG1, alg2:R_ALG2, alg3:R_ALG3, alg4:R_ALG4, alg5:R_ALG5, alg6:R_ALG6 },
  aras:ARAS
};
