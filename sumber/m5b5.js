/* Sumber kandungan — Matematik KSSM Tingkatan 5, Bab 5 Kekongruenan, Pembesaran dan
   Gabungan Transformasi. Fail ini disunting tangan. Jalankan `node bina.js m5b5`.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 4
   dan 5, muka 101 (dskp/matematik-t4-t5.pdf). DSKP menulis enam tahap penuh.
   Syarat yang diwajibkan DSKP 5.1.2: SSS, SAS, ASA, AAS, AAA dan SSA. Pembesaran: faktor skala
   pecahan dan negatif, luas imej = k² × luas objek. Gabungan transformasi: translasi,
   pantulan, putaran dan pembesaran; AB bermaksud B dahulu, kemudian A; kalis tukar tertib.
   Teselasi: transformasi isometri dan jenis Escher.

   Rajah: widget t5trans (widget-m5b5.js). Koordinat dan sudut dikira oleh ubah() di bawah. */

const bul = (n, d) => Math.round(n * Math.pow(10, d)) / Math.pow(10, d);
const jarak = (p, q) => Math.hypot(p[0] - q[0], p[1] - q[1]);
const sudut = (a, b, c) => { const u = [a[0] - b[0], a[1] - b[1]], v = [c[0] - b[0], c[1] - b[1]]; return Math.acos((u[0] * v[0] + u[1] * v[1]) / (Math.hypot(...u) * Math.hypot(...v))) * 180 / Math.PI; };
const ubah = (t, [x, y]) => {
  if (t.j === "T") return [x + t.a, y + t.b];
  if (t.j === "P") return t.paksi === "y" ? [-x, y] : t.paksi === "x" ? [x, -y] : [y, x];
  if (t.j === "R") { const [cx, cy] = t.c, dx = x - cx, dy = y - cy; return t.d === 90 ? [cx + dy, cy - dx] : t.d === -90 ? [cx - dy, cy + dx] : [cx - dx, cy - dy]; }
  if (t.j === "B") return [t.c[0] + t.k * (x - t.c[0]), t.c[1] + t.k * (y - t.c[1])];
};
const k2 = p => "(" + p.map(v => String(bul(v, 2)).replace("-", "−")).join(", ") + ")";
const sama = (p, q) => Math.abs(p[0] - q[0]) < 1e-9 && Math.abs(p[1] - q[1]) < 1e-9;
const luas = P => Math.abs(P.reduce((s, a, i) => { const b = P[(i + 1) % P.length]; return s + a[0] * b[1] - b[0] * a[1]; }, 0)) / 2;

const SPI = [
"Mempamerkan pengetahuan asas tentang kekongruenan, pembesaran dan gabungan transformasi.",
"Mempamerkan kefahaman tentang kekongruenan, pembesaran dan gabungan transformasi.",
"Mengaplikasikan kefahaman tentang kekongruenan, pembesaran dan gabungan transformasi untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kekongruenan, pembesaran dan gabungan transformasi dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kekongruenan, pembesaran dan gabungan transformasi dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kekongruenan, pembesaran dan gabungan transformasi dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- data ---------- */
const T0 = [[0, 0], [7, 0], [2, 5]], T0c = [[7, 0], [0, 0], [5, 5]];     /* T0c = pantulan T0, kongruen */
const T0s = T0.map(p => p.map(v => bul(0.7 * v, 6)));                      /* serupa, tidak kongruen */
const SSA_1 = [[0, 0], [6, 0], [5.696, 3.988]], SSA_2 = [[0, 0], [6, 0], [2.356, 1.650]]; /* ∠A = 35°, AB = 6, BC = 4 */
const pas = (t, P, Q, tanda, kongruen, ket) => ({ t, P, Q, tanda, kongruen, ket });
const PUSAT2 = [1, -1], OBJ2 = [[2, 0], [4, 0], [2, 1]];
const OBJ3 = [[1, 1], [3, 1], [3, 2], [1, 2]];
const OBJ4 = [[1, 1], [3, 1], [1, 2]], TT = { j: "T", a: -2, b: 2, nama: "T", t: "translasi (−2, 2)" }, MM = { j: "P", paksi: "y", nama: "M", t: "pantulan pada paksi-y" };
const OBJ5 = [[1, 1], [2, 1], [1, 3]], RR = { j: "R", d: 90, c: [0, 0], nama: "R", t: "putaran 90° ikut arah jam pada O" }, VV = { j: "B", k: 2, c: [0, 0], nama: "V", t: "pembesaran k = 2 pada O" };
const dalam = n => (n - 2) * 180 / n;

/* ---------- lampiran ---------- */
const iw = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t5trans", kapsyen, alt }, extra);
const R1 = iw("Rajah 1 · Segi tiga ABC dan PQR dengan ukuran yang ditanda. Pilih satu syarat.",
  "Rajah interaktif dua segi tiga bagi setiap syarat SSS, SAS, ASA, AAS, AAA dan SSA, dengan sisi dan sudut yang ditanda serta kesimpulan sama ada segi tiga itu kongruen",
  { mod: "syarat", pasangan: [
    pas("SSS", T0, T0c, ["AB", "BC", "CA"], true, ["Tiga pasang sisi sepadan sama panjang."]),
    pas("SAS", T0, T0c, ["AB", "∠A", "CA"], true, ["Dua sisi dan sudut di antaranya sama."]),
    pas("ASA", T0, T0c, ["∠A", "AB", "∠B"], true, ["Dua sudut dan sisi di antaranya sama."]),
    pas("AAS", T0, T0c, ["∠A", "∠B", "BC"], true, ["Dua sudut dan satu sisi bukan", "di antaranya sama."]),
    pas("AAA", T0, T0s, ["∠A", "∠B", "∠C"], false, ["Sudut sama tetapi saiz berbeza:", "serupa, bukan kongruen."]),
    pas("SSA", SSA_1, SSA_2, ["AB", "BC", "∠A"], false, ["Dua segi tiga berbeza memenuhi", "ukuran yang sama."])] });
const R2 = iw("Rajah 1 · Pembesaran segi tiga ABC pada pusat P(1, −1). Pilih faktor skala k.",
  "Rajah interaktif pembesaran segi tiga pada satah Cartes dengan pusat (1, −1) dan faktor skala 2, setengah, negatif 1 atau negatif 2; garis dari pusat menghubungkan objek dan imej",
  { mod: "besar", obj: OBJ2, pusat: PUSAT2, k: [2, 0.5, -1, -2], kt: ["2", "1/2", "−1", "−2"], lo: -8, hi: 8 });
const R3 = iw("Rajah 1 · Pembesaran segi empat tepat ABCD pada asalan O. Pilih faktor skala k.",
  "Rajah interaktif pembesaran segi empat tepat pada asalan dengan faktor skala 2, negatif 2, setengah dan negatif setengah; luas objek dan luas imej dibandingkan",
  { mod: "besar", obj: OBJ3, pusat: [0, 0], k: [2, -2, 0.5, -0.5], kt: ["2", "−2", "1/2", "−1/2"], nama: ["A", "B", "C", "D"], lo: -8, hi: 8 });
const R4 = iw("Rajah 1 · T ialah translasi (−2, 2) dan M ialah pantulan pada paksi-y. Pilih paparan.",
  "Rajah interaktif gabungan transformasi translasi T dan pantulan M ke atas segi tiga PQR; paparan TM dan MT menunjukkan imej yang berbeza",
  { mod: "gabung", obj: OBJ4, A: TT, B: MM });
const R5 = iw("Rajah 1 · R ialah putaran 90° ikut arah jam pada O, V ialah pembesaran k = 2 pada O. Kira dahulu, kemudian semak.",
  "Rajah interaktif gabungan putaran R dan pembesaran V pada pusat yang sama ke atas segi tiga PQR, dalam mod cabar; RV dan VR memberi imej yang sama",
  { mod: "gabung", cabar: true, obj: OBJ5, A: RR, B: VV });
const R6 = iw("Rajah 1 · Poligon sekata yang bertemu pada satu bucu. Pilih poligon.",
  "Rajah interaktif poligon sekata disusun mengelilingi satu bucu: segi tiga sama sisi, segi empat sama dan heksagon memenuhi 360 darjah, pentagon dan oktagon meninggalkan ruang kosong",
  { mod: "teselasi", poligon: [{ n: 3, nama: "Segi tiga sama sisi" }, { n: 4, nama: "Segi empat sama" }, { n: 5, nama: "Pentagon sekata" }, { n: 6, nama: "Heksagon sekata" }, { n: 8, nama: "Oktagon sekata" }] });

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Bengkel Segi Tiga", sk:"5.1.1 / 5.1.2 Bentuk kongruen dan syarat kekongruenan segi tiga", lampiran:"r1",
 kadNama:"Kongruen", kadEm:"\u{1F9E9}", kadFakta:"Bentuk kongruen mempunyai bentuk dan saiz yang sama. Sisi sepadan sama panjang dan sudut sepadan sama besar.",
 bosKadNama:"Hasil Tambah 180°", bosKadEm:"\u{1F4D0}", bosKadFakta:"Jika dua sudut segi tiga diketahui, sudut ketiga = 180° − hasil tambah dua sudut itu. Sebab itu ASA dan AAS setara.",
 soalan:[
 {j:"pilih",t:"Dua bentuk adalah kongruen jika:",p:["Bentuk dan saiznya sama","Bentuknya sama tetapi saiznya berbeza","Luasnya sama tetapi bentuknya berbeza","Perimeter kedua-duanya sama"],b:0,u:"Kongruen bermaksud tepat sama bentuk dan saiz. Bentuk yang sama tetapi berbeza saiz dikatakan serupa."},
 {j:"pilih",t:"Dalam Rajah 1, pilih SSS. Mengapakah segi tiga ABC dan PQR kongruen?",p:["Tiga pasang sisi sepadan sama panjang","Tiga pasang sudut sepadan sama besar","Kedua-duanya mempunyai satu sisi 7 unit","Kedua-duanya berada di atas paksi-x"],b:0,u:"Syarat SSS: jika ketiga-tiga sisi sepadan sama panjang, segi tiga itu kongruen."},
 {j:"nombor",t:"Dalam Rajah 1, pilih SSS. Berapakah panjang sisi CA, betul kepada satu tempat perpuluhan?",tol:0.05,b:5.4,u:"CA = √(2² + 5²) = √29 = 5.39, iaitu 5.4 unit. Sisi sepadan RP juga 5.4 unit.",kira:()=>bul(jarak(T0[2],T0[0]),1)},
 {j:"pilih",t:"Dalam Rajah 1, pilih AAA. Kesimpulan yang betul ialah:",p:["Segi tiga itu serupa tetapi tidak semestinya kongruen","Segi tiga itu kongruen kerana semua sudutnya sama","Segi tiga itu tidak serupa kerana saiznya berbeza","Segi tiga itu kongruen kerana luasnya sama"],b:0,u:"Sudut yang sama hanya menentukan bentuk, bukan saiz. Segi tiga PQR ialah 0.7 kali ABC, jadi ia serupa tetapi tidak kongruen.",kira:()=>Math.abs(luas(T0)-luas(T0s))>1},
 {j:"pilih",t:"Dalam Rajah 1, pilih SSA. Mengapakah SSA bukan syarat kekongruenan?",p:["Dua segi tiga berbeza boleh dibina dengan ukuran yang sama","Sudut yang ditanda terlalu kecil untuk dibandingkan","Sisi BC lebih pendek daripada sisi AB","Kedua-dua segi tiga mempunyai luas yang sama"],b:0,u:"Dengan AB = 6, BC = 4 dan ∠A = 35°, titik C boleh berada pada dua kedudukan. Kedua-dua segi tiga itu berbeza bentuk dan luas.",kira:()=>Math.abs(jarak(SSA_1[1],SSA_1[2])-jarak(SSA_2[1],SSA_2[2]))<0.01&&Math.abs(luas(SSA_1)-luas(SSA_2))>1},
 {j:"pilih",t:"Dalam syarat SAS, sudut yang diberi mestilah:",p:["Sudut di antara dua sisi yang diberi","Sudut terbesar dalam segi tiga itu","Sudut yang bertentangan dengan sisi terpanjang","Sebarang sudut dalam segi tiga itu"],b:0,u:"Dalam SAS, huruf A di tengah menunjukkan sudut yang diapit oleh dua sisi itu. Jika sudut itu tidak diapit, ia menjadi SSA."},
 {j:"banyak",t:"Pilih SEMUA syarat yang membuktikan dua segi tiga kongruen.",p:["SSS","SAS","ASA","AAS","AAA","SSA"],b:[0,1,2,3],u:"SSS, SAS, ASA dan AAS menentukan satu segi tiga yang unik. AAA hanya menentukan bentuk, dan SSA boleh memberi dua segi tiga berbeza."},
 {j:"pilih",t:"Segi tiga ABC dan PQR kongruen, dengan A sepadan dengan P dan B sepadan dengan Q. Jika AB = 7 cm, maka PQ ialah:",p:["7 cm","5 cm","14 cm","3.5 cm"],b:0,u:"Sisi sepadan bagi segi tiga kongruen sama panjang. AB sepadan dengan PQ, jadi PQ = 7 cm."}],
 bos:{j:"nombor",t:"Dalam Rajah 1, pilih ASA. Segi tiga ABC dan PQR kongruen. Berapakah saiz ∠R, dalam darjah, betul kepada integer terdekat?",tol:0.5,b:67,u:"Langkah 1: daripada Rajah 1, ∠A = 68° dan ∠B = 45°. Langkah 2: ∠C = 180° − 68° − 45° = 67°. Langkah 3: R sepadan dengan C, jadi ∠R = 67°.",kira:()=>Math.round(sudut(T0[1],T0[2],T0[0]))}},

{n:2, tempat:"Studio Besar", sk:"5.2.1 – 5.2.3 Keserupaan, pembesaran, imej dan objek", lampiran:"r2",
 kadNama:"Faktor Skala", kadEm:"\u{1F50D}", kadFakta:"Faktor skala k = PA′ ÷ PA. Jika k > 1 imej lebih besar, jika 0 < k < 1 imej lebih kecil, dan jika k < 0 imej terbalik pada sebelah bertentangan pusat.",
 bosKadNama:"Cari k", bosKadEm:"\u{1F3AF}", bosKadFakta:"k = (jarak pusat ke imej) ÷ (jarak pusat ke objek), dengan arah: jika imej di sebelah bertentangan, k negatif.",
 soalan:[
 {j:"pilih",t:"Dua objek geometri adalah serupa jika:",p:["Sudut sepadan sama dan sisi sepadan berkadaran","Saiz dan bentuknya tepat sama","Luas kedua-dua objek itu sama","Perimeter kedua-dua objek itu sama"],b:0,u:"Objek serupa mempunyai bentuk yang sama: sudut sepadan sama, dan nisbah sisi sepadan malar. Pembesaran menghasilkan imej yang serupa dengan objek."},
 {j:"pilih",t:"Dalam Rajah 1, pilih k = 2. Koordinat A′ ialah:",p:[k2(ubah({j:"B",k:2,c:PUSAT2},OBJ2[0])),"(4, 0)","(3, 2)","(5, 1)"],b:0,u:"A′ = P + 2(A − P) = (1, −1) + 2(1, 1) = (1 + 2, −1 + 2) = (3, 1).",kira:()=>sama(ubah({j:"B",k:2,c:PUSAT2},OBJ2[0]),[3,1])},
 {j:"nombor",t:"Dalam Rajah 1, pilih k = −2. Berapakah koordinat-x bagi B′?",tol:0.01,b:-5,u:"B − P = (4 − 1, 0 − (−1)) = (3, 1). B′ = (1, −1) + (−2)(3, 1) = (1 − 6, −1 − 2) = (−5, −3). Koordinat-x = −5.",kira:()=>ubah({j:"B",k:-2,c:PUSAT2},OBJ2[1])[0]},
 {j:"pilih",t:"Dalam Rajah 1, pilih k = −1. Imej itu:",p:["Terbalik dan berada di sebelah bertentangan pusat P","Dua kali lebih besar daripada objek","Separuh saiz objek","Sama arah dengan objek, di sebelah yang sama"],b:0,u:"k = −1: setiap titik imej berada pada jarak yang sama dari P tetapi pada arah bertentangan. Imej sama saiz tetapi terbalik."},
 {j:"pilih",t:"Dalam Rajah 1, pilih k = 1/2. Imej itu:",p:["Lebih kecil daripada objek","Lebih besar daripada objek","Sama saiz dengan objek","Terbalik pada sebelah bertentangan pusat"],b:0,u:"Faktor skala pecahan antara 0 dan 1 menghasilkan imej yang lebih kecil, di sebelah yang sama dengan objek."},
 {j:"nombor",t:"Dalam Rajah 1, pilih k = 2. Berapakah nilai PA′ ÷ PA?",tol:0.01,b:2,u:"Faktor skala k = PA′ ÷ PA. Semak: PA = √2 dan PA′ = √8 = 2√2, jadi PA′ ÷ PA = 2.",kira:()=>jarak(PUSAT2,ubah({j:"B",k:2,c:PUSAT2},OBJ2[0]))/jarak(PUSAT2,OBJ2[0])},
 {j:"pilih",t:"Perihalan lengkap suatu pembesaran mesti menyatakan:",p:["Faktor skala dan pusat pembesaran","Faktor skala dan arah translasi","Pusat dan sudut putaran","Paksi pantulan dan faktor skala"],b:0,u:"Menurut DSKP, perihalan pembesaran yang lengkap melibatkan faktor skala dan pusat pembesaran, contohnya 'pembesaran pada pusat (−3, −1) dengan faktor skala 2'."},
 {j:"nombor",t:"Dalam Rajah 1, pilih k = −2. Berapakah panjang A′B′, dalam unit?",tol:0.01,b:4,u:"AB = 2 unit. Panjang imej = |k| × panjang objek = 2 × 2 = 4 unit. Tanda negatif tidak menjadikan panjang negatif.",kira:()=>jarak(ubah({j:"B",k:-2,c:PUSAT2},OBJ2[0]),ubah({j:"B",k:-2,c:PUSAT2},OBJ2[1]))}],
 bos:{j:"nombor",t:"Suatu pembesaran dengan pusat (1, −1) memetakan titik S(2, 1) kepada S′(5, 7). Berapakah faktor skala pembesaran itu?",tol:0.01,b:4,u:"Langkah 1: S − pusat = (2 − 1, 1 − (−1)) = (1, 2). Langkah 2: S′ − pusat = (4, 8). Langkah 3: (4, 8) = 4 × (1, 2), jadi k = 4.",kira:()=>sama(ubah({j:"B",k:4,c:[1,-1]},[2,1]),[5,7])?4:0}},

{n:3, tempat:"Makmal Luas", sk:"5.2.4 / 5.2.5 Hubungan luas imej dan luas objek", lampiran:"r3",
 kadNama:"Luas × k²", kadEm:"\u{1F4CF}", kadFakta:"Luas imej = k² × luas objek. Faktor skala negatif tetap memberi k² positif.",
 bosKadNama:"Poster Besar", bosKadEm:"\u{1F5BC}\u{FE0F}", bosKadFakta:"Daripada nisbah luas, faktor skala k = √(luas imej ÷ luas objek).",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, berapakah luas objek ABCD, dalam unit²?",tol:0.01,b:2,u:"ABCD ialah segi empat tepat 2 unit × 1 unit, jadi luasnya 2 unit².",kira:()=>luas(OBJ3)},
 {j:"nombor",t:"Dalam Rajah 1, pilih k = 2. Berapakah luas imej, dalam unit²?",tol:0.01,b:8,u:"Luas imej = k² × luas objek = 2² × 2 = 8 unit². Imej berukuran 4 × 2.",kira:()=>luas(OBJ3.map(p=>ubah({j:"B",k:2,c:[0,0]},p)))},
 {j:"nombor",t:"Dalam Rajah 1, pilih k = −2. Berapakah luas imej, dalam unit²?",tol:0.01,b:8,u:"Luas imej = (−2)² × 2 = 4 × 2 = 8 unit². Tanda negatif hanya membalikkan imej.",kira:()=>luas(OBJ3.map(p=>ubah({j:"B",k:-2,c:[0,0]},p)))},
 {j:"nombor",t:"Dalam Rajah 1, pilih k = 1/2. Berapakah luas imej, dalam unit²?",tol:0.01,b:0.5,u:"Luas imej = (½)² × 2 = ¼ × 2 = 0.5 unit².",kira:()=>luas(OBJ3.map(p=>ubah({j:"B",k:0.5,c:[0,0]},p)))},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah hubungan antara luas imej dan luas objek?",p:["Luas imej = k² × luas objek","Luas imej = k × luas objek","Luas imej = 2k × luas objek","Luas imej = luas objek + k"],b:0,u:"Panjang dan lebar masing-masing didarab k, jadi luas didarab k × k = k². Semak: k = 2 memberi 8 = 4 × 2."},
 {j:"nombor",t:"Luas suatu objek ialah 12 cm². Objek itu mengalami pembesaran dengan faktor skala −3. Berapakah luas imej, dalam cm²?",tol:0.01,b:108,u:"Luas imej = (−3)² × 12 = 9 × 12 = 108 cm².",kira:()=>9*12},
 {j:"nombor",t:"Luas imej suatu pembesaran ialah 50 cm² dan luas objeknya 8 cm². Berapakah faktor skala positif?",tol:0.01,b:2.5,u:"k² = 50 ÷ 8 = 6.25, jadi k = √6.25 = 2.5.",kira:()=>Math.sqrt(50/8)},
 {j:"pilih",t:"Dalam Rajah 1, pilih k = −1/2. Koordinat C′ ialah:",p:[k2(ubah({j:"B",k:-0.5,c:[0,0]},OBJ3[2])),"(1.5, 1)","(−6, −4)","(−3, −2)"],b:0,u:"C(3, 2). C′ = −½ × (3, 2) = (−1.5, −1).",kira:()=>sama(ubah({j:"B",k:-0.5,c:[0,0]},OBJ3[2]),[-1.5,-1])}],
 bos:{j:"nombor",t:"Sebuah poster berbentuk segi empat tepat berukuran 20 cm × 30 cm dibesarkan dengan faktor skala k. Luas poster baharu ialah 5 400 cm². Cari nilai k.",tol:0.01,b:3,u:"Langkah 1: luas objek = 20 × 30 = 600 cm². Langkah 2: k² = 5 400 ÷ 600 = 9. Langkah 3: k = 3 (faktor skala positif bagi poster).",kira:()=>Math.sqrt(5400/600)}},

{n:4, tempat:"Jalan Transformasi", sk:"5.3.1 / 5.3.2 Imej gabungan transformasi dan kalis tukar tertib", lampiran:"r4",
 kadNama:"Tertib Gabungan", kadEm:"\u{1F504}", kadFakta:"Gabungan AB bermaksud transformasi B dilakukan dahulu, kemudian A. Secara umum AB ≠ BA.",
 bosKadNama:"Isometri", bosKadEm:"\u{1F4CF}", bosKadFakta:"Translasi, pantulan dan putaran ialah isometri: bentuk dan saiz tidak berubah, jadi gabungannya juga mengekalkan luas.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih T. Koordinat imej P′ ialah:",p:[k2(ubah(TT,OBJ4[0])),"(3, −1)","(−1, 1)","(1, 3)"],b:0,u:"Translasi (−2, 2): P(1, 1) → (1 − 2, 1 + 2) = (−1, 3).",kira:()=>sama(ubah(TT,OBJ4[0]),[-1,3])},
 {j:"pilih",t:"Dalam Rajah 1, pilih M. Koordinat imej P′ ialah:",p:[k2(ubah(MM,OBJ4[0])),"(1, −1)","(−1, −1)","(1, 1)"],b:0,u:"Pantulan pada paksi-y menukar tanda koordinat-x: P(1, 1) → (−1, 1).",kira:()=>sama(ubah(MM,OBJ4[0]),[-1,1])},
 {j:"pilih",t:"Dalam Rajah 1, gabungan TM bermaksud:",p:["M dahulu, kemudian T","T dahulu, kemudian M","T dan M dilakukan serentak","T diulang dua kali"],b:0,u:"Gabungan dibaca dari kanan ke kiri: TM bermaksud transformasi M dahulu, diikuti T."},
 {j:"pilih",t:"Dalam Rajah 1, koordinat imej P″ di bawah gabungan TM ialah:",p:[k2(ubah(TT,ubah(MM,OBJ4[0]))),"(1, 3)","(−1, 3)","(3, 3)"],b:0,u:"M dahulu: P(1, 1) → (−1, 1). Kemudian T: (−1 − 2, 1 + 2) = (−3, 3).",kira:()=>sama(ubah(TT,ubah(MM,OBJ4[0])),[-3,3])},
 {j:"pilih",t:"Dalam Rajah 1, koordinat imej P″ di bawah gabungan MT ialah:",p:[k2(ubah(MM,ubah(TT,OBJ4[0]))),"(−3, 3)","(−1, 3)","(1, −3)"],b:0,u:"T dahulu: P(1, 1) → (−1, 3). Kemudian M: (1, 3).",kira:()=>sama(ubah(MM,ubah(TT,OBJ4[0])),[1,3])},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah kesimpulan tentang gabungan T dan M?",p:["TM ≠ MT, jadi gabungan ini tidak kalis tukar tertib","TM = MT, jadi gabungan ini kalis tukar tertib","TM = MT kerana kedua-duanya isometri","Translasi menjadikan setiap gabungan kalis tukar tertib"],b:0,u:"TM memetakan P kepada (−3, 3) tetapi MT memetakan P kepada (1, 3). Imej berbeza, jadi tertib transformasi penting.",kira:()=>!sama(ubah(TT,ubah(MM,OBJ4[0])),ubah(MM,ubah(TT,OBJ4[0])))},
 {j:"pilih",t:"Titik (2, 5) dipantulkan pada paksi-x, kemudian ditranslasikan oleh (−2, 2). Imejnya ialah:",p:[k2(ubah({j:"T",a:-2,b:2},ubah({j:"P",paksi:"x"},[2,5]))),"(0, 7)","(4, −3)","(−2, 3)"],b:0,u:"Pantulan pada paksi-x: (2, 5) → (2, −5). Translasi (−2, 2): (0, −3).",kira:()=>sama(ubah({j:"T",a:-2,b:2},ubah({j:"P",paksi:"x"},[2,5])),[0,-3])},
 {j:"pilih",t:"Dengan T dan M seperti dalam Rajah 1, imej suatu titik di bawah gabungan TM ialah (−3, 4). Titik asalnya ialah:",p:["(1, 2)","(−1, 2)","(−5, 6)","(5, 2)"],b:0,u:"Songsangkan langkah: batalkan T dahulu, (−3 + 2, 4 − 2) = (−1, 2). Kemudian batalkan M: (1, 2). Semak: M(1, 2) = (−1, 2), T: (−3, 4).",kira:()=>sama(ubah(TT,ubah(MM,[1,2])),[-3,4])}],
 bos:{j:"nombor",t:"Dalam Rajah 1, gabungan MT dilakukan ke atas segi tiga PQR. Berapakah luas imej P″Q″R″, dalam unit²?",tol:0.01,b:1,u:"Langkah 1: luas PQR = ½ × 2 × 1 = 1 unit². Langkah 2: T dan M ialah isometri, jadi saiz tidak berubah. Luas imej = 1 unit².",kira:()=>luas(OBJ4.map(p=>ubah(MM,ubah(TT,p))))}},

{n:5, tempat:"Bilik Kawalan", sk:"5.3.3 / 5.3.4 Memerihalkan gabungan dan transformasi tunggal yang setara", lampiran:"r5",
 kadNama:"Pusat Sama", kadEm:"\u{1F3AF}", kadFakta:"Putaran dan pembesaran pada pusat yang sama adalah kalis tukar tertib: RV = VR.",
 bosKadNama:"Gabungan Berbilang", bosKadEm:"\u{1F9ED}", bosKadFakta:"Bagi gabungan, laksanakan transformasi mengikut tertib dan catat imej perantaraan pada setiap langkah.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih RV. Koordinat P″ ialah:",p:[k2(ubah(RR,ubah(VV,OBJ5[0]))),"(−2, 2)","(2, 2)","(1, −1)"],b:0,u:"V dahulu: P(1, 1) → (2, 2). Kemudian R (90° ikut arah jam pada O, (x, y) → (y, −x)): (2, −2).",kira:()=>sama(ubah(RR,ubah(VV,OBJ5[0])),[2,-2])},
 {j:"pilih",t:"Dalam Rajah 1, pilih VR. Koordinat P″ ialah:",p:[k2(ubah(VV,ubah(RR,OBJ5[0]))),"(−2, −2)","(1, −1)","(−2, 2)"],b:0,u:"R dahulu: P(1, 1) → (1, −1). Kemudian V: 2 × (1, −1) = (2, −2).",kira:()=>sama(ubah(VV,ubah(RR,OBJ5[0])),[2,-2])},
 {j:"pilih",t:"Berdasarkan Rajah 1, konjektur yang sesuai ialah:",p:["Putaran dan pembesaran pada pusat yang sama adalah kalis tukar tertib","Setiap gabungan dua transformasi adalah kalis tukar tertib","Putaran dan pembesaran pada pusat yang sama memberi imej berbeza","Gabungan putaran dan pembesaran mengubah bentuk objek"],b:0,u:"RV dan VR memberi imej yang sama bagi setiap titik. Tetapi bukan semua gabungan kalis tukar tertib, seperti TM dan MT.",kira:()=>OBJ5.every(p=>sama(ubah(RR,ubah(VV,p)),ubah(VV,ubah(RR,p))))},
 {j:"nombor",t:"Berdasarkan Rajah 1, luas objek PQR ialah 1 unit². Berapakah luas imej di bawah gabungan RV, dalam unit²?",tol:0.01,b:4,u:"R ialah isometri, jadi luas tidak berubah. V (k = 2) mendarab luas dengan 2² = 4. Luas imej = 4 unit².",kira:()=>luas(OBJ5.map(p=>ubah(RR,ubah(VV,p))))},
 {j:"pilih",t:"Gabungan translasi (3, 1) diikuti translasi (−5, 2) setara dengan satu transformasi tunggal, iaitu:",p:["Translasi (−2, 3)","Translasi (8, −1) diikuti pantulan","Putaran 180° pada asalan","Pantulan pada paksi-y"],b:0,u:"Tambah kedua-dua vektor: (3 + (−5), 1 + 2) = (−2, 3)."},
 {j:"pilih",t:"Pantulan pada paksi-x diikuti pantulan pada paksi-y setara dengan:",p:["Putaran 180° pada asalan","Translasi (0, 0)","Pantulan pada garis y = x","Putaran 90° ikut arah jam pada asalan"],b:0,u:"(x, y) → (x, −y) → (−x, −y). Ini sama dengan putaran 180° pada asalan.",kira:()=>sama(ubah({j:"P",paksi:"y"},ubah({j:"P",paksi:"x"},[2,3])),ubah({j:"R",d:180,c:[0,0]},[2,3]))},
 {j:"nombor",t:"Titik K(4, −2) mengalami pembesaran pada asalan dengan faktor skala −½, diikuti translasi (3, 5). Cari koordinat-y bagi imej akhir.",tol:0.01,b:6,u:"Pembesaran: −½ × (4, −2) = (−2, 1). Translasi (3, 5): (1, 6). Koordinat-y = 6.",kira:()=>ubah({j:"T",a:3,b:5},ubah({j:"B",k:-0.5,c:[0,0]},[4,-2]))[1]},
 {j:"pilih",t:"Di bawah gabungan VR dalam Rajah 1, panjang setiap sisi imej berbanding sisi objek ialah:",p:["Dua kali panjang sisi objek","Sama panjang dengan sisi objek","Empat kali panjang sisi objek","Separuh panjang sisi objek"],b:0,u:"Putaran tidak mengubah panjang. Pembesaran k = 2 mendarab panjang dengan 2 (dan luas dengan 4).",kira:()=>Math.abs(jarak(...[OBJ5[0],OBJ5[2]].map(p=>ubah(VV,ubah(RR,p))))-2*jarak(OBJ5[0],OBJ5[2]))<1e-9}],
 bos:{j:"pilih",t:"Titik (2, 1) mengalami putaran 90° lawan arah jam pada asalan, diikuti pembesaran pada asalan dengan faktor skala 3. Imej akhirnya ialah:",p:[k2(ubah({j:"B",k:3,c:[0,0]},ubah({j:"R",d:-90,c:[0,0]},[2,1]))),"(3, −6)","(6, 3)","(−6, 3)"],b:0,u:"Langkah 1: putaran 90° lawan arah jam, (x, y) → (−y, x): (2, 1) → (−1, 2). Langkah 2: pembesaran k = 3: (−3, 6).",kira:()=>sama(ubah({j:"B",k:3,c:[0,0]},ubah({j:"R",d:-90,c:[0,0]},[2,1])),[-3,6])}},

{n:6, tempat:"Studio Teselasi", sk:"5.4.1 / 5.4.2 Teselasi dan reka bentuk jenis Escher", lampiran:"r6",
 kadNama:"Teselasi", kadEm:"\u{1F537}", kadFakta:"Teselasi ialah pola bentuk berulang yang memenuhi satah tanpa ruang kosong atau pertindihan. Sudut pada setiap bucu berjumlah 360°.",
 bosKadNama:"Gaya Escher", bosKadEm:"\u{1F3A8}", bosKadFakta:"Teselasi jenis Escher bermula dengan bentuk asas; bahagian yang dipotong dari satu sisi ditambah pada sisi lain melalui translasi atau putaran.",
 soalan:[
 {j:"pilih",t:"Menurut DSKP, teselasi ialah:",p:["Pola bentuk berulang yang memenuhi satah tanpa ruang kosong atau pertindihan","Satu bentuk yang diputar 360° pada pusatnya","Corak yang mempunyai sekurang-kurangnya satu paksi simetri","Gabungan dua transformasi yang kalis tukar tertib"],b:0,u:"Teselasi memenuhi satah sepenuhnya: tiada ruang kosong dan tiada bentuk yang bertindih."},
 {j:"nombor",t:"Dalam Rajah 1, pilih heksagon sekata. Berapakah sudut pedalamannya, dalam darjah?",tol:0.01,b:120,u:"Sudut pedalaman = (6 − 2) × 180° ÷ 6 = 720° ÷ 6 = 120°.",kira:()=>dalam(6)},
 {j:"nombor",t:"Dalam Rajah 1, pilih heksagon sekata. Berapakah bilangan heksagon yang bertemu pada satu bucu?",tol:0.01,b:3,u:"360° ÷ 120° = 3. Tiga heksagon memenuhi satu bucu tepat, seperti sarang lebah.",kira:()=>360/dalam(6)},
 {j:"pilih",t:"Dalam Rajah 1, pilih pentagon sekata. Mengapakah pentagon sekata tidak membentuk teselasi sendirian?",p:["360° ÷ 108° bukan integer","Pentagon mempunyai bilangan sisi ganjil","Sudut pedalaman pentagon terlalu kecil","Pentagon tidak mempunyai simetri putaran"],b:0,u:"Sudut pedalaman pentagon sekata ialah 108°. 360 ÷ 108 = 3.33, jadi tiga pentagon meninggalkan ruang 36° dan empat pentagon bertindih. Segi tiga sama sisi juga bersisi ganjil tetapi membentuk teselasi.",kira:()=>dalam(5)===108},
 {j:"banyak",t:"Dalam Rajah 1, pilih SEMUA poligon sekata yang boleh membentuk teselasi sendirian.",p:["Segi tiga sama sisi","Segi empat sama","Pentagon sekata","Heksagon sekata","Oktagon sekata"],b:[0,1,3],u:"360 ÷ 60 = 6, 360 ÷ 90 = 4 dan 360 ÷ 120 = 3 ialah integer. Bagi pentagon (108°) dan oktagon (135°), hasilnya bukan integer."},
 {j:"nombor",t:"Oktagon sekata dan segi empat sama boleh bergabung membentuk teselasi. Pada setiap bucu bertemu dua oktagon dan satu segi empat sama. Hitung jumlah sudut pada bucu itu, dalam darjah.",tol:0.01,b:360,u:"Sudut pedalaman oktagon = (8 − 2) × 180° ÷ 8 = 135°. Jumlah = 2 × 135° + 90° = 360°, jadi tiada ruang kosong.",kira:()=>2*dalam(8)+90},
 {j:"pilih",t:"Teselasi jenis Escher dihasilkan dengan:",p:["Mengubah suai sisi bentuk asas dan menggunakan transformasi isometri","Membesarkan bentuk asas dengan faktor skala 2 berulang kali","Melukis bentuk secara rawak tanpa sebarang corak","Menyusun bulatan yang bertindih antara satu sama lain"],b:0,u:"Escher memotong bahagian satu sisi bentuk asas dan menambahnya pada sisi bertentangan melalui translasi atau putaran, jadi bentuk baharu masih memenuhi satah."},
 {j:"pilih",t:"Antara berikut, yang manakah contoh teselasi dalam kehidupan sebenar?",p:["Jubin lantai dan sarang lebah","Awan yang berarak di langit","Riak air yang tersebar di kolam","Daun pokok getah yang gugur"],b:0,u:"Jubin lantai dan sarang lebah ialah bentuk berulang yang memenuhi permukaan tanpa ruang kosong."}],
 bos:{j:"buka",
  t:"Reka satu teselasi jenis Escher dan terangkan langkah-langkah penghasilannya.",
  arahan:"Mulakan dengan satu bentuk asas yang membentuk teselasi (contohnya segi empat sama atau heksagon sekata) dan buktikan dengan sudut pada bucu bahawa ia memenuhi 360°. Ubah suai sisi bentuk asas dan terangkan transformasi isometri yang digunakan (translasi, pantulan atau putaran) beserta perihalannya yang lengkap. Huraikan sekurang-kurangnya tiga langkah untuk menghasilkan teselasi itu dan cadangkan satu tempat sebenar untuk menggunakannya.",
  u:"Jawapan TP6 yang kukuh memilih bentuk asas yang sah dengan bukti sudut 360°, menghuraikan pengubahsuaian dengan transformasi isometri yang diperihalkan secara lengkap, memberi langkah yang tersusun, dan mencadangkan kegunaan yang kreatif."}}
];

module.exports = {
  id:"m5b5", tingkatan:5, kod:"5.0 Kekongruenan, Pembesaran dan Gabungan Transformasi",
  tajuk:"Studio Transformasi",
  subtajuk:"Matematik Ting. 5 · Bab 5 Kekongruenan, Pembesaran dan Gabungan Transformasi",
  spi:SPI,
  ulasan:{
   1:"{n} dapat membezakan bentuk kongruen dan mengenal pasti syarat kekongruenan segi tiga SSS, SAS, ASA dan AAS. Langkah seterusnya ialah pembesaran.",
   2:"{n} memahami keserupaan dan pembesaran, termasuk faktor skala pecahan dan negatif, serta dapat menentukan imej. Perlu lebih latihan tentang hubungan luas.",
   3:"{n} boleh mengaitkan luas imej dengan luas objek melalui k² dan menyelesaikan tugasan mudah pembesaran.",
   4:"{n} mampu menentukan imej gabungan transformasi dan menyiasat sifat kalis tukar tertib. Seterusnya, perihalkan transformasi tunggal yang setara.",
   5:"{n} dapat memerihalkan dan menyelesaikan masalah gabungan transformasi yang kompleks, termasuk pembesaran. Sudah bersedia untuk mereka teselasi.",
   6:"{n} berjaya mereka teselasi jenis Escher dengan transformasi isometri dan menerangkan langkah penghasilannya. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab ini. Cadangan: ulang hentian pertama dengan Rajah 1 dan bina segi tiga daripada lidi untuk menguji syarat kekongruenan."
  },
  lampiran:{ r1:R1, r2:R2, r3:R3, r4:R4, r5:R5, r6:R6 },
  aras:ARAS
};
