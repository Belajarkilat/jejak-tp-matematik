/* Sumber kandungan — Matematik KSSM Tingkatan 3, Bab 7 Pelan dan Dongakan.
   Fail ini disunting tangan. Jalankan `node bina.js m3b7` untuk menyemaknya
   dan menghasilkan bank-m3b7.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 3, Bahagian Pembangunan Kurikulum, muka 60 (dskp/matematik-t3.pdf).

   Setiap objek ialah data kubus yang sama dengan yang dilukis oleh widget
   `unjuran` (widget-m3b7.js). Semua bilangan petak, kubus, luas dan kos dalam
   soalan dikira daripada data itu dengan hit(), jadi jawapan tidak boleh
   bercanggah dengan rajah. Medan `kira` ialah semakan bebas untuk audit
   (tools/semak-jawapan.js), tidak dimasukkan ke bank. */
const JMI = require("../interaktif");
const hit = o => JMI.W.unjuran.hitung(o);

/* ---------- objek (baris depan dahulu; lapis[z][y] ialah rentetan mengikut x) ---------- */
const BLOK_L   = { nama:"Blok L",        tinggi:[[2,2,2],[2,0,0]] };
const TANGGA   = { nama:"Tangga kayu",   tinggi:[[1,2,3],[1,2,3]] };
const TAKUK    = { nama:"Blok bertakuk", lapis:[["###","###"],["###","#.#"]] };
const BERONGGA = { nama:"Blok berongga", lapis:[["###","#.#"],["###","###"]] };
const MEJA     = { nama:"Meja",          lapis:[["#.#","#.#"],["#.#","#.#"],["###","###"]] };
const KERUSI   = { nama:"Kerusi",        lapis:[["#.#","#.#"],["#.#","#.#"],["###","###"],["...","###"],["...","###"]] };
const MENARA   = { nama:"Menara",        tinggi:[[1,1,1],[1,3,1],[1,1,1]] };
const RUMAH    = { nama:"Rumah kayu",    tinggi:[[2,3,2],[2,3,2]] };

const SPI = [
"Mempamerkan pengetahuan asas tentang unjuran ortogon.",
"Mempamerkan kefahaman tentang unjuran ortogon.",
"Mengaplikasikan kefahaman tentang pelan dan dongakan untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang pelan dan dongakan dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang pelan dan dongakan dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang pelan dan dongakan dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran: objek kubus interaktif ---------- */

const uj = (objek, kapsyen, extra) => Object.assign({
  jenis:"interaktif", w:"unjuran", objek, p:1, kapsyen,
  alt:"Rajah interaktif objek kubus dengan gelongsor pandangan untuk melihat dongakan depan, dongakan sisi dan pelan"
}, extra || {});

const R_UJ1 = uj([BLOK_L, TANGGA, MENARA], "Rajah 1 · Pilih objek dan pandangan. Perhatikan bentuk yang muncul pada setiap pandangan.", { p:0 });
const R_UJ2 = uj([RUMAH, TANGGA, TAKUK], "Rajah 1 · Bandingkan objek dengan dongakan depan, dongakan sisi dan pelannya.", { p:1 });
const R_UJ3 = uj([MEJA, KERUSI, BLOK_L], "Rajah 1 · Pandangan Gabung menunjukkan dongakan dan pelan dengan garis binaan. Satu petak mewakili 5 cm.", { p:4, unit:5 });
const R_UJ4 = uj([TAKUK, BERONGGA, MEJA], "Rajah 1 · Bayangkan unjuran dahulu, kemudian semak dengan rajah. Garis sempang menunjukkan bahagian terlindung.", { p:1, cabar:true });
const R_UJ5 = uj([KERUSI, MENARA, RUMAH], "Rajah 1 · Sintesis objek daripada pelan dan dongakan, kemudian semak dengan rajah.", { p:4, cabar:true });
const R_UJ6 = uj([MENARA, RUMAH, MEJA], "Rajah 1 · Model daripada kubus kayu 10 cm. Satu petak mewakili 10 cm.", { p:4, unit:10 });

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Meja Lukis", sk:"7.1.1 Melukis unjuran ortogon", lampiran:"uj1",
 kadNama:"Unjuran Ortogon", kadEm:"\u{1F4D0}", kadFakta:"Unjuran ortogon ialah bayang objek pada satah, dengan garis pandangan sentiasa serenjang pada satah itu. Jurutera dan tukang kayu bergantung padanya untuk membaca lukisan pelan.",
 bosKadNama:"Tiga Arah Pandang", bosKadEm:"\u{1F441}\u{FE0F}", bosKadFakta:"Satu objek biasanya dilukis dari tiga arah: depan, sisi dan atas. Satu pandangan sahaja tidak cukup untuk tahu bentuk sebenar objek.",
 soalan:[
 {j:"pilih",t:"Unjuran ortogon suatu objek ialah:",p:["Pandangan objek pada satah, dengan garis pandangan serenjang","Lukisan objek tiga dimensi yang dilihat dari sudut serong","Salinan objek yang dibesarkan atau dikecilkan mengikut skala","Gambar objek yang hanya diambil dari arah atas sahaja"],b:0,u:"Unjuran ortogon ialah pandangan objek pada satah, dan garis pandangan serenjang dengan satah itu."},
 {j:"pilih",t:"Pandangan suatu objek dari atas dipanggil:",p:["Pelan","Dongakan depan","Dongakan sisi","Lukisan isometrik"],b:0,u:"Pelan ialah pandangan dari atas, iaitu satah mengufuk."},
 {j:"pilih",t:"Pandangan suatu objek dari depan dipanggil:",p:["Dongakan depan","Pelan","Dongakan sisi","Unjuran serong"],b:0,u:"Dongakan depan ialah pandangan dari depan pada satah mencancang."},
 {j:"nombor",t:"Dalam Rajah 1, pilih objek Blok L dan pandangan Pelan. Berapakah bilangan petak yang dilindungi oleh pelan itu?",b:hit(BLOK_L).pelan,tol:0.01,u:"Pelan Blok L berbentuk L dan mempunyai 4 petak.",kira:()=>hit(BLOK_L).pelan},
 {j:"nombor",t:"Dalam Rajah 1, pilih objek Tangga kayu dan pandangan Depan. Berapakah bilangan petak dongakan depannya?",b:hit(TANGGA).depan,tol:0.01,u:"Dongakan depan tangga berundak: 1 + 2 + 3 = 6 petak.",kira:()=>hit(TANGGA).depan},
 {j:"nombor",t:"Dalam Rajah 1, pilih objek Menara dan pandangan Pelan. Berapakah bilangan petak pelannya?",b:hit(MENARA).pelan,tol:0.01,u:"Pelan Menara ialah segi empat sama 3 × 3, iaitu 9 petak.",kira:()=>hit(MENARA).pelan},
 {j:"pilih",t:"Objek yang sama dipandang dari arah yang berlainan menghasilkan unjuran yang:",p:["Boleh berbeza bentuk","Sentiasa sama bentuk","Sentiasa berbentuk segi empat sama","Sentiasa berbentuk garis lurus"],b:0,u:"Bentuk unjuran bergantung pada arah pandangan. Dongakan depan dan pelan Menara, sebagai contoh, tidak sama."},
 {j:"susun",t:"Susun langkah melukis unjuran ortogon suatu objek.",p:["Tentukan arah pandangan","Bayangkan garis pandangan serenjang dengan satah","Lukis bentuk yang nampak pada satah","Tandakan tepi terlindung dengan garis sempang"],b:[0,1,2,3],u:"Tentukan arah, bayangkan pandangan serenjang, lukis bentuk yang nampak, kemudian tambah tepi terlindung."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang unjuran ortogon.",p:["Garis pandangan serenjang dengan satah unjuran","Pelan ialah pandangan dari atas","Dongakan depan ialah pandangan dari depan","Satu objek hanya mempunyai satu unjuran","Pelan ialah pandangan dari sisi","Unjuran tidak pernah menunjukkan tepi terlindung"],b:[0,1,2],u:"Garis pandangan serenjang dengan satah, pelan dari atas dan dongakan depan dari depan. Objek boleh diunjur dari banyak arah, pelan bukan dari sisi, dan tepi terlindung ditunjukkan dengan garis sempang."}},

{n:2, tempat:"Rumah Kayu", sk:"7.1.2 Membanding dan membeza objek dengan unjuran ortogon", lampiran:"uj2",
 kadNama:"Panjang Sebenar", kadEm:"\u{1F3E0}", kadFakta:"Muka objek yang selari dengan satah unjuran dilukis dengan panjang sebenar dan sudut sebenar. Sebab itu pelan tukang binaan boleh diukur terus untuk mendapat saiz rumah.",
 bosKadNama:"Tepi Terlindung", bosKadEm:"\u{1F575}\u{FE0F}", bosKadFakta:"Tepi yang tersembunyi di belakang bahagian lain tidak nampak dari arah pandangan, tetapi tetap dilukis sebagai garis sempang supaya bentuk objek lengkap.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih objek Rumah kayu dan pandangan Depan. Berapakah bilangan petak dongakan depannya?",b:hit(RUMAH).depan,tol:0.01,u:"Ketinggian lajur ialah 2, 3 dan 2, jadi 2 + 3 + 2 = 7 petak.",kira:()=>hit(RUMAH).depan},
 {j:"nombor",t:"Dalam Rajah 1, pilih objek Rumah kayu dan pandangan Sisi. Berapakah bilangan petak dongakan sisinya?",b:hit(RUMAH).sisi,tol:0.01,u:"Dari sisi, rumah itu kelihatan sebagai segi empat tepat 2 petak lebar dan 3 petak tinggi, iaitu 6 petak.",kira:()=>hit(RUMAH).sisi},
 {j:"pilih",t:"Dalam Rajah 1, pelan Rumah kayu ialah:",p:["Segi empat tepat 3 × 2 petak","Segi empat sama 2 × 2 petak","Bentuk L","Segi empat tepat 3 × 3 petak"],b:0,u:"Rumah kayu berukuran 3 petak lebar dan 2 petak dalam, jadi pelannya segi empat tepat 3 × 2.",kira:()=>hit(RUMAH).X===3&&hit(RUMAH).Y===2&&hit(RUMAH).pelan===6},
 {j:"pilih",t:"Dalam Rajah 1, unjuran manakah bagi Tangga kayu berbentuk tangga berundak?",p:["Dongakan depan","Pelan","Dongakan sisi","Ketiga-tiganya"],b:0,u:"Ketinggian lajur bertambah dari kiri ke kanan, jadi hanya dongakan depan berbentuk undak. Pelan dan dongakan sisi berbentuk segi empat tepat penuh.",kira:()=>hit(TANGGA).depan<hit(TANGGA).X*hit(TANGGA).Z&&hit(TANGGA).sisi===hit(TANGGA).Y*hit(TANGGA).Z&&hit(TANGGA).pelan===hit(TANGGA).X*hit(TANGGA).Y},
 {j:"pilih",t:"Sisi kubus yang selari dengan satah unjuran dilukis dengan panjang:",p:["Sama dengan panjang sebenar","Lebih pendek daripada panjang sebenar","Separuh panjang sebenar","Lebih panjang daripada panjang sebenar"],b:0,u:"Muka yang selari dengan satah unjuran tidak dicondongkan, jadi panjang dan sudutnya kekal sama."},
 {j:"pilih",t:"Sudut tegak pada muka objek yang selari dengan satah unjuran kelihatan dalam unjuran sebagai:",p:["Sudut tegak (90°)","Sudut tirus","Sudut cakah","Garis lurus"],b:0,u:"Sudut pada muka yang selari dengan satah unjuran tidak berubah, jadi sudut tegak kekal 90°."},
 {j:"pilih",t:"Blok bertakuk mempunyai takuk di belakang yang terlindung dalam dongakan depan. Bagaimanakah takuk itu ditunjukkan?",p:["Garis sempang","Garis padu tebal","Garis padu halus","Tidak ditunjukkan langsung"],b:0,u:"Tepi terlindung dilukis dengan garis sempang. Semak dengan memilih Blok bertakuk dan pandangan Depan dalam Rajah 1.",kira:()=>hit(TAKUK).sempangDepan>0},
 {j:"nombor",t:"Dalam Rajah 1, berapakah beza bilangan kubus antara Tangga kayu dan Blok bertakuk?",b:hit(TANGGA).kubus-hit(TAKUK).kubus,tol:0.01,u:"Tangga kayu ada 12 kubus dan Blok bertakuk ada 11 kubus, jadi bezanya 1 kubus.",kira:()=>hit(TANGGA).kubus-hit(TAKUK).kubus}],
 bos:{j:"pilih",t:"Dalam Rajah 1, ketiga-tiga objek (Rumah kayu, Tangga kayu, Blok bertakuk) mempunyai bilangan petak yang sama dalam pandangan:",p:["Pelan","Dongakan depan","Dongakan sisi","Tiada satu pun pandangan"],b:0,u:"Pelan setiap objek ialah 6 petak. Dongakan depan berbeza (7, 6, 6) dan dongakan sisi juga berbeza (6, 6, 4).",kira:()=>{const a=[RUMAH,TANGGA,TAKUK].map(hit);return a.every(x=>x.pelan===a[0].pelan)&&!a.every(x=>x.depan===a[0].depan)&&!a.every(x=>x.sisi===a[0].sisi);}}},

{n:3, tempat:"Studio Perabot", sk:"7.2.1 Melukis pelan dan dongakan mengikut skala", lampiran:"uj3",
 kadNama:"Garis Binaan", kadEm:"\u{1FA91}", kadFakta:"Garis padu halus yang menyambung dongakan dengan pelan dipanggil garis binaan. Ia memastikan lebar dalam kedua-dua lukisan sepadan dan tidak tersasar.",
 bosKadNama:"Reka Perabot", bosKadEm:"\u{1F6CB}\u{FE0F}", bosKadFakta:"Pereka perabot melukis pelan dan dongakan mengikut skala sebelum memotong kayu, supaya kesilapan dapat dibetulkan di atas kertas dan bukan pada kayu.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, satu petak mewakili 5 cm. Pilih objek Meja. Berapakah lebar sebenar meja itu (cm)?",b:hit(MEJA).X*5,tol:0.01,suf:"cm",u:"Meja selebar 3 petak, jadi 3 × 5 = 15 cm.",kira:()=>hit(MEJA).X*5},
 {j:"nombor",t:"Dalam Rajah 1, satu petak mewakili 5 cm. Berapakah tinggi sebenar Meja (cm)?",b:hit(MEJA).Z*5,tol:0.01,suf:"cm",u:"Dongakan depan meja setinggi 3 petak, jadi 3 × 5 = 15 cm.",kira:()=>hit(MEJA).Z*5},
 {j:"nombor",t:"Dalam Rajah 1, satu petak mewakili 5 cm. Berapakah kedalaman sebenar Meja (cm)?",b:hit(MEJA).Y*5,tol:0.01,suf:"cm",u:"Pelan meja sedalam 2 petak, jadi 2 × 5 = 10 cm.",kira:()=>hit(MEJA).Y*5},
 {j:"nombor",t:"Pelan Meja dalam Rajah 1 ialah 6 petak, setiap petak mewakili 5 cm × 5 cm. Berapakah luas pelan sebenar meja (cm²)?",b:hit(MEJA).pelan*25,tol:0.01,suf:"cm²",u:"Setiap petak mewakili 25 cm², jadi 6 × 25 = 150 cm².",kira:()=>hit(MEJA).pelan*25},
 {j:"pilih",t:"Jika satu petak (5 cm sebenar) dilukis sebagai 1 cm pada kertas, skala lukisan ialah:",p:["1 : 5","5 : 1","1 : 25","1 : 10"],b:0,sama:true,u:"1 cm pada lukisan mewakili 5 cm sebenar, jadi skalanya 1 : 5.",kira:()=>5},
 {j:"nombor",t:"Dalam Rajah 1, satu petak mewakili 5 cm. Pilih objek Kerusi. Berapakah tinggi sebenar Kerusi (cm)?",b:hit(KERUSI).Z*5,tol:0.01,suf:"cm",u:"Kerusi setinggi 5 petak, jadi 5 × 5 = 25 cm.",kira:()=>hit(KERUSI).Z*5},
 {j:"pilih",t:"Dalam pandangan Gabung, garis halus yang menyambung dongakan dengan pelan dipanggil:",p:["Garis binaan","Garis sempang","Garis paksi","Garis skala"],b:0,u:"Garis padu halus ialah garis binaan. Ia menyambung tepi dongakan dengan tepi pelan yang sepadan."},
 {j:"nombor",t:"Lebar sebenar Meja ialah 15 cm. Berapakah lebar dongakan depan meja itu (cm) jika dilukis pada skala 1 : 5?",b:hit(MEJA).X*5/5,tol:0.01,suf:"cm",u:"Panjang lukisan = 15 cm ÷ 5 = 3 cm.",kira:()=>hit(MEJA).X*5/5}],
 bos:{j:"nombor",t:"Dalam Rajah 1, satu petak mewakili 5 cm × 5 cm. Pilih objek Kerusi. Berapakah luas sebenar dongakan depan Kerusi (cm²)?",b:hit(KERUSI).depan*25,tol:0.01,suf:"cm²",u:"Dongakan depan Kerusi ialah 13 petak. Setiap petak 25 cm², jadi 13 × 25 = 325 cm².",kira:()=>hit(KERUSI).depan*25}},

{n:4, tempat:"Blok Berongga", sk:"7.2.1 Objek gabungan, objek yang dikeluarkan sebahagian dan jenis garis", lampiran:"uj4",
 kadNama:"Tiga Jenis Garis", kadEm:"\u{1F9F1}", kadFakta:"Garis padu tebal untuk sisi yang nampak, garis sempang untuk sisi terlindung, dan garis padu halus untuk garis binaan. Tiga jenis garis ini dipakai dalam semua lukisan teknikal.",
 bosKadNama:"Rongga Tersembunyi", bosKadEm:"\u{1F573}\u{FE0F}", bosKadFakta:"Rongga di dalam blok tidak nampak dari luar. Lukisan teknikal menggunakan garis sempang untuk memberitahu tukang bahawa ada ruang kosong di situ.",
 soalan:[
 {j:"pilih",t:"Jenis garis yang digunakan untuk sisi yang nampak dalam lukisan pelan dan dongakan ialah:",p:["Garis padu tebal","Garis sempang","Garis padu halus","Garis titik dan sempang"],b:0,u:"Sisi yang nampak dilukis dengan garis padu tebal."},
 {j:"pilih",t:"Jenis garis yang digunakan untuk sisi terlindung ialah:",p:["Garis sempang","Garis padu tebal","Garis padu halus","Garis bergelombang"],b:0,u:"Sisi terlindung dilukis dengan garis sempang."},
 {j:"pilih",t:"Jenis garis yang digunakan untuk garis binaan ialah:",p:["Garis padu halus","Garis padu tebal","Garis sempang","Garis putus panjang"],b:0,u:"Garis binaan dilukis dengan garis padu halus supaya tidak tersalah dianggap tepi objek."},
 {j:"nombor",t:"Dalam Rajah 1, bayangkan dahulu, kemudian semak dengan rajah. Pilih objek Blok bertakuk dan pandangan Depan. Berapakah petak dongakan depannya?",b:hit(TAKUK).depan,tol:0.01,u:"Dongakan depan Blok bertakuk ialah segi empat tepat 3 × 2 = 6 petak. Takuk di belakang tidak mengubah bentuk luarnya.",kira:()=>hit(TAKUK).depan},
 {j:"nombor",t:"Dalam Rajah 1, pilih objek Blok bertakuk dan pandangan Sisi. Berapakah petak dongakan sisinya?",b:hit(TAKUK).sisi,tol:0.01,u:"Dari sisi, blok kelihatan 2 petak lebar dan 2 petak tinggi, iaitu 4 petak.",kira:()=>hit(TAKUK).sisi},
 {j:"nombor",t:"Blok berongga dalam Rajah 1 berasal daripada blok penuh 3 × 2 × 2 kubus. Berapa kubus telah dikeluarkan?",b:hit(BERONGGA).X*hit(BERONGGA).Y*hit(BERONGGA).Z-hit(BERONGGA).kubus,tol:0.01,u:"Blok penuh mempunyai 3 × 2 × 2 = 12 kubus. Blok berongga ada 11, jadi 1 kubus dikeluarkan.",kira:()=>hit(BERONGGA).X*hit(BERONGGA).Y*hit(BERONGGA).Z-hit(BERONGGA).kubus},
 {j:"pilih",t:"Dalam pelan Blok berongga, rongga dilukis dengan garis sempang. Mengapa?",p:["Rongga itu terlindung di bawah lapisan atas","Rongga itu berada di atas blok","Rongga itu tidak wujud pada objek","Garis sempang menunjukkan garis binaan"],b:0,u:"Rongga berada di bawah lapisan atas, jadi tidak nampak dari atas. Tepinya dilukis dengan garis sempang.",kira:()=>hit(BERONGGA).sempangPelan>0},
 {j:"nombor",t:"Meja dalam Rajah 1 diperoleh daripada blok penuh 3 × 2 × 3 kubus dengan sebahagian dikeluarkan. Berapa kubus dikeluarkan?",b:hit(MEJA).X*hit(MEJA).Y*hit(MEJA).Z-hit(MEJA).kubus,tol:0.01,u:"Blok penuh mempunyai 3 × 2 × 3 = 18 kubus. Meja ada 14, jadi 4 kubus dikeluarkan.",kira:()=>hit(MEJA).X*hit(MEJA).Y*hit(MEJA).Z-hit(MEJA).kubus}],
 bos:{j:"banyak",t:"Dalam Rajah 1, pilih Blok bertakuk. Pilih SEMUA unjuran yang mengandungi garis sempang.",p:["Dongakan depan","Dongakan sisi","Pelan","Tiada satu pun unjuran"],b:[0,1],u:"Takuk terlindung dalam dongakan depan dan dongakan sisi, jadi tepinya ialah garis sempang. Dalam pelan, takuk nampak dari atas dan semua garisnya padu.",kira:()=>hit(TAKUK).sempangDepan>0&&hit(TAKUK).sempangSisi>0&&hit(TAKUK).sempangPelan===0}},

{n:5, tempat:"Lakar Bangunan", sk:"7.2.2 Mensintesis pelan dan dongakan, dan melakar objek", lampiran:"uj5",
 kadNama:"Bina Semula", kadEm:"\u{1F3D7}\u{FE0F}", kadFakta:"Daripada pelan dan dongakan, pembina boleh membina semula objek dalam tiga dimensi. Pelan memberi kedudukan, dongakan memberi ketinggian.",
 bosKadNama:"Tinggi Lajur", bosKadEm:"\u{1F5FC}", bosKadFakta:"Cara mudah melakar objek daripada pelan ialah menulis tinggi lajur pada setiap petak pelan. Tinggi itu dibaca daripada dongakan.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, kira dahulu, kemudian semak dengan rajah. Pilih objek Menara. Berapakah jumlah kubus pada Menara?",b:hit(MENARA).kubus,tol:0.01,u:"Lapan lajur tinggi 1 dan satu lajur tengah tinggi 3: 8 + 3 = 11 kubus.",kira:()=>hit(MENARA).kubus},
 {j:"nombor",t:"Dalam Rajah 1, pilih objek Menara dan pandangan Depan. Berapakah petak dongakan depannya?",b:hit(MENARA).depan,tol:0.01,u:"Dongakan depan berbentuk T: 3 petak tapak dan 2 petak tambahan di tengah, jumlah 5 petak.",kira:()=>hit(MENARA).depan},
 {j:"pilih",t:"Pelan sebuah objek ialah segi empat sama 3 × 3. Dongakan depannya berbentuk T (tengah 3 tinggi, tepi 1 tinggi). Antara objek dalam Rajah 1, objek itu ialah:",p:["Menara","Rumah kayu","Kerusi","Tiada satu pun"],b:0,u:"Hanya Menara mempunyai pelan 3 × 3 dan tengah yang tinggi.",kira:()=>hit(MENARA).X===3&&hit(MENARA).Y===3&&hit(MENARA).depan===5},
 {j:"nombor",t:"Dalam Rajah 1, pilih objek Rumah kayu. Berapakah jumlah kubusnya?",b:hit(RUMAH).kubus,tol:0.01,u:"Pelan 3 × 2 dengan tinggi lajur 2, 3, 2 pada setiap baris: (2 + 3 + 2) × 2 = 14 kubus.",kira:()=>hit(RUMAH).kubus},
 {j:"nombor",t:"Dalam Rajah 1, pilih objek Kerusi. Berapakah jumlah kubusnya?",b:hit(KERUSI).kubus,tol:0.01,u:"Empat kaki 2 kubus setiap satu = 8, tempat duduk 3 × 2 = 6, dan penyandar 3 × 2 = 6. Jumlah 20 kubus.",kira:()=>hit(KERUSI).kubus},
 {j:"nombor",t:"Dalam Rajah 1, pilih objek Kerusi dan pandangan Sisi. Berapakah petak dongakan sisinya?",b:hit(KERUSI).sisi,tol:0.01,u:"Dari sisi, kaki dan tempat duduk ialah 2 petak lebar × 3 petak tinggi = 6 petak. Penyandar 1 petak lebar × 2 petak tinggi = 2 petak. Jumlah 8 petak.",kira:()=>hit(KERUSI).sisi},
 {j:"pilih",t:"Adakah pelan sahaja cukup untuk menentukan bilangan kubus sesuatu objek?",p:["Tidak, kerana pelan tidak menunjukkan ketinggian","Ya, kerana pelan menunjukkan semua kubus","Ya, kerana pelan sama dengan dongakan","Tidak, kerana pelan tidak menunjukkan lebar"],b:0,u:"Pelan hanya menunjukkan kedudukan dari atas. Ketinggian setiap lajur dibaca daripada dongakan."},
 {j:"nombor",t:"Dalam Rajah 1, berapakah beza bilangan kubus antara Kerusi dan Rumah kayu?",b:hit(KERUSI).kubus-hit(RUMAH).kubus,tol:0.01,u:"Kerusi ada 20 kubus dan Rumah kayu ada 14 kubus, jadi bezanya 6.",kira:()=>hit(KERUSI).kubus-hit(RUMAH).kubus}],
 bos:{j:"nombor",t:"Menara dalam Rajah 1 ditambah satu kubus di atas setiap satu daripada empat lajur sudutnya. Berapakah jumlah kubus Menara yang baharu?",b:hit(MENARA).kubus+4,tol:0.01,u:"Menara asal ada 11 kubus. Tambah 4 kubus di sudut, jumlah 15 kubus.",kira:()=>hit(MENARA).kubus+4}},

{n:6, tempat:"Projek STEM", sk:"7.2.3 Masalah pelan dan dongakan: kos, luas dan isi padu", lampiran:"uj6",
 kadNama:"Projek STEM", kadEm:"\u{1F52C}", kadFakta:"Dalam projek model bangunan, S ialah kestabilan struktur, T ialah perisian untuk melukis pelan dan dongakan, E ialah mereka bentuk model dan M ialah pengiraan kos, luas dan isi padu.",
 bosKadNama:"Kos Model", bosKadEm:"\u{1F4B0}", bosKadFakta:"Sebelum membina model, buat anggaran bahan dan kos daripada pelan dan dongakan. Anggaran yang teliti menjimatkan wang dan mengelak bahan terbuang.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, setiap kubus kayu ialah 10 cm × 10 cm × 10 cm. Pilih objek Rumah kayu. Berapakah isi padu model itu (cm³)?",b:hit(RUMAH).kubus*1000,tol:0.01,suf:"cm³",u:"Rumah kayu ada 14 kubus. Setiap kubus 1 000 cm³, jadi 14 × 1 000 = 14 000 cm³.",kira:()=>hit(RUMAH).kubus*1000},
 {j:"nombor",t:"Setiap kubus 10 cm. Menara dalam Rajah 1 dicat pada semua muka luar termasuk bahagian bawah. Berapakah luas permukaan yang dicat (cm²)?",b:hit(MENARA).permukaan*100,tol:0.01,suf:"cm²",u:"Menara mempunyai 38 muka kubus yang terdedah. Setiap muka 100 cm², jadi 38 × 100 = 3 800 cm².",kira:()=>hit(MENARA).permukaan*100},
 {j:"nombor",t:"Cat untuk model berharga RM0.50 bagi setiap 100 cm². Meja dalam Rajah 1 (kubus 10 cm) dicat pada semua muka termasuk bahagian bawah. Berapakah kos cat (RM)?",b:hit(MEJA).permukaan*0.5,tol:0.01,u:"Meja ada 46 muka kubus terdedah, iaitu 4 600 cm². Kos = 46 × RM0.50 = RM23.",kira:()=>hit(MEJA).permukaan*0.5},
 {j:"nombor",t:"Sebiji kubus kayu berharga RM3. Berapakah kos kubus untuk membina Menara dalam Rajah 1 (RM)?",b:hit(MENARA).kubus*3,tol:0.01,u:"Menara ada 11 kubus, jadi 11 × RM3 = RM33.",kira:()=>hit(MENARA).kubus*3},
 {j:"pilih",t:"Dalam projek STEM membina model bangunan, mereka bentuk model bangunan ialah unsur:",p:["E (Kejuruteraan)","S (Sains)","T (Teknologi)","M (Matematik)"],b:0,u:"E ialah mereka bentuk model bangunan. S ialah kestabilan struktur, T ialah perisian melukis dan M ialah pengiraan."},
 {j:"pilih",t:"Memastikan struktur bangunan model tidak mudah roboh berkait dengan unsur:",p:["S (Sains)","E (Kejuruteraan)","T (Teknologi)","M (Matematik)"],b:0,u:"Kestabilan dalam pembinaan struktur bangunan dikaitkan dengan unsur Sains."},
 {j:"nombor",t:"Setiap kubus 10 cm. Dongakan depan Rumah kayu dalam Rajah 1 dilukis sebenar pada papan. Berapakah luas papan yang diperlukan (cm²)?",b:hit(RUMAH).depan*100,tol:0.01,suf:"cm²",u:"Dongakan depan ada 7 petak. Setiap petak 100 cm², jadi 7 × 100 = 700 cm².",kira:()=>hit(RUMAH).depan*100},
 {j:"nombor",t:"Setiap kubus 10 cm. Berapakah beza isi padu antara Rumah kayu dengan Menara dalam Rajah 1 (cm³)?",b:(hit(RUMAH).kubus-hit(MENARA).kubus)*1000,tol:0.01,suf:"cm³",u:"Rumah kayu 14 kubus dan Menara 11 kubus. Beza 3 kubus × 1 000 = 3 000 cm³.",kira:()=>(hit(RUMAH).kubus-hit(MENARA).kubus)*1000}],
 bos:{j:"buka",
  t:"Reka sebuah model rumah kecil daripada kubus kayu 10 cm untuk projek STEM kelas awak. Lukis pelan dan dongakannya.",
  arahan:"Lukis pelan, dongakan depan dan dongakan sisi mengikut skala. Guna garis padu tebal, garis sempang dan garis binaan dengan betul. Kira bilangan kubus, luas cat dan kos bahan jika harga satu kubus ialah RM3. Terangkan bagaimana rekaan awak kukuh (kestabilan).",
  u:"Jawapan TP6 yang kukuh mempunyai pelan dan dongakan yang sepadan, jenis garis yang betul, pengiraan kos dan luas yang tepat, dan penjelasan tentang kestabilan model."}}
];

module.exports = {
  id:"m3b7", tingkatan:3, kod:"7.0 Pelan dan Dongakan",
  tajuk:"Bengkel Kayu",
  subtajuk:"Matematik Ting. 3 · Bab 7 Pelan dan Dongakan",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengenal unjuran ortogon serta menamakan pelan, dongakan depan dan dongakan sisi. Langkah seterusnya ialah membanding bentuk objek dengan unjurannya.",
   2:"{n} memahami unjuran ortogon dan boleh membanding serta membezakan objek dengan unjurannya dari segi panjang, sudut dan bentuk. Perlu lebih latihan sebelum melukis mengikut skala.",
   3:"{n} boleh menggunakan pelan dan dongakan untuk mendapatkan ukuran sebenar mengikut skala, dan mengenal garis binaan. Galakkan mengira luas dan kedalaman daripada pelan.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah tentang objek gabungan atau objek yang dikeluarkan sebahagian, dengan jenis garis nampak, terlindung dan binaan yang betul.",
   5:"{n} dapat menyelesaikan masalah kompleks dengan mensintesis pelan dan dongakan untuk membina semula objek dan mengira bilangan kubus. Sudah bersedia untuk projek bukan rutin.",
   6:"{n} berjaya menyelesaikan masalah bukan rutin dengan mereka bentuk model, melukis pelan dan dongakan yang sepadan, serta mengira kos, luas dan isi padu. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pelan dan Dongakan. Cadangan: ulang hentian pertama menggunakan Rajah 1, pilih satu objek dan namakan pelan, dongakan depan dan dongakan sisi dengan bimbingan rakan sebaya."
  },
  lampiran:{ uj1:R_UJ1, uj2:R_UJ2, uj3:R_UJ3, uj4:R_UJ4, uj5:R_UJ5, uj6:R_UJ6 },
  aras:ARAS
};
