/* Bank soalan — Matematik Ting. 4 · Bab 6 Ketaksamaan Linear dalam Dua Pemboleh Ubah.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m4b6.js
   kemudian jalankan: node bina.js m4b6

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 4, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m4b6"] =
{
 "id": "m4b6",
 "tingkatan": 4,
 "kod": "6.0 Ketaksamaan Linear dalam Dua Pemboleh Ubah",
 "tajuk": "Ladang Rantau",
 "subtajuk": "Matematik Ting. 4 · Bab 6 Ketaksamaan Linear dalam Dua Pemboleh Ubah",
 "spi": [
  "Mempamerkan pengetahuan asas tentang ketaksamaan linear dalam dua pemboleh ubah.",
  "Mempamerkan kefahaman tentang ketaksamaan linear dalam dua pemboleh ubah.",
  "Mengaplikasikan kefahaman tentang ketaksamaan linear dalam dua pemboleh ubah untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sistem ketaksamaan linear dalam dua pemboleh ubah dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sistem ketaksamaan linear dalam dua pemboleh ubah dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang sistem ketaksamaan linear dalam dua pemboleh ubah dalam konteks penyelesaian masalah bukan rutin secara kreatif."
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
  "1": "{n} dapat mewakilkan situasi mudah dalam bentuk ketaksamaan linear dalam dua pemboleh ubah dengan tanda yang betul. Langkah seterusnya ialah menentukan rantau dan titik yang memenuhinya.",
  "2": "{n} memahami cara menentukan rantau bagi satu ketaksamaan linear dengan titik ujian, serta membezakan garis penuh dan garis putus-putus. Perlu lebih latihan sistem ketaksamaan.",
  "3": "{n} boleh mewakilkan situasi dengan sistem ketaksamaan linear dan menentukan sama ada sesuatu titik berada dalam rantau sepunya.",
  "4": "{n} mampu melorek rantau bagi sistem ketaksamaan, mencari bucu dan luasnya, serta menyelesaikan masalah rutin yang mudah. Seterusnya, latih masalah kekangan dengan fungsi objektif.",
  "5": "{n} dapat menyelesaikan masalah rutin yang kompleks seperti untung maksimum dengan beberapa kekangan dan titik integer. Sudah bersedia untuk masalah bukan rutin.",
  "6": "{n} berjaya mereka masalah pengoptimuman sendiri, menyelesaikannya dengan rantau sepunya, dan menganalisis kesan perubahan kekangan. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Ketaksamaan Linear dalam Dua Pemboleh Ubah. Cadangan: ulang hentian pertama dengan Rajah 1 dan uji beberapa titik dengan menggantikan nilai x dan y bersama rakan sebaya."
 },
 "lampiran": {
  "r1": "<figure class=\"figure jmi\" data-w=\"t4rantau\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4rantau&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Pilih ketaksamaan, perhatikan garis dan rantau berlorek, kemudian gerakkan P.&quot;,&quot;alt&quot;:&quot;Rajah interaktif satah Cartes dengan empat ketaksamaan x + y berbanding 6; cip memilih tanda dan gelongsor menggerakkan titik P&quot;,&quot;mod&quot;:&quot;satu&quot;,&quot;senarai&quot;:[{&quot;a&quot;:1,&quot;b&quot;:1,&quot;c&quot;:6,&quot;s&quot;:&quot;≥&quot;},{&quot;a&quot;:1,&quot;b&quot;:1,&quot;c&quot;:6,&quot;s&quot;:&quot;&gt;&quot;},{&quot;a&quot;:1,&quot;b&quot;:1,&quot;c&quot;:6,&quot;s&quot;:&quot;≤&quot;},{&quot;a&quot;:1,&quot;b&quot;:1,&quot;c&quot;:6,&quot;s&quot;:&quot;&lt;&quot;}],&quot;julat&quot;:[0,10,0,10],&quot;P&quot;:[2,2]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 318\" role=\"img\" aria-label=\"Rajah satah Cartes dengan rantau x + y ≥ 6 dilorek dan titik P(2, 2)\"><path class=\"jmi-hasil\" d=\"M162.4 216 L244 216 L244 46 L40 46 L40 114 Z\" fill=\"var(--amber)\" fill-opacity=\"0.3\" stroke=\"none\"></path><rect x=\"40\" y=\"46\" width=\"204\" height=\"170\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"40\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"60.4\" y1=\"46\" x2=\"60.4\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"60.4\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><line x1=\"80.8\" y1=\"46\" x2=\"80.8\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"80.8\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"101.2\" y1=\"46\" x2=\"101.2\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"101.2\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><line x1=\"121.6\" y1=\"46\" x2=\"121.6\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"121.6\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><line x1=\"142\" y1=\"46\" x2=\"142\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"142\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><line x1=\"162.4\" y1=\"46\" x2=\"162.4\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"162.4\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><line x1=\"182.8\" y1=\"46\" x2=\"182.8\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"182.8\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">7</text><line x1=\"203.2\" y1=\"46\" x2=\"203.2\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"203.2\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">8</text><line x1=\"223.6\" y1=\"46\" x2=\"223.6\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"223.6\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">9</text><text x=\"244\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">10</text><line x1=\"40\" y1=\"199\" x2=\"244\" y2=\"199\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"203\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><line x1=\"40\" y1=\"182\" x2=\"244\" y2=\"182\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><line x1=\"40\" y1=\"165\" x2=\"244\" y2=\"165\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"169\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">3</text><line x1=\"40\" y1=\"148\" x2=\"244\" y2=\"148\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"152\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><line x1=\"40\" y1=\"131\" x2=\"244\" y2=\"131\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"135\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><line x1=\"40\" y1=\"114\" x2=\"244\" y2=\"114\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"118\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">6</text><line x1=\"40\" y1=\"97\" x2=\"244\" y2=\"97\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"101\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">7</text><line x1=\"40\" y1=\"80\" x2=\"244\" y2=\"80\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"84\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">8</text><line x1=\"40\" y1=\"63\" x2=\"244\" y2=\"63\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"67\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">9</text><text x=\"35\" y=\"50\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">10</text><line x1=\"40\" y1=\"216\" x2=\"244\" y2=\"216\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"40\" y1=\"46\" x2=\"40\" y2=\"216\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"244\" y=\"244\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" text-anchor=\"end\" font-weight=\"700\">x</text><text x=\"10\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" font-weight=\"700\">y</text><line x1=\"40\" y1=\"114\" x2=\"162.4\" y2=\"216\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></line><circle cx=\"80.8\" cy=\"182\" r=\"6\" fill=\"var(--arteri)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"></circle><text x=\"88.8\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">P</text><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Rantau x + y ≥ 6</text><text x=\"8\" y=\"264\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">P(2, 2)</text><line x1=\"10\" y1=\"282\" x2=\"26\" y2=\"282\" stroke=\"var(--vena)\" stroke-width=\"3\"></line><text x=\"32\" y=\"286\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">x + y ≥ 6</text><text class=\"jmi-hasil\" x=\"250\" y=\"286\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" text-anchor=\"end\" font-weight=\"700\">✗</text><text class=\"jmi-hasil\" x=\"8\" y=\"308\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">P di luar rantau</text></svg></div><figcaption>Rajah 1 · Pilih ketaksamaan, perhatikan garis dan rantau berlorek, kemudian gerakkan P.</figcaption></figure>",
  "r2": "<figure class=\"figure jmi\" data-w=\"t4rantau\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4rantau&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Empat ketaksamaan. Pilih satu dan uji titik P(x, y).&quot;,&quot;alt&quot;:&quot;Rajah interaktif satah Cartes dengan ketaksamaan y ≥ 2x − 1, y kurang daripada x + 2, x ≤ 3 dan y lebih daripada −x + 4; cip memilih ketaksamaan dan gelongsor menggerakkan titik P&quot;,&quot;mod&quot;:&quot;satu&quot;,&quot;senarai&quot;:[{&quot;a&quot;:-2,&quot;b&quot;:1,&quot;c&quot;:-1,&quot;s&quot;:&quot;≥&quot;,&quot;y&quot;:true},{&quot;a&quot;:-1,&quot;b&quot;:1,&quot;c&quot;:2,&quot;s&quot;:&quot;&lt;&quot;,&quot;y&quot;:true},{&quot;a&quot;:1,&quot;b&quot;:0,&quot;c&quot;:3,&quot;s&quot;:&quot;≤&quot;},{&quot;a&quot;:1,&quot;b&quot;:1,&quot;c&quot;:4,&quot;s&quot;:&quot;&gt;&quot;,&quot;y&quot;:true}],&quot;julat&quot;:[-3,6,-3,7],&quot;P&quot;:[1,3]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 318\" role=\"img\" aria-label=\"Rajah satah Cartes dengan rantau y ≥ 2x − 1 dilorek dan titik P(1, 3)\"><path class=\"jmi-hasil\" d=\"M40 216 L85.3 216 L198.7 46 L40 46 Z\" fill=\"var(--amber)\" fill-opacity=\"0.3\" stroke=\"none\"></path><rect x=\"40\" y=\"46\" width=\"204\" height=\"170\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"40\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−3</text><line x1=\"62.7\" y1=\"46\" x2=\"62.7\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"62.7\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−2</text><line x1=\"85.3\" y1=\"46\" x2=\"85.3\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"85.3\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−1</text><line x1=\"108\" y1=\"46\" x2=\"108\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"108\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"130.7\" y1=\"46\" x2=\"130.7\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"130.7\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><line x1=\"153.3\" y1=\"46\" x2=\"153.3\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"153.3\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"176\" y1=\"46\" x2=\"176\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"176\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><line x1=\"198.7\" y1=\"46\" x2=\"198.7\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"198.7\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><line x1=\"221.3\" y1=\"46\" x2=\"221.3\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"221.3\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><text x=\"244\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><line x1=\"40\" y1=\"199\" x2=\"244\" y2=\"199\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"203\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−2</text><line x1=\"40\" y1=\"182\" x2=\"244\" y2=\"182\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−1</text><line x1=\"40\" y1=\"165\" x2=\"244\" y2=\"165\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"169\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><line x1=\"40\" y1=\"148\" x2=\"244\" y2=\"148\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"152\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><line x1=\"40\" y1=\"131\" x2=\"244\" y2=\"131\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"135\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><line x1=\"40\" y1=\"114\" x2=\"244\" y2=\"114\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"118\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">3</text><line x1=\"40\" y1=\"97\" x2=\"244\" y2=\"97\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"101\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><line x1=\"40\" y1=\"80\" x2=\"244\" y2=\"80\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"84\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><line x1=\"40\" y1=\"63\" x2=\"244\" y2=\"63\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"67\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">6</text><text x=\"35\" y=\"50\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">7</text><line x1=\"40\" y1=\"165\" x2=\"244\" y2=\"165\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"108\" y1=\"46\" x2=\"108\" y2=\"216\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"244\" y=\"244\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" text-anchor=\"end\" font-weight=\"700\">x</text><text x=\"10\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" font-weight=\"700\">y</text><line x1=\"85.3\" y1=\"216\" x2=\"198.7\" y2=\"46\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></line><circle cx=\"130.7\" cy=\"114\" r=\"6\" fill=\"var(--teal)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"></circle><text x=\"138.7\" y=\"106\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">P</text><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Rantau y ≥ 2x − 1</text><text x=\"8\" y=\"264\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">P(1, 3)</text><line x1=\"10\" y1=\"282\" x2=\"26\" y2=\"282\" stroke=\"var(--vena)\" stroke-width=\"3\"></line><text x=\"32\" y=\"286\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">y ≥ 2x − 1</text><text class=\"jmi-hasil\" x=\"250\" y=\"286\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">✓</text><text class=\"jmi-hasil\" x=\"8\" y=\"308\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" font-weight=\"700\">P dalam rantau</text></svg></div><figcaption>Rajah 1 · Empat ketaksamaan. Pilih satu dan uji titik P(x, y).</figcaption></figure>",
  "r3": "<figure class=\"figure jmi\" data-w=\"t4rantau\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4rantau&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Rantau sepunya bagi empat ketaksamaan. Gerakkan P dan semak setiap ketaksamaan.&quot;,&quot;alt&quot;:&quot;Rajah interaktif rantau sepunya bagi y ≥ x, x + y ≤ 8, y ≤ 6 dan x ≥ 1; gelongsor menggerakkan titik P dan setiap ketaksamaan ditanda betul atau salah&quot;,&quot;mod&quot;:&quot;sistem&quot;,&quot;sistem&quot;:[{&quot;nama&quot;:&quot;Sistem 1&quot;,&quot;ket&quot;:[{&quot;a&quot;:-1,&quot;b&quot;:1,&quot;c&quot;:0,&quot;s&quot;:&quot;≥&quot;,&quot;y&quot;:true},{&quot;a&quot;:1,&quot;b&quot;:1,&quot;c&quot;:8,&quot;s&quot;:&quot;≤&quot;},{&quot;a&quot;:0,&quot;b&quot;:1,&quot;c&quot;:6,&quot;s&quot;:&quot;≤&quot;},{&quot;a&quot;:1,&quot;b&quot;:0,&quot;c&quot;:1,&quot;s&quot;:&quot;≥&quot;}]}],&quot;julat&quot;:[0,10,0,10],&quot;P&quot;:[2,4]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 372\" role=\"img\" aria-label=\"Rajah satah Cartes dengan rantau y ≥ x, x + y ≤ 8, y ≤ 6, x ≥ 1 dilorek dan titik P(2, 4)\"><path class=\"jmi-hasil\" d=\"M60.4 199 L121.6 148 L80.8 114 L60.4 114 Z\" fill=\"var(--amber)\" fill-opacity=\"0.3\" stroke=\"none\"></path><rect x=\"40\" y=\"46\" width=\"204\" height=\"170\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"40\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"60.4\" y1=\"46\" x2=\"60.4\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"60.4\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><line x1=\"80.8\" y1=\"46\" x2=\"80.8\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"80.8\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"101.2\" y1=\"46\" x2=\"101.2\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"101.2\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><line x1=\"121.6\" y1=\"46\" x2=\"121.6\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"121.6\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><line x1=\"142\" y1=\"46\" x2=\"142\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"142\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><line x1=\"162.4\" y1=\"46\" x2=\"162.4\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"162.4\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><line x1=\"182.8\" y1=\"46\" x2=\"182.8\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"182.8\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">7</text><line x1=\"203.2\" y1=\"46\" x2=\"203.2\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"203.2\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">8</text><line x1=\"223.6\" y1=\"46\" x2=\"223.6\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"223.6\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">9</text><text x=\"244\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">10</text><line x1=\"40\" y1=\"199\" x2=\"244\" y2=\"199\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"203\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><line x1=\"40\" y1=\"182\" x2=\"244\" y2=\"182\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><line x1=\"40\" y1=\"165\" x2=\"244\" y2=\"165\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"169\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">3</text><line x1=\"40\" y1=\"148\" x2=\"244\" y2=\"148\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"152\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><line x1=\"40\" y1=\"131\" x2=\"244\" y2=\"131\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"135\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><line x1=\"40\" y1=\"114\" x2=\"244\" y2=\"114\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"118\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">6</text><line x1=\"40\" y1=\"97\" x2=\"244\" y2=\"97\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"101\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">7</text><line x1=\"40\" y1=\"80\" x2=\"244\" y2=\"80\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"84\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">8</text><line x1=\"40\" y1=\"63\" x2=\"244\" y2=\"63\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"67\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">9</text><text x=\"35\" y=\"50\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">10</text><line x1=\"40\" y1=\"216\" x2=\"244\" y2=\"216\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"40\" y1=\"46\" x2=\"40\" y2=\"216\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"244\" y=\"244\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" text-anchor=\"end\" font-weight=\"700\">x</text><text x=\"10\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" font-weight=\"700\">y</text><line x1=\"40\" y1=\"216\" x2=\"244\" y2=\"46\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></line><line x1=\"40\" y1=\"80\" x2=\"203.2\" y2=\"216\" stroke=\"var(--teal)\" stroke-width=\"2.5\"></line><line x1=\"40\" y1=\"114\" x2=\"244\" y2=\"114\" stroke=\"var(--arteri)\" stroke-width=\"2.5\"></line><line x1=\"60.4\" y1=\"216\" x2=\"60.4\" y2=\"46\" stroke=\"var(--amber)\" stroke-width=\"2.5\"></line><circle cx=\"80.8\" cy=\"148\" r=\"6\" fill=\"var(--teal)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"></circle><text x=\"88.8\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">P</text><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Rantau sepunya</text><text x=\"8\" y=\"264\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">P(2, 4)</text><line x1=\"10\" y1=\"282\" x2=\"26\" y2=\"282\" stroke=\"var(--vena)\" stroke-width=\"3\"></line><text x=\"32\" y=\"286\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">y ≥ x</text><text class=\"jmi-hasil\" x=\"250\" y=\"286\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">✓</text><line x1=\"10\" y1=\"300\" x2=\"26\" y2=\"300\" stroke=\"var(--teal)\" stroke-width=\"3\"></line><text x=\"32\" y=\"304\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">x + y ≤ 8</text><text class=\"jmi-hasil\" x=\"250\" y=\"304\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">✓</text><line x1=\"10\" y1=\"318\" x2=\"26\" y2=\"318\" stroke=\"var(--arteri)\" stroke-width=\"3\"></line><text x=\"32\" y=\"322\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">y ≤ 6</text><text class=\"jmi-hasil\" x=\"250\" y=\"322\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">✓</text><line x1=\"10\" y1=\"336\" x2=\"26\" y2=\"336\" stroke=\"var(--amber)\" stroke-width=\"3\"></line><text x=\"32\" y=\"340\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">x ≥ 1</text><text class=\"jmi-hasil\" x=\"250\" y=\"340\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">✓</text><text class=\"jmi-hasil\" x=\"8\" y=\"362\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" font-weight=\"700\">P dalam rantau sepunya</text></svg></div><figcaption>Rajah 1 · Rantau sepunya bagi empat ketaksamaan. Gerakkan P dan semak setiap ketaksamaan.</figcaption></figure>",
  "r4": "<figure class=\"figure jmi\" data-w=\"t4rantau\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4rantau&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Tiga sistem ketaksamaan A, B dan C. Pilih sistem dan uji titik P.&quot;,&quot;alt&quot;:&quot;Rajah interaktif tiga sistem ketaksamaan linear dengan rantau sepunya berlorek; cip memilih sistem A, B atau C dan gelongsor menggerakkan titik P&quot;,&quot;mod&quot;:&quot;sistem&quot;,&quot;sistem&quot;:[{&quot;nama&quot;:&quot;Sistem A&quot;,&quot;ket&quot;:[{&quot;a&quot;:-2,&quot;b&quot;:1,&quot;c&quot;:0,&quot;s&quot;:&quot;≤&quot;,&quot;y&quot;:true},{&quot;a&quot;:1,&quot;b&quot;:1,&quot;c&quot;:6,&quot;s&quot;:&quot;≤&quot;},{&quot;a&quot;:0,&quot;b&quot;:1,&quot;c&quot;:0,&quot;s&quot;:&quot;≥&quot;}]},{&quot;nama&quot;:&quot;Sistem B&quot;,&quot;ket&quot;:[{&quot;a&quot;:-2,&quot;b&quot;:1,&quot;c&quot;:0,&quot;s&quot;:&quot;≥&quot;,&quot;y&quot;:true},{&quot;a&quot;:1,&quot;b&quot;:1,&quot;c&quot;:6,&quot;s&quot;:&quot;≤&quot;},{&quot;a&quot;:1,&quot;b&quot;:0,&quot;c&quot;:0,&quot;s&quot;:&quot;≥&quot;}]},{&quot;nama&quot;:&quot;Sistem C&quot;,&quot;ket&quot;:[{&quot;a&quot;:-2,&quot;b&quot;:1,&quot;c&quot;:0,&quot;s&quot;:&quot;≤&quot;,&quot;y&quot;:true},{&quot;a&quot;:1,&quot;b&quot;:1,&quot;c&quot;:6,&quot;s&quot;:&quot;≥&quot;},{&quot;a&quot;:0,&quot;b&quot;:1,&quot;c&quot;:6,&quot;s&quot;:&quot;≤&quot;}]}],&quot;julat&quot;:[0,8,0,8],&quot;P&quot;:[1,4]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 354\" role=\"img\" aria-label=\"Rajah satah Cartes dengan rantau y ≤ 2x, x + y ≤ 6, y ≥ 0 dilorek dan titik P(1, 4)\"><path class=\"jmi-hasil\" d=\"M40 216 L193 216 L91 131 L40 216 Z\" fill=\"var(--amber)\" fill-opacity=\"0.3\" stroke=\"none\"></path><rect x=\"40\" y=\"46\" width=\"204\" height=\"170\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"40\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"65.5\" y1=\"46\" x2=\"65.5\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"65.5\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><line x1=\"91\" y1=\"46\" x2=\"91\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"91\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"116.5\" y1=\"46\" x2=\"116.5\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"116.5\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><line x1=\"142\" y1=\"46\" x2=\"142\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"142\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><line x1=\"167.5\" y1=\"46\" x2=\"167.5\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"167.5\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><line x1=\"193\" y1=\"46\" x2=\"193\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"193\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><line x1=\"218.5\" y1=\"46\" x2=\"218.5\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"218.5\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">7</text><text x=\"244\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">8</text><line x1=\"40\" y1=\"194.8\" x2=\"244\" y2=\"194.8\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"198.8\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><line x1=\"40\" y1=\"173.5\" x2=\"244\" y2=\"173.5\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"177.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><line x1=\"40\" y1=\"152.3\" x2=\"244\" y2=\"152.3\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"156.3\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">3</text><line x1=\"40\" y1=\"131\" x2=\"244\" y2=\"131\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"135\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><line x1=\"40\" y1=\"109.8\" x2=\"244\" y2=\"109.8\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"113.8\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><line x1=\"40\" y1=\"88.5\" x2=\"244\" y2=\"88.5\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"92.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">6</text><line x1=\"40\" y1=\"67.3\" x2=\"244\" y2=\"67.3\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"71.3\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">7</text><text x=\"35\" y=\"50\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">8</text><line x1=\"40\" y1=\"216\" x2=\"244\" y2=\"216\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"40\" y1=\"46\" x2=\"40\" y2=\"216\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"244\" y=\"244\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" text-anchor=\"end\" font-weight=\"700\">x</text><text x=\"10\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" font-weight=\"700\">y</text><line x1=\"40\" y1=\"216\" x2=\"142\" y2=\"46\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></line><line x1=\"40\" y1=\"88.5\" x2=\"193\" y2=\"216\" stroke=\"var(--teal)\" stroke-width=\"2.5\"></line><line x1=\"40\" y1=\"216\" x2=\"244\" y2=\"216\" stroke=\"var(--arteri)\" stroke-width=\"2.5\"></line><circle cx=\"65.5\" cy=\"131\" r=\"6\" fill=\"var(--arteri)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"></circle><text x=\"73.5\" y=\"123\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">P</text><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Rantau sepunya</text><text x=\"8\" y=\"264\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">P(1, 4)</text><line x1=\"10\" y1=\"282\" x2=\"26\" y2=\"282\" stroke=\"var(--vena)\" stroke-width=\"3\"></line><text x=\"32\" y=\"286\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">y ≤ 2x</text><text class=\"jmi-hasil\" x=\"250\" y=\"286\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" text-anchor=\"end\" font-weight=\"700\">✗</text><line x1=\"10\" y1=\"300\" x2=\"26\" y2=\"300\" stroke=\"var(--teal)\" stroke-width=\"3\"></line><text x=\"32\" y=\"304\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">x + y ≤ 6</text><text class=\"jmi-hasil\" x=\"250\" y=\"304\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">✓</text><line x1=\"10\" y1=\"318\" x2=\"26\" y2=\"318\" stroke=\"var(--arteri)\" stroke-width=\"3\"></line><text x=\"32\" y=\"322\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">y ≥ 0</text><text class=\"jmi-hasil\" x=\"250\" y=\"322\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">✓</text><text class=\"jmi-hasil\" x=\"8\" y=\"344\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">P di luar rantau</text></svg></div><figcaption>Rajah 1 · Tiga sistem ketaksamaan A, B dan C. Pilih sistem dan uji titik P.</figcaption></figure>",
  "r5": "<figure class=\"figure jmi cabar\" data-w=\"t4rantau\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4rantau&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Kedai kek: x kek coklat, y kek pandan sehari. Kira dahulu, kemudian semak.&quot;,&quot;alt&quot;:&quot;Rajah interaktif masalah kedai kek dengan empat kekangan, rantau sepunya, titik integer yang boleh dipilih dan untung bagi titik P, dalam mod cabar&quot;,&quot;mod&quot;:&quot;masalah&quot;,&quot;cabar&quot;:true,&quot;ket&quot;:[{&quot;a&quot;:1,&quot;b&quot;:1,&quot;c&quot;:8,&quot;s&quot;:&quot;≤&quot;},{&quot;a&quot;:2,&quot;b&quot;:1,&quot;c&quot;:12,&quot;s&quot;:&quot;≤&quot;},{&quot;a&quot;:1,&quot;b&quot;:0,&quot;c&quot;:1,&quot;s&quot;:&quot;≥&quot;},{&quot;a&quot;:0,&quot;b&quot;:1,&quot;c&quot;:2,&quot;s&quot;:&quot;≥&quot;}],&quot;julat&quot;:[0,10,0,10],&quot;P&quot;:[3,5],&quot;lblX&quot;:&quot;x (kek coklat)&quot;,&quot;lblY&quot;:&quot;y (kek pandan)&quot;,&quot;tajuk&quot;:&quot;Kek sehari&quot;,&quot;objektif&quot;:{&quot;p&quot;:50,&quot;q&quot;:30,&quot;label&quot;:&quot;Untung&quot;,&quot;rm&quot;:true}}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 392\" role=\"img\" aria-label=\"Rajah satah Cartes dengan rantau x + y ≤ 8, 2x + y ≤ 12, x ≥ 1, y ≥ 2 dilorek dan titik P(3, 5)\"><path class=\"jmi-hasil\" d=\"M142 182 L121.6 148 L60.4 97 L60.4 182 Z\" fill=\"var(--amber)\" fill-opacity=\"0.3\" stroke=\"none\"></path><rect x=\"40\" y=\"46\" width=\"204\" height=\"170\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"40\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"60.4\" y1=\"46\" x2=\"60.4\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"60.4\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><line x1=\"80.8\" y1=\"46\" x2=\"80.8\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"80.8\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"101.2\" y1=\"46\" x2=\"101.2\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"101.2\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><line x1=\"121.6\" y1=\"46\" x2=\"121.6\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"121.6\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><line x1=\"142\" y1=\"46\" x2=\"142\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"142\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><line x1=\"162.4\" y1=\"46\" x2=\"162.4\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"162.4\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><line x1=\"182.8\" y1=\"46\" x2=\"182.8\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"182.8\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">7</text><line x1=\"203.2\" y1=\"46\" x2=\"203.2\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"203.2\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">8</text><line x1=\"223.6\" y1=\"46\" x2=\"223.6\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"223.6\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">9</text><text x=\"244\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">10</text><line x1=\"40\" y1=\"199\" x2=\"244\" y2=\"199\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"203\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><line x1=\"40\" y1=\"182\" x2=\"244\" y2=\"182\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><line x1=\"40\" y1=\"165\" x2=\"244\" y2=\"165\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"169\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">3</text><line x1=\"40\" y1=\"148\" x2=\"244\" y2=\"148\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"152\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><line x1=\"40\" y1=\"131\" x2=\"244\" y2=\"131\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"135\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><line x1=\"40\" y1=\"114\" x2=\"244\" y2=\"114\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"118\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">6</text><line x1=\"40\" y1=\"97\" x2=\"244\" y2=\"97\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"101\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">7</text><line x1=\"40\" y1=\"80\" x2=\"244\" y2=\"80\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"84\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">8</text><line x1=\"40\" y1=\"63\" x2=\"244\" y2=\"63\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"67\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">9</text><text x=\"35\" y=\"50\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">10</text><line x1=\"40\" y1=\"216\" x2=\"244\" y2=\"216\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"40\" y1=\"46\" x2=\"40\" y2=\"216\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"244\" y=\"244\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" text-anchor=\"end\" font-weight=\"700\">x</text><text x=\"10\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" font-weight=\"700\">y</text><line x1=\"40\" y1=\"80\" x2=\"203.2\" y2=\"216\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></line><line x1=\"60.4\" y1=\"46\" x2=\"162.4\" y2=\"216\" stroke=\"var(--teal)\" stroke-width=\"2.5\"></line><line x1=\"60.4\" y1=\"216\" x2=\"60.4\" y2=\"46\" stroke=\"var(--arteri)\" stroke-width=\"2.5\"></line><line x1=\"40\" y1=\"182\" x2=\"244\" y2=\"182\" stroke=\"var(--amber)\" stroke-width=\"2.5\"></line><circle class=\"jmi-hasil\" cx=\"60.4\" cy=\"182\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"60.4\" cy=\"165\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"60.4\" cy=\"148\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"60.4\" cy=\"131\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"60.4\" cy=\"114\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"60.4\" cy=\"97\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"80.8\" cy=\"182\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"80.8\" cy=\"165\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"80.8\" cy=\"148\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"80.8\" cy=\"131\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"80.8\" cy=\"114\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"101.2\" cy=\"182\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"101.2\" cy=\"165\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"101.2\" cy=\"148\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"101.2\" cy=\"131\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"121.6\" cy=\"182\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"121.6\" cy=\"165\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"121.6\" cy=\"148\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"142\" cy=\"182\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle cx=\"101.2\" cy=\"131\" r=\"6\" fill=\"var(--teal)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"></circle><text x=\"109.2\" y=\"123\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">P</text><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Kek sehari</text><text x=\"8\" y=\"264\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">P(3, 5)</text><line x1=\"10\" y1=\"282\" x2=\"26\" y2=\"282\" stroke=\"var(--vena)\" stroke-width=\"3\"></line><text x=\"32\" y=\"286\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">x + y ≤ 8</text><text class=\"jmi-hasil\" x=\"250\" y=\"286\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">✓</text><line x1=\"10\" y1=\"300\" x2=\"26\" y2=\"300\" stroke=\"var(--teal)\" stroke-width=\"3\"></line><text x=\"32\" y=\"304\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">2x + y ≤ 12</text><text class=\"jmi-hasil\" x=\"250\" y=\"304\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">✓</text><line x1=\"10\" y1=\"318\" x2=\"26\" y2=\"318\" stroke=\"var(--arteri)\" stroke-width=\"3\"></line><text x=\"32\" y=\"322\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">x ≥ 1</text><text class=\"jmi-hasil\" x=\"250\" y=\"322\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">✓</text><line x1=\"10\" y1=\"336\" x2=\"26\" y2=\"336\" stroke=\"var(--amber)\" stroke-width=\"3\"></line><text x=\"32\" y=\"340\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">y ≥ 2</text><text class=\"jmi-hasil\" x=\"250\" y=\"340\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">✓</text><text class=\"jmi-hasil\" x=\"8\" y=\"362\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" font-weight=\"700\">P dalam rantau sepunya</text><text class=\"jmi-hasil\" x=\"8\" y=\"382\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Untung = RM300</text></svg></div><figcaption>Rajah 1 · Kedai kek: x kek coklat, y kek pandan sehari. Kira dahulu, kemudian semak.</figcaption></figure>",
  "r6": "<figure class=\"figure jmi\" data-w=\"t4rantau\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4rantau&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Lawatan 150 murid: x bas (40 tempat) dan y van (10 tempat). Cari kos terendah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif masalah sewa bas dan van dengan empat kekangan, rantau sepunya, titik integer yang boleh dipilih dan kos sewa bagi titik P&quot;,&quot;mod&quot;:&quot;masalah&quot;,&quot;ket&quot;:[{&quot;a&quot;:40,&quot;b&quot;:10,&quot;c&quot;:150,&quot;s&quot;:&quot;≥&quot;},{&quot;a&quot;:1,&quot;b&quot;:1,&quot;c&quot;:9,&quot;s&quot;:&quot;≤&quot;},{&quot;a&quot;:1,&quot;b&quot;:0,&quot;c&quot;:3,&quot;s&quot;:&quot;≤&quot;},{&quot;a&quot;:0,&quot;b&quot;:1,&quot;c&quot;:8,&quot;s&quot;:&quot;≤&quot;}],&quot;julat&quot;:[0,6,0,10],&quot;P&quot;:[2,7],&quot;lblX&quot;:&quot;x (bas)&quot;,&quot;lblY&quot;:&quot;y (van)&quot;,&quot;tajuk&quot;:&quot;Sewa bas dan van&quot;,&quot;objektif&quot;:{&quot;p&quot;:600,&quot;q&quot;:200,&quot;label&quot;:&quot;Kos sewa&quot;,&quot;rm&quot;:true,&quot;min&quot;:true}}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 392\" role=\"img\" aria-label=\"Rajah satah Cartes dengan rantau 40x + 10y ≥ 150, x + y ≤ 9, x ≤ 3, y ≤ 8 dilorek dan titik P(2, 7)\"><path class=\"jmi-hasil\" d=\"M142 114 L108 97 L142 165 Z\" fill=\"var(--amber)\" fill-opacity=\"0.3\" stroke=\"none\"></path><rect x=\"40\" y=\"46\" width=\"204\" height=\"170\" rx=\"0\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"40\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><line x1=\"74\" y1=\"46\" x2=\"74\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"74\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1</text><line x1=\"108\" y1=\"46\" x2=\"108\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"108\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><line x1=\"142\" y1=\"46\" x2=\"142\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"142\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">3</text><line x1=\"176\" y1=\"46\" x2=\"176\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"176\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><line x1=\"210\" y1=\"46\" x2=\"210\" y2=\"216\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"210\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">5</text><text x=\"244\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><line x1=\"40\" y1=\"199\" x2=\"244\" y2=\"199\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"203\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><line x1=\"40\" y1=\"182\" x2=\"244\" y2=\"182\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><line x1=\"40\" y1=\"165\" x2=\"244\" y2=\"165\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"169\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">3</text><line x1=\"40\" y1=\"148\" x2=\"244\" y2=\"148\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"152\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><line x1=\"40\" y1=\"131\" x2=\"244\" y2=\"131\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"135\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">5</text><line x1=\"40\" y1=\"114\" x2=\"244\" y2=\"114\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"118\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">6</text><line x1=\"40\" y1=\"97\" x2=\"244\" y2=\"97\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"101\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">7</text><line x1=\"40\" y1=\"80\" x2=\"244\" y2=\"80\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"84\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">8</text><line x1=\"40\" y1=\"63\" x2=\"244\" y2=\"63\" stroke=\"var(--line)\" stroke-width=\"0.5\"></line><text x=\"35\" y=\"67\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">9</text><text x=\"35\" y=\"50\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">10</text><line x1=\"40\" y1=\"216\" x2=\"244\" y2=\"216\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><line x1=\"40\" y1=\"46\" x2=\"40\" y2=\"216\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"244\" y=\"244\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" text-anchor=\"end\" font-weight=\"700\">x</text><text x=\"10\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" font-weight=\"700\">y</text><line x1=\"82.5\" y1=\"46\" x2=\"167.5\" y2=\"216\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></line><line x1=\"40\" y1=\"63\" x2=\"244\" y2=\"165\" stroke=\"var(--teal)\" stroke-width=\"2.5\"></line><line x1=\"142\" y1=\"216\" x2=\"142\" y2=\"46\" stroke=\"var(--arteri)\" stroke-width=\"2.5\"></line><line x1=\"40\" y1=\"80\" x2=\"244\" y2=\"80\" stroke=\"var(--amber)\" stroke-width=\"2.5\"></line><circle class=\"jmi-hasil\" cx=\"108\" cy=\"97\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"142\" cy=\"165\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"142\" cy=\"148\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"142\" cy=\"131\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle class=\"jmi-hasil\" cx=\"142\" cy=\"114\" r=\"2.6\" fill=\"var(--ink2)\" stroke=\"none\"></circle><circle cx=\"108\" cy=\"97\" r=\"6\" fill=\"var(--teal)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"></circle><text x=\"116\" y=\"89\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">P</text><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Sewa bas dan van</text><text x=\"8\" y=\"264\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">P(2, 7)</text><line x1=\"10\" y1=\"282\" x2=\"26\" y2=\"282\" stroke=\"var(--vena)\" stroke-width=\"3\"></line><text x=\"32\" y=\"286\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">40x + 10y ≥ 150</text><text class=\"jmi-hasil\" x=\"250\" y=\"286\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">✓</text><line x1=\"10\" y1=\"300\" x2=\"26\" y2=\"300\" stroke=\"var(--teal)\" stroke-width=\"3\"></line><text x=\"32\" y=\"304\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">x + y ≤ 9</text><text class=\"jmi-hasil\" x=\"250\" y=\"304\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">✓</text><line x1=\"10\" y1=\"318\" x2=\"26\" y2=\"318\" stroke=\"var(--arteri)\" stroke-width=\"3\"></line><text x=\"32\" y=\"322\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">x ≤ 3</text><text class=\"jmi-hasil\" x=\"250\" y=\"322\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">✓</text><line x1=\"10\" y1=\"336\" x2=\"26\" y2=\"336\" stroke=\"var(--amber)\" stroke-width=\"3\"></line><text x=\"32\" y=\"340\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">y ≤ 8</text><text class=\"jmi-hasil\" x=\"250\" y=\"340\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">✓</text><text class=\"jmi-hasil\" x=\"8\" y=\"362\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" font-weight=\"700\">P dalam rantau sepunya</text><text class=\"jmi-hasil\" x=\"8\" y=\"382\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Kos sewa = RM2600</text></svg></div><figcaption>Rajah 1 · Lawatan 150 murid: x bas (40 tempat) dan y van (10 tempat). Cari kos terendah.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Pondok Tanda",
   "sk": "6.1.1 Mewakilkan situasi dalam bentuk ketaksamaan linear",
   "lampiran": "r1",
   "kadNama": "Kata Kunci",
   "kadEm": "🏷️",
   "kadFakta": "\"Tidak melebihi\" atau \"paling banyak\" = ≤. \"Sekurang-kurangnya\" atau \"tidak kurang daripada\" = ≥. \"Kurang daripada\" = < dan \"lebih daripada\" = >.",
   "bosKadNama": "Garis Putus-putus",
   "bosKadEm": "➖",
   "bosKadFakta": "Bagi < dan >, garis sempadan dilukis putus-putus kerana titik pada garis tidak memenuhi ketaksamaan. Bagi ≤ dan ≥, garis dilukis penuh.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Aina membeli x buah buku dan y buah majalah. Jumlah bahan bacaan yang dibeli tidak melebihi 6. Ketaksamaan yang mewakili situasi ini ialah:",
     "p": [
      "x + y ≤ 6",
      "x + y ≥ 6",
      "x + y &lt; 6",
      "x + y &gt; 6"
     ],
     "b": 0,
     "u": "\"Tidak melebihi 6\" bermaksud 6 atau kurang, jadi x + y ≤ 6."
    },
    {
     "j": "pilih",
     "t": "Sebuah pasukan memerlukan sekurang-kurangnya 6 orang pemain, iaitu x orang lelaki dan y orang perempuan. Ketaksamaan yang sesuai ialah:",
     "p": [
      "x + y ≤ 6",
      "x + y ≥ 6",
      "x + y &gt; 6",
      "x + y &lt; 6"
     ],
     "b": 1,
     "u": "\"Sekurang-kurangnya 6\" bermaksud 6 atau lebih, jadi x + y ≥ 6."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih x + y &gt; 6. Bagaimanakah garis x + y = 6 dilukis, dan mengapa?",
     "p": [
      "Penuh, kerana titik pada garis turut memenuhi",
      "Putus-putus, kerana rantau berada di bawah garis",
      "Putus-putus, kerana titik pada garis tidak memenuhi",
      "Penuh, kerana tanda itu ialah lebih besar"
     ],
     "b": 2,
     "u": "Bagi titik pada garis, x + y = 6, dan 6 &gt; 6 adalah palsu. Garis dilukis putus-putus untuk menunjukkan ia tidak termasuk."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih x + y ≥ 6. Rantau yang berlorek ialah:",
     "p": [
      "Di bawah garis x + y = 6, termasuk garis itu",
      "Di atas garis x + y = 6, tidak termasuk garis itu",
      "Di bawah garis x + y = 6, tidak termasuk garis itu",
      "Di atas garis x + y = 6, termasuk garis itu"
     ],
     "b": 3,
     "u": "Uji (0, 0): 0 ≥ 6 palsu, jadi rantau tidak mengandungi asalan, iaitu di atas garis. Tanda ≥ bermaksud garis termasuk."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih x + y ≤ 6 dan gerakkan P ke (2, 3). Apakah kesimpulannya?",
     "p": [
      "P memenuhi, kerana 2 + 3 = 5 dan 5 ≤ 6",
      "P tidak memenuhi, kerana 5 &lt; 6",
      "P memenuhi, kerana 2 &lt; 3",
      "P tidak memenuhi, kerana P di atas garis"
     ],
     "b": 0,
     "u": "Gantikan x = 2 dan y = 3: 2 + 3 = 5 ≤ 6 benar, jadi P berada dalam rantau."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih x + y &lt; 6 dan tetapkan x = 2. Berapakah bilangan nilai integer y dari 0 hingga 10 yang memenuhi ketaksamaan?",
     "tol": 0.001000000001,
     "b": 4,
     "u": "2 + y &lt; 6 memberi y &lt; 4, jadi y = 0, 1, 2 atau 3: empat nilai."
    },
    {
     "j": "pilih",
     "t": "Harga sebatang pen ialah RM2 dan harga sebuah buku latihan ialah RM5. Ali mempunyai RM30 untuk membeli x batang pen dan y buah buku. Ketaksamaan yang sesuai ialah:",
     "p": [
      "5x + 2y ≤ 30",
      "2x + 5y ≤ 30",
      "2x + 5y ≥ 30",
      "x + y ≤ 30"
     ],
     "b": 1,
     "u": "Jumlah kos = 2x + 5y, dan kos itu tidak boleh melebihi RM30."
    },
    {
     "j": "pilih",
     "t": "Antara berikut, yang manakah ketaksamaan linear dalam dua pemboleh ubah?",
     "p": [
      "x² + y &lt; 4",
      "3x + 2 = 7",
      "3x − 2y &gt; 7",
      "xy ≥ 5"
     ],
     "b": 2,
     "u": "Ketaksamaan linear mempunyai pemboleh ubah berkuasa 1 dan tiada hasil darab pemboleh ubah. x² dan xy bukan linear, dan 3x + 2 = 7 ialah persamaan."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Dalam sebuah kelab, bilangan ahli lelaki (x) sekurang-kurangnya dua kali bilangan ahli perempuan (y). Ketaksamaan yang sesuai ialah:",
    "p": [
     "y ≥ 2x",
     "x ≤ 2y",
     "2x ≥ y",
     "x ≥ 2y"
    ],
    "b": 3,
    "u": "Dua kali bilangan perempuan ialah 2y. Lelaki sekurang-kurangnya sebanyak itu: x ≥ 2y. Semak: 10 lelaki dan 5 perempuan memenuhi 10 ≥ 10."
   }
  },
  {
   "n": 2,
   "tempat": "Makmal Rantau",
   "sk": "6.1.2 / 6.1.3 Titik dalam rantau dan melorek rantau",
   "lampiran": "r2",
   "kadNama": "Titik Ujian",
   "kadEm": "📍",
   "kadFakta": "Untuk menentukan rantau, gantikan satu titik ujian yang tidak berada pada garis (selalunya (0, 0)). Jika ketaksamaan benar, rantau mengandungi titik itu.",
   "bosKadNama": "Atas atau Bawah",
   "bosKadEm": "↕️",
   "bosKadFakta": "Bagi y > mx + c atau y ≥ mx + c, rantau berada di atas garis. Bagi y < mx + c atau y ≤ mx + c, rantau berada di bawah garis.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih y ≥ 2x − 1 dan gerakkan P ke (1, 3). Kedudukan P ialah:",
     "p": [
      "Dalam rantau, kerana 3 ≥ 2(1) − 1 = 1",
      "Di luar rantau, kerana 3 &gt; 1",
      "Pada garis, kerana 3 = 2(1) + 1",
      "Di luar rantau, kerana x &lt; y"
     ],
     "b": 0,
     "u": "Gantikan x = 1: 2(1) − 1 = 1. Oleh sebab y = 3 ≥ 1, P berada dalam rantau."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih y &lt; x + 2. Titik (1, 3) berada pada garis y = x + 2. Adakah titik itu memenuhi ketaksamaan?",
     "p": [
      "Ya, kerana titik itu berada pada garis",
      "Tidak, kerana 3 &lt; 3 adalah palsu",
      "Ya, kerana 3 = 1 + 2",
      "Tidak, kerana 1 &lt; 3 adalah benar"
     ],
     "b": 1,
     "u": "Garis y = x + 2 dilukis putus-putus. Pada garis, y = x + 2 tepat, jadi y &lt; x + 2 palsu."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih x ≤ 3. Rantau yang berlorek ialah:",
     "p": [
      "Di kanan garis x = 3, termasuk garis itu",
      "Di bawah garis y = 3, termasuk garis itu",
      "Di kiri garis x = 3, termasuk garis itu",
      "Di atas garis y = 3, termasuk garis itu"
     ],
     "b": 2,
     "u": "x = 3 ialah garis mencancang. Nilai x yang lebih kecil berada di sebelah kiri garis."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih y &gt; −x + 4 dan tetapkan x = 2. Berapakah nilai integer y yang terkecil supaya P berada dalam rantau?",
     "tol": 0.001000000001,
     "b": 3,
     "u": "−2 + 4 = 2, jadi y &gt; 2. Integer terkecil ialah 3."
    },
    {
     "j": "pilih",
     "t": "Konjektur: \"Bagi y ≥ 2x − 1, titik (0, 5) dan (2, 4) berada dalam rantau.\" Semak konjektur ini dengan Rajah 1.",
     "p": [
      "Palsu; titik (2, 4) tidak memenuhi",
      "Palsu; titik (0, 5) tidak memenuhi",
      "Palsu; kedua-dua titik di bawah garis",
      "Benar; (0, 5) dan (2, 4) memenuhi ketaksamaan"
     ],
     "b": 3,
     "u": "(0, 5): 5 ≥ −1 benar. (2, 4): 4 ≥ 3 benar. Kedua-dua titik berada dalam rantau."
    },
    {
     "j": "pilih",
     "t": "Titik ujian yang paling mudah untuk menentukan rantau y &lt; x + 2 ialah:",
     "p": [
      "(0, 0); 0 &lt; 2 benar, jadi rantau memuat asalan",
      "(0, 2), kerana titik itu berada tepat pada garis",
      "(5, 5), kerana titik itu jauh daripada garis",
      "(−2, 0), kerana titik itu ialah pintasan-x"
     ],
     "b": 0,
     "u": "(0, 0) tidak berada pada garis dan mudah digantikan. 0 &lt; 0 + 2 benar, jadi rantau berada di sebelah asalan."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih x ≤ 3. Berapakah bilangan nilai integer x dari −3 hingga 6 yang memenuhi ketaksamaan?",
     "tol": 0.001000000001,
     "b": 7,
     "u": "x = −3, −2, −1, 0, 1, 2, 3: tujuh nilai."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih y &gt; −x + 4. Rantau yang berlorek ialah:",
     "p": [
      "Di atas garis y = −x + 4, termasuk garis itu",
      "Di atas garis y = −x + 4, tidak termasuk garis itu",
      "Di bawah garis y = −x + 4, tidak termasuk garis itu",
      "Di bawah garis y = −x + 4, termasuk garis itu"
     ],
     "b": 1,
     "u": "Tanda &gt; dalam bentuk y &gt; ... bermaksud rantau di atas garis, dan garis putus-putus tidak termasuk."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA titik yang memenuhi y ≥ 2x − 1.",
    "p": [
     "(0, 0)",
     "(2, 3)",
     "(−1, −3)",
     "(3, 4)",
     "(2, 2)",
     "(4, 6)"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "(0, 0): 0 ≥ −1. (2, 3): 3 ≥ 3. (−1, −3): −3 ≥ −3. Tiga titik lain gagal: 4 ≥ 5, 2 ≥ 3 dan 6 ≥ 7 semuanya palsu."
   }
  },
  {
   "n": 3,
   "tempat": "Dataran Sistem",
   "sk": "6.2.1 / 6.2.2 Sistem ketaksamaan linear dan rantau sepunya",
   "lampiran": "r3",
   "kadNama": "Rantau Sepunya",
   "kadEm": "🖍️",
   "kadFakta": "Rantau bagi sistem ketaksamaan ialah kawasan yang memenuhi SETIAP ketaksamaan dalam sistem itu.",
   "bosKadNama": "Bucu Rantau",
   "bosKadEm": "🔺",
   "bosKadFakta": "Bucu rantau ialah titik persilangan dua garis sempadan. Ia dicari dengan menyelesaikan dua persamaan garis secara serentak.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, gerakkan P ke (2, 4). Adakah P berada dalam rantau sepunya?",
     "p": [
      "Tidak, kerana 2 + 4 &gt; 6",
      "Tidak, kerana y lebih besar daripada x",
      "Ya, P memenuhi keempat-empat ketaksamaan",
      "Ya, kerana y kurang daripada 8"
     ],
     "b": 2,
     "u": "4 ≥ 2, 2 + 4 = 6 ≤ 8, 4 ≤ 6 dan 2 ≥ 1. Keempat-empat benar."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, gerakkan P ke (5, 2). Ketaksamaan manakah yang TIDAK dipenuhi?",
     "p": [
      "x + y ≤ 8",
      "y ≤ 6",
      "x ≥ 1",
      "y ≥ x"
     ],
     "b": 3,
     "u": "2 ≥ 5 palsu. Tiga ketaksamaan lain dipenuhi."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, gerakkan P ke (3, 6). Ketaksamaan manakah yang TIDAK dipenuhi?",
     "p": [
      "x + y ≤ 8",
      "y ≥ x",
      "y ≤ 6",
      "x ≥ 1"
     ],
     "b": 0,
     "u": "3 + 6 = 9, dan 9 ≤ 8 palsu."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan x = 3. Berapakah bilangan nilai integer y yang meletakkan P dalam rantau sepunya?",
     "tol": 0.001000000001,
     "b": 3,
     "u": "y ≥ 3 dan 3 + y ≤ 8 (y ≤ 5). Maka y = 3, 4 atau 5."
    },
    {
     "j": "pilih",
     "t": "Aina membeli x buah buku dan y batang pen. Jumlah barang tidak melebihi 8, dan bilangan pen sekurang-kurangnya sama dengan bilangan buku. Sistem ketaksamaan yang sesuai ialah:",
     "p": [
      "x + y ≥ 8 dan y ≥ x",
      "x + y ≤ 8 dan y ≥ x",
      "x + y ≤ 8 dan y ≤ x",
      "x + y &lt; 8 dan y &gt; x"
     ],
     "b": 1,
     "u": "\"Tidak melebihi 8\": x + y ≤ 8. \"Pen sekurang-kurangnya sama dengan buku\": y ≥ x."
    },
    {
     "j": "pilih",
     "t": "Rantau sepunya bagi suatu sistem ketaksamaan ialah:",
     "p": [
      "Kawasan yang memenuhi sekurang-kurangnya satu ketaksamaan",
      "Garis sempadan yang dilukis bagi setiap ketaksamaan",
      "Kawasan yang memenuhi setiap ketaksamaan dalam sistem",
      "Kawasan yang tidak memenuhi mana-mana ketaksamaan"
     ],
     "b": 2,
     "u": "Rantau sepunya ialah persilangan rantau semua ketaksamaan."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, titik persilangan garis y = x dan garis x + y = 8 ialah bucu rantau. Koordinatnya ialah:",
     "p": [
      "(8, 0)",
      "(2, 6)",
      "(1, 1)",
      "(4, 4)"
     ],
     "b": 3,
     "u": "Gantikan y = x ke dalam x + y = 8: 2x = 8, jadi x = 4 dan y = 4."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah nilai y yang terbesar bagi titik dalam rantau sepunya?",
     "tol": 0.001000000001,
     "b": 6,
     "u": "Ketaksamaan y ≤ 6 mengehadkan y. Titik seperti (1, 6) dan (2, 6) memenuhi semua ketaksamaan."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Ketaksamaan x ≤ 2 ditambah kepada sistem dalam Rajah 1. Titik manakah masih berada dalam rantau sepunya yang baharu?",
    "p": [
     "(2, 6)",
     "(3, 5)",
     "(1, 7)",
     "(0, 3)"
    ],
    "b": 0,
    "u": "(2, 6) memenuhi kelima-lima ketaksamaan. (3, 5) gagal x ≤ 2, (1, 7) gagal y ≤ 6, dan (0, 3) gagal x ≥ 1."
   }
  },
  {
   "n": 4,
   "tempat": "Ladang Tiga Sistem",
   "sk": "6.2.3 / 6.2.4 Melorek rantau sistem dan masalah rutin",
   "lampiran": "r4",
   "kadNama": "Luas Rantau",
   "kadEm": "🌾",
   "kadFakta": "Jika rantau berbentuk segi tiga, cari bucunya dahulu, kemudian gunakan luas = ½ × tapak × tinggi.",
   "bosKadNama": "Titik Integer",
   "bosKadEm": "🧮",
   "bosKadFakta": "Dalam masalah sebenar seperti bilangan barang, hanya titik integer dalam rantau yang sah.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, gerakkan P ke (1, 4) dan semak setiap sistem. P berada dalam rantau sepunya bagi:",
     "p": [
      "Sistem A dan B",
      "Sistem B",
      "Sistem B dan C",
      "Sistem A dan C"
     ],
     "b": 1,
     "u": "Sistem B: 4 ≥ 2, 1 + 4 ≤ 6, 1 ≥ 0. Sistem A dan C memerlukan y ≤ 2x, tetapi 4 ≤ 2 palsu."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih Sistem A. Rantaunya ialah segi tiga dengan bucu (0, 0), (6, 0) dan (2, 4). Hitung luas rantau itu, dalam unit².",
     "tol": 0.001000000001,
     "b": 12,
     "u": "Tapak 6 unit di sepanjang paksi-x, tinggi 4 unit. Luas = ½ × 6 × 4 = 12 unit²."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih Sistem B. Bucunya ialah (0, 0), (0, 6) dan (2, 4). Hitung luas rantau itu, dalam unit².",
     "tol": 0.001000000001,
     "b": 6,
     "u": "Tapak 6 unit di sepanjang paksi-y, tinggi (jarak mengufuk ke (2, 4)) 2 unit. Luas = ½ × 6 × 2 = 6 unit²."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Sistem C dan gerakkan P ke (5, 5). Kesimpulannya ialah:",
     "p": [
      "P di luar rantau kerana 5 + 5 &gt; 6",
      "P di luar rantau kerana y = x",
      "P dalam rantau; 5 ≤ 10, 10 ≥ 6 dan 5 ≤ 6",
      "P pada garis sempadan y = 2x"
     ],
     "b": 2,
     "u": "Ketiga-tiga ketaksamaan Sistem C dipenuhi oleh (5, 5)."
    },
    {
     "j": "pilih",
     "t": "Rantau segi tiga dengan bucu (0, 0), (4, 0) dan (0, 4) ditakrifkan oleh sistem:",
     "p": [
      "x ≥ 0, y ≥ 0, x + y ≥ 4",
      "x ≤ 0, y ≤ 0, x + y ≤ 4",
      "x ≥ 0, y ≤ 0, x + y ≤ 4",
      "x ≥ 0, y ≥ 0, x + y ≤ 4"
     ],
     "b": 3,
     "u": "Rantau berada di sukuan pertama (x ≥ 0, y ≥ 0) dan di bawah garis x + y = 4 yang melalui (4, 0) dan (0, 4)."
    },
    {
     "j": "pilih",
     "t": "Encik Ali menanam x pokok durian dan y pokok rambutan. Bilangan pokok rambutan tidak melebihi dua kali bilangan pokok durian. Ketaksamaan yang sesuai ialah:",
     "p": [
      "y ≤ 2x",
      "x ≤ 2y",
      "y ≥ 2x",
      "2y ≤ x"
     ],
     "b": 0,
     "u": "Dua kali bilangan durian ialah 2x. Rambutan (y) tidak melebihi nilai itu: y ≤ 2x. Ketaksamaan ini terdapat dalam Sistem A."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih Sistem A. Antara titik integer dalam rantau, berapakah nilai terbesar bagi x + 2y?",
     "tol": 0.001000000001,
     "b": 10,
     "u": "Nilai terbesar berlaku pada bucu. (0, 0) memberi 0, (6, 0) memberi 6 dan (2, 4) memberi 2 + 8 = 10."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, garis y = 0 bagi Sistem A dilukis penuh. Sebabnya ialah:",
     "p": [
      "Garis y = 0 ialah paksi-x",
      "Tanda ≥ bermaksud titik pada garis turut memenuhi",
      "Rantau berada di atas garis itu",
      "Setiap garis sempadan dilukis penuh"
     ],
     "b": 1,
     "u": "Garis penuh menunjukkan titik pada garis termasuk dalam rantau, iaitu bagi tanda ≥ atau ≤."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Dalam Rajah 1, pilih Sistem B. Berapakah bilangan titik integer (termasuk pada sempadan) dalam rantau itu?",
    "tol": 0.001000000001,
    "b": 12,
    "u": "x = 0: y = 0 hingga 6 (7 titik). x = 1: y = 2 hingga 5 (4 titik). x = 2: y = 4 (1 titik). Jumlah 12."
   }
  },
  {
   "n": 5,
   "tempat": "Kedai Kek",
   "sk": "6.2.4 Masalah sistem ketaksamaan linear (rutin kompleks)",
   "lampiran": "r5",
   "kadNama": "Kekangan",
   "kadEm": "🍰",
   "kadFakta": "Setiap had dalam situasi sebenar (ruang ketuhar, masa, bahan) menjadi satu ketaksamaan. Semua kekangan bersama membentuk sistem.",
   "bosKadNama": "Nilai Optimum",
   "bosKadEm": "🏆",
   "bosKadFakta": "Bagi fungsi seperti untung = 50x + 30y, nilai terbesar dalam rantau berlaku pada salah satu bucu rantau.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Ketuhar kedai itu boleh membakar paling banyak 8 biji kek sehari. Kekangan ini ditulis sebagai:",
     "p": [
      "x + y ≥ 8",
      "x + y &lt; 8",
      "x + y ≤ 8",
      "8x + 8y ≤ 1"
     ],
     "b": 2,
     "u": "Jumlah kek = x + y, dan \"paling banyak 8\" bermaksud ≤ 8."
    },
    {
     "j": "pilih",
     "t": "Sebiji kek coklat mengambil 2 jam dan sebiji kek pandan mengambil 1 jam. Masa kerja maksimum sehari ialah 12 jam. Kekangan ini ditulis sebagai:",
     "p": [
      "x + 2y ≤ 12",
      "2x + y ≥ 12",
      "x + y ≤ 12",
      "2x + y ≤ 12"
     ],
     "b": 3,
     "u": "Masa = 2 jam × x + 1 jam × y, dan masa itu tidak melebihi 12 jam."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, gerakkan P ke (5, 3). Bolehkah kedai itu membuat 5 biji kek coklat dan 3 biji kek pandan sehari?",
     "p": [
      "Tidak, kerana 2(5) + 3 = 13 melebihi 12 jam",
      "Ya, kerana 5 + 3 = 8 tidak melebihi 8",
      "Ya, kerana x ≥ 1 dan y ≥ 2 dipenuhi",
      "Tidak, kerana 5 + 3 melebihi 8 biji"
     ],
     "b": 0,
     "u": "Kekangan ketuhar dipenuhi (8 ≤ 8), tetapi kekangan masa gagal: 13 &gt; 12. Satu kekangan yang gagal sudah cukup."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, gerakkan P ke (3, 5). Berapakah untung sehari, dalam RM? (Untung RM50 sebiji kek coklat, RM30 sebiji kek pandan.)",
     "tol": 0.001000000001,
     "b": 300,
     "u": "Untung = 50(3) + 30(5) = 150 + 150 = RM300."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah untung maksimum sehari, dalam RM?",
     "tol": 0.001000000001,
     "b": 320,
     "u": "Semak bucu rantau: (1, 2) → 110, (1, 7) → 260, (4, 4) → 320, (5, 2) → 310. Untung maksimum RM320."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan Rajah 1, kombinasi (x, y) yang memberi untung maksimum ialah:",
     "p": [
      "(5, 2)",
      "(4, 4)",
      "(1, 7)",
      "(3, 5)"
     ],
     "b": 1,
     "u": "(4, 4) memberi RM320, lebih tinggi daripada (5, 2) RM310, (3, 5) RM300 dan (1, 7) RM260."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah bilangan kombinasi (x, y) integer yang memenuhi semua kekangan?",
     "tol": 0.001000000001,
     "b": 19,
     "u": "x = 1: y = 2 hingga 7 (6). x = 2: y = 2 hingga 6 (5). x = 3: y = 2 hingga 5 (4). x = 4: y = 2 hingga 4 (3). x = 5: y = 2 (1). Jumlah 19."
    },
    {
     "j": "pilih",
     "t": "Jika untung sebiji kek pandan naik kepada RM60 (kek coklat kekal RM50), kombinasi manakah yang terbaik?",
     "p": [
      "(4, 4)",
      "(5, 2)",
      "(1, 7)",
      "(2, 6)"
     ],
     "b": 2,
     "u": "50x + 60y: (1, 7) → 470, (2, 6) → 460, (4, 4) → 440, (5, 2) → 370. Kombinasi terbaik berubah kepada (1, 7)."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Seorang pekerja cuti, jadi kekangan masa menjadi 2x + y ≤ 10. Dengan untung RM50 dan RM30, berapakah untung maksimum baharu, dalam RM?",
    "tol": 0.001000000001,
    "b": 280,
    "u": "Titik terbaik baharu ialah (2, 6): 100 + 180 = RM280. Semak: (3, 4) → 270, (1, 7) → 260, (4, 2) → 260."
   }
  },
  {
   "n": 6,
   "tempat": "Pejabat Lawatan",
   "sk": "6.2.4 Masalah bukan rutin sistem ketaksamaan linear",
   "lampiran": "r6",
   "kadNama": "Kos Minimum",
   "kadEm": "🚌",
   "kadFakta": "Bagi kos yang perlu diminimumkan, cari titik integer dalam rantau yang memberi nilai kos terendah.",
   "bosKadNama": "Pereka Pelan",
   "bosKadEm": "🏗️",
   "bosKadFakta": "Masalah pengoptimuman yang baik mempunyai pemboleh ubah yang jelas, kekangan yang realistik dan fungsi objektif yang bermakna.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, gerakkan P ke (2, 7). Berapakah kos sewa, dalam RM? (Bas RM600 sebuah, van RM200 sebuah.)",
     "tol": 0.001000000001,
     "b": 2600,
     "u": "Kos = 600(2) + 200(7) = 1200 + 1400 = RM2600."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, gerakkan P ke (2, 6). Adakah 2 bas dan 6 van mencukupi?",
     "p": [
      "Ya, kerana 2 + 6 = 8 tidak melebihi 9",
      "Ya, kerana bilangan bas tidak melebihi 3",
      "Tidak, kerana bilangan van melebihi 8",
      "Tidak, kerana 40(2) + 10(6) = 140, kurang daripada 150"
     ],
     "b": 3,
     "u": "Tempat duduk = 80 + 60 = 140, tidak cukup untuk 150 murid."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah kos sewa minimum, dalam RM?",
     "tol": 0.001000000001,
     "b": 2400,
     "u": "Titik integer dalam rantau: (2, 7) dan (3, 3) hingga (3, 6). Kos terendah: (3, 3) → 1800 + 600 = RM2400."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan Rajah 1, kombinasi yang memberi kos minimum ialah:",
     "p": [
      "3 bas dan 3 van",
      "2 bas dan 7 van, kos RM2600",
      "3 bas dan 6 van, kos RM3000",
      "3 bas dan 4 van, kos RM2600"
     ],
     "b": 0,
     "u": "(3, 3) memenuhi 120 + 30 = 150 ≥ 150, dan kosnya RM2400, terendah antara semua titik integer dalam rantau."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah bilangan kombinasi integer (x, y) yang memenuhi semua kekangan?",
     "tol": 0.001000000001,
     "b": 5,
     "u": "x = 2: y = 7 sahaja (kerana x + y ≤ 9). x = 3: y = 3, 4, 5 atau 6. Jumlah 5 kombinasi."
    },
    {
     "j": "pilih",
     "t": "Sewa bas naik kepada RM900 sebuah (van kekal RM200). Kombinasi manakah yang kini paling murah?",
     "p": [
      "3 bas dan 3 van, RM3300",
      "2 bas dan 7 van, RM3200",
      "3 bas dan 4 van, RM3500",
      "2 bas dan 7 van, RM3300"
     ],
     "b": 1,
     "u": "(2, 7): 1800 + 1400 = RM3200. (3, 3): 2700 + 600 = RM3300. Kenaikan harga bas mengubah pilihan terbaik."
    },
    {
     "j": "pilih",
     "t": "Titik (3, 3.5) berada dalam rantau Rajah 1. Mengapakah ia bukan penyelesaian yang sah?",
     "p": [
      "Kos sewa bagi titik itu menjadi negatif",
      "Titik itu melanggar kekangan x + y ≤ 9",
      "Bilangan van mesti nombor bulat",
      "Titik itu melanggar kekangan 40x + 10y ≥ 150"
     ],
     "b": 2,
     "u": "120 + 35 = 155 ≥ 150 dan 6.5 ≤ 9, jadi titik itu dalam rantau. Namun separuh van tidak boleh disewa."
    },
    {
     "j": "nombor",
     "t": "Seramai 170 orang murid kini menyertai lawatan (kekangan lain tidak berubah). Berapakah kos sewa minimum baharu, dalam RM?",
     "tol": 0.001000000001,
     "b": 2800,
     "u": "40x + 10y ≥ 170. Dengan x = 3, y ≥ 5: (3, 5) → 1800 + 1000 = RM2800. Dengan x = 2, y ≥ 9 melanggar x + y ≤ 9 dan y ≤ 8."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Reka satu masalah pengoptimuman bagi aktiviti sekolah, contohnya jualan amal, pembelian alat sukan atau penyediaan makanan hari sukan.",
    "arahan": "Takrifkan dua pemboleh ubah dan tulis sekurang-kurangnya tiga kekangan dalam bentuk ketaksamaan linear. Lakar rantau sepunya, tentukan bucu-bucunya, dan cari nilai optimum bagi satu fungsi objektif (untung atau kos). Terangkan bagaimana jawapan berubah jika satu kekangan diubah.",
    "u": "Jawapan TP6 yang kukuh mempunyai kekangan yang realistik dan ditulis dengan betul, rantau yang dilorek dengan tepat, nilai optimum yang disemak pada bucu (dan titik integer jika perlu), serta analisis kesan perubahan kekangan."
   }
  }
 ]
};
