/* Sumber kandungan — Matematik KSSM Tingkatan 4, Bab 5 Rangkaian dalam Teori Graf.
   Fail ini disunting tangan. Jalankan `node bina.js m4b5`.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 4
   dan 5, muka 54 (dskp/matematik-t4-t5.pdf). DSKP menulis enam tahap penuh.
   Istilah ikut DSKP 5.1.1: graf, rangkaian, bucu, tepi, darjah, graf mudah, gelung,
   berbilang tepi; 5.1.2: graf terarah/tak terarah, berpemberat/tak berpemberat;
   5.1.3: subgraf dan pokok; 5.1.5: kos optimum (masa, jarak, perbelanjaan).

   Darjah, pokok dan laluan optimum dikira semula di bawah (bebas daripada widget).
   Rajah: widget t4graf (widget-m4b5.js). */

/* ---------- data graf ---------- */
const G1 = { bucu: [{ n: "A", x: 40, y: 64 }, { n: "B", x: 130, y: 52 }, { n: "C", x: 220, y: 72 }, { n: "D", x: 70, y: 170 }, { n: "E", x: 190, y: 172 }],
  tepi: [["A", "B"], ["B", "C"], ["A", "D"], ["D", "E"], ["E", "C"], ["B", "E"], ["B", "E"], ["C", "C"], ["B", "D"]] };
const G2 = { bucu: [{ n: "A", x: 130, y: 48 }, { n: "B", x: 224, y: 104 }, { n: "C", x: 188, y: 190 }, { n: "D", x: 72, y: 190 }, { n: "E", x: 36, y: 104 }],
  tepi: [["A", "B"], ["B", "A"], ["C", "A"], ["D", "A"], ["E", "A"], ["A", "D"], ["B", "C"], ["D", "E"], ["E", "C"]] };
const G3 = { bucu: [{ n: "P", x: 40, y: 60 }, { n: "Q", x: 130, y: 46 }, { n: "R", x: 220, y: 60 }, { n: "S", x: 56, y: 180 }, { n: "T", x: 130, y: 122 }, { n: "U", x: 204, y: 180 }],
  tepi: [["P", "Q"], ["Q", "R"], ["P", "T"], ["Q", "T"], ["R", "T"], ["S", "T"], ["T", "U"], ["S", "U"], ["P", "S"]] };
const SUB = [{ nama: "S1", tepi: [0, 1, 3, 5, 6] }, { nama: "S2", tepi: [0, 2, 3] }, { nama: "S3", tepi: [0, 1, 7] }, { nama: "S4", tepi: [5, 6, 7] }, { nama: "S5", tepi: [8, 5, 3, 1] }];
const G4 = { bucu: [{ n: "A", x: 28, y: 118 }, { n: "B", x: 100, y: 50 }, { n: "C", x: 100, y: 190 }, { n: "D", x: 170, y: 120 }, { n: "E", x: 236, y: 56 }, { n: "F", x: 236, y: 190 }],
  tepi: [["A", "B", { j: 4 }], ["A", "C", { j: 7 }], ["B", "D", { j: 5 }], ["C", "D", { j: 3 }], ["B", "E", { j: 10 }], ["D", "E", { j: 4 }], ["D", "F", { j: 8 }], ["E", "F", { j: 3 }], ["C", "F", { j: 12 }]] };
const G5 = { bucu: [{ n: "R", x: 28, y: 112 }, { n: "A", x: 104, y: 48 }, { n: "B", x: 104, y: 180 }, { n: "C", x: 178, y: 112 }, { n: "P", x: 236, y: 182 }],
  tepi: [["R", "A", { j: 20, m: 25, k: 3 }], ["R", "B", { j: 15, m: 30, k: 0 }], ["A", "C", { j: 25, m: 20, k: 5 }], ["B", "C", { j: 18, m: 35, k: 0 }], ["C", "P", { j: 10, m: 12, k: 0 }], ["B", "P", { j: 40, m: 45, k: 1 }]] };

const darjah = (G, n) => G.tepi.reduce((d, t) => d + (t[0] === n) + (t[1] === n), 0);
const masuk = n => G2.tepi.filter(t => t[1] === n).length, keluar = n => G2.tepi.filter(t => t[0] === n).length;
const kos = (E, L, k) => { let j = 0; for (let i = 0; i < L.length - 1; i++) { const t = E.find(t => (t[0] === L[i] && t[1] === L[i + 1]) || (t[1] === L[i] && t[0] === L[i + 1])); if (!t) return null; j += t[2][k]; } return j; };
/* semua laluan ringkas dari a ke b, dan nilai minimum */
const laluanSemua = (E, a, b) => { const out = []; const jalan = (L) => { const u = L[L.length - 1]; if (u === b) { out.push(L); return; } E.forEach(t => { const v = t[0] === u ? t[1] : t[1] === u ? t[0] : null; if (v && L.indexOf(v) < 0) jalan(L.concat([v])); }); }; jalan([a]); return out; };
const minimum = (E, a, b, k) => Math.min(...laluanSemua(E, a, b).map(L => kos(E, L, k)));
const pokok = (G, idx) => { const E = idx.map(i => G.tepi[i]); const V = [...new Set(E.flat())]; const adj = {}; V.forEach(v => adj[v] = []); E.forEach(t => { adj[t[0]].push(t[1]); adj[t[1]].push(t[0]); }); const lw = {}, st = [V[0]]; while (st.length) { const x = st.pop(); if (lw[x]) continue; lw[x] = 1; adj[x].forEach(y => st.push(y)); } return V.every(v => lw[v]) && E.length === V.length - 1; };

const SPI = [
"Mempamerkan pengetahuan asas tentang rangkaian.",
"Mempamerkan kefahaman tentang rangkaian.",
"Mengaplikasikan kefahaman tentang rangkaian untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang rangkaian dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang rangkaian dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang rangkaian dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran ---------- */
const iw = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t4graf", kapsyen, alt }, extra);
const R_D = iw("Rajah 1 · Graf G dengan gelung di C dan dua tepi antara B dan E. Pilih bucu.",
  "Rajah interaktif graf tak terarah dengan lima bucu A hingga E, satu gelung dan berbilang tepi; cip memilih bucu dan darjahnya dipaparkan",
  Object.assign({ mod: "darjah", tajuk: "Graf G" }, G1));
const R_T = iw("Rajah 1 · Rangkaian sosial: anak panah X → Y bermaksud X mengikuti Y. Pilih bucu.",
  "Rajah interaktif graf terarah lima pengguna media sosial A hingga E; cip memilih pengguna dan darjah masuk serta darjah keluar dipaparkan",
  Object.assign({ mod: "terarah", tajuk: "Siapa mengikuti siapa?", makna: "Darjah masuk = bilangan pengikut" }, G2));
const R_P = iw("Rajah 1 · Graf G dan lima subgraf S1 hingga S5. Pilih subgraf dan semak sama ada ia pokok.",
  "Rajah interaktif graf G dengan enam bucu; cip memilih subgraf yang diserlahkan dan rajah menyatakan sama ada ia terkait, ada kitaran dan merupakan pokok",
  Object.assign({ mod: "pokok", subgraf: SUB }, G3));
const R_L = iw("Rajah 1 · Peta jalan antara enam kampung, jarak dalam km. Pilih laluan dari A ke F.",
  "Rajah interaktif rangkaian berpemberat enam kampung dengan jarak dalam kilometer; cip memilih laluan dari A ke F dan jumlah jarak serta laluan terpendek dipaparkan",
  Object.assign({ mod: "laluan", mula: "A", akhir: "F", kriteria: ["j"], laluan: [["A", "B", "E", "F"], ["A", "B", "D", "F"], ["A", "C", "F"], ["A", "B", "D", "E", "F"], ["A", "C", "D", "E", "F"]] }, G4));
const R_K = iw("Rajah 1 · Rumah (R) ke pantai (P): jarak, masa dan kos tol. Kira dahulu, kemudian semak.",
  "Rajah interaktif rangkaian berpemberat dari rumah ke pantai dengan tiga kriteria jarak, masa dan kos tol; cip memilih laluan dan kriteria, dalam mod cabar",
  Object.assign({ mod: "laluan", cabar: true, mula: "R", akhir: "P", kriteria: ["j", "m", "k"], laluan: [["R", "A", "C", "P"], ["R", "B", "C", "P"], ["R", "B", "P"]] }, G5));
const R_J = iw("Rajah 1 · Majlis daerah mahu membina satu jalan baharu (hijau). Bandingkan pelan.",
  "Rajah interaktif rangkaian jalan enam kampung dengan tiga pelan: tiada jalan baharu, jalan baharu A ke D atau jalan baharu C ke E; cip memilih pelan dan laluan",
  Object.assign({ mod: "laluan", mula: "A", akhir: "F", kriteria: ["j"], laluan: [["A", "B", "D", "E", "F"], ["A", "D", "E", "F"], ["A", "C", "E", "F"]],
    pelan: [{ nama: "Tiada jalan baharu", tepi: [] }, { nama: "Jalan A–D", tepi: [["A", "D", { j: 6 }]] }, { nama: "Jalan C–E", tepi: [["C", "E", { j: 5 }, { lengkung: 1 }]] }] }, G4));

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Stesen Bucu", sk:"5.1.1 Rangkaian sebagai graf; bucu, tepi dan darjah", lampiran:"d",
 kadNama:"Bucu dan Tepi", kadEm:"\u{1F535}", kadFakta:"Graf terdiri daripada bintik yang dipanggil bucu dan garis yang dipanggil tepi. Darjah suatu bucu ialah bilangan tepi yang bertemu di bucu itu.",
 bosKadNama:"Jumlah Darjah", bosKadEm:"\u{2795}", bosKadFakta:"Setiap tepi menyumbang 2 kepada jumlah darjah (satu bagi setiap hujung), jadi jumlah darjah = 2 × bilangan tepi. Gelung menyumbang 2 kepada darjah bucunya.",
 soalan:[
 {j:"pilih",t:"Dalam teori graf, bintik dan garis dalam suatu graf masing-masing dipanggil:",p:["bucu dan tepi","tepi dan bucu","titik dan sisi","nod dan sempadan"],b:0,u:"Menurut DSKP: bintik dikenali sebagai bucu dan garis sebagai tepi."},
 {j:"nombor",t:"Dalam Rajah 1, pilih bucu A. Berapakah darjah bucu A?",tol:0.01,b:2,u:"Dua tepi bertemu di A: A–B dan A–D.",kira:()=>darjah(G1,"A")},
 {j:"nombor",t:"Dalam Rajah 1, pilih bucu B. Berapakah darjah bucu B?",tol:0.01,b:5,u:"Tepi di B: B–A, B–C, B–D dan dua tepi B–E. Jumlah 5.",kira:()=>darjah(G1,"B")},
 {j:"nombor",t:"Dalam Rajah 1, pilih bucu C. Berapakah darjah bucu C?",tol:0.01,b:4,u:"C–B dan C–E menyumbang 2, dan gelung di C menyumbang 2 lagi. Darjah C = 4.",kira:()=>darjah(G1,"C")},
 {j:"nombor",t:"Berapakah bilangan tepi dalam graf G pada Rajah 1?",tol:0.01,b:9,u:"Kira setiap garis, termasuk gelung di C dan kedua-dua tepi B–E: 9 tepi.",kira:()=>G1.tepi.length},
 {j:"pilih",t:"Graf G dalam Rajah 1 bukan graf mudah kerana:",p:["Ia mempunyai gelung dan berbilang tepi","Ia mempunyai lebih daripada empat bucu","Setiap bucunya berdarjah genap","Graf itu tidak mempunyai sebarang anak panah"],b:0,u:"Graf mudah ialah graf tak terarah tanpa gelung dan tanpa berbilang tepi. G mempunyai gelung di C dan dua tepi B–E."},
 {j:"pilih",t:"Rangkaian ialah suatu graf yang:",p:["Mempunyai sekurang-kurangnya sepasang bintik berkait","Mempunyai bucu yang semuanya berdarjah sifar","Tidak mempunyai sebarang tepi langsung","Mempunyai gelung pada setiap bucunya"],b:0,u:"Menurut DSKP, rangkaian ialah graf yang mempunyai sekurang-kurangnya sepasang bintik berkait."},
 {j:"nombor",t:"Dalam Rajah 1, berapakah jumlah darjah semua bucu?",tol:0.01,b:18,u:"2 + 5 + 4 + 3 + 4 = 18, iaitu 2 × 9 tepi.",kira:()=>G1.bucu.reduce((j,b)=>j+darjah(G1,b.n),0)}],
 bos:{j:"nombor",t:"Suatu graf mudah mempunyai 6 bucu dan darjah setiap bucu ialah 3. Berapakah bilangan tepi graf itu?",tol:0.01,b:9,u:"Jumlah darjah = 6 × 3 = 18. Bilangan tepi = 18 ÷ 2 = 9.",kira:()=>6*3/2}},

{n:2, tempat:"Menara Pengikut", sk:"5.1.2 Graf terarah dan graf tak terarah; berpemberat dan tak berpemberat", lampiran:"t",
 kadNama:"Graf Terarah", kadEm:"\u{27A1}\u{FE0F}", kadFakta:"Dalam graf terarah, setiap tepi mempunyai arah (anak panah). Darjah masuk = bilangan anak panah yang menuju ke bucu, darjah keluar = bilangan yang keluar dari bucu.",
 bosKadNama:"Berpemberat", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Graf berpemberat mempunyai nilai pada setiap tepi, seperti jarak, masa atau kos. Graf tak berpemberat hanya menunjukkan sama ada dua bucu berkait.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih bucu A. Berapakah darjah masuk bucu A?",tol:0.01,b:4,u:"Anak panah dari B, C, D dan E menuju ke A. Darjah masuk A = 4, iaitu A mempunyai 4 pengikut.",kira:()=>masuk("A")},
 {j:"nombor",t:"Dalam Rajah 1, pilih bucu A. Berapakah darjah keluar bucu A?",tol:0.01,b:2,u:"A mengikuti B dan D, jadi darjah keluar A = 2.",kira:()=>keluar("A")},
 {j:"pilih",t:"Dalam Rajah 1, siapakah yang mempunyai paling ramai pengikut?",p:["A","B","C","E"],b:0,u:"Bilangan pengikut = darjah masuk. A mempunyai darjah masuk 4, lebih tinggi daripada bucu lain.",kira:()=>["B","C","D","E"].every(n=>masuk(n)<masuk("A"))},
 {j:"pilih",t:"Dalam Rajah 1, ada dua anak panah antara A dan B. Ini bermaksud:",p:["A dan B saling mengikuti","A mengikuti B dua kali","B tidak mengikuti A","Tepi itu ialah satu gelung"],b:0,u:"A → B bermaksud A mengikuti B, dan B → A bermaksud B mengikuti A. Kedua-duanya saling mengikuti."},
 {j:"nombor",t:"Dalam Rajah 1, berapakah jumlah darjah masuk semua bucu?",tol:0.01,b:9,u:"Setiap anak panah menyumbang 1 darjah masuk. Ada 9 anak panah, jadi jumlahnya 9 (sama dengan jumlah darjah keluar).",kira:()=>G2.bucu.reduce((j,b)=>j+masuk(b.n),0)},
 {j:"pilih",t:"Antara situasi berikut, yang manakah paling sesuai diwakili oleh graf terarah?",p:["Jalan sehala di bandar","Rakan sekelas yang saling mengenali","Jalan dua hala antara dua pekan","Kabel elektrik antara dua rumah"],b:0,u:"Jalan sehala hanya boleh dilalui satu arah, jadi tepinya memerlukan anak panah. Hubungan saling mengenali tiada arah."},
 {j:"pilih",t:"Perbezaan utama graf berpemberat dengan graf tak berpemberat ialah graf berpemberat:",p:["Mempunyai nilai pada setiap tepi","Mempunyai anak panah pada setiap tepi","Mempunyai lebih banyak bucu","Tidak mempunyai sebarang gelung"],b:0,u:"Pemberat ialah nilai seperti jarak, masa atau kos pada tepi. Anak panah menentukan graf terarah, bukan berpemberat."},
 {j:"pilih",t:"Dalam Rajah 1, bucu yang mempunyai darjah keluar lebih besar daripada darjah masuk ialah:",p:["B, D dan E","A dan C","A, B dan C","C, D dan E"],b:0,u:"B: keluar 2, masuk 1. D: keluar 2, masuk 1. E: keluar 2, masuk 1. A dan C mempunyai darjah masuk yang lebih besar.",kira:()=>G2.bucu.map(b=>b.n).filter(n=>keluar(n)>masuk(n)).join(",")==="B,D,E"}],
 bos:{j:"pilih",t:"Sebuah graf menunjukkan penerbangan terus antara bandar dengan masa penerbangan pada setiap tepi, dan sesetengah laluan sehala. Graf ini ialah:",p:["Graf terarah dan berpemberat","Graf tak terarah dan berpemberat","Graf terarah dan tak berpemberat","Graf tak terarah dan tak berpemberat"],b:0,u:"Laluan sehala memerlukan arah (terarah) dan masa penerbangan ialah pemberat (berpemberat)."}},

{n:3, tempat:"Taman Pokok", sk:"5.1.3 Subgraf dan pokok", lampiran:"p",
 kadNama:"Subgraf", kadEm:"\u{1F33F}", kadFakta:"Subgraf ialah sebahagian daripada graf: bucu dan tepinya semua diambil daripada graf asal.",
 bosKadNama:"Pokok", bosKadEm:"\u{1F333}", bosKadFakta:"Pokok ialah graf terkait tanpa kitaran. Bagi pokok, bilangan tepi = bilangan bucu − 1.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih S1. Adakah S1 suatu pokok?",p:["Ya; terkait, tiada kitaran, 5 tepi bagi 6 bucu","Bukan; ia mempunyai kitaran P–Q–T","Bukan; ia tidak terkait","Ya; kerana setiap bucu berdarjah 2"],b:0,u:"S1 mempunyai 6 bucu dan 5 tepi, terkait dan tanpa kitaran, jadi ia pokok (malah pokok merentang bagi G).",kira:()=>pokok(G3,SUB[0].tepi)},
 {j:"pilih",t:"Dalam Rajah 1, pilih S2. Mengapakah S2 bukan pokok?",p:["Ia mempunyai kitaran P–Q–T","Ia tidak terkait","Ia tidak mempunyai bucu T","Bilangan tepinya kurang daripada bucu"],b:0,u:"S2 mempunyai tepi P–Q, Q–T dan P–T yang membentuk kitaran. 3 bucu tetapi 3 tepi, lebih daripada 3 − 1.",kira:()=>!pokok(G3,SUB[1].tepi)},
 {j:"pilih",t:"Dalam Rajah 1, pilih S3. Mengapakah S3 bukan pokok?",p:["Ia tidak terkait","Ia mempunyai kitaran","Ia mempunyai gelung","Bilangan tepinya terlalu banyak"],b:0,u:"S3 terdiri daripada P–Q–R dan S–U yang terpisah. Pokok mesti terkait.",kira:()=>!pokok(G3,SUB[2].tepi)},
 {j:"pilih",t:"Dalam Rajah 1, pilih S5. Kesimpulan yang betul ialah:",p:["S5 ialah pokok tetapi tidak merangkumi bucu U","S5 ialah pokok yang merangkumi semua bucu G","S5 bukan pokok kerana mempunyai kitaran","S5 bukan pokok kerana tidak terkait"],b:0,u:"S5 mempunyai 5 bucu (P, Q, R, S, T) dan 4 tepi, terkait dan tanpa kitaran. Bucu U tiada dalam S5.",kira:()=>pokok(G3,SUB[4].tepi)},
 {j:"nombor",t:"Suatu pokok mempunyai 8 bucu. Berapakah bilangan tepinya?",tol:0.01,b:7,u:"Bagi pokok, tepi = bucu − 1 = 8 − 1 = 7.",kira:()=>8-1},
 {j:"nombor",t:"Graf G dalam Rajah 1 mempunyai 6 bucu dan 9 tepi. Berapakah bilangan tepi yang mesti dibuang untuk mendapatkan pokok merentang?",tol:0.01,b:4,u:"Pokok merentang dengan 6 bucu mempunyai 5 tepi. Buang 9 − 5 = 4 tepi.",kira:()=>G3.tepi.length-(G3.bucu.length-1)},
 {j:"pilih",t:"Antara berikut, yang manakah BUKAN subgraf bagi graf G dalam Rajah 1?",p:["Graf dengan tepi P–R","Graf dengan tepi P–Q dan Q–R","Graf dengan bucu T sahaja","Graf dengan tepi S–T dan T–U"],b:0,u:"Tiada tepi P–R dalam G, jadi graf itu tidak boleh menjadi subgraf G.",kira:()=>!G3.tepi.some(t=>(t[0]==="P"&&t[1]==="R")||(t[0]==="R"&&t[1]==="P"))},
 {j:"susun",t:"Susun langkah menyemak sama ada suatu subgraf ialah pokok.",p:["Kira bilangan bucu dan tepi subgraf","Semak sama ada tepi = bucu − 1","Semak sama ada setiap bucu boleh dihubungi","Pastikan tiada kitaran dalam subgraf"],b:[0,1,2,3],u:"Pokok mesti memenuhi tiga syarat: tepi = bucu − 1, terkait dan tanpa kitaran."}],
 bos:{j:"banyak",t:"Pilih SEMUA pernyataan yang BENAR tentang pokok.",p:["Pokok ialah graf yang terkait","Pokok tidak mempunyai kitaran","Pokok dengan n bucu mempunyai n − 1 tepi","Pokok mesti mempunyai gelung","Pokok dengan 5 bucu mempunyai 5 tepi","Pokok ialah graf yang tidak terkait"],b:[0,1,2],u:"Pokok terkait, tanpa kitaran (jadi tanpa gelung) dan mempunyai n − 1 tepi. Pokok 5 bucu mempunyai 4 tepi."}},

{n:4, tempat:"Peta Kampung", sk:"5.1.4 / 5.1.5 Mewakilkan maklumat dan masalah rangkaian", lampiran:"l",
 kadNama:"Laluan Terpendek", kadEm:"\u{1F68C}", kadFakta:"Untuk mencari laluan terpendek, bandingkan jumlah pemberat bagi setiap laluan yang mungkin, dan pilih yang terkecil.",
 bosKadNama:"Kebaikan Rangkaian", bosKadEm:"\u{1F5FA}\u{FE0F}", bosKadFakta:"Rangkaian pengangkutan lebih ringkas daripada peta: ia hanya menunjukkan sambungan dan pemberat, jadi laluan mudah dibandingkan. Namun ia tidak menunjukkan bentuk sebenar jalan.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih laluan A→B→E→F. Berapakah jumlah jarak, dalam km?",tol:0.01,b:17,u:"4 + 10 + 3 = 17 km.",kira:()=>kos(G4.tepi,["A","B","E","F"],"j")},
 {j:"nombor",t:"Dalam Rajah 1, pilih laluan A→C→F. Berapakah jumlah jarak, dalam km?",tol:0.01,b:19,u:"7 + 12 = 19 km.",kira:()=>kos(G4.tepi,["A","C","F"],"j")},
 {j:"nombor",t:"Dalam Rajah 1, pilih laluan A→B→D→E→F. Berapakah jumlah jarak, dalam km?",tol:0.01,b:16,u:"4 + 5 + 4 + 3 = 16 km.",kira:()=>kos(G4.tepi,["A","B","D","E","F"],"j")},
 {j:"pilih",t:"Berdasarkan Rajah 1, laluan terpendek dari A ke F ialah:",p:["A→B→D→E→F","A→B→E→F","A→C→F","A→C→D→E→F"],b:0,u:"Bandingkan: A→B→D→E→F = 16 km, A→B→E→F = 17 km, A→C→D→E→F = 17 km, A→C→F = 19 km.",kira:()=>minimum(G4.tepi,"A","F","j")===16},
 {j:"pilih",t:"Laluan terpendek dalam Rajah 1 melalui lebih banyak kampung daripada laluan A→C→F. Apakah kesimpulannya?",p:["Laluan dengan lebih banyak bucu boleh menjadi lebih pendek","Laluan yang melalui sedikit bucu selalu terpendek","Bilangan tepi menentukan jumlah jarak","Laluan A→C→F ialah laluan terpendek"],b:0,u:"Jumlah jarak bergantung pada pemberat, bukan bilangan tepi. 16 km melalui 4 tepi lebih pendek daripada 19 km melalui 2 tepi."},
 {j:"nombor",t:"Dalam Rajah 1, berapakah darjah bucu D?",tol:0.01,b:4,u:"D disambungkan kepada B, C, E dan F.",kira:()=>darjah(G4,"D")},
 {j:"pilih",t:"Antara berikut, yang manakah kelebihan rangkaian pengangkutan berbanding peta?",p:["Sambungan dan pemberat mudah dibandingkan","Ia menunjukkan bentuk sebenar setiap jalan","Ia menunjukkan bangunan di tepi jalan","Ia sentiasa dilukis mengikut skala"],b:0,u:"Rangkaian meringkaskan maklumat kepada bucu, tepi dan pemberat. Bentuk sebenar jalan dan skala ialah kelebihan peta."},
 {j:"nombor",t:"Seorang pemandu bas bertolak dari A, singgah di D, kemudian ke F melalui laluan terpendek. Berapakah jumlah jarak, dalam km?",tol:0.01,b:16,u:"A ke D terpendek: A→B→D = 9 km (A→C→D = 10 km). D ke F terpendek: D→E→F = 7 km (D→F = 8 km). Jumlah 16 km.",kira:()=>minimum(G4.tepi,"A","D","j")+Math.min(kos(G4.tepi,["D","F"],"j"),kos(G4.tepi,["D","E","F"],"j"))}],
 bos:{j:"nombor",t:"Jalan B–D dalam Rajah 1 ditutup untuk dibaiki. Berapakah jarak terpendek baharu dari A ke F, dalam km?",tol:0.01,b:17,u:"Tanpa B–D: A→B→E→F = 17, A→C→D→E→F = 17, A→C→F = 19. Jarak terpendek baharu ialah 17 km.",kira:()=>minimum(G4.tepi.filter(t=>!(t[0]==="B"&&t[1]==="D")),"A","F","j")}},

{n:5, tempat:"Jalan ke Pantai", sk:"5.1.5 Masalah kos optimum (masa, jarak dan perbelanjaan)", lampiran:"k",
 kadNama:"Kos Optimum", kadEm:"\u{1F3D6}\u{FE0F}", kadFakta:"Kos dalam rangkaian boleh bermaksud jarak, masa atau perbelanjaan. Laluan optimum bergantung pada kriteria yang dipilih.",
 bosKadNama:"Timbang Pilihan", bosKadEm:"\u{1F914}", bosKadFakta:"Laluan terpantas tidak semestinya termurah. Keputusan yang baik menimbang semua kriteria mengikut keperluan pengguna.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih laluan R→A→C→P dan kriteria masa. Berapakah jumlah masa, dalam minit? Kira dahulu.",tol:0.01,b:57,u:"25 + 20 + 12 = 57 minit.",kira:()=>kos(G5.tepi,["R","A","C","P"],"m")},
 {j:"nombor",t:"Dalam Rajah 1, pilih laluan R→B→C→P dan kriteria jarak. Berapakah jumlah jarak, dalam km?",tol:0.01,b:43,u:"15 + 18 + 10 = 43 km.",kira:()=>kos(G5.tepi,["R","B","C","P"],"j")},
 {j:"pilih",t:"Berdasarkan Rajah 1, laluan manakah paling pantas?",p:["R→A→C→P","R→B→C→P","R→B→P","Semua laluan sama pantas"],b:0,u:"Masa: R→A→C→P = 57 min, R→B→P = 75 min, R→B→C→P = 77 min.",kira:()=>minimum(G5.tepi,"R","P","m")===57},
 {j:"pilih",t:"Berdasarkan Rajah 1, laluan manakah paling murah?",p:["R→B→C→P","R→A→C→P","R→B→P","R→A→C→B→P"],b:0,u:"Kos tol: R→B→C→P = RM0, R→B→P = RM1, R→A→C→P = RM8.",kira:()=>minimum(G5.tepi,"R","P","k")===0&&kos(G5.tepi,["R","B","C","P"],"k")===0},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah masa yang dijimatkan (minit) jika keluarga memilih laluan terpantas berbanding laluan terpendek?",tol:0.01,b:20,u:"Laluan terpendek R→B→C→P mengambil 77 minit. Laluan terpantas R→A→C→P mengambil 57 minit. Jimat 20 minit.",kira:()=>kos(G5.tepi,["R","B","C","P"],"m")-kos(G5.tepi,["R","A","C","P"],"m")},
 {j:"nombor",t:"Berdasarkan Rajah 1, kereta menggunakan petrol RM0.20 sekilometer. Berapakah jumlah kos (petrol dan tol) bagi laluan R→A→C→P, dalam RM?",tol:0.01,b:19,u:"Jarak 55 km × RM0.20 = RM11. Tambah tol RM8. Jumlah RM19.",kira:()=>kos(G5.tepi,["R","A","C","P"],"j")*0.2+kos(G5.tepi,["R","A","C","P"],"k")},
 {j:"nombor",t:"Dengan kadar petrol yang sama (RM0.20 sekilometer), berapakah jumlah kos bagi laluan R→B→C→P, dalam RM?",tol:0.01,b:8.6,u:"Jarak 43 km × RM0.20 = RM8.60. Tiada tol. Jumlah RM8.60.",kira:()=>Math.round((kos(G5.tepi,["R","B","C","P"],"j")*0.2+kos(G5.tepi,["R","B","C","P"],"k"))*100)/100},
 {j:"pilih",t:"Keluarga Aiman perlu tiba di pantai dalam masa satu jam. Laluan manakah yang perlu dipilih?",p:["R→A→C→P, kerana hanya laluan ini kurang daripada 60 minit","R→B→C→P, kerana jaraknya paling pendek","R→B→P, kerana ia melalui paling sedikit bucu","R→B→C→P, kerana tiada bayaran tol"],b:0,u:"Masa: 57, 77 dan 75 minit. Hanya R→A→C→P memenuhi syarat kurang daripada 60 minit, walaupun kosnya lebih tinggi."}],
 bos:{j:"pilih",t:"Tol A–C dinaikkan daripada RM5 kepada RM9. Seorang pemandu menilai masanya RM0.30 seminit. Berdasarkan jumlah tol dan nilai masa, laluan manakah paling jimat?",p:["R→B→C→P, jumlah RM23.10","R→A→C→P, jumlah RM29.10","R→B→P, jumlah RM23.50","R→A→C→P, jumlah RM20.10"],b:0,u:"R→A→C→P: tol RM3 + RM9 = RM12, masa 57 × RM0.30 = RM17.10, jumlah RM29.10. R→B→C→P: RM0 + 77 × RM0.30 = RM23.10. R→B→P: RM1 + 75 × RM0.30 = RM23.50. Paling jimat: R→B→C→P.",kira:()=>{const j=(L)=>{const t=kos(G5.tepi,L,"k")+(L.join("").includes("AC")?4:0);return Math.round((t+kos(G5.tepi,L,"m")*0.3)*100)/100;};return j(["R","B","C","P"])===23.1&&j(["R","A","C","P"])===29.1&&j(["R","B","P"])===23.5;}}},

{n:6, tempat:"Pejabat Perancang", sk:"5.1.5 Masalah rangkaian bukan rutin", lampiran:"j",
 kadNama:"Jalan Baharu", kadEm:"\u{1F6A7}", kadFakta:"Menambah satu tepi baharu boleh mengubah laluan optimum. Perancang membandingkan penjimatan dengan kos membina jalan itu.",
 bosKadNama:"Perancang Bandar", bosKadEm:"\u{1F9ED}", bosKadFakta:"Keputusan perancangan yang baik menggunakan data rangkaian (jarak, masa, kos) dan mengambil kira pengguna yang terkesan.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih pelan \"Tiada jalan baharu\" dan laluan A→B→D→E→F. Berapakah jaraknya, dalam km?",tol:0.01,b:16,u:"4 + 5 + 4 + 3 = 16 km, iaitu laluan terpendek tanpa jalan baharu.",kira:()=>kos(G4.tepi,["A","B","D","E","F"],"j")},
 {j:"nombor",t:"Dalam Rajah 1, pilih pelan \"Jalan A–D\" dan laluan A→D→E→F. Berapakah jaraknya, dalam km?",tol:0.01,b:13,u:"6 + 4 + 3 = 13 km.",kira:()=>kos(G4.tepi.concat([["A","D",{j:6}]]),["A","D","E","F"],"j")},
 {j:"nombor",t:"Dalam Rajah 1, pilih pelan \"Jalan C–E\" dan laluan A→C→E→F. Berapakah jaraknya, dalam km?",tol:0.01,b:15,u:"7 + 5 + 3 = 15 km.",kira:()=>kos(G4.tepi.concat([["C","E",{j:5}]]),["A","C","E","F"],"j")},
 {j:"pilih",t:"Berdasarkan Rajah 1, pelan manakah memberi laluan terpendek dari A ke F?",p:["Jalan A–D, 13 km","Jalan C–E, 15 km","Tiada jalan baharu, 16 km","Kedua-dua pelan sama baik"],b:0,u:"Bandingkan jarak terpendek setiap pelan: 13 km, 15 km dan 16 km.",kira:()=>minimum(G4.tepi.concat([["A","D",{j:6}]]),"A","F","j")===13&&minimum(G4.tepi.concat([["C","E",{j:5}]]),"A","F","j")===15},
 {j:"nombor",t:"Sebuah bas berulang-alik dari A ke F (pergi dan balik) 20 kali sehari. Jika jalan A–D dibina, berapakah jumlah jarak yang dijimatkan sehari, dalam km?",tol:0.01,b:120,u:"Jimat sehala = 16 − 13 = 3 km. Pergi dan balik = 6 km. 20 kali × 6 km = 120 km sehari.",kira:()=>(16-13)*2*20},
 {j:"pilih",t:"Jalan C–E memberi penjimatan yang lebih kecil bagi perjalanan A ke F. Dalam keadaan apakah jalan C–E mungkin lebih wajar dibina?",p:["Jika ramai penduduk berulang-alik antara C dan E","Jika jalan A–D lebih murah untuk dibina","Jika kampung F mempunyai paling ramai penduduk","Jika jarak A ke B bertambah panjang"],b:0,u:"Tanpa jalan baharu, C ke E memerlukan C→D→E = 7 km. Jalan C–E (5 km) menjimatkan perjalanan penduduk C dan E, bukan sahaja perjalanan A ke F."},
 {j:"nombor",t:"Tanpa sebarang jalan baharu, berapakah jarak terpendek dari C ke E dalam Rajah 1, dalam km?",tol:0.01,b:7,u:"C→D→E = 3 + 4 = 7 km. Laluan lain lebih jauh.",kira:()=>minimum(G4.tepi,"C","E","j")},
 {j:"pilih",t:"Seorang pegawai berkata, \"Jalan baharu mesti menyambungkan bucu yang berdarjah paling rendah.\" Nilaikan cadangan ini.",p:["Tidak tepat; yang penting ialah penjimatan pemberat bagi laluan yang kerap digunakan","Tepat; bucu berdarjah rendah selalu berada pada laluan terpendek","Tepat; menambah tepi menurunkan darjah setiap bucu","Tidak tepat; jalan baharu tidak mengubah sebarang laluan"],b:0,u:"Darjah hanya mengira sambungan. Keputusan membina jalan bergantung pada jarak, masa atau kos yang dijimatkan dan bilangan pengguna."}],
 bos:{j:"buka",
  t:"Reka satu rangkaian pengangkutan atau sosial bagi kawasan sekolah awak yang mempunyai sekurang-kurangnya lima bucu dan pemberat pada setiap tepi.",
  arahan:"Lukis rangkaian itu dan nyatakan maksud bucu, tepi dan pemberat. Tentukan laluan optimum antara dua bucu, kemudian cadangkan satu tepi baharu yang mengurangkan kos. Tunjukkan pengiraan sebelum dan selepas, dan bincangkan satu kelebihan serta satu kekurangan cadangan awak.",
  u:"Jawapan TP6 yang kukuh mempunyai rangkaian yang jelas dengan pemberat yang munasabah, perbandingan laluan yang lengkap, cadangan tepi baharu yang benar-benar mengurangkan kos optimum, dan penilaian kelebihan serta kekurangan berdasarkan situasi sebenar."}}
];

module.exports = {
  id:"m4b5", tingkatan:4, kod:"5.0 Rangkaian dalam Teori Graf",
  tajuk:"Kota Rangkaian",
  subtajuk:"Matematik Ting. 4 · Bab 5 Rangkaian dalam Teori Graf",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mengenal bucu, tepi dan darjah dalam suatu graf, termasuk gelung dan berbilang tepi. Langkah seterusnya ialah membezakan graf terarah dengan graf tak terarah.",
   2:"{n} memahami perbezaan graf terarah dan tak terarah serta graf berpemberat dan tak berpemberat, dan dapat mengira darjah masuk dan darjah keluar. Perlu lebih latihan subgraf dan pokok.",
   3:"{n} boleh mengenal subgraf dan menentukan sama ada suatu subgraf ialah pokok menggunakan syarat terkait, tanpa kitaran dan tepi = bucu − 1.",
   4:"{n} mampu mewakilkan maklumat dalam rangkaian berpemberat dan mencari laluan terpendek. Seterusnya, latih masalah kos optimum dengan pelbagai kriteria.",
   5:"{n} dapat menyelesaikan masalah kos optimum yang melibatkan jarak, masa dan perbelanjaan serta membuat keputusan mengikut kekangan. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya mereka rangkaian sendiri, mencadangkan penambahbaikan yang mengurangkan kos optimum, dan menilai kelebihan serta kekurangannya. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Rangkaian dalam Teori Graf. Cadangan: ulang hentian pertama dengan Rajah 1 dan kira darjah setiap bucu bersama rakan sebaya."
  },
  lampiran:{ d:R_D, t:R_T, p:R_P, l:R_L, k:R_K, j:R_J },
  aras:ARAS
};
