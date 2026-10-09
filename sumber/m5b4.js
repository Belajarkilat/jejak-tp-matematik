/* Sumber kandungan — Matematik KSSM Tingkatan 5, Bab 4 Matematik Pengguna: Percukaian.
   Fail ini disunting tangan. Jalankan `node bina.js m5b4`.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 4
   dan 5, muka 95 (dskp/matematik-t4-t5.pdf). DSKP menulis enam tahap penuh.
   Cukai yang diwajibkan DSKP 4.1.2: cukai pendapatan, cukai jalan, cukai pintu, cukai tanah,
   cukai jualan dan perkhidmatan. Cukai pendapatan: potongan cukai bulanan, pelepasan cukai,
   taksiran berasingan dan bersama, serta perbezaan antara pelepasan dan rebat.

   SEMUA JADUAL DALAM BAB INI ADALAH JADUAL CONTOH untuk pembelajaran:
   - kadar cukai pendapatan mengikut struktur kadar berperingkat LHDN (Tahun Taksiran 2023)
     hingga RM400 000;
   - pelepasan dipermudah: individu RM9 000, KWSP 11% (had RM4 000), insurans hayat RM3 000,
     anak RM2 000 seorang, pasangan RM4 000; rebat individu RM400 jika bercukai ≤ RM35 000;
   - cukai jalan kereta persendirian mengikut struktur jadual JPJ Semenanjung Malaysia.
   Guru boleh menyemak kadar semasa di laman LHDN dan JPJ.

   Rajah: widget t5cukai (widget-m5b4.js). */

const bul2 = n => Math.round(n * 100 + 1e-9) / 100;

const SPI = [
"Mempamerkan pengetahuan asas tentang percukaian.",
"Mempamerkan kefahaman tentang percukaian.",
"Mengaplikasikan kefahaman tentang percukaian untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang percukaian dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang percukaian dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang percukaian dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- model ---------- */
const BANJAR = [[5000, 0], [20000, 0.01], [35000, 0.03], [50000, 0.06], [70000, 0.11], [100000, 0.19], [400000, 0.25]];
const cukai = ci => { let t = 0, lo = 0; BANJAR.forEach(([hi, r]) => { if (ci > lo) t += (Math.min(ci, hi) - lo) * r; lo = hi; }); return bul2(t); };
const LP = { individu: 9000, kwspKadar: 0.11, kwspHad: 4000, insurans: 3000, anak: 2000, rebat: 400, hadRebat: 35000, pasangan: 4000 };
const lepas = (g, a) => { const k = Math.min(LP.kwspHad, bul2(g * LP.kwspKadar)), ci = Math.max(0, g - LP.individu - k - LP.insurans - a * LP.anak), t = cukai(ci); return { kwsp: k, ci, cukai: t, bayar: bul2(t - (ci <= LP.hadRebat ? Math.min(LP.rebat, t) : 0)) }; };
const seorang = g => { const ci = Math.max(0, g - LP.individu), t = cukai(ci); return bul2(t - (ci <= LP.hadRebat ? Math.min(LP.rebat, t) : 0)); };
const bersama = (s, i) => { const ci = Math.max(0, s + i - LP.individu - LP.pasangan), t = cukai(ci); return bul2(t - (ci <= LP.hadRebat ? Math.min(2 * LP.rebat, t) : 0)); };
const JALAN = [
  { label: "≤ 1 000 cc", had: 1000, asas: 20 }, { label: "1 001 – 1 200 cc", had: 1200, asas: 55 },
  { label: "1 201 – 1 400 cc", had: 1400, asas: 70 }, { label: "1 401 – 1 600 cc", had: 1600, asas: 90 },
  { label: "1 601 – 1 800 cc", had: 1800, asas: 200, per: 0.4, dari: 1600 }, { label: "1 801 – 2 000 cc", had: 2000, asas: 280, per: 0.5, dari: 1800 },
  { label: "2 001 – 2 500 cc", had: 2500, asas: 380, per: 1, dari: 2000 }, { label: "2 501 – 3 000 cc", had: 3000, asas: 880, per: 2.5, dari: 2500 }];
const jalan = cc => { const k = JALAN.find(x => cc <= x.had); return bul2(k.asas + (k.per ? k.per * (cc - k.dari) : 0)); };
const pintu = (sewa, kadar) => bul2(sewa * 12 * kadar / 100);

/* ---------- lampiran ---------- */
const iw = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t5cukai", kapsyen, alt }, extra);
const R1 = iw("Rajah 1 · Lima jenis cukai di Malaysia. Pilih satu cukai.",
  "Rajah interaktif lima jenis cukai: cukai pendapatan, cukai jalan, cukai pintu, cukai tanah, serta cukai jualan dan perkhidmatan, dengan pihak yang memungut dan asas pengiraan",
  { mod: "jenis", cukai: [
    { t: "Cukai pendapatan", pemungut: "LHDN", asas: ["Kadar berperingkat × pendapatan", "bercukai, selepas ditolak", "pelepasan cukai."] },
    { t: "Cukai jalan", pemungut: "JPJ", asas: ["Kapasiti enjin (cc), jenis", "kenderaan dan kawasan", "pendaftaran."] },
    { t: "Cukai pintu", pemungut: "Pihak berkuasa tempatan", asas: ["Kadar × nilai tahunan harta", "(anggaran sewa setahun)."] },
    { t: "Cukai tanah", pemungut: "Pejabat tanah negeri", asas: ["Kadar × keluasan tanah,", "mengikut jenis kegunaan tanah."] },
    { t: "Cukai jualan dan perkhidmatan", pemungut: "Jabatan Kastam (JKDM)", asas: ["Peratus daripada harga barang", "atau caj perkhidmatan."] }] });
const R2 = iw("Rajah 1 · Jadual contoh kadar cukai pendapatan berperingkat. Gerakkan pendapatan bercukai.",
  "Rajah interaktif jadual kadar cukai pendapatan berperingkat dari 0 hingga 25 peratus; banjaran pendapatan bercukai yang dipilih diserlahkan dan cukai dikira",
  { mod: "pendapatan", banjaran: BANJAR, ci: [18000, 30000, 42000, 60000, 80000, 120000], iAwal: 1 });
const R3 = iw("Rajah 1 · Pengiraan cukai pendapatan seorang pekerja dengan pelepasan dan rebat contoh.",
  "Rajah interaktif pengiraan cukai pendapatan: pendapatan tahunan ditolak pelepasan individu, KWSP, insurans hayat dan anak, kemudian cukai dikira dan rebat ditolak",
  Object.assign({ mod: "pelepasan", banjaran: BANJAR, pendapatan: [42000, 54000, 66000, 78000], gAwal: 1 }, LP));
const R4 = iw("Rajah 1 · Jadual contoh cukai jalan kereta persendirian di Semenanjung Malaysia. Pilih kapasiti enjin.",
  "Rajah interaktif jadual cukai jalan mengikut kapasiti enjin; kadar tetap hingga 1 600 cc dan kadar asas ditambah sen bagi setiap cc di atasnya",
  { mod: "jalan", kadar: JALAN, cc: [998, 1332, 1497, 1798, 1998, 2354, 2999], iAwal: 1 });
const R5 = iw("Rajah 1 · Cukai pintu sebuah rumah. Kira dahulu, kemudian semak.",
  "Rajah interaktif cukai pintu: sewa bulanan anggaran didarab 12 untuk nilai tahunan, kemudian didarab kadar 4, 6 atau 8 peratus, dalam mod cabar",
  { mod: "pintu", cabar: true, sewa: [800, 1000, 1200, 1500, 2000], kadar: [4, 6, 8], sAwal: 2 });
const R6 = iw("Rajah 1 · Taksiran berasingan atau bersama bagi pasangan suami isteri. Gerakkan pendapatan.",
  "Rajah interaktif perbandingan taksiran berasingan dan taksiran bersama bagi pendapatan suami dan isteri, dengan pelepasan individu, pelepasan pasangan dan rebat",
  Object.assign({ mod: "bersama", banjaran: BANJAR, gaji: [0, 24000, 36000, 48000, 60000, 84000], sAwal: 4, iAwal: 0 }, LP));

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Dewan Cukai", sk:"4.1.1 / 4.1.2 Tujuan percukaian, jenis cukai dan kesan pengelakan cukai", lampiran:"r1",
 kadNama:"Tujuan Cukai", kadEm:"\u{1F3DB}\u{FE0F}", kadFakta:"Cukai membiayai perbelanjaan kerajaan untuk pembangunan dan perkhidmatan awam seperti sekolah, hospital dan jalan raya.",
 bosKadNama:"Patuh Undang-undang", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Mengelak membayar cukai boleh mengakibatkan denda, kompaun atau pendakwaan, selain merugikan masyarakat.",
 soalan:[
 {j:"pilih",t:"Tujuan utama kerajaan memungut cukai ialah:",p:["Membiayai pembangunan dan perkhidmatan awam","Menghukum rakyat yang berpendapatan tinggi","Mengurangkan bilangan kenderaan di jalan raya","Menambah keuntungan syarikat swasta tempatan"],b:0,u:"Hasil cukai digunakan untuk membina dan menyelenggara kemudahan awam serta membayar perkhidmatan kerajaan."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Cukai jalan. Pihak yang memungutnya ialah:",p:["JPJ","LHDN","Pihak berkuasa tempatan","Jabatan Kastam (JKDM)"],b:0,u:"Cukai jalan dipungut oleh Jabatan Pengangkutan Jalan (JPJ) dan dibayar setiap tahun bersama pembaharuan lesen kenderaan."},
 {j:"pilih",t:"Dalam Rajah 1, cukai manakah dipungut oleh pihak berkuasa tempatan?",p:["Cukai pintu","Cukai pendapatan","Cukai jalan","Cukai tanah"],b:0,u:"Cukai pintu (cukai taksiran) dipungut oleh majlis bandaraya, perbandaran atau daerah. Cukai tanah dipungut oleh pejabat tanah negeri."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Cukai tanah. Cukai ini dikira berdasarkan:",p:["Keluasan tanah dan jenis kegunaannya","Pendapatan tahunan pemilik tanah itu","Kapasiti enjin kenderaan milik pemilik","Harga barang yang dijual di atas tanah"],b:0,u:"Cukai tanah = kadar × keluasan, dan kadarnya bergantung pada kegunaan tanah seperti kediaman, pertanian atau perniagaan."},
 {j:"pilih",t:"Cukai jualan dan perkhidmatan (SST) ditanggung oleh:",p:["Pengguna, melalui harga barang atau caj perkhidmatan","Kerajaan, yang membayarnya kepada semua peniaga berdaftar","Majikan, bagi pihak setiap pekerja di syarikatnya","Pemilik tanah, sekali setiap tahun"],b:0,u:"SST dikutip oleh peniaga daripada pengguna dan diserahkan kepada Jabatan Kastam Diraja Malaysia."},
 {j:"pilih",t:"Pengelakan cukai pendapatan dengan menyembunyikan pendapatan boleh menyebabkan:",p:["Denda dan tindakan undang-undang","Rebat cukai yang lebih tinggi pada tahun hadapan","Pelepasan cukai tambahan daripada LHDN","Pengurangan cukai jalan"],b:0,u:"Menyembunyikan pendapatan ialah kesalahan di bawah undang-undang cukai. Kesannya termasuk penalti, kompaun dan pendakwaan."},
 {j:"pilih",t:"Dari aspek moral, membayar cukai dengan jujur penting kerana:",p:["Cukai membiayai kemudahan yang digunakan oleh semua rakyat","Pembayar cukai menerima hadiah wang tunai daripada kerajaan","Cukai yang dibayar dipulangkan sepenuhnya setiap tahun","Hanya orang kaya yang menggunakan kemudahan awam"],b:0,u:"Jalan raya, sekolah dan hospital digunakan oleh semua. Pembayar cukai yang tidak jujur membebankan rakyat lain."},
 {j:"pilih",t:"Dalam Rajah 1, cukai manakah dipungut oleh Lembaga Hasil Dalam Negeri (LHDN)?",p:["Cukai pendapatan","Cukai pintu","Cukai jalan","Cukai jualan dan perkhidmatan"],b:0,u:"LHDN memungut cukai pendapatan individu dan syarikat."}],
 bos:{j:"pilih",t:"Encik Daud tidak memperbaharui cukai jalan keretanya. Apakah kesan dari aspek perundangan dan kewangan?",p:["Kereta tidak boleh dipandu secara sah dan dia boleh dikenakan kompaun","Premium insurans keretanya dikecualikan sehingga cukai dibayar","Cukai pendapatannya bertambah secara automatik pada tahun itu","Tiada kesan kerana cukai jalan ialah bayaran pilihan pemilik"],b:0,u:"Kenderaan tanpa cukai jalan yang sah tidak boleh digunakan di jalan raya. Pemilik boleh dikompaun atau didakwa, dan perlindungan insurans juga boleh terjejas."}},

{n:2, tempat:"Pejabat LHDN", sk:"4.1.3 Kadar cukai pendapatan berperingkat", lampiran:"r2",
 kadNama:"Kadar Berperingkat", kadEm:"\u{1F4CA}", kadFakta:"Setiap kadar hanya dikenakan pada bahagian pendapatan dalam banjarannya. Pendapatan yang lebih tinggi tidak menaikkan kadar bagi bahagian yang lebih rendah.",
 bosKadNama:"Kira Songsang", bosKadEm:"\u{1F504}", bosKadFakta:"Untuk mencari pendapatan daripada cukai, kenal pasti banjaran dahulu, kemudian selesaikan cukai bawah + kadar × lebihan = cukai.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan pendapatan bercukai RM30 000. Berapakah cukai pendapatan, dalam RM?",tol:0.01,b:450,u:"Cukai atas RM20 000 pertama = RM150. Baki RM10 000 × 3% = RM300. Cukai = 150 + 300 = RM450.",kira:()=>cukai(30000)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan pendapatan bercukai RM60 000. Berapakah cukai pendapatan, dalam RM?",tol:0.01,b:2600,u:"Cukai atas RM50 000 pertama = RM1 500. Baki RM10 000 × 11% = RM1 100. Cukai = RM2 600.",kira:()=>cukai(60000)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah cukai, dalam RM, bagi pendapatan bercukai RM42 000?",tol:0.01,b:1020,u:"Cukai atas RM35 000 pertama = RM600. Baki RM7 000 × 6% = RM420. Cukai = RM1 020.",kira:()=>cukai(42000)},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah maksud kadar cukai berperingkat?",p:["Kadar lebih tinggi dikenakan pada bahagian pendapatan dalam banjaran lebih tinggi","Seluruh pendapatan dikenakan kadar bagi banjaran tertinggi yang dicapai oleh pembayar cukai","Setiap pembayar cukai membayar kadar peratus yang sama tanpa mengira pendapatan","Kadar cukai berubah mengikut bulan dalam setahun"],b:0,u:"Pendapatan dibahagikan mengikut banjaran. Contohnya bagi RM42 000, hanya RM7 000 teratas dikenakan 6%."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah cukai, dalam RM, bagi pendapatan bercukai RM5 000?",tol:0.01,b:0,u:"Banjaran RM0 hingga RM5 000 dikenakan kadar 0%, jadi cukai = RM0.",kira:()=>cukai(5000)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan pendapatan bercukai RM80 000. Berapakah cukai pendapatan, dalam RM?",tol:0.01,b:5600,u:"Cukai atas RM70 000 pertama = RM3 700. Baki RM10 000 × 19% = RM1 900. Cukai = RM5 600.",kira:()=>cukai(80000)},
 {j:"pilih",t:"Ahmad berkata, 'Jika pendapatan bercukai saya naik daripada RM50 000 kepada RM50 001, semua pendapatan saya dikenakan 11%.' Berdasarkan Rajah 1, pernyataan ini:",p:["Salah, kerana hanya RM1 lebihan dikenakan 11%","Betul, kerana semua pendapatan dikenakan 11%","Betul, kerana cukainya bertambah RM5 500","Salah, kerana kadar 11% bermula pada RM70 000"],b:0,u:"Cukai atas RM50 001 = 1 500 + 11% × 1 = RM1 500.11. Cukai hanya bertambah 11 sen.",kira:()=>Math.abs(cukai(50001)-cukai(50000)-0.11)<0.001},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah cukai, dalam RM, bagi pendapatan bercukai RM18 000?",tol:0.01,b:130,u:"RM5 000 pertama dikenakan 0%. Baki RM13 000 × 1% = RM130.",kira:()=>cukai(18000)}],
 bos:{j:"nombor",t:"Cukai pendapatan seorang jurutera ialah RM14 400. Berdasarkan Rajah 1, berapakah pendapatan bercukainya, dalam RM?",tol:0.01,b:120000,u:"Langkah 1: cukai atas RM100 000 = RM9 400 dan cukai atas RM400 000 jauh lebih tinggi, jadi banjarannya 25%. Langkah 2: 9 400 + 25% × (x − 100 000) = 14 400, jadi 25% × (x − 100 000) = 5 000. Langkah 3: x − 100 000 = 20 000, x = RM120 000.",kira:()=>cukai(120000)===14400?120000:0}},

{n:3, tempat:"Kalkulator Gaji", sk:"4.1.3 Pelepasan, rebat dan potongan cukai bulanan", lampiran:"r3",
 kadNama:"Pelepasan Cukai", kadEm:"\u{1F9FE}", kadFakta:"Pelepasan cukai ditolak daripada pendapatan untuk mendapat pendapatan bercukai. Rebat ditolak daripada cukai yang telah dikira.",
 bosKadNama:"Rebat Zakat", bosKadEm:"\u{1F54C}", bosKadFakta:"Zakat yang dibayar boleh menjadi rebat, iaitu ditolak terus daripada cukai pendapatan, bukan daripada pendapatan.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan pendapatan tahunan RM54 000 dan 0 anak. Berapakah pendapatan bercukai, dalam RM?",tol:0.01,b:38000,u:"Pelepasan = 9 000 + 4 000 (KWSP, had) + 3 000 = RM16 000. Pendapatan bercukai = 54 000 − 16 000 = RM38 000.",kira:()=>lepas(54000,0).ci},
 {j:"nombor",t:"Dalam Rajah 1, berapakah cukai kena bayar, dalam RM, bagi pendapatan RM54 000 dan 0 anak?",tol:0.01,b:780,u:"Cukai = 600 + 6% × (38 000 − 35 000) = 600 + 180 = RM780. Tiada rebat kerana pendapatan bercukai melebihi RM35 000.",kira:()=>lepas(54000,0).bayar},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan pendapatan RM54 000 dan 2 anak. Berapakah cukai kena bayar, dalam RM?",tol:0.01,b:170,u:"Pendapatan bercukai = 38 000 − 4 000 = RM34 000. Cukai = 150 + 3% × 14 000 = RM570. Rebat RM400, jadi cukai kena bayar = RM170.",kira:()=>lepas(54000,2).bayar},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah perbezaan antara pelepasan cukai dan rebat cukai?",p:["Pelepasan ditolak daripada pendapatan, rebat ditolak daripada cukai","Pelepasan ditolak daripada cukai, rebat ditolak daripada pendapatan","Kedua-duanya ditolak daripada pendapatan tahunan","Kedua-duanya ditolak daripada cukai yang dikira"],b:0,u:"Pelepasan mengurangkan pendapatan bercukai. Rebat mengurangkan cukai secara terus. RM400 rebat menjimatkan tepat RM400, tetapi RM400 pelepasan menjimatkan RM400 × kadar."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah pelepasan KWSP, dalam RM, bagi pendapatan tahunan RM42 000?",tol:0.01,b:4000,u:"11% × 42 000 = RM4 620, tetapi had pelepasan KWSP ialah RM4 000. Pelepasan = RM4 000.",kira:()=>lepas(42000,0).kwsp},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan pendapatan RM66 000 dan 1 anak. Berapakah cukai kena bayar, dalam RM?",tol:0.01,b:1380,u:"Pelepasan = 16 000 + 2 000 = RM18 000. Pendapatan bercukai = RM48 000. Cukai = 600 + 6% × 13 000 = RM1 380.",kira:()=>lepas(66000,1).bayar},
 {j:"pilih",t:"Dalam Rajah 1, pendapatan RM42 000 tanpa anak memberi cukai kena bayar RM0. Mengapa?",p:["Cukai RM330 dihapuskan oleh rebat","Pendapatan bercukai kurang daripada RM5 000","Jumlah pelepasan melebihi pendapatan tahunan","Pekerja bergaji RM42 000 dikecualikan daripada cukai"],b:0,u:"Pendapatan bercukai = RM26 000, cukai = 150 + 3% × 6 000 = RM330. Pendapatan bercukai ≤ RM35 000, jadi rebat (hingga RM400) menghapuskan cukai itu.",kira:()=>lepas(42000,0).cukai===330&&lepas(42000,0).bayar===0},
 {j:"nombor",t:"Potongan cukai bulanan (PCB) dianggarkan sebagai cukai tahunan ÷ 12. Berdasarkan Rajah 1, berapakah PCB, dalam RM, bagi pendapatan RM78 000 dengan 3 anak?",tol:0.01,b:180,u:"Pendapatan bercukai = 78 000 − 22 000 = RM56 000. Cukai = 1 500 + 11% × 6 000 = RM2 160. PCB = 2 160 ÷ 12 = RM180.",kira:()=>lepas(78000,3).bayar/12}],
 bos:{j:"nombor",t:"Puan Aida berpendapatan RM66 000 setahun dan mempunyai seorang anak (Rajah 1). Dia juga membayar zakat RM600 yang layak sebagai rebat. Berapakah cukai kena bayar, dalam RM?",tol:0.01,b:780,u:"Langkah 1: daripada Rajah 1, cukai = RM1 380. Langkah 2: rebat zakat ditolak daripada cukai: 1 380 − 600 = RM780.",kira:()=>lepas(66000,1).bayar-600}},

{n:4, tempat:"Kaunter JPJ", sk:"4.1.3 / 4.1.4 Cukai jalan dan cukai jualan dan perkhidmatan", lampiran:"r4",
 kadNama:"Cukai Jalan", kadEm:"\u{1F697}", kadFakta:"Cukai jalan kereta persendirian bergantung pada kapasiti enjin. Melebihi 1 600 cc, kadar asas ditambah sen bagi setiap cc lebihan.",
 bosKadNama:"Kereta Jimat", bosKadEm:"\u{1F33F}", bosKadFakta:"Enjin yang lebih kecil bukan sahaja menjimatkan bahan api, tetapi juga cukai jalan setiap tahun.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih 1 332 cc. Berapakah cukai jalan setahun, dalam RM?",tol:0.01,b:70,u:"1 332 cc berada dalam banjaran 1 201 – 1 400 cc, jadi cukai jalan = RM70.",kira:()=>jalan(1332)},
 {j:"nombor",t:"Dalam Rajah 1, pilih 1 798 cc. Berapakah cukai jalan setahun, dalam RM?",tol:0.01,b:279.2,u:"Banjaran 1 601 – 1 800 cc: 200 + 0.40 × (1 798 − 1 600) = 200 + 79.20 = RM279.20.",kira:()=>jalan(1798)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah cukai jalan, dalam RM, bagi kereta 2 354 cc?",tol:0.01,b:734,u:"Banjaran 2 001 – 2 500 cc: 380 + 1.00 × (2 354 − 2 000) = 380 + 354 = RM734.",kira:()=>jalan(2354)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah beza cukai jalan, dalam RM, antara kereta 1 998 cc dan kereta 1 497 cc?",tol:0.01,b:289,u:"1 998 cc: 280 + 0.50 × 198 = RM379. 1 497 cc: RM90. Beza = 379 − 90 = RM289.",kira:()=>jalan(1998)-jalan(1497)},
 {j:"nombor",t:"Harga sebuah telefon sebelum cukai ialah RM1 200. Cukai jualan 10% dikenakan. Berapakah harga yang perlu dibayar, dalam RM?",tol:0.01,b:1320,u:"Cukai jualan = 10% × 1 200 = RM120. Harga = 1 200 + 120 = RM1 320.",kira:()=>1200*1.1},
 {j:"nombor",t:"Bil makan di sebuah restoran ialah RM85 sebelum cukai perkhidmatan 6%. Berapakah jumlah bil, dalam RM?",tol:0.01,b:90.1,u:"Cukai perkhidmatan = 6% × 85 = RM5.10. Jumlah = 85 + 5.10 = RM90.10.",kira:()=>bul2(85*1.06)},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah cukai jalan bagi 1 601 – 1 800 cc ditulis sebagai 'RM200 + 40 sen/cc'?",p:["Cukai bertambah 40 sen bagi setiap cc melebihi 1 600","Setiap kereta dalam banjaran itu membayar RM240","Cukai dikira atas 1 800 cc bagi semua kereta","40 sen ialah diskaun bagi kereta yang lebih kecil"],b:0,u:"Contohnya, 1 700 cc: 200 + 0.40 × 100 = RM240, tetapi 1 798 cc: RM279.20. Cukai meningkat secara beransur dalam banjaran itu."},
 {j:"nombor",t:"Encik Raju membayar cukai jalan RM234 setahun untuk keretanya. Berdasarkan Rajah 1, berapakah kapasiti enjin keretanya, dalam cc?",tol:0.01,b:1685,u:"RM234 berada antara RM200 dan RM280, jadi banjaran 1 601 – 1 800 cc. 200 + 0.40(x − 1 600) = 234, jadi 0.40(x − 1 600) = 34 dan x = 1 685 cc.",kira:()=>jalan(1685)===234?1685:0}],
 bos:{j:"nombor",t:"Keluarga Encik Tan mempunyai kereta 1 497 cc dan kereta 2 354 cc. Mereka bercadang menggantikan kereta 2 354 cc dengan kereta 1 798 cc. Berdasarkan Rajah 1, berapakah penjimatan cukai jalan setahun, dalam RM?",tol:0.01,b:454.8,u:"Langkah 1: cukai 2 354 cc = RM734. Langkah 2: cukai 1 798 cc = RM279.20. Langkah 3: penjimatan = 734 − 279.20 = RM454.80. Kereta 1 497 cc tidak berubah.",kira:()=>bul2(jalan(2354)-jalan(1798))}},

{n:5, tempat:"Majlis Perbandaran", sk:"4.1.3 / 4.1.4 Cukai pintu dan cukai tanah", lampiran:"r5",
 kadNama:"Nilai Tahunan", kadEm:"\u{1F3E1}", kadFakta:"Nilai tahunan ialah anggaran sewa setahun. Cukai pintu = kadar × nilai tahunan, biasanya dibayar dua kali setahun.",
 bosKadNama:"Kadar Baharu", bosKadEm:"\u{1F4C8}", bosKadFakta:"Kenaikan kadar 2% atas nilai tahunan menambah cukai sebanyak 2% × nilai tahunan setahun.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan sewa bulanan RM1 200 dan kadar 6%. Berapakah cukai pintu setahun, dalam RM? Kira dahulu, kemudian semak.",tol:0.01,b:864,u:"Nilai tahunan = 1 200 × 12 = RM14 400. Cukai pintu = 6% × 14 400 = RM864.",kira:()=>pintu(1200,6)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah bayaran cukai pintu bagi setiap setengah tahun, dalam RM, jika sewa bulanan RM1 500 dan kadar 8%?",tol:0.01,b:720,u:"Nilai tahunan = RM18 000. Cukai setahun = 8% × 18 000 = RM1 440. Setiap setengah tahun = RM720.",kira:()=>pintu(1500,8)/2},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah nilai tahunan, dalam RM, bagi sebuah rumah yang sewa bulanan anggarannya RM2 000?",tol:0.01,b:24000,u:"Nilai tahunan = 2 000 × 12 = RM24 000.",kira:()=>2000*12},
 {j:"nombor",t:"Cukai pintu sebuah rumah ialah RM576 setahun dengan kadar 4%. Berapakah anggaran sewa bulanannya, dalam RM?",tol:0.01,b:1200,u:"Nilai tahunan = 576 ÷ 4% = RM14 400. Sewa bulanan = 14 400 ÷ 12 = RM1 200.",kira:()=>576/0.04/12},
 {j:"nombor",t:"Cukai tanah bagi tanah kediaman ialah RM0.35 bagi setiap meter persegi. Hitung cukai tanah setahun, dalam RM, bagi lot seluas 450 m².",tol:0.01,b:157.5,u:"Cukai tanah = 0.35 × 450 = RM157.50.",kira:()=>bul2(0.35*450)},
 {j:"nombor",t:"Kadar cukai tanah pertanian ialah RM15 sehektar, dengan bayaran minimum RM10. Berapakah cukai tanah, dalam RM, bagi kebun seluas 0.5 hektar?",tol:0.01,b:10,u:"15 × 0.5 = RM7.50, iaitu kurang daripada bayaran minimum. Cukai tanah = RM10.",kira:()=>Math.max(10,15*0.5)},
 {j:"pilih",t:"Mengapakah cukai pintu bagi dua rumah yang sama reka bentuknya boleh berbeza?",p:["Nilai tahunan bergantung pada lokasi dan anggaran sewa","Pemilik rumah mempunyai pendapatan bulanan yang berbeza","Bilangan kereta setiap pemilik rumah berbeza","Cukai pintu dikira mengikut bilangan penghuni"],b:0,u:"Rumah yang sama di kawasan bandar mempunyai anggaran sewa lebih tinggi, jadi nilai tahunan dan cukai pintunya lebih tinggi."},
 {j:"nombor",t:"Encik Halim memiliki sebuah rumah dengan sewa bulanan anggaran RM1 000 (kadar cukai pintu 6%) di atas tanah kediaman seluas 300 m² (RM0.35/m²). Berapakah jumlah cukai pintu dan cukai tanah setahun, dalam RM?",tol:0.01,b:825,u:"Cukai pintu = 6% × 12 000 = RM720. Cukai tanah = 0.35 × 300 = RM105. Jumlah = RM825.",kira:()=>pintu(1000,6)+bul2(0.35*300)}],
 bos:{j:"nombor",t:"Majlis perbandaran menaikkan kadar cukai pintu daripada 6% kepada 8%. Sewa bulanan anggaran rumah Puan Ros ialah RM1 500. Berdasarkan Rajah 1, berapakah pertambahan bayaran bagi setiap setengah tahun, dalam RM?",tol:0.01,b:180,u:"Langkah 1: nilai tahunan = RM18 000. Langkah 2: cukai 6% = RM1 080, cukai 8% = RM1 440, pertambahan RM360 setahun. Langkah 3: setiap setengah tahun = 360 ÷ 2 = RM180.",kira:()=>(pintu(1500,8)-pintu(1500,6))/2}},

{n:6, tempat:"Bilik Perancang Cukai", sk:"4.1.4 Taksiran berasingan dan bersama (bukan rutin)", lampiran:"r6",
 kadNama:"Taksiran Bersama", kadEm:"\u{1F46B}", kadFakta:"Taksiran bersama menggabungkan pendapatan suami isteri dan memberi pelepasan pasangan. Ia biasanya menguntungkan jika seorang berpendapatan rendah atau tiada pendapatan.",
 bosKadNama:"Rancang Cukai", bosKadEm:"\u{1F4A1}", bosKadFakta:"Merancang cukai secara sah (memilih kaedah taksiran, menuntut pelepasan yang layak) berbeza daripada mengelak cukai, yang menyalahi undang-undang.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan pendapatan suami RM60 000 dan isteri RM0. Berapakah jumlah cukai bagi taksiran berasingan, dalam RM?",tol:0.01,b:1610,u:"Suami: bercukai 60 000 − 9 000 = RM51 000. Cukai = 1 500 + 11% × 1 000 = RM1 610. Isteri: RM0.",kira:()=>seorang(60000)+seorang(0)},
 {j:"nombor",t:"Dalam Rajah 1, berapakah cukai bagi taksiran bersama, dalam RM, apabila pendapatan suami RM60 000 dan isteri RM0?",tol:0.01,b:1320,u:"Bersama: 60 000 − 9 000 − 4 000 = RM47 000. Cukai = 600 + 6% × 12 000 = RM1 320.",kira:()=>bersama(60000,0)},
 {j:"pilih",t:"Berdasarkan Rajah 1, apabila pendapatan suami RM60 000 dan isteri RM36 000, kaedah manakah memberi jumlah cukai yang lebih rendah?",p:["Taksiran berasingan","Taksiran bersama","Kedua-duanya sama","Tidak dapat ditentukan"],b:0,u:"Berasingan: RM1 610 + RM0 (cukai isteri RM360 dihapuskan oleh rebat) = RM1 610. Bersama: bercukai RM83 000, cukai RM6 170.",kira:()=>seorang(60000)+seorang(36000)<bersama(60000,36000)},
 {j:"pilih",t:"Mengapakah taksiran bersama menjadi mahal apabila kedua-dua pasangan berpendapatan tinggi?",p:["Pendapatan gabungan jatuh dalam banjaran kadar yang lebih tinggi","Pelepasan pasangan dibatalkan sepenuhnya oleh LHDN bagi pasangan itu","Rebat cukai digandakan bagi pasangan","Kadar cukai bersama ditetapkan pada 25%"],b:0,u:"Kadar berperingkat bermaksud pendapatan gabungan yang besar dikenakan kadar 11% atau 19%, sedangkan secara berasingan setiap pendapatan kekal dalam banjaran yang lebih rendah."},
 {j:"nombor",t:"Berdasarkan Rajah 1, pendapatan suami RM48 000 dan isteri RM24 000. Berapakah penjimatan, dalam RM, jika memilih taksiran berasingan berbanding bersama?",tol:0.01,b:1650,u:"Berasingan: suami bercukai RM39 000, cukai RM840; isteri bercukai RM15 000, cukai RM100 dihapuskan rebat. Jumlah RM840. Bersama: bercukai RM59 000, cukai RM2 490. Penjimatan = RM1 650.",kira:()=>bersama(48000,24000)-(seorang(48000)+seorang(24000))},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan pendapatan suami RM84 000 dan isteri RM0. Berapakah penjimatan, dalam RM, jika memilih taksiran bersama?",tol:0.01,b:760,u:"Berasingan: bercukai RM75 000, cukai = 3 700 + 19% × 5 000 = RM4 650. Bersama: bercukai RM71 000, cukai = RM3 890. Penjimatan = RM760.",kira:()=>seorang(84000)-bersama(84000,0)},
 {j:"nombor",t:"Seorang pekerja menerima bonus RM5 000 yang menaikkan pendapatan bercukainya daripada RM68 000 kepada RM73 000. Kadar cukai ialah 11% bagi RM50 001 – RM70 000 dan 19% bagi RM70 001 – RM100 000. Berapakah cukai tambahan akibat bonus itu, dalam RM?",tol:0.01,b:790,u:"RM2 000 pertama bonus berada dalam banjaran 11%: RM220. RM3 000 selebihnya dalam banjaran 19%: RM570. Cukai tambahan = RM790.",kira:()=>cukai(73000)-cukai(68000)},
 {j:"pilih",t:"Sepasang suami isteri memilih taksiran bersama kerana cukainya lebih rendah. Dari aspek undang-undang, tindakan ini:",p:["Sah, kerana kedua-dua kaedah dibenarkan oleh undang-undang","Tidak sah, kerana ia satu bentuk pengelakan cukai","Sah dengan syarat isteri tidak bekerja langsung","Tidak sah, kerana pelepasan pasangan telah dihapuskan"],b:0,u:"Memilih kaedah taksiran yang dibenarkan ialah perancangan cukai yang sah. Pengelakan cukai, seperti menyembunyikan pendapatan, ialah kesalahan."}],
 bos:{j:"buka",
  t:"Rancang cukai pendapatan sebuah keluarga dan nilai pilihan yang paling bijak.",
  arahan:"Reka sebuah keluarga (pendapatan suami dan isteri, bilangan anak dan bayaran seperti KWSP, insurans hayat dan zakat). Kira cukai kena bayar bagi taksiran berasingan dan taksiran bersama dengan menunjukkan pelepasan, pendapatan bercukai, cukai dan rebat. Cadangkan kaedah yang lebih menjimatkan dan satu cara sah lain untuk mengurangkan cukai. Terangkan perbezaan antara perancangan cukai yang sah dan pengelakan cukai, serta mengapa membayar cukai penting kepada negara.",
  u:"Jawapan TP6 yang kukuh mempunyai data keluarga yang munasabah, pengiraan kedua-dua kaedah yang tepat dan tersusun, cadangan yang disokong oleh pengiraan, dan perbincangan etika yang membezakan perancangan cukai yang sah daripada pengelakan cukai."}}
];

module.exports = {
  id:"m5b4", tingkatan:5, kod:"4.0 Matematik Pengguna: Percukaian",
  tajuk:"Pusat Percukaian",
  subtajuk:"Matematik Ting. 5 · Bab 4 Matematik Pengguna: Percukaian",
  spi:SPI,
  ulasan:{
   1:"{n} memahami tujuan percukaian, mengenal pasti pelbagai jenis cukai dan pihak yang memungutnya, serta kesan pengelakan cukai. Langkah seterusnya ialah mengira cukai pendapatan.",
   2:"{n} dapat mentafsir jadual kadar cukai berperingkat dan mengira cukai pendapatan. Perlu lebih latihan tentang pelepasan dan rebat.",
   3:"{n} boleh mengira pendapatan bercukai dengan pelepasan, menolak rebat dan menganggar potongan cukai bulanan.",
   4:"{n} mampu menyelesaikan masalah rutin yang melibatkan cukai jalan serta cukai jualan dan perkhidmatan. Seterusnya, latih cukai pintu dan cukai tanah.",
   5:"{n} dapat menyelesaikan masalah kompleks yang melibatkan cukai pintu dan cukai tanah. Sudah bersedia untuk membandingkan kaedah taksiran.",
   6:"{n} berjaya merancang cukai sebuah keluarga, membandingkan taksiran berasingan dan bersama, serta membincangkan aspek etika percukaian. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Percukaian. Cadangan: ulang hentian pertama dengan Rajah 1 dan kenal pasti cukai yang dibayar oleh keluarga sendiri."
  },
  lampiran:{ r1:R1, r2:R2, r3:R3, r4:R4, r5:R5, r6:R6 },
  aras:ARAS
};
