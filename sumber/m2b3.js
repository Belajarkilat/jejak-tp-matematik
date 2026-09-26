/* Sumber kandungan — Matematik KSSM Tingkatan 2, Bab 3 Rumus Algebra.
   Fail ini disunting tangan. Jalankan `node bina.js m2b3` untuk menyemaknya
   dan menghasilkan bank-m2b3.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 41 (dskp/matematik-t2.pdf).
   DSKP T2 menulis satu jadual enam tahap bagi bab ini, jadi keenam-enam tahap
   dikekalkan tanpa tambahan.

   Standard Pembelajaran yang disasarkan: 3.1.1 (membentuk rumus), 3.1.2
   (menukar perkara rumus), 3.1.3 (menentukan nilai pemboleh ubah) dan 3.1.4
   (menyelesaikan masalah yang melibatkan rumus).

   Widget: t2bentuk, t2ganti, t2tukar dan t2situasi dalam widget-m2b3.js.
   Semua jawapan berangka dikira dalam medan `kira` dan dibandingkan oleh
   tools/semak-jawapan.js. */
const { s } = require("./_k");
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
const F = c => 9 * c / 5 + 32;
const L = (a, b, t) => (a + b) * t / 2;
const V = (u, a, t) => u + a * t;

const SPI = [
"Mempamerkan pengetahuan asas tentang rumus.",
"Mempamerkan kefahaman tentang rumus.",
"Mengaplikasikan kefahaman tentang rumus untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang rumus dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang rumus dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang rumus dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran ---------- */

const R_TAMBANG = {
  jenis:"interaktif", w:"t2bentuk", tetap:3, kadar:2, maks:10, h:"k", j:"T", label:"jarak k (km)", awalan:"RM", n0:3,
  kapsyen:"Rajah 1 · Tambang teksi ialah RM3 untuk permulaan dan RM2 bagi setiap kilometer. Gerakkan gelongsor k.",
  alt:"Rajah interaktif tambang teksi T = 3 + 2k; gelongsor k menambah blok RM2 dan menunjukkan gantian serta jumlah tambang"
};
const R_SUHU = {
  jenis:"interaktif", w:"t2ganti", set:"suhu", awal:{ c:3 },
  kapsyen:"Rajah 1 · Rumus F = 9C/5 + 32 menukar suhu Celsius kepada Fahrenheit. Gerakkan gelongsor C.",
  alt:"Rajah interaktif termometer dan rumus F = 9C/5 + 32; gelongsor C menukar suhu dan menunjukkan gantian serta nilai F"
};
const R_TUKAR = {
  jenis:"interaktif", w:"t2tukar", set:"vut", perkara:"a",
  kapsyen:"Rajah 1 · Menjadikan a perkara rumus bagi v = u + at. Gerakkan gelongsor langkah satu demi satu.",
  alt:"Rajah interaktif langkah menukar perkara rumus v = u + at kepada a, dengan operasi yang sama pada kedua-dua belah"
};
const R_TRAP = {
  jenis:"interaktif", w:"t2ganti", set:"trapezium", cabar:true,
  kapsyen:"Rajah 1 · Luas trapezium L = (a + b) × t / 2. Tetapkan a, b dan t, kira dahulu, kemudian semak dengan rajah.",
  alt:"Rajah interaktif trapezium dengan sisi selari a dan b serta tinggi t; gelongsor menukar ukuran dan luas L dikira daripada rumus"
};
const R_LAJU = {
  jenis:"interaktif", w:"t2ganti", set:"laju", cabar:true,
  kapsyen:"Rajah 1 · Rumus v = u + at. Tetapkan u, a dan t, kira dahulu, kemudian semak dengan rajah.",
  alt:"Rajah interaktif bar laju akhir v yang terdiri daripada laju awal u dan pertambahan at; tiga gelongsor menukar u, a dan t"
};
const R_SITUASI = {
  jenis:"interaktif", w:"t2situasi", sasaran:16,
  kapsyen:"Rajah 1 · Kuasa dua suatu nombor n ialah 16. Petak putus-putus mewakili luas 16. Gerakkan gelongsor n.",
  alt:"Rajah interaktif petak bersisi n dibandingkan dengan petak sasaran berluas 16; gelongsor n merentasi nombor negatif dan positif"
};

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Meter Teksi", sk:"3.1.1 Membentuk rumus berdasarkan suatu situasi", lampiran:"tambang",
 kadNama:"Rumus", kadEm:"\u{1F695}", kadFakta:"Rumus ialah peraturan yang ditulis dengan simbol. Satu rumus boleh dipakai berulang kali dengan nombor yang berbeza.",
 bosKadNama:"Pemboleh Ubah", bosKadEm:"\u{1F524}", bosKadFakta:"Pemboleh ubah ialah huruf yang mewakili nilai yang boleh berubah, seperti k dalam T = 3 + 2k.",
 soalan:[
 {j:"pilih",t:"Dalam rumus T = 3 + 2k, apakah pemboleh ubahnya?",p:["T dan k","3 dan 2","Hanya nombor 3","T dan nombor 3"],b:0,u:"Pemboleh ubah ialah huruf yang mewakili nilai yang boleh berubah, iaitu T dan k. Nombor 3 dan 2 ialah nilai tetap."},
 {j:"pilih",t:"Dalam Rajah 1, tambang teksi mempunyai bahagian tetap RM3. Apakah maksud bahagian tetap?",p:["Bayaran permulaan yang sama bagi setiap perjalanan","Bayaran yang bertambah bagi setiap kilometer","Jumlah keseluruhan tambang perjalanan","Bilangan kilometer yang dilalui teksi"],b:0,u:"Bahagian tetap tidak bergantung pada jarak. RM3 dibayar walaupun perjalanan sangat dekat."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan k = 4. Berapakah jumlah tambang T (dalam RM)?",b:11,tol:0.01,u:"T = 3 + 2(4) = 3 + 8 = 11.",kira:()=>3+2*4},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan k = 7. Berapakah jumlah tambang T (dalam RM)?",b:17,tol:0.01,u:"T = 3 + 2(7) = 3 + 14 = 17.",kira:()=>3+2*7},
 {j:"pilih",t:"Tambang teksi ialah RM3 untuk permulaan ditambah RM2 bagi setiap kilometer. Rumus tambang T bagi k kilometer ialah:",p:["T = 3 + 2k","T = 2 + 3k","T = 3k + 2k","T = 5k"],b:0,u:"Bahagian tetap ialah 3. Bahagian berubah ialah 2 darab k, iaitu 2k. Jumlahnya T = 3 + 2k."},
 {j:"pilih",t:"Sebatang pen berharga RM4. Rumus jumlah harga J bagi n batang pen ialah:",p:["J = 4n","J = n + 4","J = 4 + n","J = n − 4"],b:0,u:"Setiap batang RM4, jadi n batang berharga 4 darab n. J = 4n."},
 {j:"susun",t:"Susun langkah membentuk rumus tambang teksi.",p:["Kenal pasti bahagian tetap, iaitu RM3","Kenal pasti bahagian berubah, iaitu RM2 bagi setiap km","Tulis bahagian berubah sebagai 2k","Tambah kedua-duanya: T = 3 + 2k"],b:[0,1,2,3],u:"Cari bahagian tetap, cari bahagian berubah, tulis dengan pemboleh ubah, kemudian tambah."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan k = 10. Berapakah jumlah tambang T (dalam RM)?",b:23,tol:0.01,u:"T = 3 + 2(10) = 3 + 20 = 23.",kira:()=>3+2*10}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang rumus T = 3 + 2k.",p:["T ialah jumlah tambang, bergantung pada k","k ialah bilangan km dan boleh berubah","Nombor 3 ialah bahagian tetap","Jika k = 5, maka T = 13","Jika k = 5, maka T = 25 kerana 5 × 5","Nombor 2 ialah bahagian tetap tambang itu"],b:[0,1,2,3],u:"T bergantung pada k, k boleh berubah dan 3 ialah bahagian tetap. Apabila k = 5, T = 3 + 10 = 13, bukan 25. Nombor 2 ialah kadar bagi setiap kilometer, bukan bahagian tetap.",kira:()=>3+2*5===13}},

{n:2, tempat:"Kilang Termometer", sk:"3.1.3 Menentukan nilai pemboleh ubah apabila nilai pemboleh ubah lain diberi", lampiran:"suhu",
 kadNama:"Dua Skala", kadEm:"\u{1F321}\u{FE0F}", kadFakta:"Air membeku pada 0 °C atau 32 °F, dan mendidih pada 100 °C atau 212 °F. Rumus F = 9C/5 + 32 menukar suhu daripada satu skala kepada skala lain.",
 bosKadNama:"Suhu Badan", bosKadEm:"\u{1F912}", bosKadFakta:"Suhu badan biasa manusia ialah kira-kira 37 °C, iaitu 98.6 °F. Demam biasanya bermula apabila suhu melebihi 38 °C.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan C = 20. Berapakah nilai F (°F)?",b:68,tol:0.01,u:"F = 9(20)/5 + 32 = 36 + 32 = 68.",kira:()=>F(20)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan C = 100. Berapakah nilai F (°F)?",b:212,tol:0.01,u:"F = 9(100)/5 + 32 = 180 + 32 = 212. Ini suhu air mendidih.",kira:()=>F(100)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan C = 0. Berapakah nilai F (°F)?",b:32,tol:0.01,u:"F = 9(0)/5 + 32 = 0 + 32 = 32. Ini suhu air membeku.",kira:()=>F(0)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan C = 37. Berapakah nilai F (°F)?",b:98.6,tol:0.05,u:"F = 9(37)/5 + 32 = 66.6 + 32 = 98.6.",kira:()=>bunda(F(37),1)},
 {j:"pilih",t:"Dalam rumus F = 9C/5 + 32, apakah yang diwakili oleh huruf F?",p:["Suhu dalam skala Fahrenheit","Suhu dalam skala Celsius","Suhu dalam skala Kelvin","Bilangan darjah sudut"],b:0,u:"F ialah suhu dalam Fahrenheit dan C ialah suhu dalam Celsius."},
 {j:"pilih",t:"Apakah cara betul menggantikan C = 30 ke dalam F = 9C/5 + 32?",p:["F = 9(30)/5 + 32","F = 9 + 30/5 + 32","F = 930/5 + 32","30 = 9F/5 + 32"],b:0,u:"Gantikan huruf C dengan 30 pada tempat C berada. 9C bermaksud 9 darab C, jadi 9(30)."},
 {j:"pilih",t:"Dalam Rajah 1, apabila C bertambah, apakah yang berlaku kepada F?",p:["F juga bertambah","F berkurang","F kekal sama","F sentiasa sifar"],b:0,u:"F = 9C/5 + 32. Apabila C bertambah, 9C/5 bertambah, jadi F juga bertambah."},
 {j:"susun",t:"Susun langkah mengira F apabila C = 25.",p:["Tulis rumus F = 9C/5 + 32","Gantikan C = 25: F = 9(25)/5 + 32","Kira 9(25)/5 = 45","Tambah 32: F = 77"],b:[0,1,2,3],u:"Tulis rumus, gantikan nilai, kira bahagian pertama, kemudian tambah 32.",kira:()=>F(25)===77}],
 bos:{j:"banyak",t:"Pilih SEMUA pasangan C dan F yang betul mengikut rumus F = 9C/5 + 32.",p:["C = 0, F = 32","C = 100, F = 212","C = 10, F = 50","C = 20, F = 60","C = 40, F = 100","C = 30, F = 50"],b:[0,1,2],u:"F(0) = 32, F(100) = 212 dan F(10) = 50 semuanya betul. F(20) = 68, bukan 60. F(40) = 104, bukan 100. F(30) = 86, bukan 50.",kira:()=>F(0)===32&&F(100)===212&&F(10)===50&&F(20)!==60&&F(40)!==100&&F(30)!==50}},

{n:3, tempat:"Bengkel Pindah Rumus", sk:"3.1.2 Menukar perkara rumus bagi suatu persamaan algebra", lampiran:"tukar",
 kadNama:"Perkara Rumus", kadEm:"\u{1F527}", kadFakta:"Perkara rumus ialah pemboleh ubah yang berdiri bersendirian di sebelah kiri tanda sama dengan, seperti v dalam v = u + at.",
 bosKadNama:"Operasi Songsang", bosKadEm:"\u{1F504}", bosKadFakta:"Tambah dan tolak ialah operasi songsang. Begitu juga darab dan bahagi. Operasi songsang membolehkan kita membuka rumus langkah demi langkah.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, langkah pertama untuk menjadikan a perkara rumus bagi v = u + at ialah:",p:["Tolak u kedua-dua belah","Bahagi kedua-dua belah dengan u","Tambah t kedua-dua belah","Darab kedua-dua belah dengan t"],b:0,u:"Kita mahu mengasingkan at. Tolak u kedua-dua belah supaya v − u = at."},
 {j:"pilih",t:"Dalam Rajah 1, selepas v − u = at, langkah seterusnya ialah:",p:["Bahagi kedua-dua belah dengan t","Bahagi kedua-dua belah dengan a","Tolak t kedua-dua belah","Darab kedua-dua belah dengan t"],b:0,u:"a didarab dengan t. Bahagi kedua-dua belah dengan t untuk mendapat a = (v − u) / t."},
 {j:"pilih",t:"Jadikan u perkara rumus bagi v = u + at.",p:["u = v − at","u = v + at","u = (v − a) / t","u = v / (at)"],b:0,u:"Tolak at daripada kedua-dua belah: v − at = u."},
 {j:"pilih",t:"Jadikan a perkara rumus bagi v = u + at.",p:["a = (v − u) / t","a = v − u / t","a = (v + u) / t","a = t(v − u)"],b:0,u:"v − u = at. Bahagi kedua-dua belah dengan t: a = (v − u) / t."},
 {j:"nombor",t:"Diberi v = 20, u = 8 dan t = 3 dalam v = u + at. Cari nilai a.",b:4,tol:0.01,u:"a = (v − u) / t = (20 − 8) / 3 = 12 / 3 = 4.",kira:()=>(20-8)/3},
 {j:"nombor",t:"Diberi P = 2(l + w). Jika P = 30 dan l = 9, cari nilai w.",b:6,tol:0.01,u:"P / 2 = l + w, jadi w = P / 2 − l = 15 − 9 = 6.",kira:()=>30/2-9},
 {j:"pilih",t:"Jadikan h perkara rumus bagi A = bh / 2.",p:["h = 2A / b","h = A / 2b","h = 2b / A","h = A − b / 2"],b:0,u:"Darab kedua-dua belah dengan 2: 2A = bh. Bahagi kedua-dua belah dengan b: h = 2A / b."},
 {j:"susun",t:"Susun langkah menjadikan C perkara rumus bagi F = 9C/5 + 32.",p:["Tolak 32 kedua-dua belah: F − 32 = 9C/5","Darab kedua-dua belah dengan 5: 5(F − 32) = 9C","Bahagi kedua-dua belah dengan 9: 5(F − 32) / 9 = C","Tulis jawapan: C = 5(F − 32) / 9"],b:[0,1,2,3],u:"Asingkan sebutan C dengan operasi songsang, satu langkah pada satu masa."}],
 bos:{j:"nombor",t:"Diberi F = 77. Guna C = 5(F − 32) / 9 untuk mencari C (°C).",b:25,tol:0.01,u:"C = 5(77 − 32) / 9 = 5(45) / 9 = 225 / 9 = 25.",kira:()=>5*(77-32)/9}},

{n:4, tempat:"Taman Trapezium", sk:"3.1.3 / 3.1.4 Menentukan nilai dan menyelesaikan masalah rutin mudah", lampiran:"trap",
 kadNama:"Trapezium", kadEm:"\u{1F33C}", kadFakta:"Trapezium ialah sisi empat yang mempunyai sepasang sisi selari. Tinggi trapezium diukur serenjang dengan sisi selari itu.",
 bosKadNama:"Purata Sisi Selari", bosKadEm:"\u{1F4CF}", bosKadFakta:"Luas trapezium sama dengan purata dua sisi selari darab tinggi, kerana (a + b) / 2 ialah purata bagi a dan b.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 4, b = 8 dan t = 5. Berapakah luas L (cm²)?",b:30,tol:0.01,u:"L = (4 + 8) × 5 / 2 = 12 × 5 / 2 = 30.",kira:()=>L(4,8,5)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 6, b = 10 dan t = 4. Berapakah luas L (cm²)?",b:32,tol:0.01,u:"L = (6 + 10) × 4 / 2 = 16 × 4 / 2 = 32.",kira:()=>L(6,10,4)},
 {j:"nombor",t:"Sebidang taman berbentuk trapezium mempunyai sisi selari 5 m dan 9 m dengan tinggi 6 m. Berapakah luasnya (m²)?",b:42,tol:0.01,u:"L = (5 + 9) × 6 / 2 = 14 × 6 / 2 = 42.",kira:()=>L(5,9,6)},
 {j:"nombor",t:"Luas sebuah trapezium ialah 36 cm². Sisi selarinya 5 cm dan 7 cm. Cari tinggi t (cm).",b:6,tol:0.01,u:"t = 2L / (a + b) = 72 / 12 = 6.",kira:()=>2*36/(5+7)},
 {j:"nombor",t:"Luas sebuah trapezium ialah 45 cm². Sisi selari pendeknya 6 cm dan tingginya 5 cm. Cari sisi selari panjang b (cm).",b:12,tol:0.01,u:"b = 2L / t − a = 90 / 5 − 6 = 18 − 6 = 12.",kira:()=>2*45/5-6},
 {j:"pilih",t:"Diberi L = (a + b) × t / 2. Jadikan t perkara rumus.",p:["t = 2L / (a + b)","t = L / 2(a + b)","t = 2L(a + b)","t = 2L − (a + b)"],b:0,u:"Darab kedua-dua belah dengan 2: 2L = (a + b) × t. Bahagi dengan (a + b): t = 2L / (a + b)."},
 {j:"pilih",t:"Dalam Rajah 1, jika a dan b bertambah tetapi t kekal sama, luas L akan:",p:["Bertambah","Berkurang","Kekal sama","Menjadi sifar"],b:0,u:"L = (a + b) × t / 2. Apabila a + b bertambah dan t tetap, luas bertambah."},
 {j:"nombor",t:"Upah menampal jubin ialah RM3 bagi setiap m². Berapakah kos menampal lantai trapezium dengan a = 5 m, b = 7 m dan t = 4 m (dalam RM)?",b:72,tol:0.01,u:"Luas = (5 + 7) × 4 / 2 = 24 m². Kos = 24 × 3 = RM72.",kira:()=>L(5,7,4)*3}],
 bos:{j:"nombor",t:"Sebuah plot trapezium mempunyai luas 60 m² dan tinggi 8 m. Sisi selari pendeknya 5 m. Cari sisi selari panjang b (m).",b:10,tol:0.01,u:"b = 2L / t − a = 120 / 8 − 5 = 15 − 5 = 10.",kira:()=>2*60/8-5}},

{n:5, tempat:"Trek Laju", sk:"3.1.4 Menyelesaikan masalah rutin yang kompleks yang melibatkan rumus", lampiran:"laju",
 kadNama:"Pecutan", kadEm:"\u{1F3CE}\u{FE0F}", kadFakta:"Pecutan ialah kadar perubahan laju. Kereta yang memecut 2 m/s² menambah 2 m/s kepada lajunya pada setiap saat.",
 bosKadNama:"Tukar Unit Laju", bosKadEm:"\u{23F1}\u{FE0F}", bosKadFakta:"Untuk menukar m/s kepada km/j, darabkan dengan 3.6. Jadi laju 20 m/s bersamaan 72 km/j.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan u = 4, a = 3 dan t = 5. Berapakah nilai v (m/s)?",b:19,tol:0.01,u:"v = u + at = 4 + 3 × 5 = 4 + 15 = 19.",kira:()=>V(4,3,5)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan u = 10, a = 5 dan t = 8. Berapakah nilai v (m/s)?",b:50,tol:0.01,u:"v = 10 + 5 × 8 = 10 + 40 = 50.",kira:()=>V(10,5,8)},
 {j:"nombor",t:"Sebuah kereta bergerak dengan u = 12 m/s dan a = 2 m/s² selama 6 s. Cari v (m/s).",b:24,tol:0.01,u:"v = 12 + 2 × 6 = 12 + 12 = 24.",kira:()=>V(12,2,6)},
 {j:"nombor",t:"Sebuah motosikal bermula dari keadaan rehat (u = 0) dan mencapai v = 30 m/s dalam 10 s. Cari pecutan a (m/s²).",b:3,tol:0.01,u:"a = (v − u) / t = (30 − 0) / 10 = 3.",kira:()=>(30-0)/10},
 {j:"nombor",t:"Sebuah bas dengan u = 6 m/s memecut 2 m/s² sehingga v = 22 m/s. Cari masa t (s).",b:8,tol:0.01,u:"t = (v − u) / a = (22 − 6) / 2 = 8.",kira:()=>(22-6)/2},
 {j:"pilih",t:"Jadikan t perkara rumus bagi v = u + at.",p:["t = (v − u) / a","t = (v − a) / u","t = v − u − a","t = a(v − u)"],b:0,u:"v − u = at. Bahagi kedua-dua belah dengan a: t = (v − u) / a."},
 {j:"nombor",t:"Diberi v = u + at dengan a = 2, t = 5 dan v = 3u. Cari nilai u.",b:5,tol:0.01,u:"3u = u + 2 × 5, jadi 2u = 10 dan u = 5.",kira:()=>10/2},
 {j:"nombor",t:"Sebuah roket bermula dengan u = 5 m/s dan memecut 4 m/s² selama 7 s. Berapakah pertambahan laju roket itu (m/s)?",b:28,tol:0.01,u:"Pertambahan laju ialah at = 4 × 7 = 28 m/s.",kira:()=>4*7}],
 bos:{j:"nombor",t:"Kereta A bermula dengan u = 10 m/s dan a = 2 m/s². Kereta B bermula dengan u = 4 m/s dan a = 5 m/s². Selepas berapa saat laju kedua-dua kereta itu sama?",b:2,tol:0.01,u:"10 + 2t = 4 + 5t. Maka 6 = 3t dan t = 2 s. Semak: laju A = 14 m/s dan laju B = 14 m/s.",kira:()=>(10-4)/(5-2)}},

{n:6, tempat:"Studio Reka Rumus", sk:"3.1.1 / 3.1.4 Membentuk rumus daripada situasi dan menyelesaikan masalah bukan rutin", lampiran:"situasi",
 kadNama:"Dua Punca", kadEm:"\u{2795}", kadFakta:"Nombor negatif didarab dengan nombor negatif memberi hasil positif. Jadi (−4)² dan 4² sama-sama bernilai 16.",
 bosKadNama:"Rumus Harian", bosKadEm:"\u{1F4A1}", bosKadFakta:"Banyak rumus dalam sains dan kewangan dibina daripada situasi harian, contohnya kos, laju, luas dan faedah.",
 soalan:[
 {j:"pilih",t:"Kuasa dua suatu nombor n ialah 16. Dalam Rajah 1, nilai n yang menjadikan luas petak sama dengan 16 ialah:",p:["4 dan −4","4 sahaja","8","16"],b:0,u:"4 × 4 = 16 dan (−4) × (−4) = 16, jadi n = 4 atau n = −4.",kira:()=>4*4===16&&(-4)*(-4)===16},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan n = 3. Berapakah nilai n × n?",b:9,tol:0.01,u:"3 × 3 = 9. Luas petak ialah 9, kurang daripada sasaran 16.",kira:()=>3*3},
 {j:"pilih",t:`Kuasa dua suatu nombor ditambah 3 ialah 19. Persamaan yang mewakili situasi ini ialah:`,p:[`${s("n",2)} + 3 = 19`,`(n + 3)<sup>2</sup> = 19`,`2n + 3 = 19`,`${s("n",2)} = 19 + 3`],b:0,u:"Kuasa dua suatu nombor ialah n², dan ditambah 3 memberi n² + 3. Ia sama dengan 19."},
 {j:"nombor",t:"Kuasa dua suatu nombor positif ditambah 3 ialah 19. Cari nombor itu.",b:4,tol:0.01,u:"n² + 3 = 19, jadi n² = 16 dan n = 4 kerana nombor itu positif.",kira:()=>Math.sqrt(19-3)},
 {j:"pilih",t:"Luas petak ialah A = s². Jika A = 49 dan s positif, nilai s ialah:",p:["7","24.5","98","49"],b:0,u:"7 × 7 = 49, jadi s = 7.",kira:()=>Math.sqrt(49)===7},
 {j:"nombor",t:"Sebuah kolam segi empat sama mempunyai luas 81 m². Berapakah panjang sisinya (m)?",b:9,tol:0.01,u:"A = s², jadi s = √81 = 9.",kira:()=>Math.sqrt(81)},
 {j:"pilih",t:"Jadikan s perkara rumus bagi A = s² (s positif).",p:["s = √A","s = A / 2","s = 2A",`s = ${s("A",2)}`],b:0,u:"Ambil punca kuasa dua kedua-dua belah: √A = s, jadi s = √A."},
 {j:"pilih",t:"Dalam Rajah 1, mengapakah n = −4 juga memenuhi n² = 16?",p:["Kerana (−4) × (−4) = 16","Kerana −4 lebih kecil daripada 4","Kerana 16 ialah nombor negatif","Kerana kuasa dua sentiasa negatif"],b:0,u:"Nombor negatif didarab dengan nombor negatif memberi hasil positif, jadi (−4)² = 16."}],
 bos:{j:"buka",
  t:"Reka satu situasi harian yang boleh diwakili oleh sebuah rumus, contohnya kos, jarak atau luas, dan gunakan rumus itu untuk menyelesaikan satu masalah.",
  arahan:"Nyatakan situasi, tetapkan pemboleh ubah, bentuk rumus, gantikan satu nilai, dan jadikan satu lagi pemboleh ubah sebagai perkara rumus. Semak jawapan awak.",
  u:"Jawapan TP6 yang kukuh membentuk rumus yang betul daripada situasi yang munasabah, menggantikan nilai dengan betul, menukar perkara rumus dengan langkah yang jelas, dan menyemak jawapan dalam konteks masalah."}}
];

module.exports = {
  id:"m2b3", tingkatan:2, kod:"3.0 Rumus Algebra",
  tajuk:"Kilang Rumus",
  subtajuk:"Matematik Ting. 2 · Bab 3 Rumus Algebra",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal pasti pemboleh ubah dan bahagian tetap dalam sesuatu rumus, serta membentuk rumus mudah daripada situasi harian. Langkah seterusnya ialah menggantikan nilai ke dalam rumus.",
   2:"{n} memahami maksud rumus dan boleh menggantikan nilai pemboleh ubah untuk mendapatkan nilai lain. Perlu lebih latihan menyusun langkah gantian sebelum bergerak ke TP3.",
   3:"{n} boleh menukar perkara rumus dengan operasi songsang, satu langkah pada satu masa, dan menyemak jawapan dengan menggantikan nilai. Galakkan menulis setiap langkah dengan jelas.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah menggunakan rumus, termasuk mencari luas dan mencari ukuran yang tidak diketahui. Seterusnya latih masalah yang melibatkan lebih daripada satu rumus.",
   5:"{n} dapat menyelesaikan masalah rutin yang kompleks, termasuk menukar perkara rumus sebelum menggantikan nilai dan membandingkan dua situasi. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya membentuk rumus daripada situasi yang direka sendiri dan menyelesaikan masalah dengan gantian dan penukaran perkara rumus. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Rumus Algebra. Cadangan: ulang hentian pertama dengan Rajah 1 sambil menyebut bahagian tetap dan bahagian berubah dalam rumus tambang."
  },
  lampiran:{ tambang:R_TAMBANG, suhu:R_SUHU, tukar:R_TUKAR, trap:R_TRAP, laju:R_LAJU, situasi:R_SITUASI },
  aras:ARAS
};
