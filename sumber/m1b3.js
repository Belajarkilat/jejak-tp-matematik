/* Sumber kandungan — Matematik KSSM Tingkatan 1, Bab 3 Kuasa Dua, Punca Kuasa Dua,
   Kuasa Tiga dan Punca Kuasa Tiga.
   Fail ini disunting tangan. Jalankan `node bina.js m1b3` untuk menyemaknya
   dan menghasilkan bank-m1b3.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 1, Bahagian Pembangunan Kurikulum, muka 43 (dskp/matematik-t1.pdf).
   Bab ini mempunyai enam tahap penguasaan penuh. Tahap 6 dalam DSKP berbunyi
   "masalah bukan rutin" (tanpa "secara kreatif"), disalin seadanya.

   Semua jawapan berangka dikira dengan kod dalam medan `kira` dan dibandingkan
   oleh tools/semak-jawapan.js. Pilihan yang mengandungi unit isi padu
   (cm³, m³) ditulis tanpa unit dalam pilihan; unit dinyatakan dalam soalan.

   Rajah interaktif menggunakan widget t1petak (widget-m1b3.js). */
const { s } = require("./_k");

const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);

const SPI = [
"Mempamerkan pengetahuan asas tentang kuasa dua, punca kuasa dua, kuasa tiga dan punca kuasa tiga.",
"Mempamerkan kefahaman tentang kuasa dua, punca kuasa dua, kuasa tiga dan punca kuasa tiga.",
"Mengaplikasikan kefahaman tentang kuasa dua, punca kuasa dua, kuasa tiga, dan punca kuasa tiga untuk melaksanakan operasi asas dan gabungan operasi asas aritmetik.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kuasa dua, punca kuasa dua, kuasa tiga dan punca kuasa tiga dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kuasa dua, punca kuasa dua, kuasa tiga dan punca kuasa tiga dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kuasa dua, punca kuasa dua, kuasa tiga dan punca kuasa tiga dalam konteks penyelesaian masalah bukan rutin."];

/* ---------- lampiran: petak dan kubus interaktif ---------- */

const pet = (spec, kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t1petak", kapsyen, alt }, spec, extra || {});
const R_PET1 = pet({ mod: "dua", n: 4, nMaks: 10 },
  "Rajah 1 · Gerakkan gelongsor n. Petak n × n dibina daripada petak kecil.",
  "Rajah interaktif petak n kali n daripada petak kecil; gelongsor n menukar sisi petak dan menunjukkan kuasa dua n");
const R_PET2 = pet({ mod: "sempurna", i: 11 },
  "Rajah 1 · Susun jubin menjadi petak. Kalau tiada baki, bilangan jubin ialah kuasa dua sempurna.",
  "Rajah interaktif jubin disusun menjadi petak terbesar; jubin yang berbaki ditunjukkan dan menentukan sama ada bilangan jubin ialah kuasa dua sempurna");
const R_PET3 = pet({ mod: "tiga", n: 3, nMaks: 6 },
  "Rajah 1 · Gerakkan gelongsor n. Kubus n × n × n dibina daripada kubus kecil.",
  "Rajah interaktif kubus n kali n kali n daripada kubus kecil; gelongsor n menukar sisi kubus dan menunjukkan kuasa tiga n");
const R_PET4 = pet({ mod: "puncadua", i: 4 },
  "Rajah 1 · Tukar luas petak. Kira sisinya dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif petak dengan luas yang boleh ditukar; sisi petak ialah punca kuasa dua bagi luas",
  { cabar: true });
const R_PET5 = pet({ mod: "puncatiga", i: 2 },
  "Rajah 1 · Tukar isi padu kubus. Kira sisinya dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif kubus dengan isi padu yang boleh ditukar; sisi kubus ialah punca kuasa tiga bagi isi padu",
  { cabar: true });
const R_PET6 = pet({ mod: "anggar", i: 4 },
  "Rajah 1 · Tukar nombor. Punca kuasa dua nombor itu dijepit antara dua nombor bulat pada garis nombor.",
  "Rajah interaktif garis nombor yang menunjukkan punca kuasa dua sebuah nombor terletak antara dua nombor bulat berturutan");

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Kilang Jubin", sk:"3.1.1 / 3.2.1 Maksud kuasa dua dan kuasa tiga", lampiran:"pet1",
 kadNama:"Kuasa Dua", kadEm:"\u{2B1C}", kadFakta:"Kuasa dua dinamakan begitu kerana luas petak dikira dengan mendarab sisi dengan dirinya sendiri. Itulah sebabnya 5 kuasa dua ialah 25.",
 bosKadNama:"Kuasa Tiga", bosKadEm:"\u{1F9CA}", bosKadFakta:"Kuasa tiga dinamakan begitu kerana isi padu kubus dikira dengan mendarab sisi sebanyak tiga kali: panjang, lebar dan tinggi yang sama.",
 soalan:[
 {j:"pilih",t:`${s(5,2)} bermaksud:`,p:["5 × 5","5 × 2","5 + 5","5 × 5 × 5"],b:0,u:"Kuasa dua bermaksud nombor itu didarab dengan dirinya sendiri: 5 × 5 = 25."},
 {j:"pilih",t:`Berapakah nilai ${s(7,2)}?`,p:["49","14","77","343"],b:0,u:"7² = 7 × 7 = 49. Awak bukan mendarab 7 dengan 2.",kira:()=>7*7},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan n = 6. Berapakah bilangan petak kecil dalam petak besar itu?",b:36,tol:0.01,u:"Petak besar mempunyai 6 baris dan 6 lajur, jadi 6 × 6 = 36 petak.",kira:()=>6*6},
 {j:"pilih",t:"Sebuah petak segi empat sama bersisi 9 cm. Berapakah luasnya (cm²)?",p:["81","18","36","729"],b:0,u:"Luas = sisi × sisi = 9 × 9 = 81 cm².",kira:()=>9*9},
 {j:"pilih",t:`${s(4,3)} bermaksud:`,p:["4 × 4 × 4","4 × 3","4 + 4 + 4","4 × 4"],b:0,u:"Kuasa tiga bermaksud nombor itu didarab dengan dirinya sebanyak tiga kali: 4 × 4 × 4 = 64."},
 {j:"nombor",t:`Berapakah nilai ${s(3,3)}?`,b:27,tol:0.01,u:"3³ = 3 × 3 × 3 = 9 × 3 = 27.",kira:()=>3*3*3},
 {j:"pilih",t:"Nombor 25 ialah kuasa dua sempurna kerana:",p:["Ia hasil darab 5 dengan dirinya sendiri","Ia boleh dibahagi dengan 5 tanpa baki","Ia ialah nombor ganjil yang besar","Ia lebih besar daripada 20 sahaja"],b:0,u:"Kuasa dua sempurna ialah nombor yang terhasil apabila satu integer didarab dengan dirinya sendiri. 25 = 5 × 5."},
 {j:"susun",t:"Susun langkah mencari luas petak bersisi 6 cm.",p:["Tulis panjang sisi, iaitu 6 cm","Darabkan sisi dengan dirinya: 6 × 6","Dapat luas = 36","Tulis unit luas: 36 cm²"],b:[0,1,2,3],u:"Tulis sisi, darab sisi dengan dirinya, dapatkan nombor, kemudian tulis unit luas."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR.",p:[`${s(3,2)} = 9`,`${s(2,3)} = 8`,`${s(1,2)} = 1`,`${s(4,2)} = 8`,`${s(5,3)} = 15`,`${s(6,2)} = 12`],b:[0,1,2],u:"3² = 9, 2³ = 8 dan 1² = 1 benar. 4² = 16 (bukan 8), 5³ = 125 (bukan 15) dan 6² = 36 (bukan 12). Jangan campur kuasa dengan darab 2 atau 3."}},

{n:2, tempat:"Lantai Petak", sk:"3.1.2 – 3.1.5 / 3.2.2 – 3.2.3 Kuasa dua sempurna, punca dan hubungannya", lampiran:"pet2",
 kadNama:"Petak Sempurna", kadEm:"\u{1F9E9}", kadFakta:"Nombor 1, 4, 9, 16 dan 25 dipanggil kuasa dua sempurna kerana jubinnya boleh disusun menjadi petak penuh tanpa baki.",
 bosKadNama:"Dua Punca", bosKadEm:"\u{1F501}", bosKadFakta:"Setiap nombor positif mempunyai dua punca kuasa dua: satu positif dan satu negatif. Sebab itu 5 kuasa dua dan negatif 5 kuasa dua kedua-duanya 25.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, tetapkan jubin kepada 16. Apakah yang berlaku?",p:["Terbentuk petak 4 × 4 tanpa baki","Terbentuk petak 5 × 5 dengan baki","Terbentuk petak 3 × 3 dengan baki 7","Tiada petak yang dapat dibentuk"],b:0,u:"16 jubin membentuk petak 4 × 4 dengan tepat, jadi 16 ialah kuasa dua sempurna."},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan jubin kepada 20. Nombor 20:",p:["Bukan kuasa dua sempurna, baki 4 jubin","Kuasa dua sempurna kerana 4 × 5","Kuasa dua sempurna kerana 5 × 5","Bukan kuasa dua sempurna, baki 5 jubin"],b:0,u:"Petak terbesar ialah 4 × 4 = 16. Bakinya 20 − 16 = 4 jubin, jadi 20 bukan kuasa dua sempurna.",kira:()=>20-Math.pow(Math.floor(Math.sqrt(20)),2)===4},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan jubin kepada 30. Berapakah bilangan jubin yang berbaki selepas petak terbesar dibentuk?",b:5,tol:0.01,u:"Petak terbesar ialah 5 × 5 = 25, jadi bakinya 30 − 25 = 5 jubin.",kira:()=>30-25},
 {j:"pilih",t:"Antara nombor berikut, yang manakah kuasa dua sempurna?",p:["81","72","90","54"],b:0,u:"81 = 9 × 9. Nombor lain terletak di antara dua kuasa dua sempurna dan tidak sama dengan mana-mana daripadanya.",kira:()=>Math.sqrt(81)%1===0&&Math.sqrt(72)%1!==0&&Math.sqrt(90)%1!==0&&Math.sqrt(54)%1!==0},
 {j:"nombor",t:"Berapakah punca kuasa dua positif bagi 64?",b:8,tol:0.01,u:"8 × 8 = 64, jadi punca kuasa dua positif bagi 64 ialah 8.",kira:()=>Math.sqrt(64)},
 {j:"pilih",t:"Apakah hubungan antara kuasa dua dan punca kuasa dua?",p:["Punca kuasa dua ialah songsangan bagi kuasa dua","Punca kuasa dua sentiasa lebih besar daripada kuasa dua","Kuasa dua dan punca kuasa dua sentiasa sama nilai","Punca kuasa dua ialah kuasa dua ditambah 2"],b:0,u:"5² = 25 dan √25 = 5. Punca kuasa dua 'membatalkan' kuasa dua, seperti tolak membatalkan tambah."},
 {j:"pilih",t:`Berapakah nilai (−7)² ?`,p:["49","−49","14","−14"],b:0,u:"(−7)² = (−7) × (−7) = 49. Negatif didarab negatif memberi positif.",kira:()=>(-7)*(-7)},
 {j:"pilih",t:"Nombor 27 ialah kuasa tiga sempurna kerana:",p:["27 = 3 × 3 × 3","27 = 3 × 3 × 2","27 = 3 × 3","27 = 3 + 3 + 3"],b:0,u:"Kuasa tiga sempurna ialah nombor yang terhasil apabila satu integer didarab tiga kali dengan dirinya. 3 × 3 × 3 = 27."}],
 bos:{j:"pilih",t:"Mengapakah 49 mempunyai dua punca kuasa dua, iaitu +7 dan −7?",p:["Kerana 7 × 7 = 49 dan (−7) × (−7) = 49 juga","Kerana 49 ialah nombor ganjil","Kerana 7 + 7 = 14 dan −7 − 7 = −14","Kerana 49 boleh dibahagi dengan 2"],b:0,u:"Kedua-dua 7 dan −7 memberi 49 apabila dikuasa duakan. Itulah sebabnya punca kuasa dua bagi nombor positif ada dua nilai."}},

{n:3, tempat:"Kalkulator Kubus", sk:"3.1.4 – 3.1.8 / 3.2.4 – 3.2.7 / 3.2.9 Pengiraan, teknologi dan gabungan operasi", lampiran:"pet3",
 kadNama:"Kalkulator", kadEm:"\u{1F9EE}", kadFakta:"Kalkulator saintifik ada butang untuk kuasa dua dan punca. Tetapi awak mesti anggar jawapan dahulu supaya tahu kalau tersalah tekan.",
 bosKadNama:"Punca Perpuluhan", bosKadEm:"\u{1F522}", bosKadFakta:"0.04 = 0.2 × 0.2, jadi punca kuasa dua 0.04 ialah 0.2, bukan 0.02. Punca kuasa dua perpuluhan mempunyai separuh tempat perpuluhan.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan n = 5. Berapakah bilangan kubus kecil dalam kubus besar itu?",b:125,tol:0.01,u:"Isi padu kubus 5 × 5 × 5 = 125 kubus kecil.",kira:()=>5*5*5},
 {j:"nombor",t:`Berapakah nilai ${s(12,2)}?`,b:144,tol:0.01,u:"12 × 12 = 144.",kira:()=>12*12},
 {j:"nombor",t:`Guna kalkulator. Berapakah nilai ${s("2.5",2)}?`,b:6.25,tol:0.001,u:"2.5 × 2.5 = 6.25.",kira:()=>2.5*2.5},
 {j:"nombor",t:"Berapakah nilai punca kuasa tiga bagi 343 (³√343)?",b:7,tol:0.01,u:"7 × 7 × 7 = 343, jadi ³√343 = 7.",kira:()=>Math.cbrt(343)},
 {j:"nombor",t:"Berapakah nilai √(9/16) dalam bentuk perpuluhan?",b:0.75,tol:0.001,u:"√9 = 3 dan √16 = 4, jadi √(9/16) = 3/4 = 0.75.",kira:()=>Math.sqrt(9)/Math.sqrt(16)},
 {j:"nombor",t:"Berapakah nilai √0.09?",b:0.3,tol:0.001,u:"0.3 × 0.3 = 0.09, jadi √0.09 = 0.3 (bukan 0.03).",kira:()=>bunda(Math.sqrt(0.09),3)},
 {j:"pilih",t:`Nilai ${s(3,2)} × ${s(2,3)} ialah:`,p:["72","54","48","36"],b:0,u:"3² = 9 dan 2³ = 8. 9 × 8 = 72.",kira:()=>9*8},
 {j:"nombor",t:"Hitung √81 − ³√8.",b:7,tol:0.01,u:"√81 = 9 dan ³√8 = 2. 9 − 2 = 7.",kira:()=>Math.sqrt(81)-Math.cbrt(8)}],
 bos:{j:"nombor",t:"Hitung (√25 + ³√27)².",b:64,tol:0.01,u:"√25 = 5 dan ³√27 = 3. Kurungan dahulu: 5 + 3 = 8. Kemudian 8² = 64.",kira:()=>Math.pow(Math.sqrt(25)+Math.cbrt(27),2)}},

{n:4, tempat:"Dewan Ubin", sk:"3.1.9 / 3.2.8 Masalah rutin mudah, kuasa dua dan punca kuasa dua", lampiran:"pet4",
 kadNama:"Luas dan Sisi", kadEm:"\u{1F4CF}", kadFakta:"Untuk mencari sisi petak daripada luasnya, guna punca kuasa dua. Untuk mencari luas daripada sisinya, guna kuasa dua. Dua operasi itu saling songsang.",
 bosKadNama:"Ubin Lantai", bosKadEm:"\u{1F3E0}", bosKadFakta:"Kontraktor mengira bilangan ubin lantai dengan membahagi luas lantai dengan luas satu ubin. Luas ubin segi empat sama ialah sisi kuasa dua.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan luas kepada 49. Berapakah panjang sisi petak itu (unit)?",b:7,tol:0.01,u:"Sisi = √49 = 7 unit, kerana 7 × 7 = 49.",kira:()=>Math.sqrt(49)},
 {j:"nombor",t:"Sebuah petak taman berbentuk segi empat sama mempunyai luas 196 m². Berapakah panjang sisinya (m)?",b:14,tol:0.01,suf:"m",u:"Sisi = √196 = 14 m, kerana 14 × 14 = 196.",kira:()=>Math.sqrt(196)},
 {j:"nombor",t:"Sebuah bilik berbentuk segi empat sama bersisi 6.5 m. Berapakah luas bilik itu (m²)?",b:42.25,tol:0.01,suf:"m²",u:"Luas = 6.5 × 6.5 = 42.25 m².",kira:()=>6.5*6.5},
 {j:"nombor",t:"Sebuah ubin lantai berbentuk segi empat sama bersisi 30 cm. Berapakah luas satu ubin (cm²)?",b:900,tol:0.01,suf:"cm²",u:"Luas = 30 × 30 = 900 cm².",kira:()=>30*30},
 {j:"nombor",t:"Seorang pekebun mahu memagar kebun berbentuk segi empat sama yang luasnya 400 m². Berapakah panjang pagar yang diperlukan (m)?",b:80,tol:0.01,suf:"m",u:"Sisi = √400 = 20 m. Panjang pagar ialah perimeter = 4 × 20 = 80 m.",kira:()=>4*Math.sqrt(400)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan luas kepada 144. Berapakah perimeter petak itu (unit)?",b:48,tol:0.01,u:"Sisi = √144 = 12. Perimeter = 4 × 12 = 48 unit.",kira:()=>4*Math.sqrt(144)},
 {j:"pilih",t:"Petak A bersisi 8 cm. Petak B bersisi dua kali panjang sisi petak A. Luas petak B ialah berapa kali luas petak A?",p:["4 kali","2 kali","8 kali","16 kali"],b:0,u:"Petak B bersisi 16 cm, luasnya 16 × 16 = 256 cm². Petak A luasnya 64 cm². 256 ÷ 64 = 4 kali.",kira:()=>(16*16)/(8*8)},
 {j:"pilih",t:"Luas 25 petak kecil bersisi 1 m disusun menjadi satu petak besar. Panjang sisi petak besar (m) ialah:",p:["5","25","12.5","50"],b:0,u:"Luas petak besar = 25 m². Sisi = √25 = 5 m.",kira:()=>Math.sqrt(25)}],
 bos:{j:"nombor",t:"Sebuah dewan berbentuk segi empat sama berluas 324 m² hendak diubin dengan ubin segi empat sama bersisi 0.5 m. Berapakah bilangan ubin yang diperlukan?",b:1296,tol:0.01,u:"Sisi dewan = √324 = 18 m. Luas satu ubin = 0.5 × 0.5 = 0.25 m². Bilangan ubin = 324 ÷ 0.25 = 1 296.",kira:()=>Math.sqrt(324)*Math.sqrt(324)/(0.5*0.5)}},

{n:5, tempat:"Bekas Kubus", sk:"3.2.8 Masalah rutin kompleks, kuasa tiga dan punca kuasa tiga", lampiran:"pet5",
 kadNama:"Isi Padu Kubus", kadEm:"\u{1F9CA}", kadFakta:"Isi padu kubus = sisi × sisi × sisi. Kalau sisi digandakan, isi padu menjadi lapan kali ganda, bukan dua kali.",
 bosKadNama:"Satu Meter Padu", bosKadEm:"\u{1F4A7}", bosKadFakta:"Tangki berbentuk kubus bersisi 1 m mempunyai isi padu 1 m³, iaitu 1 000 liter air. Itulah sebabnya tangki air rumah dikira dalam meter padu.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan isi padu kepada 125. Berapakah panjang sisi kubus itu (unit)?",b:5,tol:0.01,u:"Sisi = ³√125 = 5 unit, kerana 5 × 5 × 5 = 125.",kira:()=>Math.cbrt(125)},
 {j:"nombor",t:"Sebuah bekas berbentuk kubus mempunyai isi padu 216 cm³. Berapakah panjang sisinya (cm)?",b:6,tol:0.01,suf:"cm",u:"Sisi = ³√216 = 6 cm, kerana 6 × 6 × 6 = 216.",kira:()=>Math.cbrt(216)},
 {j:"nombor",t:"Sebuah kotak berbentuk kubus bersisi 9 cm. Berapakah isi padunya (cm³)?",b:729,tol:0.01,suf:"cm³",u:"Isi padu = 9 × 9 × 9 = 729 cm³.",kira:()=>9*9*9},
 {j:"nombor",t:"Sebuah tangki air berbentuk kubus bersisi 1.5 m. Berapakah isi padunya (m³)?",b:3.375,tol:0.001,suf:"m³",u:"Isi padu = 1.5 × 1.5 × 1.5 = 3.375 m³.",kira:()=>1.5*1.5*1.5},
 {j:"nombor",t:"Sebuah akuarium berbentuk kubus dipenuhi 64 000 cm³ air. Berapakah tinggi akuarium itu (cm)?",b:40,tol:0.01,suf:"cm",u:"Tinggi = ³√64 000 = 40 cm, kerana 40 × 40 × 40 = 64 000.",kira:()=>Math.cbrt(64000)},
 {j:"pilih",t:"Sebuah kubus bersisi 4 cm. Jika sisinya digandakan, isi padu kubus baharu menjadi berapa kali ganda?",p:["8 kali","2 kali","4 kali","6 kali"],b:0,u:"Isi padu asal = 4³ = 64. Sisi baharu 8 cm, isi padu = 8³ = 512. 512 ÷ 64 = 8 kali.",kira:()=>Math.pow(8,3)/Math.pow(4,3)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan isi padu kepada 27. Berapakah jumlah panjang semua 12 rusuk kubus itu (unit)?",b:36,tol:0.01,u:"Sisi = ³√27 = 3. Jumlah panjang 12 rusuk = 12 × 3 = 36 unit.",kira:()=>12*Math.cbrt(27)},
 {j:"nombor",t:"Air sebanyak 1 000 cm³ dituang ke dalam sebuah bekas kubus bersisi 8 cm sehingga penuh dan air yang lebih melimpah. Berapakah isi padu air yang melimpah (cm³)?",b:488,tol:0.01,suf:"cm³",u:"Isi padu bekas = 8³ = 512 cm³. Air yang melimpah = 1 000 − 512 = 488 cm³.",kira:()=>1000-Math.pow(8,3)}],
 bos:{j:"nombor",t:"Tiga kubus logam bersisi 3 cm, 4 cm dan 5 cm dileburkan menjadi satu kubus besar. Berapakah panjang sisi kubus besar itu (cm)?",b:6,tol:0.01,suf:"cm",u:"Jumlah isi padu = 27 + 64 + 125 = 216 cm³. Sisi kubus besar = ³√216 = 6 cm.",kira:()=>Math.cbrt(27+64+125)}},

{n:6, tempat:"Reka Anggaran", sk:"3.1.7 / 3.1.8 / 3.2.7 / 3.2.9 Anggaran, generalisasi dan masalah bukan rutin",lampiran:"pet6",
 kadNama:"Anggaran Baik", kadEm:"\u{1F3AF}", kadFakta:"Anggaran yang baik menjepit nombor antara dua kuasa sempurna, kemudian dipersempitkan sehingga ketepatan yang diperlukan.",
 bosKadNama:"Reka Masalah", bosKadEm:"\u{270F}\u{FE0F}", bosKadFakta:"Masalah yang baik ada konteks, data dan soalan yang jelas, dan jawapannya boleh disemak oleh rakan awak.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, tetapkan nombor kepada 10. √10 terletak antara:",p:["3 dan 4","2 dan 3","4 dan 5","9 dan 16"],b:0,u:"3² = 9 dan 4² = 16. Oleh sebab 9 < 10 < 16, √10 terletak antara 3 dan 4.",kira:()=>Math.floor(Math.sqrt(10))===3},
 {j:"pilih",t:"Anggarkan √50 kepada nombor bulat terdekat.",p:["7","5","8","25"],b:0,u:"7² = 49 dan 8² = 64. 50 sangat dekat dengan 49, jadi √50 kira-kira 7.",kira:()=>Math.round(Math.sqrt(50))},
 {j:"nombor",t:"Guna kalkulator. Berapakah √50 kepada 2 tempat perpuluhan?",b:7.07,tol:0.01,u:"√50 = 7.0710..., iaitu 7.07 (2 tempat perpuluhan).",kira:()=>bunda(Math.sqrt(50),2)},
 {j:"pilih",t:"³√30 terletak antara:",p:["3 dan 4","2 dan 3","4 dan 5","27 dan 64"],b:0,u:"3³ = 27 dan 4³ = 64. Oleh sebab 27 < 30 < 64, ³√30 terletak antara 3 dan 4.",kira:()=>Math.floor(Math.cbrt(30))===3},
 {j:"nombor",t:"Guna kalkulator. Berapakah ³√30 kepada 2 tempat perpuluhan?",b:3.11,tol:0.01,u:"³√30 = 3.1072..., iaitu 3.11 (2 tempat perpuluhan).",kira:()=>bunda(Math.cbrt(30),2)},
 {j:"pilih",t:"√5 × √5 sama dengan:",p:["5","10","25","√10"],b:0,u:"Punca kuasa dua sesuatu nombor didarab dengan dirinya sendiri memberi nombor itu semula: √5 × √5 = 5.",kira:()=>bunda(Math.sqrt(5)*Math.sqrt(5),6)},
 {j:"pilih",t:"√2 × √8 sama dengan:",p:["4","√10","10","16"],b:0,u:"√2 × √8 = √(2 × 8) = √16 = 4. Punca kuasa dua boleh didarab dengan mendarab nombor di dalamnya.",kira:()=>bunda(Math.sqrt(2)*Math.sqrt(8),6)},
 {j:"nombor",t:"Tanpa kalkulator, anggarkan √300 kepada nombor bulat terdekat.",b:17,tol:0.01,u:"17² = 289 dan 18² = 324. 300 lebih dekat kepada 289, jadi √300 kira-kira 17.",kira:()=>Math.round(Math.sqrt(300))}],
 bos:{j:"buka",
  t:"Reka satu masalah harian yang memerlukan awak menganggar sisi sebuah petak atau kubus, dengan luas atau isi padu yang BUKAN kuasa sempurna.",
  arahan:"Nyatakan konteks dan data dalam masalah awak. Tunjukkan bagaimana awak menjepit jawapan antara dua nombor bulat, kemudian kira jawapan dengan kalkulator (2 tempat perpuluhan). Semak sama ada jawapan munasabah.",
  u:"Jawapan TP6 yang kukuh mereka masalah yang jelas, menjepit punca antara dua kuasa sempurna, menggunakan kalkulator dengan betul, dan menyemak kemunasabahan jawapan."}}
];

module.exports = {
  id:"m1b3", tingkatan:1, kod:"3.0 Kuasa Dua, Punca Kuasa Dua, Kuasa Tiga dan Punca Kuasa Tiga",
  tajuk:"Kilang Petak dan Kubus",
  subtajuk:"Matematik Ting. 1 · Bab 3 Kuasa Dua, Punca Kuasa Dua, Kuasa Tiga dan Punca Kuasa Tiga",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat menyatakan maksud kuasa dua dan kuasa tiga, serta menentukan luas petak daripada sisinya. Langkah seterusnya ialah mengenal kuasa dua sempurna dan hubungan dengan punca kuasa dua.",
   2:"{n} memahami kuasa dua sempurna, kuasa tiga sempurna dan hubungan antara kuasa dua dengan punca kuasa dua, termasuk dua punca kuasa dua yang positif dan negatif. Perlu lebih latihan mengira sebelum bergerak ke TP3.",
   3:"{n} boleh mengira kuasa dua, kuasa tiga dan punca bagi nombor bulat, pecahan dan perpuluhan, serta menyelesaikan gabungan operasi. Galakkan menganggar jawapan dahulu sebelum menekan kalkulator.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah tentang luas dan sisi petak, termasuk perimeter dan bilangan ubin. Seterusnya latih masalah yang melibatkan kuasa tiga dan isi padu.",
   5:"{n} dapat menyelesaikan masalah kompleks tentang isi padu dan sisi kubus, termasuk membanding isi padu dan melebur beberapa kubus. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya menganggar punca kuasa dua dan punca kuasa tiga, menggunakan generalisasi darab punca, dan mereka masalah sendiri dengan jawapan yang munasabah. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kuasa Dua dan Kuasa Tiga. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyebut 'petak n × n' dan menguji dengan nombor kecil seperti 3 dan 4."
  },
  lampiran:{ pet1:R_PET1, pet2:R_PET2, pet3:R_PET3, pet4:R_PET4, pet5:R_PET5, pet6:R_PET6 },
  aras:ARAS
};
