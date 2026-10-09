/* Bank soalan — Matematik Ting. 4 · Bab 3 Penaakulan Logik.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m4b3.js
   kemudian jalankan: node bina.js m4b3

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 4, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m4b3"] =
{
 "id": "m4b3",
 "tingkatan": 4,
 "kod": "3.0 Penaakulan Logik",
 "tajuk": "Mahkamah Logik",
 "subtajuk": "Matematik Ting. 4 · Bab 3 Penaakulan Logik",
 "spi": [
  "Mempamerkan pengetahuan asas tentang pernyataan dan hujah.",
  "Mempamerkan kefahaman tentang pernyataan dan hujah.",
  "Mengaplikasikan kefahaman tentang hujah deduktif dan hujah induktif untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang penaakulan logik dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang penaakulan logik dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang penaakulan logik dalam konteks penyelesaian masalah bukan rutin secara kreatif."
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
  "1": "{n} dapat mengenal pasti pernyataan, menentukan nilai kebenarannya dan membentuk penafian. Langkah seterusnya ialah pernyataan majmuk dan implikasi.",
  "2": "{n} memahami nilai kebenaran pernyataan majmuk \"dan\" serta \"atau\", dan dapat mengenal pasti antejadian serta akibat dalam implikasi. Perlu lebih latihan hujah deduktif dan induktif.",
  "3": "{n} boleh melengkapkan hujah deduktif Bentuk I, II dan III, menilai kesahan dan kemunasabahan hujah, serta membuat kesimpulan induktif yang mudah.",
  "4": "{n} mampu membina akas, songsangan dan kontrapositif, menentukan nilai kebenarannya, dan mencari contoh penyangkal. Seterusnya, latih menilai kekuatan hujah induktif.",
  "5": "{n} dapat membentuk hujah induktif yang kuat daripada pola dan menilai sama ada sesuatu hujah induktif kuat atau lemah. Sudah bersedia untuk masalah bukan rutin.",
  "6": "{n} berjaya mereka dakwaan sendiri, mengujinya dengan hujah induktif, dan menafikannya dengan contoh penyangkal yang sah. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Penaakulan Logik. Cadangan: ulang hentian pertama dengan Rajah 1 dan bezakan ayat yang merupakan pernyataan dengan yang bukan pernyataan bersama rakan sebaya."
 },
 "lampiran": {
  "nilai": "<figure class=\"figure jmi\" data-w=\"t4logik\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4logik&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Kad ayat. Pilih ayat dan semak sama ada ia pernyataan.&quot;,&quot;alt&quot;:&quot;Rajah interaktif kad ayat; cip memilih enam ayat dan rajah menunjukkan sama ada ayat itu pernyataan, nilai kebenarannya dan penafiannya&quot;,&quot;mod&quot;:&quot;nilai&quot;,&quot;ayat&quot;:[{&quot;t&quot;:&quot;5 ialah nombor perdana&quot;,&quot;jenis&quot;:&quot;B&quot;,&quot;nafi&quot;:&quot;5 bukan nombor perdana&quot;},{&quot;t&quot;:&quot;x + 3 = 7&quot;,&quot;jenis&quot;:&quot;X&quot;},{&quot;t&quot;:&quot;Semua segi empat sama ialah segi empat tepat&quot;,&quot;jenis&quot;:&quot;B&quot;,&quot;nafi&quot;:&quot;Bukan semua segi empat sama ialah segi empat tepat&quot;},{&quot;t&quot;:&quot;−3 &gt; −2&quot;,&quot;jenis&quot;:&quot;P&quot;,&quot;nafi&quot;:&quot;−3 tidak lebih besar daripada −2&quot;},{&quot;t&quot;:&quot;Tutup pintu itu!&quot;,&quot;jenis&quot;:&quot;X&quot;},{&quot;t&quot;:&quot;12 ialah gandaan 5&quot;,&quot;jenis&quot;:&quot;P&quot;,&quot;nafi&quot;:&quot;12 bukan gandaan 5&quot;}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 200\" role=\"img\" aria-label=\"Rajah kad ayat: 5 ialah nombor perdana; menunjukkan sama ada ayat itu pernyataan, nilai kebenarannya dan penafiannya\"><rect x=\"6\" y=\"8\" width=\"248\" height=\"70\" rx=\"10\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.2\"></rect><text x=\"16\" y=\"32\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">“5 ialah nombor perdana”</text><text x=\"8\" y=\"102\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\">Pernyataan?</text><text class=\"jmi-hasil\" x=\"120\" y=\"102\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Ya</text><text x=\"8\" y=\"124\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\">Nilai kebenaran:</text><text class=\"jmi-hasil\" x=\"130\" y=\"124\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">Benar</text><text x=\"8\" y=\"148\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\">Penafian:</text><text class=\"jmi-hasil\" x=\"8\" y=\"168\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">“5 bukan nombor perdana”</text><text class=\"jmi-hasil\" x=\"8\" y=\"188\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Nilai kebenaran penafian: Palsu</text></svg></div><figcaption>Rajah 1 · Kad ayat. Pilih ayat dan semak sama ada ia pernyataan.</figcaption></figure>",
  "majmuk": "<figure class=\"figure jmi\" data-w=\"t4logik\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4logik&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Pernyataan majmuk. Pilih p dan q, lihat baris jadual kebenaran.&quot;,&quot;alt&quot;:&quot;Rajah interaktif jadual kebenaran bagi p dan q serta p atau q; cip memilih pernyataan p dan q, baris yang sepadan diserlahkan&quot;,&quot;mod&quot;:&quot;majmuk&quot;,&quot;pSet&quot;:[{&quot;lbl&quot;:&quot;7 perdana&quot;,&quot;t&quot;:&quot;7 ialah nombor perdana&quot;,&quot;v&quot;:true},{&quot;lbl&quot;:&quot;7 genap&quot;,&quot;t&quot;:&quot;7 ialah nombor genap&quot;,&quot;v&quot;:false}],&quot;qSet&quot;:[{&quot;lbl&quot;:&quot;2³ = 8&quot;,&quot;t&quot;:&quot;2³ = 8&quot;,&quot;v&quot;:true},{&quot;lbl&quot;:&quot;2³ = 6&quot;,&quot;t&quot;:&quot;2³ = 6&quot;,&quot;v&quot;:false}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 240\" role=\"img\" aria-label=\"Rajah jadual kebenaran pernyataan majmuk; p Benar dan q Benar, baris sepadan diserlahkan\"><text x=\"8\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">p: 7 ialah nombor perdana</text><text x=\"8\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">q: 2³ = 8</text><rect x=\"6\" y=\"60\" width=\"248\" height=\"130\" rx=\"8\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"24\" y=\"78\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">p</text><text x=\"82\" y=\"78\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">q</text><text x=\"150\" y=\"78\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">p dan q</text><text x=\"220\" y=\"78\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">p atau q</text><g class=\"jmi-hasil\"><rect x=\"10\" y=\"89\" width=\"240\" height=\"22\" rx=\"6\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><text x=\"24\" y=\"105\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink2)\" text-anchor=\"middle\">B</text><text x=\"82\" y=\"105\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink2)\" text-anchor=\"middle\">B</text><text x=\"150\" y=\"105\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">B</text><text x=\"220\" y=\"105\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">B</text><text x=\"24\" y=\"131\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink2)\" text-anchor=\"middle\">B</text><text x=\"82\" y=\"131\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink2)\" text-anchor=\"middle\">P</text><text x=\"150\" y=\"131\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">P</text><text x=\"220\" y=\"131\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">B</text><text x=\"24\" y=\"157\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink2)\" text-anchor=\"middle\">P</text><text x=\"82\" y=\"157\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink2)\" text-anchor=\"middle\">B</text><text x=\"150\" y=\"157\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">P</text><text x=\"220\" y=\"157\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">B</text><text x=\"24\" y=\"183\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink2)\" text-anchor=\"middle\">P</text><text x=\"82\" y=\"183\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink2)\" text-anchor=\"middle\">P</text><text x=\"150\" y=\"183\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">P</text><text x=\"220\" y=\"183\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">P</text><text class=\"jmi-hasil\" x=\"8\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">p dan q: Benar</text><text class=\"jmi-hasil\" x=\"8\" y=\"230\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">p atau q: Benar</text></svg></div><figcaption>Rajah 1 · Pernyataan majmuk. Pilih p dan q, lihat baris jadual kebenaran.</figcaption></figure>",
  "hujah": "<figure class=\"figure jmi\" data-w=\"t4logik\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4logik&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Hujah deduktif. Pilih hujah dan lihat bentuknya.&quot;,&quot;alt&quot;:&quot;Rajah interaktif empat hujah deduktif Bentuk I, II dan III dengan premis 1, premis 2, kesimpulan dan rajah Euler atau anak panah&quot;,&quot;mod&quot;:&quot;hujah&quot;,&quot;senarai&quot;:[{&quot;bentuk&quot;:&quot;I&quot;,&quot;p1&quot;:&quot;Semua gandaan 10 ialah gandaan 5.&quot;,&quot;p2&quot;:&quot;70 ialah gandaan 10.&quot;,&quot;k&quot;:&quot;70 ialah gandaan 5.&quot;},{&quot;bentuk&quot;:&quot;II&quot;,&quot;p1&quot;:&quot;Jika x = 4, maka 3x = 12.&quot;,&quot;p2&quot;:&quot;x = 4.&quot;,&quot;k&quot;:&quot;3x = 12.&quot;},{&quot;bentuk&quot;:&quot;III&quot;,&quot;p1&quot;:&quot;Jika suatu poligon ialah heksagon, maka ia mempunyai 6 sisi.&quot;,&quot;p2&quot;:&quot;Poligon PQRST tidak mempunyai 6 sisi.&quot;,&quot;k&quot;:&quot;PQRST bukan heksagon.&quot;},{&quot;bentuk&quot;:&quot;I&quot;,&quot;p1&quot;:&quot;Semua nombor perdana ialah nombor ganjil.&quot;,&quot;p2&quot;:&quot;2 ialah nombor perdana.&quot;,&quot;k&quot;:&quot;2 ialah nombor ganjil.&quot;}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 248\" role=\"img\" aria-label=\"Rajah hujah deduktif Bentuk I dengan premis 1, premis 2 dan kesimpulan\"><text x=\"8\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--vena)\" font-weight=\"700\">Bentuk I</text><text x=\"8\" y=\"40\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">Premis 1: Semua gandaan 10 ialah</text><text x=\"8\" y=\"56\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">gandaan 5.</text><text x=\"8\" y=\"76\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">Premis 2: 70 ialah gandaan 10.</text><text class=\"jmi-hasil\" x=\"8\" y=\"96\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Kesimpulan: 70 ialah gandaan 5.</text><ellipse cx=\"130\" cy=\"174\" rx=\"110\" ry=\"46\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.5\"></ellipse><ellipse cx=\"110\" cy=\"180\" rx=\"56\" ry=\"28\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.5\"></ellipse><text x=\"196\" y=\"158\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" font-weight=\"700\">B</text><text x=\"70\" y=\"176\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--vena)\" font-weight=\"700\">A</text><circle class=\"jmi-hasil\" cx=\"122\" cy=\"184\" r=\"5\" fill=\"var(--arteri)\" stroke=\"var(--arteri)\" stroke-width=\"1.5\"></circle><text class=\"jmi-hasil\" x=\"132\" y=\"188\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">C</text><text class=\"jmi-hasil\" x=\"8\" y=\"238\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">Hujah sah</text></svg></div><figcaption>Rajah 1 · Hujah deduktif. Pilih hujah dan lihat bentuknya.</figcaption></figure>",
  "imp": "<figure class=\"figure jmi\" data-w=\"t4logik\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4logik&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Implikasi, akas, songsangan dan kontrapositif. Pilih implikasi dan bentuk.&quot;,&quot;alt&quot;:&quot;Rajah interaktif empat implikasi; bagi setiap satu, nilai kebenaran implikasi, akas, songsangan dan kontrapositif dikira dengan menguji integer x dari negatif 12 hingga 30&quot;,&quot;mod&quot;:&quot;implikasi&quot;,&quot;senarai&quot;:[{&quot;p&quot;:&quot;x3&quot;,&quot;q&quot;:&quot;kd9&quot;},{&quot;p&quot;:&quot;g6&quot;,&quot;q&quot;:&quot;g4&quot;},{&quot;p&quot;:&quot;gan4&quot;,&quot;q&quot;:&quot;gen&quot;},{&quot;p&quot;:&quot;kd16&quot;,&quot;q&quot;:&quot;x4&quot;}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 236\" role=\"img\" aria-label=\"Rajah empat bentuk implikasi: Jika x = 3, maka x² = 9, akas, songsangan dan kontrapositif dengan nilai kebenaran masing-masing\"><text x=\"8\" y=\"20\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">x ialah integer dari −12 hingga 30</text><rect x=\"6\" y=\"32\" width=\"248\" height=\"39\" rx=\"8\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2\"></rect><text x=\"14\" y=\"47\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">Implikasi</text><text class=\"jmi-hasil\" x=\"246\" y=\"47\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">Benar</text><text x=\"14\" y=\"64\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">Jika x = 3, maka x² = 9</text><rect x=\"6\" y=\"77\" width=\"248\" height=\"39\" rx=\"8\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"14\" y=\"92\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">Akas</text><text class=\"jmi-hasil\" x=\"246\" y=\"92\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" text-anchor=\"end\" font-weight=\"700\">Palsu</text><text x=\"14\" y=\"109\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">Jika x² = 9, maka x = 3</text><rect x=\"6\" y=\"122\" width=\"248\" height=\"39\" rx=\"8\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"14\" y=\"137\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">Songsangan</text><text class=\"jmi-hasil\" x=\"246\" y=\"137\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" text-anchor=\"end\" font-weight=\"700\">Palsu</text><text x=\"14\" y=\"154\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">Jika x ≠ 3, maka x² ≠ 9</text><rect x=\"6\" y=\"167\" width=\"248\" height=\"39\" rx=\"8\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"14\" y=\"182\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">Kontrapositif</text><text class=\"jmi-hasil\" x=\"246\" y=\"182\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">Benar</text><text x=\"14\" y=\"199\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">Jika x² ≠ 9, maka x ≠ 3</text><text class=\"jmi-hasil\" x=\"8\" y=\"226\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">Tiada contoh penyangkal</text></svg></div><figcaption>Rajah 1 · Implikasi, akas, songsangan dan kontrapositif. Pilih implikasi dan bentuk.</figcaption></figure>",
  "induktif": "<figure class=\"figure jmi cabar\" data-w=\"t4logik\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4logik&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Hujah induktif. Tambah premis, kemudian buat kesimpulan umum.&quot;,&quot;alt&quot;:&quot;Rajah interaktif hujah induktif; cip memilih pola A, B atau C dan gelongsor menambah premis sebelum kesimpulan umum Tn dipaparkan&quot;,&quot;mod&quot;:&quot;induktif&quot;,&quot;cabar&quot;:true,&quot;konteks&quot;:&quot;Cari rumus umum bagi jujukan&quot;,&quot;nMaks&quot;:5,&quot;pola&quot;:[{&quot;a&quot;:0,&quot;b&quot;:4,&quot;c&quot;:-1},{&quot;a&quot;:1,&quot;b&quot;:0,&quot;c&quot;:1},{&quot;a&quot;:0,&quot;b&quot;:3,&quot;c&quot;:2}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 200\" role=\"img\" aria-label=\"Rajah hujah induktif: 3 premis daripada pola 3, 7, 11 membawa kepada kesimpulan umum\"><text x=\"8\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Cari rumus umum bagi jujukan</text><text x=\"8\" y=\"42\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">Premis 1: T1 = 3</text><text x=\"8\" y=\"60\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">Premis 2: T2 = 7</text><text x=\"8\" y=\"78\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">Premis 3: T3 = 11</text><text class=\"jmi-hasil\" x=\"166.4\" y=\"42\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\">= 4(1) − 1</text><text class=\"jmi-hasil\" x=\"166.4\" y=\"60\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\">= 4(2) − 1</text><text class=\"jmi-hasil\" x=\"166.4\" y=\"78\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\">= 4(3) − 1</text><line x1=\"8\" y1=\"104\" x2=\"252\" y2=\"104\" stroke=\"var(--ink3)\" stroke-width=\"1\"></line><text class=\"jmi-hasil\" x=\"8\" y=\"124\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">Kesimpulan: Tn = 4n − 1</text><text class=\"jmi-hasil\" x=\"8\" y=\"142\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">bagi n = 1, 2, 3, ...</text><text class=\"jmi-hasil\" x=\"8\" y=\"162\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Ramalan T4 = 15</text></svg></div><figcaption>Rajah 1 · Hujah induktif. Tambah premis, kemudian buat kesimpulan umum.</figcaption></figure>",
  "sangkal": "<figure class=\"figure jmi\" data-w=\"t4logik\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4logik&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Uji dakwaan n demi n. Cari contoh penyangkal.&quot;,&quot;alt&quot;:&quot;Rajah interaktif menguji dakwaan untuk n dari 0 hingga 41; titik hijau memenuhi dakwaan, titik merah ialah contoh penyangkal&quot;,&quot;mod&quot;:&quot;sangkal&quot;,&quot;dakwaan&quot;:[&quot;euler41&quot;,&quot;p11&quot;],&quot;nMaks&quot;:41}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 175\" role=\"img\" aria-label=\"Rajah ujian dakwaan n² + n + 41 ialah nombor perdana bagi n dari 0 hingga 41; titik hijau memenuhi dakwaan dan titik merah tidak\"><text x=\"8\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Dakwaan: n² + n + 41 ialah nombor</text><text x=\"8\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">perdana</text><circle cx=\"14\" cy=\"60\" r=\"5\" fill=\"var(--teal)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"31\" cy=\"60\" r=\"7\" fill=\"var(--teal)\" stroke=\"var(--ink)\" stroke-width=\"1.5\"></circle><circle cx=\"48\" cy=\"60\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"65\" cy=\"60\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"82\" cy=\"60\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"99\" cy=\"60\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"116\" cy=\"60\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"133\" cy=\"60\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"150\" cy=\"60\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"167\" cy=\"60\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"184\" cy=\"60\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"201\" cy=\"60\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"218\" cy=\"60\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"235\" cy=\"60\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"14\" cy=\"77\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"31\" cy=\"77\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"48\" cy=\"77\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"65\" cy=\"77\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"82\" cy=\"77\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"99\" cy=\"77\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"116\" cy=\"77\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"133\" cy=\"77\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"150\" cy=\"77\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"167\" cy=\"77\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"184\" cy=\"77\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"201\" cy=\"77\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"218\" cy=\"77\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"235\" cy=\"77\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"14\" cy=\"94\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"31\" cy=\"94\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"48\" cy=\"94\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"65\" cy=\"94\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"82\" cy=\"94\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"99\" cy=\"94\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"116\" cy=\"94\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"133\" cy=\"94\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"150\" cy=\"94\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"167\" cy=\"94\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"184\" cy=\"94\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"201\" cy=\"94\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"218\" cy=\"94\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><circle cx=\"235\" cy=\"94\" r=\"5\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></circle><text x=\"8\" y=\"123\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">n = 1: n² + n + 41 = 43</text><text x=\"8\" y=\"143\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">✓ Memenuhi dakwaan</text><text class=\"jmi-hasil\" x=\"8\" y=\"165\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Penyangkal pertama: n = 40</text></svg></div><figcaption>Rajah 1 · Uji dakwaan n demi n. Cari contoh penyangkal.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Bilik Pernyataan",
   "sk": "3.1.1 / 3.1.2 Pernyataan, nilai kebenaran dan penafian",
   "lampiran": "nilai",
   "kadNama": "Pernyataan",
   "kadEm": "💬",
   "kadFakta": "Pernyataan ialah ayat yang boleh ditentukan sama ada benar atau palsu, tetapi bukan kedua-duanya. Soalan, arahan dan ayat seperti x + 3 = 7 bukan pernyataan.",
   "bosKadNama": "Penafian",
   "bosKadEm": "❌",
   "bosKadFakta": "Penafian dibentuk dengan menambah \"bukan\" atau \"tidak\". Jika pernyataan benar, penafiannya palsu, dan sebaliknya.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Antara ayat berikut, yang manakah pernyataan?",
     "p": [
      "5 ialah nombor perdana",
      "x + 3 = 7",
      "Tutup pintu itu!",
      "Berapakah nilai 2 + 3?"
     ],
     "b": 0,
     "u": "\"5 ialah nombor perdana\" boleh ditentukan benar. Ayat perintah dan ayat tanya bukan pernyataan, dan x + 3 = 7 bergantung pada nilai x."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Ayat 2. Mengapakah \"x + 3 = 7\" bukan pernyataan?",
     "p": [
      "Ayat itu tidak mengandungi sebarang perkataan",
      "Nilai kebenarannya bergantung pada nilai x",
      "Ayat itu ialah ayat perintah",
      "Ayat itu palsu bagi setiap nilai x"
     ],
     "b": 1,
     "u": "Jika x = 4, ayat itu benar; jika x = 5, ayat itu palsu. Oleh sebab nilai kebenarannya tidak dapat ditentukan, ia bukan pernyataan."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Ayat 6. Nilai kebenaran \"12 ialah gandaan 5\" ialah:",
     "p": [
      "Benar",
      "Bukan pernyataan",
      "Palsu",
      "Benar dan palsu"
     ],
     "b": 2,
     "u": "Gandaan 5 ialah 5, 10, 15, ... dan 12 tiada dalam senarai itu, jadi pernyataan itu palsu."
    },
    {
     "j": "pilih",
     "t": "Penafian bagi pernyataan \"12 ialah gandaan 5\" ialah:",
     "p": [
      "12 ialah gandaan bagi 6",
      "5 ialah gandaan bagi 12",
      "12 ialah faktor bagi 5",
      "12 bukan gandaan 5"
     ],
     "b": 3,
     "u": "Penafian dibentuk dengan menambah \"bukan\". Penafian itu benar kerana pernyataan asal palsu."
    },
    {
     "j": "pilih",
     "t": "Jika suatu pernyataan benar, nilai kebenaran penafiannya ialah:",
     "p": [
      "Palsu",
      "Benar juga",
      "Tidak dapat ditentukan",
      "Sama dengan pernyataan asal"
     ],
     "b": 0,
     "u": "Penafian menukar nilai kebenaran: benar menjadi palsu dan palsu menjadi benar."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Ayat 3. Pernyataan \"Semua segi empat sama ialah segi empat tepat\" ialah:",
     "p": [
      "Palsu",
      "Benar",
      "Bukan pernyataan",
      "Separuh benar"
     ],
     "b": 1,
     "u": "Setiap segi empat sama mempunyai empat sudut tegak dan sisi bertentangan yang sama panjang, jadi ia memenuhi takrif segi empat tepat."
    },
    {
     "j": "pilih",
     "t": "Apakah nilai kebenaran pernyataan \"Sebilangan segi tiga mempunyai sudut tegak\"?",
     "p": [
      "Palsu, kerana tidak setiap segi tiga bersudut tegak",
      "Palsu, kerana segi tiga tiada sudut tegak",
      "Benar, kerana ada segi tiga bersudut tegak",
      "Bukan pernyataan kerana tiada nombor"
     ],
     "b": 2,
     "u": "Pengkuantiti \"sebilangan\" bermaksud sekurang-kurangnya satu. Segi tiga bersudut tegak wujud, jadi pernyataan itu benar."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Ayat 4. Penafian bagi \"−3 &gt; −2\" ialah:",
     "p": [
      "−2 tidak lebih besar daripada −3",
      "−3 bukan nombor negatif",
      "−3 lebih besar daripada 2",
      "−3 tidak lebih besar daripada −2"
     ],
     "b": 3,
     "u": "Tambah \"tidak\" pada pernyataan asal. Pernyataan asal palsu (−3 berada di kiri −2 pada garis nombor), jadi penafiannya benar."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pernyataan yang BENAR.",
    "p": [
     "7 ialah faktor bagi 21",
     "Semua nombor perdana ialah nombor ganjil",
     "0.5 = 1/2",
     "Sebilangan gandaan 3 ialah nombor genap",
     "4² = 8",
     "Semua nombor kuasa dua sempurna ialah genap"
    ],
    "b": [
     0,
     2,
     3
    ],
    "u": "21 = 7 × 3; 0.5 = 1/2; 6 ialah gandaan 3 yang genap. Nombor 2 perdana tetapi genap, 4² = 16, dan 9 ialah kuasa dua sempurna yang ganjil."
   }
  },
  {
   "n": 2,
   "tempat": "Persimpangan Dan-Atau",
   "sk": "3.1.3 / 3.1.4 Pernyataan majmuk dan implikasi",
   "lampiran": "majmuk",
   "kadNama": "Dan, Atau",
   "kadEm": "🔀",
   "kadFakta": "\"p dan q\" benar hanya apabila kedua-dua p dan q benar. \"p atau q\" palsu hanya apabila kedua-dua p dan q palsu.",
   "bosKadNama": "Implikasi",
   "bosKadEm": "➡️",
   "bosKadFakta": "Dalam \"Jika p, maka q\", p ialah antejadian dan q ialah akibat. \"p jika dan hanya jika q\" bermaksud kedua-dua \"jika p, maka q\" dan \"jika q, maka p\".",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih p: 7 perdana dan q: 2³ = 8. Nilai kebenaran \"p dan q\" ialah:",
     "p": [
      "Benar",
      "Palsu",
      "Bukan pernyataan",
      "Tidak dapat ditentukan"
     ],
     "b": 0,
     "u": "p benar (7 perdana) dan q benar (2 × 2 × 2 = 8), jadi \"p dan q\" benar."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih p: 7 genap dan q: 2³ = 8. Nilai kebenaran \"p dan q\" ialah:",
     "p": [
      "Benar",
      "Palsu",
      "Bukan pernyataan",
      "Tidak dapat ditentukan"
     ],
     "b": 1,
     "u": "p palsu kerana 7 ganjil. Satu pernyataan palsu sudah cukup untuk menjadikan \"p dan q\" palsu."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih p: 7 genap dan q: 2³ = 8. Nilai kebenaran \"p atau q\" ialah:",
     "p": [
      "Palsu",
      "Bukan pernyataan",
      "Benar",
      "Tidak dapat ditentukan"
     ],
     "b": 2,
     "u": "q benar, jadi \"p atau q\" benar walaupun p palsu."
    },
    {
     "j": "pilih",
     "t": "Pernyataan majmuk \"p atau q\" palsu apabila:",
     "p": [
      "p benar dan q benar",
      "p benar dan q palsu",
      "p palsu dan q benar",
      "p palsu dan q palsu"
     ],
     "b": 3,
     "u": "Lihat baris terakhir jadual kebenaran dalam Rajah 1: \"p atau q\" palsu hanya pada baris P, P."
    },
    {
     "j": "pilih",
     "t": "Pernyataan majmuk \"p dan q\" benar apabila:",
     "p": [
      "Kedua-dua p dan q benar",
      "Sekurang-kurangnya satu benar",
      "Kedua-dua p dan q adalah palsu",
      "p benar walaupun q palsu"
     ],
     "b": 0,
     "u": "Lihat baris pertama jadual kebenaran: \"p dan q\" benar hanya apabila p dan q kedua-duanya benar."
    },
    {
     "j": "pilih",
     "t": "Nilai kebenaran \"9 ialah nombor ganjil dan 9 ialah nombor perdana\" ialah:",
     "p": [
      "Benar",
      "Palsu",
      "Bukan pernyataan",
      "Tidak dapat ditentukan"
     ],
     "b": 1,
     "u": "9 ganjil (benar) tetapi 9 = 3 × 3 bukan perdana (palsu). Benar dan palsu memberi palsu."
    },
    {
     "j": "pilih",
     "t": "Bagi implikasi \"Jika x = 2, maka x³ = 8\", antejadian dan akibatnya ialah:",
     "p": [
      "Antejadian x³ = 8; akibat x = 2",
      "Antejadian x; akibat 8",
      "Antejadian x = 2; akibat x³ = 8",
      "Antejadian 2; akibat x³"
     ],
     "b": 2,
     "u": "Antejadian ialah bahagian selepas \"jika\", dan akibat ialah bahagian selepas \"maka\"."
    },
    {
     "j": "pilih",
     "t": "Diberi p: \"ABC ialah segi tiga sama sisi\" dan q: \"setiap sudut ABC ialah 60°\". Pernyataan \"p jika dan hanya jika q\" bermaksud:",
     "p": [
      "Jika p, maka q; dan jika bukan p, maka bukan q",
      "Jika q, maka p; dan jika bukan q, maka bukan p",
      "p dan q; dan juga p atau q",
      "Jika p, maka q; dan jika q, maka p"
     ],
     "b": 3,
     "u": "\"p jika dan hanya jika q\" ialah gabungan dua implikasi: \"Jika p, maka q\" dan \"Jika q, maka p\"."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Diberi p: \"4 ialah faktor bagi 12\" dan q: \"4 ialah gandaan 8\". Antara pernyataan berikut, yang manakah benar?",
    "p": [
     "p atau q",
     "p dan q",
     "Bukan p",
     "q"
    ],
    "b": 0,
    "u": "p benar (12 = 4 × 3), q palsu (gandaan 8 ialah 8, 16, ...). Maka \"p atau q\" benar, \"p dan q\" palsu, \"bukan p\" palsu dan q palsu."
   }
  },
  {
   "n": 3,
   "tempat": "Mahkamah Hujah",
   "sk": "3.2.1 / 3.2.2 / 3.2.4 Hujah deduktif dan hujah induktif",
   "lampiran": "hujah",
   "kadNama": "Hujah Deduktif",
   "kadEm": "⚖️",
   "kadFakta": "Hujah deduktif membuat kesimpulan khusus daripada premis umum. Hujah sah yang semua premisnya benar ialah hujah yang munasabah.",
   "bosKadNama": "Sah Tetapi Tidak Munasabah",
   "bosKadEm": "🤔",
   "bosKadFakta": "Hujah boleh sah dari segi bentuk tetapi tidak munasabah jika satu premisnya palsu, contohnya \"Semua nombor perdana ialah nombor ganjil\".",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Hujah 1. Kesimpulan hujah itu ialah:",
     "p": [
      "70 ialah gandaan 10",
      "70 ialah gandaan 5",
      "Semua gandaan 5 ialah gandaan 10",
      "5 ialah gandaan 70"
     ],
     "b": 1,
     "u": "Bentuk I: Semua A adalah B; C adalah A; maka C adalah B. Di sini A = gandaan 10, B = gandaan 5 dan C = 70."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Hujah 2. Hujah ini ialah:",
     "p": [
      "Hujah deduktif Bentuk I",
      "Hujah deduktif Bentuk III",
      "Hujah deduktif Bentuk II",
      "Hujah induktif"
     ],
     "b": 2,
     "u": "Bentuk II: Jika p, maka q; p benar; maka q benar."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Hujah 3. Kesimpulan hujah itu ialah:",
     "p": [
      "PQRST ialah heksagon",
      "PQRST mempunyai 6 sisi",
      "Semua poligon ialah heksagon",
      "PQRST bukan heksagon"
     ],
     "b": 3,
     "u": "Bentuk III: Jika p, maka q; bukan q benar; maka bukan p benar."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Hujah 4. Hujah ini sah tetapi tidak munasabah kerana:",
     "p": [
      "Premis 1 palsu, kerana 2 ialah nombor perdana yang genap",
      "Bentuk hujah itu tidak mengikut Bentuk I",
      "Kesimpulannya tidak mengikut premis",
      "Premis 2 palsu kerana 2 bukan perdana"
     ],
     "b": 0,
     "u": "Bentuk hujah betul (Bentuk I), jadi ia sah. Namun Premis 1 palsu, maka hujah itu tidak munasabah."
    },
    {
     "j": "pilih",
     "t": "Hujah deduktif berbeza daripada hujah induktif kerana hujah deduktif:",
     "p": [
      "Membuat kesimpulan umum daripada kes-kes khusus",
      "Membuat kesimpulan khusus daripada premis umum",
      "Tidak memerlukan premis langsung",
      "Digunakan dalam bidang sains semata-mata"
     ],
     "b": 1,
     "u": "Deduktif: umum ke khusus. Induktif: khusus ke umum."
    },
    {
     "j": "pilih",
     "t": "Premis 1: Jika hari hujan, maka padang sekolah basah. Premis 2: Hari ini hujan. Kesimpulannya ialah:",
     "p": [
      "Hari ini tidak akan hujan",
      "Padang sekolah tidak basah",
      "Padang sekolah basah",
      "Jika padang basah, maka hari hujan"
     ],
     "b": 2,
     "u": "Ini Bentuk II: antejadian benar, maka akibat benar."
    },
    {
     "j": "pilih",
     "t": "Diberi jujukan 3, 8, 13, 18, ... Kesimpulan induktif yang sesuai ialah:",
     "p": [
      "Tn = 5n + 3, n = 1, 2, 3, ...",
      "Tn = 3n + 5, n = 1, 2, 3, ...",
      "Tn = n + 5, n = 1, 2, 3, ...",
      "Tn = 5n − 2, n = 1, 2, 3, ..."
     ],
     "b": 3,
     "u": "Premis: 5(1) − 2 = 3, 5(2) − 2 = 8, 5(3) − 2 = 13, 5(4) − 2 = 18. Rumus lain gagal pada sebutan pertama atau kedua."
    },
    {
     "j": "pilih",
     "t": "Premis 1: Jika x lebih besar daripada 5, maka x lebih besar daripada 2. Premis 2: x tidak lebih besar daripada 2. Kesimpulannya ialah:",
     "p": [
      "x tidak lebih besar daripada 5",
      "x lebih besar daripada 5",
      "x lebih besar daripada 2",
      "x sama dengan 5"
     ],
     "b": 0,
     "u": "Ini Bentuk III: bukan q benar, maka bukan p benar."
    }
   ],
   "bos": {
    "j": "susun",
    "t": "Susun ayat berikut untuk membentuk hujah deduktif Bentuk I yang sah.",
    "p": [
     "Premis 1: Semua rombus mempunyai empat sisi yang sama panjang.",
     "Premis 2: PQRS ialah sebuah rombus.",
     "Kesimpulan: PQRS mempunyai empat sisi yang sama panjang."
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Bentuk I bermula dengan premis umum (semua A adalah B), diikuti kes khusus (C adalah A), dan berakhir dengan kesimpulan (C adalah B)."
   }
  },
  {
   "n": 4,
   "tempat": "Cermin Implikasi",
   "sk": "3.1.5 / 3.1.6 Akas, songsangan, kontrapositif dan contoh penyangkal",
   "lampiran": "imp",
   "kadNama": "Kontrapositif",
   "kadEm": "🪞",
   "kadFakta": "Implikasi dan kontrapositifnya sentiasa mempunyai nilai kebenaran yang sama. Akas dan songsangan juga sentiasa sama antara satu sama lain.",
   "bosKadNama": "Contoh Penyangkal",
   "bosKadEm": "🚫",
   "bosKadFakta": "Satu contoh penyangkal sudah cukup untuk menunjukkan bahawa suatu pernyataan umum adalah palsu.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih I1 dan bentuk Akas. Akas bagi \"Jika x = 3, maka x² = 9\" ialah:",
     "p": [
      "Jika x ≠ 3, maka x² ≠ 9",
      "Jika x² = 9, maka x = 3",
      "Jika x² ≠ 9, maka x ≠ 3",
      "x = 3 jika dan hanya jika x² = 9"
     ],
     "b": 1,
     "u": "Akas menukar kedudukan antejadian dan akibat: \"Jika q, maka p\"."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih I1 dan Akas. Nilai kebenaran akas itu dan contoh penyangkalnya ialah:",
     "p": [
      "Benar; tiada contoh penyangkal",
      "Palsu; contoh penyangkal x = 3",
      "Palsu; contoh penyangkal x = −3",
      "Benar; contoh penyangkal x = −3"
     ],
     "b": 2,
     "u": "(−3)² = 9 tetapi −3 ≠ 3, jadi akas itu palsu dan x = −3 ialah contoh penyangkal."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih I2. Kontrapositif bagi \"Jika x &gt; 6, maka x &gt; 4\" ialah:",
     "p": [
      "Jika x &gt; 4, maka x &gt; 6",
      "Jika x ≤ 6, maka x ≤ 4",
      "Jika x &gt; 6, maka x ≤ 4",
      "Jika x ≤ 4, maka x ≤ 6"
     ],
     "b": 3,
     "u": "Kontrapositif: \"Jika bukan q, maka bukan p\". Bukan (x &gt; 4) ialah x ≤ 4, dan bukan (x &gt; 6) ialah x ≤ 6."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, bandingkan empat bentuk bagi I1 hingga I4. Pasangan manakah mempunyai nilai kebenaran yang sama dalam setiap kes?",
     "p": [
      "Implikasi dan kontrapositif",
      "Implikasi dan akas",
      "Akas dan kontrapositif",
      "Implikasi dan songsangan"
     ],
     "b": 0,
     "u": "Implikasi dan kontrapositifnya setara secara logik. Akas dan songsangan juga setara antara satu sama lain."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih I3 dan Songsangan. Nilai kebenaran \"Jika x bukan gandaan 4, maka x bukan nombor genap\" ialah:",
     "p": [
      "Benar, kerana setiap nombor genap ialah gandaan 4",
      "Palsu, kerana 6 bukan gandaan 4 tetapi genap",
      "Benar, kerana 4 ialah nombor genap",
      "Palsu, kerana 8 ialah gandaan 4"
     ],
     "b": 1,
     "u": "Satu contoh penyangkal cukup: 6 bukan gandaan 4 tetapi 6 ialah nombor genap. (Rajah memaparkan contoh penyangkal pertama dalam domain, iaitu −10.)"
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih I4. Pernyataan \"Jika x² = 16, maka x = 4\" palsu. Contoh penyangkalnya ialah:",
     "p": [
      "x = 4",
      "x = 16",
      "x = −4",
      "x = 2"
     ],
     "b": 2,
     "u": "(−4)² = 16 tetapi −4 ≠ 4."
    },
    {
     "j": "pilih",
     "t": "Contoh penyangkal bagi pernyataan \"Semua nombor perdana ialah nombor ganjil\" ialah:",
     "p": [
      "3",
      "9",
      "1",
      "2"
     ],
     "b": 3,
     "u": "2 ialah nombor perdana yang genap. 3 perdana dan ganjil, manakala 9 dan 1 bukan nombor perdana."
    },
    {
     "j": "pilih",
     "t": "Jika suatu implikasi benar, akasnya:",
     "p": [
      "Mungkin benar atau mungkin palsu",
      "Pasti benar juga",
      "Pasti palsu",
      "Sama dengan kontrapositifnya"
     ],
     "b": 0,
     "u": "Dalam Rajah 1, akas I2 palsu tetapi akas I4 benar. Nilai akas perlu disemak sendiri."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Bagi implikasi \"Jika x ialah gandaan 6, maka x ialah gandaan 3\", pilih SEMUA pernyataan yang BENAR.",
    "p": [
     "Implikasi itu benar",
     "Kontrapositifnya ialah \"Jika x bukan gandaan 3, maka x bukan gandaan 6\"",
     "Akasnya palsu dengan contoh penyangkal x = 9",
     "Songsangannya benar kerana setiap gandaan 3 ialah gandaan 6",
     "Akasnya benar kerana 12 ialah gandaan 3 dan gandaan 6",
     "Kontrapositifnya palsu kerana 9 bukan gandaan 6"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Setiap gandaan 6 ialah gandaan 3, jadi implikasi dan kontrapositif benar. 9 ialah gandaan 3 tetapi bukan gandaan 6, jadi akas (dan songsangan) palsu."
   }
  },
  {
   "n": 5,
   "tempat": "Makmal Pola",
   "sk": "3.2.4 / 3.2.5 Hujah induktif yang kuat",
   "lampiran": "induktif",
   "kadNama": "Hujah Induktif",
   "kadEm": "🕵️",
   "kadFakta": "Hujah induktif membuat kesimpulan umum daripada kes khusus. Hujah induktif dikatakan kuat jika kesimpulannya berkemungkinan benar apabila semua premis benar.",
   "bosKadNama": "Nombor Ganjil",
   "bosKadEm": "🟦",
   "bosKadFakta": "1 + 3 + 5 + ... (n sebutan) = n². Corak ini boleh dilihat sebagai segi empat sama yang bertambah satu lapisan setiap kali.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Pola A dan tambah premis. Kira dahulu, kemudian semak. Kesimpulan umum bagi 3, 7, 11, 15, ... ialah:",
     "p": [
      "Tn = 4n + 3",
      "Tn = 4n − 1",
      "Tn = 3n",
      "Tn = n + 2"
     ],
     "b": 1,
     "u": "Beza sepunya ialah 4, jadi Tn = 4n + c. Bagi n = 1: 4 + c = 3, maka c = −1."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, gunakan kesimpulan bagi Pola A untuk mencari T10.",
     "tol": 0.001000000001,
     "b": 39,
     "u": "T10 = 4(10) − 1 = 39."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Pola B: 2, 5, 10, 17, ... Kesimpulan umumnya ialah:",
     "p": [
      "Tn = 2n",
      "Tn = 3n − 1",
      "Tn = n² + 1",
      "Tn = n² + 2"
     ],
     "b": 2,
     "u": "1² + 1 = 2, 2² + 1 = 5, 3² + 1 = 10, 4² + 1 = 17. Rumus 2n gagal pada n = 2."
    },
    {
     "j": "nombor",
     "t": "Gunakan kesimpulan bagi Pola B dalam Rajah 1 untuk mencari T8.",
     "tol": 0.001000000001,
     "b": 65,
     "u": "T8 = 8² + 1 = 65."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih Pola C: 5, 8, 11, 14, ... Gunakan kesimpulan umumnya untuk mencari T20.",
     "tol": 0.001000000001,
     "b": 62,
     "u": "Tn = 3n + 2, jadi T20 = 3(20) + 2 = 62."
    },
    {
     "j": "pilih",
     "t": "Premis: Bas sekolah tiba pada pukul 6.45 pagi dari Isnin hingga Jumaat minggu lalu. Kesimpulan: Bas sekolah tiba pada pukul 6.45 pagi setiap hari persekolahan. Hujah ini:",
     "p": [
      "Lemah, kerana premis-premisnya tidak benar",
      "Sah, kerana ia ialah hujah deduktif",
      "Lemah, kerana hujah itu tiada kesimpulan",
      "Kuat, kerana kesimpulan berkemungkinan benar jika premis benar"
     ],
     "b": 3,
     "u": "Lima pemerhatian yang konsisten menjadikan kesimpulan berkemungkinan benar. Hujah induktif dinilai kuat atau lemah, bukan sah atau tidak sah."
    },
    {
     "j": "pilih",
     "t": "Premis 1: Kerusi di ruang tamu berwarna merah. Premis 2: Kerusi di ruang makan berwarna merah. Kesimpulan: Semua kerusi di rumah ini berwarna merah. Hujah ini:",
     "p": [
      "Lemah, kerana kesimpulan mungkin palsu walaupun premis benar",
      "Kuat, kerana kedua-dua premis adalah benar",
      "Sah, kerana kesimpulan mengikut premis",
      "Kuat dan meyakinkan kerana ada dua premis"
     ],
     "b": 0,
     "u": "Contoh ini daripada DSKP: masih ada kerusi di bilik lain yang belum dilihat, jadi kesimpulan mungkin palsu. Hujah itu lemah."
    },
    {
     "j": "nombor",
     "t": "Bilangan petak kecil dalam corak ke-1, ke-2, ke-3 dan ke-4 ialah 1, 4, 9 dan 16. Dengan hujah induktif, berapakah bilangan petak dalam corak ke-12?",
     "tol": 0.001000000001,
     "b": 144,
     "u": "Kesimpulan: Tn = n². Maka T12 = 12² = 144."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Seorang murid memerhati bahawa 1 + 3 = 4, 1 + 3 + 5 = 9 dan 1 + 3 + 5 + 7 = 16. Kesimpulan induktif yang kuat ialah:",
    "p": [
     "Hasil tambah nombor ganjil ialah nombor genap",
     "Hasil tambah n nombor ganjil pertama ialah n²",
     "Hasil tambah n nombor ganjil pertama ialah 2n",
     "Hasil tambah n nombor ganjil pertama ialah n² + 1"
    ],
    "b": 1,
    "u": "4 = 2², 9 = 3² dan 16 = 4². Pilihan kedua palsu kerana 1 + 3 + 5 = 9 ialah ganjil."
   }
  },
  {
   "n": 6,
   "tempat": "Bilik Detektif",
   "sk": "3.1.6 / 3.2.6 Menyelesaikan masalah penaakulan logik",
   "lampiran": "sangkal",
   "kadNama": "Dakwaan Euler",
   "kadEm": "🔍",
   "kadFakta": "n² + n + 41 memberi nombor perdana bagi n = 0 hingga 39, tetapi gagal pada n = 40. Banyak contoh yang menyokong tidak membuktikan suatu dakwaan.",
   "bosKadNama": "Penaakul",
   "bosKadEm": "💡",
   "bosKadFakta": "Penaakulan yang baik menggabungkan hujah induktif untuk meneka pola dan hujah deduktif atau contoh penyangkal untuk menguji tekaan itu.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih Dakwaan 1 dan gerakkan n dari 0. Berapakah nilai n terkecil yang menjadi contoh penyangkal?",
     "tol": 0.001000000001,
     "b": 40,
     "u": "Bagi n = 40, n² + n + 41 = 1681 = 41 × 41, yang bukan nombor perdana."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, apabila n = 40, nilai n² + n + 41 ialah 1681. Apakah kesimpulannya?",
     "p": [
      "1681 perdana kerana ia nombor ganjil",
      "1681 perdana kerana tiada faktor 2",
      "1681 bukan perdana kerana 1681 = 41 × 41",
      "Dakwaan itu benar bagi n = 40"
     ],
     "b": 2,
     "u": "Nombor ganjil tidak semestinya perdana. 1681 = 41² mempunyai faktor 41."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih Dakwaan 2: n² − n + 11 ialah nombor perdana. Berapakah contoh penyangkal yang terkecil?",
     "tol": 0.001000000001,
     "b": 11,
     "u": "Bagi n = 11: 121 − 11 + 11 = 121 = 11 × 11, bukan perdana."
    },
    {
     "j": "pilih",
     "t": "Dakwaan 1 dalam Rajah 1 benar bagi n = 0 hingga 39. Apakah kesimpulan yang wajar?",
     "p": [
      "Dakwaan itu benar kerana 40 contoh menyokongnya",
      "Dakwaan itu palsu bagi setiap nilai n",
      "Contoh penyangkal tidak sah kerana n besar",
      "Satu penyangkal cukup untuk menafikan dakwaan itu"
     ],
     "b": 3,
     "u": "Hujah induktif boleh kuat tetapi kesimpulannya masih boleh palsu. Satu contoh penyangkal (n = 40) cukup untuk menafikan dakwaan umum."
    },
    {
     "j": "pilih",
     "t": "Premis 1: Jika suatu nombor boleh dibahagi tepat dengan 9, maka ia boleh dibahagi tepat dengan 3. Premis 2: 81 boleh dibahagi tepat dengan 9. Kesimpulan: 81 boleh dibahagi tepat dengan 3. Hujah ini:",
     "p": [
      "Sah dan munasabah",
      "Sah tetapi tidak munasabah",
      "Tidak sah tetapi munasabah",
      "Tidak sah dan tidak munasabah"
     ],
     "b": 0,
     "u": "Bentuknya Bentuk II (sah), dan kedua-dua premis benar, jadi hujah itu munasabah."
    },
    {
     "j": "pilih",
     "t": "Premis 1: Jika x &gt; 3, maka x &gt; 1. Premis 2: x &gt; 1. Kesimpulan: x &gt; 3. Nilaikan hujah ini.",
     "p": [
      "Sah, kerana ia mengikut Bentuk II dengan premis benar",
      "Tidak sah, kerana x = 2 memenuhi premis tetapi bukan kesimpulan",
      "Sah, kerana ia mengikut Bentuk III dengan premis benar",
      "Tidak sah, kerana premis 1 palsu bagi sebarang nilai x"
     ],
     "b": 1,
     "u": "Premis 2 mengesahkan akibat, bukan antejadian, jadi ia bukan Bentuk II. x = 2 menjadikan kedua-dua premis benar tetapi kesimpulan palsu."
    },
    {
     "j": "pilih",
     "t": "Seorang guru berkata, \"Jika murid hadir ke kelas tambahan, maka markahnya meningkat.\" Andaikan kenyataan itu benar. Markah Ali tidak meningkat. Kesimpulan yang sah ialah:",
     "p": [
      "Ali hadir ke kelas tambahan",
      "Markah Ali akan meningkat kelak",
      "Ali tidak hadir ke kelas tambahan",
      "Kelas tambahan itu tidak berkesan"
     ],
     "b": 2,
     "u": "Ini Bentuk III: Jika p, maka q; bukan q; maka bukan p."
    },
    {
     "j": "pilih",
     "t": "Contoh penyangkal bagi \"Jika a² &gt; b², maka a &gt; b\" ialah:",
     "p": [
      "a = 3, b = 2",
      "a = 2, b = 1",
      "a = 5, b = −1",
      "a = −3, b = 2"
     ],
     "b": 3,
     "u": "(−3)² = 9 &gt; 4 = 2², tetapi −3 &lt; 2. Antejadian benar dan akibat palsu."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Jadilah penaakul: reka satu dakwaan matematik umum yang kelihatan benar bagi beberapa kes pertama tetapi sebenarnya palsu, kemudian bina hujah tentangnya.",
    "arahan": "Tulis dakwaan itu dalam bentuk \"Untuk semua n, ...\" atau \"Jika p, maka q\". Tunjukkan sekurang-kurangnya tiga kes yang menyokongnya (hujah induktif), kemudian cari contoh penyangkal. Tulis juga akas, songsangan dan kontrapositif dakwaan itu jika ia implikasi, dan nyatakan nilai kebenaran setiap satu.",
    "u": "Jawapan TP6 yang kukuh mempunyai dakwaan asli yang jelas, kes penyokong yang dikira dengan betul, contoh penyangkal yang sah, dan penjelasan bahawa banyak contoh tidak membuktikan dakwaan umum tetapi satu penyangkal cukup untuk menafikannya."
   }
  }
 ]
};
