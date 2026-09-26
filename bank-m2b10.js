/* Bank soalan — Matematik Ting. 2 · Bab 10 Kecerunan Garis Lurus.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m2b10.js
   kemudian jalankan: node bina.js m2b10

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m2b10"] =
{
 "id": "m2b10",
 "tingkatan": 2,
 "kod": "10.0 Kecerunan Garis Lurus",
 "tajuk": "Lereng Bukit",
 "subtajuk": "Matematik Ting. 2 · Bab 10 Kecerunan Garis Lurus",
 "spi": [
  "Mempamerkan pengetahuan asas tentang kecerunan garis lurus.",
  "Mempamerkan kefahaman tentang kecerunan garis lurus.",
  "Mengaplikasikan kefahaman tentang kecerunan garis lurus untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kecerunan garis lurus dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kecerunan garis lurus dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kecerunan garis lurus dalam konteks penyelesaian masalah bukan rutin secara kreatif."
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
  "1": "{n} dapat menyebut maksud kecerunan sebagai jarak mencancang dibahagi jarak mengufuk, dan membezakan tanjakan yang curam daripada yang landai. Langkah seterusnya ialah memahami kesan tanda positif dan negatif.",
  "2": "{n} memahami bahawa nilai mutlak kecerunan menentukan kecuraman dan tanda menentukan arah, serta kecerunan sifar dan garis mencancang. Perlu lebih latihan sebelum bergerak ke pengiraan dengan koordinat.",
  "3": "{n} boleh mengira kecerunan garis yang melalui dua titik menggunakan rumus beza y dibahagi beza x, termasuk kes garis mengufuk dan mencancang. Galakkan menulis titik dalam urutan yang sama.",
  "4": "{n} mampu menyelesaikan masalah rutin yang mudah tentang kecerunan dalam situasi harian seperti tangga, bumbung dan jalan. Seterusnya latih penggunaan pintasan-x dan pintasan-y.",
  "5": "{n} dapat menyelesaikan masalah kompleks yang melibatkan kecerunan menggunakan pintasan dan koordinat. Sudah bersedia untuk masalah bukan rutin dan tugasan mereka cipta.",
  "6": "{n} berjaya mereka bentuk tanjakan, mengira kecerunannya dengan betul dan menerangkan sama ada ia selamat. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kecerunan Garis Lurus. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyebut jarak mencancang dan jarak mengufuk dengan bimbingan rakan sebaya."
 },
 "lampiran": {
  "cer1": "<figure class=\"figure jmi\" data-w=\"t2cerun\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2cerun&quot;,&quot;mod&quot;:&quot;tangga&quot;,&quot;n0&quot;:3,&quot;l0&quot;:3,&quot;kapsyen&quot;:&quot;Rajah 1 · Gerakkan jarak mencancang, jarak mengufuk dan arah. Perhatikan kecerunan tanjakan.&quot;,&quot;alt&quot;:&quot;Rajah interaktif tanjakan berbentuk segi tiga; gelongsor menukar jarak mencancang, jarak mengufuk dan arah naik atau turun, dan kecerunan dikira&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 232\" role=\"img\" aria-label=\"Rajah tanjakan yang naik 3 unit dan mengufuk 4 unit; kecerunan 3/4\"><line x1=\"26\" y1=\"146\" x2=\"246\" y2=\"146\" stroke=\"var(--ink3)\" stroke-width=\"2\" stroke-linecap=\"round\"></line><polygon points=\"56,146 116,146 116,101\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><line x1=\"56\" y1=\"146\" x2=\"116\" y2=\"101\" stroke=\"var(--vena)\" stroke-width=\"4\" stroke-linecap=\"round\"></line><rect x=\"107\" y=\"137\" width=\"9\" height=\"9\" rx=\"0\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></rect><text x=\"86\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">mengufuk 4</text><text x=\"124\" y=\"127.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" font-weight=\"700\">naik 3</text><text x=\"8\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">m = jarak mencancang / jarak mengufuk</text><text class=\"jmi-hasil\" x=\"8\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">m = 3 / 4 = 3/4</text><text class=\"jmi-hasil\" x=\"8\" y=\"220\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Naik ke kanan: m positif</text></svg></div><figcaption>Rajah 1 · Gerakkan jarak mencancang, jarak mengufuk dan arah. Perhatikan kecerunan tanjakan.</figcaption></figure>",
  "cer2": "<figure class=\"figure jmi\" data-w=\"t2cerun\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2cerun&quot;,&quot;mod&quot;:&quot;arah&quot;,&quot;m&quot;:[-3,-2,-1,-0.5,0,0.5,1,2,3],&quot;tegak&quot;:true,&quot;i0&quot;:7,&quot;kapsyen&quot;:&quot;Rajah 1 · Garis y = mx melalui asalan. Gerakkan gelongsor m dan perhatikan tanda serta kecuraman garis.&quot;,&quot;alt&quot;:&quot;Rajah interaktif satah Cartes dengan garis melalui asalan; gelongsor menukar kecerunan m daripada negatif tiga hingga tiga, dan garis mencancang&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 294\" role=\"img\" aria-label=\"Rajah garis y sama dengan 2 kali x melalui asalan; Positif: garis naik ke kanan\"><line x1=\"34\" y1=\"22\" x2=\"34\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"214\" x2=\"226\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"58\" y1=\"22\" x2=\"58\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"190\" x2=\"226\" y2=\"190\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"82\" y1=\"22\" x2=\"82\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"166\" x2=\"226\" y2=\"166\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"106\" y1=\"22\" x2=\"106\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"142\" x2=\"226\" y2=\"142\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"154\" y1=\"22\" x2=\"154\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"94\" x2=\"226\" y2=\"94\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"178\" y1=\"22\" x2=\"178\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"70\" x2=\"226\" y2=\"70\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"202\" y1=\"22\" x2=\"202\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"46\" x2=\"226\" y2=\"46\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"226\" y1=\"22\" x2=\"226\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"22\" x2=\"226\" y2=\"22\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"118\" x2=\"226\" y2=\"118\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"130\" y1=\"22\" x2=\"130\" y2=\"214\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><rect x=\"34\" y=\"22\" width=\"192\" height=\"192\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><text x=\"34\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-4</text><text x=\"82\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-2</text><text x=\"130\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><text x=\"178\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"226\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"28\" y=\"218\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-4</text><text x=\"28\" y=\"170\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-2</text><text x=\"28\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><text x=\"28\" y=\"26\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><text x=\"234\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" font-weight=\"700\">x</text><text x=\"130\" y=\"14\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">y</text><line x1=\"82\" y1=\"214\" x2=\"178\" y2=\"22\" stroke=\"var(--vena)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><line x1=\"130\" y1=\"118\" x2=\"154\" y2=\"118\" stroke=\"var(--teal)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><line x1=\"154\" y1=\"118\" x2=\"154\" y2=\"70\" stroke=\"var(--arteri)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><text x=\"142\" y=\"134\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">1</text><text x=\"162\" y=\"98\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" font-weight=\"700\">2</text><circle cx=\"130\" cy=\"118\" r=\"4\" fill=\"var(--surface)\" stroke=\"var(--ink)\" stroke-width=\"2\"></circle><text x=\"8\" y=\"248\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">y = 2x,  m = 2</text><text x=\"8\" y=\"266\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Positif: garis naik ke kanan</text><text x=\"8\" y=\"282\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">|m| = 2. Lebih besar = lebih curam.</text></svg></div><figcaption>Rajah 1 · Garis y = mx melalui asalan. Gerakkan gelongsor m dan perhatikan tanda serta kecuraman garis.</figcaption></figure>",
  "cer3": "<figure class=\"figure jmi\" data-w=\"t2cerun\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2cerun&quot;,&quot;mod&quot;:&quot;dua&quot;,&quot;A&quot;:[1,1],&quot;bx&quot;:[-4,-3,-2,-1,0,1,2,3,4],&quot;by&quot;:[-4,-3,-2,-1,0,1,2,3,4],&quot;p0&quot;:7,&quot;q0&quot;:8,&quot;kapsyen&quot;:&quot;Rajah 1 · Titik A(1, 1) tetap. Gerakkan titik B dan lihat naik, larian dan kecerunan garis AB.&quot;,&quot;alt&quot;:&quot;Rajah interaktif satah Cartes dengan titik A tetap dan titik B yang digerakkan dengan gelongsor; garis AB dan kecerunannya dikira&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 294\" role=\"img\" aria-label=\"Rajah satah Cartes. Garis melalui A(1, 1) dan B(3, 4); kecerunan 3/2\"><line x1=\"34\" y1=\"22\" x2=\"34\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"214\" x2=\"226\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"58\" y1=\"22\" x2=\"58\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"190\" x2=\"226\" y2=\"190\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"82\" y1=\"22\" x2=\"82\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"166\" x2=\"226\" y2=\"166\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"106\" y1=\"22\" x2=\"106\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"142\" x2=\"226\" y2=\"142\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"154\" y1=\"22\" x2=\"154\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"94\" x2=\"226\" y2=\"94\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"178\" y1=\"22\" x2=\"178\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"70\" x2=\"226\" y2=\"70\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"202\" y1=\"22\" x2=\"202\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"46\" x2=\"226\" y2=\"46\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"226\" y1=\"22\" x2=\"226\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"22\" x2=\"226\" y2=\"22\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"118\" x2=\"226\" y2=\"118\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"130\" y1=\"22\" x2=\"130\" y2=\"214\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><rect x=\"34\" y=\"22\" width=\"192\" height=\"192\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><text x=\"34\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-4</text><text x=\"82\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-2</text><text x=\"130\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><text x=\"178\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"226\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"28\" y=\"218\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-4</text><text x=\"28\" y=\"170\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-2</text><text x=\"28\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><text x=\"28\" y=\"26\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><text x=\"234\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" font-weight=\"700\">x</text><text x=\"130\" y=\"14\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">y</text><line x1=\"74\" y1=\"214\" x2=\"202\" y2=\"22\" stroke=\"var(--vena)\" stroke-width=\"2.5\" stroke-linecap=\"round\"></line><line class=\"jmi-hasil\" x1=\"154\" y1=\"94\" x2=\"202\" y2=\"94\" stroke=\"var(--teal)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><line class=\"jmi-hasil\" x1=\"202\" y1=\"94\" x2=\"202\" y2=\"22\" stroke=\"var(--arteri)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><circle cx=\"154\" cy=\"94\" r=\"5\" fill=\"var(--vena)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle cx=\"202\" cy=\"22\" r=\"5\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><text x=\"148\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"end\" font-weight=\"700\">A(1, 1)</text><text x=\"196\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" text-anchor=\"end\" font-weight=\"700\">B(3, 4)</text><text class=\"jmi-hasil\" x=\"8\" y=\"248\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" font-weight=\"700\">naik = 4 - 1 = 3</text><text class=\"jmi-hasil\" x=\"8\" y=\"264\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" font-weight=\"700\">larian = 3 - 1 = 2</text><text class=\"jmi-hasil\" x=\"8\" y=\"282\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">m = 3 / 2 = 3/2</text></svg></div><figcaption>Rajah 1 · Titik A(1, 1) tetap. Gerakkan titik B dan lihat naik, larian dan kecerunan garis AB.</figcaption></figure>",
  "cer4": "<figure class=\"figure jmi cabar\" data-w=\"t2cerun\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2cerun&quot;,&quot;mod&quot;:&quot;tangga&quot;,&quot;n0&quot;:3,&quot;l0&quot;:5,&quot;cabar&quot;:true,&quot;kapsyen&quot;:&quot;Rajah 1 · Tetapkan jarak mencancang dan jarak mengufuk. Kira kecerunan dahulu, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif tanjakan berbentuk segi tiga; gelongsor menukar jarak mencancang, jarak mengufuk dan arah, dan kecerunan dipaparkan selepas semakan&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 232\" role=\"img\" aria-label=\"Rajah tanjakan yang naik 3 unit dan mengufuk 6 unit; kecerunan 1/2\"><line x1=\"26\" y1=\"146\" x2=\"246\" y2=\"146\" stroke=\"var(--ink3)\" stroke-width=\"2\" stroke-linecap=\"round\"></line><polygon points=\"56,146 146,146 146,101\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><line x1=\"56\" y1=\"146\" x2=\"146\" y2=\"101\" stroke=\"var(--vena)\" stroke-width=\"4\" stroke-linecap=\"round\"></line><rect x=\"137\" y=\"137\" width=\"9\" height=\"9\" rx=\"0\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></rect><text x=\"101\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">mengufuk 6</text><text x=\"154\" y=\"127.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" font-weight=\"700\">naik 3</text><text x=\"8\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">m = jarak mencancang / jarak mengufuk</text><text class=\"jmi-hasil\" x=\"8\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">m = 3 / 6 = 1/2</text><text class=\"jmi-hasil\" x=\"8\" y=\"220\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Naik ke kanan: m positif</text></svg></div><figcaption>Rajah 1 · Tetapkan jarak mencancang dan jarak mengufuk. Kira kecerunan dahulu, kemudian semak dengan rajah.</figcaption></figure>",
  "cer5": "<figure class=\"figure jmi cabar\" data-w=\"t2cerun\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2cerun&quot;,&quot;mod&quot;:&quot;pintasan&quot;,&quot;ax&quot;:[-4,-3,-2,-1,1,2,3,4],&quot;by&quot;:[-4,-3,-2,-1,1,2,3,4],&quot;p0&quot;:5,&quot;q0&quot;:5,&quot;cabar&quot;:true,&quot;kapsyen&quot;:&quot;Rajah 1 · Garis melalui (pintasan-x, 0) dan (0, pintasan-y). Kira kecerunan dahulu, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif satah Cartes dengan garis melalui pintasan-x dan pintasan-y; gelongsor menukar kedua-dua pintasan dan kecerunan dipaparkan selepas semakan&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 294\" role=\"img\" aria-label=\"Rajah garis melalui (2, 0) dan (0, 2); kecerunan -1\"><line x1=\"34\" y1=\"22\" x2=\"34\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"214\" x2=\"226\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"58\" y1=\"22\" x2=\"58\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"190\" x2=\"226\" y2=\"190\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"82\" y1=\"22\" x2=\"82\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"166\" x2=\"226\" y2=\"166\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"106\" y1=\"22\" x2=\"106\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"142\" x2=\"226\" y2=\"142\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"154\" y1=\"22\" x2=\"154\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"94\" x2=\"226\" y2=\"94\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"178\" y1=\"22\" x2=\"178\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"70\" x2=\"226\" y2=\"70\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"202\" y1=\"22\" x2=\"202\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"46\" x2=\"226\" y2=\"46\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"226\" y1=\"22\" x2=\"226\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"22\" x2=\"226\" y2=\"22\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"118\" x2=\"226\" y2=\"118\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"130\" y1=\"22\" x2=\"130\" y2=\"214\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><rect x=\"34\" y=\"22\" width=\"192\" height=\"192\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><text x=\"34\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-4</text><text x=\"82\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-2</text><text x=\"130\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><text x=\"178\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"226\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"28\" y=\"218\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-4</text><text x=\"28\" y=\"170\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-2</text><text x=\"28\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><text x=\"28\" y=\"26\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><text x=\"234\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" font-weight=\"700\">x</text><text x=\"130\" y=\"14\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">y</text><line x1=\"226\" y1=\"166\" x2=\"82\" y2=\"22\" stroke=\"var(--vena)\" stroke-width=\"2.5\" stroke-linecap=\"round\"></line><circle cx=\"178\" cy=\"118\" r=\"5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle cx=\"130\" cy=\"70\" r=\"5\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><text x=\"178\" y=\"134\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">(2, 0)</text><text x=\"122\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" text-anchor=\"end\" font-weight=\"700\">(0, 2)</text><text x=\"8\" y=\"248\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">pintasan-x = 2,  pintasan-y = 2</text><text class=\"jmi-hasil\" x=\"8\" y=\"266\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">m = -(2) / 2 = -1</text><text class=\"jmi-hasil\" x=\"8\" y=\"282\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Negatif: garis turun ke kanan</text></svg></div><figcaption>Rajah 1 · Garis melalui (pintasan-x, 0) dan (0, pintasan-y). Kira kecerunan dahulu, kemudian semak dengan rajah.</figcaption></figure>",
  "cer6": "<figure class=\"figure jmi\" data-w=\"t2cerun\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2cerun&quot;,&quot;mod&quot;:&quot;dua&quot;,&quot;A&quot;:[-2,3],&quot;bx&quot;:[-4,-3,-2,-1,0,1,2,3,4],&quot;by&quot;:[-4,-3,-2,-1,0,1,2,3,4],&quot;p0&quot;:6,&quot;q0&quot;:3,&quot;kapsyen&quot;:&quot;Rajah 1 · Titik A(-2, 3) tetap. Gerakkan titik B untuk meneroka kecerunan garis AB.&quot;,&quot;alt&quot;:&quot;Rajah interaktif satah Cartes dengan titik A tetap pada negatif dua, tiga dan titik B yang digerakkan; kecerunan garis AB dikira&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 294\" role=\"img\" aria-label=\"Rajah satah Cartes. Garis melalui A(-2, 3) dan B(2, -1); kecerunan -1\"><line x1=\"34\" y1=\"22\" x2=\"34\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"214\" x2=\"226\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"58\" y1=\"22\" x2=\"58\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"190\" x2=\"226\" y2=\"190\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"82\" y1=\"22\" x2=\"82\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"166\" x2=\"226\" y2=\"166\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"106\" y1=\"22\" x2=\"106\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"142\" x2=\"226\" y2=\"142\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"154\" y1=\"22\" x2=\"154\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"94\" x2=\"226\" y2=\"94\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"178\" y1=\"22\" x2=\"178\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"70\" x2=\"226\" y2=\"70\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"202\" y1=\"22\" x2=\"202\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"46\" x2=\"226\" y2=\"46\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"226\" y1=\"22\" x2=\"226\" y2=\"214\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"22\" x2=\"226\" y2=\"22\" stroke=\"var(--line)\" stroke-width=\"1\"></line><line x1=\"34\" y1=\"118\" x2=\"226\" y2=\"118\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"130\" y1=\"22\" x2=\"130\" y2=\"214\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><rect x=\"34\" y=\"22\" width=\"192\" height=\"192\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><text x=\"34\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-4</text><text x=\"82\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">-2</text><text x=\"130\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><text x=\"178\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"226\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"28\" y=\"218\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-4</text><text x=\"28\" y=\"170\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">-2</text><text x=\"28\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><text x=\"28\" y=\"26\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><text x=\"234\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" font-weight=\"700\">x</text><text x=\"130\" y=\"14\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">y</text><line x1=\"58\" y1=\"22\" x2=\"226\" y2=\"190\" stroke=\"var(--vena)\" stroke-width=\"2.5\" stroke-linecap=\"round\"></line><line class=\"jmi-hasil\" x1=\"82\" y1=\"46\" x2=\"178\" y2=\"46\" stroke=\"var(--teal)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><line class=\"jmi-hasil\" x1=\"178\" y1=\"46\" x2=\"178\" y2=\"142\" stroke=\"var(--arteri)\" stroke-width=\"3\" stroke-linecap=\"round\"></line><circle cx=\"82\" cy=\"46\" r=\"5\" fill=\"var(--vena)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><circle cx=\"178\" cy=\"142\" r=\"5\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"1.5\"></circle><text x=\"88\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" font-weight=\"700\">A(-2, 3)</text><text x=\"172\" y=\"158\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" text-anchor=\"end\" font-weight=\"700\">B(2, -1)</text><text class=\"jmi-hasil\" x=\"8\" y=\"248\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" font-weight=\"700\">naik = -1 - 3 = -4</text><text class=\"jmi-hasil\" x=\"8\" y=\"264\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" font-weight=\"700\">larian = 2 - (-2) = 4</text><text class=\"jmi-hasil\" x=\"8\" y=\"282\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">m = -4 / 4 = -1</text></svg></div><figcaption>Rajah 1 · Titik A(-2, 3) tetap. Gerakkan titik B untuk meneroka kecerunan garis AB.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Tangga Curam",
   "sk": "10.1.1 Kecuraman, arah kecondongan dan maksud kecerunan",
   "lampiran": "cer1",
   "kadNama": "Kecerunan",
   "kadEm": "🪜",
   "kadFakta": "Kecerunan menunjukkan seberapa curam sesuatu permukaan. Semakin besar nilai kecerunan tanpa mengira tanda, semakin curam tanjakan itu.",
   "bosKadNama": "Landasan Rata",
   "bosKadEm": "🛤️",
   "bosKadFakta": "Landasan yang rata langsung tidak naik atau turun. Kecerunannya ialah sifar, kerana jarak mencancangnya sifar.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Antara tanjakan berikut, yang manakah PALING curam?",
     "p": [
      "Naik 6 m bagi setiap 2 m mengufuk",
      "Naik 2 m bagi setiap 6 m mengufuk",
      "Naik 3 m bagi setiap 6 m mengufuk",
      "Naik 2 m bagi setiap 4 m mengufuk"
     ],
     "b": 0,
     "u": "Bandingkan naik ÷ mengufuk: 6÷2 = 3, 2÷6 = 0.33, 3÷6 = 0.5 dan 2÷4 = 0.5. Nilai 3 paling besar, jadi tanjakan pertama paling curam."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, jarak dari bawah ke atas tanjakan (garis tegak berwarna merah) dipanggil:",
     "p": [
      "Jarak mengufuk",
      "Jarak mencancang",
      "Jarak mendatar tanjakan",
      "Jarak sisi tanjakan"
     ],
     "b": 1,
     "u": "Jarak yang diukur ke atas atau ke bawah dipanggil jarak mencancang. Jarak yang diukur ke tepi dipanggil jarak mengufuk."
    },
    {
     "j": "pilih",
     "t": "Kecerunan sesuatu tanjakan ialah nisbah:",
     "p": [
      "Jarak mengufuk kepada jarak mencancang",
      "Jarak mencancang campur jarak mengufuk",
      "Jarak mencancang kepada jarak mengufuk",
      "Jarak serong kepada jarak mengufuk"
     ],
     "b": 2,
     "u": "Kecerunan = jarak mencancang ÷ jarak mengufuk. Jarak serong (panjang tanjakan) tidak digunakan."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan jarak mencancang 4, jarak mengufuk 8 dan arah naik ke kanan. Berapakah kecerunan tanjakan itu (perpuluhan)?",
     "b": 0.5,
     "tol": 0.01,
     "u": "Kecerunan = 4 ÷ 8 = 0.5."
    },
    {
     "j": "pilih",
     "t": "Antara kecerunan 3, 1 dan 0.5, tanjakan yang manakah paling curam?",
     "p": [
      "Kecerunan 1",
      "Kecerunan 0.5",
      "Ketiga-tiganya sama curam",
      "Kecerunan 3"
     ],
     "b": 3,
     "u": "Semakin besar nilai kecerunan, semakin curam tanjakan itu. Nilai 3 paling besar."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tukar arah kepada 'turun ke kanan'. Apakah yang berlaku kepada tanda kecerunan?",
     "p": [
      "Menjadi negatif",
      "Kekal positif",
      "Menjadi sifar",
      "Menjadi tak tertakrif"
     ],
     "b": 0,
     "u": "Tanjakan yang turun apabila bergerak ke kanan mempunyai kecerunan negatif."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan jarak mencancang 0 dan jarak mengufuk 5. Berapakah kecerunan landasan rata itu?",
     "b": 0,
     "tol": 0.01,
     "u": "Kecerunan = 0 ÷ 5 = 0. Landasan rata tidak naik atau turun."
    },
    {
     "j": "susun",
     "t": "Susun langkah menentukan kecerunan tanjakan daripada rajah.",
     "p": [
      "Ukur jarak mencancang (naik atau turun)",
      "Ukur jarak mengufuk",
      "Bahagi jarak mencancang dengan jarak mengufuk",
      "Tulis tanda positif jika naik ke kanan, negatif jika turun"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Ukur kedua-dua jarak dahulu, bahagi, kemudian tulis tanda mengikut arah."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pernyataan yang BENAR tentang kecerunan.",
    "p": [
     "Kecerunan ialah jarak mencancang dibahagi jarak mengufuk",
     "Landasan rata mempunyai kecerunan sifar",
     "Tanjakan yang turun ke kanan mempunyai kecerunan negatif",
     "Kecerunan ialah jarak mengufuk dibahagi jarak mencancang",
     "Tanjakan yang lebih curam mempunyai kecerunan lebih kecil",
     "Kecerunan tidak pernah boleh negatif"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Kecerunan = mencancang ÷ mengufuk. Landasan rata bernilai 0, dan tanjakan yang turun ke kanan bernilai negatif. Tanjakan yang lebih curam mempunyai nilai mutlak lebih besar, dan kecerunan boleh negatif."
   }
  },
  {
   "n": 2,
   "tempat": "Papan Luncur",
   "sk": "10.1.3 Generalisasi tentang kecerunan garis lurus",
   "lampiran": "cer2",
   "kadNama": "Tanda Kecerunan",
   "kadEm": "🛹",
   "kadFakta": "Tanda positif atau negatif menunjukkan arah garis. Garis yang naik ke kanan bertanda positif, dan garis yang turun ke kanan bertanda negatif.",
   "bosKadNama": "Garis Mencancang",
   "bosKadEm": "📏",
   "bosKadFakta": "Garis yang lurus ke atas tidak bergerak ke tepi langsung. Jarak mengufuknya sifar, jadi kecerunannya tak tertakrif.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan m = 2. Apabila x = 1, berapakah nilai y pada garis itu?",
     "b": 2,
     "tol": 0.01,
     "u": "Pada garis y = 2x, apabila x = 1, y = 2 × 1 = 2. Ini ialah jarak mencancang bagi setiap 1 unit mengufuk."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan m = -3. Apabila x = 1, berapakah nilai y pada garis itu?",
     "b": -3,
     "tol": 0.01,
     "u": "Pada garis y = -3x, apabila x = 1, y = -3 × 1 = -3. Garis turun 3 unit bagi setiap 1 unit ke kanan."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, garis manakah yang paling curam?",
     "p": [
      "Garis dengan m = 2",
      "Garis dengan m = -3",
      "Garis dengan m = 0.5",
      "Garis dengan m = 1"
     ],
     "b": 1,
     "u": "Kecuraman bergantung pada nilai mutlak kecerunan. |-3| = 3 ialah yang paling besar, jadi garis m = -3 paling curam walaupun bertanda negatif."
    },
    {
     "j": "pilih",
     "t": "Tanda negatif pada kecerunan menunjukkan garis:",
     "p": [
      "Naik ke kanan",
      "Mendatar sahaja",
      "Turun ke kanan",
      "Mencancang sahaja"
     ],
     "b": 2,
     "u": "Kecerunan negatif bermaksud garis turun apabila bergerak dari kiri ke kanan."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan m = 0. Garis itu ialah:",
     "p": [
      "Garis mencancang",
      "Garis yang paling curam",
      "Garis yang turun ke kanan",
      "Garis mengufuk"
     ],
     "b": 3,
     "u": "Jika m = 0, garis tidak naik atau turun. Ia ialah garis mengufuk."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih 'tegak'. Kecerunan garis mencancang itu ialah:",
     "p": [
      "Tak tertakrif",
      "Sama dengan sifar",
      "Sama dengan satu",
      "Sama dengan negatif satu"
     ],
     "b": 0,
     "u": "Garis mencancang mempunyai jarak mengufuk 0. Pembahagian dengan 0 tidak tertakrif, jadi tiada nilai kecerunan."
    },
    {
     "j": "pilih",
     "t": "Antara kecerunan berikut, yang manakah menunjukkan garis TURUN yang paling landai?",
     "p": [
      "m = -3.0",
      "m = -0.5",
      "m = -2.0",
      "m = -1.5"
     ],
     "b": 1,
     "u": "Garis paling landai mempunyai nilai mutlak paling kecil. |-0.5| = 0.5 ialah yang terkecil."
    },
    {
     "j": "nombor",
     "t": "Garis y = mx mempunyai kecerunan m. Berapakah kecerunan garis y = -5x?",
     "b": -5,
     "tol": 0.01,
     "u": "Bagi garis y = mx, m ialah kecerunan. Dalam y = -5x, m = -5."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Mengapakah kecerunan ditakrifkan sebagai jarak mencancang kepada jarak mengufuk, dan bukan sebaliknya?",
    "p": [
     "Supaya garis yang lebih curam mempunyai nilai yang lebih kecil",
     "Supaya semua garis mempunyai kecerunan yang sama",
     "Supaya garis yang lebih curam mempunyai nilai yang lebih besar",
     "Supaya garis mengufuk tidak mempunyai nilai kecerunan"
    ],
    "b": 2,
    "u": "Jika mencancang ÷ mengufuk, garis yang lebih curam memberi nilai yang lebih besar. Garis mengufuk bernilai 0 dan hanya garis mencancang tak tertakrif. Jika terbalik, garis mengufuk pula tak tertakrif dan nilai mengecil apabila garis makin curam."
   }
  },
  {
   "n": 3,
   "tempat": "Peta Titik",
   "sk": "10.1.2 Rumus kecerunan pada satah Cartes",
   "lampiran": "cer3",
   "kadNama": "Beza Koordinat",
   "kadEm": "🗺️",
   "kadFakta": "Kecerunan dua titik dikira daripada beza koordinat y dibahagi beza koordinat x. Susunan titik mesti sama untuk kedua-dua beza.",
   "bosKadNama": "Garis Melalui Dua Titik",
   "bosKadEm": "📍",
   "bosKadFakta": "Hanya ada satu garis lurus yang melalui dua titik berlainan. Kecerunan garis itu sama tidak kira dua titik mana yang dipilih pada garis tersebut.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, A(1, 1). Tetapkan B(3, 4). Berapakah kecerunan garis AB (perpuluhan)?",
     "b": 1.5,
     "tol": 0.01,
     "u": "naik = 4 - 1 = 3 dan larian = 3 - 1 = 2. m = 3 ÷ 2 = 1.5."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, A(1, 1). Tetapkan B(4, -2). Berapakah kecerunan garis AB?",
     "b": -1,
     "tol": 0.01,
     "u": "naik = -2 - 1 = -3 dan larian = 4 - 1 = 3. m = -3 ÷ 3 = -1."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, A(1, 1). Tetapkan B(-1, -3). Berapakah kecerunan garis AB?",
     "b": 2,
     "tol": 0.01,
     "u": "naik = -3 - 1 = -4 dan larian = -1 - 1 = -2. m = -4 ÷ -2 = 2."
    },
    {
     "j": "pilih",
     "t": "Rumus kecerunan garis yang melalui (x1, y1) dan (x2, y2) ialah:",
     "p": [
      "m = (x2 − x1) ÷ (y2 − y1)",
      "m = (y2 + y1) ÷ (x2 + x1)",
      "m = (y2 − y1) × (x2 − x1)",
      "m = (y2 − y1) ÷ (x2 − x1)"
     ],
     "b": 3,
     "u": "Kecerunan = beza y ÷ beza x, iaitu (y2 − y1) ÷ (x2 − x1)."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, A(1, 1). Tetapkan B(1, 4). Garis AB ialah:",
     "p": [
      "Mencancang, kecerunan tak tertakrif",
      "Mengufuk, kecerunan bernilai sifar",
      "Condong ke atas, kecerunan positif",
      "Condong ke bawah, kecerunan negatif"
     ],
     "b": 0,
     "u": "A dan B mempunyai x yang sama, jadi larian = 0. Garis itu mencancang dan kecerunannya tak tertakrif."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, A(1, 1). Tetapkan B(3, 1). Kecerunan garis AB ialah:",
     "p": [
      "Tak tertakrif",
      "0",
      "2",
      "1"
     ],
     "b": 1,
     "u": "A dan B mempunyai y yang sama, jadi naik = 0. Kecerunan = 0 ÷ 2 = 0, iaitu garis mengufuk."
    },
    {
     "j": "nombor",
     "t": "Garis melalui P(2, 5) dan Q(4, 1). Berapakah kecerunannya?",
     "b": -2,
     "tol": 0.01,
     "u": "naik = 1 - 5 = -4 dan larian = 4 - 2 = 2. m = -4 ÷ 2 = -2."
    },
    {
     "j": "susun",
     "t": "Susun langkah mencari kecerunan garis yang melalui dua titik.",
     "p": [
      "Tulis koordinat kedua-dua titik",
      "Cari beza y (naik atau turun)",
      "Cari beza x dengan urutan titik yang sama",
      "Bahagi beza y dengan beza x"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Tulis titik, cari beza y dan beza x dalam urutan yang sama, kemudian bahagi."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Garis melalui A(-3, 2) dan B(5, -2). Berapakah kecerunan garis itu (perpuluhan)?",
    "b": -0.5,
    "tol": 0.01,
    "u": "naik = -2 - 2 = -4 dan larian = 5 - (-3) = 8. m = -4 ÷ 8 = -0.5."
   }
  },
  {
   "n": 4,
   "tempat": "Tangga Rumah",
   "sk": "10.1.4 Menentukan kecerunan dalam situasi kehidupan",
   "lampiran": "cer4",
   "kadNama": "Sudut Bumbung",
   "kadEm": "🏠",
   "kadFakta": "Kecerunan bumbung menentukan kelajuan air hujan mengalir turun. Bumbung yang terlalu landai boleh menakung air.",
   "bosKadNama": "Jalan Menurun",
   "bosKadEm": "⛰️",
   "bosKadFakta": "Papan tanda jalan menurun kadang-kadang menunjukkan peratusan. Kecerunan 0.1 sama dengan 10 peratus, iaitu turun 10 unit bagi setiap 100 unit mengufuk.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Sebuah tangga rumah naik 3 m bagi setiap 4 m mengufuk. Berapakah kecerunannya (perpuluhan)?",
     "b": 0.75,
     "tol": 0.01,
     "u": "Kecerunan = 3 ÷ 4 = 0.75."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan jarak mencancang 6, jarak mengufuk 4 dan arah naik ke kanan. Berapakah kecerunan (perpuluhan)?",
     "b": 1.5,
     "tol": 0.01,
     "u": "Kecerunan = 6 ÷ 4 = 1.5."
    },
    {
     "j": "nombor",
     "t": "Sebatang jalan turun 20 m sepanjang 100 m mengufuk (turun ke kanan). Berapakah kecerunannya?",
     "b": -0.2,
     "tol": 0.01,
     "u": "Jalan itu turun, jadi jarak mencancang ialah -20. Kecerunan = -20 ÷ 100 = -0.2."
    },
    {
     "j": "nombor",
     "t": "Sebuah bumbung naik 1.5 m bagi setiap 3 m mengufuk. Berapakah kecerunan bumbung itu?",
     "b": 0.5,
     "tol": 0.01,
     "u": "Kecerunan = 1.5 ÷ 3 = 0.5."
    },
    {
     "j": "nombor",
     "t": "Sebuah bukit naik 150 m sepanjang 600 m mengufuk. Berapakah kecerunannya (perpuluhan)?",
     "b": 0.25,
     "tol": 0.01,
     "u": "Kecerunan = 150 ÷ 600 = 0.25."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tetapkan jarak mencancang 4, jarak mengufuk 2 dan arah naik ke kanan. Kecerunan tanjakan itu ialah:",
     "p": [
      "0.5",
      "4",
      "2",
      "6"
     ],
     "b": 2,
     "u": "Kecerunan = 4 ÷ 2 = 2. Nilai 0.5 diperoleh jika jarak dibahagi terbalik."
    },
    {
     "j": "pilih",
     "t": "Tangga P naik 4 m dalam 5 m mengufuk. Tangga Q naik 3 m dalam 4 m mengufuk. Tangga manakah lebih curam?",
     "p": [
      "Tangga Q",
      "Kedua-duanya sama curam",
      "Tidak dapat ditentukan",
      "Tangga P"
     ],
     "b": 3,
     "u": "Kecerunan P = 4 ÷ 5 = 0.8 dan kecerunan Q = 3 ÷ 4 = 0.75. Nilai 0.8 lebih besar, jadi tangga P lebih curam."
    },
    {
     "j": "pilih",
     "t": "Kecerunan sebuah tanjakan ialah 1/5. Ini bermaksud:",
     "p": [
      "Naik 1 unit bagi setiap 5 unit mengufuk",
      "Naik 5 unit bagi setiap 1 unit mengufuk",
      "Naik 1 unit bagi setiap 1 unit mengufuk",
      "Turun 1 unit bagi setiap 5 unit mengufuk"
     ],
     "b": 0,
     "u": "Kecerunan 1/5 = jarak mencancang ÷ jarak mengufuk, iaitu naik 1 bagi setiap 5 mengufuk. Kecerunan positif bermaksud naik."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Sebatang jalan menurun 30 m dan panjang mengufuknya 250 m. Berapakah kecerunan jalan itu (perpuluhan, turun ke kanan)?",
    "b": -0.12,
    "tol": 0.01,
    "u": "Jalan menurun, jadi jarak mencancang ialah -30. Kecerunan = -30 ÷ 250 = -0.12."
   }
  },
  {
   "n": 5,
   "tempat": "Garis Pintasan",
   "sk": "10.1.2 / 10.1.5 Kecerunan menggunakan pintasan, masalah kompleks",
   "lampiran": "cer5",
   "kadNama": "Pintasan",
   "kadEm": "✂️",
   "kadFakta": "Pintasan-x ialah titik garis memotong paksi-x, dan pintasan-y ialah titik garis memotong paksi-y. Kedua-dua titik ini cukup untuk mencari kecerunan.",
   "bosKadNama": "Negatif Depan",
   "bosKadEm": "➕",
   "bosKadFakta": "Dalam rumus kecerunan menggunakan pintasan, tanda negatif di hadapan mesti disertakan. Tanpa tanda itu, arah garis akan menjadi terbalik.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan pintasan-x = 2 dan pintasan-y = 4. Berapakah kecerunan garis itu?",
     "b": -2,
     "tol": 0.01,
     "u": "m = -(pintasan-y) ÷ (pintasan-x) = -4 ÷ 2 = -2."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan pintasan-x = -2 dan pintasan-y = 4. Berapakah kecerunan garis itu?",
     "b": 2,
     "tol": 0.01,
     "u": "m = -4 ÷ (-2) = 2."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan pintasan-x = 4 dan pintasan-y = -2. Berapakah kecerunan garis itu (perpuluhan)?",
     "b": 0.5,
     "tol": 0.01,
     "u": "m = -(-2) ÷ 4 = 2 ÷ 4 = 0.5."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan pintasan-x = -4 dan pintasan-y = -3. Berapakah kecerunan garis itu (perpuluhan)?",
     "b": -0.75,
     "tol": 0.01,
     "u": "m = -(-3) ÷ (-4) = 3 ÷ (-4) = -0.75."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pintasan-x = 3 dan pintasan-y = 3. Garis itu:",
     "p": [
      "Naik ke kanan, kecerunan 1",
      "Turun, kecerunan -1",
      "Turun ke kanan, kecerunan -3",
      "Mengufuk, kecerunan 0"
     ],
     "b": 1,
     "u": "m = -3 ÷ 3 = -1. Kecerunan negatif bermaksud garis turun ke kanan."
    },
    {
     "j": "pilih",
     "t": "Rumus kecerunan menggunakan pintasan-x dan pintasan-y ialah:",
     "p": [
      "m = (pintasan-y) ÷ (pintasan-x)",
      "m = -(pintasan-x) ÷ (pintasan-y)",
      "m = -(pintasan-y) ÷ (pintasan-x)",
      "m = (pintasan-x) × (pintasan-y)"
     ],
     "b": 2,
     "u": "Garis melalui (pintasan-x, 0) dan (0, pintasan-y). Naiknya ialah pintasan-y dan larian ialah -(pintasan-x), jadi m = -(pintasan-y) ÷ (pintasan-x)."
    },
    {
     "j": "nombor",
     "t": "Sebuah garis memotong paksi-x pada (6, 0) dan paksi-y pada (0, 3). Berapakah kecerunannya?",
     "b": -0.5,
     "tol": 0.01,
     "u": "m = (3 - 0) ÷ (0 - 6) = 3 ÷ (-6) = -0.5."
    },
    {
     "j": "nombor",
     "t": "Garis melalui (0, 8) dan (4, 0). Berapakah kecerunannya?",
     "b": -2,
     "tol": 0.01,
     "u": "m = (0 - 8) ÷ (4 - 0) = -8 ÷ 4 = -2."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Garis melalui titik (0, -6) dan (-4, 0). Berapakah kecerunannya (perpuluhan)?",
    "b": -1.5,
    "tol": 0.01,
    "u": "m = (0 - (-6)) ÷ (-4 - 0) = 6 ÷ (-4) = -1.5."
   }
  },
  {
   "n": 6,
   "tempat": "Studio Reka",
   "sk": "10.1.5 Masalah bukan rutin yang melibatkan kecerunan",
   "lampiran": "cer6",
   "kadNama": "Titik Segaris",
   "kadEm": "📊",
   "kadFakta": "Tiga titik berada pada satu garis lurus jika kecerunan antara dua pasangan titik itu sama.",
   "bosKadNama": "Reka Selamat",
   "bosKadEm": "✏️",
   "bosKadFakta": "Pereka landai yang selamat memilih kecerunan yang tidak terlalu curam. Semakin landai, semakin mudah dilalui tetapi semakin panjang ruang yang diperlukan.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, A(-2, 3). Tetapkan B(2, -1). Berapakah kecerunan garis AB?",
     "b": -1,
     "tol": 0.01,
     "u": "naik = -1 - 3 = -4 dan larian = 2 - (-2) = 4. m = -4 ÷ 4 = -1."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, A(-2, 3). Tetapkan B(-1, -3). Berapakah kecerunan garis AB?",
     "b": -6,
     "tol": 0.01,
     "u": "naik = -3 - 3 = -6 dan larian = -1 - (-2) = 1. m = -6 ÷ 1 = -6."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, A(-2, 3). Tetapkan B(-2, -1). Apakah kecerunan garis AB?",
     "p": [
      "Sama dengan sifar",
      "Sama dengan -1",
      "Sama dengan 4",
      "Tak tertakrif"
     ],
     "b": 3,
     "u": "A dan B mempunyai x yang sama, jadi larian = 0. Garis mencancang tidak mempunyai kecerunan yang tertakrif."
    },
    {
     "j": "nombor",
     "t": "Titik P(1, 2) dan Q(k, 8). Kecerunan garis PQ ialah 3. Cari nilai k.",
     "b": 3,
     "tol": 0.01,
     "u": "(8 - 2) ÷ (k - 1) = 3. Maka 6 = 3(k - 1), k - 1 = 2 dan k = 3."
    },
    {
     "j": "nombor",
     "t": "Garis melalui A(2, 1) dan B(6, h) mempunyai kecerunan 0.5. Cari nilai h.",
     "b": 3,
     "tol": 0.01,
     "u": "(h - 1) ÷ (6 - 2) = 0.5. Maka h - 1 = 0.5 × 4 = 2 dan h = 3."
    },
    {
     "j": "pilih",
     "t": "Tiga titik A(1, 1), B(3, 2) dan C(5, 3). Adakah ketiga-tiga titik itu segaris?",
     "p": [
      "Ya, kecerunan AB sama dengan kecerunan BC",
      "Tidak, kecerunan AB tidak sama dengan BC",
      "Ya, kerana semua koordinat x ialah nombor ganjil",
      "Tidak, kerana koordinat y semuanya berbeza"
     ],
     "b": 0,
     "u": "Kecerunan AB = (2 - 1) ÷ (3 - 1) = 0.5 dan kecerunan BC = (3 - 2) ÷ (5 - 3) = 0.5. Kedua-duanya sama, jadi titik-titik itu segaris."
    },
    {
     "j": "pilih",
     "t": "Seorang murid mengira kecerunan A(1, 2) dan B(3, 8) sebagai 2/6. Apakah kesilapannya?",
     "p": [
      "Dia menolak koordinat dengan urutan berbeza",
      "Dia membahagi jarak mengufuk dengan mencancang",
      "Dia menambah koordinat, bukan menolaknya",
      "Tiada kesilapan, jawapan 2/6 itu betul"
     ],
     "b": 1,
     "u": "Jarak mencancang ialah 8 - 2 = 6 dan jarak mengufuk ialah 3 - 1 = 2. Kecerunan betul ialah 6 ÷ 2 = 3. Murid itu mengira 2 ÷ 6, iaitu terbalik."
    },
    {
     "j": "pilih",
     "t": "Garis dengan kecerunan -2 melalui A(0, 5). Antara titik berikut, yang manakah juga terletak pada garis itu?",
     "p": [
      "(2, 9)",
      "(1, 7)",
      "(2, 1)",
      "(3, 1)"
     ],
     "b": 2,
     "u": "Kecerunan dari A(0, 5) ke (2, 1) ialah (1 - 5) ÷ 2 = -2. Titik lain memberi kecerunan +2 atau -4/3."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Reka satu tanjakan (contohnya laluan basikal, bumbung atau tangga) untuk kawasan sekolah awak.",
    "arahan": "Nyatakan jarak mencancang dan jarak mengufuk yang awak pilih, kira kecerunannya, dan terangkan sama ada tanjakan itu curam atau landai. Cadangkan satu cara mengubah reka bentuk supaya kecerunannya lebih selamat.",
    "u": "Jawapan TP6 yang kukuh memilih ukuran yang munasabah, mengira kecerunan dengan betul (mencancang dibahagi mengufuk), mentafsir nilai itu dengan sesuai, dan mencadangkan perubahan yang jelas, contohnya menambah jarak mengufuk untuk mengurangkan kecerunan."
   }
  }
 ]
};
