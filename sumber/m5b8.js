/* Sumber kandungan — Matematik KSSM Tingkatan 5, Bab 8 Pemodelan Matematik.
   Fail ini disunting tangan. Jalankan `node bina.js m5b8`.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 4
   dan 5, muka 115 (dskp/matematik-t4-t5.pdf). DSKP menulis enam tahap penuh; perhatikan
   TP4 khusus fungsi linear dan TP5 serta TP6 khusus fungsi kuadratik dan eksponen.
   Proses pemodelan (DSKP 8.1.1): mengenal pasti dan mendefinisikan masalah; membuat andaian
   dan mengenal pasti pemboleh ubah; mengaplikasi matematik; menentusahkan dan mentafsir
   penyelesaian; memurnikan model; melaporkan dapatan.

   Rajah: widget t5model (widget-m5b8.js). */

const bul = (n, d) => Math.round(n * Math.pow(10, d)) / Math.pow(10, d);
const TEKSI = j => 4 + 1.5 * j;
const PA = { nama: "Pelan A", a: 30, b: 0.1 }, PB = { nama: "Pelan B", a: 50, b: 0.05 };
const pelan = (p, m) => p.a + p.b * m;
const BOLA = t => -5 * t * t + 20 * t + 1.5, SIMPAN = t => 1000 * Math.pow(1.05, t);
const T6 = [0, 1, 2, 3, 4, 5, 6], D6 = [2, 2.6, 3.4, 4.4, 5.7, 7.4, 9.7];
const M6 = [{ nama: "Linear", f: "lin", p: [2, 1.2] }, { nama: "Kuadratik", f: "kuad", p: [2, 0.3, 0.15] }, { nama: "Eksponen", f: "eks", p: [2, 1.3] }];
const ramal = (m, t) => m.f === "lin" ? m.p[0] + m.p[1] * t : m.f === "eks" ? m.p[0] * Math.pow(m.p[1], t) : m.p[0] + m.p[1] * t + m.p[2] * t * t;
const ralatMaks = m => Math.max(...T6.map((t, i) => Math.abs(D6[i] - ramal(m, t))));
const LANGKAH = ["Mengenal pasti dan mendefinisikan masalah", "Membuat andaian dan mengenal pasti pemboleh ubah", "Mengaplikasi matematik untuk menyelesaikan masalah", "Menentusahkan dan mentafsir penyelesaian", "Memurnikan model matematik", "Melaporkan dapatan"];

const SPI = [
"Mempamerkan pengetahuan asas tentang pemodelan matematik.",
"Mempamerkan kefahaman tentang pemodelan matematik.",
"Mengaplikasikan kefahaman tentang pemodelan matematik untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran tentang pemodelan matematik dalam konteks penyelesaian masalah kehidupan sebenar yang melibatkan fungsi linear.",
"Mengaplikasikan pengetahuan dan kemahiran tentang pemodelan matematik dalam konteks penyelesaian masalah kehidupan sebenar yang melibatkan fungsi kuadratik dan eksponen.",
"Mengaplikasikan pengetahuan dan kemahiran tentang pemodelan matematik dalam konteks penyelesaian masalah kehidupan sebenar yang melibatkan fungsi kuadratik dan eksponen secara kreatif."];

/* ---------- lampiran ---------- */
const iw = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t5model", kapsyen, alt }, extra);
const R1 = iw("Rajah 1 · Enam langkah proses pemodelan matematik bagi masalah tambang teksi. Pilih langkah.",
  "Rajah interaktif enam langkah proses pemodelan matematik dengan contoh bagi masalah tambang teksi",
  { mod: "proses", masalah: "tambang teksi", langkah: [
    { t: "Kenal pasti masalah", ket: ["Berapakah tambang bagi suatu jarak?"] },
    { t: "Buat andaian", ket: ["Kadar sekilometer tetap; tiada caj", "menunggu. Pemboleh ubah: jarak j,", "tambang T."] },
    { t: "Aplikasi matematik", ket: ["Bina model linear T = 4 + 1.5j", "daripada dua resit tambang."] },
    { t: "Tentusahkan", ket: ["Bandingkan ramalan dengan resit", "lain: 10 km → RM19, resit RM19.50."] },
    { t: "Murnikan model", ket: ["Tambah caj menunggu jika ralat", "besar pada waktu sesak."] },
    { t: "Laporkan dapatan", ket: ["Tulis laporan atau bentangkan model,", "andaian, ramalan dan hadnya."] }] });
const R2 = iw("Rajah 1 · Tiga set data. Pilih data dan ujian untuk mengenal pasti jenis model.",
  "Rajah interaktif tiga set data: tambang teksi, luas taman dan bilangan bakteria; ujian beza pertama, beza kedua dan nisbah menunjukkan model linear, kuadratik atau eksponen",
  { mod: "pola", set: [
    { nama: "Tambang teksi", namaX: "Jarak (km)", namaY: "Tambang (RM)", x: [1, 2, 3, 4, 5], y: [5.5, 7, 8.5, 10, 11.5] },
    { nama: "Luas taman", namaX: "Sisi (m)", namaY: "Luas (m²)", x: [1, 2, 3, 4, 5], y: [3, 8, 15, 24, 35] },
    { nama: "Bakteria", namaX: "Jam", namaY: "Bilangan", x: [0, 1, 2, 3, 4], y: [50, 100, 200, 400, 800] }] });
const R3 = iw("Rajah 1 · Model tambang teksi T = 4 + 1.5j. Gerakkan jarak.",
  "Rajah interaktif graf linear tambang teksi lawan jarak dengan tambang permulaan RM4 dan RM1.50 sekilometer",
  { mod: "linear", a: 4, b: 1.5, xs: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20], namaX: "j", namaY: "T", unitX: "km", unitY: "RM", iAwal: 4 });
const R4 = iw("Rajah 1 · Dua pelan telefon. Gerakkan bilangan minit panggilan sebulan.",
  "Rajah interaktif dua graf linear: Pelan A RM30 tambah 10 sen seminit dan Pelan B RM50 tambah 5 sen seminit; titik persilangan ditanda",
  { mod: "dua", A: PA, B: PB, xs: [0, 100, 200, 300, 400, 500, 600, 700, 800], namaX: "panggilan", unitX: "minit", iAwal: 2 });
const R5 = iw("Rajah 1 · Model kuadratik bagi bola dan model eksponen bagi simpanan. Kira dahulu, kemudian semak.",
  "Rajah interaktif dua model: tinggi bola h = −5t² + 20t + 1.5 dan simpanan A = 1000(1.05) kuasa t; gelongsor masa, dalam mod cabar",
  { mod: "kuadeks", cabar: true, model: [
    { nama: "Bola dilontar", jenis: "kuad", a: -5, b: 20, c: 1.5, ts: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4], unitT: "s", namaY: "h", unitY: "m" },
    { nama: "Simpanan", jenis: "eks", P: 1000, r: 1.05, ts: [0, 2, 4, 6, 8, 10, 12, 14, 16], unitT: "tahun", namaY: "A", unitY: "RM" }] });
const R6 = iw("Rajah 1 · Bilangan pengguna sebuah aplikasi (ribu) selama 6 bulan dan tiga model. Pilih model.",
  "Rajah interaktif data pengguna aplikasi bagi bulan 0 hingga 6 dengan model linear, kuadratik dan eksponen; ralat maksimum setiap model dipaparkan",
  { mod: "murni", t: T6, data: D6, model: M6, namaY: "Pengguna (ribu)" });

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Bengkel Model", sk:"8.1.1 Menerangkan pemodelan matematik", lampiran:"r1",
 kadNama:"Pemodelan", kadEm:"\u{1F9E0}", kadFakta:"Pemodelan matematik menterjemah masalah sebenar kepada matematik, menyelesaikannya, kemudian menterjemah semula jawapan kepada konteks asal.",
 bosKadNama:"Andaian Bijak", bosKadEm:"\u{1F4A1}", bosKadFakta:"Andaian yang baik memudahkan masalah tanpa membuang faktor yang paling penting.",
 soalan:[
 {j:"pilih",t:"Pemodelan matematik ialah:",p:["Mewakili dan menyelesaikan masalah sebenar dengan matematik","Melukis model tiga dimensi sebuah bangunan dengan skala yang tepat","Menghafal rumus matematik yang penting untuk peperiksaan","Membuat ramalan masa depan tanpa menggunakan sebarang data"],b:0,u:"Pemodelan matematik menggunakan persamaan, graf atau jadual untuk mewakili situasi sebenar supaya masalah dapat diselesaikan dan diramal."},
 {j:"pilih",t:"Dalam Rajah 1, langkah pertama proses pemodelan matematik ialah:",p:["Mengenal pasti dan mendefinisikan masalah","Melaporkan dapatan kepada pihak yang berkepentingan","Memurnikan model matematik","Membuat andaian"],b:0,u:"Masalah mesti difahami dan dinyatakan dengan jelas dahulu sebelum andaian dibuat atau matematik digunakan."},
 {j:"pilih",t:"Dalam Rajah 1, langkah selepas mengaplikasi matematik untuk menyelesaikan masalah ialah:",p:["Menentusahkan dan mentafsir penyelesaian","Mengenal pasti dan mendefinisikan masalah semula","Membuat andaian","Melaporkan dapatan"],b:0,u:"Selepas mendapat jawapan, semak sama ada jawapan itu munasabah dalam konteks sebenar, contohnya dengan membandingkannya dengan data."},
 {j:"susun",t:"Susun langkah proses pemodelan matematik mengikut urutan yang betul.",p:LANGKAH,b:[0,1,2,3,4,5],u:"Urutan ini mengikut DSKP 8.1.1. Jika penyelesaian tidak sepadan dengan realiti, model dimurnikan dan langkah diulang."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Buat andaian. Andaian yang munasabah bagi masalah tambang teksi ialah:",p:["Kadar tambang setiap kilometer adalah tetap","Pemandu teksi memandu dengan laju yang berbeza setiap hari","Harga minyak menentukan warna teksi","Penumpang membayar dengan wang tunai"],b:0,u:"Andaian kadar tetap membolehkan model linear. Andaian lain tidak berkaitan dengan pengiraan tambang."},
 {j:"pilih",t:"Mengapakah model matematik perlu dimurnikan?",p:["Ramalan awal mungkin tidak sepadan dengan data","Model pertama sentiasa salah","Supaya laporan menjadi lebih panjang dan menarik","Untuk mengelakkan penggunaan data"],b:0,u:"Jika ramalan berbeza ketara daripada data, andaian atau model diubah. Contohnya, caj menunggu ditambah kepada model tambang teksi."},
 {j:"pilih",t:"Dalam model tambang T = 4 + 1.5j, pemboleh ubah bersandar ialah:",p:["T","j","4","1.5"],b:0,u:"Tambang T bergantung pada jarak j. Nombor 4 dan 1.5 ialah pemalar, bukan pemboleh ubah."},
 {j:"pilih",t:"Menurut DSKP, dapatan pemodelan boleh dikomunikasikan melalui:",p:["Laporan bertulis dan pembentangan","Pengiraan yang disimpan secara rahsia","Jawapan akhir tanpa penjelasan","Hafalan model oleh pelajar"],b:0,u:"Langkah terakhir proses pemodelan ialah melaporkan dapatan supaya orang lain memahami model, andaian dan kesimpulannya."}],
 bos:{j:"pilih",t:"Sebuah kantin ingin meramal bilangan roti yang perlu disediakan setiap hari. Andaian manakah paling sesuai pada peringkat awal?",p:["Bilangan pelanggan harian lebih kurang sama","Setiap murid membeli tepat lima biji roti setiap hari","Cuaca tidak mempengaruhi apa-apa jualan","Harga roti berubah setiap jam"],b:0,u:"Andaian yang munasabah dan boleh diuji ialah permintaan harian yang stabil. Jika data menunjukkan sebaliknya (contohnya hari Jumaat lebih rendah), model dimurnikan."}},

{n:2, tempat:"Makmal Pola", sk:"8.1.2 Mengenal pasti fungsi linear, kuadratik dan eksponen", lampiran:"r2",
 kadNama:"Ujian Pola", kadEm:"\u{1F50D}", kadFakta:"Beza pertama malar → linear. Beza kedua malar → kuadratik. Nisbah malar → eksponen.",
 bosKadNama:"Cari a dan b", bosKadEm:"\u{1F9EE}", bosKadFakta:"Bagi y = a(b)ˣ, a ialah nilai y apabila x = 0, dan b ialah nisbah antara nilai berturutan.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih Tambang teksi dan Beza pertama. Kesimpulannya ialah:",p:["Beza pertama malar, jadi model linear","Nisbah malar, jadi model eksponen","Beza kedua malar, jadi model kuadratik","Tiada pola yang boleh dimodelkan"],b:0,u:"Setiap kilometer menambah RM1.50, jadi beza pertama malar dan model ialah linear."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Luas taman. Ujian manakah memberi nilai malar?",p:["Beza kedua","Beza pertama","Nisbah berturutan","Tiada ujian"],b:0,u:"Beza pertama ialah 5, 7, 9, 11 (tidak malar), tetapi beza kedua ialah 2, 2, 2. Model kuadratik sesuai."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Bakteria. Model yang sesuai ialah:",p:["Eksponen","Linear","Kuadratik","Malar"],b:0,u:"Bilangan bakteria berganda setiap jam, jadi nisbah malar (2) dan model ialah eksponen."},
 {j:"nombor",t:"Dalam Rajah 1, pilih Bakteria dan Nisbah. Berapakah nisbah yang malar?",tol:0.01,b:2,u:"100 ÷ 50 = 200 ÷ 100 = 400 ÷ 200 = 800 ÷ 400 = 2.",kira:()=>100/50},
 {j:"nombor",t:"Dalam Rajah 1, pilih Luas taman dan Beza kedua. Berapakah nilai beza kedua?",tol:0.01,b:2,u:"Beza pertama: 5, 7, 9, 11. Beza kedua: 7 − 5 = 2, 9 − 7 = 2, 11 − 9 = 2.",kira:()=>(15-8)-(8-3)},
 {j:"nombor",t:"Dalam Rajah 1, pilih Tambang teksi. Berapakah beza pertama yang malar, dalam RM?",tol:0.01,b:1.5,u:"7 − 5.5 = 8.5 − 7 = 1.5. Ini ialah kadar tambang sekilometer.",kira:()=>7-5.5},
 {j:"pilih",t:"Graf fungsi eksponen y = abˣ dengan a positif dan b melebihi 1 berbentuk:",p:["Lengkung yang semakin curam","Garis lurus yang melalui asalan","Parabola yang terbuka ke bawah","Garis mengufuk yang selari dengan paksi-x"],b:0,u:"Setiap kenaikan x mendarab y dengan b, jadi pertambahan y semakin besar dan lengkung semakin curam."},
 {j:"pilih",t:"Antara berikut, yang manakah fungsi kuadratik?",p:["y = 3x² − 2x + 5","y = 3(2)ˣ − 2x + 5","y = 3x − 2x + 5","y = 3/x − 2x + 5"],b:0,u:"Fungsi kuadratik mempunyai kuasa tertinggi pemboleh ubah 2. y = 3(2)ˣ ialah eksponen, y = 3x − 2 linear."}],
 bos:{j:"nombor",t:"Bagi data x = 0, 1, 2, 3 dan y = 5, 15, 45, 135, model yang sesuai ialah y = a(b)ˣ. Cari nilai a + b.",tol:0.01,b:8,u:"Langkah 1: nisbah 15 ÷ 5 = 45 ÷ 15 = 3, jadi model eksponen dengan b = 3. Langkah 2: apabila x = 0, y = a = 5. Langkah 3: a + b = 5 + 3 = 8.",kira:()=>5+15/5}},

{n:3, tempat:"Kaunter Teksi", sk:"8.1.2 Menggunakan model linear untuk tugasan mudah", lampiran:"r3",
 kadNama:"Model Linear", kadEm:"\u{1F695}", kadFakta:"Model linear y = a + bx: a ialah nilai permulaan (pintasan-y), b ialah kadar perubahan (kecerunan).",
 bosKadNama:"Tambang Baharu", bosKadEm:"\u{1F4C8}", bosKadFakta:"Apabila parameter model berubah, kira semula ramalan dengan model baharu dan bandingkan.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, gerakkan jarak kepada 8 km. Berapakah tambang, dalam RM?",tol:0.01,b:16,u:"T = 4 + 1.5 × 8 = 4 + 12 = RM16.",kira:()=>TEKSI(8)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah tambang permulaan, dalam RM, iaitu apabila jarak 0 km?",tol:0.01,b:4,u:"Apabila j = 0, T = 4 + 0 = RM4. Ini ialah pintasan-y graf.",kira:()=>TEKSI(0)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah jarak, dalam km, jika tambang ialah RM25?",tol:0.01,b:14,u:"25 = 4 + 1.5j, jadi 1.5j = 21 dan j = 14 km.",kira:()=>(25-4)/1.5},
 {j:"pilih",t:"Dalam model T = 4 + 1.5j dalam Rajah 1, nilai 1.5 mewakili:",p:["Kadar tambang sekilometer","Tambang permulaan","Jarak maksimum perjalanan","Tambang bagi perjalanan 1.5 km"],b:0,u:"1.5 ialah kecerunan graf: setiap kilometer tambahan menambah RM1.50 kepada tambang."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah tambang, dalam RM, bagi perjalanan sejauh 13 km?",tol:0.01,b:23.5,u:"T = 4 + 1.5 × 13 = 4 + 19.5 = RM23.50.",kira:()=>TEKSI(13)},
 {j:"pilih",t:"Seorang penumpang berkata tambang 20 km sepatutnya dua kali tambang 10 km. Berdasarkan Rajah 1, pernyataan ini:",p:["Salah, RM4 permulaan tidak berganda","Betul, kerana model itu linear","Betul, kerana kadar sekilometer tetap","Salah, kerana kadar sekilometer berubah"],b:0,u:"Tambang 10 km = RM19, tambang 20 km = RM34. RM34 bukan 2 × RM19 = RM38, kerana RM4 hanya dibayar sekali.",kira:()=>TEKSI(20)!==2*TEKSI(10)},
 {j:"nombor",t:"Tambang sebenar bagi 10 km ialah RM19.50. Berapakah beza antara tambang sebenar dan ramalan model dalam Rajah 1, dalam RM?",tol:0.01,b:0.5,u:"Ramalan = 4 + 1.5 × 10 = RM19. Beza = 19.50 − 19 = RM0.50. Ralat kecil, jadi model masih munasabah.",kira:()=>19.5-TEKSI(10)},
 {j:"pilih",t:"Model dalam Rajah 1 mungkin tidak tepat apabila:",p:["Caj menunggu dikenakan dalam kesesakan","Jarak perjalanan diukur dalam kilometer","Penumpang duduk di tempat duduk belakang","Perjalanan berlaku pada waktu siang"],b:0,u:"Model mengandaikan tambang bergantung pada jarak sahaja. Caj menunggu melanggar andaian itu, jadi model perlu dimurnikan."}],
 bos:{j:"nombor",t:"Syarikat teksi menaikkan tambang permulaan kepada RM5 dan kadar kepada RM1.80 sekilometer. Berapakah pertambahan tambang, dalam RM, bagi perjalanan 10 km berbanding model dalam Rajah 1?",tol:0.01,b:4,u:"Langkah 1: model baharu T = 5 + 1.8j, jadi tambang 10 km = 5 + 18 = RM23. Langkah 2: model lama = RM19. Langkah 3: pertambahan = RM4.",kira:()=>(5+1.8*10)-TEKSI(10)}},

{n:4, tempat:"Kedai Telefon", sk:"8.1.2 Masalah kehidupan sebenar dengan fungsi linear", lampiran:"r4",
 kadNama:"Titik Persilangan", kadEm:"\u{1F4F1}", kadFakta:"Dua model linear memberi nilai yang sama pada titik persilangan. Selepas titik itu, model dengan kecerunan lebih kecil lebih murah.",
 bosKadNama:"Kadar Baharu", bosKadEm:"\u{1F504}", bosKadFakta:"Perubahan satu parameter mengalihkan titik persilangan; selesaikan semula persamaan a₁ + b₁x = a₂ + b₂x.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, gerakkan panggilan kepada 200 minit. Berapakah bayaran Pelan A, dalam RM?",tol:0.01,b:50,u:"Pelan A = 30 + 0.10 × 200 = 30 + 20 = RM50.",kira:()=>pelan(PA,200)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah bayaran Pelan B, dalam RM, bagi 200 minit?",tol:0.01,b:60,u:"Pelan B = 50 + 0.05 × 200 = 50 + 10 = RM60.",kira:()=>pelan(PB,200)},
 {j:"nombor",t:"Berdasarkan Rajah 1, pada berapa minit bayaran kedua-dua pelan sama?",tol:0.01,b:400,u:"30 + 0.10m = 50 + 0.05m, jadi 0.05m = 20 dan m = 400 minit.",kira:()=>(PB.a-PA.a)/(PA.b-PB.b)},
 {j:"pilih",t:"Berdasarkan Rajah 1, pelan manakah lebih murah bagi pengguna yang bercakap 600 minit sebulan?",p:["Pelan B","Pelan A","Kedua-duanya sama","Tidak dapat ditentukan"],b:0,u:"Pelan A = 30 + 60 = RM90. Pelan B = 50 + 30 = RM80. Selepas 400 minit, Pelan B lebih murah.",kira:()=>pelan(PB,600)<pelan(PA,600)},
 {j:"pilih",t:"Andaian dalam model Rajah 1 ialah:",p:["Kadar seminit adalah tetap","Bayaran tetap tanpa mengira minit","Bayaran berganda setiap 100 minit","Panggilan percuma pada hujung minggu"],b:0,u:"Model linear mengandaikan setiap minit dikenakan kadar yang sama (10 sen atau 5 sen)."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah bayaran Pelan A, dalam RM, bagi 750 minit?",tol:0.01,b:105,u:"Pelan A = 30 + 0.10 × 750 = 30 + 75 = RM105.",kira:()=>pelan(PA,750)},
 {j:"nombor",t:"Pelan C mengenakan RM70 sebulan tanpa had minit. Berdasarkan Rajah 1, melebihi berapa minitkah Pelan C lebih murah daripada Pelan B?",tol:0.01,b:400,u:"50 + 0.05m = 70, jadi 0.05m = 20 dan m = 400 minit. Melebihi 400 minit, Pelan B melebihi RM70.",kira:()=>(70-PB.a)/PB.b},
 {j:"pilih",t:"Encik Lim menggunakan purata 350 minit sebulan tetapi kadang-kadang sehingga 700 minit. Berdasarkan Rajah 1, keputusan yang paling bijak ialah:",p:["Bandingkan kos setahun mengikut corak penggunaan","Pilih Pelan A kerana yuran asasnya lebih rendah","Pilih Pelan B kerana kadar seminitnya lebih rendah","Pilih mana-mana pelan secara rawak"],b:0,u:"Penggunaan Encik Lim berada di kedua-dua belah titik persilangan (400 minit). Jumlah kos setahun bagi bulan biasa dan bulan sibuk menentukan pelan yang lebih murah."}],
 bos:{j:"nombor",t:"Pelan A menaikkan kadar kepada RM0.12 seminit. Berdasarkan Rajah 1, pada berapa minitkah bayaran Pelan A dan Pelan B menjadi sama? Berikan jawapan betul kepada integer terdekat.",tol:0.5,b:286,u:"Langkah 1: 30 + 0.12m = 50 + 0.05m. Langkah 2: 0.07m = 20. Langkah 3: m = 285.7, iaitu kira-kira 286 minit.",kira:()=>Math.round(20/0.07)}},

{n:5, tempat:"Padang dan Bank", sk:"8.1.2 Masalah kehidupan sebenar dengan fungsi kuadratik dan eksponen", lampiran:"r5",
 kadNama:"Parabola", kadEm:"\u{26BD}", kadFakta:"Model kuadratik h = at² + bt + c dengan a < 0 mencapai maksimum pada t = −b ÷ 2a.",
 bosKadNama:"Kompaun", bosKadEm:"\u{1F3E6}", bosKadFakta:"Model eksponen A = P(1 + r)ᵗ: nilai bertambah dengan peratus yang sama setiap tempoh.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih Bola dilontar dan t = 1 s. Berapakah tinggi bola, dalam m? Kira dahulu, kemudian semak.",tol:0.01,b:16.5,u:"h = −5(1)² + 20(1) + 1.5 = −5 + 20 + 1.5 = 16.5 m.",kira:()=>BOLA(1)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah tinggi maksimum bola, dalam m?",tol:0.01,b:21.5,u:"Maksimum pada t = −20 ÷ (2 × −5) = 2 s. h = −5(4) + 40 + 1.5 = 21.5 m.",kira:()=>BOLA(2)},
 {j:"nombor",t:"Berdasarkan Rajah 1, pada masa berapakah, dalam saat, bola mencapai tinggi maksimum?",tol:0.01,b:2,u:"t = −b ÷ 2a = −20 ÷ (−10) = 2 s.",kira:()=>-20/(2*-5)},
 {j:"nombor",t:"Dalam Rajah 1, pilih Simpanan dan t = 10 tahun. Berapakah jumlah simpanan, dalam RM? Berikan jawapan betul kepada dua tempat perpuluhan.",tol:0.01,b:1628.89,u:"A = 1 000(1.05)¹⁰ = 1 000 × 1.628895 = RM1 628.89.",kira:()=>bul(SIMPAN(10),2)},
 {j:"pilih",t:"Dalam model A = 1 000(1.05)ᵗ dalam Rajah 1, nilai 1.05 bermaksud:",p:["Simpanan bertambah 5% setiap tahun","Simpanan bertambah RM1.05 setiap tahun","Simpanan bertambah 105% setiap tahun","Kadar faedah ialah 1.05% setahun"],b:0,u:"1.05 = 1 + 0.05. Setiap tahun simpanan didarab 1.05, iaitu bertambah 5% daripada nilai tahun sebelumnya."},
 {j:"nombor",t:"Berdasarkan Rajah 1, selepas berapa tahun penuhkah simpanan melebihi RM2 000 buat kali pertama?",tol:0.01,b:15,u:"1 000(1.05)¹⁴ = RM1 979.93 (belum melebihi). 1 000(1.05)¹⁵ = RM2 078.93. Jawapan: 15 tahun.",kira:()=>{let t=0;while(SIMPAN(t)<=2000)t++;return t;}},
 {j:"pilih",t:"Mengapakah model kuadratik sesuai bagi gerakan bola dalam Rajah 1?",p:["Tinggi naik kemudian turun (parabola)","Tinggi bola bertambah pada kadar tetap","Tinggi bola berganda setiap saat","Tinggi bola tidak berubah dengan masa"],b:0,u:"Graviti memperlahankan bola sehingga ia berhenti naik, kemudian bola jatuh. Bentuk naik-turun ini ialah parabola."},
 {j:"nombor",t:"Berdasarkan Rajah 1, selepas berapa saatkah bola mencecah tanah? Berikan jawapan betul kepada dua tempat perpuluhan.",tol:0.01,b:4.07,u:"Selesaikan −5t² + 20t + 1.5 = 0. t = [−20 − √(400 + 30)] ÷ (−10) = (20 + 20.74) ÷ 10 = 4.07 s.",kira:()=>bul((20+Math.sqrt(430))/10,2)}],
 bos:{j:"nombor",t:"Sejumlah RM5 000 dilaburkan pada kadar 6% setahun yang dikompaun tahunan, dengan model A = 5 000(1.06)ᵗ. Berapakah nilai pelaburan selepas 8 tahun, dalam RM? Berikan jawapan betul kepada dua tempat perpuluhan.",tol:0.01,b:7969.24,u:"Langkah 1: (1.06)⁸ = 1.593848. Langkah 2: A = 5 000 × 1.593848 = RM7 969.24.",kira:()=>bul(5000*Math.pow(1.06,8),2)}},

{n:6, tempat:"Pusat Data", sk:"8.1.2 Memilih, menguji dan memurnikan model (bukan rutin)", lampiran:"r6",
 kadNama:"Model Terbaik", kadEm:"\u{1F3AF}", kadFakta:"Model terbaik mempunyai ralat paling kecil berbanding data sebenar dan munasabah dalam konteks masalah.",
 bosKadNama:"Pemodel Kreatif", bosKadEm:"\u{1F680}", bosKadFakta:"Pemodel yang baik menyatakan andaian, menguji model dengan data, memurnikannya dan melaporkan hadnya dengan jujur.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, uji setiap model. Model manakah paling sepadan dengan data?",p:["Eksponen","Linear","Kuadratik","Ketiga-tiganya sama tepat"],b:0,u:"Ralat maksimum: linear 1.2, kuadratik 0.5, eksponen kurang daripada 0.1. Model eksponen paling sepadan.",kira:()=>ralatMaks(M6[2])<ralatMaks(M6[1])&&ralatMaks(M6[1])<ralatMaks(M6[0])},
 {j:"nombor",t:"Dalam Rajah 1, pilih Linear. Berapakah ralat bagi bulan ke-6, iaitu data sebenar − ramalan, dalam ribu?",tol:0.01,b:0.5,u:"Ramalan linear = 2 + 1.2 × 6 = 9.2. Ralat = 9.7 − 9.2 = 0.5 ribu.",kira:()=>bul(D6[6]-ramal(M6[0],6),2)},
 {j:"nombor",t:"Berdasarkan model eksponen dalam Rajah 1, ramalkan bilangan pengguna pada bulan ke-8, dalam ribu. Berikan jawapan betul kepada satu tempat perpuluhan.",tol:0.05,b:16.3,u:"y = 2(1.3)⁸ = 2 × 8.157 = 16.3 ribu.",kira:()=>bul(ramal(M6[2],8),1)},
 {j:"pilih",t:"Mengapakah model linear dalam Rajah 1 kurang sesuai untuk meramal jangka panjang?",p:["Data bertambah dengan nisbah tetap","Model linear tidak boleh melalui titik (0, 2)","Model linear sentiasa melebihi data sebenar","Data menurun selepas bulan ke-6"],b:0,u:"Pertambahan bulanan semakin besar (0.6, 0.8, 1.0, ...), manakala model linear menambah 1.2 setiap bulan. Jurangnya akan semakin besar."},
 {j:"nombor",t:"Berdasarkan model eksponen y = 2(1.3)ᵗ dalam Rajah 1, berapakah kadar pertumbuhan bulanan, dalam peratus?",tol:0.01,b:30,u:"Faktor 1.3 = 1 + 0.30, jadi bilangan pengguna bertambah 30% setiap bulan.",kira:()=>bul((1.3-1)*100,6)},
 {j:"pilih",t:"Dalam konteks Rajah 1, langkah 'memurnikan model' ditunjukkan apabila:",p:["Model linear diganti dengan model eksponen","Data bulan ke-6 dibuang kerana terlalu besar","Graf dilukis semula dengan warna lain","Laporan ditulis tanpa menyebut model"],b:0,u:"Memurnikan model bermaksud mengubah model apabila ujian menunjukkan ralat besar, bukan mengubah atau membuang data."},
 {j:"nombor",t:"Menggunakan model eksponen dalam Rajah 1, pada bulan keberapakah bilangan pengguna mula melebihi 20 ribu buat kali pertama?",tol:0.01,b:9,u:"2(1.3)⁸ = 16.3 (belum). 2(1.3)⁹ = 21.2 (melebihi 20). Jawapan: bulan ke-9.",kira:()=>{let t=0;while(ramal(M6[2],t)<=20)t++;return t;}},
 {j:"pilih",t:"Satu had model eksponen dalam Rajah 1 ialah:",p:["Bilangan pengguna terhad, jadi pertumbuhan akan perlahan","Model eksponen tidak boleh digunakan untuk data sebenar","Model itu hanya sah bagi bulan yang bernombor genap","Nisbah 1.3 terlalu kecil untuk digunakan"],b:0,u:"Selepas beberapa tahun model meramalkan berjuta-juta pengguna, melebihi saiz pasaran. Model perlu dimurnikan untuk jangka panjang."}],
 bos:{j:"buka",
  t:"Jalankan satu tugasan pemodelan matematik bagi masalah kehidupan sebenar yang melibatkan fungsi kuadratik atau eksponen.",
  arahan:"Pilih satu masalah, contohnya merancang lompatan bola tampar, meramal pertumbuhan simpanan atau penyebaran berita di media sosial. Ikut keenam-enam langkah proses pemodelan: nyatakan masalah, senaraikan andaian dan pemboleh ubah, bina model dengan data yang munasabah, tentusahkan dengan sekurang-kurangnya satu data sebenar atau anggaran, murnikan model jika perlu, dan laporkan dapatan termasuk had model.",
  u:"Jawapan TP6 yang kukuh mengikut keenam-enam langkah dengan jelas, memilih fungsi kuadratik atau eksponen yang sesuai dengan justifikasi, menunjukkan pengiraan parameter yang betul, menguji dan memurnikan model, dan melaporkan had model secara kreatif."}}
];

module.exports = {
  id:"m5b8", tingkatan:5, kod:"8.0 Pemodelan Matematik",
  tajuk:"Pusat Pemodelan",
  subtajuk:"Matematik Ting. 5 · Bab 8 Pemodelan Matematik",
  spi:SPI,
  ulasan:{
   1:"{n} dapat menerangkan maksud pemodelan matematik dan menyusun langkah-langkah prosesnya. Langkah seterusnya ialah mengenal pasti jenis fungsi daripada data.",
   2:"{n} memahami cara mengenal pasti model linear, kuadratik dan eksponen daripada pola data. Perlu lebih latihan menggunakan model untuk tugasan mudah.",
   3:"{n} boleh menggunakan model linear yang diberi untuk membuat ramalan dan mentafsir parameter model.",
   4:"{n} mampu menyelesaikan masalah kehidupan sebenar yang melibatkan fungsi linear, termasuk membandingkan dua model. Seterusnya, latih model kuadratik dan eksponen.",
   5:"{n} dapat menyelesaikan masalah kehidupan sebenar yang melibatkan fungsi kuadratik dan eksponen. Sudah bersedia untuk memilih dan memurnikan model sendiri.",
   6:"{n} berjaya memilih, menguji dan memurnikan model kuadratik atau eksponen secara kreatif serta melaporkan dapatan dan had model. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pemodelan Matematik. Cadangan: ulang hentian pertama dengan Rajah 1 dan bina model tambang bas sekolah daripada dua resit."
  },
  lampiran:{ r1:R1, r2:R2, r3:R3, r4:R4, r5:R5, r6:R6 },
  aras:ARAS
};
