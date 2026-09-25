/* Sumber kandungan — Matematik KSSM Tingkatan 3, Bab 2 Bentuk Piawai.
   Fail ini disunting tangan. Jalankan `node bina.js m3b2` untuk menyemaknya
   dan menghasilkan bank-m3b2.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 3, Bahagian Pembangunan Kurikulum, muka 37 (dskp/matematik-t3.pdf).

   Tulis jawapan betul pada indeks 0. Medan `kira` ialah semakan bebas untuk
   audit (tidak dimasukkan ke bank): tools/semak-jawapan.js. */
const { s } = require("./_k");
const bunda = (x, n) => parseFloat(x.toPrecision(n));   /* pembundaran bebas untuk semakan */

const SPI = [
"Mempamerkan pengetahuan asas tentang angka bererti dan bentuk piawai.",
"Mempamerkan kefahaman tentang angka bererti dan bentuk piawai.",
"Mengaplikasikan kefahaman tentang angka bererti dan bentuk piawai untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang bentuk piawai dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang bentuk piawai dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang bentuk piawai dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran: rajah interaktif ---------- */

const R_AB1 = {
  jenis:"interaktif", w:"ab", nombor:"0.030457", ab:5,
  kapsyen:"Rajah 1 · Gerakkan gelongsor. Angka bererti diserlahkan dan nombor dibundarkan.",
  alt:"Rajah interaktif angka bererti bagi nombor 0.030457; gelongsor menukar bilangan angka bererti"
};
const R_AB2 = {
  jenis:"interaktif", w:"ab", nombor:"5264", ab:4,
  kapsyen:"Rajah 1 · Gerakkan gelongsor untuk membundarkan 5 264 kepada bilangan angka bererti yang dipilih.",
  alt:"Rajah interaktif pembundaran nombor 5264 kepada bilangan angka bererti yang dipilih"
};
const R_PIAWAI1 = {
  jenis:"interaktif", w:"piawai", nombor:"0.000345", unit:"m",
  kapsyen:"Rajah 1 · Anjak titik perpuluhan dengan gelongsor. Cari bila nombor menjadi bentuk piawai.",
  alt:"Rajah interaktif nombor 0.000345 meter; gelongsor menganjak titik perpuluhan dan menukar kuasa 10"
};
const R_PIAWAI2 = {
  jenis:"interaktif", cabar:true, w:"piawai", nombor:"384400000", unit:"m",
  kapsyen:"Rajah 1 · Jarak purata Bulan dari Bumi. Anjak titik perpuluhan untuk mendapat bentuk piawai.",
  alt:"Rajah interaktif jarak Bulan dari Bumi 384400000 meter; gelongsor menganjak titik perpuluhan"
};
const R_PIAWAI3 = {
  jenis:"interaktif", cabar:true, w:"piawai", nombor:"0.000000075", unit:"m",
  kapsyen:"Rajah 1 · Saiz sejenis virus dalam meter. Anjak titik perpuluhan dengan gelongsor.",
  alt:"Rajah interaktif saiz virus 0.000000075 meter; gelongsor menganjak titik perpuluhan"
};

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Kaunter Digit", sk:"2.1.1 Angka bererti", lampiran:"ab1",
 kadNama:"Sifar Diam", kadEm:"\u{0030}\u{FE0F}\u{20E3}", kadFakta:"Sifar di hadapan nombor perpuluhan hanya menjaga kedudukan titik. Ia tidak menambah ketepatan, jadi ia bukan angka bererti.",
 bosKadNama:"Ukuran Tepat", bosKadEm:"\u{1F4CF}", bosKadFakta:"Bacaan 3.50 cm lebih tepat daripada 3.5 cm, kerana sifar akhir itu memberitahu alat ukur mampu membaca hingga perseratus.",
 soalan:[
 {j:"pilih",t:"Berapakah bilangan angka bererti bagi 4 083?",p:["4","3","2","1"],b:0,u:"Sifar di antara dua digit bukan sifar ialah angka bererti, jadi semua empat digit dikira.",kira:()=>4},
 {j:"pilih",t:"Berapakah bilangan angka bererti bagi 0.0072?",p:["2","4","3","1"],b:0,u:"Sifar di hadapan tidak bererti. Hanya 7 dan 2 dikira.",kira:()=>2},
 {j:"pilih",t:"Berapakah bilangan angka bererti bagi 3.50?",p:["3","2","1","4"],b:0,u:"Sifar selepas titik perpuluhan yang berada di hujung ialah bererti, jadi 3, 5 dan 0 semuanya dikira.",kira:()=>3},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan gelongsor kepada 3 angka bererti. Apakah nilai nombor 0.030457 yang dibundarkan itu?",b:0.0305,tol:0.00001,u:"0.030457 kepada 3 angka bererti: 3, 0, 4, dan digit seterusnya ialah 5, jadi 4 dinaikkan menjadi 5. Jawapan 0.0305.",kira:()=>bunda(0.030457,3)},
 {j:"pilih",t:"Nombor manakah yang mempunyai 3 angka bererti?",p:["0.00520","0.0052","5 200","5.2"],b:0,u:"0.00520 ada angka bererti 5, 2 dan 0 (sifar akhir perpuluhan). Nombor 5 200 hanya dua kerana sifar akhir nombor bulat tidak dikira.",kira:()=>true,sama:true},
 {j:"pilih",t:"Berapakah bilangan angka bererti bagi 5 400?",p:["2","4","3","1"],b:0,u:"Bagi nombor bulat, sifar selepas digit bukan sifar yang terakhir tidak dikira, jadi hanya 5 dan 4.",kira:()=>2},
 {j:"pilih",t:"Manakah pernyataan yang BETUL tentang angka bererti?",p:["Sifar di antara dua digit bukan sifar ialah bererti","Semua sifar dalam sesuatu nombor ialah bererti","Sifar di hadapan nombor perpuluhan ialah bererti","Angka bererti hanya wujud dalam nombor perpuluhan"],b:0,u:"Sifar di antara dua digit bukan sifar membawa maklumat, tetapi sifar di hadapan hanya menjaga kedudukan titik."},
 {j:"susun",t:"Susun langkah menentukan bilangan angka bererti bagi 0.00508.",p:["Abaikan semua sifar di hadapan","Angka bererti pertama ialah 5","Sifar antara 5 dan 8 juga bererti","Jumlah angka bererti ialah 3"],b:[0,1,2,3],u:"Digit 5, 0 dan 8 ialah tiga angka bererti."}],
 bos:{j:"banyak",t:"Pilih SEMUA nombor yang mempunyai TEPAT 3 angka bererti.",p:["0.0405","1.20","3 070","0.0003","5 004","12.05"],b:[0,1,2],u:"0.0405: 4, 0, 5. 1.20: 1, 2, 0. 3 070: 3, 0, 7. Manakala 0.0003 ada 1, 5 004 ada 4, dan 12.05 ada 4."}},

{n:2, tempat:"Bengkel Bundar", sk:"2.1.2 Membundarkan kepada angka bererti", lampiran:"ab2",
 kadNama:"Lima ke Atas", kadEm:"\u{2B06}\u{FE0F}", kadFakta:"Peraturan bundar: lihat digit selepas angka bererti terakhir. Jika 5 atau lebih, naikkan angka terakhir. Jika kurang daripada 5, kekalkan.",
 bosKadNama:"Jimat Ketepatan", bosKadEm:"\u{1F3AF}", bosKadFakta:"Bundar terlalu awal dalam pengiraan berantai boleh mengumpul ralat. Jurutera menyimpan semua digit sehingga jawapan akhir sahaja.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan gelongsor kepada 2 angka bererti. Nombor 5 264 dibundarkan menjadi berapa?",b:5300,tol:0.5,u:"5 264: dua digit pertama ialah 5, 2. Digit seterusnya 6 ialah 5 atau lebih, jadi 2 dinaikkan menjadi 3. Jawapan 5 300.",kira:()=>bunda(5264,2)},
 {j:"pilih",t:"Bundarkan 47 365 kepada 2 angka bererti.",p:["47 000","48 000","47 400","47 300"],b:0,u:"Dua digit pertama 4, 7. Digit seterusnya 3 kurang daripada 5, jadi 7 kekal. Jawapan 47 000.",kira:()=>bunda(47365,2)},
 {j:"pilih",t:"Bundarkan 0.030457 kepada 3 angka bererti.",p:["0.0305","0.0304","0.030","0.03"],b:0,u:"3, 0, 4 dan digit seterusnya ialah 5, jadi 4 dinaikkan menjadi 5.",kira:()=>bunda(0.030457,3)},
 {j:"pilih",t:"Bundarkan 9.996 kepada 3 angka bererti.",p:["10.0","9.99","10","9.90"],b:0,u:"9.99 dan digit seterusnya 6 menaikkan 9 kepada 10, jadi keseluruhannya 10.0. Tiga angka bererti perlu ditunjukkan, iaitu 10.0.",kira:()=>bunda(9.996,3),sama:true},
 {j:"nombor",t:"Bundarkan 2.0549 kepada 3 angka bererti.",b:2.05,tol:0.001,u:"2, 0, 5 dan digit seterusnya ialah 4, kurang daripada 5. Jadi 2.05.",kira:()=>bunda(2.0549,3)},
 {j:"pilih",t:"Semasa membundar, digit yang menentukan sama ada angka bererti terakhir dinaikkan ialah:",p:["Digit seterusnya","Digit pertama dalam nombor itu","Sifar pertama yang muncul dalam nombor","Digit di tempat sepuluh dalam nombor"],b:0,u:"Digit seterusnya selepas angka bererti terakhir: 5 atau lebih, naikkan; kurang daripada 5, kekalkan."},
 {j:"pilih",t:"Sebuah stadium menempatkan 87 456 penonton. Bundarkan kepada 3 angka bererti.",p:["87 500","87 400","88 000","87 460"],b:0,u:"8, 7, 4 dan digit seterusnya 5, jadi 4 dinaikkan menjadi 5. Jawapan 87 500.",kira:()=>bunda(87456,3)},
 {j:"pilih",t:"Manakah pembundaran BETUL bagi 0.00847 kepada 2 angka bererti?",p:["0.0085","0.0084","0.0080","0.01"],b:0,u:"8, 4 dan digit seterusnya ialah 7, jadi 4 dinaikkan menjadi 5. Jawapan 0.0085.",kira:()=>bunda(0.00847,2)}],
 bos:{j:"banyak",t:"Pilih SEMUA pembundaran yang BETUL.",p:["6 749 kepada 2 a.b. ialah 6 700","0.06284 kepada 2 a.b. ialah 0.063","3.995 kepada 3 a.b. ialah 4.00","12 555 kepada 2 a.b. ialah 12 000","0.5049 kepada 2 a.b. ialah 0.51","7.084 kepada 3 a.b. ialah 7.1"],b:[0,1,2],u:"12 555 betulnya 13 000 (digit seterusnya 5), 0.5049 betulnya 0.50, dan 7.084 kepada 3 angka bererti ialah 7.08, bukan 7.1."}},

{n:3, tempat:"Anjak Titik", sk:"2.2.1 Mengenal dan menulis nombor dalam bentuk piawai", lampiran:"piawai1",
 kadNama:"Satu hingga Sepuluh", kadEm:"\u{1F51F}", kadFakta:"Bentuk piawai sentiasa memberi nombor A dengan satu digit bukan sifar sebelum titik: 1 ≤ A < 10, didarab dengan kuasa 10.",
 bosKadNama:"Awalan Sains", bosKadEm:"\u{1F52C}", bosKadFakta:"Awalan seperti tera, giga, mikro dan nano hanyalah nama bagi kuasa 10 tertentu: tera ialah 10 kuasa 12, nano ialah 10 kuasa negatif 9.",
 soalan:[
 {j:"pilih",t:"Manakah yang ditulis dalam bentuk piawai?",p:[`3.2 × ${s(10,5)}`,`32 × ${s(10,4)}`,`0.32 × ${s(10,6)}`,`320 × ${s(10,3)}`],b:0,u:"Bentuk piawai memerlukan 1 ≤ A < 10. Hanya 3.2 memenuhi syarat itu."},
 {j:"pilih",t:"Dalam Rajah 1, gerakkan gelongsor kuasa 10 sehingga nombor berada dalam bentuk piawai. Apakah nilai kuasa 10 itu?",p:["−4","4","−3","−5"],b:0,u:"0.000345 = 3.45 × 10 kuasa negatif 4. Titik dianjak 4 tempat ke kanan.",kira:()=>-4},
 {j:"pilih",t:"Tulis 4 500 000 dalam bentuk piawai.",p:[`4.5 × ${s(10,6)}`,`4.5 × ${s(10,5)}`,`45 × ${s(10,5)}`,`4.5 × ${s(10,7)}`],b:0,u:"Titik dianjak 6 tempat ke kiri, iaitu 4.5 × 10 kuasa 6.",kira:()=>4.5e6===4500000},
 {j:"pilih",t:"Tulis 0.00062 dalam bentuk piawai.",p:[`6.2 × ${s(10,"−4")}`,`6.2 × ${s(10,"−5")}`,`6.2 × ${s(10,4)}`,`0.62 × ${s(10,"−3")}`],b:0,u:"Titik dianjak 4 tempat ke kanan, jadi kuasa 10 ialah negatif 4.",kira:()=>6.2e-4===0.00062},
 {j:"pilih",t:`Nombor 7.3 × ${s(10,5)} bersamaan dengan:`,p:["730 000","73 000","7 300 000","0.000073"],b:0,u:"Anjak titik 5 tempat ke kanan: 730 000.",kira:()=>7.3e5===730000},
 {j:"pilih",t:"Nombor 0.00000091 ditulis sebagai 9.1 × 10 dengan kuasa berapa?",p:["−7","7","−8","−6"],b:0,u:"Titik dianjak 7 tempat ke kanan, jadi kuasa 10 ialah negatif 7.",kira:()=>-7},
 {j:"pilih",t:"Untuk menulis 52 000 000 dalam bentuk piawai, titik perpuluhan dianjak ke kiri sebanyak berapa tempat?",p:["7","8","6","5"],b:0,u:"52 000 000 = 5.2 × 10 kuasa 7, jadi titik dianjak 7 tempat.",kira:()=>5.2e7===52000000},
 {j:"pilih",t:"Antara berikut, yang manakah BUKAN bentuk piawai?",p:[`12.5 × ${s(10,3)}`,`1.25 × ${s(10,4)}`,`9.9 × ${s(10,"−2")}`,`1.0 × ${s(10,0)}`],b:0,u:"12.5 tidak berada dalam julat 1 hingga kurang daripada 10. Bentuk piawainya ialah 1.25 × 10 kuasa 4."}],
 bos:{j:"banyak",t:`Pilih SEMUA yang bersamaan dengan 3.6 × ${s(10,4)}.`,p:["36 000",`0.36 × ${s(10,5)}`,`360 × ${s(10,2)}`,"3 600","360 000",`0.036 × ${s(10,4)}`],b:[0,1,2],u:"3.6 × 10 kuasa 4 = 36 000. 0.36 × 10 kuasa 5 dan 360 × 10 kuasa 2 juga 36 000. Yang lain: 3 600, 360 000 dan 360."}},

{n:4, tempat:"Angkasa Raya", sk:"2.2.2 / 2.2.3 Bentuk piawai dalam masalah harian", lampiran:"piawai2",
 kadNama:"Bulan Kita", kadEm:"\u{1F319}", kadFakta:"Jarak purata Bulan dari Bumi ialah kira-kira 384 400 km. Dalam meter ia 3.844 × 10 kuasa 8.",
 bosKadNama:"Cahaya Laju", bosKadEm:"\u{1F4A1}", bosKadFakta:"Cahaya bergerak kira-kira 3 × 10 kuasa 8 meter sesaat, cukup untuk mengelilingi Bumi 7 kali dalam satu saat.",
 soalan:[
 {j:"nombor",t:"Jarak purata Bulan dari Bumi ialah 384 400 000 m. Dalam Rajah 1, apakah kuasa 10 apabila nombor itu dalam bentuk piawai?",b:8,tol:0.5,u:"Titik dianjak 8 tempat ke kiri, jadi 3.844 × 10 kuasa 8.",kira:()=>8},
 {j:"pilih",t:"Tulis jarak 384 400 000 m dalam bentuk piawai.",p:[`3.844 × ${s(10,8)} m`,`3.844 × ${s(10,9)} m`,`38.44 × ${s(10,7)} m`,`0.3844 × ${s(10,8)} m`],b:0,u:"Anjak titik 8 tempat ke kiri untuk mendapat 3.844 (satu digit sebelum titik).",kira:()=>3.844e8===384400000},
 {j:"pilih",t:`Cahaya bergerak sejauh 3 × ${s(10,8)} m sesaat. Berapa jauh cahaya bergerak dalam 2 saat?`,p:[`6 × ${s(10,8)} m`,`6 × ${s(10,16)} m`,`5 × ${s(10,16)} m`,`1.5 × ${s(10,8)} m`],b:0,u:`Darabkan pekali: 3 × 2 = 6, kuasa 10 kekal ${s(10,8)}.`,kira:()=>3e8*2===6e8},
 {j:"pilih",t:"Saiz sebutir sel darah merah ialah 0.000007 m. Dalam bentuk piawai:",p:[`7 × ${s(10,"−6")} m`,`7 × ${s(10,"−5")} m`,`7 × ${s(10,6)} m`,`0.7 × ${s(10,"−5")} m`],b:0,u:"Titik dianjak 6 tempat ke kanan. Perhatikan bahawa 0.7 × 10 kuasa negatif 5 bernilai sama tetapi bukan bentuk piawai.",kira:()=>7e-6===0.000007},
 {j:"nombor",t:`Jisim sebutir pasir ialah 2 × ${s(10,"−3")} g. Berapakah jisim 500 butir pasir dalam gram?`,b:1,tol:0.001,suf:"g",u:`2 × ${s(10,"−3")} = 0.002. Darab 500 memberi 1 g.`,kira:()=>2e-3*500},
 {j:"pilih",t:`Manakah lebih besar, 4.5 × ${s(10,6)} atau 9.1 × ${s(10,5)}?`,p:[`4.5 × ${s(10,6)}`,`9.1 × ${s(10,5)}`,"Kedua-duanya sama","Tidak dapat dibandingkan"],b:0,u:"Bandingkan kuasa 10 dahulu. 4.5 × 10 kuasa 6 = 4 500 000, manakala 9.1 × 10 kuasa 5 = 910 000.",kira:()=>4.5e6>9.1e5},
 {j:"pilih",t:"Penduduk dunia kira-kira 8 000 000 000. Dalam bentuk piawai:",p:[`8 × ${s(10,9)}`,`8 × ${s(10,10)}`,`80 × ${s(10,8)}`,`8 × ${s(10,"−9")}`],b:0,u:"Ada 9 sifar selepas 8, jadi titik dianjak 9 tempat.",kira:()=>8e9===8000000000},
 {j:"susun",t:"Susun langkah menulis 0.0000451 dalam bentuk piawai.",p:["Cari digit bukan sifar pertama, iaitu 4","Anjak titik ke kanan sehingga selepas 4, menjadi 4.51","Kira bilangan tempat dianjak, iaitu 5 tempat",`Tulis 4.51 × ${s(10,"−5")}, kuasa negatif kerana nombor asal kecil`],b:[0,1,2,3],u:"Nombor kecil daripada 1 memberi kuasa 10 yang negatif."}],
 bos:{j:"nombor",t:`Jarak dari Bumi ke Matahari ialah 1.5 × ${s(10,8)} km. Cahaya bergerak 3 × ${s(10,5)} km sesaat. Berapa saat cahaya mengambil masa untuk sampai ke Bumi?`,b:500,tol:0.5,suf:"saat",u:`Masa = jarak ÷ laju = (1.5 × ${s(10,8)}) ÷ (3 × ${s(10,5)}) = 0.5 × ${s(10,3)} = 500 saat.`,kira:()=>1.5e8/3e5}},

{n:5, tempat:"Makmal Nano", sk:"2.2.2 / 2.2.3 Operasi dan masalah kompleks", lampiran:"piawai3",
 kadNama:"Dunia Nano", kadEm:"\u{1F9A0}", kadFakta:"Satu nanometer ialah 10 kuasa negatif 9 meter. Sehelai rambut manusia kira-kira 80 000 nanometer tebalnya.",
 bosKadNama:"Kunci Kuasa 10", bosKadEm:"\u{1F511}", bosKadFakta:"Bentuk piawai memudahkan pengiraan kerana kuasa 10 hanya ditambah atau ditolak, tidak perlu menyalin berpuluh-puluh sifar.",
 soalan:[
 {j:"pilih",t:"Virus berukuran 0.000000075 m. Dalam Rajah 1, apakah kuasa 10 apabila ukuran itu dalam bentuk piawai?",p:["−8","8","−9","−7"],b:0,u:"Titik dianjak 8 tempat ke kanan, jadi 7.5 × 10 kuasa negatif 8.",kira:()=>-8},
 {j:"pilih",t:`Ringkaskan (3 × ${s(10,5)}) × (2 × ${s(10,4)}).`,p:[`6 × ${s(10,9)}`,`6 × ${s(10,20)}`,`5 × ${s(10,9)}`,`6 × ${s(10,1)}`],b:0,u:`Darab pekali 3 × 2 = 6. Tambah indeks 5 + 4 = 9.`,kira:()=>3e5*2e4===6e9},
 {j:"pilih",t:`Ringkaskan (8 × ${s(10,7)}) ÷ (4 × ${s(10,3)}).`,p:[`2 × ${s(10,4)}`,`2 × ${s(10,10)}`,`2 × ${s(10,21)}`,`0.5 × ${s(10,4)}`],b:0,u:`Bahagi pekali 8 ÷ 4 = 2. Tolak indeks 7 − 3 = 4.`,kira:()=>8e7/4e3===2e4},
 {j:"pilih",t:`Ringkaskan (6.5 × ${s(10,6)}) + (2.5 × ${s(10,6)}).`,p:[`9 × ${s(10,6)}`,`9 × ${s(10,12)}`,`4 × ${s(10,6)}`,`16.25 × ${s(10,12)}`],b:0,u:`Kuasa 10 sama, jadi tambah pekali sahaja: 6.5 + 2.5 = 9.`,kira:()=>6.5e6+2.5e6===9e6},
 {j:"nombor",t:`Ungkapan (9 × ${s(10,5)}) + (3 × ${s(10,4)}) ditulis sebagai a × ${s(10,5)}. Cari a.`,b:9.3,tol:0.01,u:`3 × ${s(10,4)} = 0.3 × ${s(10,5)}. Jadi 9 + 0.3 = 9.3.`,kira:()=>(9e5+3e4)/1e5},
 {j:"pilih",t:`Beza antara 5.2 × ${s(10,7)} dan 4.7 × ${s(10,7)} dalam bentuk piawai ialah:`,p:[`5 × ${s(10,6)}`,`0.5 × ${s(10,7)}`,`5 × ${s(10,7)}`,`9.9 × ${s(10,7)}`],b:0,u:`5.2 − 4.7 = 0.5, iaitu 0.5 × ${s(10,7)}. Tetapi 0.5 bukan bentuk piawai, jadi tulis 5 × ${s(10,6)}.`,kira:()=>Math.abs(5.2e7-4.7e7-5e6)<1},
 {j:"nombor",t:`Sebuah kilang menghasilkan 2.5 × ${s(10,4)} cip sehari. Jumlah dalam 40 hari ditulis sebagai a × ${s(10,6)}. Cari a.`,b:1,tol:0.01,u:`2.5 × ${s(10,4)} × 40 = 1 000 000 = 1 × ${s(10,6)}.`,kira:()=>2.5e4*40/1e6},
 {j:"pilih",t:`Diberi p = 4 × ${s(10,"−3")} dan q = 8 × ${s(10,"−5")}. Nilai p ÷ q dalam bentuk piawai ialah:`,p:[`5 × ${s(10,1)}`,`5 × ${s(10,"−8")}`,`0.5 × ${s(10,2)}`,`5 × ${s(10,"−2")}`],b:0,u:`4 ÷ 8 = 0.5 dan kuasa 10: −3 − (−5) = 2, memberi 0.5 × ${s(10,2)} = 50. Bentuk piawainya 5 × ${s(10,1)}.`,kira:()=>Math.abs(4e-3/8e-5-50)<1e-9}],
 bos:{j:"pilih",t:`Siti kata (2 × ${s(10,5)}) × (6 × ${s(10,3)}) = 12 × ${s(10,8)} dan itu bentuk piawai. Apakah kesilapan Siti?`,p:[`Pekali 12 melebihi 10; sepatutnya 1.2 × ${s(10,9)}`,"Indeks mesti ditolak apabila dua nombor didarab","Dia patut menambah 2 dan 6 dahulu sebelum mendarab","Jawapan Siti betul kerana nilainya sama sahaja"],b:0,u:`Pengiraannya betul tetapi 12 melebihi 10. Tulis 12 × ${s(10,8)} sebagai 1.2 × ${s(10,9)}.`}},

{n:6, tempat:"Bilik Reka", sk:"2.2.3 Masalah bukan rutin secara kreatif",
 kadNama:"Nombor Semesta", kadEm:"\u{1F30C}", kadFakta:"Bilangan bintang dalam alam semesta yang boleh dilihat dianggarkan sekitar 10 kuasa 24. Nombor sebesar itu hanya boleh diurus dengan bentuk piawai.",
 bosKadNama:"Pereka Soalan", bosKadEm:"\u{270F}\u{FE0F}", bosKadFakta:"Soalan yang baik meminta murid berfikir tentang saiz sebenar sesuatu, bukan sekadar menukar nombor kepada satu bentuk lain.",
 soalan:[
 {j:"pilih",t:`Antara berikut, yang manakah nilai TERBESAR?`,p:[`1.0 × ${s(10,5)}`,`9.9 × ${s(10,4)}`,`99 × ${s(10,3)}`,`0.98 × ${s(10,5)}`],b:0,u:`Nilainya 100 000, 99 000, 99 000 dan 98 000. Yang paling besar ialah 1.0 × ${s(10,5)}.`,kira:()=>Math.max(1e5,9.9e4,99e3,0.98e5)===1e5},
 {j:"pilih",t:`Sebuah komputer melakukan 2 × ${s(10,9)} pengiraan sesaat. Berapa saat untuk 6 × ${s(10,12)} pengiraan?`,p:[`3 × ${s(10,3)} saat`,`3 × ${s(10,21)} saat`,`1.2 × ${s(10,22)} saat`,`4 × ${s(10,13)} saat`],b:0,u:`Masa = 6 × ${s(10,12)} ÷ 2 × ${s(10,9)} = 3 × ${s(10,3)} saat.`,kira:()=>6e12/2e9===3e3},
 {j:"pilih",t:"Panjang sebuah meja 1.20 m dan lebarnya 0.85 m. Luasnya, dibundarkan kepada 2 angka bererti, ialah:",p:["1.0 m²","1.02 m²","1.1 m²","0.10 m²"],b:0,u:"Luas = 1.20 × 0.85 = 1.02. Kepada 2 angka bererti, 1.0.",kira:()=>bunda(1.2*0.85,2)===1},
 {j:"nombor",t:`Jika x = 5 × ${s(10,"k")} dan x ialah nombor bulat antara 1 000 dan 10 000, cari nilai k.`,b:3,tol:0.5,u:`5 × ${s(10,3)} = 5 000, yang berada antara 1 000 dan 10 000.`,kira:()=>[1,2,3,4,5].filter(k=>{const x=5*Math.pow(10,k);return x>1000&&x<10000;})[0]},
 {j:"pilih",t:`Cahaya Matahari sampai ke Bumi dalam 5 × ${s(10,2)} saat. Berapa minit kira-kira, dibundarkan kepada 2 angka bererti?`,p:["8.3 minit","8.4 minit","8.0 minit","5.0 minit"],b:0,u:"500 ÷ 60 = 8.333... minit. Kepada 2 angka bererti, 8.3.",kira:()=>bunda(500/60,2)===8.3},
 {j:"pilih",t:`Nombor Avogadro ialah 6.02 × ${s(10,23)}. Bilangan atom dalam 2 mol ialah:`,p:[`1.204 × ${s(10,24)}`,`12.04 × ${s(10,23)}`,`6.02 × ${s(10,46)}`,`1.204 × ${s(10,23)}`],b:0,u:`2 × 6.02 = 12.04, jadi 12.04 × ${s(10,23)}. Bentuk piawainya 1.204 × ${s(10,24)}.`,kira:()=>Math.abs(2*6.02-12.04)<1e-9},
 {j:"pilih",t:`Satu tahun cahaya kira-kira 9.46 × ${s(10,12)} km. Bintang A jauhnya 2 tahun cahaya. Bintang B jauhnya 5 × ${s(10,13)} km. Yang manakah lebih jauh?`,p:[`Bintang B, kerana 5 × ${s(10,13)} lebih besar daripada 1.892 × ${s(10,13)}`,"Bintang A, kerana 2 tahun cahaya lebih besar daripada 5","Kedua-duanya sama jauh","Tidak dapat dibandingkan"],b:0,u:`Bintang A: 2 × 9.46 × ${s(10,12)} = 1.892 × ${s(10,13)} km. Bintang B: 5 × ${s(10,13)} km, lebih jauh.`,kira:()=>5e13>2*9.46e12},
 {j:"pilih",t:"Semasa membundarkan 4 950 kepada 2 angka bererti, Ali menjawab 4 900 dan Siti menjawab 5 000. Siapa betul?",p:["Siti, kerana digit seterusnya 5 menaikkan digit 9","Ali, kerana digit 5 sentiasa dibundarkan ke bawah","Kedua-duanya betul kerana cara bundar berbeza","Kedua-duanya salah, jawapan betul ialah 4 950"],b:0,u:"4, 9 dan digit seterusnya ialah 5. Naikkan 9 menjadi 10, jadi 4 9 menjadi 5 0. Jawapannya 5 000.",kira:()=>bunda(4950,2)===5000}],
 bos:{j:"buka",
  t:"Reka satu soalan tentang saiz atau jarak yang sangat besar atau sangat kecil, yang memerlukan bentuk piawai dan sekurang-kurangnya satu operasi darab atau bahagi.",
  arahan:"Tulis soalan awak, penyelesaian langkah demi langkah dalam bentuk piawai, dan bundarkan jawapan akhir kepada bilangan angka bererti yang sesuai. Terangkan mengapa bentuk piawai memudahkan pengiraan itu.",
  u:"Jawapan TP6 yang kukuh mempunyai konteks yang munasabah, pengiraan bentuk piawai yang betul, dan pembundaran yang sesuai dengan data."}}
];

module.exports = {
  id:"m3b2", tingkatan:3, kod:"2.0 Bentuk Piawai",
  tajuk:"Nombor Semesta",
  subtajuk:"Matematik Ting. 3 · Bab 2 Bentuk Piawai",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal pasti angka bererti dalam nombor, termasuk peranan sifar di hadapan, di tengah dan di hujung. Langkah seterusnya ialah membundarkan nombor kepada bilangan angka bererti yang diberi.",
   2:"{n} memahami maksud angka bererti dan boleh membundarkan nombor kepada bilangan angka bererti tertentu. Perlu lebih latihan mengenal bila digit dinaikkan sebelum bergerak ke bentuk piawai.",
   3:"{n} boleh menulis nombor besar dan kecil dalam bentuk piawai dan menukarnya semula. Galakkan menyemak bahawa pekali sentiasa antara 1 dan 10 dan tanda kuasa 10 mengikut arah anjakan titik.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah menggunakan bentuk piawai, seperti jarak dan saiz dalam sains. Seterusnya latih operasi yang menggabungkan pekali dan kuasa 10 sekali gus.",
   5:"{n} dapat melakukan operasi tambah, tolak, darab dan bahagi dalam bentuk piawai dan menyelesaikan masalah yang kompleks. Sudah bersedia untuk masalah bukan rutin dan tugasan mereka cipta.",
   6:"{n} berjaya mereka masalah sendiri yang memerlukan bentuk piawai dan pembundaran yang sesuai, disertai penerangan yang jelas. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Bentuk Piawai. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyebut bilangan angka bererti dengan bimbingan rakan sebaya."
  },
  lampiran:{ ab1:R_AB1, ab2:R_AB2, piawai1:R_PIAWAI1, piawai2:R_PIAWAI2, piawai3:R_PIAWAI3 },
  aras:ARAS
};
