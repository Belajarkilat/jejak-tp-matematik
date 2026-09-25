/* Sumber kandungan — Matematik KSSM Tingkatan 3, Bab 1 Indeks.
   Fail ini disunting tangan. Jalankan `node bina.js m3b1` untuk menyemaknya
   dan menghasilkan bank-m3b1.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 3, Bahagian Pembangunan Kurikulum, muka 34 (dskp/matematik-t3.pdf).

   Tulis jawapan betul pada indeks 0. Pembina akan mengagihkannya.
   Medan `kira` (fungsi) ialah semakan bebas untuk audit: ia tidak dimasukkan
   ke dalam bank, dan tools/semak-jawapan.js membandingkannya dengan `b`. */
const { s, kuasa } = require("./_k");

const SPI = [
"Mempamerkan pengetahuan asas tentang bentuk indeks.",
"Mempamerkan kefahaman tentang bentuk indeks.",
"Mengaplikasikan kefahaman tentang hukum indeks untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang hukum indeks dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang hukum indeks dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang hukum indeks dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran: rajah interaktif ---------- */

const R_KUASA = {
  jenis:"interaktif", w:"kuasa", asas:2, n:5, nMin:1, nMaks:6,
  kapsyen:"Rajah 1 · Gerakkan gelongsor n. Setiap kuasa 2 dilukis sebagai blok.",
  alt:"Rajah interaktif blok bagi 2 kuasa n; gelongsor n menukar bilangan blok"
};

const R_DARAB = {
  jenis:"interaktif", w:"hukum", mod:"darab", asas:"a", m:3, n:2,
  kapsyen:"Rajah 1 · Tukar m dan n. Setiap petak ialah satu faktor a.",
  alt:"Rajah interaktif jubin faktor a bagi hukum darab indeks; gelongsor m dan n"
};

const R_BAHAGI = {
  jenis:"interaktif", w:"hukum", mod:"bahagi", asas:"a", m:4, n:2,
  kapsyen:"Rajah 1 · Tukar m dan n. Petak yang bertindih dan dibatalkan ditanda garis.",
  alt:"Rajah interaktif jubin faktor a bagi hukum bahagi indeks; gelongsor m dan n"
};

const R_LIPAT = {
  jenis:"interaktif", cabar:true, w:"lipat", tebal:0.1, n:0, nMaks:8,
  kapsyen:"Rajah 1 · Lipat atau buka kertas setebal 0.1 mm setiap lapisan.",
  alt:"Rajah interaktif kertas dilipat dua; butang lipat menambah bilangan lapisan dan tebal"
};

const R_BERKUASA = {
  jenis:"interaktif", cabar:true, w:"hukum", mod:"kuasa", asas:"a", m:2, n:3,
  kapsyen:"Rajah 1 · Tukar m dan n. n kumpulan, setiap satu ada m faktor a.",
  alt:"Rajah interaktif jubin faktor a bagi indeks berkuasa; gelongsor m dan n"
};

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Blok Asas", sk:"1.1 Tatatanda indeks", lampiran:"kuasa",
 kadNama:"Kuasa Dua", kadEm:"\u{1F7E6}", kadFakta:"Perkataan 'kuasa dua' datang daripada luas petak: nombor didarab dengan dirinya sendiri menghasilkan luas sebuah petak.",
 bosKadNama:"Menara Blok", bosKadEm:"\u{1F9F1}", bosKadFakta:"Kubus 3 unit sisi mengandungi 3 kuasa tiga, iaitu 27 kiub kecil. Itulah sebabnya 'kuasa tiga' juga dipanggil kiub.",
 soalan:[
 {j:"pilih",t:`Dalam ${s(5,3)}, nombor 5 dipanggil:`,p:["Asas","Indeks","Hasil darab","Pemalar"],b:0,u:"Nombor yang didarab berulang ialah asas, dan nombor kecil di atas ialah indeks."},
 {j:"pilih",t:`Dalam ${s(5,3)}, nombor 3 dipanggil:`,p:["Indeks","Asas","Punca kuasa","Faktor perdana"],b:0,u:"Indeks (juga dipanggil eksponen atau kuasa) memberitahu berapa kali asas didarab."},
 {j:"nombor",t:"Gerakkan gelongsor n pada Rajah 1 sehingga n = 4. Berapakah bilangan blok yang dipaparkan?",b:kuasa(2,4),tol:0.5,u:"n = 4 bermakna 2 × 2 × 2 × 2 = 16 blok.",kira:()=>kuasa(2,4)},
 {j:"pilih",t:"Pendaraban berulang 2 × 2 × 2 × 2 boleh ditulis sebagai:",p:[s(2,4),s(4,2),"2 × 4",s(2,3)],b:0,u:`Ada empat faktor 2, jadi ditulis ${s(2,4)}.`},
 {j:"pilih",t:`Nilai ${s(3,4)} ialah:`,p:[String(kuasa(3,4)),String(3*4),String(kuasa(4,3)),String(3+4)],b:0,u:`${s(3,4)} = 3 × 3 × 3 × 3 = ${kuasa(3,4)}, bukan 3 × 4.`,kira:()=>kuasa(3,4)},
 {j:"pilih",t:"Nombor 1 000 dalam bentuk indeks dengan asas 10 ialah:",p:[s(10,3),s(10,4),s(100,3),s(3,10)],b:0,u:`1 000 = 10 × 10 × 10, iaitu ada tiga faktor 10.`},
 {j:"pilih",t:`Manakah yang BUKAN bersamaan dengan ${s(2,5)}?`,p:["2 × 5","2 × 2 × 2 × 2 × 2","32","16 × 2"],b:0,u:`${s(2,5)} = 32. Nilai 2 × 5 ialah 10, iaitu pendaraban biasa, bukan pendaraban berulang.`},
 {j:"susun",t:`Susun mengikut nilai daripada yang terkecil kepada yang terbesar: ${s(2,3)}, ${s(3,2)}, ${s(2,4)}, ${s(5,1)}.`,p:[s(5,1),s(2,3),s(3,2),s(2,4)],b:[0,1,2,3],u:`Nilainya ${kuasa(5,1)}, ${kuasa(2,3)}, ${kuasa(3,2)} dan ${kuasa(2,4)}.`}],
 bos:{j:"banyak",t:`Pilih SEMUA yang bersamaan dengan ${s(2,4)}.`,p:["16","2 × 2 × 2 × 2",s(4,2),"2 × 4","4 × 2"],b:[0,1,2],u:`${s(2,4)} = 16 dan ${s(4,2)} = 16. Nilai 2 × 4 dan 4 × 2 ialah 8.`}},

{n:2, tempat:"Pintu Hukum", sk:"1.2.1 / 1.2.2 Hukum darab dan bahagi indeks", lampiran:"darab",
 kadNama:"Tambah Indeks", kadEm:"\u{2795}", kadFakta:"Bila asas sama didarab, indeks ditambah. Ini kerana setiap petak faktor hanya disambung ke barisan yang sama.",
 bosKadNama:"Batalkan Faktor", bosKadEm:"\u{2702}\u{FE0F}", bosKadFakta:"Dalam pembahagian, faktor yang sama di atas dan di bawah dibatalkan satu-satu, jadi indeks ditolak.",
 soalan:[
 {j:"pilih",t:`Ringkaskan ${s(2,3)} × ${s(2,4)}.`,p:[s(2,7),s(2,12),s(4,7),s(2,34)],b:0,u:`Asas sama, jadi tambah indeks: 3 + 4 = 7.`},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan m = 5 dan n = 3. Berapakah indeks bagi hasil darab a"+"<sup>m</sup> × a<sup>n</sup>?",b:5+3,tol:0.5,u:"Bilangan faktor a bertambah: 5 + 3 = 8.",kira:()=>5+3},
 {j:"pilih",t:`Ringkaskan ${s("a",7)} ÷ ${s("a",3)}.`,p:[s("a",4),s("a",10),s("a",21),s("a","2.3")],b:0,u:`Asas sama, jadi tolak indeks: 7 − 3 = 4.`},
 {j:"pilih",t:"Hukum indeks yang betul bagi pendaraban asas yang sama ialah:",p:[`${s("a","m")} × ${s("a","n")} = ${s("a","m + n")}`,`${s("a","m")} × ${s("a","n")} = ${s("a","m × n")}`,`${s("a","m")} × ${s("a","n")} = ${s("(2a)","m + n")}`,`${s("a","m")} × ${s("a","n")} = ${s("a","m − n")}`],b:0,u:"Apabila asas sama didarab, indeksnya ditambah."},
 {j:"nombor",t:`Cari nilai x jika ${s(3,"x")} × ${s(3,4)} = ${s(3,9)}.`,b:9-4,tol:0.5,u:"x + 4 = 9, jadi x = 5.",kira:()=>9-4},
 {j:"pilih",t:`Hukum indeks tidak boleh digunakan terus pada ${s(2,3)} × ${s(5,3)} kerana:`,p:["Asasnya berbeza","Indeksnya sama","Nilainya terlalu besar","Asasnya ialah nombor perdana"],b:0,u:"Hukum darab hanya untuk asas yang sama. 2 dan 5 asas yang berbeza."},
 {j:"pilih",t:`Ringkaskan ${s(5,8)} ÷ ${s(5,5)} × ${s(5,2)}.`,p:[s(5,8-5+2),s(5,8+5-2),s(5,8+5+2),s(5,8*5*2)],b:0,u:`8 − 5 + 2 = ${8-5+2}. Selesaikan dari kiri ke kanan.`},
 {j:"susun",t:`Susun langkah meringkaskan ${s(2,6)} × ${s(2,3)} ÷ ${s(2,4)}.`,p:[`Darab dahulu: ${s(2,6)} × ${s(2,3)} = ${s(2,9)}`,`Bahagi kemudian: ${s(2,9)} ÷ ${s(2,4)}`,"Tolak indeks: 9 − 4 = 5",`Jawapan: ${s(2,5)} = ${kuasa(2,5)}`],b:[0,1,2,3],u:"Darab menambah indeks, bahagi menolak indeks."}],
 bos:{j:"banyak",t:`Pilih SEMUA yang bersamaan dengan ${s(3,5)}.`,p:[`${s(3,2)} × ${s(3,3)}`,`${s(3,7)} ÷ ${s(3,2)}`,`${s(3,4)} × ${s(3,1)}`,`${s(3,2)} + ${s(3,3)}`,`${s(3,3)} × ${s(3,3)}`,`${s(3,10)} ÷ ${s(3,2)}`],b:[0,1,2],u:`Indeks hasil mesti 5. Tetapi ${s(3,2)} + ${s(3,3)} = 36 dan ${s(3,5)} = ${kuasa(3,5)}, kerana tambah nombor bukan menambah indeks.`}},

{n:3, tempat:"Kuasa Berganda", sk:"1.2.3 / 1.2.4 Indeks berkuasa, sifar dan negatif", lampiran:"bahagi",
 kadNama:"Kuasa Sifar", kadEm:"\u{0031}\u{FE0F}\u{20E3}", kadFakta:"Sebarang nombor bukan sifar yang dikuasakan sifar sama dengan 1, kerana a dibahagi a menghasilkan 1 dan indeksnya ialah 1 − 1 = 0.",
 bosKadNama:"Indeks Negatif", bosKadEm:"\u{1F53B}", bosKadFakta:"Indeks negatif tidak menghasilkan nombor negatif. Ia bermaksud songsangan: 2 kuasa negatif 1 ialah setengah.",
 soalan:[
 {j:"pilih",t:`Ringkaskan (${s(3,2)})${"<sup>4</sup>"}.`,p:[s(3,2*4),s(3,"2 + 4"),s(3,Math.pow(2,4)),s(9,16)],b:0,u:`Indeks dikuasakan, jadi darabkan: 2 × 4 = ${2*4}.`},
 {j:"nombor",t:`Cari nilai x jika (${s(2,3)})${s("","x")} = ${s(2,12)}.`,b:12/3,tol:0.5,u:"3 × x = 12, jadi x = 4.",kira:()=>12/3},
 {j:"pilih",t:`Nilai ${s(7,0)} ialah:`,p:["1","0","7","Tidak tertakrif"],b:0,u:"Sebarang nombor bukan sifar yang dikuasakan sifar sama dengan 1."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan m = 3 dan n = 3. Berapakah indeks bagi hasil bahagi a<sup>m</sup> ÷ a<sup>n</sup>?",b:0,tol:0.5,u:"Semua faktor dibatalkan, jadi indeks ialah 3 − 3 = 0, dan a kuasa sifar sama dengan 1.",kira:()=>3-3},
 {j:"pilih",t:`${s(2,"−3")} bersamaan dengan:`,p:["1/8","−8","−6","1/6"],b:0,u:`${s(2,"−3")} = 1 ÷ ${s(2,3)} = 1/${kuasa(2,3)}. Indeks negatif memberi songsangan, bukan nilai negatif.`},
 {j:"pilih",t:`Dalam Rajah 1, tetapkan m = 2 dan n = 5. Indeks hasil ialah negatif. Ini bermakna ${s("a",2)} ÷ ${s("a",5)} sama dengan:`,p:[`1/${s("a",3)}`,s("a",3),`−${s("a",3)}`,s("a",7)],b:0,u:`Indeks hasil ialah 2 − 5 = −3, dan ${s("a","−3")} = 1/${s("a",3)}.`},
 {j:"nombor",t:`Nyatakan ${s(10,"−2")} dalam bentuk perpuluhan.`,b:0.01,tol:0.0001,u:`${s(10,"−2")} = 1 ÷ ${s(10,2)} = 1/100 = 0.01.`,kira:()=>1/kuasa(10,2)},
 {j:"pilih",t:`Ringkaskan (${s("m",3)})${"<sup>2</sup>"} ÷ ${s("m",4)}.`,p:[s("m",3*2-4),s("m",3+2-4),s("m",3*2+4),s("m",3*2*4)],b:0,u:`(${s("m",3)})<sup>2</sup> = ${s("m",6)}, kemudian ${s("m",6)} ÷ ${s("m",4)} = ${s("m",2)}.`}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR.",p:[`${s(5,0)} = 1`,`(−4)<sup>0</sup> = 1`,`${s(2,"−1")} = 1/2`,`${s(3,0)} = 0`,`${s(2,"−2")} = −4`,`(${s(2,3)})<sup>2</sup> = ${s(2,5)}`],b:[0,1,2],u:`Kuasa sifar sama dengan 1 dan indeks negatif ialah songsangan. Betulnya ${s(3,0)} = 1, ${s(2,"−2")} = 1/4, dan (${s(2,3)})<sup>2</sup> = ${s(2,6)}.`}},

{n:4, tempat:"Lipat Kertas", sk:"1.2.5 / 1.2.6 Operasi dan indeks pecahan", lampiran:"lipat",
 kadNama:"Lipatan Mustahil", kadEm:"\u{1F4C4}", kadFakta:"Kertas biasa hanya boleh dilipat kira-kira tujuh atau lapan kali, walaupun kertas itu sangat luas, kerana setiap lipatan menggandakan tebalnya.",
 bosKadNama:"Kertas ke Bulan", bosKadEm:"\u{1F319}", bosKadFakta:"Secara teori, kertas setebal 0.1 mm yang dilipat 42 kali menjadi lebih tebal daripada jarak dari Bumi ke Bulan.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, lipat kertas 5 kali. Berapakah bilangan lapisan?",b:kuasa(2,5),tol:0.5,u:`Setiap lipatan menggandakan lapisan: ${s(2,5)} = ${kuasa(2,5)}.`,kira:()=>kuasa(2,5)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah tebal kertas (mm) selepas 6 kali lipatan?",b:kuasa(2,6)*0.1,tol:0.05,u:`${s(2,6)} = 64 lapisan, jadi 64 × 0.1 = 6.4 mm.`,kira:()=>kuasa(2,6)*0.1},
 {j:"pilih",t:"Bilangan lapisan kertas selepas n kali lipatan ditulis sebagai:",p:[s(2,"n"),s("n",2),"2n","n + 2"],b:0,u:"Setiap lipatan menggandakan lapisan, jadi n lipatan memberi 2 didarab n kali."},
 {j:"pilih",t:"Kertas dilipat 3 kali, kemudian dilipat lagi 4 kali. Berapakah jumlah lapisan akhir?",p:[String(kuasa(2,3+4)),String(kuasa(2,3*4)),String(3+4),String(3*4*kuasa(2,2))],b:0,u:`${s(2,3)} × ${s(2,4)} = ${s(2,7)} = ${kuasa(2,7)}. Indeks ditambah kerana asas sama.`,kira:()=>kuasa(2,7)},
 {j:"pilih",t:"Sebuah sel membelah dua setiap 20 minit. Bermula dengan 1 sel, berapakah bilangan sel selepas 2 jam?",p:[String(kuasa(2,6)),String(2*6),String(kuasa(2,5)),"120"],b:0,u:`2 jam = 120 minit = 6 kali belahan (120 ÷ 20). ${s(2,6)} = ${kuasa(2,6)}.`,kira:()=>kuasa(2,120/20)},
 {j:"pilih",t:"Dalam Rajah 1, tebal kertas selepas 7 lipatan ialah 12.8 mm. Selepas lipatan ke-8, tebalnya menjadi:",p:["25.6 mm","12.9 mm","19.2 mm","102.4 mm"],b:0,u:"Setiap lipatan menggandakan tebal: 12.8 × 2 = 25.6 mm.",kira:()=>12.8*2},
 {j:"nombor",t:`Cari nilai x jika ${s(2,"x")} × ${s(2,3)} = ${s(2,8)} ÷ ${s(2,2)}.`,b:8-2-3,tol:0.5,u:`Sebelah kanan: ${s(2,8)} ÷ ${s(2,2)} = ${s(2,6)}. Maka x + 3 = 6, jadi x = 3.`,kira:()=>8-2-3},
 {j:"pilih",t:`Nilai 16 ÷ ${s(2,3)} × ${s(2,2)} ialah:`,p:["8","0.5","32","16"],b:0,u:`16 ÷ 8 = 2, kemudian 2 × 4 = 8.`,kira:()=>16/kuasa(2,3)*kuasa(2,2)}],
 bos:{j:"nombor",t:"Kertas setebal 0.1 mm dilipat 10 kali. Berapakah tebalnya dalam sentimeter (cm)?",b:kuasa(2,10)*0.1/10,tol:0.05,suf:"cm",u:`${s(2,10)} = 1 024 lapisan, jadi tebalnya 1 024 × 0.1 = 102.4 mm. Bahagi 10 untuk cm: 10.24 cm.`,kira:()=>kuasa(2,10)*0.1/10}},

{n:5, tempat:"Menara Kuasa", sk:"1.2.6 / 1.2.7 Masalah rutin kompleks", lampiran:"berkuasa",
 kadNama:"Indeks Pecahan", kadEm:"\u{1F33F}", kadFakta:"Indeks satu perdua bermaksud punca kuasa dua. Jadi 16 kuasa setengah ialah 4, kerana 4 didarab 4 menghasilkan 16.",
 bosKadNama:"Kunci Pintar", bosKadEm:"\u{1F511}", bosKadFakta:"Kata laluan komputer yang lebih panjang menjadi kuasa yang jauh lebih sukar diteka: setiap huruf tambahan mendarab kemungkinan dengan banyak kali.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan m = 3 dan n = 3. Berapakah indeks hasil bagi (a<sup>m</sup>)<sup>n</sup>?",b:3*3,tol:0.5,u:"n kumpulan, setiap satu ada m faktor a. Jumlah faktor a ialah 3 × 3 = 9.",kira:()=>3*3},
 {j:"pilih",t:`Ringkaskan (2x<sup>3</sup>)<sup>2</sup> × x<sup>−4</sup>.`,p:[`4${s("x",2)}`,`2${s("x",10)}`,`4${s("x",10)}`,`4${s("x","−2")}`],b:0,u:`(2x<sup>3</sup>)<sup>2</sup> = 4${s("x",6)}. Kemudian 4${s("x",6)} × ${s("x","−4")} = 4${s("x",2)}.`},
 {j:"nombor",t:`Jika ${s(4,"x")} = ${s(2,10)}, cari nilai x.`,b:5,tol:0.5,u:`4 = ${s(2,2)}, jadi ${s(4,"x")} = ${s(2,"2x")}. Maka 2x = 10, x = 5.`,kira:()=>10/2},
 {j:"pilih",t:`Ringkaskan (${s("a",5)}${s("b",2)}) ÷ (${s("a",3)}${s("b","−1")}).`,p:[`${s("a",2)}${s("b",3)}`,`${s("a",2)}${s("b",1)}`,`${s("a",8)}${s("b",1)}`,`${s("a",8)}${s("b",3)}`],b:0,u:`Tolak indeks setiap asas: a: 5 − 3 = 2; b: 2 − (−1) = 3.`},
 {j:"nombor",t:`Cari nilai ${s(27,"2/3")}.`,b:9,tol:0.05,u:`${s(27,"1/3")} = 3 (punca kuasa tiga), kemudian ${s(3,2)} = 9.`,kira:()=>Math.round(Math.pow(Math.cbrt(27),2))},
 {j:"pilih",t:`${s("a","1/3")} bersamaan dengan:`,p:["Punca kuasa tiga bagi a","a dibahagi dengan 3","a didarab dengan 3","a dikuasa tigakan"],b:0,u:"Indeks 1/n bermaksud punca kuasa n."},
 {j:"pilih",t:`Sejenis virus berganda setiap jam. Bermula dengan 5 virus, bilangannya selepas t jam ialah 5 × ${s(2,"t")}. Jika bilangan virus ialah 320, berapakah t?`,p:["6","12","64","320"],b:0,u:`320 ÷ 5 = 64 = ${s(2,6)}, jadi t = 6.`,kira:()=>Math.log2(320/5)},
 {j:"pilih",t:"Manakah pilihan yang memberi nilai terbesar?",p:[s(2,10),s(3,6),s(5,4),s(10,3)],b:0,u:`Nilainya ${kuasa(2,10)}, ${kuasa(3,6)}, ${kuasa(5,4)} dan ${kuasa(10,3)}. ${s(2,10)} lebih besar sedikit daripada ${s(10,3)}.`,kira:()=>Math.max(kuasa(2,10),kuasa(3,6),kuasa(5,4),kuasa(10,3))===kuasa(2,10)}],
 bos:{j:"pilih",t:`Ali kata ${s(2,10)} ÷ ${s(2,5)} = ${s(2,2)} kerana 10 ÷ 5 = 2. Siti kata jawapannya ${s(2,5)}. Siapa betul?`,p:["Siti, kerana indeks ditolak apabila asas yang sama dibahagi","Ali, kerana indeks juga dibahagi apabila asas dibahagi","Kedua-duanya salah, jawapannya "+s(2,15),"Kedua-duanya betul kerana bergantung pada kaedah"],b:0,u:`Bahagi asas yang sama bermakna tolak indeks: 10 − 5 = 5. Jadi ${s(2,10)} ÷ ${s(2,5)} = ${s(2,5)}.`}},

{n:6, tempat:"Bilik Reka", sk:"1.2.7 Masalah bukan rutin secara kreatif",
 kadNama:"Ahli Matematik", kadEm:"\u{1F9E0}", kadFakta:"Ahli matematik tidak menghafal jawapan, mereka mencari corak. Hukum indeks ditemui apabila seseorang perasan corak dalam pendaraban berulang.",
 bosKadNama:"Pereka Soalan", bosKadEm:"\u{270F}\u{FE0F}", bosKadFakta:"Mereka bentuk soalan yang baik lebih sukar daripada menjawabnya, kerana kita mesti tahu semua kesilapan biasa yang mungkin dibuat.",
 soalan:[
 {j:"pilih",t:`Seorang murid mahu menulis ${s(2,10)} dengan asas 4. Jawapannya ialah:`,p:[s(4,5),s(4,12),s(4,20),s(4,15)],b:0,u:`4 = ${s(2,2)}, jadi ${s(4,"n")} = ${s(2,"2n")}. Maka 2n = 10, n = 5.`},
 {j:"pilih",t:`Antara nombor berikut, yang manakah TIDAK sama nilai dengan yang lain?`,p:[s(16,4),s(2,12),s(4,6),s(8,4)],b:0,u:`${s(2,12)}, ${s(4,6)} dan ${s(8,4)} semuanya bersamaan ${kuasa(2,12)}. Tetapi ${s(16,4)} = ${s(2,16)}.`},
 {j:"pilih",t:`${s(2,"n")} + ${s(2,"n")} bersamaan dengan:`,p:[s(2,"n + 1"),s(2,"2n"),s(4,"n"),s(2,"n")],b:0,u:`Dua kumpulan ${s(2,"n")} ialah 2 × ${s(2,"n")} = ${s(2,"n + 1")}. Menambah bukan mendarab indeks.`},
 {j:"nombor",t:`Digit unit bagi ${s(3,1)}, ${s(3,2)}, ${s(3,3)}, ${s(3,4)} berulang setiap empat kuasa. Apakah digit unit bagi ${s(3,2026)}?`,b:9,tol:0.5,u:`Digit unit berulang: 3, 9, 7, 1. Baki 2026 ÷ 4 ialah 2, jadi digitnya sama dengan ${s(3,2)} = 9.`,kira:()=>{const d=[3,9,7,1];return d[(2026-1)%4];}},
 {j:"nombor",t:`Diberi ${s(2,"a")} = 3 dan ${s(2,"b")} = 5. Cari nilai ${s(2,"a + b")}.`,b:3*5,tol:0.5,u:`${s(2,"a + b")} = ${s(2,"a")} × ${s(2,"b")} = 3 × 5 = 15.`,kira:()=>3*5},
 {j:"pilih",t:`Satu megabait (1 MB) mengandungi ${s(2,20)} bait. Sebuah fail 8 MB mengandungi bait sebanyak:`,p:[s(2,23),s(2,60),s(2,21),s(16,20)],b:0,u:`8 = ${s(2,3)}, jadi 8 × ${s(2,20)} = ${s(2,3)} × ${s(2,20)} = ${s(2,23)}.`},
 {j:"pilih",t:"Bakteria A berganda setiap 30 minit. Bakteria B berganda setiap 1 jam. Bermula 1 sel setiap satu, selepas 3 jam bilangan A ialah berapa kali bilangan B?",p:["8 kali","2 kali","6 kali","64 kali"],b:0,u:`A: ${s(2,6)} = 64. B: ${s(2,3)} = 8. Nisbahnya 64 ÷ 8 = 8 kali.`,kira:()=>kuasa(2,6)/kuasa(2,3)},
 {j:"pilih",t:"Nombor 1/32 boleh ditulis sebagai:",p:[s(2,"−5"),s(2,5),`−${s(2,5)}`,s(5,"−2")],b:0,u:`32 = ${s(2,5)}, jadi 1/32 = ${s(2,"−5")}.`}],
 bos:{j:"buka",
  t:"Reka satu masalah cerita sendiri yang perlu menggunakan sekurang-kurangnya dua hukum indeks. Contoh situasi: bakteria, wang simpanan, saiz fail atau rantaian mesej.",
  arahan:"Tulis soalan awak, penyelesaian langkah demi langkah, dan namakan hukum indeks yang digunakan pada setiap langkah. Pastikan angka dalam cerita awak memberi jawapan yang kemas.",
  u:"Jawapan TP6 yang kukuh mempunyai situasi yang munasabah, penyelesaian yang betul, dan penerangan hukum yang tepat pada setiap langkah."}}
];

module.exports = {
  id:"m3b1", tingkatan:3, kod:"1.0 Indeks",
  tajuk:"Menara Kuasa",
  subtajuk:"Matematik Ting. 3 · Bab 1 Indeks",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengingat kembali istilah asas indeks seperti asas dan indeks, serta menulis pendaraban berulang dalam bentuk indeks. Langkah seterusnya ialah memahami mengapa indeks ditambah atau ditolak apabila asas yang sama didarab atau dibahagi.",
   2:"{n} memahami hukum darab dan hukum bahagi bagi asas yang sama dan boleh menerangkannya menggunakan bilangan faktor. Perlu lebih banyak latihan pada indeks berkuasa, sifar dan negatif sebelum bergerak ke TP3.",
   3:"{n} boleh mengaplikasikan hukum indeks untuk meringkaskan ungkapan, termasuk indeks berkuasa, sifar dan negatif. Galakkan menyemak semula langkah bagi mengelakkan kesilapan menambah nombor apabila yang perlu ditambah ialah indeks.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah, seperti pertumbuhan berganda dan lipatan kertas, menggunakan hukum indeks. Seterusnya latih masalah yang menggabungkan beberapa hukum sekali gus.",
   5:"{n} dapat menyelesaikan masalah rutin yang kompleks yang melibatkan gabungan hukum indeks, indeks pecahan dan perbandingan nilai kuasa. Sudah bersedia untuk masalah bukan rutin dan tugasan mereka cipta.",
   6:"{n} berjaya mereka masalah cerita sendiri yang menggunakan beberapa hukum indeks dengan penyelesaian yang betul dan penerangan yang jelas. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Indeks. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menulis pendaraban berulang dengan bimbingan rakan sebaya."
  },
  lampiran:{ kuasa:R_KUASA, darab:R_DARAB, bahagi:R_BAHAGI, lipat:R_LIPAT, berkuasa:R_BERKUASA },
  aras:ARAS
};
