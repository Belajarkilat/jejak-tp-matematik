/* Bank soalan — Matematik Ting. 1 · Bab 11 Pengenalan Set.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m1b11.js
   kemudian jalankan: node bina.js m1b11

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 1, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m1b11"] =
{
 "id": "m1b11",
 "tingkatan": 1,
 "kod": "11.0 Pengenalan Set",
 "tajuk": "Studio Venn",
 "subtajuk": "Matematik Ting. 1 · Bab 11 Pengenalan Set",
 "spi": [
  "Mempamerkan pengetahuan asas tentang set.",
  "Mempamerkan kefahaman tentang set.",
  "Mengaplikasikan kefahaman tentang set.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang set dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang set dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang set dalam konteks penyelesaian masalah bukan rutin."
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
  "1": "{n} dapat mengenal set sebagai koleksi objek yang jelas, menghuraikannya dengan perihalan dan penyenaraian, serta mengenal set kosong. Langkah seterusnya ialah menggunakan simbol ∈, ∉ dan n(A).",
  "2": "{n} memahami tatatanda pembina set, simbol ∈ dan ∉, serta bilangan unsur n(A). Perlu lebih latihan mengira unsur yang berulang sebelum bergerak ke TP3.",
  "3": "{n} boleh membandingkan dua set dan menerangkan sebab set sama atau tidak sama, termasuk apabila susunan atau ulangan unsur berbeza. Boleh mula menggunakan set semesta dan pelengkap.",
  "4": "{n} mampu mengenal set semesta dan pelengkap, mewakilkannya dengan gambar rajah Venn, dan mengira n(A') dalam masalah mudah. Seterusnya latih masalah yang melibatkan subset.",
  "5": "{n} dapat mengenal pasti dan menyenaraikan subset, termasuk set kosong dan set itu sendiri, serta mengira bilangan subset bagi masalah yang lebih kompleks. Sudah bersedia untuk menggabungkan semua konsep set.",
  "6": "{n} berjaya mereka masalah set sendiri dengan set semesta, set, subset dan pelengkap yang saling berkaitan, lengkap dengan gambar rajah Venn. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pengenalan Set. Cadangan: ulang hentian pertama menggunakan Rajah 1 dan senaraikan unsur setiap set dengan bimbingan rakan sebaya."
 },
 "lampiran": {
  "set1": "<figure class=\"figure jmi\" data-w=\"t1set\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1set&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Pilih set A. Bulatan hijau ialah unsur A dalam ξ = {1, 2, ..., 12}.&quot;,&quot;alt&quot;:&quot;Rajah interaktif set A dalam set semesta 1 hingga 12; gelongsor memilih set A dan menunjukkan perihalan, penyenaraian dan bilangan unsur&quot;,&quot;mod&quot;:&quot;sifat&quot;,&quot;kriteria&quot;:[&quot;genap&quot;,&quot;ganjil&quot;,&quot;perdana&quot;,&quot;gandaan3&quot;,&quot;faktor12&quot;,&quot;kurang6&quot;,&quot;lebih8&quot;,&quot;kuasa2&quot;]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 225\" role=\"img\" aria-label=\"Rajah set A daripada nombor genap dalam set semesta 1 hingga 12; unsur A ialah 2, 4, 6, 8, 10, 12 dan n(A) = 6\"><text x=\"10\" y=\"20\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Set A dalam ξ ialah set semua</text><text x=\"10\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">nombor genap</text><circle cx=\"32\" cy=\"70\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"71\" cy=\"70\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"110\" cy=\"70\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"149\" cy=\"70\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"188\" cy=\"70\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"227\" cy=\"70\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"32\" cy=\"106\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"71\" cy=\"106\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"110\" cy=\"106\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"149\" cy=\"106\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"188\" cy=\"106\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"227\" cy=\"106\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><g class=\"jmi-hasil\"><circle cx=\"71\" cy=\"70\" r=\"14\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></circle><circle cx=\"149\" cy=\"70\" r=\"14\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></circle><circle cx=\"227\" cy=\"70\" r=\"14\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></circle><circle cx=\"71\" cy=\"106\" r=\"14\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></circle><circle cx=\"149\" cy=\"106\" r=\"14\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></circle><circle cx=\"227\" cy=\"106\" r=\"14\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></circle></g><text x=\"32\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">1</text><text x=\"71\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><text x=\"110\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">3</text><text x=\"149\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">4</text><text x=\"188\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">5</text><text x=\"227\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">6</text><text x=\"32\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">7</text><text x=\"71\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">8</text><text x=\"110\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">9</text><text x=\"149\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">10</text><text x=\"188\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">11</text><text x=\"227\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">12</text><text x=\"10\" y=\"156\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">ξ = {1, 2, 3, ..., 12}</text><text x=\"10\" y=\"176\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" font-weight=\"700\">A = {x nombor genap}</text><text class=\"jmi-hasil\" x=\"10\" y=\"194\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">A = {2, 4, 6, 8, 10, 12}</text><text class=\"jmi-hasil\" x=\"10\" y=\"211\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">n(A) = 6</text></svg></div><figcaption>Rajah 1 · Pilih set A. Bulatan hijau ialah unsur A dalam ξ = {1, 2, ..., 12}.</figcaption></figure>",
  "set2": "<figure class=\"figure jmi\" data-w=\"t1set\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1set&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Pilih set A dan objek x. Semak sama ada x ialah unsur A.&quot;,&quot;alt&quot;:&quot;Rajah interaktif set A dalam set semesta 1 hingga 12; gelongsor memilih set A dan objek x serta menunjukkan x ialah unsur atau bukan unsur A&quot;,&quot;mod&quot;:&quot;sifat&quot;,&quot;unsur&quot;:true,&quot;kriteria&quot;:[&quot;genap&quot;,&quot;perdana&quot;,&quot;faktor12&quot;,&quot;gandaan13&quot;,&quot;gk9&quot;,&quot;go6&quot;,&quot;gandaan4&quot;]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 245\" role=\"img\" aria-label=\"Rajah set A daripada nombor genap dalam set semesta 1 hingga 12; unsur A ialah 2, 4, 6, 8, 10, 12 dan n(A) = 6\"><text x=\"10\" y=\"20\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Set A dalam ξ ialah set semua</text><text x=\"10\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">nombor genap</text><circle cx=\"32\" cy=\"70\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"71\" cy=\"70\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"110\" cy=\"70\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"149\" cy=\"70\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"188\" cy=\"70\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"227\" cy=\"70\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"32\" cy=\"106\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"71\" cy=\"106\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"110\" cy=\"106\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"149\" cy=\"106\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"188\" cy=\"106\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><circle cx=\"227\" cy=\"106\" r=\"14\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><g class=\"jmi-hasil\"><circle cx=\"71\" cy=\"70\" r=\"14\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></circle><circle cx=\"149\" cy=\"70\" r=\"14\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></circle><circle cx=\"227\" cy=\"70\" r=\"14\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></circle><circle cx=\"71\" cy=\"106\" r=\"14\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></circle><circle cx=\"149\" cy=\"106\" r=\"14\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></circle><circle cx=\"227\" cy=\"106\" r=\"14\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></circle></g><circle cx=\"32\" cy=\"106\" r=\"17.5\" fill=\"none\" stroke=\"var(--amber)\" stroke-width=\"2.6\"></circle><text x=\"32\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">1</text><text x=\"71\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><text x=\"110\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">3</text><text x=\"149\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">4</text><text x=\"188\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">5</text><text x=\"227\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">6</text><text x=\"32\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">7</text><text x=\"71\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">8</text><text x=\"110\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">9</text><text x=\"149\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">10</text><text x=\"188\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">11</text><text x=\"227\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">12</text><text x=\"10\" y=\"156\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">ξ = {1, 2, 3, ..., 12}</text><text x=\"10\" y=\"176\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" font-weight=\"700\">A = {x nombor genap}</text><text class=\"jmi-hasil\" x=\"10\" y=\"194\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">A = {2, 4, 6, 8, 10, 12}</text><text class=\"jmi-hasil\" x=\"10\" y=\"211\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">n(A) = 6</text><text class=\"jmi-hasil\" x=\"10\" y=\"231\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">7 ∉ A  (bukan unsur A)</text></svg></div><figcaption>Rajah 1 · Pilih set A dan objek x. Semak sama ada x ialah unsur A.</figcaption></figure>",
  "set3": "<figure class=\"figure jmi\" data-w=\"t1set\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1set&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · A = {2, 4, 6, 8}. Pilih set B dan bandingkan dengan A.&quot;,&quot;alt&quot;:&quot;Rajah interaktif membandingkan set A = {2, 4, 6, 8} dengan enam set B; gelongsor memilih B dan menunjukkan sama atau tidak sama&quot;,&quot;mod&quot;:&quot;sama&quot;,&quot;kriteria&quot;:[&quot;gk9&quot;],&quot;calon&quot;:[{&quot;t&quot;:&quot;{2, 4, 6, 8}&quot;,&quot;a&quot;:[2,4,6,8]},{&quot;t&quot;:&quot;{8, 6, 4, 2}&quot;,&quot;a&quot;:[8,6,4,2]},{&quot;t&quot;:&quot;{2, 2, 4, 6, 8}&quot;,&quot;a&quot;:[2,2,4,6,8]},{&quot;t&quot;:&quot;{2, 4, 6}&quot;,&quot;a&quot;:[2,4,6]},{&quot;t&quot;:&quot;{1, 2, 4, 6, 8}&quot;,&quot;a&quot;:[1,2,4,6,8]},{&quot;t&quot;:&quot;{ }&quot;,&quot;a&quot;:[]}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 207\" role=\"img\" aria-label=\"Rajah membandingkan set A daripada genap dan kurang daripada 9 dengan set B; kedua-dua set sama\"><text x=\"10\" y=\"20\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">Set A: genap dan kurang daripada 9</text><circle cx=\"26\" cy=\"48\" r=\"14\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2\"></circle><text x=\"26\" y=\"52\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><circle cx=\"62\" cy=\"48\" r=\"14\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2\"></circle><text x=\"62\" y=\"52\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">4</text><circle cx=\"98\" cy=\"48\" r=\"14\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2\"></circle><text x=\"98\" y=\"52\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">6</text><circle cx=\"134\" cy=\"48\" r=\"14\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2\"></circle><text x=\"134\" y=\"52\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">8</text><text x=\"10\" y=\"92\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">Set B: {2, 4, 6, 8}</text><circle cx=\"26\" cy=\"120\" r=\"14\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"2\"></circle><text x=\"26\" y=\"124\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><circle cx=\"62\" cy=\"120\" r=\"14\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"2\"></circle><text x=\"62\" y=\"124\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">4</text><circle cx=\"98\" cy=\"120\" r=\"14\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"2\"></circle><text x=\"98\" y=\"124\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">6</text><circle cx=\"134\" cy=\"120\" r=\"14\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"2\"></circle><text x=\"134\" y=\"124\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">8</text><text class=\"jmi-hasil\" x=\"10\" y=\"156\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--teal)\" font-weight=\"700\">A = B  (sama)</text><text class=\"jmi-hasil\" x=\"10\" y=\"175\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">n(A) = 4   n(B) = 4</text><text class=\"jmi-hasil\" x=\"10\" y=\"193\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" font-weight=\"700\">Unsur sama, susunan tidak penting</text></svg></div><figcaption>Rajah 1 · A = {2, 4, 6, 8}. Pilih set B dan bandingkan dengan A.</figcaption></figure>",
  "set4": "<figure class=\"figure jmi cabar\" data-w=\"t1set\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1set&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Bayangkan dahulu nombor mana di dalam bulatan A, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah Venn interaktif dengan set semesta 1 hingga 12; gelongsor memilih set A dan menyusun nombor di dalam bulatan A atau di luar sebagai pelengkap A'&quot;,&quot;mod&quot;:&quot;venn&quot;,&quot;cabar&quot;:true,&quot;kriteria&quot;:[&quot;gandaan3&quot;,&quot;genap&quot;,&quot;perdana&quot;,&quot;lebih8&quot;,&quot;kuasa2&quot;,&quot;faktor10&quot;,&quot;kurang6&quot;]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 254\" role=\"img\" aria-label=\"Rajah Venn: set semesta 1 hingga 12, set A ialah gandaan 3 dengan 4 unsur, dan pelengkap A' mempunyai 8 unsur\"><rect x=\"8\" y=\"8\" width=\"244\" height=\"126\" rx=\"4\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></rect><ellipse cx=\"95\" cy=\"71\" rx=\"72\" ry=\"46\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.4\"></ellipse><text x=\"14\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">ξ</text><text x=\"95\" y=\"40\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">A</text><g class=\"jmi-hasil\"><text x=\"59\" y=\"56\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">3</text><text x=\"83\" y=\"56\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">6</text><text x=\"107\" y=\"56\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">9</text><text x=\"131\" y=\"56\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">12</text><text x=\"190\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">1</text><text x=\"214\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><text x=\"238\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">4</text><text x=\"190\" y=\"56\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">5</text><text x=\"214\" y=\"56\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">7</text><text x=\"238\" y=\"56\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">8</text><text x=\"190\" y=\"78\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">10</text><text x=\"214\" y=\"78\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">11</text></g><text x=\"10\" y=\"152\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">ξ = {1, 2, 3, ..., 12}</text><text x=\"10\" y=\"168\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" font-weight=\"700\">A = gandaan 3</text><text class=\"jmi-hasil\" x=\"10\" y=\"188\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">A = {3, 6, 9, 12}</text><text class=\"jmi-hasil\" x=\"10\" y=\"204\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">A' = {1, 2, 4, 5, 7, 8, 10,</text><text class=\"jmi-hasil\" x=\"10\" y=\"220\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">    11}</text><text class=\"jmi-hasil\" x=\"10\" y=\"238\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">n(A) = 4   n(A') = 8   n(ξ) = 12</text></svg></div><figcaption>Rajah 1 · Bayangkan dahulu nombor mana di dalam bulatan A, kemudian semak dengan rajah.</figcaption></figure>",
  "set5": "<figure class=\"figure jmi cabar\" data-w=\"t1set\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1set&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · A = {2, 4, 6}. Cuba setiap subset B, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah Venn interaktif subset bagi A = {2, 4, 6}; gelongsor memilih salah satu daripada lapan subset dan melukis B di dalam A&quot;,&quot;mod&quot;:&quot;subset&quot;,&quot;cabar&quot;:true,&quot;A&quot;:[2,4,6]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 212\" role=\"img\" aria-label=\"Rajah Venn subset: A = {2, 4, 6}; B ialah subset yang mempunyai 2 unsur; A mempunyai 8 subset semuanya\"><rect x=\"8\" y=\"8\" width=\"244\" height=\"118\" rx=\"4\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></rect><ellipse cx=\"100\" cy=\"66\" rx=\"88\" ry=\"48\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"2.4\"></ellipse><text x=\"14\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">ξ</text><text x=\"20\" y=\"108\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--amber)\" font-weight=\"700\">A</text><g class=\"jmi-hasil\"><ellipse cx=\"84\" cy=\"66\" rx=\"34\" ry=\"24\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.4\"></ellipse><text x=\"84\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">B</text></g><text x=\"68\" y=\"70\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><text x=\"100\" y=\"70\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">4</text><text x=\"132\" y=\"70\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">6</text><text x=\"10\" y=\"144\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" font-weight=\"700\">A = {2, 4, 6}   n(A) = 3</text><text class=\"jmi-hasil\" x=\"10\" y=\"162\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">B = {2, 4}</text><text class=\"jmi-hasil\" x=\"10\" y=\"180\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">B ⊂ A   n(B) = 2</text><text class=\"jmi-hasil\" x=\"10\" y=\"198\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Semua subset A ada 8</text></svg></div><figcaption>Rajah 1 · A = {2, 4, 6}. Cuba setiap subset B, kemudian semak dengan rajah.</figcaption></figure>",
  "set6": "<figure class=\"figure jmi\" data-w=\"t1set\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t1set&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · ξ = {1, 2, ..., 8} dan A = {1, 3, 5, 7}. Pilih subset B dalam A.&quot;,&quot;alt&quot;:&quot;Rajah Venn dengan set semesta 1 hingga 8, set A = {1, 3, 5, 7} dan unsur di luar A; gelongsor memilih subset B di dalam A&quot;,&quot;mod&quot;:&quot;subset&quot;,&quot;A&quot;:[1,3,5,7],&quot;luar&quot;:[2,4,6,8]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 212\" role=\"img\" aria-label=\"Rajah Venn subset: A = {1, 3, 5, 7}; B ialah subset yang mempunyai 2 unsur; A mempunyai 16 subset semuanya\"><rect x=\"8\" y=\"8\" width=\"244\" height=\"118\" rx=\"4\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></rect><ellipse cx=\"100\" cy=\"66\" rx=\"88\" ry=\"48\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"2.4\"></ellipse><text x=\"14\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">ξ</text><text x=\"20\" y=\"108\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--amber)\" font-weight=\"700\">A</text><g class=\"jmi-hasil\"><ellipse cx=\"68\" cy=\"66\" rx=\"34\" ry=\"24\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.4\"></ellipse><text x=\"68\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">B</text></g><text x=\"52\" y=\"70\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">1</text><text x=\"84\" y=\"70\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">3</text><text x=\"116\" y=\"70\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">5</text><text x=\"148\" y=\"70\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">7</text><text x=\"214\" y=\"40\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><text x=\"238\" y=\"40\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">4</text><text x=\"214\" y=\"66\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">6</text><text x=\"238\" y=\"66\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">8</text><text x=\"10\" y=\"144\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" font-weight=\"700\">A = {1, 3, 5, 7}   n(A) = 4</text><text class=\"jmi-hasil\" x=\"10\" y=\"162\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">B = {1, 3}</text><text class=\"jmi-hasil\" x=\"10\" y=\"180\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">B ⊂ A   n(B) = 2</text><text class=\"jmi-hasil\" x=\"10\" y=\"198\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Semua subset A ada 16</text></svg></div><figcaption>Rajah 1 · ξ = {1, 2, ..., 8} dan A = {1, 3, 5, 7}. Pilih subset B dalam A.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Kelab Sorok",
   "sk": "11.1.1 / 11.1.2 Maksud set, perihalan dan penyenaraian",
   "lampiran": "set1",
   "kadNama": "Ahli Set",
   "kadEm": "👥",
   "kadFakta": "Objek dalam set dipanggil unsur. Unsur boleh apa sahaja: nombor, huruf, warna atau nama murid dalam kelas.",
   "bosKadNama": "Set Kosong",
   "bosKadEm": "🕳️",
   "bosKadFakta": "Set kosong tiada unsur langsung dan ditulis { } atau ∅. Contohnya set hari dalam seminggu yang bermula dengan huruf X.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Antara yang berikut, yang manakah ialah satu set?",
     "p": [
      "Semua huruf dalam perkataan 'BUNGA'",
      "Murid yang paling hensem dalam kelas",
      "Nombor yang cantik pada mata awak",
      "Buah-buahan yang sedap dimakan"
     ],
     "b": 0,
     "u": "Set ialah koleksi objek yang jelas. Kita boleh tentukan dengan pasti sama ada sesuatu objek ahli atau bukan. Hensem, cantik dan sedap bergantung pada pendapat, jadi tidak jelas."
    },
    {
     "j": "pilih",
     "t": "Setiap objek dalam sesuatu set dipanggil:",
     "p": [
      "Subset set itu",
      "Unsur",
      "Set semesta",
      "Pelengkap set"
     ],
     "b": 1,
     "u": "Objek yang menjadi ahli set dipanggil unsur."
    },
    {
     "j": "pilih",
     "t": "Set A = {2, 4, 6, 8, 10, 12}, dengan set semesta ξ = {1, 2, 3, ..., 12}. Perihalan set A ialah:",
     "p": [
      "Nombor ganjil",
      "Nombor perdana",
      "Nombor genap",
      "Gandaan 3"
     ],
     "b": 2,
     "u": "Semua unsur A boleh dibahagi dua tanpa baki, jadi A ialah set nombor genap."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih set 'perdana'. Penyenaraian set A yang betul ialah:",
     "p": [
      "{1, 2, 3, 5, 7, 11}",
      "{2, 3, 5, 7, 9, 11}",
      "{3, 5, 7, 11}",
      "{2, 3, 5, 7, 11}"
     ],
     "b": 3,
     "u": "Nombor perdana ada tepat dua faktor. 1 hanya ada satu faktor dan 9 = 3 × 3, jadi 1 dan 9 bukan unsur A. 2 ialah nombor perdana genap yang tunggal."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih set 'faktor 12'. Penyenaraian set A yang betul ialah:",
     "p": [
      "{1, 2, 3, 4, 6, 12}",
      "{2, 3, 4, 6, 12}",
      "{1, 2, 3, 4, 6}",
      "{1, 2, 3, 6, 12}"
     ],
     "b": 0,
     "u": "Faktor 12 ialah nombor yang membahagi 12 tepat: 1, 2, 3, 4, 6 dan 12."
    },
    {
     "j": "pilih",
     "t": "Set B = {3, 6, 9, 12}, dengan ξ = {1, 2, 3, ..., 12}. Perihalan set B ialah:",
     "p": [
      "Gandaan 4",
      "Gandaan 3",
      "Faktor bagi 12",
      "Nombor ganjil"
     ],
     "b": 1,
     "u": "3, 6, 9 dan 12 diperoleh dengan mendarab 3 dengan 1, 2, 3 dan 4."
    },
    {
     "j": "pilih",
     "t": "Simbol { } atau ∅ digunakan untuk menulis:",
     "p": [
      "Set semesta",
      "Subset",
      "Set kosong",
      "Pelengkap"
     ],
     "b": 2,
     "u": "{ } dan ∅ ialah dua cara menulis set yang tidak mempunyai sebarang unsur."
    },
    {
     "j": "susun",
     "t": "Susun langkah menyenaraikan set A = nombor perdana dalam ξ = {1, 2, 3, ..., 12}.",
     "p": [
      "Semak nombor 1 hingga 12 satu demi satu",
      "Pilih nombor yang mempunyai tepat dua faktor",
      "Tulis nombor yang dipilih dalam kurungan { }",
      "Asingkan setiap nombor dengan tanda koma"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Semak dahulu semua nombor, pilih yang memenuhi syarat, kemudian tulis dalam kurungan dan asingkan dengan koma."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pernyataan yang BENAR tentang set.",
    "p": [
     "Set boleh mengandungi objek selain nombor",
     "Set kosong tidak mempunyai sebarang unsur",
     "Satu set boleh dihuraikan dengan perihalan dan dengan penyenaraian",
     "Set kosong ditulis sebagai {0}",
     "Perkataan 'sedap' boleh menentukan ahli set dengan jelas",
     "Setiap set mesti ada sekurang-kurangnya satu unsur"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "{0} ada satu unsur, iaitu sifar, jadi bukan set kosong. 'Sedap' bergantung pada pendapat. Set kosong ialah set yang sah tanpa unsur."
   }
  },
  {
   "n": 2,
   "tempat": "Pasar Nombor",
   "sk": "11.1.2 (iii) / 11.1.3 / 11.1.4 Tatatanda pembina set, ∈ ∉ dan n(A)",
   "lampiran": "set2",
   "kadNama": "Simbol Unsur",
   "kadEm": "🔑",
   "kadFakta": "∈ dibaca 'ialah unsur bagi' dan ∉ dibaca 'bukan unsur bagi'. Simbol n(A) memberitahu berapa banyak unsur dalam set A.",
   "bosKadNama": "Kira Sekali",
   "bosKadEm": "🔢",
   "bosKadFakta": "Huruf dalam perkataan MALAYSIA ada lapan, tetapi n(A) hanya 6 kerana huruf yang berulang dikira sekali sahaja dalam satu set.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Simbol ∈ dalam 3 ∈ A dibaca:",
     "p": [
      "3 bukan unsur bagi A",
      "3 ialah subset bagi A",
      "3 ialah pelengkap bagi A",
      "3 ialah unsur bagi A"
     ],
     "b": 3,
     "u": "∈ bermaksud 'ialah unsur bagi'. ∉ bermaksud 'bukan unsur bagi'."
    },
    {
     "j": "pilih",
     "t": "Set A = {1, 3, 5, 7}. Pernyataan yang betul ialah:",
     "p": [
      "5 ∈ A",
      "4 ∈ A",
      "7 ∉ A",
      "2 ∈ A"
     ],
     "b": 0,
     "u": "5 ada dalam senarai A, jadi 5 ∈ A. 4 dan 2 tiada dalam A, dan 7 ada dalam A."
    },
    {
     "j": "nombor",
     "t": "A = {x: x nombor genap, x ≤ 12}, iaitu set nombor genap positif sehingga 12. Berapakah n(A)?",
     "b": 6,
     "tol": 0.001,
     "u": "A = {2, 4, 6, 8, 10, 12}. Ada 6 unsur, jadi n(A) = 6."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih set 'perdana'. Berapakah n(A)?",
     "b": 5,
     "tol": 0.001,
     "u": "A = {2, 3, 5, 7, 11}. Ada 5 unsur."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih set 'faktor 12' dan objek x = 5. Pernyataan yang betul ialah:",
     "p": [
      "5 ∈ A",
      "5 ∉ A",
      "n(A) = 5",
      "A = { }"
     ],
     "b": 1,
     "u": "Faktor 12 ialah {1, 2, 3, 4, 6, 12}. 5 tiada dalam senarai, jadi 5 ∉ A. Bilangan unsur A ialah 6."
    },
    {
     "j": "pilih",
     "t": "Tatatanda pembina set bagi A = {2, 4, 6, 8, 10} ialah:",
     "p": [
      "A = {x: x nombor ganjil, x ≤ 10}",
      "A = {x: x nombor genap, x ≤ 12}",
      "A = {x: x nombor genap, x ≤ 10}",
      "A = {x: x gandaan 3, x ≤ 10}"
     ],
     "b": 2,
     "u": "Syarat 'x nombor genap' dan 'x ≤ 10' menghasilkan 2, 4, 6, 8, 10 sahaja."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih set 'gandaan 13'. Berapakah n(A)?",
     "b": 0,
     "tol": 0.001,
     "u": "Tiada nombor antara 1 dan 12 yang ialah gandaan 13. A ialah set kosong, jadi n(A) = 0."
    },
    {
     "j": "nombor",
     "t": "Set A ialah set huruf dalam perkataan 'MALAYSIA'. Berapakah n(A)?",
     "b": 6,
     "tol": 0.001,
     "u": "Huruf berbeza ialah M, A, L, Y, S dan I. Huruf A berulang tetapi dikira sekali sahaja, jadi n(A) = 6."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Set A = {x: x nombor perdana, x &lt; 12}. Pilih SEMUA pernyataan yang BENAR.",
    "p": [
     "11 ∈ A",
     "n(A) = 5",
     "9 ∉ A",
     "1 ∈ A",
     "n(A) = 6",
     "12 ∈ A"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "A = {2, 3, 5, 7, 11}. 11 &lt; 12 jadi 11 ∈ A. 9 bukan perdana, 1 bukan perdana, dan 12 tidak kurang daripada 12."
   }
  },
  {
   "n": 3,
   "tempat": "Kembar Seiras",
   "sk": "11.1.5 Membanding beza set dan kesamaan set",
   "lampiran": "set3",
   "kadNama": "Susunan Tak Penting",
   "kadEm": "🔀",
   "kadFakta": "{2, 4, 6} dan {6, 4, 2} ialah set yang sama. Susunan dan ulangan unsur tidak mengubah sesebuah set.",
   "bosKadNama": "Set Kembar",
   "bosKadEm": "👯",
   "bosKadFakta": "Dua set sama apabila setiap unsur set pertama ada dalam set kedua, dan setiap unsur set kedua ada dalam set pertama.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dua set adalah sama jika:",
     "p": [
      "Bilangan unsurnya sama, walaupun unsurnya berbeza",
      "Unsurnya sama dan dalam susunan yang sama juga",
      "Nombor pertama dalam kedua-dua set sama",
      "Unsurnya sama sahaja"
     ],
     "b": 3,
     "u": "Set sama apabila unsurnya sama. Susunan tidak mengubah set, dan bilangan unsur yang sama sahaja tidak mencukupi."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, A = {2, 4, 6, 8}. Pilih set B ke-2, iaitu {8, 6, 4, 2}. Adakah A = B?",
     "p": [
      "Ya, unsurnya sama walaupun susunan berbeza",
      "Tidak, kerana susunan unsurnya berbeza",
      "Tidak, kerana 8 tiada dalam A",
      "Ya, tetapi hanya jika n(B) ialah 5"
     ],
     "b": 0,
     "u": "Kedua-dua set ada unsur 2, 4, 6 dan 8. Susunan tidak mengubah set."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih set B ke-3, iaitu {2, 2, 4, 6, 8}. Berapakah n(B)?",
     "b": 4,
     "tol": 0.001,
     "u": "Unsur 2 ditulis dua kali tetapi dikira sekali. B mempunyai 4 unsur berbeza, jadi n(B) = 4 dan B = A."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih set B ke-4, iaitu {2, 4, 6}. Mengapakah A ≠ B?",
     "p": [
      "n(A) = n(B) tetapi unsurnya berbeza",
      "8 ialah unsur A tetapi bukan unsur B",
      "2 ialah unsur B tetapi bukan unsur A",
      "A dan B ditulis dalam kurungan berbeza"
     ],
     "b": 1,
     "u": "A ada unsur 8 yang tiada dalam B, jadi kedua-dua set tidak sama. Bilangan unsurnya juga berbeza: n(A) = 4 dan n(B) = 3."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih set B ke-5, iaitu {1, 2, 4, 6, 8}. Adakah A = B?",
     "p": [
      "Ya, kerana A ialah sebahagian daripada B",
      "Ya, kerana kedua-dua set mempunyai nombor genap",
      "Tidak, 1 ialah unsur B tetapi bukan unsur A",
      "Tidak, kerana n(A) = n(B)"
     ],
     "b": 2,
     "u": "B ada unsur 1 yang tiada dalam A, jadi A ≠ B. n(A) = 4 dan n(B) = 5, jadi bilangan unsurnya pun tidak sama."
    },
    {
     "j": "pilih",
     "t": "A = {x: x gandaan 5, x &lt; 30} dan B = {5, 10, 15, 20, 25}. Manakah pernyataan yang betul?",
     "p": [
      "A ≠ B kerana A ada unsur 30",
      "A ≠ B kerana B ada unsur 0",
      "A ≠ B kerana susunan unsurnya berbeza",
      "A = B kerana kedua-dua set mempunyai 5 unsur yang sama"
     ],
     "b": 3,
     "u": "Gandaan 5 yang kurang daripada 30 ialah 5, 10, 15, 20 dan 25. 30 tidak kurang daripada 30, jadi tidak dalam A."
    },
    {
     "j": "pilih",
     "t": "Antara pasangan set berikut, yang manakah sama?",
     "p": [
      "{a, b, c} dan {c, a, b}",
      "{1, 2, 3} dan {1, 2, 3, 4}",
      "{2, 4} dan {4, 6}",
      "{ } dan {0}"
     ],
     "b": 0,
     "u": "{a, b, c} dan {c, a, b} mempunyai unsur yang sama. {0} ada satu unsur, iaitu sifar, tetapi { } tiada unsur."
    },
    {
     "j": "pilih",
     "t": "P = {x: x faktor bagi 8} dan Q = {1, 2, 4, 8}. Pernyataan yang betul ialah:",
     "p": [
      "P = Q dan n(P) = 3",
      "P = Q dan n(P) = 4",
      "P ≠ Q kerana 8 ∉ P",
      "P ≠ Q kerana 1 ∉ Q"
     ],
     "b": 1,
     "u": "Faktor 8 ialah 1, 2, 4 dan 8. Ini sama dengan Q, jadi P = Q dan n(P) = 4."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pasangan set yang SAMA.",
    "p": [
     "{x: x nombor genap, x &lt; 7} dan {6, 4, 2}",
     "{x: x faktor bagi 6} dan {1, 2, 3, 6}",
     "{5, 5, 7} dan {7, 5}",
     "{x: x nombor ganjil, x &lt; 8} dan {1, 3, 5, 7, 9}",
     "{ } dan {0}",
     "{2, 4, 6} dan {2, 4, 6, 8}"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Genap kurang daripada 7 ialah 2, 4 dan 6. Faktor 6 ialah 1, 2, 3 dan 6. {5, 5, 7} ialah {5, 7}. Pasangan keempat berbeza kerana 9 tidak kurang daripada 8, pasangan kelima berbeza kerana {0} ada satu unsur, dan pasangan keenam berbeza kerana 8."
   }
  },
  {
   "n": 4,
   "tempat": "Kelas Semesta",
   "sk": "11.2.1 / 11.2.2 Set semesta, pelengkap dan gambar rajah Venn",
   "lampiran": "set4",
   "kadNama": "Set Semesta",
   "kadEm": "🌌",
   "kadFakta": "Set semesta ξ ialah set semua unsur yang sedang dibincangkan. Dalam gambar rajah Venn, ia dilukis sebagai segi empat.",
   "bosKadNama": "Pelengkap",
   "bosKadEm": "🌔",
   "bosKadFakta": "A' ialah semua unsur dalam ξ yang bukan unsur A. Jumlah n(A) dan n(A') sentiasa sama dengan n(ξ).",
   "soalan": [
    {
     "j": "pilih",
     "t": "Set semesta ditulis dengan simbol:",
     "p": [
      "∅",
      "∈",
      "ξ",
      "⊂"
     ],
     "b": 2,
     "u": "ξ ialah simbol set semesta. ∅ ialah set kosong, ∈ ialah 'unsur bagi' dan ⊂ ialah subset."
    },
    {
     "j": "pilih",
     "t": "Pelengkap bagi set A, ditulis A', ialah set unsur dalam ξ yang:",
     "p": [
      "Ialah unsur A",
      "Sama dengan set A",
      "Tiada dalam ξ",
      "Bukan unsur A"
     ],
     "b": 3,
     "u": "A' mengandungi semua unsur ξ yang tidak ada dalam A."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih set 'gandaan 3'. Berapakah n(A')?",
     "b": 8,
     "tol": 0.001,
     "u": "A = {3, 6, 9, 12}, jadi n(A) = 4. n(A') = 12 − 4 = 8."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih set 'perdana'. Berapakah n(A')?",
     "b": 7,
     "tol": 0.001,
     "u": "A = {2, 3, 5, 7, 11}, jadi n(A) = 5. n(A') = 12 − 5 = 7."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih set 'kuasa dua'. Penyenaraian A' yang betul ialah:",
     "p": [
      "{2, 3, 5, 6, 7, 8, 10, 11, 12}",
      "{1, 4, 9}",
      "{2, 3, 5, 6, 7, 8, 10, 11}",
      "{1, 2, 3, 5, 6, 7, 8, 10, 11, 12}"
     ],
     "b": 0,
     "u": "Kuasa dua sempurna dalam ξ ialah 1, 4 dan 9. A' ialah baki sembilan nombor: 2, 3, 5, 6, 7, 8, 10, 11 dan 12."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih set 'lebih 8', iaitu A = {9, 10, 11, 12}. Nombor 7 berada di kawasan:",
     "p": [
      "A, iaitu di dalam bulatan A yang berlorek",
      "A', di luar bulatan A tetapi dalam ξ",
      "Di luar ξ, iaitu di luar segi empat besar",
      "Pada sempadan bulatan A sahaja"
     ],
     "b": 1,
     "u": "7 ialah unsur ξ tetapi bukan unsur A, jadi 7 ∈ A'. Ia ditulis di luar bulatan tetapi di dalam segi empat."
    },
    {
     "j": "nombor",
     "t": "ξ = {1, 2, 3, ..., 20} dan A = {x: x nombor genap}. Berapakah n(A')?",
     "b": 10,
     "tol": 0.001,
     "u": "Ada 10 nombor genap dan 10 nombor ganjil antara 1 dan 20. A' ialah set nombor ganjil, jadi n(A') = 10."
    },
    {
     "j": "nombor",
     "t": "n(ξ) = 30 dan n(A) = 12. Berapakah n(A')?",
     "b": 18,
     "tol": 0.001,
     "u": "n(A') = n(ξ) − n(A) = 30 − 12 = 18."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pernyataan yang BENAR tentang pelengkap set.",
    "p": [
     "n(A) + n(A') = n(ξ)",
     "Jika A = ξ, maka A' ialah set kosong",
     "Setiap unsur ξ ada dalam A atau A' sahaja",
     "A' sentiasa mempunyai unsur lebih banyak daripada A",
     "Unsur A juga ialah unsur A'",
     "n(A') = n(A) − n(ξ)"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Setiap unsur ξ ada dalam tepat satu daripada A atau A', jadi n(A) + n(A') = n(ξ). Jika A = ξ, tiada unsur tinggal untuk A'. A' boleh lebih kecil daripada A, dan rumusnya ialah n(A') = n(ξ) − n(A)."
   }
  },
  {
   "n": 5,
   "tempat": "Kotak Hadiah",
   "sk": "11.2.3 / 11.2.4 Subset dan gambar rajah Venn",
   "lampiran": "set5",
   "kadNama": "Subset",
   "kadEm": "🎁",
   "kadFakta": "Set kosong dan set A sendiri sentiasa subset bagi A. Set dengan 3 unsur ada 8 subset semuanya.",
   "bosKadNama": "Set Kecil",
   "bosKadEm": "📦",
   "bosKadFakta": "Set dengan 4 unsur ada 16 subset. Setiap unsur tambahan menggandakan bilangan subset.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Simbol ⊂ dalam B ⊂ A dibaca:",
     "p": [
      "B ialah unsur bagi A",
      "B ialah pelengkap bagi A",
      "B ialah subset bagi A",
      "B ialah semesta bagi A"
     ],
     "b": 2,
     "u": "⊂ bermaksud 'ialah subset bagi'."
    },
    {
     "j": "pilih",
     "t": "Set B ialah subset bagi set A jika:",
     "p": [
      "Setiap unsur A ialah unsur B",
      "B dan A tiada unsur sepunya",
      "n(B) lebih besar daripada n(A)",
      "Setiap unsur B ialah unsur A"
     ],
     "b": 3,
     "u": "Subset ialah set yang semua unsurnya ada dalam set yang lebih besar."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, A = {2, 4, 6}. Berapakah jumlah subset A, termasuk set kosong dan A sendiri?",
     "b": 8,
     "tol": 0.001,
     "u": "Subset A ialah { }, {2}, {4}, {6}, {2, 4}, {2, 6}, {4, 6} dan {2, 4, 6}. Jumlahnya 8."
    },
    {
     "j": "nombor",
     "t": "A = {2, 4, 6}. Berapakah subset A yang mempunyai tepat 2 unsur?",
     "b": 3,
     "tol": 0.001,
     "u": "Tiga subset: {2, 4}, {2, 6} dan {4, 6}."
    },
    {
     "j": "pilih",
     "t": "Antara yang berikut, yang manakah BUKAN subset bagi A = {2, 4, 6}?",
     "p": [
      "{2, 8}",
      "{2, 4, 6}",
      "{ }",
      "{2, 4}"
     ],
     "b": 0,
     "u": "8 ialah unsur {2, 8} tetapi 8 bukan unsur A. Set kosong dan A sendiri kedua-duanya subset A."
    },
    {
     "j": "nombor",
     "t": "Set P = {a, b, c, d}. Berapakah jumlah subset P?",
     "b": 16,
     "tol": 0.001,
     "u": "Setiap unsur boleh dipilih atau tidak dipilih. 2 × 2 × 2 × 2 = 16 subset."
    },
    {
     "j": "nombor",
     "t": "Berapakah bilangan subset bagi set kosong, { }?",
     "b": 1,
     "tol": 0.001,
     "u": "Set kosong tiada unsur untuk dipilih. Subsetnya hanya set kosong itu sendiri, jadi ada 1 subset."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, subset B ialah {4, 6}. Pernyataan yang betul ialah:",
     "p": [
      "A ⊂ B dan n(B) = 2",
      "B ⊂ A dan n(B) = 2",
      "B ⊂ A dan n(B) = 3",
      "B = A"
     ],
     "b": 1,
     "u": "4 dan 6 ada dalam A = {2, 4, 6}, jadi B ⊂ A. B ada 2 unsur, kurang daripada A yang ada 3, jadi B ≠ A."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA subset bagi set {1, 2, 3}.",
    "p": [
     "{ }",
     "{1, 3}",
     "{1, 2, 3}",
     "{3, 4}",
     "{0}",
     "{1, 2, 4}"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "{ } dan {1, 2, 3} sentiasa subset. {1, 3} juga. {3, 4} dan {1, 2, 4} mengandungi 4 yang tiada dalam set. {0} mengandungi 0 yang juga tiada dalam set."
   }
  },
  {
   "n": 6,
   "tempat": "Studio Venn",
   "sk": "11.2.5 Perkaitan set, subset, set semesta dan pelengkap",
   "lampiran": "set6",
   "kadNama": "Gambar Rajah Venn",
   "kadEm": "🎨",
   "kadFakta": "Gambar rajah Venn dinamakan sempena John Venn, ahli logik dari England. Segi empat mewakili ξ dan bulatan mewakili set.",
   "bosKadNama": "Reka Sendiri",
   "bosKadEm": "✏️",
   "bosKadFakta": "Gambar rajah Venn yang baik menunjukkan ξ, A, A' dan subset dengan jelas, termasuk bilangan unsur setiap kawasan.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, ξ = {1, 2, ..., 8} dan A = {1, 3, 5, 7}. Penyenaraian pelengkap A' ialah:",
     "p": [
      "{1, 3, 5, 7}",
      "{1, 2, 3, 4, 5, 6, 7, 8}",
      "{2, 4, 6, 8}",
      "{ }"
     ],
     "b": 2,
     "u": "A' ialah unsur ξ yang tiada dalam A, iaitu nombor genap 2, 4, 6 dan 8."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, B ialah set semua unsur A kecuali 1 dan 7. Berapakah n(B)?",
     "b": 2,
     "tol": 0.001,
     "u": "A = {1, 3, 5, 7}. Buang 1 dan 7, tinggal B = {3, 5}, jadi n(B) = 2 dan B ⊂ A."
    },
    {
     "j": "nombor",
     "t": "Sebuah kelas mempunyai 30 murid (ξ). Seramai 18 murid bermain badminton (set A). Berapakah bilangan murid yang tidak bermain badminton, iaitu n(A')?",
     "b": 12,
     "tol": 0.001,
     "u": "n(A') = n(ξ) − n(A) = 30 − 18 = 12 murid."
    },
    {
     "j": "nombor",
     "t": "ξ = {x: x integer, 1 ≤ x ≤ 40} dan A = {x: x gandaan 5}. Berapakah n(A')?",
     "b": 32,
     "tol": 0.001,
     "u": "Gandaan 5 dalam ξ ialah 5, 10, ..., 40, iaitu 8 nombor. n(A') = 40 − 8 = 32."
    },
    {
     "j": "pilih",
     "t": "Huraian yang manakah menunjukkan gambar rajah Venn bagi B ⊂ A ⊂ ξ?",
     "p": [
      "Bulatan A dalam bulatan B, dan bulatan B dalam segi empat ξ",
      "Bulatan A dan B berasingan, kedua-duanya dalam segi empat ξ",
      "Bulatan B dalam segi empat ξ tetapi di luar bulatan A",
      "B dalam A, A dalam ξ"
     ],
     "b": 3,
     "u": "B ⊂ A bermaksud B di dalam A, dan A ⊂ ξ bermaksud A di dalam ξ."
    },
    {
     "j": "pilih",
     "t": "ξ = {1, 2, ..., 10}, A = {x: x nombor perdana} dan B = {2, 3}. Pernyataan yang betul ialah:",
     "p": [
      "B ⊂ A dan n(A') = 6",
      "A ⊂ B dan n(A') = 6",
      "B ⊂ A dan n(A') = 4",
      "B = A dan n(A') = 6"
     ],
     "b": 0,
     "u": "A = {2, 3, 5, 7}. B ⊂ A kerana 2 dan 3 ada dalam A. n(A) = 4, jadi n(A') = 10 − 4 = 6."
    },
    {
     "j": "nombor",
     "t": "ξ = {x: x integer, 1 ≤ x ≤ 50} dan A = {x: x kuasa dua sempurna}. Berapakah n(A')?",
     "b": 43,
     "tol": 0.001,
     "u": "Kuasa dua sempurna ialah 1, 4, 9, 16, 25, 36 dan 49, iaitu 7 nombor. n(A') = 50 − 7 = 43."
    },
    {
     "j": "pilih",
     "t": "Set B ialah subset bagi set A. Jika n(A) = 6 dan n(B) = 6, maka:",
     "p": [
      "B = { }",
      "B = A",
      "B = ξ",
      "A' = B"
     ],
     "b": 1,
     "u": "Semua unsur B ada dalam A, dan bilangan unsurnya sama. Tiada unsur A yang tertinggal, jadi B = A."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Pilih satu kumpulan dalam kelas awak, contohnya murid yang datang ke sekolah dengan basikal atau murid yang ada adik-beradik. Reka satu masalah tentang set: tentukan ξ, set A dan subset B ⊂ A.",
    "arahan": "Lukis atau huraikan gambar rajah Venn yang menunjukkan ξ, A, A' dan B. Pilih nombor sendiri bagi n(ξ), n(A), n(A') dan n(B). Terangkan dalam satu atau dua ayat mengapa B ialah subset A dan mengapa n(A) + n(A') = n(ξ).",
    "u": "Jawapan TP6 yang kukuh menetapkan ξ dengan jelas, memilih A dan B ⊂ A yang masuk akal, mengira n(A') = n(ξ) − n(A) dengan betul, dan menerangkan kaitan antara set, subset, semesta dan pelengkap."
   }
  }
 ]
};
