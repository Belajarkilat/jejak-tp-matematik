/* Bank soalan — Matematik Ting. 4 · Bab 9 Kebarangkalian Peristiwa Bergabung.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m4b9.js
   kemudian jalankan: node bina.js m4b9

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 4, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m4b9"] =
{
 "id": "m4b9",
 "tingkatan": 4,
 "kod": "9.0 Kebarangkalian Peristiwa Bergabung",
 "tajuk": "Pesta Peluang",
 "subtajuk": "Matematik Ting. 4 · Bab 9 Kebarangkalian Peristiwa Bergabung",
 "spi": [
  "Mempamerkan pengetahuan asas tentang peristiwa bergabung.",
  "Mempamerkan kefahaman tentang kebarangkalian peristiwa bergabung.",
  "Mengaplikasikan kefahaman tentang kebarangkalian peristiwa bergabung untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran tentang kebarangkalian peristiwa bergabung dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran tentang kebarangkalian peristiwa bergabung dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran tentang kebarangkalian peristiwa bergabung dalam konteks penyelesaian masalah bukan rutin secara kreatif."
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
  "1": "{n} dapat memerihalkan peristiwa bergabung dan menyenaraikan kesudahannya sebagai pasangan tertib. Langkah seterusnya ialah membezakan peristiwa bersandar dan tak bersandar.",
  "2": "{n} memahami perbezaan peristiwa bersandar dan tak bersandar serta menentusahkan rumus P(A ∩ B) = P(A) × P(B). Perlu lebih latihan dengan gambar rajah pokok.",
  "3": "{n} boleh menentukan kebarangkalian peristiwa bergabung dengan gambar rajah pokok bagi cabutan dengan dan tanpa pemulangan.",
  "4": "{n} mampu membezakan peristiwa saling eksklusif dan tidak saling eksklusif, serta menggunakan P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Seterusnya, latih gabungan lebih daripada dua peristiwa.",
  "5": "{n} dapat menyelesaikan masalah rutin yang kompleks melibatkan tiga peristiwa tak bersandar, termasuk menggunakan peristiwa pelengkap. Sudah bersedia untuk masalah bukan rutin.",
  "6": "{n} berjaya mereka permainan adil dengan ruang sampel yang lengkap dan membuktikan keadilannya dengan kebarangkalian. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kebarangkalian Peristiwa Bergabung. Cadangan: ulang hentian pertama dengan Rajah 1 dan senaraikan semua kesudahan melambung syiling dan membaling dadu bersama rakan sebaya."
 },
 "lampiran": {
  "r1": "<figure class=\"figure jmi\" data-w=\"t4bergabung\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4bergabung&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Sekeping syiling dilambung dan sebiji dadu dibaling. Pilih peristiwa.&quot;,&quot;alt&quot;:&quot;Rajah interaktif jadual ruang sampel syiling dan dadu dengan dua belas kesudahan; cip memilih A, B, A ∩ B, A ∪ B atau A′ dan kesudahan diserlahkan&quot;,&quot;mod&quot;:&quot;jadual&quot;,&quot;baris&quot;:[&quot;K&quot;,&quot;E&quot;],&quot;lajur&quot;:[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;,&quot;4&quot;,&quot;5&quot;,&quot;6&quot;],&quot;A&quot;:&quot;rK&quot;,&quot;B&quot;:&quot;cGenap&quot;,&quot;lblA&quot;:&quot;mendapat kepala (K)&quot;,&quot;lblB&quot;:&quot;mendapat nombor genap&quot;,&quot;namaBaris&quot;:&quot;Syiling&quot;,&quot;namaLajur&quot;:&quot;Dadu&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 222\" role=\"img\" aria-label=\"Rajah jadual ruang sampel Syiling dan Dadu dengan kesudahan peristiwa A diserlahkan\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Ruang sampel: 12 kesudahan</text><text x=\"232\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">Dadu →</text><text x=\"8\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Syiling ↓</text><text x=\"67\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">1</text><text x=\"97\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">2</text><text x=\"127\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">3</text><text x=\"157\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">4</text><text x=\"187\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">5</text><text x=\"217\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">6</text><text x=\"46\" y=\"81\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">K</text><g class=\"jmi-hasil\"><rect x=\"53\" y=\"65\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"83\" y=\"65\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"113\" y=\"65\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"143\" y=\"65\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"173\" y=\"65\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"203\" y=\"65\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><text x=\"46\" y=\"107\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">E</text><rect x=\"53\" y=\"91\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"83\" y=\"91\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"113\" y=\"91\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"143\" y=\"91\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"173\" y=\"91\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"203\" y=\"91\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><text x=\"8\" y=\"138\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" font-weight=\"700\">A: mendapat kepala (K)</text><text x=\"8\" y=\"154\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" font-weight=\"700\">B: mendapat nombor genap</text><text class=\"jmi-hasil\" x=\"8\" y=\"176\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">P(A) = 6/12 = 1/2</text><text class=\"jmi-hasil\" x=\"8\" y=\"196\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">P(A) × P(B) = 1/2 × 1/2 = 1/4</text><text class=\"jmi-hasil\" x=\"8\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">P(A ∩ B) = 1/4: tak bersandar</text></svg></div><figcaption>Rajah 1 · Sekeping syiling dilambung dan sebiji dadu dibaling. Pilih peristiwa.</figcaption></figure>",
  "r2": "<figure class=\"figure jmi\" data-w=\"t4bergabung\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4bergabung&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Dua biji dadu dibaling. A: dadu pertama genap, B: dadu kedua lebih daripada 4.&quot;,&quot;alt&quot;:&quot;Rajah interaktif jadual ruang sampel dua dadu dengan tiga puluh enam kesudahan; cip memilih peristiwa dan rajah membandingkan P(A ∩ B) dengan P(A) × P(B)&quot;,&quot;mod&quot;:&quot;jadual&quot;,&quot;baris&quot;:[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;,&quot;4&quot;,&quot;5&quot;,&quot;6&quot;],&quot;lajur&quot;:[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;,&quot;4&quot;,&quot;5&quot;,&quot;6&quot;],&quot;A&quot;:&quot;rGenap&quot;,&quot;B&quot;:&quot;cLebih4&quot;,&quot;lblA&quot;:&quot;dadu pertama genap&quot;,&quot;lblB&quot;:&quot;dadu kedua lebih daripada 4&quot;,&quot;namaBaris&quot;:&quot;Dadu 1&quot;,&quot;namaLajur&quot;:&quot;Dadu 2&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 326\" role=\"img\" aria-label=\"Rajah jadual ruang sampel Dadu 1 dan Dadu 2 dengan kesudahan peristiwa A diserlahkan\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Ruang sampel: 36 kesudahan</text><text x=\"232\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">Dadu 2 →</text><text x=\"8\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Dadu 1 ↓</text><text x=\"67\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">1</text><text x=\"97\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">2</text><text x=\"127\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">3</text><text x=\"157\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">4</text><text x=\"187\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">5</text><text x=\"217\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">6</text><text x=\"46\" y=\"81\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">1</text><rect x=\"53\" y=\"65\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"83\" y=\"65\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"113\" y=\"65\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"143\" y=\"65\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"173\" y=\"65\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"203\" y=\"65\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><text x=\"46\" y=\"107\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">2</text><g class=\"jmi-hasil\"><rect x=\"53\" y=\"91\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"83\" y=\"91\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"113\" y=\"91\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"143\" y=\"91\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"173\" y=\"91\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"203\" y=\"91\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><text x=\"46\" y=\"133\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">3</text><rect x=\"53\" y=\"117\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"83\" y=\"117\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"113\" y=\"117\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"143\" y=\"117\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"173\" y=\"117\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"203\" y=\"117\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><text x=\"46\" y=\"159\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">4</text><g class=\"jmi-hasil\"><rect x=\"53\" y=\"143\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"83\" y=\"143\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"113\" y=\"143\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"143\" y=\"143\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"173\" y=\"143\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"203\" y=\"143\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><text x=\"46\" y=\"185\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">5</text><rect x=\"53\" y=\"169\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"83\" y=\"169\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"113\" y=\"169\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"143\" y=\"169\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"173\" y=\"169\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><rect x=\"203\" y=\"169\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><text x=\"46\" y=\"211\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">6</text><g class=\"jmi-hasil\"><rect x=\"53\" y=\"195\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"83\" y=\"195\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"113\" y=\"195\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"143\" y=\"195\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"173\" y=\"195\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><g class=\"jmi-hasil\"><rect x=\"203\" y=\"195\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><text x=\"8\" y=\"242\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" font-weight=\"700\">A: dadu pertama genap</text><text x=\"8\" y=\"258\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" font-weight=\"700\">B: dadu kedua lebih daripada 4</text><text class=\"jmi-hasil\" x=\"8\" y=\"280\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">P(A) = 18/36 = 1/2</text><text class=\"jmi-hasil\" x=\"8\" y=\"300\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">P(A) × P(B) = 1/2 × 1/3 = 1/6</text><text class=\"jmi-hasil\" x=\"8\" y=\"316\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">P(A ∩ B) = 1/6: tak bersandar</text></svg></div><figcaption>Rajah 1 · Dua biji dadu dibaling. A: dadu pertama genap, B: dadu kedua lebih daripada 4.</figcaption></figure>",
  "r3": "<figure class=\"figure jmi\" data-w=\"t4bergabung\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4bergabung&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Beg berisi 5 guli merah (M) dan 3 guli biru (B). Dua biji dicabut satu demi satu.&quot;,&quot;alt&quot;:&quot;Rajah interaktif gambar rajah pokok dua cabutan guli dengan atau tanpa pemulangan; cip memilih jenis cabutan dan peristiwa, laluan yang berkaitan diserlahkan&quot;,&quot;mod&quot;:&quot;pokok&quot;,&quot;beg&quot;:[{&quot;w&quot;:&quot;merah&quot;,&quot;n&quot;:5,&quot;h&quot;:&quot;M&quot;},{&quot;w&quot;:&quot;biru&quot;,&quot;n&quot;:3,&quot;h&quot;:&quot;B&quot;}],&quot;peristiwa&quot;:[{&quot;nama&quot;:&quot;MM&quot;,&quot;laluan&quot;:[&quot;MM&quot;]},{&quot;nama&quot;:&quot;Sama warna&quot;,&quot;laluan&quot;:[&quot;MM&quot;,&quot;BB&quot;]},{&quot;nama&quot;:&quot;Warna berbeza&quot;,&quot;laluan&quot;:[&quot;MB&quot;,&quot;BM&quot;]},{&quot;nama&quot;:&quot;≥ 1 merah&quot;,&quot;laluan&quot;:[&quot;MM&quot;,&quot;MB&quot;,&quot;BM&quot;]}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 272\" role=\"img\" aria-label=\"Rajah pokok dua cabutan dengan pemulangan bagi beg 5 merah dan 3 biru; peristiwa MM\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Dengan pemulangan</text><text x=\"8\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Beg: 5 merah, 3 biru</text><line x1=\"24\" y1=\"120\" x2=\"96\" y2=\"70\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"54\" y=\"91\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">5/8</text><rect x=\"87\" y=\"60\" width=\"18\" height=\"20\" rx=\"4\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1.2\"></rect><text x=\"96\" y=\"75\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">M</text><g class=\"jmi-hasil\"><line x1=\"105\" y1=\"70\" x2=\"166\" y2=\"46\" stroke=\"var(--amber)\" stroke-width=\"4\"></line></g><line x1=\"105\" y1=\"70\" x2=\"166\" y2=\"46\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"134\" y=\"51\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">5/8</text><text x=\"172\" y=\"50\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">MM</text><text class=\"jmi-hasil\" x=\"196\" y=\"50\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" font-weight=\"700\">25/64</text><line x1=\"105\" y1=\"70\" x2=\"166\" y2=\"94\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"134\" y=\"98\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">3/8</text><text x=\"172\" y=\"98\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">MB</text><text x=\"196\" y=\"98\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">15/64</text><line x1=\"24\" y1=\"120\" x2=\"96\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"54\" y=\"159\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">3/8</text><rect x=\"87\" y=\"160\" width=\"18\" height=\"20\" rx=\"4\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.2\"></rect><text x=\"96\" y=\"175\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">B</text><line x1=\"105\" y1=\"170\" x2=\"166\" y2=\"146\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"134\" y=\"151\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">5/8</text><text x=\"172\" y=\"150\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">BM</text><text x=\"196\" y=\"150\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">15/64</text><line x1=\"105\" y1=\"170\" x2=\"166\" y2=\"194\" stroke=\"var(--ink3)\" stroke-width=\"1.5\"></line><text x=\"134\" y=\"198\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">3/8</text><text x=\"172\" y=\"198\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">BB</text><text x=\"196\" y=\"198\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">9/64</text><text x=\"8\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Peristiwa: MM</text><text class=\"jmi-hasil\" x=\"8\" y=\"242\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">P = 25/64</text><text class=\"jmi-hasil\" x=\"8\" y=\"262\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">= 25/64</text></svg></div><figcaption>Rajah 1 · Beg berisi 5 guli merah (M) dan 3 guli biru (B). Dua biji dicabut satu demi satu.</figcaption></figure>",
  "r4": "<figure class=\"figure jmi\" data-w=\"t4bergabung\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4bergabung&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Sekeping kad dipilih secara rawak daripada kad bernombor 1 hingga 20.&quot;,&quot;alt&quot;:&quot;Rajah interaktif gambar rajah Venn bagi empat pasangan peristiwa pada kad 1 hingga 20; cip memilih pasangan dan rajah menunjukkan sama ada peristiwa saling eksklusif&quot;,&quot;mod&quot;:&quot;venn&quot;,&quot;N&quot;:20,&quot;pasangan&quot;:[{&quot;A&quot;:&quot;gandaan3&quot;,&quot;B&quot;:&quot;gandaan4&quot;,&quot;lblA&quot;:&quot;gandaan 3&quot;,&quot;lblB&quot;:&quot;gandaan 4&quot;},{&quot;A&quot;:&quot;perdana&quot;,&quot;B&quot;:&quot;kuasaDua&quot;,&quot;lblA&quot;:&quot;nombor perdana&quot;,&quot;lblB&quot;:&quot;nombor kuasa dua sempurna&quot;},{&quot;A&quot;:&quot;faktor24&quot;,&quot;B&quot;:&quot;ganjil&quot;,&quot;lblA&quot;:&quot;faktor bagi 24&quot;,&quot;lblB&quot;:&quot;nombor ganjil&quot;},{&quot;A&quot;:&quot;genap&quot;,&quot;B&quot;:&quot;gandaan4&quot;,&quot;lblA&quot;:&quot;nombor genap&quot;,&quot;lblB&quot;:&quot;gandaan 4&quot;}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 272\" role=\"img\" aria-label=\"Rajah gambar rajah Venn bagi kad 1 hingga 20 dengan peristiwa A gandaan 3 dan B gandaan 4\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Kad 1 hingga 20, satu kad dipilih</text><rect x=\"6\" y=\"28\" width=\"248\" height=\"136\" rx=\"6\" fill=\"none\" stroke=\"var(--ink2)\" stroke-width=\"1.5\"></rect><text x=\"12\" y=\"44\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" font-weight=\"700\">ξ</text><circle cx=\"104\" cy=\"98\" r=\"50\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2\"></circle><circle cx=\"156\" cy=\"98\" r=\"50\" fill=\"none\" stroke=\"var(--teal)\" stroke-width=\"2\"></circle><text x=\"60\" y=\"54\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--vena)\" font-weight=\"700\">A</text><text x=\"192\" y=\"54\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" font-weight=\"700\">B</text><text x=\"82\" y=\"102\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">5</text><text x=\"130\" y=\"102\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">1</text><text x=\"178\" y=\"102\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"14\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">4</text><text x=\"20\" y=\"156\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink2)\" font-weight=\"700\">10</text><text x=\"8\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" font-weight=\"700\">A: gandaan 3</text><text x=\"8\" y=\"202\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" font-weight=\"700\">B: gandaan 4</text><text class=\"jmi-hasil\" x=\"8\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">A ∩ B ≠ ∅: tidak saling eksklusif</text><text class=\"jmi-hasil\" x=\"8\" y=\"242\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">P(A ∪ B) = 6/20 + 5/20 − 1/20</text><text class=\"jmi-hasil\" x=\"8\" y=\"262\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">= 10/20 = 1/2</text></svg></div><figcaption>Rajah 1 · Sekeping kad dipilih secara rawak daripada kad bernombor 1 hingga 20.</figcaption></figure>",
  "r5": "<figure class=\"figure jmi cabar\" data-w=\"t4bergabung\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4bergabung&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Ali menduduki tiga ujian. Kira dahulu, kemudian semak dengan rajah pokok.&quot;,&quot;alt&quot;:&quot;Rajah interaktif gambar rajah pokok tiga peristiwa tak bersandar, iaitu lulus Matematik, Sains dan Sejarah, dengan lapan kesudahan dalam mod cabar&quot;,&quot;mod&quot;:&quot;pokok3&quot;,&quot;cabar&quot;:true,&quot;peristiwa&quot;:[{&quot;nama&quot;:&quot;lulus Matematik&quot;,&quot;h&quot;:&quot;M&quot;,&quot;hBukan&quot;:&quot;m&quot;,&quot;p&quot;:0.8},{&quot;nama&quot;:&quot;lulus Sains&quot;,&quot;h&quot;:&quot;S&quot;,&quot;hBukan&quot;:&quot;s&quot;,&quot;p&quot;:0.7},{&quot;nama&quot;:&quot;lulus Sejarah&quot;,&quot;h&quot;:&quot;J&quot;,&quot;hBukan&quot;:&quot;j&quot;,&quot;p&quot;:0.9}],&quot;pilihan&quot;:[{&quot;nama&quot;:&quot;Lulus semua&quot;,&quot;uji&quot;:&quot;semua&quot;},{&quot;nama&quot;:&quot;Gagal semua&quot;,&quot;uji&quot;:&quot;tiada&quot;},{&quot;nama&quot;:&quot;Tepat dua lulus&quot;,&quot;uji&quot;:&quot;tepat2&quot;},{&quot;nama&quot;:&quot;≥ 2 lulus&quot;,&quot;uji&quot;:&quot;sekurang2&quot;},{&quot;nama&quot;:&quot;MSj&quot;,&quot;uji&quot;:&quot;MSj&quot;}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 291\" role=\"img\" aria-label=\"Rajah pokok tiga peristiwa tak bersandar dengan lapan kesudahan; peristiwa Lulus semua diserlahkan\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Tiga peristiwa tak bersandar</text><line x1=\"20\" y1=\"125\" x2=\"68\" y2=\"81\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"40\" y=\"99\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">0.8</text><line x1=\"20\" y1=\"125\" x2=\"68\" y2=\"169\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"40\" y=\"161\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">0.2</text><line x1=\"76\" y1=\"81\" x2=\"124\" y2=\"59\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"76\" y1=\"81\" x2=\"124\" y2=\"103\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"76\" y1=\"169\" x2=\"124\" y2=\"147\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"76\" y1=\"169\" x2=\"124\" y2=\"191\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"132\" y1=\"59\" x2=\"180\" y2=\"48\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"132\" y1=\"59\" x2=\"180\" y2=\"70\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"132\" y1=\"103\" x2=\"180\" y2=\"92\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"132\" y1=\"103\" x2=\"180\" y2=\"114\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"132\" y1=\"147\" x2=\"180\" y2=\"136\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"132\" y1=\"147\" x2=\"180\" y2=\"158\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"132\" y1=\"191\" x2=\"180\" y2=\"180\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"132\" y1=\"191\" x2=\"180\" y2=\"202\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><g class=\"jmi-hasil\"><rect x=\"182\" y=\"39\" width=\"74\" height=\"18\" rx=\"4\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.2\"></rect></g><text x=\"186\" y=\"52\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">MSJ</text><text x=\"254\" y=\"52\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" text-anchor=\"end\" font-weight=\"700\">0.504</text><text x=\"186\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">MSj</text><text x=\"254\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0.056</text><text x=\"186\" y=\"96\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">MsJ</text><text x=\"254\" y=\"96\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0.216</text><text x=\"186\" y=\"118\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">Msj</text><text x=\"254\" y=\"118\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0.024</text><text x=\"186\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">mSJ</text><text x=\"254\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0.126</text><text x=\"186\" y=\"162\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">mSj</text><text x=\"254\" y=\"162\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0.014</text><text x=\"186\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">msJ</text><text x=\"254\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0.054</text><text x=\"186\" y=\"206\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">msj</text><text x=\"254\" y=\"206\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0.006</text><text x=\"8\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">M = lulus Matematik, P = 0.8</text><text x=\"8\" y=\"243\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">S = lulus Sains, P = 0.7</text><text x=\"8\" y=\"258\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">J = lulus Sejarah, P = 0.9</text><text class=\"jmi-hasil\" x=\"8\" y=\"281\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">P(Lulus semua) = 0.504</text></svg></div><figcaption>Rajah 1 · Ali menduduki tiga ujian. Kira dahulu, kemudian semak dengan rajah pokok.</figcaption></figure>",
  "r6": "<figure class=\"figure jmi\" data-w=\"t4bergabung\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4bergabung&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Dua pemutar bernombor 1 hingga 4. Aina mendapat mata jika A berlaku, Ben jika B berlaku.&quot;,&quot;alt&quot;:&quot;Rajah interaktif jadual ruang sampel dua pemutar dengan enam belas kesudahan; A ialah jumlah genap dan B ialah hasil darab lebih daripada 6&quot;,&quot;mod&quot;:&quot;jadual&quot;,&quot;baris&quot;:[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;,&quot;4&quot;],&quot;lajur&quot;:[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;,&quot;4&quot;],&quot;A&quot;:&quot;jumlahGenap&quot;,&quot;B&quot;:&quot;darabLebih6&quot;,&quot;lblA&quot;:&quot;jumlah dua nombor genap&quot;,&quot;lblB&quot;:&quot;hasil darab lebih daripada 6&quot;,&quot;namaBaris&quot;:&quot;Pemutar 1&quot;,&quot;namaLajur&quot;:&quot;Pemutar 2&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 274\" role=\"img\" aria-label=\"Rajah jadual ruang sampel Pemutar 1 dan Pemutar 2 dengan kesudahan peristiwa A diserlahkan\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Ruang sampel: 16 kesudahan</text><text x=\"172\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">Pemutar 2 →</text><text x=\"8\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Pemutar 1 ↓</text><text x=\"67\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">1</text><text x=\"97\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">2</text><text x=\"127\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">3</text><text x=\"157\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">4</text><text x=\"46\" y=\"81\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">1</text><g class=\"jmi-hasil\"><rect x=\"53\" y=\"65\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><rect x=\"83\" y=\"65\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><g class=\"jmi-hasil\"><rect x=\"113\" y=\"65\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><rect x=\"143\" y=\"65\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><text x=\"46\" y=\"107\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">2</text><rect x=\"53\" y=\"91\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><g class=\"jmi-hasil\"><rect x=\"83\" y=\"91\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><rect x=\"113\" y=\"91\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><g class=\"jmi-hasil\"><rect x=\"143\" y=\"91\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><text x=\"46\" y=\"133\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">3</text><g class=\"jmi-hasil\"><rect x=\"53\" y=\"117\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><rect x=\"83\" y=\"117\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><g class=\"jmi-hasil\"><rect x=\"113\" y=\"117\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><rect x=\"143\" y=\"117\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><text x=\"46\" y=\"159\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">4</text><rect x=\"53\" y=\"143\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><g class=\"jmi-hasil\"><rect x=\"83\" y=\"143\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><rect x=\"113\" y=\"143\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"0.8\"></rect><g class=\"jmi-hasil\"><rect x=\"143\" y=\"143\" width=\"28\" height=\"24\" rx=\"3\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.5\"></rect></g><text x=\"8\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" font-weight=\"700\">A: jumlah dua nombor genap</text><text x=\"8\" y=\"206\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" font-weight=\"700\">B: hasil darab lebih daripada 6</text><text class=\"jmi-hasil\" x=\"8\" y=\"228\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">P(A) = 8/16 = 1/2</text><text class=\"jmi-hasil\" x=\"8\" y=\"248\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">P(A) × P(B) = 1/2 × 3/8 = 3/16</text><text class=\"jmi-hasil\" x=\"8\" y=\"264\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">P(A ∩ B) = 1/4: bersandar</text></svg></div><figcaption>Rajah 1 · Dua pemutar bernombor 1 hingga 4. Aina mendapat mata jika A berlaku, Ben jika B berlaku.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Meja Syiling",
   "sk": "9.1.1 Peristiwa bergabung dan penyenaraian kesudahan",
   "lampiran": "r1",
   "kadNama": "Peristiwa Bergabung",
   "kadEm": "🪙",
   "kadFakta": "Peristiwa bergabung ialah gabungan dua atau lebih peristiwa, daripada satu atau lebih eksperimen. Kesudahannya boleh ditulis sebagai pasangan tertib.",
   "bosKadNama": "Pasangan Tertib",
   "bosKadEm": "🔢",
   "bosKadFakta": "Dalam pasangan tertib (K, 2), kesudahan eksperimen pertama ditulis dahulu, diikuti kesudahan eksperimen kedua.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah bilangan kesudahan dalam ruang sampel?",
     "tol": 0.001000000001,
     "b": 12,
     "u": "2 kesudahan syiling × 6 kesudahan dadu = 12."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih A ∩ B. Peristiwa \"kepala dan nombor genap\" ialah:",
     "p": [
      "{(K, 2), (K, 4), (K, 6)}",
      "{(K, 2), (E, 4), (K, 6)}",
      "{(2, K), (4, K), (6, K)}",
      "{(K, 1), (K, 3), (K, 5)}"
     ],
     "b": 0,
     "u": "Kepala (K) dipasangkan dengan nombor genap 2, 4 dan 6. Kesudahan syiling ditulis dahulu."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih A ∩ B. Kebarangkalian P(A ∩ B) ialah:",
     "p": [
      "1/12",
      "1/4",
      "5/12",
      "7/12"
     ],
     "b": 1,
     "u": "3 daripada 12 kesudahan: 3/12 = 1/4."
    },
    {
     "j": "pilih",
     "t": "Peristiwa bergabung ialah:",
     "p": [
      "Satu peristiwa yang mustahil berlaku",
      "Peristiwa yang berlaku dua kali berturut-turut",
      "Gabungan dua atau lebih peristiwa",
      "Peristiwa yang tidak mempunyai kesudahan"
     ],
     "b": 2,
     "u": "Menurut DSKP, peristiwa bergabung terhasil daripada gabungan peristiwa, sama ada daripada satu atau lebih eksperimen."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih A ∪ B. Berapakah bilangan kesudahan dalam A ∪ B?",
     "tol": 0.001000000001,
     "b": 9,
     "u": "A mempunyai 6 kesudahan, B mempunyai 6, dan 3 dikira dua kali. 6 + 6 − 3 = 9."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, kesudahan (E, 5) termasuk dalam:",
     "p": [
      "A ∩ B",
      "A ∩ B′",
      "A′ ∩ B",
      "A′ ∩ B′"
     ],
     "b": 3,
     "u": "E bukan kepala (A′) dan 5 bukan genap (B′), jadi (E, 5) berada dalam A′ ∩ B′."
    },
    {
     "j": "nombor",
     "t": "Dua keping syiling dilambung serentak. Berapakah bilangan kesudahan dalam ruang sampel?",
     "tol": 0.001000000001,
     "b": 4,
     "u": "2 × 2 = 4 kesudahan: KK, KE, EK dan EE."
    },
    {
     "j": "pilih",
     "t": "Senarai kesudahan apabila dua keping syiling dilambung ialah:",
     "p": [
      "{KK, KE, EK, EE}",
      "{KK, KE, EE}",
      "{K, E}",
      "{KE, EK}"
     ],
     "b": 0,
     "u": "KE dan EK ialah dua kesudahan berbeza kerana syiling pertama dan kedua dibezakan."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Berdasarkan Rajah 1, pilih SEMUA kesudahan dalam peristiwa \"ekor dan nombor lebih daripada 4\".",
    "p": [
     "(E, 5)",
     "(E, 6)",
     "(K, 5)",
     "(E, 4)",
     "(K, 6)",
     "(E, 3)"
    ],
    "b": [
     0,
     1
    ],
    "u": "Ekor (E) dengan 5 atau 6. (K, 5) dan (K, 6) ialah kepala, manakala 4 dan 3 tidak lebih daripada 4."
   }
  },
  {
   "n": 2,
   "tempat": "Gelanggang Dadu",
   "sk": "9.2.1 / 9.2.2 Peristiwa bersandar dan tak bersandar; konjektur rumus",
   "lampiran": "r2",
   "kadNama": "Tak Bersandar",
   "kadEm": "🎲",
   "kadFakta": "Dua peristiwa dikatakan tak bersandar jika berlakunya satu peristiwa tidak mempengaruhi kebarangkalian peristiwa yang lain. Maka P(A ∩ B) = P(A) × P(B).",
   "bosKadNama": "Darab Berulang",
   "bosKadEm": "🔁",
   "bosKadFakta": "Bagi tiga peristiwa tak bersandar, P(A ∩ B ∩ C) = P(A) × P(B) × P(C).",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih A. Kebarangkalian P(A) ialah:",
     "p": [
      "1/12",
      "1/2",
      "5/12",
      "1/18"
     ],
     "b": 1,
     "u": "18 daripada 36 kesudahan mempunyai dadu pertama genap: 18/36 = 1/2."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih B. Kebarangkalian P(B) ialah:",
     "p": [
      "1/2",
      "1/6",
      "1/3",
      "2/3"
     ],
     "b": 2,
     "u": "Dadu kedua 5 atau 6: 12 daripada 36 kesudahan, iaitu 1/3."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih A ∩ B. Berapakah kebarangkalian dadu pertama genap dan dadu kedua lebih daripada 4?",
     "p": [
      "1/2",
      "5/6",
      "1/12",
      "1/6"
     ],
     "b": 3,
     "u": "6 daripada 36 kesudahan: (2, 5), (2, 6), (4, 5), (4, 6), (6, 5), (6, 6). 6/36 = 1/6."
    },
    {
     "j": "pilih",
     "t": "Peristiwa A dan B dalam Rajah 1 ialah peristiwa tak bersandar kerana:",
     "p": [
      "Dadu pertama tidak mempengaruhi dadu kedua",
      "A dan B tidak boleh berlaku serentak",
      "Nilai P(A) sama dengan nilai P(B)",
      "Kedua-dua dadu dibaling oleh orang yang sama"
     ],
     "b": 0,
     "u": "Keputusan satu dadu tidak mengubah kebarangkalian keputusan dadu yang lain. A dan B boleh berlaku serentak, jadi mereka bukan saling eksklusif."
    },
    {
     "j": "pilih",
     "t": "Konjektur: \"P(A ∩ B) = P(A) × P(B) bagi Rajah 1.\" Tentusahkan konjektur ini.",
     "p": [
      "Palsu: 1/2 + 1/3 = 5/6",
      "Benar: 1/2 × 1/3 = 1/6",
      "Benar: 1/2 × 1/3 = 1/5",
      "Palsu: P(A ∩ B) = 1/3"
     ],
     "b": 1,
     "u": "Rajah 1 menunjukkan P(A ∩ B) = 6/36 = 1/6, dan P(A) × P(B) = 1/2 × 1/3 = 1/6. Konjektur itu benar."
    },
    {
     "j": "pilih",
     "t": "Antara situasi berikut, yang manakah melibatkan peristiwa bersandar?",
     "p": [
      "Melambung syiling kemudian membaling dadu",
      "Membaling sebiji dadu sebanyak dua kali",
      "Mengambil dua biji guli satu demi satu tanpa pemulangan",
      "Memutar pemutar kemudian melambung syiling"
     ],
     "b": 2,
     "u": "Tanpa pemulangan, cabutan pertama mengubah isi beg, jadi kebarangkalian cabutan kedua bergantung pada cabutan pertama."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih A ∪ B. Berapakah bilangan kesudahan dua dadu itu yang berada dalam A ∪ B?",
     "tol": 0.001000000001,
     "b": 24,
     "u": "18 + 12 − 6 = 24 kesudahan."
    },
    {
     "j": "pilih",
     "t": "Dua biji dadu dibaling. Kebarangkalian kedua-dua dadu menunjukkan nombor yang sama ialah:",
     "p": [
      "1/36",
      "1/12",
      "5/36",
      "1/6"
     ],
     "b": 3,
     "u": "Pasangan sama: (1, 1), (2, 2), ..., (6, 6), iaitu 6 daripada 36 kesudahan = 1/6."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Sebiji dadu dibaling tiga kali. Kebarangkalian mendapat nombor 6 pada setiap balingan ialah:",
    "p": [
     "1/216",
     "1/18",
     "1/2",
     "1/36"
    ],
    "b": 0,
    "u": "Balingan tak bersandar: 1/6 × 1/6 × 1/6 = 1/216."
   }
  },
  {
   "n": 3,
   "tempat": "Beg Guli",
   "sk": "9.2.3 Kebarangkalian peristiwa bersandar dan tak bersandar (gambar rajah pokok)",
   "lampiran": "r3",
   "kadNama": "Dengan Pemulangan",
   "kadEm": "🔄",
   "kadFakta": "Jika guli dikembalikan, isi beg tidak berubah dan cabutan kedua tidak bersandar pada cabutan pertama.",
   "bosKadNama": "Tanpa Pemulangan",
   "bosKadEm": "🚫",
   "bosKadFakta": "Jika guli tidak dikembalikan, jumlah guli berkurang satu, jadi kebarangkalian cabutan kedua bergantung pada cabutan pertama (bersandar).",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Dengan pemulangan dan MM. Kebarangkalian kedua-dua guli merah ialah:",
     "p": [
      "5/14",
      "25/64",
      "5/8",
      "10/64"
     ],
     "b": 1,
     "u": "5/8 × 5/8 = 25/64."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Tanpa pemulangan dan MM. Kebarangkalian kedua-dua guli merah ialah:",
     "p": [
      "25/64",
      "5/8",
      "5/14",
      "4/7"
     ],
     "b": 2,
     "u": "5/8 × 4/7 = 20/56 = 5/14."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, mengapakah pecahan pada cabang kedua berubah bagi cabutan tanpa pemulangan?",
     "p": [
      "Bilangan guli bertambah selepas cabutan pertama",
      "Guli biru lebih mudah dicabut daripada guli merah",
      "Cabutan kedua dilakukan oleh orang yang lain",
      "Guli pertama tidak dikembalikan, jadi jumlah guli berkurang"
     ],
     "b": 3,
     "u": "Selepas satu guli merah dicabut, tinggal 4 merah dalam 7 guli, jadi kebarangkalian merah menjadi 4/7."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Tanpa pemulangan dan Warna berbeza. Kebarangkaliannya ialah:",
     "p": [
      "15/28",
      "15/56",
      "15/32",
      "13/28"
     ],
     "b": 0,
     "u": "P(MB) + P(BM) = 15/56 + 15/56 = 30/56 = 15/28."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Dengan pemulangan dan Sama warna. Kebarangkaliannya ialah:",
     "p": [
      "13/28",
      "17/32",
      "34/56",
      "9/64"
     ],
     "b": 1,
     "u": "P(MM) + P(BB) = 25/64 + 9/64 = 34/64 = 17/32."
    },
    {
     "j": "pilih",
     "t": "Bagi cabutan tanpa pemulangan dalam Rajah 1, peristiwa cabutan pertama dan cabutan kedua ialah:",
     "p": [
      "Tak bersandar",
      "Saling eksklusif",
      "Bersandar",
      "Pelengkap"
     ],
     "b": 2,
     "u": "Kebarangkalian cabutan kedua bergantung pada keputusan cabutan pertama."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Tanpa pemulangan dan ≥ 1 merah. Kebarangkaliannya ialah:",
     "p": [
      "55/64",
      "3/28",
      "5/14",
      "25/28"
     ],
     "b": 3,
     "u": "Cara pantas: 1 − P(BB) = 1 − 3/8 × 2/7 = 1 − 6/56 = 50/56 = 25/28."
    },
    {
     "j": "pilih",
     "t": "Hasil tambah kebarangkalian semua laluan dalam suatu gambar rajah pokok ialah:",
     "p": [
      "1",
      "0",
      "0.5",
      "Bergantung pada isi beg"
     ],
     "b": 0,
     "u": "Laluan-laluan itu meliputi semua kesudahan yang mungkin, jadi jumlahnya 1. Semak: 20/56 + 15/56 + 15/56 + 6/56 = 1."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Sebuah kotak mengandungi 4 batang pen hitam dan 2 batang pen merah. Dua batang pen diambil satu demi satu tanpa pemulangan. Kebarangkalian kedua-duanya pen merah ialah:",
    "p": [
     "1/9",
     "1/15",
     "1/3",
     "2/15"
    ],
    "b": 1,
    "u": "2/6 × 1/5 = 2/30 = 1/15. Jawapan 1/9 ialah bagi cabutan dengan pemulangan."
   }
  },
  {
   "n": 4,
   "tempat": "Dewan Kad",
   "sk": "9.3.1 – 9.3.3 Peristiwa saling eksklusif dan tidak saling eksklusif",
   "lampiran": "r4",
   "kadNama": "Saling Eksklusif",
   "kadEm": "🚦",
   "kadFakta": "Peristiwa saling eksklusif tidak boleh berlaku serentak: A ∩ B = ∅. Maka P(A ∪ B) = P(A) + P(B).",
   "bosKadNama": "Rumus Atau",
   "bosKadEm": "➕",
   "bosKadFakta": "Bagi sebarang dua peristiwa, P(A ∪ B) = P(A) + P(B) − P(A ∩ B). Persilangan ditolak kerana dikira dua kali.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Pasangan 1. Adakah A dan B saling eksklusif?",
     "p": [
      "Ya, kerana A dan B tiada unsur sepunya",
      "Ya, kerana bilangan unsur A dan B berbeza",
      "Tidak, kerana 12 berada dalam A dan B",
      "Tidak, kerana jumlah unsur A dan B ialah 11"
     ],
     "b": 2,
     "u": "12 ialah gandaan 3 dan gandaan 4, jadi A ∩ B = {12} ≠ ∅."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Pasangan 1. P(A ∪ B) ialah:",
     "p": [
      "11/20",
      "9/20",
      "1/20",
      "1/2"
     ],
     "b": 3,
     "u": "P(A ∪ B) = 6/20 + 5/20 − 1/20 = 10/20 = 1/2."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Pasangan 2. P(A ∪ B) ialah:",
     "p": [
      "3/5",
      "1/2",
      "2/5",
      "1/5"
     ],
     "b": 0,
     "u": "Tiada nombor perdana yang kuasa dua sempurna, jadi saling eksklusif: 8/20 + 4/20 = 12/20 = 3/5."
    },
    {
     "j": "pilih",
     "t": "Bagi dua peristiwa saling eksklusif A dan B, P(A ∪ B) ialah:",
     "p": [
      "P(A) × P(B)",
      "P(A) + P(B)",
      "P(A) + P(B) − 1",
      "P(A) − P(B)"
     ],
     "b": 1,
     "u": "P(A ∩ B) = 0, jadi rumus P(A) + P(B) − P(A ∩ B) menjadi P(A) + P(B)."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Pasangan 3. P(A ∪ B) ialah:",
     "p": [
      "17/20",
      "7/20",
      "3/4",
      "1/2"
     ],
     "b": 2,
     "u": "Faktor 24 (1, 2, 3, 4, 6, 8, 12) ada 7, nombor ganjil ada 10, dan sepunya 1 dan 3. (7 + 10 − 2)/20 = 15/20 = 3/4."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Pasangan 4. Mengapakah A ∩ B = B?",
     "p": [
      "Setiap nombor genap ialah gandaan 4",
      "A dan B saling eksklusif",
      "Bilangan unsur A sama dengan B",
      "Setiap gandaan 4 ialah nombor genap"
     ],
     "b": 3,
     "u": "B ⊂ A, jadi persilangan A dan B ialah B itu sendiri. Maka P(A ∪ B) = P(A)."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih Pasangan 4. Berapakah n(A ∪ B)?",
     "tol": 0.001000000001,
     "b": 10,
     "u": "A ∪ B = A kerana B ⊂ A. Bilangan nombor genap dari 1 hingga 20 ialah 10."
    },
    {
     "j": "pilih",
     "t": "Sekeping kad dipilih daripada kad 1 hingga 20. Kebarangkalian kad itu nombor perdana atau nombor genap ialah:",
     "p": [
      "17/20",
      "9/10",
      "4/5",
      "1/2"
     ],
     "b": 0,
     "u": "Perdana: 8, genap: 10, sepunya: {2}. (8 + 10 − 1)/20 = 17/20."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Diberi P(A) = 0.5, P(B) = 0.3 dan P(A ∪ B) = 0.65. Cari P(A ∩ B).",
    "p": [
     "0.8",
     "0.15",
     "0.35",
     "0.2"
    ],
    "b": 1,
    "u": "0.65 = 0.5 + 0.3 − P(A ∩ B), jadi P(A ∩ B) = 0.15. A dan B tidak saling eksklusif."
   }
  },
  {
   "n": 5,
   "tempat": "Dewan Peperiksaan",
   "sk": "9.2.3 Gabungan lebih daripada dua peristiwa (rutin kompleks)",
   "lampiran": "r5",
   "kadNama": "Tiga Peristiwa",
   "kadEm": "🧪",
   "kadFakta": "Gambar rajah pokok tiga peristiwa (dua kesudahan setiap satu) mempunyai 2 × 2 × 2 = 8 laluan. Darab kebarangkalian sepanjang setiap laluan.",
   "bosKadNama": "Pelengkap Pantas",
   "bosKadEm": "⚡",
   "bosKadFakta": "P(sekurang-kurangnya satu) = 1 − P(tiada langsung). Cara ini lebih pantas daripada menjumlahkan tujuh laluan.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah kebarangkalian Ali lulus ketiga-tiga ujian? Kira dahulu.",
     "tol": 0.0005000000005,
     "b": 0.504,
     "u": "0.8 × 0.7 × 0.9 = 0.504."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah kebarangkalian Ali gagal ketiga-tiga ujian?",
     "tol": 0.0005000000005,
     "b": 0.006,
     "u": "0.2 × 0.3 × 0.1 = 0.006."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah kebarangkalian Ali lulus tepat dua ujian?",
     "tol": 0.0005000000005,
     "b": 0.398,
     "u": "MSj + MsJ + mSJ = 0.056 + 0.216 + 0.126 = 0.398."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah kebarangkalian Ali lulus sekurang-kurangnya dua ujian?",
     "tol": 0.0005000000005,
     "b": 0.902,
     "u": "Tepat dua + tepat tiga = 0.398 + 0.504 = 0.902."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah kebarangkalian Ali lulus sekurang-kurangnya satu ujian?",
     "tol": 0.0005000000005,
     "b": 0.994,
     "u": "1 − P(gagal semua) = 1 − 0.006 = 0.994."
    },
    {
     "j": "pilih",
     "t": "Mengapakah kebarangkalian didarab sepanjang setiap laluan dalam Rajah 1?",
     "p": [
      "Peristiwa saling eksklusif: kebarangkalian ditambah",
      "Kebarangkalian perlu menjadi lebih kecil daripada 1",
      "Peristiwa tak bersandar: P(A ∩ B) = P(A) × P(B)",
      "Rajah pokok itu mempunyai tiga peringkat cabang"
     ],
     "b": 2,
     "u": "Keputusan satu ujian tidak mempengaruhi ujian lain, jadi kebarangkalian sepanjang laluan didarab. Laluan yang berlainan saling eksklusif dan dijumlahkan."
    },
    {
     "j": "nombor",
     "t": "Berapakah bilangan laluan (kesudahan) dalam gambar rajah pokok bagi tiga peristiwa yang masing-masing mempunyai dua kesudahan?",
     "tol": 0.001000000001,
     "b": 8,
     "u": "2 × 2 × 2 = 8."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih MSj. Berapakah kebarangkalian Ali lulus Matematik dan Sains tetapi gagal Sejarah?",
     "tol": 0.0005000000005,
     "b": 0.056,
     "u": "0.8 × 0.7 × 0.1 = 0.056."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Seorang pemanah mengenai sasaran dengan kebarangkalian 0.6 bagi setiap anak panah, secara tak bersandar. Dia melepaskan tiga anak panah. Berapakah kebarangkalian sekurang-kurangnya satu anak panah mengenai sasaran?",
    "tol": 0.0005000000005,
    "b": 0.936,
    "u": "1 − P(tiada yang mengenai) = 1 − 0.4 × 0.4 × 0.4 = 1 − 0.064 = 0.936."
   }
  },
  {
   "n": 6,
   "tempat": "Arked Permainan",
   "sk": "9.4.1 Masalah kebarangkalian peristiwa bergabung (bukan rutin)",
   "lampiran": "r6",
   "kadNama": "Permainan Adil",
   "kadEm": "🎮",
   "kadFakta": "Permainan dikatakan adil jika setiap pemain mempunyai kebarangkalian menang yang sama.",
   "bosKadNama": "Pereka Permainan",
   "bosKadEm": "🎲",
   "bosKadFakta": "Untuk mereka permainan adil, senaraikan ruang sampel dahulu, kemudian pilih peraturan supaya bilangan kesudahan menang setiap pemain sama.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih A. Berapakah kebarangkalian jumlah dua nombor pemutar itu genap?",
     "p": [
      "3/8",
      "1/4",
      "5/8",
      "1/2"
     ],
     "b": 3,
     "u": "Jumlah genap berlaku apabila kedua-dua nombor genap atau kedua-duanya ganjil: 8 daripada 16 = 1/2."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih B. Berapakah kebarangkalian hasil darab dua nombor pemutar itu lebih daripada 6?",
     "p": [
      "3/8",
      "1/2",
      "1/4",
      "3/16"
     ],
     "b": 0,
     "u": "Hasil darab lebih daripada 6: (2, 4), (3, 3), (3, 4), (4, 2), (4, 3), (4, 4). 6/16 = 3/8."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, adakah A dan B saling eksklusif?",
     "p": [
      "Ya, kerana A dan B tiada kesudahan sepunya",
      "Tidak, kerana (3, 3) memenuhi kedua-duanya",
      "Ya, kerana P(A) tidak sama dengan P(B)",
      "Tidak, kerana P(A) + P(B) = 1"
     ],
     "b": 1,
     "u": "(3, 3) mempunyai jumlah 6 (genap) dan hasil darab 9 (lebih daripada 6), jadi A ∩ B ≠ ∅."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih A ∪ B. Kebarangkalian P(A ∪ B) ialah:",
     "p": [
      "7/8",
      "1/2",
      "5/8",
      "3/4"
     ],
     "b": 2,
     "u": "P(A ∪ B) = 8/16 + 6/16 − 4/16 = 10/16 = 5/8."
    },
    {
     "j": "pilih",
     "t": "Aina mendapat 1 mata jika A berlaku dan Ben mendapat 1 mata jika B berlaku. Adakah permainan ini adil?",
     "p": [
      "Adil, kerana kedua-dua pemain boleh mendapat mata",
      "Adil, kerana P(A ∩ B) = 1/4 bagi kedua-duanya",
      "Tidak adil, kerana P(B) lebih besar daripada P(A)",
      "Tidak adil, kerana P(A) = 1/2 lebih besar daripada P(B) = 3/8"
     ],
     "b": 3,
     "u": "Kebarangkalian mendapat mata tidak sama, jadi Aina lebih berpeluang menang."
    },
    {
     "j": "pilih",
     "t": "Peraturan Ben ditukar supaya permainan menjadi adil. Peraturan manakah yang sesuai?",
     "p": [
      "Hasil darab lebih daripada 4",
      "Hasil darab ialah nombor genap",
      "Jumlah lebih daripada 5",
      "Kedua-dua nombor adalah sama"
     ],
     "b": 0,
     "u": "Hasil darab lebih daripada 4 berlaku dalam 8 daripada 16 kesudahan, iaitu 1/2, sama dengan P(A). Pilihan lain: 3/4, 3/8 dan 1/4."
    },
    {
     "j": "nombor",
     "t": "Jika permainan dalam Rajah 1 dimainkan sebanyak 80 kali, berapakah jangkaan bilangan kali peristiwa A berlaku?",
     "tol": 0.001000000001,
     "b": 40,
     "u": "Jangkaan = P(A) × bilangan percubaan = 1/2 × 80 = 40."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah bilangan kesudahan yang tidak memberi mata kepada sesiapa (bukan A dan bukan B)?",
     "tol": 0.001000000001,
     "b": 6,
     "u": "n(A ∪ B) = 10, jadi n((A ∪ B)′) = 16 − 10 = 6."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Reka satu permainan untuk dua pemain menggunakan dua alat rawak (contohnya dadu, syiling atau pemutar) yang adil bagi kedua-dua pemain.",
    "arahan": "Senaraikan ruang sampel dengan jadual atau gambar rajah pokok. Tulis peraturan menang setiap pemain dan tunjukkan bahawa kebarangkalian menang mereka sama. Nyatakan sama ada peristiwa menang kedua-dua pemain saling eksklusif, dan terangkan bagaimana mengubah satu peraturan boleh menjadikan permainan tidak adil.",
    "u": "Jawapan TP6 yang kukuh mempunyai ruang sampel lengkap, peraturan yang jelas, kebarangkalian menang yang dikira dengan betul dan sama, penaakulan tentang saling eksklusif, serta contoh perubahan peraturan yang disokong dengan pengiraan."
   }
  }
 ]
};
