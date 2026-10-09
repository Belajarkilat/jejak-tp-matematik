/* Sumber kandungan — Matematik KSSM Tingkatan 5, Bab 2 Matriks.
   Fail ini disunting tangan. Jalankan `node bina.js m5b2`.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 4
   dan 5, muka 87 (dskp/matematik-t4-t5.pdf). DSKP menulis enam tahap penuh.
   Istilah ikut DSKP: matriks baris, matriks lajur, matriks segi empat sama, matriks segi
   empat tepat, peringkat "m × n" dibaca "m dengan n", unsur aᵢⱼ, pendaraban skalar,
   matriks identiti I, matriks songsang A⁻¹ dan penentu. Songsang dihadkan kepada 2 × 2.

   Matriks dalam teks ditulis dengan M() (CSS .mat dalam math-ext.css).
   Rajah: widget t5mat (widget-m5b2.js). Semua hasil dikira dengan darab()/det() di bawah. */

const tanda = v => String(v).replace("-", "−");
const M = rows => '<span class="mat" style="--k:' + rows[0].length + '" role="img" aria-label="matriks ' +
  rows.map(r => r.map(tanda).join(" ")).join(", baris seterusnya ") + '">' + rows.map(r => r.map(v => "<span>" + tanda(v) + "</span>").join("")).join("") + "</span>";
const darab = (A, B) => A.map(r => B[0].map((_, j) => r.reduce((s, v, k) => s + v * B[k][j], 0)));
const tambah = (A, B, k = 1) => A.map((r, i) => r.map((v, j) => v + k * B[i][j]));
const skalar = (k, A) => A.map(r => r.map(v => k * v));
const det = A => A[0][0] * A[1][1] - A[0][1] * A[1][0];
const inv = A => { const d = det(A); return [[A[1][1] / d, -A[0][1] / d], [-A[1][0] / d, A[0][0] / d]]; };
const sama = (A, B) => A.length === B.length && A.every((r, i) => r.every((v, j) => Math.abs(v - B[i][j]) < 1e-9));

const SPI = [
"Mempamerkan pengetahuan asas tentang matriks.",
"Mempamerkan kefahaman tentang matriks.",
"Mengaplikasikan kefahaman tentang matriks untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang matriks dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang matriks dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang matriks dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- data ---------- */
const JUAL = [[40, 25], [32, 30], [18, 45]];
const A2 = [[3, -1], [2, 4]], B2 = [[1, 5], [-2, 0]];
const A3 = [[2, 3], [1, 4]], B3 = [[5, 1], [2, 6]], AB3 = darab(A3, B3);
const P4 = [[4, 3], [1, 1]], Q4 = [[2, 5], [1, 3]], R4m = [[3, 2], [6, 4]], S4 = [[5, 2], [3, 2]];
const A5 = [[2, 3], [1, 4]], P5 = [13, 14], X5 = darab(inv(A5), [[13], [14]]);
const K6 = [[3, 1], [5, 2]], K6i = inv(K6);
const huruf = c => "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(c) + 1;
const sulit = p => darab(K6, [[huruf(p[0])], [huruf(p[1])]]).map(r => r[0]);

/* ---------- lampiran ---------- */
const iw = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t5mat", kapsyen, alt }, extra);
const R1 = iw("Rajah 1 · Bilangan bungkus nasi lemak dan roti canai yang dijual oleh tiga gerai pada satu pagi. Gerakkan i dan j.",
  "Rajah interaktif matriks 3 dengan 2 jualan tiga gerai bagi dua jenis makanan; gelongsor baris dan lajur menyerlahkan satu unsur",
  { mod: "unsur", A: JUAL, baris: ["Gerai Ali", "Gerai Bala", "Gerai Chong"], lajur: ["Nasi", "Roti"], tajuk: "Jualan pagi (bungkus)" });
const R2 = iw("Rajah 1 · Matriks A dan B. Pilih operasi.",
  "Rajah interaktif matriks A dan B dua dengan dua; cip memilih A tambah B, A tolak B, B tolak A atau 3A dan hasilnya dipaparkan",
  { mod: "operasi", A: A2, B: B2, ops: [{ t: "A + B", jenis: "tambah" }, { t: "A − B", jenis: "tolak" }, { t: "B − A", jenis: "tolakB" }, { t: "3A", jenis: "skalar", k: 3 }] });
const R3 = iw("Rajah 1 · Pendaraban AB. Gerakkan gelongsor untuk melihat setiap unsur dikira.",
  "Rajah interaktif pendaraban dua matriks dua dengan dua; gelongsor memilih unsur hasil darab dan menyerlahkan baris A dan lajur B yang didarab",
  { mod: "darab", A: A3, B: B3 });
const R4 = iw("Rajah 1 · Empat matriks P, Q, R dan S. Pilih satu matriks.",
  "Rajah interaktif penentu dan matriks songsang bagi empat matriks dua dengan dua; satu matriks mempunyai penentu sifar dan tiada matriks songsang",
  { mod: "songsang", senarai: [P4, Q4, R4m, S4] });
const R5 = iw("Rajah 1 · Harga epal (x) dan oren (y) sekilogram. Kira dahulu, kemudian semak.",
  "Rajah interaktif persamaan linear serentak 2x + 3y = 13 dan x + 4y = 14 diselesaikan dengan kaedah matriks dalam empat langkah, dalam mod cabar",
  { mod: "serentak", cabar: true, A: A5, P: P5, nama: ["x", "y"] });
const R6 = iw("Rajah 1 · Mesej rahsia MATAHARI disulitkan dengan kunci K. Pilih pasangan huruf dan arah.",
  "Rajah interaktif kod rahsia: setiap pasangan huruf ditukar kepada nombor dan didarab dengan matriks kunci K; arah nyahsulit menggunakan matriks songsang K",
  { mod: "kod", K: K6, mesej: "MATAHARI" });

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Gerai Pasar", sk:"2.1.1 – 2.1.3 Mewakilkan maklumat, peringkat, unsur dan matriks sama", lampiran:"r1",
 kadNama:"Peringkat Matriks", kadEm:"\u{1F4CB}", kadFakta:"Matriks dengan m baris dan n lajur ialah matriks m × n, dibaca 'm dengan n'. Unsur aᵢⱼ terletak pada baris i dan lajur j.",
 bosKadNama:"Matriks Sama", bosKadEm:"\u{1F91D}", bosKadFakta:"Dua matriks adalah sama jika peringkatnya sama dan setiap unsur sepadan adalah sama.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah peringkat matriks jualan itu?",p:["3 × 2","2 × 3","6 × 1","3 × 3"],b:0,u:"Matriks itu mempunyai 3 baris (tiga gerai) dan 2 lajur (dua jenis makanan), jadi peringkatnya 3 × 2."},
 {j:"nombor",t:"Dalam Rajah 1, gerakkan i = 2 dan j = 1. Berapakah nilai unsur a₂₁?",tol:0.01,b:32,u:"a₂₁ ialah unsur pada baris 2 (Gerai Bala) dan lajur 1 (nasi lemak), iaitu 32.",kira:()=>JUAL[1][0]},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah nilai unsur a₃₂?",tol:0.01,b:45,u:"Baris 3 ialah Gerai Chong dan lajur 2 ialah roti canai. a₃₂ = 45.",kira:()=>JUAL[2][1]},
 {j:"pilih",t:"Dalam Rajah 1, unsur a₁₂ mewakili:",p:["Roti canai yang dijual oleh Gerai Ali","Nasi lemak yang dijual oleh Gerai Bala","Nasi lemak yang dijual oleh Gerai Ali","Roti canai yang dijual oleh Gerai Bala"],b:0,u:"a₁₂ berada pada baris 1 (Gerai Ali) dan lajur 2 (roti canai), iaitu 25 bungkus."},
 {j:"pilih",t:"Matriks "+M([[4,-1,7]])+" ialah:",p:["Matriks baris","Matriks lajur 3 × 1","Matriks segi empat sama","Matriks identiti 3 × 3"],b:0,u:"Matriks itu mempunyai satu baris dan tiga lajur, jadi ia ialah matriks baris berperingkat 1 × 3."},
 {j:"pilih",t:"Matriks segi empat sama ialah matriks yang:",p:["Bilangan baris sama dengan bilangan lajur","Semua unsurnya mempunyai nilai yang sama","Mempunyai satu lajur dan beberapa baris","Setiap unsurnya ialah nombor kuasa dua"],b:0,u:"Contoh matriks segi empat sama ialah matriks 2 × 2 dan 3 × 3. Bilangan baris dan lajurnya sama."},
 {j:"nombor",t:"Berapakah bilangan unsur dalam suatu matriks berperingkat 4 × 3?",tol:0.01,b:12,u:"Matriks 4 × 3 mempunyai 4 baris dan 3 lajur, jadi 4 × 3 = 12 unsur.",kira:()=>4*3},
 {j:"nombor",t:"Diberi "+M([["x",3],[4,"y"]])+" = "+M([[5,3],[4,-2]])+". Cari nilai x.",tol:0.01,b:5,u:"Matriks yang sama mempunyai unsur sepadan yang sama. Unsur baris 1, lajur 1: x = 5.",kira:()=>5}],
 bos:{j:"nombor",t:"Diberi "+M([["2x",6],[5,"y − 1"]])+" = "+M([[8,6],[5,4]])+". Hitung nilai x + y.",tol:0.01,b:9,u:"Langkah 1: 2x = 8, jadi x = 4. Langkah 2: y − 1 = 4, jadi y = 5. Maka x + y = 4 + 5 = 9.",kira:()=>8/2+(4+1)}},

{n:2, tempat:"Kaunter Stok", sk:"2.2.1 / 2.2.2 Penambahan, penolakan dan pendaraban skalar", lampiran:"r2",
 kadNama:"Tambah dan Tolak", kadEm:"\u{2795}", kadFakta:"Dua matriks boleh ditambah atau ditolak jika peringkatnya sama. Operasi dibuat pada unsur yang sepadan.",
 bosKadNama:"Pendaraban Skalar", bosKadEm:"\u{2716}\u{FE0F}", bosKadFakta:"kA bermaksud setiap unsur A didarab dengan k. Contohnya 3A = A + A + A.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih A + B. Hasilnya ialah:",p:[M(tambah(A2,B2)),M([[4,-6],[0,4]]),M([[2,4],[4,4]]),M([[4,4],[4,4]])],b:0,u:"Tambah unsur sepadan: 3 + 1 = 4, −1 + 5 = 4, 2 + (−2) = 0, 4 + 0 = 4.",kira:()=>sama(tambah(A2,B2),[[4,4],[0,4]])},
 {j:"nombor",t:"Dalam Rajah 1, pilih A − B. Berapakah unsur pada baris 1, lajur 2?",tol:0.01,b:-6,u:"Unsur baris 1, lajur 2: −1 − 5 = −6.",kira:()=>tambah(A2,B2,-1)[0][1]},
 {j:"nombor",t:"Dalam Rajah 1, pilih B − A. Berapakah unsur pada baris 2, lajur 1?",tol:0.01,b:-4,u:"Unsur baris 2, lajur 1: −2 − 2 = −4.",kira:()=>tambah(B2,A2,-1)[1][0]},
 {j:"nombor",t:"Dalam Rajah 1, pilih 3A. Berapakah unsur pada baris 2, lajur 2?",tol:0.01,b:12,u:"Pendaraban skalar: setiap unsur didarab 3. 3 × 4 = 12.",kira:()=>skalar(3,A2)[1][1]},
 {j:"pilih",t:"Bandingkan A − B dan B − A dalam Rajah 1. Apakah hubungannya?",p:["B − A = −(A − B)","B − A = A − B","B − A = 2(A − B)","B − A = A + B"],b:0,u:"Setiap unsur B − A ialah negatif unsur sepadan A − B. Contohnya baris 1, lajur 2: −6 dan 6.",kira:()=>sama(tambah(B2,A2,-1),skalar(-1,tambah(A2,B2,-1)))},
 {j:"pilih",t:"Matriks "+M([[1,2]])+" dan "+M([[3],[4]])+" tidak boleh ditambah kerana:",p:["Peringkat kedua-dua matriks berbeza","Unsur-unsurnya berbeza","Kedua-duanya bukan matriks segi empat sama","Jumlah unsurnya tidak sama"],b:0,u:"Matriks pertama berperingkat 1 × 2 dan matriks kedua berperingkat 2 × 1. Penambahan memerlukan peringkat yang sama."},
 {j:"nombor",t:"Diberi "+M([["x",2]])+" + "+M([[3,"y"]])+" = "+M([[7,5]])+". Cari nilai x.",tol:0.01,b:4,u:"Unsur pertama: x + 3 = 7, jadi x = 4. (Unsur kedua: 2 + y = 5, jadi y = 3.)",kira:()=>7-3},
 {j:"pilih",t:"Bagi sebarang matriks A, A − A ialah:",p:["O","Matriks identiti I","Matriks A","Matriks 2A"],b:0,u:"Setiap unsur ditolak dengan dirinya sendiri, jadi semua unsur menjadi 0. Hasilnya ialah matriks sifar O yang sama peringkat dengan A."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, hitung 2A − 3B.",p:[M(tambah(skalar(2,A2),B2,-3)),M([[3,13],[-2,8]]),M([[9,-17],[10,8]]),M([[3,-17],[-2,8]])],b:0,u:"2A = [6 −2; 4 8] dan 3B = [3 15; −6 0]. 2A − 3B = [6 − 3, −2 − 15; 4 − (−6), 8 − 0] = [3 −17; 10 8].",kira:()=>sama(tambah(skalar(2,A2),B2,-3),[[3,-17],[10,8]])}},

{n:3, tempat:"Kilang Darab", sk:"2.2.3 Pendaraban dua matriks", lampiran:"r3",
 kadNama:"Baris Darab Lajur", kadEm:"\u{1F9EE}", kadFakta:"Unsur cᵢⱼ dalam AB = baris i matriks A didarab dengan lajur j matriks B, kemudian hasil darab itu dijumlahkan.",
 bosKadNama:"Jumlah Belian", bosKadEm:"\u{1F9FE}", bosKadFakta:"Matriks harga 1 × n didarab matriks kuantiti n × 1 memberi jumlah bayaran sebagai matriks 1 × 1.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih unsur c11. Berapakah nilainya?",tol:0.01,b:16,u:"c₁₁ = baris 1 A · lajur 1 B = 2 × 5 + 3 × 2 = 10 + 6 = 16.",kira:()=>AB3[0][0]},
 {j:"nombor",t:"Dalam Rajah 1, pilih unsur c12. Berapakah nilainya?",tol:0.01,b:20,u:"c₁₂ = 2 × 1 + 3 × 6 = 2 + 18 = 20.",kira:()=>AB3[0][1]},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah unsur c₂₁?",tol:0.01,b:13,u:"c₂₁ = baris 2 A · lajur 1 B = 1 × 5 + 4 × 2 = 5 + 8 = 13.",kira:()=>AB3[1][0]},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah unsur c₂₂?",tol:0.01,b:25,u:"c₂₂ = 1 × 1 + 4 × 6 = 1 + 24 = 25.",kira:()=>AB3[1][1]},
 {j:"pilih",t:"Pendaraban AB boleh dilakukan jika:",p:["Bilangan lajur A sama dengan bilangan baris B","Bilangan baris A sama dengan bilangan baris B","A dan B ialah matriks segi empat sama","Bilangan unsur A sama dengan bilangan unsur B"],b:0,u:"Setiap baris A didarab dengan setiap lajur B, jadi panjang baris A (bilangan lajur A) mesti sama dengan panjang lajur B (bilangan baris B)."},
 {j:"pilih",t:"Matriks P berperingkat 2 × 3 dan Q berperingkat 3 × 1. Peringkat PQ ialah:",p:["2 × 1","3 × 3","1 × 2","2 × 3"],b:0,u:"(2 × 3)(3 × 1): nombor dalam sama (3), dan peringkat hasil ialah nombor luar, 2 × 1."},
 {j:"pilih",t:"Bagi matriks A dan B dalam Rajah 1, BA ialah "+M(darab(B3,A3))+". Apakah kesimpulannya?",p:["AB ≠ BA, jadi pendaraban matriks tidak kalis tukar tertib","AB = BA kerana kedua-duanya 2 × 2","AB = BA kerana unsur pepenjurunya sama","BA tidak wujud kerana B dahulu"],b:0,u:"AB = [16 20; 13 25] tetapi BA = [11 19; 10 30]. Secara umum AB ≠ BA, jadi tertib pendaraban penting.",kira:()=>!sama(AB3,darab(B3,A3))},
 {j:"nombor",t:"Hitung "+M([[2,3]])+" × "+M([[4],[1]])+".",tol:0.01,b:11,u:"(1 × 2)(2 × 1) memberi matriks 1 × 1: 2 × 4 + 3 × 1 = 8 + 3 = 11.",kira:()=>darab([[2,3]],[[4],[1]])[0][0]}],
 bos:{j:"nombor",t:"Harga sebuah buku, pen dan pembaris masing-masing ialah RM3, RM2 dan RM5. Aina membeli 4 buku, 6 pen dan 2 pembaris. Hitung "+M([[3,2,5]])+" × "+M([[4],[6],[2]])+" untuk mencari jumlah bayaran, dalam RM.",tol:0.01,b:34,u:"Baris harga didarab lajur kuantiti: 3 × 4 + 2 × 6 + 5 × 2 = 12 + 12 + 10 = RM34.",kira:()=>darab([[3,2,5]],[[4],[6],[2]])[0][0]}},

{n:4, tempat:"Bilik Kunci", sk:"2.2.4 / 2.2.5 Matriks identiti dan matriks songsang", lampiran:"r4",
 kadNama:"Matriks Identiti", kadEm:"\u{1F511}", kadFakta:"I = [1 0; 0 1]. Bagi sebarang matriks A 2 × 2, AI = IA = A, sama seperti nombor 1 dalam pendaraban.",
 bosKadNama:"Penentu Sifar", bosKadEm:"\u{1F6AB}", bosKadFakta:"Matriks songsang A⁻¹ wujud hanya jika penentu ad − bc ≠ 0.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih P. Berapakah penentu P?",tol:0.01,b:1,u:"Penentu = ad − bc = 4 × 1 − 3 × 1 = 4 − 3 = 1.",kira:()=>det(P4)},
 {j:"nombor",t:"Berdasarkan Rajah 1, P⁻¹ ialah "+M([[1,"p"],[-1,4]])+". Cari nilai p.",tol:0.01,b:-3,u:"P⁻¹ = 1/1 × [1 −3; −1 4]. Tukar kedudukan a dan d, dan tukar tanda b dan c, jadi p = −3.",kira:()=>inv(P4)[0][1]},
 {j:"pilih",t:"Dalam Rajah 1, matriks manakah tidak mempunyai matriks songsang?",p:["R","P","Q","S"],b:0,u:"Penentu R = 3 × 4 − 2 × 6 = 12 − 12 = 0. Matriks dengan penentu sifar tiada songsang.",kira:()=>det(R4m)===0&&det(P4)!==0&&det(Q4)!==0&&det(S4)!==0},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah penentu S?",tol:0.01,b:4,u:"Penentu S = 5 × 2 − 2 × 3 = 10 − 6 = 4.",kira:()=>det(S4)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah unsur baris 2, lajur 2 bagi S⁻¹? Berikan jawapan dalam bentuk perpuluhan.",tol:0.01,b:1.25,u:"S⁻¹ = ¼ × [2 −2; −3 5]. Unsur baris 2, lajur 2 = 5 ÷ 4 = 1.25.",kira:()=>inv(S4)[1][1]},
 {j:"pilih",t:"Matriks identiti 2 × 2 ialah:",p:[M([[1,0],[0,1]]),M([[0,1],[1,0]]),M([[1,1],[1,1]]),M([[0,0],[0,0]])],b:0,u:"Matriks identiti mempunyai 1 pada pepenjuru utama dan 0 di tempat lain."},
 {j:"pilih",t:"Diberi A ialah matriks 2 × 2 dan I ialah matriks identiti. AI sama dengan:",p:["A","Matriks I","Matriks 2A","Matriks sifar O"],b:0,u:"Pendaraban dengan I tidak mengubah matriks: AI = IA = A. Semak: [4 3; 1 1][1 0; 0 1] = [4 3; 1 1].",kira:()=>sama(darab(P4,[[1,0],[0,1]]),P4)},
 {j:"pilih",t:"Dalam Rajah 1, pilih Q. Hasil darab QQ⁻¹ ialah:",p:["Matriks identiti I","Matriks sifar O","Matriks Q","Matriks Q⁻¹"],b:0,u:"Mengikut takrif, AA⁻¹ = A⁻¹A = I. Semak: [2 5; 1 3][3 −5; −1 2] = [1 0; 0 1].",kira:()=>sama(darab(Q4,inv(Q4)),[[1,0],[0,1]])}],
 bos:{j:"nombor",t:"Matriks "+M([["k",4],[3,6]])+" tidak mempunyai matriks songsang. Cari nilai k.",tol:0.01,b:2,u:"Tiada songsang bermaksud penentu = 0. 6k − 4 × 3 = 0, jadi 6k = 12 dan k = 2.",kira:()=>det([[2,4],[3,6]])===0?2:-1}},

{n:5, tempat:"Pasar Raya", sk:"2.2.6 / 2.2.7 Persamaan linear serentak dan masalah matriks", lampiran:"r5",
 kadNama:"AX = B", kadEm:"\u{1F6D2}", kadFakta:"Sistem ax + by = p dan cx + dy = q ditulis sebagai AX = B. Penyelesaiannya ialah X = A⁻¹B.",
 bosKadNama:"Tiket Pameran", bosKadEm:"\u{1F3AB}", bosKadFakta:"Selepas mendapat nilai pemboleh ubah, sentiasa jawab soalan asal: kadang-kadang soalan meminta jumlah, bukan nilai x atau y.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, persamaan 2x + 3y = 13 dan x + 4y = 14 ditulis dalam bentuk matriks sebagai:",p:[M([[2,3],[1,4]])+M([["x"],["y"]])+" = "+M([[13],[14]]),M([[2,1],[3,4]])+M([["x"],["y"]])+" = "+M([[13],[14]]),M([[2,3],[1,4]])+M([["x"],["y"]])+" = "+M([[14],[13]]),M([[13,3],[14,4]])+M([["x"],["y"]])+" = "+M([[2],[1]])],b:0,u:"Pekali x dan y bagi setiap persamaan menjadi satu baris matriks A. Pemalar di sebelah kanan menjadi matriks lajur."},
 {j:"nombor",t:"Dalam Rajah 1, gerakkan ke langkah 2. Berapakah penentu matriks pekali? Kira dahulu, kemudian semak.",tol:0.01,b:5,u:"Penentu = 2 × 4 − 3 × 1 = 8 − 3 = 5.",kira:()=>det(A5)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah harga sekilogram epal, x, dalam RM?",tol:0.01,b:2,u:"x = (4 × 13 − 3 × 14) ÷ 5 = (52 − 42) ÷ 5 = 2.",kira:()=>X5[0][0]},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah harga sekilogram oren, y, dalam RM?",tol:0.01,b:3,u:"y = (2 × 14 − 1 × 13) ÷ 5 = (28 − 13) ÷ 5 = 3.",kira:()=>X5[1][0]},
 {j:"nombor",t:"Selesaikan dengan kaedah matriks: 3x + 2y = 12 dan x − y = −1. Cari nilai x.",tol:0.01,b:2,u:"Penentu = 3(−1) − 2(1) = −5. x = ((−1)(12) − 2(−1)) ÷ (−5) = (−12 + 2) ÷ (−5) = 2.",kira:()=>darab(inv([[3,2],[1,-1]]),[[12],[-1]])[0][0]},
 {j:"nombor",t:"Bagi sistem 3x + 2y = 12 dan x − y = −1, cari nilai y.",tol:0.01,b:3,u:"y = (3(−1) − 1(12)) ÷ (−5) = (−3 − 12) ÷ (−5) = 3. Semak: 3(2) + 2(3) = 12.",kira:()=>darab(inv([[3,2],[1,-1]]),[[12],[-1]])[1][0]},
 {j:"pilih",t:"Sistem 2x + 4y = 6 dan x + 2y = 5 tidak dapat diselesaikan dengan kaedah matriks songsang kerana:",p:["Penentu matriks pekali ialah sifar","Pemalar 6 dan 5 berbeza","Matriks pekali bukan segi empat sama","Nilai x dan y negatif"],b:0,u:"Penentu = 2 × 2 − 4 × 1 = 0, jadi A⁻¹ tidak wujud. Kedua-dua garis selari dan tiada penyelesaian.",kira:()=>det([[2,4],[1,2]])===0},
 {j:"pilih",t:"Dalam X = A⁻¹B, mengapakah A⁻¹ didarab di sebelah kiri B dan bukan di sebelah kanan?",p:["Pendaraban matriks tidak kalis tukar tertib, dan A⁻¹A = I","Supaya penentu menjadi positif","Kerana B ialah matriks segi empat sama","Kerana A⁻¹ sentiasa lebih kecil daripada B"],b:0,u:"Daripada AX = B, darab kedua-dua belah di sebelah kiri dengan A⁻¹: A⁻¹AX = A⁻¹B, jadi IX = X = A⁻¹B. BA⁻¹ biasanya tidak sama dengan A⁻¹B."}],
 bos:{j:"nombor",t:"3 tiket dewasa dan 2 tiket kanak-kanak berharga RM64. 2 tiket dewasa dan 5 tiket kanak-kanak berharga RM72. Gunakan kaedah matriks untuk mencari harga 4 tiket dewasa dan 3 tiket kanak-kanak, dalam RM.",tol:0.01,b:88,u:"Langkah 1: [3 2; 2 5][a; k] = [64; 72], penentu = 15 − 4 = 11. Langkah 2: a = (5 × 64 − 2 × 72) ÷ 11 = 16 dan k = (3 × 72 − 2 × 64) ÷ 11 = 8. Langkah 3: 4(16) + 3(8) = 64 + 24 = RM88.",kira:()=>{const X=darab(inv([[3,2],[2,5]]),[[64],[72]]);return 4*X[0][0]+3*X[1][0];}}},

{n:6, tempat:"Bilik Kod", sk:"2.2.7 Masalah matriks bukan rutin (kod rahsia)", lampiran:"r6",
 kadNama:"Kunci Rahsia", kadEm:"\u{1F510}", kadFakta:"Mesej boleh disulitkan dengan mendarab pasangan nombor dengan matriks kunci K, dan dinyahsulit dengan K⁻¹.",
 bosKadNama:"Pereka Kod", bosKadEm:"\u{1F575}\u{FE0F}", bosKadFakta:"Kunci dengan penentu 1 atau −1 memberi K⁻¹ yang semua unsurnya integer, jadi mesej boleh dinyahsulit tanpa pecahan.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih pasangan MA dan arah Sulitkan. Kod yang terhasil ialah:",p:["40, 67","13, 1","67, 40","41, 66"],b:0,u:"M = 13, A = 1. K[13; 1] = [3 × 13 + 1 × 1; 5 × 13 + 2 × 1] = [40; 67].",kira:()=>sulit("MA").join()==="40,67"},
 {j:"nombor",t:"Dalam Rajah 1, pilih pasangan TA. Berapakah nombor kod yang pertama?",tol:0.01,b:61,u:"T = 20, A = 1. Nombor pertama = 3 × 20 + 1 × 1 = 61.",kira:()=>sulit("TA")[0]},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah penentu kunci K?",tol:0.01,b:1,u:"Penentu K = 3 × 2 − 1 × 5 = 6 − 5 = 1.",kira:()=>det(K6)},
 {j:"nombor",t:"Berdasarkan Rajah 1, K⁻¹ = "+M([[2,"q"],[-5,3]])+". Cari nilai q.",tol:0.01,b:-1,u:"K⁻¹ = 1/1 × [2 −1; −5 3]. Unsur b ditukar tanda: q = −1.",kira:()=>K6i[0][1]},
 {j:"pilih",t:"Kod 63, 108 diterima. Gunakan K⁻¹ dalam Rajah 1 untuk menyahsulitnya. Pasangan hurufnya ialah:",p:["RI","IR","HA","TA"],b:0,u:"K⁻¹[63; 108] = [2 × 63 − 108; −5 × 63 + 3 × 108] = [18; 9]. Huruf ke-18 ialah R dan huruf ke-9 ialah I.",kira:()=>darab(K6i,[[63],[108]]).map(r=>r[0]).join()==="18,9"},
 {j:"pilih",t:"Mengapakah kunci dengan penentu 1 lebih sesuai untuk kod ini berbanding kunci dengan penentu 7?",p:["Unsur K⁻¹ ialah integer, jadi huruf asal diperoleh dengan tepat","Nombor kod yang terhasil menjadi lebih kecil dan mudah ditulis","Kunci itu boleh didarab dengan mana-mana matriks lain","Penentu 7 menjadikan matriks songsang kunci tidak wujud"],b:0,u:"K⁻¹ = (1/penentu) × [d −b; −c a]. Dengan penentu 1, tiada pecahan, jadi pengiraan nyahsulit memberi nombor bulat 1 hingga 26."},
 {j:"pilih",t:"Diberi AX = B dengan A = "+M([[2,1],[1,1]])+" dan B = "+M([[7,4],[5,3]])+". Matriks X ialah:",p:[M(darab(inv([[2,1],[1,1]]),[[7,4],[5,3]])),M([[9,5],[12,7]]),M([[1,2],[3,2]]),M([[3,1],[2,1]])],b:0,u:"X = A⁻¹B. Penentu A = 2 − 1 = 1, A⁻¹ = [1 −1; −1 2]. X = [7 − 5, 4 − 3; −7 + 10, −4 + 6] = [2 1; 3 2].",kira:()=>sama(darab(inv([[2,1],[1,1]]),[[7,4],[5,3]]),[[2,1],[3,2]])},
 {j:"nombor",t:"Seorang murid menyulitkan pasangan HA dengan kunci K dalam Rajah 1 dan mendapat 25 dan 42. Dia mahu menghantar mesej 'HAHA'. Berapakah jumlah keempat-empat nombor kod?",tol:0.01,b:134,u:"Setiap pasangan HA menjadi 25 dan 42. Untuk HAHA: 25 + 42 + 25 + 42 = 134. Perhatikan bahawa pasangan yang sama memberi kod yang sama, satu kelemahan kod ini.",kira:()=>2*(sulit("HA")[0]+sulit("HA")[1])}],
 bos:{j:"buka",
  t:"Reka sistem kod rahsia awak sendiri menggunakan matriks 2 × 2.",
  arahan:"Pilih matriks kunci K dengan penentu 1 atau −1 dan tunjukkan pengiraan penentunya. Sulitkan satu perkataan empat huruf (A = 1, …, Z = 26), kemudian tunjukkan cara rakan awak menyahsulit kod itu dengan K⁻¹ dan semak bahawa KK⁻¹ = I. Terangkan mengapa kunci dengan penentu 0 tidak boleh digunakan, dan cadangkan satu cara untuk menjadikan kod awak lebih sukar diteka.",
  u:"Jawapan TP6 yang kukuh memilih kunci yang sah dengan penentu ±1, menunjukkan pengiraan penyulitan dan penyahsulitan yang tepat, menyemak KK⁻¹ = I, menerangkan peranan penentu, dan mencadangkan penambahbaikan yang munasabah."}}
];

module.exports = {
  id:"m5b2", tingkatan:5, kod:"2.0 Matriks",
  tajuk:"Kilang Matriks",
  subtajuk:"Matematik Ting. 5 · Bab 2 Matriks",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mewakilkan maklumat dalam bentuk matriks, menentukan peringkat dan mengenal pasti unsur. Langkah seterusnya ialah operasi tambah, tolak dan pendaraban skalar.",
   2:"{n} memahami syarat dan cara menambah, menolak dan mendarab matriks dengan suatu nombor. Perlu lebih latihan mendarab dua matriks.",
   3:"{n} boleh mendarab dua matriks dengan kaedah baris darab lajur dan menentukan peringkat hasil darab.",
   4:"{n} mampu menentukan penentu, matriks identiti dan matriks songsang bagi matriks 2 × 2. Seterusnya, gunakan kaedah matriks untuk persamaan serentak.",
   5:"{n} dapat menyelesaikan persamaan linear serentak dan masalah harian dengan kaedah matriks. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya menggunakan matriks secara kreatif untuk mereka dan menyahsulit kod rahsia serta menerangkan peranan penentu. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Matriks. Cadangan: ulang hentian pertama dengan Rajah 1 dan susun data jualan kantin dalam bentuk matriks."
  },
  lampiran:{ r1:R1, r2:R2, r3:R3, r4:R4, r5:R5, r6:R6 },
  aras:ARAS
};
