/* Sumber kandungan — Matematik KSSM Tingkatan 5, Bab 7 Sukatan Serakan Data Terkumpul.
   Fail ini disunting tangan. Jalankan `node bina.js m5b7`.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 4
   dan 5, muka 111 (dskp/matematik-t4-t5.pdf). DSKP menulis enam tahap penuh.
   Nota DSKP: histogram dan poligon kekerapan bagi data selanjar dengan selang kelas sama;
   had, sempadan, titik tengah, saiz selang, kekerapan longgokan; ogif dikaitkan dengan
   histogram longgokan; kuartil dan persentil daripada ogif; JAK hanya daripada ogif;
   varians σ² = Σfx²/Σf − x̄² dengan x titik tengah; plot kotak dikaitkan dengan ogif;
   projek mini inkuiri statistik.

   Dalam rajah, titik ogif dihubungkan dengan garis lurus supaya bacaan boleh dikira tepat;
   toleransi bacaan ogif ±0.5 kerana murid membaca daripada graf.
   Rajah: widget t5kumpul (widget-m5b7.js). Statistik dikira dengan stat() di bawah. */

const bul = (n, d) => Math.round(n * Math.pow(10, d)) / Math.pow(10, d);
const KELAS = [[10, 19], [20, 29], [30, 39], [40, 49], [50, 59], [60, 69]];
const stat = (K, f) => {
  const x = K.map(k => (k[0] + k[1]) / 2); let n = 0, s1 = 0, s2 = 0; const lg = [];
  f.forEach((v, i) => { n += v; s1 += v * x[i]; s2 += v * x[i] * x[i]; lg.push(n); });
  const tx = [K[0][0] - 0.5].concat(K.map(k => k[1] + 0.5)), ty = [0].concat(lg);
  const baca = k => { for (let i = 1; i < ty.length; i++) if (k <= ty[i] + 1e-9) return tx[i - 1] + (k - ty[i - 1]) / (ty[i] - ty[i - 1]) * (tx[i] - tx[i - 1]); };
  const min = s1 / n, v = s2 / n - min * min;
  return { n, x, sfx: s1, sfx2: s2, min, varians: v, sp: Math.sqrt(v), lg, baca, Q1: baca(n / 4), median: baca(n / 2), Q3: baca(3 * n / 4) };
};
const FA = [4, 8, 12, 10, 4, 2], FB = [1, 5, 14, 15, 4, 1], A = stat(KELAS, FA), B = stat(KELAS, FB);
const BENTUK = [
  { nama: "Simetri", f: [2, 6, 12, 12, 6, 2], ket: ["Simetri: min = median"] },
  { nama: "Pencong ke kanan", f: [12, 14, 8, 4, 1, 1], ket: ["Ekor panjang ke kanan:", "min > median"] },
  { nama: "Pencong ke kiri", f: [1, 1, 4, 8, 14, 12], ket: ["Ekor panjang ke kiri:", "min < median"] },
  { nama: "Seragam", f: [6, 6, 6, 6, 6, 6], ket: ["Kekerapan sama bagi", "setiap kelas"] }];
const SB = BENTUK.map(b => stat(KELAS, b.f));

const SPI = [
"Mempamerkan pengetahuan asas tentang serakan dan sukatan serakan data terkumpul.",
"Mempamerkan kefahaman tentang serakan dan sukatan serakan data terkumpul.",
"Mengaplikasikan kefahaman tentang serakan dan sukatan serakan data terkumpul untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sukatan serakan data terkumpul dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sukatan serakan data terkumpul dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sukatan serakan data terkumpul dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran ---------- */
const iw = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t5kumpul", kapsyen, alt }, extra);
const DATA = { kelas: KELAS, f: FA, tajuk: "Masa kerja rumah (minit)", labelX: "Masa (minit)" };
const R1 = iw("Rajah 1 · Masa yang diambil oleh 40 orang murid 5 Amanah untuk menyiapkan kerja rumah. Pilih selang kelas.",
  "Rajah interaktif jadual kekerapan enam selang kelas dari 10 hingga 69 minit dengan titik tengah, kekerapan dan kekerapan longgokan; selang yang dipilih menunjukkan had, sempadan dan saiz selang",
  Object.assign({ mod: "jadual", iAwal: 2 }, DATA));
const R2 = iw("Rajah 1 · Masa kerja rumah 40 orang murid 5 Amanah. Pilih perwakilan data.",
  "Rajah interaktif histogram, poligon kekerapan dan histogram longgokan bagi masa kerja rumah 40 orang murid",
  Object.assign({ mod: "graf" }, DATA));
const R3 = iw("Rajah 1 · Ogif masa kerja rumah 40 orang murid 5 Amanah. Gerakkan persentil.",
  "Rajah interaktif ogif dengan garis bacaan bagi persentil ke-10, 25, 50, 75 dan 90; kuartil dan julat antara kuartil dipaparkan",
  Object.assign({ mod: "ogif", ps: [10, 25, 50, 75, 90], pAwal: 1 }, DATA));
const R4 = iw("Rajah 1 · Pengiraan min, varians dan sisihan piawai bagi masa kerja rumah 5 Amanah.",
  "Rajah interaktif jadual titik tengah, fx dan fx kuasa dua, kemudian min, varians dan sisihan piawai dikira langkah demi langkah",
  Object.assign({ mod: "sukatan" }, DATA));
const R5 = iw("Rajah 1 · Masa kerja rumah 5 Amanah dan 5 Bestari (40 orang murid setiap kelas). Kira dahulu, kemudian semak.",
  "Rajah interaktif perbandingan dua kelas dengan poligon kekerapan atau plot kotak, serta min, sisihan piawai dan julat antara kuartil, dalam mod cabar",
  { mod: "banding", cabar: true, kelas: KELAS, fA: FA, fB: FB, namaA: "5 Amanah", namaB: "5 Bestari", tajuk: "Masa kerja rumah (minit)", labelX: "Masa (minit)" });
const R6 = iw("Rajah 1 · Empat bentuk taburan data terkumpul. Pilih bentuk.",
  "Rajah interaktif histogram empat bentuk taburan: simetri, pencong ke kanan, pencong ke kiri dan seragam, dengan garis min dan median",
  { mod: "bentuk", kelas: KELAS, bentuk: BENTUK, labelX: "Masa (minit)" });

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Bilik Jadual", sk:"7.1.1 Selang kelas, sempadan, titik tengah dan kekerapan longgokan", lampiran:"r1",
 kadNama:"Sempadan Kelas", kadEm:"\u{1F4CB}", kadFakta:"Sempadan bawah = had bawah − 0.5 dan sempadan atas = had atas + 0.5. Saiz selang = sempadan atas − sempadan bawah.",
 bosKadNama:"Longgokan", bosKadEm:"\u{1F4DA}", bosKadFakta:"Kekerapan longgokan memberitahu bilangan data yang kurang daripada sempadan atas sesuatu kelas.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih selang 30 – 39. Berapakah titik tengahnya?",tol:0.01,b:34.5,u:"Titik tengah = (30 + 39) ÷ 2 = 34.5.",kira:()=>A.x[2]},
 {j:"nombor",t:"Dalam Rajah 1, pilih selang 30 – 39. Berapakah sempadan atasnya?",tol:0.01,b:39.5,u:"Sempadan atas = had atas + 0.5 = 39 + 0.5 = 39.5.",kira:()=>KELAS[2][1]+0.5},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah saiz selang kelas?",tol:0.01,b:10,u:"Saiz selang = sempadan atas − sempadan bawah = 39.5 − 29.5 = 10.",kira:()=>(KELAS[2][1]+0.5)-(KELAS[2][0]-0.5)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah kekerapan longgokan bagi selang 40 – 49?",tol:0.01,b:34,u:"Kekerapan longgokan = 4 + 8 + 12 + 10 = 34.",kira:()=>A.lg[3]},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah bilangan murid yang mengambil masa kurang daripada 29.5 minit?",tol:0.01,b:12,u:"29.5 ialah sempadan atas kelas 20 – 29. Kekerapan longgokan kelas itu = 4 + 8 = 12.",kira:()=>A.lg[1]},
 {j:"pilih",t:"Histogram dan poligon kekerapan dibina bagi:",p:["Data selanjar","Data kategori","Data yang tidak boleh diukur","Data kualitatif"],b:0,u:"Menurut DSKP, histogram dan poligon kekerapan dibina menggunakan data selanjar seperti masa, jisim dan tinggi."},
 {j:"pilih",t:"Berdasarkan Rajah 1, sempadan bawah bagi selang kelas 20 – 29 ialah:",p:["19.5","20","20.5","19"],b:0,u:"Sempadan bawah = had bawah − 0.5 = 20 − 0.5 = 19.5. Ia juga sempadan atas kelas sebelumnya.",kira:()=>KELAS[1][0]-0.5},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah jumlah bilangan murid?",tol:0.01,b:40,u:"Jumlah kekerapan = 4 + 8 + 12 + 10 + 4 + 2 = 40, iaitu kekerapan longgokan kelas terakhir.",kira:()=>A.n}],
 bos:{j:"nombor",t:"Berdasarkan Rajah 1, berapakah peratus murid yang mengambil masa sekurang-kurangnya 49.5 minit?",tol:0.01,b:15,u:"Langkah 1: masa ≥ 49.5 minit meliputi kelas 50 – 59 dan 60 – 69. Langkah 2: bilangan = 4 + 2 = 6. Langkah 3: 6 ÷ 40 × 100% = 15%.",kira:()=>(A.n-A.lg[3])/A.n*100}},

{n:2, tempat:"Studio Histogram", sk:"7.1.1 / 7.1.2 Histogram, poligon kekerapan dan bentuk taburan", lampiran:"r2",
 kadNama:"Histogram", kadEm:"\u{1F4CA}", kadFakta:"Dalam histogram, palang bersebelahan tanpa ruang kerana data selanjar. Lebar palang ialah saiz selang dari sempadan ke sempadan.",
 bosKadNama:"Bandingkan Serakan", bosKadEm:"\u{1F50D}", bosKadFakta:"Poligon yang tinggi dan sempit menunjukkan data berkumpul di tengah (kurang tersebar); poligon yang rendah dan lebar menunjukkan data lebih tersebar.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih Histogram. Lebar setiap palang mewakili:",p:["Saiz selang kelas","Kekerapan bagi setiap kelas","Titik tengah bagi setiap kelas","Kekerapan longgokan bagi kelas itu"],b:0,u:"Palang histogram bermula pada sempadan bawah dan berakhir pada sempadan atas, jadi lebarnya ialah saiz selang kelas. Tingginya ialah kekerapan."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Poligon kekerapan. Titik diplot pada:",p:["Titik tengah kelas dan kekerapannya","Sempadan atas dan kekerapan longgokan","Had bawah kelas dan kekerapannya","Sempadan bawah dan kekerapan longgokan"],b:0,u:"Poligon kekerapan menghubungkan titik (titik tengah, kekerapan). Sempadan atas dan kekerapan longgokan digunakan untuk ogif."},
 {j:"pilih",t:"Berdasarkan Rajah 1, kelas mod ialah:",p:["30 – 39","40 – 49","20 – 29","60 – 69"],b:0,u:"Kelas mod ialah kelas dengan kekerapan tertinggi, iaitu 30 – 39 dengan 12 orang murid.",kira:()=>FA.indexOf(Math.max(...FA))===2},
 {j:"pilih",t:"Mengapakah poligon kekerapan dalam Rajah 1 bermula dan berakhir pada paksi mengufuk?",p:["Kelas tambahan dengan kekerapan sifar ditambah di kedua-dua hujung","Kekerapan kelas pertama dan terakhir ialah sifar","Poligon kekerapan mesti melalui asalan","Supaya luas poligon lebih besar daripada histogram"],b:0,u:"Satu kelas berkekerapan sifar ditambah sebelum kelas pertama (titik tengah 4.5) dan selepas kelas terakhir (titik tengah 74.5) untuk menutup poligon."},
 {j:"nombor",t:"Dalam Rajah 1, pilih Histogram longgokan. Berapakah tinggi palang bagi kelas 50 – 59?",tol:0.01,b:38,u:"Tinggi palang histogram longgokan ialah kekerapan longgokan: 4 + 8 + 12 + 10 + 4 = 38.",kira:()=>A.lg[4]},
 {j:"pilih",t:"Berdasarkan bentuk histogram dalam Rajah 1, taburan masa kerja rumah itu:",p:["Hampir simetri, sedikit pencong ke kanan","Pencong ke kiri dengan ekor yang sangat panjang","Seragam dengan kekerapan sama bagi setiap kelas","Mempunyai dua puncak yang jelas dan terpisah"],b:0,u:"Palang tertinggi berada di tengah dengan ekor yang sedikit lebih panjang ke kanan (kelas 60 – 69). Min (36.5) sedikit lebih besar daripada median (36.2).",kira:()=>A.min>A.median},
 {j:"pilih",t:"Poligon kekerapan lebih sesuai daripada histogram untuk:",p:["Membandingkan dua set data pada paksi yang sama","Menunjukkan kekerapan longgokan setiap kelas","Mengira sisihan piawai dengan tepat","Mewakili data kategori seperti warna"],b:0,u:"Dua poligon boleh dilukis pada paksi yang sama tanpa menutup antara satu sama lain, jadi taburan dua kumpulan mudah dibandingkan."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah beza antara kekerapan kelas mod dan kekerapan kelas 60 – 69?",tol:0.01,b:10,u:"Kekerapan kelas mod = 12, kekerapan kelas 60 – 69 = 2. Beza = 10.",kira:()=>Math.max(...FA)-FA[5]}],
 bos:{j:"pilih",t:"Poligon kekerapan masa kerja rumah 5 Bestari lebih tinggi dan lebih sempit di tengah berbanding poligon 5 Amanah dalam Rajah 1. Kesimpulan yang sesuai ialah:",p:["Masa kerja rumah 5 Bestari kurang tersebar","Masa kerja rumah 5 Bestari lebih tersebar","Min masa 5 Bestari pasti lebih rendah","Bilangan murid 5 Bestari pasti lebih ramai"],b:0,u:"Poligon yang tinggi dan sempit bermaksud lebih ramai murid berada di kelas tengah, jadi data kurang tersebar. Bentuk poligon tidak menentukan min atau bilangan murid secara langsung."}},

{n:3, tempat:"Bukit Ogif", sk:"7.1.3 Ogif, kuartil dan persentil", lampiran:"r3",
 kadNama:"Ogif", kadEm:"\u{1F4C8}", kadFakta:"Ogif diplot pada (sempadan atas, kekerapan longgokan), bermula pada (sempadan bawah kelas pertama, 0). Q1, median dan Q3 dibaca pada ¼n, ½n dan ¾n.",
 bosKadNama:"Persentil", bosKadEm:"\u{1F3AF}", bosKadFakta:"Persentil ke-p ialah nilai yang p% data kurang daripada atau sama dengannya. P25 = Q1, P50 = median, P75 = Q3.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih P25. Berapakah kuartil pertama, Q1, dalam minit?",tol:0.5,b:27,u:"Kedudukan Q1 = ¼ × 40 = 10. Garis mengufuk pada 10 bertemu ogif pada kira-kira 27 minit.",kira:()=>A.Q1},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah median, dalam minit? Berikan jawapan betul kepada satu tempat perpuluhan.",tol:0.5,b:36.2,u:"Kedudukan median = ½ × 40 = 20. Daripada ogif, median ≈ 36.2 minit.",kira:()=>bul(A.median,1)},
 {j:"nombor",t:"Dalam Rajah 1, pilih P75. Berapakah kuartil ketiga, Q3, dalam minit?",tol:0.5,b:45.5,u:"Kedudukan Q3 = ¾ × 40 = 30. Daripada ogif, Q3 ≈ 45.5 minit.",kira:()=>A.Q3},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah julat antara kuartil, dalam minit?",tol:0.5,b:18.5,u:"JAK = Q3 − Q1 = 45.5 − 27 = 18.5 minit.",kira:()=>A.Q3-A.Q1},
 {j:"nombor",t:"Dalam Rajah 1, pilih P90. Berapakah persentil ke-90, dalam minit?",tol:0.5,b:54.5,u:"Kedudukan = 90% × 40 = 36. Daripada ogif, P90 ≈ 54.5 minit.",kira:()=>A.baca(36)},
 {j:"pilih",t:"Berdasarkan Rajah 1, titik pertama ogif diplot pada:",p:["(9.5, 0)","(10, 4)","(14.5, 4)","(0, 0)"],b:0,u:"Ogif bermula pada sempadan bawah kelas pertama (9.5) dengan kekerapan longgokan 0, kerana tiada murid mengambil masa kurang daripada 9.5 minit."},
 {j:"pilih",t:"Persentil ke-90 bermaksud:",p:["90% data kurang daripada atau sama dengan nilai itu","90 orang murid mendapat nilai itu","Nilai itu ialah 90% daripada nilai maksimum","10% data kurang daripada nilai itu"],b:0,u:"Persentil ke-90 membahagikan data supaya 90% berada di bawahnya dan 10% di atasnya."},
 {j:"nombor",t:"Berdasarkan Rajah 1, anggarkan bilangan murid yang mengambil masa kurang daripada 45.5 minit.",tol:0.5,b:30,u:"45.5 minit ialah Q3, jadi kira-kira ¾ × 40 = 30 orang murid mengambil masa kurang daripadanya.",kira:()=>A.baca(30)===45.5?30:0}],
 bos:{j:"nombor",t:"Berdasarkan Rajah 1, guru ingin memberi bimbingan kepada 10% murid yang paling lambat menyiapkan kerja rumah. Berapakah masa minimum, dalam minit, bagi kumpulan itu?",tol:0.5,b:54.5,u:"Langkah 1: 10% paling lambat bermaksud murid di atas persentil ke-90. Langkah 2: kedudukan = 90% × 40 = 36. Langkah 3: daripada ogif, P90 ≈ 54.5 minit.",kira:()=>A.baca(36)}},

{n:4, tempat:"Meja Kira", sk:"7.2.1 Julat, varians dan sisihan piawai data terkumpul", lampiran:"r4",
 kadNama:"Rumus Varians", kadEm:"\u{1F9EE}", kadFakta:"σ² = Σfx²/Σf − x̄², dengan x titik tengah kelas. Sisihan piawai σ = √σ².",
 bosKadNama:"Tambah Seragam", bosKadEm:"\u{2795}", bosKadFakta:"Menambah nilai yang sama kepada setiap data mengubah min tetapi tidak mengubah sisihan piawai.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, berapakah Σfx?",tol:0.01,b:1460,u:"Σfx = 4(14.5) + 8(24.5) + 12(34.5) + 10(44.5) + 4(54.5) + 2(64.5) = 1 460.",kira:()=>A.sfx},
 {j:"nombor",t:"Dalam Rajah 1, pilih Min. Berapakah min masa, dalam minit?",tol:0.01,b:36.5,u:"x̄ = Σfx ÷ Σf = 1 460 ÷ 40 = 36.5 minit.",kira:()=>A.min},
 {j:"nombor",t:"Dalam Rajah 1, berapakah Σfx²?",tol:0.01,b:59930,u:"Σfx² = 4(14.5²) + 8(24.5²) + 12(34.5²) + 10(44.5²) + 4(54.5²) + 2(64.5²) = 59 930.",kira:()=>A.sfx2},
 {j:"nombor",t:"Dalam Rajah 1, pilih Varians dan σ. Berapakah varians?",tol:0.01,b:166,u:"σ² = 59 930 ÷ 40 − 36.5² = 1 498.25 − 1 332.25 = 166.",kira:()=>bul(A.varians,6)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah sisihan piawai, dalam minit? Berikan jawapan betul kepada dua tempat perpuluhan.",tol:0.005,b:12.88,u:"σ = √166 = 12.88 minit.",kira:()=>bul(A.sp,2)},
 {j:"nombor",t:"Julat bagi data terkumpul ialah beza antara titik tengah kelas tertinggi dan titik tengah kelas terendah. Berdasarkan Rajah 1, berapakah julat, dalam minit?",tol:0.01,b:50,u:"Julat = 64.5 − 14.5 = 50 minit.",kira:()=>A.x[5]-A.x[0]},
 {j:"pilih",t:"Mengapakah titik tengah, x, digunakan dalam rumus varians bagi data terkumpul?",p:["Nilai sebenar tidak diketahui; titik tengah mewakili kelas","Titik tengah setiap kelas sentiasa sama dengan min data itu","Titik tengah memberi nilai sisihan piawai yang tepat sepenuhnya","Rumus varians tidak boleh digunakan dengan sempadan kelas"],b:0,u:"Dalam data terkumpul, kita hanya tahu bilangan data dalam setiap kelas. Titik tengah ialah anggaran terbaik bagi setiap data dalam kelas itu, jadi σ ialah anggaran."},
 {j:"nombor",t:"Suatu set data terkumpul mempunyai Σf = 50, Σfx = 1 500 dan Σfx² = 47 000. Hitung sisihan piawai, betul kepada dua tempat perpuluhan.",tol:0.005,b:6.32,u:"x̄ = 1 500 ÷ 50 = 30. σ² = 47 000 ÷ 50 − 30² = 940 − 900 = 40. σ = √40 = 6.32.",kira:()=>bul(Math.sqrt(47000/50-900),2)}],
 bos:{j:"nombor",t:"Setiap murid dalam Rajah 1 diberi 5 minit tambahan untuk menyiapkan kerja rumah, jadi setiap masa bertambah 5 minit. Berapakah sisihan piawai yang baharu, dalam minit, betul kepada dua tempat perpuluhan?",tol:0.005,b:12.88,u:"Langkah 1: setiap titik tengah bertambah 5, jadi min bertambah 5 menjadi 41.5. Langkah 2: jarak setiap data dari min tidak berubah. Langkah 3: σ kekal 12.88 minit.",kira:()=>bul(stat(KELAS.map(k=>[k[0]+5,k[1]+5]),FA).sp,2)}},

{n:5, tempat:"Arena Banding", sk:"7.2.2 – 7.2.4 Plot kotak dan perbandingan dua set data", lampiran:"r5",
 kadNama:"Plot Kotak", kadEm:"\u{1F4E6}", kadFakta:"Plot kotak data terkumpul menggunakan sempadan bawah kelas pertama, Q1, median, Q3 dan sempadan atas kelas terakhir yang dibaca daripada ogif.",
 bosKadNama:"Data Baharu", bosKadEm:"\u{1F465}", bosKadFakta:"Apabila data ditambah, kira semula Σf dan Σfx sebelum mengira min yang baharu.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung min masa kerja rumah 5 Bestari, dalam minit. Kira dahulu, kemudian semak.",tol:0.01,b:39.25,u:"Σfx = 1(14.5) + 5(24.5) + 14(34.5) + 15(44.5) + 4(54.5) + 1(64.5) = 1 570. x̄ = 1 570 ÷ 40 = 39.25 minit.",kira:()=>B.min},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah sisihan piawai masa 5 Bestari, dalam minit? Berikan jawapan betul kepada dua tempat perpuluhan.",tol:0.01,b:10,u:"Σfx² = 65 620. σ² = 65 620 ÷ 40 − 39.25² = 1 640.5 − 1 540.5625 = 99.94. σ = √99.94 = 10.00 minit.",kira:()=>bul(B.sp,2)},
 {j:"pilih",t:"Berdasarkan Rajah 1, kelas manakah lebih konsisten dalam masa kerja rumah?",p:["5 Bestari, kerana σ lebih kecil","5 Amanah, kerana min lebih kecil","5 Amanah, kerana julat lebih besar","5 Bestari, kerana min lebih besar"],b:0,u:"σ 5 Bestari = 10.00 dan σ 5 Amanah = 12.88. Sisihan piawai yang lebih kecil bermaksud masa murid lebih dekat dengan min.",kira:()=>B.sp<A.sp},
 {j:"nombor",t:"Dalam Rajah 1, pilih Plot kotak. Berapakah julat antara kuartil 5 Bestari, dalam minit? Berikan jawapan betul kepada satu tempat perpuluhan.",tol:0.5,b:13.8,u:"Daripada ogif 5 Bestari, Q1 ≈ 32.4 dan Q3 ≈ 46.2. JAK ≈ 13.8 minit.",kira:()=>bul(B.Q3-B.Q1,1)},
 {j:"pilih",t:"Dalam Rajah 1, pilih Plot kotak. Kotak 5 Amanah lebih panjang. Ini bermaksud:",p:["50% data di tengah 5 Amanah lebih tersebar","Min masa 5 Amanah lebih besar","5 Amanah mempunyai lebih ramai murid","Median masa 5 Amanah lebih besar"],b:0,u:"Panjang kotak ialah JAK, iaitu serakan 50% data di tengah. JAK 5 Amanah (18.5) lebih besar daripada 5 Bestari (13.8).",kira:()=>A.Q3-A.Q1>B.Q3-B.Q1},
 {j:"pilih",t:"Ogif dan plot kotak bagi data terkumpul berkait kerana:",p:["Kuartil bagi plot kotak dibaca daripada ogif","Kedua-duanya diplot pada titik tengah kelas","Plot kotak dibina daripada poligon kekerapan","Ogif menunjukkan min dan sisihan piawai"],b:0,u:"Menurut DSKP, JAK data terkumpul ditentukan daripada ogif, dan nilai Q1, median dan Q3 itu digunakan untuk melukis plot kotak."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah beza min masa antara 5 Bestari dan 5 Amanah, dalam minit?",tol:0.01,b:2.75,u:"Min 5 Bestari = 39.25, min 5 Amanah = 36.5. Beza = 2.75 minit.",kira:()=>B.min-A.min},
 {j:"pilih",t:"Seorang guru berkata, '5 Bestari lebih rajin kerana min masa kerja rumahnya lebih tinggi.' Berdasarkan Rajah 1, ulasan yang paling sesuai ialah:",p:["Beza min kecil, dan masa sahaja tidak mengukur kualiti kerja","Pernyataan itu terbukti benar oleh plot kotak","Pernyataan itu salah kerana min 5 Amanah lebih tinggi","Min dua kelas tidak boleh dibandingkan langsung"],b:0,u:"Beza min hanya 2.75 minit. Masa yang lebih lama boleh bermaksud lebih rajin atau lebih sukar memahami tugasan, jadi kesimpulan memerlukan data lain."}],
 bos:{j:"nombor",t:"Dua orang murid baharu menyertai 5 Bestari dan masing-masing mengambil masa dalam kelas 60 – 69 minit. Berdasarkan Rajah 1, hitung min baharu 5 Bestari, dalam minit, betul kepada dua tempat perpuluhan.",tol:0.01,b:40.45,u:"Langkah 1: Σfx baharu = 1 570 + 2(64.5) = 1 699. Langkah 2: Σf baharu = 42. Langkah 3: x̄ = 1 699 ÷ 42 = 40.45 minit.",kira:()=>bul(stat(KELAS,[1,5,14,15,4,3]).min,2)}},

{n:6, tempat:"Pusat Penyiasat", sk:"7.1.2 / 7.2.5 Bentuk taburan dan projek mini penyiasatan statistik", lampiran:"r6",
 kadNama:"Bentuk Taburan", kadEm:"\u{1F52C}", kadFakta:"Taburan pencong ke kanan mempunyai ekor panjang ke kanan dan min > median; pencong ke kiri sebaliknya; taburan simetri mempunyai min = median.",
 bosKadNama:"Penyiasat Statistik", bosKadEm:"\u{1F575}\u{FE0F}", bosKadFakta:"Laporan projek mini: soalan statistik, kaedah pengumpulan, pengorganisasian data, perwakilan grafik, analisis, huraian dan rumusan.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih Pencong ke kanan. Hubungan antara min dan median ialah:",p:["Min lebih besar daripada median","Min lebih kecil daripada median","Min sama dengan median","Min ialah dua kali median"],b:0,u:"Ekor ke kanan mengandungi nilai besar yang menarik min ke kanan: min 27.25 > median 25.2.",kira:()=>SB[1].min>SB[1].median},
 {j:"pilih",t:"Dalam Rajah 1, pilih Simetri. Hubungan antara min dan median ialah:",p:["Min sama dengan median","Min lebih besar daripada median","Min lebih kecil daripada median","Min ialah dua kali median"],b:0,u:"Dalam taburan simetri, kedua-dua belah sama, jadi min = median = 39.5.",kira:()=>Math.abs(SB[0].min-SB[0].median)<1e-9},
 {j:"pilih",t:"Dalam Rajah 1, pilih Pencong ke kiri. Sukatan kecenderungan memusat yang lebih sesuai untuk mewakili data itu ialah:",p:["Median, kerana kurang dipengaruhi nilai ekstrem","Min, kerana menggunakan setiap nilai data","Mod, kerana nilainya sentiasa unik","Julat, kerana ia mengukur pusat data"],b:0,u:"Dalam taburan pencong, nilai ekstrem di ekor menarik min. Median lebih mewakili nilai tipikal."},
 {j:"nombor",t:"Dalam Rajah 1, pilih Pencong ke kanan. Berapakah min, dalam minit? Berikan jawapan betul kepada dua tempat perpuluhan.",tol:0.01,b:27.25,u:"Σfx = 12(14.5) + 14(24.5) + 8(34.5) + 4(44.5) + 1(54.5) + 1(64.5) = 1 090. x̄ = 1 090 ÷ 40 = 27.25 minit.",kira:()=>SB[1].min},
 {j:"pilih",t:"Langkah pertama dalam satu penyiasatan statistik ialah:",p:["Membina soalan statistik","Melukis histogram bagi data","Mengira sisihan piawai data","Menulis rumusan dapatan kajian"],b:0,u:"Penyiasatan bermula dengan soalan statistik. Soalan itu menentukan data yang perlu dikumpul dan cara menganalisisnya."},
 {j:"pilih",t:"Seorang murid ingin membandingkan masa tidur murid Tingkatan 4 dan Tingkatan 5. Kaedah pengumpulan data yang paling sesuai ialah:",p:["Soal selidik kepada sampel murid kedua-dua tingkatan","Meneka masa tidur berdasarkan pemerhatian rakan sekelas","Bertanya kepada seorang guru kelas Tingkatan 5 sahaja","Menggunakan data cuaca harian dari laman sesawang"],b:0,u:"Soal selidik kepada sampel yang mewakili kedua-dua kumpulan memberi data sebenar yang boleh dibandingkan."},
 {j:"nombor",t:"Dalam Rajah 1, pilih Seragam. Berapakah kekerapan bagi setiap kelas?",tol:0.01,b:6,u:"Dalam taburan seragam, setiap kelas mempunyai kekerapan yang sama, iaitu 6.",kira:()=>BENTUK[3].f[0]},
 {j:"pilih",t:"Dalam Rajah 1, sisihan piawai taburan pencong ke kanan dan pencong ke kiri adalah sama, iaitu 12.04 minit. Mengapa?",p:["Satu histogram ialah pantulan yang lain","Min kedua-dua taburan itu adalah sama","Median kedua-dua taburan itu adalah sama","Kedua-dua taburan itu adalah simetri"],b:0,u:"Kekerapan pencong ke kiri ialah kekerapan pencong ke kanan yang diterbalikkan. Pusatnya berbeza tetapi jarak data dari min sama.",kira:()=>Math.abs(SB[1].sp-SB[2].sp)<1e-9&&SB[1].min!==SB[2].min}],
 bos:{j:"buka",
  t:"Reka bentuk satu projek mini penyiasatan statistik yang membandingkan dua kumpulan.",
  arahan:"Tulis soalan statistik awak (contohnya masa skrin harian murid lelaki dan perempuan). Terangkan kaedah pengumpulan data dan kumpul atau reka sekurang-kurangnya 30 data bagi setiap kumpulan. Susun data dalam jadual kekerapan dengan selang kelas yang sama, lukis histogram atau poligon kekerapan dan ogif, kemudian kira min, sisihan piawai dan JAK bagi kedua-dua kumpulan. Bandingkan kedua-dua kumpulan, nyatakan bentuk taburan, dan tulis rumusan dengan justifikasi bagi setiap langkah.",
  u:"Jawapan TP6 yang kukuh mengandungi soalan statistik yang jelas, kaedah pengumpulan yang munasabah, jadual dan graf yang betul, sukatan kecenderungan memusat dan serakan yang dikira dengan tepat, perbandingan yang bermakna, serta rumusan dan justifikasi bagi setiap langkah."}}
];

module.exports = {
  id:"m5b7", tingkatan:5, kod:"7.0 Sukatan Serakan Data Terkumpul",
  tajuk:"Makmal Data Terkumpul",
  subtajuk:"Matematik Ting. 5 · Bab 7 Sukatan Serakan Data Terkumpul",
  spi:SPI,
  ulasan:{
   1:"{n} dapat menentukan had, sempadan, titik tengah, saiz selang dan kekerapan longgokan bagi data terkumpul. Langkah seterusnya ialah membina histogram dan poligon kekerapan.",
   2:"{n} memahami histogram, poligon kekerapan dan histogram longgokan serta dapat mentafsir bentuk taburan. Perlu lebih latihan membina ogif.",
   3:"{n} boleh membina ogif dan menentukan kuartil, julat antara kuartil dan persentil daripadanya.",
   4:"{n} mampu mengira min, varians dan sisihan piawai bagi data terkumpul dengan rumus. Seterusnya, bandingkan dua set data.",
   5:"{n} dapat membina plot kotak dan membandingkan dua set data terkumpul menggunakan sukatan serakan untuk membuat kesimpulan. Sudah bersedia untuk projek penyiasatan.",
   6:"{n} berjaya mereka bentuk penyiasatan statistik, mentafsir bentuk taburan dan mengkomunikasikan dapatan dengan justifikasi. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Sukatan Serakan Data Terkumpul. Cadangan: ulang hentian pertama dengan Rajah 1 dan bina jadual kekerapan daripada data tinggi rakan sekelas."
  },
  lampiran:{ r1:R1, r2:R2, r3:R3, r4:R4, r5:R5, r6:R6 },
  aras:ARAS
};
