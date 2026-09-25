/* Sumber kandungan — Matematik KSSM Tingkatan 1, Bab 11 Pengenalan Set.
   Fail ini disunting tangan. Jalankan `node bina.js m1b11` untuk menyemaknya
   dan menghasilkan bank-m1b11.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi (SPI): DSKP KSSM Matematik Tingkatan 1, muka 75
   (dskp/matematik-t1.pdf) hanya menetapkan TAHAP 1 hingga 3 bagi bab ini,
   dan tiga ayat itu disalin kata demi kata. DSKP tidak menulis Tahap 4 hingga 6
   untuk Pengenalan Set. Tiga tahap tambahan (aras 4, 5, 6 dalam app) mengikut
   corak ayat Tahap 4-6 bagi bab lain dalam DSKP yang sama, supaya setiap hentian
   tetap menyasarkan satu tahap. Standard Pembelajaran (11.1.1 hingga 11.2.5)
   tidak melebihi sukatan: tiada kesatuan, persilangan atau gabungan set.

   Semua senarai unsur, bilangan unsur dan pelengkap dikira dengan kod dalam
   medan `kira` (bebas daripada widget) dan dibandingkan oleh tools/semak-jawapan.js.
   Set semesta bagi Rajah 1 ialah ξ = {1, 2, 3, ..., 12}. */

/* ---------- pembantu bebas (tidak menggunakan widget) ---------- */
const X = Array.from({ length: 12 }, (_, i) => i + 1);
const L = a => a.length ? "{" + a.join(", ") + "}" : "{ }";
const ada = f => X.filter(f);
const komp = a => X.filter(x => a.indexOf(x) < 0);
const perdana = x => { if (x < 2) return false; for (let d = 2; d * d <= x; d++) if (x % d === 0) return false; return true; };
const genap = x => x % 2 === 0;
const sama = (a, b) => JSON.stringify([...new Set(a)].sort((p, q) => p - q)) === JSON.stringify([...new Set(b)].sort((p, q) => p - q));
const gabung = (n, k) => { let r = 1; for (let i = 1; i <= k; i++) r = r * (n - k + i) / i; return Math.round(r); };

const SPI = [
"Mempamerkan pengetahuan asas tentang set.",
"Mempamerkan kefahaman tentang set.",
"Mengaplikasikan kefahaman tentang set.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang set dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang set dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang set dalam konteks penyelesaian masalah bukan rutin."];

/* ---------- lampiran: rajah set interaktif ---------- */

const set = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t1set", kapsyen, alt }, extra);
const R_SET1 = set("Rajah 1 · Pilih set A. Bulatan hijau ialah unsur A dalam ξ = {1, 2, ..., 12}.",
  "Rajah interaktif set A dalam set semesta 1 hingga 12; gelongsor memilih set A dan menunjukkan perihalan, penyenaraian dan bilangan unsur",
  { mod: "sifat", kriteria: ["genap", "ganjil", "perdana", "gandaan3", "faktor12", "kurang6", "lebih8", "kuasa2"] });
const R_SET2 = set("Rajah 1 · Pilih set A dan objek x. Semak sama ada x ialah unsur A.",
  "Rajah interaktif set A dalam set semesta 1 hingga 12; gelongsor memilih set A dan objek x serta menunjukkan x ialah unsur atau bukan unsur A",
  { mod: "sifat", unsur: true, kriteria: ["genap", "perdana", "faktor12", "gandaan13", "gk9", "go6", "gandaan4"] });
const R_SET3 = set("Rajah 1 · A = {2, 4, 6, 8}. Pilih set B dan bandingkan dengan A.",
  "Rajah interaktif membandingkan set A = {2, 4, 6, 8} dengan enam set B; gelongsor memilih B dan menunjukkan sama atau tidak sama",
  { mod: "sama", kriteria: ["gk9"], calon: [
    { t: "{2, 4, 6, 8}", a: [2, 4, 6, 8] }, { t: "{8, 6, 4, 2}", a: [8, 6, 4, 2] }, { t: "{2, 2, 4, 6, 8}", a: [2, 2, 4, 6, 8] },
    { t: "{2, 4, 6}", a: [2, 4, 6] }, { t: "{1, 2, 4, 6, 8}", a: [1, 2, 4, 6, 8] }, { t: "{ }", a: [] }] });
const R_SET4 = set("Rajah 1 · Bayangkan dahulu nombor mana di dalam bulatan A, kemudian semak dengan rajah.",
  "Rajah Venn interaktif dengan set semesta 1 hingga 12; gelongsor memilih set A dan menyusun nombor di dalam bulatan A atau di luar sebagai pelengkap A'",
  { mod: "venn", cabar: true, kriteria: ["gandaan3", "genap", "perdana", "lebih8", "kuasa2", "faktor10", "kurang6"] });
const R_SET5 = set("Rajah 1 · A = {2, 4, 6}. Cuba setiap subset B, kemudian semak dengan rajah.",
  "Rajah Venn interaktif subset bagi A = {2, 4, 6}; gelongsor memilih salah satu daripada lapan subset dan melukis B di dalam A",
  { mod: "subset", cabar: true, A: [2, 4, 6] });
const R_SET6 = set("Rajah 1 · ξ = {1, 2, ..., 8} dan A = {1, 3, 5, 7}. Pilih subset B dalam A.",
  "Rajah Venn dengan set semesta 1 hingga 8, set A = {1, 3, 5, 7} dan unsur di luar A; gelongsor memilih subset B di dalam A",
  { mod: "subset", A: [1, 3, 5, 7], luar: [2, 4, 6, 8] });

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Kelab Sorok", sk:"11.1.1 / 11.1.2 Maksud set, perihalan dan penyenaraian", lampiran:"set1",
 kadNama:"Ahli Set", kadEm:"\u{1F465}", kadFakta:"Objek dalam set dipanggil unsur. Unsur boleh apa sahaja: nombor, huruf, warna atau nama murid dalam kelas.",
 bosKadNama:"Set Kosong", bosKadEm:"\u{1F573}\u{FE0F}", bosKadFakta:"Set kosong tiada unsur langsung dan ditulis { } atau ∅. Contohnya set hari dalam seminggu yang bermula dengan huruf X.",
 soalan:[
 {j:"pilih",t:"Antara yang berikut, yang manakah ialah satu set?",p:["Semua huruf dalam perkataan 'BUNGA'","Murid yang paling hensem dalam kelas","Nombor yang cantik pada mata awak","Buah-buahan yang sedap dimakan"],b:0,u:"Set ialah koleksi objek yang jelas. Kita boleh tentukan dengan pasti sama ada sesuatu objek ahli atau bukan. Hensem, cantik dan sedap bergantung pada pendapat, jadi tidak jelas."},
 {j:"pilih",t:"Setiap objek dalam sesuatu set dipanggil:",p:["Unsur","Subset set itu","Set semesta","Pelengkap set"],b:0,u:"Objek yang menjadi ahli set dipanggil unsur."},
 {j:"pilih",t:"Set A = {2, 4, 6, 8, 10, 12}, dengan set semesta ξ = {1, 2, 3, ..., 12}. Perihalan set A ialah:",p:["Nombor genap","Nombor ganjil","Nombor perdana","Gandaan 3"],b:0,u:"Semua unsur A boleh dibahagi dua tanpa baki, jadi A ialah set nombor genap."},
 {j:"pilih",t:"Dalam Rajah 1, pilih set 'perdana'. Penyenaraian set A yang betul ialah:",p:["{2, 3, 5, 7, 11}","{1, 2, 3, 5, 7, 11}","{2, 3, 5, 7, 9, 11}","{3, 5, 7, 11}"],b:0,u:"Nombor perdana ada tepat dua faktor. 1 hanya ada satu faktor dan 9 = 3 × 3, jadi 1 dan 9 bukan unsur A. 2 ialah nombor perdana genap yang tunggal.",kira:()=>L(ada(perdana))==="{2, 3, 5, 7, 11}"},
 {j:"pilih",t:"Dalam Rajah 1, pilih set 'faktor 12'. Penyenaraian set A yang betul ialah:",p:["{1, 2, 3, 4, 6, 12}","{2, 3, 4, 6, 12}","{1, 2, 3, 4, 6}","{1, 2, 3, 6, 12}"],b:0,u:"Faktor 12 ialah nombor yang membahagi 12 tepat: 1, 2, 3, 4, 6 dan 12.",kira:()=>L(ada(x=>12%x===0))==="{1, 2, 3, 4, 6, 12}"},
 {j:"pilih",t:"Set B = {3, 6, 9, 12}, dengan ξ = {1, 2, 3, ..., 12}. Perihalan set B ialah:",p:["Gandaan 3","Gandaan 4","Faktor bagi 12","Nombor ganjil"],b:0,u:"3, 6, 9 dan 12 diperoleh dengan mendarab 3 dengan 1, 2, 3 dan 4."},
 {j:"pilih",t:"Simbol { } atau ∅ digunakan untuk menulis:",p:["Set kosong","Set semesta","Subset","Pelengkap"],b:0,u:"{ } dan ∅ ialah dua cara menulis set yang tidak mempunyai sebarang unsur."},
 {j:"susun",t:"Susun langkah menyenaraikan set A = nombor perdana dalam ξ = {1, 2, 3, ..., 12}.",p:["Semak nombor 1 hingga 12 satu demi satu","Pilih nombor yang mempunyai tepat dua faktor","Tulis nombor yang dipilih dalam kurungan { }","Asingkan setiap nombor dengan tanda koma"],b:[0,1,2,3],u:"Semak dahulu semua nombor, pilih yang memenuhi syarat, kemudian tulis dalam kurungan dan asingkan dengan koma."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang set.",p:["Set boleh mengandungi objek selain nombor","Set kosong tidak mempunyai sebarang unsur","Satu set boleh dihuraikan dengan perihalan dan dengan penyenaraian","Set kosong ditulis sebagai {0}","Perkataan 'sedap' boleh menentukan ahli set dengan jelas","Setiap set mesti ada sekurang-kurangnya satu unsur"],b:[0,1,2],u:"{0} ada satu unsur, iaitu sifar, jadi bukan set kosong. 'Sedap' bergantung pada pendapat. Set kosong ialah set yang sah tanpa unsur."}},

{n:2, tempat:"Pasar Nombor", sk:"11.1.2 (iii) / 11.1.3 / 11.1.4 Tatatanda pembina set, ∈ ∉ dan n(A)", lampiran:"set2",
 kadNama:"Simbol Unsur", kadEm:"\u{1F511}", kadFakta:"∈ dibaca 'ialah unsur bagi' dan ∉ dibaca 'bukan unsur bagi'. Simbol n(A) memberitahu berapa banyak unsur dalam set A.",
 bosKadNama:"Kira Sekali", bosKadEm:"\u{1F522}", bosKadFakta:"Huruf dalam perkataan MALAYSIA ada lapan, tetapi n(A) hanya 6 kerana huruf yang berulang dikira sekali sahaja dalam satu set.",
 soalan:[
 {j:"pilih",t:"Simbol ∈ dalam 3 ∈ A dibaca:",p:["3 ialah unsur bagi A","3 bukan unsur bagi A","3 ialah subset bagi A","3 ialah pelengkap bagi A"],b:0,u:"∈ bermaksud 'ialah unsur bagi'. ∉ bermaksud 'bukan unsur bagi'."},
 {j:"pilih",t:"Set A = {1, 3, 5, 7}. Pernyataan yang betul ialah:",p:["5 ∈ A","4 ∈ A","7 ∉ A","2 ∈ A"],b:0,u:"5 ada dalam senarai A, jadi 5 ∈ A. 4 dan 2 tiada dalam A, dan 7 ada dalam A."},
 {j:"nombor",t:"A = {x: x nombor genap, x ≤ 12}, iaitu set nombor genap positif sehingga 12. Berapakah n(A)?",b:6,tol:0.001,u:"A = {2, 4, 6, 8, 10, 12}. Ada 6 unsur, jadi n(A) = 6.",kira:()=>ada(genap).length},
 {j:"nombor",t:"Dalam Rajah 1, pilih set 'perdana'. Berapakah n(A)?",b:5,tol:0.001,u:"A = {2, 3, 5, 7, 11}. Ada 5 unsur.",kira:()=>ada(perdana).length},
 {j:"pilih",t:"Dalam Rajah 1, pilih set 'faktor 12' dan objek x = 5. Pernyataan yang betul ialah:",p:["5 ∉ A","5 ∈ A","n(A) = 5","A = { }"],b:0,u:"Faktor 12 ialah {1, 2, 3, 4, 6, 12}. 5 tiada dalam senarai, jadi 5 ∉ A. Bilangan unsur A ialah 6.",kira:()=>ada(x=>12%x===0).indexOf(5)<0},
 {j:"pilih",t:"Tatatanda pembina set bagi A = {2, 4, 6, 8, 10} ialah:",p:["A = {x: x nombor genap, x ≤ 10}","A = {x: x nombor ganjil, x ≤ 10}","A = {x: x nombor genap, x ≤ 12}","A = {x: x gandaan 3, x ≤ 10}"],b:0,u:"Syarat 'x nombor genap' dan 'x ≤ 10' menghasilkan 2, 4, 6, 8, 10 sahaja.",kira:()=>L(X.filter(x=>x<=10&&genap(x)))==="{2, 4, 6, 8, 10}"},
 {j:"nombor",t:"Dalam Rajah 1, pilih set 'gandaan 13'. Berapakah n(A)?",b:0,tol:0.001,u:"Tiada nombor antara 1 dan 12 yang ialah gandaan 13. A ialah set kosong, jadi n(A) = 0.",kira:()=>ada(x=>x%13===0).length},
 {j:"nombor",t:"Set A ialah set huruf dalam perkataan 'MALAYSIA'. Berapakah n(A)?",b:6,tol:0.001,u:"Huruf berbeza ialah M, A, L, Y, S dan I. Huruf A berulang tetapi dikira sekali sahaja, jadi n(A) = 6.",kira:()=>new Set([..."MALAYSIA"]).size}],
 bos:{j:"banyak",t:"Set A = {x: x nombor perdana, x &lt; 12}. Pilih SEMUA pernyataan yang BENAR.",p:["11 ∈ A","n(A) = 5","9 ∉ A","1 ∈ A","n(A) = 6","12 ∈ A"],b:[0,1,2],u:"A = {2, 3, 5, 7, 11}. 11 &lt; 12 jadi 11 ∈ A. 9 bukan perdana, 1 bukan perdana, dan 12 tidak kurang daripada 12.",kira:()=>L(X.filter(x=>x<12&&perdana(x)))==="{2, 3, 5, 7, 11}"}},

{n:3, tempat:"Kembar Seiras", sk:"11.1.5 Membanding beza set dan kesamaan set", lampiran:"set3",
 kadNama:"Susunan Tak Penting", kadEm:"\u{1F500}", kadFakta:"{2, 4, 6} dan {6, 4, 2} ialah set yang sama. Susunan dan ulangan unsur tidak mengubah sesebuah set.",
 bosKadNama:"Set Kembar", bosKadEm:"\u{1F46F}", bosKadFakta:"Dua set sama apabila setiap unsur set pertama ada dalam set kedua, dan setiap unsur set kedua ada dalam set pertama.",
 soalan:[
 {j:"pilih",t:"Dua set adalah sama jika:",p:["Unsurnya sama sahaja","Bilangan unsurnya sama, walaupun unsurnya berbeza","Unsurnya sama dan dalam susunan yang sama juga","Nombor pertama dalam kedua-dua set sama"],b:0,u:"Set sama apabila unsurnya sama. Susunan tidak mengubah set, dan bilangan unsur yang sama sahaja tidak mencukupi."},
 {j:"pilih",t:"Dalam Rajah 1, A = {2, 4, 6, 8}. Pilih set B ke-2, iaitu {8, 6, 4, 2}. Adakah A = B?",p:["Ya, unsurnya sama walaupun susunan berbeza","Tidak, kerana susunan unsurnya berbeza","Tidak, kerana 8 tiada dalam A","Ya, tetapi hanya jika n(B) ialah 5"],b:0,u:"Kedua-dua set ada unsur 2, 4, 6 dan 8. Susunan tidak mengubah set."},
 {j:"nombor",t:"Dalam Rajah 1, pilih set B ke-3, iaitu {2, 2, 4, 6, 8}. Berapakah n(B)?",b:4,tol:0.001,u:"Unsur 2 ditulis dua kali tetapi dikira sekali. B mempunyai 4 unsur berbeza, jadi n(B) = 4 dan B = A.",kira:()=>new Set([2,2,4,6,8]).size},
 {j:"pilih",t:"Dalam Rajah 1, pilih set B ke-4, iaitu {2, 4, 6}. Mengapakah A ≠ B?",p:["8 ialah unsur A tetapi bukan unsur B","n(A) = n(B) tetapi unsurnya berbeza","2 ialah unsur B tetapi bukan unsur A","A dan B ditulis dalam kurungan berbeza"],b:0,u:"A ada unsur 8 yang tiada dalam B, jadi kedua-dua set tidak sama. Bilangan unsurnya juga berbeza: n(A) = 4 dan n(B) = 3."},
 {j:"pilih",t:"Dalam Rajah 1, pilih set B ke-5, iaitu {1, 2, 4, 6, 8}. Adakah A = B?",p:["Tidak, 1 ialah unsur B tetapi bukan unsur A","Ya, kerana A ialah sebahagian daripada B","Ya, kerana kedua-dua set mempunyai nombor genap","Tidak, kerana n(A) = n(B)"],b:0,u:"B ada unsur 1 yang tiada dalam A, jadi A ≠ B. n(A) = 4 dan n(B) = 5, jadi bilangan unsurnya pun tidak sama."},
 {j:"pilih",t:"A = {x: x gandaan 5, x &lt; 30} dan B = {5, 10, 15, 20, 25}. Manakah pernyataan yang betul?",p:["A = B kerana kedua-dua set mempunyai 5 unsur yang sama","A ≠ B kerana A ada unsur 30","A ≠ B kerana B ada unsur 0","A ≠ B kerana susunan unsurnya berbeza"],b:0,u:"Gandaan 5 yang kurang daripada 30 ialah 5, 10, 15, 20 dan 25. 30 tidak kurang daripada 30, jadi tidak dalam A.",kira:()=>sama(Array.from({length:29},(_,i)=>i+1).filter(x=>x%5===0),[5,10,15,20,25])},
 {j:"pilih",t:"Antara pasangan set berikut, yang manakah sama?",p:["{a, b, c} dan {c, a, b}","{1, 2, 3} dan {1, 2, 3, 4}","{2, 4} dan {4, 6}","{ } dan {0}"],b:0,u:"{a, b, c} dan {c, a, b} mempunyai unsur yang sama. {0} ada satu unsur, iaitu sifar, tetapi { } tiada unsur."},
 {j:"pilih",t:"P = {x: x faktor bagi 8} dan Q = {1, 2, 4, 8}. Pernyataan yang betul ialah:",p:["P = Q dan n(P) = 4","P = Q dan n(P) = 3","P ≠ Q kerana 8 ∉ P","P ≠ Q kerana 1 ∉ Q"],b:0,u:"Faktor 8 ialah 1, 2, 4 dan 8. Ini sama dengan Q, jadi P = Q dan n(P) = 4.",kira:()=>sama(Array.from({length:8},(_,i)=>i+1).filter(x=>8%x===0),[1,2,4,8])}],
 bos:{j:"banyak",t:"Pilih SEMUA pasangan set yang SAMA.",p:["{x: x nombor genap, x &lt; 7} dan {6, 4, 2}","{x: x faktor bagi 6} dan {1, 2, 3, 6}","{5, 5, 7} dan {7, 5}","{x: x nombor ganjil, x &lt; 8} dan {1, 3, 5, 7, 9}","{ } dan {0}","{2, 4, 6} dan {2, 4, 6, 8}"],b:[0,1,2],u:"Genap kurang daripada 7 ialah 2, 4 dan 6. Faktor 6 ialah 1, 2, 3 dan 6. {5, 5, 7} ialah {5, 7}. Pasangan keempat berbeza kerana 9 tidak kurang daripada 8, pasangan kelima berbeza kerana {0} ada satu unsur, dan pasangan keenam berbeza kerana 8."}},

{n:4, tempat:"Kelas Semesta", sk:"11.2.1 / 11.2.2 Set semesta, pelengkap dan gambar rajah Venn", lampiran:"set4",
 kadNama:"Set Semesta", kadEm:"\u{1F30C}", kadFakta:"Set semesta ξ ialah set semua unsur yang sedang dibincangkan. Dalam gambar rajah Venn, ia dilukis sebagai segi empat.",
 bosKadNama:"Pelengkap", bosKadEm:"\u{1F314}", bosKadFakta:"A' ialah semua unsur dalam ξ yang bukan unsur A. Jumlah n(A) dan n(A') sentiasa sama dengan n(ξ).",
 soalan:[
 {j:"pilih",t:"Set semesta ditulis dengan simbol:",p:["ξ","∅","∈","⊂"],b:0,u:"ξ ialah simbol set semesta. ∅ ialah set kosong, ∈ ialah 'unsur bagi' dan ⊂ ialah subset."},
 {j:"pilih",t:"Pelengkap bagi set A, ditulis A', ialah set unsur dalam ξ yang:",p:["Bukan unsur A","Ialah unsur A","Sama dengan set A","Tiada dalam ξ"],b:0,u:"A' mengandungi semua unsur ξ yang tidak ada dalam A."},
 {j:"nombor",t:"Dalam Rajah 1, pilih set 'gandaan 3'. Berapakah n(A')?",b:8,tol:0.001,u:"A = {3, 6, 9, 12}, jadi n(A) = 4. n(A') = 12 − 4 = 8.",kira:()=>komp(ada(x=>x%3===0)).length},
 {j:"nombor",t:"Dalam Rajah 1, pilih set 'perdana'. Berapakah n(A')?",b:7,tol:0.001,u:"A = {2, 3, 5, 7, 11}, jadi n(A) = 5. n(A') = 12 − 5 = 7.",kira:()=>komp(ada(perdana)).length},
 {j:"pilih",t:"Dalam Rajah 1, pilih set 'kuasa dua'. Penyenaraian A' yang betul ialah:",p:["{2, 3, 5, 6, 7, 8, 10, 11, 12}","{1, 4, 9}","{2, 3, 5, 6, 7, 8, 10, 11}","{1, 2, 3, 5, 6, 7, 8, 10, 11, 12}"],b:0,u:"Kuasa dua sempurna dalam ξ ialah 1, 4 dan 9. A' ialah baki sembilan nombor: 2, 3, 5, 6, 7, 8, 10, 11 dan 12.",kira:()=>L(komp(ada(x=>[1,4,9].indexOf(x)>=0)))==="{2, 3, 5, 6, 7, 8, 10, 11, 12}"},
 {j:"pilih",t:"Dalam Rajah 1, pilih set 'lebih 8', iaitu A = {9, 10, 11, 12}. Nombor 7 berada di kawasan:",p:["A', di luar bulatan A tetapi dalam ξ","A, iaitu di dalam bulatan A yang berlorek","Di luar ξ, iaitu di luar segi empat besar","Pada sempadan bulatan A sahaja"],b:0,u:"7 ialah unsur ξ tetapi bukan unsur A, jadi 7 ∈ A'. Ia ditulis di luar bulatan tetapi di dalam segi empat.",kira:()=>komp(ada(x=>x>8)).indexOf(7)>=0},
 {j:"nombor",t:"ξ = {1, 2, 3, ..., 20} dan A = {x: x nombor genap}. Berapakah n(A')?",b:10,tol:0.001,u:"Ada 10 nombor genap dan 10 nombor ganjil antara 1 dan 20. A' ialah set nombor ganjil, jadi n(A') = 10.",kira:()=>Array.from({length:20},(_,i)=>i+1).filter(x=>x%2===1).length},
 {j:"nombor",t:"n(ξ) = 30 dan n(A) = 12. Berapakah n(A')?",b:18,tol:0.001,u:"n(A') = n(ξ) − n(A) = 30 − 12 = 18.",kira:()=>30-12}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang pelengkap set.",p:["n(A) + n(A') = n(ξ)","Jika A = ξ, maka A' ialah set kosong","Setiap unsur ξ ada dalam A atau A' sahaja","A' sentiasa mempunyai unsur lebih banyak daripada A","Unsur A juga ialah unsur A'","n(A') = n(A) − n(ξ)"],b:[0,1,2],u:"Setiap unsur ξ ada dalam tepat satu daripada A atau A', jadi n(A) + n(A') = n(ξ). Jika A = ξ, tiada unsur tinggal untuk A'. A' boleh lebih kecil daripada A, dan rumusnya ialah n(A') = n(ξ) − n(A)."}},

{n:5, tempat:"Kotak Hadiah", sk:"11.2.3 / 11.2.4 Subset dan gambar rajah Venn", lampiran:"set5",
 kadNama:"Subset", kadEm:"\u{1F381}", kadFakta:"Set kosong dan set A sendiri sentiasa subset bagi A. Set dengan 3 unsur ada 8 subset semuanya.",
 bosKadNama:"Set Kecil", bosKadEm:"\u{1F4E6}", bosKadFakta:"Set dengan 4 unsur ada 16 subset. Setiap unsur tambahan menggandakan bilangan subset.",
 soalan:[
 {j:"pilih",t:"Simbol ⊂ dalam B ⊂ A dibaca:",p:["B ialah subset bagi A","B ialah unsur bagi A","B ialah pelengkap bagi A","B ialah semesta bagi A"],b:0,u:"⊂ bermaksud 'ialah subset bagi'."},
 {j:"pilih",t:"Set B ialah subset bagi set A jika:",p:["Setiap unsur B ialah unsur A","Setiap unsur A ialah unsur B","B dan A tiada unsur sepunya","n(B) lebih besar daripada n(A)"],b:0,u:"Subset ialah set yang semua unsurnya ada dalam set yang lebih besar."},
 {j:"nombor",t:"Dalam Rajah 1, A = {2, 4, 6}. Berapakah jumlah subset A, termasuk set kosong dan A sendiri?",b:8,tol:0.001,u:"Subset A ialah { }, {2}, {4}, {6}, {2, 4}, {2, 6}, {4, 6} dan {2, 4, 6}. Jumlahnya 8.",kira:()=>Math.pow(2,3)},
 {j:"nombor",t:"A = {2, 4, 6}. Berapakah subset A yang mempunyai tepat 2 unsur?",b:3,tol:0.001,u:"Tiga subset: {2, 4}, {2, 6} dan {4, 6}.",kira:()=>gabung(3,2)},
 {j:"pilih",t:"Antara yang berikut, yang manakah BUKAN subset bagi A = {2, 4, 6}?",p:["{2, 8}","{2, 4, 6}","{ }","{2, 4}"],b:0,u:"8 ialah unsur {2, 8} tetapi 8 bukan unsur A. Set kosong dan A sendiri kedua-duanya subset A.",kira:()=>[2,8].every(x=>[2,4,6].indexOf(x)>=0)===false},
 {j:"nombor",t:"Set P = {a, b, c, d}. Berapakah jumlah subset P?",b:16,tol:0.001,u:"Setiap unsur boleh dipilih atau tidak dipilih. 2 × 2 × 2 × 2 = 16 subset.",kira:()=>Math.pow(2,4)},
 {j:"nombor",t:"Berapakah bilangan subset bagi set kosong, { }?",b:1,tol:0.001,u:"Set kosong tiada unsur untuk dipilih. Subsetnya hanya set kosong itu sendiri, jadi ada 1 subset.",kira:()=>Math.pow(2,0)},
 {j:"pilih",t:"Dalam Rajah 1, subset B ialah {4, 6}. Pernyataan yang betul ialah:",p:["B ⊂ A dan n(B) = 2","A ⊂ B dan n(B) = 2","B ⊂ A dan n(B) = 3","B = A"],b:0,u:"4 dan 6 ada dalam A = {2, 4, 6}, jadi B ⊂ A. B ada 2 unsur, kurang daripada A yang ada 3, jadi B ≠ A.",kira:()=>[4,6].every(x=>[2,4,6].indexOf(x)>=0)}],
 bos:{j:"banyak",t:"Pilih SEMUA subset bagi set {1, 2, 3}.",p:["{ }","{1, 3}","{1, 2, 3}","{3, 4}","{0}","{1, 2, 4}"],b:[0,1,2],u:"{ } dan {1, 2, 3} sentiasa subset. {1, 3} juga. {3, 4} dan {1, 2, 4} mengandungi 4 yang tiada dalam set. {0} mengandungi 0 yang juga tiada dalam set.",kira:()=>[[],[1,3],[1,2,3]].every(a=>a.every(x=>[1,2,3].indexOf(x)>=0))&&[[3,4],[0],[1,2,4]].every(a=>!a.every(x=>[1,2,3].indexOf(x)>=0))}},

{n:6, tempat:"Studio Venn", sk:"11.2.5 Perkaitan set, subset, set semesta dan pelengkap", lampiran:"set6",
 kadNama:"Gambar Rajah Venn", kadEm:"\u{1F3A8}", kadFakta:"Gambar rajah Venn dinamakan sempena John Venn, ahli logik dari England. Segi empat mewakili ξ dan bulatan mewakili set.",
 bosKadNama:"Reka Sendiri", bosKadEm:"\u{270F}\u{FE0F}", bosKadFakta:"Gambar rajah Venn yang baik menunjukkan ξ, A, A' dan subset dengan jelas, termasuk bilangan unsur setiap kawasan.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, ξ = {1, 2, ..., 8} dan A = {1, 3, 5, 7}. Penyenaraian pelengkap A' ialah:",p:["{2, 4, 6, 8}","{1, 3, 5, 7}","{1, 2, 3, 4, 5, 6, 7, 8}","{ }"],b:0,u:"A' ialah unsur ξ yang tiada dalam A, iaitu nombor genap 2, 4, 6 dan 8.",kira:()=>L([1,2,3,4,5,6,7,8].filter(x=>[1,3,5,7].indexOf(x)<0))==="{2, 4, 6, 8}"},
 {j:"nombor",t:"Dalam Rajah 1, B ialah set semua unsur A kecuali 1 dan 7. Berapakah n(B)?",b:2,tol:0.001,u:"A = {1, 3, 5, 7}. Buang 1 dan 7, tinggal B = {3, 5}, jadi n(B) = 2 dan B ⊂ A.",kira:()=>[1,3,5,7].filter(x=>x!==1&&x!==7).length},
 {j:"nombor",t:"Sebuah kelas mempunyai 30 murid (ξ). Seramai 18 murid bermain badminton (set A). Berapakah bilangan murid yang tidak bermain badminton, iaitu n(A')?",b:12,tol:0.001,u:"n(A') = n(ξ) − n(A) = 30 − 18 = 12 murid.",kira:()=>30-18},
 {j:"nombor",t:"ξ = {x: x integer, 1 ≤ x ≤ 40} dan A = {x: x gandaan 5}. Berapakah n(A')?",b:32,tol:0.001,u:"Gandaan 5 dalam ξ ialah 5, 10, ..., 40, iaitu 8 nombor. n(A') = 40 − 8 = 32.",kira:()=>Array.from({length:40},(_,i)=>i+1).filter(x=>x%5!==0).length},
 {j:"pilih",t:"Huraian yang manakah menunjukkan gambar rajah Venn bagi B ⊂ A ⊂ ξ?",p:["B dalam A, A dalam ξ","Bulatan A dalam bulatan B, dan bulatan B dalam segi empat ξ","Bulatan A dan B berasingan, kedua-duanya dalam segi empat ξ","Bulatan B dalam segi empat ξ tetapi di luar bulatan A"],b:0,u:"B ⊂ A bermaksud B di dalam A, dan A ⊂ ξ bermaksud A di dalam ξ."},
 {j:"pilih",t:"ξ = {1, 2, ..., 10}, A = {x: x nombor perdana} dan B = {2, 3}. Pernyataan yang betul ialah:",p:["B ⊂ A dan n(A') = 6","A ⊂ B dan n(A') = 6","B ⊂ A dan n(A') = 4","B = A dan n(A') = 6"],b:0,u:"A = {2, 3, 5, 7}. B ⊂ A kerana 2 dan 3 ada dalam A. n(A) = 4, jadi n(A') = 10 − 4 = 6.",kira:()=>{const ah=Array.from({length:10},(_,i)=>i+1).filter(perdana);return [2,3].every(x=>ah.indexOf(x)>=0)&&ah.length===4&&10-ah.length===6;}},
 {j:"nombor",t:"ξ = {x: x integer, 1 ≤ x ≤ 50} dan A = {x: x kuasa dua sempurna}. Berapakah n(A')?",b:43,tol:0.001,u:"Kuasa dua sempurna ialah 1, 4, 9, 16, 25, 36 dan 49, iaitu 7 nombor. n(A') = 50 − 7 = 43.",kira:()=>Array.from({length:50},(_,i)=>i+1).filter(x=>Number.isInteger(Math.sqrt(x))===false).length},
 {j:"pilih",t:"Set B ialah subset bagi set A. Jika n(A) = 6 dan n(B) = 6, maka:",p:["B = A","B = { }","B = ξ","A' = B"],b:0,u:"Semua unsur B ada dalam A, dan bilangan unsurnya sama. Tiada unsur A yang tertinggal, jadi B = A."}],
 bos:{j:"buka",
  t:"Pilih satu kumpulan dalam kelas awak, contohnya murid yang datang ke sekolah dengan basikal atau murid yang ada adik-beradik. Reka satu masalah tentang set: tentukan ξ, set A dan subset B ⊂ A.",
  arahan:"Lukis atau huraikan gambar rajah Venn yang menunjukkan ξ, A, A' dan B. Pilih nombor sendiri bagi n(ξ), n(A), n(A') dan n(B). Terangkan dalam satu atau dua ayat mengapa B ialah subset A dan mengapa n(A) + n(A') = n(ξ).",
  u:"Jawapan TP6 yang kukuh menetapkan ξ dengan jelas, memilih A dan B ⊂ A yang masuk akal, mengira n(A') = n(ξ) − n(A) dengan betul, dan menerangkan kaitan antara set, subset, semesta dan pelengkap."}}
];

module.exports = {
  id:"m1b11", tingkatan:1, kod:"11.0 Pengenalan Set",
  tajuk:"Studio Venn",
  subtajuk:"Matematik Ting. 1 · Bab 11 Pengenalan Set",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengenal set sebagai koleksi objek yang jelas, menghuraikannya dengan perihalan dan penyenaraian, serta mengenal set kosong. Langkah seterusnya ialah menggunakan simbol ∈, ∉ dan n(A).",
   2:"{n} memahami tatatanda pembina set, simbol ∈ dan ∉, serta bilangan unsur n(A). Perlu lebih latihan mengira unsur yang berulang sebelum bergerak ke TP3.",
   3:"{n} boleh membandingkan dua set dan menerangkan sebab set sama atau tidak sama, termasuk apabila susunan atau ulangan unsur berbeza. Boleh mula menggunakan set semesta dan pelengkap.",
   4:"{n} mampu mengenal set semesta dan pelengkap, mewakilkannya dengan gambar rajah Venn, dan mengira n(A') dalam masalah mudah. Seterusnya latih masalah yang melibatkan subset.",
   5:"{n} dapat mengenal pasti dan menyenaraikan subset, termasuk set kosong dan set itu sendiri, serta mengira bilangan subset bagi masalah yang lebih kompleks. Sudah bersedia untuk menggabungkan semua konsep set.",
   6:"{n} berjaya mereka masalah set sendiri dengan set semesta, set, subset dan pelengkap yang saling berkaitan, lengkap dengan gambar rajah Venn. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pengenalan Set. Cadangan: ulang hentian pertama menggunakan Rajah 1 dan senaraikan unsur setiap set dengan bimbingan rakan sebaya."
  },
  lampiran:{ set1:R_SET1, set2:R_SET2, set3:R_SET3, set4:R_SET4, set5:R_SET5, set6:R_SET6 },
  aras:ARAS
};
