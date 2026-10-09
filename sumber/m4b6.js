/* Sumber kandungan — Matematik KSSM Tingkatan 4, Bab 6 Ketaksamaan Linear dalam Dua Pemboleh Ubah.
   Fail ini disunting tangan. Jalankan `node bina.js m4b6`.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 4
   dan 5, muka 57 (dskp/matematik-t4-t5.pdf). DSKP menulis enam tahap penuh.
   Nota DSKP: situasi kehidupan sebenar; 6.1 dihadkan kepada satu ketaksamaan linear.

   Ketaksamaan {a, b, c, s}: ax + by s c. Titik integer, nilai objektif dan luas rantau
   dikira di bawah dan disemak oleh `kira`. Rajah: widget t4rantau (widget-m4b6.js).
   Tanda < dan > dalam teks soalan ditulis &lt; dan &gt;. */

const K = (a, b, c, s, y) => Object.assign({ a, b, c, s }, y ? { y: true } : {});
const lulus = (q, x, y) => { const v = q.a * x + q.b * y; return q.s === ">" ? v > q.c : q.s === "≥" ? v >= q.c : q.s === "<" ? v < q.c : v <= q.c; };
const semua = (ket, x, y) => ket.every(q => lulus(q, x, y));
const titikInt = (ket, j) => { const o = []; for (let x = j[0]; x <= j[1]; x++) for (let y = j[2]; y <= j[3]; y++) if (semua(ket, x, y)) o.push([x, y]); return o; };
const terbaik = (ket, j, p, q, min) => titikInt(ket, j).map(([x, y]) => ({ x, y, v: p * x + q * y })).sort((A, B) => min ? A.v - B.v : B.v - A.v)[0];

const SPI = [
"Mempamerkan pengetahuan asas tentang ketaksamaan linear dalam dua pemboleh ubah.",
"Mempamerkan kefahaman tentang ketaksamaan linear dalam dua pemboleh ubah.",
"Mengaplikasikan kefahaman tentang ketaksamaan linear dalam dua pemboleh ubah untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sistem ketaksamaan linear dalam dua pemboleh ubah dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sistem ketaksamaan linear dalam dua pemboleh ubah dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sistem ketaksamaan linear dalam dua pemboleh ubah dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- data ---------- */
const H1 = [K(1, 1, 6, "≥"), K(1, 1, 6, ">"), K(1, 1, 6, "≤"), K(1, 1, 6, "<")];
const H2 = [K(-2, 1, -1, "≥", 1), K(-1, 1, 2, "<", 1), K(1, 0, 3, "≤"), K(1, 1, 4, ">", 1)];
const H3 = [K(-1, 1, 0, "≥", 1), K(1, 1, 8, "≤"), K(0, 1, 6, "≤"), K(1, 0, 1, "≥")];
const SA = [K(-2, 1, 0, "≤", 1), K(1, 1, 6, "≤"), K(0, 1, 0, "≥")];
const SB = [K(-2, 1, 0, "≥", 1), K(1, 1, 6, "≤"), K(1, 0, 0, "≥")];
const SC = [K(-2, 1, 0, "≤", 1), K(1, 1, 6, "≥"), K(0, 1, 6, "≤")];
const KEK = [K(1, 1, 8, "≤"), K(2, 1, 12, "≤"), K(1, 0, 1, "≥"), K(0, 1, 2, "≥")];
const BAS = [K(40, 10, 150, "≥"), K(1, 1, 9, "≤"), K(1, 0, 3, "≤"), K(0, 1, 8, "≤")];
const J10 = [0, 10, 0, 10], J6 = [0, 6, 0, 10];

/* ---------- lampiran ---------- */
const iw = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t4rantau", kapsyen, alt }, extra);
const R1 = iw("Rajah 1 · Pilih ketaksamaan, perhatikan garis dan rantau berlorek, kemudian gerakkan P.",
  "Rajah interaktif satah Cartes dengan empat ketaksamaan x + y berbanding 6; cip memilih tanda dan gelongsor menggerakkan titik P",
  { mod: "satu", senarai: H1, julat: J10, P: [2, 2] });
const R2 = iw("Rajah 1 · Empat ketaksamaan. Pilih satu dan uji titik P(x, y).",
  "Rajah interaktif satah Cartes dengan ketaksamaan y ≥ 2x − 1, y kurang daripada x + 2, x ≤ 3 dan y lebih daripada −x + 4; cip memilih ketaksamaan dan gelongsor menggerakkan titik P",
  { mod: "satu", senarai: H2, julat: [-3, 6, -3, 7], P: [1, 3] });
const R3 = iw("Rajah 1 · Rantau sepunya bagi empat ketaksamaan. Gerakkan P dan semak setiap ketaksamaan.",
  "Rajah interaktif rantau sepunya bagi y ≥ x, x + y ≤ 8, y ≤ 6 dan x ≥ 1; gelongsor menggerakkan titik P dan setiap ketaksamaan ditanda betul atau salah",
  { mod: "sistem", sistem: [{ nama: "Sistem 1", ket: H3 }], julat: J10, P: [2, 4] });
const R4 = iw("Rajah 1 · Tiga sistem ketaksamaan A, B dan C. Pilih sistem dan uji titik P.",
  "Rajah interaktif tiga sistem ketaksamaan linear dengan rantau sepunya berlorek; cip memilih sistem A, B atau C dan gelongsor menggerakkan titik P",
  { mod: "sistem", sistem: [{ nama: "Sistem A", ket: SA }, { nama: "Sistem B", ket: SB }, { nama: "Sistem C", ket: SC }], julat: [0, 8, 0, 8], P: [1, 4] });
const R5 = iw("Rajah 1 · Kedai kek: x kek coklat, y kek pandan sehari. Kira dahulu, kemudian semak.",
  "Rajah interaktif masalah kedai kek dengan empat kekangan, rantau sepunya, titik integer yang boleh dipilih dan untung bagi titik P, dalam mod cabar",
  { mod: "masalah", cabar: true, ket: KEK, julat: J10, P: [3, 5], lblX: "x (kek coklat)", lblY: "y (kek pandan)", tajuk: "Kek sehari", objektif: { p: 50, q: 30, label: "Untung", rm: true } });
const R6 = iw("Rajah 1 · Lawatan 150 murid: x bas (40 tempat) dan y van (10 tempat). Cari kos terendah.",
  "Rajah interaktif masalah sewa bas dan van dengan empat kekangan, rantau sepunya, titik integer yang boleh dipilih dan kos sewa bagi titik P",
  { mod: "masalah", ket: BAS, julat: J6, P: [2, 7], lblX: "x (bas)", lblY: "y (van)", tajuk: "Sewa bas dan van", objektif: { p: 600, q: 200, label: "Kos sewa", rm: true, min: true } });

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Pondok Tanda", sk:"6.1.1 Mewakilkan situasi dalam bentuk ketaksamaan linear", lampiran:"r1",
 kadNama:"Kata Kunci", kadEm:"\u{1F3F7}\u{FE0F}", kadFakta:"\"Tidak melebihi\" atau \"paling banyak\" = ≤. \"Sekurang-kurangnya\" atau \"tidak kurang daripada\" = ≥. \"Kurang daripada\" = < dan \"lebih daripada\" = >.",
 bosKadNama:"Garis Putus-putus", bosKadEm:"\u{2796}", bosKadFakta:"Bagi < dan >, garis sempadan dilukis putus-putus kerana titik pada garis tidak memenuhi ketaksamaan. Bagi ≤ dan ≥, garis dilukis penuh.",
 soalan:[
 {j:"pilih",t:"Aina membeli x buah buku dan y buah majalah. Jumlah bahan bacaan yang dibeli tidak melebihi 6. Ketaksamaan yang mewakili situasi ini ialah:",p:["x + y ≤ 6","x + y ≥ 6","x + y &lt; 6","x + y &gt; 6"],b:0,u:"\"Tidak melebihi 6\" bermaksud 6 atau kurang, jadi x + y ≤ 6."},
 {j:"pilih",t:"Sebuah pasukan memerlukan sekurang-kurangnya 6 orang pemain, iaitu x orang lelaki dan y orang perempuan. Ketaksamaan yang sesuai ialah:",p:["x + y ≥ 6","x + y ≤ 6","x + y &gt; 6","x + y &lt; 6"],b:0,u:"\"Sekurang-kurangnya 6\" bermaksud 6 atau lebih, jadi x + y ≥ 6."},
 {j:"pilih",t:"Dalam Rajah 1, pilih x + y &gt; 6. Bagaimanakah garis x + y = 6 dilukis, dan mengapa?",p:["Putus-putus, kerana titik pada garis tidak memenuhi","Penuh, kerana titik pada garis turut memenuhi","Putus-putus, kerana rantau berada di bawah garis","Penuh, kerana tanda itu ialah lebih besar"],b:0,u:"Bagi titik pada garis, x + y = 6, dan 6 &gt; 6 adalah palsu. Garis dilukis putus-putus untuk menunjukkan ia tidak termasuk."},
 {j:"pilih",t:"Dalam Rajah 1, pilih x + y ≥ 6. Rantau yang berlorek ialah:",p:["Di atas garis x + y = 6, termasuk garis itu","Di bawah garis x + y = 6, termasuk garis itu","Di atas garis x + y = 6, tidak termasuk garis itu","Di bawah garis x + y = 6, tidak termasuk garis itu"],b:0,u:"Uji (0, 0): 0 ≥ 6 palsu, jadi rantau tidak mengandungi asalan, iaitu di atas garis. Tanda ≥ bermaksud garis termasuk.",kira:()=>!lulus(H1[0],0,0)},
 {j:"pilih",t:"Dalam Rajah 1, pilih x + y ≤ 6 dan gerakkan P ke (2, 3). Apakah kesimpulannya?",p:["P memenuhi, kerana 2 + 3 = 5 dan 5 ≤ 6","P tidak memenuhi, kerana 5 &lt; 6","P memenuhi, kerana 2 &lt; 3","P tidak memenuhi, kerana P di atas garis"],b:0,u:"Gantikan x = 2 dan y = 3: 2 + 3 = 5 ≤ 6 benar, jadi P berada dalam rantau.",kira:()=>lulus(H1[2],2,3)},
 {j:"nombor",t:"Dalam Rajah 1, pilih x + y &lt; 6 dan tetapkan x = 2. Berapakah bilangan nilai integer y dari 0 hingga 10 yang memenuhi ketaksamaan?",tol:0.01,b:4,u:"2 + y &lt; 6 memberi y &lt; 4, jadi y = 0, 1, 2 atau 3: empat nilai.",kira:()=>[0,1,2,3,4,5,6,7,8,9,10].filter(y=>lulus(H1[3],2,y)).length},
 {j:"pilih",t:"Harga sebatang pen ialah RM2 dan harga sebuah buku latihan ialah RM5. Ali mempunyai RM30 untuk membeli x batang pen dan y buah buku. Ketaksamaan yang sesuai ialah:",p:["2x + 5y ≤ 30","5x + 2y ≤ 30","2x + 5y ≥ 30","x + y ≤ 30"],b:0,u:"Jumlah kos = 2x + 5y, dan kos itu tidak boleh melebihi RM30."},
 {j:"pilih",t:"Antara berikut, yang manakah ketaksamaan linear dalam dua pemboleh ubah?",p:["3x − 2y &gt; 7","x² + y &lt; 4","3x + 2 = 7","xy ≥ 5"],b:0,u:"Ketaksamaan linear mempunyai pemboleh ubah berkuasa 1 dan tiada hasil darab pemboleh ubah. x² dan xy bukan linear, dan 3x + 2 = 7 ialah persamaan."}],
 bos:{j:"pilih",t:"Dalam sebuah kelab, bilangan ahli lelaki (x) sekurang-kurangnya dua kali bilangan ahli perempuan (y). Ketaksamaan yang sesuai ialah:",p:["x ≥ 2y","y ≥ 2x","x ≤ 2y","2x ≥ y"],b:0,u:"Dua kali bilangan perempuan ialah 2y. Lelaki sekurang-kurangnya sebanyak itu: x ≥ 2y. Semak: 10 lelaki dan 5 perempuan memenuhi 10 ≥ 10."}},

{n:2, tempat:"Makmal Rantau", sk:"6.1.2 / 6.1.3 Titik dalam rantau dan melorek rantau", lampiran:"r2",
 kadNama:"Titik Ujian", kadEm:"\u{1F4CD}", kadFakta:"Untuk menentukan rantau, gantikan satu titik ujian yang tidak berada pada garis (selalunya (0, 0)). Jika ketaksamaan benar, rantau mengandungi titik itu.",
 bosKadNama:"Atas atau Bawah", bosKadEm:"\u{2195}\u{FE0F}", bosKadFakta:"Bagi y > mx + c atau y ≥ mx + c, rantau berada di atas garis. Bagi y < mx + c atau y ≤ mx + c, rantau berada di bawah garis.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih y ≥ 2x − 1 dan gerakkan P ke (1, 3). Kedudukan P ialah:",p:["Dalam rantau, kerana 3 ≥ 2(1) − 1 = 1","Di luar rantau, kerana 3 &gt; 1","Pada garis, kerana 3 = 2(1) + 1","Di luar rantau, kerana x &lt; y"],b:0,u:"Gantikan x = 1: 2(1) − 1 = 1. Oleh sebab y = 3 ≥ 1, P berada dalam rantau.",kira:()=>lulus(H2[0],1,3)},
 {j:"pilih",t:"Dalam Rajah 1, pilih y &lt; x + 2. Titik (1, 3) berada pada garis y = x + 2. Adakah titik itu memenuhi ketaksamaan?",p:["Tidak, kerana 3 &lt; 3 adalah palsu","Ya, kerana titik itu berada pada garis","Ya, kerana 3 = 1 + 2","Tidak, kerana 1 &lt; 3 adalah benar"],b:0,u:"Garis y = x + 2 dilukis putus-putus. Pada garis, y = x + 2 tepat, jadi y &lt; x + 2 palsu.",kira:()=>!lulus(H2[1],1,3)},
 {j:"pilih",t:"Dalam Rajah 1, pilih x ≤ 3. Rantau yang berlorek ialah:",p:["Di kiri garis x = 3, termasuk garis itu","Di kanan garis x = 3, termasuk garis itu","Di bawah garis y = 3, termasuk garis itu","Di atas garis y = 3, termasuk garis itu"],b:0,u:"x = 3 ialah garis mencancang. Nilai x yang lebih kecil berada di sebelah kiri garis."},
 {j:"nombor",t:"Dalam Rajah 1, pilih y &gt; −x + 4 dan tetapkan x = 2. Berapakah nilai integer y yang terkecil supaya P berada dalam rantau?",tol:0.01,b:3,u:"−2 + 4 = 2, jadi y &gt; 2. Integer terkecil ialah 3.",kira:()=>[-3,-2,-1,0,1,2,3,4,5,6,7].find(y=>lulus(H2[3],2,y))},
 {j:"pilih",t:"Konjektur: \"Bagi y ≥ 2x − 1, titik (0, 5) dan (2, 4) berada dalam rantau.\" Semak konjektur ini dengan Rajah 1.",p:["Benar; (0, 5) dan (2, 4) memenuhi ketaksamaan","Palsu; titik (2, 4) tidak memenuhi","Palsu; titik (0, 5) tidak memenuhi","Palsu; kedua-dua titik di bawah garis"],b:0,u:"(0, 5): 5 ≥ −1 benar. (2, 4): 4 ≥ 3 benar. Kedua-dua titik berada dalam rantau.",kira:()=>lulus(H2[0],0,5)&&lulus(H2[0],2,4)},
 {j:"pilih",t:"Titik ujian yang paling mudah untuk menentukan rantau y &lt; x + 2 ialah:",p:["(0, 0); 0 &lt; 2 benar, jadi rantau memuat asalan","(0, 2), kerana titik itu berada tepat pada garis","(5, 5), kerana titik itu jauh daripada garis","(−2, 0), kerana titik itu ialah pintasan-x"],b:0,u:"(0, 0) tidak berada pada garis dan mudah digantikan. 0 &lt; 0 + 2 benar, jadi rantau berada di sebelah asalan.",kira:()=>lulus(H2[1],0,0)},
 {j:"nombor",t:"Dalam Rajah 1, pilih x ≤ 3. Berapakah bilangan nilai integer x dari −3 hingga 6 yang memenuhi ketaksamaan?",tol:0.01,b:7,u:"x = −3, −2, −1, 0, 1, 2, 3: tujuh nilai.",kira:()=>[-3,-2,-1,0,1,2,3,4,5,6].filter(x=>lulus(H2[2],x,0)).length},
 {j:"pilih",t:"Dalam Rajah 1, pilih y &gt; −x + 4. Rantau yang berlorek ialah:",p:["Di atas garis y = −x + 4, tidak termasuk garis itu","Di atas garis y = −x + 4, termasuk garis itu","Di bawah garis y = −x + 4, tidak termasuk garis itu","Di bawah garis y = −x + 4, termasuk garis itu"],b:0,u:"Tanda &gt; dalam bentuk y &gt; ... bermaksud rantau di atas garis, dan garis putus-putus tidak termasuk."}],
 bos:{j:"banyak",t:"Pilih SEMUA titik yang memenuhi y ≥ 2x − 1.",p:["(0, 0)","(2, 3)","(−1, −3)","(3, 4)","(2, 2)","(4, 6)"],b:[0,1,2],u:"(0, 0): 0 ≥ −1. (2, 3): 3 ≥ 3. (−1, −3): −3 ≥ −3. Tiga titik lain gagal: 4 ≥ 5, 2 ≥ 3 dan 6 ≥ 7 semuanya palsu.",kira:()=>[[0,0],[2,3],[-1,-3]].every(p=>lulus(H2[0],...p))&&![[3,4],[2,2],[4,6]].some(p=>lulus(H2[0],...p))}},

{n:3, tempat:"Dataran Sistem", sk:"6.2.1 / 6.2.2 Sistem ketaksamaan linear dan rantau sepunya", lampiran:"r3",
 kadNama:"Rantau Sepunya", kadEm:"\u{1F58D}\u{FE0F}", kadFakta:"Rantau bagi sistem ketaksamaan ialah kawasan yang memenuhi SETIAP ketaksamaan dalam sistem itu.",
 bosKadNama:"Bucu Rantau", bosKadEm:"\u{1F53A}", bosKadFakta:"Bucu rantau ialah titik persilangan dua garis sempadan. Ia dicari dengan menyelesaikan dua persamaan garis secara serentak.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, gerakkan P ke (2, 4). Adakah P berada dalam rantau sepunya?",p:["Ya, P memenuhi keempat-empat ketaksamaan","Tidak, kerana 2 + 4 &gt; 6","Tidak, kerana y lebih besar daripada x","Ya, kerana y kurang daripada 8"],b:0,u:"4 ≥ 2, 2 + 4 = 6 ≤ 8, 4 ≤ 6 dan 2 ≥ 1. Keempat-empat benar.",kira:()=>semua(H3,2,4)},
 {j:"pilih",t:"Dalam Rajah 1, gerakkan P ke (5, 2). Ketaksamaan manakah yang TIDAK dipenuhi?",p:["y ≥ x","x + y ≤ 8","y ≤ 6","x ≥ 1"],b:0,u:"2 ≥ 5 palsu. Tiga ketaksamaan lain dipenuhi.",kira:()=>!lulus(H3[0],5,2)&&lulus(H3[1],5,2)&&lulus(H3[2],5,2)&&lulus(H3[3],5,2)},
 {j:"pilih",t:"Dalam Rajah 1, gerakkan P ke (3, 6). Ketaksamaan manakah yang TIDAK dipenuhi?",p:["x + y ≤ 8","y ≥ x","y ≤ 6","x ≥ 1"],b:0,u:"3 + 6 = 9, dan 9 ≤ 8 palsu.",kira:()=>!lulus(H3[1],3,6)&&lulus(H3[0],3,6)&&lulus(H3[2],3,6)},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan x = 3. Berapakah bilangan nilai integer y yang meletakkan P dalam rantau sepunya?",tol:0.01,b:3,u:"y ≥ 3 dan 3 + y ≤ 8 (y ≤ 5). Maka y = 3, 4 atau 5.",kira:()=>[0,1,2,3,4,5,6,7,8,9,10].filter(y=>semua(H3,3,y)).length},
 {j:"pilih",t:"Aina membeli x buah buku dan y batang pen. Jumlah barang tidak melebihi 8, dan bilangan pen sekurang-kurangnya sama dengan bilangan buku. Sistem ketaksamaan yang sesuai ialah:",p:["x + y ≤ 8 dan y ≥ x","x + y ≥ 8 dan y ≥ x","x + y ≤ 8 dan y ≤ x","x + y &lt; 8 dan y &gt; x"],b:0,u:"\"Tidak melebihi 8\": x + y ≤ 8. \"Pen sekurang-kurangnya sama dengan buku\": y ≥ x."},
 {j:"pilih",t:"Rantau sepunya bagi suatu sistem ketaksamaan ialah:",p:["Kawasan yang memenuhi setiap ketaksamaan dalam sistem","Kawasan yang memenuhi sekurang-kurangnya satu ketaksamaan","Garis sempadan yang dilukis bagi setiap ketaksamaan","Kawasan yang tidak memenuhi mana-mana ketaksamaan"],b:0,u:"Rantau sepunya ialah persilangan rantau semua ketaksamaan."},
 {j:"pilih",t:"Dalam Rajah 1, titik persilangan garis y = x dan garis x + y = 8 ialah bucu rantau. Koordinatnya ialah:",p:["(4, 4)","(8, 0)","(2, 6)","(1, 1)"],b:0,u:"Gantikan y = x ke dalam x + y = 8: 2x = 8, jadi x = 4 dan y = 4."},
 {j:"nombor",t:"Dalam Rajah 1, berapakah nilai y yang terbesar bagi titik dalam rantau sepunya?",tol:0.01,b:6,u:"Ketaksamaan y ≤ 6 mengehadkan y. Titik seperti (1, 6) dan (2, 6) memenuhi semua ketaksamaan.",kira:()=>Math.max(...titikInt(H3,J10).map(p=>p[1]))}],
 bos:{j:"pilih",t:"Ketaksamaan x ≤ 2 ditambah kepada sistem dalam Rajah 1. Titik manakah masih berada dalam rantau sepunya yang baharu?",p:["(2, 6)","(3, 5)","(1, 7)","(0, 3)"],b:0,u:"(2, 6) memenuhi kelima-lima ketaksamaan. (3, 5) gagal x ≤ 2, (1, 7) gagal y ≤ 6, dan (0, 3) gagal x ≥ 1.",kira:()=>{const S=H3.concat([K(1,0,2,"≤")]);return semua(S,2,6)&&!semua(S,3,5)&&!semua(S,1,7)&&!semua(S,0,3);}}},

{n:4, tempat:"Ladang Tiga Sistem", sk:"6.2.3 / 6.2.4 Melorek rantau sistem dan masalah rutin", lampiran:"r4",
 kadNama:"Luas Rantau", kadEm:"\u{1F33E}", kadFakta:"Jika rantau berbentuk segi tiga, cari bucunya dahulu, kemudian gunakan luas = ½ × tapak × tinggi.",
 bosKadNama:"Titik Integer", bosKadEm:"\u{1F9EE}", bosKadFakta:"Dalam masalah sebenar seperti bilangan barang, hanya titik integer dalam rantau yang sah.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, gerakkan P ke (1, 4) dan semak setiap sistem. P berada dalam rantau sepunya bagi:",p:["Sistem B","Sistem A dan B","Sistem B dan C","Sistem A dan C"],b:0,u:"Sistem B: 4 ≥ 2, 1 + 4 ≤ 6, 1 ≥ 0. Sistem A dan C memerlukan y ≤ 2x, tetapi 4 ≤ 2 palsu.",kira:()=>semua(SB,1,4)&&!semua(SA,1,4)&&!semua(SC,1,4)},
 {j:"nombor",t:"Dalam Rajah 1, pilih Sistem A. Rantaunya ialah segi tiga dengan bucu (0, 0), (6, 0) dan (2, 4). Hitung luas rantau itu, dalam unit².",tol:0.01,b:12,u:"Tapak 6 unit di sepanjang paksi-x, tinggi 4 unit. Luas = ½ × 6 × 4 = 12 unit².",kira:()=>0.5*6*4},
 {j:"nombor",t:"Dalam Rajah 1, pilih Sistem B. Bucunya ialah (0, 0), (0, 6) dan (2, 4). Hitung luas rantau itu, dalam unit².",tol:0.01,b:6,u:"Tapak 6 unit di sepanjang paksi-y, tinggi (jarak mengufuk ke (2, 4)) 2 unit. Luas = ½ × 6 × 2 = 6 unit².",kira:()=>0.5*6*2},
 {j:"pilih",t:"Dalam Rajah 1, pilih Sistem C dan gerakkan P ke (5, 5). Kesimpulannya ialah:",p:["P dalam rantau; 5 ≤ 10, 10 ≥ 6 dan 5 ≤ 6","P di luar rantau kerana 5 + 5 &gt; 6","P di luar rantau kerana y = x","P pada garis sempadan y = 2x"],b:0,u:"Ketiga-tiga ketaksamaan Sistem C dipenuhi oleh (5, 5).",kira:()=>semua(SC,5,5)},
 {j:"pilih",t:"Rantau segi tiga dengan bucu (0, 0), (4, 0) dan (0, 4) ditakrifkan oleh sistem:",p:["x ≥ 0, y ≥ 0, x + y ≤ 4","x ≥ 0, y ≥ 0, x + y ≥ 4","x ≤ 0, y ≤ 0, x + y ≤ 4","x ≥ 0, y ≤ 0, x + y ≤ 4"],b:0,u:"Rantau berada di sukuan pertama (x ≥ 0, y ≥ 0) dan di bawah garis x + y = 4 yang melalui (4, 0) dan (0, 4).",kira:()=>[[0,0],[4,0],[0,4],[1,1]].every(([x,y])=>x>=0&&y>=0&&x+y<=4)},
 {j:"pilih",t:"Encik Ali menanam x pokok durian dan y pokok rambutan. Bilangan pokok rambutan tidak melebihi dua kali bilangan pokok durian. Ketaksamaan yang sesuai ialah:",p:["y ≤ 2x","x ≤ 2y","y ≥ 2x","2y ≤ x"],b:0,u:"Dua kali bilangan durian ialah 2x. Rambutan (y) tidak melebihi nilai itu: y ≤ 2x. Ketaksamaan ini terdapat dalam Sistem A."},
 {j:"nombor",t:"Dalam Rajah 1, pilih Sistem A. Antara titik integer dalam rantau, berapakah nilai terbesar bagi x + 2y?",tol:0.01,b:10,u:"Nilai terbesar berlaku pada bucu. (0, 0) memberi 0, (6, 0) memberi 6 dan (2, 4) memberi 2 + 8 = 10.",kira:()=>Math.max(...titikInt(SA,[0,8,0,8]).map(([x,y])=>x+2*y))},
 {j:"pilih",t:"Dalam Rajah 1, garis y = 0 bagi Sistem A dilukis penuh. Sebabnya ialah:",p:["Tanda ≥ bermaksud titik pada garis turut memenuhi","Garis y = 0 ialah paksi-x","Rantau berada di atas garis itu","Setiap garis sempadan dilukis penuh"],b:0,u:"Garis penuh menunjukkan titik pada garis termasuk dalam rantau, iaitu bagi tanda ≥ atau ≤."}],
 bos:{j:"nombor",t:"Dalam Rajah 1, pilih Sistem B. Berapakah bilangan titik integer (termasuk pada sempadan) dalam rantau itu?",tol:0.01,b:12,u:"x = 0: y = 0 hingga 6 (7 titik). x = 1: y = 2 hingga 5 (4 titik). x = 2: y = 4 (1 titik). Jumlah 12.",kira:()=>titikInt(SB,[0,8,0,8]).length}},

{n:5, tempat:"Kedai Kek", sk:"6.2.4 Masalah sistem ketaksamaan linear (rutin kompleks)", lampiran:"r5",
 kadNama:"Kekangan", kadEm:"\u{1F370}", kadFakta:"Setiap had dalam situasi sebenar (ruang ketuhar, masa, bahan) menjadi satu ketaksamaan. Semua kekangan bersama membentuk sistem.",
 bosKadNama:"Nilai Optimum", bosKadEm:"\u{1F3C6}", bosKadFakta:"Bagi fungsi seperti untung = 50x + 30y, nilai terbesar dalam rantau berlaku pada salah satu bucu rantau.",
 soalan:[
 {j:"pilih",t:"Ketuhar kedai itu boleh membakar paling banyak 8 biji kek sehari. Kekangan ini ditulis sebagai:",p:["x + y ≤ 8","x + y ≥ 8","x + y &lt; 8","8x + 8y ≤ 1"],b:0,u:"Jumlah kek = x + y, dan \"paling banyak 8\" bermaksud ≤ 8."},
 {j:"pilih",t:"Sebiji kek coklat mengambil 2 jam dan sebiji kek pandan mengambil 1 jam. Masa kerja maksimum sehari ialah 12 jam. Kekangan ini ditulis sebagai:",p:["2x + y ≤ 12","x + 2y ≤ 12","2x + y ≥ 12","x + y ≤ 12"],b:0,u:"Masa = 2 jam × x + 1 jam × y, dan masa itu tidak melebihi 12 jam."},
 {j:"pilih",t:"Dalam Rajah 1, gerakkan P ke (5, 3). Bolehkah kedai itu membuat 5 biji kek coklat dan 3 biji kek pandan sehari?",p:["Tidak, kerana 2(5) + 3 = 13 melebihi 12 jam","Ya, kerana 5 + 3 = 8 tidak melebihi 8","Ya, kerana x ≥ 1 dan y ≥ 2 dipenuhi","Tidak, kerana 5 + 3 melebihi 8 biji"],b:0,u:"Kekangan ketuhar dipenuhi (8 ≤ 8), tetapi kekangan masa gagal: 13 &gt; 12. Satu kekangan yang gagal sudah cukup.",kira:()=>!semua(KEK,5,3)&&lulus(KEK[0],5,3)},
 {j:"nombor",t:"Dalam Rajah 1, gerakkan P ke (3, 5). Berapakah untung sehari, dalam RM? (Untung RM50 sebiji kek coklat, RM30 sebiji kek pandan.)",tol:0.01,b:300,u:"Untung = 50(3) + 30(5) = 150 + 150 = RM300.",kira:()=>50*3+30*5},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah untung maksimum sehari, dalam RM?",tol:0.01,b:320,u:"Semak bucu rantau: (1, 2) → 110, (1, 7) → 260, (4, 4) → 320, (5, 2) → 310. Untung maksimum RM320.",kira:()=>terbaik(KEK,J10,50,30).v},
 {j:"pilih",t:"Berdasarkan Rajah 1, kombinasi (x, y) yang memberi untung maksimum ialah:",p:["(4, 4)","(5, 2)","(1, 7)","(3, 5)"],b:0,u:"(4, 4) memberi RM320, lebih tinggi daripada (5, 2) RM310, (3, 5) RM300 dan (1, 7) RM260.",kira:()=>{const t=terbaik(KEK,J10,50,30);return t.x===4&&t.y===4;}},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah bilangan kombinasi (x, y) integer yang memenuhi semua kekangan?",tol:0.01,b:19,u:"x = 1: y = 2 hingga 7 (6). x = 2: y = 2 hingga 6 (5). x = 3: y = 2 hingga 5 (4). x = 4: y = 2 hingga 4 (3). x = 5: y = 2 (1). Jumlah 19.",kira:()=>titikInt(KEK,J10).length},
 {j:"pilih",t:"Jika untung sebiji kek pandan naik kepada RM60 (kek coklat kekal RM50), kombinasi manakah yang terbaik?",p:["(1, 7)","(4, 4)","(5, 2)","(2, 6)"],b:0,u:"50x + 60y: (1, 7) → 470, (2, 6) → 460, (4, 4) → 440, (5, 2) → 370. Kombinasi terbaik berubah kepada (1, 7).",kira:()=>{const t=terbaik(KEK,J10,50,60);return t.x===1&&t.y===7;}}],
 bos:{j:"nombor",t:"Seorang pekerja cuti, jadi kekangan masa menjadi 2x + y ≤ 10. Dengan untung RM50 dan RM30, berapakah untung maksimum baharu, dalam RM?",tol:0.01,b:280,u:"Titik terbaik baharu ialah (2, 6): 100 + 180 = RM280. Semak: (3, 4) → 270, (1, 7) → 260, (4, 2) → 260.",kira:()=>terbaik([K(1,1,8,"≤"),K(2,1,10,"≤"),K(1,0,1,"≥"),K(0,1,2,"≥")],J10,50,30).v}},

{n:6, tempat:"Pejabat Lawatan", sk:"6.2.4 Masalah bukan rutin sistem ketaksamaan linear", lampiran:"r6",
 kadNama:"Kos Minimum", kadEm:"\u{1F68C}", kadFakta:"Bagi kos yang perlu diminimumkan, cari titik integer dalam rantau yang memberi nilai kos terendah.",
 bosKadNama:"Pereka Pelan", bosKadEm:"\u{1F3D7}\u{FE0F}", bosKadFakta:"Masalah pengoptimuman yang baik mempunyai pemboleh ubah yang jelas, kekangan yang realistik dan fungsi objektif yang bermakna.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, gerakkan P ke (2, 7). Berapakah kos sewa, dalam RM? (Bas RM600 sebuah, van RM200 sebuah.)",tol:0.01,b:2600,u:"Kos = 600(2) + 200(7) = 1200 + 1400 = RM2600.",kira:()=>600*2+200*7},
 {j:"pilih",t:"Dalam Rajah 1, gerakkan P ke (2, 6). Adakah 2 bas dan 6 van mencukupi?",p:["Tidak, kerana 40(2) + 10(6) = 140, kurang daripada 150","Ya, kerana 2 + 6 = 8 tidak melebihi 9","Ya, kerana bilangan bas tidak melebihi 3","Tidak, kerana bilangan van melebihi 8"],b:0,u:"Tempat duduk = 80 + 60 = 140, tidak cukup untuk 150 murid.",kira:()=>!lulus(BAS[0],2,6)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah kos sewa minimum, dalam RM?",tol:0.01,b:2400,u:"Titik integer dalam rantau: (2, 7) dan (3, 3) hingga (3, 6). Kos terendah: (3, 3) → 1800 + 600 = RM2400.",kira:()=>terbaik(BAS,J6,600,200,true).v},
 {j:"pilih",t:"Berdasarkan Rajah 1, kombinasi yang memberi kos minimum ialah:",p:["3 bas dan 3 van","2 bas dan 7 van, kos RM2600","3 bas dan 6 van, kos RM3000","3 bas dan 4 van, kos RM2600"],b:0,u:"(3, 3) memenuhi 120 + 30 = 150 ≥ 150, dan kosnya RM2400, terendah antara semua titik integer dalam rantau.",kira:()=>{const t=terbaik(BAS,J6,600,200,true);return t.x===3&&t.y===3;}},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah bilangan kombinasi integer (x, y) yang memenuhi semua kekangan?",tol:0.01,b:5,u:"x = 2: y = 7 sahaja (kerana x + y ≤ 9). x = 3: y = 3, 4, 5 atau 6. Jumlah 5 kombinasi.",kira:()=>titikInt(BAS,J6).length},
 {j:"pilih",t:"Sewa bas naik kepada RM900 sebuah (van kekal RM200). Kombinasi manakah yang kini paling murah?",p:["2 bas dan 7 van, RM3200","3 bas dan 3 van, RM3300","3 bas dan 4 van, RM3500","2 bas dan 7 van, RM3300"],b:0,u:"(2, 7): 1800 + 1400 = RM3200. (3, 3): 2700 + 600 = RM3300. Kenaikan harga bas mengubah pilihan terbaik.",kira:()=>{const t=terbaik(BAS,J6,900,200,true);return t.x===2&&t.y===7&&t.v===3200;}},
 {j:"pilih",t:"Titik (3, 3.5) berada dalam rantau Rajah 1. Mengapakah ia bukan penyelesaian yang sah?",p:["Bilangan van mesti nombor bulat","Kos sewa bagi titik itu menjadi negatif","Titik itu melanggar kekangan x + y ≤ 9","Titik itu melanggar kekangan 40x + 10y ≥ 150"],b:0,u:"120 + 35 = 155 ≥ 150 dan 6.5 ≤ 9, jadi titik itu dalam rantau. Namun separuh van tidak boleh disewa.",kira:()=>semua(BAS,3,3.5)},
 {j:"nombor",t:"Seramai 170 orang murid kini menyertai lawatan (kekangan lain tidak berubah). Berapakah kos sewa minimum baharu, dalam RM?",tol:0.01,b:2800,u:"40x + 10y ≥ 170. Dengan x = 3, y ≥ 5: (3, 5) → 1800 + 1000 = RM2800. Dengan x = 2, y ≥ 9 melanggar x + y ≤ 9 dan y ≤ 8.",kira:()=>terbaik([K(40,10,170,"≥"),BAS[1],BAS[2],BAS[3]],J6,600,200,true).v}],
 bos:{j:"buka",
  t:"Reka satu masalah pengoptimuman bagi aktiviti sekolah, contohnya jualan amal, pembelian alat sukan atau penyediaan makanan hari sukan.",
  arahan:"Takrifkan dua pemboleh ubah dan tulis sekurang-kurangnya tiga kekangan dalam bentuk ketaksamaan linear. Lakar rantau sepunya, tentukan bucu-bucunya, dan cari nilai optimum bagi satu fungsi objektif (untung atau kos). Terangkan bagaimana jawapan berubah jika satu kekangan diubah.",
  u:"Jawapan TP6 yang kukuh mempunyai kekangan yang realistik dan ditulis dengan betul, rantau yang dilorek dengan tepat, nilai optimum yang disemak pada bucu (dan titik integer jika perlu), serta analisis kesan perubahan kekangan."}}
];

module.exports = {
  id:"m4b6", tingkatan:4, kod:"6.0 Ketaksamaan Linear dalam Dua Pemboleh Ubah",
  tajuk:"Ladang Rantau",
  subtajuk:"Matematik Ting. 4 · Bab 6 Ketaksamaan Linear dalam Dua Pemboleh Ubah",
  spi:SPI,
  ulasan:{
   1:"{n} dapat mewakilkan situasi mudah dalam bentuk ketaksamaan linear dalam dua pemboleh ubah dengan tanda yang betul. Langkah seterusnya ialah menentukan rantau dan titik yang memenuhinya.",
   2:"{n} memahami cara menentukan rantau bagi satu ketaksamaan linear dengan titik ujian, serta membezakan garis penuh dan garis putus-putus. Perlu lebih latihan sistem ketaksamaan.",
   3:"{n} boleh mewakilkan situasi dengan sistem ketaksamaan linear dan menentukan sama ada sesuatu titik berada dalam rantau sepunya.",
   4:"{n} mampu melorek rantau bagi sistem ketaksamaan, mencari bucu dan luasnya, serta menyelesaikan masalah rutin yang mudah. Seterusnya, latih masalah kekangan dengan fungsi objektif.",
   5:"{n} dapat menyelesaikan masalah rutin yang kompleks seperti untung maksimum dengan beberapa kekangan dan titik integer. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya mereka masalah pengoptimuman sendiri, menyelesaikannya dengan rantau sepunya, dan menganalisis kesan perubahan kekangan. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Ketaksamaan Linear dalam Dua Pemboleh Ubah. Cadangan: ulang hentian pertama dengan Rajah 1 dan uji beberapa titik dengan menggantikan nilai x dan y bersama rakan sebaya."
  },
  lampiran:{ r1:R1, r2:R2, r3:R3, r4:R4, r5:R5, r6:R6 },
  aras:ARAS
};
