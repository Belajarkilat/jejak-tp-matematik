/* Sumber kandungan — Matematik KSSM Tingkatan 5, Bab 6 Nisbah dan Graf Fungsi Trigonometri.
   Fail ini disunting tangan. Jalankan `node bina.js m5b6`.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik Tingkatan 4
   dan 5, muka 106 (dskp/matematik-t4-t5.pdf). DSKP menulis enam tahap penuh.
   Nota DSKP: bulatan unit; nilai bagi 0°, 90°, 180°, 270°, 360°; sukuan II, III, IV yang sepadan
   dengan 30°, 45°, 60° tanpa kalkulator; graf y = sin x, kos x, tan x bagi 0° ≤ x ≤ 360°
   (maksimum, minimum, bentuk, pintasan); kesan a, b, c bagi y = a sin bx + c (a > 0, b > 0).
   Istilah ikut KSSM: "kos" bagi kosinus.

   Rajah: widget t5trig (widget-m5b6.js). */

const RAD = Math.PI / 180;
const bul = (n, d) => Math.round(n * Math.pow(10, d)) / Math.pow(10, d);
const sin = x => Math.sin(x * RAD), kos = x => Math.cos(x * RAD), tan = x => Math.tan(x * RAD);
const dekat = (a, b) => Math.abs(a - b) < 1e-9;
const HARI = t => 2 * Math.sin(30 * t * RAD) + 3;     /* model pasang surut */

const SPI = [
"Mempamerkan pengetahuan asas tentang nisbah dan graf fungsi trigonometri.",
"Mempamerkan kefahaman tentang nisbah dan graf fungsi trigonometri.",
"Mengaplikasikan kefahaman tentang nisbah dan graf fungsi trigonometri untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang nisbah dan graf fungsi trigonometri dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang nisbah dan graf fungsi trigonometri dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang nisbah dan graf fungsi trigonometri dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran ---------- */
const iw = (kapsyen, alt, extra) => Object.assign({ jenis: "interaktif", w: "t5trig", kapsyen, alt }, extra);
const R1 = iw("Rajah 1 · Bulatan unit. Gerakkan sudut θ.",
  "Rajah interaktif bulatan unit dengan sudut 0 hingga 360 darjah; titik pada bulatan memberi kos θ dan sin θ, serta sukuan dan nilai tan",
  { mod: "bulatan", sudut: [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360], iAwal: 1 });
const R2 = iw("Rajah 1 · Sudut dalam sukuan II, III dan IV. Gerakkan θ dan perhatikan sudut rujukan.",
  "Rajah interaktif bulatan unit bagi sudut dalam sukuan kedua, ketiga dan keempat dengan sudut rujukan dan nilai sin, kos dan tan",
  { mod: "bulatan", sudut: [100, 120, 135, 150, 200, 210, 225, 240, 300, 315, 330, 340], iAwal: 3 });
const R3 = iw("Rajah 1 · Mencari sudut daripada nilai sin, kos atau tan. Pilih persamaan.",
  "Rajah interaktif bulatan unit yang menandakan semua sudut antara 0 dan 360 darjah yang memenuhi persamaan trigonometri yang dipilih",
  { mod: "cari", soalan: [{ f: "sin", v: 0.5, t: "sin θ = 0.5" }, { f: "kos", v: -0.5, t: "kos θ = −0.5" }, { f: "tan", v: 1, t: "tan θ = 1" }, { f: "sin", v: -0.6, t: "sin θ = −0.6" }, { f: "kos", v: 0.8, t: "kos θ = 0.8" }, { f: "tan", v: -2, t: "tan θ = −2" }] });
const R4 = iw("Rajah 1 · Graf fungsi trigonometri bagi 0° ≤ x ≤ 360°. Pilih graf dan gerakkan x.",
  "Rajah interaktif graf y = sin x, y = kos x dan y = tan x bagi 0 hingga 360 darjah dengan ciri maksimum, minimum dan pintasan",
  { mod: "graf", xs: [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 240, 270, 300, 330, 360] });
const R5 = iw("Rajah 1 · y = a sin bx + c dan y = a kos bx + c. Kira dahulu, kemudian semak.",
  "Rajah interaktif kesan pemalar a, b dan c ke atas graf sinus dan kosinus; amplitud, tempoh, maksimum dan minimum dikira, dalam mod cabar",
  { mod: "abc", cabar: true, a: [1, 2, 3], b: [0.5, 1, 2, 3], c: [-1, 0, 1, 2], aAwal: 1, bAwal: 2, cAwal: 2 });
const R6 = iw("Rajah 1 · Paras air h (m) di sebuah pelabuhan t jam selepas tengah malam. Gerakkan t.",
  "Rajah interaktif model pasang surut h = 2 sin(30t) + 3 bagi 0 hingga 24 jam; paras air antara 1 meter dan 5 meter dengan tempoh 12 jam",
  { mod: "model", a: 2, b: 30, c: 3, ts: Array.from({ length: 25 }, (_, i) => i), namaT: "t", unitT: "jam", namaY: "h", unitY: "m" });

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Bulatan Unit", sk:"6.1.1 Bulatan unit dan nilai bagi 0°, 90°, 180°, 270°, 360°", lampiran:"r1",
 kadNama:"Bulatan Unit", kadEm:"\u{2B55}", kadFakta:"Pada bulatan unit, titik bagi sudut θ ialah (kos θ, sin θ), dan tan θ = sin θ ÷ kos θ.",
 bosKadNama:"Sudut Paksi", bosKadEm:"\u{2795}", bosKadFakta:"sin θ = 0 apabila titik berada pada paksi-x: θ = 0°, 180° dan 360°.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, gerakkan θ kepada 90°. Berapakah nilai sin 90°?",tol:0.001,b:1,u:"Pada θ = 90°, titik ialah (0, 1). sin θ ialah koordinat-y, jadi sin 90° = 1.",kira:()=>bul(sin(90),6)},
 {j:"nombor",t:"Dalam Rajah 1, berapakah nilai kos 180°?",tol:0.001,b:-1,u:"Pada θ = 180°, titik ialah (−1, 0). kos θ ialah koordinat-x, jadi kos 180° = −1.",kira:()=>bul(kos(180),6)},
 {j:"pilih",t:"Dalam Rajah 1, pilih θ = 90°. Nilai tan 90° ialah:",p:["Tidak tertakrif","Sama dengan 0","Sama dengan 1","Sama dengan −1"],b:0,u:"tan 90° = sin 90° ÷ kos 90° = 1 ÷ 0. Pembahagian dengan sifar tidak tertakrif."},
 {j:"pilih",t:"Dalam bulatan unit, koordinat titik bagi sudut θ ialah:",p:["(kos θ, sin θ)","(sin θ, kos θ)","(tan θ, 1)","(θ, sin θ)"],b:0,u:"Koordinat-x ialah kos θ dan koordinat-y ialah sin θ kerana jejari bulatan unit ialah 1."},
 {j:"pilih",t:"Dalam Rajah 1, pilih θ = 150°. Sudut itu berada dalam sukuan:",p:["II","I","III","IV"],b:0,u:"Sukuan II meliputi sudut antara 90° dan 180°."},
 {j:"nombor",t:"Dalam Rajah 1, berapakah nilai sin 270°?",tol:0.001,b:-1,u:"Pada θ = 270°, titik ialah (0, −1), jadi sin 270° = −1.",kira:()=>bul(sin(270),6)},
 {j:"nombor",t:"Dalam Rajah 1, berapakah nilai kos 360°?",tol:0.001,b:1,u:"360° ialah satu pusingan lengkap, jadi titik kembali ke (1, 0) dan kos 360° = 1.",kira:()=>bul(kos(360),6)},
 {j:"pilih",t:"Gerakkan θ dalam sukuan III pada Rajah 1. Nisbah trigonometri yang positif dalam sukuan III ialah:",p:["tan","sin dan tan","kos dan tan","sin dan kos"],b:0,u:"Dalam sukuan III, sin dan kos kedua-duanya negatif, jadi tan = sin ÷ kos positif. Contoh: θ = 225° memberi tan = 1.",kira:()=>tan(225)>0&&sin(225)<0&&kos(225)<0}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, bagi sudut manakah sin θ = 0 dalam julat 0° ≤ θ ≤ 360°?",p:["0°, 180° dan 360°","90° dan 270°","0° dan 180°","180° dan 270°"],b:0,u:"sin θ = 0 apabila titik berada pada paksi-x, iaitu (1, 0) atau (−1, 0). Ini berlaku pada 0°, 180° dan 360°.",kira:()=>[0,180,360].every(t=>Math.abs(sin(t))<1e-9)}},

{n:2, tempat:"Bilik Rujukan", sk:"6.1.1 / 6.1.2 Sudut rujukan dan nilai dalam sukuan II, III dan IV", lampiran:"r2",
 kadNama:"Sudut Rujukan", kadEm:"\u{1F4D0}", kadFakta:"Sudut rujukan: sukuan II 180° − θ, sukuan III θ − 180°, sukuan IV 360° − θ. Nilainya sama dengan sudut rujukan, tandanya ikut sukuan.",
 bosKadNama:"Tanda Sukuan", bosKadEm:"\u{2797}", bosKadFakta:"Sukuan I semua positif, II sin positif, III tan positif, IV kos positif.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih θ = 150°. Berapakah sudut rujukannya, dalam darjah?",tol:0.01,b:30,u:"150° berada dalam sukuan II. Sudut rujukan = 180° − 150° = 30°.",kira:()=>180-150},
 {j:"nombor",t:"Dalam Rajah 1, pilih θ = 225°. Berapakah sudut rujukannya, dalam darjah?",tol:0.01,b:45,u:"225° berada dalam sukuan III. Sudut rujukan = 225° − 180° = 45°.",kira:()=>225-180},
 {j:"nombor",t:"Dalam Rajah 1, pilih θ = 300°. Berapakah sudut rujukannya, dalam darjah?",tol:0.01,b:60,u:"300° berada dalam sukuan IV. Sudut rujukan = 360° − 300° = 60°.",kira:()=>360-300},
 {j:"pilih",t:"Tanpa kalkulator, nilai kos 120° ialah:",p:["−1/2","1/2","−√3/2","√3/2"],b:0,u:"Sudut rujukan = 60° dan kos 60° = 1/2. Dalam sukuan II kos negatif, jadi kos 120° = −1/2.",kira:()=>dekat(kos(120),-0.5)},
 {j:"pilih",t:"Tanpa kalkulator, nilai sin 240° ialah:",p:["−√3/2","√3/2","−1/2","1/2"],b:0,u:"Sudut rujukan = 60° dan sin 60° = √3/2. Dalam sukuan III sin negatif, jadi sin 240° = −√3/2.",kira:()=>dekat(sin(240),-Math.sqrt(3)/2)},
 {j:"pilih",t:"Tanpa kalkulator, nilai tan 315° ialah:",p:["−1","1","√3","−√3"],b:0,u:"Sudut rujukan = 45° dan tan 45° = 1. Dalam sukuan IV tan negatif, jadi tan 315° = −1.",kira:()=>dekat(tan(315),-1)},
 {j:"pilih",t:"Berdasarkan Rajah 1, konjektur yang betul tentang sin θ bagi θ dalam sukuan II ialah:",p:["sin θ = sin (180° − θ)","sin θ = −sin (180° − θ)","sin θ = sin (θ − 180°)","sin θ = kos (180° − θ)"],b:0,u:"Dalam sukuan II, sin positif dan nilainya sama dengan sin sudut rujukan. Contoh: sin 150° = sin 30° = 0.5.",kira:()=>dekat(sin(150),sin(30))&&dekat(sin(120),sin(60))},
 {j:"nombor",t:"Dalam Rajah 1, pilih θ = 200°. Berapakah nilai sin 200°, betul kepada empat tempat perpuluhan?",tol:0.0001,b:-0.342,u:"Sudut rujukan = 20°. sin 20° = 0.3420, dan sin negatif dalam sukuan III. sin 200° = −0.3420.",kira:()=>bul(sin(200),4)}],
 bos:{j:"pilih",t:"Diberi sin 35° = 0.5736 dan kos 35° = 0.8192. Nilai sin 215° ialah:",p:["−0.5736","0.5736","−0.8192","0.8192"],b:0,u:"Langkah 1: 215° dalam sukuan III, sudut rujukan = 215° − 180° = 35°. Langkah 2: sin negatif dalam sukuan III. Maka sin 215° = −sin 35° = −0.5736.",kira:()=>bul(sin(215),4)===-0.5736}},

{n:3, tempat:"Pencari Sudut", sk:"6.1.3 / 6.1.4 Menentukan sudut apabila nilai diberi", lampiran:"r3",
 kadNama:"Dua Penyelesaian", kadEm:"\u{1F50E}", kadFakta:"Bagi 0° ≤ θ ≤ 360°, persamaan sin θ = k, kos θ = k atau tan θ = k (k bukan 0, ±1) biasanya mempunyai dua penyelesaian.",
 bosKadNama:"Susun Semula", bosKadEm:"\u{1F527}", bosKadFakta:"Susun persamaan supaya fungsi trigonometri berdiri sendiri, contohnya 4 sin θ + 3 = 1 menjadi sin θ = −0.5.",
 soalan:[
 {j:"pilih",t:"Dalam Rajah 1, pilih sin θ = 0.5. Nilai θ ialah:",p:["30° dan 150°","30° dan 210°","60° dan 120°","30° dan 330°"],b:0,u:"Sudut rujukan = 30°. sin positif dalam sukuan I dan II: θ = 30° dan 180° − 30° = 150°.",kira:()=>dekat(sin(30),0.5)&&dekat(sin(150),0.5)},
 {j:"pilih",t:"Dalam Rajah 1, pilih kos θ = −0.5. Nilai θ ialah:",p:["120° dan 240°","60° dan 300°","120° dan 300°","150° dan 210°"],b:0,u:"Sudut rujukan = 60°. kos negatif dalam sukuan II dan III: θ = 180° − 60° = 120° dan 180° + 60° = 240°.",kira:()=>dekat(kos(120),-0.5)&&dekat(kos(240),-0.5)},
 {j:"pilih",t:"Dalam Rajah 1, pilih tan θ = 1. Nilai θ ialah:",p:["45° dan 225°","45° dan 135°","45° dan 315°","135° dan 315°"],b:0,u:"Sudut rujukan = 45°. tan positif dalam sukuan I dan III: θ = 45° dan 180° + 45° = 225°.",kira:()=>dekat(tan(45),1)&&dekat(tan(225),1)},
 {j:"nombor",t:"Dalam Rajah 1, pilih sin θ = −0.6. Berapakah nilai θ yang lebih kecil, betul kepada satu tempat perpuluhan?",tol:0.05,b:216.9,u:"Sudut rujukan = sin⁻¹ 0.6 = 36.9°. sin negatif dalam sukuan III dan IV: θ = 180° + 36.9° = 216.9° dan 360° − 36.9° = 323.1°.",kira:()=>bul(180+Math.asin(0.6)/RAD,1)},
 {j:"nombor",t:"Dalam Rajah 1, pilih kos θ = 0.8. Berapakah nilai θ dalam sukuan IV, betul kepada satu tempat perpuluhan?",tol:0.05,b:323.1,u:"Sudut rujukan = kos⁻¹ 0.8 = 36.9°. Dalam sukuan IV: θ = 360° − 36.9° = 323.1°.",kira:()=>bul(360-Math.acos(0.8)/RAD,1)},
 {j:"pilih",t:"Dalam Rajah 1, pilih tan θ = −2. Dalam sukuan manakah θ berada?",p:["II dan IV","I dan III","II dan III","III dan IV"],b:0,u:"tan negatif dalam sukuan II dan IV. θ = 180° − 63.4° = 116.6° dan 360° − 63.4° = 296.6°.",kira:()=>tan(116.57)<0&&tan(296.57)<0},
 {j:"pilih",t:"Jika sin θ negatif dan kos θ positif, θ berada dalam sukuan:",p:["IV","II","III","I"],b:0,u:"kos positif dalam sukuan I dan IV; sin negatif dalam sukuan III dan IV. Kedua-dua syarat dipenuhi dalam sukuan IV."},
 {j:"nombor",t:"Selesaikan 2 kos θ − 1 = 0 bagi 180° ≤ θ ≤ 360°.",tol:0.01,b:300,u:"kos θ = 0.5. Sudut rujukan = 60°. kos positif dalam sukuan I dan IV, tetapi julat hanya 180° hingga 360°, jadi θ = 360° − 60° = 300°.",kira:()=>dekat(2*kos(300)-1,0)?300:0}],
 bos:{j:"nombor",t:"Selesaikan 4 sin θ + 3 = 1 bagi 0° ≤ θ ≤ 360°. Berikan hasil tambah semua nilai θ, dalam darjah.",tol:0.01,b:540,u:"Langkah 1: 4 sin θ = −2, jadi sin θ = −0.5. Langkah 2: sudut rujukan = 30°, sin negatif dalam sukuan III dan IV: θ = 210° dan 330°. Langkah 3: 210° + 330° = 540°.",kira:()=>(dekat(4*sin(210)+3,1)&&dekat(4*sin(330)+3,1))?540:0}},

{n:4, tempat:"Galeri Graf", sk:"6.2.1 Graf y = sin x, y = kos x dan y = tan x", lampiran:"r4",
 kadNama:"Gelombang Sinus", kadEm:"\u{1F30A}", kadFakta:"Graf sin x dan kos x berulang setiap 360°, dengan nilai antara −1 dan 1. Graf tan x berulang setiap 180° dan tiada nilai maksimum.",
 bosKadNama:"Titik Persilangan", bosKadEm:"\u{2716}\u{FE0F}", bosKadFakta:"Bilangan penyelesaian sin x = k sama dengan bilangan titik persilangan graf y = sin x dengan garis y = k.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, pilih y = sin x. Berapakah nilai maksimum graf itu?",tol:0.001,b:1,u:"Nilai maksimum y = sin x ialah 1, dicapai pada x = 90°.",kira:()=>bul(sin(90),6)},
 {j:"pilih",t:"Dalam Rajah 1, pilih y = kos x. Pada nilai x manakah graf itu mencapai nilai minimum?",p:["180°","90°","270°","360°"],b:0,u:"kos 180° = −1, iaitu nilai minimum graf kos x.",kira:()=>dekat(kos(180),-1)},
 {j:"pilih",t:"Dalam Rajah 1, pilih y = tan x. Pernyataan manakah yang benar?",p:["Graf tidak tertakrif pada x = 90° dan x = 270°","Nilai maksimum graf ialah 1 pada x = 45°","Graf melalui titik (90°, 0) dan (270°, 0)","Pintasan-y graf ialah 1 kerana tan 0° = 1"],b:0,u:"Pada 90° dan 270°, kos x = 0, jadi tan x tidak tertakrif. Graf mempunyai asimptot pada garis itu dan tiada nilai maksimum."},
 {j:"pilih",t:"Berdasarkan Rajah 1, pintasan-y bagi graf y = kos x ialah:",p:["1","0","−1","90"],b:0,u:"Pintasan-y ialah nilai y apabila x = 0°: kos 0° = 1."},
 {j:"banyak",t:"Berdasarkan Rajah 1, pilih SEMUA pintasan-x bagi graf y = sin x dalam 0° ≤ x ≤ 360°.",p:["0°","90°","180°","270°","360°"],b:[0,2,4],u:"Graf sin x memotong paksi-x apabila sin x = 0, iaitu pada 0°, 180° dan 360°."},
 {j:"pilih",t:"Bandingkan graf y = sin x dan y = kos x dalam Rajah 1. Pernyataan yang betul ialah:",p:["Graf kos x ialah graf sin x yang dianjak 90° ke kiri","Kedua-dua graf mempunyai pintasan-y yang sama","Graf kos x mempunyai nilai maksimum 2","Graf sin x tidak tertakrif pada x = 90°"],b:0,u:"Bentuk kedua-dua graf sama, tetapi puncak kos x berada pada 0° manakala puncak sin x pada 90°. Maka kos x = sin (x + 90°).",kira:()=>dekat(kos(30),sin(120))},
 {j:"nombor",t:"Dalam Rajah 1, pilih y = tan x dan x = 135°. Berapakah nilai y?",tol:0.001,b:-1,u:"tan 135° = −tan 45° = −1 (sukuan II).",kira:()=>bul(tan(135),6)},
 {j:"pilih",t:"Berdasarkan Rajah 1, julat nilai y bagi graf y = sin x ialah:",p:["−1 ≤ y ≤ 1","0 ≤ y ≤ 1","−90 ≤ y ≤ 90","−360 ≤ y ≤ 360"],b:0,u:"Nilai sin x berada antara minimum −1 dan maksimum 1."}],
 bos:{j:"nombor",t:"Berdasarkan Rajah 1, berapakah bilangan titik persilangan graf y = sin x dengan garis y = 0.5 bagi 0° ≤ x ≤ 360°?",tol:0.01,b:2,u:"Langkah 1: sin x = 0.5 bermaksud x = 30° atau 150°. Langkah 2: garis y = 0.5 memotong lengkung sin x pada kedua-dua titik itu. Bilangan titik = 2.",kira:()=>[30,150].filter(x=>dekat(sin(x),0.5)).length}},

{n:5, tempat:"Studio Gelombang", sk:"6.2.2 Kesan pemalar a, b dan c ke atas graf", lampiran:"r5",
 kadNama:"Amplitud dan Tempoh", kadEm:"\u{1F39A}\u{FE0F}", kadFakta:"Bagi y = a sin bx + c: amplitud = a, tempoh = 360° ÷ b, maksimum = a + c, minimum = c − a.",
 bosKadNama:"Kira Puncak", bosKadEm:"\u{26F0}\u{FE0F}", bosKadFakta:"Bilangan titik maksimum dalam 0° hingga 360° = 360° ÷ tempoh = b, bagi graf sinus yang bermula pada 0°.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan y = 2 sin 2x + 1. Berapakah nilai maksimum graf itu? Kira dahulu, kemudian semak.",tol:0.01,b:3,u:"Maksimum = a + c = 2 + 1 = 3.",kira:()=>2+1},
 {j:"nombor",t:"Dalam Rajah 1, berapakah tempoh graf y = 2 sin 2x + 1, dalam darjah?",tol:0.01,b:180,u:"Tempoh = 360° ÷ b = 360° ÷ 2 = 180°.",kira:()=>360/2},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah nilai minimum graf y = 3 kos x − 1?",tol:0.01,b:-4,u:"Minimum = c − a = −1 − 3 = −4.",kira:()=>-1-3},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah tempoh graf y = sin 3x, dalam darjah?",tol:0.01,b:120,u:"Tempoh = 360° ÷ 3 = 120°. Graf berulang tiga kali dalam 0° hingga 360°.",kira:()=>360/3},
 {j:"pilih",t:"Dalam Rajah 1, apakah kesan menambah nilai c?",p:["Graf beralih ke atas","Amplitud graf bertambah sebanyak c","Tempoh graf berkurang menjadi 360° ÷ c","Graf dipantulkan pada paksi-x"],b:0,u:"c ditambah kepada setiap nilai y, jadi seluruh graf beralih ke atas tanpa mengubah bentuk, amplitud atau tempoh."},
 {j:"pilih",t:"Dalam Rajah 1, apakah kesan menggandakan nilai b?",p:["Tempoh graf menjadi separuh","Amplitud graf menjadi dua kali","Graf dianjak ke atas sebanyak 2 unit","Nilai maksimum graf menjadi dua kali"],b:0,u:"Tempoh = 360° ÷ b. Jika b digandakan, tempoh menjadi separuh, jadi gelombang lebih rapat."},
 {j:"pilih",t:"Suatu graf mempunyai nilai maksimum 5, nilai minimum 1, tempoh 360°, pintasan-y 3, dan meningkat apabila x bertambah dari 0°. Persamaan graf itu ialah:",p:["y = 2 sin x + 3","y = 3 sin x + 2","y = 2 kos x + 3","y = 2 sin 2x + 3"],b:0,u:"a = (5 − 1) ÷ 2 = 2, c = (5 + 1) ÷ 2 = 3, b = 360° ÷ 360° = 1. Graf meningkat dari pintasan-y 3, jadi ia graf sinus: y = 2 sin x + 3.",kira:()=>dekat(2*sin(0)+3,3)&&2*sin(10)+3>3&&dekat(2*sin(90)+3,5)},
 {j:"nombor",t:"Graf y = a kos bx + c mempunyai nilai maksimum 7, nilai minimum −1 dan tempoh 120°. Cari nilai a + b + c.",tol:0.01,b:10,u:"a = (7 − (−1)) ÷ 2 = 4. c = (7 + (−1)) ÷ 2 = 3. b = 360° ÷ 120° = 3. a + b + c = 4 + 3 + 3 = 10.",kira:()=>(7+1)/2+360/120+(7-1)/2}],
 bos:{j:"nombor",t:"Berdasarkan Rajah 1, bagi graf y = 3 sin 2x + 1 dalam julat 0° ≤ x ≤ 360°, berapakah bilangan titik maksimum?",tol:0.01,b:2,u:"Langkah 1: tempoh = 360° ÷ 2 = 180°. Langkah 2: satu titik maksimum bagi setiap tempoh: x = 45° dan x = 225°. Bilangan titik maksimum = 2.",kira:()=>[45,225].filter(x=>dekat(3*sin(2*x)+1,4)).length}},

{n:6, tempat:"Pelabuhan", sk:"6.2.3 Masalah graf fungsi trigonometri (bukan rutin)", lampiran:"r6",
 kadNama:"Pasang Surut", kadEm:"\u{2693}", kadFakta:"Fenomena berulang seperti pasang surut, roda Ferris dan bunyi boleh dimodelkan dengan y = a sin bx + c.",
 bosKadNama:"Pemodel Gelombang", bosKadEm:"\u{1F3A1}", bosKadFakta:"Untuk membina model, tentukan a daripada separuh julat, c daripada nilai tengah, dan b daripada 360° ÷ tempoh.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, gerakkan t kepada 3 jam. Berapakah paras air h, dalam meter?",tol:0.01,b:5,u:"h = 2 sin(30 × 3) + 3 = 2 sin 90° + 3 = 2 + 3 = 5 m.",kira:()=>bul(HARI(3),6)},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah tempoh kitaran pasang surut, dalam jam?",tol:0.01,b:12,u:"Tempoh = 360° ÷ b = 360° ÷ 30° = 12 jam.",kira:()=>360/30},
 {j:"nombor",t:"Berdasarkan Rajah 1, pada jam ke berapakah air surut ke paras terendah buat kali pertama?",tol:0.01,b:9,u:"Paras terendah apabila sin(30t) = −1, iaitu 30t = 270°, jadi t = 9 jam.",kira:()=>dekat(HARI(9),1)?9:0},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah paras air pada t = 1 jam, dalam meter?",tol:0.01,b:4,u:"h = 2 sin 30° + 3 = 2(0.5) + 3 = 4 m.",kira:()=>bul(HARI(1),6)},
 {j:"pilih",t:"Sebuah bot memerlukan paras air sekurang-kurangnya 4 m untuk masuk ke pelabuhan. Berdasarkan Rajah 1, dalam 12 jam pertama bot itu boleh masuk antara:",p:["Jam ke-1 hingga jam ke-5","Jam ke-0 hingga jam ke-6","Jam ke-3 hingga jam ke-9","Jam ke-7 hingga jam ke-11"],b:0,u:"h ≥ 4 bermaksud sin(30t) ≥ 0.5, iaitu 30° ≤ 30t ≤ 150°. Maka 1 ≤ t ≤ 5.",kira:()=>dekat(HARI(1),4)&&dekat(HARI(5),4)&&HARI(3)>4&&HARI(6)<4},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah beza antara paras air tertinggi dan terendah, dalam meter?",tol:0.01,b:4,u:"Tertinggi = 2 + 3 = 5 m, terendah = 3 − 2 = 1 m. Beza = 4 m, iaitu dua kali amplitud.",kira:()=>(2+3)-(3-2)},
 {j:"pilih",t:"Pihak pelabuhan mendapati model yang lebih tepat ialah h = 2 sin(15t) + 3. Apakah perubahan berbanding Rajah 1?",p:["Tempoh menjadi 24 jam","Paras maksimum menjadi 4 m","Paras minimum menjadi 0 m","Tempoh berkurang menjadi 6 jam"],b:0,u:"Tempoh = 360° ÷ 15° = 24 jam. a dan c tidak berubah, jadi paras maksimum (5 m) dan minimum (1 m) kekal."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapa kalikah paras air mencapai 5 m dalam 0 ≤ t ≤ 24?",tol:0.01,b:2,u:"h = 5 apabila sin(30t) = 1, iaitu 30t = 90° atau 450°. Maka t = 3 dan t = 15: dua kali.",kira:()=>[3,15].filter(t=>dekat(HARI(t),5)).length}],
 bos:{j:"buka",
  t:"Bina model trigonometri bagi satu fenomena berulang dan gunakannya untuk membuat keputusan.",
  arahan:"Pilih satu fenomena, contohnya ketinggian tempat duduk roda Ferris, suhu harian atau paras air sungai. Nyatakan nilai maksimum, nilai minimum dan tempoh yang munasabah, kemudian tentukan a, b dan c bagi model y = a sin bx + c (atau kosinus) dengan menunjukkan pengiraan. Lakar graf bagi satu tempoh dan gunakan model untuk menjawab satu soalan keputusan, contohnya bila ketinggian melebihi suatu nilai. Nyatakan satu had model awak.",
  u:"Jawapan TP6 yang kukuh memilih fenomena yang berulang, menentukan a, b dan c dengan pengiraan yang betul, melakar graf yang sepadan, menggunakan model untuk keputusan dengan langkah yang jelas, dan menyedari had model."}}
];

module.exports = {
  id:"m5b6", tingkatan:5, kod:"6.0 Nisbah dan Graf Fungsi Trigonometri",
  tajuk:"Makmal Gelombang",
  subtajuk:"Matematik Ting. 5 · Bab 6 Nisbah dan Graf Fungsi Trigonometri",
  spi:SPI,
  ulasan:{
   1:"{n} dapat menggunakan bulatan unit untuk menentukan nilai sin, kos dan tan bagi sudut khas dan mengenal pasti tanda dalam setiap sukuan. Langkah seterusnya ialah sudut rujukan.",
   2:"{n} memahami sudut rujukan dan menentukan nilai trigonometri dalam sukuan II, III dan IV tanpa kalkulator. Perlu lebih latihan mencari sudut daripada nilai yang diberi.",
   3:"{n} boleh menentukan sudut apabila nilai sin, kos atau tan diberi dan menyelesaikan persamaan trigonometri mudah.",
   4:"{n} mampu melukis dan membandingkan ciri graf sin, kos dan tan. Seterusnya, kaji kesan pemalar a, b dan c.",
   5:"{n} dapat membuat generalisasi kesan a, b dan c ke atas graf dan menentukan persamaan daripada ciri graf. Sudah bersedia untuk masalah bukan rutin.",
   6:"{n} berjaya membina dan menggunakan model trigonometri bagi fenomena berulang untuk membuat keputusan. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab ini. Cadangan: ulang hentian pertama dengan Rajah 1 dan lukis bulatan unit di atas kertas grid."
  },
  lampiran:{ r1:R1, r2:R2, r3:R3, r4:R4, r5:R5, r6:R6 },
  aras:ARAS
};
