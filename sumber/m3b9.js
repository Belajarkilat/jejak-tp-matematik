/* Sumber kandungan — Matematik KSSM Tingkatan 3, Bab 9 Garis Lurus.
   Fail ini disunting tangan. Jalankan `node bina.js m3b9` untuk menyemaknya
   dan menghasilkan bank-m3b9.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 3, Bahagian Pembangunan Kurikulum, muka 68 (dskp/matematik-t3.pdf).

   Soalan berangka mempunyai medan `kira` yang mengira jawapan secara bebas
   (kecerunan, pintasan, titik persilangan) dan dibandingkan oleh
   tools/semak-jawapan.js. Rajah ialah widget `garis` dalam widget-m3b9.js. */
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
const kec = (x1, y1, x2, y2) => (y2 - y1) / (x2 - x1);
/* Persilangan y = m1 x + c1 dan y = m2 x + c2 */
const silang = (m1, c1, m2, c2) => { const x = (c2 - c1) / (m1 - m2); return [x, m1 * x + c1]; };

const SPI = [
"Mempamerkan pengetahuan asas tentang kecerunan dan pintasan-y dalam persamaan garis lurus.",
"Mempamerkan kefahaman tentang garis lurus.",
"Mengaplikasikan kefahaman tentang garis lurus untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran tentang garis lurus dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran tentang garis lurus dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran tentang garis lurus dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran: satah Cartes interaktif ---------- */

const KEMBAR = "Rajah satah Cartes interaktif; gelongsor menukar garis lurus dan persamaannya";
const C_SEMUA = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
const R_GAR1 = { jenis:"interaktif", w:"garis", mod:"mc", mNilai:[-3, -2, -1, -0.5, 0, 0.5, 1, 2, 3], cNilai:C_SEMUA, a:7, b:5,
  kapsyen:"Rajah 1 · Gelongsor m dan c. Perhatikan kecerunan dan pintasan-y garis itu.", alt:KEMBAR };
const R_GAR2 = { jenis:"interaktif", w:"garis", mod:"abc", aNilai:[-4, -2, -1, 1, 2, 4], bNilai:[-4, -2, -1, 1, 2, 4], a:4, b:5,
  kapsyen:"Rajah 1 · Gelongsor a dan b. Lihat tiga bentuk persamaan bagi garis yang sama.", alt:KEMBAR };
const R_GAR3 = { jenis:"interaktif", w:"garis", mod:"mc", mNilai:[-2, -1, -0.5, 0.5, 1, 2], cNilai:C_SEMUA, titik:[[2, 3], [-2, -1]], a:4, b:5,
  kapsyen:"Rajah 1 · Gelongsor m dan c. Titik A dan B ditandakan; lihat sama ada garis melaluinya.", alt:KEMBAR };
const R_GAR4 = { jenis:"interaktif", w:"garis", mod:"selari", mNilai:[2], c1:1, cNilai:C_SEMUA, b:4, cabar:true,
  kapsyen:"Rajah 1 · L1 ialah y = 2x + 1. Kira dahulu, kemudian tetapkan c bagi L2 dan semak.", alt:KEMBAR };
const R_GAR5 = { jenis:"interaktif", w:"garis", mod:"silang", m1:1, c1:1, mNilai:[-3, -2, -1, -0.5, 0, 0.5, 1, 2, 3], cNilai:[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5], a:2, b:9, cabar:true,
  kapsyen:"Rajah 1 · L1 ialah y = x + 1. Kira titik persilangan dengan L2, kemudian semak.", alt:KEMBAR };
const R_GAR6 = { jenis:"interaktif", w:"garis", mod:"khas", cNilai:C_SEMUA, a:0, b:6,
  kapsyen:"Rajah 1 · Pilih garis mengufuk y = k atau garis mencancang x = k, kemudian ubah k.", alt:KEMBAR };

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Papan Luncur", sk:"9.1.1 Kecerunan, pintasan-y dan y = mx + c", lampiran:"gar1",
 kadNama:"Kecerunan", kadEm:"\u{1F6DD}", kadFakta:"Kecerunan ialah ukuran kecuraman. Papan luncur yang naik 1 m bagi setiap 2 m mendatar mempunyai kecerunan 1/2, iaitu cerun yang landai.",
 bosKadNama:"Pintasan-y", bosKadEm:"\u{1F3AF}", bosKadFakta:"Pintasan-y ialah tempat garis memotong paksi-y, iaitu nilai y apabila x = 0. Dalam y = mx + c, ia sentiasa sama dengan c.",
 soalan:[
 {j:"pilih",t:"Dalam persamaan garis lurus y = mx + c, m mewakili:",p:["Kecerunan garis","Pintasan-y garis","Pintasan-x garis","Jarak dari asalan"],b:0,u:"m ialah kecerunan, iaitu berapa banyak y berubah apabila x bertambah 1."},
 {j:"pilih",t:"Dalam persamaan y = mx + c, c mewakili:",p:["Nilai y apabila x = 0","Kecerunan garis","Nilai x apabila y = 0","Jumlah m dan x"],b:0,u:"c ialah pintasan-y, iaitu nilai y di mana garis memotong paksi-y."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan m = 2 dan c = 1 (y = 2x + 1). Berapakah pintasan-y garis itu?",b:1,tol:0.01,u:"Pintasan-y ialah c = 1. Garis memotong paksi-y di titik (0, 1).",kira:()=>1},
 {j:"pilih",t:"Apakah kecerunan garis y = 3x − 5?",p:["3","−5","−3","15"],b:0,u:"Bandingkan dengan y = mx + c. Pekali x ialah m = 3.",kira:()=>3},
 {j:"pilih",t:"Apakah pintasan-y bagi garis y = −2x + 7?",p:["7","−2","−7","3.5"],b:0,u:"Pintasan-y ialah sebutan malar c = 7.",kira:()=>7},
 {j:"nombor",t:"Sebuah papan luncur naik 6 m bagi setiap 12 m jarak mendatar. Berapakah kecerunannya?",b:0.5,tol:0.01,u:"Kecerunan = naik ÷ larian = 6 ÷ 12 = 0.5.",kira:()=>6/12},
 {j:"susun",t:"Susun langkah mencari kecerunan garis yang melalui titik (1, 2) dan (3, 8).",p:["Tulis dua titik: (1, 2) dan (3, 8)","Cari beza y: 8 − 2 = 6","Cari beza x: 3 − 1 = 2","Bahagi: kecerunan = 6 ÷ 2 = 3"],b:[0,1,2,3],u:"Kecerunan ialah beza y dibahagi beza x."},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan m = −1 dan c = 0. Garis itu bergerak ke arah mana dari kiri ke kanan?",p:["Menurun","Menaik","Mengufuk","Mencancang"],b:0,u:"Kecerunan negatif bermaksud garis menurun dari kiri ke kanan."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang garis y = −2x + 3.",p:["Kecerunannya ialah −2","Pintasan-y ialah 3","Garis melalui titik (0, 3)","Garis melalui titik (3, 0)","Garis menaik dari kiri ke kanan","Pintasan-x ialah 3"],b:[0,1,2],u:"m = −2 dan c = 3, jadi garis melalui (0, 3). Apabila x = 3, y = −3, maka (3, 0) tidak pada garis. Garis menurun kerana m negatif, dan pintasan-x ialah 1.5."}},

{n:2, tempat:"Tambang Teksi", sk:"9.1.2 Bentuk ax + by = c dan x/a + y/b = 1", lampiran:"gar2",
 kadNama:"Tiga Bentuk", kadEm:"\u{1F696}", kadFakta:"Garis yang sama boleh ditulis dalam tiga bentuk: y = mx + c, ax + by = c dan x/a + y/b = 1. Pilih bentuk yang paling memudahkan soalan.",
 bosKadNama:"Dua Pintasan", bosKadEm:"\u{270C}\u{FE0F}", bosKadFakta:"Untuk melukis garis dengan pantas, cari dua pintasan: letak x = 0 untuk pintasan-y, kemudian letak y = 0 untuk pintasan-x, dan sambung kedua-dua titik.",
 soalan:[
 {j:"pilih",t:"Antara berikut, yang manakah bentuk pintasan bagi persamaan garis lurus, dengan a dan b ialah pintasan-x dan pintasan-y?",p:["x/a + y/b = 1","y = mx + c","x + y = ab","xy = 1"],b:0,u:"Dalam x/a + y/b = 1, garis memotong paksi-x di (a, 0) dan paksi-y di (0, b)."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 2 dan b = 4 (x/2 + y/4 = 1). Berapakah kecerunan garis itu?",b:-2,tol:0.01,u:"Kecerunan = −b ÷ a = −4 ÷ 2 = −2.",kira:()=>-4/2},
 {j:"pilih",t:"Ubah 2x + y = 6 kepada bentuk y = mx + c. Jawapannya:",p:["y = −2x + 6","y = 2x + 6","y = −2x − 6","y = 2x − 6"],b:0,u:"Tolak 2x pada kedua-dua belah: y = −2x + 6.",kira:()=>{ const x = 1, y = 6 - 2 * x; return y === -2 * x + 6; }},
 {j:"nombor",t:"Bagi garis 2x + 3y = 12, berapakah pintasan-y?",b:4,tol:0.01,u:"Letak x = 0: 3y = 12, maka y = 4.",kira:()=>12/3},
 {j:"nombor",t:"Bagi garis 2x + 3y = 12, berapakah pintasan-x?",b:6,tol:0.01,u:"Letak y = 0: 2x = 12, maka x = 6.",kira:()=>12/2},
 {j:"pilih",t:"Tulis 3x + 2y = 6 dalam bentuk x/a + y/b = 1.",p:["x/2 + y/3 = 1","x/3 + y/2 = 1","x/6 + y/6 = 1","x/2 + y/3 = 6"],b:0,u:"Bahagi kedua-dua belah dengan 6: x/2 + y/3 = 1. Pintasan-x = 2 dan pintasan-y = 3.",kira:()=>3*2 === 6 && 2*3 === 6},
 {j:"susun",t:"Susun langkah menukar 4x + 2y = 8 kepada bentuk y = mx + c.",p:["Tolak 4x pada kedua-dua belah: 2y = 8 − 4x","Susun semula: 2y = −4x + 8","Bahagi semua sebutan dengan 2: y = −2x + 4","Baca m = −2 dan c = 4"],b:[0,1,2,3],u:"Asingkan y, kemudian bahagi dengan pekali y."},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan a = 4 dan b = 2. Persamaan garis itu dalam bentuk y = mx + c ialah:",p:["y = −0.5x + 2","y = −2x + 4","y = 0.5x + 2","y = −2x + 2"],b:0,u:"m = −b ÷ a = −2 ÷ 4 = −0.5 dan c = b = 2.",kira:()=>-2/4 === -0.5}],
 bos:{j:"nombor",t:"Garis 5x − 2y = 10 memotong paksi-x di (a, 0) dan paksi-y di (0, b). Berapakah nilai a + b?",b:-3,tol:0.01,u:"Letak y = 0: 5x = 10, a = 2. Letak x = 0: −2y = 10, b = −5. Jadi a + b = −3.",kira:()=>10/5 + 10/(-2)}},

{n:3, tempat:"Peta Harta Karun", sk:"9.1.3 Titik pada garis lurus dan titik bukan pada garis", lampiran:"gar3",
 kadNama:"Ujian Titik", kadEm:"\u{1F5FA}\u{FE0F}", kadFakta:"Untuk menguji sama ada satu titik ada pada garis, gantikan x dan y titik itu ke dalam persamaan. Jika kedua-dua belah sama, titik itu pada garis.",
 bosKadNama:"Banyak Titik", bosKadEm:"\u{1F4CD}", bosKadFakta:"Satu garis lurus mempunyai titik yang tidak terhingga banyaknya. Semuanya memuaskan persamaan yang sama.",
 soalan:[
 {j:"pilih",t:"Sebuah titik (x, y) terletak pada suatu garis lurus jika:",p:["Koordinatnya memuaskan persamaan garis itu","Nilai x sama dengan nilai y","Nilai y ialah sifar","Kedua-dua koordinatnya positif"],b:0,u:"Gantikan x dan y ke dalam persamaan. Jika kedua-dua belah sama, titik itu pada garis."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan m = 1 dan c = 1 (y = x + 1). Berapakah nilai y bagi garis itu apabila x = 2?",b:3,tol:0.01,u:"y = 2 + 1 = 3.",kira:()=>1*2 + 1},
 {j:"pilih",t:"Adakah titik A(2, 3) terletak pada garis y = x + 1?",p:["Ya, kerana y = 2 + 1 = 3","Tidak, kerana y = 2 − 1 = 1","Tidak, kerana y = 2 × 1 = 2","Ya, kerana y = 2 × 3 = 6"],b:0,u:"Gantikan x = 2: y = 2 + 1 = 3, sama dengan koordinat-y titik A.",kira:()=>2 + 1 === 3},
 {j:"pilih",t:"Yang manakah titik pada garis y = 2x − 3?",p:["(3, 3)","(2, 3)","(3, 2)","(1, 1)"],b:0,u:"Gantikan x = 3: y = 2(3) − 3 = 3. Titik lain tidak memuaskan persamaan.",kira:()=>[[3,3],[2,3],[3,2],[1,1]].filter(p => p[1] === 2*p[0] - 3).length === 1 && 2*3 - 3 === 3},
 {j:"nombor",t:"Titik (4, k) terletak pada garis y = 3x − 5. Cari nilai k.",b:7,tol:0.01,u:"k = 3(4) − 5 = 7.",kira:()=>3*4 - 5},
 {j:"pilih",t:"Titik (a, 5) terletak pada garis y = 2x + 1. Cari nilai a.",p:["2","−2","11","12"],b:0,u:"5 = 2a + 1, maka 2a = 4 dan a = 2.",kira:()=>(5 - 1) / 2},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan m = 1 dan c = 1. Antara titik A(2, 3) dan B(−2, −1), yang manakah terletak pada garis itu?",p:["Kedua-dua A dan B","A sahaja","B sahaja","Tiada satu pun"],b:0,u:"Bagi A: 2 + 1 = 3. Bagi B: −2 + 1 = −1. Kedua-duanya memuaskan y = x + 1.",kira:()=>2 + 1 === 3 && -2 + 1 === -1},
 {j:"pilih",t:"Titik P(1, 4) tidak terletak pada garis y = 3x + 2. Berapakah nilai y pada garis itu apabila x = 1?",p:["5","4","6","3"],b:0,u:"y = 3(1) + 2 = 5, bukan 4. Jadi P berada di bawah garis.",kira:()=>3*1 + 2}],
 bos:{j:"banyak",t:"Pilih SEMUA titik yang terletak pada garis y = −x + 4.",p:["(0, 4)","(4, 0)","(2, 2)","(−1, 5)","(1, 4)","(3, 2)"],b:[0,1,2,3],u:"Titik yang memuaskan y = −x + 4 ialah (0, 4), (4, 0), (2, 2) dan (−1, 5). Bagi (1, 4), y sepatutnya 3. Bagi (3, 2), y sepatutnya 1."}},

{n:4, tempat:"Landasan Kereta Api", sk:"9.1.4 / 9.1.5 Garis selari dan persamaan garis lurus", lampiran:"gar4",
 kadNama:"Landasan Selari", kadEm:"\u{1F686}", kadFakta:"Dua landasan kereta api tidak akan bertemu kerana kecerunannya sama. Begitu juga garis selari: kecerunan sama, pintasan-y berbeza.",
 bosKadNama:"Cari Persamaan", bosKadEm:"\u{1F9EE}", bosKadFakta:"Untuk mencari persamaan garis, cari kecerunan m dahulu, kemudian gantikan satu titik ke dalam y = mx + c untuk mendapatkan c.",
 soalan:[
 {j:"pilih",t:"Dua garis lurus adalah selari jika:",p:["Kecerunannya sama","Pintasan-y-nya sama","Hasil darab kecerunannya ialah 1","Kedua-duanya melalui asalan"],b:0,u:"Garis selari mempunyai kecerunan yang sama dan tidak pernah bertemu."},
 {j:"nombor",t:"Garis y = 3x + 2 selari dengan garis y = mx − 4. Cari nilai m.",b:3,tol:0.01,u:"Garis selari mempunyai kecerunan sama, jadi m = 3.",kira:()=>3},
 {j:"pilih",t:"Antara garis berikut, yang manakah selari dengan y = 2x + 5?",p:["y = 2x − 1","y = −2x + 5","y = 5x + 2","y = x/2 + 5"],b:0,u:"y = 2x − 1 mempunyai kecerunan 2, sama dengan y = 2x + 5.",kira:()=>2 === 2 && -2 !== 2 && 5 !== 2 && 0.5 !== 2},
 {j:"nombor",t:"Cari kecerunan garis yang melalui titik (1, 2) dan (4, 11).",b:3,tol:0.01,u:"Kecerunan = (11 − 2) ÷ (4 − 1) = 9 ÷ 3 = 3.",kira:()=>kec(1, 2, 4, 11)},
 {j:"pilih",t:"Cari persamaan garis berkecerunan 2 yang melalui titik (0, 5).",p:["y = 2x + 5","y = 5x + 2","y = 2x − 5","y = −2x + 5"],b:0,u:"Titik (0, 5) ialah pintasan-y, jadi c = 5. Persamaannya y = 2x + 5.",kira:()=>2*0 + 5 === 5},
 {j:"nombor",t:"Dalam Rajah 1, L2 selari dengan L1 dan melalui titik (1, 6). Berapakah nilai c bagi L2?",b:4,tol:0.01,u:"L2 ialah y = 2x + c. Gantikan (1, 6): 6 = 2 + c, maka c = 4.",kira:()=>6 - 2*1},
 {j:"pilih",t:"Cari persamaan garis yang selari dengan y = −x + 3 dan melalui titik (2, 5).",p:["y = −x + 7","y = −x + 3","y = x + 3","y = x + 7"],b:0,u:"Kecerunan = −1. Gantikan (2, 5): 5 = −2 + c, maka c = 7.",kira:()=>-1*2 + 7 === 5},
 {j:"susun",t:"Susun langkah mencari persamaan garis berkecerunan 3 yang melalui titik (2, 4).",p:["Tulis y = mx + c dengan m = 3: y = 3x + c","Gantikan x = 2 dan y = 4: 4 = 3(2) + c","Selesaikan: c = 4 − 6 = −2","Tulis persamaan: y = 3x − 2"],b:[0,1,2,3],u:"Gantikan titik yang diberi untuk mendapatkan c."}],
 bos:{j:"nombor",t:"Garis M melalui (1, 3) dan (3, 9). Garis N selari dengan M dan melalui (0, −3). Di manakah N memotong paksi-x? Beri nilai x.",b:1,tol:0.01,u:"Kecerunan M = (9 − 3) ÷ (3 − 1) = 3. N ialah y = 3x − 3. Letak y = 0: x = 1.",kira:()=>{ const m = kec(1, 3, 3, 9); return -(-3) / m; }}},

{n:5, tempat:"Simpang Jalan", sk:"9.1.6 Titik persilangan dua garis lurus", lampiran:"gar5",
 kadNama:"Simpang", kadEm:"\u{1F6A6}", kadFakta:"Titik persilangan ialah simpang antara dua garis. Ia satu-satunya titik yang memuaskan kedua-dua persamaan serentak.",
 bosKadNama:"Semak Kalkulator", bosKadEm:"\u{1F5A9}", bosKadFakta:"Kalkulator hanya untuk menyemak jawapan. Langkah penggantian atau penghapusan tetap perlu ditunjukkan dalam kertas kerja awak.",
 soalan:[
 {j:"pilih",t:"Titik persilangan dua garis lurus ialah titik yang:",p:["Terletak pada kedua-dua garis","Terletak pada paksi-x sahaja","Mempunyai koordinat x sama dengan y","Berada di antara kedua-dua garis"],b:0,u:"Titik itu memuaskan kedua-dua persamaan garis pada masa yang sama."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan L2: y = −x + 5. Berapakah koordinat-x titik persilangan L1 dan L2?",b:2,tol:0.01,u:"x + 1 = −x + 5, maka 2x = 4 dan x = 2.",kira:()=>silang(1, 1, -1, 5)[0]},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan L2: y = −x + 5. Berapakah koordinat-y titik persilangan L1 dan L2?",b:3,tol:0.01,u:"Gantikan x = 2 ke dalam y = x + 1: y = 3. Titik persilangan ialah (2, 3).",kira:()=>silang(1, 1, -1, 5)[1]},
 {j:"pilih",t:"Kaedah penggantian bagi y = 2x dan y = x + 3 memberikan persamaan:",p:["2x = x + 3","2x + x = 3","2x − x = −3","x = 2x + 3"],b:0,u:"Gantikan y = 2x ke dalam y = x + 3 untuk mendapat 2x = x + 3.",kira:()=>{ const x = 3; return 2*x === x + 3; }},
 {j:"nombor",t:"Selesaikan y = 2x dan y = x + 3. Berapakah nilai x di titik persilangan?",b:3,tol:0.01,u:"2x = x + 3, maka x = 3 dan y = 6.",kira:()=>silang(2, 0, 1, 3)[0]},
 {j:"pilih",t:"Garis y = 3x + 1 dan y = 3x − 4 tidak bersilang kerana:",p:["Kecerunannya sama, jadi garisnya selari","Pintasan-y-nya sama","Kedua-duanya menurun","Salah satu garisnya mencancang"],b:0,u:"Kecerunan kedua-duanya 3, jadi garisnya selari dan tidak pernah bertemu."},
 {j:"susun",t:"Susun langkah kaedah penghapusan bagi x + y = 7 dan x − y = 1.",p:["Tambah kedua-dua persamaan: 2x = 8","Bahagi dengan 2: x = 4","Gantikan x = 4 ke dalam x + y = 7: y = 3","Tulis persilangan: (4, 3)"],b:[0,1,2,3],u:"Penghapusan menghilangkan y kerana +y dan −y bertemu."},
 {j:"nombor",t:"Selesaikan 2x + y = 8 dan x − y = 1. Berapakah nilai y?",b:2,tol:0.01,u:"Tambah: 3x = 9, x = 3. Gantikan ke x − y = 1: y = 2.",kira:()=>{ const x = 9 / 3; return x - 1; }}],
 bos:{j:"nombor",t:"Garis 3x + 2y = 12 dan x − y = −1 bersilang di titik (p, q). Berapakah nilai p + q?",b:5,tol:0.01,u:"Daripada x − y = −1, y = x + 1. Gantikan: 3x + 2x + 2 = 12, maka x = 2 dan y = 3. p + q = 5.",kira:()=>{ const x = (12 - 2*1) / 5; return x + (x + 1); }}},

{n:6, tempat:"Reka Laluan", sk:"9.1.1 / 9.1.7 Garis mengufuk, mencancang dan masalah bukan rutin", lampiran:"gar6",
 kadNama:"Dua Arah", kadEm:"\u{1F9ED}", kadFakta:"Garis mengufuk (y = k) tidak menaik dan tidak menurun, jadi kecerunannya sifar. Garis mencancang (x = k) terlalu curam sehingga kecerunannya tak tertakrif.",
 bosKadNama:"Reka Sendiri", bosKadEm:"\u{270F}\u{FE0F}", bosKadFakta:"Pereka pelan dan jurutera jalan menggunakan garis lurus untuk melakar laluan, pagar dan bumbung. Setiap bucu ialah titik persilangan dua garis.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih garis mencancang dan tetapkan k = 3. Kecerunan garis itu ialah:",p:["Tak tertakrif","Sifar","3","1/3"],b:0,u:"Garis mencancang tiada larian mendatar, jadi pembahagian dengan sifar tidak tertakrif."},
 {j:"pilih",t:"Garis y = −2 ialah garis:",p:["Mengufuk dan berkecerunan sifar","Mencancang dan berkecerunan sifar","Mengufuk dan berkecerunan −2","Mencancang dan tak tertakrif"],b:0,u:"y = k ialah garis mengufuk, selari dengan paksi-x, dengan kecerunan 0."},
 {j:"nombor",t:"Garis y = k dan garis x = 4 bersilang di titik (4, −2). Cari nilai k.",b:-2,tol:0.01,u:"Titik persilangan berada pada y = k, jadi k = −2.",kira:()=>-2},
 {j:"pilih",t:"Garis mencancang yang melalui titik (−3, 7) mempunyai persamaan:",p:["x = −3","y = 7","y = −3","x = 7"],b:0,u:"Garis mencancang mempunyai x tetap, iaitu koordinat-x titik itu."},
 {j:"nombor",t:"Sebuah pagar segi empat tepat dibina dengan garis x = 1, x = 5, y = 2 dan y = 4 (unit dalam meter). Berapakah luas kawasan itu (m²)?",b:8,tol:0.01,suf:"m²",u:"Panjang = 5 − 1 = 4 m dan lebar = 4 − 2 = 2 m. Luas = 4 × 2 = 8 m².",kira:()=>(5 - 1) * (4 - 2)},
 {j:"pilih",t:"Garis y = 2x − 1 bersilang dengan garis mengufuk y = 5 di titik:",p:["(3, 5)","(5, 3)","(2, 5)","(5, 9)"],b:0,u:"Letak y = 5: 2x − 1 = 5, maka x = 3.",kira:()=>(5 + 1) / 2 === 3},
 {j:"nombor",t:"Garis y = 2x + 3 bersilang dengan garis mencancang x = 4 di titik (4, t). Cari nilai t.",b:11,tol:0.01,u:"t = 2(4) + 3 = 11.",kira:()=>2*4 + 3},
 {j:"pilih",t:"Dalam Rajah 1, garis mengufuk y = k dan garis mencancang x = k dipilih dengan k yang sama. Mereka bersilang di:",p:["(k, k)","(k, −k)","(−k, k)","(k, 2k)"],b:0,u:"Garis mencancang x = k memberi koordinat-x = k dan garis mengufuk y = k memberi koordinat-y = k."}],
 bos:{j:"buka",
  t:"Reka sebuah taman berbentuk segi tiga pada satah Cartes menggunakan tiga garis lurus: satu mengufuk, satu mencancang dan satu condong.",
  arahan:"Tulis persamaan ketiga-tiga garis, cari koordinat tiga bucu taman itu (titik persilangan), dan kira luas taman. Semak bahawa setiap bucu memuaskan kedua-dua persamaan garisnya.",
  u:"Jawapan TP6 yang kukuh memilih garis yang membentuk segi tiga tertutup, mencari setiap bucu dengan penggantian atau penghapusan, mengira luas dengan betul, dan menyemak bucu dalam kedua-dua persamaan."}}
];

module.exports = {
  id:"m3b9", tingkatan:3, kod:"9.0 Garis Lurus",
  tajuk:"Peta Lurus",
  subtajuk:"Matematik Ting. 3 · Bab 9 Garis Lurus",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal kecerunan dan pintasan-y dalam persamaan y = mx + c. Langkah seterusnya ialah menukar antara bentuk persamaan dan memahami maksud setiap sebutan.",
   2:"{n} memahami garis lurus dan boleh menukar antara y = mx + c, ax + by = c dan x/a + y/b = 1. Perlu lebih latihan mengaitkan bentuk persamaan dengan kedudukan garis sebelum ke TP3.",
   3:"{n} boleh menentukan sama ada titik terletak pada garis lurus dengan menggantikan koordinat, serta mencari nilai yang hilang. Galakkan menyemak jawapan dengan melukis garis pada satah Cartes.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah tentang garis selari dan mencari persamaan garis daripada kecerunan dan satu titik. Seterusnya latih titik persilangan dua garis.",
   5:"{n} dapat menyelesaikan masalah kompleks yang melibatkan titik persilangan dengan kaedah penggantian dan penghapusan. Sudah bersedia untuk masalah bukan rutin yang menggabungkan beberapa konsep.",
   6:"{n} berjaya mereka bentuk situasi yang melibatkan garis mengufuk, mencancang dan condong, dengan pengiraan bucu dan luas yang betul. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Garis Lurus. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyebut kecerunan dan pintasan-y setiap garis dengan bimbingan rakan sebaya."
  },
  lampiran:{ gar1:R_GAR1, gar2:R_GAR2, gar3:R_GAR3, gar4:R_GAR4, gar5:R_GAR5, gar6:R_GAR6 },
  aras:ARAS
};
