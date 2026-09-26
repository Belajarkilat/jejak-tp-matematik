/* Bank soalan — Matematik Ting. 2 · Bab 12 Sukatan Kecenderungan Memusat.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m2b12.js
   kemudian jalankan: node bina.js m2b12

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 2, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m2b12"] =
{
 "id": "m2b12",
 "tingkatan": 2,
 "kod": "12.0 Sukatan Kecenderungan Memusat",
 "tajuk": "Pusat Data",
 "subtajuk": "Matematik Ting. 2 · Bab 12 Sukatan Kecenderungan Memusat",
 "spi": [
  "Mempamerkan pengetahuan asas tentang mod, min dan median.",
  "Mempamerkan kefahaman tentang mod, min dan median.",
  "Mengaplikasikan kefahaman tentang mod, min dan median.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang mod, min dan median dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang mod, min dan median dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang mod, min dan median dalam konteks penyelesaian masalah bukan rutin secara kreatif."
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
  "1": "{n} dapat mengenal mod, min dan median serta mencarinya bagi data tak terkumpul yang mudah. Langkah seterusnya ialah memahami bagaimana ketiga-tiga sukatan berubah apabila data berubah.",
  "2": "{n} memahami mod, min dan median serta kesan menambah atau mendarab data terhadapnya. Perlu lebih latihan sebelum bergerak ke TP3.",
  "3": "{n} boleh membina jadual kekerapan bagi data terkumpul serta menentukan kelas mod dan min anggaran. Galakkan menyemak jumlah kekerapan sama dengan bilangan data.",
  "4": "{n} mampu menyelesaikan masalah rutin yang mudah dengan membaca mod, min dan median daripada jadual, carta palang dan batang dan daun. Seterusnya latih mentafsir nilai ekstrem.",
  "5": "{n} dapat memilih sukatan yang sesuai dan menjustifikasikannya apabila data mempunyai nilai ekstrem. Sudah bersedia untuk membanding dua set data.",
  "6": "{n} berjaya membanding dua set data dengan min, median dan julat, dan membina hujah yang meyakinkan. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Sukatan Kecenderungan Memusat. Cadangan: ulang hentian pertama menggunakan Rajah 1 sambil mengira mod, median dan min dengan bimbingan rakan sebaya."
 },
 "lampiran": {
  "pus1": "<figure class=\"figure jmi\" data-w=\"t2pusat\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2pusat&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Markah kuiz 9 murid. Pilih Mod, Median atau Min dengan gelongsor.&quot;,&quot;alt&quot;:&quot;Rajah interaktif plot titik markah kuiz 9 murid; gelongsor memilih mod, median atau min dan menunjukkan cara mencarinya&quot;,&quot;mod&quot;:&quot;asas&quot;,&quot;data&quot;:[2,3,3,4,4,4,5,6,9],&quot;tajuk&quot;:&quot;Markah kuiz 9 murid&quot;,&quot;lo&quot;:1,&quot;hi&quot;:10}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 149\" role=\"img\" aria-label=\"Rajah plot titik Markah kuiz 9 murid dengan 9 data; gelongsor memilih mod, median atau min\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Markah kuiz 9 murid</text><line x1=\"12\" y1=\"77\" x2=\"248\" y2=\"77\" stroke=\"var(--ink3)\" stroke-width=\"1.5\" stroke-linecap=\"round\"></line><line x1=\"20\" y1=\"77\" x2=\"20\" y2=\"81\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"20\" y=\"93\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">1</text><line x1=\"44.4\" y1=\"77\" x2=\"44.4\" y2=\"81\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"44.4\" y=\"93\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">2</text><line x1=\"68.9\" y1=\"77\" x2=\"68.9\" y2=\"81\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"68.9\" y=\"93\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">3</text><line x1=\"93.3\" y1=\"77\" x2=\"93.3\" y2=\"81\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"93.3\" y=\"93\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">4</text><line x1=\"117.8\" y1=\"77\" x2=\"117.8\" y2=\"81\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"117.8\" y=\"93\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">5</text><line x1=\"142.2\" y1=\"77\" x2=\"142.2\" y2=\"81\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"142.2\" y=\"93\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">6</text><line x1=\"166.7\" y1=\"77\" x2=\"166.7\" y2=\"81\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"166.7\" y=\"93\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">7</text><line x1=\"191.1\" y1=\"77\" x2=\"191.1\" y2=\"81\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"191.1\" y=\"93\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">8</text><line x1=\"215.6\" y1=\"77\" x2=\"215.6\" y2=\"81\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"215.6\" y=\"93\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">9</text><line x1=\"240\" y1=\"77\" x2=\"240\" y2=\"81\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"240\" y=\"93\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">10</text><circle cx=\"44.4\" cy=\"71\" r=\"4\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"68.9\" cy=\"71\" r=\"4\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"68.9\" cy=\"62\" r=\"4\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"93.3\" cy=\"71\" r=\"4\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"93.3\" cy=\"62\" r=\"4\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"93.3\" cy=\"53\" r=\"4\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"117.8\" cy=\"71\" r=\"4\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"142.2\" cy=\"71\" r=\"4\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"215.6\" cy=\"71\" r=\"4\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle class=\"jmi-hasil\" cx=\"93.3\" cy=\"71\" r=\"7\" fill=\"none\" stroke=\"var(--arteri)\" stroke-width=\"2\"></circle><circle class=\"jmi-hasil\" cx=\"93.3\" cy=\"62\" r=\"7\" fill=\"none\" stroke=\"var(--arteri)\" stroke-width=\"2\"></circle><circle class=\"jmi-hasil\" cx=\"93.3\" cy=\"53\" r=\"7\" fill=\"none\" stroke=\"var(--arteri)\" stroke-width=\"2\"></circle><text x=\"130\" y=\"115\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Mod ialah nilai paling kerap muncul.</text><text class=\"jmi-hasil\" x=\"130\" y=\"135\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Mod = 4 (muncul 3 kali)</text></svg></div><figcaption>Rajah 1 · Markah kuiz 9 murid. Pilih Mod, Median atau Min dengan gelongsor.</figcaption></figure>",
  "pus2": "<figure class=\"figure jmi\" data-w=\"t2pusat\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2pusat&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Tukar cara data diubah dan nilainya. Lihat mod, median dan min yang baharu.&quot;,&quot;alt&quot;:&quot;Rajah interaktif kesan menambah semua nilai, mendarab semua nilai atau menambah satu nilai terhadap mod, median dan min&quot;,&quot;mod&quot;:&quot;ubah&quot;,&quot;data&quot;:[2,3,3,5,7],&quot;tajuk&quot;:&quot;Data 2, 3, 3, 5, 7&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 190\" role=\"img\" aria-label=\"Rajah kesan perubahan data terhadap mod, median dan min; gelongsor memilih operasi dan nilai\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Data 2, 3, 3, 5, 7</text><text x=\"8\" y=\"44\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">Asal</text><rect x=\"56\" y=\"30\" width=\"26\" height=\"22\" rx=\"4\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"69\" y=\"46\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">2</text><rect x=\"84\" y=\"30\" width=\"26\" height=\"22\" rx=\"4\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"97\" y=\"46\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">3</text><rect x=\"112\" y=\"30\" width=\"26\" height=\"22\" rx=\"4\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"125\" y=\"46\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">3</text><rect x=\"140\" y=\"30\" width=\"26\" height=\"22\" rx=\"4\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"153\" y=\"46\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">5</text><rect x=\"168\" y=\"30\" width=\"26\" height=\"22\" rx=\"4\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"181\" y=\"46\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">7</text><text x=\"8\" y=\"74\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">Baru</text><rect x=\"56\" y=\"60\" width=\"26\" height=\"22\" rx=\"4\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"69\" y=\"76\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">3</text><rect x=\"84\" y=\"60\" width=\"26\" height=\"22\" rx=\"4\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"97\" y=\"76\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">4</text><rect x=\"112\" y=\"60\" width=\"26\" height=\"22\" rx=\"4\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"125\" y=\"76\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">4</text><rect x=\"140\" y=\"60\" width=\"26\" height=\"22\" rx=\"4\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"153\" y=\"76\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">6</text><rect x=\"168\" y=\"60\" width=\"26\" height=\"22\" rx=\"4\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"181\" y=\"76\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">8</text><text x=\"130\" y=\"100\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" text-anchor=\"middle\">Tambah 1 kepada setiap nilai</text><text x=\"8\" y=\"128\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Mod</text><text x=\"84\" y=\"128\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">3</text><text x=\"128\" y=\"128\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\">→</text><text class=\"jmi-hasil\" x=\"150\" y=\"128\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">4</text><text x=\"8\" y=\"148\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Median</text><text x=\"84\" y=\"148\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">3</text><text x=\"128\" y=\"148\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\">→</text><text class=\"jmi-hasil\" x=\"150\" y=\"148\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">4</text><text x=\"8\" y=\"168\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Min</text><text x=\"84\" y=\"168\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">4</text><text x=\"128\" y=\"168\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink3)\">→</text><text class=\"jmi-hasil\" x=\"150\" y=\"168\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">5</text></svg></div><figcaption>Rajah 1 · Tukar cara data diubah dan nilainya. Lihat mod, median dan min yang baharu.</figcaption></figure>",
  "pus3": "<figure class=\"figure jmi\" data-w=\"t2pusat\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2pusat&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Markah 20 murid. Tukar selang kelas dan pilih satu baris untuk melihat kekerapan dan titik tengahnya.&quot;,&quot;alt&quot;:&quot;Rajah interaktif jadual kekerapan data terkumpul markah 20 murid dengan selang kelas 5 atau 10, kelas mod dan min anggaran&quot;,&quot;mod&quot;:&quot;jadual&quot;,&quot;data&quot;:[21,23,24,26,27,28,29,31,32,33,33,34,35,36,38,41,43,44,46,48],&quot;mula&quot;:20,&quot;lebar&quot;:[5,10],&quot;tajuk&quot;:&quot;Markah 20 murid&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 224\" role=\"img\" aria-label=\"Rajah jadual kekerapan data terkumpul dengan selang kelas 5 dan min anggaran\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Markah 20 murid</text><text x=\"8\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" font-weight=\"700\">Kelas</text><text x=\"112\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">f</text><text class=\"jmi-hasil\" x=\"152\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">x</text><text class=\"jmi-hasil\" x=\"228\" y=\"38\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\" font-weight=\"700\">fx</text><line x1=\"8\" y1=\"43\" x2=\"250\" y2=\"43\" stroke=\"var(--line2)\" stroke-width=\"1\" stroke-linecap=\"round\"></line><rect x=\"4\" y=\"44\" width=\"250\" height=\"18\" rx=\"4\" fill=\"var(--gen-soft)\" stroke=\"var(--gen)\" stroke-width=\"1.4\"></rect><text x=\"8\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">20 - 24</text><text x=\"112\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\" font-weight=\"700\">3</text><text class=\"jmi-hasil\" x=\"152\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\" font-weight=\"700\">22</text><text class=\"jmi-hasil\" x=\"228\" y=\"58\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\" font-weight=\"700\">66</text><text x=\"8\" y=\"76\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">25 - 29</text><text x=\"112\" y=\"76\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\">4</text><text class=\"jmi-hasil\" x=\"152\" y=\"76\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\">27</text><text class=\"jmi-hasil\" x=\"228\" y=\"76\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\">108</text><text x=\"8\" y=\"94\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">30 - 34</text><text x=\"112\" y=\"94\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\">5</text><text class=\"jmi-hasil\" x=\"152\" y=\"94\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\">32</text><text class=\"jmi-hasil\" x=\"228\" y=\"94\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\">160</text><text x=\"8\" y=\"112\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">35 - 39</text><text x=\"112\" y=\"112\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\">3</text><text class=\"jmi-hasil\" x=\"152\" y=\"112\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\">37</text><text class=\"jmi-hasil\" x=\"228\" y=\"112\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\">111</text><text x=\"8\" y=\"130\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">40 - 44</text><text x=\"112\" y=\"130\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\">3</text><text class=\"jmi-hasil\" x=\"152\" y=\"130\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\">42</text><text class=\"jmi-hasil\" x=\"228\" y=\"130\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\">126</text><text x=\"8\" y=\"148\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">45 - 49</text><text x=\"112\" y=\"148\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\">2</text><text class=\"jmi-hasil\" x=\"152\" y=\"148\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\">47</text><text class=\"jmi-hasil\" x=\"228\" y=\"148\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\">94</text><line x1=\"8\" y1=\"154\" x2=\"250\" y2=\"154\" stroke=\"var(--line2)\" stroke-width=\"1\" stroke-linecap=\"round\"></line><text x=\"8\" y=\"170\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Jumlah</text><text x=\"112\" y=\"170\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\" font-weight=\"700\">20</text><text class=\"jmi-hasil\" x=\"228\" y=\"170\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"end\" font-weight=\"700\">665</text><text class=\"jmi-hasil\" x=\"8\" y=\"192\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Kelas mod = 30 - 34</text><text class=\"jmi-hasil\" x=\"8\" y=\"212\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">Min anggaran = 665 ÷ 20 = 33.25</text></svg></div><figcaption>Rajah 1 · Markah 20 murid. Tukar selang kelas dan pilih satu baris untuk melihat kekerapan dan titik tengahnya.</figcaption></figure>",
  "pus4": "<figure class=\"figure jmi cabar\" data-w=\"t2pusat\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2pusat&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Masa bacaan 14 murid. Data yang sama dalam tiga paparan. Cari mod, median dan min, kemudian semak.&quot;,&quot;alt&quot;:&quot;Rajah interaktif masa bacaan 14 murid dalam jadual kekerapan, carta palang atau batang-dan-daun&quot;,&quot;mod&quot;:&quot;wakil&quot;,&quot;data&quot;:[24,25,25,27,27,27,28,30,30,32,33,35,35,36],&quot;tajuk&quot;:&quot;Masa bacaan 14 murid (minit)&quot;,&quot;cabar&quot;:true,&quot;j&quot;:2}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 126\" role=\"img\" aria-label=\"Rajah data Masa bacaan 14 murid (minit) dalam jadual, carta palang atau batang-dan-daun; gelongsor memilih paparan dan ukuran\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Masa bacaan 14 murid (minit)</text><text x=\"40\" y=\"44\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"end\" font-weight=\"700\">2</text><line x1=\"46\" y1=\"32\" x2=\"46\" y2=\"48\" stroke=\"var(--ink3)\" stroke-width=\"1.5\" stroke-linecap=\"round\"></line><text x=\"54\" y=\"44\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">4 5 5 7 7 7 8</text><text x=\"40\" y=\"62\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--ink)\" text-anchor=\"end\" font-weight=\"700\">3</text><line x1=\"46\" y1=\"50\" x2=\"46\" y2=\"66\" stroke=\"var(--ink3)\" stroke-width=\"1.5\" stroke-linecap=\"round\"></line><text x=\"54\" y=\"62\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">0 0 2 3 5 5 6</text><text x=\"130\" y=\"84\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Kekunci: 2 | 4 bermaksud 24</text><text class=\"jmi-hasil\" x=\"130\" y=\"112\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Mod = 27 (f = 3)</text></svg></div><figcaption>Rajah 1 · Masa bacaan 14 murid. Data yang sama dalam tiga paparan. Cari mod, median dan min, kemudian semak.</figcaption></figure>",
  "pus5": "<figure class=\"figure jmi cabar\" data-w=\"t2pusat\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2pusat&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Tukar nilai terakhir. Perhatikan mod, median dan min. Kira dahulu, kemudian semak dengan rajah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif sembilan nilai dengan nilai terakhir boleh ditukar menjadi ekstrem; menunjukkan mod, median, min dan julat&quot;,&quot;mod&quot;:&quot;ekstrem&quot;,&quot;base&quot;:[4,5,5,6,7,7,7,9],&quot;pilihan&quot;:[8,10,20,40,80],&quot;tajuk&quot;:&quot;Satu nilai terakhir boleh ditukar&quot;,&quot;cabar&quot;:true}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 204\" role=\"img\" aria-label=\"Rajah data dengan satu nilai ekstrem; gelongsor menukar nilai terakhir dan menunjukkan mod, median dan min\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Satu nilai terakhir boleh ditukar</text><rect x=\"13\" y=\"26\" width=\"24\" height=\"22\" rx=\"4\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"25\" y=\"42\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">4</text><rect x=\"39\" y=\"26\" width=\"24\" height=\"22\" rx=\"4\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"51\" y=\"42\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">5</text><rect x=\"65\" y=\"26\" width=\"24\" height=\"22\" rx=\"4\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"77\" y=\"42\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">5</text><rect x=\"91\" y=\"26\" width=\"24\" height=\"22\" rx=\"4\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"103\" y=\"42\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">6</text><rect x=\"117\" y=\"26\" width=\"24\" height=\"22\" rx=\"4\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"129\" y=\"42\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">7</text><rect x=\"143\" y=\"26\" width=\"24\" height=\"22\" rx=\"4\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"155\" y=\"42\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">7</text><rect x=\"169\" y=\"26\" width=\"24\" height=\"22\" rx=\"4\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"181\" y=\"42\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">7</text><rect x=\"195\" y=\"26\" width=\"24\" height=\"22\" rx=\"4\" fill=\"var(--surface2)\" stroke=\"var(--line2)\" stroke-width=\"1\"></rect><text x=\"207\" y=\"42\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\">9</text><rect x=\"221\" y=\"26\" width=\"24\" height=\"22\" rx=\"4\" fill=\"var(--amber-soft)\" stroke=\"var(--amber)\" stroke-width=\"1.8\"></rect><text x=\"233\" y=\"42\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">8</text><text x=\"8\" y=\"88\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Mod</text><line x1=\"60\" y1=\"84\" x2=\"232\" y2=\"84\" stroke=\"var(--line2)\" stroke-width=\"2\" stroke-linecap=\"round\"></line><circle class=\"jmi-hasil\" cx=\"75.1\" cy=\"84\" r=\"6\" fill=\"var(--amber)\" stroke=\"var(--ink)\" stroke-width=\"1.4\"></circle><text class=\"jmi-hasil\" x=\"85.1\" y=\"76\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">7</text><text x=\"8\" y=\"118\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Median</text><line x1=\"60\" y1=\"114\" x2=\"232\" y2=\"114\" stroke=\"var(--line2)\" stroke-width=\"2\" stroke-linecap=\"round\"></line><circle class=\"jmi-hasil\" cx=\"75.1\" cy=\"114\" r=\"6\" fill=\"var(--teal)\" stroke=\"var(--ink)\" stroke-width=\"1.4\"></circle><text class=\"jmi-hasil\" x=\"85.1\" y=\"106\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">7</text><text x=\"8\" y=\"148\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Min</text><line x1=\"60\" y1=\"144\" x2=\"232\" y2=\"144\" stroke=\"var(--line2)\" stroke-width=\"2\" stroke-linecap=\"round\"></line><circle class=\"jmi-hasil\" cx=\"73.9\" cy=\"144\" r=\"6\" fill=\"var(--arteri)\" stroke=\"var(--ink)\" stroke-width=\"1.4\"></circle><text class=\"jmi-hasil\" x=\"83.9\" y=\"136\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">6.4</text><text x=\"60\" y=\"172\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">0</text><text x=\"232\" y=\"172\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">80</text><text class=\"jmi-hasil\" x=\"130\" y=\"192\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Julat = 9 − 4 = 5</text></svg></div><figcaption>Rajah 1 · Tukar nilai terakhir. Perhatikan mod, median dan min. Kira dahulu, kemudian semak dengan rajah.</figcaption></figure>",
  "pus6": "<figure class=\"figure jmi\" data-w=\"t2pusat\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t2pusat&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Markah 8 murid setiap kelas. Tukar nilai terakhir Kelas B dan ukuran yang dibandingkan.&quot;,&quot;alt&quot;:&quot;Rajah interaktif perbandingan markah dua kelas pada garis nombor, dengan nilai ekstrem dalam Kelas B dan ukuran min, median atau julat&quot;,&quot;mod&quot;:&quot;banding&quot;,&quot;a&quot;:[56,60,62,64,66,68,70,72],&quot;b&quot;:[52,58,62,64,66,70,72,75],&quot;ekstrem&quot;:98,&quot;lo&quot;:50,&quot;hi&quot;:100,&quot;langkah&quot;:10,&quot;tajuk&quot;:&quot;Markah Kelas A dan Kelas B&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 190\" role=\"img\" aria-label=\"Rajah perbandingan dua set data pada garis nombor; gelongsor menukar nilai terakhir kelas B dan ukuran yang dipaparkan\"><text x=\"130\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Markah Kelas A dan Kelas B</text><text x=\"8\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">Kelas A</text><line x1=\"12\" y1=\"74\" x2=\"248\" y2=\"74\" stroke=\"var(--ink3)\" stroke-width=\"1.5\" stroke-linecap=\"round\"></line><line x1=\"20\" y1=\"74\" x2=\"20\" y2=\"78\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"20\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">50</text><line x1=\"64\" y1=\"74\" x2=\"64\" y2=\"78\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"64\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">60</text><line x1=\"108\" y1=\"74\" x2=\"108\" y2=\"78\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"108\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">70</text><line x1=\"152\" y1=\"74\" x2=\"152\" y2=\"78\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"152\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">80</text><line x1=\"196\" y1=\"74\" x2=\"196\" y2=\"78\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"196\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">90</text><line x1=\"240\" y1=\"74\" x2=\"240\" y2=\"78\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"240\" y=\"90\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">100</text><circle cx=\"46.4\" cy=\"68\" r=\"3.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"64\" cy=\"68\" r=\"3.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"72.8\" cy=\"68\" r=\"3.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"81.6\" cy=\"68\" r=\"3.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"90.4\" cy=\"68\" r=\"3.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"99.2\" cy=\"68\" r=\"3.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"108\" cy=\"68\" r=\"3.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"116.8\" cy=\"68\" r=\"3.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><line class=\"jmi-hasil\" x1=\"84.9\" y1=\"40\" x2=\"84.9\" y2=\"77\" stroke=\"var(--teal)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-dasharray=\"4 3\"></line><text x=\"8\" y=\"104\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Kelas B</text><line x1=\"12\" y1=\"144\" x2=\"248\" y2=\"144\" stroke=\"var(--ink3)\" stroke-width=\"1.5\" stroke-linecap=\"round\"></line><line x1=\"20\" y1=\"144\" x2=\"20\" y2=\"148\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"20\" y=\"160\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">50</text><line x1=\"64\" y1=\"144\" x2=\"64\" y2=\"148\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"64\" y=\"160\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">60</text><line x1=\"108\" y1=\"144\" x2=\"108\" y2=\"148\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"108\" y=\"160\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">70</text><line x1=\"152\" y1=\"144\" x2=\"152\" y2=\"148\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"152\" y=\"160\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">80</text><line x1=\"196\" y1=\"144\" x2=\"196\" y2=\"148\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"196\" y=\"160\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">90</text><line x1=\"240\" y1=\"144\" x2=\"240\" y2=\"148\" stroke=\"var(--ink3)\" stroke-width=\"1.2\" stroke-linecap=\"round\"></line><text x=\"240\" y=\"160\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">100</text><circle cx=\"28.8\" cy=\"138\" r=\"3.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"55.2\" cy=\"138\" r=\"3.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"72.8\" cy=\"138\" r=\"3.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"81.6\" cy=\"138\" r=\"3.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"90.4\" cy=\"138\" r=\"3.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"108\" cy=\"138\" r=\"3.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"116.8\" cy=\"138\" r=\"3.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><circle cx=\"130\" cy=\"138\" r=\"3.5\" fill=\"var(--teal)\" stroke=\"var(--surface)\" stroke-width=\"1\"></circle><line class=\"jmi-hasil\" x1=\"85.5\" y1=\"110\" x2=\"85.5\" y2=\"147\" stroke=\"var(--arteri)\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-dasharray=\"4 3\"></line><text class=\"jmi-hasil\" x=\"8\" y=\"178\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">Min A = 64.8</text><text class=\"jmi-hasil\" x=\"130\" y=\"178\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Min B = 64.9</text></svg></div><figcaption>Rajah 1 · Markah 8 murid setiap kelas. Tukar nilai terakhir Kelas B dan ukuran yang dibandingkan.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Padang Data",
   "sk": "12.1.1 Mod, min dan median data tak terkumpul",
   "lampiran": "pus1",
   "kadNama": "Tiga Sukatan",
   "kadEm": "📊",
   "kadFakta": "Mod, median dan min ialah tiga cara berbeza untuk mewakili satu set data dengan satu nombor.",
   "bosKadNama": "Data Tersusun",
   "bosKadEm": "🔢",
   "bosKadFakta": "Sebelum mencari median, data mesti disusun dahulu dari kecil ke besar.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Mod bagi satu set data ialah nilai yang:",
     "p": [
      "Paling kerap muncul",
      "Berada di tengah selepas disusun",
      "Diperoleh daripada jumlah dibahagi bilangan data",
      "Terbesar tolak terkecil"
     ],
     "b": 0,
     "u": "Mod ialah nilai dengan kekerapan tertinggi."
    },
    {
     "j": "pilih",
     "t": "Median bagi satu set data ialah nilai yang:",
     "p": [
      "Paling kerap muncul",
      "Berada di tengah selepas data disusun",
      "Diperoleh daripada jumlah dibahagi bilangan data",
      "Paling besar dalam data"
     ],
     "b": 1,
     "u": "Susun data dahulu, kemudian ambil nilai di tengah."
    },
    {
     "j": "pilih",
     "t": "Min bagi satu set data dikira dengan:",
     "p": [
      "Nilai yang paling kerap muncul dalam data itu",
      "Nilai di tengah selepas semua data disusun",
      "Jumlah semua nilai dibahagi bilangan data itu",
      "Nilai terbesar tolak nilai terkecil dalam data"
     ],
     "b": 2,
     "u": "Min = jumlah nilai ÷ bilangan data."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih Mod. Berapakah mod markah kuiz itu?",
     "b": 4,
     "tol": 0.01,
     "u": "Markah 4 muncul 3 kali, paling banyak, jadi mod = 4."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapa kali markah 4 muncul?",
     "b": 3,
     "tol": 0.01,
     "u": "Ada tiga titik pada markah 4."
    },
    {
     "j": "nombor",
     "t": "Jumlah semua markah dalam Rajah 1 ialah 40 dan ada 9 murid. Berapakah min markah, kepada 1 tempat perpuluhan?",
     "b": 4.4,
     "tol": 0.05,
     "u": "Min = 40 ÷ 9 = 4.4."
    },
    {
     "j": "susun",
     "t": "Susun langkah mencari median bagi satu set data.",
     "p": [
      "Susun data dari kecil ke besar",
      "Kira bilangan data",
      "Cari nilai di tengah",
      "Nyatakan nilai itu sebagai median"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Data mesti disusun dahulu sebelum nilai tengah dicari."
    },
    {
     "j": "nombor",
     "t": "Cari median bagi data 2, 5, 7, 10.",
     "b": 6,
     "tol": 0.01,
     "u": "Bilangan data genap, jadi ambil purata dua nilai tengah: (5 + 7) ÷ 2 = 6."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pernyataan yang BENAR tentang data 2, 3, 3, 4, 4, 4, 5, 6, 9.",
    "p": [
     "Mod ialah 4",
     "Median ialah 4",
     "Julat ialah 7",
     "Min tepat 5",
     "Terdapat dua mod",
     "Median ialah 5"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Mod = 4 (3 kali). Nilai kelima selepas disusun ialah 4, jadi median = 4. Julat = 9 − 2 = 7. Min = 40 ÷ 9 = 4.4, bukan 5."
   }
  },
  {
   "n": 2,
   "tempat": "Meja Berubah",
   "sk": "12.1.2 Kesan perubahan set data terhadap mod, min dan median",
   "lampiran": "pus2",
   "kadNama": "Tambah dan Darab",
   "kadEm": "➕",
   "kadFakta": "Menambah nombor sama kepada setiap data menggerakkan min, median dan mod dengan jumlah yang sama. Mendarab pula mengubah kesemuanya mengikut faktor itu.",
   "bosKadNama": "Satu Nilai",
   "bosKadEm": "☝️",
   "bosKadFakta": "Jika hanya satu nilai berubah, min biasanya berubah tetapi median dan mod boleh kekal sama.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Tambah semua dan nilai 3. Apakah yang berlaku kepada mod?",
     "p": [
      "Kekal 3 kerana mod tidak berubah",
      "Menjadi 9 kerana didarab dengan 3",
      "Menjadi 0 kerana nilai ditolak",
      "Bertambah 3, iaitu menjadi 6"
     ],
     "b": 3,
     "u": "Semua nilai bertambah 3, jadi mod 3 menjadi 6."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih Tambah semua dan nilai 2. Berapakah min baharu?",
     "b": 6,
     "tol": 0.01,
     "u": "Data baharu 4, 5, 5, 7, 9 mempunyai jumlah 30. Min = 30 ÷ 5 = 6."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih Darab semua dan nilai 2. Berapakah median baharu?",
     "b": 6,
     "tol": 0.01,
     "u": "Data baharu 4, 6, 6, 10, 14. Nilai tengah ialah 6."
    },
    {
     "j": "pilih",
     "t": "Apabila setiap nilai ditambah dengan nombor yang sama, min, median dan mod:",
     "p": [
      "Ketiga-tiganya bertambah dengan nombor itu",
      "Hanya min yang berubah, median dan mod kekal",
      "Hanya mod yang berubah, min dan median kekal",
      "Ketiga-tiganya kekal sama seperti asal"
     ],
     "b": 0,
     "u": "Seluruh set data bergerak sama jauh, jadi ketiga-tiga sukatan bergerak sama jauh."
    },
    {
     "j": "pilih",
     "t": "Apabila setiap nilai didarab dengan 3, min baharu ialah:",
     "p": [
      "Min asal tambah 3",
      "3 kali min asal",
      "Min asal dibahagi 3",
      "Sama dengan min asal"
     ],
     "b": 1,
     "u": "Mendarab semua nilai dengan 3 mendarabkan jumlah dengan 3, jadi min juga didarab dengan 3."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih Tambah satu nilai dan nilai 5. Berapakah min baharu?",
     "b": 5,
     "tol": 0.01,
     "u": "Nilai 7 menjadi 12. Data 2, 3, 3, 5, 12 berjumlah 25, jadi min = 5."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih Tambah satu nilai. Mengapakah median dan mod tidak berubah?",
     "p": [
      "Kerana min sentiasa sama dengan median dalam semua data",
      "Kerana data langsung tidak berubah apabila satu nilai ditambah",
      "Nilai yang diubah bukan nilai tengah dan bukan mod",
      "Kerana median dan mod tidak pernah boleh berubah walau apa pun"
     ],
     "b": 2,
     "u": "Hanya nilai terbesar berubah. Nilai tengah ialah 3 dan nilai paling kerap ialah 3, jadi kedua-duanya kekal."
    },
    {
     "j": "nombor",
     "t": "Sekumpulan data mempunyai min 12. Setiap nilai ditambah dengan 5, kemudian didarab dengan 2. Berapakah min baharu?",
     "b": 34,
     "tol": 0.01,
     "u": "Tambah 5: min menjadi 17. Darab 2: min menjadi 34."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Min lima nombor ialah 4. Satu nombor bernilai 7 diganti dengan 12. Berapakah min baharu?",
    "b": 5,
    "tol": 0.01,
    "u": "Jumlah asal = 4 × 5 = 20. Jumlah baharu = 20 − 7 + 12 = 25. Min baharu = 25 ÷ 5 = 5."
   }
  },
  {
   "n": 3,
   "tempat": "Jadual Kelas",
   "sk": "12.1.3 / 12.1.4 Jadual kekerapan, kelas mod dan min data terkumpul",
   "lampiran": "pus3",
   "kadNama": "Kelas Data",
   "kadEm": "🗂️",
   "kadFakta": "Kelas dalam jadual kekerapan tidak boleh bertindih dan saiz selangnya mesti sama.",
   "bosKadNama": "Titik Tengah",
   "bosKadEm": "🎯",
   "bosKadFakta": "Min anggaran menggunakan titik tengah kelas, sebab nilai sebenar setiap data sudah tidak dapat dikesan dalam jadual.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam jadual kekerapan data terkumpul, kelas dibentuk dengan:",
     "p": [
      "Selang yang bertindih supaya tiada data tertinggal",
      "Selang yang saiznya berbeza-beza",
      "Satu kelas bagi setiap nilai",
      "Selang yang sama saiz dan tidak bertindih"
     ],
     "b": 3,
     "u": "Setiap data mesti masuk tepat satu kelas, jadi selang mesti sama saiz dan tidak bertindih."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan selang 5 dan pilih Kelas 2 (25 - 29). Berapakah kekerapannya?",
     "b": 4,
     "tol": 0.01,
     "u": "Markah 26, 27, 28 dan 29 berada dalam kelas 25 - 29. Kekerapan = 4."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah titik tengah kelas 30 - 34?",
     "b": 32,
     "tol": 0.01,
     "u": "Titik tengah = (30 + 34) ÷ 2 = 32."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1 dengan selang 5, kelas mod ialah:",
     "p": [
      "30 - 34 kerana kekerapan 5",
      "25 - 29 kerana kekerapan 4",
      "35 - 39 kerana kekerapan 3",
      "40 - 44 kerana kekerapan 3"
     ],
     "b": 0,
     "u": "Kelas 30 - 34 mempunyai kekerapan tertinggi, iaitu 5."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tukar selang kepada 10. Berapakah kekerapan kelas 30 - 39?",
     "b": 8,
     "tol": 0.01,
     "u": "Ada 8 markah dari 31 hingga 38 dalam kelas 30 - 39."
    },
    {
     "j": "nombor",
     "t": "Dengan selang 5 dalam Rajah 1, jumlah kekerapan × titik tengah (jumlah fx) ialah 665. Berapakah min anggaran markah, kepada 2 tempat perpuluhan?",
     "b": 33.25,
     "tol": 0.01,
     "u": "Min anggaran = 665 ÷ 20 = 33.25."
    },
    {
     "j": "pilih",
     "t": "Min anggaran bagi data terkumpul dikira dengan:",
     "p": [
      "Jumlah titik tengah dibahagi bilangan kelas sahaja",
      "Jumlah (kekerapan × titik tengah) dibahagi jumlah kekerapan",
      "Titik tengah kelas mod digandakan dengan kekerapannya",
      "Kekerapan paling besar dibahagi dua kali bilangan kelas"
     ],
     "b": 1,
     "u": "Setiap kelas diwakili titik tengahnya, ditimbang dengan kekerapan kelas itu."
    },
    {
     "j": "susun",
     "t": "Susun langkah membina jadual kekerapan bagi data terkumpul.",
     "p": [
      "Tentukan julat data dan saiz selang kelas",
      "Tulis kelas yang tidak bertindih",
      "Kira kekerapan setiap kelas",
      "Semak jumlah kekerapan sama dengan bilangan data"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Semak akhir memastikan tiada data tertinggal atau dikira dua kali."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Dalam Rajah 1, tetapkan selang 10. Berapakah min anggaran markah, kepada 1 tempat perpuluhan?",
    "b": 33.5,
    "tol": 0.05,
    "u": "Titik tengah 24.5, 34.5 dan 44.5 dengan kekerapan 7, 8 dan 5. Jumlah fx = 171.5 + 276 + 222.5 = 670. Min anggaran = 670 ÷ 20 = 33.5."
   }
  },
  {
   "n": 4,
   "tempat": "Papan Skor",
   "sk": "12.1.6 Mod, min dan median daripada perwakilan data",
   "lampiran": "pus4",
   "kadNama": "Palang Tertinggi",
   "kadEm": "📶",
   "kadFakta": "Dalam carta palang, mod ialah nilai pada palang paling tinggi.",
   "bosKadNama": "Batang dan Daun",
   "bosKadEm": "🌿",
   "bosKadFakta": "Plot batang dan daun mengekalkan setiap nilai asal, jadi kita boleh membaca mod dan median terus daripadanya.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah jumlah bilangan data (jumlah kekerapan)?",
     "b": 14,
     "tol": 0.01,
     "u": "Ada 14 murid dalam data itu."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah mod masa bacaan (minit)?",
     "b": 27,
     "tol": 0.01,
     "u": "Nilai 27 muncul 3 kali, paling banyak."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah median masa bacaan (minit)?",
     "b": 29,
     "tol": 0.01,
     "u": "Ada 14 data. Nilai ke-7 ialah 28 dan nilai ke-8 ialah 30. Median = (28 + 30) ÷ 2 = 29."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah min masa bacaan (minit), kepada 1 tempat perpuluhan?",
     "b": 29.6,
     "tol": 0.05,
     "u": "Jumlah masa ialah 414 minit. Min = 414 ÷ 14 = 29.6."
    },
    {
     "j": "pilih",
     "t": "Dalam carta palang, mod ialah nilai yang mempunyai:",
     "p": [
      "Palang paling pendek",
      "Palang di tengah carta",
      "Palang paling tinggi",
      "Palang paling kiri"
     ],
     "b": 2,
     "u": "Palang paling tinggi bermaksud kekerapan tertinggi."
    },
    {
     "j": "pilih",
     "t": "Dalam plot batang dan daun, median dicari dengan:",
     "p": [
      "Memilih batang yang paling besar nilainya",
      "Menjumlahkan semua batang lalu dibahagi dua",
      "Memilih batang yang mempunyai daun paling banyak",
      "Mengira daun dari awal hingga nilai tengah"
     ],
     "b": 3,
     "u": "Daun sudah tersusun, jadi kira sehingga kedudukan tengah."
    },
    {
     "j": "pilih",
     "t": "Dalam jadual kekerapan, lajur kekerapan longgokan (Σf) paling membantu mencari:",
     "p": [
      "Median kedudukan",
      "Mod paling kerap",
      "Julat sebaran data",
      "Min purata data"
     ],
     "b": 0,
     "u": "Jumlah longgokan menunjukkan di mana kedudukan tengah berada."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapa daun berada pada batang 3 dalam paparan batang dan daun?",
     "b": 7,
     "tol": 0.01,
     "u": "Nilai dari 30 hingga 39 ialah 30, 30, 32, 33, 35, 35 dan 36, iaitu 7 daun."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Seorang murid dengan masa bacaan 40 minit ditambah kepada data dalam Rajah 1. Berapakah median baharu (minit)?",
    "b": 30,
    "tol": 0.01,
    "u": "Kini ada 15 data. Nilai ke-8 selepas disusun ialah 30, jadi median baharu = 30."
   }
  },
  {
   "n": 5,
   "tempat": "Pasar Ekstrem",
   "sk": "12.1.5 Memilih sukatan yang sesuai, termasuk data bernilai ekstrem",
   "lampiran": "pus5",
   "kadNama": "Nilai Ekstrem",
   "kadEm": "🚀",
   "kadFakta": "Nilai ekstrem menarik min ke arahnya, tetapi median dan mod biasanya tidak berganjak.",
   "bosKadNama": "Pilih Yang Adil",
   "bosKadEm": "⚖️",
   "bosKadFakta": "Apabila data mempunyai nilai ekstrem, median selalunya lebih adil untuk mewakili kebanyakan data.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan nilai terakhir 8. Berapakah median?",
     "b": 7,
     "tol": 0.01,
     "u": "Data disusun: 4, 5, 5, 6, 7, 7, 7, 8, 9. Nilai kelima ialah 7."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan nilai terakhir 40. Berapakah min?",
     "b": 10,
     "tol": 0.01,
     "u": "Jumlah = 50 + 40 = 90. Min = 90 ÷ 9 = 10."
    },
    {
     "j": "pilih",
     "t": "Apabila nilai terakhir dalam Rajah 1 ditukar daripada 10 kepada 80, ukuran yang berubah paling banyak ialah:",
     "p": [
      "Median",
      "Min",
      "Mod",
      "Ketiga-tiganya sama banyak"
     ],
     "b": 1,
     "u": "Median kekal 7 dan mod kekal 7, tetapi min naik daripada 6.7 kepada 14.4."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan nilai terakhir 80. Berapakah min, kepada 1 tempat perpuluhan?",
     "b": 14.4,
     "tol": 0.05,
     "u": "Jumlah = 50 + 80 = 130. Min = 130 ÷ 9 = 14.4."
    },
    {
     "j": "pilih",
     "t": "Nilai ekstrem dalam satu set data ialah nilai yang:",
     "p": [
      "Paling kerap muncul dalam set data itu",
      "Tepat di tengah selepas data disusun",
      "Jauh berbeza daripada kebanyakan nilai lain",
      "Sama nilainya dengan min bagi data itu"
     ],
     "b": 2,
     "u": "Nilai ekstrem ialah nilai yang jauh terpencil daripada kelompok data yang lain."
    },
    {
     "j": "pilih",
     "t": "Untuk data yang mempunyai nilai ekstrem, sukatan yang paling sesuai mewakili kebanyakan data ialah:",
     "p": [
      "Min",
      "Jumlah",
      "Nilai terbesar",
      "Median"
     ],
     "b": 3,
     "u": "Median tidak banyak terkesan oleh nilai ekstrem."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan nilai terakhir 80. Berapakah julat?",
     "b": 76,
     "tol": 0.01,
     "u": "Julat = 80 − 4 = 76."
    },
    {
     "j": "pilih",
     "t": "Gaji lima orang pekerja dan seorang pengurus (RM ribu) ialah 2, 2, 3, 3, 4 dan 40. Mengapakah min (RM9 ribu) tidak sesuai mewakili gaji kebanyakan?",
     "p": [
      "Nilai ekstrem 40 menarik min menjadi terlalu tinggi",
      "Min sentiasa salah untuk data gaji seperti ini",
      "Mod lebih besar daripada min dalam data ini",
      "Median tidak wujud bagi data seperti ini"
     ],
     "b": 0,
     "u": "Kebanyakan gaji hanya 2 hingga 4, tetapi satu nilai 40 menaikkan min kepada 9."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Dalam Rajah 1, nilai terakhir ialah 80. Pilih SEMUA pernyataan yang BENAR.",
    "p": [
     "Min lebih besar daripada median",
     "Median masih 7",
     "Julat ialah 76",
     "Mod menjadi 80",
     "Min masih kurang daripada 8",
     "Median menjadi 14.4"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Min = 14.4 lebih besar daripada median 7. Median kekal 7 dan julat = 80 − 4 = 76. Mod kekal 7, dan min bukan kurang daripada 8."
   }
  },
  {
   "n": 6,
   "tempat": "Bilik Debat",
   "sk": "12.1.7 Perbandingan set data, ramalan dan hujah",
   "lampiran": "pus6",
   "kadNama": "Julat",
   "kadEm": "📏",
   "kadFakta": "Julat ialah nilai terbesar tolak nilai terkecil. Ia menunjukkan betapa tersebarnya data.",
   "bosKadNama": "Hujah Bernas",
   "bosKadEm": "💬",
   "bosKadFakta": "Hujah yang meyakinkan menggunakan lebih daripada satu sukatan, bukan min sahaja.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih Kelas B biasa dan ukuran Julat. Berapakah julat markah Kelas B?",
     "b": 23,
     "tol": 0.01,
     "u": "Julat = 75 − 52 = 23."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah median markah Kelas A?",
     "b": 65,
     "tol": 0.01,
     "u": "Ada 8 markah. Nilai ke-4 ialah 64 dan nilai ke-5 ialah 66. Median = 65."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah min markah Kelas A, kepada 2 tempat perpuluhan?",
     "b": 64.75,
     "tol": 0.01,
     "u": "Jumlah markah ialah 518. Min = 518 ÷ 8 = 64.75."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih Kelas B ada ekstrem. Berapakah min markah Kelas B, kepada 2 tempat perpuluhan?",
     "b": 67.75,
     "tol": 0.01,
     "u": "Jumlah markah ialah 542. Min = 542 ÷ 8 = 67.75."
    },
    {
     "j": "pilih",
     "t": "Kepentingan julat apabila membandingkan dua set data ialah:",
     "p": [
      "Menunjukkan nilai yang paling kerap muncul",
      "Menunjukkan betapa tersebarnya data",
      "Menunjukkan nilai di tengah",
      "Menggantikan min dan median"
     ],
     "b": 1,
     "u": "Dua set boleh mempunyai min atau median sama tetapi taburan yang sangat berbeza."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, Kelas B biasa dan Kelas A mempunyai median yang sama, iaitu 65. Kelas manakah lebih konsisten markahnya?",
     "p": [
      "Kelas B, sebab julatnya lebih besar daripada A",
      "Kedua-duanya sama konsisten kerana median sama",
      "Kelas A, sebab julatnya lebih kecil daripada B",
      "Tidak dapat ditentukan tanpa min kedua-dua kelas"
     ],
     "b": 2,
     "u": "Julat A ialah 16 dan julat B ialah 23. Julat lebih kecil bermaksud markah lebih dekat antara satu sama lain."
    },
    {
     "j": "nombor",
     "t": "Min markah Kelas A ialah 64.75 daripada 8 murid. Seorang murid baharu mendapat 80 markah. Berapakah min baharu, kepada 2 tempat perpuluhan?",
     "b": 66.44,
     "tol": 0.01,
     "u": "Jumlah baharu = 518 + 80 = 598. Min baharu = 598 ÷ 9 = 66.44."
    },
    {
     "j": "pilih",
     "t": "Apabila Kelas B ada ekstrem 98, min B (67.75) lebih tinggi daripada min A (64.75) tetapi median kedua-dua kelas sama. Kesimpulan yang paling adil ialah:",
     "p": [
      "Kelas B lebih baik dalam semua aspek kerana min lebih tinggi",
      "Kelas A lebih teruk dalam semua aspek kerana min lebih rendah",
      "Tiada apa yang boleh disimpulkan tentang kedua-dua kelas itu",
      "Min B naik kerana satu markah ekstrem, bukan semua murid B lebih baik"
     ],
     "b": 3,
     "u": "Median sama bermaksud kebanyakan murid setara. Kenaikan min hanya disebabkan satu markah 98."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Pengetua mahu memilih satu kelas untuk hadiah 'Prestasi Terbaik'. Guru Kelas B berhujah bahawa kelasnya patut menang kerana min markahnya lebih tinggi. Data Rajah 1 menunjukkan Kelas B ada satu markah 98.",
    "arahan": "Bandingkan Kelas A dan Kelas B menggunakan min, median dan julat. Tulis hujah yang meyakinkan tentang kelas mana yang patut menang, dan nyatakan sukatan mana yang paling adil serta sebabnya.",
    "u": "Jawapan TP6 yang kukuh membandingkan lebih daripada satu sukatan (min 64.75 berbanding 67.75, median sama 65, julat 16 berbanding 46), mengenal pasti markah 98 sebagai nilai ekstrem, menjustifikasikan sukatan yang dipilih dan menyimpulkan dengan hujah yang seimbang."
   }
  }
 ]
};
