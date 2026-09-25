/* Sumber kandungan — Matematik KSSM Tingkatan 1, Bab 4 Nisbah, Kadar dan Kadaran.
   Fail ini disunting tangan. Jalankan `node bina.js m1b4` untuk menyemaknya
   dan menghasilkan bank-m1b4.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 1, Bahagian Pembangunan Kurikulum, muka 48 (dskp/matematik-t1.pdf).
   DSKP Tingkatan 1 menulis enam tahap penguasaan bab ini pada satu jadual
   dan tahap 6 berbunyi "...konteks penyelesaian masalah bukan rutin." (tanpa
   "secara kreatif"); teks itu disalin seadanya.

   Semua jawapan berangka dikira dengan kod dalam medan `kira` dan dibandingkan
   oleh tools/semak-jawapan.js. Tanda < dan > ditulis sebagai entiti HTML. */
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a / gcd(a, b) * b;

const SPI = [
"Mempamerkan pengetahuan asas tentang nisbah, kadar dan kadaran.",
"Mempamerkan kefahaman tentang nisbah, kadar dan kadaran.",
"Mengaplikasikan kefahaman tentang nisbah, kadar dan kadaran untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang nisbah, kadar dan kadaran dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang nisbah, kadar dan kadaran dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang nisbah, kadar dan kadaran dalam konteks penyelesaian masalah bukan rutin."];

/* ---------- lampiran: rajah interaktif ---------- */

const R_NIS1 = { jenis:"interaktif", w:"t1nisbah", mod:"setara", a:[12, 18, 24], nama:["Tepung", "Gula", "Mentega"],
  faktor:[[1, 6], [1, 3], [1, 2], [1, 1], [2, 1], [3, 1]], i:3,
  kapsyen:"Rajah 1 · Resipi kek. Gerakkan gelongsor untuk membahagi atau mendarab ketiga-tiga kuantiti dengan nombor yang sama.",
  alt:"Rajah interaktif bar nisbah tepung, gula dan mentega 12 : 18 : 24; gelongsor membahagi atau mendarab untuk mendapat nisbah setara dan nisbah termudah" };

const R_NIS2 = { jenis:"interaktif", w:"t1nisbah", mod:"jumlah", a:[2, 3], nama:["Aina", "Bilal"], awalan:"RM",
  jumlah:[50, 100, 150, 200, 250], i:1,
  kapsyen:"Rajah 1 · Aina dan Bilal berkongsi wang dengan nisbah 2 : 3. Gerakkan gelongsor untuk menukar jumlah wang.",
  alt:"Rajah interaktif bar dua orang berkongsi wang mengikut nisbah 2 : 3; gelongsor menukar jumlah wang dan menunjukkan nilai satu bahagian" };

const R_KAD = { jenis:"interaktif", w:"t1kadar", v:[18, 36, 54, 72, 90, 108], tMaks:5, i:3, t:2,
  kapsyen:"Rajah 1 · Graf jarak melawan masa. Gerakkan gelongsor laju dan masa, dan lihat jarak serta laju dalam m/s.",
  alt:"Rajah interaktif graf jarak melawan masa bagi laju tetap; gelongsor menukar laju dan masa dan menunjukkan jarak serta laju dalam meter sesaat" };

const R_KDN = { jenis:"interaktif", w:"t1kadaran", a:2, b:5, awalan:"RM", unitA:"kg", cNilai:[1, 2, 3, 4, 5, 6, 8, 10], i:3, cabar:true,
  kapsyen:"Rajah 1 · 2 kg gula berharga RM5. Kira dahulu harga bagi kuantiti lain, kemudian semak dengan rajah.",
  alt:"Rajah interaktif kadaran 2 kg kepada RM5 dan c kg kepada x; gelongsor menukar kuantiti dan rajah menunjukkan kaedah unitari serta darab silang" };

const R_GAB = { jenis:"interaktif", w:"t1nisbah", mod:"gabung", p:[2, 3], q:[4, 5], i:0, cabar:true,
  kapsyen:"Rajah 1 · A : B = 2 : 3 dan B : C = 4 : 5. Kira dahulu A : B : C, kemudian semak dengan rajah.",
  alt:"Rajah interaktif menggabungkan nisbah A : B = 2 : 3 dan B : C = 4 : 5 kepada A : B : C dalam tiga langkah" };

const R_PER = { jenis:"interaktif", w:"t1peratus", Q:200, unit:"biji", pilihan:[5, 10, 20, 25, 40, 50, 60, 75, 80, 90], i:3,
  kapsyen:"Rajah 1 · Sebuah bakul ada 200 biji kuih. Gerakkan gelongsor untuk menukar peratus dan lihat pecahan, perpuluhan serta nisbah.",
  alt:"Rajah interaktif grid seratus petak; gelongsor menukar peratus dan menunjukkan pecahan, perpuluhan, nisbah dan peratus daripada 200 biji" };

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Dapur Kek", sk:"4.1.1 – 4.1.3 Nisbah, nisbah setara dan bentuk termudah", lampiran:"nis1",
 kadNama:"Nisbah", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Nisbah membandingkan kuantiti yang sama jenis. Nisbah 2 : 3 bermaksud untuk setiap 2 bahagian pertama, ada 3 bahagian kedua.",
 bosKadNama:"Bentuk Termudah", bosKadEm:"\u{1F4A1}", bosKadFakta:"Nisbah termudah diperoleh dengan membahagi semua sebutan dengan faktor sepunya terbesar mereka.",
 soalan:[
 {j:"pilih",t:"Resipi kek menggunakan 2 cawan tepung dan 3 cawan gula. Nisbah tepung kepada gula ialah:",p:["2 : 3","3 : 2","2 : 5","5 : 3"],b:0,u:"Tepung dahulu, gula kemudian. Nisbah tepung kepada gula ialah 2 : 3.",kira:()=>true},
 {j:"pilih",t:"Dalam Rajah 1 (tetapan asal), apakah nisbah tepung : gula : mentega?",p:["12 : 18 : 24","24 : 18 : 12","12 : 24 : 18","18 : 12 : 24"],b:0,u:"Bar pertama ialah tepung (12), kemudian gula (18) dan mentega (24), mengikut urutan nama dalam rajah.",kira:()=>true},
 {j:"nombor",t:"Dalam Rajah 1, gerakkan gelongsor kepada ÷ 3. Berapakah nilai gula sekarang?",b:6,tol:0.01,u:"Bahagi 18 dengan 3 untuk mendapat 6. Nisbah baharu ialah 4 : 6 : 8.",kira:()=>18/3},
 {j:"pilih",t:"Nisbah 12 : 18 : 24 dalam bentuk termudah ialah:",p:["2 : 3 : 4","3 : 4 : 6","1 : 2 : 3","4 : 6 : 8"],b:0,u:"Faktor sepunya terbesar bagi 12, 18 dan 24 ialah 6. Bahagi setiap sebutan dengan 6 untuk mendapat 2 : 3 : 4.",kira:()=>gcd(gcd(12,18),24)===6},
 {j:"nombor",t:"Ali ada 15 kad dan Siti ada 25 kad. Nisbah termudah kad Ali kepada kad Siti ialah 3 : x. Berapakah nilai x?",b:5,tol:0.01,u:"Faktor sepunya terbesar bagi 15 dan 25 ialah 5. Maka 15 : 25 = 3 : 5.",kira:()=>25/gcd(15,25)},
 {j:"pilih",t:"Manakah nisbah yang setara dengan 2 : 3?",p:["8 : 12","8 : 10","6 : 8","4 : 5"],b:0,u:"Darabkan 2 dan 3 dengan 4 untuk mendapat 8 : 12. Nisbah setara mempunyai nilai perbandingan yang sama.",kira:()=>8*3===12*2},
 {j:"banyak",t:"Pilih SEMUA nisbah yang setara dengan 3 : 4.",p:["6 : 8","9 : 12","12 : 16","4 : 3","5 : 6","9 : 16"],b:[0,1,2],u:"Darab 3 dan 4 dengan 2, 3 dan 4 memberi 6 : 8, 9 : 12 dan 12 : 16. Nisbah 4 : 3 songsang, dan 5 : 6 serta 9 : 16 bukan gandaan 3 : 4."},
 {j:"susun",t:"Susun langkah menukar nisbah 12 : 18 kepada bentuk termudah.",p:["Cari faktor sepunya terbesar bagi 12 dan 18, iaitu 6","Bahagi 12 dengan 6 untuk mendapat 2","Bahagi 18 dengan 6 untuk mendapat 3","Tulis nisbah termudah 2 : 3"],b:[0,1,2,3],u:"Cari faktor sepunya terbesar, bahagi kedua-dua sebutan, kemudian tulis nisbah termudah."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang nisbah.",p:["Nisbah 2 : 3 setara dengan 4 : 6","Darab kedua-dua sebutan dengan nombor sama menghasilkan nisbah setara","Nisbah 6 : 9 dalam bentuk termudah ialah 2 : 3","Nisbah 3 : 2 sama dengan nisbah 2 : 3","Nisbah hanya boleh membandingkan dua kuantiti","Nisbah termudah bagi 5 : 10 ialah 5 : 10"],b:[0,1,2],u:"Nisbah 3 : 2 berbeza daripada 2 : 3 kerana urutan penting. Nisbah boleh membandingkan tiga kuantiti atau lebih. Bagi 5 : 10, bahagi dengan 5 untuk mendapat 1 : 2."}},

{n:2, tempat:"Kongsi Adil", sk:"4.4.2 Nilai berkaitan apabila nisbah dan satu nilai diberi", lampiran:"nis2",
 kadNama:"Satu Bahagian", kadEm:"\u{1F370}", kadFakta:"Apabila berkongsi mengikut nisbah, cari jumlah bahagian dahulu, kemudian cari nilai bagi satu bahagian.",
 bosKadNama:"Semak Jumlah", bosKadEm:"\u{2705}", bosKadFakta:"Selepas membahagi, tambah semua bahagian. Jumlahnya mesti sama dengan jumlah asal.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, jumlah wang ialah RM100. Berapakah nilai 1 bahagian (RM)?",b:20,tol:0.01,suf:"RM",u:"Jumlah bahagian ialah 2 + 3 = 5. Satu bahagian ialah RM100 ÷ 5 = RM20.",kira:()=>100/(2+3)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan jumlah wang kepada RM250. Berapakah bahagian Bilal (RM)?",b:150,tol:0.01,suf:"RM",u:"Satu bahagian ialah RM250 ÷ 5 = RM50. Bilal mendapat 3 bahagian, iaitu RM150.",kira:()=>3*250/5},
 {j:"pilih",t:"Jumlah bahagian bagi nisbah 2 : 3 ialah:",p:["5","10","12","15"],b:0,u:"Jumlah bahagian ialah 2 + 3 = 5.",kira:()=>2+3===5},
 {j:"nombor",t:"Dua adik-beradik berkongsi 60 biji gula-gula mengikut nisbah 1 : 2. Berapakah bilangan gula-gula bagi adik yang mendapat lebih banyak?",b:40,tol:0.01,u:"Jumlah bahagian ialah 3. Satu bahagian ialah 60 ÷ 3 = 20. Adik itu mendapat 2 × 20 = 40 biji.",kira:()=>2*60/(1+2)},
 {j:"pilih",t:"Wang Aina dan Bilal dalam nisbah 2 : 3. Berapakah pecahan daripada jumlah wang yang dimiliki Bilal?",p:["3/5","2/5","3/2","2/3"],b:0,u:"Jumlah bahagian ialah 5. Bilal mempunyai 3 daripada 5 bahagian, iaitu 3/5.",kira:()=>true},
 {j:"nombor",t:"Ali, Ben dan Cindy berkongsi RM120 mengikut nisbah 1 : 2 : 3. Berapakah bahagian Cindy (RM)?",b:60,tol:0.01,suf:"RM",u:"Jumlah bahagian ialah 6. Satu bahagian ialah RM120 ÷ 6 = RM20. Cindy mendapat 3 × 20 = RM60.",kira:()=>3*120/(1+2+3)},
 {j:"nombor",t:"Nisbah murid lelaki kepada murid perempuan ialah 3 : 4. Jika ada 21 murid lelaki, berapakah bilangan murid perempuan?",b:28,tol:0.01,u:"3 bahagian bersamaan 21 murid, jadi 1 bahagian ialah 7. Murid perempuan ialah 4 × 7 = 28.",kira:()=>4*21/3},
 {j:"susun",t:"Susun langkah membahagikan RM100 mengikut nisbah 2 : 3.",p:["Jumlahkan bahagian: 2 + 3 = 5","Nilai 1 bahagian: RM100 ÷ 5 = RM20","Bahagian pertama: 2 × RM20 = RM40","Bahagian kedua: 3 × RM20 = RM60"],b:[0,1,2,3],u:"Cari jumlah bahagian, nilai satu bahagian, kemudian darab dengan setiap sebutan nisbah."}],
 bos:{j:"nombor",t:"Tiga sahabat berkongsi upah RM360 mengikut nisbah 2 : 3 : 4. Berapakah beza antara bahagian terbesar dengan bahagian terkecil (RM)?",b:80,tol:0.01,suf:"RM",u:"Jumlah bahagian ialah 9. Satu bahagian ialah RM360 ÷ 9 = RM40. Beza ialah (4 − 2) × 40 = RM80.",kira:()=>(4-2)*360/(2+3+4)}},

{n:3, tempat:"Lebuh Raya", sk:"4.2.1 Kadar dan pertukaran unit", lampiran:"kad",
 kadNama:"Kadar", kadEm:"\u{1F697}", kadFakta:"Kadar ialah nisbah dua kuantiti yang berbeza unit, seperti kilometer sejam atau ringgit sekilogram.",
 bosKadNama:"Tukar Unit", bosKadEm:"\u{1F504}", bosKadFakta:"Untuk menukar km/j kepada m/s, bahagi dengan 3.6. Ini kerana 1 km ialah 1 000 m dan 1 jam ialah 3 600 saat.",
 soalan:[
 {j:"pilih",t:"Antara berikut, yang manakah ialah kadar?",p:["Kereta bergerak 120 km dalam 2 jam","Nisbah gula kepada tepung ialah 2 : 3","Bilangan lelaki dan perempuan ialah 1 : 2","Nisbah kuning kepada biru ialah 5 : 4"],b:0,u:"Kadar membandingkan dua kuantiti yang berbeza unit. Kilometer dan jam ialah dua unit berbeza.",kira:()=>true},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan laju 72 km/j dan masa 3 jam. Berapakah jarak (km)?",b:216,tol:0.01,suf:"km",u:"Jarak = laju × masa = 72 × 3 = 216 km.",kira:()=>72*3},
 {j:"nombor",t:"Sebuah bas bergerak sejauh 240 km dalam 3 jam. Berapakah lajunya (km/j)?",b:80,tol:0.01,suf:"km/j",u:"Laju = jarak ÷ masa = 240 ÷ 3 = 80 km/j.",kira:()=>240/3},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan laju 54 km/j. Berapakah laju itu dalam m/s?",b:15,tol:0.01,suf:"m/s",u:"54 km/j = 54 000 m ÷ 3 600 s = 15 m/s.",kira:()=>54*1000/3600},
 {j:"nombor",t:"Sebuah kereta bergerak pada laju 60 km/j. Berapa lamakah (jam) kereta itu menempuh 150 km?",b:2.5,tol:0.01,suf:"jam",u:"Masa = jarak ÷ laju = 150 ÷ 60 = 2.5 jam.",kira:()=>150/60},
 {j:"pilih",t:"Laju 90 km/j bersamaan dengan:",p:["25 m/s","32.4 m/s","900 m/s","1.5 km/s"],b:0,u:"90 km/j = 90 000 m ÷ 3 600 s = 25 m/s.",kira:()=>90*1000/3600===25},
 {j:"pilih",t:"Harga 3 kg beras ialah RM12. Kadar harga beras ialah:",p:["RM4 sekilogram","RM36 sekilogram","RM15 sekilogram","RM9 sekilogram"],b:0,u:"Kadar = RM12 ÷ 3 kg = RM4 sekilogram.",kira:()=>12/3===4},
 {j:"banyak",t:"Pilih SEMUA yang merupakan kadar.",p:["80 km/j","RM5 sekilogram","30 muka surat seminit","2 : 3","3 : 5","4 : 7"],b:[0,1,2],u:"Kadar membandingkan dua unit yang berbeza, iaitu km dengan jam, RM dengan kg, muka surat dengan minit. Nisbah 2 : 3, 3 : 5 dan 4 : 7 membandingkan kuantiti yang sama jenis."}],
 bos:{j:"nombor",t:"Seorang pelari berlari 100 m dalam 20 saat. Berapakah lajunya dalam km/j?",b:18,tol:0.01,suf:"km/j",u:"Laju = 100 ÷ 20 = 5 m/s. Darab dengan 3.6 untuk mendapat 18 km/j.",kira:()=>100/20*3.6}},

{n:4, tempat:"Kedai Runcit", sk:"4.3.1 / 4.3.2 / 4.4.3 Kadaran dan nilai berkaitan dengan kadar", lampiran:"kdn",
 kadNama:"Darab Silang", kadEm:"\u{2716}\u{FE0F}", kadFakta:"Dalam kadaran a : b = c : d, hasil darab a × d sama dengan hasil darab b × c.",
 bosKadNama:"Kaedah Unitari", bosKadEm:"\u{1F6D2}", bosKadFakta:"Cari nilai bagi satu unit dahulu, kemudian darab. Kaedah ini sesuai untuk harga, resipi dan kadar.",
 soalan:[
 {j:"pilih",t:"Kadaran ialah persamaan dua nisbah yang setara. Yang manakah kadaran yang benar?",p:["2 : 5 = 4 : 10","2 : 5 = 4 : 8","2 : 5 = 3 : 6","2 : 5 = 5 : 2"],b:0,u:"Darab silang bagi 2 : 5 = 4 : 10 memberi 2 × 10 = 5 × 4 = 20. Kadaran yang lain tidak seimbang.",kira:()=>2*10===5*4},
 {j:"nombor",t:"Dalam Rajah 1, 2 kg gula berharga RM5. Berapakah harga 6 kg gula (RM)?",b:15,tol:0.01,suf:"RM",u:"Harga 1 kg ialah RM5 ÷ 2 = RM2.50. Harga 6 kg ialah 6 × 2.50 = RM15.",kira:()=>6*5/2},
 {j:"nombor",t:"Harga 5 batang pen ialah RM12.50. Berapakah harga sebatang pen (RM)?",b:2.5,tol:0.01,suf:"RM",u:"Kaedah unitari: RM12.50 ÷ 5 = RM2.50.",kira:()=>12.5/5},
 {j:"nombor",t:"Jika 3 buah buku berharga RM18, berapakah harga 7 buah buku (RM)?",b:42,tol:0.01,suf:"RM",u:"Harga sebuah buku ialah RM18 ÷ 3 = RM6. Harga 7 buah ialah 7 × 6 = RM42.",kira:()=>7*18/3},
 {j:"nombor",t:"Sebuah kereta menggunakan 8 liter petrol untuk menempuh 96 km. Berapa liter petrol diperlukan untuk menempuh 150 km?",b:12.5,tol:0.01,suf:"liter",u:"Petrol untuk 1 km ialah 8 ÷ 96 liter. Untuk 150 km: 150 × 8 ÷ 96 = 12.5 liter.",kira:()=>150*8/96},
 {j:"nombor",t:"Cari nilai x bagi kadaran 3 : 8 = 12 : x.",b:32,tol:0.01,u:"Darab silang: 3 × x = 8 × 12 = 96. Maka x = 96 ÷ 3 = 32.",kira:()=>8*12/3},
 {j:"pilih",t:"Apakah maksud kaedah unitari dalam menyelesaikan masalah kadaran?",p:["Cari nilai bagi satu unit dahulu, kemudian darab","Darab silang tanpa mencari nilai satu unit","Tambah kedua-dua kuantiti yang diberi","Tolak nilai yang diketahui daripada jumlah"],b:0,u:"Kaedah unitari mencari nilai satu unit terlebih dahulu, kemudian mendarabkannya dengan kuantiti yang diminta."},
 {j:"susun",t:"Susun langkah mencari x dalam kadaran 4 : 10 = 6 : x menggunakan darab silang.",p:["Tulis kadaran 4 : 10 = 6 : x","Darab silang: 4 × x = 10 × 6","Ringkaskan: 4x = 60","Bahagi: x = 60 ÷ 4 = 15"],b:[0,1,2,3],u:"Tulis kadaran, darab silang, ringkaskan, kemudian bahagi dengan pekali x."}],
 bos:{j:"nombor",t:"Tiga keping roti canai berharga RM4.50. Berapa keping roti canai boleh dibeli dengan RM12?",b:8,tol:0.01,u:"Harga sekeping ialah RM4.50 ÷ 3 = RM1.50. Bilangan keping ialah RM12 ÷ RM1.50 = 8.",kira:()=>12/(4.5/3)}},

{n:5, tempat:"Kilang Jus", sk:"4.4.1 / 4.4.2 / 4.4.4 Nisbah tiga kuantiti daripada dua nisbah", lampiran:"gab",
 kadNama:"Sebutan Sepunya", kadEm:"\u{1F517}", kadFakta:"Untuk menggabungkan dua nisbah, samakan sebutan yang dikongsi dengan gandaan sepunya terkecil.",
 bosKadNama:"Nisbah Tiga", bosKadEm:"\u{1F9C3}", bosKadFakta:"Nisbah a : b : c membandingkan tiga kuantiti serentak. Setiap dua kuantiti daripadanya masih membentuk nisbah.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, A : B = 2 : 3 dan B : C = 4 : 5. Nilai B disamakan kepada:",p:["12","6","10","15"],b:0,u:"Gandaan sepunya terkecil bagi 3 dan 4 ialah 12, jadi B disamakan kepada 12.",kira:()=>lcm(3,4)===12},
 {j:"nombor",t:"Dalam Rajah 1, berapakah nilai A selepas B disamakan?",b:8,tol:0.01,u:"A : B = 2 : 3 didarab dengan 4 menjadi 8 : 12. Maka A ialah 8.",kira:()=>2*(lcm(3,4)/3)},
 {j:"pilih",t:"Nisbah A : B : C dalam Rajah 1 ialah:",p:["8 : 12 : 15","2 : 3 : 5","8 : 12 : 20","6 : 12 : 15"],b:0,u:"A : B = 8 : 12 dan B : C = 12 : 15. Maka A : B : C = 8 : 12 : 15.",kira:()=>true},
 {j:"nombor",t:"Diberi P : Q = 3 : 4 dan Q : R = 2 : 5. Jika P : Q : R = 3 : 4 : r, berapakah nilai r?",b:10,tol:0.01,u:"Samakan Q kepada 4. Q : R = 2 : 5 didarab 2 menjadi 4 : 10. Maka P : Q : R = 3 : 4 : 10.",kira:()=>5*(lcm(4,2)/2)},
 {j:"nombor",t:"Diberi a : b = 3 : 5 dan b : c = 10 : 7. Jika a = 6, berapakah nilai c?",b:7,tol:0.01,u:"Samakan b kepada 10. a : b = 6 : 10. Maka a : b : c = 6 : 10 : 7 dan c = 7.",kira:()=>7*(6/3)/(10/5)},
 {j:"nombor",t:"Jus oren, epal dan mangga dicampur mengikut nisbah 3 : 2 : 1. Jika 4.5 liter jus oren digunakan, berapa liter jus mangga diperlukan?",b:1.5,tol:0.01,suf:"liter",u:"3 bahagian ialah 4.5 liter, jadi 1 bahagian ialah 1.5 liter. Jus mangga ialah 1 bahagian, iaitu 1.5 liter.",kira:()=>4.5/3},
 {j:"nombor",t:"Ali : Ben = 3 : 4 dan Ben : Cindy = 2 : 3. Jumlah wang mereka ialah RM195. Berapakah wang Cindy (RM)?",b:90,tol:0.01,suf:"RM",u:"Samakan Ben kepada 4. Ben : Cindy = 4 : 6. Maka nisbah ialah 3 : 4 : 6 dengan 13 bahagian. Satu bahagian ialah RM15 dan Cindy ada 6 × 15 = RM90.",kira:()=>6*195/(3+4+6)},
 {j:"susun",t:"Susun langkah menggabungkan A : B = 2 : 3 dan B : C = 4 : 5 menjadi A : B : C.",p:["Tulis A : B = 2 : 3 dan B : C = 4 : 5","Cari gandaan sepunya terkecil bagi 3 dan 4, iaitu 12","Darab A : B dengan 4 dan B : C dengan 3","Tulis A : B : C = 8 : 12 : 15"],b:[0,1,2,3],u:"Samakan sebutan B dengan gandaan sepunya terkecil, kemudian gabungkan tiga sebutan."}],
 bos:{j:"nombor",t:"Sebuah kilang menghasilkan botol kecil, sederhana dan besar. Nisbah kecil : sederhana ialah 3 : 2 dan sederhana : besar ialah 4 : 3. Jumlah botol ialah 780. Berapakah bilangan botol sederhana?",b:240,tol:0.01,u:"Samakan sederhana kepada 4. Kecil : sederhana = 6 : 4. Maka kecil : sederhana : besar = 6 : 4 : 3 dengan 13 bahagian. Satu bahagian ialah 60 botol dan sederhana ialah 4 × 60 = 240.",kira:()=>4*780/(6+4+3)}},

{n:6, tempat:"Pasar Malam", sk:"4.4.4 / 4.5.1 – 4.5.3 Peratusan, anggaran dan masalah bukan rutin", lampiran:"per",
 kadNama:"Peratus", kadEm:"\u{1F4AF}", kadFakta:"Peratus bermaksud 'per seratus'. 25% bermaksud 25 daripada 100, iaitu pecahan 1/4 dan perpuluhan 0.25.",
 bosKadNama:"Anggaran", bosKadEm:"\u{1F3AF}", bosKadFakta:"Untuk membuat anggaran, bundarkan nombor kepada nilai yang mudah seperti 100 atau 200 sebelum mengira.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, tetapkan 25%. Pecahan termudah yang sama nilai ialah:",p:["1/4","2/5","25/50","25/75"],b:0,u:"25% = 25/100. Bahagi dengan 25 untuk mendapat 1/4.",kira:()=>25/100===1/4},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan 75%. Berapakah nilai perpuluhan bagi 75%?",b:0.75,tol:0.001,u:"75% = 75/100 = 0.75.",kira:()=>75/100},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan 40%. Berapa biji kuih ialah 40% daripada 200 biji?",b:80,tol:0.01,suf:"biji",u:"40% × 200 = 40/100 × 200 = 80 biji.",kira:()=>40/100*200},
 {j:"pilih",t:"Sebuah kotak mengandungi 3 biji epal daripada 5 biji buah. Peratusan epal ialah:",p:["60%","35%","53%","30%"],b:0,u:"3/5 = 60/100 = 60%.",kira:()=>3/5*100===60},
 {j:"nombor",t:"Harga asal sehelai baju ialah RM80. Kedai memberi diskaun 15%. Berapakah harga selepas diskaun (RM)?",b:68,tol:0.01,suf:"RM",u:"Diskaun = 15% × 80 = RM12. Harga selepas diskaun ialah 80 − 12 = RM68.",kira:()=>80-15/100*80},
 {j:"nombor",t:"Nisbah murid lelaki kepada murid perempuan ialah 3 : 2. Berapa peratuskah murid lelaki?",b:60,tol:0.01,suf:"%",u:"Jumlah bahagian ialah 5. Murid lelaki ialah 3/5 = 60%.",kira:()=>3/(3+2)*100},
 {j:"pilih",t:"Anggarkan 48% daripada RM199 dengan nombor mudah. Anggaran terbaik ialah:",p:["RM100","RM50","RM150","RM200"],b:0,u:"48% hampir 50% dan RM199 hampir RM200. Separuh daripada RM200 ialah RM100.",kira:()=>Math.round(0.5*200)===100},
 {j:"banyak",t:"Pilih SEMUA yang bersamaan dengan 30%.",p:["3/10","0.3","30/100","0.03","3/100","1/3"],b:[0,1,2],u:"30% = 30/100 = 3/10 = 0.3. Nilai 0.03 dan 3/100 ialah 3%, dan 1/3 ialah kira-kira 33%."}],
 bos:{j:"buka",
  t:"Kedai A memberi diskaun 20% bagi barang berharga RM150. Kedai B memberi diskaun RM35 bagi barang yang sama. Kedai manakah lebih murah?",
  arahan:"Tunjukkan pengiraan harga selepas diskaun bagi kedua-dua kedai, bandingkan, dan terangkan pilihan awak. Kemudian nyatakan anggaran mudah yang boleh awak buat tanpa kalkulator untuk menyemak jawapan.",
  u:"Jawapan TP6 yang kukuh mengira diskaun A ialah 20% × 150 = RM30 (harga RM120) dan harga B ialah RM115. Kedai B lebih murah RM5. Anggaran: 20% ialah satu perlima, iaitu 150 ÷ 5 = 30, dan 35 lebih besar daripada 30."}}
];

module.exports = {
  id:"m1b4", tingkatan:1, kod:"4.0 Nisbah, Kadar dan Kadaran",
  tajuk:"Pasar Nisbah",
  subtajuk:"Matematik Ting. 1 · Bab 4 Nisbah, Kadar dan Kadaran",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat menyatakan nisbah dua dan tiga kuantiti, mengenal nisbah setara dan menulis nisbah dalam bentuk termudah. Langkah seterusnya ialah memahami bagaimana nisbah digunakan untuk berkongsi jumlah.",
   2:"{n} memahami nisbah dan boleh mencari nilai satu bahagian serta bahagian setiap orang apabila jumlah diberi. Perlu lebih latihan sebelum bergerak ke pengiraan kadar dan kadaran.",
   3:"{n} boleh menentukan kadar seperti laju dan harga seunit, serta menukar unit km/j kepada m/s dengan bimbingan. Galakkan menyemak unit pada setiap jawapan.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah menggunakan kadaran, kaedah unitari dan darab silang. Seterusnya latih masalah yang melibatkan tiga kuantiti.",
   5:"{n} dapat menyelesaikan masalah kompleks yang menggabungkan dua nisbah menjadi nisbah tiga kuantiti dan mencari nilai berkaitan. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya menyelesaikan masalah bukan rutin yang melibatkan peratusan, kadaran dan anggaran, serta menjelaskan pilihan dengan pengiraan yang betul. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Nisbah, Kadar dan Kadaran. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyatakan nisbah setara dan nisbah termudah dengan bimbingan rakan sebaya."
  },
  lampiran:{ nis1:R_NIS1, nis2:R_NIS2, kad:R_KAD, kdn:R_KDN, gab:R_GAB, per:R_PER },
  aras:ARAS
};
