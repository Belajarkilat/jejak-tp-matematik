/* Bank soalan — Matematik Ting. 1 · Bab 1 Nombor Nisbah.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m1b1.js
   kemudian jalankan: node bina.js m1b1

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 1, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m1b1"] =
{
 "id": "m1b1",
 "tingkatan": 1,
 "kod": "1.0 Nombor Nisbah",
 "tajuk": "Bengkel Nombor",
 "subtajuk": "Matematik Ting. 1 · Bab 1 Nombor Nisbah",
 "spi": [
  "Mempamerkan pengetahuan asas tentang integer, pecahan dan perpuluhan.",
  "Mempamerkan kefahaman tentang nombor nisbah.",
  "Mengaplikasikan kefahaman tentang nombor nisbah untuk melaksanakan operasi asas dan gabungan operasi asas aritmetik.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang nombor nisbah dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang nombor nisbah dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang nombor nisbah dalam konteks penyelesaian masalah bukan rutin."
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
  "1": "{n} dapat mengenal integer, pecahan dan perpuluhan serta meletakkannya pada garis nombor. Langkah seterusnya ialah memahami bahawa semua nombor ini ialah nombor nisbah dan boleh dibanding.",
  "2": "{n} memahami nombor nisbah dan dapat menambah serta menolak integer menggunakan garis nombor. Perlu lebih latihan tanda negatif sebelum bergerak ke operasi gabungan.",
  "3": "{n} boleh melaksanakan operasi asas dan gabungan operasi bagi integer, pecahan dan perpuluhan mengikut tertib operasi. Galakkan menggunakan hukum operasi untuk mengira dengan cepat.",
  "4": "{n} mampu menyelesaikan masalah rutin yang mudah melibatkan pecahan positif dan negatif serta membanding dan menyusunnya. Seterusnya latih masalah yang melibatkan beberapa langkah.",
  "5": "{n} dapat menyelesaikan masalah rutin yang kompleks melibatkan perpuluhan positif dan negatif, termasuk konteks wang dan suhu. Sudah bersedia untuk masalah bukan rutin.",
  "6": "{n} berjaya mereka masalah bukan rutin yang menggabungkan integer, pecahan dan perpuluhan dengan penyelesaian yang betul dan semakan kedua. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Nombor Nisbah. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyebut nombor mana lebih kiri dan lebih kanan pada garis nombor dengan bimbingan rakan sebaya."
 },
 "lampiran": {
  "nl1": "<figure class=\"figure jmi\" data-w=\"t1nombor\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1nombor&quot;,&quot;mod&quot;:&quot;banding&quot;,&quot;fmt&quot;:&quot;int&quot;,&quot;R&quot;:10,&quot;i&quot;:7,&quot;j&quot;:14,&quot;kapsyen&quot;:&quot;Rajah 1 · Gerakkan A dan B pada garis nombor. Semakin ke kanan, semakin besar nilainya.&quot;,&quot;alt&quot;:&quot;Rajah interaktif garis nombor -10 hingga 10; gelongsor A dan B menggerakkan dua titik dan menunjukkan tanda banding&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 214\" role=\"img\" aria-label=\"Rajah garis nombor interaktif, A -3 dan B 4\"><text x=\"130\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">A dan B pada garis nombor</text><line x1=\"10\" y1=\"118\" x2=\"250\" y2=\"118\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><line x1=\"14\" y1=\"112\" x2=\"14\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"14\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-10</text><line x1=\"25.6\" y1=\"112\" x2=\"25.6\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"37.2\" y1=\"112\" x2=\"37.2\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"48.8\" y1=\"112\" x2=\"48.8\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"60.4\" y1=\"112\" x2=\"60.4\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"72\" y1=\"112\" x2=\"72\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"72\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-5</text><line x1=\"83.6\" y1=\"112\" x2=\"83.6\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"95.2\" y1=\"112\" x2=\"95.2\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"106.8\" y1=\"112\" x2=\"106.8\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"118.4\" y1=\"112\" x2=\"118.4\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"130\" y1=\"112\" x2=\"130\" y2=\"124\" stroke=\"var(--ink)\" stroke-width=\"2.2\"></line><text x=\"130\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">0</text><line x1=\"141.6\" y1=\"112\" x2=\"141.6\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"153.2\" y1=\"112\" x2=\"153.2\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"164.8\" y1=\"112\" x2=\"164.8\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"176.4\" y1=\"112\" x2=\"176.4\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"188\" y1=\"112\" x2=\"188\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"188\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><line x1=\"199.6\" y1=\"112\" x2=\"199.6\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"211.2\" y1=\"112\" x2=\"211.2\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"222.8\" y1=\"112\" x2=\"222.8\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"234.4\" y1=\"112\" x2=\"234.4\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"246\" y1=\"112\" x2=\"246\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"246\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">10</text><circle cx=\"95.2\" cy=\"118\" r=\"6\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"2\"></circle><circle cx=\"176.4\" cy=\"118\" r=\"6\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"2\"></circle><text x=\"10\" y=\"158\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">A = -3</text><text x=\"10\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">B = 4</text><text class=\"jmi-hasil\" x=\"10\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">A &lt; B : A di kiri B</text></svg></div><figcaption>Rajah 1 · Gerakkan A dan B pada garis nombor. Semakin ke kanan, semakin besar nilainya.</figcaption></figure>",
  "nl2": "<figure class=\"figure jmi\" data-w=\"t1nombor\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1nombor&quot;,&quot;mod&quot;:&quot;operasi&quot;,&quot;fmt&quot;:&quot;int&quot;,&quot;d&quot;:1,&quot;n&quot;:5,&quot;i&quot;:8,&quot;j&quot;:9,&quot;o&quot;:0,&quot;kapsyen&quot;:&quot;Rajah 1 · Gerakkan a dan b, kemudian pilih tambah atau tolak. Lompatan ke kanan menaikkan nilai.&quot;,&quot;alt&quot;:&quot;Rajah interaktif garis nombor -10 hingga 10; a tambah atau tolak b dipaparkan sebagai lompatan&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 214\" role=\"img\" aria-label=\"Rajah garis nombor interaktif, 3 tambah 4\"><text x=\"92.2\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--ink)\" font-weight=\"700\">3 + 4 = </text><text class=\"jmi-hasil\" x=\"159.4\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--arteri)\" font-weight=\"700\">7</text><line x1=\"10\" y1=\"118\" x2=\"250\" y2=\"118\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><line x1=\"14\" y1=\"112\" x2=\"14\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"14\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-10</text><line x1=\"25.6\" y1=\"112\" x2=\"25.6\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"37.2\" y1=\"112\" x2=\"37.2\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"48.8\" y1=\"112\" x2=\"48.8\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"60.4\" y1=\"112\" x2=\"60.4\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"72\" y1=\"112\" x2=\"72\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"72\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-5</text><line x1=\"83.6\" y1=\"112\" x2=\"83.6\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"95.2\" y1=\"112\" x2=\"95.2\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"106.8\" y1=\"112\" x2=\"106.8\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"118.4\" y1=\"112\" x2=\"118.4\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"130\" y1=\"112\" x2=\"130\" y2=\"124\" stroke=\"var(--ink)\" stroke-width=\"2.2\"></line><text x=\"130\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">0</text><line x1=\"141.6\" y1=\"112\" x2=\"141.6\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"153.2\" y1=\"112\" x2=\"153.2\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"164.8\" y1=\"112\" x2=\"164.8\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"176.4\" y1=\"112\" x2=\"176.4\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"188\" y1=\"112\" x2=\"188\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"188\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><line x1=\"199.6\" y1=\"112\" x2=\"199.6\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"211.2\" y1=\"112\" x2=\"211.2\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"222.8\" y1=\"112\" x2=\"222.8\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"234.4\" y1=\"112\" x2=\"234.4\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"246\" y1=\"112\" x2=\"246\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"246\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">10</text><g class=\"jmi-hasil\"><path d=\"M164.8 109 Q188 53.9 211.2 109\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.4\" stroke-linecap=\"round\"></path><path d=\"M211.2 109 L203.9 103.4 L212.2 99.9 Z\" fill=\"var(--vena)\"></path></g><text class=\"jmi-hasil\" x=\"188\" y=\"76.4\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">+4</text><circle cx=\"164.8\" cy=\"118\" r=\"6\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"2\"></circle><circle class=\"jmi-hasil\" cx=\"211.2\" cy=\"118\" r=\"6\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"2\"></circle><text x=\"10\" y=\"158\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">a = 3 (mula)</text><text x=\"10\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">tambah 4</text><text class=\"jmi-hasil\" x=\"10\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">hasil = 7</text></svg></div><figcaption>Rajah 1 · Gerakkan a dan b, kemudian pilih tambah atau tolak. Lompatan ke kanan menaikkan nilai.</figcaption></figure>",
  "nl3": "<figure class=\"figure jmi\" data-w=\"t1nombor\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1nombor&quot;,&quot;mod&quot;:&quot;darab&quot;,&quot;n&quot;:4,&quot;bMaks&quot;:4,&quot;i&quot;:7,&quot;j&quot;:2,&quot;kapsyen&quot;:&quot;Rajah 1 · n lompatan berukuran b bermula dari 0. Jika n negatif, arah lompatan terbalik.&quot;,&quot;alt&quot;:&quot;Rajah interaktif garis nombor; n lompatan berukuran b menunjukkan hasil darab dua integer&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 214\" role=\"img\" aria-label=\"Rajah garis nombor interaktif, 3 lompatan berukuran -2\"><text x=\"75.4\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--ink)\" font-weight=\"700\">3 × (-2) = </text><text class=\"jmi-hasil\" x=\"167.8\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--arteri)\" font-weight=\"700\">-6</text><line x1=\"10\" y1=\"118\" x2=\"250\" y2=\"118\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><line x1=\"14\" y1=\"112\" x2=\"14\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"21.3\" y1=\"112\" x2=\"21.3\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"21.3\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-15</text><line x1=\"28.5\" y1=\"112\" x2=\"28.5\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"35.8\" y1=\"112\" x2=\"35.8\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"43\" y1=\"112\" x2=\"43\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"50.3\" y1=\"112\" x2=\"50.3\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"57.5\" y1=\"112\" x2=\"57.5\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"57.5\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-10</text><line x1=\"64.8\" y1=\"112\" x2=\"64.8\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"72\" y1=\"112\" x2=\"72\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"79.3\" y1=\"112\" x2=\"79.3\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"86.5\" y1=\"112\" x2=\"86.5\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"93.8\" y1=\"112\" x2=\"93.8\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"93.8\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-5</text><line x1=\"101\" y1=\"112\" x2=\"101\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"108.3\" y1=\"112\" x2=\"108.3\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"115.5\" y1=\"112\" x2=\"115.5\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"122.8\" y1=\"112\" x2=\"122.8\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"130\" y1=\"112\" x2=\"130\" y2=\"124\" stroke=\"var(--ink)\" stroke-width=\"2.2\"></line><text x=\"130\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">0</text><line x1=\"137.3\" y1=\"112\" x2=\"137.3\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"144.5\" y1=\"112\" x2=\"144.5\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"151.8\" y1=\"112\" x2=\"151.8\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"159\" y1=\"112\" x2=\"159\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"166.3\" y1=\"112\" x2=\"166.3\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"166.3\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><line x1=\"173.5\" y1=\"112\" x2=\"173.5\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"180.8\" y1=\"112\" x2=\"180.8\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"188\" y1=\"112\" x2=\"188\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"195.3\" y1=\"112\" x2=\"195.3\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"202.5\" y1=\"112\" x2=\"202.5\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"202.5\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">10</text><line x1=\"209.8\" y1=\"112\" x2=\"209.8\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"217\" y1=\"112\" x2=\"217\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"224.3\" y1=\"112\" x2=\"224.3\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"231.5\" y1=\"112\" x2=\"231.5\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"238.8\" y1=\"112\" x2=\"238.8\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"238.8\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">15</text><line x1=\"246\" y1=\"112\" x2=\"246\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><g class=\"jmi-hasil\"><path d=\"M130 109 Q122.8 79.4 115.5 109\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.4\" stroke-linecap=\"round\"></path><path d=\"M115.5 109 L113 100.2 L121.8 102.3 Z\" fill=\"var(--vena)\"></path></g><g class=\"jmi-hasil\"><path d=\"M115.5 109 Q108.3 79.4 101 109\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.4\" stroke-linecap=\"round\"></path><path d=\"M101 109 L98.5 100.2 L107.3 102.3 Z\" fill=\"var(--vena)\"></path></g><g class=\"jmi-hasil\"><path d=\"M101 109 Q93.8 79.4 86.5 109\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.4\" stroke-linecap=\"round\"></path><path d=\"M86.5 109 L84 100.2 L92.8 102.3 Z\" fill=\"var(--vena)\"></path></g><circle cx=\"130\" cy=\"118\" r=\"6\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"2\"></circle><circle class=\"jmi-hasil\" cx=\"86.5\" cy=\"118\" r=\"6\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"2\"></circle><text x=\"10\" y=\"158\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">n = 3 lompatan</text><text x=\"10\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">b = -2 (saiz lompatan)</text><text class=\"jmi-hasil\" x=\"10\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">3 × (-2) = -6</text></svg></div><figcaption>Rajah 1 · n lompatan berukuran b bermula dari 0. Jika n negatif, arah lompatan terbalik.</figcaption></figure>",
  "nl4": "<figure class=\"figure jmi cabar\" data-w=\"t1nombor\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1nombor&quot;,&quot;mod&quot;:&quot;operasi&quot;,&quot;fmt&quot;:&quot;pec&quot;,&quot;d&quot;:4,&quot;n&quot;:4,&quot;i&quot;:5,&quot;j&quot;:6,&quot;cabar&quot;:true,&quot;kapsyen&quot;:&quot;Rajah 1 · Garis nombor dibahagi kepada suku. Kira dahulu dengan pecahan, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif garis nombor -2 hingga 2 dibahagi suku; pecahan a tambah atau tolak b dengan mod cabar&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 214\" role=\"img\" aria-label=\"Rajah garis nombor interaktif, 1/4 tambah 2/4\"><text x=\"67\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--ink)\" font-weight=\"700\">1/4 + 2/4 = </text><text class=\"jmi-hasil\" x=\"167.8\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--arteri)\" font-weight=\"700\">3/4</text><line x1=\"10\" y1=\"118\" x2=\"250\" y2=\"118\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><line x1=\"28.5\" y1=\"115\" x2=\"28.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"43\" y1=\"115\" x2=\"43\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"57.5\" y1=\"115\" x2=\"57.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"86.5\" y1=\"115\" x2=\"86.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"101\" y1=\"115\" x2=\"101\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"115.5\" y1=\"115\" x2=\"115.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"144.5\" y1=\"115\" x2=\"144.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"159\" y1=\"115\" x2=\"159\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"173.5\" y1=\"115\" x2=\"173.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"202.5\" y1=\"115\" x2=\"202.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"217\" y1=\"115\" x2=\"217\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"231.5\" y1=\"115\" x2=\"231.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"14\" y1=\"112\" x2=\"14\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"14\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-2</text><line x1=\"72\" y1=\"112\" x2=\"72\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"72\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-1</text><line x1=\"130\" y1=\"112\" x2=\"130\" y2=\"124\" stroke=\"var(--ink)\" stroke-width=\"2.2\"></line><text x=\"130\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">0</text><line x1=\"188\" y1=\"112\" x2=\"188\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"188\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><line x1=\"246\" y1=\"112\" x2=\"246\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"246\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><g class=\"jmi-hasil\"><path d=\"M144.5 109 Q159 67.8 173.5 109\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.4\" stroke-linecap=\"round\"></path><path d=\"M173.5 109 L166.6 102.9 L175.1 100 Z\" fill=\"var(--vena)\"></path></g><text class=\"jmi-hasil\" x=\"159\" y=\"83.4\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">+2/4</text><circle cx=\"144.5\" cy=\"118\" r=\"6\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"2\"></circle><circle class=\"jmi-hasil\" cx=\"173.5\" cy=\"118\" r=\"6\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"2\"></circle><text x=\"10\" y=\"158\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">a = 1/4 (mula)</text><text x=\"10\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">tambah 2/4</text><text class=\"jmi-hasil\" x=\"10\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">hasil = 3/4</text></svg></div><figcaption>Rajah 1 · Garis nombor dibahagi kepada suku. Kira dahulu dengan pecahan, kemudian semak dengan rajah.</figcaption></figure>",
  "nl5": "<figure class=\"figure jmi cabar\" data-w=\"t1nombor\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1nombor&quot;,&quot;mod&quot;:&quot;operasi&quot;,&quot;fmt&quot;:&quot;per&quot;,&quot;d&quot;:10,&quot;n&quot;:15,&quot;i&quot;:27,&quot;j&quot;:8,&quot;cabar&quot;:true,&quot;kapsyen&quot;:&quot;Rajah 1 · Garis nombor dibahagi kepada persepuluh. Kira dahulu, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif garis nombor -3 hingga 3 dibahagi persepuluh; perpuluhan a tambah atau tolak b dengan mod cabar&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 214\" role=\"img\" aria-label=\"Rajah garis nombor interaktif, 1.2 tambah -0.7\"><text x=\"54.4\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--ink)\" font-weight=\"700\">1.2 + (-0.7) = </text><text class=\"jmi-hasil\" x=\"180.4\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--arteri)\" font-weight=\"700\">0.5</text><line x1=\"10\" y1=\"118\" x2=\"250\" y2=\"118\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><line x1=\"17.9\" y1=\"115\" x2=\"17.9\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"21.7\" y1=\"115\" x2=\"21.7\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"25.6\" y1=\"115\" x2=\"25.6\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"29.5\" y1=\"115\" x2=\"29.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"33.3\" y1=\"115\" x2=\"33.3\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"37.2\" y1=\"115\" x2=\"37.2\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"41.1\" y1=\"115\" x2=\"41.1\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"44.9\" y1=\"115\" x2=\"44.9\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"48.8\" y1=\"115\" x2=\"48.8\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"56.5\" y1=\"115\" x2=\"56.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"60.4\" y1=\"115\" x2=\"60.4\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"64.3\" y1=\"115\" x2=\"64.3\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"68.1\" y1=\"115\" x2=\"68.1\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"72\" y1=\"115\" x2=\"72\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"75.9\" y1=\"115\" x2=\"75.9\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"79.7\" y1=\"115\" x2=\"79.7\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"83.6\" y1=\"115\" x2=\"83.6\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"87.5\" y1=\"115\" x2=\"87.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"95.2\" y1=\"115\" x2=\"95.2\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"99.1\" y1=\"115\" x2=\"99.1\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"102.9\" y1=\"115\" x2=\"102.9\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"106.8\" y1=\"115\" x2=\"106.8\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"110.7\" y1=\"115\" x2=\"110.7\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"114.5\" y1=\"115\" x2=\"114.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"118.4\" y1=\"115\" x2=\"118.4\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"122.3\" y1=\"115\" x2=\"122.3\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"126.1\" y1=\"115\" x2=\"126.1\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"133.9\" y1=\"115\" x2=\"133.9\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"137.7\" y1=\"115\" x2=\"137.7\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"141.6\" y1=\"115\" x2=\"141.6\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"145.5\" y1=\"115\" x2=\"145.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"149.3\" y1=\"115\" x2=\"149.3\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"153.2\" y1=\"115\" x2=\"153.2\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"157.1\" y1=\"115\" x2=\"157.1\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"160.9\" y1=\"115\" x2=\"160.9\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"164.8\" y1=\"115\" x2=\"164.8\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"172.5\" y1=\"115\" x2=\"172.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"176.4\" y1=\"115\" x2=\"176.4\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"180.3\" y1=\"115\" x2=\"180.3\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"184.1\" y1=\"115\" x2=\"184.1\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"188\" y1=\"115\" x2=\"188\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"191.9\" y1=\"115\" x2=\"191.9\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"195.7\" y1=\"115\" x2=\"195.7\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"199.6\" y1=\"115\" x2=\"199.6\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"203.5\" y1=\"115\" x2=\"203.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"211.2\" y1=\"115\" x2=\"211.2\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"215.1\" y1=\"115\" x2=\"215.1\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"218.9\" y1=\"115\" x2=\"218.9\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"222.8\" y1=\"115\" x2=\"222.8\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"226.7\" y1=\"115\" x2=\"226.7\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"230.5\" y1=\"115\" x2=\"230.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"234.4\" y1=\"115\" x2=\"234.4\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"238.3\" y1=\"115\" x2=\"238.3\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"242.1\" y1=\"115\" x2=\"242.1\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"14\" y1=\"112\" x2=\"14\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"14\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-3</text><line x1=\"52.7\" y1=\"112\" x2=\"52.7\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"52.7\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-2</text><line x1=\"91.3\" y1=\"112\" x2=\"91.3\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"91.3\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-1</text><line x1=\"130\" y1=\"112\" x2=\"130\" y2=\"124\" stroke=\"var(--ink)\" stroke-width=\"2.2\"></line><text x=\"130\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">0</text><line x1=\"168.7\" y1=\"112\" x2=\"168.7\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"168.7\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><line x1=\"207.3\" y1=\"112\" x2=\"207.3\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"207.3\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"246\" y1=\"112\" x2=\"246\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"246\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><g class=\"jmi-hasil\"><path d=\"M176.4 109 Q162.9 69.3 149.3 109\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.4\" stroke-linecap=\"round\"></path><path d=\"M149.3 109 L147.7 100 L156.2 102.9 Z\" fill=\"var(--vena)\"></path></g><text class=\"jmi-hasil\" x=\"162.9\" y=\"84.2\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">-0.7</text><circle cx=\"176.4\" cy=\"118\" r=\"6\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"2\"></circle><circle class=\"jmi-hasil\" cx=\"149.3\" cy=\"118\" r=\"6\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"2\"></circle><text x=\"10\" y=\"158\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">a = 1.2 (mula)</text><text x=\"10\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">tambah -0.7</text><text class=\"jmi-hasil\" x=\"10\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">hasil = 0.5</text></svg></div><figcaption>Rajah 1 · Garis nombor dibahagi kepada persepuluh. Kira dahulu, kemudian semak dengan rajah.</figcaption></figure>",
  "nl6": "<figure class=\"figure jmi\" data-w=\"t1nombor\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1nombor&quot;,&quot;mod&quot;:&quot;tukar&quot;,&quot;d&quot;:8,&quot;R&quot;:1,&quot;i&quot;:11,&quot;kapsyen&quot;:&quot;Rajah 1 · Penyebut ialah 8. Gerakkan pengangka dan lihat pecahan bertukar kepada perpuluhan.&quot;,&quot;alt&quot;:&quot;Rajah interaktif garis nombor -1 hingga 1 dibahagi perlapan; pecahan ditukar kepada perpuluhan dan bentuk termudah&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 214\" role=\"img\" aria-label=\"Rajah garis nombor interaktif, pecahan 3/8\"><text x=\"83.8\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--ink)\" font-weight=\"700\">3/8 = </text><text class=\"jmi-hasil\" x=\"134.2\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--arteri)\" font-weight=\"700\">0.375</text><line x1=\"10\" y1=\"118\" x2=\"250\" y2=\"118\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><line x1=\"28.5\" y1=\"115\" x2=\"28.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"43\" y1=\"115\" x2=\"43\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"57.5\" y1=\"115\" x2=\"57.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"72\" y1=\"115\" x2=\"72\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"86.5\" y1=\"115\" x2=\"86.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"101\" y1=\"115\" x2=\"101\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"115.5\" y1=\"115\" x2=\"115.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"144.5\" y1=\"115\" x2=\"144.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"159\" y1=\"115\" x2=\"159\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"173.5\" y1=\"115\" x2=\"173.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"188\" y1=\"115\" x2=\"188\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"202.5\" y1=\"115\" x2=\"202.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"217\" y1=\"115\" x2=\"217\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"231.5\" y1=\"115\" x2=\"231.5\" y2=\"121\" stroke=\"var(--line2)\" stroke-width=\"1\"></line><line x1=\"14\" y1=\"112\" x2=\"14\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"14\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-1</text><line x1=\"130\" y1=\"112\" x2=\"130\" y2=\"124\" stroke=\"var(--ink)\" stroke-width=\"2.2\"></line><text x=\"130\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">0</text><line x1=\"246\" y1=\"112\" x2=\"246\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"246\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><circle cx=\"173.5\" cy=\"118\" r=\"6\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"2\"></circle><text x=\"10\" y=\"158\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">pecahan: 3/8  (penyebut 8)</text><text class=\"jmi-hasil\" x=\"10\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">perpuluhan: 0.375</text><text class=\"jmi-hasil\" x=\"10\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">bentuk termudah: 3/8</text></svg></div><figcaption>Rajah 1 · Penyebut ialah 8. Gerakkan pengangka dan lihat pecahan bertukar kepada perpuluhan.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Lif Bangunan",
   "sk": "1.1.1 – 1.1.4 Integer, garis nombor, membanding dan menyusun",
   "lampiran": "nl1",
   "kadNama": "Integer",
   "kadEm": "🏢",
   "kadFakta": "Integer ialah nombor bulat positif, nombor bulat negatif dan sifar. Sifar bukan positif dan bukan negatif.",
   "bosKadNama": "Garis Nombor",
   "bosKadEm": "🧭",
   "bosKadFakta": "Semakin ke kanan pada garis nombor, semakin besar nilainya. Jadi −1 lebih besar daripada −100.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Sebuah lif bergerak ke tingkat 3 di bawah aras tanah. Nombor manakah mewakili kedudukan lif itu?",
     "p": [
      "−3",
      "3",
      "−2",
      "−4"
     ],
     "b": 0,
     "u": "Di bawah aras tanah ialah arah negatif, jadi 3 tingkat ke bawah ditulis −3."
    },
    {
     "j": "pilih",
     "t": "Antara nombor berikut, yang manakah BUKAN integer?",
     "p": [
      "−14",
      "2.5",
      "20",
      "−7"
     ],
     "b": 1,
     "u": "Integer ialah nombor bulat positif, nombor bulat negatif dan sifar. 2.5 ialah perpuluhan, bukan nombor bulat."
    },
    {
     "j": "pilih",
     "t": "Sifar (0) ialah integer yang:",
     "p": [
      "Negatif yang terkecil",
      "Positif yang terkecil",
      "Bukan positif, bukan negatif",
      "Bukan integer"
     ],
     "b": 2,
     "u": "Sifar ialah integer, tetapi ia bukan positif dan bukan negatif. Ia memisahkan integer positif dan negatif pada garis nombor."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan A = −3 dan B = 4. Yang manakah betul?",
     "p": [
      "A &gt; B",
      "A = B",
      "A = −B",
      "A &lt; B"
     ],
     "b": 3,
     "u": "A berada di sebelah kiri B pada garis nombor, jadi A lebih kecil daripada B."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan A = −7. Berapa langkah titik A dari sifar?",
     "p": [
      "7",
      "−7",
      "70",
      "0.7"
     ],
     "b": 0,
     "u": "Dari 0 ke −7 ialah 7 langkah ke kiri. Bilangan langkah tidak boleh negatif."
    },
    {
     "j": "pilih",
     "t": "Antara integer berikut, yang manakah paling kecil?",
     "p": [
      "−2",
      "−9",
      "−5",
      "5"
     ],
     "b": 1,
     "u": "Integer negatif berada di sebelah kiri 0. Antara −9 dan −2, −9 lebih ke kiri, jadi paling kecil."
    },
    {
     "j": "susun",
     "t": "Susun integer ini daripada yang paling kecil kepada yang paling besar.",
     "p": [
      "−8",
      "−3",
      "0",
      "2",
      "6"
     ],
     "b": [
      0,
      1,
      2,
      3,
      4
     ],
     "u": "Ikut kedudukan pada garis nombor dari kiri ke kanan: −8, −3, 0, 2, 6."
    },
    {
     "j": "banyak",
     "t": "Pilih SEMUA pernyataan yang BENAR.",
     "p": [
      "−5 &lt; −2",
      "0 &gt; −1",
      "Integer negatif berada di sebelah kiri 0",
      "−10 &gt; 3",
      "−4 ialah integer positif",
      "Sifar ialah integer negatif"
     ],
     "b": [
      0,
      1,
      2
     ],
     "u": "−5 di kiri −2, dan 0 di kanan −1. Integer negatif memang di kiri 0. −10 lebih kecil daripada 3, −4 negatif dan sifar bukan negatif."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Dalam Rajah 1, pilih SEMUA integer yang lebih besar daripada −3 dan lebih kecil daripada 2.",
    "p": [
     "−2",
     "−1",
     "0",
     "1",
     "−3",
     "2"
    ],
    "b": [
     0,
     1,
     2,
     3
    ],
    "u": "Integer di antara −3 dan 2 (tidak termasuk hujungnya) ialah −2, −1, 0 dan 1. −3 dan 2 ialah sempadan sahaja."
   }
  },
  {
   "n": 2,
   "tempat": "Termometer Cameron",
   "sk": "1.2.1 Tambah dan tolak integer; 1.5.1 Nombor nisbah",
   "lampiran": "nl2",
   "kadNama": "Suhu Beku",
   "kadEm": "🌡️",
   "kadFakta": "Air membeku pada 0 °C. Suhu di bawah 0 °C ditulis dengan tanda negatif, contohnya −5 °C.",
   "bosKadNama": "Nombor Nisbah",
   "bosKadEm": "💡",
   "bosKadFakta": "Nombor nisbah ialah nombor yang boleh ditulis sebagai p/q dengan q bukan sifar. Integer 3 boleh ditulis sebagai 3/1.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan a = 3, b = 4 dan pilih tambah. Berapakah hasilnya?",
     "b": 7,
     "tol": 0.01,
     "u": "Bermula di 3, lompat 4 langkah ke kanan sampai 7."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan a = −2, b = 5 dan pilih tambah. Berapakah hasilnya?",
     "b": 3,
     "tol": 0.01,
     "u": "Bermula di −2, lompat 5 langkah ke kanan. −2 + 5 = 3."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan a = 4, b = 6 dan pilih tolak. Berapakah hasilnya?",
     "b": -2,
     "tol": 0.01,
     "u": "Menolak 6 bermaksud lompat 6 langkah ke kiri dari 4. Hasilnya −2."
    },
    {
     "j": "pilih",
     "t": "Hitung (−3) + (−4).",
     "p": [
      "−1",
      "−12",
      "−7",
      "7"
     ],
     "b": 2,
     "u": "Menambah integer negatif bermaksud bergerak ke kiri. −3 dan 4 langkah lagi ke kiri sampai −7."
    },
    {
     "j": "pilih",
     "t": "Menolak integer negatif sama seperti menambah integer positif. Maka 5 − (−3) = ?",
     "p": [
      "−8",
      "−2",
      "15",
      "8"
     ],
     "b": 3,
     "u": "5 − (−3) = 5 + 3 = 8."
    },
    {
     "j": "pilih",
     "t": "Antara berikut, yang manakah BUKAN nombor nisbah?",
     "p": [
      "5/0",
      "−3/4",
      "0.25",
      "7"
     ],
     "b": 0,
     "u": "Nombor nisbah ialah p/q dengan q bukan sifar. 5/0 tidak tertakrif, jadi bukan nombor nisbah. Nombor lain boleh ditulis sebagai pecahan, contohnya 7 = 7/1."
    },
    {
     "j": "pilih",
     "t": "Suhu pagi ialah −4 °C. Tengah hari suhu naik 9 °C. Berapakah suhu tengah hari?",
     "p": [
      "−5 °C",
      "5 °C",
      "13 °C",
      "−13 °C"
     ],
     "b": 1,
     "u": "−4 + 9 = 5, jadi suhu tengah hari 5 °C."
    },
    {
     "j": "banyak",
     "t": "Pilih SEMUA pengiraan yang bernilai 3.",
     "p": [
      "8 + (−5)",
      "−2 + 5",
      "4 − (−1)",
      "2 − 5",
      "−1 − (−4)",
      "−6 + 2"
     ],
     "b": [
      0,
      1,
      4
     ],
     "u": "8 + (−5) = 3, −2 + 5 = 3 dan −1 − (−4) = −1 + 4 = 3. Yang lain ialah 5, −3 dan −4."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Sebuah lif bermula di aras −2. Ia naik 7 aras, kemudian turun 9 aras. Di aras berapakah lif itu berhenti?",
    "b": -4,
    "tol": 0.01,
    "u": "−2 + 7 = 5, kemudian 5 − 9 = −4. Lif berhenti di aras −4."
   }
  },
  {
   "n": 3,
   "tempat": "Padang Lompat",
   "sk": "1.2.2 – 1.2.5 Darab, bahagi, tertib operasi dan hukum operasi; 1.3.3, 1.4.3 Gabungan operasi",
   "lampiran": "nl3",
   "kadNama": "Tertib Operasi",
   "kadEm": "🧮",
   "kadFakta": "Selesaikan kurungan dahulu, kemudian darab dan bahagi, kemudian tambah dan tolak. Kerjakan dari kiri ke kanan.",
   "bosKadNama": "Kalis Agihan",
   "bosKadEm": "🎯",
   "bosKadFakta": "Hukum kalis agihan: a × (b + c) = a × b + a × c. Ia membantu mengira dengan cepat, contohnya 25 × 102 = 25 × 100 + 25 × 2.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan n = 3 dan b = −2. Berapakah n × b?",
     "b": -6,
     "tol": 0.01,
     "u": "3 lompatan berukuran −2 ke kiri: −2, −4, −6. Jadi 3 × (−2) = −6."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan n = −3 dan b = −2. Berapakah n × b?",
     "b": 6,
     "tol": 0.01,
     "u": "Bila n negatif, arah lompatan terbalik. Tiga lompatan −2 dibalikkan menjadi 3 lompatan +2 ke kanan, sampai 6."
    },
    {
     "j": "pilih",
     "t": "Hasil darab dua integer negatif ialah:",
     "p": [
      "Negatif",
      "Sifar",
      "Positif",
      "Tidak tentu"
     ],
     "b": 2,
     "u": "Negatif darab negatif memberikan positif, contohnya (−4) × (−5) = 20."
    },
    {
     "j": "nombor",
     "t": "Hitung (−24) ÷ 4 + 3 × (−2).",
     "b": -12,
     "tol": 0.01,
     "u": "Bahagi dan darab dahulu: −6 dan −6. Kemudian −6 + (−6) = −12."
    },
    {
     "j": "pilih",
     "t": "Hukum manakah ditunjukkan oleh 7 × 5 = 5 × 7?",
     "p": [
      "Kalis sekutuan darab",
      "Kalis agihan",
      "Hukum identiti",
      "Kalis tukar tertib"
     ],
     "b": 3,
     "u": "Menukar tertib nombor yang didarab tidak mengubah hasil. Ini hukum kalis tukar tertib."
    },
    {
     "j": "nombor",
     "t": "Guna hukum kalis agihan untuk mengira 102 × 15, iaitu (100 + 2) × 15.",
     "b": 1530,
     "tol": 0.01,
     "u": "100 × 15 = 1 500 dan 2 × 15 = 30. Jumlahnya 1 530."
    },
    {
     "j": "pilih",
     "t": "Hitung 1/2 + 1/4.",
     "p": [
      "3/4",
      "2/6",
      "1/4",
      "3/8"
     ],
     "b": 0,
     "u": "Jadikan penyebut sama: 1/2 = 2/4. Kemudian 2/4 + 1/4 = 3/4."
    },
    {
     "j": "susun",
     "t": "Susun langkah untuk menghitung 3 + 4 × (2 − 5).",
     "p": [
      "Buat kurungan dahulu: 2 − 5 = −3",
      "Darab: 4 × (−3) = −12",
      "Tambah: 3 + (−12)",
      "Jawapan ialah −9"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Kurungan dahulu, kemudian darab, kemudian tambah. 3 + (−12) = −9."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pengiraan yang BETUL.",
    "p": [
     "(−6) × (−2) = 12",
     "(−15) ÷ 3 = −5",
     "0.5 + 0.25 = 0.75",
     "−4 × 3 = 12",
     "8 − (−2) = 6",
     "(−12) ÷ (−4) = −3"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "(−6) × (−2) = 12, (−15) ÷ 3 = −5 dan 0.5 + 0.25 = 0.75. Yang salah: −4 × 3 = −12, 8 − (−2) = 10 dan (−12) ÷ (−4) = 3."
   }
  },
  {
   "n": 4,
   "tempat": "Kedai Roti",
   "sk": "1.3.1 – 1.3.4 Pecahan positif dan negatif, masalah rutin mudah",
   "lampiran": "nl4",
   "kadNama": "Pecahan Negatif",
   "kadEm": "🥖",
   "kadFakta": "Pecahan negatif berada di sebelah kiri sifar. −1/2 ialah setengah langkah ke kiri dari 0.",
   "bosKadNama": "Penyebut Sama",
   "bosKadEm": "🍰",
   "bosKadFakta": "Untuk tambah atau tolak pecahan, jadikan penyebut sama dahulu. Selepas itu tambah atau tolak pengangka sahaja.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan a = 1/4, b = 2/4 dan pilih tambah. Hasilnya ialah:",
     "p": [
      "1/4",
      "3/4",
      "2/8",
      "3/8"
     ],
     "b": 1,
     "u": "Penyebut sama, jadi tambah pengangka: 1 + 2 = 3. Hasilnya 3/4."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan a = −1/4, b = 3/4 dan pilih tambah. Hasilnya ialah:",
     "p": [
      "−1/2",
      "3/4",
      "1/2",
      "1/4"
     ],
     "b": 2,
     "u": "−1 + 3 = 2, jadi hasilnya 2/4 = 1/2."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan a = 1/4, b = 3/4 dan pilih tolak. Hasilnya ialah:",
     "p": [
      "1/2",
      "−1/4",
      "−3/4",
      "−1/2"
     ],
     "b": 3,
     "u": "1 − 3 = −2, jadi hasilnya −2/4 = −1/2."
    },
    {
     "j": "pilih",
     "t": "Antara pecahan berikut, yang manakah paling kecil?",
     "p": [
      "−3/4",
      "−1/2",
      "1/4",
      "1/2"
     ],
     "b": 0,
     "u": "Pecahan negatif lebih kecil daripada pecahan positif. Antara −3/4 dan −1/2, −3/4 lebih jauh ke kiri."
    },
    {
     "j": "pilih",
     "t": "Yang manakah pernyataan BENAR?",
     "p": [
      "−2/3 &gt; −1/2",
      "−2/3 &lt; −1/2",
      "−1/2 &lt; −3/4",
      "−1/3 &lt; −1/2"
     ],
     "b": 1,
     "u": "−2/3 ≈ −0.67 dan −1/2 = −0.5. −0.67 berada di kiri −0.5, jadi −2/3 lebih kecil."
    },
    {
     "j": "nombor",
     "t": "Sebuah kedai roti ada 3/4 kg tepung. Ali guna 1/2 kg. Berapa kg tepung yang tinggal? (Jawab dalam perpuluhan)",
     "b": 0.25,
     "tol": 0.01,
     "suf": "kg",
     "u": "3/4 − 1/2 = 3/4 − 2/4 = 1/4 = 0.25 kg."
    },
    {
     "j": "susun",
     "t": "Susun pecahan ini daripada yang paling kecil kepada yang paling besar.",
     "p": [
      "−3/4",
      "−1/2",
      "0",
      "1/4",
      "2/3"
     ],
     "b": [
      0,
      1,
      2,
      3,
      4
     ],
     "u": "Nilai perpuluhan: −0.75, −0.5, 0, 0.25 dan 0.67. Susun dari kiri ke kanan pada garis nombor."
    },
    {
     "j": "pilih",
     "t": "Seutas tali sepanjang 3/4 m dipotong 1/8 m. Berapakah panjang yang tinggal?",
     "p": [
      "2/4 m",
      "7/8 m",
      "5/8 m",
      "4/8 m"
     ],
     "b": 2,
     "u": "3/4 = 6/8. Kemudian 6/8 − 1/8 = 5/8."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Seorang pembuat kek ada 5/2 kg gula (dua setengah kilogram). Dia guna 3/4 kg pada waktu pagi dan 5/4 kg pada waktu petang. Berapa kg gula yang tinggal? (Jawab dalam perpuluhan)",
    "b": 0.5,
    "tol": 0.01,
    "suf": "kg",
    "u": "Semua ke suku: 5/2 = 10/4. Gula digunakan 3/4 + 5/4 = 8/4. Baki 10/4 − 8/4 = 2/4 = 0.5 kg."
   }
  },
  {
   "n": 5,
   "tempat": "Duit Belanja",
   "sk": "1.4.1 – 1.4.4 Perpuluhan positif dan negatif; 1.2.6, 1.5.3 Masalah kompleks",
   "lampiran": "nl5",
   "kadNama": "Perpuluhan Negatif",
   "kadEm": "💵",
   "kadFakta": "Perpuluhan negatif seperti −0.7 berada di sebelah kiri sifar, lebih dekat kepada 0 daripada −1.2.",
   "bosKadNama": "Baki Akaun",
   "bosKadEm": "🏦",
   "bosKadFakta": "Baki akaun negatif bermaksud terlebih guna. Contohnya −RM50 bermaksud awak berhutang RM50 dengan bank.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan a = 1.2, b = −0.7 dan pilih tambah. Berapakah hasilnya?",
     "b": 0.5,
     "tol": 0.01,
     "u": "1.2 + (−0.7) = 1.2 − 0.7 = 0.5."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan a = −0.8, b = 1.3 dan pilih tolak. Berapakah hasilnya?",
     "b": -2.1,
     "tol": 0.01,
     "u": "−0.8 − 1.3 = −2.1."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan a = −1.5, b = −0.9 dan pilih tolak. Berapakah hasilnya?",
     "b": -0.6,
     "tol": 0.01,
     "u": "Menolak negatif sama seperti menambah positif. −1.5 − (−0.9) = −1.5 + 0.9 = −0.6."
    },
    {
     "j": "pilih",
     "t": "Antara perpuluhan berikut, yang manakah paling kecil?",
     "p": [
      "−1.2",
      "−1.15",
      "−0.5",
      "−1.25"
     ],
     "b": 3,
     "u": "Antara perpuluhan negatif, yang paling jauh dari sifar ialah paling kecil. −1.25 lebih jauh daripada −1.2."
    },
    {
     "j": "pilih",
     "t": "Manakah susunan menaik (kecil ke besar) yang betul?",
     "p": [
      "−0.6, −0.06, 0.06, 0.6",
      "−0.06, −0.6, 0.06, 0.6",
      "−0.6, −0.06, 0.6, 0.06",
      "0.6, 0.06, −0.06, −0.6"
     ],
     "b": 0,
     "u": "−0.6 lebih kecil daripada −0.06. Kemudian dua nombor positif: 0.06 lebih kecil daripada 0.6."
    },
    {
     "j": "nombor",
     "t": "Hitung 2.5 − 3.2 × 0.5 + (−1.4).",
     "b": -0.5,
     "tol": 0.01,
     "u": "Darab dahulu: 3.2 × 0.5 = 1.6. Kemudian 2.5 − 1.6 = 0.9, dan 0.9 + (−1.4) = −0.5."
    },
    {
     "j": "nombor",
     "t": "Baki akaun Nora ialah −RM12.50 (terlebih guna). Dia menyimpan RM40.00 kemudian berbelanja RM18.75. Berapakah baki akhir dalam RM?",
     "b": 8.75,
     "tol": 0.01,
     "suf": "RM",
     "u": "−12.50 + 40.00 = 27.50. Kemudian 27.50 − 18.75 = 8.75."
    },
    {
     "j": "pilih",
     "t": "Suhu −3.5 °C naik 6.2 °C kemudian turun 4.1 °C. Berapakah suhu akhir?",
     "p": [
      "1.4 °C",
      "−1.4 °C",
      "−0.4 °C",
      "13.8 °C"
     ],
     "b": 1,
     "u": "−3.5 + 6.2 = 2.7. Kemudian 2.7 − 4.1 = −1.4."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Untung/rugi sebuah kedai selama 5 hari ialah +RM32.50, −RM18.75, +RM45.00, −RM60.25 dan +RM12.00. Berapakah untung bersih dalam RM?",
    "b": 10.5,
    "tol": 0.01,
    "suf": "RM",
    "u": "32.50 − 18.75 = 13.75. Kemudian +45.00 = 58.75, −60.25 = −1.50, dan +12.00 = 10.50."
   }
  },
  {
   "n": 6,
   "tempat": "Bengkel Nombor",
   "sk": "1.5.1 – 1.5.3 Nombor nisbah, masalah bukan rutin",
   "lampiran": "nl6",
   "kadNama": "Perpuluhan Berulang",
   "kadEm": "🔁",
   "kadFakta": "1/3 = 0.333... tidak berhenti. Tetapi ia tetap nombor nisbah kerana boleh ditulis sebagai pecahan 1/3.",
   "bosKadNama": "Titik Tengah",
   "bosKadEm": "🎯",
   "bosKadFakta": "Antara mana-mana dua nombor nisbah sentiasa ada satu lagi nombor nisbah. Purata kedua-duanya ialah satu contoh.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1 (penyebut 8), pecahan 3/8 sama dengan perpuluhan:",
     "p": [
      "0.385",
      "0.835",
      "0.375",
      "0.038"
     ],
     "b": 2,
     "u": "3 ÷ 8 = 0.375."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan pengangka −5. Tukar −5/8 kepada perpuluhan.",
     "b": -0.625,
     "tol": 0.001,
     "u": "5 ÷ 8 = 0.625, jadi −5/8 = −0.625."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1 (penyebut 8), pengangka berapakah yang memberi perpuluhan 0.75?",
     "p": [
      "24",
      "60",
      "75",
      "6"
     ],
     "b": 3,
     "u": "0.75 × 8 = 6, jadi 6/8 = 0.75."
    },
    {
     "j": "pilih",
     "t": "Antara 0.3 dan 1/3, yang manakah lebih besar?",
     "p": [
      "1/3",
      "0.3",
      "Sama",
      "Tidak dapat dibandingkan"
     ],
     "b": 0,
     "u": "1/3 = 0.333... yang lebih besar sedikit daripada 0.3."
    },
    {
     "j": "pilih",
     "t": "Nombor manakah terletak di antara −1/2 dan −1/4?",
     "p": [
      "−5/8",
      "−3/8",
      "−7/8",
      "−1/8"
     ],
     "b": 1,
     "u": "−3/8 = −0.375, iaitu di antara −0.5 dan −0.25. Nombor lain di luar selang itu."
    },
    {
     "j": "nombor",
     "t": "Cari titik tengah (purata) bagi −0.7 dan 0.3.",
     "b": -0.2,
     "tol": 0.001,
     "u": "(−0.7 + 0.3) ÷ 2 = −0.4 ÷ 2 = −0.2."
    },
    {
     "j": "pilih",
     "t": "Adakah 0.333... (angka 3 berulang) nombor nisbah?",
     "p": [
      "Tidak, sebab tidak berhenti",
      "Tidak, sebab bukan integer",
      "Ya, sebab sama dengan 1/3",
      "Ya, sebab kurang daripada 1"
     ],
     "b": 2,
     "u": "Nombor nisbah ialah nombor yang boleh ditulis sebagai p/q. 0.333... = 1/3, jadi ia nombor nisbah."
    },
    {
     "j": "banyak",
     "t": "Pilih SEMUA nombor nisbah.",
     "p": [
      "−7",
      "0.25",
      "3/5",
      "5/0",
      "8/0"
     ],
     "b": [
      0,
      1,
      2
     ],
     "u": "−7 = −7/1, 0.25 = 1/4 dan 3/5 sudah dalam bentuk p/q. 5/0 dan 8/0 tidak tertakrif kerana penyebutnya sifar."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Reka satu masalah cerita yang memerlukan integer, pecahan dan perpuluhan dalam penyelesaiannya. Rujuk Rajah 1 untuk menukar pecahan kepada perpuluhan.",
    "arahan": "Tulis masalah cerita awak, kemudian selesaikan langkah demi langkah dan tunjukkan tertib operasi. Semak jawapan dengan garis nombor atau kaedah kedua.",
    "u": "Jawapan TP6 yang kukuh mencipta konteks yang munasabah, menggunakan integer, pecahan dan perpuluhan, mengikut tertib operasi dengan betul dan menyemak jawapan dengan kaedah lain."
   }
  }
 ]
};
