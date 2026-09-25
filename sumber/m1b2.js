/* Sumber kandungan — Matematik KSSM Tingkatan 1, Bab 2 Faktor dan Gandaan.
   Fail ini disunting tangan. Jalankan `node bina.js m1b2` untuk menyemaknya
   dan menghasilkan bank-m1b2.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 1, Bahagian Pembangunan Kurikulum, muka 37 (dskp/matematik-t1.pdf).
   DSKP Tingkatan 1 menulis Standard Prestasi mengikut bab (bukan mengikut tema),
   jadi keenam-enam tahap bab ini diambil terus.

   Rajah interaktif ialah widget `t1faktor` dalam widget-m1b2.js. Semua jawapan
   berangka dikira dengan kod dalam medan `kira` dan dibandingkan oleh
   tools/semak-jawapan.js. */
const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a / gcd(a, b) * b;
const gcd3 = (a, b, c) => gcd(gcd(a, b), c);
const lcm3 = (a, b, c) => lcm(lcm(a, b), c);
const faktor = n => { const o = []; for (let i = 1; i <= n; i++) if (n % i === 0) o.push(i); return o; };
const perdana = n => { const o = []; let p = 2; while (n > 1) { while (n % p === 0) { o.push(p); n /= p; } p++; } return o; };
const adaPerdana = n => n > 1 && faktor(n).length === 2;

const SPI = [
"Mempamerkan pengetahuan asas tentang nombor perdana, faktor dan gandaan.",
"Mempamerkan kefahaman tentang nombor perdana, faktor dan gandaan.",
"Mengaplikasikan kefahaman tentang nombor perdana, faktor dan gandaan untuk melaksanakan tugasan mudah yang melibatkan FSTB dan GSTK.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang nombor perdana, faktor dan gandaan dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang nombor perdana, faktor dan gandaan dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang nombor perdana, faktor dan gandaan dalam konteks penyelesaian masalah bukan rutin."];

/* ---------- lampiran: rajah interaktif ---------- */

const fak = (spec, kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t1faktor", kapsyen, alt }, spec, extra || {});
const R_FAK1 = fak({ mod: "faktor", n: 24, d: 5 },
  "Rajah 1 · 24 biji coklat. Gerakkan gelongsor untuk mencuba saiz kumpulan yang berbeza.",
  "Rajah interaktif 24 kotak coklat disusun dalam kumpulan; gelongsor menukar saiz kumpulan dan menunjukkan sama ada terdapat baki, iaitu sama ada saiz itu faktor bagi 24");
const R_FAK2 = fak({ mod: "perdana", n: 84, k: 0 },
  "Rajah 1 · Bahagi 84 dengan nombor perdana, satu langkah demi satu langkah.",
  "Rajah interaktif pembahagian berulang bagi 84 dengan nombor perdana; gelongsor menambah langkah bahagi sehingga hasilnya 1");
const R_FAK3 = fak({ mod: "gandaan", aNilai: [2, 3, 4, 5, 6, 8], bNilai: [3, 4, 6, 9, 10, 12], maks: 72, a: 1, b: 1 },
  "Rajah 1 · Gandaan A (ungu) dan gandaan B (kuning) pada grid 1 hingga 72. Gandaan sepunya ditandakan hijau.",
  "Rajah interaktif grid nombor 1 hingga 72 dengan gandaan dua nombor diwarnakan berbeza; gandaan sepunya ditandakan dan gandaan sepunya terkecil dipaparkan");
const R_FAK4 = fak({ mod: "fstb", aNilai: [12, 18, 24, 30, 36, 48], bNilai: [8, 9, 15, 16, 20, 27], a: 2, b: 3 },
  "Rajah 1 · Faktor bagi A dan B. Kira dahulu di kertas conteng, kemudian semak dengan rajah.",
  "Rajah interaktif senarai faktor bagi dua nombor; faktor sepunya diserlahkan dan faktor sepunya terbesar dipaparkan",
  { cabar: true });
const R_FAK5 = fak({ mod: "gandaan", aNilai: [3, 4, 6, 8, 9, 10], bNilai: [4, 5, 6, 8, 9, 12], maks: 72, a: 2, b: 3 },
  "Rajah 1 · Gandaan A dan B pada grid 1 hingga 72. Kira dahulu di kertas conteng, kemudian semak dengan rajah.",
  "Rajah interaktif grid nombor 1 hingga 72 dengan gandaan dua nombor diwarnakan; gandaan sepunya dan GSTK dipaparkan selepas semakan",
  { cabar: true });
const R_FAK6 = fak({ mod: "fstb", aNilai: [16, 20, 24, 36, 40, 60], bNilai: [18, 24, 30, 36, 42, 45], a: 3, b: 3 },
  "Rajah 1 · Faktor bagi A dan B. Faktor sepunya berwarna hijau.",
  "Rajah interaktif senarai faktor bagi dua nombor; faktor sepunya diserlahkan dan faktor sepunya terbesar dipaparkan");

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Kedai Kotak Coklat", sk:"2.1.1 Faktor dan senarai faktor", lampiran:"fak1",
 kadNama:"Faktor Berpasangan", kadEm:"\u{1F36B}", kadFakta:"Faktor sentiasa datang berpasangan. Bagi 24, pasangannya ialah 1 dan 24, 2 dan 12, 3 dan 8, serta 4 dan 6. Itu sebabnya coklat 24 biji boleh disusun dalam 8 cara.",
 bosKadNama:"Nombor Perdana", bosKadEm:"\u{1F522}", bosKadFakta:"Nombor 2 ialah satu-satunya nombor perdana yang genap. Nombor 1 pula bukan nombor perdana kerana ia hanya ada satu faktor.",
 soalan:[
 {j:"pilih",t:"Faktor bagi suatu nombor bulat ialah nombor bulat yang:",p:["Membahagi nombor itu tepat tanpa baki","Nombor itu bahagi tepat dengan dirinya sahaja","Sentiasa lebih besar daripada nombor itu","Hasil tambah semua digit nombor itu"],b:0,u:"Faktor membahagi tepat. Contohnya 3 ialah faktor bagi 12 kerana 12 ÷ 3 = 4 tanpa baki."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan saiz kumpulan 6. Berapakah bilangan kumpulan penuh yang terbentuk?",b:4,tol:0.01,u:"24 ÷ 6 = 4 kumpulan tanpa baki, jadi 6 ialah faktor bagi 24.",kira:()=>24/6},
 {j:"pilih",t:"Dalam Rajah 1, saiz kumpulan 5 memberi 4 kumpulan dan baki 4 biji. Maka 5:",p:["Bukan faktor bagi 24 kerana ada baki","Faktor bagi 24 kerana ada 4 kumpulan","Faktor perdana bagi 24","Faktor bagi 24 kerana 5 ialah nombor ganjil"],b:0,u:"Faktor mesti membahagi tepat tanpa baki. Di sini baki ialah 4, jadi 5 bukan faktor bagi 24.",kira:()=>24%5!==0},
 {j:"nombor",t:"Berapakah bilangan faktor bagi 18?",b:6,tol:0.01,u:"Faktor bagi 18 ialah 1, 2, 3, 6, 9 dan 18. Jumlahnya 6.",kira:()=>faktor(18).length},
 {j:"pilih",t:"Antara nombor berikut, yang manakah BUKAN faktor bagi 36?",p:["8","12","18","36"],b:0,u:"36 ÷ 8 = 4 baki 4, jadi 8 bukan faktor. Manakala 12, 18 dan 36 semuanya membahagi 36 tepat.",kira:()=>36%8!==0},
 {j:"pilih",t:"Nombor perdana ialah nombor bulat yang mempunyai tepat:",p:["Dua faktor: 1 dan dirinya","Satu faktor sahaja","Tiga faktor atau lebih","Dua faktor selain 1"],b:0,u:"Nombor perdana hanya ada dua faktor, iaitu 1 dan nombor itu sendiri. Contohnya 7 dengan faktor 1 dan 7."},
 {j:"susun",t:"Susun langkah menyenaraikan semua faktor bagi 12.",p:["Bahagi 12 dengan 1, 2, 3 dan seterusnya","Catat nombor yang membahagi tepat tanpa baki","Ingat setiap faktor berpasangan, contoh 2 dengan 6","Tulis senarai lengkap: 1, 2, 3, 4, 6, 12"],b:[0,1,2,3],u:"Cuba bahagi satu demi satu, catat yang tepat, gunakan pasangan untuk cepat, dan tulis semua faktor."},
 {j:"nombor",t:"Berapakah bilangan nombor perdana antara 1 dan 20?",b:8,tol:0.01,u:"Nombor perdana ialah 2, 3, 5, 7, 11, 13, 17 dan 19. Jumlahnya 8.",kira:()=>{let n=0;for(let i=1;i<=20;i++)if(adaPerdana(i))n++;return n;}}],
 bos:{j:"banyak",t:"Pilih SEMUA nombor perdana.",p:["2","9","11","15","17","21"],b:[0,2,4],u:"2, 11 dan 17 hanya ada dua faktor. Manakala 9 (1, 3, 9), 15 (1, 3, 5, 15) dan 21 (1, 3, 7, 21) ada lebih daripada dua faktor."}},

{n:2, tempat:"Pokok Perdana", sk:"2.1.2 Faktor perdana dan pemfaktoran perdana", lampiran:"fak2",
 kadNama:"Pembahagian Berulang", kadEm:"\u{1F333}", kadFakta:"Cara bahagi berulang ialah mencuba nombor perdana terkecil dahulu, iaitu 2, kemudian 3, 5, 7 dan seterusnya, sehingga hasilnya 1.",
 bosKadNama:"Cap Jari Nombor", bosKadEm:"\u{1F9EC}", bosKadFakta:"Setiap nombor bulat lebih besar daripada 1 hanya ada satu pemfaktoran perdana. Ia seperti cap jari yang tidak sama dengan nombor lain.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, bahagikan 84 dengan nombor perdana sehingga hasilnya 1. Berapakah bilangan langkah bahagi yang diperlukan?",b:4,tol:0.01,u:"84 ÷ 2 = 42, ÷ 2 = 21, ÷ 3 = 7, ÷ 7 = 1. Empat langkah.",kira:()=>perdana(84).length},
 {j:"pilih",t:"Dalam Rajah 1, apakah faktor perdana bagi 84?",p:["2, 3 dan 7","2, 4 dan 21","3, 4 dan 7","2, 6 dan 7"],b:0,u:"Pemfaktoran perdana 84 = 2 × 2 × 3 × 7. Faktor perdana yang berbeza ialah 2, 3 dan 7."},
 {j:"pilih",t:"Pemfaktoran perdana bagi 84 ialah:",p:["2 × 2 × 3 × 7","2 × 3 × 14","4 × 21","2 × 6 × 7"],b:0,u:"Hanya nombor perdana boleh digunakan. 2 × 2 × 3 × 7 = 84 dan semuanya nombor perdana.",kira:()=>2*2*3*7===84},
 {j:"pilih",t:"Manakah pemfaktoran perdana bagi 30?",p:["2 × 3 × 5","2 × 15","5 × 6","3 × 10"],b:0,u:"30 = 2 × 3 × 5. Ketiga-tiga nombor ialah nombor perdana.",kira:()=>perdana(30).join(",")==="2,3,5"},
 {j:"nombor",t:"Tulis 90 sebagai hasil darab faktor perdana. Berapakah bilangan faktor perdana yang BERBEZA?",b:3,tol:0.01,u:"90 = 2 × 3 × 3 × 5. Faktor perdana yang berbeza ialah 2, 3 dan 5, iaitu tiga.",kira:()=>new Set(perdana(90)).size},
 {j:"nombor",t:"Berapakah faktor perdana terbesar bagi 132?",b:11,tol:0.01,u:"132 = 2 × 2 × 3 × 11. Faktor perdana terbesar ialah 11.",kira:()=>Math.max(...perdana(132))},
 {j:"pilih",t:"Mengapakah 15 tidak boleh menjadi faktor perdana bagi 60?",p:["Kerana 15 boleh dibahagi dengan 3 dan 5","Kerana 15 lebih besar daripada 10","Kerana 15 ialah nombor ganjil","Kerana 60 tidak boleh dibahagi dengan 15"],b:0,u:"15 = 3 × 5, jadi 15 bukan nombor perdana. Faktor perdana bagi 60 ialah 2, 3 dan 5."},
 {j:"susun",t:"Susun langkah pembahagian berulang bagi 36.",p:["Bahagi 36 dengan 2, hasilnya 18","Bahagi 18 dengan 2, hasilnya 9","Bahagi 9 dengan 3, hasilnya 3","Bahagi 3 dengan 3, hasilnya 1"],b:[0,1,2,3],u:"Bahagi dengan nombor perdana terkecil yang boleh membahagi tepat sehingga hasilnya 1. Jadi 36 = 2 × 2 × 3 × 3."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang pemfaktoran perdana 84 dalam Rajah 1.",p:["Semua faktornya nombor perdana","Faktor 2 muncul dua kali","Hasil darab semua faktornya ialah 84","Faktor 7 muncul dua kali","Faktor 4 ada dalam senarainya","Faktor 21 ada dalam senarainya"],b:[0,1,2],u:"84 = 2 × 2 × 3 × 7. Semua faktornya perdana, 2 muncul dua kali dan hasil darabnya 84. Faktor 7 muncul sekali sahaja, dan 4 serta 21 bukan nombor perdana."}},

{n:3, tempat:"Lampu Isyarat", sk:"2.1.3 / 2.1.4 / 2.2.1 / 2.2.2 Faktor sepunya, FSTB, gandaan sepunya dan GSTK", lampiran:"fak3",
 kadNama:"Gandaan Sepunya", kadEm:"\u{1F6A6}", kadFakta:"Dua lampu isyarat yang berkelip pada kadar berbeza akan berkelip serentak pada gandaan sepunya. Yang pertama ialah GSTK.",
 bosKadNama:"Tiga Nombor", bosKadEm:"\u{1F9EE}", bosKadFakta:"FSTB dan GSTK bukan untuk dua nombor sahaja. Cara bahagi berulang dan senarai gandaan boleh digunakan untuk tiga nombor atau lebih.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan A = 3 dan B = 4. Berapakah GSTK bagi 3 dan 4?",b:12,tol:0.01,u:"Gandaan 3: 3, 6, 9, 12. Gandaan 4: 4, 8, 12. Gandaan sepunya terkecil ialah 12.",kira:()=>lcm(3,4)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan A = 6 dan B = 9. Berapakah GSTK bagi 6 dan 9?",b:18,tol:0.01,u:"Gandaan 6: 6, 12, 18. Gandaan 9: 9, 18. Gandaan sepunya pertama ialah 18.",kira:()=>lcm(6,9)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan A = 8 dan B = 12. Berapakah GSTK?",b:24,tol:0.01,u:"Gandaan 8: 8, 16, 24. Gandaan 12: 12, 24. GSTK ialah 24.",kira:()=>lcm(8,12)},
 {j:"pilih",t:"Gandaan sepunya bagi 4 dan 6 yang paling kecil ialah:",p:["12","24","48","10"],b:0,u:"Gandaan 4: 4, 8, 12. Gandaan 6: 6, 12. Yang pertama sama ialah 12.",kira:()=>lcm(4,6)},
 {j:"nombor",t:"Cari FSTB bagi 12 dan 18.",b:6,tol:0.01,u:"Faktor 12: 1, 2, 3, 4, 6, 12. Faktor 18: 1, 2, 3, 6, 9, 18. Faktor sepunya terbesar ialah 6.",kira:()=>gcd(12,18)},
 {j:"nombor",t:"Cari FSTB bagi 24 dan 36.",b:12,tol:0.01,u:"Faktor sepunya 24 dan 36 ialah 1, 2, 3, 4, 6 dan 12. Yang terbesar ialah 12.",kira:()=>gcd(24,36)},
 {j:"pilih",t:"Faktor sepunya bagi 8 dan 12 ialah:",p:["1, 2 dan 4","1, 2, 4 dan 8","2, 4 dan 12","1, 3 dan 4"],b:0,u:"Faktor 8: 1, 2, 4, 8. Faktor 12: 1, 2, 3, 4, 6, 12. Yang sama ialah 1, 2 dan 4.",kira:()=>sepunyaSama([8,12]).join(",")==="1,2,4"},
 {j:"susun",t:"Susun langkah mencari GSTK bagi 4 dan 6.",p:["Tulis gandaan 4: 4, 8, 12, 16","Tulis gandaan 6: 6, 12, 18, 24","Cari gandaan yang ada dalam kedua-dua senarai","Ambil yang paling kecil, iaitu 12"],b:[0,1,2,3],u:"Senaraikan gandaan kedua-dua nombor, cari yang sama, dan pilih yang terkecil."}],
 bos:{j:"nombor",t:"Cari FSTB bagi tiga nombor 12, 18 dan 30.",b:6,tol:0.01,u:"Faktor sepunya 12, 18 dan 30 ialah 1, 2, 3 dan 6. Yang terbesar ialah 6.",kira:()=>gcd3(12,18,30)}},

{n:4, tempat:"Meja Kenduri", sk:"2.1.5 Masalah yang melibatkan FSTB", lampiran:"fak4",
 kadNama:"Bahagi Sama Rata", kadEm:"\u{1F371}", kadFakta:"Bila masalah minta bahagikan sama banyak tanpa baki dan mahu bilangan kumpulan yang paling banyak, guna FSTB.",
 bosKadNama:"Tiga Jenis", bosKadEm:"\u{1F381}", bosKadFakta:"Bila ada tiga jenis barang, cari FSTB bagi ketiga-tiganya. Bilangan kumpulan terbanyak ialah FSTB itu.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan A = 24 dan B = 16. Berapakah FSTB bagi 24 dan 16?",b:8,tol:0.01,u:"Faktor sepunya 24 dan 16 ialah 1, 2, 4 dan 8. Yang terbesar ialah 8.",kira:()=>gcd(24,16)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan A = 36 dan B = 27. Berapakah FSTB bagi 36 dan 27?",b:9,tol:0.01,u:"Faktor sepunya 36 dan 27 ialah 1, 3 dan 9. FSTB ialah 9.",kira:()=>gcd(36,27)},
 {j:"nombor",t:"Cikgu Hana ada 24 biskut coklat dan 36 biskut kelapa. Dia mahu membuat bungkusan yang sama banyak untuk setiap jenis tanpa baki. Berapakah bilangan bungkusan paling banyak yang boleh dibuat?",b:12,tol:0.01,u:"Bilangan bungkusan terbanyak ialah FSTB bagi 24 dan 36, iaitu 12.",kira:()=>gcd(24,36)},
 {j:"nombor",t:"Ika ada 30 pen biru dan 45 pen merah. Dia membuat kumpulan pen yang sama banyak untuk setiap warna tanpa baki, dengan bilangan kumpulan yang paling banyak. Berapakah bilangan pen biru dalam setiap kumpulan?",b:2,tol:0.01,u:"Bilangan kumpulan terbanyak ialah FSTB 30 dan 45, iaitu 15. Pen biru setiap kumpulan ialah 30 ÷ 15 = 2.",kira:()=>30/gcd(30,45)},
 {j:"nombor",t:"Bas A bertolak setiap 12 minit dan bas B setiap 18 minit. Kedua-duanya bertolak serentak pada jam 8:00 pagi. Selepas berapa minit kedua-duanya bertolak serentak lagi?",b:36,tol:0.01,suf:"minit",u:"Masalah ini guna GSTK. GSTK bagi 12 dan 18 ialah 36, jadi mereka bertolak serentak lagi selepas 36 minit.",kira:()=>lcm(12,18)},
 {j:"pilih",t:"Bagi soalan 'bilangan bungkusan paling banyak tanpa baki', awak perlu mencari:",p:["FSTB","Gandaan sepunya terkecil","Faktor perdana terbesar","Hasil darab dua nombor"],b:0,u:"Membahagi sama banyak tanpa baki dengan kumpulan terbanyak ialah FSTB. GSTK pula untuk peristiwa yang berulang serentak."},
 {j:"pilih",t:"Lampu A berkelip setiap 6 saat dan lampu B setiap 8 saat. Kedua-duanya berkelip serentak pada saat 0. Bilakah kedua-duanya berkelip serentak lagi?",p:["Saat ke-24","Saat ke-14","Saat ke-48","Saat ke-2"],b:0,u:"GSTK bagi 6 dan 8 ialah 24, jadi serentak lagi pada saat ke-24.",kira:()=>lcm(6,8)===24},
 {j:"nombor",t:"Sekeping kertas 72 cm × 48 cm dipotong kepada petak persegi sama saiz tanpa baki. Berapakah panjang sisi petak terbesar yang boleh dipotong?",b:24,tol:0.01,suf:"cm",u:"Sisi petak terbesar ialah FSTB bagi 72 dan 48, iaitu 24 cm.",kira:()=>gcd(72,48)}],
 bos:{j:"nombor",t:"Cikgu mahu mengagihkan 18 buku, 24 pen dan 30 pemadam kepada beberapa kumpulan yang sama banyak tanpa baki. Berapakah bilangan kumpulan yang paling banyak?",b:6,tol:0.01,u:"Bilangan kumpulan terbanyak ialah FSTB bagi 18, 24 dan 30, iaitu 6.",kira:()=>gcd3(18,24,30)}},

{n:5, tempat:"Jalan Pasar Malam", sk:"2.2.3 Masalah yang melibatkan GSTK", lampiran:"fak5",
 kadNama:"Serentak Lagi", kadEm:"\u{1F3EE}", kadFakta:"Bila dua peristiwa berulang pada kitaran berbeza dan bermula serentak, GSTK memberitahu bilakah mereka serentak semula.",
 bosKadNama:"Jam Loceng", bosKadEm:"\u{1F514}", bosKadFakta:"Untuk tiga kitaran atau lebih, cari GSTK dua nombor dahulu, kemudian cari GSTK hasilnya dengan nombor ketiga.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan A = 6 dan B = 8. Berapakah GSTK bagi 6 dan 8?",b:24,tol:0.01,u:"Gandaan 6: 6, 12, 18, 24. Gandaan 8: 8, 16, 24. GSTK ialah 24.",kira:()=>lcm(6,8)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan A = 9 dan B = 12. Berapakah GSTK bagi 9 dan 12?",b:36,tol:0.01,u:"Gandaan 9: 9, 18, 27, 36. Gandaan 12: 12, 24, 36. GSTK ialah 36.",kira:()=>lcm(9,12)},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan A = 10 dan B = 4. GSTK ialah 20. Gandaan sepunya yang KEDUA ialah:",p:["40","30","60","80"],b:0,u:"Semua gandaan sepunya ialah gandaan bagi GSTK. Gandaan 20: 20, 40, 60. Yang kedua ialah 40.",kira:()=>2*lcm(10,4)},
 {j:"nombor",t:"Tiga lampu berkelip setiap 4, 6 dan 10 saat. Ketiga-tiganya berkelip serentak pada saat 0. Pada saat ke berapakah ketiga-tiganya berkelip serentak lagi?",b:60,tol:0.01,suf:"saat",u:"GSTK bagi 4, 6 dan 10 ialah 60. Serentak lagi pada saat ke-60.",kira:()=>lcm3(4,6,10)},
 {j:"nombor",t:"Pak Salleh ke pasar setiap 6 hari dan Mak Jah setiap 8 hari. Mereka bertemu di pasar hari ini. Selepas berapa hari mereka bertemu lagi di pasar?",b:24,tol:0.01,suf:"hari",u:"GSTK bagi 6 dan 8 ialah 24, jadi mereka bertemu lagi selepas 24 hari.",kira:()=>lcm(6,8)},
 {j:"nombor",t:"Lantai 360 cm × 240 cm dijubin dengan jubin persegi terbesar tanpa dipotong. Berapakah bilangan jubin yang diperlukan?",b:6,tol:0.01,u:"Sisi jubin terbesar ialah FSTB 360 dan 240, iaitu 120 cm. Bilangan jubin = (360 ÷ 120) × (240 ÷ 120) = 3 × 2 = 6.",kira:()=>{const g=gcd(360,240);return (360/g)*(240/g);}},
 {j:"pilih",t:"Nombor terkecil yang boleh dibahagi tepat dengan 6, 8 dan 12 ialah:",p:["24","48","12","96"],b:0,u:"GSTK bagi 6, 8 dan 12 ialah 24. Ia boleh dibahagi tepat dengan ketiga-tiganya.",kira:()=>lcm3(6,8,12)},
 {j:"pilih",t:"Bilangan murid dalam satu kelas lebih daripada 30 tetapi kurang daripada 40. Mereka boleh dibahagi tepat kepada kumpulan 4 orang atau 6 orang. Berapakah bilangan murid?",p:["36","32","38","34"],b:0,u:"Bilangan murid mesti gandaan sepunya 4 dan 6, iaitu gandaan 12. Dalam julat 31 hingga 39 hanya 36.",kira:()=>{for(let i=31;i<40;i++)if(i%4===0&&i%6===0)return i;return 0;}}],
 bos:{j:"nombor",t:"Tiga jam loceng berbunyi setiap 15 minit, 20 minit dan 25 minit. Ketiga-tiganya berbunyi serentak pada jam 9:00 pagi. Selepas berapa minit ketiga-tiganya berbunyi serentak lagi?",b:300,tol:0.01,suf:"minit",u:"GSTK bagi 15, 20 dan 25 ialah 300. Serentak lagi selepas 300 minit, iaitu pada jam 2:00 petang.",kira:()=>lcm3(15,20,25)}},

{n:6, tempat:"Studio Reka Aturan", sk:"2.1.5 / 2.2.3 Masalah FSTB dan GSTK bukan rutin", lampiran:"fak6",
 kadNama:"Dua Alat", kadEm:"\u{1F3A8}", kadFakta:"FSTB dan GSTK ialah dua alat yang berbeza. FSTB memecahkan sesuatu kepada bahagian sama besar, GSTK mencari bila dua kitaran bertemu semula.",
 bosKadNama:"Reka Masalah", bosKadEm:"\u{270F}\u{FE0F}", bosKadFakta:"Kemahiran paling tinggi ialah mereka soalan sendiri. Awak perlu tahu bila FSTB digunakan dan bila GSTK digunakan.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan A = 36 dan B = 42. Berapakah FSTB bagi 36 dan 42?",b:6,tol:0.01,u:"Faktor sepunya 36 dan 42 ialah 1, 2, 3 dan 6. FSTB ialah 6.",kira:()=>gcd(36,42)},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan A = 16 dan B = 45. Apakah yang benar tentang FSTB kedua-dua nombor itu?",p:["FSTB ialah 1 kerana tiada faktor sepunya lain","FSTB ialah 5 kerana kedua-duanya ada faktor 5","FSTB ialah 2 kerana kedua-duanya nombor genap","FSTB ialah 16 kerana 16 lebih kecil"],b:0,u:"Faktor 16: 1, 2, 4, 8, 16. Faktor 45: 1, 3, 5, 9, 15, 45. Hanya 1 yang sama, jadi FSTB ialah 1.",kira:()=>gcd(16,45)===1},
 {j:"nombor",t:"Dua nombor mempunyai FSTB 6 dan GSTK 36. Salah satu nombor itu ialah 12. Berapakah nombor yang satu lagi?",b:18,tol:0.01,u:"Bagi dua nombor, hasil darab nombor itu sama dengan FSTB × GSTK. Nombor itu = (6 × 36) ÷ 12 = 18. Semak: FSTB 12 dan 18 ialah 6, GSTK ialah 36.",kira:()=>{const x=6*36/12;return gcd(12,x)===6&&lcm(12,x)===36?x:-1;}},
 {j:"nombor",t:"Cari nombor terkecil lebih daripada 1 yang memberi baki 1 apabila dibahagi dengan 4, 6 dan 10.",b:61,tol:0.01,u:"Nombor itu ialah GSTK bagi 4, 6 dan 10 ditambah 1. GSTK ialah 60, jadi nombor itu ialah 61.",kira:()=>{for(let i=2;i<500;i++)if(i%4===1&&i%6===1&&i%10===1)return i;return 0;}},
 {j:"nombor",t:"Sekeping papan 90 cm × 150 cm dipotong kepada petak persegi sama saiz yang terbesar tanpa baki. Berapakah bilangan petak yang terhasil?",b:15,tol:0.01,u:"Sisi petak terbesar ialah FSTB 90 dan 150, iaitu 30 cm. Bilangan petak = 3 × 5 = 15.",kira:()=>{const g=gcd(90,150);return (90/g)*(150/g);}},
 {j:"pilih",t:"Pernyataan mana yang BENAR tentang FSTB dua nombor?",p:["FSTB sentiasa membahagi kedua-dua nombor itu tepat","FSTB sentiasa lebih besar daripada kedua-dua nombor","FSTB sentiasa lebih besar daripada GSTK","FSTB sentiasa sama dengan 1"],b:0,u:"FSTB ialah faktor kedua-dua nombor, jadi ia membahagi kedua-duanya tepat. Ia tidak lebih besar daripada nombor yang lebih kecil."},
 {j:"pilih",t:"Manakah pasangan nombor yang GSTK-nya sama dengan hasil darab kedua-duanya?",p:["8 dan 9","6 dan 9","4 dan 10","12 dan 18"],b:0,u:"8 dan 9 tiada faktor sepunya selain 1, jadi GSTK = 72 = 8 × 9. Bagi pasangan lain, GSTK lebih kecil daripada hasil darab.",kira:()=>lcm(8,9)===8*9},
 {j:"susun",t:"Susun langkah memilih jubin persegi terbesar untuk lantai 120 cm × 180 cm.",p:["Cari faktor bagi 120 dan bagi 180","Kenal pasti faktor sepunya kedua-duanya","Pilih yang terbesar, iaitu 60 cm","Bilangan jubin ialah 2 × 3 = 6"],b:[0,1,2,3],u:"Sisi jubin terbesar ialah FSTB 120 dan 180, iaitu 60 cm. Bilangan jubin = (120 ÷ 60) × (180 ÷ 60) = 6."}],
 bos:{j:"buka",
  t:"Reka DUA masalah harian tentang lampu, bas atau jubin. Satu mesti diselesaikan dengan FSTB dan satu lagi dengan GSTK.",
  arahan:"Tulis kedua-dua soalan dengan nombor sendiri. Bagi setiap soalan, terangkan kenapa awak pilih FSTB atau GSTK, tunjukkan cara mengira dan tulis jawapan lengkap dengan unit.",
  u:"Jawapan TP6 yang kukuh mereka masalah yang sesuai dengan FSTB (bahagi sama banyak, potong terbesar) dan GSTK (kitaran serentak), mengira dengan betul, dan menerangkan sebab memilih alat itu."}}
];

function sepunyaSama(arr){ return faktor(arr[0]).filter(x => arr.every(y => y % x === 0)); }

module.exports = {
  id:"m1b2", tingkatan:1, kod:"2.0 Faktor dan Gandaan",
  tajuk:"Studio Faktor",
  subtajuk:"Matematik Ting. 1 · Bab 2 Faktor dan Gandaan",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal nombor perdana, faktor dan gandaan dengan asas yang kukuh. Langkah seterusnya ialah memahami cara mencari faktor perdana dan menyatakan nombor sebagai hasil darab faktor perdana.",
   2:"{n} memahami nombor perdana, faktor dan gandaan serta boleh menyatakan nombor dalam bentuk pemfaktoran perdana. Perlu lebih latihan mencari FSTB dan GSTK sebelum bergerak ke TP3.",
   3:"{n} boleh menyelesaikan tugasan mudah yang melibatkan FSTB dan GSTK bagi dua dan tiga nombor bulat. Galakkan menyemak jawapan dengan menyenaraikan faktor atau gandaan.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah seperti membahagi barang sama banyak dengan FSTB dan mencari kitaran serentak dengan GSTK. Seterusnya latih masalah yang lebih kompleks.",
   5:"{n} dapat menyelesaikan masalah rutin yang kompleks melibatkan GSTK, FSTB dan tiga nombor serta bilangan yang terhad dalam satu julat. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya memilih FSTB atau GSTK dengan betul dalam masalah bukan rutin dan boleh mereka soalan sendiri. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Faktor dan Gandaan. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyenaraikan faktor bagi beberapa nombor dengan bimbingan rakan sebaya."
  },
  lampiran:{ fak1:R_FAK1, fak2:R_FAK2, fak3:R_FAK3, fak4:R_FAK4, fak5:R_FAK5, fak6:R_FAK6 },
  aras:ARAS
};
