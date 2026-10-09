/* Sumber kandungan — Matematik KSSM Tingkatan 4, Bab 4 Operasi Set.
   Fail ini disunting tangan. Jalankan `node bina.js m4b4`.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 4
   dan 5, muka 50 (dskp/matematik-t4-t5.pdf). DSKP menulis enam tahap penuh.
   Perwakilan ikut DSKP 4.1.1: perihalan, simbolik (penyenaraian dan tatatanda pembina set)
   dan grafik (gambar rajah Venn).

   Set dikira dengan fungsi di bawah (bukan ditaip tangan) dan dibandingkan oleh `kira`.
   Rajah: widget t4set (widget-m4b4.js), yang menghurai ungkapan set sendiri. */

const XI = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const A1 = XI.filter(x => 12 % x === 0), B1 = XI.filter(x => x % 2 === 0);           /* H1 */
const A3 = XI.filter(x => x % 2 === 0), B3 = XI.filter(x => x % 3 === 0), C3 = XI.filter(x => 12 % x === 0);   /* H3 */
const ada = (S, x) => S.indexOf(x) >= 0;
const set = f => XI.filter(f);
const tulis = S => "{" + S.join(", ") + "}";
const keahlian = (x, sets) => Object.keys(sets).filter(k => ada(sets[k], x)).join("");
const unsur = sets => XI.map(x => ({ e: x, m: keahlian(x, sets) }));
const jum = (n, ks) => ks.reduce((j, k) => j + (n[k] || 0), 0);

const SPI = [
"Mempamerkan pengetahuan asas tentang persilangan set, kesatuan set dan gabungan operasi set.",
"Mempamerkan kefahaman tentang persilangan set, kesatuan set dan gabungan operasi set.",
"Mengaplikasikan kefahaman tentang persilangan set, kesatuan set dan gabungan operasi set untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang persilangan set, kesatuan set dan gabungan operasi set dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang persilangan set, kesatuan set dan gabungan operasi set dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang persilangan set, kesatuan set dan gabungan operasi set dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* bilangan setiap kawasan (kunci = set yang mengandungi kawasan itu) */
const N2 = { "": 7, A: 6, B: 5, C: 4, AB: 3, AC: 2, BC: 1, ABC: 2 };       /* 30 murid, H2 */
const N5 = { "": 7, A: 10, B: 8, C: 7, AB: 6, AC: 3, BC: 5, ABC: 4 };     /* 50 pelanggan, H5 */

/* ---------- lampiran ---------- */
const iw = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t4set", kapsyen, alt }, extra);
const R_V2 = iw("Rajah 1 · ξ = {x : x integer, 1 ≤ x ≤ 12}, A = {faktor bagi 12}, B = {nombor genap}. Pilih operasi.",
  "Rajah interaktif gambar rajah Venn set A faktor bagi 12 dan set B nombor genap dalam set semesta 1 hingga 12; cip memilih operasi dan kawasan berlorek serta senarai unsur dipaparkan",
  { mod: "venn2", ops: ["A ∩ B", "A ∪ B", "(A ∩ B)′", "(A ∪ B)′", "A ∩ B′", "A′ ∩ B"], S: unsur({ A: A1, B: B1 }) });
const R_V3N = iw("Rajah 1 · 30 murid: A = bola sepak, B = badminton, C = catur. Nombor ialah bilangan murid.",
  "Rajah interaktif gambar rajah Venn tiga set kelab sukan dengan bilangan murid dalam setiap kawasan; cip memilih operasi dan kawasan dilorek",
  { mod: "venn3", ops: ["A ∩ B", "A ∪ B", "A ∩ B ∩ C", "(A ∪ B ∪ C)′", "(A ∩ B)′", "B ∪ C"], n: N2 });
const R_V3E = iw("Rajah 1 · ξ = {1, 2, ..., 12}, A = {nombor genap}, B = {gandaan 3}, C = {faktor bagi 12}.",
  "Rajah interaktif gambar rajah Venn tiga set unsur 1 hingga 12; cip memilih gabungan operasi set dan kawasan berlorek serta senarai unsur dipaparkan",
  { mod: "venn3", ops: ["(A ∪ B) ∩ C", "A ∩ (B ∪ C)", "(A ∩ B) ∪ C", "A′ ∩ (B ∪ C)", "(A ∪ C)′ ∩ B", "(A ∩ B ∩ C)′"], S: unsur({ A: A3, B: B3, C: C3 }) });
const R_T1 = iw("Rajah 1 · 40 murid: 25 dalam Kelab Sains (A), 18 dalam Kelab Matematik (B). Gerakkan x.",
  "Rajah interaktif tinjauan dua set dengan n ξ 40, n A 25 dan n B 18; gelongsor x ialah bilangan murid dalam kedua-dua kelab",
  { mod: "tinjau", N: 40, nA: 25, nB: 18, lblA: "Kelab Sains", lblB: "Kelab Matematik", awal: { x: 8 } });
const R_V3C = iw("Rajah 1 · 50 pelanggan: A = roti, B = susu, C = telur. Kira dahulu, kemudian semak.",
  "Rajah interaktif gambar rajah Venn tiga set pembelian pelanggan dengan bilangan dalam setiap kawasan, dalam mod cabar",
  { mod: "venn3", cabar: true, ops: ["A ∩ B ∩ C", "(A ∪ B) ∩ C", "A ∩ (B ∪ C)′", "(A ∩ B) ∪ C", "(A ∪ B ∪ C)′", "B ∩ (A ∪ C)′"], n: N5 });
const R_T2 = iw("Rajah 1 · 45 murid: 30 suka bola sepak (A), 22 suka badminton (B). Teroka semua nilai x yang mungkin.",
  "Rajah interaktif tinjauan dua set dengan n ξ 45, n A 30 dan n B 22; gelongsor x dari nilai terkecil hingga terbesar yang mungkin",
  { mod: "tinjau", N: 45, nA: 30, nB: 22, lblA: "bola sepak", lblB: "badminton" });

/* ---------- hentian ---------- */

const AB1 = set(x => ada(A1, x) && ada(B1, x));
const ATAUB1 = set(x => ada(A1, x) || ada(B1, x));

const ARAS = [

{n:1, tempat:"Pintu Venn", sk:"4.1.1 / 4.1.2 Persilangan set dan pelengkapnya", lampiran:"v2",
 kadNama:"Persilangan", kadEm:"\u{1F39F}\u{FE0F}", kadFakta:"Persilangan A ∩ B ialah set unsur yang sepunya bagi A dan B. Dalam gambar rajah Venn, ia ialah kawasan bertindih.",
 bosKadNama:"Kesatuan", bosKadEm:"\u{1F91D}", bosKadFakta:"Kesatuan A ∪ B ialah set semua unsur yang berada dalam A atau B atau kedua-duanya.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih A ∩ B. Set A ∩ B ialah:",p:[tulis(AB1),tulis(ATAUB1),"{1, 3}","{8, 10}"],b:0,u:"Faktor bagi 12 yang juga nombor genap ialah 2, 4, 6 dan 12.",kira:()=>tulis(AB1)==="{2, 4, 6, 12}"},
 {j:"nombor",t:"Dalam Rajah 1, pilih A ∪ B. Berapakah n(A ∪ B)?",tol:0.01,b:8,u:"A ∪ B = "+tulis(ATAUB1)+", iaitu 8 unsur.",kira:()=>ATAUB1.length},
 {j:"pilih",t:"Dalam tatatanda pembina set, A ∩ B dalam Rajah 1 boleh ditulis sebagai:",p:["{x : x ialah faktor bagi 12 dan nombor genap}","{x : x ialah faktor bagi 12 atau nombor genap}","{x : x ialah faktor bagi 12 tetapi bukan genap}","{x : x bukan faktor bagi 12 dan bukan genap}"],b:0,u:"Persilangan memerlukan kedua-dua syarat dipenuhi, jadi perkataan yang betul ialah \"dan\"."},
 {j:"nombor",t:"Dalam Rajah 1, pilih (A ∩ B)′. Berapakah n((A ∩ B)′)?",tol:0.01,b:8,u:"(A ∩ B)′ ialah semua unsur ξ yang bukan dalam A ∩ B: 12 − 4 = 8.",kira:()=>XI.length-AB1.length},
 {j:"pilih",t:"Dalam Rajah 1, pilih A ∩ B′. Perihalan yang sesuai bagi set ini ialah:",p:["Faktor bagi 12 yang bukan nombor genap","Nombor genap yang bukan faktor bagi 12","Faktor bagi 12 yang juga nombor genap","Nombor yang bukan faktor bagi 12"],b:0,u:"A ∩ B′ = {1, 3}: berada dalam A (faktor 12) tetapi tidak berada dalam B (genap).",kira:()=>tulis(set(x=>ada(A1,x)&&!ada(B1,x)))==="{1, 3}"},
 {j:"pilih",t:"Persilangan set A dan set B ialah set yang mengandungi unsur yang:",p:["Sepunya bagi A dan B","Berada dalam A atau B","Berada dalam ξ tetapi bukan dalam A","Berada dalam A tetapi bukan dalam B"],b:0,u:"Persilangan = unsur sepunya. Unsur dalam A atau B ialah kesatuan."},
 {j:"nombor",t:"Dalam Rajah 1, pilih (A ∪ B)′. Berapakah n((A ∪ B)′)?",tol:0.01,b:4,u:"(A ∪ B)′ = {5, 7, 9, 11}: bukan faktor bagi 12 dan bukan nombor genap.",kira:()=>XI.length-ATAUB1.length},
 {j:"pilih",t:"Diberi P = {a, b, c, d} dan Q = {c, d, e}. Set P ∩ Q ialah:",p:["{c, d}","{a, b, c, d, e}","{a, b}","{e}"],b:0,u:"Unsur sepunya bagi P dan Q ialah c dan d."}],
 bos:{j:"banyak",t:"Berdasarkan Rajah 1, pilih SEMUA pernyataan yang BENAR.",p:["A ∩ B ⊂ A","n(A ∩ B′) = 2","(A ∪ B)′ = {5, 7, 9, 11}","A ∩ B = A ∪ B","n(A′ ∩ B) = 4","12 ∉ A ∩ B"],b:[0,1,2],u:"Setiap unsur A ∩ B berada dalam A. A ∩ B′ = {1, 3}. A′ ∩ B = {8, 10}, jadi n = 2, dan 12 berada dalam A ∩ B.",kira:()=>set(x=>!ada(A1,x)&&ada(B1,x)).length===2&&ada(AB1,12)}},

{n:2, tempat:"Padang Kelab", sk:"4.2.1 / 4.2.2 Kesatuan set dan pelengkapnya", lampiran:"v3n",
 kadNama:"Kawasan Venn", kadEm:"\u{1F371}", kadFakta:"Dalam gambar rajah Venn tiga set, ada lapan kawasan. Untuk mencari n(suatu operasi), jumlahkan bilangan dalam setiap kawasan yang berlorek.",
 bosKadNama:"Tepat Dua", bosKadEm:"\u{270C}\u{FE0F}", bosKadFakta:"\"Tepat dua\" bermaksud dalam dua set sahaja, iaitu tiga kawasan yang bertindih dua tanpa kawasan tengah A ∩ B ∩ C.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih A ∩ B. Berapakah bilangan murid yang bermain bola sepak dan badminton?",tol:0.01,b:5,u:"A ∩ B merangkumi kawasan A dan B sahaja (3) dan kawasan tengah (2): 3 + 2 = 5.",kira:()=>jum(N2,["AB","ABC"])},
 {j:"nombor",t:"Dalam Rajah 1, pilih A ∪ B. Berapakah bilangan murid yang bermain bola sepak atau badminton?",tol:0.01,b:19,u:"Jumlahkan semua kawasan dalam A atau B: 6 + 5 + 3 + 2 + 1 + 2 = 19.",kira:()=>jum(N2,["A","B","AB","AC","BC","ABC"])},
 {j:"nombor",t:"Dalam Rajah 1, berapakah bilangan murid yang menyertai ketiga-tiga aktiviti?",tol:0.01,b:2,u:"Kawasan tengah A ∩ B ∩ C mengandungi 2 murid.",kira:()=>N2.ABC},
 {j:"nombor",t:"Dalam Rajah 1, pilih (A ∪ B ∪ C)′. Berapakah bilangan murid yang tidak menyertai mana-mana aktiviti?",tol:0.01,b:7,u:"Kawasan di luar ketiga-tiga bulatan mengandungi 7 murid.",kira:()=>N2[""]},
 {j:"nombor",t:"Dalam Rajah 1, pilih (A ∩ B)′. Berapakah bilangan murid yang tidak bermain kedua-dua bola sepak dan badminton?",tol:0.01,b:25,u:"n((A ∩ B)′) = n(ξ) − n(A ∩ B) = 30 − 5 = 25.",kira:()=>30-jum(N2,["AB","ABC"])},
 {j:"pilih",t:"Pelengkap bagi persilangan, iaitu (A ∩ B)′, ialah:",p:["Unsur ξ yang tidak berada dalam A ∩ B","Unsur yang berada dalam A dan B","Unsur yang tiada dalam A dan tiada dalam B","Unsur dalam A tetapi bukan dalam B"],b:0,u:"Pelengkap ialah semua unsur dalam set semesta yang tidak berada dalam set itu. Pilihan ketiga ialah (A ∪ B)′."},
 {j:"pilih",t:"Mengapakah n(A ∩ B) ditolak dalam rumus n(A ∪ B) = n(A) + n(B) − n(A ∩ B)?",p:["Unsur A ∩ B dikira dua kali dalam n(A) + n(B)","Nilai n(A ∩ B) lebih besar daripada n(A)","Unsur A ∩ B tiada dalam A ∪ B","Supaya jawapan menjadi nombor genap"],b:0,u:"Dalam Rajah 1, n(A) = 13 dan n(B) = 11. 13 + 11 = 24 mengira 5 murid A ∩ B dua kali, jadi n(A ∪ B) = 24 − 5 = 19.",kira:()=>jum(N2,["A","AB","AC","ABC"])+jum(N2,["B","AB","BC","ABC"])-5===19},
 {j:"nombor",t:"Dalam Rajah 1, pilih B ∪ C. Berapakah n(B ∪ C)?",tol:0.01,b:17,u:"Jumlahkan semua kawasan dalam B atau C: 5 + 4 + 3 + 2 + 1 + 2 = 17.",kira:()=>jum(N2,["B","C","AB","AC","BC","ABC"])}],
 bos:{j:"nombor",t:"Berdasarkan Rajah 1, berapakah bilangan murid yang menyertai tepat dua aktiviti?",tol:0.01,b:6,u:"Tepat dua aktiviti: A dan B sahaja (3), A dan C sahaja (2), B dan C sahaja (1). Jumlah 6.",kira:()=>jum(N2,["AB","AC","BC"])}},

{n:3, tempat:"Bengkel Gabungan", sk:"4.3.1 / 4.3.2 Gabungan operasi set dan pelengkapnya", lampiran:"v3e",
 kadNama:"Kurungan Dahulu", kadEm:"\u{1F9E9}", kadFakta:"Bagi gabungan operasi set, selesaikan operasi dalam kurungan dahulu, kemudian operasi di luar kurungan.",
 bosKadNama:"Tulis Ungkapan", bosKadEm:"\u{270D}\u{FE0F}", bosKadFakta:"Kawasan \"dalam C tetapi bukan dalam A dan bukan dalam B\" ditulis C ∩ (A ∪ B)′.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih (A ∪ B) ∩ C. Set itu ialah:",p:[tulis(set(x=>(ada(A3,x)||ada(B3,x))&&ada(C3,x))),tulis(C3),"{2, 4, 6, 12}","{6, 12}"],b:0,u:"A ∪ B = {2, 3, 4, 6, 8, 9, 10, 12}. Persilangan dengan C = {1, 2, 3, 4, 6, 12} memberi {2, 3, 4, 6, 12}.",kira:()=>tulis(set(x=>(ada(A3,x)||ada(B3,x))&&ada(C3,x)))==="{2, 3, 4, 6, 12}"},
 {j:"nombor",t:"Dalam Rajah 1, pilih A ∩ (B ∪ C). Berapakah n(A ∩ (B ∪ C))?",tol:0.01,b:4,u:"B ∪ C = {1, 2, 3, 4, 6, 9, 12}. Unsur genap di dalamnya ialah 2, 4, 6 dan 12.",kira:()=>set(x=>ada(A3,x)&&(ada(B3,x)||ada(C3,x))).length},
 {j:"pilih",t:"Dalam Rajah 1, pilih A′ ∩ (B ∪ C). Set itu ialah:",p:[tulis(set(x=>!ada(A3,x)&&(ada(B3,x)||ada(C3,x)))),"{1, 3, 5, 7, 9, 11}","{9}","{3, 9}"],b:0,u:"A′ ialah nombor ganjil. Nombor ganjil dalam B ∪ C ialah 1, 3 dan 9.",kira:()=>tulis(set(x=>!ada(A3,x)&&(ada(B3,x)||ada(C3,x))))==="{1, 3, 9}"},
 {j:"nombor",t:"Dalam Rajah 1, pilih (A ∪ C)′ ∩ B. Berapakah bilangan unsurnya?",tol:0.01,b:1,u:"(A ∪ C)′ = {5, 7, 9, 11}. Hanya 9 berada dalam B, jadi n = 1.",kira:()=>set(x=>!(ada(A3,x)||ada(C3,x))&&ada(B3,x)).length},
 {j:"nombor",t:"Dalam Rajah 1, pilih (A ∩ B ∩ C)′. Berapakah bilangan unsurnya?",tol:0.01,b:10,u:"A ∩ B ∩ C = {6, 12}. Pelengkapnya mengandungi 12 − 2 = 10 unsur.",kira:()=>12-set(x=>ada(A3,x)&&ada(B3,x)&&ada(C3,x)).length},
 {j:"pilih",t:"Langkah pertama untuk menentukan (A ∪ B) ∩ C ialah:",p:["Tentukan A ∪ B dahulu","Tentukan B ∩ C terlebih dahulu","Tentukan pelengkap bagi set C","Tentukan A ∩ C terlebih dahulu"],b:0,u:"Operasi dalam kurungan diselesaikan dahulu, kemudian hasilnya disilangkan dengan C."},
 {j:"pilih",t:"Dalam Rajah 1, bandingkan (A ∩ B) ∪ C dengan A ∩ (B ∪ C).",p:["Berbeza; set pertama ada 6 unsur, set kedua ada 4","Sama, kerana set yang digunakan adalah sama","Berbeza; set pertama ada 4 unsur, set kedua ada 6","Sama, kerana kedudukan kurungan tidak penting"],b:0,u:"(A ∩ B) ∪ C = {1, 2, 3, 4, 6, 12} dan A ∩ (B ∪ C) = {2, 4, 6, 12}. Kedudukan kurungan mengubah hasil.",kira:()=>set(x=>(ada(A3,x)&&ada(B3,x))||ada(C3,x)).length===6&&set(x=>ada(A3,x)&&(ada(B3,x)||ada(C3,x))).length===4},
 {j:"susun",t:"Susun langkah untuk melorek kawasan (A ∪ B)′ ∩ C.",p:["Kenal pasti kawasan A ∪ B","Tentukan pelengkapnya, iaitu kawasan di luar A ∪ B","Pilih bahagian kawasan itu yang berada dalam C","Lorek kawasan akhir dan senaraikan unsurnya"],b:[0,1,2,3],u:"Kurungan, kemudian pelengkap, kemudian persilangan dengan C. Dalam Rajah 1, hasilnya {1}."}],
 bos:{j:"pilih",t:"Kawasan yang berada dalam C tetapi tidak berada dalam A dan tidak berada dalam B diwakili oleh:",p:["C ∩ (A ∪ B)′","C ∪ (A ∩ B)′","C ∩ A ∩ B","(A ∪ B ∪ C)′"],b:0,u:"\"Tidak dalam A dan tidak dalam B\" = (A ∪ B)′. Disilangkan dengan C memberi C ∩ (A ∪ B)′, iaitu {1} dalam Rajah 1.",kira:()=>tulis(set(x=>ada(C3,x)&&!(ada(A3,x)||ada(B3,x))))==="{1}"}},

{n:4, tempat:"Meja Tinjauan", sk:"4.1.3 / 4.2.3 Masalah persilangan dan kesatuan set", lampiran:"t1",
 kadNama:"Tinjauan", kadEm:"\u{1F4CB}", kadFakta:"n(A ∪ B) = n(A) + n(B) − n(A ∩ B). Bilangan murid yang tidak berada dalam A atau B = n(ξ) − n(A ∪ B).",
 bosKadNama:"Isi dari Tengah", bosKadEm:"\u{1F3AF}", bosKadFakta:"Dalam masalah tinjauan, mulakan dengan kawasan persilangan, kemudian isi kawasan \"sahaja\", dan akhir sekali kawasan di luar.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x = 8. Berapakah bilangan murid yang tidak menyertai kedua-dua kelab?",tol:0.01,b:5,u:"n(A ∪ B) = 25 + 18 − 8 = 35. Murid di luar = 40 − 35 = 5.",kira:()=>40-(25+18-8)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x = 8. Berapakah bilangan murid yang menyertai Kelab Sains sahaja?",tol:0.01,b:17,u:"Kelab Sains sahaja = n(A) − n(A ∩ B) = 25 − 8 = 17.",kira:()=>25-8},
 {j:"nombor",t:"Dalam Rajah 1, gerakkan x ke nilai yang paling kecil. Berapakah nilai itu?",tol:0.01,b:3,u:"n(A) + n(B) = 43, melebihi 40 murid. Sekurang-kurangnya 43 − 40 = 3 murid mesti berada dalam kedua-dua kelab.",kira:()=>25+18-40},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x = 3. Berapakah n(A ∪ B)?",tol:0.01,b:40,u:"n(A ∪ B) = 25 + 18 − 3 = 40, iaitu semua murid berada dalam sekurang-kurangnya satu kelab.",kira:()=>25+18-3},
 {j:"pilih",t:"Mengapakah x dalam Rajah 1 tidak boleh kurang daripada 3?",p:["Jika x &lt; 3, n(A ∪ B) melebihi 40 orang murid","Kerana beza n(A) dan n(B) ialah 7","Kerana Kelab Matematik ada 18 orang murid","Kerana nilai x mestilah nombor perdana"],b:0,u:"n(A ∪ B) = 43 − x. Jika x = 2, n(A ∪ B) = 41, lebih daripada bilangan murid dalam ξ. Itu mustahil."},
 {j:"nombor",t:"Dalam sebuah kelas 35 orang murid, 20 orang suka nasi lemak, 18 orang suka roti canai dan 6 orang tidak suka kedua-duanya. Berapakah bilangan murid yang suka kedua-duanya?",tol:0.01,b:9,u:"n(A ∪ B) = 35 − 6 = 29. Maka n(A ∩ B) = 20 + 18 − 29 = 9.",kira:()=>20+18-(35-6)},
 {j:"nombor",t:"Daripada 50 orang pengguna, 32 orang menggunakan aplikasi P, 25 orang menggunakan aplikasi Q dan 12 orang menggunakan kedua-duanya. Berapakah bilangan pengguna yang tidak menggunakan mana-mana aplikasi?",tol:0.01,b:5,u:"n(P ∪ Q) = 32 + 25 − 12 = 45. Bukan pengguna mana-mana = 50 − 45 = 5.",kira:()=>50-(32+25-12)},
 {j:"nombor",t:"Diberi n(ξ) = 60, n(A) = 34 dan n(A′ ∩ B) = 15. Cari n((A ∪ B)′).",tol:0.01,b:11,u:"A ∪ B terdiri daripada A (34) dan B sahaja (15), jadi n(A ∪ B) = 49. Maka n((A ∪ B)′) = 60 − 49 = 11.",kira:()=>60-34-15}],
 bos:{j:"nombor",t:"Dalam 50 orang peserta, 27 orang menyertai larian dan 21 orang menyertai berbasikal. Bilangan yang tidak menyertai mana-mana acara ialah dua kali bilangan yang menyertai kedua-dua acara. Cari bilangan yang menyertai kedua-dua acara.",tol:0.01,b:2,u:"Biar x = kedua-dua acara. (27 + 21 − x) + 2x = 50, jadi 48 + x = 50 dan x = 2. Semak: 46 dalam sekurang-kurangnya satu acara, 4 tidak menyertai.",kira:()=>50-48}},

{n:5, tempat:"Pasar Pagi", sk:"4.3.3 Masalah gabungan operasi set (rutin kompleks)", lampiran:"v3c",
 kadNama:"Tepat Satu", kadEm:"\u{261D}\u{FE0F}", kadFakta:"\"Tepat satu\" bermaksud dalam satu set sahaja, iaitu kawasan A sahaja, B sahaja dan C sahaja.",
 bosKadNama:"Sekurang-kurangnya", bosKadEm:"\u{2B06}\u{FE0F}", bosKadFakta:"\"Sekurang-kurangnya dua\" = tepat dua + tepat tiga. Baca kata kuantiti dengan teliti sebelum melorek.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih (A ∪ B) ∩ C. Berapakah bilangan pelanggan yang membeli telur dan sekurang-kurangnya satu daripada roti atau susu? Kira dahulu.",tol:0.01,b:12,u:"Kawasan C yang bertindih dengan A atau B: 3 + 5 + 4 = 12.",kira:()=>jum(N5,["AC","BC","ABC"])},
 {j:"nombor",t:"Dalam Rajah 1, pilih A ∩ (B ∪ C)′. Berapakah bilangan pelanggan yang membeli roti sahaja?",tol:0.01,b:10,u:"A ∩ (B ∪ C)′ ialah kawasan A sahaja, iaitu 10.",kira:()=>N5.A},
 {j:"nombor",t:"Berdasarkan Rajah 1, cari n(A).",tol:0.01,b:23,u:"n(A) = 10 + 6 + 3 + 4 = 23.",kira:()=>jum(N5,["A","AB","AC","ABC"])},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah bilangan pelanggan yang membeli tepat dua jenis barang?",tol:0.01,b:14,u:"Tepat dua: 6 + 3 + 5 = 14 (kawasan tengah tidak dikira).",kira:()=>jum(N5,["AB","AC","BC"])},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah bilangan pelanggan yang membeli sekurang-kurangnya dua jenis barang?",tol:0.01,b:18,u:"Sekurang-kurangnya dua = tepat dua (14) + tepat tiga (4) = 18.",kira:()=>jum(N5,["AB","AC","BC","ABC"])},
 {j:"nombor",t:"Dalam Rajah 1, pilih (A ∩ B) ∪ C. Berapakah n((A ∩ B) ∪ C)?",tol:0.01,b:25,u:"A ∩ B = 6 + 4 = 10. Tambah kawasan C yang belum dikira: 7 + 3 + 5 = 15. Jumlah 25.",kira:()=>jum(N5,["AB","ABC","C","AC","BC"])},
 {j:"pilih",t:"Ungkapan bagi \"pelanggan yang membeli susu tetapi tidak membeli roti\" ialah:",p:["B ∩ A′","B ∪ A′","A ∩ B′","(A ∪ B)′"],b:0,u:"\"Susu\" = B, \"tidak membeli roti\" = A′, \"tetapi\" bermaksud kedua-dua syarat: B ∩ A′. Dalam Rajah 1 bilangannya 8 + 5 = 13."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah peratus pelanggan yang tidak membeli mana-mana barang?",tol:0.01,b:14,u:"7 daripada 50 pelanggan: 7 ÷ 50 × 100% = 14%.",kira:()=>N5[""]/50*100}],
 bos:{j:"nombor",t:"Kedai itu memberi baucar RM2 kepada setiap pelanggan dalam Rajah 1 yang membeli tepat satu jenis barang. Berapakah jumlah nilai baucar, dalam RM?",tol:0.01,b:50,u:"Tepat satu: 10 + 8 + 7 = 25 orang. Jumlah baucar = 25 × RM2 = RM50.",kira:()=>jum(N5,["A","B","C"])*2}},

{n:6, tempat:"Studio Reka Tinjauan", sk:"4.3.3 Masalah bukan rutin operasi set", lampiran:"t2",
 kadNama:"Julat x", kadEm:"\u{1F4CF}", kadFakta:"Bagi n(ξ), n(A) dan n(B) yang diberi, n(A ∩ B) paling kecil apabila tiada murid di luar A ∪ B, dan paling besar apabila set yang lebih kecil berada sepenuhnya dalam set yang lebih besar.",
 bosKadNama:"Pereka Tinjauan", bosKadEm:"\u{1F3A8}", bosKadFakta:"Tinjauan yang baik mempunyai soalan jelas, set yang ditakrif dengan tepat, dan data yang boleh diwakili dengan gambar rajah Venn.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, berapakah nilai x yang paling kecil?",tol:0.01,b:7,u:"30 + 22 = 52, melebihi 45. Sekurang-kurangnya 52 − 45 = 7 murid suka kedua-dua sukan.",kira:()=>30+22-45},
 {j:"nombor",t:"Dalam Rajah 1, berapakah nilai x yang paling besar?",tol:0.01,b:22,u:"x tidak boleh melebihi n(B) = 22, iaitu apabila semua peminat badminton juga meminati bola sepak.",kira:()=>Math.min(30,22)},
 {j:"nombor",t:"Dalam Rajah 1, apabila x mencapai nilai terbesar, berapakah bilangan murid yang tidak suka kedua-dua sukan?",tol:0.01,b:15,u:"Apabila x = 22, n(A ∪ B) = 30 + 22 − 22 = 30. Murid di luar = 45 − 30 = 15.",kira:()=>45-(30+22-22)},
 {j:"pilih",t:"Dalam Rajah 1, apabila x = 22, set B ialah:",p:["Subset bagi A","Sama dengan set A","Set yang kosong","Pelengkap bagi A"],b:0,u:"Semua 22 unsur B berada dalam A, jadi B ⊂ A. Kawasan B sahaja menjadi 0."},
 {j:"nombor",t:"Dalam Rajah 1, jika 5 orang murid tidak suka kedua-dua sukan, cari nilai x.",tol:0.01,b:12,u:"n(A ∪ B) = 45 − 5 = 40. Maka 30 + 22 − x = 40, jadi x = 12.",kira:()=>30+22-40},
 {j:"pilih",t:"Seorang murid menulis n(A ∪ B) = n(A) + n(B) = 52 bagi Rajah 1. Apakah kesilapannya?",p:["A ∩ B dikira dua kali, dan 52 melebihi n(ξ) = 45","Dia sepatutnya mendarab n(A) dengan n(B)","Rumus itu betul bagi set yang bertindih","Dia sepatutnya menolak n(B) daripada n(A)"],b:0,u:"Rumus n(A) + n(B) hanya betul jika A ∩ B = ∅. Di sini, murid dalam A ∩ B dikira dua kali."},
 {j:"nombor",t:"Diberi n(A) = 45, n(B) = 40, n(C) = 35, n(A ∩ B) = 15, n(A ∩ C) = 12, n(B ∩ C) = 10 dan n(A ∩ B ∩ C) = 5. Cari n(A ∪ B ∪ C).",tol:0.01,b:88,u:"n(A ∪ B ∪ C) = 45 + 40 + 35 − 15 − 12 − 10 + 5 = 88. Kawasan tengah ditambah semula kerana ditolak tiga kali.",kira:()=>45+40+35-15-12-10+5},
 {j:"pilih",t:"Situasi manakah yang sesuai bagi gambar rajah Venn dengan B ⊂ A?",p:["Setiap ahli kelab catur juga ahli Kelab Matematik","Tiada ahli kelab catur dalam Kelab Matematik","Sebilangan ahli kelab catur dalam Kelab Matematik","Kelab catur dan Kelab Matematik tiada ahli"],b:0,u:"B ⊂ A bermaksud setiap unsur B juga unsur A. Jika A = Kelab Matematik dan B = kelab catur, bulatan B berada sepenuhnya dalam bulatan A."}],
 bos:{j:"buka",
  t:"Reka satu tinjauan kecil tentang dua atau tiga pilihan murid di sekolah awak, contohnya makanan kantin, sukan atau aplikasi.",
  arahan:"Takrifkan set semesta ξ dan setiap set dengan jelas. Cipta data yang konsisten (jumlah semua kawasan = n(ξ)), lukis gambar rajah Venn, kemudian tulis tiga soalan yang menggunakan gabungan operasi set dan berikan jawapannya. Terangkan julat nilai yang mungkin bagi satu kawasan persilangan.",
  u:"Jawapan TP6 yang kukuh mempunyai set yang ditakrif dengan tepat, data yang konsisten dengan n(ξ), gambar rajah Venn yang betul, soalan yang menggunakan ∩, ∪ dan ′ dengan jawapan yang tepat, dan penaakulan tentang nilai terkecil serta terbesar bagi persilangan."}}
];

module.exports = {
  id:"m4b4", tingkatan:4, kod:"4.0 Operasi Set",
  tajuk:"Pesta Venn",
  subtajuk:"Matematik Ting. 4 · Bab 4 Operasi Set",
  spi:SPI,
  ulasan:{
   1:"{n} dapat menentukan persilangan dua set dan pelengkapnya menggunakan penyenaraian, tatatanda pembina set dan gambar rajah Venn. Langkah seterusnya ialah kesatuan set.",
   2:"{n} memahami kesatuan dan persilangan set serta pelengkapnya, dan dapat membaca bilangan unsur daripada gambar rajah Venn tiga set. Perlu lebih latihan gabungan operasi set.",
   3:"{n} boleh menentukan gabungan operasi set seperti (A ∪ B) ∩ C dengan menyelesaikan kurungan dahulu, dan menulis ungkapan bagi kawasan yang berlorek.",
   4:"{n} mampu menyelesaikan masalah tinjauan dua set menggunakan n(A ∪ B) = n(A) + n(B) − n(A ∩ B). Seterusnya, latih masalah tiga set dengan kata kuantiti seperti \"tepat\" dan \"sekurang-kurangnya\".",
   5:"{n} dapat menyelesaikan masalah rutin yang kompleks melibatkan tiga set dan gabungan operasi set. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya mereka tinjauan sendiri dengan data yang konsisten, mewakilkannya dengan gambar rajah Venn, dan menaakul tentang julat nilai persilangan. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Operasi Set. Cadangan: ulang hentian pertama dengan Rajah 1 dan senaraikan unsur bagi setiap kawasan gambar rajah Venn bersama rakan sebaya."
  },
  lampiran:{ v2:R_V2, v3n:R_V3N, v3e:R_V3E, t1:R_T1, v3c:R_V3C, t2:R_T2 },
  aras:ARAS
};
