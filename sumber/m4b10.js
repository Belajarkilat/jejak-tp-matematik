/* Sumber kandungan — Matematik KSSM Tingkatan 4, Bab 10 Matematik Pengguna: Pengurusan Kewangan.
   Fail ini disunting tangan. Jalankan `node bina.js m4b10`.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 4
   dan 5, muka 75 (dskp/matematik-t4-t5.pdf). DSKP menulis enam tahap penuh.
   Proses pengurusan kewangan ikut DSKP 10.1.1: menetapkan matlamat, menilai kedudukan
   kewangan, mewujudkan pelan kewangan, melaksanakan pelan kewangan, mengkaji semula dan
   menyemak kemajuan. Matlamat ikut konsep SMART (DSKP 10.1.2), dengan penekanan pada
   keperluan dan kehendak.

   Semua nilai ringgit dikira di bawah. Rajah: widget t4wang (widget-m4b10.js). */

const jum = a => a.reduce((x, y) => x + y, 0);

const SPI = [
"Mempamerkan pengetahuan asas tentang perancangan dan pengurusan kewangan.",
"Mempamerkan kefahaman tentang perancangan dan pengurusan kewangan.",
"Mengaplikasikan kefahaman tentang perancangan dan pengurusan kewangan untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran tentang perancangan dan pengurusan kewangan dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran tentang perancangan dan pengurusan kewangan dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran tentang perancangan dan pengurusan kewangan dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- data ---------- */
const AINA = [{ n: "Sewa bilik", rm: 700 }, { n: "Makanan", rm: 600 }, { n: "Pengangkutan", rm: 300 }, { n: "Bil dan telefon", rm: 150 }, { n: "Bayaran PTPTN", rm: 200 }];
const RAHMAN = [{ n: "Ansuran rumah", rm: 1100 }, { n: "Makanan keluarga", rm: 900 }, { n: "Pengangkutan", rm: 400 }, { n: "Bil utiliti", rm: 250 }, { n: "Insurans", rm: 150 }];
const PERLU_A = jum(AINA.map(x => x.rm)), PERLU_R = jum(RAHMAN.map(x => x.rm));
const BURGER = [2200, 2400, 1800, 1500, 2600, 3000, 2800, 2000, 1600, 2400, 2700, 3200], BELANJA = 2100, AWAL = 500;
const kum = (b) => { let s = AWAL; return BURGER.map(p => (s += p - b)); };

/* ---------- lampiran ---------- */
const iw = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t4wang", kapsyen, alt }, extra);
const R1 = iw("Rajah 1 · Kitaran lima langkah proses pengurusan kewangan. Pilih setiap langkah.",
  "Rajah interaktif kitaran lima langkah pengurusan kewangan: menetapkan matlamat, menilai kedudukan, mewujudkan pelan, melaksanakan pelan dan mengkaji semula",
  { mod: "proses" });
const R2 = iw("Rajah 1 · Empat matlamat kewangan. Pilih matlamat dan nilai mengikut SMART.",
  "Rajah interaktif kad matlamat kewangan yang dinilai mengikut lima kriteria SMART; cip memilih empat matlamat yang berbeza",
  { mod: "smart", senarai: [
    { t: "Saya mahu menyimpan RM1 200 dalam masa 12 bulan untuk membeli komputer riba dengan menyimpan RM100 sebulan.", smart: [1, 1, 1, 1, 1] },
    { t: "Saya mahu menjadi kaya.", smart: [0, 0, 0, 0, 0] },
    { t: "Saya mahu menyimpan RM50 000 dalam masa 3 bulan dengan gaji RM2 000 sebulan.", smart: [1, 1, 0, 0, 1] },
    { t: "Saya mahu menyimpan RM3 000 untuk tabung kecemasan.", smart: [1, 1, 1, 1, 0] }] });
const R3 = iw("Rajah 1 · Belanjawan bulanan Cik Aina, pekerja baharu. Ubah kehendak dan simpanan.",
  "Rajah interaktif belanjawan bulanan dengan pendapatan RM2 800, lima perbelanjaan keperluan, serta gelongsor kehendak dan simpanan; lebihan atau defisit dipaparkan",
  { mod: "bajet", pendapatan: 2800, keperluan: AINA, kehendakMaks: 800, simpananMaks: 800, langkah: 50, kehendakAwal: 4, simpananAwal: 4, matlamat: { nama: "Tabung kecemasan", rm: 3000 } });
const R4 = iw("Rajah 1 · Aina ada simpanan RM600 dan mampu menyimpan RM350 sebulan. Pilih matlamat dan tempoh.",
  "Rajah interaktif pelan simpanan bagi tiga matlamat; cip memilih matlamat dan gelongsor menukar tempoh, simpanan bulanan dibandingkan dengan kemampuan",
  { mod: "pelan", matlamat: [{ nama: "Telefon pintar", rm: 1800 }, { nama: "Motosikal", rm: 6000 }, { nama: "Kursus kemahiran", rm: 2400 }], sedia: 600, mampu: 350, tMin: 3, tMaks: 24, tAwal: 6 });
const R5 = iw("Rajah 1 · Aliran tunai 12 bulan seorang peniaga burger. Kira dahulu, kemudian semak.",
  "Rajah interaktif aliran tunai dua belas bulan dengan pendapatan yang berubah dan perbelanjaan tetap RM2 100; palang bersih bulanan dan garis baki terkumpul, dalam mod cabar",
  { mod: "aliran", cabar: true, pendapatan: BURGER, belanja: BELANJA, bakiAwal: AWAL });
const R6 = iw("Rajah 1 · Belanjawan Encik Rahman (pendapatan RM3 500). Bina pelan untuk deposit kereta.",
  "Rajah interaktif belanjawan keluarga dengan pendapatan RM3 500, lima perbelanjaan keperluan, serta gelongsor kehendak dan simpanan untuk mencapai deposit kereta",
  { mod: "bajet", pendapatan: 3500, keperluan: RAHMAN, kehendakMaks: 600, simpananMaks: 700, langkah: 50, kehendakAwal: 8, simpananAwal: 6, matlamat: { nama: "Deposit kereta", rm: 4200 } });

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Kitaran Wang", sk:"10.1.1 Proses pengurusan kewangan", lampiran:"r1",
 kadNama:"Lima Langkah", kadEm:"\u{1F504}", kadFakta:"Proses pengurusan kewangan: menetapkan matlamat, menilai kedudukan kewangan, mewujudkan pelan, melaksanakan pelan, serta mengkaji semula dan menyemak kemajuan.",
 bosKadNama:"Keperluan dan Kehendak", bosKadEm:"\u{1F9FE}", bosKadFakta:"Keperluan ialah perkara asas untuk hidup (tempat tinggal, makanan, pengangkutan). Kehendak ialah perkara yang diingini tetapi tidak mustahak.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, langkah pertama proses pengurusan kewangan ialah:",p:["Menetapkan matlamat","Melaksanakan pelan kewangan","Mengkaji semula kemajuan","Menilai kedudukan kewangan"],b:0,u:"Matlamat ditetapkan dahulu supaya pelan kewangan mempunyai arah."},
 {j:"pilih",t:"Menyenaraikan pendapatan, perbelanjaan, aset dan hutang ialah sebahagian daripada langkah:",p:["Menilai kedudukan kewangan","Menetapkan matlamat","Melaksanakan pelan kewangan","Mengkaji semula kemajuan"],b:0,u:"Langkah 2 dalam Rajah 1: kita perlu tahu kedudukan kewangan semasa sebelum membina pelan."},
 {j:"pilih",t:"Antara berikut, yang manakah keperluan?",p:["Bayaran sewa bilik","Kasut sukan berjenama terkini","Langganan aplikasi muzik premium","Makan malam di restoran mewah"],b:0,u:"Tempat tinggal ialah keperluan asas. Pilihan lain ialah kehendak."},
 {j:"pilih",t:"Antara berikut, yang manakah kehendak?",p:["Telefon baharu walaupun telefon lama masih elok","Bil elektrik bulanan bagi rumah yang disewa","Tambang bas ke tempat kerja setiap hari","Makanan harian yang dimasak untuk keluarga"],b:0,u:"Telefon lama masih berfungsi, jadi telefon baharu ialah kehendak, bukan keperluan."},
 {j:"pilih",t:"Dalam Rajah 1, pilih langkah 5. Mengkaji semula bermaksud:",p:["Membandingkan belanja sebenar dengan pelan","Membuat pinjaman peribadi yang baharu di bank","Menetapkan matlamat kewangan buat kali pertama","Membeli barang kehendak dengan baki gaji"],b:0,u:"Kaji semula membantu kita mengesan perbelanjaan berlebihan dan menyemak kemajuan ke arah matlamat."},
 {j:"pilih",t:"Mengapakah proses dalam Rajah 1 dilukis sebagai satu kitaran?",p:["Selepas dikaji semula, pelan boleh diubah dan diulang","Pendapatan seseorang bertambah pada setiap bulan","Setiap langkah dalam proses itu boleh dilangkau","Pelan kewangan dibuat sekali seumur hidup"],b:0,u:"Keadaan kewangan berubah. Selepas kaji semula, kita kembali menetapkan atau menyesuaikan matlamat."},
 {j:"pilih",t:"Antara berikut, yang manakah contoh melaksanakan pelan kewangan?",p:["Menyimpan RM200 ke akaun simpanan pada hari gaji","Menulis senarai barang impian untuk tahun depan","Meminjam wang daripada kawan apabila wang habis","Membanding harga barang pada akhir tahun"],b:0,u:"Melaksanakan pelan bermaksud mengikut belanjawan, contohnya menyimpan dahulu sebelum berbelanja."},
 {j:"pilih",t:"Kemal mempunyai RM100 selepas membayar semua keperluan. Pilihan manakah paling sesuai dengan pengurusan kewangan yang berkesan?",p:["Simpan sebahagian dan belanja baki mengikut belanjawan","Belanja semuanya kerana keperluan sudah dibayar","Pinjamkan semuanya kepada kawan tanpa sebarang catatan","Beli tiket loteri dengan harapan menggandakan wang"],b:0,u:"Pengurusan yang berkesan mengimbangi simpanan dan kehendak mengikut pelan yang telah dibuat."}],
 bos:{j:"susun",t:"Susun langkah proses pengurusan kewangan mengikut urutan yang betul.",p:["Menetapkan matlamat","Menilai kedudukan kewangan","Mewujudkan pelan kewangan","Melaksanakan pelan kewangan","Mengkaji semula dan menyemak kemajuan"],b:[0,1,2,3,4],u:"Urutan ini mengikut DSKP 10.1.1 dan berulang sebagai satu kitaran."}},

{n:2, tempat:"Bilik Matlamat", sk:"10.1.2 Matlamat kewangan SMART", lampiran:"r2",
 kadNama:"SMART", kadEm:"\u{1F3AF}", kadFakta:"Matlamat SMART: Specific (khusus), Measurable (boleh diukur), Attainable (boleh dicapai), Realistic (realistik) dan Time-bound (mempunyai tempoh masa).",
 bosKadNama:"Pecahkan Matlamat", bosKadEm:"\u{1FA93}", bosKadFakta:"Matlamat besar menjadi lebih mudah apabila dipecahkan kepada simpanan bulanan: simpanan sebulan = jumlah ÷ bilangan bulan.",
 soalan:[
 {j:"pilih",t:"Dalam konsep SMART, huruf T bermaksud:",p:["Time-bound, iaitu mempunyai tempoh masa","Target, iaitu mempunyai sasaran","Total, iaitu jumlah wang keseluruhan","Track, iaitu boleh dijejaki kemajuannya"],b:0,u:"T ialah Time-bound: matlamat mesti mempunyai tarikh atau tempoh yang jelas."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Matlamat 1. Mengapakah matlamat ini SMART?",p:["Jumlah, tujuan, kaedah dan tempohnya jelas","Jumlah wang yang hendak disimpan sangat besar","Matlamat itu tidak menyatakan tempoh simpanan","Matlamat itu ialah matlamat jangka panjang"],b:0,u:"RM1 200 (boleh diukur), komputer riba (khusus), RM100 sebulan (boleh dicapai dan realistik) dan 12 bulan (tempoh)."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Matlamat 2. Mengapakah \"Saya mahu menjadi kaya\" bukan matlamat SMART?",p:["Tidak khusus, tidak boleh diukur, tiada tempoh","Jumlah wang yang dinyatakan terlalu kecil","Tempoh yang diberikan terlalu pendek","Ia ialah matlamat kewangan jangka pendek"],b:0,u:"\"Kaya\" tidak ditakrifkan dengan jumlah, cara atau tempoh, jadi kemajuan tidak dapat diukur."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Matlamat 3. Mengapakah matlamat itu tidak SMART?",p:["RM50 000 tidak tercapai dengan gaji RM2 000","Matlamat itu tidak menyatakan jumlah wang","Matlamat itu tidak mempunyai tempoh masa","Matlamat itu tidak khusus tentang tujuannya"],b:0,u:"Jumlah gaji 3 bulan ialah RM6 000 sahaja, jauh lebih kecil daripada RM50 000. Matlamat itu tidak boleh dicapai dan tidak realistik.",kira:()=>2000*3<50000},
 {j:"pilih",t:"Dalam Rajah 1, pilih Matlamat 4. Apakah yang perlu ditambah supaya matlamat itu menjadi SMART?",p:["Tempoh masa, contohnya dalam masa 15 bulan","Jumlah wang yang lebih besar daripada RM3 000","Nama bank yang digunakan untuk menyimpan","Jenis kad kredit yang dimiliki oleh penyimpan"],b:0,u:"Matlamat 4 khusus, boleh diukur dan realistik, tetapi tiada tempoh (T)."},
 {j:"nombor",t:"Berdasarkan Matlamat 1 dalam Rajah 1, berapakah simpanan sebulan yang diperlukan, dalam RM?",tol:0.01,b:100,u:"RM1 200 ÷ 12 bulan = RM100 sebulan.",kira:()=>1200/12},
 {j:"pilih",t:"Matlamat kewangan jangka pendek biasanya:",p:["Dicapai dalam masa kurang daripada setahun","Dicapai selepas lebih daripada 10 tahun","Tidak mempunyai sebarang tempoh masa","Melibatkan pembelian sebuah rumah teres"],b:0,u:"Matlamat jangka pendek seperti membeli telefon atau yuran kursus boleh dicapai dalam beberapa bulan."},
 {j:"nombor",t:"Jika Matlamat 4 dalam Rajah 1 diberi tempoh 15 bulan, berapakah simpanan sebulan yang diperlukan, dalam RM?",tol:0.01,b:200,u:"RM3 000 ÷ 15 = RM200 sebulan.",kira:()=>3000/15}],
 bos:{j:"pilih",t:"Antara matlamat berikut, yang manakah matlamat SMART bagi seorang murid?",p:["Simpan RM100 sebulan selama 6 bulan untuk yuran kursus RM600","Simpan sebanyak mungkin wang untuk masa depan yang cerah","Beli kereta mewah tahun depan walaupun tiada pendapatan","Berjimat cermat setiap hari supaya hidup menjadi lebih senang"],b:0,u:"Hanya pilihan pertama menyatakan jumlah, tujuan, kaedah dan tempoh yang munasabah: RM100 × 6 = RM600.",kira:()=>100*6===600}},

{n:3, tempat:"Meja Belanjawan", sk:"10.1.2 Membina belanjawan peribadi (tugasan mudah)", lampiran:"r3",
 kadNama:"Belanjawan", kadEm:"\u{1F4D2}", kadFakta:"Belanjawan membahagikan pendapatan kepada keperluan, kehendak dan simpanan. Baki = pendapatan − keperluan − kehendak − simpanan.",
 bosKadNama:"Simpan Dahulu", bosKadEm:"\u{1F437}", bosKadFakta:"Tetapkan jumlah simpanan dahulu, kemudian hadkan kehendak supaya belanjawan tidak defisit.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah jumlah perbelanjaan keperluan Cik Aina sebulan, dalam RM?",tol:0.01,b:1950,u:"700 + 600 + 300 + 150 + 200 = RM1 950.",kira:()=>PERLU_A},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan kehendak RM200 dan simpanan RM300. Berapakah lebihan, dalam RM?",tol:0.01,b:350,u:"2800 − 1950 − 200 − 300 = RM350.",kira:()=>2800-PERLU_A-200-300},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan simpanan RM300. Berapa bulankah diperlukan untuk mencapai tabung kecemasan RM3 000?",tol:0.01,b:10,u:"RM3 000 ÷ RM300 = 10 bulan.",kira:()=>Math.ceil(3000/300)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan kehendak RM500 dan simpanan RM400. Berapakah defisitnya, dalam RM?",tol:0.01,b:50,u:"2800 − 1950 − 500 − 400 = −50, iaitu defisit RM50.",kira:()=>-(2800-PERLU_A-500-400)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan simpanan RM350. Berapakah peratus simpanan daripada pendapatan?",tol:0.01,b:12.5,u:"350 ÷ 2800 × 100% = 12.5%.",kira:()=>350/2800*100},
 {j:"nombor",t:"Cik Aina ingin menyimpan 10% daripada pendapatannya. Berapakah simpanan sebulan, dalam RM?",tol:0.01,b:280,u:"10% × RM2 800 = RM280.",kira:()=>0.1*2800},
 {j:"pilih",t:"Dalam belanjawan, defisit bermaksud:",p:["Belanja dan simpanan melebihi pendapatan","Pendapatan melebihi semua perbelanjaan bulanan","Simpanan lebih besar daripada perbelanjaan kehendak","Tiada sebarang perbelanjaan kehendak pada bulan itu"],b:0,u:"Defisit berlaku apabila wang yang dirancang untuk digunakan lebih daripada pendapatan."},
 {j:"nombor",t:"Dalam Rajah 1, jika kehendak RM0, berapakah simpanan maksimum tanpa defisit, dalam RM?",tol:0.01,b:850,u:"2800 − 1950 = RM850.",kira:()=>2800-PERLU_A}],
 bos:{j:"nombor",t:"Cik Aina mahu mencapai tabung kecemasan RM3 000 dalam 6 bulan. Berapakah perbelanjaan kehendak maksimum sebulan supaya belanjawan tidak defisit, dalam RM?",tol:0.01,b:350,u:"Simpanan diperlukan = 3000 ÷ 6 = RM500. Kehendak maksimum = 2800 − 1950 − 500 = RM350.",kira:()=>2800-PERLU_A-3000/6}},

{n:4, tempat:"Papan Pelan", sk:"10.1.2 Pelan kewangan jangka pendek dan jangka panjang", lampiran:"r4",
 kadNama:"Simpanan Bulanan", kadEm:"\u{1F4C5}", kadFakta:"Simpanan bulanan yang diperlukan = (harga matlamat − simpanan sedia ada) ÷ bilangan bulan.",
 bosKadNama:"Kebolehlaksanaan", bosKadEm:"\u{2705}", bosKadFakta:"Pelan boleh dilaksanakan jika simpanan bulanan yang diperlukan tidak melebihi kemampuan menyimpan.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih Telefon pintar dan tempoh 6 bulan. Berapakah simpanan sebulan yang diperlukan, dalam RM?",tol:0.01,b:200,u:"(1800 − 600) ÷ 6 = RM200.",kira:()=>(1800-600)/6},
 {j:"pilih",t:"Dalam Rajah 1, pilih Motosikal dan tempoh 12 bulan. Bolehkah pelan itu dilaksanakan?",p:["Tidak, RM450 sebulan melebihi kemampuan RM350","Ya, kerana RM450 kurang daripada simpanan RM600","Ya, kerana tempoh 12 bulan sudah cukup panjang","Tidak, kerana motosikal bukan suatu keperluan asas"],b:0,u:"(6000 − 600) ÷ 12 = RM450, lebih daripada RM350 yang mampu disimpan.",kira:()=>(6000-600)/12>350},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah tempoh minimum (bulan penuh) untuk Aina mencapai matlamat motosikal?",tol:0.01,b:16,u:"5400 ÷ 350 = 15.4. Aina perlukan 16 bulan.",kira:()=>Math.ceil((6000-600)/350)},
 {j:"nombor",t:"Dalam Rajah 1, pilih Kursus kemahiran dan tempoh 5 bulan. Berapakah simpanan sebulan yang diperlukan, dalam RM?",tol:0.01,b:360,u:"(2400 − 600) ÷ 5 = RM360.",kira:()=>(2400-600)/5},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah tempoh minimum (bulan penuh) untuk mencapai matlamat kursus kemahiran?",tol:0.01,b:6,u:"1800 ÷ 350 = 5.1, jadi 6 bulan. Dalam 6 bulan, simpanan diperlukan RM300 sebulan.",kira:()=>Math.ceil((2400-600)/350)},
 {j:"nombor",t:"Jika simpanan sedia ada Aina ialah RM1 200, berapakah simpanan sebulan untuk telefon pintar dalam 6 bulan, dalam RM?",tol:0.01,b:100,u:"(1800 − 1200) ÷ 6 = RM100.",kira:()=>(1800-1200)/6},
 {j:"pilih",t:"Kebolehlaksanaan suatu pelan kewangan bermaksud:",p:["Pelan itu mampu diikuti dengan pendapatan semasa","Pelan itu melibatkan jumlah wang yang paling besar","Pelan itu ditulis dengan kemas dalam sebuah buku","Pelan itu telah dipersetujui oleh rakan-rakan"],b:0,u:"DSKP 10.1.2 meminta pelan dinilai dari segi kebolehlaksanaannya, iaitu sama ada ia boleh dilaksanakan secara realistik."},
 {j:"nombor",t:"Dalam Rajah 1, pilih Motosikal dan tempoh 18 bulan. Berapakah simpanan sebulan yang diperlukan, dalam RM?",tol:0.01,b:300,u:"(6000 − 600) ÷ 18 = RM300, dalam kemampuan RM350.",kira:()=>(6000-600)/18}],
 bos:{j:"nombor",t:"Aina mahu membeli telefon pintar dan mendaftar kursus kemahiran dalam masa 9 bulan. Simpanan RM600 digunakan untuk telefon. Berapakah jumlah simpanan sebulan yang diperlukan bagi kedua-dua matlamat, dalam RM?",tol:0.01,b:400,u:"Telefon: (1800 − 600) ÷ 9 = RM133.33. Kursus: 2400 ÷ 9 = RM266.67. Jumlah RM400, melebihi kemampuan RM350, jadi pelan perlu diubah.",kira:()=>Math.round(((1800-600)/9+2400/9)*100)/100}},

{n:5, tempat:"Gerai Burger", sk:"10.1.2 Menilai pelan kewangan dengan aliran tunai (rutin kompleks)", lampiran:"r5",
 kadNama:"Aliran Tunai", kadEm:"\u{1F354}", kadFakta:"Aliran tunai menunjukkan wang masuk dan wang keluar setiap bulan. Baki terkumpul = baki awal + jumlah lebihan − jumlah defisit.",
 bosKadNama:"Tabung Kecemasan", bosKadEm:"\u{1F6DF}", bosKadFakta:"Pendapatan yang tidak tetap memerlukan tabung kecemasan supaya bulan defisit tidak memaksa kita berhutang.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan bulan 4. Berapakah baki terkumpul, dalam RM? Kira dahulu.",tol:0.01,b:0,u:"500 + 100 + 300 − 300 − 600 = RM0.",kira:()=>kum(BELANJA)[3]},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah bilangan bulan yang mengalami defisit?",tol:0.01,b:4,u:"Bulan 3, 4, 8 dan 9 mempunyai pendapatan kurang daripada RM2 100.",kira:()=>BURGER.filter(p=>p<BELANJA).length},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah baki terkumpul pada akhir bulan 12, dalam RM?",tol:0.01,b:3500,u:"Baki awal 500 + jumlah bersih 3000 = RM3 500.",kira:()=>kum(BELANJA)[11]},
 {j:"nombor",t:"Dalam Rajah 1, berapakah defisit pada bulan 4, dalam RM?",tol:0.01,b:600,u:"2100 − 1500 = RM600.",kira:()=>BELANJA-BURGER[3]},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah purata pendapatan sebulan, dalam RM?",tol:0.01,b:2350,u:"Jumlah pendapatan RM28 200 ÷ 12 = RM2 350.",kira:()=>jum(BURGER)/12},
 {j:"pilih",t:"Mengapakah tabung kecemasan penting bagi peniaga dalam Rajah 1?",p:["Pendapatannya berubah dan ada bulan defisit","Pendapatannya tetap dan sama pada setiap bulan","Perbelanjaannya berubah-ubah pada setiap bulan","Dia tidak mempunyai sebarang perbelanjaan tetap"],b:0,u:"Pada bulan 4, baki terkumpul jatuh kepada RM0. Tanpa tabung kecemasan, bulan seterusnya boleh memaksa dia berhutang."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah baki terkumpul yang paling rendah sepanjang tahun, dalam RM?",tol:0.01,b:0,u:"Baki terkumpul paling rendah ialah RM0 pada bulan 4.",kira:()=>Math.min(...kum(BELANJA))},
 {j:"nombor",t:"Jika perbelanjaan tetap dikurangkan sebanyak RM100 sebulan, berapakah baki terkumpul pada akhir bulan 12, dalam RM?",tol:0.01,b:4700,u:"Penjimatan 12 × RM100 = RM1 200. Baki baharu = 3500 + 1200 = RM4 700.",kira:()=>kum(BELANJA-100)[11]}],
 bos:{j:"nombor",t:"Peniaga itu mahu baki terkumpul RM5 000 pada akhir bulan 12 dengan mengurangkan perbelanjaan tetap secara sama rata setiap bulan. Berapakah pengurangan sebulan yang diperlukan, dalam RM?",tol:0.01,b:125,u:"Kekurangan = 5000 − 3500 = RM1 500. Dibahagi 12 bulan = RM125 sebulan.",kira:()=>(5000-kum(BELANJA)[11])/12}},

{n:6, tempat:"Studio Pelan", sk:"10.1.2 Membina dan membentang pelan kewangan (bukan rutin)", lampiran:"r6",
 kadNama:"Ubah Suai Pelan", kadEm:"\u{1F527}", kadFakta:"Jika matlamat sukar dicapai, ubah satu atau lebih perkara: kurangkan kehendak, tambah pendapatan, atau panjangkan tempoh.",
 bosKadNama:"Perancang Kewangan", bosKadEm:"\u{1F680}", bosKadFakta:"Pelan kewangan yang baik mempunyai matlamat SMART, belanjawan yang seimbang, dan semakan berkala.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah jumlah perbelanjaan keperluan keluarga Encik Rahman, dalam RM?",tol:0.01,b:2800,u:"1100 + 900 + 400 + 250 + 150 = RM2 800.",kira:()=>PERLU_R},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan kehendak RM400 dan simpanan RM300. Berapa bulankah diperlukan untuk mengumpul deposit kereta RM4 200?",tol:0.01,b:14,u:"RM4 200 ÷ RM300 = 14 bulan.",kira:()=>Math.ceil(4200/300)},
 {j:"nombor",t:"Encik Rahman mahu deposit kereta dalam 7 bulan. Berapakah perbelanjaan kehendak maksimum sebulan, dalam RM?",tol:0.01,b:100,u:"Simpanan diperlukan = 4200 ÷ 7 = RM600. Kehendak maksimum = 3500 − 2800 − 600 = RM100.",kira:()=>3500-PERLU_R-4200/7},
 {j:"pilih",t:"Strategi manakah paling bertanggungjawab untuk mempercepat simpanan deposit kereta?",p:["Kurangkan kehendak, tambah simpanan","Gunakan kad kredit untuk membayar deposit kereta","Hentikan bayaran insurans keluarga buat sementara","Tangguhkan bayaran ansuran rumah selama setahun"],b:0,u:"Pilihan lain menambah hutang atau risiko. Mengurangkan kehendak tidak menjejaskan keperluan."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah peratus perbelanjaan keperluan daripada pendapatan Encik Rahman?",tol:0.01,b:80,u:"2800 ÷ 3500 × 100% = 80%.",kira:()=>PERLU_R/3500*100},
 {j:"pilih",t:"Panduan 50/30/20 mencadangkan 50% untuk keperluan, 30% untuk kehendak dan 20% untuk simpanan. Adakah panduan ini mudah diikuti oleh Encik Rahman?",p:["Sukar, kerana keperluannya sudah 80% pendapatan","Mudah, kerana keperluannya ialah 50% pendapatan","Mudah, kerana kehendaknya ialah 30% pendapatan","Sukar, kerana simpanannya melebihi 20% pendapatan"],b:0,u:"Keperluan 80% meninggalkan 20% sahaja untuk kehendak dan simpanan. Panduan itu perlu disesuaikan dengan keadaan sebenar.",kira:()=>PERLU_R/3500===0.8},
 {j:"nombor",t:"Encik Rahman mendapat kerja sambilan RM300 sebulan dan menyimpan semuanya, menjadikan simpanannya RM600 sebulan. Berapa bulankah diperlukan untuk deposit RM4 200?",tol:0.01,b:7,u:"RM4 200 ÷ RM600 = 7 bulan.",kira:()=>4200/600},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan kehendak RM0 dan simpanan RM700. Berapa bulankah diperlukan untuk deposit kereta?",tol:0.01,b:6,u:"RM4 200 ÷ RM700 = 6 bulan. Namun kehendak RM0 sukar dikekalkan untuk tempoh lama.",kira:()=>Math.ceil(4200/700)}],
 bos:{j:"buka",
  t:"Bina pelan kewangan peribadi untuk satu matlamat jangka pendek dan satu matlamat jangka panjang awak sendiri.",
  arahan:"Tulis kedua-dua matlamat dalam bentuk SMART. Sediakan belanjawan bulanan yang membezakan keperluan dan kehendak, dan tunjukkan pengiraan simpanan bulanan bagi setiap matlamat. Nilaikan kebolehlaksanaan pelan itu, dan cadangkan satu perubahan jika pelan tidak boleh dilaksanakan.",
  u:"Jawapan TP6 yang kukuh mempunyai matlamat SMART yang realistik, belanjawan seimbang dengan keperluan dan kehendak yang jelas, pengiraan simpanan yang betul, serta penilaian kebolehlaksanaan dan cadangan pengubahsuaian yang munasabah."}}
];

module.exports = {
  id:"m4b10", tingkatan:4, kod:"10.0 Matematik Pengguna: Pengurusan Kewangan",
  tajuk:"Dompet Pintar",
  subtajuk:"Matematik Ting. 4 · Bab 10 Matematik Pengguna: Pengurusan Kewangan",
  spi:SPI,
  ulasan:{
   1:"{n} mengetahui lima langkah proses pengurusan kewangan dan dapat membezakan keperluan dengan kehendak. Langkah seterusnya ialah menetapkan matlamat kewangan SMART.",
   2:"{n} memahami konsep matlamat kewangan SMART dan dapat menilai sama ada sesuatu matlamat itu khusus, boleh diukur, boleh dicapai, realistik dan bertempoh. Perlu lebih latihan membina belanjawan.",
   3:"{n} boleh membina belanjawan bulanan yang mudah, mengira lebihan atau defisit, dan menentukan tempoh mencapai matlamat simpanan.",
   4:"{n} mampu membina pelan simpanan bagi matlamat jangka pendek dan jangka panjang serta menilai kebolehlaksanaannya. Seterusnya, latih menganalisis aliran tunai.",
   5:"{n} dapat menganalisis aliran tunai dengan pendapatan yang berubah-ubah dan membuat keputusan kewangan berdasarkannya. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya membina dan membentang pelan kewangan peribadi yang lengkap, menilai kebolehlaksanaannya dan mencadangkan pengubahsuaian yang munasabah. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pengurusan Kewangan. Cadangan: ulang hentian pertama dengan Rajah 1 dan senaraikan keperluan serta kehendak harian bersama rakan sebaya."
  },
  lampiran:{ r1:R1, r2:R2, r3:R3, r4:R4, r5:R5, r6:R6 },
  aras:ARAS
};
