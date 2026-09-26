/* Bank soalan — Matematik Ting. 2 · Bab 13 Kebarangkalian Mudah.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m2b13.js
   kemudian jalankan: node bina.js m2b13

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m2b13"] =
{
 "id": "m2b13",
 "tingkatan": 2,
 "kod": "13.0 Kebarangkalian Mudah",
 "tajuk": "Dunia Peluang",
 "subtajuk": "Matematik Ting. 2 · Bab 13 Kebarangkalian Mudah",
 "spi": [
  "Mempamerkan pengetahuan asas tentang ruang sampel dan peristiwa.",
  "Mempamerkan kefahaman tentang hubungan antara ruang sampel dan peristiwa dengan kebarangkalian mudah.",
  "Mengaplikasikan kefahaman tentang kebarangkalian mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kebarangkalian mudah dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kebarangkalian mudah dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang kebarangkalian mudah dalam konteks penyelesaian masalah bukan rutin secara kreatif."
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
  "1": "{n} dapat mengenal ruang sampel dan peristiwa bagi eksperimen mudah seperti dadu dan syiling. Langkah seterusnya ialah menggunakan gambar rajah pokok dan menghubungkan peristiwa dengan kebarangkalian.",
  "2": "{n} memahami hubungan antara ruang sampel, peristiwa dan kebarangkalian mudah, termasuk menggunakan gambar rajah pokok. Perlu lebih latihan mengira n(A) dan n(S) sebelum bergerak ke TP3.",
  "3": "{n} boleh menjalankan eksperimen, mengira kekerapan relatif, dan membuat kesimpulan bahawa nilai itu menghampiri kebarangkalian teori apabila cubaan besar. Boleh mula menyelesaikan masalah yang lebih rumit.",
  "4": "{n} mampu menggunakan P(A) = n(A) ÷ n(S) untuk menyelesaikan masalah rutin yang mudah dengan kesudahan yang sama mungkin. Seterusnya latih masalah pelengkap.",
  "5": "{n} dapat menyelesaikan masalah rutin yang kompleks melibatkan peristiwa pelengkap, dengan P(A') = 1 − P(A). Sudah bersedia untuk masalah bukan rutin dan reka cipta.",
  "6": "{n} berjaya mereka permainan yang adil dan menerangkan pilihannya dengan kebarangkalian, malah menyemaknya dengan eksperimen. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kebarangkalian Mudah. Cadangan: ulang hentian pertama menggunakan Rajah 1 dan senaraikan ruang sampel serta peristiwa dengan bimbingan rakan sebaya."
 },
 "lampiran": {
  "keb1": "<figure class=\"figure jmi\" data-w=\"t2keb\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2keb&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Ruang sampel bagi membaling sebiji dadu. Pilih peristiwa A dan lihat kesudahan yang terlibat.&quot;,&quot;alt&quot;:&quot;Rajah interaktif ruang sampel enam kesudahan dadu; gelongsor memilih peristiwa A dan menyerlahkan kesudahan dalam A&quot;,&quot;mod&quot;:&quot;ruang&quot;,&quot;tajuk&quot;:&quot;baling sebiji dadu&quot;,&quot;S&quot;:[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;,&quot;4&quot;,&quot;5&quot;,&quot;6&quot;],&quot;acara&quot;:[{&quot;nama&quot;:&quot;nombor genap&quot;,&quot;idx&quot;:[1,3,5]},{&quot;nama&quot;:&quot;nombor perdana&quot;,&quot;idx&quot;:[1,2,4]},{&quot;nama&quot;:&quot;lebih daripada 4&quot;,&quot;idx&quot;:[4,5]},{&quot;nama&quot;:&quot;gandaan 3&quot;,&quot;idx&quot;:[2,5]},{&quot;nama&quot;:&quot;nombor 7&quot;,&quot;idx&quot;:[]},{&quot;nama&quot;:&quot;kurang daripada 7&quot;,&quot;idx&quot;:[0,1,2,3,4,5]}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 147\" role=\"img\" aria-label=\"Rajah ruang sampel eksperimen baling sebiji dadu dengan 6 kesudahan; peristiwa nombor genap ada 3 kesudahan, P(A) = 1/2\"><text x=\"10\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Eksperimen: baling sebiji dadu</text><text x=\"10\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Ruang sampel S, n(S) = 6</text><rect x=\"15\" y=\"46\" width=\"35\" height=\"26\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><rect x=\"54\" y=\"46\" width=\"35\" height=\"26\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><rect x=\"93\" y=\"46\" width=\"35\" height=\"26\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><rect x=\"132\" y=\"46\" width=\"35\" height=\"26\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><rect x=\"171\" y=\"46\" width=\"35\" height=\"26\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><rect x=\"210\" y=\"46\" width=\"35\" height=\"26\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><g class=\"jmi-hasil\"><rect x=\"54\" y=\"46\" width=\"35\" height=\"26\" rx=\"4\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></rect><rect x=\"132\" y=\"46\" width=\"35\" height=\"26\" rx=\"4\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></rect><rect x=\"210\" y=\"46\" width=\"35\" height=\"26\" rx=\"4\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></rect></g><text x=\"32.5\" y=\"63\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">1</text><text x=\"71.5\" y=\"63\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><text x=\"110.5\" y=\"63\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">3</text><text x=\"149.5\" y=\"63\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">4</text><text x=\"188.5\" y=\"63\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">5</text><text x=\"227.5\" y=\"63\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">6</text><text x=\"10\" y=\"92\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">Peristiwa A: nombor genap</text><text class=\"jmi-hasil\" x=\"10\" y=\"108\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" font-weight=\"700\">A = {2, 4, 6}</text><text class=\"jmi-hasil\" x=\"10\" y=\"123\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">n(A) = 3   n(S) = 6</text><text class=\"jmi-hasil\" x=\"10\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">P(A) = 3/6 = 1/2</text></svg></div><figcaption>Rajah 1 · Ruang sampel bagi membaling sebiji dadu. Pilih peristiwa A dan lihat kesudahan yang terlibat.</figcaption></figure>",
  "keb2": "<figure class=\"figure jmi\" data-w=\"t2keb\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2keb&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Gambar rajah pokok bagi sebiji syiling dan pemutar 1, 2, 3. Pilih peristiwa A.&quot;,&quot;alt&quot;:&quot;Rajah pokok interaktif bagi membaling syiling kemudian memutar pemutar bernombor 1, 2 dan 3, dengan enam kesudahan; gelongsor memilih peristiwa A&quot;,&quot;mod&quot;:&quot;pokok&quot;,&quot;tajuk&quot;:&quot;syiling dan pemutar&quot;,&quot;peringkat&quot;:[[&quot;K&quot;,&quot;E&quot;],[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;]],&quot;acara&quot;:[{&quot;nama&quot;:&quot;kepala&quot;,&quot;idx&quot;:[0,1,2]},{&quot;nama&quot;:&quot;ekor dan ganjil&quot;,&quot;idx&quot;:[3,5]},{&quot;nama&quot;:&quot;nombor 2&quot;,&quot;idx&quot;:[1,4]},{&quot;nama&quot;:&quot;kepala dan 3&quot;,&quot;idx&quot;:[2]},{&quot;nama&quot;:&quot;nombor ganjil&quot;,&quot;idx&quot;:[0,2,3,5]}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 212\" role=\"img\" aria-label=\"Rajah pokok eksperimen syiling dan pemutar dengan 6 kesudahan; peristiwa kepala ada 3 kesudahan, P(A) = 1/2\"><text x=\"10\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Rajah pokok: syiling dan pemutar</text><line x1=\"14\" y1=\"80\" x2=\"60\" y2=\"56\" stroke=\"var(--line2)\" stroke-width=\"1.4\"></line><line x1=\"14\" y1=\"80\" x2=\"60\" y2=\"104\" stroke=\"var(--line2)\" stroke-width=\"1.4\"></line><line x1=\"60\" y1=\"56\" x2=\"106\" y2=\"40\" stroke=\"var(--line2)\" stroke-width=\"1.4\"></line><line x1=\"60\" y1=\"56\" x2=\"106\" y2=\"56\" stroke=\"var(--line2)\" stroke-width=\"1.4\"></line><line x1=\"60\" y1=\"56\" x2=\"106\" y2=\"72\" stroke=\"var(--line2)\" stroke-width=\"1.4\"></line><line x1=\"60\" y1=\"104\" x2=\"106\" y2=\"88\" stroke=\"var(--line2)\" stroke-width=\"1.4\"></line><line x1=\"60\" y1=\"104\" x2=\"106\" y2=\"104\" stroke=\"var(--line2)\" stroke-width=\"1.4\"></line><line x1=\"60\" y1=\"104\" x2=\"106\" y2=\"120\" stroke=\"var(--line2)\" stroke-width=\"1.4\"></line><g class=\"jmi-hasil\"><line x1=\"14\" y1=\"80\" x2=\"60\" y2=\"56\" stroke=\"var(--teal)\" stroke-width=\"3\"></line><line x1=\"60\" y1=\"56\" x2=\"106\" y2=\"40\" stroke=\"var(--teal)\" stroke-width=\"3\"></line><rect x=\"116\" y=\"32\" width=\"23\" height=\"16\" rx=\"3\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\"></rect><line x1=\"14\" y1=\"80\" x2=\"60\" y2=\"56\" stroke=\"var(--teal)\" stroke-width=\"3\"></line><line x1=\"60\" y1=\"56\" x2=\"106\" y2=\"56\" stroke=\"var(--teal)\" stroke-width=\"3\"></line><rect x=\"116\" y=\"48\" width=\"23\" height=\"16\" rx=\"3\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\"></rect><line x1=\"14\" y1=\"80\" x2=\"60\" y2=\"56\" stroke=\"var(--teal)\" stroke-width=\"3\"></line><line x1=\"60\" y1=\"56\" x2=\"106\" y2=\"72\" stroke=\"var(--teal)\" stroke-width=\"3\"></line><rect x=\"116\" y=\"64\" width=\"23\" height=\"16\" rx=\"3\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.4\"></rect></g><circle cx=\"14\" cy=\"80\" r=\"4\" fill=\"var(--ink3)\" stroke=\"none\"></circle><circle cx=\"60\" cy=\"56\" r=\"7.5\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><text x=\"60\" y=\"60\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">K</text><circle cx=\"60\" cy=\"104\" r=\"7.5\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><text x=\"60\" y=\"108\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">E</text><circle cx=\"106\" cy=\"40\" r=\"7.5\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><text x=\"106\" y=\"44\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">1</text><circle cx=\"106\" cy=\"56\" r=\"7.5\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><text x=\"106\" y=\"60\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><circle cx=\"106\" cy=\"72\" r=\"7.5\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><text x=\"106\" y=\"76\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">3</text><circle cx=\"106\" cy=\"88\" r=\"7.5\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><text x=\"106\" y=\"92\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">1</text><circle cx=\"106\" cy=\"104\" r=\"7.5\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><text x=\"106\" y=\"108\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><circle cx=\"106\" cy=\"120\" r=\"7.5\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.3\"></circle><text x=\"106\" y=\"124\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">3</text><text x=\"120\" y=\"44\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">K1</text><text x=\"120\" y=\"60\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">K2</text><text x=\"120\" y=\"76\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">K3</text><text x=\"120\" y=\"92\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">E1</text><text x=\"120\" y=\"108\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">E2</text><text x=\"120\" y=\"124\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">E3</text><text x=\"10\" y=\"150\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">Peristiwa A: kepala</text><text class=\"jmi-hasil\" x=\"10\" y=\"166\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" font-weight=\"700\">A = {K1, K2, K3}</text><text class=\"jmi-hasil\" x=\"10\" y=\"181\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">n(A) = 3   n(S) = 6</text><text class=\"jmi-hasil\" x=\"10\" y=\"198\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">P(A) = 3/6 = 1/2</text></svg></div><figcaption>Rajah 1 · Gambar rajah pokok bagi sebiji syiling dan pemutar 1, 2, 3. Pilih peristiwa A.</figcaption></figure>",
  "keb3": "<figure class=\"figure jmi\" data-w=\"t2keb\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2keb&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Baling dadu berulang kali. Ubah bilangan cubaan dan larian, dan perhatikan kekerapan relatif.&quot;,&quot;alt&quot;:&quot;Rajah interaktif eksperimen membaling dadu untuk peristiwa nombor genap; gelongsor menukar bilangan cubaan dan larian, dan kekerapan relatif dibandingkan dengan kebarangkalian teori 0.5&quot;,&quot;mod&quot;:&quot;eksperimen&quot;,&quot;eks&quot;:&quot;dadu&quot;,&quot;idx&quot;:[1,3,5],&quot;namaP&quot;:&quot;nombor genap&quot;,&quot;langkah&quot;:[10,20,50,100,200,500,1000],&quot;benih&quot;:[11,22,33]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 262\" role=\"img\" aria-label=\"Rajah baling dadu sebanyak 50 kali untuk peristiwa nombor genap; kekerapan relatif 0.52, kebarangkalian teori 0.5\"><text x=\"10\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Baling dadu</text><text x=\"10\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Peristiwa: nombor genap</text><rect x=\"40\" y=\"58\" width=\"198\" height=\"90\" rx=\"2\" fill=\"none\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"34\" y=\"62\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">1</text><text x=\"34\" y=\"107\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0.5</text><text x=\"34\" y=\"152\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">0</text><line x1=\"40\" y1=\"103\" x2=\"238\" y2=\"103\" stroke=\"var(--line)\" stroke-width=\"1\"></line><text x=\"40\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">10</text><text x=\"73\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">20</text><text x=\"106\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">50</text><text x=\"139\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">100</text><text x=\"172\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">200</text><text x=\"205\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">500</text><text x=\"238\" y=\"164\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">1000</text><text x=\"238\" y=\"180\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"end\">bilangan cubaan</text><g class=\"jmi-hasil\"><line x1=\"40\" y1=\"103\" x2=\"238\" y2=\"103\" stroke=\"var(--arteri)\" stroke-width=\"1.6\" stroke-dasharray=\"5 3\"></line><path d=\"M40 76 L73 98.5 L106 101.2\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><circle cx=\"40\" cy=\"76\" r=\"3\" fill=\"var(--surface)\" stroke=\"var(--vena)\" stroke-width=\"1.8\"></circle><circle cx=\"73\" cy=\"98.5\" r=\"3\" fill=\"var(--surface)\" stroke=\"var(--vena)\" stroke-width=\"1.8\"></circle><circle cx=\"106\" cy=\"101.2\" r=\"4.5\" fill=\"var(--vena)\" stroke=\"var(--vena)\" stroke-width=\"1.8\"></circle></g><text x=\"10\" y=\"198\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Cubaan = 50</text><text class=\"jmi-hasil\" x=\"130\" y=\"198\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">Kejadian = 26</text><text class=\"jmi-hasil\" x=\"10\" y=\"216\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Kekerapan relatif: 26/50 = 0.52</text><text class=\"jmi-hasil\" x=\"10\" y=\"234\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">P(teori) = 3/6 = 1/2 = 0.5</text><text x=\"10\" y=\"252\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Terakhir: 4 4 6 1 6 5 3 1 1 6 3 4</text></svg></div><figcaption>Rajah 1 · Baling dadu berulang kali. Ubah bilangan cubaan dan larian, dan perhatikan kekerapan relatif.</figcaption></figure>",
  "keb4": "<figure class=\"figure jmi cabar\" data-w=\"t2keb\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2keb&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Pemutar 8 sektor sama besar. Bayangkan dahulu berapa sektor dalam A, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif ruang sampel pemutar lapan sektor bernombor 1 hingga 8; gelongsor memilih peristiwa A&quot;,&quot;mod&quot;:&quot;ruang&quot;,&quot;cabar&quot;:true,&quot;tajuk&quot;:&quot;putar pemutar 8 sektor&quot;,&quot;S&quot;:[&quot;1&quot;,&quot;2&quot;,&quot;3&quot;,&quot;4&quot;,&quot;5&quot;,&quot;6&quot;,&quot;7&quot;,&quot;8&quot;],&quot;lajur&quot;:8,&quot;acara&quot;:[{&quot;nama&quot;:&quot;nombor perdana&quot;,&quot;idx&quot;:[1,2,4,6]},{&quot;nama&quot;:&quot;gandaan 4&quot;,&quot;idx&quot;:[3,7]},{&quot;nama&quot;:&quot;faktor bagi 12&quot;,&quot;idx&quot;:[0,1,2,3,5]},{&quot;nama&quot;:&quot;lebih daripada 5&quot;,&quot;idx&quot;:[5,6,7]},{&quot;nama&quot;:&quot;genap dan lebih 3&quot;,&quot;idx&quot;:[3,5,7]}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 147\" role=\"img\" aria-label=\"Rajah ruang sampel eksperimen putar pemutar 8 sektor dengan 8 kesudahan; peristiwa nombor perdana ada 4 kesudahan, P(A) = 1/2\"><text x=\"10\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Eksperimen: putar pemutar 8 sektor</text><text x=\"10\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Ruang sampel S, n(S) = 8</text><rect x=\"16\" y=\"46\" width=\"25\" height=\"26\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><rect x=\"45\" y=\"46\" width=\"25\" height=\"26\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><rect x=\"74\" y=\"46\" width=\"25\" height=\"26\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><rect x=\"103\" y=\"46\" width=\"25\" height=\"26\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><rect x=\"132\" y=\"46\" width=\"25\" height=\"26\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><rect x=\"161\" y=\"46\" width=\"25\" height=\"26\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><rect x=\"190\" y=\"46\" width=\"25\" height=\"26\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><rect x=\"219\" y=\"46\" width=\"25\" height=\"26\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line2)\" stroke-width=\"1.2\"></rect><g class=\"jmi-hasil\"><rect x=\"45\" y=\"46\" width=\"25\" height=\"26\" rx=\"4\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></rect><rect x=\"74\" y=\"46\" width=\"25\" height=\"26\" rx=\"4\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></rect><rect x=\"132\" y=\"46\" width=\"25\" height=\"26\" rx=\"4\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></rect><rect x=\"190\" y=\"46\" width=\"25\" height=\"26\" rx=\"4\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"2.2\"></rect></g><text x=\"28.5\" y=\"63\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">1</text><text x=\"57.5\" y=\"63\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">2</text><text x=\"86.5\" y=\"63\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">3</text><text x=\"115.5\" y=\"63\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">4</text><text x=\"144.5\" y=\"63\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">5</text><text x=\"173.5\" y=\"63\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">6</text><text x=\"202.5\" y=\"63\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">7</text><text x=\"231.5\" y=\"63\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">8</text><text x=\"10\" y=\"92\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">Peristiwa A: nombor perdana</text><text class=\"jmi-hasil\" x=\"10\" y=\"108\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" font-weight=\"700\">A = {2, 3, 5, 7}</text><text class=\"jmi-hasil\" x=\"10\" y=\"123\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">n(A) = 4   n(S) = 8</text><text class=\"jmi-hasil\" x=\"10\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">P(A) = 4/8 = 1/2</text></svg></div><figcaption>Rajah 1 · Pemutar 8 sektor sama besar. Bayangkan dahulu berapa sektor dalam A, kemudian semak dengan rajah.</figcaption></figure>",
  "keb5": "<figure class=\"figure jmi cabar\" data-w=\"t2keb\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2keb&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Beg 10 guli: 5 merah, 3 hijau, 2 kuning. Kira dahulu, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif beg sepuluh guli berwarna merah, hijau dan kuning; gelongsor memilih peristiwa A dan menunjukkan peristiwa pelengkap A'&quot;,&quot;mod&quot;:&quot;pelengkap&quot;,&quot;cabar&quot;:true,&quot;beg&quot;:[{&quot;n&quot;:5,&quot;w&quot;:&quot;merah&quot;},{&quot;n&quot;:3,&quot;w&quot;:&quot;hijau&quot;},{&quot;n&quot;:2,&quot;w&quot;:&quot;kuning&quot;}],&quot;pilihan&quot;:[[0],[1],[2],[0,1],[1,2],[0,2]]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 222\" role=\"img\" aria-label=\"Rajah beg 10 guli; peristiwa merah ada 5 guli, kebarangkalian pelengkap ialah 1/2\"><text x=\"10\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Beg guli: 10 biji</text><circle cx=\"24\" cy=\"44\" r=\"10\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1.8\"></circle><circle cx=\"47.5\" cy=\"44\" r=\"10\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1.8\"></circle><circle cx=\"71\" cy=\"44\" r=\"10\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1.8\"></circle><circle cx=\"94.5\" cy=\"44\" r=\"10\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1.8\"></circle><circle cx=\"118\" cy=\"44\" r=\"10\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1.8\"></circle><circle cx=\"141.5\" cy=\"44\" r=\"10\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.8\"></circle><circle cx=\"165\" cy=\"44\" r=\"10\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.8\"></circle><circle cx=\"188.5\" cy=\"44\" r=\"10\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.8\"></circle><circle cx=\"212\" cy=\"44\" r=\"10\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.8\"></circle><circle cx=\"235.5\" cy=\"44\" r=\"10\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.8\"></circle><g class=\"jmi-hasil\"><circle cx=\"24\" cy=\"44\" r=\"12.6\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"2.4\"></circle><circle cx=\"47.5\" cy=\"44\" r=\"12.6\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"2.4\"></circle><circle cx=\"71\" cy=\"44\" r=\"12.6\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"2.4\"></circle><circle cx=\"94.5\" cy=\"44\" r=\"12.6\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"2.4\"></circle><circle cx=\"118\" cy=\"44\" r=\"12.6\" fill=\"none\" stroke=\"var(--ink)\" stroke-width=\"2.4\"></circle></g><text x=\"24\" y=\"48\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">M</text><text x=\"47.5\" y=\"48\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">M</text><text x=\"71\" y=\"48\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">M</text><text x=\"94.5\" y=\"48\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">M</text><text x=\"118\" y=\"48\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">M</text><text x=\"141.5\" y=\"48\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">H</text><text x=\"165\" y=\"48\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">H</text><text x=\"188.5\" y=\"48\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">H</text><text x=\"212\" y=\"48\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">K</text><text x=\"235.5\" y=\"48\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">K</text><text x=\"10\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">M merah = 5</text><text x=\"135\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">H hijau = 3</text><text x=\"10\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">K kuning = 2</text><text x=\"10\" y=\"114\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">Peristiwa A: merah</text><text class=\"jmi-hasil\" x=\"10\" y=\"132\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">n(A) = 5   n(S) = 10</text><text class=\"jmi-hasil\" x=\"10\" y=\"149\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">P(A) = 5/10 = 1/2</text><text class=\"jmi-hasil\" x=\"10\" y=\"166\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">P(A') = 1 − 1/2 = 1/2</text><g class=\"jmi-hasil\"><rect x=\"30\" y=\"180\" width=\"100\" height=\"14\" rx=\"2\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.6\"></rect><rect x=\"130\" y=\"180\" width=\"100\" height=\"14\" rx=\"2\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.6\"></rect></g><g class=\"jmi-hasil\"><text x=\"80\" y=\"208\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" text-anchor=\"middle\" font-weight=\"700\">A</text><text x=\"180\" y=\"208\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--amber)\" text-anchor=\"middle\" font-weight=\"700\">A'</text></g></svg></div><figcaption>Rajah 1 · Beg 10 guli: 5 merah, 3 hijau, 2 kuning. Kira dahulu, kemudian semak dengan rajah.</figcaption></figure>",
  "keb6": "<figure class=\"figure jmi\" data-w=\"t2keb\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2keb&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Skala kebarangkalian dari 0 hingga 1. Pilih peristiwa dan lihat kedudukan P(A).&quot;,&quot;alt&quot;:&quot;Rajah interaktif skala kebarangkalian dari mustahil ke pasti; gelongsor memilih peristiwa dan menunjukkan nilai P(A) pada skala&quot;,&quot;mod&quot;:&quot;skala&quot;,&quot;acara&quot;:[{&quot;nama&quot;:&quot;dadu 7&quot;,&quot;t&quot;:&quot;Mendapat nombor 7 apabila dadu dibaling&quot;,&quot;n&quot;:0,&quot;N&quot;:6},{&quot;nama&quot;:&quot;dadu genap&quot;,&quot;t&quot;:&quot;Mendapat nombor genap apabila dadu dibaling&quot;,&quot;n&quot;:3,&quot;N&quot;:6},{&quot;nama&quot;:&quot;kurang 7&quot;,&quot;t&quot;:&quot;Mendapat nombor kurang daripada 7 apabila dadu dibaling&quot;,&quot;n&quot;:6,&quot;N&quot;:6},{&quot;nama&quot;:&quot;As dalam 52 kad&quot;,&quot;t&quot;:&quot;Memilih kad As daripada 52 keping kad&quot;,&quot;n&quot;:4,&quot;N&quot;:52},{&quot;nama&quot;:&quot;syiling kepala&quot;,&quot;t&quot;:&quot;Mendapat kepala apabila syiling dibaling&quot;,&quot;n&quot;:1,&quot;N&quot;:2},{&quot;nama&quot;:&quot;merah 3 daripada 12&quot;,&quot;t&quot;:&quot;Memilih guli merah daripada 12 guli (3 merah)&quot;,&quot;n&quot;:3,&quot;N&quot;:12}]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 224\" role=\"img\" aria-label=\"Rajah skala kebarangkalian dari mustahil ke pasti; Mendapat nombor 7 apabila dadu dibaling ialah P(A) = 0\"><text x=\"10\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\">Peristiwa:</text><text x=\"10\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">Mendapat nombor 7 apabila dadu</text><text x=\"10\" y=\"49\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">dibaling</text><text x=\"20\" y=\"94\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" font-weight=\"700\">mustahil</text><text x=\"130\" y=\"94\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink3)\" text-anchor=\"middle\">sama mungkin</text><text x=\"240\" y=\"94\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" text-anchor=\"end\" font-weight=\"700\">pasti</text><line x1=\"20\" y1=\"116\" x2=\"240\" y2=\"116\" stroke=\"var(--ink3)\" stroke-width=\"2.4\"></line><line x1=\"20\" y1=\"108\" x2=\"20\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"></line><line x1=\"75\" y1=\"112\" x2=\"75\" y2=\"120\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"></line><line x1=\"130\" y1=\"108\" x2=\"130\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"></line><line x1=\"185\" y1=\"112\" x2=\"185\" y2=\"120\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"></line><line x1=\"240\" y1=\"108\" x2=\"240\" y2=\"124\" stroke=\"var(--ink3)\" stroke-width=\"1.6\"></line><text x=\"20\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">0</text><text x=\"130\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">0.5</text><text x=\"240\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">1</text><g class=\"jmi-hasil\"><line x1=\"20\" y1=\"102\" x2=\"20\" y2=\"128\" stroke=\"var(--vena)\" stroke-width=\"2.2\"></line><circle cx=\"20\" cy=\"116\" r=\"6\" fill=\"var(--vena)\" stroke=\"var(--vena)\" stroke-width=\"1.5\"></circle></g><text class=\"jmi-hasil\" x=\"92\" y=\"166\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" text-anchor=\"middle\" font-weight=\"700\">P(A) = 0/6 = 0</text><text class=\"jmi-hasil\" x=\"92\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">n(A) = 0   n(S) = 6</text><text x=\"130\" y=\"208\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\" text-anchor=\"middle\">0 ≤ P(A) ≤ 1</text></svg></div><figcaption>Rajah 1 · Skala kebarangkalian dari 0 hingga 1. Pilih peristiwa dan lihat kedudukan P(A).</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Kedai Dadu",
   "sk": "13.2.1 Ruang sampel dan peristiwa",
   "lampiran": "keb1",
   "kadNama": "Ruang Sampel",
   "kadEm": "🎲",
   "kadFakta": "Ruang sampel ialah senarai semua kesudahan yang mungkin. Bagi sebiji dadu, ia ada enam kesudahan, iaitu 1 hingga 6.",
   "bosKadNama": "Peristiwa Mustahil",
   "bosKadEm": "🚫",
   "bosKadFakta": "Peristiwa yang tiada kesudahan langsung ialah set kosong. Contohnya mendapat nombor 7 apabila membaling sebiji dadu biasa.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Set semua kesudahan yang mungkin bagi suatu eksperimen dipanggil:",
     "p": [
      "Ruang sampel",
      "Peristiwa",
      "Pelengkap",
      "Kekerapan relatif"
     ],
     "b": 0,
     "u": "Ruang sampel ialah set semua kesudahan yang mungkin, ditulis S."
    },
    {
     "j": "pilih",
     "t": "Sebiji dadu adil dibaling sekali. Ruang sampel S ialah:",
     "p": [
      "{1, 2, 3, 4, 5, 6, 7, 8}",
      "{1, 2, 3, 4, 5, 6}",
      "{1, 2, 3, 4, 5}",
      "{2, 4, 6, 8, 10, 12}"
     ],
     "b": 1,
     "u": "Dadu ada enam muka bernombor 1 hingga 6, jadi S = {1, 2, 3, 4, 5, 6}."
    },
    {
     "j": "pilih",
     "t": "Sebiji syiling dibaling sekali. Dengan K = kepala dan E = ekor, ruang sampel ialah:",
     "p": [
      "{K, K, E}",
      "{E, E, K}",
      "{K, E}",
      "{K, E, K, E}"
     ],
     "b": 2,
     "u": "Syiling hanya ada dua kesudahan, kepala atau ekor."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih peristiwa 'nombor genap'. Berapakah n(A), bilangan kesudahan dalam peristiwa A?",
     "b": 3,
     "tol": 0.01,
     "u": "Nombor genap dalam ruang sampel ialah 2, 4 dan 6, jadi n(A) = 3."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih peristiwa 'nombor perdana'. Berapakah n(A)?",
     "b": 3,
     "tol": 0.01,
     "u": "Nombor perdana dalam S ialah 2, 3 dan 5. Nombor 1 bukan perdana."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih peristiwa 'nombor 7'. Peristiwa A ialah set kosong. Ini bermaksud peristiwa itu:",
     "p": [
      "Pasti berlaku",
      "Sama mungkin berlaku atau tidak",
      "Berlaku separuh daripada masa",
      "Mustahil berlaku"
     ],
     "b": 3,
     "u": "Tiada nombor 7 pada dadu, jadi peristiwa itu tidak boleh berlaku."
    },
    {
     "j": "pilih",
     "t": "Peristiwa ialah:",
     "p": [
      "Sebahagian kesudahan dalam ruang sampel",
      "Kesudahan yang mesti berlaku setiap kali",
      "Bilangan kali eksperimen dijalankan",
      "Nilai kebarangkalian yang dicatat"
     ],
     "b": 0,
     "u": "Peristiwa ialah subset kepada ruang sampel, iaitu kesudahan yang memenuhi satu syarat."
    },
    {
     "j": "susun",
     "t": "Susun langkah menentukan suatu peristiwa bagi eksperimen membaling dadu.",
     "p": [
      "Senaraikan semua kesudahan dalam ruang sampel",
      "Baca syarat peristiwa yang diminta",
      "Pilih kesudahan yang memenuhi syarat itu",
      "Tulis peristiwa sebagai satu set"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Kenal ruang sampel dahulu, kemudian tapis mengikut syarat, dan akhir sekali tulis sebagai set."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Sebiji dadu dibaling sekali. Pilih SEMUA pernyataan yang BENAR.",
    "p": [
     "Ruang sampel S mempunyai 6 kesudahan",
     "Peristiwa 'lebih daripada 6' ialah set kosong",
     "Peristiwa 'nombor perdana' = {2, 3, 5}",
     "Peristiwa 'nombor genap' = {2, 4, 6, 8}",
     "Nombor 1 ialah peristiwa dengan dua kesudahan",
     "Ruang sampel S = {2, 4, 6}"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Dadu tiada nombor 8. Nombor 1 ialah satu kesudahan sahaja, dan ruang sampel mengandungi semua enam nombor."
   }
  },
  {
   "n": 2,
   "tempat": "Pokok Syiling",
   "sk": "13.2.1 / 13.2.2 Gambar rajah pokok dan kebarangkalian teori",
   "lampiran": "keb2",
   "kadNama": "Pokok Kesudahan",
   "kadEm": "🌳",
   "kadFakta": "Gambar rajah pokok menyenaraikan setiap kesudahan eksperimen yang berperingkat. Setiap cabang ialah satu kemungkinan, dan setiap laluan hingga ke daun ialah satu kesudahan.",
   "bosKadNama": "Tiga Syiling",
   "bosKadEm": "🪙",
   "bosKadFakta": "Apabila tiga syiling dibaling, ada 2 × 2 × 2 = 8 kesudahan. Setiap syiling menggandakan bilangan kesudahan.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah bilangan kesudahan dalam ruang sampel S, iaitu n(S)?",
     "b": 6,
     "tol": 0.01,
     "u": "Syiling ada 2 kesudahan dan pemutar ada 3, jadi n(S) = 2 × 3 = 6."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih peristiwa 'kepala'. Peristiwa A ialah:",
     "p": [
      "{K1, K2, K3, E1}",
      "{K1, K2, K3}",
      "{K1, K2, K3, K4}",
      "{K1, E1, K2, E2}"
     ],
     "b": 1,
     "u": "Kepala boleh berpasangan dengan pemutar 1, 2 atau 3, jadi A = {K1, K2, K3}."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih peristiwa 'ekor dan ganjil'. Berapakah n(A)?",
     "b": 2,
     "tol": 0.01,
     "u": "Ekor dengan ganjil ialah E1 dan E3, jadi n(A) = 2."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih peristiwa 'nombor 2'. Kesudahan dalam A ialah:",
     "p": [
      "{K2}",
      "{2, 2}",
      "{K2, E2}",
      "{K1, K2, K3}"
     ],
     "b": 2,
     "u": "Nombor 2 boleh keluar bersama kepala atau ekor, jadi K2 dan E2."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih peristiwa 'kepala'. Kebarangkalian P(A) ialah:",
     "p": [
      "1/3",
      "1/6",
      "2/3",
      "1/2"
     ],
     "b": 3,
     "u": "n(A) = 3 dan n(S) = 6, jadi P(A) = 3/6 = 1/2."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih peristiwa 'kepala dan 3'. P(A) ialah:",
     "p": [
      "1/6",
      "1/3",
      "1/2",
      "1/4"
     ],
     "b": 0,
     "u": "Hanya K3 memenuhi syarat, jadi n(A) = 1 dan P(A) = 1/6."
    },
    {
     "j": "pilih",
     "t": "Gambar rajah pokok berguna kerana ia:",
     "p": [
      "Mengira kebarangkalian tanpa perlu ruang sampel",
      "Menyenaraikan semua kesudahan dengan teratur",
      "Menunjukkan kesudahan yang paling kerap sahaja",
      "Menggantikan keperluan memilih peristiwa"
     ],
     "b": 1,
     "u": "Setiap laluan dari akar ke daun ialah satu kesudahan, jadi tiada kesudahan yang tertinggal."
    },
    {
     "j": "nombor",
     "t": "Sebiji syiling dibaling, kemudian sebiji dadu dibaling. Berapakah n(S) bagi eksperimen ini?",
     "b": 12,
     "tol": 0.01,
     "u": "2 kesudahan syiling darab 6 kesudahan dadu memberi 12."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Tiga syiling dibaling serentak. Berapakah bilangan kesudahan dalam ruang sampel?",
    "b": 8,
    "tol": 0.01,
    "u": "Setiap syiling ada 2 kesudahan, jadi 2 × 2 × 2 = 8."
   }
  },
  {
   "n": 3,
   "tempat": "Makmal Percubaan",
   "sk": "13.1.1 / 13.1.2 Eksperimen kebarangkalian dan kesimpulan",
   "lampiran": "keb3",
   "kadNama": "Kekerapan Relatif",
   "kadEm": "📊",
   "kadFakta": "Kekerapan relatif ialah bilangan kejadian dibahagi bilangan cubaan. Apabila cubaan bertambah, ia menghampiri satu nilai tertentu.",
   "bosKadNama": "Sampel Besar",
   "bosKadEm": "🔬",
   "bosKadFakta": "Cubaan yang sedikit memberi keputusan yang berubah-ubah. Cubaan yang banyak memberi keputusan yang lebih stabil.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Kekerapan relatif suatu peristiwa dikira dengan:",
     "p": [
      "Bilangan cubaan ÷ bilangan kejadian",
      "Bilangan kejadian × bilangan cubaan",
      "Bilangan kejadian ÷ bilangan cubaan",
      "Bilangan kejadian − bilangan cubaan"
     ],
     "b": 2,
     "u": "Kekerapan relatif = bilangan kejadian ÷ bilangan cubaan."
    },
    {
     "j": "nombor",
     "t": "Sebiji dadu dibaling 50 kali. Nombor genap muncul 22 kali. Berapakah kekerapan relatif nombor genap (perpuluhan)?",
     "b": 0.44,
     "tol": 0.001,
     "u": "22 ÷ 50 = 0.44."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan cubaan 1000 dan larian ke-1. Berapakah bilangan kejadian nombor genap?",
     "b": 479,
     "tol": 0.01,
     "u": "Pada 1000 cubaan larian ke-1, nombor genap muncul 479 kali."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan cubaan 1000 dan larian ke-3. Berapakah bilangan kejadian nombor genap?",
     "b": 515,
     "tol": 0.01,
     "u": "Larian ke-3 pada 1000 cubaan mencatat 515 kejadian."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, apabila bilangan cubaan semakin besar, kekerapan relatif nombor genap menghampiri:",
     "p": [
      "Sifar, kerana cubaan terlalu banyak",
      "Satu, kerana semua cubaan berjaya",
      "Bilangan cubaan yang dijalankan",
      "Kebarangkalian teori 0.5"
     ],
     "b": 3,
     "u": "Kebarangkalian teori nombor genap ialah 3/6 = 0.5, dan kekerapan relatif menuju nilai itu jika cubaan cukup besar."
    },
    {
     "j": "pilih",
     "t": "Pada 10 cubaan, kekerapan relatif dalam tiga larian berbeza-beza. Ini kerana:",
     "p": [
      "Cubaan sedikit, jadi keputusan kurang stabil",
      "Dadu itu tidak adil apabila cubaan sedikit",
      "Kebarangkalian teori berubah pada setiap larian",
      "Kekerapan relatif sentiasa 0.5 pada 10 cubaan"
     ],
     "b": 0,
     "u": "Cubaan yang sedikit memberi nilai yang berubah-ubah. Nilai menjadi stabil apabila cubaan bertambah."
    },
    {
     "j": "nombor",
     "t": "Sebuah pemutar diputar 200 kali dan warna merah muncul 62 kali. Anggarkan kebarangkalian eksperimen mendapat merah (perpuluhan).",
     "b": 0.31,
     "tol": 0.001,
     "u": "62 ÷ 200 = 0.31."
    },
    {
     "j": "susun",
     "t": "Susun langkah menjalankan eksperimen kebarangkalian.",
     "p": [
      "Tentukan peristiwa yang diperhatikan",
      "Ulang eksperimen dan catat setiap kesudahan",
      "Kira bilangan kejadian peristiwa itu",
      "Bahagi bilangan kejadian dengan bilangan cubaan"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Tetapkan peristiwa, kumpul data, kira kejadian, kemudian dapatkan kekerapan relatif."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Dalam Rajah 1, tetapkan cubaan 500 dan larian ke-2. Berapakah bilangan kejadian nombor genap?",
    "b": 247,
    "tol": 0.01,
    "u": "Pada 500 cubaan larian ke-2, nombor genap muncul 247 kali."
   }
  },
  {
   "n": 4,
   "tempat": "Meja Pemutar",
   "sk": "13.2.2 / 13.2.3 Model kebarangkalian P(A) = n(A) ÷ n(S)",
   "lampiran": "keb4",
   "kadNama": "Model Teori",
   "kadEm": "🎯",
   "kadFakta": "Bagi kesudahan yang sama mungkin, kebarangkalian teori ialah n(A) ÷ n(S). Ia dikira tanpa perlu menjalankan eksperimen.",
   "bosKadNama": "Kesudahan Sama Mungkin",
   "bosKadEm": "⚖️",
   "bosKadFakta": "Model P(A) = n(A) ÷ n(S) hanya betul apabila setiap kesudahan sama mungkin, seperti dadu yang adil atau pemutar yang sektornya sama besar.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih peristiwa 'nombor perdana'. Kira P(A) sebagai perpuluhan.",
     "b": 0.5,
     "tol": 0.001,
     "u": "Nombor perdana dalam 1 hingga 8 ialah 2, 3, 5 dan 7. P(A) = 4/8 = 0.5."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih peristiwa 'gandaan 4'. P(A) ialah:",
     "p": [
      "1/2",
      "1/4",
      "1/8",
      "3/8"
     ],
     "b": 1,
     "u": "Gandaan 4 ialah 4 dan 8, jadi P(A) = 2/8 = 1/4."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih peristiwa 'faktor bagi 12'. P(A) ialah:",
     "p": [
      "1/2",
      "3/4",
      "5/8",
      "1/8"
     ],
     "b": 2,
     "u": "Faktor 12 dalam S ialah 1, 2, 3, 4 dan 6, jadi P(A) = 5/8."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih peristiwa 'lebih daripada 5'. Kira P(A) sebagai perpuluhan.",
     "b": 0.375,
     "tol": 0.001,
     "u": "Nombor lebih daripada 5 ialah 6, 7 dan 8, jadi P(A) = 3/8 = 0.375."
    },
    {
     "j": "pilih",
     "t": "Sebuah beg mengandungi 5 bola biru dan 3 bola putih. Sebiji bola dipilih secara rawak. P(biru) ialah:",
     "p": [
      "3/8",
      "5/3",
      "1/2",
      "5/8"
     ],
     "b": 3,
     "u": "n(biru) = 5 dan n(S) = 8, jadi P(biru) = 5/8."
    },
    {
     "j": "nombor",
     "t": "Sebuah kotak berisi 20 batang pen, dan 6 daripadanya berwarna merah. Sebatang pen dipilih secara rawak. Kira P(merah) sebagai perpuluhan.",
     "b": 0.3,
     "tol": 0.001,
     "u": "6 ÷ 20 = 0.3."
    },
    {
     "j": "pilih",
     "t": "Kebarangkalian teori suatu peristiwa A bagi kesudahan yang sama mungkin dikira dengan rumus:",
     "p": [
      "P(A) = n(A) ÷ n(S)",
      "P(A) = n(S) ÷ n(A)",
      "P(A) = n(A) × n(S)",
      "P(A) = n(S) − n(A)"
     ],
     "b": 0,
     "u": "Kebarangkalian ialah bilangan kesudahan dalam A dibahagi bilangan kesudahan dalam ruang sampel."
    },
    {
     "j": "nombor",
     "t": "Dalam sebuah kelas yang ada 40 orang murid, 14 orang datang ke sekolah dengan bas. Seorang murid dipilih secara rawak. Kira P(murid itu naik bas) sebagai perpuluhan.",
     "b": 0.35,
     "tol": 0.001,
     "u": "14 ÷ 40 = 0.35."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Sebuah beg mengandungi 4 bola merah, 6 bola hijau dan x bola kuning. Jika P(kuning) = 1/3, berapakah nilai x?",
    "b": 5,
    "tol": 0.01,
    "u": "x ÷ (10 + x) = 1/3, jadi 3x = 10 + x. Maka 2x = 10 dan x = 5. Semak: 5/15 = 1/3."
   }
  },
  {
   "n": 5,
   "tempat": "Beg Guli",
   "sk": "13.3.1 / 13.3.2 Peristiwa pelengkap",
   "lampiran": "keb5",
   "kadNama": "Pelengkap",
   "kadEm": "🔗",
   "kadFakta": "Peristiwa pelengkap A' ialah semua kesudahan dalam ruang sampel yang tidak dalam A. A dan A' bersama-sama membentuk seluruh ruang sampel.",
   "bosKadNama": "Jumlah Satu",
   "bosKadEm": "➕",
   "bosKadFakta": "P(A) + P(A') = 1 kerana sama ada A berlaku atau A tidak berlaku. Tiada kemungkinan ketiga.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Peristiwa pelengkap bagi peristiwa A, ditulis A', bermaksud:",
     "p": [
      "Peristiwa A berlaku dua kali",
      "Peristiwa A tidak berlaku",
      "A dan S berlaku serentak",
      "Peristiwa yang mustahil berlaku"
     ],
     "b": 1,
     "u": "A' terdiri daripada semua kesudahan dalam ruang sampel yang bukan dalam A."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih peristiwa 'merah'. Kira P(A') sebagai perpuluhan.",
     "b": 0.5,
     "tol": 0.001,
     "u": "n(A) = 5 daripada 10, jadi P(A) = 0.5 dan P(A') = 1 − 0.5 = 0.5."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih peristiwa 'hijau'. P(A') ialah:",
     "p": [
      "3/10",
      "1/10",
      "7/10",
      "3/7"
     ],
     "b": 2,
     "u": "P(hijau) = 3/10, jadi P(A') = 1 − 3/10 = 7/10."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih peristiwa 'merah atau hijau'. Berapakah n(A'), iaitu bilangan guli dalam A'?",
     "b": 2,
     "tol": 0.01,
     "u": "A' ialah guli kuning sahaja, jadi n(A') = 10 − 5 − 3 = 2."
    },
    {
     "j": "pilih",
     "t": "Rumus yang betul bagi kebarangkalian peristiwa pelengkap ialah:",
     "p": [
      "P(A') = P(A) − 1",
      "P(A') = 1 + P(A)",
      "P(A') = P(A) ÷ 1",
      "P(A') = 1 − P(A)"
     ],
     "b": 3,
     "u": "Oleh sebab P(A) + P(A') = 1, maka P(A') = 1 − P(A)."
    },
    {
     "j": "nombor",
     "t": "Kebarangkalian hujan esok ialah 0.35. Berapakah kebarangkalian tidak hujan?",
     "b": 0.65,
     "tol": 0.001,
     "u": "P(tidak hujan) = 1 − 0.35 = 0.65."
    },
    {
     "j": "pilih",
     "t": "Antara nilai berikut, yang manakah TIDAK mungkin menjadi nilai suatu kebarangkalian?",
     "p": [
      "1.2",
      "0",
      "0.5",
      "1"
     ],
     "b": 0,
     "u": "Kebarangkalian sentiasa antara 0 dan 1, jadi 1.2 tidak mungkin."
    },
    {
     "j": "nombor",
     "t": "Dalam suatu jualan, kebarangkalian seorang pelanggan membeli ialah 3/8. Cari kebarangkalian pelanggan tidak membeli sebagai perpuluhan.",
     "b": 0.625,
     "tol": 0.001,
     "u": "P(tidak membeli) = 1 − 3/8 = 5/8 = 0.625."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Bagi peristiwa A dengan P(A) = 2/5, pilih SEMUA pernyataan yang BENAR.",
    "p": [
     "P(A') = 3/5",
     "P(A) + P(A') = 1",
     "0 ≤ P(A) ≤ 1",
     "P(A') = 2/5",
     "P(A') lebih besar daripada 1",
     "A dan A' boleh berlaku serentak"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "P(A') = 1 − 2/5 = 3/5. Kebarangkalian tidak melebihi 1, dan A serta A' tidak boleh berlaku serentak."
   }
  },
  {
   "n": 6,
   "tempat": "Studio Reka",
   "sk": "13.4.1 Masalah kebarangkalian bukan rutin",
   "lampiran": "keb6",
   "kadNama": "Skala Peluang",
   "kadEm": "📏",
   "kadFakta": "Kebarangkalian berada antara 0 dan 1. Sifar bermaksud mustahil, satu bermaksud pasti, dan 0.5 bermaksud sama mungkin berlaku atau tidak.",
   "bosKadNama": "Reka Permainan",
   "bosKadEm": "✏️",
   "bosKadFakta": "Permainan yang adil ialah permainan yang setiap pemain ada peluang menang yang sama. Kebarangkalian membantu kita mereka permainan yang adil.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih peristiwa 'dadu 7'. Penanda P(A) berada di:",
     "p": [
      "1, peristiwa yang pasti berlaku",
      "0, peristiwa mustahil",
      "0.5, sama mungkin berlaku",
      "0.25, agak jarang berlaku"
     ],
     "b": 1,
     "u": "Tiada nombor 7 pada dadu, jadi P(A) = 0/6 = 0."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih peristiwa 'kurang 7'. Peristiwa ini:",
     "p": [
      "Mustahil, P(A) = 0",
      "Berlaku separuh masa",
      "Pasti berlaku, P(A) = 1",
      "Berlaku 1 daripada 6 kali"
     ],
     "b": 2,
     "u": "Semua enam nombor dadu kurang daripada 7, jadi P(A) = 6/6 = 1."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih peristiwa 'As dalam 52 kad'. P(A) = 4/52. Cari P(A') sebagai perpuluhan, kepada 3 tempat perpuluhan.",
     "b": 0.923,
     "tol": 0.001,
     "u": "P(A') = 1 − 4/52 = 48/52 = 12/13 = 0.923."
    },
    {
     "j": "pilih",
     "t": "Peristiwa yang sama mungkin berlaku atau tidak berlaku mempunyai kebarangkalian:",
     "p": [
      "0.25",
      "0.75",
      "0.05",
      "0.5"
     ],
     "b": 3,
     "u": "Peluang berlaku sama dengan peluang tidak berlaku, jadi kebarangkaliannya ialah 0.5."
    },
    {
     "j": "nombor",
     "t": "Sebuah pemutar mempunyai 8 sektor sama besar: 3 merah, 2 biru dan selebihnya hijau. Kira P(hijau) sebagai perpuluhan.",
     "b": 0.375,
     "tol": 0.001,
     "u": "Sektor hijau = 8 − 3 − 2 = 3. P(hijau) = 3/8 = 0.375."
    },
    {
     "j": "nombor",
     "t": "Sekeping kad dipilih secara rawak daripada 40 keping kad bernombor 1 hingga 40. Kira P(gandaan 5) sebagai perpuluhan.",
     "b": 0.2,
     "tol": 0.001,
     "u": "Gandaan 5 ada 8 (5, 10, ..., 40). P = 8/40 = 0.2."
    },
    {
     "j": "nombor",
     "t": "Sebuah beg mengandungi 12 biji guli. P(biru) = 1/3 dan P(merah) = 1/4, manakala selebihnya kuning. Berapakah bilangan guli kuning?",
     "b": 5,
     "tol": 0.01,
     "u": "Biru = 12 × 1/3 = 4 dan merah = 12 × 1/4 = 3. Kuning = 12 − 4 − 3 = 5."
    },
    {
     "j": "susun",
     "t": "Susun langkah menyelesaikan masalah kebarangkalian pelengkap.",
     "p": [
      "Tentukan n(S) daripada maklumat masalah",
      "Tentukan n(A) bagi peristiwa yang diberi",
      "Kira P(A) = n(A) ÷ n(S)",
      "Kira P(A') = 1 − P(A)"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Cari ruang sampel dan peristiwa dahulu, kira P(A), kemudian tolak daripada 1 untuk pelengkap."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Reka satu permainan dadu atau syiling untuk dua pemain yang adil. Tunjukkan bahawa peluang menang setiap pemain sama.",
    "arahan": "Nyatakan peraturan permainan, senaraikan ruang sampel, dan kira kebarangkalian menang bagi setiap pemain menggunakan P(A) = n(A) ÷ n(S). Terangkan mengapa permainan awak adil dan bagaimana awak boleh menyemaknya dengan eksperimen.",
    "u": "Jawapan TP6 yang kukuh mempunyai peraturan yang jelas, ruang sampel yang lengkap, pengiraan kebarangkalian yang betul, dan pemerhatian bahawa eksperimen yang banyak akan menghampiri kebarangkalian teori."
   }
  }
 ]
};
