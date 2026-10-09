/* Sumber kandungan — Matematik KSSM Tingkatan 4, Bab 2 Asas Nombor.
   Fail ini disunting tangan. Jalankan `node bina.js m4b2`.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 4
   dan 5, muka 40 (dskp/matematik-t4-t5.pdf). DSKP menulis enam tahap penuh.
   Nota DSKP: asas dihadkan kepada yang kurang daripada 10; kalkulator tidak digunakan
   untuk penukaran kecuali untuk semakan.

   Semua nombor dalam pilihan jawapan dikira dengan keAsas()/dariAsas() di bawah dan
   disemak oleh medan `kira`. Rajah: widget t4asas (widget-m4b2.js). */

const keAsas = (n, b) => { if (n === 0) return "0"; let o = ""; while (n > 0) { o = (n % b) + o; n = Math.floor(n / b); } return o; };
const dariAsas = (d, b) => [...String(d)].reduce((v, g) => v * b + (+g), 0);
const A = (d, b) => `${d}<sub>${b}</sub>`;
const S = (n, b) => A(keAsas(n, b), b);

const SPI = [
"Mempamerkan pengetahuan asas tentang asas nombor.",
"Mempamerkan kefahaman tentang asas nombor.",
"Mengaplikasikan kefahaman tentang asas nombor untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang asas nombor dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang asas nombor dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang asas nombor dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran ---------- */
const iw = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t4asas", kapsyen, alt }, extra);
const R_BLOK = iw("Rajah 1 · Guli dikumpul mengikut asas. Gerakkan N dan pilih asas.",
  "Rajah interaktif pengumpulan guli mengikut asas 2, 3, 5 atau 8; gelongsor N dan cip asas menunjukkan bilangan kumpulan dalam setiap nilai tempat",
  { mod: "blok", nMin: 1, nMaks: 40, asas: [2, 3, 5, 8], awal: { n: 13, b: 2 } });
const R_NILAI = iw("Rajah 1 · Nilai tempat, digit dan nilai digit. Pilih satu nombor.",
  "Rajah interaktif menguraikan nombor asas lima, dua, lapan dan tiga kepada nilai tempat, digit, nilai digit dan nilai nombor dalam asas sepuluh",
  { mod: "nilai", senarai: [{ d: "2341", b: 5 }, { d: "101101", b: 2 }, { d: "725", b: 8 }, { d: "1202", b: 3 }] });
const R_TUKAR = iw("Rajah 1 · Pembahagian berulang. Pilih N dan asas, kemudian baca baki dari bawah.",
  "Rajah interaktif tangga pembahagian berulang bagi menukar nombor asas sepuluh kepada asas 2, 3, 5 atau 8; baki dibaca dari bawah ke atas",
  { mod: "tukar", nSet: [25, 45, 77, 100, 156], asas: [2, 3, 5, 8], awal: { n: 3, b: 2 } });
const R_TAMBAH = iw("Rajah 1 · Tambah dan tolak lajur demi lajur. Pilih soalan P1 hingga P4 dan operasi.",
  "Rajah interaktif penambahan dan penolakan dalam asas lima, dua, lapan dan tiga dengan bawa dan pinjam pada setiap lajur",
  { mod: "tambah", pasangan: [{ x: "342", y: "124", b: 5 }, { x: "1011", y: "110", b: 2 }, { x: "657", y: "235", b: 8 }, { x: "2102", y: "1021", b: 3 }] });
const R_LAMPU = iw("Rajah 1 · Enam mentol sebagai digit asas 2. Kira dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif enam mentol; mentol hidup mewakili digit 1 dan mentol padam mewakili 0, gelongsor N dari 0 hingga 63",
  { mod: "lampu", bit: 6, cabar: true, awal: { n: 0 } });
const R_JAMB = iw("Rajah 1 · Jambatan asas: tukar ke asas 10 dahulu, kemudian ke asas sasaran.",
  "Rajah interaktif menukar nombor asas tiga, lima atau dua kepada asas sepuluh, kemudian kepada asas 2, 4 atau 8 dengan pembahagian berulang",
  { mod: "jambatan", senarai: [{ d: "2120", b: 3 }, { d: "431", b: 5 }, { d: "110110", b: 2 }], asas: [2, 4, 8], awal: { i: 0, b: 2 } });

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Bilik Guli", sk:"2.1.1 Mewakil nombor dalam pelbagai asas", lampiran:"blok",
 kadNama:"Asas Nombor", kadEm:"\u{1F9F1}", kadFakta:"Asas ialah saiz setiap kumpulan. Dalam asas 5, setiap 5 biji dikumpul menjadi 1 di lajur kiri, jadi digit yang dibenarkan hanya 0 hingga 4.",
 bosKadNama:"Nilai Tempat", bosKadEm:"\u{1F4CF}", bosKadFakta:"Nilai tempat dalam asas b ialah kuasa b: 1, b, b², b³ dan seterusnya, bermula dari kanan.",
 soalan:[
 {j:"pilih",t:"Digit yang boleh digunakan dalam asas 5 ialah:",p:["0, 1, 2, 3 dan 4","1, 2, 3, 4 dan 5","0, 1, 2, 3, 4 dan 5","0 hingga 9"],b:0,u:"Dalam asas 5, lima biji dikumpul menjadi satu kumpulan di lajur kiri, jadi digit setiap lajur ialah 0 hingga 4."},
 {j:"pilih",t:"Antara nombor berikut, yang manakah TIDAK sah dalam asas 3?",p:[A("2130",3),A("2120",3),A("1012",3),A("2001",3)],b:0,u:"Digit asas 3 ialah 0, 1 dan 2 sahaja. Nombor "+A("2130",3)+" mengandungi digit 3, jadi ia tidak sah."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan N = 13 dan asas 5. Berapakah digit dalam lajur nilai tempat 5?",tol:0.01,b:2,u:"13 biji membentuk 2 kumpulan lima (10 biji) dan berbaki 3. Digit lajur 5 ialah 2, jadi 13 = "+A("23",5)+".",kira:()=>Math.floor(13/5)},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan N = 13 dan asas 2. Nombor 13 dalam asas 2 ialah:",p:[S(13,2),A("1011",2),A("1110",2),A("111",2)],b:0,u:"13 = 8 + 4 + 1, iaitu 1 × 8 + 1 × 4 + 0 × 2 + 1 × 1. Maka 13 = "+S(13,2)+".",kira:()=>keAsas(13,2)==="1101"},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan N = 20 dan asas 3. Berapakah bilangan digit dalam nombor yang terhasil?",tol:0.01,b:3,u:"20 = 2 × 9 + 0 × 3 + 2 × 1, jadi 20 = "+S(20,3)+", iaitu 3 digit.",kira:()=>keAsas(20,3).length},
 {j:"pilih",t:"Nilai tempat dalam asas 8, bermula dari kanan, ialah:",p:["1, 8, 64, 512","1, 8, 16, 24","8, 16, 32, 64","1, 10, 100, 1000"],b:0,u:"Nilai tempat ialah kuasa 8: 8⁰ = 1, 8¹ = 8, 8² = 64 dan 8³ = 512."},
 {j:"pilih",t:"Asas suatu sistem nombor menunjukkan:",p:["Saiz kumpulan sebelum beralih ke lajur kiri","Bilangan digit dalam nombor yang ditulis","Digit terbesar yang boleh digunakan dalam nombor","Nilai digit yang berada di sebelah kiri sekali"],b:0,u:"Asas b bermaksud setiap b unit dikumpul menjadi 1 unit di lajur kiri. Digit terbesar ialah b − 1, bukan b."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan N = 40 dan asas 8. Berapakah digit dalam lajur nilai tempat 8?",tol:0.01,b:5,u:"40 = 5 × 8 + 0, jadi 40 = "+S(40,8)+". Digit lajur 8 ialah 5.",kira:()=>Math.floor(40/8)}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang "+A("23",5)+".",p:["Digit 2 berada pada nilai tempat 5","Nilainya dalam asas 10 ialah 13","Digit 3 mewakili 3 × 1","Nilainya dalam asas 10 ialah 23","Digit 5 boleh muncul dalam asas 5","Nilai tempat kedua ialah 10"],b:[0,1,2],u:A("23",5)+" = 2 × 5 + 3 × 1 = 13. Asas 5 tidak mempunyai digit 5, dan nilai tempat kedua ialah 5, bukan 10.",kira:()=>dariAsas("23",5)===13}},

{n:2, tempat:"Jadual Tempat", sk:"2.1.1 Nilai tempat, nilai digit dan nilai nombor", lampiran:"nilai",
 kadNama:"Nilai Digit", kadEm:"\u{1F522}", kadFakta:"Nilai digit = digit × nilai tempat. Dalam 2341₅, digit 3 berada pada nilai tempat 5² = 25, jadi nilai digitnya 75.",
 bosKadNama:"Nilai Nombor", bosKadEm:"\u{2795}", bosKadFakta:"Nilai nombor dalam asas 10 ialah hasil tambah semua nilai digit.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih "+A("2341",5)+". Berapakah nilai tempat bagi digit 3?",tol:0.01,b:25,u:"Dari kanan, nilai tempat asas 5 ialah 1, 5, 25 dan 125. Digit 3 berada pada kedudukan ketiga, iaitu 5² = 25.",kira:()=>Math.pow(5,2)},
 {j:"nombor",t:"Dalam Rajah 1, pilih "+A("2341",5)+". Berapakah nilai digit bagi digit 3?",tol:0.01,b:75,u:"Nilai digit = digit × nilai tempat = 3 × 25 = 75.",kira:()=>3*25},
 {j:"nombor",t:"Dalam Rajah 1, berapakah nilai "+A("2341",5)+" dalam asas 10?",tol:0.01,b:346,u:"2 × 125 + 3 × 25 + 4 × 5 + 1 × 1 = 250 + 75 + 20 + 1 = 346.",kira:()=>dariAsas("2341",5)},
 {j:"nombor",t:"Dalam Rajah 1, pilih "+A("101101",2)+". Berapakah nilainya dalam asas 10?",tol:0.01,b:45,u:"Jumlahkan nilai tempat yang digitnya 1: 32 + 8 + 4 + 1 = 45.",kira:()=>dariAsas("101101",2)},
 {j:"nombor",t:"Dalam Rajah 1, pilih "+A("725",8)+". Berapakah nilai digit bagi digit 7?",tol:0.01,b:448,u:"Digit 7 berada pada nilai tempat 8² = 64. Nilai digit = 7 × 64 = 448.",kira:()=>7*64},
 {j:"pilih",t:"Nilai tempat bagi digit paling kiri dalam "+A("1202",3)+" ialah:",p:["3<sup>3</sup> = 27","3<sup>2</sup> = 9","3<sup>4</sup> = 81","10<sup>3</sup> = 1000"],b:0,u:"Nombor itu ada empat digit. Dari kanan, nilai tempatnya 3⁰, 3¹, 3² dan 3³, jadi digit paling kiri berada pada 3³ = 27."},
 {j:"nombor",t:"Tukar "+A("1202",3)+" kepada asas 10.",tol:0.01,b:47,u:"1 × 27 + 2 × 9 + 0 × 3 + 2 × 1 = 27 + 18 + 0 + 2 = 47.",kira:()=>dariAsas("1202",3)},
 {j:"pilih",t:"Seorang murid berkata nilai "+A("34",5)+" ialah 34 kerana digitnya 3 dan 4. Apakah kesilapannya?",p:["Digit 3 bernilai 3 × 5, jadi nilainya 15 + 4 = 19","Digit 3 bernilai 3 × 10, jadi nilainya memang 34","Digit 4 bernilai 4 × 5, jadi nilainya 3 + 20 = 23","Nombor itu tidak sah kerana ada digit 4"],b:0,u:"Dalam asas 5, lajur kedua bernilai 5, bukan 10. Maka "+A("34",5)+" = 3 × 5 + 4 = 19.",kira:()=>dariAsas("34",5)===19}],
 bos:{j:"nombor",t:"Nombor "+A("3k4",5)+" bersamaan dengan 99 dalam asas 10. Cari digit k.",tol:0.01,b:4,u:"3 × 25 + k × 5 + 4 = 99, jadi 5k = 99 − 79 = 20 dan k = 4. Semak: "+A("344",5)+" = 75 + 20 + 4 = 99.",kira:()=>{for(let k=0;k<5;k++) if(75+5*k+4===99) return k;}}},

{n:3, tempat:"Tangga Baki", sk:"2.1.2 Menukar nombor daripada satu asas kepada asas lain", lampiran:"tukar",
 kadNama:"Bahagi Berulang", kadEm:"\u{1FA9C}", kadFakta:"Untuk menukar nombor asas 10 kepada asas b, bahagi dengan b berulang kali sehingga hasil bahagi 0. Baki dibaca dari bawah ke atas.",
 bosKadNama:"Kumpul Tiga", bosKadEm:"\u{1F465}", bosKadFakta:"Oleh sebab 8 = 2³, setiap tiga digit asas 2 (dari kanan) menjadi satu digit asas 8.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, tetapkan N = 100 dan asas 5. Hasil penukarannya ialah:",p:[S(100,5),A("1100",5),A("4000",5),A("2400",5)],b:0,u:"100 ÷ 5 = 20 baki 0, 20 ÷ 5 = 4 baki 0, 4 ÷ 5 = 0 baki 4. Baca dari bawah: "+S(100,5)+".",kira:()=>keAsas(100,5)==="400"},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan N = 77 dan asas 8. Hasil penukarannya ialah:",p:[S(77,8),A("117",8),A("151",8),A("1101",8)],b:0,u:"77 ÷ 8 = 9 baki 5, 9 ÷ 8 = 1 baki 1, 1 ÷ 8 = 0 baki 1. Baca dari bawah: "+S(77,8)+".",kira:()=>keAsas(77,8)==="115"},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan N = 45 dan asas 3. Hasil penukarannya ialah:",p:[S(45,3),A("2100",3),A("1020",3),A("210",3)],b:0,u:"45 ÷ 3 = 15 baki 0, 15 ÷ 3 = 5 baki 0, 5 ÷ 3 = 1 baki 2, 1 ÷ 3 = 0 baki 1. Baca dari bawah: "+S(45,3)+".",kira:()=>keAsas(45,3)==="1200"},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan N = 156 dan asas 2. Berapakah bilangan digit 1 dalam jawapan?",tol:0.01,b:4,u:"156 = "+S(156,2)+" (128 + 16 + 8 + 4). Terdapat empat digit 1.",kira:()=>[...keAsas(156,2)].filter(x=>x==="1").length},
 {j:"pilih",t:"Mengapakah baki dibaca dari bawah ke atas dalam kaedah pembahagian berulang?",p:["Baki terakhir ialah digit bagi nilai tempat tertinggi","Baki pertama ialah digit yang paling kiri","Supaya jawapan menjadi nombor yang lebih kecil","Pembahagian dilakukan dari digit paling kiri"],b:0,u:"Baki pertama ialah bilangan unit yang tidak cukup untuk satu kumpulan, iaitu digit nilai tempat 1 (paling kanan). Baki terakhir ialah digit bagi nilai tempat tertinggi."},
 {j:"pilih",t:"Tukar 37 (asas 10) kepada asas 2 menggunakan nilai tempat.",p:[S(37,2),A("101001",2),A("100110",2),A("110001",2)],b:0,u:"37 = 32 + 4 + 1. Letakkan 1 pada nilai tempat 32, 4 dan 1, dan 0 pada yang lain: "+S(37,2)+".",kira:()=>keAsas(37,2)==="100101"},
 {j:"pilih",t:"Tukar "+A("110101",2)+" kepada asas 8 dengan mengumpulkan tiga digit dari kanan.",p:[A("65",8),A("53",8),A("56",8),A("35",8)],b:0,u:"Kumpulan dari kanan: 101 = 5 dan 110 = 6. Maka "+A("110101",2)+" = "+A("65",8)+".",kira:()=>keAsas(dariAsas("110101",2),8)==="65"},
 {j:"susun",t:"Susun langkah menukar nombor asas 10 kepada asas b dengan pembahagian berulang.",p:["Bahagi nombor itu dengan b dan catat bakinya","Bahagi hasil bahagi dengan b dan catat baki baharu","Ulang sehingga hasil bahagi menjadi 0","Tulis semua baki dari bawah ke atas"],b:[0,1,2,3],u:"Pembahagian diulang sehingga hasil bahagi sifar. Baki yang terakhir ialah digit paling kiri."}],
 bos:{j:"pilih",t:"Tukar 200 (asas 10) kepada asas 8.",p:[S(200,8),A("301",8),A("3100",8),A("130",8)],b:0,u:"200 ÷ 8 = 25 baki 0, 25 ÷ 8 = 3 baki 1, 3 ÷ 8 = 0 baki 3. Baca dari bawah: "+S(200,8)+". Semak: 3 × 64 + 1 × 8 = 200.",kira:()=>keAsas(200,8)==="310"}},

{n:4, tempat:"Kaunter Bawa", sk:"2.1.3 Tambah dan tolak dalam pelbagai asas", lampiran:"tambah",
 kadNama:"Bawa 1", kadEm:"\u{2795}", kadFakta:"Dalam asas b, jika jumlah satu lajur ialah b atau lebih, tolak b dan bawa 1 ke lajur kiri.",
 bosKadNama:"Pinjam b", bosKadEm:"\u{2796}", bosKadFakta:"Dalam penolakan asas b, meminjam 1 daripada lajur kiri menambah b (bukan 10) kepada lajur semasa.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih P1 dan operasi tambah. "+A("342",5)+" + "+A("124",5)+" = ?",p:[S(dariAsas("342",5)+dariAsas("124",5),5),A("466",5),A("1011",5),A("421",5)],b:0,u:"Lajur 1: 2 + 4 = 6 = 5 + 1, tulis 1 bawa 1. Lajur 5: 4 + 2 + 1 = 7, tulis 2 bawa 1. Lajur 25: 3 + 1 + 1 = 5, tulis 0 bawa 1. Jawapan "+A("1021",5)+".",kira:()=>keAsas(dariAsas("342",5)+dariAsas("124",5),5)==="1021"},
 {j:"pilih",t:"Dalam Rajah 1, pilih P1 dan operasi tolak. "+A("342",5)+" − "+A("124",5)+" = ?",p:[S(dariAsas("342",5)-dariAsas("124",5),5),A("222",5),A("218",5),A("123",5)],b:0,u:"Lajur 1: 2 < 4, pinjam 5: 7 − 4 = 3. Lajur 5: 3 − 2 = 1. Lajur 25: 3 − 1 = 2. Jawapan "+A("213",5)+".",kira:()=>keAsas(dariAsas("342",5)-dariAsas("124",5),5)==="213"},
 {j:"pilih",t:"Dalam Rajah 1, pilih P2 dan operasi tambah. "+A("1011",2)+" + "+A("110",2)+" = ?",p:[S(17,2),A("1121",2),A("10011",2),A("1101",2)],b:0,u:"Dalam asas 2, 1 + 1 = "+A("10",2)+" (tulis 0, bawa 1). Semak dalam asas 10: 11 + 6 = 17 = "+S(17,2)+".",kira:()=>dariAsas("1011",2)+dariAsas("110",2)===17},
 {j:"pilih",t:"Dalam Rajah 1, pilih P3 dan operasi tolak. "+A("657",8)+" − "+A("235",8)+" = ?",p:[S(dariAsas("657",8)-dariAsas("235",8),8),A("432",8),A("412",8),A("322",8)],b:0,u:"Tiada pinjaman diperlukan: 7 − 5 = 2, 5 − 3 = 2, 6 − 2 = 4. Jawapan "+A("422",8)+".",kira:()=>keAsas(dariAsas("657",8)-dariAsas("235",8),8)==="422"},
 {j:"pilih",t:"Dalam Rajah 1, pilih P4 dan operasi tambah. "+A("2102",3)+" + "+A("1021",3)+" = ?",p:[S(dariAsas("2102",3)+dariAsas("1021",3),3),A("3123",3),A("10120",3),A("11200",3)],b:0,u:"Lajur 1: 2 + 1 = 3, tulis 0 bawa 1. Lajur 3: 0 + 2 + 1 = 3, tulis 0 bawa 1. Lajur 9: 1 + 0 + 1 = 2. Lajur 27: 2 + 1 = 3, tulis 0 bawa 1. Jawapan "+A("10200",3)+".",kira:()=>keAsas(dariAsas("2102",3)+dariAsas("1021",3),3)==="10200"},
 {j:"pilih",t:"Dalam penambahan asas 5, satu lajur memberi 4 + 3 = 7. Apakah yang ditulis dalam lajur itu?",p:["Tulis 2, bawa 1 ke lajur kiri","Tulis 7 dan tiada nombor dibawa","Tulis 1 dan bawa 2 ke lajur kiri","Tulis 3 dan bawa 4 ke lajur kiri"],b:0,u:"7 = 1 × 5 + 2. Satu kumpulan lima dibawa ke lajur kiri dan bakinya 2 ditulis."},
 {j:"pilih",t:"Dalam penolakan asas 8, apabila lajur semasa meminjam 1 daripada lajur kiri, lajur semasa bertambah sebanyak:",p:["8","10","1","16"],b:0,u:"Satu unit di lajur kiri bersamaan 8 unit di lajur semasa dalam asas 8."},
 {j:"pilih",t:"Hitung "+A("1101",2)+" + "+A("111",2)+".",p:[S(20,2),A("10010",2),A("11100",2),A("1212",2)],b:0,u:"13 + 7 = 20 dalam asas 10, iaitu 16 + 4 = "+S(20,2)+". Digit 2 tidak wujud dalam asas 2.",kira:()=>dariAsas("1101",2)+dariAsas("111",2)===20}],
 bos:{j:"pilih",t:"Hitung "+A("4301",5)+" − "+A("2343",5)+".",p:[S(dariAsas("4301",5)-dariAsas("2343",5),5),A("2042",5),A("1413",5),A("2403",5)],b:0,u:"Lajur 1: 1 < 3, pinjam: 6 − 3 = 3. Lajur 5: 0 − 1 perlu pinjam: 4 − 4 = 0. Lajur 25: 2 < 3, pinjam: 7 − 3 = 4. Lajur 125: 3 − 2 = 1. Jawapan "+A("1403",5)+".",kira:()=>keAsas(dariAsas("4301",5)-dariAsas("2343",5),5)==="1403"}},

{n:5, tempat:"Bilik Kawalan", sk:"2.1.4 Masalah asas nombor (rutin kompleks)", lampiran:"lampu",
 kadNama:"Binari", kadEm:"\u{1F4BB}", kadFakta:"Komputer menyimpan nombor dalam asas 2 kerana setiap suis hanya ada dua keadaan: hidup (1) atau padam (0).",
 bosKadNama:"Asas Tersembunyi", bosKadEm:"\u{1F50E}", bosKadFakta:"Jika dua nombor dalam asas berbeza mewakili kuantiti yang sama, tukar kedua-duanya kepada asas 10 dan bentuk persamaan.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, mentol menyala mengikut corak hidup, padam, hidup, hidup, padam, hidup. Nombor manakah (asas 10) yang diwakili? Kira dahulu, kemudian semak.",tol:0.01,b:45,u:"Corak itu ialah "+A("101101",2)+" = 32 + 8 + 4 + 1 = 45.",kira:()=>dariAsas("101101",2)},
 {j:"nombor",t:"Dalam Rajah 1, berapakah bilangan mentol yang hidup apabila N = 50?",tol:0.01,b:3,u:"50 = 32 + 16 + 2 = "+S(50,2)+". Tiga mentol hidup.",kira:()=>[...keAsas(50,2)].filter(x=>x==="1").length},
 {j:"nombor",t:"Dalam Rajah 1, apakah nombor terbesar (asas 10) yang boleh diwakili oleh enam mentol?",tol:0.01,b:63,u:"Semua mentol hidup: "+A("111111",2)+" = 32 + 16 + 8 + 4 + 2 + 1 = 63, iaitu 2⁶ − 1.",kira:()=>Math.pow(2,6)-1},
 {j:"nombor",t:"Sebuah kedai membungkus guli dalam beg berisi 5 biji, kotak berisi 25 biji dan peti berisi 125 biji. Kedai itu ada 2 peti, 3 kotak, 4 beg dan 1 biji lagi. Berapakah jumlah guli?",tol:0.01,b:346,u:"Ini ialah "+A("2341",5)+" = 2 × 125 + 3 × 25 + 4 × 5 + 1 = 346.",kira:()=>dariAsas("2341",5)},
 {j:"nombor",t:"Sebuah kilang menyusun 8 biji telur sedulang dan 8 dulang sekotak. Berapakah bilangan kotak penuh bagi 300 biji telur?",tol:0.01,b:4,u:"300 = "+S(300,8)+", iaitu 4 kotak (4 × 64 = 256), 5 dulang (40) dan 4 biji.",kira:()=>Math.floor(300/64)},
 {j:"nombor",t:"Hitung "+A("37",8)+" + "+A("101",2)+" dan berikan jawapan dalam asas 10.",tol:0.01,b:36,u:"Tukar setiap nombor dahulu: "+A("37",8)+" = 31 dan "+A("101",2)+" = 5. Jumlahnya 36.",kira:()=>dariAsas("37",8)+dariAsas("101",2)},
 {j:"pilih",t:"Susun "+A("110",2)+", "+A("12",3)+" dan "+A("20",4)+" mengikut tertib menaik.",p:[A("12",3)+", "+A("110",2)+", "+A("20",4),A("110",2)+", "+A("12",3)+", "+A("20",4),A("20",4)+", "+A("110",2)+", "+A("12",3),A("12",3)+", "+A("20",4)+", "+A("110",2)],b:0,u:"Dalam asas 10: "+A("110",2)+" = 6, "+A("12",3)+" = 5 dan "+A("20",4)+" = 8. Tertib menaik: 5, 6, 8.",kira:()=>dariAsas("12",3)<dariAsas("110",2)&&dariAsas("110",2)<dariAsas("20",4)},
 {j:"nombor",t:"Diberi "+A("23",'x')+" = 13 dalam asas 10. Cari nilai asas x.",tol:0.01,b:5,u:"2 × x + 3 = 13, jadi 2x = 10 dan x = 5. Semak: "+A("23",5)+" = 10 + 3 = 13.",kira:()=>(13-3)/2}],
 bos:{j:"nombor",t:"Setiausaha kelab mencatat bilangan ahli sebagai "+A("1021",3)+", manakala bendahari mencatatnya sebagai "+A("54",'x')+". Kedua-dua catatan betul. Cari nilai x.",tol:0.01,b:6,u:A("1021",3)+" = 27 + 0 + 6 + 1 = 34. Maka 5x + 4 = 34, jadi x = 6. Semak: "+A("54",6)+" = 30 + 4 = 34.",kira:()=>(dariAsas("1021",3)-4)/5}},

{n:6, tempat:"Bilik Kod", sk:"2.1.2 / 2.1.4 Penukaran antara asas dan masalah bukan rutin", lampiran:"jamb",
 kadNama:"Jambatan Asas 10", kadEm:"\u{1F309}", kadFakta:"Untuk menukar asas p kepada asas q, tukar ke asas 10 dahulu (nilai nombor), kemudian bahagi berulang dengan q.",
 bosKadNama:"Kod Rahsia", bosKadEm:"\u{1F510}", bosKadFakta:"Sistem kod boleh dibina dengan mana-mana asas: setiap simbol mewakili satu digit, dan kedudukan menentukan nilai tempatnya.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih "+A("2120",3)+" dan asas 8. Hasil penukarannya ialah:",p:[S(dariAsas("2120",3),8),A("150",8),A("69",8),A("115",8)],b:0,u:A("2120",3)+" = 54 + 9 + 6 + 0 = 69. Kemudian 69 = 1 × 64 + 0 × 8 + 5 = "+S(69,8)+".",kira:()=>keAsas(dariAsas("2120",3),8)==="105"},
 {j:"nombor",t:"Dalam Rajah 1, pilih "+A("431",5)+". Berapakah nilai nombor itu dalam asas 10?",tol:0.01,b:116,u:"4 × 25 + 3 × 5 + 1 = 100 + 15 + 1 = 116.",kira:()=>dariAsas("431",5)},
 {j:"pilih",t:"Dalam Rajah 1, tukar "+A("431",5)+" kepada asas 4.",p:[S(116,4),A("3110",4),A("1301",4),A("1130",4)],b:0,u:"116 = 1 × 64 + 3 × 16 + 1 × 4 + 0 = "+S(116,4)+".",kira:()=>keAsas(dariAsas("431",5),4)==="1310"},
 {j:"pilih",t:"Dalam Rajah 1, tukar "+A("110110",2)+" kepada asas 8.",p:[S(54,8),A("54",8),A("36",8),A("63",8)],b:0,u:"Kumpul tiga digit dari kanan: 110 = 6 dan 110 = 6, jadi "+S(54,8)+". Nilainya 54 dalam asas 10, bukan "+A("54",8)+".",kira:()=>keAsas(dariAsas("110110",2),8)==="66"},
 {j:"pilih",t:"Mengapakah penukaran daripada asas 3 kepada asas 8 biasanya melalui asas 10?",p:["Kita lebih mudah mengira dalam asas 10","Nombor asas 3 tidak boleh ditukar kepada asas lain","Asas 8 hanya boleh menerima nombor daripada asas 10","Nombor 3 dan 8 kedua-duanya ialah nombor perdana"],b:0,u:"Kita mengira dengan selesa dalam asas 10, jadi asas 10 dijadikan perantara. Kaedah kumpul digit hanya pantas apabila satu asas ialah kuasa asas yang lain, seperti 2 dan 8."},
 {j:"pilih",t:"Antara nombor berikut, yang manakah nilainya paling besar?",p:[A("1000",3),A("100",5),A("30",8),A("10110",2)],b:0,u:"Dalam asas 10: "+A("1000",3)+" = 27, "+A("100",5)+" = 25, "+A("30",8)+" = 24 dan "+A("10110",2)+" = 22.",kira:()=>dariAsas("1000",3)>Math.max(dariAsas("100",5),dariAsas("30",8),dariAsas("10110",2))},
 {j:"pilih",t:"Kaedah pantas menukar nombor asas 2 kepada asas 8 ialah:",p:["Kumpulkan tiga digit bermula dari kanan","Kumpulkan dua digit bermula dari kanan","Kumpulkan tiga digit bermula dari kiri","Darabkan setiap digit dengan 8"],b:0,u:"8 = 2³, jadi setiap tiga digit binari membentuk satu digit oktal. Mula dari kanan supaya nilai tempat sejajar."},
 {j:"nombor",t:"Seorang murid mencipta kod warna dalam asas 4: merah = 0, kuning = 1, hijau = 2 dan biru = 3. Apakah nilai (asas 10) bagi kod hijau, biru, merah?",tol:0.01,b:44,u:"Kod itu ialah "+A("230",4)+" = 2 × 16 + 3 × 4 + 0 = 44.",kira:()=>dariAsas("230",4)}],
 bos:{j:"buka",
  t:"Reka satu sistem kod rahsia menggunakan asas selain 10, contohnya kod lampu, kod warna atau kod bunyi.",
  arahan:"Nyatakan asas yang dipilih dan simbol bagi setiap digit. Tunjukkan cara mengekod satu nombor (contohnya 100) dan cara menyahkodnya semula ke asas 10 dengan nilai tempat. Terangkan mengapa asas itu sesuai untuk situasi awak dan berapakah nombor terbesar bagi bilangan simbol tertentu.",
  u:"Jawapan TP6 yang kukuh memilih asas yang munasabah (kurang daripada 10), menukar nombor dengan pembahagian berulang dan menyemaknya dengan nilai tempat, dan menerangkan kekangan sistem seperti nombor terbesar = bᵏ − 1 bagi k simbol."}}
];

module.exports = {
  id:"m4b2", tingkatan:4, kod:"2.0 Asas Nombor",
  tajuk:"Kilang Asas",
  subtajuk:"Matematik Ting. 4 · Bab 2 Asas Nombor",
  spi:SPI,
  ulasan:{
   1:"{n} mengetahui maksud asas nombor, digit yang dibenarkan dalam sesuatu asas, dan nilai tempat sebagai kuasa asas. Langkah seterusnya ialah menentukan nilai digit dan nilai nombor.",
   2:"{n} memahami nilai tempat, nilai digit dan nilai nombor dalam pelbagai asas, dan dapat menukarnya kepada asas 10. Perlu lebih latihan penukaran dengan pembahagian berulang.",
   3:"{n} boleh menukar nombor daripada satu asas kepada asas lain menggunakan pembahagian berulang dan nilai tempat. Sudah bersedia untuk operasi tambah dan tolak dalam pelbagai asas.",
   4:"{n} mampu menambah dan menolak nombor dalam pelbagai asas dengan bawa dan pinjam yang betul. Seterusnya, latih masalah yang menggabungkan beberapa asas.",
   5:"{n} dapat menyelesaikan masalah rutin yang kompleks seperti mencari asas yang tidak diketahui dan membandingkan nombor dalam asas berbeza. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya mereka sistem kod sendiri berdasarkan asas nombor dan menerangkan cara mengekod serta menyahkod dengan nilai tempat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Asas Nombor. Cadangan: ulang hentian pertama dengan Rajah 1 dan kumpulkan guli sebenar mengikut asas 2 dan asas 5 bersama rakan sebaya."
  },
  lampiran:{ blok:R_BLOK, nilai:R_NILAI, tukar:R_TUKAR, tambah:R_TAMBAH, lampu:R_LAMPU, jamb:R_JAMB },
  aras:ARAS
};
