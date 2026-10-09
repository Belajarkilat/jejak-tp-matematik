/* Bank soalan — Matematik Ting. 5 · Bab 2 Matriks.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m5b2.js
   kemudian jalankan: node bina.js m5b2

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 5, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m5b2"] =
{
 "id": "m5b2",
 "tingkatan": 5,
 "kod": "2.0 Matriks",
 "tajuk": "Kilang Matriks",
 "subtajuk": "Matematik Ting. 5 · Bab 2 Matriks",
 "spi": [
  "Mempamerkan pengetahuan asas tentang matriks.",
  "Mempamerkan kefahaman tentang matriks.",
  "Mengaplikasikan kefahaman tentang matriks untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang matriks dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang matriks dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang matriks dalam konteks penyelesaian masalah bukan rutin secara kreatif."
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
  "1": "{n} dapat mewakilkan maklumat dalam bentuk matriks, menentukan peringkat dan mengenal pasti unsur. Langkah seterusnya ialah operasi tambah, tolak dan pendaraban skalar.",
  "2": "{n} memahami syarat dan cara menambah, menolak dan mendarab matriks dengan suatu nombor. Perlu lebih latihan mendarab dua matriks.",
  "3": "{n} boleh mendarab dua matriks dengan kaedah baris darab lajur dan menentukan peringkat hasil darab.",
  "4": "{n} mampu menentukan penentu, matriks identiti dan matriks songsang bagi matriks 2 × 2. Seterusnya, gunakan kaedah matriks untuk persamaan serentak.",
  "5": "{n} dapat menyelesaikan persamaan linear serentak dan masalah harian dengan kaedah matriks. Sudah bersedia untuk masalah bukan rutin.",
  "6": "{n} berjaya menggunakan matriks secara kreatif untuk mereka dan menyahsulit kod rahsia serta menerangkan peranan penentu. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Matriks. Cadangan: ulang hentian pertama dengan Rajah 1 dan susun data jualan kantin dalam bentuk matriks."
 },
 "lampiran": {
  "r1": "<figure class=\"figure jmi\" data-w=\"t5mat\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5mat&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Bilangan bungkus nasi lemak dan roti canai yang dijual oleh tiga gerai pada satu pagi. Gerakkan i dan j.&quot;,&quot;alt&quot;:&quot;Rajah interaktif matriks 3 dengan 2 jualan tiga gerai bagi dua jenis makanan; gelongsor baris dan lajur menyerlahkan satu unsur&quot;,&quot;mod&quot;:&quot;unsur&quot;,&quot;A&quot;:[[40,25],[32,30],[18,45]],&quot;baris&quot;:[&quot;Gerai Ali&quot;,&quot;Gerai Bala&quot;,&quot;Gerai Chong&quot;],&quot;lajur&quot;:[&quot;Nasi&quot;,&quot;Roti&quot;],&quot;tajuk&quot;:&quot;Jualan pagi (bungkus)&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 198\" role=\"img\" aria-label=\"Matriks 3 dengan 2 bagi Jualan pagi (bungkus); unsur a11 = 40\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Jualan pagi (bungkus)</text><text x=\"126\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">Nasi</text><text x=\"178\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">Roti</text><text x=\"90\" y=\"59.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" text-anchor=\"end\" font-weight=\"700\">Gerai Ali</text><text x=\"90\" y=\"83.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">Gerai Bala</text><text x=\"90\" y=\"107.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">Gerai Chong</text><rect x=\"102\" y=\"44\" width=\"48\" height=\"22\" rx=\"4\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1.2\"></rect><text x=\"126\" y=\"59.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">40</text><rect x=\"154\" y=\"44\" width=\"48\" height=\"22\" rx=\"4\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.2\"></rect><text x=\"178\" y=\"59.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">25</text><rect x=\"102\" y=\"68\" width=\"48\" height=\"22\" rx=\"4\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.2\"></rect><text x=\"126\" y=\"83.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">32</text><text x=\"178\" y=\"83.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">30</text><rect x=\"102\" y=\"92\" width=\"48\" height=\"22\" rx=\"4\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.2\"></rect><text x=\"126\" y=\"107.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">18</text><text x=\"178\" y=\"107.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">45</text><path d=\"M102 40Q94 79 102 118\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M202 40Q210 79 202 118\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><text class=\"jmi-hasil\" x=\"8\" y=\"146\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">Peringkat: 3 × 2 (3 baris, 2 lajur)</text><text class=\"jmi-hasil\" x=\"8\" y=\"168\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">a11 = 40  (baris 1, lajur 1)</text><text x=\"8\" y=\"188\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Gerai Ali, Nasi</text></svg></div><figcaption>Rajah 1 · Bilangan bungkus nasi lemak dan roti canai yang dijual oleh tiga gerai pada satu pagi. Gerakkan i dan j.</figcaption></figure>",
  "r2": "<figure class=\"figure jmi\" data-w=\"t5mat\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5mat&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Matriks A dan B. Pilih operasi.&quot;,&quot;alt&quot;:&quot;Rajah interaktif matriks A dan B dua dengan dua; cip memilih A tambah B, A tolak B, B tolak A atau 3A dan hasilnya dipaparkan&quot;,&quot;mod&quot;:&quot;operasi&quot;,&quot;A&quot;:[[3,-1],[2,4]],&quot;B&quot;:[[1,5],[-2,0]],&quot;ops&quot;:[{&quot;t&quot;:&quot;A + B&quot;,&quot;jenis&quot;:&quot;tambah&quot;},{&quot;t&quot;:&quot;A − B&quot;,&quot;jenis&quot;:&quot;tolak&quot;},{&quot;t&quot;:&quot;B − A&quot;,&quot;jenis&quot;:&quot;tolakB&quot;},{&quot;t&quot;:&quot;3A&quot;,&quot;jenis&quot;:&quot;skalar&quot;,&quot;k&quot;:3}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 180\" role=\"img\" aria-label=\"Matriks A dan B serta hasil A + B = [4 4; 0 4]\"><text x=\"8\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--vena)\" font-weight=\"700\">A =</text><text x=\"59\" y=\"25.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">3</text><text x=\"89\" y=\"25.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">−1</text><text x=\"59\" y=\"45.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">2</text><text x=\"89\" y=\"45.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">4</text><path d=\"M46 8Q38 31 46 54\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M102 8Q110 31 102 54\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><text x=\"136\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" font-weight=\"700\">B =</text><text x=\"187\" y=\"25.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">1</text><text x=\"217\" y=\"25.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">5</text><text x=\"187\" y=\"45.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">−2</text><text x=\"217\" y=\"45.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">0</text><path d=\"M174 8Q166 31 174 54\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M230 8Q238 31 230 54\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><text x=\"8\" y=\"80\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">A + B =</text><text class=\"jmi-hasil\" x=\"129\" y=\"79.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\">4</text><text class=\"jmi-hasil\" x=\"159\" y=\"79.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\">4</text><text class=\"jmi-hasil\" x=\"129\" y=\"99.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\">0</text><text class=\"jmi-hasil\" x=\"159\" y=\"99.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\">4</text><path d=\"M116 62Q108 85 116 108\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M172 62Q180 85 172 108\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><text x=\"8\" y=\"134\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Operasi pada unsur yang sepadan.</text><text x=\"8\" y=\"152\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Contoh unsur baris 1, lajur 1: </text><text class=\"jmi-hasil\" x=\"8\" y=\"170\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">3 + 1 = 4</text></svg></div><figcaption>Rajah 1 · Matriks A dan B. Pilih operasi.</figcaption></figure>",
  "r3": "<figure class=\"figure jmi\" data-w=\"t5mat\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5mat&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Pendaraban AB. Gerakkan gelongsor untuk melihat setiap unsur dikira.&quot;,&quot;alt&quot;:&quot;Rajah interaktif pendaraban dua matriks dua dengan dua; gelongsor memilih unsur hasil darab dan menyerlahkan baris A dan lajur B yang didarab&quot;,&quot;mod&quot;:&quot;darab&quot;,&quot;A&quot;:[[2,3],[1,4]],&quot;B&quot;:[[5,1],[2,6]]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 174\" role=\"img\" aria-label=\"Pendaraban matriks A dan B; unsur c11 = 16; AB = [16 20; 13 25]\"><text x=\"34\" y=\"20\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">A</text><rect x=\"10\" y=\"34\" width=\"22\" height=\"18\" rx=\"4\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.2\"></rect><text x=\"21\" y=\"47.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><rect x=\"36\" y=\"34\" width=\"22\" height=\"18\" rx=\"4\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.2\"></rect><text x=\"47\" y=\"47.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">3</text><text x=\"21\" y=\"67.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">1</text><text x=\"47\" y=\"67.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">4</text><path d=\"M10 30Q2 53 10 76\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M58 30Q66 53 58 76\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><text x=\"108\" y=\"20\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">B</text><rect x=\"84\" y=\"34\" width=\"22\" height=\"18\" rx=\"4\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.2\"></rect><text x=\"95\" y=\"47.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">5</text><text x=\"121\" y=\"47.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">1</text><rect x=\"84\" y=\"54\" width=\"22\" height=\"18\" rx=\"4\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.2\"></rect><text x=\"95\" y=\"67.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><text x=\"121\" y=\"67.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">6</text><path d=\"M84 30Q76 53 84 76\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M132 30Q140 53 132 76\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><text x=\"148\" y=\"57\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\">=</text><text x=\"192\" y=\"20\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">AB</text><rect x=\"164\" y=\"34\" width=\"26\" height=\"18\" rx=\"4\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1.2\"></rect><text x=\"177\" y=\"47.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">16</text><text x=\"207\" y=\"47.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">20</text><text x=\"177\" y=\"67.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">13</text><text x=\"207\" y=\"67.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">25</text><path d=\"M164 30Q156 53 164 76\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M220 30Q228 53 220 76\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><text x=\"8\" y=\"102\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">c11 = baris 1 A · lajur 1 B</text><text x=\"8\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">= 2×5 + 3×2</text><text class=\"jmi-hasil\" x=\"8\" y=\"142\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">= 16</text><text class=\"jmi-hasil\" x=\"8\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Peringkat: (2 × 2)(2 × 2) → 2 × 2</text></svg></div><figcaption>Rajah 1 · Pendaraban AB. Gerakkan gelongsor untuk melihat setiap unsur dikira.</figcaption></figure>",
  "r4": "<figure class=\"figure jmi\" data-w=\"t5mat\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5mat&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Empat matriks P, Q, R dan S. Pilih satu matriks.&quot;,&quot;alt&quot;:&quot;Rajah interaktif penentu dan matriks songsang bagi empat matriks dua dengan dua; satu matriks mempunyai penentu sifar dan tiada matriks songsang&quot;,&quot;mod&quot;:&quot;songsang&quot;,&quot;senarai&quot;:[[[4,3],[1,1]],[[2,5],[1,3]],[[3,2],[6,4]],[[5,2],[3,2]]]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 216\" role=\"img\" aria-label=\"Matriks P = [4 3; 1 1], penentu 1, matriks songsang [1 −3; −1 4]\"><text x=\"8\" y=\"26\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--vena)\" font-weight=\"700\">P =</text><text x=\"59\" y=\"29.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">4</text><text x=\"89\" y=\"29.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">3</text><text x=\"59\" y=\"49.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">1</text><text x=\"89\" y=\"49.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">1</text><path d=\"M46 12Q38 35 46 58\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M102 12Q110 35 102 58\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><text x=\"120\" y=\"26\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Penentu = ad − bc</text><text x=\"120\" y=\"44\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">= 4×1 − 3×1</text><text class=\"jmi-hasil\" x=\"120\" y=\"62\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">= 1</text><text x=\"8\" y=\"92\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">P⁻¹ = 1/1 ×</text><text x=\"129\" y=\"91.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">1</text><text x=\"159\" y=\"91.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">−3</text><text x=\"129\" y=\"111.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">−1</text><text x=\"159\" y=\"111.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">4</text><path d=\"M116 74Q108 97 116 120\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M172 74Q180 97 172 120\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><text x=\"8\" y=\"152\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" font-weight=\"700\">P⁻¹ =</text><text class=\"jmi-hasil\" x=\"87\" y=\"155.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" text-anchor=\"middle\">1</text><text class=\"jmi-hasil\" x=\"133\" y=\"155.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" text-anchor=\"middle\">−3</text><text class=\"jmi-hasil\" x=\"87\" y=\"175.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" text-anchor=\"middle\">−1</text><text class=\"jmi-hasil\" x=\"133\" y=\"175.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" text-anchor=\"middle\">4</text><path d=\"M66 138Q58 161 66 184\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M154 138Q162 161 154 184\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><text class=\"jmi-hasil\" x=\"8\" y=\"206\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">PP⁻¹ = I = [1 0; 0 1]</text></svg></div><figcaption>Rajah 1 · Empat matriks P, Q, R dan S. Pilih satu matriks.</figcaption></figure>",
  "r5": "<figure class=\"figure jmi cabar\" data-w=\"t5mat\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5mat&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Harga epal (x) dan oren (y) sekilogram. Kira dahulu, kemudian semak.&quot;,&quot;alt&quot;:&quot;Rajah interaktif persamaan linear serentak 2x + 3y = 13 dan x + 4y = 14 diselesaikan dengan kaedah matriks dalam empat langkah, dalam mod cabar&quot;,&quot;mod&quot;:&quot;serentak&quot;,&quot;cabar&quot;:true,&quot;A&quot;:[[2,3],[1,4]],&quot;P&quot;:[13,14],&quot;nama&quot;:[&quot;x&quot;,&quot;y&quot;]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 268\" role=\"img\" aria-label=\"Persamaan linear serentak diselesaikan dengan kaedah matriks, langkah 1 daripada 4\"><text x=\"8\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">2x + 3y = 13</text><text x=\"8\" y=\"36\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">x + 4y = 14</text><text x=\"25\" y=\"73.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\">2</text><text x=\"51\" y=\"73.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\">3</text><text x=\"25\" y=\"93.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\">1</text><text x=\"51\" y=\"93.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\">4</text><path d=\"M14 56Q6 79 14 102\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M62 56Q70 79 62 102\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><text x=\"89\" y=\"73.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">x</text><text x=\"89\" y=\"93.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">y</text><path d=\"M80 56Q72 79 80 102\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M98 56Q106 79 98 102\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><text x=\"112\" y=\"83\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\">=</text><text x=\"145\" y=\"73.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">13</text><text x=\"145\" y=\"93.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">14</text><path d=\"M132 56Q124 79 132 102\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M158 56Q166 79 158 102\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><text x=\"8\" y=\"242\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">Langkah 1 daripada 4:</text><text x=\"8\" y=\"258\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Tulis sistem dalam bentuk AX = B.</text></svg></div><figcaption>Rajah 1 · Harga epal (x) dan oren (y) sekilogram. Kira dahulu, kemudian semak.</figcaption></figure>",
  "r6": "<figure class=\"figure jmi\" data-w=\"t5mat\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5mat&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Mesej rahsia MATAHARI disulitkan dengan kunci K. Pilih pasangan huruf dan arah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif kod rahsia: setiap pasangan huruf ditukar kepada nombor dan didarab dengan matriks kunci K; arah nyahsulit menggunakan matriks songsang K&quot;,&quot;mod&quot;:&quot;kod&quot;,&quot;K&quot;:[[3,1],[5,2]],&quot;mesej&quot;:&quot;MATAHARI&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 166\" role=\"img\" aria-label=\"Kod rahsia: pasangan MA disulitkan dengan kunci K menjadi 40 dan 67\"><text x=\"8\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Kunci K =</text><text x=\"101\" y=\"21.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">3</text><text x=\"127\" y=\"21.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">1</text><text x=\"101\" y=\"41.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">5</text><text x=\"127\" y=\"41.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">2</text><path d=\"M90 4Q82 27 90 50\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><path d=\"M138 4Q146 27 138 50\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linejoin=\"round\"></path><text x=\"8\" y=\"66\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Huruf: A = 1, B = 2, …, Z = 26</text><text x=\"8\" y=\"92\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">Pasangan MA → M = 13, A = 1</text><text x=\"8\" y=\"114\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">K × [13; 1]</text><text x=\"8\" y=\"134\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">= [3×13 + 1×1; 5×13 + 2×1]</text><text class=\"jmi-hasil\" x=\"8\" y=\"156\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--arteri)\" font-weight=\"700\">Kod = 40, 67</text></svg></div><figcaption>Rajah 1 · Mesej rahsia MATAHARI disulitkan dengan kunci K. Pilih pasangan huruf dan arah.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Gerai Pasar",
   "sk": "2.1.1 – 2.1.3 Mewakilkan maklumat, peringkat, unsur dan matriks sama",
   "lampiran": "r1",
   "kadNama": "Peringkat Matriks",
   "kadEm": "📋",
   "kadFakta": "Matriks dengan m baris dan n lajur ialah matriks m × n, dibaca 'm dengan n'. Unsur aᵢⱼ terletak pada baris i dan lajur j.",
   "bosKadNama": "Matriks Sama",
   "bosKadEm": "🤝",
   "bosKadFakta": "Dua matriks adalah sama jika peringkatnya sama dan setiap unsur sepadan adalah sama.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Berdasarkan Rajah 1, apakah peringkat matriks jualan itu?",
     "p": [
      "3 × 2",
      "2 × 3",
      "6 × 1",
      "3 × 3"
     ],
     "b": 0,
     "u": "Matriks itu mempunyai 3 baris (tiga gerai) dan 2 lajur (dua jenis makanan), jadi peringkatnya 3 × 2."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, gerakkan i = 2 dan j = 1. Berapakah nilai unsur a₂₁?",
     "tol": 0.001000000001,
     "b": 32,
     "u": "a₂₁ ialah unsur pada baris 2 (Gerai Bala) dan lajur 1 (nasi lemak), iaitu 32."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah nilai unsur a₃₂?",
     "tol": 0.001000000001,
     "b": 45,
     "u": "Baris 3 ialah Gerai Chong dan lajur 2 ialah roti canai. a₃₂ = 45."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, unsur a₁₂ mewakili:",
     "p": [
      "Nasi lemak yang dijual oleh Gerai Bala",
      "Roti canai yang dijual oleh Gerai Ali",
      "Nasi lemak yang dijual oleh Gerai Ali",
      "Roti canai yang dijual oleh Gerai Bala"
     ],
     "b": 1,
     "u": "a₁₂ berada pada baris 1 (Gerai Ali) dan lajur 2 (roti canai), iaitu 25 bungkus."
    },
    {
     "j": "pilih",
     "t": "Matriks <span class=\"mat\" style=\"--k:3\" role=\"img\" aria-label=\"matriks 4 −1 7\"><span>4</span><span>−1</span><span>7</span></span> ialah:",
     "p": [
      "Matriks lajur 3 × 1",
      "Matriks segi empat sama",
      "Matriks baris",
      "Matriks identiti 3 × 3"
     ],
     "b": 2,
     "u": "Matriks itu mempunyai satu baris dan tiga lajur, jadi ia ialah matriks baris berperingkat 1 × 3."
    },
    {
     "j": "pilih",
     "t": "Matriks segi empat sama ialah matriks yang:",
     "p": [
      "Semua unsurnya mempunyai nilai yang sama",
      "Mempunyai satu lajur dan beberapa baris",
      "Setiap unsurnya ialah nombor kuasa dua",
      "Bilangan baris sama dengan bilangan lajur"
     ],
     "b": 3,
     "u": "Contoh matriks segi empat sama ialah matriks 2 × 2 dan 3 × 3. Bilangan baris dan lajurnya sama."
    },
    {
     "j": "nombor",
     "t": "Berapakah bilangan unsur dalam suatu matriks berperingkat 4 × 3?",
     "tol": 0.001000000001,
     "b": 12,
     "u": "Matriks 4 × 3 mempunyai 4 baris dan 3 lajur, jadi 4 × 3 = 12 unsur."
    },
    {
     "j": "nombor",
     "t": "Diberi <span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks x 3, baris seterusnya 4 y\"><span>x</span><span>3</span><span>4</span><span>y</span></span> = <span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 5 3, baris seterusnya 4 −2\"><span>5</span><span>3</span><span>4</span><span>−2</span></span>. Cari nilai x.",
     "tol": 0.001000000001,
     "b": 5,
     "u": "Matriks yang sama mempunyai unsur sepadan yang sama. Unsur baris 1, lajur 1: x = 5."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Diberi <span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 2x 6, baris seterusnya 5 y − 1\"><span>2x</span><span>6</span><span>5</span><span>y − 1</span></span> = <span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 8 6, baris seterusnya 5 4\"><span>8</span><span>6</span><span>5</span><span>4</span></span>. Hitung nilai x + y.",
    "tol": 0.001000000001,
    "b": 9,
    "u": "Langkah 1: 2x = 8, jadi x = 4. Langkah 2: y − 1 = 4, jadi y = 5. Maka x + y = 4 + 5 = 9."
   }
  },
  {
   "n": 2,
   "tempat": "Kaunter Stok",
   "sk": "2.2.1 / 2.2.2 Penambahan, penolakan dan pendaraban skalar",
   "lampiran": "r2",
   "kadNama": "Tambah dan Tolak",
   "kadEm": "➕",
   "kadFakta": "Dua matriks boleh ditambah atau ditolak jika peringkatnya sama. Operasi dibuat pada unsur yang sepadan.",
   "bosKadNama": "Pendaraban Skalar",
   "bosKadEm": "✖️",
   "bosKadFakta": "kA bermaksud setiap unsur A didarab dengan k. Contohnya 3A = A + A + A.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih A + B. Hasilnya ialah:",
     "p": [
      "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 4 4, baris seterusnya 0 4\"><span>4</span><span>4</span><span>0</span><span>4</span></span>",
      "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 4 −6, baris seterusnya 0 4\"><span>4</span><span>−6</span><span>0</span><span>4</span></span>",
      "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 2 4, baris seterusnya 4 4\"><span>2</span><span>4</span><span>4</span><span>4</span></span>",
      "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 4 4, baris seterusnya 4 4\"><span>4</span><span>4</span><span>4</span><span>4</span></span>"
     ],
     "b": 0,
     "u": "Tambah unsur sepadan: 3 + 1 = 4, −1 + 5 = 4, 2 + (−2) = 0, 4 + 0 = 4."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih A − B. Berapakah unsur pada baris 1, lajur 2?",
     "tol": 0.001000000001,
     "b": -6,
     "u": "Unsur baris 1, lajur 2: −1 − 5 = −6."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih B − A. Berapakah unsur pada baris 2, lajur 1?",
     "tol": 0.001000000001,
     "b": -4,
     "u": "Unsur baris 2, lajur 1: −2 − 2 = −4."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih 3A. Berapakah unsur pada baris 2, lajur 2?",
     "tol": 0.001000000001,
     "b": 12,
     "u": "Pendaraban skalar: setiap unsur didarab 3. 3 × 4 = 12."
    },
    {
     "j": "pilih",
     "t": "Bandingkan A − B dan B − A dalam Rajah 1. Apakah hubungannya?",
     "p": [
      "B − A = A − B",
      "B − A = −(A − B)",
      "B − A = 2(A − B)",
      "B − A = A + B"
     ],
     "b": 1,
     "u": "Setiap unsur B − A ialah negatif unsur sepadan A − B. Contohnya baris 1, lajur 2: −6 dan 6."
    },
    {
     "j": "pilih",
     "t": "Matriks <span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 1 2\"><span>1</span><span>2</span></span> dan <span class=\"mat\" style=\"--k:1\" role=\"img\" aria-label=\"matriks 3, baris seterusnya 4\"><span>3</span><span>4</span></span> tidak boleh ditambah kerana:",
     "p": [
      "Unsur-unsurnya berbeza",
      "Kedua-duanya bukan matriks segi empat sama",
      "Peringkat kedua-dua matriks berbeza",
      "Jumlah unsurnya tidak sama"
     ],
     "b": 2,
     "u": "Matriks pertama berperingkat 1 × 2 dan matriks kedua berperingkat 2 × 1. Penambahan memerlukan peringkat yang sama."
    },
    {
     "j": "nombor",
     "t": "Diberi <span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks x 2\"><span>x</span><span>2</span></span> + <span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 3 y\"><span>3</span><span>y</span></span> = <span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 7 5\"><span>7</span><span>5</span></span>. Cari nilai x.",
     "tol": 0.001000000001,
     "b": 4,
     "u": "Unsur pertama: x + 3 = 7, jadi x = 4. (Unsur kedua: 2 + y = 5, jadi y = 3.)"
    },
    {
     "j": "pilih",
     "t": "Bagi sebarang matriks A, A − A ialah:",
     "p": [
      "Matriks identiti I",
      "Matriks A",
      "Matriks 2A",
      "O"
     ],
     "b": 3,
     "u": "Setiap unsur ditolak dengan dirinya sendiri, jadi semua unsur menjadi 0. Hasilnya ialah matriks sifar O yang sama peringkat dengan A."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Berdasarkan Rajah 1, hitung 2A − 3B.",
    "p": [
     "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 3 −17, baris seterusnya 10 8\"><span>3</span><span>−17</span><span>10</span><span>8</span></span>",
     "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 3 13, baris seterusnya −2 8\"><span>3</span><span>13</span><span>−2</span><span>8</span></span>",
     "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 9 −17, baris seterusnya 10 8\"><span>9</span><span>−17</span><span>10</span><span>8</span></span>",
     "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 3 −17, baris seterusnya −2 8\"><span>3</span><span>−17</span><span>−2</span><span>8</span></span>"
    ],
    "b": 0,
    "u": "2A = [6 −2; 4 8] dan 3B = [3 15; −6 0]. 2A − 3B = [6 − 3, −2 − 15; 4 − (−6), 8 − 0] = [3 −17; 10 8]."
   }
  },
  {
   "n": 3,
   "tempat": "Kilang Darab",
   "sk": "2.2.3 Pendaraban dua matriks",
   "lampiran": "r3",
   "kadNama": "Baris Darab Lajur",
   "kadEm": "🧮",
   "kadFakta": "Unsur cᵢⱼ dalam AB = baris i matriks A didarab dengan lajur j matriks B, kemudian hasil darab itu dijumlahkan.",
   "bosKadNama": "Jumlah Belian",
   "bosKadEm": "🧾",
   "bosKadFakta": "Matriks harga 1 × n didarab matriks kuantiti n × 1 memberi jumlah bayaran sebagai matriks 1 × 1.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih unsur c11. Berapakah nilainya?",
     "tol": 0.001000000001,
     "b": 16,
     "u": "c₁₁ = baris 1 A · lajur 1 B = 2 × 5 + 3 × 2 = 10 + 6 = 16."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih unsur c12. Berapakah nilainya?",
     "tol": 0.001000000001,
     "b": 20,
     "u": "c₁₂ = 2 × 1 + 3 × 6 = 2 + 18 = 20."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah unsur c₂₁?",
     "tol": 0.001000000001,
     "b": 13,
     "u": "c₂₁ = baris 2 A · lajur 1 B = 1 × 5 + 4 × 2 = 5 + 8 = 13."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah unsur c₂₂?",
     "tol": 0.001000000001,
     "b": 25,
     "u": "c₂₂ = 1 × 1 + 4 × 6 = 1 + 24 = 25."
    },
    {
     "j": "pilih",
     "t": "Pendaraban AB boleh dilakukan jika:",
     "p": [
      "Bilangan baris A sama dengan bilangan baris B",
      "Bilangan lajur A sama dengan bilangan baris B",
      "A dan B ialah matriks segi empat sama",
      "Bilangan unsur A sama dengan bilangan unsur B"
     ],
     "b": 1,
     "u": "Setiap baris A didarab dengan setiap lajur B, jadi panjang baris A (bilangan lajur A) mesti sama dengan panjang lajur B (bilangan baris B)."
    },
    {
     "j": "pilih",
     "t": "Matriks P berperingkat 2 × 3 dan Q berperingkat 3 × 1. Peringkat PQ ialah:",
     "p": [
      "3 × 3",
      "1 × 2",
      "2 × 1",
      "2 × 3"
     ],
     "b": 2,
     "u": "(2 × 3)(3 × 1): nombor dalam sama (3), dan peringkat hasil ialah nombor luar, 2 × 1."
    },
    {
     "j": "pilih",
     "t": "Bagi matriks A dan B dalam Rajah 1, BA ialah <span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 11 19, baris seterusnya 10 30\"><span>11</span><span>19</span><span>10</span><span>30</span></span>. Apakah kesimpulannya?",
     "p": [
      "AB = BA kerana kedua-duanya 2 × 2",
      "AB = BA kerana unsur pepenjurunya sama",
      "BA tidak wujud kerana B dahulu",
      "AB ≠ BA, jadi pendaraban matriks tidak kalis tukar tertib"
     ],
     "b": 3,
     "u": "AB = [16 20; 13 25] tetapi BA = [11 19; 10 30]. Secara umum AB ≠ BA, jadi tertib pendaraban penting."
    },
    {
     "j": "nombor",
     "t": "Hitung <span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 2 3\"><span>2</span><span>3</span></span> × <span class=\"mat\" style=\"--k:1\" role=\"img\" aria-label=\"matriks 4, baris seterusnya 1\"><span>4</span><span>1</span></span>.",
     "tol": 0.001000000001,
     "b": 11,
     "u": "(1 × 2)(2 × 1) memberi matriks 1 × 1: 2 × 4 + 3 × 1 = 8 + 3 = 11."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Harga sebuah buku, pen dan pembaris masing-masing ialah RM3, RM2 dan RM5. Aina membeli 4 buku, 6 pen dan 2 pembaris. Hitung <span class=\"mat\" style=\"--k:3\" role=\"img\" aria-label=\"matriks 3 2 5\"><span>3</span><span>2</span><span>5</span></span> × <span class=\"mat\" style=\"--k:1\" role=\"img\" aria-label=\"matriks 4, baris seterusnya 6, baris seterusnya 2\"><span>4</span><span>6</span><span>2</span></span> untuk mencari jumlah bayaran, dalam RM.",
    "tol": 0.001000000001,
    "b": 34,
    "u": "Baris harga didarab lajur kuantiti: 3 × 4 + 2 × 6 + 5 × 2 = 12 + 12 + 10 = RM34."
   }
  },
  {
   "n": 4,
   "tempat": "Bilik Kunci",
   "sk": "2.2.4 / 2.2.5 Matriks identiti dan matriks songsang",
   "lampiran": "r4",
   "kadNama": "Matriks Identiti",
   "kadEm": "🔑",
   "kadFakta": "I = [1 0; 0 1]. Bagi sebarang matriks A 2 × 2, AI = IA = A, sama seperti nombor 1 dalam pendaraban.",
   "bosKadNama": "Penentu Sifar",
   "bosKadEm": "🚫",
   "bosKadFakta": "Matriks songsang A⁻¹ wujud hanya jika penentu ad − bc ≠ 0.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih P. Berapakah penentu P?",
     "tol": 0.001000000001,
     "b": 1,
     "u": "Penentu = ad − bc = 4 × 1 − 3 × 1 = 4 − 3 = 1."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, P⁻¹ ialah <span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 1 p, baris seterusnya −1 4\"><span>1</span><span>p</span><span>−1</span><span>4</span></span>. Cari nilai p.",
     "tol": 0.001000000001,
     "b": -3,
     "u": "P⁻¹ = 1/1 × [1 −3; −1 4]. Tukar kedudukan a dan d, dan tukar tanda b dan c, jadi p = −3."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, matriks manakah tidak mempunyai matriks songsang?",
     "p": [
      "R",
      "P",
      "Q",
      "S"
     ],
     "b": 0,
     "u": "Penentu R = 3 × 4 − 2 × 6 = 12 − 12 = 0. Matriks dengan penentu sifar tiada songsang."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah penentu S?",
     "tol": 0.001000000001,
     "b": 4,
     "u": "Penentu S = 5 × 2 − 2 × 3 = 10 − 6 = 4."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah unsur baris 2, lajur 2 bagi S⁻¹? Berikan jawapan dalam bentuk perpuluhan.",
     "tol": 0.005000000005,
     "b": 1.25,
     "u": "S⁻¹ = ¼ × [2 −2; −3 5]. Unsur baris 2, lajur 2 = 5 ÷ 4 = 1.25."
    },
    {
     "j": "pilih",
     "t": "Matriks identiti 2 × 2 ialah:",
     "p": [
      "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 0 1, baris seterusnya 1 0\"><span>0</span><span>1</span><span>1</span><span>0</span></span>",
      "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 1 0, baris seterusnya 0 1\"><span>1</span><span>0</span><span>0</span><span>1</span></span>",
      "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 1 1, baris seterusnya 1 1\"><span>1</span><span>1</span><span>1</span><span>1</span></span>",
      "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 0 0, baris seterusnya 0 0\"><span>0</span><span>0</span><span>0</span><span>0</span></span>"
     ],
     "b": 1,
     "u": "Matriks identiti mempunyai 1 pada pepenjuru utama dan 0 di tempat lain."
    },
    {
     "j": "pilih",
     "t": "Diberi A ialah matriks 2 × 2 dan I ialah matriks identiti. AI sama dengan:",
     "p": [
      "Matriks I",
      "Matriks 2A",
      "A",
      "Matriks sifar O"
     ],
     "b": 2,
     "u": "Pendaraban dengan I tidak mengubah matriks: AI = IA = A. Semak: [4 3; 1 1][1 0; 0 1] = [4 3; 1 1]."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Q. Hasil darab QQ⁻¹ ialah:",
     "p": [
      "Matriks sifar O",
      "Matriks Q",
      "Matriks Q⁻¹",
      "Matriks identiti I"
     ],
     "b": 3,
     "u": "Mengikut takrif, AA⁻¹ = A⁻¹A = I. Semak: [2 5; 1 3][3 −5; −1 2] = [1 0; 0 1]."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Matriks <span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks k 4, baris seterusnya 3 6\"><span>k</span><span>4</span><span>3</span><span>6</span></span> tidak mempunyai matriks songsang. Cari nilai k.",
    "tol": 0.001000000001,
    "b": 2,
    "u": "Tiada songsang bermaksud penentu = 0. 6k − 4 × 3 = 0, jadi 6k = 12 dan k = 2."
   }
  },
  {
   "n": 5,
   "tempat": "Pasar Raya",
   "sk": "2.2.6 / 2.2.7 Persamaan linear serentak dan masalah matriks",
   "lampiran": "r5",
   "kadNama": "AX = B",
   "kadEm": "🛒",
   "kadFakta": "Sistem ax + by = p dan cx + dy = q ditulis sebagai AX = B. Penyelesaiannya ialah X = A⁻¹B.",
   "bosKadNama": "Tiket Pameran",
   "bosKadEm": "🎫",
   "bosKadFakta": "Selepas mendapat nilai pemboleh ubah, sentiasa jawab soalan asal: kadang-kadang soalan meminta jumlah, bukan nilai x atau y.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Berdasarkan Rajah 1, persamaan 2x + 3y = 13 dan x + 4y = 14 ditulis dalam bentuk matriks sebagai:",
     "p": [
      "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 2 3, baris seterusnya 1 4\"><span>2</span><span>3</span><span>1</span><span>4</span></span><span class=\"mat\" style=\"--k:1\" role=\"img\" aria-label=\"matriks x, baris seterusnya y\"><span>x</span><span>y</span></span> = <span class=\"mat\" style=\"--k:1\" role=\"img\" aria-label=\"matriks 13, baris seterusnya 14\"><span>13</span><span>14</span></span>",
      "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 2 1, baris seterusnya 3 4\"><span>2</span><span>1</span><span>3</span><span>4</span></span><span class=\"mat\" style=\"--k:1\" role=\"img\" aria-label=\"matriks x, baris seterusnya y\"><span>x</span><span>y</span></span> = <span class=\"mat\" style=\"--k:1\" role=\"img\" aria-label=\"matriks 13, baris seterusnya 14\"><span>13</span><span>14</span></span>",
      "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 2 3, baris seterusnya 1 4\"><span>2</span><span>3</span><span>1</span><span>4</span></span><span class=\"mat\" style=\"--k:1\" role=\"img\" aria-label=\"matriks x, baris seterusnya y\"><span>x</span><span>y</span></span> = <span class=\"mat\" style=\"--k:1\" role=\"img\" aria-label=\"matriks 14, baris seterusnya 13\"><span>14</span><span>13</span></span>",
      "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 13 3, baris seterusnya 14 4\"><span>13</span><span>3</span><span>14</span><span>4</span></span><span class=\"mat\" style=\"--k:1\" role=\"img\" aria-label=\"matriks x, baris seterusnya y\"><span>x</span><span>y</span></span> = <span class=\"mat\" style=\"--k:1\" role=\"img\" aria-label=\"matriks 2, baris seterusnya 1\"><span>2</span><span>1</span></span>"
     ],
     "b": 0,
     "u": "Pekali x dan y bagi setiap persamaan menjadi satu baris matriks A. Pemalar di sebelah kanan menjadi matriks lajur."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, gerakkan ke langkah 2. Berapakah penentu matriks pekali? Kira dahulu, kemudian semak.",
     "tol": 0.001000000001,
     "b": 5,
     "u": "Penentu = 2 × 4 − 3 × 1 = 8 − 3 = 5."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah harga sekilogram epal, x, dalam RM?",
     "tol": 0.001000000001,
     "b": 2,
     "u": "x = (4 × 13 − 3 × 14) ÷ 5 = (52 − 42) ÷ 5 = 2."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah harga sekilogram oren, y, dalam RM?",
     "tol": 0.001000000001,
     "b": 3,
     "u": "y = (2 × 14 − 1 × 13) ÷ 5 = (28 − 13) ÷ 5 = 3."
    },
    {
     "j": "nombor",
     "t": "Selesaikan dengan kaedah matriks: 3x + 2y = 12 dan x − y = −1. Cari nilai x.",
     "tol": 0.001000000001,
     "b": 2,
     "u": "Penentu = 3(−1) − 2(1) = −5. x = ((−1)(12) − 2(−1)) ÷ (−5) = (−12 + 2) ÷ (−5) = 2."
    },
    {
     "j": "nombor",
     "t": "Bagi sistem 3x + 2y = 12 dan x − y = −1, cari nilai y.",
     "tol": 0.001000000001,
     "b": 3,
     "u": "y = (3(−1) − 1(12)) ÷ (−5) = (−3 − 12) ÷ (−5) = 3. Semak: 3(2) + 2(3) = 12."
    },
    {
     "j": "pilih",
     "t": "Sistem 2x + 4y = 6 dan x + 2y = 5 tidak dapat diselesaikan dengan kaedah matriks songsang kerana:",
     "p": [
      "Pemalar 6 dan 5 berbeza",
      "Penentu matriks pekali ialah sifar",
      "Matriks pekali bukan segi empat sama",
      "Nilai x dan y negatif"
     ],
     "b": 1,
     "u": "Penentu = 2 × 2 − 4 × 1 = 0, jadi A⁻¹ tidak wujud. Kedua-dua garis selari dan tiada penyelesaian."
    },
    {
     "j": "pilih",
     "t": "Dalam X = A⁻¹B, mengapakah A⁻¹ didarab di sebelah kiri B dan bukan di sebelah kanan?",
     "p": [
      "Supaya penentu menjadi positif",
      "Kerana B ialah matriks segi empat sama",
      "Pendaraban matriks tidak kalis tukar tertib, dan A⁻¹A = I",
      "Kerana A⁻¹ sentiasa lebih kecil daripada B"
     ],
     "b": 2,
     "u": "Daripada AX = B, darab kedua-dua belah di sebelah kiri dengan A⁻¹: A⁻¹AX = A⁻¹B, jadi IX = X = A⁻¹B. BA⁻¹ biasanya tidak sama dengan A⁻¹B."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "3 tiket dewasa dan 2 tiket kanak-kanak berharga RM64. 2 tiket dewasa dan 5 tiket kanak-kanak berharga RM72. Gunakan kaedah matriks untuk mencari harga 4 tiket dewasa dan 3 tiket kanak-kanak, dalam RM.",
    "tol": 0.001000000001,
    "b": 88,
    "u": "Langkah 1: [3 2; 2 5][a; k] = [64; 72], penentu = 15 − 4 = 11. Langkah 2: a = (5 × 64 − 2 × 72) ÷ 11 = 16 dan k = (3 × 72 − 2 × 64) ÷ 11 = 8. Langkah 3: 4(16) + 3(8) = 64 + 24 = RM88."
   }
  },
  {
   "n": 6,
   "tempat": "Bilik Kod",
   "sk": "2.2.7 Masalah matriks bukan rutin (kod rahsia)",
   "lampiran": "r6",
   "kadNama": "Kunci Rahsia",
   "kadEm": "🔐",
   "kadFakta": "Mesej boleh disulitkan dengan mendarab pasangan nombor dengan matriks kunci K, dan dinyahsulit dengan K⁻¹.",
   "bosKadNama": "Pereka Kod",
   "bosKadEm": "🕵️",
   "bosKadFakta": "Kunci dengan penentu 1 atau −1 memberi K⁻¹ yang semua unsurnya integer, jadi mesej boleh dinyahsulit tanpa pecahan.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih pasangan MA dan arah Sulitkan. Kod yang terhasil ialah:",
     "p": [
      "13, 1",
      "67, 40",
      "41, 66",
      "40, 67"
     ],
     "b": 3,
     "u": "M = 13, A = 1. K[13; 1] = [3 × 13 + 1 × 1; 5 × 13 + 2 × 1] = [40; 67]."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih pasangan TA. Berapakah nombor kod yang pertama?",
     "tol": 0.001000000001,
     "b": 61,
     "u": "T = 20, A = 1. Nombor pertama = 3 × 20 + 1 × 1 = 61."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah penentu kunci K?",
     "tol": 0.001000000001,
     "b": 1,
     "u": "Penentu K = 3 × 2 − 1 × 5 = 6 − 5 = 1."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, K⁻¹ = <span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 2 q, baris seterusnya −5 3\"><span>2</span><span>q</span><span>−5</span><span>3</span></span>. Cari nilai q.",
     "tol": 0.001000000001,
     "b": -1,
     "u": "K⁻¹ = 1/1 × [2 −1; −5 3]. Unsur b ditukar tanda: q = −1."
    },
    {
     "j": "pilih",
     "t": "Kod 63, 108 diterima. Gunakan K⁻¹ dalam Rajah 1 untuk menyahsulitnya. Pasangan hurufnya ialah:",
     "p": [
      "RI",
      "IR",
      "HA",
      "TA"
     ],
     "b": 0,
     "u": "K⁻¹[63; 108] = [2 × 63 − 108; −5 × 63 + 3 × 108] = [18; 9]. Huruf ke-18 ialah R dan huruf ke-9 ialah I."
    },
    {
     "j": "pilih",
     "t": "Mengapakah kunci dengan penentu 1 lebih sesuai untuk kod ini berbanding kunci dengan penentu 7?",
     "p": [
      "Nombor kod yang terhasil menjadi lebih kecil dan mudah ditulis",
      "Unsur K⁻¹ ialah integer, jadi huruf asal diperoleh dengan tepat",
      "Kunci itu boleh didarab dengan mana-mana matriks lain",
      "Penentu 7 menjadikan matriks songsang kunci tidak wujud"
     ],
     "b": 1,
     "u": "K⁻¹ = (1/penentu) × [d −b; −c a]. Dengan penentu 1, tiada pecahan, jadi pengiraan nyahsulit memberi nombor bulat 1 hingga 26."
    },
    {
     "j": "pilih",
     "t": "Diberi AX = B dengan A = <span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 2 1, baris seterusnya 1 1\"><span>2</span><span>1</span><span>1</span><span>1</span></span> dan B = <span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 7 4, baris seterusnya 5 3\"><span>7</span><span>4</span><span>5</span><span>3</span></span>. Matriks X ialah:",
     "p": [
      "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 9 5, baris seterusnya 12 7\"><span>9</span><span>5</span><span>12</span><span>7</span></span>",
      "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 1 2, baris seterusnya 3 2\"><span>1</span><span>2</span><span>3</span><span>2</span></span>",
      "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 2 1, baris seterusnya 3 2\"><span>2</span><span>1</span><span>3</span><span>2</span></span>",
      "<span class=\"mat\" style=\"--k:2\" role=\"img\" aria-label=\"matriks 3 1, baris seterusnya 2 1\"><span>3</span><span>1</span><span>2</span><span>1</span></span>"
     ],
     "b": 2,
     "u": "X = A⁻¹B. Penentu A = 2 − 1 = 1, A⁻¹ = [1 −1; −1 2]. X = [7 − 5, 4 − 3; −7 + 10, −4 + 6] = [2 1; 3 2]."
    },
    {
     "j": "nombor",
     "t": "Seorang murid menyulitkan pasangan HA dengan kunci K dalam Rajah 1 dan mendapat 25 dan 42. Dia mahu menghantar mesej 'HAHA'. Berapakah jumlah keempat-empat nombor kod?",
     "tol": 0.001000000001,
     "b": 134,
     "u": "Setiap pasangan HA menjadi 25 dan 42. Untuk HAHA: 25 + 42 + 25 + 42 = 134. Perhatikan bahawa pasangan yang sama memberi kod yang sama, satu kelemahan kod ini."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Reka sistem kod rahsia awak sendiri menggunakan matriks 2 × 2.",
    "arahan": "Pilih matriks kunci K dengan penentu 1 atau −1 dan tunjukkan pengiraan penentunya. Sulitkan satu perkataan empat huruf (A = 1, …, Z = 26), kemudian tunjukkan cara rakan awak menyahsulit kod itu dengan K⁻¹ dan semak bahawa KK⁻¹ = I. Terangkan mengapa kunci dengan penentu 0 tidak boleh digunakan, dan cadangkan satu cara untuk menjadikan kod awak lebih sukar diteka.",
    "u": "Jawapan TP6 yang kukuh memilih kunci yang sah dengan penentu ±1, menunjukkan pengiraan penyulitan dan penyahsulitan yang tepat, menyemak KK⁻¹ = I, menerangkan peranan penentu, dan mencadangkan penambahbaikan yang munasabah."
   }
  }
 ]
};
