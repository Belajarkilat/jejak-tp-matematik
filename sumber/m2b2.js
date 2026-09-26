/* Sumber kandungan — Matematik KSSM Tingkatan 2, Bab 2 Pemfaktoran dan Pecahan Algebra.
   Fail ini disunting tangan. Jalankan `node bina.js m2b2` untuk menyemaknya
   dan menghasilkan bank-m2b2.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum, muka 37 (dskp/matematik-t2.pdf).
   DSKP Tingkatan 2 menulis keenam-enam tahap bagi bab ini dalam satu jadual, jadi tiada tahap
   yang perlu ditulis semula.

   Standard Pembelajaran yang disasarkan: 2.1.1 hingga 2.1.4 (kembangan), 2.2.1 hingga
   2.2.3 (pemfaktoran) dan 2.3.1 hingga 2.3.3 (ungkapan algebra dan hukum operasi asas
   aritmetik, termasuk pecahan algebra).

   Widget: t2jubin, t2jadual dan t2pecahan dalam widget-m2b2.js. Jawapan algebra dalam pilihan
   disemak oleh kira() dengan menggantikan banyak nilai x (bukan dengan membandingkan teks),
   dan setiap pilihan pengganggu disahkan TIDAK setara dengan jawapan betul. */

const MIN = "−", TOLAK = "×", BAHAGI = "÷";
const SUP = ["", "", "²", "³"];
const nilaiPoli = (cs, x) => cs.reduce((r, c) => r * x + c, 0);
const mul = (a, b) => { const r = Array(a.length + b.length - 1).fill(0); a.forEach((x, i) => b.forEach((y, j) => { r[i + j] += x * y; })); return r; };
const P = cs => {
  let s = ""; const n = cs.length;
  cs.forEach((c, i) => {
    const d = n - 1 - i; if (!c) return;
    const a = Math.abs(c), badan = d === 0 ? String(a) : (a === 1 ? "" : String(a)) + "x" + (d >= 2 ? SUP[d] : "");
    if (!s) s = (c < 0 ? MIN : "") + badan; else s += (c < 0 ? " " + MIN + " " : " + ") + badan;
  });
  return s || "0";
};
const F = (p, q) => "(" + P([p, q]) + ")";
const TITIK = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7];
/* samaF(f, g, tolak): f dan g bernilai sama pada semua titik ujian kecuali titik yang ditolak (penyebut sifar) */
const samaF = (f, g, tolak = []) => TITIK.filter(x => !tolak.includes(x)).every(x => Math.abs(f(x) - g(x)) < 1e-9);
const samaP = (a, b) => samaF(x => nilaiPoli(a, x), x => nilaiPoli(b, x));

/* Soalan pilihan: kembangkan (f1)(f2). Jawapan betul dikira dengan pendaraban nilai, bukan pendaraban koefisien. */
const kembang = (f1, f2, salah, u, t) => {
  const benar = mul(f1, f2);
  return { j: "pilih", t: t || `Kembangkan ${F(...f1)}${F(...f2)}.`, p: [P(benar), ...salah.map(P)], b: 0, u,
    kira: () => samaF(x => (f1[0] * x + f1[1]) * (f2[0] * x + f2[1]), x => nilaiPoli(benar, x)) && salah.every(s => !samaP(s, benar)) };
};
/* Soalan pilihan: faktorkan sasaran. Faktor ialah pasangan [p, q] bagi (px + q). */
const faktor = (sasaran, benar, salah, u, t) => {
  const teksF = fs => fs.map(f => F(...f)).join("");
  const hasil = fs => fs.reduce((r, f) => mul(r, f), [1]);
  return { j: "pilih", t: t || `Faktorkan ${P(sasaran)}.`, p: [teksF(benar), ...salah.map(teksF)], b: 0, u,
    kira: () => samaP(hasil(benar), sasaran) && salah.every(s => !samaP(hasil(s), sasaran)) };
};
/* Soalan pilihan ungkapan: ref ialah fungsi ungkapan sebenar, benar/salah ialah {s, f}. */
const pf = (t, ref, benar, salah, u, tolak = []) => ({
  j: "pilih", t, p: [benar.s, ...salah.map(x => x.s)], b: 0, u,
  kira: () => samaF(ref, benar.f, tolak) && salah.every(x => !samaF(ref, x.f, tolak))
});

const SPI = [
"Mempamerkan pengetahuan asas tentang faktor.",
"Mempamerkan kefahaman tentang konsep kembangan dan pemfaktoran.",
"Mengaplikasikan kefahaman tentang kembangan dan pemfaktoran untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kembangan dan pemfaktoran dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kembangan dan pemfaktoran dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kembangan dan pemfaktoran dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran ---------- */

const R_KEM = {
  jenis:"interaktif", w:"t2jubin", mod:"kembang", a:2, b:3, maks:5,
  kapsyen:"Rajah 1 · Jubin algebra bagi (x + a)(x + b). Gerakkan gelongsor a dan b dan lihat jubin serta hasil kembangan.",
  alt:"Rajah interaktif jubin algebra bagi (x + a)(x + b); gelongsor a dan b menukar bilangan jalur dan petak, dan hasil kembangan dipaparkan"
};
const R_JAD = {
  jenis:"interaktif", w:"t2jadual", p:2, q:3, r:1, s:-4, nilai:[-3,-2,-1,0,1,2,3,4,5], i0:5,
  kapsyen:"Rajah 1 · Kaedah jadual bagi (2x + 3)(x − 4). Gerakkan gelongsor x untuk menyemak kedua-dua bentuk.",
  alt:"Rajah interaktif kaedah jadual bagi (2x + 3)(x − 4); gelongsor x menggantikan nilai x dalam bentuk kurungan dan bentuk kembangan untuk semakan"
};
const R_FAK = {
  jenis:"interaktif", w:"t2jubin", mod:"faktor", p:7, q:12, pasang:[[1,12],[2,6],[3,4],[2,5],[4,4],[3,5]], i:0,
  kapsyen:"Rajah 1 · Sasaran x² + 7x + 12. Pilih pasangan nombor dengan gelongsor dan lihat sama ada segi empat tepat padan dengan sasaran.",
  alt:"Rajah interaktif jubin algebra untuk memfaktorkan x kuasa dua tambah 7x tambah 12; gelongsor memilih pasangan nombor dan menunjukkan sama ada jubin padan"
};
const R_BEZA = {
  jenis:"interaktif", w:"t2jubin", mod:"beza", x:10, a:3, aMaks:7, cabar:true,
  kapsyen:"Rajah 1 · Petak sisi x = 10 unit ditolak petak sisi a dan disusun semula. Kira dahulu, kemudian semak dengan rajah.",
  alt:"Rajah interaktif beza dua kuasa dua; petak besar ditolak petak kecil disusun semula menjadi segi empat tepat"
};
const R_TAMBAH = {
  jenis:"interaktif", w:"t2pecahan", cabar:true, i0:10, nilai:[-3,-2,-1,0,1,2,3,4,5,6,7],
  kiri:[{n:"x + 1", d:"2", fn:[1,1], fd:[2]}, {op:"+"}, {n:"x − 1", d:"3", fn:[1,-1], fd:[3]}],
  kanan:{n:"5x + 1", d:"6", fn:[5,1], fd:[6]},
  alt2:"(x + 1)/2 + (x − 1)/3 dan (5x + 1)/6",
  kapsyen:"Rajah 1 · Kira hasil tambah (x + 1)/2 + (x − 1)/3 dahulu, kemudian semak kesetaraan dengan menggantikan x.",
  alt:"Rajah interaktif pecahan algebra; hasil tambah dua pecahan disemak dengan menggantikan nilai x pada kedua-dua belah"
};
const R_DARAB = {
  jenis:"interaktif", w:"t2pecahan", i0:12, nilai:[-3,-2,-1,0,1,2,3,4,5,6,7,8,9],
  kiri:[{n:"x^2 − 9", d:"6", fn:[1,0,-9], fd:[6]}, {op:"x"}, {n:"3", d:"x + 3", fn:[3], fd:[1,3]}],
  kanan:{n:"x − 3", d:"2", fn:[1,-3], fd:[2]},
  alt2:"(x kuasa dua tolak 9)/6 darab 3/(x + 3) dan (x tolak 3)/2",
  kapsyen:"Rajah 1 · Bandingkan hasil darab dengan bentuk termudah. Cuba x = −3 dan lihat apa yang berlaku.",
  alt:"Rajah interaktif darab pecahan algebra; gelongsor x menyemak kesetaraan dan menunjukkan nilai x yang menjadikan penyebut sifar"
};

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Kedai Jubin", sk:"2.1.1 / 2.1.2 Maksud dan pelaksanaan kembangan dua ungkapan", lampiran:"kem",
 kadNama:"Al-Jabr", kadEm:"\u{1F4DC}", kadFakta:"Perkataan algebra datang daripada al-jabr, satu istilah dalam buku Al-Khwarizmi yang ditulis kira-kira tahun 820.",
 bosKadNama:"Jubin Algebra", bosKadEm:"\u{1F9E9}", bosKadFakta:"Jubin algebra menukar pendaraban kepada luas. (x + 2)(x + 3) ialah luas segi empat tepat yang dipecahkan kepada empat bahagian.",
 soalan:[
 {j:"pilih",t:"Kembangan dua ungkapan algebra bermaksud:",p:["Mendarab setiap sebutan dalam satu kurungan dengan setiap sebutan dalam kurungan lain","Menambah semua sebutan daripada kedua-dua kurungan tanpa mendarab","Mencari faktor sepunya bagi semua sebutan dalam kedua-dua kurungan","Menggantikan x dengan satu nombor tertentu dalam setiap kurungan"],b:0,u:"Kembangan ialah mendarab setiap sebutan dalam kurungan pertama dengan setiap sebutan dalam kurungan kedua, kemudian mengumpul sebutan serupa."},
 {j:"pilih",t:"Dalam Rajah 1, jubin besar berwarna kuning mewakili:",p:["x²","2x + 1","x + 2","x + 1"],b:0,u:"Jubin besar berbentuk petak dengan sisi x, jadi luasnya x kali x, iaitu x²."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 2 dan b = 3. Berapakah bilangan petak unit merah?",b:6,tol:0.01,u:"Petak unit membentuk segi empat tepat a kali b, iaitu 2 × 3 = 6 petak.",kira:()=>2*3},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 4 dan b = 3. Berapakah jumlah jalur x berwarna hijau?",b:7,tol:0.01,u:"Ada 4 jalur x menegak dan 3 jalur x mengufuk, jadi 4 + 3 = 7 jalur x. Itulah pekali x dalam hasil kembangan.",kira:()=>4+3},
 kembang([1,1],[1,4],[[1,4,5],[1,5,8],[1,3,4]],"Darab x dengan (x + 4) untuk mendapat x² + 4x, kemudian 1 dengan (x + 4) untuk mendapat x + 4. Kumpul: x² + 5x + 4."),
 kembang([1,3],[1,5],[[1,8,8],[1,15,8],[1,2,15]],"x² + 5x + 3x + 15 = x² + 8x + 15. Hasil tambah 3 dan 5 ialah pekali x, hasil darabnya ialah sebutan pemalar."),
 kembang([1,6],[1,2],[[1,8,8],[1,12,8],[1,4,12]],"x² + 2x + 6x + 12 = x² + 8x + 12."),
 {j:"susun",t:"Susun langkah mengembangkan (x + 2)(x + 3).",p:["Darab x dengan (x + 3) untuk mendapat x² + 3x","Darab 2 dengan (x + 3) untuk mendapat 2x + 6","Tulis x² + 3x + 2x + 6","Kumpul sebutan serupa untuk mendapat x² + 5x + 6"],b:[0,1,2,3],u:"Darab setiap sebutan dahulu, tulis semua hasil darab, kemudian kumpul sebutan serupa."}],
 bos:{j:"banyak",t:"Pilih SEMUA ungkapan yang sama dengan x² + 7x + 12.",p:["(x + 3)(x + 4)","(x + 4)(x + 3)","x(x + 7) + 12","(x + 2)(x + 6)","(x + 1)(x + 12)","x² + 7x − 12"],b:[0,1,2],u:"(x + 3)(x + 4) dan (x + 4)(x + 3) memberi x² + 7x + 12, dan x(x + 7) + 12 = x² + 7x + 12. (x + 2)(x + 6) memberi x² + 8x + 12, (x + 1)(x + 12) memberi x² + 13x + 12, dan pilihan terakhir berbeza tanda pada 12.",
  kira:()=>{ const t=[1,7,12]; return samaP(mul([1,3],[1,4]),t) && samaP(mul([1,4],[1,3]),t) && samaF(x=>x*(x+7)+12,x=>nilaiPoli(t,x)) && !samaP(mul([1,2],[1,6]),t) && !samaP(mul([1,1],[1,12]),t) && !samaP([1,7,-12],t); }}},

{n:2, tempat:"Meja Grid", sk:"2.1.3 / 2.1.4 Mempermudah ungkapan algebra dan menyelesaikan masalah", lampiran:"jad",
 kadNama:"Kaedah Jadual", kadEm:"\u{1F4CB}", kadFakta:"Kaedah jadual memastikan tiada sebutan yang tertinggal. Setiap sebutan dalam satu kurungan didarab dengan setiap sebutan dalam kurungan lain.",
 bosKadNama:"Semak Dengan Nilai", bosKadEm:"✅", bosKadFakta:"Ganti x dengan satu nombor pada kedua-dua bentuk. Jika hasilnya sama, kembangan awak besar kemungkinan betul.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, sel kiri atas ialah hasil darab 2x dan x. Nilainya ialah:",p:["2x²","2x","3x","x²"],b:0,u:"2x kali x = 2x². Pekali 2 didarab dengan 1, dan x kali x ialah x².",kira:()=>2*1===2},
 {j:"nombor",t:"Dalam Rajah 1, sel kanan bawah ialah hasil darab +3 dan −4. Berapakah nilainya?",b:-12,tol:0.01,u:"3 kali −4 = −12. Positif kali negatif memberi negatif.",kira:()=>3*-4},
 {j:"pilih",t:"Kembangkan (2x + 3)(x − 4).",p:[P(mul([2,3],[1,-4])),P([2,5,-12]),P([2,-5,12]),P([2,-11,-12])],b:0,u:"2x² − 8x + 3x − 12 = 2x² − 5x − 12. Sebutan x ialah −8x + 3x = −5x.",kira:()=>samaF(x=>(2*x+3)*(x-4),x=>nilaiPoli([2,-5,-12],x)) && !samaP([2,5,-12],[2,-5,-12]) && !samaP([2,-5,12],[2,-5,-12]) && !samaP([2,-11,-12],[2,-5,-12])},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x = 2. Berapakah nilai (2x + 3)(x − 4)?",b:-14,tol:0.01,u:"(2 × 2 + 3)(2 − 4) = 7 × (−2) = −14. Bentuk dikembang 2x² − 5x − 12 juga memberi 8 − 10 − 12 = −14.",kira:()=>(2*2+3)*(2-4)},
 kembang([1,-2],[1,-5],[[1,7,10],[1,-7,-10],[1,-3,10]],"x² − 5x − 2x + 10 = x² − 7x + 10. Negatif kali negatif memberi +10."),
 {j:"pilih",t:"Permudahkan 3(x + 2) + (x + 1)(x + 3).",p:[P([1,7,9]),P([1,4,9]),P([1,7,6]),P([1,10,9])],b:0,u:"3(x + 2) = 3x + 6 dan (x + 1)(x + 3) = x² + 4x + 3. Tambah: x² + 7x + 9.",kira:()=>samaF(x=>3*(x+2)+(x+1)*(x+3),x=>nilaiPoli([1,7,9],x)) && !samaP([1,4,9],[1,7,9]) && !samaP([1,7,6],[1,7,9]) && !samaP([1,10,9],[1,7,9])},
 {j:"nombor",t:"Sebuah kebun segi empat tepat berukuran (x + 5) m panjang dan (x + 2) m lebar. Apabila x = 3, berapakah luas kebun dalam m²?",b:40,tol:0.01,suf:"m²",u:"Panjang 8 m dan lebar 5 m, jadi luas 40 m². Bentuk dikembang x² + 7x + 10 juga memberi 9 + 21 + 10 = 40.",kira:()=>(3+5)*(3+2)},
 {j:"susun",t:"Susun langkah mempermudah (x + 2)(x − 1) + 3x.",p:["Kembangkan (x + 2)(x − 1) untuk mendapat x² + x − 2","Tulis semula dengan + 3x di hujungnya","Kumpul sebutan serupa, iaitu x dan 3x","Tulis jawapan x² + 4x − 2"],b:[0,1,2,3],u:"Kembangkan dahulu, kemudian tambah sebutan lain dan kumpul sebutan serupa."}],
 bos:{j:"nombor",t:"Sebuah bingkai gambar berukuran (2x + 1) cm panjang dan (x + 3) cm lebar. Apabila x = 4, berapakah luas bingkai dalam cm²?",b:63,tol:0.01,suf:"cm²",u:"Panjang 9 cm dan lebar 7 cm, jadi luas 63 cm². Semakan: 2x² + 7x + 3 = 32 + 28 + 3 = 63.",kira:()=>(2*4+1)*(4+3)}},

{n:3, tempat:"Dewan Faktor", sk:"2.2.1 / 2.2.2 Hubungan kembangan dengan pemfaktoran dan pelbagai kaedah", lampiran:"fak",
 kadNama:"Songsangan", kadEm:"\u{1F501}", kadFakta:"Kembangan dan pemfaktoran ialah songsangan antara satu sama lain, macam tambah dan tolak. Apa yang satu lakukan, satu lagi buat balik.",
 bosKadNama:"Faktor Sepunya", bosKadEm:"\u{1F50D}", bosKadFakta:"Sentiasa cari faktor sepunya dahulu, contohnya 6x + 9 = 3(2x + 3), sebelum mencuba kaedah lain.",
 soalan:[
 {j:"pilih",t:"Pemfaktoran ialah songsangan bagi:",p:["Kembangan","Penolakan sebutan serupa","Penggantian nilai x","Pengiraan luas segi empat"],b:0,u:"Kembangan mendarabkan kurungan, pemfaktoran menulis semula sebagai hasil darab kurungan. Kedua-duanya songsang antara satu sama lain."},
 {j:"nombor",t:"Dalam Rajah 1, sasaran ialah x² + 7x + 12. Dua nombor m dan n yang betul mesti mempunyai hasil darab m × n berapa?",b:12,tol:0.01,u:"Sebutan pemalar 12 datang daripada petak unit, iaitu m × n, jadi m × n = 12.",kira:()=>12},
 {j:"nombor",t:"Dalam Rajah 1, sasaran ialah x² + 7x + 12. Dua nombor m dan n yang betul mesti mempunyai hasil tambah m + n berapa?",b:7,tol:0.01,u:"Pekali x ialah m + n, kerana m jalur menegak dan n jalur mengufuk, jadi m + n = 7.",kira:()=>7},
 {j:"pilih",t:"Dalam Rajah 1, pasangan yang membentuk segi empat tepat dan padan dengan sasaran ialah:",p:["3 dan 4","2 dan 6","2 dan 5","4 dan 4"],b:0,u:"3 × 4 = 12 dan 3 + 4 = 7. Pasangan 2 dan 6 memberi jumlah 8, pasangan 2 dan 5 memberi darab 10, dan pasangan 4 dan 4 memberi jumlah 8.",kira:()=>3*4===12 && 3+4===7 && !(2*6===12&&2+6===7) && !(2*5===12&&2+5===7) && !(4*4===12&&4+4===7)},
 faktor([1,7,12],[[1,3],[1,4]],[[[1,2],[1,6]],[[1,1],[1,12]],[[1,7],[1,12]]],"Cari dua nombor yang darabnya 12 dan jumlahnya 7, iaitu 3 dan 4. Maka x² + 7x + 12 = (x + 3)(x + 4)."),
 {j:"pilih",t:"Faktorkan 6x + 9 dengan mengeluarkan faktor sepunya.",p:["3(2x + 3)","6(x + 9)","3(2x + 9)","2(3x + 3)"],b:0,u:"Faktor sepunya terbesar bagi 6 dan 9 ialah 3. 6x + 9 = 3(2x + 3). Pilihan lain memberi 6x + 54, 6x + 27 dan 6x + 6.",kira:()=>samaF(x=>3*(2*x+3),x=>6*x+9) && !samaF(x=>6*(x+9),x=>6*x+9) && !samaF(x=>3*(2*x+9),x=>6*x+9) && !samaF(x=>2*(3*x+3),x=>6*x+9)},
 faktor([1,5,6],[[1,2],[1,3]],[[[1,1],[1,6]],[[1,5],[1,1]],[[1,2],[1,4]]],"Dua nombor dengan hasil darab 6 dan hasil tambah 5 ialah 2 dan 3. Maka x² + 5x + 6 = (x + 2)(x + 3)."),
 faktor([1,-5,6],[[1,-2],[1,-3]],[[[1,2],[1,3]],[[1,-1],[1,-6]],[[1,2],[1,-3]]],"Hasil darab positif dan hasil tambah negatif bermakna kedua-dua nombor negatif: −2 dan −3. Maka x² − 5x + 6 = (x − 2)(x − 3).")],
 bos:{j:"banyak",t:"Pilih SEMUA pemfaktoran yang betul bagi x² + 9x + 20.",p:["(x + 4)(x + 5)","(x + 5)(x + 4)","(5 + x)(4 + x)","(x + 2)(x + 10)","(x − 4)(x − 5)","(x + 1)(x + 20)"],b:[0,1,2],u:"4 × 5 = 20 dan 4 + 5 = 9. Tiga pilihan pertama sama nilai. (x + 2)(x + 10) memberi x² + 12x + 20, (x − 4)(x − 5) memberi x² − 9x + 20, dan (x + 1)(x + 20) memberi x² + 21x + 20.",
  kira:()=>{ const t=[1,9,20]; return samaP(mul([1,4],[1,5]),t) && samaP(mul([1,5],[1,4]),t) && samaF(x=>(5+x)*(4+x),x=>nilaiPoli(t,x)) && !samaP(mul([1,2],[1,10]),t) && !samaP(mul([1,-4],[1,-5]),t) && !samaP(mul([1,1],[1,20]),t); }}},

{n:4, tempat:"Studio Beza", sk:"2.2.2 / 2.2.3 Pemfaktoran beza dua kuasa dua dan penyelesaian masalah", lampiran:"beza",
 kadNama:"Dua Kuasa Dua", kadEm:"➖", kadFakta:"Beza dua kuasa dua hanya berlaku apabila kedua-dua sebutan ialah kuasa dua sempurna dan ada tanda tolak di antaranya.",
 bosKadNama:"Kira Cepat", bosKadEm:"⚡", bosKadFakta:"51² − 49² = (51 + 49)(51 − 49) = 200. Beza dua kuasa dua boleh menjadi jalan pintas untuk mengira dalam kepala.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 3. Berapakah luas bentuk L (kuning dan hijau) dalam unit persegi?",b:91,tol:0.01,u:"Luas petak besar 10 × 10 = 100. Tolak petak kecil 3 × 3 = 9. Luas bentuk L ialah 91.",kira:()=>10*10-3*3},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 3. Apabila bentuk L disusun semula menjadi segi empat tepat, berapakah panjangnya dalam unit?",b:13,tol:0.01,u:"Panjang ialah x + a = 10 + 3 = 13 unit.",kira:()=>10+3},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan a = 3. Berapakah lebar segi empat tepat itu dalam unit?",b:7,tol:0.01,u:"Lebar ialah x − a = 10 − 3 = 7 unit. Semakan: 13 × 7 = 91.",kira:()=>10-3},
 faktor([1,0,-9],[[1,3],[1,-3]],[[[1,-3],[1,-3]],[[1,3],[1,3]],[[1,9],[1,-1]]],"x² − 9 = x² − 3² = (x + 3)(x − 3)."),
 faktor([1,0,-25],[[1,5],[1,-5]],[[[1,-5],[1,-5]],[[1,5],[1,5]],[[1,25],[1,-1]]],"x² − 25 = x² − 5² = (x + 5)(x − 5)."),
 {j:"pilih",t:"Faktorkan 4x² − 9.",p:["(2x + 3)(2x − 3)","(4x + 3)(x − 3)","(2x − 3)(2x − 3)","(2x + 9)(2x − 1)"],b:0,u:"4x² − 9 = (2x)² − 3² = (2x + 3)(2x − 3).",kira:()=>{ const s=x=>4*x*x-9; return samaF(x=>(2*x+3)*(2*x-3),s) && !samaF(x=>(4*x+3)*(x-3),s) && !samaF(x=>(2*x-3)*(2*x-3),s) && !samaF(x=>(2*x+9)*(2*x-1),s); }},
 {j:"nombor",t:"Guna beza dua kuasa dua untuk mengira 51² − 49².",b:200,tol:0.01,u:"51² − 49² = (51 + 49)(51 − 49) = 100 × 2 = 200.",kira:()=>51*51-49*49},
 {j:"pilih",t:"Antara ungkapan berikut, yang manakah boleh difaktorkan sebagai beza dua kuasa dua?",p:["x² − 36","x² + 36","x² − 6x","x² − 35"],b:0,u:"x² − 36 = x² − 6². x² + 36 ada tanda tambah, x² − 6x tidak mempunyai kuasa dua sempurna kedua, dan 35 bukan kuasa dua sempurna.",kira:()=>Number.isInteger(Math.sqrt(36)) && !Number.isInteger(Math.sqrt(35))}],
 bos:{j:"nombor",t:"Sebuah taman petak bersisi 12 m mempunyai kolam petak bersisi 5 m di satu sudut. Guna (12 + 5)(12 − 5) untuk mencari luas taman yang tinggal dalam m².",b:119,tol:0.01,suf:"m²",u:"12² − 5² = (12 + 5)(12 − 5) = 17 × 7 = 119 m². Semakan: 144 − 25 = 119.",kira:()=>(12+5)*(12-5)}},

{n:5, tempat:"Kafe Pecahan", sk:"2.3.1 Penambahan dan penolakan ungkapan algebra termasuk pecahan algebra", lampiran:"tambah",
 kadNama:"Penyebut Sepunya", kadEm:"\u{1F3AF}", kadFakta:"Sebelum menambah pecahan algebra, samakan penyebutnya dahulu. Cara ini sama seperti menambah pecahan nombor biasa.",
 bosKadNama:"Tanda Tolak", bosKadEm:"⚠️", bosKadFakta:"Apabila menolak pecahan, tanda tolak meliputi semua sebutan dalam pengangka kedua. Ini kesilapan paling biasa dalam bab ini.",
 soalan:[
 {j:"pilih",t:"Penyebut sepunya terkecil bagi 2 dan 3 ialah:",p:["6","12","24","36"],b:0,u:"Gandaan sepunya terkecil bagi 2 dan 3 ialah 6. Nombor 12, 24 dan 36 ialah gandaan sepunya juga tetapi bukan yang terkecil.",kira:()=>6%2===0 && 6%3===0},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x = 7. Berapakah nilai (x + 1)/2 + (x − 1)/3 di sebelah kiri?",b:6,tol:0.01,u:"(7 + 1)/2 + (7 − 1)/3 = 4 + 2 = 6.",kira:()=>(7+1)/2+(7-1)/3},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x = 7. Berapakah nilai (5x + 1)/6 di sebelah kanan?",b:6,tol:0.01,u:"(5 × 7 + 1)/6 = 36/6 = 6. Nilai ini sama dengan sebelah kiri.",kira:()=>(5*7+1)/6},
 pf("Permudahkan (x + 1)/2 + (x − 1)/3.",x=>(x+1)/2+(x-1)/3,{s:"(5x + 1)/6",f:x=>(5*x+1)/6},[{s:"2x/5",f:x=>2*x/5},{s:"(5x − 1)/6",f:x=>(5*x-1)/6},{s:"(x + 1)/6",f:x=>(x+1)/6}],"Penyebut sepunya ialah 6. 3(x + 1)/6 + 2(x − 1)/6 = (3x + 3 + 2x − 2)/6 = (5x + 1)/6."),
 pf("Permudahkan 3/(2x) + 1/x.",x=>3/(2*x)+1/x,{s:"5/(2x)",f:x=>5/(2*x)},[{s:"4/(3x)",f:x=>4/(3*x)},{s:"4/(2x)",f:x=>4/(2*x)},{s:"3/(2x²)",f:x=>3/(2*x*x)}],"Tukar 1/x kepada 2/(2x). Kemudian 3/(2x) + 2/(2x) = 5/(2x). Penyebut tidak ditambah.",[0]),
 pf("Permudahkan (x + 2)/4 − (x − 1)/6.",x=>(x+2)/4-(x-1)/6,{s:"(x + 8)/12",f:x=>(x+8)/12},[{s:"(x + 4)/12",f:x=>(x+4)/12},{s:"(x + 3)/2",f:x=>(x+3)/2},{s:"(5x + 8)/12",f:x=>(5*x+8)/12}],"Penyebut sepunya 12. 3(x + 2)/12 − 2(x − 1)/12 = (3x + 6 − 2x + 2)/12 = (x + 8)/12."),
 pf("Permudahkan 2/x + 3/(x + 1).",x=>2/x+3/(x+1),{s:"(5x + 2)/(x(x + 1))",f:x=>(5*x+2)/(x*(x+1))},[{s:"5/(2x + 1)",f:x=>5/(2*x+1)},{s:"(5x + 2)/(x + 1)",f:x=>(5*x+2)/(x+1)},{s:"(5x + 2)/x",f:x=>(5*x+2)/x}],"Penyebut sepunya x(x + 1). 2(x + 1)/[x(x + 1)] + 3x/[x(x + 1)] = (2x + 2 + 3x)/[x(x + 1)] = (5x + 2)/[x(x + 1)].",[0,-1]),
 {j:"susun",t:"Susun langkah menambah (x + 1)/2 + (x − 1)/3.",p:["Cari penyebut sepunya, iaitu 6","Tulis 3(x + 1)/6 + 2(x − 1)/6","Tambah pengangka: (3x + 3 + 2x − 2)/6","Kumpul sebutan serupa untuk mendapat (5x + 1)/6"],b:[0,1,2,3],u:"Samakan penyebut dahulu, tulis semula pengangka, tambah, kemudian kumpul sebutan serupa.",kira:()=>3*1+2*(-1)===1 && 3+2===5}],
 bos:pf("Permudahkan (2x + 1)/3 − (x − 2)/6.",x=>(2*x+1)/3-(x-2)/6,{s:"(3x + 4)/6",f:x=>(3*x+4)/6},[{s:"3x/6",f:x=>3*x/6},{s:"(x + 3)/6",f:x=>(x+3)/6},{s:"(5x + 4)/6",f:x=>(5*x+4)/6}],"Tukar kepada penyebut 6: 2(2x + 1)/6 − (x − 2)/6 = (4x + 2 − x + 2)/6 = (3x + 4)/6. Tanda tolak meliputi kedua-dua sebutan x − 2.")},

{n:6, tempat:"Reka Ungkapan", sk:"2.3.2 / 2.3.3 Pendaraban, pembahagian dan gabungan operasi ungkapan algebra", lampiran:"darab",
 kadNama:"Gugur Faktor", kadEm:"✂️", kadFakta:"Faktor yang sama pada pengangka dan penyebut boleh digugurkan, tetapi faktor itu tidak boleh sama dengan sifar.",
 bosKadNama:"Penyebut Sifar", bosKadEm:"\u{1F6AB}", bosKadFakta:"Pembahagian dengan sifar tidak tertakrif. Dalam Rajah 1, x = −3 menjadikan penyebut 3/(x + 3) sifar.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x = 9. Berapakah nilai (x² − 9)/6?",b:12,tol:0.01,u:"(81 − 9)/6 = 72/6 = 12.",kira:()=>(9*9-9)/6},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x = 9. Berapakah nilai 3/(x + 3)?",b:0.25,tol:0.001,u:"3/(9 + 3) = 3/12 = 0.25.",kira:()=>3/(9+3)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x = 9. Berapakah nilai (x − 3)/2 di sebelah kanan?",b:3,tol:0.01,u:"(9 − 3)/2 = 3. Hasil darab di sebelah kiri ialah 12 × 0.25 = 3, sama dengan sebelah kanan.",kira:()=>(9-3)/2},
 faktor([1,0,-9],[[1,3],[1,-3]],[[[1,-3],[1,-3]],[[1,3],[1,3]],[[1,9],[1,-1]]],"x² − 9 = (x + 3)(x − 3). Faktor (x + 3) kemudian boleh digugurkan dengan penyebut x + 3.","Faktorkan x² − 9 sebelum menggugurkan faktor sepunya dalam Rajah 1. Hasilnya ialah:"),
 pf("Permudahkan (x² − 9)/6 × 3/(x + 3).",x=>(x*x-9)/6*3/(x+3),{s:"(x − 3)/2",f:x=>(x-3)/2},[{s:"(x + 3)/2",f:x=>(x+3)/2},{s:"(x − 3)/6",f:x=>(x-3)/6},{s:"(x² − 9)/2",f:x=>(x*x-9)/2}],"Faktorkan x² − 9 = (x + 3)(x − 3). Gugurkan (x + 3), dan 3/6 = 1/2. Hasilnya (x − 3)/2.",[-3]),
 pf("Permudahkan (x + 2)/4 ÷ (x + 2)/8.",x=>((x+2)/4)/((x+2)/8),{s:"2",f:x=>2},[{s:"1/2",f:x=>1/2},{s:"(x + 2)/2",f:x=>(x+2)/2},{s:"(x + 2)/8",f:x=>(x+2)/8}],"Bahagi dengan pecahan bermaksud darab dengan songsangnya: (x + 2)/4 × 8/(x + 2) = 8/4 = 2.",[-2]),
 pf("Permudahkan (6x + 12)/9.",x=>(6*x+12)/9,{s:"(2x + 4)/3",f:x=>(2*x+4)/3},[{s:"(2x + 12)/3",f:x=>(2*x+12)/3},{s:"(6x + 4)/3",f:x=>(6*x+4)/3},{s:"(x + 2)/3",f:x=>(x+2)/3}],"Faktor sepunya 3 pada pengangka dan penyebut: (6x + 12)/9 = 3(2x + 4)/(3 × 3) = (2x + 4)/3. Bahagikan SEMUA sebutan pengangka."),
 {j:"nombor",t:"Permudahkan (2x + 4)/(x + 2). Berapakah nilainya apabila x = 5?",b:2,tol:0.01,u:"2x + 4 = 2(x + 2), jadi (2x + 4)/(x + 2) = 2 untuk semua x selain −2. Apabila x = 5 nilainya ialah 14/7 = 2.",kira:()=>(2*5+4)/(5+2)}],
 bos:{j:"buka",
  t:"Reka satu ungkapan pecahan algebra yang boleh dipermudahkan menggunakan pemfaktoran, dan tunjukkan bahawa jawapan awak betul.",
  arahan:"Tulis pecahan awak, faktorkan pengangka dan penyebut, gugurkan faktor sepunya, dan semak dengan menggantikan satu nilai x pada bentuk asal dan bentuk termudah. Nyatakan satu nilai x yang tidak dibenarkan dan sebabnya.",
  u:"Jawapan TP6 yang kukuh membina ungkapan yang boleh difaktorkan, mempermudahkannya dengan betul, menyemak dengan menggantikan nilai x pada kedua-dua bentuk, dan mengenal pasti nilai x yang menjadikan penyebut sifar."}}
];

module.exports = {
  id:"m2b2", tingkatan:2, kod:"2.0 Pemfaktoran dan Pecahan Algebra",
  tajuk:"Kilang Faktor",
  subtajuk:"Matematik Ting. 2 · Bab 2 Pemfaktoran dan Pecahan Algebra",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat menyatakan maksud kembangan dan mengenal faktor, serta melihat jubin algebra sebagai luas segi empat. Langkah seterusnya ialah melaksanakan kembangan yang melibatkan sebutan negatif.",
   2:"{n} memahami konsep kembangan dan pemfaktoran sebagai proses yang songsang antara satu sama lain, serta boleh mengembangkan dua ungkapan linear. Perlu lebih latihan sebelum bergerak ke TP3.",
   3:"{n} boleh mengembangkan dan memfaktorkan ungkapan algebra mudah, termasuk mengeluarkan faktor sepunya dan memfaktorkan x² + bx + c. Galakkan menyemak jawapan dengan mengembangkan semula.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah menggunakan kembangan dan pemfaktoran, termasuk beza dua kuasa dua. Seterusnya latih ungkapan algebra dalam bentuk pecahan.",
   5:"{n} dapat menambah dan menolak pecahan algebra dengan penyebut sepunya, termasuk ungkapan dengan penyebut yang mengandungi pemboleh ubah. Sudah bersedia untuk pendaraban, pembahagian dan gabungan operasi.",
   6:"{n} berjaya melaksanakan gabungan operasi pecahan algebra dengan pemfaktoran dan menyemaknya menggunakan nilai x, serta sedar akan nilai x yang tidak dibenarkan. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pemfaktoran dan Pecahan Algebra. Cadangan: ulang hentian pertama dengan Rajah 1 sambil mengaitkan setiap jalur dan petak dengan sebutan dalam hasil kembangan."
  },
  lampiran:{ kem:R_KEM, jad:R_JAD, fak:R_FAK, beza:R_BEZA, tambah:R_TAMBAH, darab:R_DARAB },
  aras:ARAS
};
