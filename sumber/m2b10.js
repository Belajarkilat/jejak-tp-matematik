/* Sumber kandungan — Matematik KSSM Tingkatan 2, Bab 10 Kecerunan Garis Lurus.
   Fail ini disunting tangan. Jalankan `node bina.js m2b10` untuk menyemaknya
   dan menghasilkan bank-m2b10.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 70 (dskp/matematik-t2.pdf).
   DSKP Tingkatan 2 menulis keenam-enam tahap bagi bab ini, jadi tiada tahap
   yang ditulis sendiri.

   Standard Pembelajaran yang disasarkan: 10.1.1 (kecuraman dan arah), 10.1.2
   (rumus kecerunan, termasuk garis mengufuk dan mencancang), 10.1.3
   (generalisasi), 10.1.4 (menentukan kecerunan) dan 10.1.5 (masalah).

   Widget: t2cerun dalam widget-m2b10.js (mod tangga, arah, dua, pintasan).
   Semua jawapan berangka dikira dalam medan `kira` dan dibandingkan oleh
   tools/semak-jawapan.js. Jawapan nombor ditulis sebagai perpuluhan. */

const SPI = [
"Mempamerkan pengetahuan asas tentang kecerunan garis lurus.",
"Mempamerkan kefahaman tentang kecerunan garis lurus.",
"Mengaplikasikan kefahaman tentang kecerunan garis lurus untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kecerunan garis lurus dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kecerunan garis lurus dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kecerunan garis lurus dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

const bunda = (x, n) => Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
const cerun = (x1, y1, x2, y2) => (y2 - y1) / (x2 - x1);

/* ---------- lampiran ---------- */

const R_CER1 = {
  jenis:"interaktif", w:"t2cerun", mod:"tangga", n0:3, l0:3,
  kapsyen:"Rajah 1 · Gerakkan jarak mencancang, jarak mengufuk dan arah. Perhatikan kecerunan tanjakan.",
  alt:"Rajah interaktif tanjakan berbentuk segi tiga; gelongsor menukar jarak mencancang, jarak mengufuk dan arah naik atau turun, dan kecerunan dikira"
};
const R_CER2 = {
  jenis:"interaktif", w:"t2cerun", mod:"arah", m:[-3,-2,-1,-0.5,0,0.5,1,2,3], tegak:true, i0:7,
  kapsyen:"Rajah 1 · Garis y = mx melalui asalan. Gerakkan gelongsor m dan perhatikan tanda serta kecuraman garis.",
  alt:"Rajah interaktif satah Cartes dengan garis melalui asalan; gelongsor menukar kecerunan m daripada negatif tiga hingga tiga, dan garis mencancang"
};
const R_CER3 = {
  jenis:"interaktif", w:"t2cerun", mod:"dua", A:[1,1], bx:[-4,-3,-2,-1,0,1,2,3,4], by:[-4,-3,-2,-1,0,1,2,3,4], p0:7, q0:8,
  kapsyen:"Rajah 1 · Titik A(1, 1) tetap. Gerakkan titik B dan lihat naik, larian dan kecerunan garis AB.",
  alt:"Rajah interaktif satah Cartes dengan titik A tetap dan titik B yang digerakkan dengan gelongsor; garis AB dan kecerunannya dikira"
};
const R_CER4 = {
  jenis:"interaktif", w:"t2cerun", mod:"tangga", n0:3, l0:5, cabar:true,
  kapsyen:"Rajah 1 · Tetapkan jarak mencancang dan jarak mengufuk. Kira kecerunan dahulu, kemudian semak dengan rajah.",
  alt:"Rajah interaktif tanjakan berbentuk segi tiga; gelongsor menukar jarak mencancang, jarak mengufuk dan arah, dan kecerunan dipaparkan selepas semakan"
};
const R_CER5 = {
  jenis:"interaktif", w:"t2cerun", mod:"pintasan", ax:[-4,-3,-2,-1,1,2,3,4], by:[-4,-3,-2,-1,1,2,3,4], p0:5, q0:5, cabar:true,
  kapsyen:"Rajah 1 · Garis melalui (pintasan-x, 0) dan (0, pintasan-y). Kira kecerunan dahulu, kemudian semak dengan rajah.",
  alt:"Rajah interaktif satah Cartes dengan garis melalui pintasan-x dan pintasan-y; gelongsor menukar kedua-dua pintasan dan kecerunan dipaparkan selepas semakan"
};
const R_CER6 = {
  jenis:"interaktif", w:"t2cerun", mod:"dua", A:[-2,3], bx:[-4,-3,-2,-1,0,1,2,3,4], by:[-4,-3,-2,-1,0,1,2,3,4], p0:6, q0:3,
  kapsyen:"Rajah 1 · Titik A(-2, 3) tetap. Gerakkan titik B untuk meneroka kecerunan garis AB.",
  alt:"Rajah interaktif satah Cartes dengan titik A tetap pada negatif dua, tiga dan titik B yang digerakkan; kecerunan garis AB dikira"
};

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Tangga Curam", sk:"10.1.1 Kecuraman, arah kecondongan dan maksud kecerunan", lampiran:"cer1",
 kadNama:"Kecerunan", kadEm:"\u{1FA9C}", kadFakta:"Kecerunan menunjukkan seberapa curam sesuatu permukaan. Semakin besar nilai kecerunan tanpa mengira tanda, semakin curam tanjakan itu.",
 bosKadNama:"Landasan Rata", bosKadEm:"\u{1F6E4}\u{FE0F}", bosKadFakta:"Landasan yang rata langsung tidak naik atau turun. Kecerunannya ialah sifar, kerana jarak mencancangnya sifar.",
 soalan:[
 {j:"pilih",t:"Antara tanjakan berikut, yang manakah PALING curam?",p:["Naik 6 m bagi setiap 2 m mengufuk","Naik 2 m bagi setiap 6 m mengufuk","Naik 3 m bagi setiap 6 m mengufuk","Naik 2 m bagi setiap 4 m mengufuk"],b:0,u:"Bandingkan naik ÷ mengufuk: 6÷2 = 3, 2÷6 = 0.33, 3÷6 = 0.5 dan 2÷4 = 0.5. Nilai 3 paling besar, jadi tanjakan pertama paling curam.",kira:()=>{const v=[6/2,2/6,3/6,2/4];return v.indexOf(Math.max(...v))===0;}},
 {j:"pilih",t:"Dalam Rajah 1, jarak dari bawah ke atas tanjakan (garis tegak berwarna merah) dipanggil:",p:["Jarak mencancang","Jarak mengufuk","Jarak mendatar tanjakan","Jarak sisi tanjakan"],b:0,u:"Jarak yang diukur ke atas atau ke bawah dipanggil jarak mencancang. Jarak yang diukur ke tepi dipanggil jarak mengufuk."},
 {j:"pilih",t:"Kecerunan sesuatu tanjakan ialah nisbah:",p:["Jarak mencancang kepada jarak mengufuk","Jarak mengufuk kepada jarak mencancang","Jarak mencancang campur jarak mengufuk","Jarak serong kepada jarak mengufuk"],b:0,u:"Kecerunan = jarak mencancang ÷ jarak mengufuk. Jarak serong (panjang tanjakan) tidak digunakan."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan jarak mencancang 4, jarak mengufuk 8 dan arah naik ke kanan. Berapakah kecerunan tanjakan itu (perpuluhan)?",b:0.5,tol:0.01,u:"Kecerunan = 4 ÷ 8 = 0.5.",kira:()=>4/8},
 {j:"pilih",t:"Antara kecerunan 3, 1 dan 0.5, tanjakan yang manakah paling curam?",p:["Kecerunan 3","Kecerunan 1","Kecerunan 0.5","Ketiga-tiganya sama curam"],b:0,u:"Semakin besar nilai kecerunan, semakin curam tanjakan itu. Nilai 3 paling besar.",kira:()=>Math.max(3,1,0.5)===3},
 {j:"pilih",t:"Dalam Rajah 1, tukar arah kepada 'turun ke kanan'. Apakah yang berlaku kepada tanda kecerunan?",p:["Menjadi negatif","Kekal positif","Menjadi sifar","Menjadi tak tertakrif"],b:0,u:"Tanjakan yang turun apabila bergerak ke kanan mempunyai kecerunan negatif."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan jarak mencancang 0 dan jarak mengufuk 5. Berapakah kecerunan landasan rata itu?",b:0,tol:0.01,u:"Kecerunan = 0 ÷ 5 = 0. Landasan rata tidak naik atau turun.",kira:()=>0/5},
 {j:"susun",t:"Susun langkah menentukan kecerunan tanjakan daripada rajah.",p:["Ukur jarak mencancang (naik atau turun)","Ukur jarak mengufuk","Bahagi jarak mencancang dengan jarak mengufuk","Tulis tanda positif jika naik ke kanan, negatif jika turun"],b:[0,1,2,3],u:"Ukur kedua-dua jarak dahulu, bahagi, kemudian tulis tanda mengikut arah."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang kecerunan.",p:["Kecerunan ialah jarak mencancang dibahagi jarak mengufuk","Landasan rata mempunyai kecerunan sifar","Tanjakan yang turun ke kanan mempunyai kecerunan negatif","Kecerunan ialah jarak mengufuk dibahagi jarak mencancang","Tanjakan yang lebih curam mempunyai kecerunan lebih kecil","Kecerunan tidak pernah boleh negatif"],b:[0,1,2],u:"Kecerunan = mencancang ÷ mengufuk. Landasan rata bernilai 0, dan tanjakan yang turun ke kanan bernilai negatif. Tanjakan yang lebih curam mempunyai nilai mutlak lebih besar, dan kecerunan boleh negatif."}},

{n:2, tempat:"Papan Luncur", sk:"10.1.3 Generalisasi tentang kecerunan garis lurus", lampiran:"cer2",
 kadNama:"Tanda Kecerunan", kadEm:"\u{1F6F9}", kadFakta:"Tanda positif atau negatif menunjukkan arah garis. Garis yang naik ke kanan bertanda positif, dan garis yang turun ke kanan bertanda negatif.",
 bosKadNama:"Garis Mencancang", bosKadEm:"\u{1F4CF}", bosKadFakta:"Garis yang lurus ke atas tidak bergerak ke tepi langsung. Jarak mengufuknya sifar, jadi kecerunannya tak tertakrif.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan m = 2. Apabila x = 1, berapakah nilai y pada garis itu?",b:2,tol:0.01,u:"Pada garis y = 2x, apabila x = 1, y = 2 × 1 = 2. Ini ialah jarak mencancang bagi setiap 1 unit mengufuk.",kira:()=>2*1},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan m = -3. Apabila x = 1, berapakah nilai y pada garis itu?",b:-3,tol:0.01,u:"Pada garis y = -3x, apabila x = 1, y = -3 × 1 = -3. Garis turun 3 unit bagi setiap 1 unit ke kanan.",kira:()=>-3*1},
 {j:"pilih",t:"Dalam Rajah 1, garis manakah yang paling curam?",p:["Garis dengan m = -3","Garis dengan m = 2","Garis dengan m = 0.5","Garis dengan m = 1"],b:0,u:"Kecuraman bergantung pada nilai mutlak kecerunan. |-3| = 3 ialah yang paling besar, jadi garis m = -3 paling curam walaupun bertanda negatif.",kira:()=>{const v=[-3,2,0.5,1].map(Math.abs);return v.indexOf(Math.max(...v))===0;}},
 {j:"pilih",t:"Tanda negatif pada kecerunan menunjukkan garis:",p:["Turun ke kanan","Naik ke kanan","Mendatar sahaja","Mencancang sahaja"],b:0,u:"Kecerunan negatif bermaksud garis turun apabila bergerak dari kiri ke kanan."},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan m = 0. Garis itu ialah:",p:["Garis mengufuk","Garis mencancang","Garis yang paling curam","Garis yang turun ke kanan"],b:0,u:"Jika m = 0, garis tidak naik atau turun. Ia ialah garis mengufuk."},
 {j:"pilih",t:"Dalam Rajah 1, pilih 'tegak'. Kecerunan garis mencancang itu ialah:",p:["Tak tertakrif","Sama dengan sifar","Sama dengan satu","Sama dengan negatif satu"],b:0,u:"Garis mencancang mempunyai jarak mengufuk 0. Pembahagian dengan 0 tidak tertakrif, jadi tiada nilai kecerunan."},
 {j:"pilih",t:"Antara kecerunan berikut, yang manakah menunjukkan garis TURUN yang paling landai?",p:["m = -0.5","m = -3.0","m = -2.0","m = -1.5"],b:0,u:"Garis paling landai mempunyai nilai mutlak paling kecil. |-0.5| = 0.5 ialah yang terkecil.",kira:()=>{const v=[-0.5,-3,-2,-1].map(Math.abs);return v.indexOf(Math.min(...v))===0;}},
 {j:"nombor",t:"Garis y = mx mempunyai kecerunan m. Berapakah kecerunan garis y = -5x?",b:-5,tol:0.01,u:"Bagi garis y = mx, m ialah kecerunan. Dalam y = -5x, m = -5.",kira:()=>-5}],
 bos:{j:"pilih",t:"Mengapakah kecerunan ditakrifkan sebagai jarak mencancang kepada jarak mengufuk, dan bukan sebaliknya?",p:["Supaya garis yang lebih curam mempunyai nilai yang lebih besar","Supaya garis yang lebih curam mempunyai nilai yang lebih kecil","Supaya semua garis mempunyai kecerunan yang sama","Supaya garis mengufuk tidak mempunyai nilai kecerunan"],b:0,u:"Jika mencancang ÷ mengufuk, garis yang lebih curam memberi nilai yang lebih besar. Garis mengufuk bernilai 0 dan hanya garis mencancang tak tertakrif. Jika terbalik, garis mengufuk pula tak tertakrif dan nilai mengecil apabila garis makin curam."}},

{n:3, tempat:"Peta Titik", sk:"10.1.2 Rumus kecerunan pada satah Cartes", lampiran:"cer3",
 kadNama:"Beza Koordinat", kadEm:"\u{1F5FA}\u{FE0F}", kadFakta:"Kecerunan dua titik dikira daripada beza koordinat y dibahagi beza koordinat x. Susunan titik mesti sama untuk kedua-dua beza.",
 bosKadNama:"Garis Melalui Dua Titik", bosKadEm:"\u{1F4CD}", bosKadFakta:"Hanya ada satu garis lurus yang melalui dua titik berlainan. Kecerunan garis itu sama tidak kira dua titik mana yang dipilih pada garis tersebut.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, A(1, 1). Tetapkan B(3, 4). Berapakah kecerunan garis AB (perpuluhan)?",b:1.5,tol:0.01,u:"naik = 4 - 1 = 3 dan larian = 3 - 1 = 2. m = 3 ÷ 2 = 1.5.",kira:()=>cerun(1,1,3,4)},
 {j:"nombor",t:"Dalam Rajah 1, A(1, 1). Tetapkan B(4, -2). Berapakah kecerunan garis AB?",b:-1,tol:0.01,u:"naik = -2 - 1 = -3 dan larian = 4 - 1 = 3. m = -3 ÷ 3 = -1.",kira:()=>cerun(1,1,4,-2)},
 {j:"nombor",t:"Dalam Rajah 1, A(1, 1). Tetapkan B(-1, -3). Berapakah kecerunan garis AB?",b:2,tol:0.01,u:"naik = -3 - 1 = -4 dan larian = -1 - 1 = -2. m = -4 ÷ -2 = 2.",kira:()=>cerun(1,1,-1,-3)},
 {j:"pilih",t:"Rumus kecerunan garis yang melalui (x1, y1) dan (x2, y2) ialah:",p:["m = (y2 − y1) ÷ (x2 − x1)","m = (x2 − x1) ÷ (y2 − y1)","m = (y2 + y1) ÷ (x2 + x1)","m = (y2 − y1) × (x2 − x1)"],b:0,u:"Kecerunan = beza y ÷ beza x, iaitu (y2 − y1) ÷ (x2 − x1)."},
 {j:"pilih",t:"Dalam Rajah 1, A(1, 1). Tetapkan B(1, 4). Garis AB ialah:",p:["Mencancang, kecerunan tak tertakrif","Mengufuk, kecerunan bernilai sifar","Condong ke atas, kecerunan positif","Condong ke bawah, kecerunan negatif"],b:0,u:"A dan B mempunyai x yang sama, jadi larian = 0. Garis itu mencancang dan kecerunannya tak tertakrif."},
 {j:"pilih",t:"Dalam Rajah 1, A(1, 1). Tetapkan B(3, 1). Kecerunan garis AB ialah:",p:["0","Tak tertakrif","2","1"],b:0,u:"A dan B mempunyai y yang sama, jadi naik = 0. Kecerunan = 0 ÷ 2 = 0, iaitu garis mengufuk.",kira:()=>cerun(1,1,3,1)===0},
 {j:"nombor",t:"Garis melalui P(2, 5) dan Q(4, 1). Berapakah kecerunannya?",b:-2,tol:0.01,u:"naik = 1 - 5 = -4 dan larian = 4 - 2 = 2. m = -4 ÷ 2 = -2.",kira:()=>cerun(2,5,4,1)},
 {j:"susun",t:"Susun langkah mencari kecerunan garis yang melalui dua titik.",p:["Tulis koordinat kedua-dua titik","Cari beza y (naik atau turun)","Cari beza x dengan urutan titik yang sama","Bahagi beza y dengan beza x"],b:[0,1,2,3],u:"Tulis titik, cari beza y dan beza x dalam urutan yang sama, kemudian bahagi."}],
 bos:{j:"nombor",t:"Garis melalui A(-3, 2) dan B(5, -2). Berapakah kecerunan garis itu (perpuluhan)?",b:-0.5,tol:0.01,u:"naik = -2 - 2 = -4 dan larian = 5 - (-3) = 8. m = -4 ÷ 8 = -0.5.",kira:()=>cerun(-3,2,5,-2)}},

{n:4, tempat:"Tangga Rumah", sk:"10.1.4 Menentukan kecerunan dalam situasi kehidupan", lampiran:"cer4",
 kadNama:"Sudut Bumbung", kadEm:"\u{1F3E0}", kadFakta:"Kecerunan bumbung menentukan kelajuan air hujan mengalir turun. Bumbung yang terlalu landai boleh menakung air.",
 bosKadNama:"Jalan Menurun", bosKadEm:"\u{26F0}\u{FE0F}", bosKadFakta:"Papan tanda jalan menurun kadang-kadang menunjukkan peratusan. Kecerunan 0.1 sama dengan 10 peratus, iaitu turun 10 unit bagi setiap 100 unit mengufuk.",
 soalan:[
 {j:"nombor",t:"Sebuah tangga rumah naik 3 m bagi setiap 4 m mengufuk. Berapakah kecerunannya (perpuluhan)?",b:0.75,tol:0.01,u:"Kecerunan = 3 ÷ 4 = 0.75.",kira:()=>3/4},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan jarak mencancang 6, jarak mengufuk 4 dan arah naik ke kanan. Berapakah kecerunan (perpuluhan)?",b:1.5,tol:0.01,u:"Kecerunan = 6 ÷ 4 = 1.5.",kira:()=>6/4},
 {j:"nombor",t:"Sebatang jalan turun 20 m sepanjang 100 m mengufuk (turun ke kanan). Berapakah kecerunannya?",b:-0.2,tol:0.01,u:"Jalan itu turun, jadi jarak mencancang ialah -20. Kecerunan = -20 ÷ 100 = -0.2.",kira:()=>-20/100},
 {j:"nombor",t:"Sebuah bumbung naik 1.5 m bagi setiap 3 m mengufuk. Berapakah kecerunan bumbung itu?",b:0.5,tol:0.01,u:"Kecerunan = 1.5 ÷ 3 = 0.5.",kira:()=>1.5/3},
 {j:"nombor",t:"Sebuah bukit naik 150 m sepanjang 600 m mengufuk. Berapakah kecerunannya (perpuluhan)?",b:0.25,tol:0.01,u:"Kecerunan = 150 ÷ 600 = 0.25.",kira:()=>150/600},
 {j:"pilih",t:"Dalam Rajah 1, tetapkan jarak mencancang 4, jarak mengufuk 2 dan arah naik ke kanan. Kecerunan tanjakan itu ialah:",p:["2","0.5","4","6"],b:0,u:"Kecerunan = 4 ÷ 2 = 2. Nilai 0.5 diperoleh jika jarak dibahagi terbalik.",kira:()=>4/2===2},
 {j:"pilih",t:"Tangga P naik 4 m dalam 5 m mengufuk. Tangga Q naik 3 m dalam 4 m mengufuk. Tangga manakah lebih curam?",p:["Tangga P","Tangga Q","Kedua-duanya sama curam","Tidak dapat ditentukan"],b:0,u:"Kecerunan P = 4 ÷ 5 = 0.8 dan kecerunan Q = 3 ÷ 4 = 0.75. Nilai 0.8 lebih besar, jadi tangga P lebih curam.",kira:()=>4/5>3/4},
 {j:"pilih",t:"Kecerunan sebuah tanjakan ialah 1/5. Ini bermaksud:",p:["Naik 1 unit bagi setiap 5 unit mengufuk","Naik 5 unit bagi setiap 1 unit mengufuk","Naik 1 unit bagi setiap 1 unit mengufuk","Turun 1 unit bagi setiap 5 unit mengufuk"],b:0,u:"Kecerunan 1/5 = jarak mencancang ÷ jarak mengufuk, iaitu naik 1 bagi setiap 5 mengufuk. Kecerunan positif bermaksud naik."}],
 bos:{j:"nombor",t:"Sebatang jalan menurun 30 m dan panjang mengufuknya 250 m. Berapakah kecerunan jalan itu (perpuluhan, turun ke kanan)?",b:-0.12,tol:0.01,u:"Jalan menurun, jadi jarak mencancang ialah -30. Kecerunan = -30 ÷ 250 = -0.12.",kira:()=>-30/250}},

{n:5, tempat:"Garis Pintasan", sk:"10.1.2 / 10.1.5 Kecerunan menggunakan pintasan, masalah kompleks", lampiran:"cer5",
 kadNama:"Pintasan", kadEm:"\u{2702}\u{FE0F}", kadFakta:"Pintasan-x ialah titik garis memotong paksi-x, dan pintasan-y ialah titik garis memotong paksi-y. Kedua-dua titik ini cukup untuk mencari kecerunan.",
 bosKadNama:"Negatif Depan", bosKadEm:"\u{2795}", bosKadFakta:"Dalam rumus kecerunan menggunakan pintasan, tanda negatif di hadapan mesti disertakan. Tanpa tanda itu, arah garis akan menjadi terbalik.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan pintasan-x = 2 dan pintasan-y = 4. Berapakah kecerunan garis itu?",b:-2,tol:0.01,u:"m = -(pintasan-y) ÷ (pintasan-x) = -4 ÷ 2 = -2.",kira:()=>-4/2},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan pintasan-x = -2 dan pintasan-y = 4. Berapakah kecerunan garis itu?",b:2,tol:0.01,u:"m = -4 ÷ (-2) = 2.",kira:()=>-4/-2},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan pintasan-x = 4 dan pintasan-y = -2. Berapakah kecerunan garis itu (perpuluhan)?",b:0.5,tol:0.01,u:"m = -(-2) ÷ 4 = 2 ÷ 4 = 0.5.",kira:()=>-(-2)/4},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan pintasan-x = -4 dan pintasan-y = -3. Berapakah kecerunan garis itu (perpuluhan)?",b:-0.75,tol:0.01,u:"m = -(-3) ÷ (-4) = 3 ÷ (-4) = -0.75.",kira:()=>-(-3)/-4},
 {j:"pilih",t:"Dalam Rajah 1, pintasan-x = 3 dan pintasan-y = 3. Garis itu:",p:["Turun, kecerunan -1","Naik ke kanan, kecerunan 1","Turun ke kanan, kecerunan -3","Mengufuk, kecerunan 0"],b:0,u:"m = -3 ÷ 3 = -1. Kecerunan negatif bermaksud garis turun ke kanan.",kira:()=>-3/3===-1},
 {j:"pilih",t:"Rumus kecerunan menggunakan pintasan-x dan pintasan-y ialah:",p:["m = -(pintasan-y) ÷ (pintasan-x)","m = (pintasan-y) ÷ (pintasan-x)","m = -(pintasan-x) ÷ (pintasan-y)","m = (pintasan-x) × (pintasan-y)"],b:0,u:"Garis melalui (pintasan-x, 0) dan (0, pintasan-y). Naiknya ialah pintasan-y dan larian ialah -(pintasan-x), jadi m = -(pintasan-y) ÷ (pintasan-x)."},
 {j:"nombor",t:"Sebuah garis memotong paksi-x pada (6, 0) dan paksi-y pada (0, 3). Berapakah kecerunannya?",b:-0.5,tol:0.01,u:"m = (3 - 0) ÷ (0 - 6) = 3 ÷ (-6) = -0.5.",kira:()=>cerun(6,0,0,3)},
 {j:"nombor",t:"Garis melalui (0, 8) dan (4, 0). Berapakah kecerunannya?",b:-2,tol:0.01,u:"m = (0 - 8) ÷ (4 - 0) = -8 ÷ 4 = -2.",kira:()=>cerun(0,8,4,0)}],
 bos:{j:"nombor",t:"Garis melalui titik (0, -6) dan (-4, 0). Berapakah kecerunannya (perpuluhan)?",b:-1.5,tol:0.01,u:"m = (0 - (-6)) ÷ (-4 - 0) = 6 ÷ (-4) = -1.5.",kira:()=>cerun(0,-6,-4,0)}},

{n:6, tempat:"Studio Reka", sk:"10.1.5 Masalah bukan rutin yang melibatkan kecerunan", lampiran:"cer6",
 kadNama:"Titik Segaris", kadEm:"\u{1F4CA}", kadFakta:"Tiga titik berada pada satu garis lurus jika kecerunan antara dua pasangan titik itu sama.",
 bosKadNama:"Reka Selamat", bosKadEm:"\u{270F}\u{FE0F}", bosKadFakta:"Pereka landai yang selamat memilih kecerunan yang tidak terlalu curam. Semakin landai, semakin mudah dilalui tetapi semakin panjang ruang yang diperlukan.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, A(-2, 3). Tetapkan B(2, -1). Berapakah kecerunan garis AB?",b:-1,tol:0.01,u:"naik = -1 - 3 = -4 dan larian = 2 - (-2) = 4. m = -4 ÷ 4 = -1.",kira:()=>cerun(-2,3,2,-1)},
 {j:"nombor",t:"Dalam Rajah 1, A(-2, 3). Tetapkan B(-1, -3). Berapakah kecerunan garis AB?",b:-6,tol:0.01,u:"naik = -3 - 3 = -6 dan larian = -1 - (-2) = 1. m = -6 ÷ 1 = -6.",kira:()=>cerun(-2,3,-1,-3)},
 {j:"pilih",t:"Dalam Rajah 1, A(-2, 3). Tetapkan B(-2, -1). Apakah kecerunan garis AB?",p:["Tak tertakrif","Sama dengan sifar","Sama dengan -1","Sama dengan 4"],b:0,u:"A dan B mempunyai x yang sama, jadi larian = 0. Garis mencancang tidak mempunyai kecerunan yang tertakrif."},
 {j:"nombor",t:"Titik P(1, 2) dan Q(k, 8). Kecerunan garis PQ ialah 3. Cari nilai k.",b:3,tol:0.01,u:"(8 - 2) ÷ (k - 1) = 3. Maka 6 = 3(k - 1), k - 1 = 2 dan k = 3.",kira:()=>{for(let k=-10;k<=10;k++){if(k!==1&&Math.abs(cerun(1,2,k,8)-3)<1e-9)return k;}return null;}},
 {j:"nombor",t:"Garis melalui A(2, 1) dan B(6, h) mempunyai kecerunan 0.5. Cari nilai h.",b:3,tol:0.01,u:"(h - 1) ÷ (6 - 2) = 0.5. Maka h - 1 = 0.5 × 4 = 2 dan h = 3.",kira:()=>{for(let h=-10;h<=10;h++){if(Math.abs(cerun(2,1,6,h)-0.5)<1e-9)return h;}return null;}},
 {j:"pilih",t:"Tiga titik A(1, 1), B(3, 2) dan C(5, 3). Adakah ketiga-tiga titik itu segaris?",p:["Ya, kecerunan AB sama dengan kecerunan BC","Tidak, kecerunan AB tidak sama dengan BC","Ya, kerana semua koordinat x ialah nombor ganjil","Tidak, kerana koordinat y semuanya berbeza"],b:0,u:"Kecerunan AB = (2 - 1) ÷ (3 - 1) = 0.5 dan kecerunan BC = (3 - 2) ÷ (5 - 3) = 0.5. Kedua-duanya sama, jadi titik-titik itu segaris.",kira:()=>cerun(1,1,3,2)===cerun(3,2,5,3)},
 {j:"pilih",t:"Seorang murid mengira kecerunan A(1, 2) dan B(3, 8) sebagai 2/6. Apakah kesilapannya?",p:["Dia membahagi jarak mengufuk dengan mencancang","Dia menolak koordinat dengan urutan berbeza","Dia menambah koordinat, bukan menolaknya","Tiada kesilapan, jawapan 2/6 itu betul"],b:0,u:"Jarak mencancang ialah 8 - 2 = 6 dan jarak mengufuk ialah 3 - 1 = 2. Kecerunan betul ialah 6 ÷ 2 = 3. Murid itu mengira 2 ÷ 6, iaitu terbalik.",kira:()=>cerun(1,2,3,8)===3},
 {j:"pilih",t:"Garis dengan kecerunan -2 melalui A(0, 5). Antara titik berikut, yang manakah juga terletak pada garis itu?",p:["(2, 1)","(2, 9)","(1, 7)","(3, 1)"],b:0,u:"Kecerunan dari A(0, 5) ke (2, 1) ialah (1 - 5) ÷ 2 = -2. Titik lain memberi kecerunan +2 atau -4/3.",kira:()=>[[2,1],[2,9],[1,7],[3,1]].map(p=>cerun(0,5,p[0],p[1])===-2).join()==="true,false,false,false"}],
 bos:{j:"buka",
  t:"Reka satu tanjakan (contohnya laluan basikal, bumbung atau tangga) untuk kawasan sekolah awak.",
  arahan:"Nyatakan jarak mencancang dan jarak mengufuk yang awak pilih, kira kecerunannya, dan terangkan sama ada tanjakan itu curam atau landai. Cadangkan satu cara mengubah reka bentuk supaya kecerunannya lebih selamat.",
  u:"Jawapan TP6 yang kukuh memilih ukuran yang munasabah, mengira kecerunan dengan betul (mencancang dibahagi mengufuk), mentafsir nilai itu dengan sesuai, dan mencadangkan perubahan yang jelas, contohnya menambah jarak mengufuk untuk mengurangkan kecerunan."}}
];

module.exports = {
  id:"m2b10", tingkatan:2, kod:"10.0 Kecerunan Garis Lurus",
  tajuk:"Lereng Bukit",
  subtajuk:"Matematik Ting. 2 · Bab 10 Kecerunan Garis Lurus",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat menyebut maksud kecerunan sebagai jarak mencancang dibahagi jarak mengufuk, dan membezakan tanjakan yang curam daripada yang landai. Langkah seterusnya ialah memahami kesan tanda positif dan negatif.",
   2:"{n} memahami bahawa nilai mutlak kecerunan menentukan kecuraman dan tanda menentukan arah, serta kecerunan sifar dan garis mencancang. Perlu lebih latihan sebelum bergerak ke pengiraan dengan koordinat.",
   3:"{n} boleh mengira kecerunan garis yang melalui dua titik menggunakan rumus beza y dibahagi beza x, termasuk kes garis mengufuk dan mencancang. Galakkan menulis titik dalam urutan yang sama.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah tentang kecerunan dalam situasi harian seperti tangga, bumbung dan jalan. Seterusnya latih penggunaan pintasan-x dan pintasan-y.",
   5:"{n} dapat menyelesaikan masalah kompleks yang melibatkan kecerunan menggunakan pintasan dan koordinat. Sudah bersedia untuk masalah bukan rutin dan tugasan mereka cipta.",
   6:"{n} berjaya mereka bentuk tanjakan, mengira kecerunannya dengan betul dan menerangkan sama ada ia selamat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kecerunan Garis Lurus. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyebut jarak mencancang dan jarak mengufuk dengan bimbingan rakan sebaya."
  },
  lampiran:{ cer1:R_CER1, cer2:R_CER2, cer3:R_CER3, cer4:R_CER4, cer5:R_CER5, cer6:R_CER6 },
  aras:ARAS
};
