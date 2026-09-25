/* Bank soalan — Matematik Ting. 1 · Bab 12 Pengendalian Data.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m1b12.js
   kemudian jalankan: node bina.js m1b12

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 1, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m1b12"] =
{
 "id": "m1b12",
 "tingkatan": 1,
 "kod": "12.0 Pengendalian Data",
 "tajuk": "Graf Jujur",
 "subtajuk": "Matematik Ting. 1 · Bab 12 Pengendalian Data",
 "spi": [
  "Mempamerkan pengetahuan asas tentang pengumpulan, pengorganisasian dan perwakilan data.",
  "Mempamerkan kefahaman tentang pengumpulan, pengorganisasian dan perwakilan data.",
  "Mengaplikasikan kefahaman tentang perwakilan data untuk membina perwakilan data.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang perwakilan dan pentafsiran data dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang perwakilan dan pentafsiran data dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang perwakilan dan pentafsiran data dalam konteks penyelesaian masalah bukan rutin."
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
  "1": "{n} dapat mengenal jenis data (kategori, numerik diskret dan numerik selanjar) serta langkah dalam inkuiri statistik. Langkah seterusnya ialah membina jadual kekerapan daripada data.",
  "2": "{n} memahami cara mengumpul dan menyusun data dalam jadual kekerapan dan plot titik. Perlu lebih latihan mengira kekerapan dan jumlah kekerapan sebelum bergerak ke TP3.",
  "3": "{n} boleh membina dan menukar antara carta palang dan carta pai, termasuk mengira sudut sektor dan peratus. Galakkan menyemak jumlah sudut sentiasa 360°.",
  "4": "{n} mampu membaca dan mentafsir plot batang-dan-daun serta menyelesaikan masalah rutin yang mudah menggunakan data. Seterusnya latih mentafsir histogram.",
  "5": "{n} dapat mentafsir histogram dan poligon kekerapan, termasuk mengubah selang kelas dan menyelesaikan masalah kompleks. Sudah bersedia untuk menilai perwakilan data.",
  "6": "{n} berjaya menilai perwakilan data secara beretika, mengenal pasti paksi yang dipotong dan membuat ramalan yang munasabah. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pengendalian Data. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil menyebut jenis setiap data dengan bimbingan rakan sebaya."
 },
 "lampiran": {
  "jen1": "<figure class=\"figure jmi\" data-w=\"t1data\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1data&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Pilih satu data dengan gelongsor. Kotak yang menyala menunjukkan jenis data itu.&quot;,&quot;alt&quot;:&quot;Rajah interaktif pokok jenis data; gelongsor memilih satu pemboleh ubah dan menyalakan kotak jenisnya iaitu kategori, numerik diskret atau numerik selanjar&quot;,&quot;mod&quot;:&quot;jenis&quot;,&quot;i&quot;:0,&quot;senarai&quot;:[[&quot;Warna&quot;,&quot;Warna baju sukan kegemaran&quot;,&quot;k&quot;,&quot;Contoh: merah, biru, hijau&quot;],[&quot;Adik-beradik&quot;,&quot;Bilangan adik-beradik murid&quot;,&quot;d&quot;,&quot;Contoh: 0, 1, 2, 3&quot;],[&quot;Tinggi&quot;,&quot;Tinggi murid (cm)&quot;,&quot;l&quot;,&quot;Contoh: 152.5 cm&quot;],[&quot;Sukan&quot;,&quot;Jenis sukan kegemaran&quot;,&quot;k&quot;,&quot;Contoh: bola, renang, lari&quot;],[&quot;Buku&quot;,&quot;Bilangan buku dibaca sebulan&quot;,&quot;d&quot;,&quot;Contoh: 0, 1, 2, 3, 4&quot;],[&quot;Berat beg&quot;,&quot;Jisim beg sekolah (kg)&quot;,&quot;l&quot;,&quot;Contoh: 3.4 kg&quot;]]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 212\" role=\"img\" aria-label=\"Rajah pokok jenis data: kategori atau numerik, dan numerik terbahagi kepada diskret dan selanjar. Pemboleh ubah dipilih ialah Warna baju sukan kegemaran\"><text x=\"130\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Warna baju sukan kegemaran</text><text x=\"130\" y=\"36\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Contoh: merah, biru, hijau</text><line x1=\"130\" y1=\"46\" x2=\"68\" y2=\"62\" stroke=\"var(--line2)\" stroke-width=\"1.5\" stroke-linecap=\"round\"></line><line x1=\"130\" y1=\"46\" x2=\"192\" y2=\"62\" stroke=\"var(--line2)\" stroke-width=\"1.5\" stroke-linecap=\"round\"></line><rect x=\"10\" y=\"62\" width=\"116\" height=\"26\" rx=\"6\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><rect class=\"jmi-hasil\" x=\"10\" y=\"62\" width=\"116\" height=\"26\" rx=\"6\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"2.4\"></rect><text x=\"68\" y=\"79\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Kategori</text><rect x=\"134\" y=\"62\" width=\"116\" height=\"26\" rx=\"6\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><text x=\"192\" y=\"79\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Numerik</text><line x1=\"192\" y1=\"88\" x2=\"160\" y2=\"112\" stroke=\"var(--line2)\" stroke-width=\"1.5\" stroke-linecap=\"round\"></line><line x1=\"192\" y1=\"88\" x2=\"224\" y2=\"112\" stroke=\"var(--line2)\" stroke-width=\"1.5\" stroke-linecap=\"round\"></line><rect x=\"132\" y=\"112\" width=\"58\" height=\"26\" rx=\"6\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><text x=\"161\" y=\"129\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Diskret</text><rect x=\"196\" y=\"112\" width=\"58\" height=\"26\" rx=\"6\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><text x=\"225\" y=\"129\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Selanjar</text><text x=\"8\" y=\"166\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">Jenis data:</text><text class=\"jmi-hasil\" x=\"98\" y=\"166\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">kategori</text><text class=\"jmi-hasil\" x=\"8\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Nama atau kelas, bukan nombor.</text><text class=\"jmi-hasil\" x=\"8\" y=\"200\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Tiada nilai pertengahan.</text></svg></div><figcaption>Rajah 1 · Pilih satu data dengan gelongsor. Kotak yang menyala menunjukkan jenis data itu.</figcaption></figure>",
  "tit1": "<figure class=\"figure jmi\" data-w=\"t1data\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1data&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Markah kuiz 15 murid. Tolak gelongsor data untuk menambah satu titik demi satu titik dan lihat jadual kekerapan.&quot;,&quot;alt&quot;:&quot;Rajah interaktif plot titik dan jadual kekerapan bagi markah kuiz 15 murid dari 2 hingga 5; gelongsor menambah data satu demi satu&quot;,&quot;mod&quot;:&quot;titik&quot;,&quot;data&quot;:[3,5,4,3,2,5,4,3,4,3,5,3,2,4,3],&quot;n&quot;:6,&quot;nama&quot;:&quot;Markah&quot;,&quot;tajuk&quot;:&quot;markah kuiz 15 murid&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 170\" role=\"img\" aria-label=\"Rajah plot titik dan jadual kekerapan bagi 6 data pertama markah kuiz 15 murid, nilai 2 hingga 5\"><text x=\"8\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">Data ke-6: 5</text><line x1=\"40\" y1=\"106\" x2=\"252\" y2=\"106\" stroke=\"var(--ink3)\" stroke-width=\"1.8\" stroke-linecap=\"round\"></line><line x1=\"66.5\" y1=\"106\" x2=\"66.5\" y2=\"110\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"66.5\" y=\"123\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><text class=\"jmi-hasil\" x=\"66.5\" y=\"141\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">1</text><line x1=\"119.5\" y1=\"106\" x2=\"119.5\" y2=\"110\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"119.5\" y=\"123\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">3</text><text class=\"jmi-hasil\" x=\"119.5\" y=\"141\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">2</text><line x1=\"172.5\" y1=\"106\" x2=\"172.5\" y2=\"110\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"172.5\" y=\"123\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">4</text><text class=\"jmi-hasil\" x=\"172.5\" y=\"141\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">1</text><line x1=\"225.5\" y1=\"106\" x2=\"225.5\" y2=\"110\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"225.5\" y=\"123\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">5</text><text class=\"jmi-hasil\" x=\"225.5\" y=\"141\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">2</text><circle cx=\"119.5\" cy=\"99\" r=\"4.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"225.5\" cy=\"99\" r=\"4.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"172.5\" cy=\"99\" r=\"4.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"119.5\" cy=\"88\" r=\"4.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"66.5\" cy=\"99\" r=\"4.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"225.5\" cy=\"88\" r=\"4.5\" fill=\"var(--arteri)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><text x=\"8\" y=\"123\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Markah</text><text x=\"8\" y=\"141\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" font-weight=\"700\">f</text><text class=\"jmi-hasil\" x=\"8\" y=\"161\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Jumlah f = 6</text></svg></div><figcaption>Rajah 1 · Markah kuiz 15 murid. Tolak gelongsor data untuk menambah satu titik demi satu titik dan lihat jadual kekerapan.</figcaption></figure>",
  "pal1": "<figure class=\"figure jmi\" data-w=\"t1data\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1data&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Sukan kegemaran 40 murid. Pilih kategori, dan tukar antara carta palang dengan carta pai.&quot;,&quot;alt&quot;:&quot;Rajah interaktif carta palang dan carta pai bagi sukan kegemaran 40 murid; gelongsor memilih kategori dan menukar paparan&quot;,&quot;mod&quot;:&quot;palang&quot;,&quot;data&quot;:[[&quot;Bola&quot;,12],[&quot;Renang&quot;,8],[&quot;Lari&quot;,6],[&quot;Silat&quot;,4],[&quot;Tenis&quot;,10]],&quot;ymaks&quot;:12,&quot;tajuk&quot;:&quot;sukan kegemaran 40 murid&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 250\" role=\"img\" aria-label=\"Rajah data sukan kegemaran 40 murid dipaparkan sebagai carta palang; kategori dipilih ialah Bola dengan kekerapan 12 daripada 40\"><line x1=\"38\" y1=\"150\" x2=\"252\" y2=\"150\" stroke=\"var(--line)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><text x=\"33\" y=\"154\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">0</text><line x1=\"38\" y1=\"121\" x2=\"252\" y2=\"121\" stroke=\"var(--line)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><text x=\"33\" y=\"125\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">3</text><line x1=\"38\" y1=\"92\" x2=\"252\" y2=\"92\" stroke=\"var(--line)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><text x=\"33\" y=\"96\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">6</text><line x1=\"38\" y1=\"63\" x2=\"252\" y2=\"63\" stroke=\"var(--line)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><text x=\"33\" y=\"67\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">9</text><line x1=\"38\" y1=\"34\" x2=\"252\" y2=\"34\" stroke=\"var(--line)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><text x=\"33\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">12</text><line x1=\"38\" y1=\"34\" x2=\"38\" y2=\"150\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linecap=\"round\"></line><line x1=\"38\" y1=\"150\" x2=\"252\" y2=\"150\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linecap=\"round\"></line><rect x=\"46.6\" y=\"34\" width=\"25.7\" height=\"116\" rx=\"2\" fill=\"var(--amber)\" stroke=\"var(--ink)\" stroke-width=\"2\"></rect><text x=\"59.4\" y=\"165\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Bola</text><text x=\"59.4\" y=\"29\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">12</text><rect x=\"89.4\" y=\"72.7\" width=\"25.7\" height=\"77.3\" rx=\"2\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.2\"></rect><text x=\"102.2\" y=\"165\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Renang</text><rect x=\"132.2\" y=\"92\" width=\"25.7\" height=\"58\" rx=\"2\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.2\"></rect><text x=\"145\" y=\"165\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Lari</text><rect x=\"175\" y=\"111.3\" width=\"25.7\" height=\"38.7\" rx=\"2\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.2\"></rect><text x=\"187.8\" y=\"165\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Silat</text><rect x=\"217.8\" y=\"53.3\" width=\"25.7\" height=\"96.7\" rx=\"2\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.2\"></rect><text x=\"230.6\" y=\"165\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Tenis</text><text x=\"8\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" font-weight=\"700\">f</text><text x=\"8\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Bola: f = 12</text><text x=\"8\" y=\"206\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">Jumlah f = 40</text><text class=\"jmi-hasil\" x=\"8\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Sudut = 12/40 × 360° = 108°</text><text class=\"jmi-hasil\" x=\"8\" y=\"238\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Peratus = 30%</text></svg></div><figcaption>Rajah 1 · Sukan kegemaran 40 murid. Pilih kategori, dan tukar antara carta palang dengan carta pai.</figcaption></figure>",
  "bat1": "<figure class=\"figure jmi cabar\" data-w=\"t1data\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1data&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Plot batang-dan-daun bagi markah 12 murid. Kira dahulu, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif plot batang-dan-daun bagi markah 12 murid dari 23 hingga 45; gelongsor menambah data dan menyusun daun&quot;,&quot;mod&quot;:&quot;batang&quot;,&quot;data&quot;:[23,35,28,41,36,32,45,29,38,33,27,44],&quot;tajuk&quot;:&quot;markah 12 murid&quot;,&quot;cabar&quot;:true}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 150\" role=\"img\" aria-label=\"Rajah plot batang-dan-daun bagi 12 data markah 12 murid, daun mengikut susunan asal\"><text x=\"52\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">Batang</text><text x=\"68\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" font-weight=\"700\">Daun</text><line x1=\"58\" y1=\"6\" x2=\"58\" y2=\"86\" stroke=\"var(--ink3)\" stroke-width=\"1.8\" stroke-linecap=\"round\"></line><text x=\"52\" y=\"40\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"end\" font-weight=\"700\">2</text><text x=\"68\" y=\"40\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" font-weight=\"700\">3 8 9 7</text><text x=\"52\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"end\" font-weight=\"700\">3</text><text x=\"68\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" font-weight=\"700\">5 6 2 8 3</text><text x=\"52\" y=\"76\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"end\" font-weight=\"700\">4</text><text x=\"68\" y=\"76\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" font-weight=\"700\">1 5 4</text><text x=\"8\" y=\"102\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Kekunci: 2 | 3 bermaksud 23</text><text class=\"jmi-hasil\" x=\"8\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Bilangan data = 12</text><text class=\"jmi-hasil\" x=\"8\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Terkecil = 23, terbesar = 45</text></svg></div><figcaption>Rajah 1 · Plot batang-dan-daun bagi markah 12 murid. Kira dahulu, kemudian semak dengan rajah.</figcaption></figure>",
  "his1": "<figure class=\"figure jmi cabar\" data-w=\"t1data\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1data&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Masa 15 murid berlari. Ubah selang kelas dan tunjukkan poligon kekerapan, kemudian semak jawapan.&quot;,&quot;alt&quot;:&quot;Rajah interaktif histogram bagi masa 15 murid berlari dengan selang kelas 5 atau 10 minit dan poligon kekerapan pilihan&quot;,&quot;mod&quot;:&quot;histogram&quot;,&quot;data&quot;:[11,14,18,21,23,24,26,27,29,31,33,34,36,38,42],&quot;lebar&quot;:[5,10],&quot;unit&quot;:&quot;min&quot;,&quot;paksi&quot;:&quot;Masa (min)&quot;,&quot;tajuk&quot;:&quot;masa 15 murid berlari&quot;,&quot;cabar&quot;:true}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 242\" role=\"img\" aria-label=\"Rajah histogram masa 15 murid berlari dengan selang kelas 5, 7 kelas\"><line x1=\"36\" y1=\"150\" x2=\"254\" y2=\"150\" stroke=\"var(--line)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><text x=\"31\" y=\"154\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">0</text><line x1=\"36\" y1=\"121\" x2=\"254\" y2=\"121\" stroke=\"var(--line)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><text x=\"31\" y=\"125\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">2</text><line x1=\"36\" y1=\"92\" x2=\"254\" y2=\"92\" stroke=\"var(--line)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><text x=\"31\" y=\"96\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">4</text><line x1=\"36\" y1=\"63\" x2=\"254\" y2=\"63\" stroke=\"var(--line)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><text x=\"31\" y=\"67\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">6</text><line x1=\"36\" y1=\"34\" x2=\"254\" y2=\"34\" stroke=\"var(--line)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><text x=\"31\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">8</text><text x=\"8\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" font-weight=\"700\">f</text><rect class=\"jmi-hasil\" x=\"60.2\" y=\"121\" width=\"24.2\" height=\"29\" rx=\"0\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\"></rect><text class=\"jmi-hasil\" x=\"72.3\" y=\"117\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><rect class=\"jmi-hasil\" x=\"84.4\" y=\"135.5\" width=\"24.2\" height=\"14.5\" rx=\"0\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\"></rect><text class=\"jmi-hasil\" x=\"96.6\" y=\"131.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">1</text><rect class=\"jmi-hasil\" x=\"108.7\" y=\"106.5\" width=\"24.2\" height=\"43.5\" rx=\"0\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\"></rect><text class=\"jmi-hasil\" x=\"120.8\" y=\"102.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">3</text><rect class=\"jmi-hasil\" x=\"132.9\" y=\"106.5\" width=\"24.2\" height=\"43.5\" rx=\"0\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\"></rect><text class=\"jmi-hasil\" x=\"145\" y=\"102.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">3</text><rect class=\"jmi-hasil\" x=\"157.1\" y=\"106.5\" width=\"24.2\" height=\"43.5\" rx=\"0\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\"></rect><text class=\"jmi-hasil\" x=\"169.2\" y=\"102.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">3</text><rect class=\"jmi-hasil\" x=\"181.3\" y=\"121\" width=\"24.2\" height=\"29\" rx=\"0\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\"></rect><text class=\"jmi-hasil\" x=\"193.4\" y=\"117\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><rect class=\"jmi-hasil\" x=\"205.6\" y=\"135.5\" width=\"24.2\" height=\"14.5\" rx=\"0\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\"></rect><text class=\"jmi-hasil\" x=\"217.7\" y=\"131.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">1</text><line x1=\"36\" y1=\"34\" x2=\"36\" y2=\"150\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linecap=\"round\"></line><line x1=\"36\" y1=\"150\" x2=\"254\" y2=\"150\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linecap=\"round\"></line><text x=\"60.2\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\">10</text><text x=\"84.4\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\">15</text><text x=\"108.7\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\">20</text><text x=\"132.9\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\">25</text><text x=\"157.1\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\">30</text><text x=\"181.3\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\">35</text><text x=\"205.6\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\">40</text><text x=\"229.8\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\">45</text><text x=\"145\" y=\"178\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Masa (min)</text><text x=\"8\" y=\"198\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Selang kelas = 5 min</text><text class=\"jmi-hasil\" x=\"8\" y=\"214\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Bilangan kelas = 7</text><text class=\"jmi-hasil\" x=\"8\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Jumlah f = 15</text></svg></div><figcaption>Rajah 1 · Masa 15 murid berlari. Ubah selang kelas dan tunjukkan poligon kekerapan, kemudian semak jawapan.</figcaption></figure>",
  "gar1": "<figure class=\"figure jmi\" data-w=\"t1data\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1data&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Jualan bulanan sebuah kedai (RM ribu). Pilih bulan, dan tukar tempat paksi-y bermula.&quot;,&quot;alt&quot;:&quot;Rajah interaktif graf garis jualan bulanan sebuah kedai dari Januari hingga Jun; gelongsor memilih bulan dan menukar permulaan paksi-y antara sifar dan empat puluh&quot;,&quot;mod&quot;:&quot;garis&quot;,&quot;data&quot;:[[&quot;Jan&quot;,42],[&quot;Feb&quot;,44],[&quot;Mac&quot;,43],[&quot;Apr&quot;,47],[&quot;Mei&quot;,50],[&quot;Jun&quot;,53]],&quot;ymaks&quot;:60,&quot;mula&quot;:[0,40],&quot;unit&quot;:&quot;RM ribu&quot;,&quot;tajuk&quot;:&quot;jualan bulanan sebuah kedai&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 250\" role=\"img\" aria-label=\"Rajah graf garis jualan bulanan sebuah kedai dengan paksi-y bermula dari 0; bulan dipilih Jun bernilai 53\"><line x1=\"38\" y1=\"150\" x2=\"252\" y2=\"150\" stroke=\"var(--line)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><text x=\"33\" y=\"154\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">0</text><line x1=\"38\" y1=\"121\" x2=\"252\" y2=\"121\" stroke=\"var(--line)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><text x=\"33\" y=\"125\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">15</text><line x1=\"38\" y1=\"92\" x2=\"252\" y2=\"92\" stroke=\"var(--line)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><text x=\"33\" y=\"96\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">30</text><line x1=\"38\" y1=\"63\" x2=\"252\" y2=\"63\" stroke=\"var(--line)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><text x=\"33\" y=\"67\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">45</text><line x1=\"38\" y1=\"34\" x2=\"252\" y2=\"34\" stroke=\"var(--line)\" stroke-width=\"0.8\" stroke-linecap=\"round\"></line><text x=\"33\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">60</text><line x1=\"38\" y1=\"34\" x2=\"38\" y2=\"150\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linecap=\"round\"></line><line x1=\"38\" y1=\"150\" x2=\"252\" y2=\"150\" stroke=\"var(--ink3)\" stroke-width=\"1.6\" stroke-linecap=\"round\"></line><path d=\"M48,68.8 L86.8,64.9 L125.6,66.9 L164.4,59.1 L203.2,53.3 L242,47.5 \" fill=\"none\" stroke=\"var(--teal)\" stroke-width=\"2.6\" stroke-linejoin=\"round\" stroke-linecap=\"round\"></path><circle cx=\"48\" cy=\"68.8\" r=\"3.6\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><text x=\"48\" y=\"165\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Jan</text><circle cx=\"86.8\" cy=\"64.9\" r=\"3.6\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><text x=\"86.8\" y=\"165\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Feb</text><circle cx=\"125.6\" cy=\"66.9\" r=\"3.6\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><text x=\"125.6\" y=\"165\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Mac</text><circle cx=\"164.4\" cy=\"59.1\" r=\"3.6\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><text x=\"164.4\" y=\"165\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Apr</text><circle cx=\"203.2\" cy=\"53.3\" r=\"3.6\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><text x=\"203.2\" y=\"165\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Mei</text><circle cx=\"242\" cy=\"47.5\" r=\"6\" fill=\"var(--amber)\" stroke=\"var(--ink)\" stroke-width=\"2\"></circle><text x=\"242\" y=\"165\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Jun</text><text x=\"242\" y=\"36.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">53</text><text x=\"8\" y=\"22\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" font-weight=\"700\">RM ribu</text><text x=\"8\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Jun: 53</text><text class=\"jmi-hasil\" x=\"8\" y=\"206\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Beza dari bulan lalu = +3</text><text class=\"jmi-hasil\" x=\"8\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Ramalan bulan depan = 55.2</text><text x=\"8\" y=\"238\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Paksi-y bermula dari 0</text></svg></div><figcaption>Rajah 1 · Jualan bulanan sebuah kedai (RM ribu). Pilih bulan, dan tukar tempat paksi-y bermula.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Kantin Tinjauan",
   "sk": "12.1.1 / 12.1.2 Soalan statistik, kaedah dan jenis data",
   "lampiran": "jen1",
   "kadNama": "Data",
   "kadEm": "📊",
   "kadFakta": "Perkataan data ialah kata jamak bagi datum, iaitu satu fakta atau ukuran. Setiap tinjauan bermula dengan satu soalan yang baik.",
   "bosKadNama": "Inkuiri Statistik",
   "bosKadEm": "🔍",
   "bosKadFakta": "Inkuiri statistik bergerak dalam enam langkah: soalan, kumpul data, susun, wakilkan, tafsir dan sampaikan hasil. Awak sedang lalui langkah-langkah itu dalam bab ini.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Bilangan kad yang dikutip oleh seorang murid ialah data jenis:",
     "p": [
      "Numerik diskret",
      "Numerik selanjar",
      "Kategori",
      "Kategori dan selanjar"
     ],
     "b": 0,
     "u": "Bilangan kad ialah nombor yang dikira, dan nilainya nombor bulat. Ia data numerik diskret."
    },
    {
     "j": "pilih",
     "t": "Warna kegemaran murid ialah data:",
     "p": [
      "Numerik diskret",
      "Kategori",
      "Numerik selanjar",
      "Numerik sahaja"
     ],
     "b": 1,
     "u": "Warna ialah nama, bukan nombor. Data seperti ini dipanggil data kategori."
    },
    {
     "j": "pilih",
     "t": "Tinggi murid diukur dalam sentimeter. Data ini ialah:",
     "p": [
      "Numerik diskret",
      "Kategori",
      "Numerik selanjar",
      "Kategori diskret"
     ],
     "b": 2,
     "u": "Tinggi diukur dan boleh ada pecahan atau perpuluhan, contohnya 152.5 cm. Ia data numerik selanjar."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih 'Adik-beradik'. Data itu dikelaskan sebagai:",
     "p": [
      "Numerik selanjar",
      "Kategori",
      "Kategori diskret",
      "Numerik diskret"
     ],
     "b": 3,
     "u": "Bilangan adik-beradik ialah nombor bulat yang dikira, jadi ia numerik diskret."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih 'Tinggi'. Kotak yang menyala pada pokok jenis data ialah:",
     "p": [
      "Numerik, kemudian selanjar",
      "Kategori sahaja",
      "Numerik, kemudian diskret",
      "Kategori, kemudian diskret"
     ],
     "b": 0,
     "u": "Tinggi ialah data numerik yang diukur, jadi kotak Numerik dan Selanjar menyala."
    },
    {
     "j": "pilih",
     "t": "Yang manakah soalan statistik?",
     "p": [
      "Berapakah hasil tambah 5 dan 7 dalam soalan ini?",
      "Berapa buku murid Tingkatan 1 kita baca sebulan?",
      "Berapakah bilangan hari dalam bulan Mac tahun ini?",
      "Berapakah luas segi empat sama bersisi 4 cm ini?"
     ],
     "b": 1,
     "u": "Soalan statistik boleh dijawab dengan mengumpul data, dan jawapannya berbeza-beza antara murid."
    },
    {
     "j": "pilih",
     "t": "Awak menjatuhkan bola dari tiga ketinggian dan mengukur ketinggian lantunan. Kaedah pengumpulan data ini ialah:",
     "p": [
      "Tinjauan",
      "Temu bual",
      "Eksperimen",
      "Pemerhatian"
     ],
     "b": 2,
     "u": "Mengubah keadaan dengan sengaja dan mengukur hasilnya ialah eksperimen."
    },
    {
     "j": "susun",
     "t": "Susun langkah inkuiri statistik daripada awal hingga akhir.",
     "p": [
      "Kemukakan soalan dan kumpul data",
      "Susun data ke dalam jadual",
      "Wakilkan data dengan carta atau graf",
      "Analisis dan tafsir data",
      "Sampaikan hasil dan kesimpulan"
     ],
     "b": [
      0,
      1,
      2,
      3,
      4
     ],
     "u": "Mulakan dengan soalan, kumpul dan susun data, wakilkan, tafsir, kemudian sampaikan hasil."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA data yang bersifat numerik.",
    "p": [
     "Jisim beg sekolah",
     "Bilangan adik-beradik",
     "Warna mata murid",
     "Bilangan pen dalam kotak pensel",
     "Jenis sukan kegemaran",
     "Tinggi badan murid"
    ],
    "b": [
     0,
     1,
     3,
     5
    ],
    "u": "Jisim beg, bilangan adik-beradik, bilangan pen dan tinggi ialah nombor. Warna mata dan jenis sukan ialah kategori."
   }
  },
  {
   "n": 2,
   "tempat": "Kiraan Markah",
   "sk": "12.1.2 / 12.1.3 Jadual kekerapan dan plot titik",
   "lampiran": "tit1",
   "kadNama": "Kekerapan",
   "kadEm": "🔢",
   "kadFakta": "Kekerapan ialah bilangan kali sesuatu nilai muncul dalam data. Jumlah semua kekerapan sentiasa sama dengan bilangan data.",
   "bosKadNama": "Tanda Palang",
   "bosKadEm": "✍️",
   "bosKadFakta": "Mengira dengan tanda palang dalam kumpulan lima (empat garis dan satu garis silang) menjadikan kiraan jauh lebih laju dan kurang tersilap.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, gelongsor data hingga 15. Berapakah kekerapan markah 3?",
     "b": 6,
     "tol": 0.01,
     "u": "Titik pada markah 3 ialah 6, jadi f = 6."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, gelongsor data hingga 15. Berapakah kekerapan markah 5?",
     "b": 3,
     "tol": 0.01,
     "u": "Markah 5 muncul 3 kali, jadi f = 3."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, gelongsor data hingga 15. Berapakah jumlah kekerapan?",
     "b": 15,
     "tol": 0.01,
     "u": "Jumlah kekerapan sama dengan bilangan data, iaitu 15 murid."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1 (15 data), markah manakah mempunyai titik paling banyak?",
     "p": [
      "4",
      "5",
      "2",
      "3"
     ],
     "b": 3,
     "u": "Markah 3 ada 6 titik, lebih banyak daripada markah lain."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1 (15 data), berapakah bilangan murid yang mendapat markah kurang daripada 4?",
     "b": 8,
     "tol": 0.01,
     "u": "Markah 2 ada 2 murid dan markah 3 ada 6 murid. 2 + 6 = 8 murid."
    },
    {
     "j": "pilih",
     "t": "Dalam satu jadual kekerapan, f bagi markah 2, 3 dan 4 ialah 2, 6 dan 4. Jumlah kekerapan ialah 15. Berapakah f bagi markah 5?",
     "p": [
      "3",
      "4",
      "5",
      "2"
     ],
     "b": 0,
     "u": "15 − 2 − 6 − 4 = 3."
    },
    {
     "j": "pilih",
     "t": "Setiap titik dalam plot titik mewakili:",
     "p": [
      "Satu kategori",
      "Satu data",
      "Satu selang kelas",
      "Jumlah kekerapan"
     ],
     "b": 1,
     "u": "Satu titik ialah satu data, contohnya markah seorang murid."
    },
    {
     "j": "pilih",
     "t": "Markah kuiz dalam Rajah 1 ialah data jenis:",
     "p": [
      "Numerik selanjar",
      "Kategori",
      "Numerik diskret",
      "Kategori diskret"
     ],
     "b": 2,
     "u": "Markah ialah nombor bulat yang dikira, jadi ia numerik diskret."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Dalam Rajah 1 (15 data), 3 murid lagi mendapat markah 4. Berapakah kekerapan markah 4 sekarang?",
    "b": 7,
    "tol": 0.01,
    "u": "Kekerapan asal markah 4 ialah 4. Tambah 3 murid, jadi 4 + 3 = 7."
   }
  },
  {
   "n": 3,
   "tempat": "Kelab Sukan",
   "sk": "12.1.3 / 12.1.4 Carta palang, carta pai dan menukar perwakilan",
   "lampiran": "pal1",
   "kadNama": "Carta Pai",
   "kadEm": "🥧",
   "kadFakta": "Carta pai mewakili keseluruhan data sebagai satu bulatan 360°. Setiap sektor ialah bahagian daripada keseluruhan itu.",
   "bosKadNama": "Sektor Gabungan",
   "bosKadEm": "🧩",
   "bosKadFakta": "Dua sektor bersebelahan boleh digabungkan dengan menambah sudut masing-masing, sama seperti menambah kekerapannya.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih Bola. Berapakah kekerapannya?",
     "b": 12,
     "tol": 0.01,
     "u": "Palang Bola bernilai 12 murid."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah jumlah kekerapan semua sukan?",
     "b": 40,
     "tol": 0.01,
     "u": "12 + 8 + 6 + 4 + 10 = 40 murid."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tukar kepada carta pai dan pilih Renang. Berapakah sudut sektor Renang (darjah)?",
     "b": 72,
     "tol": 0.1,
     "suf": "°",
     "u": "8 ÷ 40 × 360° = 72°."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih Lari. Berapakah peratus murid yang memilih Lari?",
     "b": 15,
     "tol": 0.1,
     "suf": "%",
     "u": "6 ÷ 40 × 100 = 15%."
    },
    {
     "j": "pilih",
     "t": "Sukan Silat mempunyai kekerapan 4 daripada 40 murid. Berapakah sudut sektornya dalam carta pai?",
     "p": [
      "40°",
      "4°",
      "90°",
      "36°"
     ],
     "b": 3,
     "u": "4 ÷ 40 × 360° = 36°."
    },
    {
     "j": "pilih",
     "t": "Untuk membandingkan kekerapan beberapa kategori dengan mudah, perwakilan yang paling sesuai ialah:",
     "p": [
      "Carta palang",
      "Graf garis",
      "Plot batang-dan-daun",
      "Poligon kekerapan"
     ],
     "b": 0,
     "u": "Palang yang berasingan memudahkan perbandingan tinggi kekerapan antara kategori."
    },
    {
     "j": "pilih",
     "t": "Dalam carta pai, sudut sektor bagi sesuatu kategori dikira dengan:",
     "p": [
      "f × jumlah f ÷ 360°",
      "f ÷ jumlah f × 360°",
      "f ÷ 360° × jumlah f",
      "jumlah f ÷ f × 360°"
     ],
     "b": 1,
     "u": "Bahagian kategori ialah f ÷ jumlah f. Darabkan dengan 360° untuk mendapat sudut."
    },
    {
     "j": "pilih",
     "t": "Semua sudut sektor dalam sebuah carta pai berjumlah:",
     "p": [
      "180°",
      "100°",
      "360°",
      "90°"
     ],
     "b": 2,
     "u": "Sektor-sektor membentuk satu bulatan penuh, iaitu 360°."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Dalam Rajah 1, sektor Bola dan sektor Tenis digabungkan. Berapakah sudut sektor gabungan itu (darjah)?",
    "b": 198,
    "tol": 0.1,
    "suf": "°",
    "u": "Bola = 12 ÷ 40 × 360° = 108°. Tenis = 10 ÷ 40 × 360° = 90°. Jumlah = 198°."
   }
  },
  {
   "n": 4,
   "tempat": "Studio Daun",
   "sk": "12.1.3 / 12.1.5 Plot batang-dan-daun dan pentafsiran",
   "lampiran": "bat1",
   "kadNama": "Kekunci",
   "kadEm": "🔑",
   "kadFakta": "Setiap plot batang-dan-daun perlu ada kekunci. Contohnya '4 | 1' bermaksud 41. Tanpa kekunci, pembaca tidak tahu nilai sebenar.",
   "bosKadNama": "Daun Menaik",
   "bosKadEm": "🍃",
   "bosKadFakta": "Menyusun daun daripada kecil ke besar tidak mengubah data, tetapi menjadikan nilai terkecil, terbesar dan data di tengah mudah dicari.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Markah 12 murid: 23, 35, 28, 41, 36, 32, 45, 29, 38, 33, 27, 44. Dalam Rajah 1, berapakah bilangan daun pada batang 3?",
     "b": 5,
     "tol": 0.01,
     "u": "Data 30-an ialah 35, 36, 32, 38 dan 33. Ada 5 daun."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah markah tertinggi?",
     "b": 45,
     "tol": 0.01,
     "u": "Batang 4 mempunyai daun 5, jadi markah tertinggi ialah 45."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah markah terendah?",
     "b": 23,
     "tol": 0.01,
     "u": "Batang 2 mempunyai daun 3, jadi markah terendah ialah 23."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah beza antara markah tertinggi dengan markah terendah?",
     "b": 22,
     "tol": 0.01,
     "u": "45 − 23 = 22."
    },
    {
     "j": "pilih",
     "t": "Dalam plot batang-dan-daun, '4 | 1' bermaksud:",
     "p": [
      "4.1",
      "5",
      "14",
      "41"
     ],
     "b": 3,
     "u": "Batang 4 dan daun 1 membentuk 41, jika kekunci menyatakan puluh dan sa."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah bilangan murid yang mendapat lebih daripada 35 markah?",
     "b": 5,
     "tol": 0.01,
     "u": "Markah lebih daripada 35 ialah 41, 36, 45, 38 dan 44. Ada 5 murid."
    },
    {
     "j": "pilih",
     "t": "Kelebihan plot batang-dan-daun ialah:",
     "p": [
      "Nilai data asal masih boleh dibaca",
      "Ia hanya sesuai untuk data kategori",
      "Ia menunjukkan peratus setiap kategori",
      "Ia tidak memerlukan kekunci"
     ],
     "b": 0,
     "u": "Setiap daun ialah digit sebenar, jadi data asal tidak hilang."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, tukar daun kepada 'Disusun'. Apakah yang menjadi lebih mudah dicari?",
     "p": [
      "Jumlah semua data dalam plot",
      "Nilai terkecil dan terbesar setiap batang",
      "Jenis data yang dipaparkan",
      "Sudut sektor bagi setiap batang"
     ],
     "b": 1,
     "u": "Daun yang disusun menaik menjadikan nilai terkecil dan terbesar setiap batang berada di hujung."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Satu markah baharu, 39, ditambah kepada data dalam Rajah 1. Berapakah bilangan daun pada batang 3 sekarang?",
    "b": 6,
    "tol": 0.01,
    "u": "Batang 3 asalnya ada 5 daun. Markah 39 ditambah pada batang 3, jadi menjadi 6 daun."
   }
  },
  {
   "n": 5,
   "tempat": "Larian Sekolah",
   "sk": "12.1.3 / 12.1.5 Histogram dan poligon kekerapan",
   "lampiran": "his1",
   "kadNama": "Histogram",
   "kadEm": "📶",
   "kadFakta": "Palang histogram bersentuhan kerana data selanjar tidak mempunyai jurang antara kelas. Luas setiap palang mewakili kekerapan kelas itu.",
   "bosKadNama": "Poligon",
   "bosKadEm": "🔺",
   "bosKadFakta": "Poligon kekerapan dilukis dengan menyambung titik tengah bahagian atas setiap palang, dan ditamatkan pada paksi dengan satu kelas kosong di setiap hujung.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Masa 15 murid berlari (minit): 11, 14, 18, 21, 23, 24, 26, 27, 29, 31, 33, 34, 36, 38, 42. Dalam Rajah 1, dengan selang 10 min, berapakah kekerapan kelas 20 - 29?",
     "b": 6,
     "tol": 0.01,
     "u": "Data dalam kelas 20 - 29 ialah 21, 23, 24, 26, 27 dan 29. Ada 6 murid."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, dengan selang 5 min, berapakah bilangan kelas?",
     "b": 7,
     "tol": 0.01,
     "u": "Kelas ialah 10 - 14, 15 - 19, 20 - 24, 25 - 29, 30 - 34, 35 - 39 dan 40 - 44. Ada 7 kelas."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, dengan selang 5 min, berapakah kekerapan kelas 20 - 24?",
     "b": 3,
     "tol": 0.01,
     "u": "Data dalam kelas 20 - 24 ialah 21, 23 dan 24. Ada 3 murid."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, dengan selang 10 min, berapakah kekerapan kelas 40 - 49?",
     "b": 1,
     "tol": 0.01,
     "u": "Hanya 42 berada dalam kelas 40 - 49, jadi kekerapannya 1."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah jumlah kekerapan semua kelas?",
     "b": 15,
     "tol": 0.01,
     "u": "Jumlah kekerapan sama dengan bilangan data, iaitu 15."
    },
    {
     "j": "pilih",
     "t": "Apakah beza histogram dengan carta palang biasa?",
     "p": [
      "Histogram untuk data kategori sahaja",
      "Histogram tiada paksi kekerapan",
      "Palang histogram bersentuhan kerana data selanjar",
      "Palang histogram mesti berjarak"
     ],
     "b": 2,
     "u": "Data selanjar dibahagi kepada kelas tanpa jurang, jadi palang bersentuhan."
    },
    {
     "j": "pilih",
     "t": "Poligon kekerapan dilukis dengan menyambung:",
     "p": [
      "Sudut kiri atas setiap palang",
      "Dasar setiap palang",
      "Hujung kanan setiap palang",
      "Titik tengah atas setiap palang"
     ],
     "b": 3,
     "u": "Titik tengah bahagian atas setiap palang disambung dengan garis lurus."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, dengan selang 10 min, kelas manakah mempunyai kekerapan tertinggi?",
     "p": [
      "20 - 29",
      "10 - 19",
      "30 - 39",
      "40 - 49"
     ],
     "b": 0,
     "u": "Kelas 20 - 29 mempunyai 6 murid, lebih banyak daripada kelas lain."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Dengan selang 5 min, berapa murid mengambil masa 25 min atau lebih tetapi kurang daripada 40 min?",
    "b": 8,
    "tol": 0.01,
    "u": "Kelas 25 - 29 ada 3, kelas 30 - 34 ada 3 dan kelas 35 - 39 ada 2. 3 + 3 + 2 = 8 murid."
   }
  },
  {
   "n": 6,
   "tempat": "Graf Jujur",
   "sk": "12.1.5 / 12.1.6 Graf garis, ramalan dan perwakilan beretika",
   "lampiran": "gar1",
   "kadNama": "Paksi Dipotong",
   "kadEm": "✂️",
   "kadFakta": "Memotong paksi-y supaya bermula dari nombor besar membuat kenaikan kecil kelihatan curam. Perwakilan yang beretika menunjukkan pemotongan itu dengan jelas.",
   "bosKadNama": "Ramalan",
   "bosKadEm": "🔮",
   "bosKadFakta": "Ramalan daripada graf garis hanya andaian berdasarkan corak lalu. Semakin panjang tempoh data dan semakin stabil coraknya, semakin munasabah ramalan itu.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih Jun. Berapakah jualan pada bulan Jun (RM ribu)?",
     "b": 53,
     "tol": 0.01,
     "u": "Titik Jun berada pada RM53 ribu."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah kenaikan jualan dari Mac ke April (RM ribu)?",
     "b": 4,
     "tol": 0.01,
     "u": "47 − 43 = 4."
    },
    {
     "j": "nombor",
     "t": "Purata kenaikan sebulan dari Januari ke Jun ialah RM2.2 ribu. Anggarkan jualan Julai kepada 1 tempat perpuluhan (RM ribu).",
     "b": 55.2,
     "tol": 0.05,
     "u": "Jualan Jun ialah 53. Tambah purata kenaikan 2.2, jadi 53 + 2.2 = 55.2."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, apabila paksi-y dipotong dan bermula dari 40, kenaikan jualan kelihatan:",
     "p": [
      "Lebih landai daripada sebenar",
      "Lebih curam daripada sebenar",
      "Sama seperti sebenar",
      "Tiada kenaikan"
     ],
     "b": 1,
     "u": "Julat paksi menjadi lebih pendek, jadi garis kelihatan lebih curam."
    },
    {
     "j": "pilih",
     "t": "Perwakilan data yang beretika mesti:",
     "p": [
      "Memilih skala yang menonjolkan kesimpulan kita",
      "Menyembunyikan data yang tidak menyokong kita",
      "Bermula paksi-y dari sifar atau menunjukkan pemotongan",
      "Menggunakan warna terang sahaja untuk garis"
     ],
     "b": 2,
     "u": "Pembaca berhak melihat data sebenar. Pemotongan paksi mesti dinyatakan supaya tidak mengelirukan."
    },
    {
     "j": "nombor",
     "t": "Dari Januari ke Jun, jualan naik daripada RM42 ribu kepada RM53 ribu. Berapakah peratus kenaikan itu kepada 1 tempat perpuluhan?",
     "b": 26.2,
     "tol": 0.05,
     "suf": "%",
     "u": "Kenaikan = 53 − 42 = 11. 11 ÷ 42 × 100 = 26.2%."
    },
    {
     "j": "pilih",
     "t": "Ramalan daripada graf garis lebih boleh dipercayai jika:",
     "p": [
      "Hanya dua titik data yang digunakan",
      "Paksi-y dipotong dengan banyak sekali",
      "Data sebelum bulan Mac telah dibuang",
      "Corak data stabil dalam tempoh panjang"
     ],
     "b": 3,
     "u": "Corak yang stabil dan data yang cukup memberi asas yang lebih baik untuk ramalan."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, paksi-y bermula dari 0 atau dari 40 (dipotong). Yang manakah menunjukkan kenaikan sebenar dengan lebih jujur?",
     "p": [
      "Bermula dari 0",
      "Bermula dari 40",
      "Kedua-duanya sama jujur",
      "Tidak ada perbezaan"
     ],
     "b": 0,
     "u": "Paksi dari 0 mengekalkan nisbah sebenar antara nilai. Paksi yang dipotong membesar-besarkan perubahan."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Sebuah kedai mahu menarik pelabur. Pemiliknya menunjukkan graf jualan dengan paksi-y bermula dari 40 supaya kenaikan kelihatan besar.",
    "arahan": "Nilaikan sama ada perwakilan itu beretika. Nyatakan apa yang mengelirukan, lukis atau huraikan graf yang lebih jujur, dan terangkan sekurang-kurangnya satu perkara lain yang perlu dilaporkan bersama data.",
    "u": "Jawapan TP6 yang kukuh mengenal pasti paksi yang dipotong, menerangkan kesannya kepada persepsi pembaca, mengesyorkan paksi dari sifar atau petunjuk pemotongan yang jelas, dan menyebut perkara seperti tempoh data dan sumber."
   }
  }
 ]
};
