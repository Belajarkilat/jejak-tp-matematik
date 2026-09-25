/* Sumber kandungan — Matematik KSSM Tingkatan 1, Bab 6 Persamaan Linear.
   Fail ini disunting tangan. Jalankan `node bina.js m1b6` untuk menyemaknya
   dan menghasilkan bank-m1b6.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 1, Bahagian Pembangunan Kurikulum, muka 56 (dskp/matematik-t1.pdf).
   DSKP Tingkatan 1 menulis Standard Prestasi bagi Bab 6 sebagai satu jadual
   tema untuk bab ini sahaja, jadi keenam-enam tahap dikekalkan.

   Standard Pembelajaran yang disasarkan: 6.1.1 hingga 6.1.4 (persamaan linear
   satu pemboleh ubah), 6.2.1 hingga 6.2.4 (dua pemboleh ubah, graf) dan
   6.3.1 hingga 6.3.3 (persamaan linear serentak: graf, penghapusan, penggantian).

   Widget: t1neraca, t1dua dan t1serentak dalam widget-m1b6.js. Semua jawapan
   berangka dikira dalam medan `kira` dan dibandingkan oleh tools/semak-jawapan.js. */

const SPI = [
"Mempamerkan pengetahuan asas tentang persamaan linear.",
"Mempamerkan kefahaman tentang persamaan linear dan persamaan linear serentak.",
"Mengaplikasikan kefahaman tentang penyelesaian persamaan linear dan persamaan linear serentak.",
"Mengaplikasikan kefahaman dan kemahiran yang sesuai tentang persamaan linear dan persamaan linear serentak dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan kefahaman dan kemahiran yang sesuai tentang persamaan linear dan persamaan linear serentak dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan kefahaman dan kemahiran yang sesuai tentang persamaan linear dan persamaan linear serentak dalam konteks penyelesaian masalah bukan rutin."];

/* ---------- lampiran ---------- */

const R_NERACA1 = {
  jenis:"interaktif", w:"t1neraca", mod:"cuba", a:1, b:4, c:9,
  kapsyen:"Rajah 1 · Beg x ialah nombor yang belum diketahui. Setiap petak kecil ialah 1 unit. Cuba nilai x sehingga neraca seimbang.",
  alt:"Rajah interaktif neraca timbang bagi persamaan x + 4 = 9; gelongsor menukar andaian nilai x sehingga kedua-dua pan seimbang"
};
const R_DUA = {
  jenis:"interaktif", w:"t1dua", a:2, b:1, c:6, t:[0,1,2,3,4,5,6], t0:1,
  kapsyen:"Rajah 1 · Garis 2x + y = 6. Gerakkan gelongsor x dan lihat titik penyelesaian bergerak di sepanjang garis.",
  alt:"Rajah interaktif satah Cartes dengan garis 2x + y = 6; gelongsor menukar nilai x dan titik penyelesaian bergerak di sepanjang garis"
};
const R_LANGKAH = {
  jenis:"interaktif", w:"t1neraca", mod:"langkah", a:4, b:3, d:1, c:18,
  kapsyen:"Rajah 1 · Persamaan 4x + 3 = x + 18. Gerakkan gelongsor langkah dan lihat operasi yang sama pada kedua-dua belah neraca.",
  alt:"Rajah interaktif neraca timbang bagi persamaan 4x + 3 = x + 18; gelongsor langkah menunjukkan operasi yang sama pada kedua-dua belah sehingga x diperoleh"
};
const R_GRAF = {
  jenis:"interaktif", w:"t1serentak", mod:"graf", a1:1, b1:1, c1:6, a2:2, b2:1, c2:8,
  a2Nilai:[1,2], c2Nilai:[6,7,8,9,10], cabar:true,
  kapsyen:"Rajah 1 · L1 ialah x + y = 6. Tukar L2 dengan gelongsor, kira titik persilangan dahulu, kemudian semak dengan rajah.",
  alt:"Rajah interaktif satah Cartes dengan dua garis lurus; gelongsor menukar pekali x dan pemalar bagi garis kedua untuk melihat garis bersilang, selari atau bertindih"
};
const R_HAPUS = {
  jenis:"interaktif", w:"t1serentak", mod:"hapus", a1:3, b1:2, c1:16, a2:2, b2:3, c2:14, cabar:true,
  kapsyen:"Rajah 1 · 3x + 2y = 16 dan 2x + 3y = 14. Kira dahulu di kertas conteng, kemudian gerakkan langkah untuk semak.",
  alt:"Rajah interaktif langkah penyelesaian persamaan linear serentak 3x + 2y = 16 dan 2x + 3y = 14 dengan kaedah penghapusan"
};
const R_GANTI = {
  jenis:"interaktif", w:"t1serentak", mod:"ganti", p:2, q:1, a1:0, b1:1, c1:0, a2:3, b2:2, c2:16,
  kapsyen:"Rajah 1 · y = 2x + 1 dan 3x + 2y = 16. Gerakkan gelongsor langkah untuk melihat kaedah penggantian.",
  alt:"Rajah interaktif langkah penyelesaian persamaan linear serentak y = 2x + 1 dan 3x + 2y = 16 dengan kaedah penggantian"
};

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Neraca Pasar", sk:"6.1.1 / 6.1.2 Mengenal dan membentuk persamaan linear", lampiran:"neraca1",
 kadNama:"Tanda Sama", kadEm:"⚖️", kadFakta:"Tanda sama dengan (=) diperkenalkan oleh Robert Recorde pada tahun 1557. Dia memilih dua garis selari kerana tiada apa yang lebih sama daripada itu.",
 bosKadNama:"Pemboleh Ubah", bosKadEm:"\u{1F524}", bosKadFakta:"Pemboleh ubah ialah huruf yang mewakili nombor yang belum diketahui. Huruf x paling popular, tetapi huruf apa pun boleh digunakan.",
 soalan:[
 {j:"pilih",t:"Antara yang berikut, yang manakah persamaan linear dalam satu pemboleh ubah?",p:["x + 4 = 9","x² + 4 = 9","x + y = 9","4 + 9 = 13"],b:0,u:"Persamaan linear satu pemboleh ubah hanya ada satu huruf, berkuasa satu, dan tanda sama dengan. x² berkuasa dua, x + y ada dua huruf, dan 4 + 9 = 13 tiada pemboleh ubah."},
 {j:"pilih",t:"Dalam persamaan 3x + 5 = 20, apakah pemboleh ubahnya?",p:["Huruf x","Nombor 3","Nombor 5","Nombor 20"],b:0,u:"Pemboleh ubah ialah huruf yang mewakili nombor yang belum diketahui, iaitu x."},
 {j:"pilih",t:"Dalam Rajah 1, beg x ialah nombor yang belum diketahui dan setiap petak kecil ialah 1 unit. Persamaan yang diwakili oleh neraca ialah:",p:["x + 4 = 9","x + 9 = 4","4x = 9","x − 4 = 9"],b:0,u:"Pan kiri ada satu beg x dan 4 petak, iaitu x + 4. Pan kanan ada 9 petak, iaitu 9. Jadi x + 4 = 9."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x = 3. Berapakah nilai sebelah kiri, iaitu x + 4?",b:7,tol:0.01,u:"x + 4 = 3 + 4 = 7. Nilai kiri 7 kurang daripada 9, jadi pan kanan lebih berat.",kira:()=>3+4},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x = 5. Berapakah nilai sebelah kiri, iaitu x + 4?",b:9,tol:0.01,u:"x + 4 = 5 + 4 = 9. Nilai ini sama dengan sebelah kanan, jadi neraca seimbang.",kira:()=>5+4},
 {j:"pilih",t:"Dalam Rajah 1, neraca seimbang apabila x sama dengan:",p:["5","4","6","9"],b:0,u:"Neraca seimbang apabila x + 4 = 9. Hanya x = 5 memberi 5 + 4 = 9.",kira:()=>5+4===9},
 {j:"pilih",t:"Persamaan linear dalam satu pemboleh ubah mempunyai ciri:",p:["Pemboleh ubah berkuasa satu sahaja","Pemboleh ubah berkuasa dua sahaja","Dua pemboleh ubah yang berlainan","Ada tanda lebih besar daripada"],b:0,u:"Persamaan linear satu pemboleh ubah mempunyai satu huruf dengan kuasa satu dan tanda sama dengan."},
 {j:"susun",t:"Susun langkah mencari x bagi x + 4 = 9 dengan kaedah cuba jaya.",p:["Cuba satu nilai x, contohnya x = 3","Kira nilai sebelah kiri dengan nilai itu","Bandingkan dengan sebelah kanan, iaitu 9","Ubah nilai x sehingga kedua-dua belah sama"],b:[0,1,2,3],u:"Cuba, kira, bandingkan, dan ubah nilai sehingga kedua-dua belah sama."}],
 bos:{j:"banyak",t:"Pilih SEMUA persamaan linear dalam satu pemboleh ubah.",p:["2x + 1 = 7","y − 5 = 3","3(m + 2) = 15","x² = 16","a + b = 4","5 + 3 = 8"],b:[0,1,2],u:"2x + 1 = 7, y − 5 = 3 dan 3(m + 2) = 15 ada satu pemboleh ubah berkuasa satu. x² = 16 berkuasa dua, a + b = 4 ada dua pemboleh ubah, dan 5 + 3 = 8 tiada pemboleh ubah."}},

{n:2, tempat:"Kafe Kupon", sk:"6.2.1 / 6.2.2 / 6.2.3 / 6.2.4 Persamaan linear dalam dua pemboleh ubah dan graf", lampiran:"dua1",
 kadNama:"Titik Pada Garis", kadEm:"\u{1F4CD}", kadFakta:"Setiap titik pada graf persamaan linear ialah satu penyelesaian bagi persamaan itu. Ada banyak sekali penyelesaian, seperti banyak titik pada satu garis.",
 bosKadNama:"Bentuk Umum", bosKadEm:"\u{1F4DD}", bosKadFakta:"Bentuk umum persamaan linear dalam dua pemboleh ubah ialah ax + by = c. Huruf a, b dan c ialah nombor tetap.",
 soalan:[
 {j:"pilih",t:"Antara yang berikut, yang manakah persamaan linear dalam dua pemboleh ubah?",p:["2x + y = 6","2x + 6 = y²","x² + y = 6","2x + 3 = 6"],b:0,u:"2x + y = 6 ada dua pemboleh ubah, x dan y, masing-masing berkuasa satu. Yang lain berkuasa dua atau hanya ada satu pemboleh ubah."},
 {j:"pilih",t:"Bentuk umum persamaan linear dalam dua pemboleh ubah ialah:",p:["ax + by = c","ax² + b = c","ax + b = 0","axy = c"],b:0,u:"Bentuk umum ialah ax + by = c, dengan x dan y ialah pemboleh ubah."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x = 1. Berapakah nilai y?",b:4,tol:0.01,u:"2x + y = 6. Apabila x = 1, 2(1) + y = 6, maka y = 4.",kira:()=>6-2*1},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x = 4. Berapakah nilai y?",b:-2,tol:0.01,u:"2(4) + y = 6, maka 8 + y = 6 dan y = −2.",kira:()=>6-2*4},
 {j:"pilih",t:"Dalam Rajah 1, setiap titik yang dilukis pada garis ialah:",p:["Satu penyelesaian bagi 2x + y = 6","Satu titik yang bukan penyelesaian","Penyelesaian bagi x sahaja","Penyelesaian bagi y sahaja"],b:0,u:"Setiap titik pada garis memenuhi persamaan 2x + y = 6, jadi ia ialah satu penyelesaian."},
 {j:"pilih",t:"Pasangan (x, y) yang merupakan penyelesaian bagi 2x + y = 6 ialah:",p:["(2, 2)","(2, 3)","(3, 3)","(1, 3)"],b:0,u:"Ganti (2, 2): 2(2) + 2 = 6. Pasangan lain memberi 7, 9 dan 5.",kira:()=>2*2+2===6},
 {j:"pilih",t:"Kopi RM2 secawan dan kek RM1 sekeping. Bayaran RM6 bagi x cawan kopi dan y keping kek. Persamaannya:",p:["2x + y = 6","x + 2y = 6","2x + y = 3","2 + x + y = 6"],b:0,u:"Harga x cawan kopi ialah 2x dan harga y keping kek ialah y. Jumlah RM6, maka 2x + y = 6."},
 {j:"nombor",t:"Kopi RM2 secawan dan kek RM1 sekeping. Aina bayar RM6 untuk 2 keping kek dan beberapa cawan kopi. Berapa cawan kopi dibeli?",b:2,tol:0.01,u:"2x + 2 = 6, maka 2x = 4 dan x = 2 cawan.",kira:()=>(6-2)/2}],
 bos:{j:"banyak",t:"Pilih SEMUA pasangan (x, y) yang merupakan penyelesaian bagi 2x + y = 6.",p:["(0, 6)","(1, 4)","(5, −4)","(2, 3)","(3, 2)","(4, 1)"],b:[0,1,2],u:"(0, 6): 0 + 6 = 6. (1, 4): 2 + 4 = 6. (5, −4): 10 − 4 = 6. (2, 3), (3, 2) dan (4, 1) memberi 7, 8 dan 9."}},

{n:3, tempat:"Kedai Runcit", sk:"6.1.3 Menyelesaikan persamaan linear dalam satu pemboleh ubah", lampiran:"langkah1",
 kadNama:"Operasi Songsang", kadEm:"\u{1F501}", kadFakta:"Tambah dan tolak ialah operasi songsang. Darab dan bahagi juga. Menggunakan operasi songsang pada kedua-dua belah menyimpan neraca tetap seimbang.",
 bosKadNama:"Semak Jawapan", bosKadEm:"✅", bosKadFakta:"Selepas dapat nilai x, ganti semula ke dalam persamaan asal. Jika kedua-dua belah sama, jawapan awak betul.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, langkah pertama memudahkan 4x + 3 = x + 18 ialah tolak x daripada kedua-dua belah. Selepas itu persamaan menjadi:",p:["3x + 3 = 18","5x + 3 = 18","3x + 3 = 19","4x + 3 = 17"],b:0,u:"4x − x = 3x, dan x − x = 0 pada sebelah kanan. Persamaan ialah 3x + 3 = 18.",kira:()=>4-1===3},
 {j:"nombor",t:"Dalam Rajah 1, selepas menolak 3 daripada kedua-dua belah, persamaan menjadi 3x = ?. Berapakah nilai di sebelah kanan?",b:15,tol:0.01,u:"18 − 3 = 15, jadi 3x = 15.",kira:()=>18-3},
 {j:"nombor",t:"Dalam Rajah 1, berapakah nilai x?",b:5,tol:0.01,u:"3x = 15, bahagi kedua-dua belah dengan 3. x = 5.",kira:()=>(18-3)/(4-1)},
 {j:"nombor",t:"Selesaikan 2x + 5 = 17. Berapakah nilai x?",b:6,tol:0.01,u:"2x = 17 − 5 = 12, maka x = 12 ÷ 2 = 6.",kira:()=>(17-5)/2},
 {j:"nombor",t:"Selesaikan 5x − 7 = 3x + 9. Berapakah nilai x?",b:8,tol:0.01,u:"5x − 3x = 9 + 7, maka 2x = 16 dan x = 8.",kira:()=>(9+7)/(5-3)},
 {j:"pilih",t:"Untuk menyelesaikan x + 9 = 15, operasi songsang yang sesuai ialah:",p:["Tolak 9 daripada kedua-dua belah","Tambah 9 pada kedua-dua belah","Darab kedua-dua belah dengan 9","Bahagi kedua-dua belah dengan 9"],b:0,u:"Operasi songsang bagi tambah 9 ialah tolak 9. x = 15 − 9 = 6."},
 {j:"pilih",t:"Kaedah pematahbalikan: fikir satu nombor, tolak 3, hasilnya 8. Nombor itu ialah:",p:["8 + 3 = 11","8 − 3 = 5","8 × 3 = 24","8 ÷ 3 = 2.67"],b:0,u:"Untuk patah balik, gunakan operasi songsang. Tolak 3 dibalikkan dengan tambah 3, jadi 8 + 3 = 11.",kira:()=>8+3===11},
 {j:"susun",t:"Susun langkah menyelesaikan 4x + 3 = x + 18.",p:["Tolak x daripada kedua-dua belah","Tolak 3 daripada kedua-dua belah","Bahagi kedua-dua belah dengan 3","Tulis jawapan x = 5"],b:[0,1,2,3],u:"Kumpul x di satu belah, asingkan pemalar, bahagi dengan pekali, kemudian tulis jawapan."}],
 bos:{j:"nombor",t:"Selesaikan 5(x − 2) = 3x + 4. Berapakah nilai x?",b:7,tol:0.01,u:"Kembangkan: 5x − 10 = 3x + 4. Maka 2x = 14 dan x = 7.",kira:()=>(4+10)/(5-3)}},

{n:4, tempat:"Lorong Graf", sk:"6.3.1 / 6.3.2 Persamaan linear serentak dan kaedah graf", lampiran:"graf1",
 kadNama:"Titik Temu", kadEm:"\u{1F91D}", kadFakta:"Penyelesaian persamaan linear serentak ialah titik temu dua garis. Titik itu memenuhi kedua-dua persamaan pada masa yang sama.",
 bosKadNama:"Dua Garis Selari", bosKadEm:"\u{1F6E4}️", bosKadFakta:"Dua garis selari tidak akan bertemu, jadi persamaan serentak itu tiada penyelesaian. Dua garis yang bertindih pula ada penyelesaian tak terhingga.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, dua garis bersilang pada satu titik sahaja. Sistem persamaan itu mempunyai:",p:["Satu penyelesaian","Tiada penyelesaian","Dua penyelesaian","Banyak penyelesaian"],b:0,u:"Satu titik persilangan bermaksud satu pasangan (x, y) yang memenuhi kedua-dua persamaan."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x dalam L2 = 2 dan c = 8. Berapakah nilai x pada titik persilangan?",b:2,tol:0.01,u:"x + y = 6 dan 2x + y = 8. Tolak: x = 2.",kira:()=>8-6},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x dalam L2 = 2 dan c = 8. Berapakah nilai y pada titik persilangan?",b:4,tol:0.01,u:"x = 2, maka y = 6 − 2 = 4. Semak: 2(2) + 4 = 8.",kira:()=>6-(8-6)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x dalam L2 = 2 dan c = 10. Berapakah nilai x pada titik persilangan?",b:4,tol:0.01,u:"x + y = 6 dan 2x + y = 10. Tolak: x = 4.",kira:()=>10-6},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan x dalam L2 = 1 dan c = 8, iaitu L2 ialah x + y = 8. Hubungan dua garis itu:",p:["Selari, tiada penyelesaian","Bersilang pada satu titik","Bertindih sepenuhnya","Bersilang di paksi-y"],b:0,u:"x + y = 6 dan x + y = 8 mempunyai kecerunan sama tetapi pintasan berbeza, jadi selari dan tiada penyelesaian."},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan x dalam L2 = 1 dan c = 6. Dua garis itu:",p:["Bertindih, banyak penyelesaian","Selari, tiada penyelesaian","Bersilang pada satu titik","Bersilang pada dua titik"],b:0,u:"L2 ialah x + y = 6, sama dengan L1. Dua garis bertindih, jadi ada penyelesaian tak terhingga."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x dalam L2 = 2 dan c = 9. Berapakah nilai y pada titik persilangan?",b:3,tol:0.01,u:"2x + y = 9 tolak x + y = 6 memberi x = 3. Maka y = 6 − 3 = 3.",kira:()=>6-(9-6)},
 {j:"susun",t:"Susun langkah menyelesaikan persamaan serentak dengan kaedah graf.",p:["Lukis garis bagi persamaan pertama","Lukis garis bagi persamaan kedua pada satah yang sama","Baca koordinat titik persilangan","Semak dengan menggantikan ke dalam kedua-dua persamaan"],b:[0,1,2,3],u:"Lukis dua garis, baca titik temu, dan semak jawapan dalam kedua-dua persamaan."}],
 bos:{j:"nombor",t:"Garis x + y = 6 dan garis 2x + y = c bersilang di titik yang x = 5. Berapakah nilai c?",b:11,tol:0.01,u:"Apabila x = 5, y = 6 − 5 = 1. Maka c = 2(5) + 1 = 11.",kira:()=>2*5+(6-5)}},

{n:5, tempat:"Bengkel Hapus", sk:"6.3.2 Persamaan linear serentak: kaedah penghapusan", lampiran:"hapus1",
 kadNama:"Samakan Pekali", kadEm:"⚖️", kadFakta:"Kunci kaedah penghapusan ialah menyamakan pekali satu pemboleh ubah. Kemudian tambah atau tolak dua persamaan supaya pemboleh ubah itu lenyap.",
 bosKadNama:"Tambah atau Tolak", bosKadEm:"➕", bosKadFakta:"Jika pekali sama tanda, tolak dua persamaan. Jika berlawanan tanda, tambah dua persamaan.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, supaya pekali y sama, persamaan (1) didarab dengan 3. Persamaan (2) didarab dengan:",p:["2","3","4","6"],b:0,u:"Pekali y ialah 2 dan 3. Gandaan sepunya terkecil ialah 6. (1) × 3 memberi 6y dan (2) × 2 memberi 6y.",kira:()=>3*2===2*3},
 {j:"nombor",t:"Dalam Rajah 1, selepas (1) × 3 dan (2) × 2, berapakah pekali y dalam kedua-dua persamaan?",b:6,tol:0.01,u:"2 × 3 = 6 dan 3 × 2 = 6, jadi pekali y ialah 6 dalam kedua-duanya.",kira:()=>2*3},
 {j:"nombor",t:"Dalam Rajah 1, selepas menolak dua persamaan, kita dapat 5x = 20. Berapakah nilai x?",b:4,tol:0.01,u:"9x − 4x = 5x dan 48 − 28 = 20. Maka x = 20 ÷ 5 = 4.",kira:()=>(16*3-14*2)/(3*3-2*2)},
 {j:"nombor",t:"Dalam Rajah 1, ganti x = 4 dalam 3x + 2y = 16. Berapakah nilai y?",b:2,tol:0.01,u:"12 + 2y = 16, maka 2y = 4 dan y = 2.",kira:()=>(16-3*4)/2},
 {j:"nombor",t:"Selesaikan x + y = 10 dan x − y = 4 dengan penghapusan. Berapakah nilai x?",b:7,tol:0.01,u:"Tambah kedua-dua persamaan: 2x = 14, maka x = 7.",kira:()=>(10+4)/2},
 {j:"nombor",t:"Selesaikan 2x + y = 11 dan x + y = 7 dengan penghapusan. Berapakah nilai x?",b:4,tol:0.01,u:"Tolak persamaan kedua daripada pertama: x = 11 − 7 = 4.",kira:()=>11-7},
 {j:"pilih",t:"Untuk menghapuskan y daripada x + y = 10 dan x − y = 4, kita perlu:",p:["Tambah kedua-dua persamaan","Tolak kedua-dua persamaan","Darabkan (2) dengan 2 sahaja","Gantikan x = 0 dalam (1)"],b:0,u:"Pekali y ialah +1 dan −1 (berlawanan tanda), jadi tambah untuk menghapuskan y."},
 {j:"susun",t:"Susun langkah menyelesaikan persamaan serentak dengan kaedah penghapusan.",p:["Samakan pekali satu pemboleh ubah","Tambah atau tolak dua persamaan","Selesaikan pemboleh ubah yang tinggal","Ganti nilai itu untuk cari pemboleh ubah satu lagi"],b:[0,1,2,3],u:"Samakan pekali, hapuskan, selesaikan, kemudian ganti balik."}],
 bos:{j:"nombor",t:"Selesaikan 4x + 3y = 25 dan 3x + 2y = 17. Berapakah nilai x + y?",b:8,tol:0.01,u:"(1) × 2: 8x + 6y = 50. (2) × 3: 9x + 6y = 51. Tolak: x = 1. Ganti: 4 + 3y = 25, y = 7. Maka x + y = 8.",kira:()=>{const X=(25*2-17*3)/(4*2-3*3), Y=(25-4*X)/3; return X+Y;}}},

{n:6, tempat:"Studio Reka", sk:"6.3.3 Masalah persamaan linear serentak dan penggantian", lampiran:"ganti1",
 kadNama:"Ganti Balik", kadEm:"\u{1F504}", kadFakta:"Dalam kaedah penggantian, satu pemboleh ubah ditulis dalam sebutan yang lain dahulu. Kemudian ungkapan itu diganti ke dalam persamaan kedua.",
 bosKadNama:"Reka Sendiri", bosKadEm:"✏️", bosKadFakta:"Masalah serentak yang baik boleh diwakili dua cara berbeza. Cuba graf, penghapusan dan penggantian, lalu bandingkan jawapannya.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, apabila y = 2x + 1 diganti dalam 3x + 2y = 16, kita dapat:",p:["3x + 2(2x + 1) = 16","3x + 2(2x) + 1 = 16","3(2x + 1) + 2y = 16","2x + 1 + 2y = 16"],b:0,u:"Gantikan y dengan (2x + 1) dalam 3x + 2y = 16. Kurungan mesti dikekalkan supaya 2 mendarab kedua-dua sebutan."},
 {j:"nombor",t:"Dalam Rajah 1, 3x + 2(2x + 1) = 16 dikembangkan menjadi 7x + 2 = 16. Berapakah nilai x?",b:2,tol:0.01,u:"7x = 16 − 2 = 14, maka x = 2.",kira:()=>(16-2)/7},
 {j:"nombor",t:"Dalam Rajah 1, berapakah nilai y apabila x = 2?",b:5,tol:0.01,u:"y = 2x + 1 = 2(2) + 1 = 5.",kira:()=>2*2+1},
 {j:"nombor",t:"Selesaikan y = x + 3 dan 2x + y = 12 dengan penggantian. Berapakah nilai x?",b:3,tol:0.01,u:"2x + (x + 3) = 12, maka 3x = 9 dan x = 3.",kira:()=>(12-3)/3},
 {j:"nombor",t:"Harga 2 buku dan 1 pen ialah RM11. Harga 1 buku dan 1 pen ialah RM7. Berapakah harga sebuah buku (dalam RM)?",b:4,tol:0.01,u:"Persamaan: 2b + p = 11 dan b + p = 7. Tolak: b = 4.",kira:()=>11-7},
 {j:"nombor",t:"Umur Aina tiga kali umur adiknya. Jumlah umur mereka ialah 16 tahun. Berapakah umur adik (tahun)?",b:4,tol:0.01,suf:"tahun",u:"a = 3d dan a + d = 16. Ganti: 3d + d = 16, maka 4d = 16 dan d = 4.",kira:()=>16/(3+1)},
 {j:"pilih",t:"Antara sistem berikut, yang paling sesuai diselesaikan dengan penggantian ialah:",p:["y = 3x dan x + y = 20","2x + 3y = 7 dan 3x + 2y = 8","x + y = 5 dan x − y = 1","2x + y = 4 dan 4x + 2y = 8"],b:0,u:"Sistem pertama sudah ada y dalam sebutan x, jadi terus diganti. Yang lain lebih mudah dengan penghapusan atau graf."},
 {j:"susun",t:"Susun langkah menyelesaikan persamaan serentak dengan kaedah penggantian.",p:["Tulis satu pemboleh ubah dalam sebutan yang lain","Ganti ungkapan itu dalam persamaan yang lain","Selesaikan persamaan satu pemboleh ubah","Ganti balik untuk cari pemboleh ubah kedua"],b:[0,1,2,3],u:"Asingkan, ganti, selesaikan, kemudian ganti balik."}],
 bos:{j:"buka",
  t:"Reka satu masalah harian yang boleh diwakili oleh dua persamaan linear serentak, contohnya harga dua jenis barang di kedai, dan selesaikannya.",
  arahan:"Nyatakan situasi, tetapkan pemboleh ubah, bentuk dua persamaan, selesaikan dengan graf, penghapusan atau penggantian, dan semak jawapan awak dalam kedua-dua persamaan.",
  u:"Jawapan TP6 yang kukuh membentuk dua persamaan yang betul daripada situasi yang munasabah, menyelesaikan dengan kaedah yang sesuai, menyemak jawapan dalam kedua-dua persamaan, dan menyatakan maksud jawapan dalam konteks masalah."}}
];

module.exports = {
  id:"m1b6", tingkatan:1, kod:"6.0 Persamaan Linear",
  tajuk:"Neraca Ajaib",
  subtajuk:"Matematik Ting. 1 · Bab 6 Persamaan Linear",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal pasti persamaan linear dalam satu pemboleh ubah dan menerangkan cirinya, serta memahami maksud kedua-dua belah persamaan sebagai neraca yang seimbang. Langkah seterusnya ialah memahami dua pemboleh ubah.",
   2:"{n} memahami persamaan linear dalam dua pemboleh ubah, penyelesaiannya sebagai titik pada graf, dan maksud persamaan serentak. Perlu lebih latihan menggantikan nilai sebelum bergerak ke TP3.",
   3:"{n} boleh menyelesaikan persamaan linear satu pemboleh ubah dengan operasi songsang pada kedua-dua belah. Galakkan menyemak jawapan dengan menggantikannya ke dalam persamaan asal.",
   4:"{n} mampu menyelesaikan persamaan linear serentak dengan kaedah graf dan mentafsirkan titik persilangan serta kes selari dan bertindih. Seterusnya latih kaedah algebra.",
   5:"{n} dapat menyelesaikan persamaan linear serentak dengan kaedah penghapusan, termasuk menyamakan pekali. Sudah bersedia untuk masalah yang melibatkan situasi harian.",
   6:"{n} berjaya membentuk dan menyelesaikan masalah persamaan linear serentak dengan penggantian, penghapusan atau graf. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Persamaan Linear. Cadangan: ulang hentian pertama dengan Rajah 1 sambil menerangkan mengapa kedua-dua belah neraca mesti sama."
  },
  lampiran:{ neraca1:R_NERACA1, dua1:R_DUA, langkah1:R_LANGKAH, graf1:R_GRAF, hapus1:R_HAPUS, ganti1:R_GANTI },
  aras:ARAS
};
