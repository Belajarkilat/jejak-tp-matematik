/* Bank soalan — Matematik Ting. 3 · Bab 9 Garis Lurus.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m3b9.js
   kemudian jalankan: node bina.js m3b9

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 3, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m3b9"] =
{
 "id": "m3b9",
 "tingkatan": 3,
 "kod": "9.0 Garis Lurus",
 "tajuk": "Peta Lurus",
 "subtajuk": "Matematik Ting. 3 · Bab 9 Garis Lurus",
 "spi": [
  "Mempamerkan pengetahuan asas tentang kecerunan dan pintasan-y dalam persamaan garis lurus.",
  "Mempamerkan kefahaman tentang garis lurus.",
  "Mengaplikasikan kefahaman tentang garis lurus untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran tentang garis lurus dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran tentang garis lurus dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran tentang garis lurus dalam konteks penyelesaian masalah bukan rutin secara kreatif."
 ],
 "kko": [
  "Mengingat",
  "Memahami",
  "Mengaplikasi",
  "Menganalisis",
  "Menilai",
  "Mereka cipta"
 ],
 "ulasan": {
  "1": "{n} dapat mengenal kecerunan dan pintasan-y dalam persamaan y = mx + c. Langkah seterusnya ialah menukar antara bentuk persamaan dan memahami maksud setiap sebutan.",
  "2": "{n} memahami garis lurus dan boleh menukar antara y = mx + c, ax + by = c dan x/a + y/b = 1. Perlu lebih latihan mengaitkan bentuk persamaan dengan kedudukan garis sebelum ke TP3.",
  "3": "{n} boleh menentukan sama ada titik terletak pada garis lurus dengan menggantikan koordinat, serta mencari nilai yang hilang. Galakkan menyemak jawapan dengan melukis garis pada satah Cartes.",
  "4": "{n} mampu menyelesaikan masalah rutin yang mudah tentang garis selari dan mencari persamaan garis daripada kecerunan dan satu titik. Seterusnya latih titik persilangan dua garis.",
  "5": "{n} dapat menyelesaikan masalah kompleks yang melibatkan titik persilangan dengan kaedah penggantian dan penghapusan. Sudah bersedia untuk masalah bukan rutin yang menggabungkan beberapa konsep.",
  "6": "{n} berjaya mereka bentuk situasi yang melibatkan garis mengufuk, mencancang dan condong, dengan pengiraan bucu dan luas yang betul. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Garis Lurus. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyebut kecerunan dan pintasan-y setiap garis dengan bimbingan rakan sebaya."
 },
 "lampiran": {
  "gar1": "<figure class=\"figure jmi\" data-w=\"garis\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;garis&quot;,&quot;mod&quot;:&quot;mc&quot;,&quot;mNilai&quot;:[-3,-2,-1,-0.5,0,0.5,1,2,3],&quot;cNilai&quot;:[-4,-3,-2,-1,0,1,2,3,4],&quot;a&quot;:7,&quot;b&quot;:5,&quot;kapsyen&quot;:&quot;Rajah 1 · Gelongsor m dan c. Perhatikan kecerunan dan pintasan-y garis itu.&quot;,&quot;alt&quot;:&quot;Rajah satah Cartes interaktif; gelongsor menukar garis lurus dan persamaannya&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 304\" role=\"img\" aria-label=\"Rajah satah Cartes dengan garis y = 2x + 1, kecerunan 2 dan pintasan-y 1\"><rect x=\"20\" y=\"20\" width=\"220\" height=\"220\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><line x1=\"42\" y1=\"20\" x2=\"42\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"218\" x2=\"240\" y2=\"218\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"196\" x2=\"240\" y2=\"196\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"86\" y1=\"20\" x2=\"86\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"174\" x2=\"240\" y2=\"174\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"108\" y1=\"20\" x2=\"108\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"152\" x2=\"240\" y2=\"152\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"152\" y1=\"20\" x2=\"152\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"108\" x2=\"240\" y2=\"108\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"174\" y1=\"20\" x2=\"174\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"86\" x2=\"240\" y2=\"86\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"196\" y1=\"20\" x2=\"196\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"64\" x2=\"240\" y2=\"64\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"218\" y1=\"20\" x2=\"218\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"42\" x2=\"240\" y2=\"42\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"130\" x2=\"240\" y2=\"130\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"130\" y1=\"20\" x2=\"130\" y2=\"240\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"20\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-5</text><text x=\"125\" y=\"244\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-5</text><text x=\"42\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-4</text><text x=\"125\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-4</text><text x=\"64\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-3</text><text x=\"125\" y=\"200\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-3</text><text x=\"86\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-2</text><text x=\"125\" y=\"178\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-2</text><text x=\"108\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-1</text><text x=\"125\" y=\"156\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-1</text><text x=\"152\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><text x=\"125\" y=\"112\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><text x=\"174\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"125\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><text x=\"196\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><text x=\"125\" y=\"68\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">3</text><text x=\"218\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"125\" y=\"46\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><text x=\"240\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><text x=\"125\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><text x=\"244\" y=\"134\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">x</text><text x=\"136\" y=\"15\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">y</text><line x1=\"64\" y1=\"240\" x2=\"174\" y2=\"20\" stroke=\"var(--arteri)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><circle cx=\"130\" cy=\"108\" r=\"5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle cx=\"119\" cy=\"130\" r=\"5\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><text x=\"8\" y=\"258\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">y = 2x + 1</text><text x=\"8\" y=\"275\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">m = 2   pintasan-y = 1</text><text class=\"jmi-hasil\" x=\"8\" y=\"292\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">pintasan-x = -0.5</text></svg></div><figcaption>Rajah 1 · Gelongsor m dan c. Perhatikan kecerunan dan pintasan-y garis itu.</figcaption></figure>",
  "gar2": "<figure class=\"figure jmi\" data-w=\"garis\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;garis&quot;,&quot;mod&quot;:&quot;abc&quot;,&quot;aNilai&quot;:[-4,-2,-1,1,2,4],&quot;bNilai&quot;:[-4,-2,-1,1,2,4],&quot;a&quot;:4,&quot;b&quot;:5,&quot;kapsyen&quot;:&quot;Rajah 1 · Gelongsor a dan b. Lihat tiga bentuk persamaan bagi garis yang sama.&quot;,&quot;alt&quot;:&quot;Rajah satah Cartes interaktif; gelongsor menukar garis lurus dan persamaannya&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 304\" role=\"img\" aria-label=\"Rajah satah Cartes dengan garis yang memotong paksi-x pada 2 dan paksi-y pada 4, bentuk x/a + y/b = 1\"><rect x=\"20\" y=\"20\" width=\"220\" height=\"220\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><line x1=\"42\" y1=\"20\" x2=\"42\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"218\" x2=\"240\" y2=\"218\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"196\" x2=\"240\" y2=\"196\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"86\" y1=\"20\" x2=\"86\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"174\" x2=\"240\" y2=\"174\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"108\" y1=\"20\" x2=\"108\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"152\" x2=\"240\" y2=\"152\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"152\" y1=\"20\" x2=\"152\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"108\" x2=\"240\" y2=\"108\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"174\" y1=\"20\" x2=\"174\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"86\" x2=\"240\" y2=\"86\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"196\" y1=\"20\" x2=\"196\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"64\" x2=\"240\" y2=\"64\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"218\" y1=\"20\" x2=\"218\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"42\" x2=\"240\" y2=\"42\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"130\" x2=\"240\" y2=\"130\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"130\" y1=\"20\" x2=\"130\" y2=\"240\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"20\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-5</text><text x=\"125\" y=\"244\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-5</text><text x=\"42\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-4</text><text x=\"125\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-4</text><text x=\"64\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-3</text><text x=\"125\" y=\"200\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-3</text><text x=\"86\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-2</text><text x=\"125\" y=\"178\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-2</text><text x=\"108\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-1</text><text x=\"125\" y=\"156\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-1</text><text x=\"152\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><text x=\"125\" y=\"112\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><text x=\"174\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"125\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><text x=\"196\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><text x=\"125\" y=\"68\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">3</text><text x=\"218\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"125\" y=\"46\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><text x=\"240\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><text x=\"125\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><text x=\"244\" y=\"134\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">x</text><text x=\"136\" y=\"15\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">y</text><line x1=\"119\" y1=\"20\" x2=\"229\" y2=\"240\" stroke=\"var(--arteri)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><circle cx=\"174\" cy=\"130\" r=\"5\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle cx=\"130\" cy=\"42\" r=\"5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><text x=\"8\" y=\"258\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">x/2 + y/4 = 1</text><text class=\"jmi-hasil\" x=\"8\" y=\"275\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">4x + 2y = 8</text><text class=\"jmi-hasil\" x=\"8\" y=\"292\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">y = -2x + 4  (m = -2)</text></svg></div><figcaption>Rajah 1 · Gelongsor a dan b. Lihat tiga bentuk persamaan bagi garis yang sama.</figcaption></figure>",
  "gar3": "<figure class=\"figure jmi\" data-w=\"garis\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;garis&quot;,&quot;mod&quot;:&quot;mc&quot;,&quot;mNilai&quot;:[-2,-1,-0.5,0.5,1,2],&quot;cNilai&quot;:[-4,-3,-2,-1,0,1,2,3,4],&quot;titik&quot;:[[2,3],[-2,-1]],&quot;a&quot;:4,&quot;b&quot;:5,&quot;kapsyen&quot;:&quot;Rajah 1 · Gelongsor m dan c. Titik A dan B ditandakan; lihat sama ada garis melaluinya.&quot;,&quot;alt&quot;:&quot;Rajah satah Cartes interaktif; gelongsor menukar garis lurus dan persamaannya&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 338\" role=\"img\" aria-label=\"Rajah satah Cartes dengan garis y = x + 1, kecerunan 1 dan pintasan-y 1\"><rect x=\"20\" y=\"20\" width=\"220\" height=\"220\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><line x1=\"42\" y1=\"20\" x2=\"42\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"218\" x2=\"240\" y2=\"218\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"196\" x2=\"240\" y2=\"196\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"86\" y1=\"20\" x2=\"86\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"174\" x2=\"240\" y2=\"174\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"108\" y1=\"20\" x2=\"108\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"152\" x2=\"240\" y2=\"152\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"152\" y1=\"20\" x2=\"152\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"108\" x2=\"240\" y2=\"108\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"174\" y1=\"20\" x2=\"174\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"86\" x2=\"240\" y2=\"86\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"196\" y1=\"20\" x2=\"196\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"64\" x2=\"240\" y2=\"64\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"218\" y1=\"20\" x2=\"218\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"42\" x2=\"240\" y2=\"42\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"130\" x2=\"240\" y2=\"130\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"130\" y1=\"20\" x2=\"130\" y2=\"240\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"20\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-5</text><text x=\"125\" y=\"244\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-5</text><text x=\"42\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-4</text><text x=\"125\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-4</text><text x=\"64\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-3</text><text x=\"125\" y=\"200\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-3</text><text x=\"86\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-2</text><text x=\"125\" y=\"178\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-2</text><text x=\"108\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-1</text><text x=\"125\" y=\"156\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-1</text><text x=\"152\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><text x=\"125\" y=\"112\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><text x=\"174\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"125\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><text x=\"196\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><text x=\"125\" y=\"68\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">3</text><text x=\"218\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"125\" y=\"46\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><text x=\"240\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><text x=\"125\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><text x=\"244\" y=\"134\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">x</text><text x=\"136\" y=\"15\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">y</text><line x1=\"20\" y1=\"218\" x2=\"218\" y2=\"20\" stroke=\"var(--arteri)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><circle cx=\"130\" cy=\"108\" r=\"5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle cx=\"108\" cy=\"130\" r=\"5\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle cx=\"174\" cy=\"64\" r=\"4\" fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"2\"></circle><text x=\"181\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">A</text><circle cx=\"86\" cy=\"152\" r=\"4\" fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"2\"></circle><text x=\"93\" y=\"146\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">B</text><text x=\"8\" y=\"258\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">y = x + 1</text><text x=\"8\" y=\"275\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">m = 1   pintasan-y = 1</text><text class=\"jmi-hasil\" x=\"8\" y=\"292\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">pintasan-x = -1</text><text x=\"8\" y=\"309\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">A(2, 3)</text><text class=\"jmi-hasil\" x=\"110\" y=\"309\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">pada garis</text><text x=\"8\" y=\"326\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">B(-2, -1)</text><text class=\"jmi-hasil\" x=\"110\" y=\"326\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">pada garis</text></svg></div><figcaption>Rajah 1 · Gelongsor m dan c. Titik A dan B ditandakan; lihat sama ada garis melaluinya.</figcaption></figure>",
  "gar4": "<figure class=\"figure jmi cabar\" data-w=\"garis\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;garis&quot;,&quot;mod&quot;:&quot;selari&quot;,&quot;mNilai&quot;:[2],&quot;c1&quot;:1,&quot;cNilai&quot;:[-4,-3,-2,-1,0,1,2,3,4],&quot;b&quot;:4,&quot;cabar&quot;:true,&quot;kapsyen&quot;:&quot;Rajah 1 · L1 ialah y = 2x + 1. Kira dahulu, kemudian tetapkan c bagi L2 dan semak.&quot;,&quot;alt&quot;:&quot;Rajah satah Cartes interaktif; gelongsor menukar garis lurus dan persamaannya&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 304\" role=\"img\" aria-label=\"Rajah satah Cartes dengan dua garis selari y = 2x + 1 dan y = 2x\"><rect x=\"20\" y=\"20\" width=\"220\" height=\"220\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><line x1=\"42\" y1=\"20\" x2=\"42\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"218\" x2=\"240\" y2=\"218\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"196\" x2=\"240\" y2=\"196\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"86\" y1=\"20\" x2=\"86\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"174\" x2=\"240\" y2=\"174\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"108\" y1=\"20\" x2=\"108\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"152\" x2=\"240\" y2=\"152\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"152\" y1=\"20\" x2=\"152\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"108\" x2=\"240\" y2=\"108\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"174\" y1=\"20\" x2=\"174\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"86\" x2=\"240\" y2=\"86\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"196\" y1=\"20\" x2=\"196\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"64\" x2=\"240\" y2=\"64\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"218\" y1=\"20\" x2=\"218\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"42\" x2=\"240\" y2=\"42\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"130\" x2=\"240\" y2=\"130\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"130\" y1=\"20\" x2=\"130\" y2=\"240\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"20\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-5</text><text x=\"125\" y=\"244\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-5</text><text x=\"42\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-4</text><text x=\"125\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-4</text><text x=\"64\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-3</text><text x=\"125\" y=\"200\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-3</text><text x=\"86\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-2</text><text x=\"125\" y=\"178\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-2</text><text x=\"108\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-1</text><text x=\"125\" y=\"156\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-1</text><text x=\"152\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><text x=\"125\" y=\"112\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><text x=\"174\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"125\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><text x=\"196\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><text x=\"125\" y=\"68\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">3</text><text x=\"218\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"125\" y=\"46\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><text x=\"240\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><text x=\"125\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><text x=\"244\" y=\"134\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">x</text><text x=\"136\" y=\"15\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">y</text><line x1=\"64\" y1=\"240\" x2=\"174\" y2=\"20\" stroke=\"var(--vena)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><line x1=\"75\" y1=\"240\" x2=\"185\" y2=\"20\" stroke=\"var(--arteri)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><text x=\"8\" y=\"258\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--vena)\" font-weight=\"700\">L1: y = 2x + 1</text><text x=\"8\" y=\"275\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">L2: y = 2x</text><text class=\"jmi-hasil\" x=\"8\" y=\"292\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">m1 = m2 = 2: garis selari</text></svg></div><figcaption>Rajah 1 · L1 ialah y = 2x + 1. Kira dahulu, kemudian tetapkan c bagi L2 dan semak.</figcaption></figure>",
  "gar5": "<figure class=\"figure jmi cabar\" data-w=\"garis\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;garis&quot;,&quot;mod&quot;:&quot;silang&quot;,&quot;m1&quot;:1,&quot;c1&quot;:1,&quot;mNilai&quot;:[-3,-2,-1,-0.5,0,0.5,1,2,3],&quot;cNilai&quot;:[-4,-3,-2,-1,0,1,2,3,4,5],&quot;a&quot;:2,&quot;b&quot;:9,&quot;cabar&quot;:true,&quot;kapsyen&quot;:&quot;Rajah 1 · L1 ialah y = x + 1. Kira titik persilangan dengan L2, kemudian semak.&quot;,&quot;alt&quot;:&quot;Rajah satah Cartes interaktif; gelongsor menukar garis lurus dan persamaannya&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 304\" role=\"img\" aria-label=\"Rajah satah Cartes dengan dua garis y = x + 1 dan y = -x + 5, titik persilangan ditunjukkan\"><rect x=\"20\" y=\"20\" width=\"220\" height=\"220\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><line x1=\"42\" y1=\"20\" x2=\"42\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"218\" x2=\"240\" y2=\"218\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"196\" x2=\"240\" y2=\"196\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"86\" y1=\"20\" x2=\"86\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"174\" x2=\"240\" y2=\"174\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"108\" y1=\"20\" x2=\"108\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"152\" x2=\"240\" y2=\"152\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"152\" y1=\"20\" x2=\"152\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"108\" x2=\"240\" y2=\"108\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"174\" y1=\"20\" x2=\"174\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"86\" x2=\"240\" y2=\"86\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"196\" y1=\"20\" x2=\"196\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"64\" x2=\"240\" y2=\"64\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"218\" y1=\"20\" x2=\"218\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"42\" x2=\"240\" y2=\"42\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"130\" x2=\"240\" y2=\"130\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"130\" y1=\"20\" x2=\"130\" y2=\"240\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"20\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-5</text><text x=\"125\" y=\"244\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-5</text><text x=\"42\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-4</text><text x=\"125\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-4</text><text x=\"64\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-3</text><text x=\"125\" y=\"200\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-3</text><text x=\"86\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-2</text><text x=\"125\" y=\"178\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-2</text><text x=\"108\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-1</text><text x=\"125\" y=\"156\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-1</text><text x=\"152\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><text x=\"125\" y=\"112\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><text x=\"174\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"125\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><text x=\"196\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><text x=\"125\" y=\"68\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">3</text><text x=\"218\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"125\" y=\"46\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><text x=\"240\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><text x=\"125\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><text x=\"244\" y=\"134\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">x</text><text x=\"136\" y=\"15\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">y</text><line x1=\"20\" y1=\"218\" x2=\"218\" y2=\"20\" stroke=\"var(--vena)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><line x1=\"130\" y1=\"20\" x2=\"240\" y2=\"130\" stroke=\"var(--arteri)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><circle class=\"jmi-hasil\" cx=\"174\" cy=\"64\" r=\"5\" fill=\"var(--amber)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><text x=\"8\" y=\"258\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--vena)\" font-weight=\"700\">L1: y = x + 1</text><text x=\"8\" y=\"275\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">L2: y = -x + 5</text><text class=\"jmi-hasil\" x=\"8\" y=\"292\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Persilangan: (2, 3)</text></svg></div><figcaption>Rajah 1 · L1 ialah y = x + 1. Kira titik persilangan dengan L2, kemudian semak.</figcaption></figure>",
  "gar6": "<figure class=\"figure jmi\" data-w=\"garis\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;garis&quot;,&quot;mod&quot;:&quot;khas&quot;,&quot;cNilai&quot;:[-4,-3,-2,-1,0,1,2,3,4],&quot;a&quot;:0,&quot;b&quot;:6,&quot;kapsyen&quot;:&quot;Rajah 1 · Pilih garis mengufuk y = k atau garis mencancang x = k, kemudian ubah k.&quot;,&quot;alt&quot;:&quot;Rajah satah Cartes interaktif; gelongsor menukar garis lurus dan persamaannya&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 304\" role=\"img\" aria-label=\"Rajah satah Cartes dengan garis y = 2 yang mengufuk\"><rect x=\"20\" y=\"20\" width=\"220\" height=\"220\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><line x1=\"42\" y1=\"20\" x2=\"42\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"218\" x2=\"240\" y2=\"218\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"196\" x2=\"240\" y2=\"196\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"86\" y1=\"20\" x2=\"86\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"174\" x2=\"240\" y2=\"174\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"108\" y1=\"20\" x2=\"108\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"152\" x2=\"240\" y2=\"152\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"152\" y1=\"20\" x2=\"152\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"108\" x2=\"240\" y2=\"108\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"174\" y1=\"20\" x2=\"174\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"86\" x2=\"240\" y2=\"86\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"196\" y1=\"20\" x2=\"196\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"64\" x2=\"240\" y2=\"64\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"218\" y1=\"20\" x2=\"218\" y2=\"240\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"42\" x2=\"240\" y2=\"42\" stroke=\"var(--line)\" stroke-width=\"0.6\"></line><line x1=\"20\" y1=\"130\" x2=\"240\" y2=\"130\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"130\" y1=\"20\" x2=\"130\" y2=\"240\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"20\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-5</text><text x=\"125\" y=\"244\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-5</text><text x=\"42\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-4</text><text x=\"125\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-4</text><text x=\"64\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-3</text><text x=\"125\" y=\"200\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-3</text><text x=\"86\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-2</text><text x=\"125\" y=\"178\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-2</text><text x=\"108\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-1</text><text x=\"125\" y=\"156\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-1</text><text x=\"152\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><text x=\"125\" y=\"112\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><text x=\"174\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"125\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><text x=\"196\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><text x=\"125\" y=\"68\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">3</text><text x=\"218\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"125\" y=\"46\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><text x=\"240\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><text x=\"125\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><text x=\"244\" y=\"134\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">x</text><text x=\"136\" y=\"15\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">y</text><line x1=\"20\" y1=\"86\" x2=\"240\" y2=\"86\" stroke=\"var(--arteri)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><text x=\"8\" y=\"258\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">y = 2</text><text class=\"jmi-hasil\" x=\"8\" y=\"275\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">Mengufuk: m = 0</text><text class=\"jmi-hasil\" x=\"8\" y=\"292\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">Pintasan-y = 2, tiada pintasan-x</text></svg></div><figcaption>Rajah 1 · Pilih garis mengufuk y = k atau garis mencancang x = k, kemudian ubah k.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Papan Luncur",
   "sk": "9.1.1 Kecerunan, pintasan-y dan y = mx + c",
   "lampiran": "gar1",
   "kadNama": "Kecerunan",
   "kadEm": "🛝",
   "kadFakta": "Kecerunan ialah ukuran kecuraman. Papan luncur yang naik 1 m bagi setiap 2 m mendatar mempunyai kecerunan 1/2, iaitu cerun yang landai.",
   "bosKadNama": "Pintasan-y",
   "bosKadEm": "🎯",
   "bosKadFakta": "Pintasan-y ialah tempat garis memotong paksi-y, iaitu nilai y apabila x = 0. Dalam y = mx + c, ia sentiasa sama dengan c.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam persamaan garis lurus y = mx + c, m mewakili:",
     "p": [
      "Kecerunan garis",
      "Pintasan-y garis",
      "Pintasan-x garis",
      "Jarak dari asalan"
     ],
     "b": 0,
     "u": "m ialah kecerunan, iaitu berapa banyak y berubah apabila x bertambah 1."
    },
    {
     "j": "pilih",
     "t": "Dalam persamaan y = mx + c, c mewakili:",
     "p": [
      "Kecerunan garis",
      "Nilai y apabila x = 0",
      "Nilai x apabila y = 0",
      "Jumlah m dan x"
     ],
     "b": 1,
     "u": "c ialah pintasan-y, iaitu nilai y di mana garis memotong paksi-y."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan m = 2 dan c = 1 (y = 2x + 1). Berapakah pintasan-y garis itu?",
     "b": 1,
     "tol": 0.01,
     "u": "Pintasan-y ialah c = 1. Garis memotong paksi-y di titik (0, 1)."
    },
    {
     "j": "pilih",
     "t": "Apakah kecerunan garis y = 3x − 5?",
     "p": [
      "−5",
      "−3",
      "3",
      "15"
     ],
     "b": 2,
     "u": "Bandingkan dengan y = mx + c. Pekali x ialah m = 3."
    },
    {
     "j": "pilih",
     "t": "Apakah pintasan-y bagi garis y = −2x + 7?",
     "p": [
      "−2",
      "−7",
      "3.5",
      "7"
     ],
     "b": 3,
     "u": "Pintasan-y ialah sebutan malar c = 7."
    },
    {
     "j": "nombor",
     "t": "Sebuah papan luncur naik 6 m bagi setiap 12 m jarak mendatar. Berapakah kecerunannya?",
     "b": 0.5,
     "tol": 0.01,
     "u": "Kecerunan = naik ÷ larian = 6 ÷ 12 = 0.5."
    },
    {
     "j": "susun",
     "t": "Susun langkah mencari kecerunan garis yang melalui titik (1, 2) dan (3, 8).",
     "p": [
      "Tulis dua titik: (1, 2) dan (3, 8)",
      "Cari beza y: 8 − 2 = 6",
      "Cari beza x: 3 − 1 = 2",
      "Bahagi: kecerunan = 6 ÷ 2 = 3"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Kecerunan ialah beza y dibahagi beza x."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan m = −1 dan c = 0. Garis itu bergerak ke arah mana dari kiri ke kanan?",
     "p": [
      "Menurun",
      "Menaik",
      "Mengufuk",
      "Mencancang"
     ],
     "b": 0,
     "u": "Kecerunan negatif bermaksud garis menurun dari kiri ke kanan."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pernyataan yang BENAR tentang garis y = −2x + 3.",
    "p": [
     "Kecerunannya ialah −2",
     "Pintasan-y ialah 3",
     "Garis melalui titik (0, 3)",
     "Garis melalui titik (3, 0)",
     "Garis menaik dari kiri ke kanan",
     "Pintasan-x ialah 3"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "m = −2 dan c = 3, jadi garis melalui (0, 3). Apabila x = 3, y = −3, maka (3, 0) tidak pada garis. Garis menurun kerana m negatif, dan pintasan-x ialah 1.5."
   }
  },
  {
   "n": 2,
   "tempat": "Tambang Teksi",
   "sk": "9.1.2 Bentuk ax + by = c dan x/a + y/b = 1",
   "lampiran": "gar2",
   "kadNama": "Tiga Bentuk",
   "kadEm": "🚖",
   "kadFakta": "Garis yang sama boleh ditulis dalam tiga bentuk: y = mx + c, ax + by = c dan x/a + y/b = 1. Pilih bentuk yang paling memudahkan soalan.",
   "bosKadNama": "Dua Pintasan",
   "bosKadEm": "✌️",
   "bosKadFakta": "Untuk melukis garis dengan pantas, cari dua pintasan: letak x = 0 untuk pintasan-y, kemudian letak y = 0 untuk pintasan-x, dan sambung kedua-dua titik.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Antara berikut, yang manakah bentuk pintasan bagi persamaan garis lurus, dengan a dan b ialah pintasan-x dan pintasan-y?",
     "p": [
      "y = mx + c",
      "x/a + y/b = 1",
      "x + y = ab",
      "xy = 1"
     ],
     "b": 1,
     "u": "Dalam x/a + y/b = 1, garis memotong paksi-x di (a, 0) dan paksi-y di (0, b)."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan a = 2 dan b = 4 (x/2 + y/4 = 1). Berapakah kecerunan garis itu?",
     "b": -2,
     "tol": 0.01,
     "u": "Kecerunan = −b ÷ a = −4 ÷ 2 = −2."
    },
    {
     "j": "pilih",
     "t": "Ubah 2x + y = 6 kepada bentuk y = mx + c. Jawapannya:",
     "p": [
      "y = 2x + 6",
      "y = −2x − 6",
      "y = −2x + 6",
      "y = 2x − 6"
     ],
     "b": 2,
     "u": "Tolak 2x pada kedua-dua belah: y = −2x + 6."
    },
    {
     "j": "nombor",
     "t": "Bagi garis 2x + 3y = 12, berapakah pintasan-y?",
     "b": 4,
     "tol": 0.01,
     "u": "Letak x = 0: 3y = 12, maka y = 4."
    },
    {
     "j": "nombor",
     "t": "Bagi garis 2x + 3y = 12, berapakah pintasan-x?",
     "b": 6,
     "tol": 0.01,
     "u": "Letak y = 0: 2x = 12, maka x = 6."
    },
    {
     "j": "pilih",
     "t": "Tulis 3x + 2y = 6 dalam bentuk x/a + y/b = 1.",
     "p": [
      "x/3 + y/2 = 1",
      "x/6 + y/6 = 1",
      "x/2 + y/3 = 6",
      "x/2 + y/3 = 1"
     ],
     "b": 3,
     "u": "Bahagi kedua-dua belah dengan 6: x/2 + y/3 = 1. Pintasan-x = 2 dan pintasan-y = 3."
    },
    {
     "j": "susun",
     "t": "Susun langkah menukar 4x + 2y = 8 kepada bentuk y = mx + c.",
     "p": [
      "Tolak 4x pada kedua-dua belah: 2y = 8 − 4x",
      "Susun semula: 2y = −4x + 8",
      "Bahagi semua sebutan dengan 2: y = −2x + 4",
      "Baca m = −2 dan c = 4"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Asingkan y, kemudian bahagi dengan pekali y."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan a = 4 dan b = 2. Persamaan garis itu dalam bentuk y = mx + c ialah:",
     "p": [
      "y = −0.5x + 2",
      "y = −2x + 4",
      "y = 0.5x + 2",
      "y = −2x + 2"
     ],
     "b": 0,
     "u": "m = −b ÷ a = −2 ÷ 4 = −0.5 dan c = b = 2."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Garis 5x − 2y = 10 memotong paksi-x di (a, 0) dan paksi-y di (0, b). Berapakah nilai a + b?",
    "b": -3,
    "tol": 0.01,
    "u": "Letak y = 0: 5x = 10, a = 2. Letak x = 0: −2y = 10, b = −5. Jadi a + b = −3."
   }
  },
  {
   "n": 3,
   "tempat": "Peta Harta Karun",
   "sk": "9.1.3 Titik pada garis lurus dan titik bukan pada garis",
   "lampiran": "gar3",
   "kadNama": "Ujian Titik",
   "kadEm": "🗺️",
   "kadFakta": "Untuk menguji sama ada satu titik ada pada garis, gantikan x dan y titik itu ke dalam persamaan. Jika kedua-dua belah sama, titik itu pada garis.",
   "bosKadNama": "Banyak Titik",
   "bosKadEm": "📍",
   "bosKadFakta": "Satu garis lurus mempunyai titik yang tidak terhingga banyaknya. Semuanya memuaskan persamaan yang sama.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Sebuah titik (x, y) terletak pada suatu garis lurus jika:",
     "p": [
      "Nilai x sama dengan nilai y",
      "Koordinatnya memuaskan persamaan garis itu",
      "Nilai y ialah sifar",
      "Kedua-dua koordinatnya positif"
     ],
     "b": 1,
     "u": "Gantikan x dan y ke dalam persamaan. Jika kedua-dua belah sama, titik itu pada garis."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan m = 1 dan c = 1 (y = x + 1). Berapakah nilai y bagi garis itu apabila x = 2?",
     "b": 3,
     "tol": 0.01,
     "u": "y = 2 + 1 = 3."
    },
    {
     "j": "pilih",
     "t": "Adakah titik A(2, 3) terletak pada garis y = x + 1?",
     "p": [
      "Tidak, kerana y = 2 − 1 = 1",
      "Tidak, kerana y = 2 × 1 = 2",
      "Ya, kerana y = 2 + 1 = 3",
      "Ya, kerana y = 2 × 3 = 6"
     ],
     "b": 2,
     "u": "Gantikan x = 2: y = 2 + 1 = 3, sama dengan koordinat-y titik A."
    },
    {
     "j": "pilih",
     "t": "Yang manakah titik pada garis y = 2x − 3?",
     "p": [
      "(2, 3)",
      "(3, 2)",
      "(1, 1)",
      "(3, 3)"
     ],
     "b": 3,
     "u": "Gantikan x = 3: y = 2(3) − 3 = 3. Titik lain tidak memuaskan persamaan."
    },
    {
     "j": "nombor",
     "t": "Titik (4, k) terletak pada garis y = 3x − 5. Cari nilai k.",
     "b": 7,
     "tol": 0.01,
     "u": "k = 3(4) − 5 = 7."
    },
    {
     "j": "pilih",
     "t": "Titik (a, 5) terletak pada garis y = 2x + 1. Cari nilai a.",
     "p": [
      "2",
      "−2",
      "11",
      "12"
     ],
     "b": 0,
     "u": "5 = 2a + 1, maka 2a = 4 dan a = 2."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan m = 1 dan c = 1. Antara titik A(2, 3) dan B(−2, −1), yang manakah terletak pada garis itu?",
     "p": [
      "A sahaja",
      "Kedua-dua A dan B",
      "B sahaja",
      "Tiada satu pun"
     ],
     "b": 1,
     "u": "Bagi A: 2 + 1 = 3. Bagi B: −2 + 1 = −1. Kedua-duanya memuaskan y = x + 1."
    },
    {
     "j": "pilih",
     "t": "Titik P(1, 4) tidak terletak pada garis y = 3x + 2. Berapakah nilai y pada garis itu apabila x = 1?",
     "p": [
      "4",
      "6",
      "5",
      "3"
     ],
     "b": 2,
     "u": "y = 3(1) + 2 = 5, bukan 4. Jadi P berada di bawah garis."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA titik yang terletak pada garis y = −x + 4.",
    "p": [
     "(0, 4)",
     "(4, 0)",
     "(2, 2)",
     "(−1, 5)",
     "(1, 4)",
     "(3, 2)"
    ],
    "b": [
     0,
     1,
     2,
     3
    ],
    "u": "Titik yang memuaskan y = −x + 4 ialah (0, 4), (4, 0), (2, 2) dan (−1, 5). Bagi (1, 4), y sepatutnya 3. Bagi (3, 2), y sepatutnya 1."
   }
  },
  {
   "n": 4,
   "tempat": "Landasan Kereta Api",
   "sk": "9.1.4 / 9.1.5 Garis selari dan persamaan garis lurus",
   "lampiran": "gar4",
   "kadNama": "Landasan Selari",
   "kadEm": "🚆",
   "kadFakta": "Dua landasan kereta api tidak akan bertemu kerana kecerunannya sama. Begitu juga garis selari: kecerunan sama, pintasan-y berbeza.",
   "bosKadNama": "Cari Persamaan",
   "bosKadEm": "🧮",
   "bosKadFakta": "Untuk mencari persamaan garis, cari kecerunan m dahulu, kemudian gantikan satu titik ke dalam y = mx + c untuk mendapatkan c.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dua garis lurus adalah selari jika:",
     "p": [
      "Pintasan-y-nya sama",
      "Hasil darab kecerunannya ialah 1",
      "Kedua-duanya melalui asalan",
      "Kecerunannya sama"
     ],
     "b": 3,
     "u": "Garis selari mempunyai kecerunan yang sama dan tidak pernah bertemu."
    },
    {
     "j": "nombor",
     "t": "Garis y = 3x + 2 selari dengan garis y = mx − 4. Cari nilai m.",
     "b": 3,
     "tol": 0.01,
     "u": "Garis selari mempunyai kecerunan sama, jadi m = 3."
    },
    {
     "j": "pilih",
     "t": "Antara garis berikut, yang manakah selari dengan y = 2x + 5?",
     "p": [
      "y = 2x − 1",
      "y = −2x + 5",
      "y = 5x + 2",
      "y = x/2 + 5"
     ],
     "b": 0,
     "u": "y = 2x − 1 mempunyai kecerunan 2, sama dengan y = 2x + 5."
    },
    {
     "j": "nombor",
     "t": "Cari kecerunan garis yang melalui titik (1, 2) dan (4, 11).",
     "b": 3,
     "tol": 0.01,
     "u": "Kecerunan = (11 − 2) ÷ (4 − 1) = 9 ÷ 3 = 3."
    },
    {
     "j": "pilih",
     "t": "Cari persamaan garis berkecerunan 2 yang melalui titik (0, 5).",
     "p": [
      "y = 5x + 2",
      "y = 2x + 5",
      "y = 2x − 5",
      "y = −2x + 5"
     ],
     "b": 1,
     "u": "Titik (0, 5) ialah pintasan-y, jadi c = 5. Persamaannya y = 2x + 5."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, L2 selari dengan L1 dan melalui titik (1, 6). Berapakah nilai c bagi L2?",
     "b": 4,
     "tol": 0.01,
     "u": "L2 ialah y = 2x + c. Gantikan (1, 6): 6 = 2 + c, maka c = 4."
    },
    {
     "j": "pilih",
     "t": "Cari persamaan garis yang selari dengan y = −x + 3 dan melalui titik (2, 5).",
     "p": [
      "y = −x + 3",
      "y = x + 3",
      "y = −x + 7",
      "y = x + 7"
     ],
     "b": 2,
     "u": "Kecerunan = −1. Gantikan (2, 5): 5 = −2 + c, maka c = 7."
    },
    {
     "j": "susun",
     "t": "Susun langkah mencari persamaan garis berkecerunan 3 yang melalui titik (2, 4).",
     "p": [
      "Tulis y = mx + c dengan m = 3: y = 3x + c",
      "Gantikan x = 2 dan y = 4: 4 = 3(2) + c",
      "Selesaikan: c = 4 − 6 = −2",
      "Tulis persamaan: y = 3x − 2"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Gantikan titik yang diberi untuk mendapatkan c."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Garis M melalui (1, 3) dan (3, 9). Garis N selari dengan M dan melalui (0, −3). Di manakah N memotong paksi-x? Beri nilai x.",
    "b": 1,
    "tol": 0.01,
    "u": "Kecerunan M = (9 − 3) ÷ (3 − 1) = 3. N ialah y = 3x − 3. Letak y = 0: x = 1."
   }
  },
  {
   "n": 5,
   "tempat": "Simpang Jalan",
   "sk": "9.1.6 Titik persilangan dua garis lurus",
   "lampiran": "gar5",
   "kadNama": "Simpang",
   "kadEm": "🚦",
   "kadFakta": "Titik persilangan ialah simpang antara dua garis. Ia satu-satunya titik yang memuaskan kedua-dua persamaan serentak.",
   "bosKadNama": "Semak Kalkulator",
   "bosKadEm": "🖩",
   "bosKadFakta": "Kalkulator hanya untuk menyemak jawapan. Langkah penggantian atau penghapusan tetap perlu ditunjukkan dalam kertas kerja awak.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Titik persilangan dua garis lurus ialah titik yang:",
     "p": [
      "Terletak pada paksi-x sahaja",
      "Mempunyai koordinat x sama dengan y",
      "Berada di antara kedua-dua garis",
      "Terletak pada kedua-dua garis"
     ],
     "b": 3,
     "u": "Titik itu memuaskan kedua-dua persamaan garis pada masa yang sama."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan L2: y = −x + 5. Berapakah koordinat-x titik persilangan L1 dan L2?",
     "b": 2,
     "tol": 0.01,
     "u": "x + 1 = −x + 5, maka 2x = 4 dan x = 2."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan L2: y = −x + 5. Berapakah koordinat-y titik persilangan L1 dan L2?",
     "b": 3,
     "tol": 0.01,
     "u": "Gantikan x = 2 ke dalam y = x + 1: y = 3. Titik persilangan ialah (2, 3)."
    },
    {
     "j": "pilih",
     "t": "Kaedah penggantian bagi y = 2x dan y = x + 3 memberikan persamaan:",
     "p": [
      "2x = x + 3",
      "2x + x = 3",
      "2x − x = −3",
      "x = 2x + 3"
     ],
     "b": 0,
     "u": "Gantikan y = 2x ke dalam y = x + 3 untuk mendapat 2x = x + 3."
    },
    {
     "j": "nombor",
     "t": "Selesaikan y = 2x dan y = x + 3. Berapakah nilai x di titik persilangan?",
     "b": 3,
     "tol": 0.01,
     "u": "2x = x + 3, maka x = 3 dan y = 6."
    },
    {
     "j": "pilih",
     "t": "Garis y = 3x + 1 dan y = 3x − 4 tidak bersilang kerana:",
     "p": [
      "Pintasan-y-nya sama",
      "Kecerunannya sama, jadi garisnya selari",
      "Kedua-duanya menurun",
      "Salah satu garisnya mencancang"
     ],
     "b": 1,
     "u": "Kecerunan kedua-duanya 3, jadi garisnya selari dan tidak pernah bertemu."
    },
    {
     "j": "susun",
     "t": "Susun langkah kaedah penghapusan bagi x + y = 7 dan x − y = 1.",
     "p": [
      "Tambah kedua-dua persamaan: 2x = 8",
      "Bahagi dengan 2: x = 4",
      "Gantikan x = 4 ke dalam x + y = 7: y = 3",
      "Tulis persilangan: (4, 3)"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Penghapusan menghilangkan y kerana +y dan −y bertemu."
    },
    {
     "j": "nombor",
     "t": "Selesaikan 2x + y = 8 dan x − y = 1. Berapakah nilai y?",
     "b": 2,
     "tol": 0.01,
     "u": "Tambah: 3x = 9, x = 3. Gantikan ke x − y = 1: y = 2."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Garis 3x + 2y = 12 dan x − y = −1 bersilang di titik (p, q). Berapakah nilai p + q?",
    "b": 5,
    "tol": 0.01,
    "u": "Daripada x − y = −1, y = x + 1. Gantikan: 3x + 2x + 2 = 12, maka x = 2 dan y = 3. p + q = 5."
   }
  },
  {
   "n": 6,
   "tempat": "Reka Laluan",
   "sk": "9.1.1 / 9.1.7 Garis mengufuk, mencancang dan masalah bukan rutin",
   "lampiran": "gar6",
   "kadNama": "Dua Arah",
   "kadEm": "🧭",
   "kadFakta": "Garis mengufuk (y = k) tidak menaik dan tidak menurun, jadi kecerunannya sifar. Garis mencancang (x = k) terlalu curam sehingga kecerunannya tak tertakrif.",
   "bosKadNama": "Reka Sendiri",
   "bosKadEm": "✏️",
   "bosKadFakta": "Pereka pelan dan jurutera jalan menggunakan garis lurus untuk melakar laluan, pagar dan bumbung. Setiap bucu ialah titik persilangan dua garis.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih garis mencancang dan tetapkan k = 3. Kecerunan garis itu ialah:",
     "p": [
      "Sifar",
      "3",
      "Tak tertakrif",
      "1/3"
     ],
     "b": 2,
     "u": "Garis mencancang tiada larian mendatar, jadi pembahagian dengan sifar tidak tertakrif."
    },
    {
     "j": "pilih",
     "t": "Garis y = −2 ialah garis:",
     "p": [
      "Mencancang dan berkecerunan sifar",
      "Mengufuk dan berkecerunan −2",
      "Mencancang dan tak tertakrif",
      "Mengufuk dan berkecerunan sifar"
     ],
     "b": 3,
     "u": "y = k ialah garis mengufuk, selari dengan paksi-x, dengan kecerunan 0."
    },
    {
     "j": "nombor",
     "t": "Garis y = k dan garis x = 4 bersilang di titik (4, −2). Cari nilai k.",
     "b": -2,
     "tol": 0.01,
     "u": "Titik persilangan berada pada y = k, jadi k = −2."
    },
    {
     "j": "pilih",
     "t": "Garis mencancang yang melalui titik (−3, 7) mempunyai persamaan:",
     "p": [
      "x = −3",
      "y = 7",
      "y = −3",
      "x = 7"
     ],
     "b": 0,
     "u": "Garis mencancang mempunyai x tetap, iaitu koordinat-x titik itu."
    },
    {
     "j": "nombor",
     "t": "Sebuah pagar segi empat tepat dibina dengan garis x = 1, x = 5, y = 2 dan y = 4 (unit dalam meter). Berapakah luas kawasan itu (m²)?",
     "b": 8,
     "tol": 0.01,
     "suf": "m²",
     "u": "Panjang = 5 − 1 = 4 m dan lebar = 4 − 2 = 2 m. Luas = 4 × 2 = 8 m²."
    },
    {
     "j": "pilih",
     "t": "Garis y = 2x − 1 bersilang dengan garis mengufuk y = 5 di titik:",
     "p": [
      "(5, 3)",
      "(3, 5)",
      "(2, 5)",
      "(5, 9)"
     ],
     "b": 1,
     "u": "Letak y = 5: 2x − 1 = 5, maka x = 3."
    },
    {
     "j": "nombor",
     "t": "Garis y = 2x + 3 bersilang dengan garis mencancang x = 4 di titik (4, t). Cari nilai t.",
     "b": 11,
     "tol": 0.01,
     "u": "t = 2(4) + 3 = 11."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, garis mengufuk y = k dan garis mencancang x = k dipilih dengan k yang sama. Mereka bersilang di:",
     "p": [
      "(k, −k)",
      "(−k, k)",
      "(k, k)",
      "(k, 2k)"
     ],
     "b": 2,
     "u": "Garis mencancang x = k memberi koordinat-x = k dan garis mengufuk y = k memberi koordinat-y = k."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Reka sebuah taman berbentuk segi tiga pada satah Cartes menggunakan tiga garis lurus: satu mengufuk, satu mencancang dan satu condong.",
    "arahan": "Tulis persamaan ketiga-tiga garis, cari koordinat tiga bucu taman itu (titik persilangan), dan kira luas taman. Semak bahawa setiap bucu memuaskan kedua-dua persamaan garisnya.",
    "u": "Jawapan TP6 yang kukuh memilih garis yang membentuk segi tiga tertutup, mencari setiap bucu dengan penggantian atau penghapusan, mengira luas dengan betul, dan menyemak bucu dalam kedua-dua persamaan."
   }
  }
 ]
};
