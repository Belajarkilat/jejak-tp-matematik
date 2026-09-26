/* Sumber kandungan — Matematik KSSM Tingkatan 2, Bab 6 Bentuk Geometri Tiga Dimensi.
   Fail ini disunting tangan. Jalankan `node bina.js m2b6` untuk menyemaknya
   dan menghasilkan bank-m2b6.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 54 (dskp/matematik-t2.pdf).
   Bab ini mempunyai enam tahap penguasaan penuh dalam DSKP.

   Semua jawapan berangka dikira dengan kod dalam medan `kira` (pi = 22/7, seperti
   dalam widget) dan dibandingkan oleh tools/semak-jawapan.js. Unit isi padu (cm³)
   dan unit lain dinyatakan dalam soalan, bukan dalam pilihan jawapan.

   Rajah interaktif menggunakan widget t2pepejal (widget-m2b6.js). Standard
   Pembelajaran 6.3.1 dan 6.4.1 (menerbitkan rumus) ditunjukkan melalui rajah
   bentangan dan mod tuang (piramid/kon = 1/3 prisma/silinder). Bentuk tegak sahaja. */

const PI = 22 / 7;
const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
const LP_KUBOID = (p, l, t) => 2 * (p * l + p * t + l * t);
const LP_SILINDER = (r, t) => 2 * PI * r * (r + t);
const LP_KON = (r, s) => PI * r * (r + s);
const LP_SFERA = r => 4 * PI * r * r;
const V_SILINDER = (r, t) => PI * r * r * t;
const V_KON = (r, t) => PI * r * r * t / 3;
const V_SFERA = r => 4 / 3 * PI * r * r * r;

const SPI = [
"Mempamerkan pengetahuan asas tentang bentuk tiga dimensi.",
"Mempamerkan kefahaman tentang sifat geometri bentuk tiga dimensi.",
"Mengaplikasikan kefahaman tentang bentangan, luas permukaan dan isi padu bentuk tiga dimensi untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang bentuk tiga dimensi dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang bentuk tiga dimensi dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang bentuk tiga dimensi dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran: pepejal interaktif ---------- */

const pej = (spec, kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t2pepejal", kapsyen, alt }, spec, extra || {});
const R_PEJ1 = pej({ mod: "jenis", i: 0 },
  "Rajah 1 · Gerakkan gelongsor pepejal. Perhatikan bilangan muka, tepi dan bucu.",
  "Rajah interaktif pepejal tiga dimensi; gelongsor memilih kubus, kuboid, prisma, piramid, silinder, kon atau sfera dan menunjukkan bilangan muka, tepi dan bucu");
const R_PEJ2 = pej({ mod: "jenis", i: 3 },
  "Rajah 1 · Pilih pepejal dan bandingkan prisma dengan piramid. Garis sempang ialah tepi yang terlindung.",
  "Rajah interaktif pepejal tiga dimensi dengan garis padu untuk tepi yang nampak dan garis sempang untuk tepi terlindung; menunjukkan muka, tepi, bucu dan kumpulan pepejal");
const R_PEJ3 = pej({ mod: "bentangan", i: 3 },
  "Rajah 1 · Pilih bentuk. Pepejal di atas dibuka menjadi bentangan di bawahnya.",
  "Rajah interaktif pepejal dan bentangannya; gelongsor memilih kubus, kuboid, prisma segi tiga, piramid, silinder atau kon dan menunjukkan bentangan rata");
const R_PEJ4 = pej({ mod: "luas", i: 0, j: 0 },
  "Rajah 1 · Pilih bentuk dan saiz. Kira luas permukaan dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif pepejal dengan ukuran; gelongsor bentuk dan saiz menukar dimensi, dan luas permukaan boleh disemak selepas awak mengira",
  { cabar: true });
const R_PEJ5 = pej({ mod: "isipadu", i: 3, j: 0 },
  "Rajah 1 · Pilih bentuk dan saiz. Kira isi padu dahulu, kemudian semak dengan rajah.",
  "Rajah interaktif pepejal dengan ukuran; gelongsor bentuk dan saiz menukar dimensi, dan isi padu boleh disemak selepas awak mengira",
  { cabar: true });
const R_PEJ6 = pej({ mod: "gabung", i: 0, j: 0 },
  "Rajah 1 · Pilih gabungan dan saiz. Isi padu setiap bahagian dan jumlahnya dipaparkan.",
  "Rajah interaktif pepejal gabungan silinder dengan kon, silinder dengan hemisfera atau kuboid dengan prisma; gelongsor menukar gabungan dan saiz dan menunjukkan isi padu jumlah dalam sentimeter padu dan liter");

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Muzium Pepejal", sk:"6.1.1 Bentuk tiga dimensi dan konsep dimensi", lampiran:"pej1",
 kadNama:"Dimensi", kadEm:"\u{1F4E6}", kadFakta:"Bentuk dua dimensi hanya ada panjang dan lebar, macam lukisan atas kertas. Bentuk tiga dimensi ada tinggi juga, jadi boleh dipegang dan diisi.",
 bosKadNama:"Sfera Sempurna", bosKadEm:"\u{26BD}", bosKadFakta:"Sfera ialah satu-satunya pepejal yang tiada tepi dan tiada bucu. Bola sepak dan gelembung sabun hampir berbentuk sfera.",
 soalan:[
 {j:"pilih",t:"Yang manakah ialah bentuk tiga dimensi?",p:["Kubus","Segi empat sama","Bulatan","Segi tiga"],b:0,u:"Kubus mempunyai panjang, lebar dan tinggi, jadi ia bentuk tiga dimensi. Segi empat sama, bulatan dan segi tiga hanya dua dimensi."},
 {j:"pilih",t:"Bentuk tiga dimensi mempunyai:",p:["Panjang, lebar dan tinggi","Hanya panjang dan lebar","Hanya panjang","Hanya tinggi"],b:0,u:"Tiga dimensi bermaksud tiga ukuran: panjang, lebar dan tinggi."},
 {j:"nombor",t:"Dalam Rajah 1, pilih kubus. Berapakah bilangan muka kubus itu?",b:6,tol:0.01,u:"Kubus mempunyai 6 muka yang sama: atas, bawah dan empat sisi.",kira:()=>6},
 {j:"nombor",t:"Dalam Rajah 1, pilih kubus. Berapakah bilangan tepi kubus itu?",b:12,tol:0.01,u:"Kubus mempunyai 4 tepi di atas, 4 di bawah dan 4 tegak: 12 tepi.",kira:()=>4+4+4},
 {j:"nombor",t:"Dalam Rajah 1, pilih kubus. Berapakah bilangan bucu kubus itu?",b:8,tol:0.01,u:"Kubus mempunyai 4 bucu di atas dan 4 bucu di bawah: 8 bucu.",kira:()=>4+4},
 {j:"pilih",t:"Dalam Rajah 1, pilih silinder. Silinder mempunyai:",p:["2 muka rata dan 1 muka melengkung","1 muka rata dan 2 muka melengkung","3 muka rata sahaja","Tiada muka rata"],b:0,u:"Dua tapak bulatan ialah muka rata dan bahagian sisinya ialah satu muka melengkung."},
 {j:"pilih",t:"Pepejal manakah yang tiada tepi dan tiada bucu?",p:["Sfera","Kon","Silinder","Piramid"],b:0,u:"Sfera hanya ada satu permukaan melengkung, tanpa tepi dan tanpa bucu."},
 {j:"susun",t:"Susun langkah mengenal pasti sebuah pepejal.",p:["Lihat sama ada ada muka melengkung","Kira bilangan muka rata dan bucu","Perhatikan bentuk tapak","Namakan pepejal itu"],b:[0,1,2,3],u:"Semak muka melengkung dahulu, kira muka dan bucu, lihat tapak, kemudian namakan pepejal."}],
 bos:{j:"banyak",t:"Pilih SEMUA pepejal yang mempunyai sekurang-kurangnya satu muka melengkung.",p:["Silinder","Kon","Sfera","Kubus","Prisma segi tiga","Piramid segi empat"],b:[0,1,2],u:"Silinder, kon dan sfera ada muka melengkung. Kubus, prisma dan piramid hanya ada muka rata."}},

{n:2, tempat:"Bengkel Prisma", sk:"6.1.1 Sifat geometri prisma, piramid, silinder, kon dan sfera", lampiran:"pej2",
 kadNama:"Prisma", kadEm:"\u{1F4D0}", kadFakta:"Prisma dinamakan ikut bentuk keratan rentasnya. Prisma segi tiga ada keratan rentas segi tiga yang sama sepanjang pepejal itu, dan muka lainnya berbentuk segi empat.",
 bosKadNama:"Piramid", bosKadEm:"\u{1F53A}", bosKadFakta:"Piramid mempunyai satu tapak dan semua muka sisinya berbentuk segi tiga yang bertemu di satu puncak.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih prisma heksagon. Berapakah bilangan muka prisma itu?",b:8,tol:0.01,u:"Dua tapak heksagon dan enam muka sisi berbentuk segi empat: 2 + 6 = 8 muka.",kira:()=>2+6},
 {j:"nombor",t:"Dalam Rajah 1, pilih prisma heksagon. Berapakah bilangan tepi prisma itu?",b:18,tol:0.01,u:"Setiap heksagon ada 6 tepi, jadi 12 tepi. Tambah 6 tepi tegak: 18 tepi.",kira:()=>6+6+6},
 {j:"nombor",t:"Dalam Rajah 1, pilih prisma heksagon. Berapakah bilangan bucu prisma itu?",b:12,tol:0.01,u:"Setiap heksagon ada 6 bucu: 6 + 6 = 12 bucu.",kira:()=>6+6},
 {j:"pilih",t:"Dalam Rajah 1, pilih piramid segi empat. Piramid itu mempunyai:",p:["Tapak segi empat sama dan 4 muka segi tiga","Tapak segi tiga dan 4 muka segi tiga","Tapak segi empat sama dan 4 muka segi empat","Tapak bulatan dan 1 muka melengkung"],b:0,u:"Piramid segi empat mempunyai satu tapak segi empat sama dan empat muka sisi berbentuk segi tiga yang bertemu di puncak."},
 {j:"nombor",t:"Dalam Rajah 1, pilih piramid segi empat. Berapakah bilangan bucunya?",b:5,tol:0.01,u:"Empat bucu di tapak dan satu bucu di puncak: 5 bucu.",kira:()=>4+1},
 {j:"pilih",t:"Apakah keratan rentas seragam bagi prisma segi tiga?",p:["Segi tiga","Segi empat sama","Bulatan penuh","Heksagon sekata"],b:0,u:"Keratan rentas prisma sentiasa sama seperti bentuk tapaknya. Prisma segi tiga ada keratan rentas segi tiga."},
 {j:"pilih",t:"Apakah perbezaan utama antara prisma dengan piramid?",p:["Prisma ada dua tapak sama, piramid ada satu puncak","Prisma ada satu tapak, piramid ada dua tapak","Prisma ada muka melengkung, piramid tiada","Tiada perbezaan antara kedua-duanya"],b:0,u:"Prisma mempunyai dua tapak yang sama dan sisi berbentuk segi empat. Piramid mempunyai satu tapak dan muka sisi segi tiga yang bertemu di puncak."},
 {j:"nombor",t:"Sebuah prisma tegak mempunyai tapak oktagon (8 sisi). Berapakah bilangan muka prisma itu?",b:10,tol:0.01,u:"Dua tapak oktagon dan 8 muka sisi segi empat: 2 + 8 = 10 muka.",kira:()=>2+8}],
 bos:{j:"nombor",t:"Sebuah piramid mempunyai tapak heksagon. Berapakah bilangan tepi piramid itu?",b:12,tol:0.01,u:"Tapak heksagon ada 6 tepi. Ada 6 tepi lagi dari puncak ke setiap bucu tapak: 6 + 6 = 12 tepi.",kira:()=>6+6}},

{n:3, tempat:"Kilang Kotak", sk:"6.2.1 / 6.3.1 Bentangan dan rumus luas permukaan", lampiran:"pej3",
 kadNama:"Bentangan", kadEm:"\u{1F4E6}", kadFakta:"Bentangan ialah pepejal yang dibuka dan dibentang rata. Kotak kadbod yang awak buka sebelum dibuang ialah bentangan kuboid.",
 bosKadNama:"Lilitan", bosKadEm:"\u{1F96B}", bosKadFakta:"Kertas label yang dibuka daripada tin ialah segi empat tepat. Lebarnya sama dengan lilitan tapak tin itu.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih bentangan kubus. Berapakah bilangan segi empat sama dalam bentangan itu?",b:6,tol:0.01,u:"Kubus mempunyai 6 muka yang sama, jadi bentangannya mempunyai 6 segi empat sama.",kira:()=>6},
 {j:"pilih",t:"Dalam Rajah 1, pilih bentangan piramid. Bentangan piramid segi empat sama terdiri daripada:",p:["1 segi empat sama dan 4 segi tiga","4 segi empat sama dan 1 segi tiga","6 segi empat sama","2 segi tiga dan 3 segi empat tepat"],b:0,u:"Tapak ialah satu segi empat sama dan setiap muka sisi ialah segi tiga: 1 + 4 muka."},
 {j:"pilih",t:"Dalam Rajah 1, pilih bentangan silinder. Bentangan silinder terdiri daripada:",p:["1 segi empat tepat dan 2 bulatan","2 segi empat tepat dan 1 bulatan","1 sektor dan 1 bulatan","3 segi empat sama"],b:0,u:"Dua tapak ialah dua bulatan dan permukaan melengkung dibuka menjadi satu segi empat tepat."},
 {j:"pilih",t:"Dalam Rajah 1, pilih bentangan kon. Bentangan kon terdiri daripada:",p:["1 sektor dan 1 bulatan","1 segi empat tepat dan 2 bulatan","2 sektor dan 1 bulatan","1 segi tiga dan 1 bulatan"],b:0,u:"Tapak ialah satu bulatan dan permukaan melengkung dibuka menjadi satu sektor."},
 {j:"nombor",t:"Sebuah kubus bersisi 4 cm. Berapakah luas permukaannya (cm²)?",b:96,tol:0.01,suf:"cm²",u:"Luas permukaan = 6 × 4 × 4 = 96 cm². Bentangan kubus terdiri daripada 6 petak yang sama.",kira:()=>6*4*4},
 {j:"nombor",t:"Sebuah kuboid berukuran 5 cm × 4 cm × 3 cm. Berapakah luas permukaannya (cm²)?",b:94,tol:0.01,suf:"cm²",u:"Luas = 2(5×4 + 5×3 + 4×3) = 2(20 + 15 + 12) = 94 cm².",kira:()=>LP_KUBOID(5,4,3)},
 {j:"pilih",t:"Dalam bentangan silinder, lebar segi empat tepat itu sama dengan:",p:["Lilitan tapak, iaitu 2πr","Jejari tapak bulatan","Tinggi silinder itu","Diameter tapak bulat"],b:0,u:"Permukaan melengkung dibuka menjadi segi empat tepat. Satu sisinya sama dengan lilitan tapak bulatan, 2πr."},
 {j:"nombor",t:"Sebuah kuboid berukuran 6 cm × 5 cm × 4 cm. Berapakah isi padunya (cm³)?",b:120,tol:0.01,suf:"cm³",u:"Isi padu = panjang × lebar × tinggi = 6 × 5 × 4 = 120 cm³.",kira:()=>6*5*4}],
 bos:{j:"nombor",t:"Sebuah kotak hadiah berbentuk kuboid berukuran 12 cm × 8 cm × 5 cm. Berapakah luas kertas hias yang diperlukan untuk menutup seluruh permukaannya (cm²)?",b:392,tol:0.01,suf:"cm²",u:"Luas = 2(12×8 + 12×5 + 8×5) = 2(96 + 60 + 40) = 392 cm².",kira:()=>LP_KUBOID(12,8,5)}},

{n:4, tempat:"Kedai Cat", sk:"6.3.1 / 6.3.2 / 6.3.3 Luas permukaan dan masalah mudah", lampiran:"pej4",
 kadNama:"Luas Permukaan", kadEm:"\u{1F3A8}", kadFakta:"Luas permukaan ialah jumlah luas semua muka pepejal. Ia menentukan berapa banyak cat atau kertas pembalut yang diperlukan.",
 bosKadNama:"Tanpa Penutup", bosKadEm:"\u{1F4E6}", bosKadFakta:"Bila kotak tiada penutup, tolak luas penutup itu daripada jumlah luas permukaan kotak.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih kubus, saiz besar (a = 5 cm). Berapakah luas permukaannya (cm²)?",b:150,tol:0.01,suf:"cm²",u:"Luas = 6 × 5 × 5 = 150 cm².",kira:()=>6*5*5},
 {j:"nombor",t:"Dalam Rajah 1, pilih kuboid, saiz kecil (5 cm × 4 cm × 3 cm). Berapakah luas permukaannya (cm²)?",b:94,tol:0.01,suf:"cm²",u:"Luas = 2(20 + 15 + 12) = 94 cm².",kira:()=>LP_KUBOID(5,4,3)},
 {j:"nombor",t:"Dalam Rajah 1, pilih silinder, saiz kecil (r = 7 cm, t = 10 cm). Guna π = 22/7. Berapakah luas permukaannya (cm²)?",b:748,tol:0.01,suf:"cm²",u:"Luas = 2πr(r + t) = 2 × 22/7 × 7 × 17 = 748 cm².",kira:()=>LP_SILINDER(7,10)},
 {j:"nombor",t:"Dalam Rajah 1, pilih kon, saiz kecil (r = 7 cm, tinggi condong s = 25 cm). Guna π = 22/7. Berapakah luas permukaannya (cm²)?",b:704,tol:0.01,suf:"cm²",u:"Luas = πr(r + s) = 22/7 × 7 × 32 = 704 cm².",kira:()=>LP_KON(7,25)},
 {j:"nombor",t:"Dalam Rajah 1, pilih sfera, saiz kecil (r = 7 cm). Guna π = 22/7. Berapakah luas permukaannya (cm²)?",b:616,tol:0.01,suf:"cm²",u:"Luas = 4πr² = 4 × 22/7 × 49 = 616 cm².",kira:()=>LP_SFERA(7)},
 {j:"nombor",t:"Dalam Rajah 1, pilih prisma segi tiga, saiz kecil (tapak 3, 4, 5 cm; panjang 10 cm). Berapakah luas permukaannya (cm²)?",b:132,tol:0.01,suf:"cm²",u:"Luas = 2 × (1/2 × 3 × 4) + (3 + 4 + 5) × 10 = 12 + 120 = 132 cm².",kira:()=>2*(0.5*3*4)+(3+4+5)*10},
 {j:"nombor",t:"Dalam Rajah 1, pilih piramid, saiz kecil (tapak 6 cm × 6 cm, tinggi condong s = 5 cm). Berapakah luas permukaannya (cm²)?",b:96,tol:0.01,suf:"cm²",u:"Luas = 6 × 6 + 4 × (1/2 × 6 × 5) = 36 + 60 = 96 cm².",kira:()=>6*6+4*(0.5*6*5)},
 {j:"nombor",t:"Sebuah kotak kuboid tanpa penutup berukuran 20 cm × 10 cm × 8 cm (tapak 20 × 10). Berapakah luas permukaan kotak itu (cm²)?",b:680,tol:0.01,suf:"cm²",u:"Luas kuboid penuh = 2(200 + 160 + 80) = 880 cm². Tolak penutup 20 × 10 = 200 cm²: 680 cm².",kira:()=>LP_KUBOID(20,10,8)-20*10}],
 bos:{j:"nombor",t:"Sebuah bilik berbentuk kubus bersisi 3 m. Dinding dan siling akan dicat (lantai tidak dicat). Kos cat ialah RM12 semeter persegi. Berapakah jumlah kos mengecat bilik itu (RM)?",b:540,tol:0.01,u:"Ada 5 permukaan dicat: 5 × 3 × 3 = 45 m². Kos = 45 × 12 = RM540.",kira:()=>5*3*3*12}},

{n:5, tempat:"Loji Air", sk:"6.4.1 / 6.4.2 / 6.4.3 Rumus isi padu dan masalah kompleks", lampiran:"pej5",
 kadNama:"Isi Padu", kadEm:"\u{1F4A7}", kadFakta:"Isi padu ialah ruang yang diisi oleh sesuatu pepejal. 1 000 cm³ sama dengan 1 liter.",
 bosKadNama:"Satu Pertiga", bosKadEm:"\u{1F9EA}", bosKadFakta:"Kon dan piramid menyimpan tepat satu pertiga daripada isi padu silinder atau prisma yang sama tapak dan sama tinggi.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih piramid, saiz kecil (tapak 6 cm × 6 cm, tinggi tegak 5 cm). Berapakah isi padunya (cm³)?",b:60,tol:0.01,suf:"cm³",u:"Isi padu = 1/3 × 6 × 6 × 5 = 60 cm³.",kira:()=>6*6*5/3},
 {j:"nombor",t:"Dalam Rajah 1, pilih silinder, saiz kecil (r = 7 cm, t = 10 cm). Guna π = 22/7. Berapakah isi padunya (cm³)?",b:1540,tol:0.01,suf:"cm³",u:"Isi padu = πr²t = 22/7 × 7 × 7 × 10 = 1 540 cm³.",kira:()=>V_SILINDER(7,10)},
 {j:"nombor",t:"Dalam Rajah 1, pilih kon, saiz kecil (r = 7 cm, tinggi tegak 6 cm). Guna π = 22/7. Berapakah isi padunya (cm³)?",b:308,tol:0.01,suf:"cm³",u:"Isi padu = 1/3 × 22/7 × 7 × 7 × 6 = 308 cm³.",kira:()=>V_KON(7,6)},
 {j:"nombor",t:"Dalam Rajah 1, pilih sfera, saiz kecil (r = 7 cm). Guna π = 22/7. Berapakah isi padunya kepada 2 tempat perpuluhan (cm³)?",b:1437.33,tol:0.01,suf:"cm³",u:"Isi padu = 4/3 × 22/7 × 7 × 7 × 7 = 1 437.33 cm³.",kira:()=>bunda(V_SFERA(7),2)},
 {j:"nombor",t:"Dalam Rajah 1, pilih prisma segi tiga, saiz kecil (tapak segi tiga bersudut tegak 3 cm dan 4 cm; panjang 10 cm). Berapakah isi padunya (cm³)?",b:60,tol:0.01,suf:"cm³",u:"Isi padu = luas tapak × panjang = 1/2 × 3 × 4 × 10 = 60 cm³.",kira:()=>0.5*3*4*10},
 {j:"nombor",t:"Dalam Rajah 1, pilih silinder, saiz sederhana (r = 14 cm, t = 5 cm). Guna π = 22/7. Berapakah isi padunya dalam liter?",b:3.08,tol:0.01,suf:"liter",u:"Isi padu = 22/7 × 14 × 14 × 5 = 3 080 cm³. Bahagi dengan 1 000: 3.08 liter.",kira:()=>V_SILINDER(14,5)/1000},
 {j:"nombor",t:"Dalam Rajah 1, pilih kon, saiz besar (r = 3.5 cm, tinggi tegak 6 cm). Guna π = 22/7. Berapakah isi padunya (cm³)?",b:77,tol:0.01,suf:"cm³",u:"Isi padu = 1/3 × 22/7 × 3.5 × 3.5 × 6 = 77 cm³.",kira:()=>V_KON(3.5,6)},
 {j:"pilih",t:"Sebuah kon dan sebuah silinder mempunyai tapak dan tinggi yang sama. Isi padu kon ialah:",p:["Satu pertiga isi padu silinder","Satu perdua isi padu silinder","Dua pertiga isi padu silinder","Sama dengan isi padu silinder"],b:0,u:"Air dalam kon yang penuh perlu dituang tiga kali untuk memenuhkan silinder yang sama tapak dan tinggi."}],
 bos:{j:"nombor",t:"Sebuah tangki air berbentuk silinder mempunyai jejari 14 cm dan tinggi 50 cm. Guna π = 22/7. Berapakah isi padu air (liter) apabila tangki itu penuh?",b:30.8,tol:0.01,suf:"liter",u:"Isi padu = 22/7 × 14 × 14 × 50 = 30 800 cm³. Bahagi dengan 1 000: 30.8 liter.",kira:()=>V_SILINDER(14,50)/1000}},

{n:6, tempat:"Reka Menara", sk:"6.3.3 / 6.4.3 Gabungan bentuk, penukaran unit dan masalah bukan rutin", lampiran:"pej6",
 kadNama:"Gabungan", kadEm:"\u{1F3D7}\u{FE0F}", kadFakta:"Banyak objek harian ialah pepejal gabungan, contohnya tangki air (silinder dengan hemisfera) dan kon aiskrim dengan bebola aiskrim di atasnya.",
 bosKadNama:"Reka Sendiri", bosKadEm:"\u{270F}\u{FE0F}", bosKadFakta:"Jurureka menggabungkan pepejal ringkas untuk mencipta bekas dan bangunan. Isi padu gabungan ialah jumlah isi padu setiap bahagian.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih silinder + kon, saiz A (r = 7 cm, silinder t = 10 cm, kon t = 6 cm). Guna π = 22/7. Berapakah jumlah isi padunya (cm³)?",b:1848,tol:0.01,suf:"cm³",u:"Silinder = 1 540 cm³ dan kon = 308 cm³. Jumlah = 1 848 cm³.",kira:()=>V_SILINDER(7,10)+V_KON(7,6)},
 {j:"nombor",t:"Dalam Rajah 1, pilih silinder + kon, saiz C (r = 3.5 cm, silinder t = 12 cm, kon t = 6 cm). Guna π = 22/7. Berapakah jumlah isi padunya (cm³)?",b:539,tol:0.01,suf:"cm³",u:"Silinder = 462 cm³ dan kon = 77 cm³. Jumlah = 539 cm³.",kira:()=>V_SILINDER(3.5,12)+V_KON(3.5,6)},
 {j:"nombor",t:"Dalam Rajah 1, pilih kuboid + prisma, saiz A (p = 6 cm, l = 10 cm, kuboid t = 4 cm, prisma t = 3 cm). Berapakah jumlah isi padunya (cm³)?",b:330,tol:0.01,suf:"cm³",u:"Kuboid = 6 × 10 × 4 = 240 cm³. Prisma = 1/2 × 6 × 3 × 10 = 90 cm³. Jumlah = 330 cm³.",kira:()=>6*10*4+0.5*6*3*10},
 {j:"nombor",t:"Dalam Rajah 1, pilih silinder + hemisfera, saiz B (r = 3.5 cm, silinder t = 8 cm). Guna π = 22/7. Berapakah jumlah isi padunya kepada 2 tempat perpuluhan (cm³)?",b:397.83,tol:0.01,suf:"cm³",u:"Silinder = 308 cm³. Hemisfera = 2/3 × 22/7 × 3.5³ = 89.83 cm³. Jumlah = 397.83 cm³.",kira:()=>bunda(V_SILINDER(3.5,8)+V_SFERA(3.5)/2,2)},
 {j:"nombor",t:"Dalam Rajah 1, pilih silinder + kon, saiz A. Tukarkan jumlah isi padunya kepada liter.",b:1.848,tol:0.001,suf:"liter",u:"Jumlah = 1 848 cm³. Bahagi dengan 1 000: 1.848 liter.",kira:()=>(V_SILINDER(7,10)+V_KON(7,6))/1000},
 {j:"pilih",t:"Air dalam sebuah kon penuh dituang ke dalam silinder yang sama tapak dan tinggi. Berapa kali tuangan diperlukan untuk memenuhkan silinder?",p:["3 kali","Dua kali","Empat kali","Enam kali"],b:0,u:"Isi padu kon ialah satu pertiga isi padu silinder, jadi perlu 3 kali tuangan."},
 {j:"nombor",t:"Sebiji bola sfera berjejari 3.5 cm ditenggelamkan dalam bikar silinder berjejari 7 cm yang berisi air. Guna π = 22/7. Berapakah kenaikan paras air kepada 2 tempat perpuluhan (cm)?",b:1.17,tol:0.01,suf:"cm",u:"Isi padu bola = 4/3 × 22/7 × 3.5³ = 179.67 cm³. Luas tapak bikar = 22/7 × 7² = 154 cm². Kenaikan = 179.67 ÷ 154 = 1.17 cm.",kira:()=>bunda(V_SFERA(3.5)/(PI*7*7),2)},
 {j:"nombor",t:"Sebuah kon aiskrim berjejari 3.5 cm dan tinggi tegak 12 cm diisi penuh dengan aiskrim. Satu hemisfera aiskrim berjejari 3.5 cm diletakkan di atasnya. Guna π = 22/7. Berapakah jumlah isi padu aiskrim kepada 2 tempat perpuluhan (cm³)?",b:243.83,tol:0.01,suf:"cm³",u:"Kon = 1/3 × 22/7 × 3.5² × 12 = 154 cm³. Hemisfera = 89.83 cm³. Jumlah = 243.83 cm³.",kira:()=>bunda(V_KON(3.5,12)+V_SFERA(3.5)/2,2)}],
 bos:{j:"buka",
  t:"Reka sebuah objek harian (contohnya menara air, silo atau bekas minuman) daripada sekurang-kurangnya dua pepejal berbeza yang awak pelajari dalam bab ini.",
  arahan:"Lukis atau huraikan objek itu, nyatakan dimensi setiap pepejal, kira isi padu gabungan menggunakan rumus yang betul dan tukar kepada liter. Terangkan mengapa gabungan itu sesuai untuk kegunaannya.",
  u:"Jawapan TP6 yang kukuh memilih gabungan pepejal yang munasabah, menggunakan rumus isi padu yang betul untuk setiap bahagian, menukar unit dengan betul dan memberi justifikasi yang jelas."}}
];

module.exports = {
  id:"m2b6", tingkatan:2, kod:"6.0 Bentuk Geometri Tiga Dimensi",
  tajuk:"Kilang Pepejal",
  subtajuk:"Matematik Ting. 2 · Bab 6 Bentuk Geometri Tiga Dimensi",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal bentuk tiga dimensi serta menyebut bilangan muka, tepi dan bucu bagi pepejal yang mudah. Langkah seterusnya ialah memahami sifat geometri prisma dan piramid.",
   2:"{n} memahami sifat geometri prisma, piramid, silinder, kon dan sfera, termasuk keratan rentas dan bilangan muka, tepi dan bucu. Perlu lebih latihan sebelum bergerak ke bentangan dan pengiraan.",
   3:"{n} boleh mengenal bentangan pepejal dan menggunakan rumus luas permukaan dan isi padu untuk tugasan mudah. Galakkan menyebut bentuk muka bagi setiap bentangan sebelum mengira.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah tentang luas permukaan kubus, kuboid, prisma, piramid, silinder, kon dan sfera. Seterusnya latih masalah isi padu.",
   5:"{n} dapat menyelesaikan masalah kompleks tentang isi padu prisma, piramid, silinder, kon dan sfera, termasuk penukaran unit kepada liter. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya menyelesaikan masalah pepejal gabungan dan masalah bukan rutin, menukar unit dengan betul dan mereka objek sendiri dengan justifikasi yang jelas. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Bentuk Geometri Tiga Dimensi. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyebut nama pepejal serta bilangan muka, tepi dan bucunya, dan pegang benda sebenar seperti kotak dan tin."
  },
  lampiran:{ pej1:R_PEJ1, pej2:R_PEJ2, pej3:R_PEJ3, pej4:R_PEJ4, pej5:R_PEJ5, pej6:R_PEJ6 },
  aras:ARAS
};
