/* Bank soalan — Matematik Ting. 5 · Bab 5 Kekongruenan, Pembesaran dan Gabungan Transformasi.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m5b5.js
   kemudian jalankan: node bina.js m5b5

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 5, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m5b5"] =
{
 "id": "m5b5",
 "tingkatan": 5,
 "kod": "5.0 Kekongruenan, Pembesaran dan Gabungan Transformasi",
 "tajuk": "Studio Transformasi",
 "subtajuk": "Matematik Ting. 5 · Bab 5 Kekongruenan, Pembesaran dan Gabungan Transformasi",
 "spi": [
  "Mempamerkan pengetahuan asas tentang kekongruenan, pembesaran dan gabungan transformasi.",
  "Mempamerkan kefahaman tentang kekongruenan, pembesaran dan gabungan transformasi.",
  "Mengaplikasikan kefahaman tentang kekongruenan, pembesaran dan gabungan transformasi untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kekongruenan, pembesaran dan gabungan transformasi dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kekongruenan, pembesaran dan gabungan transformasi dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kekongruenan, pembesaran dan gabungan transformasi dalam konteks penyelesaian masalah bukan rutin secara kreatif."
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
  "1": "{n} dapat membezakan bentuk kongruen dan mengenal pasti syarat kekongruenan segi tiga SSS, SAS, ASA dan AAS. Langkah seterusnya ialah pembesaran.",
  "2": "{n} memahami keserupaan dan pembesaran, termasuk faktor skala pecahan dan negatif, serta dapat menentukan imej. Perlu lebih latihan tentang hubungan luas.",
  "3": "{n} boleh mengaitkan luas imej dengan luas objek melalui k² dan menyelesaikan tugasan mudah pembesaran.",
  "4": "{n} mampu menentukan imej gabungan transformasi dan menyiasat sifat kalis tukar tertib. Seterusnya, perihalkan transformasi tunggal yang setara.",
  "5": "{n} dapat memerihalkan dan menyelesaikan masalah gabungan transformasi yang kompleks, termasuk pembesaran. Sudah bersedia untuk mereka teselasi.",
  "6": "{n} berjaya mereka teselasi jenis Escher dengan transformasi isometri dan menerangkan langkah penghasilannya. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab ini. Cadangan: ulang hentian pertama dengan Rajah 1 dan bina segi tiga daripada lidi untuk menguji syarat kekongruenan."
 },
 "lampiran": {
  "r1": "<figure class=\"figure jmi\" data-w=\"t5trans\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5trans&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Segi tiga ABC dan PQR dengan ukuran yang ditanda. Pilih satu syarat.&quot;,&quot;alt&quot;:&quot;Rajah interaktif dua segi tiga bagi setiap syarat SSS, SAS, ASA, AAS, AAA dan SSA, dengan sisi dan sudut yang ditanda serta kesimpulan sama ada segi tiga itu kongruen&quot;,&quot;mod&quot;:&quot;syarat&quot;,&quot;pasangan&quot;:[{&quot;t&quot;:&quot;SSS&quot;,&quot;P&quot;:[[0,0],[7,0],[2,5]],&quot;Q&quot;:[[7,0],[0,0],[5,5]],&quot;tanda&quot;:[&quot;AB&quot;,&quot;BC&quot;,&quot;CA&quot;],&quot;kongruen&quot;:true,&quot;ket&quot;:[&quot;Tiga pasang sisi sepadan sama panjang.&quot;]},{&quot;t&quot;:&quot;SAS&quot;,&quot;P&quot;:[[0,0],[7,0],[2,5]],&quot;Q&quot;:[[7,0],[0,0],[5,5]],&quot;tanda&quot;:[&quot;AB&quot;,&quot;∠A&quot;,&quot;CA&quot;],&quot;kongruen&quot;:true,&quot;ket&quot;:[&quot;Dua sisi dan sudut di antaranya sama.&quot;]},{&quot;t&quot;:&quot;ASA&quot;,&quot;P&quot;:[[0,0],[7,0],[2,5]],&quot;Q&quot;:[[7,0],[0,0],[5,5]],&quot;tanda&quot;:[&quot;∠A&quot;,&quot;AB&quot;,&quot;∠B&quot;],&quot;kongruen&quot;:true,&quot;ket&quot;:[&quot;Dua sudut dan sisi di antaranya sama.&quot;]},{&quot;t&quot;:&quot;AAS&quot;,&quot;P&quot;:[[0,0],[7,0],[2,5]],&quot;Q&quot;:[[7,0],[0,0],[5,5]],&quot;tanda&quot;:[&quot;∠A&quot;,&quot;∠B&quot;,&quot;BC&quot;],&quot;kongruen&quot;:true,&quot;ket&quot;:[&quot;Dua sudut dan satu sisi bukan&quot;,&quot;di antaranya sama.&quot;]},{&quot;t&quot;:&quot;AAA&quot;,&quot;P&quot;:[[0,0],[7,0],[2,5]],&quot;Q&quot;:[[0,0],[4.9,0],[1.4,3.5]],&quot;tanda&quot;:[&quot;∠A&quot;,&quot;∠B&quot;,&quot;∠C&quot;],&quot;kongruen&quot;:false,&quot;ket&quot;:[&quot;Sudut sama tetapi saiz berbeza:&quot;,&quot;serupa, bukan kongruen.&quot;]},{&quot;t&quot;:&quot;SSA&quot;,&quot;P&quot;:[[0,0],[6,0],[5.696,3.988]],&quot;Q&quot;:[[0,0],[6,0],[2.356,1.65]],&quot;tanda&quot;:[&quot;AB&quot;,&quot;BC&quot;,&quot;∠A&quot;],&quot;kongruen&quot;:false,&quot;ket&quot;:[&quot;Dua segi tiga berbeza memenuhi&quot;,&quot;ukuran yang sama.&quot;]}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 224\" role=\"img\" aria-label=\"Dua segi tiga dengan syarat SSS: kongruen\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Syarat SSS</text><polygon points=\"14,130 105,130 40,65\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><text x=\"11.3\" y=\"143.6\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">A</text><text x=\"114.2\" y=\"137.8\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">B</text><text x=\"37.1\" y=\"59.4\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">C</text><text x=\"62.9\" y=\"145.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">7</text><text x=\"83\" y=\"95.7\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">7.1</text><text x=\"15.9\" y=\"96.9\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">5.4</text><polygon points=\"227,130 136,130 201,65\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><text x=\"235.7\" y=\"138.9\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">P</text><text x=\"126.8\" y=\"137.8\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">Q</text><text x=\"203.9\" y=\"59.4\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">R</text><text x=\"178.1\" y=\"145.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">7</text><text x=\"158\" y=\"95.7\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">7.1</text><text x=\"225.1\" y=\"96.9\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">5.4</text><text x=\"8\" y=\"160\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Ditanda: AB, BC, CA</text><text class=\"jmi-hasil\" x=\"8\" y=\"182\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" font-weight=\"700\">Kongruen (SSS)</text><text class=\"jmi-hasil\" x=\"8\" y=\"202\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Tiga pasang sisi sepadan sama panjang.</text></svg></div><figcaption>Rajah 1 · Segi tiga ABC dan PQR dengan ukuran yang ditanda. Pilih satu syarat.</figcaption></figure>",
  "r2": "<figure class=\"figure jmi\" data-w=\"t5trans\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5trans&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Pembesaran segi tiga ABC pada pusat P(1, −1). Pilih faktor skala k.&quot;,&quot;alt&quot;:&quot;Rajah interaktif pembesaran segi tiga pada satah Cartes dengan pusat (1, −1) dan faktor skala 2, setengah, negatif 1 atau negatif 2; garis dari pusat menghubungkan objek dan imej&quot;,&quot;mod&quot;:&quot;besar&quot;,&quot;obj&quot;:[[2,0],[4,0],[2,1]],&quot;pusat&quot;:[1,-1],&quot;k&quot;:[2,0.5,-1,-2],&quot;kt&quot;:[&quot;2&quot;,&quot;1/2&quot;,&quot;−1&quot;,&quot;−2&quot;],&quot;lo&quot;:-8,&quot;hi&quot;:8}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 356\" role=\"img\" aria-label=\"Pembesaran pada pusat (1, −1) dengan faktor skala 2; imej A′ (3, 1)\"><line x1=\"30\" y1=\"248\" x2=\"30\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"248\" x2=\"250\" y2=\"248\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"43.8\" y1=\"248\" x2=\"43.8\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"234.3\" x2=\"250\" y2=\"234.3\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"57.5\" y1=\"248\" x2=\"57.5\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"220.5\" x2=\"250\" y2=\"220.5\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"71.3\" y1=\"248\" x2=\"71.3\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"206.8\" x2=\"250\" y2=\"206.8\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"85\" y1=\"248\" x2=\"85\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"193\" x2=\"250\" y2=\"193\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"98.8\" y1=\"248\" x2=\"98.8\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"179.3\" x2=\"250\" y2=\"179.3\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"112.5\" y1=\"248\" x2=\"112.5\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"165.5\" x2=\"250\" y2=\"165.5\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"126.3\" y1=\"248\" x2=\"126.3\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"151.8\" x2=\"250\" y2=\"151.8\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"140\" y1=\"248\" x2=\"140\" y2=\"28\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"></line><line x1=\"30\" y1=\"138\" x2=\"250\" y2=\"138\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"></line><line x1=\"153.8\" y1=\"248\" x2=\"153.8\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"124.3\" x2=\"250\" y2=\"124.3\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"167.5\" y1=\"248\" x2=\"167.5\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"110.5\" x2=\"250\" y2=\"110.5\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"181.3\" y1=\"248\" x2=\"181.3\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"96.8\" x2=\"250\" y2=\"96.8\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"195\" y1=\"248\" x2=\"195\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"83\" x2=\"250\" y2=\"83\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"208.8\" y1=\"248\" x2=\"208.8\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"69.3\" x2=\"250\" y2=\"69.3\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"222.5\" y1=\"248\" x2=\"222.5\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"55.5\" x2=\"250\" y2=\"55.5\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"236.3\" y1=\"248\" x2=\"236.3\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"41.8\" x2=\"250\" y2=\"41.8\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"250\" y1=\"248\" x2=\"250\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"28\" x2=\"250\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"30\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−8</text><text x=\"57.5\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−6</text><text x=\"26\" y=\"224.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−6</text><text x=\"85\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−4</text><text x=\"26\" y=\"197\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−4</text><text x=\"112.5\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−2</text><text x=\"26\" y=\"169.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−2</text><text x=\"140\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><text x=\"26\" y=\"142\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><text x=\"167.5\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"26\" y=\"114.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><text x=\"195\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"26\" y=\"87\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><text x=\"222.5\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><text x=\"26\" y=\"59.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">6</text><text x=\"250\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">8</text><text x=\"26\" y=\"32\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">8</text><text x=\"253\" y=\"142\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">x</text><text x=\"140\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\" font-weight=\"700\">y</text><line x1=\"153.8\" y1=\"151.8\" x2=\"181.3\" y2=\"124.3\" stroke=\"var(--amber)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"></line><line x1=\"153.8\" y1=\"151.8\" x2=\"236.3\" y2=\"124.3\" stroke=\"var(--amber)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"></line><line x1=\"153.8\" y1=\"151.8\" x2=\"181.3\" y2=\"96.8\" stroke=\"var(--amber)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"></line><circle cx=\"153.8\" cy=\"151.8\" r=\"4\" fill=\"var(--ink)\"></circle><text x=\"163.8\" y=\"155.8\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">P</text><polygon points=\"167.5,138 195,138 167.5,124.3\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><text x=\"158\" y=\"138.8\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">A</text><text x=\"204.7\" y=\"144.4\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">B</text><text x=\"160.4\" y=\"121.2\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">C</text><g class=\"jmi-hasil\"><polygon points=\"181.3,124.3 236.3,124.3 181.3,96.8\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><text x=\"178.1\" y=\"137.7\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">A′</text><text x=\"246\" y=\"130.7\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">B′</text><text x=\"174.2\" y=\"93.7\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">C′</text></g><text x=\"8\" y=\"288\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">k = 2, pusat P(1, −1)</text><text class=\"jmi-hasil\" x=\"8\" y=\"308\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">A′ = (3, 1)</text><text x=\"8\" y=\"328\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Luas imej = k² × luas objek</text><text class=\"jmi-hasil\" x=\"8\" y=\"346\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">= 4 × 1 = 4 unit²</text></svg></div><figcaption>Rajah 1 · Pembesaran segi tiga ABC pada pusat P(1, −1). Pilih faktor skala k.</figcaption></figure>",
  "r3": "<figure class=\"figure jmi\" data-w=\"t5trans\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5trans&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Pembesaran segi empat tepat ABCD pada asalan O. Pilih faktor skala k.&quot;,&quot;alt&quot;:&quot;Rajah interaktif pembesaran segi empat tepat pada asalan dengan faktor skala 2, negatif 2, setengah dan negatif setengah; luas objek dan luas imej dibandingkan&quot;,&quot;mod&quot;:&quot;besar&quot;,&quot;obj&quot;:[[1,1],[3,1],[3,2],[1,2]],&quot;pusat&quot;:[0,0],&quot;k&quot;:[2,-2,0.5,-0.5],&quot;kt&quot;:[&quot;2&quot;,&quot;−2&quot;,&quot;1/2&quot;,&quot;−1/2&quot;],&quot;nama&quot;:[&quot;A&quot;,&quot;B&quot;,&quot;C&quot;,&quot;D&quot;],&quot;lo&quot;:-8,&quot;hi&quot;:8}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 356\" role=\"img\" aria-label=\"Pembesaran pada pusat (0, 0) dengan faktor skala 2; imej A′ (2, 2)\"><line x1=\"30\" y1=\"248\" x2=\"30\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"248\" x2=\"250\" y2=\"248\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"43.8\" y1=\"248\" x2=\"43.8\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"234.3\" x2=\"250\" y2=\"234.3\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"57.5\" y1=\"248\" x2=\"57.5\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"220.5\" x2=\"250\" y2=\"220.5\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"71.3\" y1=\"248\" x2=\"71.3\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"206.8\" x2=\"250\" y2=\"206.8\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"85\" y1=\"248\" x2=\"85\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"193\" x2=\"250\" y2=\"193\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"98.8\" y1=\"248\" x2=\"98.8\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"179.3\" x2=\"250\" y2=\"179.3\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"112.5\" y1=\"248\" x2=\"112.5\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"165.5\" x2=\"250\" y2=\"165.5\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"126.3\" y1=\"248\" x2=\"126.3\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"151.8\" x2=\"250\" y2=\"151.8\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"140\" y1=\"248\" x2=\"140\" y2=\"28\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"></line><line x1=\"30\" y1=\"138\" x2=\"250\" y2=\"138\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"></line><line x1=\"153.8\" y1=\"248\" x2=\"153.8\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"124.3\" x2=\"250\" y2=\"124.3\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"167.5\" y1=\"248\" x2=\"167.5\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"110.5\" x2=\"250\" y2=\"110.5\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"181.3\" y1=\"248\" x2=\"181.3\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"96.8\" x2=\"250\" y2=\"96.8\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"195\" y1=\"248\" x2=\"195\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"83\" x2=\"250\" y2=\"83\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"208.8\" y1=\"248\" x2=\"208.8\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"69.3\" x2=\"250\" y2=\"69.3\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"222.5\" y1=\"248\" x2=\"222.5\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"55.5\" x2=\"250\" y2=\"55.5\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"236.3\" y1=\"248\" x2=\"236.3\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"41.8\" x2=\"250\" y2=\"41.8\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"250\" y1=\"248\" x2=\"250\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"28\" x2=\"250\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"30\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−8</text><text x=\"57.5\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−6</text><text x=\"26\" y=\"224.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−6</text><text x=\"85\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−4</text><text x=\"26\" y=\"197\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−4</text><text x=\"112.5\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−2</text><text x=\"26\" y=\"169.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−2</text><text x=\"140\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><text x=\"26\" y=\"142\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><text x=\"167.5\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"26\" y=\"114.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><text x=\"195\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"26\" y=\"87\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><text x=\"222.5\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><text x=\"26\" y=\"59.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">6</text><text x=\"250\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">8</text><text x=\"26\" y=\"32\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">8</text><text x=\"253\" y=\"142\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">x</text><text x=\"140\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\" font-weight=\"700\">y</text><line x1=\"140\" y1=\"138\" x2=\"167.5\" y2=\"110.5\" stroke=\"var(--amber)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"></line><line x1=\"140\" y1=\"138\" x2=\"222.5\" y2=\"110.5\" stroke=\"var(--amber)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"></line><line x1=\"140\" y1=\"138\" x2=\"222.5\" y2=\"83\" stroke=\"var(--amber)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"></line><line x1=\"140\" y1=\"138\" x2=\"167.5\" y2=\"83\" stroke=\"var(--amber)\" stroke-width=\"1\" stroke-dasharray=\"3 3\"></line><circle cx=\"140\" cy=\"138\" r=\"4\" fill=\"var(--ink)\"></circle><text x=\"150\" y=\"142\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">P</text><polygon points=\"153.8,124.3 181.3,124.3 181.3,110.5 153.8,110.5\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><text x=\"144.3\" y=\"125.1\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">A</text><text x=\"190.2\" y=\"132.7\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">B</text><text x=\"190.2\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">C</text><text x=\"144.8\" y=\"110\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">D</text><g class=\"jmi-hasil\"><polygon points=\"167.5,110.5 222.5,110.5 222.5,83 167.5,83\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><text x=\"158.6\" y=\"119\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">A′</text><text x=\"231.4\" y=\"119\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">B′</text><text x=\"231.4\" y=\"82.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">C′</text><text x=\"158.6\" y=\"82.5\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" text-anchor=\"middle\" font-weight=\"700\">D′</text></g><text x=\"8\" y=\"288\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">k = 2, pusat P(0, 0)</text><text class=\"jmi-hasil\" x=\"8\" y=\"308\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">A′ = (2, 2)</text><text x=\"8\" y=\"328\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Luas imej = k² × luas objek</text><text class=\"jmi-hasil\" x=\"8\" y=\"346\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">= 4 × 2 = 8 unit²</text></svg></div><figcaption>Rajah 1 · Pembesaran segi empat tepat ABCD pada asalan O. Pilih faktor skala k.</figcaption></figure>",
  "r4": "<figure class=\"figure jmi\" data-w=\"t5trans\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5trans&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · T ialah translasi (−2, 2) dan M ialah pantulan pada paksi-y. Pilih paparan.&quot;,&quot;alt&quot;:&quot;Rajah interaktif gabungan transformasi translasi T dan pantulan M ke atas segi tiga PQR; paparan TM dan MT menunjukkan imej yang berbeza&quot;,&quot;mod&quot;:&quot;gabung&quot;,&quot;obj&quot;:[[1,1],[3,1],[1,2]],&quot;A&quot;:{&quot;j&quot;:&quot;T&quot;,&quot;a&quot;:-2,&quot;b&quot;:2,&quot;nama&quot;:&quot;T&quot;,&quot;t&quot;:&quot;translasi (−2, 2)&quot;},&quot;B&quot;:{&quot;j&quot;:&quot;P&quot;,&quot;paksi&quot;:&quot;y&quot;,&quot;nama&quot;:&quot;M&quot;,&quot;t&quot;:&quot;pantulan pada paksi-y&quot;}}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 352\" role=\"img\" aria-label=\"Gabungan transformasi: Objek\"><line x1=\"30\" y1=\"248\" x2=\"30\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"248\" x2=\"250\" y2=\"248\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"48.3\" y1=\"248\" x2=\"48.3\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"229.7\" x2=\"250\" y2=\"229.7\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"66.7\" y1=\"248\" x2=\"66.7\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"211.3\" x2=\"250\" y2=\"211.3\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"85\" y1=\"248\" x2=\"85\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"193\" x2=\"250\" y2=\"193\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"103.3\" y1=\"248\" x2=\"103.3\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"174.7\" x2=\"250\" y2=\"174.7\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"121.7\" y1=\"248\" x2=\"121.7\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"156.3\" x2=\"250\" y2=\"156.3\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"140\" y1=\"248\" x2=\"140\" y2=\"28\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"></line><line x1=\"30\" y1=\"138\" x2=\"250\" y2=\"138\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"></line><line x1=\"158.3\" y1=\"248\" x2=\"158.3\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"119.7\" x2=\"250\" y2=\"119.7\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"176.7\" y1=\"248\" x2=\"176.7\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"101.3\" x2=\"250\" y2=\"101.3\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"195\" y1=\"248\" x2=\"195\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"83\" x2=\"250\" y2=\"83\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"213.3\" y1=\"248\" x2=\"213.3\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"64.7\" x2=\"250\" y2=\"64.7\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"231.7\" y1=\"248\" x2=\"231.7\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"46.3\" x2=\"250\" y2=\"46.3\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"250\" y1=\"248\" x2=\"250\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"28\" x2=\"250\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"30\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−6</text><text x=\"66.7\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−4</text><text x=\"26\" y=\"215.3\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−4</text><text x=\"103.3\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−2</text><text x=\"26\" y=\"178.7\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−2</text><text x=\"140\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><text x=\"26\" y=\"142\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><text x=\"176.7\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"26\" y=\"105.3\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><text x=\"213.3\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"26\" y=\"68.7\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><text x=\"250\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><text x=\"26\" y=\"32\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">6</text><text x=\"253\" y=\"142\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">x</text><text x=\"140\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\" font-weight=\"700\">y</text><polygon points=\"158.3,119.7 195,119.7 158.3,101.3\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><text x=\"149.4\" y=\"128.1\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">P</text><text x=\"204.7\" y=\"126.1\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">Q</text><text x=\"151.3\" y=\"98.3\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">R</text><text x=\"8\" y=\"288\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">Objek</text><text x=\"8\" y=\"308\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">P = (1, 1)</text><text x=\"8\" y=\"328\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">T: translasi (−2, 2)</text><text x=\"8\" y=\"344\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">M: pantulan pada paksi-y</text></svg></div><figcaption>Rajah 1 · T ialah translasi (−2, 2) dan M ialah pantulan pada paksi-y. Pilih paparan.</figcaption></figure>",
  "r5": "<figure class=\"figure jmi cabar\" data-w=\"t5trans\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5trans&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · R ialah putaran 90° ikut arah jam pada O, V ialah pembesaran k = 2 pada O. Kira dahulu, kemudian semak.&quot;,&quot;alt&quot;:&quot;Rajah interaktif gabungan putaran R dan pembesaran V pada pusat yang sama ke atas segi tiga PQR, dalam mod cabar; RV dan VR memberi imej yang sama&quot;,&quot;mod&quot;:&quot;gabung&quot;,&quot;cabar&quot;:true,&quot;obj&quot;:[[1,1],[2,1],[1,3]],&quot;A&quot;:{&quot;j&quot;:&quot;R&quot;,&quot;d&quot;:90,&quot;c&quot;:[0,0],&quot;nama&quot;:&quot;R&quot;,&quot;t&quot;:&quot;putaran 90° ikut arah jam pada O&quot;},&quot;B&quot;:{&quot;j&quot;:&quot;B&quot;,&quot;k&quot;:2,&quot;c&quot;:[0,0],&quot;nama&quot;:&quot;V&quot;,&quot;t&quot;:&quot;pembesaran k = 2 pada O&quot;}}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 352\" role=\"img\" aria-label=\"Gabungan transformasi: Objek\"><line x1=\"30\" y1=\"248\" x2=\"30\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"248\" x2=\"250\" y2=\"248\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"48.3\" y1=\"248\" x2=\"48.3\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"229.7\" x2=\"250\" y2=\"229.7\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"66.7\" y1=\"248\" x2=\"66.7\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"211.3\" x2=\"250\" y2=\"211.3\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"85\" y1=\"248\" x2=\"85\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"193\" x2=\"250\" y2=\"193\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"103.3\" y1=\"248\" x2=\"103.3\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"174.7\" x2=\"250\" y2=\"174.7\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"121.7\" y1=\"248\" x2=\"121.7\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"156.3\" x2=\"250\" y2=\"156.3\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"140\" y1=\"248\" x2=\"140\" y2=\"28\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"></line><line x1=\"30\" y1=\"138\" x2=\"250\" y2=\"138\" stroke=\"var(--ink3)\" stroke-width=\"1.4\"></line><line x1=\"158.3\" y1=\"248\" x2=\"158.3\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"119.7\" x2=\"250\" y2=\"119.7\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"176.7\" y1=\"248\" x2=\"176.7\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"101.3\" x2=\"250\" y2=\"101.3\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"195\" y1=\"248\" x2=\"195\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"83\" x2=\"250\" y2=\"83\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"213.3\" y1=\"248\" x2=\"213.3\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"64.7\" x2=\"250\" y2=\"64.7\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"231.7\" y1=\"248\" x2=\"231.7\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"46.3\" x2=\"250\" y2=\"46.3\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"250\" y1=\"248\" x2=\"250\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><line x1=\"30\" y1=\"28\" x2=\"250\" y2=\"28\" stroke=\"var(--line)\" stroke-width=\"0.7\"></line><text x=\"30\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−6</text><text x=\"66.7\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−4</text><text x=\"26\" y=\"215.3\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−4</text><text x=\"103.3\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">−2</text><text x=\"26\" y=\"178.7\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">−2</text><text x=\"140\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">0</text><text x=\"26\" y=\"142\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><text x=\"176.7\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">2</text><text x=\"26\" y=\"105.3\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">2</text><text x=\"213.3\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">4</text><text x=\"26\" y=\"68.7\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">4</text><text x=\"250\" y=\"261\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">6</text><text x=\"26\" y=\"32\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">6</text><text x=\"253\" y=\"142\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" font-weight=\"700\">x</text><text x=\"140\" y=\"24\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\" font-weight=\"700\">y</text><polygon points=\"158.3,119.7 176.7,119.7 158.3,83\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2\" stroke-linejoin=\"round\"></polygon><text x=\"153.9\" y=\"132.6\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">P</text><text x=\"183.7\" y=\"130.7\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">Q</text><text x=\"155.9\" y=\"77.3\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">R</text><text x=\"8\" y=\"288\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">Objek</text><text x=\"8\" y=\"308\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">P = (1, 1)</text><text x=\"8\" y=\"328\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">R: putaran 90° ikut arah jam pada O</text><text x=\"8\" y=\"344\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">V: pembesaran k = 2 pada O</text></svg></div><figcaption>Rajah 1 · R ialah putaran 90° ikut arah jam pada O, V ialah pembesaran k = 2 pada O. Kira dahulu, kemudian semak.</figcaption></figure>",
  "r6": "<figure class=\"figure jmi\" data-w=\"t5trans\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t5trans&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Poligon sekata yang bertemu pada satu bucu. Pilih poligon.&quot;,&quot;alt&quot;:&quot;Rajah interaktif poligon sekata disusun mengelilingi satu bucu: segi tiga sama sisi, segi empat sama dan heksagon memenuhi 360 darjah, pentagon dan oktagon meninggalkan ruang kosong&quot;,&quot;mod&quot;:&quot;teselasi&quot;,&quot;poligon&quot;:[{&quot;n&quot;:3,&quot;nama&quot;:&quot;Segi tiga sama sisi&quot;},{&quot;n&quot;:4,&quot;nama&quot;:&quot;Segi empat sama&quot;},{&quot;n&quot;:5,&quot;nama&quot;:&quot;Pentagon sekata&quot;},{&quot;n&quot;:6,&quot;nama&quot;:&quot;Heksagon sekata&quot;},{&quot;n&quot;:8,&quot;nama&quot;:&quot;Oktagon sekata&quot;}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 222\" role=\"img\" aria-label=\"Segi tiga sama sisi: sudut pedalaman 60 darjah; membentuk teselasi\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Segi tiga sama sisi (3 sisi)</text><polygon points=\"130,92 168.1,92 149.1,125\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.5\"></polygon><polygon points=\"130,92 149.1,125 110.9,125\" fill=\"var(--teal-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.5\"></polygon><polygon points=\"130,92 110.9,125 91.9,92\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.5\"></polygon><polygon points=\"130,92 91.9,92 110.9,59\" fill=\"var(--teal-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.5\"></polygon><polygon points=\"130,92 110.9,59 149.1,59\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.5\"></polygon><polygon points=\"130,92 149.1,59 168.1,92\" fill=\"var(--teal-soft)\" stroke=\"var(--vena)\" stroke-width=\"1.5\"></polygon><circle cx=\"130\" cy=\"92\" r=\"3.5\" fill=\"var(--arteri)\"></circle><text x=\"8\" y=\"150\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Sudut pedalaman = (3 − 2) × 180° ÷ 3</text><text class=\"jmi-hasil\" x=\"8\" y=\"170\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">= 60°</text><text class=\"jmi-hasil\" x=\"8\" y=\"190\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">360° ÷ 60° = 6</text><text class=\"jmi-hasil\" x=\"8\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">Integer: membentuk teselasi</text></svg></div><figcaption>Rajah 1 · Poligon sekata yang bertemu pada satu bucu. Pilih poligon.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Bengkel Segi Tiga",
   "sk": "5.1.1 / 5.1.2 Bentuk kongruen dan syarat kekongruenan segi tiga",
   "lampiran": "r1",
   "kadNama": "Kongruen",
   "kadEm": "🧩",
   "kadFakta": "Bentuk kongruen mempunyai bentuk dan saiz yang sama. Sisi sepadan sama panjang dan sudut sepadan sama besar.",
   "bosKadNama": "Hasil Tambah 180°",
   "bosKadEm": "📐",
   "bosKadFakta": "Jika dua sudut segi tiga diketahui, sudut ketiga = 180° − hasil tambah dua sudut itu. Sebab itu ASA dan AAS setara.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dua bentuk adalah kongruen jika:",
     "p": [
      "Bentuk dan saiznya sama",
      "Bentuknya sama tetapi saiznya berbeza",
      "Luasnya sama tetapi bentuknya berbeza",
      "Perimeter kedua-duanya sama"
     ],
     "b": 0,
     "u": "Kongruen bermaksud tepat sama bentuk dan saiz. Bentuk yang sama tetapi berbeza saiz dikatakan serupa."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih SSS. Mengapakah segi tiga ABC dan PQR kongruen?",
     "p": [
      "Tiga pasang sudut sepadan sama besar",
      "Tiga pasang sisi sepadan sama panjang",
      "Kedua-duanya mempunyai satu sisi 7 unit",
      "Kedua-duanya berada di atas paksi-x"
     ],
     "b": 1,
     "u": "Syarat SSS: jika ketiga-tiga sisi sepadan sama panjang, segi tiga itu kongruen."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih SSS. Berapakah panjang sisi CA, betul kepada satu tempat perpuluhan?",
     "tol": 0.05000000005,
     "b": 5.4,
     "u": "CA = √(2² + 5²) = √29 = 5.39, iaitu 5.4 unit. Sisi sepadan RP juga 5.4 unit."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih AAA. Kesimpulan yang betul ialah:",
     "p": [
      "Segi tiga itu kongruen kerana semua sudutnya sama",
      "Segi tiga itu tidak serupa kerana saiznya berbeza",
      "Segi tiga itu serupa tetapi tidak semestinya kongruen",
      "Segi tiga itu kongruen kerana luasnya sama"
     ],
     "b": 2,
     "u": "Sudut yang sama hanya menentukan bentuk, bukan saiz. Segi tiga PQR ialah 0.7 kali ABC, jadi ia serupa tetapi tidak kongruen."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih SSA. Mengapakah SSA bukan syarat kekongruenan?",
     "p": [
      "Sudut yang ditanda terlalu kecil untuk dibandingkan",
      "Sisi BC lebih pendek daripada sisi AB",
      "Kedua-dua segi tiga mempunyai luas yang sama",
      "Dua segi tiga berbeza boleh dibina dengan ukuran yang sama"
     ],
     "b": 3,
     "u": "Dengan AB = 6, BC = 4 dan ∠A = 35°, titik C boleh berada pada dua kedudukan. Kedua-dua segi tiga itu berbeza bentuk dan luas."
    },
    {
     "j": "pilih",
     "t": "Dalam syarat SAS, sudut yang diberi mestilah:",
     "p": [
      "Sudut di antara dua sisi yang diberi",
      "Sudut terbesar dalam segi tiga itu",
      "Sudut yang bertentangan dengan sisi terpanjang",
      "Sebarang sudut dalam segi tiga itu"
     ],
     "b": 0,
     "u": "Dalam SAS, huruf A di tengah menunjukkan sudut yang diapit oleh dua sisi itu. Jika sudut itu tidak diapit, ia menjadi SSA."
    },
    {
     "j": "banyak",
     "t": "Pilih SEMUA syarat yang membuktikan dua segi tiga kongruen.",
     "p": [
      "SSS",
      "SAS",
      "ASA",
      "AAS",
      "AAA",
      "SSA"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "SSS, SAS, ASA dan AAS menentukan satu segi tiga yang unik. AAA hanya menentukan bentuk, dan SSA boleh memberi dua segi tiga berbeza."
    },
    {
     "j": "pilih",
     "t": "Segi tiga ABC dan PQR kongruen, dengan A sepadan dengan P dan B sepadan dengan Q. Jika AB = 7 cm, maka PQ ialah:",
     "p": [
      "5 cm",
      "7 cm",
      "14 cm",
      "3.5 cm"
     ],
     "b": 1,
     "u": "Sisi sepadan bagi segi tiga kongruen sama panjang. AB sepadan dengan PQ, jadi PQ = 7 cm."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Dalam Rajah 1, pilih ASA. Segi tiga ABC dan PQR kongruen. Berapakah saiz ∠R, dalam darjah, betul kepada integer terdekat?",
    "tol": 0.001000000001,
    "b": 67,
    "u": "Langkah 1: daripada Rajah 1, ∠A = 68° dan ∠B = 45°. Langkah 2: ∠C = 180° − 68° − 45° = 67°. Langkah 3: R sepadan dengan C, jadi ∠R = 67°."
   }
  },
  {
   "n": 2,
   "tempat": "Studio Besar",
   "sk": "5.2.1 – 5.2.3 Keserupaan, pembesaran, imej dan objek",
   "lampiran": "r2",
   "kadNama": "Faktor Skala",
   "kadEm": "🔍",
   "kadFakta": "Faktor skala k = PA′ ÷ PA. Jika k > 1 imej lebih besar, jika 0 < k < 1 imej lebih kecil, dan jika k < 0 imej terbalik pada sebelah bertentangan pusat.",
   "bosKadNama": "Cari k",
   "bosKadEm": "🎯",
   "bosKadFakta": "k = (jarak pusat ke imej) ÷ (jarak pusat ke objek), dengan arah: jika imej di sebelah bertentangan, k negatif.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dua objek geometri adalah serupa jika:",
     "p": [
      "Saiz dan bentuknya tepat sama",
      "Luas kedua-dua objek itu sama",
      "Sudut sepadan sama dan sisi sepadan berkadaran",
      "Perimeter kedua-dua objek itu sama"
     ],
     "b": 2,
     "u": "Objek serupa mempunyai bentuk yang sama: sudut sepadan sama, dan nisbah sisi sepadan malar. Pembesaran menghasilkan imej yang serupa dengan objek."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih k = 2. Koordinat A′ ialah:",
     "p": [
      "(4, 0)",
      "(3, 2)",
      "(5, 1)",
      "(3, 1)"
     ],
     "b": 3,
     "u": "A′ = P + 2(A − P) = (1, −1) + 2(1, 1) = (1 + 2, −1 + 2) = (3, 1)."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih k = −2. Berapakah koordinat-x bagi B′?",
     "tol": 0.001000000001,
     "b": -5,
     "u": "B − P = (4 − 1, 0 − (−1)) = (3, 1). B′ = (1, −1) + (−2)(3, 1) = (1 − 6, −1 − 2) = (−5, −3). Koordinat-x = −5."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih k = −1. Imej itu:",
     "p": [
      "Terbalik dan berada di sebelah bertentangan pusat P",
      "Dua kali lebih besar daripada objek",
      "Separuh saiz objek",
      "Sama arah dengan objek, di sebelah yang sama"
     ],
     "b": 0,
     "u": "k = −1: setiap titik imej berada pada jarak yang sama dari P tetapi pada arah bertentangan. Imej sama saiz tetapi terbalik."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih k = 1/2. Imej itu:",
     "p": [
      "Lebih besar daripada objek",
      "Lebih kecil daripada objek",
      "Sama saiz dengan objek",
      "Terbalik pada sebelah bertentangan pusat"
     ],
     "b": 1,
     "u": "Faktor skala pecahan antara 0 dan 1 menghasilkan imej yang lebih kecil, di sebelah yang sama dengan objek."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih k = 2. Berapakah nilai PA′ ÷ PA?",
     "tol": 0.001000000001,
     "b": 2,
     "u": "Faktor skala k = PA′ ÷ PA. Semak: PA = √2 dan PA′ = √8 = 2√2, jadi PA′ ÷ PA = 2."
    },
    {
     "j": "pilih",
     "t": "Perihalan lengkap suatu pembesaran mesti menyatakan:",
     "p": [
      "Faktor skala dan arah translasi",
      "Pusat dan sudut putaran",
      "Faktor skala dan pusat pembesaran",
      "Paksi pantulan dan faktor skala"
     ],
     "b": 2,
     "u": "Menurut DSKP, perihalan pembesaran yang lengkap melibatkan faktor skala dan pusat pembesaran, contohnya 'pembesaran pada pusat (−3, −1) dengan faktor skala 2'."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih k = −2. Berapakah panjang A′B′, dalam unit?",
     "tol": 0.001000000001,
     "b": 4,
     "u": "AB = 2 unit. Panjang imej = |k| × panjang objek = 2 × 2 = 4 unit. Tanda negatif tidak menjadikan panjang negatif."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Suatu pembesaran dengan pusat (1, −1) memetakan titik S(2, 1) kepada S′(5, 7). Berapakah faktor skala pembesaran itu?",
    "tol": 0.001000000001,
    "b": 4,
    "u": "Langkah 1: S − pusat = (2 − 1, 1 − (−1)) = (1, 2). Langkah 2: S′ − pusat = (4, 8). Langkah 3: (4, 8) = 4 × (1, 2), jadi k = 4."
   }
  },
  {
   "n": 3,
   "tempat": "Makmal Luas",
   "sk": "5.2.4 / 5.2.5 Hubungan luas imej dan luas objek",
   "lampiran": "r3",
   "kadNama": "Luas × k²",
   "kadEm": "📏",
   "kadFakta": "Luas imej = k² × luas objek. Faktor skala negatif tetap memberi k² positif.",
   "bosKadNama": "Poster Besar",
   "bosKadEm": "🖼️",
   "bosKadFakta": "Daripada nisbah luas, faktor skala k = √(luas imej ÷ luas objek).",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah luas objek ABCD, dalam unit²?",
     "tol": 0.001000000001,
     "b": 2,
     "u": "ABCD ialah segi empat tepat 2 unit × 1 unit, jadi luasnya 2 unit²."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih k = 2. Berapakah luas imej, dalam unit²?",
     "tol": 0.001000000001,
     "b": 8,
     "u": "Luas imej = k² × luas objek = 2² × 2 = 8 unit². Imej berukuran 4 × 2."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih k = −2. Berapakah luas imej, dalam unit²?",
     "tol": 0.001000000001,
     "b": 8,
     "u": "Luas imej = (−2)² × 2 = 4 × 2 = 8 unit². Tanda negatif hanya membalikkan imej."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih k = 1/2. Berapakah luas imej, dalam unit²?",
     "tol": 0.01000000001,
     "b": 0.5,
     "u": "Luas imej = (½)² × 2 = ¼ × 2 = 0.5 unit²."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan Rajah 1, apakah hubungan antara luas imej dan luas objek?",
     "p": [
      "Luas imej = k × luas objek",
      "Luas imej = 2k × luas objek",
      "Luas imej = luas objek + k",
      "Luas imej = k² × luas objek"
     ],
     "b": 3,
     "u": "Panjang dan lebar masing-masing didarab k, jadi luas didarab k × k = k². Semak: k = 2 memberi 8 = 4 × 2."
    },
    {
     "j": "nombor",
     "t": "Luas suatu objek ialah 12 cm². Objek itu mengalami pembesaran dengan faktor skala −3. Berapakah luas imej, dalam cm²?",
     "tol": 0.001000000001,
     "b": 108,
     "u": "Luas imej = (−3)² × 12 = 9 × 12 = 108 cm²."
    },
    {
     "j": "nombor",
     "t": "Luas imej suatu pembesaran ialah 50 cm² dan luas objeknya 8 cm². Berapakah faktor skala positif?",
     "tol": 0.01000000001,
     "b": 2.5,
     "u": "k² = 50 ÷ 8 = 6.25, jadi k = √6.25 = 2.5."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih k = −1/2. Koordinat C′ ialah:",
     "p": [
      "(−1.5, −1)",
      "(1.5, 1)",
      "(−6, −4)",
      "(−3, −2)"
     ],
     "b": 0,
     "u": "C(3, 2). C′ = −½ × (3, 2) = (−1.5, −1)."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Sebuah poster berbentuk segi empat tepat berukuran 20 cm × 30 cm dibesarkan dengan faktor skala k. Luas poster baharu ialah 5 400 cm². Cari nilai k.",
    "tol": 0.001000000001,
    "b": 3,
    "u": "Langkah 1: luas objek = 20 × 30 = 600 cm². Langkah 2: k² = 5 400 ÷ 600 = 9. Langkah 3: k = 3 (faktor skala positif bagi poster)."
   }
  },
  {
   "n": 4,
   "tempat": "Jalan Transformasi",
   "sk": "5.3.1 / 5.3.2 Imej gabungan transformasi dan kalis tukar tertib",
   "lampiran": "r4",
   "kadNama": "Tertib Gabungan",
   "kadEm": "🔄",
   "kadFakta": "Gabungan AB bermaksud transformasi B dilakukan dahulu, kemudian A. Secara umum AB ≠ BA.",
   "bosKadNama": "Isometri",
   "bosKadEm": "📏",
   "bosKadFakta": "Translasi, pantulan dan putaran ialah isometri: bentuk dan saiz tidak berubah, jadi gabungannya juga mengekalkan luas.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih T. Koordinat imej P′ ialah:",
     "p": [
      "(3, −1)",
      "(−1, 3)",
      "(−1, 1)",
      "(1, 3)"
     ],
     "b": 1,
     "u": "Translasi (−2, 2): P(1, 1) → (1 − 2, 1 + 2) = (−1, 3)."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih M. Koordinat imej P′ ialah:",
     "p": [
      "(1, −1)",
      "(−1, −1)",
      "(−1, 1)",
      "(1, 1)"
     ],
     "b": 2,
     "u": "Pantulan pada paksi-y menukar tanda koordinat-x: P(1, 1) → (−1, 1)."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, gabungan TM bermaksud:",
     "p": [
      "T dahulu, kemudian M",
      "T dan M dilakukan serentak",
      "T diulang dua kali",
      "M dahulu, kemudian T"
     ],
     "b": 3,
     "u": "Gabungan dibaca dari kanan ke kiri: TM bermaksud transformasi M dahulu, diikuti T."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, koordinat imej P″ di bawah gabungan TM ialah:",
     "p": [
      "(−3, 3)",
      "(1, 3)",
      "(−1, 3)",
      "(3, 3)"
     ],
     "b": 0,
     "u": "M dahulu: P(1, 1) → (−1, 1). Kemudian T: (−1 − 2, 1 + 2) = (−3, 3)."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, koordinat imej P″ di bawah gabungan MT ialah:",
     "p": [
      "(−3, 3)",
      "(1, 3)",
      "(−1, 3)",
      "(1, −3)"
     ],
     "b": 1,
     "u": "T dahulu: P(1, 1) → (−1, 3). Kemudian M: (1, 3)."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan Rajah 1, apakah kesimpulan tentang gabungan T dan M?",
     "p": [
      "TM = MT, jadi gabungan ini kalis tukar tertib",
      "TM = MT kerana kedua-duanya isometri",
      "TM ≠ MT, jadi gabungan ini tidak kalis tukar tertib",
      "Translasi menjadikan setiap gabungan kalis tukar tertib"
     ],
     "b": 2,
     "u": "TM memetakan P kepada (−3, 3) tetapi MT memetakan P kepada (1, 3). Imej berbeza, jadi tertib transformasi penting."
    },
    {
     "j": "pilih",
     "t": "Titik (2, 5) dipantulkan pada paksi-x, kemudian ditranslasikan oleh (−2, 2). Imejnya ialah:",
     "p": [
      "(0, 7)",
      "(4, −3)",
      "(−2, 3)",
      "(0, −3)"
     ],
     "b": 3,
     "u": "Pantulan pada paksi-x: (2, 5) → (2, −5). Translasi (−2, 2): (0, −3)."
    },
    {
     "j": "pilih",
     "t": "Dengan T dan M seperti dalam Rajah 1, imej suatu titik di bawah gabungan TM ialah (−3, 4). Titik asalnya ialah:",
     "p": [
      "(1, 2)",
      "(−1, 2)",
      "(−5, 6)",
      "(5, 2)"
     ],
     "b": 0,
     "u": "Songsangkan langkah: batalkan T dahulu, (−3 + 2, 4 − 2) = (−1, 2). Kemudian batalkan M: (1, 2). Semak: M(1, 2) = (−1, 2), T: (−3, 4)."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Dalam Rajah 1, gabungan MT dilakukan ke atas segi tiga PQR. Berapakah luas imej P″Q″R″, dalam unit²?",
    "tol": 0.001000000001,
    "b": 1,
    "u": "Langkah 1: luas PQR = ½ × 2 × 1 = 1 unit². Langkah 2: T dan M ialah isometri, jadi saiz tidak berubah. Luas imej = 1 unit²."
   }
  },
  {
   "n": 5,
   "tempat": "Bilik Kawalan",
   "sk": "5.3.3 / 5.3.4 Memerihalkan gabungan dan transformasi tunggal yang setara",
   "lampiran": "r5",
   "kadNama": "Pusat Sama",
   "kadEm": "🎯",
   "kadFakta": "Putaran dan pembesaran pada pusat yang sama adalah kalis tukar tertib: RV = VR.",
   "bosKadNama": "Gabungan Berbilang",
   "bosKadEm": "🧭",
   "bosKadFakta": "Bagi gabungan, laksanakan transformasi mengikut tertib dan catat imej perantaraan pada setiap langkah.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih RV. Koordinat P″ ialah:",
     "p": [
      "(−2, 2)",
      "(2, −2)",
      "(2, 2)",
      "(1, −1)"
     ],
     "b": 1,
     "u": "V dahulu: P(1, 1) → (2, 2). Kemudian R (90° ikut arah jam pada O, (x, y) → (y, −x)): (2, −2)."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih VR. Koordinat P″ ialah:",
     "p": [
      "(−2, −2)",
      "(1, −1)",
      "(2, −2)",
      "(−2, 2)"
     ],
     "b": 2,
     "u": "R dahulu: P(1, 1) → (1, −1). Kemudian V: 2 × (1, −1) = (2, −2)."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan Rajah 1, konjektur yang sesuai ialah:",
     "p": [
      "Setiap gabungan dua transformasi adalah kalis tukar tertib",
      "Putaran dan pembesaran pada pusat yang sama memberi imej berbeza",
      "Gabungan putaran dan pembesaran mengubah bentuk objek",
      "Putaran dan pembesaran pada pusat yang sama adalah kalis tukar tertib"
     ],
     "b": 3,
     "u": "RV dan VR memberi imej yang sama bagi setiap titik. Tetapi bukan semua gabungan kalis tukar tertib, seperti TM dan MT."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, luas objek PQR ialah 1 unit². Berapakah luas imej di bawah gabungan RV, dalam unit²?",
     "tol": 0.001000000001,
     "b": 4,
     "u": "R ialah isometri, jadi luas tidak berubah. V (k = 2) mendarab luas dengan 2² = 4. Luas imej = 4 unit²."
    },
    {
     "j": "pilih",
     "t": "Gabungan translasi (3, 1) diikuti translasi (−5, 2) setara dengan satu transformasi tunggal, iaitu:",
     "p": [
      "Translasi (−2, 3)",
      "Translasi (8, −1) diikuti pantulan",
      "Putaran 180° pada asalan",
      "Pantulan pada paksi-y"
     ],
     "b": 0,
     "u": "Tambah kedua-dua vektor: (3 + (−5), 1 + 2) = (−2, 3)."
    },
    {
     "j": "pilih",
     "t": "Pantulan pada paksi-x diikuti pantulan pada paksi-y setara dengan:",
     "p": [
      "Translasi (0, 0)",
      "Putaran 180° pada asalan",
      "Pantulan pada garis y = x",
      "Putaran 90° ikut arah jam pada asalan"
     ],
     "b": 1,
     "u": "(x, y) → (x, −y) → (−x, −y). Ini sama dengan putaran 180° pada asalan."
    },
    {
     "j": "nombor",
     "t": "Titik K(4, −2) mengalami pembesaran pada asalan dengan faktor skala −½, diikuti translasi (3, 5). Cari koordinat-y bagi imej akhir.",
     "tol": 0.001000000001,
     "b": 6,
     "u": "Pembesaran: −½ × (4, −2) = (−2, 1). Translasi (3, 5): (1, 6). Koordinat-y = 6."
    },
    {
     "j": "pilih",
     "t": "Di bawah gabungan VR dalam Rajah 1, panjang setiap sisi imej berbanding sisi objek ialah:",
     "p": [
      "Sama panjang dengan sisi objek",
      "Empat kali panjang sisi objek",
      "Dua kali panjang sisi objek",
      "Separuh panjang sisi objek"
     ],
     "b": 2,
     "u": "Putaran tidak mengubah panjang. Pembesaran k = 2 mendarab panjang dengan 2 (dan luas dengan 4)."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Titik (2, 1) mengalami putaran 90° lawan arah jam pada asalan, diikuti pembesaran pada asalan dengan faktor skala 3. Imej akhirnya ialah:",
    "p": [
     "(3, −6)",
     "(6, 3)",
     "(−6, 3)",
     "(−3, 6)"
    ],
    "b": 3,
    "u": "Langkah 1: putaran 90° lawan arah jam, (x, y) → (−y, x): (2, 1) → (−1, 2). Langkah 2: pembesaran k = 3: (−3, 6)."
   }
  },
  {
   "n": 6,
   "tempat": "Studio Teselasi",
   "sk": "5.4.1 / 5.4.2 Teselasi dan reka bentuk jenis Escher",
   "lampiran": "r6",
   "kadNama": "Teselasi",
   "kadEm": "🔷",
   "kadFakta": "Teselasi ialah pola bentuk berulang yang memenuhi satah tanpa ruang kosong atau pertindihan. Sudut pada setiap bucu berjumlah 360°.",
   "bosKadNama": "Gaya Escher",
   "bosKadEm": "🎨",
   "bosKadFakta": "Teselasi jenis Escher bermula dengan bentuk asas; bahagian yang dipotong dari satu sisi ditambah pada sisi lain melalui translasi atau putaran.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Menurut DSKP, teselasi ialah:",
     "p": [
      "Pola bentuk berulang yang memenuhi satah tanpa ruang kosong atau pertindihan",
      "Satu bentuk yang diputar 360° pada pusatnya",
      "Corak yang mempunyai sekurang-kurangnya satu paksi simetri",
      "Gabungan dua transformasi yang kalis tukar tertib"
     ],
     "b": 0,
     "u": "Teselasi memenuhi satah sepenuhnya: tiada ruang kosong dan tiada bentuk yang bertindih."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih heksagon sekata. Berapakah sudut pedalamannya, dalam darjah?",
     "tol": 0.001000000001,
     "b": 120,
     "u": "Sudut pedalaman = (6 − 2) × 180° ÷ 6 = 720° ÷ 6 = 120°."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih heksagon sekata. Berapakah bilangan heksagon yang bertemu pada satu bucu?",
     "tol": 0.001000000001,
     "b": 3,
     "u": "360° ÷ 120° = 3. Tiga heksagon memenuhi satu bucu tepat, seperti sarang lebah."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih pentagon sekata. Mengapakah pentagon sekata tidak membentuk teselasi sendirian?",
     "p": [
      "Pentagon mempunyai bilangan sisi ganjil",
      "360° ÷ 108° bukan integer",
      "Sudut pedalaman pentagon terlalu kecil",
      "Pentagon tidak mempunyai simetri putaran"
     ],
     "b": 1,
     "u": "Sudut pedalaman pentagon sekata ialah 108°. 360 ÷ 108 = 3.33, jadi tiga pentagon meninggalkan ruang 36° dan empat pentagon bertindih. Segi tiga sama sisi juga bersisi ganjil tetapi membentuk teselasi."
    },
    {
     "j": "banyak",
     "t": "Dalam Rajah 1, pilih SEMUA poligon sekata yang boleh membentuk teselasi sendirian.",
     "p": [
      "Segi tiga sama sisi",
      "Segi empat sama",
      "Pentagon sekata",
      "Heksagon sekata",
      "Oktagon sekata"
     ],
     "b": [
      0,
      1,
      3
     ],
     "u": "360 ÷ 60 = 6, 360 ÷ 90 = 4 dan 360 ÷ 120 = 3 ialah integer. Bagi pentagon (108°) dan oktagon (135°), hasilnya bukan integer."
    },
    {
     "j": "nombor",
     "t": "Oktagon sekata dan segi empat sama boleh bergabung membentuk teselasi. Pada setiap bucu bertemu dua oktagon dan satu segi empat sama. Hitung jumlah sudut pada bucu itu, dalam darjah.",
     "tol": 0.001000000001,
     "b": 360,
     "u": "Sudut pedalaman oktagon = (8 − 2) × 180° ÷ 8 = 135°. Jumlah = 2 × 135° + 90° = 360°, jadi tiada ruang kosong."
    },
    {
     "j": "pilih",
     "t": "Teselasi jenis Escher dihasilkan dengan:",
     "p": [
      "Membesarkan bentuk asas dengan faktor skala 2 berulang kali",
      "Melukis bentuk secara rawak tanpa sebarang corak",
      "Mengubah suai sisi bentuk asas dan menggunakan transformasi isometri",
      "Menyusun bulatan yang bertindih antara satu sama lain"
     ],
     "b": 2,
     "u": "Escher memotong bahagian satu sisi bentuk asas dan menambahnya pada sisi bertentangan melalui translasi atau putaran, jadi bentuk baharu masih memenuhi satah."
    },
    {
     "j": "pilih",
     "t": "Antara berikut, yang manakah contoh teselasi dalam kehidupan sebenar?",
     "p": [
      "Awan yang berarak di langit",
      "Riak air yang tersebar di kolam",
      "Daun pokok getah yang gugur",
      "Jubin lantai dan sarang lebah"
     ],
     "b": 3,
     "u": "Jubin lantai dan sarang lebah ialah bentuk berulang yang memenuhi permukaan tanpa ruang kosong."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Reka satu teselasi jenis Escher dan terangkan langkah-langkah penghasilannya.",
    "arahan": "Mulakan dengan satu bentuk asas yang membentuk teselasi (contohnya segi empat sama atau heksagon sekata) dan buktikan dengan sudut pada bucu bahawa ia memenuhi 360°. Ubah suai sisi bentuk asas dan terangkan transformasi isometri yang digunakan (translasi, pantulan atau putaran) beserta perihalannya yang lengkap. Huraikan sekurang-kurangnya tiga langkah untuk menghasilkan teselasi itu dan cadangkan satu tempat sebenar untuk menggunakannya.",
    "u": "Jawapan TP6 yang kukuh memilih bentuk asas yang sah dengan bukti sudut 360°, menghuraikan pengubahsuaian dengan transformasi isometri yang diperihalkan secara lengkap, memberi langkah yang tersusun, dan mencadangkan kegunaan yang kreatif."
   }
  }
 ]
};
