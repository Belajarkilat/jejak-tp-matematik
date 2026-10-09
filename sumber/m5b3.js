/* Sumber kandungan — Matematik KSSM Tingkatan 5, Bab 3 Matematik Pengguna: Insurans.
   Fail ini disunting tangan. Jalankan `node bina.js m5b3`.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 4
   dan 5, muka 91 (dskp/matematik-t4-t5.pdf). DSKP menulis enam tahap penuh.
   Nota DSKP: risiko, pemindahan risiko, insurans bukan alat untuk mendapat keuntungan,
   jadual kadar premium bagi setiap RM1 (di sini setiap RM1 000), deduktibel dan ko-insurans
   (insurans bersama), serta menganalisis polisi untuk membuat keputusan yang bijak.

   Semua jadual kadar dalam bab ini ialah JADUAL CONTOH untuk pembelajaran, bukan kadar
   mana-mana syarikat insurans. Tarif motor mengikut struktur buku teks: RM bagi RM1 000
   pertama dan kadar bagi setiap RM1 000 berikutnya, dengan NCD 25%, 30%, 38.33%, 45%, 55%.
   Ko-insurans harta: pampasan = (dibeli ÷ harus dibeli) × kerugian − deduktibel.
   Ko-insurans perubatan x/y: pemegang polisi membayar deduktibel + y% baki.

   Rajah: widget t5insurans (widget-m5b3.js). */

const { rm } = require("./_k");
const bul2 = n => Math.round(n * 100 + 1e-9) / 100;

const SPI = [
"Mempamerkan pengetahuan asas tentang insurans.",
"Mempamerkan kefahaman tentang insurans.",
"Mengaplikasikan kefahaman tentang insurans untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang insurans dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang insurans dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang insurans dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- model ---------- */
const UMUR = [20, 25, 30, 35, 40];
const KAT = ["Lelaki bukan perokok", "Lelaki perokok", "Perempuan bukan perokok", "Perempuan perokok"];
const KADAR = [[1.40, 1.55, 1.80, 2.25, 3.00], [1.90, 2.10, 2.50, 3.20, 4.40], [1.20, 1.30, 1.50, 1.85, 2.45], [1.60, 1.75, 2.05, 2.60, 3.55]];
const hayat = (k, umur, nilai) => bul2(nilai / 1000 * KADAR[k][UMUR.indexOf(umur)]);
const ASAS = 339.10, TAMBAH = 26;
const motorKasar = v => bul2(ASAS + TAMBAH * (v - 1000) / 1000);
const motorBersih = (v, p) => { const k = motorKasar(v); return bul2(k - bul2(k * p / 100)); };
const D4 = 500, deduk = (rugi, D) => Math.max(0, rugi - D);
const HARTA = 500000, KP = 80, D5 = 2000;
const koins = (nilai, p, D, beli, rugi) => { const harus = nilai * p / 100; return Math.min(beli, beli >= harus ? Math.max(0, rugi - D) : Math.max(0, bul2(beli / harus * rugi - D))); };
const POL = [{ nama: "Polisi A", D: 500, s: 20, premium: 1200 }, { nama: "Polisi B", D: 2000, s: 10, premium: 700 }];
const sendiri = (p, kos) => bul2(Math.min(kos, p.D) + Math.max(0, kos - p.D) * p.s / 100);

/* ---------- lampiran ---------- */
const iw = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t5insurans", kapsyen, alt }, extra);
const R1 = iw("Rajah 1 · Lima risiko dalam kehidupan seharian. Pilih satu risiko.",
  "Rajah interaktif lima risiko; setiap risiko menunjukkan polisi insurans yang sesuai dan sama ada ia insurans hayat atau insurans am",
  { mod: "jenis", risiko: [
    { t: "Kebakaran rumah", insurans: "Insurans kebakaran", kelas: "am", nota: ["Melindungi bangunan dan harta", "di dalamnya daripada kerosakan", "akibat kebakaran."] },
    { t: "Kemalangan kereta", insurans: "Insurans motor", kelas: "am", nota: ["Melindungi kenderaan dan liabiliti", "kepada pihak ketiga dalam", "kemalangan jalan raya."] },
    { t: "Kematian penanggung", insurans: "Insurans hayat", kelas: "hayat", nota: ["Pampasan dibayar kepada penama", "apabila pemegang polisi", "meninggal dunia."] },
    { t: "Bagasi hilang", insurans: "Insurans perjalanan", kelas: "am", nota: ["Melindungi kerugian semasa", "perjalanan, contohnya bagasi", "hilang atau penerbangan batal."] },
    { t: "Kecederaan", insurans: "Insurans kemalangan diri", kelas: "am", nota: ["Pampasan bagi kecederaan,", "hilang upaya atau kematian", "akibat kemalangan."] }] });
const R2 = iw("Rajah 1 · Jadual contoh kadar premium tahunan insurans hayat bagi setiap RM1 000 nilai muka.",
  "Rajah interaktif jadual kadar premium insurans hayat mengikut umur 20 hingga 40 dan empat kategori jantina dan tabiat merokok; premium tahunan dikira bagi nilai muka yang dipilih",
  { mod: "hayat", umur: UMUR, kategori: KAT, kadar: KADAR, nilai: [50000, 100000, 150000, 200000, 250000], uAwal: 2, vAwal: 1 });
const R3 = iw("Rajah 1 · Premium contoh polisi motor komprehensif. Pilih nilai kereta dan NCD.",
  "Rajah interaktif premium motor komprehensif: RM339.10 bagi RM1 000 pertama dan RM26 bagi setiap RM1 000 berikutnya, ditolak diskaun tanpa tuntutan 0 hingga 55 peratus",
  { mod: "motor", asas: ASAS, tambahan: TAMBAH, nilai: [30000, 40000, 50000, 60000, 70000, 80000], ncd: [0, 25, 30, 38.33, 45, 55], vAwal: 2 });
const R4 = iw("Rajah 1 · Polisi dengan deduktibel RM500. Gerakkan nilai kerugian.",
  "Rajah interaktif deduktibel RM500: bar kerugian dibahagi kepada bahagian yang ditanggung sendiri dan pampasan syarikat insurans",
  { mod: "deduktibel", D: D4, rugi: [300, 800, 1500, 2500, 4000, 6000], rAwal: 3 });
const R5 = iw("Rajah 1 · Rumah bernilai RM500 000, fasal ko-insurans 80%, deduktibel RM2 000. Kira dahulu, kemudian semak.",
  "Rajah interaktif ko-insurans harta: gelongsor jumlah insurans yang dibeli dan jumlah kerugian; pampasan dikira dengan nisbah insurans dibeli kepada insurans yang harus dibeli, dalam mod cabar",
  { mod: "koinsurans", cabar: true, nilai: HARTA, p: KP, D: D5, beli: [250000, 300000, 350000, 400000, 450000], rugi: [20000, 50000, 100000, 150000], bAwal: 1, rAwal: 2 });
const R6 = iw("Rajah 1 · Dua polisi perubatan contoh. Gerakkan kos rawatan dan bandingkan.",
  "Rajah interaktif perbandingan Polisi A (deduktibel RM500, ko-insurans 80/20, premium RM1 200) dan Polisi B (deduktibel RM2 000, ko-insurans 90/10, premium RM700) bagi kos rawatan yang berbeza",
  { mod: "banding", polisi: POL, kos: [1000, 3000, 5000, 10000, 20000, 40000], rAwal: 3 });

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Pondok Risiko", sk:"3.1.1 Risiko, kepentingan insurans, insurans hayat dan insurans am", lampiran:"r1",
 kadNama:"Pindah Risiko", kadEm:"\u{2602}\u{FE0F}", kadFakta:"Insurans memindahkan risiko kerugian kewangan daripada individu kepada syarikat insurans, dengan bayaran premium.",
 bosKadNama:"Pelindung Keluarga", bosKadEm:"\u{1F46A}", bosKadFakta:"Pilih polisi berdasarkan risiko utama: siapa yang bergantung kepada pendapatan awak dan harta apa yang awak miliki.",
 soalan:[
 {j:"pilih",t:"Dalam konteks insurans, risiko bermaksud:",p:["Kemungkinan berlakunya musibah yang tidak dapat dielak","Keuntungan yang diperoleh daripada pelaburan saham dan hartanah","Bayaran tahunan pemegang polisi kepada syarikat insurans","Kerugian yang pasti berlaku setiap tahun"],b:0,u:"Menurut DSKP, risiko ialah kemungkinan berlakunya musibah yang tidak dapat dielak, seperti kemalangan atau kebakaran."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Kebakaran rumah. Polisi yang sesuai ialah:",p:["Insurans kebakaran","Insurans hayat","Insurans perjalanan","Insurans motor"],b:0,u:"Insurans kebakaran ialah insurans am yang melindungi bangunan dan harta daripada kerosakan akibat kebakaran."},
 {j:"pilih",t:"Dalam Rajah 1, risiko manakah dilindungi oleh insurans hayat?",p:["Kematian penanggung","Kebakaran rumah","Bagasi hilang","Kemalangan kereta"],b:0,u:"Insurans hayat membayar pampasan kepada penama apabila pemegang polisi meninggal dunia. Risiko lain dilindungi oleh insurans am."},
 {j:"pilih",t:"Tujuan utama insurans ialah:",p:["Memindahkan risiko daripada individu kepada syarikat insurans","Mendapatkan keuntungan kewangan apabila berlaku sebarang kerugian","Menghapuskan semua risiko dalam kehidupan","Menggantikan simpanan bulanan di bank"],b:0,u:"Insurans tidak menghalang musibah daripada berlaku. Ia mengurangkan beban kewangan dengan memindahkan risiko kepada syarikat insurans."},
 {j:"pilih",t:"Mengapakah insurans tidak boleh dijadikan alat untuk mendapatkan keuntungan?",p:["Pampasan hanya menggantikan kerugian sebenar","Premium insurans terlalu murah untuk untung","Syarikat insurans tidak membayar pampasan","Polisi insurans tamat selepas setahun"],b:0,u:"Prinsip indemniti: pampasan mengembalikan pemegang polisi kepada kedudukan kewangan sebelum kerugian, bukan lebih daripada itu."},
 {j:"pilih",t:"Dalam polisi insurans, premium ialah:",p:["Bayaran pemegang polisi kepada syarikat insurans","Pampasan yang dibayar kepada pemegang polisi selepas tuntutan","Nilai harta yang diinsuranskan","Jumlah kerugian yang dituntut"],b:0,u:"Premium ialah bayaran berkala (bulanan atau tahunan) yang dibuat oleh pemegang polisi untuk mendapat perlindungan."},
 {j:"pilih",t:"Pemegang polisi ialah:",p:["Individu atau organisasi yang membeli polisi insurans","Syarikat yang menjual polisi insurans dan membayar pampasan","Ejen yang menerima komisen jualan","Penama yang menerima pampasan"],b:0,u:"Pemegang polisi membeli polisi dan membayar premium. Syarikat insurans ialah penanggung insurans."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Bagasi hilang. Polisi yang sesuai tergolong dalam:",p:["Insurans am","Insurans hayat","Pelaburan unit amanah","Skim simpanan tetap"],b:0,u:"Insurans perjalanan melindungi kerugian harta semasa perjalanan, jadi ia tergolong dalam insurans am."}],
 bos:{j:"pilih",t:"Encik Amir memandu ke tempat kerja setiap hari dan menyara tiga orang anak. Gabungan polisi manakah paling sesuai untuk melindungi risiko utamanya?",p:["Insurans motor dan insurans hayat","Insurans perjalanan dan insurans kebakaran","Insurans perjalanan dan insurans telefon bimbit","Insurans kebakaran dan insurans bagasi"],b:0,u:"Risiko utama: kemalangan semasa memandu (insurans motor) dan kehilangan pendapatan keluarga jika dia meninggal dunia (insurans hayat)."}},

{n:2, tempat:"Kaunter Premium", sk:"3.1.2 Kadar dan premium insurans hayat", lampiran:"r2",
 kadNama:"Kadar per RM1 000", kadEm:"\u{1F4CB}", kadFakta:"Premium = (nilai muka ÷ RM1 000) × kadar premium. Kadar bergantung pada umur, jantina dan tabiat merokok.",
 bosKadNama:"Bajet Premium", bosKadEm:"\u{1F4B0}", bosKadFakta:"Nilai muka maksimum = bajet ÷ kadar × RM1 000, dibundarkan ke bawah supaya premium tidak melebihi bajet.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih Lelaki bukan perokok, umur 30 dan nilai muka RM100 000. Berapakah premium tahunan, dalam RM?",tol:0.01,b:180,u:"Premium = 100 000 ÷ 1 000 × 1.80 = 100 × 1.80 = RM180.",kira:()=>hayat(0,30,100000)},
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung premium tahunan, dalam RM, bagi perempuan perokok berumur 35 tahun dengan nilai muka RM200 000.",tol:0.01,b:520,u:"Kadar = RM2.60. Premium = 200 × 2.60 = RM520.",kira:()=>hayat(3,35,200000)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah beza premium tahunan, dalam RM, antara lelaki perokok dan lelaki bukan perokok berumur 25 tahun bagi nilai muka RM150 000?",tol:0.01,b:82.5,u:"Perokok: 150 × 2.10 = RM315. Bukan perokok: 150 × 1.55 = RM232.50. Beza = RM82.50.",kira:()=>bul2(hayat(1,25,150000)-hayat(0,25,150000))},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah kadar premium meningkat apabila umur meningkat?",p:["Risiko kematian lebih tinggi bagi orang yang lebih tua","Orang yang lebih tua mempunyai pendapatan lebih tinggi","Syarikat insurans mahukan keuntungan daripada warga tua","Nilai muka polisi menurun mengikut umur pemegang polisi"],b:0,u:"Kadar premium mencerminkan risiko. Kebarangkalian tuntutan insurans hayat meningkat dengan umur, jadi kadarnya lebih tinggi."},
 {j:"pilih",t:"Berdasarkan Rajah 1, mengapakah kadar premium perokok lebih tinggi daripada bukan perokok?",p:["Perokok mempunyai risiko kesihatan yang lebih tinggi","Perokok membelanjakan lebih banyak wang setiap bulan","Perokok biasanya membeli nilai muka yang lebih besar","Syarikat menetapkan kadar itu secara rawak"],b:0,u:"Merokok meningkatkan risiko penyakit serius dan kematian awal, jadi risiko yang dipindahkan kepada syarikat insurans lebih besar."},
 {j:"nombor",t:"Premium tahunan suatu polisi ialah RM360 dengan kadar RM2.40 bagi setiap RM1 000 nilai muka. Berapakah nilai muka polisi itu, dalam RM?",tol:0.01,b:150000,u:"Bilangan unit RM1 000 = 360 ÷ 2.40 = 150. Nilai muka = 150 × RM1 000 = RM150 000.",kira:()=>360/2.4*1000},
 {j:"nombor",t:"Berdasarkan Rajah 1, premium bulanan ialah 1/12 daripada premium tahunan. Hitung premium bulanan, dalam RM, bagi lelaki bukan perokok berumur 40 tahun dengan nilai muka RM250 000.",tol:0.01,b:62.5,u:"Premium tahunan = 250 × 3.00 = RM750. Premium bulanan = 750 ÷ 12 = RM62.50.",kira:()=>hayat(0,40,250000)/12},
 {j:"pilih",t:"Nilai muka dalam polisi insurans hayat bermaksud:",p:["Jumlah perlindungan yang dibayar apabila berlaku tuntutan","Premium yang dibayar oleh pemegang polisi setiap tahun","Kadar premium bagi setiap RM1 000 perlindungan","Umur pemegang polisi semasa membeli polisi"],b:0,u:"Nilai muka ialah jumlah perlindungan. Premium dikira berdasarkan nilai muka dan kadar premium."}],
 bos:{j:"nombor",t:"Puan Siti berumur 25 tahun dan tidak merokok. Dia mempunyai bajet RM300 setahun untuk premium insurans hayat. Berdasarkan Rajah 1, berapakah nilai muka maksimum, dalam gandaan RM1 000, yang boleh dibelinya?",tol:0.01,b:230000,u:"Langkah 1: kadar = RM1.30. Langkah 2: 300 ÷ 1.30 = 230.77 unit. Langkah 3: ambil 230 unit kerana 231 unit memerlukan RM300.30. Nilai muka = RM230 000.",kira:()=>Math.floor(300/1.30)*1000}},

{n:3, tempat:"Bengkel Motor", sk:"3.1.2 Premium insurans motor dan diskaun tanpa tuntutan", lampiran:"r3",
 kadNama:"NCD", kadEm:"\u{1F697}", kadFakta:"Diskaun tanpa tuntutan (NCD) diberi jika tiada tuntutan dibuat dalam tempoh polisi sebelumnya: 25%, 30%, 38.33%, 45% hingga 55%.",
 bosKadNama:"Pemandu Berhemah", bosKadEm:"\u{1F3C6}", bosKadFakta:"Setiap tahun tanpa tuntutan menaikkan NCD, jadi premium kena bayar berkurang walaupun premium asas sama.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan nilai kereta RM50 000 dan NCD 0%. Berapakah premium asas, dalam RM?",tol:0.01,b:1613.1,u:"Premium asas = 339.10 + 49 × 26 = 339.10 + 1 274 = RM1 613.10.",kira:()=>motorKasar(50000)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan nilai kereta RM60 000 dan NCD 30%. Berapakah premium kena bayar, dalam RM?",tol:0.01,b:1311.17,u:"Premium asas = 339.10 + 59 × 26 = RM1 873.10. NCD = 30% × 1 873.10 = RM561.93. Premium kena bayar = 1 873.10 − 561.93 = RM1 311.17.",kira:()=>motorBersih(60000,30)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah premium asas, dalam RM, bagi kereta bernilai RM80 000?",tol:0.01,b:2393.1,u:"Premium asas = 339.10 + 79 × 26 = 339.10 + 2 054 = RM2 393.10.",kira:()=>motorKasar(80000)},
 {j:"pilih",t:"NCD (diskaun tanpa tuntutan) diberikan kepada pemegang polisi yang:",p:["Tidak membuat tuntutan dalam tempoh polisi sebelumnya","Membeli kereta baharu daripada pengedar yang diberi kuasa","Memandu kurang daripada satu tahun","Membayar premium secara tunai"],b:0,u:"NCD ialah ganjaran bagi pemandu yang tidak membuat tuntutan. Ia meningkat setiap tahun berturut-turut tanpa tuntutan."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apabila nilai kereta bertambah RM10 000, premium asas bertambah:",p:["RM260","RM26","RM339.10","RM2 600"],b:0,u:"Setiap RM1 000 tambahan menambah RM26. RM10 000 ialah 10 × RM1 000, jadi premium bertambah 10 × 26 = RM260.",kira:()=>bul2(motorKasar(60000)-motorKasar(50000))},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah nilai diskaun NCD, dalam RM, bagi kereta bernilai RM40 000 dengan NCD 45%?",tol:0.01,b:608.9,u:"Premium asas = 339.10 + 39 × 26 = RM1 353.10. NCD = 45% × 1 353.10 = RM608.90.",kira:()=>bul2(motorKasar(40000)*0.45)},
 {j:"pilih",t:"Polisi motor yang memberikan perlindungan paling luas ialah:",p:["Polisi komprehensif","Polisi pihak ketiga","Polisi pihak ketiga, kebakaran dan kecurian","Polisi perjalanan"],b:0,u:"Polisi komprehensif melindungi kenderaan sendiri dan pihak ketiga, termasuk kemalangan, kebakaran dan kecurian."},
 {j:"nombor",t:"Premium asas kereta Encik Lim ialah RM1 200. Dia layak mendapat NCD 38.33%. Berapakah premium kena bayar, dalam RM?",tol:0.01,b:740.04,u:"NCD = 38.33% × 1 200 = RM459.96. Premium kena bayar = 1 200 − 459.96 = RM740.04.",kira:()=>bul2(1200-bul2(1200*0.3833))}],
 bos:{j:"nombor",t:"Kereta Puan Mei bernilai RM60 000 (Rajah 1). Tahun lalu NCD-nya 30%. Tahun ini dia tidak membuat tuntutan, jadi NCD naik kepada 38.33%. Dengan premium asas yang sama, berapakah penjimatan premium kena bayar, dalam RM?",tol:0.02,b:156.03,u:"Langkah 1: premium asas = RM1 873.10. Langkah 2: NCD 30% memberi RM1 311.17 dan NCD 38.33% memberi 1 873.10 − 717.96 = RM1 155.14. Langkah 3: penjimatan = 1 311.17 − 1 155.14 = RM156.03.",kira:()=>bul2(motorBersih(60000,30)-motorBersih(60000,38.33))}},

{n:4, tempat:"Kaunter Tuntutan", sk:"3.1.3 Masalah yang melibatkan deduktibel", lampiran:"r4",
 kadNama:"Deduktibel", kadEm:"\u{1F4DD}", kadFakta:"Deduktibel ialah bahagian kerugian yang ditanggung sendiri oleh pemegang polisi. Pampasan = kerugian − deduktibel.",
 bosKadNama:"Tuntutan Rumah", bosKadEm:"\u{1F3E0}", bosKadFakta:"Baca syarat polisi dengan teliti: deduktibel ditolak dahulu, kemudian peratus perlindungan dikenakan pada baki.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan kerugian RM2 500. Berapakah pampasan, dalam RM?",tol:0.01,b:2000,u:"Pampasan = 2 500 − 500 = RM2 000. Pemegang polisi menanggung RM500.",kira:()=>deduk(2500,D4)},
 {j:"nombor",t:"Dalam Rajah 1, berapakah pampasan, dalam RM, bagi kerugian RM300?",tol:0.01,b:0,u:"Kerugian RM300 kurang daripada deduktibel RM500, jadi syarikat insurans tidak membayar apa-apa.",kira:()=>deduk(300,D4)},
 {j:"pilih",t:"Deduktibel ialah:",p:["Bahagian kerugian yang ditanggung sendiri oleh pemegang polisi","Diskaun premium yang diberi kerana tiada tuntutan","Nilai perlindungan maksimum bagi suatu polisi insurans","Bayaran tahunan pemegang polisi kepada syarikat"],b:0,u:"Deduktibel ditolak daripada setiap tuntutan. Diskaun kerana tiada tuntutan ialah NCD."},
 {j:"nombor",t:"Kereta Hafiz rosak dalam kemalangan dengan kos pembaikan RM4 300. Polisinya mempunyai deduktibel RM800. Berapakah pampasan, dalam RM?",tol:0.01,b:3500,u:"Pampasan = 4 300 − 800 = RM3 500.",kira:()=>deduk(4300,800)},
 {j:"nombor",t:"Berdasarkan Rajah 1, Ali membuat dua tuntutan berasingan, RM800 dan RM1 500, dalam setahun. Deduktibel dikenakan bagi setiap tuntutan. Berapakah jumlah pampasan, dalam RM?",tol:0.01,b:1300,u:"Tuntutan 1: 800 − 500 = RM300. Tuntutan 2: 1 500 − 500 = RM1 000. Jumlah = RM1 300.",kira:()=>deduk(800,D4)+deduk(1500,D4)},
 {j:"pilih",t:"Polisi X: deduktibel RM200, premium RM900 setahun. Polisi Y: deduktibel RM1 000, premium RM600 setahun. Aina jarang membuat tuntutan kecil. Polisi manakah lebih menjimatkan baginya?",p:["Polisi Y, kerana premium lebih rendah dan tuntutan kecil jarang berlaku","Polisi X, kerana deduktibelnya lebih rendah daripada Polisi Y","Polisi X, kerana premium yang lebih tinggi memberi perlindungan lebih","Polisi Y, kerana deduktibel yang tinggi menambah jumlah pampasan"],b:0,u:"Aina menjimatkan RM300 premium setahun dengan Polisi Y. Deduktibel yang tinggi hanya merugikannya jika dia kerap membuat tuntutan kecil."},
 {j:"nombor",t:"Deduktibel sebuah polisi kebakaran ialah 1% daripada jumlah yang diinsuranskan, iaitu RM300 000. Kerugian akibat kebakaran ialah RM45 000. Berapakah pampasan, dalam RM?",tol:0.01,b:42000,u:"Deduktibel = 1% × 300 000 = RM3 000. Pampasan = 45 000 − 3 000 = RM42 000.",kira:()=>deduk(45000,0.01*300000)},
 {j:"pilih",t:"Berdasarkan Rajah 1, apabila kerugian kurang daripada deduktibel:",p:["Syarikat insurans tidak membayar pampasan","Syarikat insurans membayar semua kerugian","Pemegang polisi menerima nilai deduktibel","Premium tahun hadapan dikurangkan separuh"],b:0,u:"Pemegang polisi menanggung kerugian sehingga nilai deduktibel. Jika kerugian lebih kecil, tiada pampasan dibayar."}],
 bos:{j:"nombor",t:"Rumah Encik Rahman diinsuranskan dengan deduktibel RM1 000. Dalam satu kejadian, kerosakan dapur bernilai RM6 400 dan kerosakan bumbung bernilai RM2 100 (dituntut sebagai satu tuntutan). Syarikat membayar 90% daripada kerugian selepas deduktibel. Berapakah pampasan, dalam RM?",tol:0.01,b:6750,u:"Langkah 1: jumlah kerugian = 6 400 + 2 100 = RM8 500. Langkah 2: selepas deduktibel = 8 500 − 1 000 = RM7 500. Langkah 3: pampasan = 90% × 7 500 = RM6 750.",kira:()=>0.9*deduk(8500,1000)}},

{n:5, tempat:"Pejabat Harta", sk:"3.1.3 Masalah yang melibatkan ko-insurans", lampiran:"r5",
 kadNama:"Ko-insurans", kadEm:"\u{1F3E1}", kadFakta:"Jumlah insurans yang harus dibeli = peratus ko-insurans × nilai harta. Jika kurang, pampasan dikurangkan mengikut nisbah.",
 bosKadNama:"Cukup Perlindungan", bosKadEm:"\u{1F6E1}\u{FE0F}", bosKadFakta:"Untuk menerima pampasan penuh, beli sekurang-kurangnya jumlah yang harus dibeli mengikut fasal ko-insurans.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, berapakah jumlah insurans yang harus dibeli, dalam RM? Kira dahulu, kemudian semak.",tol:0.01,b:400000,u:"Jumlah yang harus dibeli = 80% × 500 000 = RM400 000.",kira:()=>HARTA*KP/100},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan insurans dibeli RM300 000 dan kerugian RM100 000. Berapakah pampasan, dalam RM?",tol:0.01,b:73000,u:"Insurans tidak mencukupi. Pampasan = 300 000/400 000 × 100 000 − 2 000 = 75 000 − 2 000 = RM73 000.",kira:()=>koins(HARTA,KP,D5,300000,100000)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan insurans dibeli RM450 000 dan kerugian RM50 000. Berapakah pampasan, dalam RM?",tol:0.01,b:48000,u:"RM450 000 melebihi RM400 000, jadi insurans mencukupi. Pampasan = 50 000 − 2 000 = RM48 000.",kira:()=>koins(HARTA,KP,D5,450000,50000)},
 {j:"nombor",t:"Berdasarkan Rajah 1, insurans dibeli RM250 000 dan kerugian RM20 000. Berapakah jumlah yang ditanggung sendiri oleh pemilik, dalam RM?",tol:0.01,b:9500,u:"Pampasan = 250 000/400 000 × 20 000 − 2 000 = 12 500 − 2 000 = RM10 500. Ditanggung pemilik = 20 000 − 10 500 = RM9 500.",kira:()=>20000-koins(HARTA,KP,D5,250000,20000)},
 {j:"pilih",t:"Mengapakah pemilik dalam Rajah 1 menerima pampasan yang dikurangkan apabila membeli insurans RM300 000?",p:["Harta diinsuranskan kurang daripada 80% nilainya","Deduktibel dikenakan dua kali bagi kerugian yang besar","Nilai harta menurun selepas berlaku kebakaran","Kadar premium yang dibayarnya terlalu rendah"],b:0,u:"Fasal ko-insurans 80% memerlukan RM400 000. Dengan RM300 000, pemilik hanya dilindungi 300/400 = 75% daripada kerugian."},
 {j:"nombor",t:"Sebuah kedai bernilai RM600 000 mempunyai fasal ko-insurans 70% dan deduktibel RM5 000. Pemiliknya membeli insurans RM315 000. Kebakaran menyebabkan kerugian RM80 000. Hitung pampasan, dalam RM.",tol:0.01,b:55000,u:"Harus dibeli = 70% × 600 000 = RM420 000. Pampasan = 315 000/420 000 × 80 000 − 5 000 = 60 000 − 5 000 = RM55 000.",kira:()=>koins(600000,70,5000,315000,80000)},
 {j:"nombor",t:"Polisi perubatan Kamal mempunyai deduktibel RM500 dan fasal ko-insurans 80/20. Kos rawatannya RM8 500. Berapakah jumlah yang dibayar oleh syarikat insurans, dalam RM?",tol:0.01,b:6400,u:"Baki selepas deduktibel = 8 500 − 500 = RM8 000. Syarikat membayar 80% × 8 000 = RM6 400. Kamal membayar 500 + 1 600 = RM2 100.",kira:()=>8500-sendiri({D:500,s:20},8500)},
 {j:"nombor",t:"Polisi perubatan dengan deduktibel RM300 mempunyai fasal ko-insurans 90/10. Kos rawatan ialah RM5 300. Berapakah bayaran sendiri pemegang polisi, dalam RM?",tol:0.01,b:800,u:"Baki = 5 300 − 300 = RM5 000. Bayaran sendiri = 300 + 10% × 5 000 = 300 + 500 = RM800.",kira:()=>sendiri({D:300,s:10},5300)}],
 bos:{j:"nombor",t:"Rumah bernilai RM350 000 mempunyai fasal ko-insurans 80% dan deduktibel RM2 500. Pemiliknya mahu menerima pampasan RM50 000 jika berlaku kerugian RM70 000. Berapakah jumlah insurans minimum yang perlu dibeli, dalam RM?",tol:0.01,b:210000,u:"Langkah 1: harus dibeli = 80% × 350 000 = RM280 000. Langkah 2: beli/280 000 × 70 000 − 2 500 = 50 000, jadi beli/280 000 × 70 000 = 52 500. Langkah 3: beli = 52 500/70 000 × 280 000 = RM210 000.",kira:()=>koins(350000,80,2500,210000,70000)===50000?210000:0}},

{n:6, tempat:"Meja Perancang", sk:"3.1.3 Menganalisis polisi dan membuat keputusan (bukan rutin)", lampiran:"r6",
 kadNama:"Titik Pulang Modal", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Bandingkan polisi dengan jumlah kos setahun: premium + bayaran sendiri. Polisi terbaik bergantung pada jangkaan kos rawatan.",
 bosKadNama:"Perancang Bijak", bosKadEm:"\u{1F4A1}", bosKadFakta:"Keputusan insurans yang bijak mengambil kira risiko keluarga, bajet premium dan kemampuan menanggung deduktibel.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan kos rawatan RM10 000. Berapakah bayaran sendiri bagi Polisi A, dalam RM?",tol:0.01,b:2400,u:"Polisi A: 500 + 20% × (10 000 − 500) = 500 + 1 900 = RM2 400.",kira:()=>sendiri(POL[0],10000)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah bayaran sendiri bagi Polisi B, dalam RM, apabila kos rawatan RM10 000?",tol:0.01,b:2800,u:"Polisi B: 2 000 + 10% × (10 000 − 2 000) = 2 000 + 800 = RM2 800.",kira:()=>sendiri(POL[1],10000)},
 {j:"pilih",t:"Berdasarkan Rajah 1, bagi kos rawatan RM20 000, polisi manakah memberi bayaran sendiri yang lebih rendah?",p:["Polisi B","Polisi A","Kedua-duanya sama","Tidak dapat ditentukan"],b:0,u:"Polisi A: 500 + 20% × 19 500 = RM4 400. Polisi B: 2 000 + 10% × 18 000 = RM3 800. Polisi B lebih rendah.",kira:()=>sendiri(POL[1],20000)<sendiri(POL[0],20000)},
 {j:"nombor",t:"Berdasarkan Rajah 1, pada kos rawatan berapakah, dalam RM, bayaran sendiri bagi kedua-dua polisi sama?",tol:0.01,b:14000,u:"500 + 0.2(k − 500) = 2 000 + 0.1(k − 2 000). Maka 400 + 0.2k = 1 800 + 0.1k, jadi 0.1k = 1 400 dan k = RM14 000.",kira:()=>sendiri(POL[0],14000)===sendiri(POL[1],14000)?14000:0},
 {j:"nombor",t:"Berdasarkan Rajah 1, hitung jumlah kos setahun (premium + bayaran sendiri) bagi Polisi A, dalam RM, jika kos rawatan ialah RM3 000.",tol:0.01,b:2200,u:"Bayaran sendiri = 500 + 20% × 2 500 = RM1 000. Jumlah = 1 200 + 1 000 = RM2 200.",kira:()=>POL[0].premium+sendiri(POL[0],3000)},
 {j:"pilih",t:"Seorang pelajar yang sihat jarang ke klinik tetapi bimbang tentang penyakit serius yang mahal. Berdasarkan Rajah 1, polisi manakah lebih sesuai dan mengapa?",p:["Polisi B: premium rendah, dan bayaran sendiri lebih kecil bagi kos yang sangat tinggi","Polisi A: deduktibel yang rendah sesuai untuk tuntutan kecil yang kerap","Polisi A: premium yang lebih tinggi sentiasa memberi perlindungan yang terbaik","Polisi B: deduktibel yang tinggi bermaksud syarikat insurans membayar lebih awal"],b:0,u:"Bagi kos melebihi RM14 000, Polisi B lebih murah, dan premiumnya RM500 lebih rendah. Deduktibel rendah Polisi A hanya bernilai bagi tuntutan kecil yang kerap.",kira:()=>sendiri(POL[1],40000)<sendiri(POL[0],40000)&&POL[1].premium<POL[0].premium},
 {j:"nombor",t:"Berdasarkan Rajah 1, jika kos rawatan RM40 000, berapakah penjimatan jumlah kos setahun (premium + bayaran sendiri), dalam RM, jika memilih Polisi B berbanding Polisi A?",tol:0.01,b:3100,u:"Polisi A: 1 200 + 500 + 20% × 39 500 = RM9 600. Polisi B: 700 + 2 000 + 10% × 38 000 = RM6 500. Penjimatan = RM3 100.",kira:()=>(POL[0].premium+sendiri(POL[0],40000))-(POL[1].premium+sendiri(POL[1],40000))},
 {j:"pilih",t:"Berdasarkan Rajah 1, jika tiada rawatan langsung dalam setahun, beza jumlah kos antara dua polisi itu ialah:",p:["RM500, iaitu beza premium","RM1 500, iaitu beza deduktibel","RM0, kerana tiada tuntutan dibuat","RM1 900, iaitu jumlah premium"],b:0,u:"Tanpa rawatan, kos hanyalah premium: RM1 200 − RM700 = RM500.",kira:()=>POL[0].premium-POL[1].premium===500}],
 bos:{j:"buka",
  t:"Bandingkan dua polisi insurans untuk sebuah keluarga dan buat keputusan yang bijak.",
  arahan:"Pilih satu jenis insurans (perubatan atau motor). Reka atau dapatkan maklumat dua polisi yang berbeza dari segi premium, deduktibel dan ko-insurans atau NCD. Kira jumlah kos setahun bagi sekurang-kurangnya tiga senario (tiada tuntutan, tuntutan kecil, tuntutan besar). Tentukan polisi yang paling sesuai untuk keluarga itu dan beri justifikasi. Nyatakan juga mengapa insurans tidak boleh dijadikan alat untuk mendapat keuntungan.",
  u:"Jawapan TP6 yang kukuh membandingkan dua polisi yang munasabah, menunjukkan pengiraan kos bagi beberapa senario dengan tepat, membuat keputusan yang sepadan dengan keperluan keluarga, dan memberi justifikasi termasuk prinsip indemniti."}}
];

module.exports = {
  id:"m5b3", tingkatan:5, kod:"3.0 Matematik Pengguna: Insurans",
  tajuk:"Pusat Insurans",
  subtajuk:"Matematik Ting. 5 · Bab 3 Matematik Pengguna: Insurans",
  spi:SPI,
  ulasan:{
   1:"{n} memahami maksud risiko dan kepentingan insurans, serta dapat membezakan insurans hayat dan insurans am. Langkah seterusnya ialah mengira premium.",
   2:"{n} dapat mentafsir jadual kadar premium insurans hayat dan mengira premium mengikut nilai muka. Perlu lebih latihan tentang premium motor dan NCD.",
   3:"{n} boleh mengira premium insurans motor dan diskaun tanpa tuntutan untuk tugasan mudah.",
   4:"{n} mampu menyelesaikan masalah tuntutan insurans yang melibatkan deduktibel. Seterusnya, latih masalah ko-insurans.",
   5:"{n} dapat menyelesaikan masalah rutin kompleks yang melibatkan ko-insurans harta dan perubatan. Sudah bersedia untuk menganalisis dan membandingkan polisi.",
   6:"{n} berjaya menganalisis beberapa polisi insurans, membuat keputusan yang bijak dan memberi justifikasi yang munasabah. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Insurans. Cadangan: ulang hentian pertama dengan Rajah 1 dan senaraikan risiko yang dihadapi oleh keluarga sendiri."
  },
  lampiran:{ r1:R1, r2:R2, r3:R3, r4:R4, r5:R5, r6:R6 },
  aras:ARAS
};
