/* Sumber kandungan — Matematik KSSM Tingkatan 4, Bab 3 Penaakulan Logik.
   Fail ini disunting tangan. Jalankan `node bina.js m4b3`.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 4
   dan 5, muka 46 (dskp/matematik-t4-t5.pdf). DSKP menulis enam tahap penuh.
   Istilah ikut DSKP: pernyataan, penafian, pernyataan majmuk, implikasi, antejadian,
   akibat, akas, songsangan, kontrapositif, contoh penyangkal, premis, kesimpulan,
   hujah deduktif (sah, munasabah) dan hujah induktif (kuat, meyakinkan).

   Nilai kebenaran implikasi dalam Rajah H4 dikira oleh widget (domain integer −12..30);
   medan `kira` di bawah menyemak dakwaan yang sama secara bebas. Rajah: widget t4logik. */

const perdana = n => { if (n < 2) return false; for (let d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; };
const D = []; for (let x = -12; x <= 30; x++) D.push(x);
const imp = (p, q) => D.every(x => !p(x) || q(x));

const SPI = [
"Mempamerkan pengetahuan asas tentang pernyataan dan hujah.",
"Mempamerkan kefahaman tentang pernyataan dan hujah.",
"Mengaplikasikan kefahaman tentang hujah deduktif dan hujah induktif untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang penaakulan logik dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang penaakulan logik dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang penaakulan logik dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran ---------- */
const iw = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t4logik", kapsyen, alt }, extra);
const R_NILAI = iw("Rajah 1 · Kad ayat. Pilih ayat dan semak sama ada ia pernyataan.",
  "Rajah interaktif kad ayat; cip memilih enam ayat dan rajah menunjukkan sama ada ayat itu pernyataan, nilai kebenarannya dan penafiannya",
  { mod: "nilai", ayat: [
    { t: "5 ialah nombor perdana", jenis: "B", nafi: "5 bukan nombor perdana" },
    { t: "x + 3 = 7", jenis: "X" },
    { t: "Semua segi empat sama ialah segi empat tepat", jenis: "B", nafi: "Bukan semua segi empat sama ialah segi empat tepat" },
    { t: "−3 > −2", jenis: "P", nafi: "−3 tidak lebih besar daripada −2" },
    { t: "Tutup pintu itu!", jenis: "X" },
    { t: "12 ialah gandaan 5", jenis: "P", nafi: "12 bukan gandaan 5" }] });
const R_MAJMUK = iw("Rajah 1 · Pernyataan majmuk. Pilih p dan q, lihat baris jadual kebenaran.",
  "Rajah interaktif jadual kebenaran bagi p dan q serta p atau q; cip memilih pernyataan p dan q, baris yang sepadan diserlahkan",
  { mod: "majmuk",
    pSet: [{ lbl: "7 perdana", t: "7 ialah nombor perdana", v: true }, { lbl: "7 genap", t: "7 ialah nombor genap", v: false }],
    qSet: [{ lbl: "2³ = 8", t: "2³ = 8", v: true }, { lbl: "2³ = 6", t: "2³ = 6", v: false }] });
const R_HUJAH = iw("Rajah 1 · Hujah deduktif. Pilih hujah dan lihat bentuknya.",
  "Rajah interaktif empat hujah deduktif Bentuk I, II dan III dengan premis 1, premis 2, kesimpulan dan rajah Euler atau anak panah",
  { mod: "hujah", senarai: [
    { bentuk: "I", p1: "Semua gandaan 10 ialah gandaan 5.", p2: "70 ialah gandaan 10.", k: "70 ialah gandaan 5." },
    { bentuk: "II", p1: "Jika x = 4, maka 3x = 12.", p2: "x = 4.", k: "3x = 12." },
    { bentuk: "III", p1: "Jika suatu poligon ialah heksagon, maka ia mempunyai 6 sisi.", p2: "Poligon PQRST tidak mempunyai 6 sisi.", k: "PQRST bukan heksagon." },
    { bentuk: "I", p1: "Semua nombor perdana ialah nombor ganjil.", p2: "2 ialah nombor perdana.", k: "2 ialah nombor ganjil." }] });
const R_IMP = iw("Rajah 1 · Implikasi, akas, songsangan dan kontrapositif. Pilih implikasi dan bentuk.",
  "Rajah interaktif empat implikasi; bagi setiap satu, nilai kebenaran implikasi, akas, songsangan dan kontrapositif dikira dengan menguji integer x dari negatif 12 hingga 30",
  { mod: "implikasi", senarai: [{ p: "x3", q: "kd9" }, { p: "g6", q: "g4" }, { p: "gan4", q: "gen" }, { p: "kd16", q: "x4" }] });
const R_INDUKTIF = iw("Rajah 1 · Hujah induktif. Tambah premis, kemudian buat kesimpulan umum.",
  "Rajah interaktif hujah induktif; cip memilih pola A, B atau C dan gelongsor menambah premis sebelum kesimpulan umum Tn dipaparkan",
  { mod: "induktif", cabar: true, konteks: "Cari rumus umum bagi jujukan", nMaks: 5,
    pola: [{ a: 0, b: 4, c: -1 }, { a: 1, b: 0, c: 1 }, { a: 0, b: 3, c: 2 }] });
const R_SANGKAL = iw("Rajah 1 · Uji dakwaan n demi n. Cari contoh penyangkal.",
  "Rajah interaktif menguji dakwaan untuk n dari 0 hingga 41; titik hijau memenuhi dakwaan, titik merah ialah contoh penyangkal",
  { mod: "sangkal", dakwaan: ["euler41", "p11"], nMaks: 41 });

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Bilik Pernyataan", sk:"3.1.1 / 3.1.2 Pernyataan, nilai kebenaran dan penafian", lampiran:"nilai",
 kadNama:"Pernyataan", kadEm:"\u{1F4AC}", kadFakta:"Pernyataan ialah ayat yang boleh ditentukan sama ada benar atau palsu, tetapi bukan kedua-duanya. Soalan, arahan dan ayat seperti x + 3 = 7 bukan pernyataan.",
 bosKadNama:"Penafian", bosKadEm:"\u{274C}", bosKadFakta:"Penafian dibentuk dengan menambah \"bukan\" atau \"tidak\". Jika pernyataan benar, penafiannya palsu, dan sebaliknya.",
 soalan:[
 {j:"pilih",t:"Antara ayat berikut, yang manakah pernyataan?",p:["5 ialah nombor perdana","x + 3 = 7","Tutup pintu itu!","Berapakah nilai 2 + 3?"],b:0,u:"\"5 ialah nombor perdana\" boleh ditentukan benar. Ayat perintah dan ayat tanya bukan pernyataan, dan x + 3 = 7 bergantung pada nilai x."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Ayat 2. Mengapakah \"x + 3 = 7\" bukan pernyataan?",p:["Nilai kebenarannya bergantung pada nilai x","Ayat itu tidak mengandungi sebarang perkataan","Ayat itu ialah ayat perintah","Ayat itu palsu bagi setiap nilai x"],b:0,u:"Jika x = 4, ayat itu benar; jika x = 5, ayat itu palsu. Oleh sebab nilai kebenarannya tidak dapat ditentukan, ia bukan pernyataan.",kira:()=>4+3===7&&5+3!==7},
 {j:"pilih",t:"Dalam Rajah 1, pilih Ayat 6. Nilai kebenaran \"12 ialah gandaan 5\" ialah:",p:["Palsu","Benar","Bukan pernyataan","Benar dan palsu"],b:0,u:"Gandaan 5 ialah 5, 10, 15, ... dan 12 tiada dalam senarai itu, jadi pernyataan itu palsu.",kira:()=>12%5!==0},
 {j:"pilih",t:"Penafian bagi pernyataan \"12 ialah gandaan 5\" ialah:",p:["12 bukan gandaan 5","12 ialah gandaan bagi 6","5 ialah gandaan bagi 12","12 ialah faktor bagi 5"],b:0,u:"Penafian dibentuk dengan menambah \"bukan\". Penafian itu benar kerana pernyataan asal palsu."},
 {j:"pilih",t:"Jika suatu pernyataan benar, nilai kebenaran penafiannya ialah:",p:["Palsu","Benar juga","Tidak dapat ditentukan","Sama dengan pernyataan asal"],b:0,u:"Penafian menukar nilai kebenaran: benar menjadi palsu dan palsu menjadi benar."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Ayat 3. Pernyataan \"Semua segi empat sama ialah segi empat tepat\" ialah:",p:["Benar","Palsu","Bukan pernyataan","Separuh benar"],b:0,u:"Setiap segi empat sama mempunyai empat sudut tegak dan sisi bertentangan yang sama panjang, jadi ia memenuhi takrif segi empat tepat."},
 {j:"pilih",t:"Apakah nilai kebenaran pernyataan \"Sebilangan segi tiga mempunyai sudut tegak\"?",p:["Benar, kerana ada segi tiga bersudut tegak","Palsu, kerana tidak setiap segi tiga bersudut tegak","Palsu, kerana segi tiga tiada sudut tegak","Bukan pernyataan kerana tiada nombor"],b:0,u:"Pengkuantiti \"sebilangan\" bermaksud sekurang-kurangnya satu. Segi tiga bersudut tegak wujud, jadi pernyataan itu benar."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Ayat 4. Penafian bagi \"−3 &gt; −2\" ialah:",p:["−3 tidak lebih besar daripada −2","−2 tidak lebih besar daripada −3","−3 bukan nombor negatif","−3 lebih besar daripada 2"],b:0,u:"Tambah \"tidak\" pada pernyataan asal. Pernyataan asal palsu (−3 berada di kiri −2 pada garis nombor), jadi penafiannya benar."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR.",p:["7 ialah faktor bagi 21","Semua nombor perdana ialah nombor ganjil","0.5 = 1/2","Sebilangan gandaan 3 ialah nombor genap","4² = 8","Semua nombor kuasa dua sempurna ialah genap"],b:[0,2,3],u:"21 = 7 × 3; 0.5 = 1/2; 6 ialah gandaan 3 yang genap. Nombor 2 perdana tetapi genap, 4² = 16, dan 9 ialah kuasa dua sempurna yang ganjil.",kira:()=>21%7===0&&!perdana(2)===false&&6%3===0&&16!==8}},

{n:2, tempat:"Persimpangan Dan-Atau", sk:"3.1.3 / 3.1.4 Pernyataan majmuk dan implikasi", lampiran:"majmuk",
 kadNama:"Dan, Atau", kadEm:"\u{1F500}", kadFakta:"\"p dan q\" benar hanya apabila kedua-dua p dan q benar. \"p atau q\" palsu hanya apabila kedua-dua p dan q palsu.",
 bosKadNama:"Implikasi", bosKadEm:"\u{27A1}\u{FE0F}", bosKadFakta:"Dalam \"Jika p, maka q\", p ialah antejadian dan q ialah akibat. \"p jika dan hanya jika q\" bermaksud kedua-dua \"jika p, maka q\" dan \"jika q, maka p\".",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih p: 7 perdana dan q: 2³ = 8. Nilai kebenaran \"p dan q\" ialah:",p:["Benar","Palsu","Bukan pernyataan","Tidak dapat ditentukan"],b:0,u:"p benar (7 perdana) dan q benar (2 × 2 × 2 = 8), jadi \"p dan q\" benar.",kira:()=>perdana(7)&&Math.pow(2,3)===8},
 {j:"pilih",t:"Dalam Rajah 1, pilih p: 7 genap dan q: 2³ = 8. Nilai kebenaran \"p dan q\" ialah:",p:["Palsu","Benar","Bukan pernyataan","Tidak dapat ditentukan"],b:0,u:"p palsu kerana 7 ganjil. Satu pernyataan palsu sudah cukup untuk menjadikan \"p dan q\" palsu.",kira:()=>7%2!==0},
 {j:"pilih",t:"Dalam Rajah 1, pilih p: 7 genap dan q: 2³ = 8. Nilai kebenaran \"p atau q\" ialah:",p:["Benar","Palsu","Bukan pernyataan","Tidak dapat ditentukan"],b:0,u:"q benar, jadi \"p atau q\" benar walaupun p palsu."},
 {j:"pilih",t:"Pernyataan majmuk \"p atau q\" palsu apabila:",p:["p palsu dan q palsu","p benar dan q benar","p benar dan q palsu","p palsu dan q benar"],b:0,u:"Lihat baris terakhir jadual kebenaran dalam Rajah 1: \"p atau q\" palsu hanya pada baris P, P."},
 {j:"pilih",t:"Pernyataan majmuk \"p dan q\" benar apabila:",p:["Kedua-dua p dan q benar","Sekurang-kurangnya satu benar","Kedua-dua p dan q adalah palsu","p benar walaupun q palsu"],b:0,u:"Lihat baris pertama jadual kebenaran: \"p dan q\" benar hanya apabila p dan q kedua-duanya benar."},
 {j:"pilih",t:"Nilai kebenaran \"9 ialah nombor ganjil dan 9 ialah nombor perdana\" ialah:",p:["Palsu","Benar","Bukan pernyataan","Tidak dapat ditentukan"],b:0,u:"9 ganjil (benar) tetapi 9 = 3 × 3 bukan perdana (palsu). Benar dan palsu memberi palsu.",kira:()=>9%2===1&&!perdana(9)},
 {j:"pilih",t:"Bagi implikasi \"Jika x = 2, maka x³ = 8\", antejadian dan akibatnya ialah:",p:["Antejadian x = 2; akibat x³ = 8","Antejadian x³ = 8; akibat x = 2","Antejadian x; akibat 8","Antejadian 2; akibat x³"],b:0,u:"Antejadian ialah bahagian selepas \"jika\", dan akibat ialah bahagian selepas \"maka\"."},
 {j:"pilih",t:"Diberi p: \"ABC ialah segi tiga sama sisi\" dan q: \"setiap sudut ABC ialah 60°\". Pernyataan \"p jika dan hanya jika q\" bermaksud:",p:["Jika p, maka q; dan jika q, maka p","Jika p, maka q; dan jika bukan p, maka bukan q","Jika q, maka p; dan jika bukan q, maka bukan p","p dan q; dan juga p atau q"],b:0,u:"\"p jika dan hanya jika q\" ialah gabungan dua implikasi: \"Jika p, maka q\" dan \"Jika q, maka p\"."}],
 bos:{j:"pilih",t:"Diberi p: \"4 ialah faktor bagi 12\" dan q: \"4 ialah gandaan 8\". Antara pernyataan berikut, yang manakah benar?",p:["p atau q","p dan q","Bukan p","q"],b:0,u:"p benar (12 = 4 × 3), q palsu (gandaan 8 ialah 8, 16, ...). Maka \"p atau q\" benar, \"p dan q\" palsu, \"bukan p\" palsu dan q palsu.",kira:()=>12%4===0&&4%8!==0}},

{n:3, tempat:"Mahkamah Hujah", sk:"3.2.1 / 3.2.2 / 3.2.4 Hujah deduktif dan hujah induktif", lampiran:"hujah",
 kadNama:"Hujah Deduktif", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Hujah deduktif membuat kesimpulan khusus daripada premis umum. Hujah sah yang semua premisnya benar ialah hujah yang munasabah.",
 bosKadNama:"Sah Tetapi Tidak Munasabah", bosKadEm:"\u{1F914}", bosKadFakta:"Hujah boleh sah dari segi bentuk tetapi tidak munasabah jika satu premisnya palsu, contohnya \"Semua nombor perdana ialah nombor ganjil\".",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih Hujah 1. Kesimpulan hujah itu ialah:",p:["70 ialah gandaan 5","70 ialah gandaan 10","Semua gandaan 5 ialah gandaan 10","5 ialah gandaan 70"],b:0,u:"Bentuk I: Semua A adalah B; C adalah A; maka C adalah B. Di sini A = gandaan 10, B = gandaan 5 dan C = 70."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Hujah 2. Hujah ini ialah:",p:["Hujah deduktif Bentuk II","Hujah deduktif Bentuk I","Hujah deduktif Bentuk III","Hujah induktif"],b:0,u:"Bentuk II: Jika p, maka q; p benar; maka q benar."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Hujah 3. Kesimpulan hujah itu ialah:",p:["PQRST bukan heksagon","PQRST ialah heksagon","PQRST mempunyai 6 sisi","Semua poligon ialah heksagon"],b:0,u:"Bentuk III: Jika p, maka q; bukan q benar; maka bukan p benar."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Hujah 4. Hujah ini sah tetapi tidak munasabah kerana:",p:["Premis 1 palsu, kerana 2 ialah nombor perdana yang genap","Bentuk hujah itu tidak mengikut Bentuk I","Kesimpulannya tidak mengikut premis","Premis 2 palsu kerana 2 bukan perdana"],b:0,u:"Bentuk hujah betul (Bentuk I), jadi ia sah. Namun Premis 1 palsu, maka hujah itu tidak munasabah.",kira:()=>perdana(2)&&2%2===0},
 {j:"pilih",t:"Hujah deduktif berbeza daripada hujah induktif kerana hujah deduktif:",p:["Membuat kesimpulan khusus daripada premis umum","Membuat kesimpulan umum daripada kes-kes khusus","Tidak memerlukan premis langsung","Digunakan dalam bidang sains semata-mata"],b:0,u:"Deduktif: umum ke khusus. Induktif: khusus ke umum."},
 {j:"pilih",t:"Premis 1: Jika hari hujan, maka padang sekolah basah. Premis 2: Hari ini hujan. Kesimpulannya ialah:",p:["Padang sekolah basah","Hari ini tidak akan hujan","Padang sekolah tidak basah","Jika padang basah, maka hari hujan"],b:0,u:"Ini Bentuk II: antejadian benar, maka akibat benar."},
 {j:"pilih",t:"Diberi jujukan 3, 8, 13, 18, ... Kesimpulan induktif yang sesuai ialah:",p:["Tn = 5n − 2, n = 1, 2, 3, ...","Tn = 5n + 3, n = 1, 2, 3, ...","Tn = 3n + 5, n = 1, 2, 3, ...","Tn = n + 5, n = 1, 2, 3, ..."],b:0,u:"Premis: 5(1) − 2 = 3, 5(2) − 2 = 8, 5(3) − 2 = 13, 5(4) − 2 = 18. Rumus lain gagal pada sebutan pertama atau kedua.",kira:()=>[1,2,3,4].every((n,i)=>5*n-2===[3,8,13,18][i])&&5*1+3!==3&&3*2+5!==8},
 {j:"pilih",t:"Premis 1: Jika x lebih besar daripada 5, maka x lebih besar daripada 2. Premis 2: x tidak lebih besar daripada 2. Kesimpulannya ialah:",p:["x tidak lebih besar daripada 5","x lebih besar daripada 5","x lebih besar daripada 2","x sama dengan 5"],b:0,u:"Ini Bentuk III: bukan q benar, maka bukan p benar."}],
 bos:{j:"susun",t:"Susun ayat berikut untuk membentuk hujah deduktif Bentuk I yang sah.",p:["Premis 1: Semua rombus mempunyai empat sisi yang sama panjang.","Premis 2: PQRS ialah sebuah rombus.","Kesimpulan: PQRS mempunyai empat sisi yang sama panjang."],b:[0,1,2],u:"Bentuk I bermula dengan premis umum (semua A adalah B), diikuti kes khusus (C adalah A), dan berakhir dengan kesimpulan (C adalah B)."}},

{n:4, tempat:"Cermin Implikasi", sk:"3.1.5 / 3.1.6 Akas, songsangan, kontrapositif dan contoh penyangkal", lampiran:"imp",
 kadNama:"Kontrapositif", kadEm:"\u{1FA9E}", kadFakta:"Implikasi dan kontrapositifnya sentiasa mempunyai nilai kebenaran yang sama. Akas dan songsangan juga sentiasa sama antara satu sama lain.",
 bosKadNama:"Contoh Penyangkal", bosKadEm:"\u{1F6AB}", bosKadFakta:"Satu contoh penyangkal sudah cukup untuk menunjukkan bahawa suatu pernyataan umum adalah palsu.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih I1 dan bentuk Akas. Akas bagi \"Jika x = 3, maka x² = 9\" ialah:",p:["Jika x² = 9, maka x = 3","Jika x ≠ 3, maka x² ≠ 9","Jika x² ≠ 9, maka x ≠ 3","x = 3 jika dan hanya jika x² = 9"],b:0,u:"Akas menukar kedudukan antejadian dan akibat: \"Jika q, maka p\"."},
 {j:"pilih",t:"Dalam Rajah 1, pilih I1 dan Akas. Nilai kebenaran akas itu dan contoh penyangkalnya ialah:",p:["Palsu; contoh penyangkal x = −3","Benar; tiada contoh penyangkal","Palsu; contoh penyangkal x = 3","Benar; contoh penyangkal x = −3"],b:0,u:"(−3)² = 9 tetapi −3 ≠ 3, jadi akas itu palsu dan x = −3 ialah contoh penyangkal.",kira:()=>!imp(x=>x*x===9,x=>x===3)&&(-3)*(-3)===9},
 {j:"pilih",t:"Dalam Rajah 1, pilih I2. Kontrapositif bagi \"Jika x &gt; 6, maka x &gt; 4\" ialah:",p:["Jika x ≤ 4, maka x ≤ 6","Jika x &gt; 4, maka x &gt; 6","Jika x ≤ 6, maka x ≤ 4","Jika x &gt; 6, maka x ≤ 4"],b:0,u:"Kontrapositif: \"Jika bukan q, maka bukan p\". Bukan (x &gt; 4) ialah x ≤ 4, dan bukan (x &gt; 6) ialah x ≤ 6."},
 {j:"pilih",t:"Dalam Rajah 1, bandingkan empat bentuk bagi I1 hingga I4. Pasangan manakah mempunyai nilai kebenaran yang sama dalam setiap kes?",p:["Implikasi dan kontrapositif","Implikasi dan akas","Akas dan kontrapositif","Implikasi dan songsangan"],b:0,u:"Implikasi dan kontrapositifnya setara secara logik. Akas dan songsangan juga setara antara satu sama lain.",kira:()=>[[x=>x===3,x=>x*x===9],[x=>x>6,x=>x>4],[x=>x%4===0,x=>x%2===0],[x=>x*x===16,x=>x===4]].every(([p,q])=>imp(p,q)===imp(x=>!q(x),x=>!p(x)))},
 {j:"pilih",t:"Dalam Rajah 1, pilih I3 dan Songsangan. Nilai kebenaran \"Jika x bukan gandaan 4, maka x bukan nombor genap\" ialah:",p:["Palsu, kerana 6 bukan gandaan 4 tetapi genap","Benar, kerana setiap nombor genap ialah gandaan 4","Benar, kerana 4 ialah nombor genap","Palsu, kerana 8 ialah gandaan 4"],b:0,u:"Satu contoh penyangkal cukup: 6 bukan gandaan 4 tetapi 6 ialah nombor genap. (Rajah memaparkan contoh penyangkal pertama dalam domain, iaitu −10.)",kira:()=>6%4!==0&&6%2===0},
 {j:"pilih",t:"Dalam Rajah 1, pilih I4. Pernyataan \"Jika x² = 16, maka x = 4\" palsu. Contoh penyangkalnya ialah:",p:["x = −4","x = 4","x = 16","x = 2"],b:0,u:"(−4)² = 16 tetapi −4 ≠ 4.",kira:()=>(-4)*(-4)===16},
 {j:"pilih",t:"Contoh penyangkal bagi pernyataan \"Semua nombor perdana ialah nombor ganjil\" ialah:",p:["2","3","9","1"],b:0,u:"2 ialah nombor perdana yang genap. 3 perdana dan ganjil, manakala 9 dan 1 bukan nombor perdana.",kira:()=>perdana(2)&&2%2===0&&!perdana(9)&&!perdana(1)},
 {j:"pilih",t:"Jika suatu implikasi benar, akasnya:",p:["Mungkin benar atau mungkin palsu","Pasti benar juga","Pasti palsu","Sama dengan kontrapositifnya"],b:0,u:"Dalam Rajah 1, akas I2 palsu tetapi akas I4 benar. Nilai akas perlu disemak sendiri."}],
 bos:{j:"banyak",t:"Bagi implikasi \"Jika x ialah gandaan 6, maka x ialah gandaan 3\", pilih SEMUA pernyataan yang BENAR.",p:["Implikasi itu benar","Kontrapositifnya ialah \"Jika x bukan gandaan 3, maka x bukan gandaan 6\"","Akasnya palsu dengan contoh penyangkal x = 9","Songsangannya benar kerana setiap gandaan 3 ialah gandaan 6","Akasnya benar kerana 12 ialah gandaan 3 dan gandaan 6","Kontrapositifnya palsu kerana 9 bukan gandaan 6"],b:[0,1,2],u:"Setiap gandaan 6 ialah gandaan 3, jadi implikasi dan kontrapositif benar. 9 ialah gandaan 3 tetapi bukan gandaan 6, jadi akas (dan songsangan) palsu.",kira:()=>imp(x=>x%6===0,x=>x%3===0)&&9%3===0&&9%6!==0}},

{n:5, tempat:"Makmal Pola", sk:"3.2.4 / 3.2.5 Hujah induktif yang kuat", lampiran:"induktif",
 kadNama:"Hujah Induktif", kadEm:"\u{1F575}\u{FE0F}", kadFakta:"Hujah induktif membuat kesimpulan umum daripada kes khusus. Hujah induktif dikatakan kuat jika kesimpulannya berkemungkinan benar apabila semua premis benar.",
 bosKadNama:"Nombor Ganjil", bosKadEm:"\u{1F7E6}", bosKadFakta:"1 + 3 + 5 + ... (n sebutan) = n². Corak ini boleh dilihat sebagai segi empat sama yang bertambah satu lapisan setiap kali.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih Pola A dan tambah premis. Kira dahulu, kemudian semak. Kesimpulan umum bagi 3, 7, 11, 15, ... ialah:",p:["Tn = 4n − 1","Tn = 4n + 3","Tn = 3n","Tn = n + 2"],b:0,u:"Beza sepunya ialah 4, jadi Tn = 4n + c. Bagi n = 1: 4 + c = 3, maka c = −1.",kira:()=>[3,7,11,15].every((v,i)=>4*(i+1)-1===v)},
 {j:"nombor",t:"Dalam Rajah 1, gunakan kesimpulan bagi Pola A untuk mencari T10.",tol:0.01,b:39,u:"T10 = 4(10) − 1 = 39.",kira:()=>4*10-1},
 {j:"pilih",t:"Dalam Rajah 1, pilih Pola B: 2, 5, 10, 17, ... Kesimpulan umumnya ialah:",p:["Tn = n² + 1","Tn = 2n","Tn = 3n − 1","Tn = n² + 2"],b:0,u:"1² + 1 = 2, 2² + 1 = 5, 3² + 1 = 10, 4² + 1 = 17. Rumus 2n gagal pada n = 2.",kira:()=>[2,5,10,17].every((v,i)=>(i+1)*(i+1)+1===v)},
 {j:"nombor",t:"Gunakan kesimpulan bagi Pola B dalam Rajah 1 untuk mencari T8.",tol:0.01,b:65,u:"T8 = 8² + 1 = 65.",kira:()=>8*8+1},
 {j:"nombor",t:"Dalam Rajah 1, pilih Pola C: 5, 8, 11, 14, ... Gunakan kesimpulan umumnya untuk mencari T20.",tol:0.01,b:62,u:"Tn = 3n + 2, jadi T20 = 3(20) + 2 = 62.",kira:()=>3*20+2},
 {j:"pilih",t:"Premis: Bas sekolah tiba pada pukul 6.45 pagi dari Isnin hingga Jumaat minggu lalu. Kesimpulan: Bas sekolah tiba pada pukul 6.45 pagi setiap hari persekolahan. Hujah ini:",p:["Kuat, kerana kesimpulan berkemungkinan benar jika premis benar","Lemah, kerana premis-premisnya tidak benar","Sah, kerana ia ialah hujah deduktif","Lemah, kerana hujah itu tiada kesimpulan"],b:0,u:"Lima pemerhatian yang konsisten menjadikan kesimpulan berkemungkinan benar. Hujah induktif dinilai kuat atau lemah, bukan sah atau tidak sah."},
 {j:"pilih",t:"Premis 1: Kerusi di ruang tamu berwarna merah. Premis 2: Kerusi di ruang makan berwarna merah. Kesimpulan: Semua kerusi di rumah ini berwarna merah. Hujah ini:",p:["Lemah, kerana kesimpulan mungkin palsu walaupun premis benar","Kuat, kerana kedua-dua premis adalah benar","Sah, kerana kesimpulan mengikut premis","Kuat dan meyakinkan kerana ada dua premis"],b:0,u:"Contoh ini daripada DSKP: masih ada kerusi di bilik lain yang belum dilihat, jadi kesimpulan mungkin palsu. Hujah itu lemah."},
 {j:"nombor",t:"Bilangan petak kecil dalam corak ke-1, ke-2, ke-3 dan ke-4 ialah 1, 4, 9 dan 16. Dengan hujah induktif, berapakah bilangan petak dalam corak ke-12?",tol:0.01,b:144,u:"Kesimpulan: Tn = n². Maka T12 = 12² = 144.",kira:()=>12*12}],
 bos:{j:"pilih",t:"Seorang murid memerhati bahawa 1 + 3 = 4, 1 + 3 + 5 = 9 dan 1 + 3 + 5 + 7 = 16. Kesimpulan induktif yang kuat ialah:",p:["Hasil tambah n nombor ganjil pertama ialah n²","Hasil tambah nombor ganjil ialah nombor genap","Hasil tambah n nombor ganjil pertama ialah 2n","Hasil tambah n nombor ganjil pertama ialah n² + 1"],b:0,u:"4 = 2², 9 = 3² dan 16 = 4². Pilihan kedua palsu kerana 1 + 3 + 5 = 9 ialah ganjil.",kira:()=>[1,2,3,4,5,6,7,8].every(n=>{let s=0;for(let k=0;k<n;k++)s+=2*k+1;return s===n*n;})}},

{n:6, tempat:"Bilik Detektif", sk:"3.1.6 / 3.2.6 Menyelesaikan masalah penaakulan logik", lampiran:"sangkal",
 kadNama:"Dakwaan Euler", kadEm:"\u{1F50D}", kadFakta:"n² + n + 41 memberi nombor perdana bagi n = 0 hingga 39, tetapi gagal pada n = 40. Banyak contoh yang menyokong tidak membuktikan suatu dakwaan.",
 bosKadNama:"Penaakul", bosKadEm:"\u{1F4A1}", bosKadFakta:"Penaakulan yang baik menggabungkan hujah induktif untuk meneka pola dan hujah deduktif atau contoh penyangkal untuk menguji tekaan itu.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih Dakwaan 1 dan gerakkan n dari 0. Berapakah nilai n terkecil yang menjadi contoh penyangkal?",tol:0.01,b:40,u:"Bagi n = 40, n² + n + 41 = 1681 = 41 × 41, yang bukan nombor perdana.",kira:()=>{for(let n=0;n<100;n++) if(!perdana(n*n+n+41)) return n;}},
 {j:"pilih",t:"Dalam Rajah 1, apabila n = 40, nilai n² + n + 41 ialah 1681. Apakah kesimpulannya?",p:["1681 bukan perdana kerana 1681 = 41 × 41","1681 perdana kerana ia nombor ganjil","1681 perdana kerana tiada faktor 2","Dakwaan itu benar bagi n = 40"],b:0,u:"Nombor ganjil tidak semestinya perdana. 1681 = 41² mempunyai faktor 41.",kira:()=>40*40+40+41===41*41},
 {j:"nombor",t:"Dalam Rajah 1, pilih Dakwaan 2: n² − n + 11 ialah nombor perdana. Berapakah contoh penyangkal yang terkecil?",tol:0.01,b:11,u:"Bagi n = 11: 121 − 11 + 11 = 121 = 11 × 11, bukan perdana.",kira:()=>{for(let n=0;n<100;n++) if(!perdana(n*n-n+11)) return n;}},
 {j:"pilih",t:"Dakwaan 1 dalam Rajah 1 benar bagi n = 0 hingga 39. Apakah kesimpulan yang wajar?",p:["Satu penyangkal cukup untuk menafikan dakwaan itu","Dakwaan itu benar kerana 40 contoh menyokongnya","Dakwaan itu palsu bagi setiap nilai n","Contoh penyangkal tidak sah kerana n besar"],b:0,u:"Hujah induktif boleh kuat tetapi kesimpulannya masih boleh palsu. Satu contoh penyangkal (n = 40) cukup untuk menafikan dakwaan umum."},
 {j:"pilih",t:"Premis 1: Jika suatu nombor boleh dibahagi tepat dengan 9, maka ia boleh dibahagi tepat dengan 3. Premis 2: 81 boleh dibahagi tepat dengan 9. Kesimpulan: 81 boleh dibahagi tepat dengan 3. Hujah ini:",p:["Sah dan munasabah","Sah tetapi tidak munasabah","Tidak sah tetapi munasabah","Tidak sah dan tidak munasabah"],b:0,u:"Bentuknya Bentuk II (sah), dan kedua-dua premis benar, jadi hujah itu munasabah.",kira:()=>81%9===0&&81%3===0},
 {j:"pilih",t:"Premis 1: Jika x &gt; 3, maka x &gt; 1. Premis 2: x &gt; 1. Kesimpulan: x &gt; 3. Nilaikan hujah ini.",p:["Tidak sah, kerana x = 2 memenuhi premis tetapi bukan kesimpulan","Sah, kerana ia mengikut Bentuk II dengan premis benar","Sah, kerana ia mengikut Bentuk III dengan premis benar","Tidak sah, kerana premis 1 palsu bagi sebarang nilai x"],b:0,u:"Premis 2 mengesahkan akibat, bukan antejadian, jadi ia bukan Bentuk II. x = 2 menjadikan kedua-dua premis benar tetapi kesimpulan palsu.",kira:()=>2>1&&!(2>3)},
 {j:"pilih",t:"Seorang guru berkata, \"Jika murid hadir ke kelas tambahan, maka markahnya meningkat.\" Andaikan kenyataan itu benar. Markah Ali tidak meningkat. Kesimpulan yang sah ialah:",p:["Ali tidak hadir ke kelas tambahan","Ali hadir ke kelas tambahan","Markah Ali akan meningkat kelak","Kelas tambahan itu tidak berkesan"],b:0,u:"Ini Bentuk III: Jika p, maka q; bukan q; maka bukan p."},
 {j:"pilih",t:"Contoh penyangkal bagi \"Jika a² &gt; b², maka a &gt; b\" ialah:",p:["a = −3, b = 2","a = 3, b = 2","a = 2, b = 1","a = 5, b = −1"],b:0,u:"(−3)² = 9 &gt; 4 = 2², tetapi −3 &lt; 2. Antejadian benar dan akibat palsu.",kira:()=>9>4&&!(-3>2)&&(5>-1)}],
 bos:{j:"buka",
  t:"Jadilah penaakul: reka satu dakwaan matematik umum yang kelihatan benar bagi beberapa kes pertama tetapi sebenarnya palsu, kemudian bina hujah tentangnya.",
  arahan:"Tulis dakwaan itu dalam bentuk \"Untuk semua n, ...\" atau \"Jika p, maka q\". Tunjukkan sekurang-kurangnya tiga kes yang menyokongnya (hujah induktif), kemudian cari contoh penyangkal. Tulis juga akas, songsangan dan kontrapositif dakwaan itu jika ia implikasi, dan nyatakan nilai kebenaran setiap satu.",
  u:"Jawapan TP6 yang kukuh mempunyai dakwaan asli yang jelas, kes penyokong yang dikira dengan betul, contoh penyangkal yang sah, dan penjelasan bahawa banyak contoh tidak membuktikan dakwaan umum tetapi satu penyangkal cukup untuk menafikannya."}}
];

module.exports = {
  id:"m4b3", tingkatan:4, kod:"3.0 Penaakulan Logik",
  tajuk:"Mahkamah Logik",
  subtajuk:"Matematik Ting. 4 · Bab 3 Penaakulan Logik",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengenal pasti pernyataan, menentukan nilai kebenarannya dan membentuk penafian. Langkah seterusnya ialah pernyataan majmuk dan implikasi.",
   2:"{n} memahami nilai kebenaran pernyataan majmuk \"dan\" serta \"atau\", dan dapat mengenal pasti antejadian serta akibat dalam implikasi. Perlu lebih latihan hujah deduktif dan induktif.",
   3:"{n} boleh melengkapkan hujah deduktif Bentuk I, II dan III, menilai kesahan dan kemunasabahan hujah, serta membuat kesimpulan induktif yang mudah.",
   4:"{n} mampu membina akas, songsangan dan kontrapositif, menentukan nilai kebenarannya, dan mencari contoh penyangkal. Seterusnya, latih menilai kekuatan hujah induktif.",
   5:"{n} dapat membentuk hujah induktif yang kuat daripada pola dan menilai sama ada sesuatu hujah induktif kuat atau lemah. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya mereka dakwaan sendiri, mengujinya dengan hujah induktif, dan menafikannya dengan contoh penyangkal yang sah. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Penaakulan Logik. Cadangan: ulang hentian pertama dengan Rajah 1 dan bezakan ayat yang merupakan pernyataan dengan yang bukan pernyataan bersama rakan sebaya."
  },
  lampiran:{ nilai:R_NILAI, majmuk:R_MAJMUK, hujah:R_HUJAH, imp:R_IMP, induktif:R_INDUKTIF, sangkal:R_SANGKAL },
  aras:ARAS
};
