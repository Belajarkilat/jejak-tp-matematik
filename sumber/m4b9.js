/* Sumber kandungan — Matematik KSSM Tingkatan 4, Bab 9 Kebarangkalian Peristiwa Bergabung.
   Fail ini disunting tangan. Jalankan `node bina.js m4b9`.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 4
   dan 5, muka 71 (dskp/matematik-t4-t5.pdf). DSKP menulis enam tahap penuh.
   Rumus ikut DSKP: P(A ∩ B) = P(A) × P(B) bagi peristiwa tak bersandar;
   P(A ∪ B) = P(A) + P(B) − P(A ∩ B), dengan P(A ∩ B) = 0 bagi peristiwa saling eksklusif.

   Semua kebarangkalian dikira dengan penyenaraian kesudahan di bawah (bebas daripada widget)
   dan pecahan dipermudah dengan FSB. Rajah: widget t4bergabung (widget-m4b9.js). */

const fsb = (a, b) => b ? fsb(b, a % b) : a;
const pc = (n, d) => { if (n === 0) return "0"; if (n === d) return "1"; const g = fsb(n, d); return (n / g) + "/" + (d / g); };
const D = [1, 2, 3, 4, 5, 6], S4 = [1, 2, 3, 4];
const pasangan = (X, Y) => X.flatMap(x => Y.map(y => [x, y]));
const kira2 = (X, Y, f) => pasangan(X, Y).filter(([x, y]) => f(x, y)).length;
const bul = (x, d) => Math.round(x * Math.pow(10, d)) / Math.pow(10, d);
const perdana = x => { if (x < 2) return false; for (let d = 2; d * d <= x; d++) if (x % d === 0) return false; return true; };
const K20 = Array.from({ length: 20 }, (_, i) => i + 1);
const nKad = f => K20.filter(f).length;

const SPI = [
"Mempamerkan pengetahuan asas tentang peristiwa bergabung.",
"Mempamerkan kefahaman tentang kebarangkalian peristiwa bergabung.",
"Mengaplikasikan kefahaman tentang kebarangkalian peristiwa bergabung untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran tentang kebarangkalian peristiwa bergabung dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran tentang kebarangkalian peristiwa bergabung dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran tentang kebarangkalian peristiwa bergabung dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran ---------- */
const iw = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t4bergabung", kapsyen, alt }, extra);
const L6 = D.map(String), L4 = S4.map(String);
const R1 = iw("Rajah 1 · Sekeping syiling dilambung dan sebiji dadu dibaling. Pilih peristiwa.",
  "Rajah interaktif jadual ruang sampel syiling dan dadu dengan dua belas kesudahan; cip memilih A, B, A ∩ B, A ∪ B atau A′ dan kesudahan diserlahkan",
  { mod: "jadual", baris: ["K", "E"], lajur: L6, A: "rK", B: "cGenap", lblA: "mendapat kepala (K)", lblB: "mendapat nombor genap", namaBaris: "Syiling", namaLajur: "Dadu" });
const R2 = iw("Rajah 1 · Dua biji dadu dibaling. A: dadu pertama genap, B: dadu kedua lebih daripada 4.",
  "Rajah interaktif jadual ruang sampel dua dadu dengan tiga puluh enam kesudahan; cip memilih peristiwa dan rajah membandingkan P(A ∩ B) dengan P(A) × P(B)",
  { mod: "jadual", baris: L6, lajur: L6, A: "rGenap", B: "cLebih4", lblA: "dadu pertama genap", lblB: "dadu kedua lebih daripada 4", namaBaris: "Dadu 1", namaLajur: "Dadu 2" });
const R3 = iw("Rajah 1 · Beg berisi 5 guli merah (M) dan 3 guli biru (B). Dua biji dicabut satu demi satu.",
  "Rajah interaktif gambar rajah pokok dua cabutan guli dengan atau tanpa pemulangan; cip memilih jenis cabutan dan peristiwa, laluan yang berkaitan diserlahkan",
  { mod: "pokok", beg: [{ w: "merah", n: 5, h: "M" }, { w: "biru", n: 3, h: "B" }],
    peristiwa: [{ nama: "MM", laluan: ["MM"] }, { nama: "Sama warna", laluan: ["MM", "BB"] }, { nama: "Warna berbeza", laluan: ["MB", "BM"] }, { nama: "≥ 1 merah", laluan: ["MM", "MB", "BM"] }] });
const R4 = iw("Rajah 1 · Sekeping kad dipilih secara rawak daripada kad bernombor 1 hingga 20.",
  "Rajah interaktif gambar rajah Venn bagi empat pasangan peristiwa pada kad 1 hingga 20; cip memilih pasangan dan rajah menunjukkan sama ada peristiwa saling eksklusif",
  { mod: "venn", N: 20, pasangan: [{ A: "gandaan3", B: "gandaan4", lblA: "gandaan 3", lblB: "gandaan 4" }, { A: "perdana", B: "kuasaDua", lblA: "nombor perdana", lblB: "nombor kuasa dua sempurna" }, { A: "faktor24", B: "ganjil", lblA: "faktor bagi 24", lblB: "nombor ganjil" }, { A: "genap", B: "gandaan4", lblA: "nombor genap", lblB: "gandaan 4" }] });
const R5 = iw("Rajah 1 · Ali menduduki tiga ujian. Kira dahulu, kemudian semak dengan rajah pokok.",
  "Rajah interaktif gambar rajah pokok tiga peristiwa tak bersandar, iaitu lulus Matematik, Sains dan Sejarah, dengan lapan kesudahan dalam mod cabar",
  { mod: "pokok3", cabar: true, peristiwa: [{ nama: "lulus Matematik", h: "M", hBukan: "m", p: 0.8 }, { nama: "lulus Sains", h: "S", hBukan: "s", p: 0.7 }, { nama: "lulus Sejarah", h: "J", hBukan: "j", p: 0.9 }],
    pilihan: [{ nama: "Lulus semua", uji: "semua" }, { nama: "Gagal semua", uji: "tiada" }, { nama: "Tepat dua lulus", uji: "tepat2" }, { nama: "≥ 2 lulus", uji: "sekurang2" }, { nama: "MSj", uji: "MSj" }] });
const R6 = iw("Rajah 1 · Dua pemutar bernombor 1 hingga 4. Aina mendapat mata jika A berlaku, Ben jika B berlaku.",
  "Rajah interaktif jadual ruang sampel dua pemutar dengan enam belas kesudahan; A ialah jumlah genap dan B ialah hasil darab lebih daripada 6",
  { mod: "jadual", baris: L4, lajur: L4, A: "jumlahGenap", B: "darabLebih6", lblA: "jumlah dua nombor genap", lblB: "hasil darab lebih daripada 6", namaBaris: "Pemutar 1", namaLajur: "Pemutar 2" });

/* nilai pokok */
const pokok = (pulang, L) => { const B = { M: 5, B: 3 }, N = 8; const p = k => B[k[0]] * (B[k[1]] - (!pulang && k[0] === k[1] ? 1 : 0)); const d = N * (pulang ? N : N - 1); return pc(L.reduce((j, k) => j + p(k), 0), d); };
const ali = (uji) => { const p = [0.8, 0.7, 0.9]; let j = 0; for (let m = 0; m < 8; m++) { const ya = [0, 1, 2].map(i => !(m & (1 << (2 - i)))); const n = ya.filter(Boolean).length; const pr = ya.reduce((q, y, i) => q * (y ? p[i] : 1 - p[i]), 1); if (uji(n, ya)) j += pr; } return bul(j, 4); };

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Meja Syiling", sk:"9.1.1 Peristiwa bergabung dan penyenaraian kesudahan", lampiran:"r1",
 kadNama:"Peristiwa Bergabung", kadEm:"\u{1FA99}", kadFakta:"Peristiwa bergabung ialah gabungan dua atau lebih peristiwa, daripada satu atau lebih eksperimen. Kesudahannya boleh ditulis sebagai pasangan tertib.",
 bosKadNama:"Pasangan Tertib", bosKadEm:"\u{1F522}", bosKadFakta:"Dalam pasangan tertib (K, 2), kesudahan eksperimen pertama ditulis dahulu, diikuti kesudahan eksperimen kedua.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah bilangan kesudahan dalam ruang sampel?",tol:0.01,b:12,u:"2 kesudahan syiling × 6 kesudahan dadu = 12.",kira:()=>2*6},
 {j:"pilih",t:"Dalam Rajah 1, pilih A ∩ B. Peristiwa \"kepala dan nombor genap\" ialah:",p:["{(K, 2), (K, 4), (K, 6)}","{(K, 2), (E, 4), (K, 6)}","{(2, K), (4, K), (6, K)}","{(K, 1), (K, 3), (K, 5)}"],b:0,u:"Kepala (K) dipasangkan dengan nombor genap 2, 4 dan 6. Kesudahan syiling ditulis dahulu."},
 {j:"pilih",t:"Dalam Rajah 1, pilih A ∩ B. Kebarangkalian P(A ∩ B) ialah:",p:["1/4","1/12","5/12","7/12"],b:0,u:"3 daripada 12 kesudahan: 3/12 = 1/4.",kira:()=>pc(3,12)==="1/4"},
 {j:"pilih",t:"Peristiwa bergabung ialah:",p:["Gabungan dua atau lebih peristiwa","Satu peristiwa yang mustahil berlaku","Peristiwa yang berlaku dua kali berturut-turut","Peristiwa yang tidak mempunyai kesudahan"],b:0,u:"Menurut DSKP, peristiwa bergabung terhasil daripada gabungan peristiwa, sama ada daripada satu atau lebih eksperimen."},
 {j:"nombor",t:"Dalam Rajah 1, pilih A ∪ B. Berapakah bilangan kesudahan dalam A ∪ B?",tol:0.01,b:9,u:"A mempunyai 6 kesudahan, B mempunyai 6, dan 3 dikira dua kali. 6 + 6 − 3 = 9.",kira:()=>6+6-3},
 {j:"pilih",t:"Dalam Rajah 1, kesudahan (E, 5) termasuk dalam:",p:["A′ ∩ B′","A ∩ B","A ∩ B′","A′ ∩ B"],b:0,u:"E bukan kepala (A′) dan 5 bukan genap (B′), jadi (E, 5) berada dalam A′ ∩ B′."},
 {j:"nombor",t:"Dua keping syiling dilambung serentak. Berapakah bilangan kesudahan dalam ruang sampel?",tol:0.01,b:4,u:"2 × 2 = 4 kesudahan: KK, KE, EK dan EE.",kira:()=>2*2},
 {j:"pilih",t:"Senarai kesudahan apabila dua keping syiling dilambung ialah:",p:["{KK, KE, EK, EE}","{KK, KE, EE}","{K, E}","{KE, EK}"],b:0,u:"KE dan EK ialah dua kesudahan berbeza kerana syiling pertama dan kedua dibezakan."}],
 bos:{j:"banyak",t:"Berdasarkan Rajah 1, pilih SEMUA kesudahan dalam peristiwa \"ekor dan nombor lebih daripada 4\".",p:["(E, 5)","(E, 6)","(K, 5)","(E, 4)","(K, 6)","(E, 3)"],b:[0,1],u:"Ekor (E) dengan 5 atau 6. (K, 5) dan (K, 6) ialah kepala, manakala 4 dan 3 tidak lebih daripada 4."}},

{n:2, tempat:"Gelanggang Dadu", sk:"9.2.1 / 9.2.2 Peristiwa bersandar dan tak bersandar; konjektur rumus", lampiran:"r2",
 kadNama:"Tak Bersandar", kadEm:"\u{1F3B2}", kadFakta:"Dua peristiwa dikatakan tak bersandar jika berlakunya satu peristiwa tidak mempengaruhi kebarangkalian peristiwa yang lain. Maka P(A ∩ B) = P(A) × P(B).",
 bosKadNama:"Darab Berulang", bosKadEm:"\u{1F501}", bosKadFakta:"Bagi tiga peristiwa tak bersandar, P(A ∩ B ∩ C) = P(A) × P(B) × P(C).",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih A. Kebarangkalian P(A) ialah:",p:["1/2","1/12","5/12","1/18"],b:0,u:"18 daripada 36 kesudahan mempunyai dadu pertama genap: 18/36 = 1/2.",kira:()=>pc(kira2(D,D,(x)=>x%2===0),36)==="1/2"},
 {j:"pilih",t:"Dalam Rajah 1, pilih B. Kebarangkalian P(B) ialah:",p:["1/3","1/2","1/6","2/3"],b:0,u:"Dadu kedua 5 atau 6: 12 daripada 36 kesudahan, iaitu 1/3.",kira:()=>pc(kira2(D,D,(x,y)=>y>4),36)==="1/3"},
 {j:"pilih",t:"Dalam Rajah 1, pilih A ∩ B. Berapakah kebarangkalian dadu pertama genap dan dadu kedua lebih daripada 4?",p:["1/6","1/2","5/6","1/12"],b:0,u:"6 daripada 36 kesudahan: (2, 5), (2, 6), (4, 5), (4, 6), (6, 5), (6, 6). 6/36 = 1/6.",kira:()=>pc(kira2(D,D,(x,y)=>x%2===0&&y>4),36)==="1/6"},
 {j:"pilih",t:"Peristiwa A dan B dalam Rajah 1 ialah peristiwa tak bersandar kerana:",p:["Dadu pertama tidak mempengaruhi dadu kedua","A dan B tidak boleh berlaku serentak","Nilai P(A) sama dengan nilai P(B)","Kedua-dua dadu dibaling oleh orang yang sama"],b:0,u:"Keputusan satu dadu tidak mengubah kebarangkalian keputusan dadu yang lain. A dan B boleh berlaku serentak, jadi mereka bukan saling eksklusif."},
 {j:"pilih",t:"Konjektur: \"P(A ∩ B) = P(A) × P(B) bagi Rajah 1.\" Tentusahkan konjektur ini.",p:["Benar: 1/2 × 1/3 = 1/6","Palsu: 1/2 + 1/3 = 5/6","Benar: 1/2 × 1/3 = 1/5","Palsu: P(A ∩ B) = 1/3"],b:0,u:"Rajah 1 menunjukkan P(A ∩ B) = 6/36 = 1/6, dan P(A) × P(B) = 1/2 × 1/3 = 1/6. Konjektur itu benar.",kira:()=>kira2(D,D,(x,y)=>x%2===0&&y>4)*36===kira2(D,D,(x)=>x%2===0)*kira2(D,D,(x,y)=>y>4)},
 {j:"pilih",t:"Antara situasi berikut, yang manakah melibatkan peristiwa bersandar?",p:["Mengambil dua biji guli satu demi satu tanpa pemulangan","Melambung syiling kemudian membaling dadu","Membaling sebiji dadu sebanyak dua kali","Memutar pemutar kemudian melambung syiling"],b:0,u:"Tanpa pemulangan, cabutan pertama mengubah isi beg, jadi kebarangkalian cabutan kedua bergantung pada cabutan pertama."},
 {j:"nombor",t:"Dalam Rajah 1, pilih A ∪ B. Berapakah bilangan kesudahan dua dadu itu yang berada dalam A ∪ B?",tol:0.01,b:24,u:"18 + 12 − 6 = 24 kesudahan.",kira:()=>kira2(D,D,(x,y)=>x%2===0||y>4)},
 {j:"pilih",t:"Dua biji dadu dibaling. Kebarangkalian kedua-dua dadu menunjukkan nombor yang sama ialah:",p:["1/6","1/36","1/12","5/36"],b:0,u:"Pasangan sama: (1, 1), (2, 2), ..., (6, 6), iaitu 6 daripada 36 kesudahan = 1/6.",kira:()=>pc(kira2(D,D,(x,y)=>x===y),36)==="1/6"}],
 bos:{j:"pilih",t:"Sebiji dadu dibaling tiga kali. Kebarangkalian mendapat nombor 6 pada setiap balingan ialah:",p:["1/216","1/18","1/2","1/36"],b:0,u:"Balingan tak bersandar: 1/6 × 1/6 × 1/6 = 1/216.",kira:()=>pc(1,6*6*6)==="1/216"}},

{n:3, tempat:"Beg Guli", sk:"9.2.3 Kebarangkalian peristiwa bersandar dan tak bersandar (gambar rajah pokok)", lampiran:"r3",
 kadNama:"Dengan Pemulangan", kadEm:"\u{1F504}", kadFakta:"Jika guli dikembalikan, isi beg tidak berubah dan cabutan kedua tidak bersandar pada cabutan pertama.",
 bosKadNama:"Tanpa Pemulangan", bosKadEm:"\u{1F6AB}", bosKadFakta:"Jika guli tidak dikembalikan, jumlah guli berkurang satu, jadi kebarangkalian cabutan kedua bergantung pada cabutan pertama (bersandar).",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih Dengan pemulangan dan MM. Kebarangkalian kedua-dua guli merah ialah:",p:["25/64","5/14","5/8","10/64"],b:0,u:"5/8 × 5/8 = 25/64.",kira:()=>pokok(true,["MM"])==="25/64"},
 {j:"pilih",t:"Dalam Rajah 1, pilih Tanpa pemulangan dan MM. Kebarangkalian kedua-dua guli merah ialah:",p:["5/14","25/64","5/8","4/7"],b:0,u:"5/8 × 4/7 = 20/56 = 5/14.",kira:()=>pokok(false,["MM"])==="5/14"},
 {j:"pilih",t:"Dalam Rajah 1, mengapakah pecahan pada cabang kedua berubah bagi cabutan tanpa pemulangan?",p:["Guli pertama tidak dikembalikan, jadi jumlah guli berkurang","Bilangan guli bertambah selepas cabutan pertama","Guli biru lebih mudah dicabut daripada guli merah","Cabutan kedua dilakukan oleh orang yang lain"],b:0,u:"Selepas satu guli merah dicabut, tinggal 4 merah dalam 7 guli, jadi kebarangkalian merah menjadi 4/7."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Tanpa pemulangan dan Warna berbeza. Kebarangkaliannya ialah:",p:["15/28","15/56","15/32","13/28"],b:0,u:"P(MB) + P(BM) = 15/56 + 15/56 = 30/56 = 15/28.",kira:()=>pokok(false,["MB","BM"])==="15/28"},
 {j:"pilih",t:"Dalam Rajah 1, pilih Dengan pemulangan dan Sama warna. Kebarangkaliannya ialah:",p:["17/32","13/28","34/56","9/64"],b:0,u:"P(MM) + P(BB) = 25/64 + 9/64 = 34/64 = 17/32.",kira:()=>pokok(true,["MM","BB"])==="17/32"},
 {j:"pilih",t:"Bagi cabutan tanpa pemulangan dalam Rajah 1, peristiwa cabutan pertama dan cabutan kedua ialah:",p:["Bersandar","Tak bersandar","Saling eksklusif","Pelengkap"],b:0,u:"Kebarangkalian cabutan kedua bergantung pada keputusan cabutan pertama."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Tanpa pemulangan dan ≥ 1 merah. Kebarangkaliannya ialah:",p:["25/28","55/64","3/28","5/14"],b:0,u:"Cara pantas: 1 − P(BB) = 1 − 3/8 × 2/7 = 1 − 6/56 = 50/56 = 25/28.",kira:()=>pokok(false,["MM","MB","BM"])==="25/28"},
 {j:"pilih",t:"Hasil tambah kebarangkalian semua laluan dalam suatu gambar rajah pokok ialah:",p:["1","0","0.5","Bergantung pada isi beg"],b:0,u:"Laluan-laluan itu meliputi semua kesudahan yang mungkin, jadi jumlahnya 1. Semak: 20/56 + 15/56 + 15/56 + 6/56 = 1.",kira:()=>pokok(false,["MM","MB","BM","BB"])==="1"}],
 bos:{j:"pilih",t:"Sebuah kotak mengandungi 4 batang pen hitam dan 2 batang pen merah. Dua batang pen diambil satu demi satu tanpa pemulangan. Kebarangkalian kedua-duanya pen merah ialah:",p:["1/15","1/9","1/3","2/15"],b:0,u:"2/6 × 1/5 = 2/30 = 1/15. Jawapan 1/9 ialah bagi cabutan dengan pemulangan.",kira:()=>pc(2*1,6*5)==="1/15"}},

{n:4, tempat:"Dewan Kad", sk:"9.3.1 – 9.3.3 Peristiwa saling eksklusif dan tidak saling eksklusif", lampiran:"r4",
 kadNama:"Saling Eksklusif", kadEm:"\u{1F6A6}", kadFakta:"Peristiwa saling eksklusif tidak boleh berlaku serentak: A ∩ B = ∅. Maka P(A ∪ B) = P(A) + P(B).",
 bosKadNama:"Rumus Atau", bosKadEm:"\u{2795}", bosKadFakta:"Bagi sebarang dua peristiwa, P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Persilangan ditolak kerana dikira dua kali.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih Pasangan 1. Adakah A dan B saling eksklusif?",p:["Tidak, kerana 12 berada dalam A dan B","Ya, kerana A dan B tiada unsur sepunya","Ya, kerana bilangan unsur A dan B berbeza","Tidak, kerana jumlah unsur A dan B ialah 11"],b:0,u:"12 ialah gandaan 3 dan gandaan 4, jadi A ∩ B = {12} ≠ ∅.",kira:()=>12%3===0&&12%4===0},
 {j:"pilih",t:"Dalam Rajah 1, pilih Pasangan 1. P(A ∪ B) ialah:",p:["1/2","11/20","9/20","1/20"],b:0,u:"P(A ∪ B) = 6/20 + 5/20 − 1/20 = 10/20 = 1/2.",kira:()=>pc(nKad(x=>x%3===0||x%4===0),20)==="1/2"},
 {j:"pilih",t:"Dalam Rajah 1, pilih Pasangan 2. P(A ∪ B) ialah:",p:["3/5","1/2","2/5","1/5"],b:0,u:"Tiada nombor perdana yang kuasa dua sempurna, jadi saling eksklusif: 8/20 + 4/20 = 12/20 = 3/5.",kira:()=>pc(nKad(x=>perdana(x)||Number.isInteger(Math.sqrt(x))),20)==="3/5"&&nKad(x=>perdana(x)&&Number.isInteger(Math.sqrt(x)))===0},
 {j:"pilih",t:"Bagi dua peristiwa saling eksklusif A dan B, P(A ∪ B) ialah:",p:["P(A) + P(B)","P(A) × P(B)","P(A) + P(B) − 1","P(A) − P(B)"],b:0,u:"P(A ∩ B) = 0, jadi rumus P(A) + P(B) − P(A ∩ B) menjadi P(A) + P(B)."},
 {j:"pilih",t:"Dalam Rajah 1, pilih Pasangan 3. P(A ∪ B) ialah:",p:["3/4","17/20","7/20","1/2"],b:0,u:"Faktor 24 (1, 2, 3, 4, 6, 8, 12) ada 7, nombor ganjil ada 10, dan sepunya 1 dan 3. (7 + 10 − 2)/20 = 15/20 = 3/4.",kira:()=>pc(nKad(x=>24%x===0||x%2===1),20)==="3/4"},
 {j:"pilih",t:"Dalam Rajah 1, pilih Pasangan 4. Mengapakah A ∩ B = B?",p:["Setiap gandaan 4 ialah nombor genap","Setiap nombor genap ialah gandaan 4","A dan B saling eksklusif","Bilangan unsur A sama dengan B"],b:0,u:"B ⊂ A, jadi persilangan A dan B ialah B itu sendiri. Maka P(A ∪ B) = P(A).",kira:()=>K20.filter(x=>x%4===0).every(x=>x%2===0)},
 {j:"nombor",t:"Dalam Rajah 1, pilih Pasangan 4. Berapakah n(A ∪ B)?",tol:0.01,b:10,u:"A ∪ B = A kerana B ⊂ A. Bilangan nombor genap dari 1 hingga 20 ialah 10.",kira:()=>nKad(x=>x%2===0||x%4===0)},
 {j:"pilih",t:"Sekeping kad dipilih daripada kad 1 hingga 20. Kebarangkalian kad itu nombor perdana atau nombor genap ialah:",p:["17/20","9/10","4/5","1/2"],b:0,u:"Perdana: 8, genap: 10, sepunya: {2}. (8 + 10 − 1)/20 = 17/20.",kira:()=>pc(nKad(x=>perdana(x)||x%2===0),20)==="17/20"}],
 bos:{j:"pilih",t:"Diberi P(A) = 0.5, P(B) = 0.3 dan P(A ∪ B) = 0.65. Cari P(A ∩ B).",p:["0.15","0.8","0.35","0.2"],b:0,u:"0.65 = 0.5 + 0.3 − P(A ∩ B), jadi P(A ∩ B) = 0.15. A dan B tidak saling eksklusif.",kira:()=>bul(0.5+0.3-0.65,2)===0.15}},

{n:5, tempat:"Dewan Peperiksaan", sk:"9.2.3 Gabungan lebih daripada dua peristiwa (rutin kompleks)", lampiran:"r5",
 kadNama:"Tiga Peristiwa", kadEm:"\u{1F9EA}", kadFakta:"Gambar rajah pokok tiga peristiwa (dua kesudahan setiap satu) mempunyai 2 × 2 × 2 = 8 laluan. Darab kebarangkalian sepanjang setiap laluan.",
 bosKadNama:"Pelengkap Pantas", bosKadEm:"\u{26A1}", bosKadFakta:"P(sekurang-kurangnya satu) = 1 − P(tiada langsung). Cara ini lebih pantas daripada menjumlahkan tujuh laluan.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, berapakah kebarangkalian Ali lulus ketiga-tiga ujian? Kira dahulu.",tol:0.0005,b:0.504,u:"0.8 × 0.7 × 0.9 = 0.504.",kira:()=>ali(n=>n===3)},
 {j:"nombor",t:"Dalam Rajah 1, berapakah kebarangkalian Ali gagal ketiga-tiga ujian?",tol:0.0005,b:0.006,u:"0.2 × 0.3 × 0.1 = 0.006.",kira:()=>ali(n=>n===0)},
 {j:"nombor",t:"Dalam Rajah 1, berapakah kebarangkalian Ali lulus tepat dua ujian?",tol:0.0005,b:0.398,u:"MSj + MsJ + mSJ = 0.056 + 0.216 + 0.126 = 0.398.",kira:()=>ali(n=>n===2)},
 {j:"nombor",t:"Dalam Rajah 1, berapakah kebarangkalian Ali lulus sekurang-kurangnya dua ujian?",tol:0.0005,b:0.902,u:"Tepat dua + tepat tiga = 0.398 + 0.504 = 0.902.",kira:()=>ali(n=>n>=2)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah kebarangkalian Ali lulus sekurang-kurangnya satu ujian?",tol:0.0005,b:0.994,u:"1 − P(gagal semua) = 1 − 0.006 = 0.994.",kira:()=>ali(n=>n>=1)},
 {j:"pilih",t:"Mengapakah kebarangkalian didarab sepanjang setiap laluan dalam Rajah 1?",p:["Peristiwa tak bersandar: P(A ∩ B) = P(A) × P(B)","Peristiwa saling eksklusif: kebarangkalian ditambah","Kebarangkalian perlu menjadi lebih kecil daripada 1","Rajah pokok itu mempunyai tiga peringkat cabang"],b:0,u:"Keputusan satu ujian tidak mempengaruhi ujian lain, jadi kebarangkalian sepanjang laluan didarab. Laluan yang berlainan saling eksklusif dan dijumlahkan."},
 {j:"nombor",t:"Berapakah bilangan laluan (kesudahan) dalam gambar rajah pokok bagi tiga peristiwa yang masing-masing mempunyai dua kesudahan?",tol:0.01,b:8,u:"2 × 2 × 2 = 8.",kira:()=>2*2*2},
 {j:"nombor",t:"Dalam Rajah 1, pilih MSj. Berapakah kebarangkalian Ali lulus Matematik dan Sains tetapi gagal Sejarah?",tol:0.0005,b:0.056,u:"0.8 × 0.7 × 0.1 = 0.056.",kira:()=>ali((n,ya)=>ya[0]&&ya[1]&&!ya[2])}],
 bos:{j:"nombor",t:"Seorang pemanah mengenai sasaran dengan kebarangkalian 0.6 bagi setiap anak panah, secara tak bersandar. Dia melepaskan tiga anak panah. Berapakah kebarangkalian sekurang-kurangnya satu anak panah mengenai sasaran?",tol:0.0005,b:0.936,u:"1 − P(tiada yang mengenai) = 1 − 0.4 × 0.4 × 0.4 = 1 − 0.064 = 0.936.",kira:()=>bul(1-Math.pow(0.4,3),3)}},

{n:6, tempat:"Arked Permainan", sk:"9.4.1 Masalah kebarangkalian peristiwa bergabung (bukan rutin)", lampiran:"r6",
 kadNama:"Permainan Adil", kadEm:"\u{1F3AE}", kadFakta:"Permainan dikatakan adil jika setiap pemain mempunyai kebarangkalian menang yang sama.",
 bosKadNama:"Pereka Permainan", bosKadEm:"\u{1F3B2}", bosKadFakta:"Untuk mereka permainan adil, senaraikan ruang sampel dahulu, kemudian pilih peraturan supaya bilangan kesudahan menang setiap pemain sama.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih A. Berapakah kebarangkalian jumlah dua nombor pemutar itu genap?",p:["1/2","3/8","1/4","5/8"],b:0,u:"Jumlah genap berlaku apabila kedua-dua nombor genap atau kedua-duanya ganjil: 8 daripada 16 = 1/2.",kira:()=>pc(kira2(S4,S4,(x,y)=>(x+y)%2===0),16)==="1/2"},
 {j:"pilih",t:"Dalam Rajah 1, pilih B. Berapakah kebarangkalian hasil darab dua nombor pemutar itu lebih daripada 6?",p:["3/8","1/2","1/4","3/16"],b:0,u:"Hasil darab lebih daripada 6: (2, 4), (3, 3), (3, 4), (4, 2), (4, 3), (4, 4). 6/16 = 3/8.",kira:()=>pc(kira2(S4,S4,(x,y)=>x*y>6),16)==="3/8"},
 {j:"pilih",t:"Dalam Rajah 1, adakah A dan B saling eksklusif?",p:["Tidak, kerana (3, 3) memenuhi kedua-duanya","Ya, kerana A dan B tiada kesudahan sepunya","Ya, kerana P(A) tidak sama dengan P(B)","Tidak, kerana P(A) + P(B) = 1"],b:0,u:"(3, 3) mempunyai jumlah 6 (genap) dan hasil darab 9 (lebih daripada 6), jadi A ∩ B ≠ ∅.",kira:()=>(3+3)%2===0&&3*3>6},
 {j:"pilih",t:"Dalam Rajah 1, pilih A ∪ B. Kebarangkalian P(A ∪ B) ialah:",p:["5/8","7/8","1/2","3/4"],b:0,u:"P(A ∪ B) = 8/16 + 6/16 − 4/16 = 10/16 = 5/8.",kira:()=>pc(kira2(S4,S4,(x,y)=>(x+y)%2===0||x*y>6),16)==="5/8"},
 {j:"pilih",t:"Aina mendapat 1 mata jika A berlaku dan Ben mendapat 1 mata jika B berlaku. Adakah permainan ini adil?",p:["Tidak adil, kerana P(A) = 1/2 lebih besar daripada P(B) = 3/8","Adil, kerana kedua-dua pemain boleh mendapat mata","Adil, kerana P(A ∩ B) = 1/4 bagi kedua-duanya","Tidak adil, kerana P(B) lebih besar daripada P(A)"],b:0,u:"Kebarangkalian mendapat mata tidak sama, jadi Aina lebih berpeluang menang."},
 {j:"pilih",t:"Peraturan Ben ditukar supaya permainan menjadi adil. Peraturan manakah yang sesuai?",p:["Hasil darab lebih daripada 4","Hasil darab ialah nombor genap","Jumlah lebih daripada 5","Kedua-dua nombor adalah sama"],b:0,u:"Hasil darab lebih daripada 4 berlaku dalam 8 daripada 16 kesudahan, iaitu 1/2, sama dengan P(A). Pilihan lain: 3/4, 3/8 dan 1/4.",kira:()=>kira2(S4,S4,(x,y)=>x*y>4)===8&&kira2(S4,S4,(x,y)=>x*y%2===0)===12&&kira2(S4,S4,(x,y)=>x+y>5)===6},
 {j:"nombor",t:"Jika permainan dalam Rajah 1 dimainkan sebanyak 80 kali, berapakah jangkaan bilangan kali peristiwa A berlaku?",tol:0.01,b:40,u:"Jangkaan = P(A) × bilangan percubaan = 1/2 × 80 = 40.",kira:()=>80*kira2(S4,S4,(x,y)=>(x+y)%2===0)/16},
 {j:"nombor",t:"Dalam Rajah 1, berapakah bilangan kesudahan yang tidak memberi mata kepada sesiapa (bukan A dan bukan B)?",tol:0.01,b:6,u:"n(A ∪ B) = 10, jadi n((A ∪ B)′) = 16 − 10 = 6.",kira:()=>16-kira2(S4,S4,(x,y)=>(x+y)%2===0||x*y>6)}],
 bos:{j:"buka",
  t:"Reka satu permainan untuk dua pemain menggunakan dua alat rawak (contohnya dadu, syiling atau pemutar) yang adil bagi kedua-dua pemain.",
  arahan:"Senaraikan ruang sampel dengan jadual atau gambar rajah pokok. Tulis peraturan menang setiap pemain dan tunjukkan bahawa kebarangkalian menang mereka sama. Nyatakan sama ada peristiwa menang kedua-dua pemain saling eksklusif, dan terangkan bagaimana mengubah satu peraturan boleh menjadikan permainan tidak adil.",
  u:"Jawapan TP6 yang kukuh mempunyai ruang sampel lengkap, peraturan yang jelas, kebarangkalian menang yang dikira dengan betul dan sama, penaakulan tentang saling eksklusif, serta contoh perubahan peraturan yang disokong dengan pengiraan."}}
];

module.exports = {
  id:"m4b9", tingkatan:4, kod:"9.0 Kebarangkalian Peristiwa Bergabung",
  tajuk:"Pesta Peluang",
  subtajuk:"Matematik Ting. 4 · Bab 9 Kebarangkalian Peristiwa Bergabung",
  spi:SPI,
  ulasan:{
   1:"{n} dapat memerihalkan peristiwa bergabung dan menyenaraikan kesudahannya sebagai pasangan tertib. Langkah seterusnya ialah membezakan peristiwa bersandar dan tak bersandar.",
   2:"{n} memahami perbezaan peristiwa bersandar dan tak bersandar serta menentusahkan rumus P(A ∩ B) = P(A) × P(B). Perlu lebih latihan dengan gambar rajah pokok.",
   3:"{n} boleh menentukan kebarangkalian peristiwa bergabung dengan gambar rajah pokok bagi cabutan dengan dan tanpa pemulangan.",
   4:"{n} mampu membezakan peristiwa saling eksklusif dan tidak saling eksklusif, serta menggunakan P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Seterusnya, latih gabungan lebih daripada dua peristiwa.",
   5:"{n} dapat menyelesaikan masalah rutin yang kompleks melibatkan tiga peristiwa tak bersandar, termasuk menggunakan peristiwa pelengkap. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya mereka permainan adil dengan ruang sampel yang lengkap dan membuktikan keadilannya dengan kebarangkalian. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kebarangkalian Peristiwa Bergabung. Cadangan: ulang hentian pertama dengan Rajah 1 dan senaraikan semua kesudahan melambung syiling dan membaling dadu bersama rakan sebaya."
  },
  lampiran:{ r1:R1, r2:R2, r3:R3, r4:R4, r5:R5, r6:R6 },
  aras:ARAS
};
