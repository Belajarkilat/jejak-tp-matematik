/* Bank soalan — Matematik Ting. 4 · Bab 5 Rangkaian dalam Teori Graf.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m4b5.js
   kemudian jalankan: node bina.js m4b5

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 4, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m4b5"] =
{
 "id": "m4b5",
 "tingkatan": 4,
 "kod": "5.0 Rangkaian dalam Teori Graf",
 "tajuk": "Kota Rangkaian",
 "subtajuk": "Matematik Ting. 4 · Bab 5 Rangkaian dalam Teori Graf",
 "spi": [
  "Mempamerkan pengetahuan asas tentang rangkaian.",
  "Mempamerkan kefahaman tentang rangkaian.",
  "Mengaplikasikan kefahaman tentang rangkaian untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang rangkaian dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang rangkaian dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang rangkaian dalam konteks penyelesaian masalah bukan rutin secara kreatif."
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
  "1": "{n} dapat mengenal bucu, tepi dan darjah dalam suatu graf, termasuk gelung dan berbilang tepi. Langkah seterusnya ialah membezakan graf terarah dengan graf tak terarah.",
  "2": "{n} memahami perbezaan graf terarah dan tak terarah serta graf berpemberat dan tak berpemberat, dan dapat mengira darjah masuk dan darjah keluar. Perlu lebih latihan subgraf dan pokok.",
  "3": "{n} boleh mengenal subgraf dan menentukan sama ada suatu subgraf ialah pokok menggunakan syarat terkait, tanpa kitaran dan tepi = bucu − 1.",
  "4": "{n} mampu mewakilkan maklumat dalam rangkaian berpemberat dan mencari laluan terpendek. Seterusnya, latih masalah kos optimum dengan pelbagai kriteria.",
  "5": "{n} dapat menyelesaikan masalah kos optimum yang melibatkan jarak, masa dan perbelanjaan serta membuat keputusan mengikut kekangan. Sudah bersedia untuk masalah bukan rutin.",
  "6": "{n} berjaya mereka rangkaian sendiri, mencadangkan penambahbaikan yang mengurangkan kos optimum, dan menilai kelebihan serta kekurangannya. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Rangkaian dalam Teori Graf. Cadangan: ulang hentian pertama dengan Rajah 1 dan kira darjah setiap bucu bersama rakan sebaya."
 },
 "lampiran": {
  "d": "<figure class=\"figure jmi\" data-w=\"t4graf\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4graf&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Graf G dengan gelung di C dan dua tepi antara B dan E. Pilih bucu.&quot;,&quot;alt&quot;:&quot;Rajah interaktif graf tak terarah dengan lima bucu A hingga E, satu gelung dan berbilang tepi; cip memilih bucu dan darjahnya dipaparkan&quot;,&quot;mod&quot;:&quot;darjah&quot;,&quot;tajuk&quot;:&quot;Graf G&quot;,&quot;bucu&quot;:[{&quot;n&quot;:&quot;A&quot;,&quot;x&quot;:40,&quot;y&quot;:64},{&quot;n&quot;:&quot;B&quot;,&quot;x&quot;:130,&quot;y&quot;:52},{&quot;n&quot;:&quot;C&quot;,&quot;x&quot;:220,&quot;y&quot;:72},{&quot;n&quot;:&quot;D&quot;,&quot;x&quot;:70,&quot;y&quot;:170},{&quot;n&quot;:&quot;E&quot;,&quot;x&quot;:190,&quot;y&quot;:172}],&quot;tepi&quot;:[[&quot;A&quot;,&quot;B&quot;],[&quot;B&quot;,&quot;C&quot;],[&quot;A&quot;,&quot;D&quot;],[&quot;D&quot;,&quot;E&quot;],[&quot;E&quot;,&quot;C&quot;],[&quot;B&quot;,&quot;E&quot;],[&quot;B&quot;,&quot;E&quot;],[&quot;C&quot;,&quot;C&quot;],[&quot;B&quot;,&quot;D&quot;]]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 304\" role=\"img\" aria-label=\"Rajah graf dengan 5 bucu dan 9 tepi; bucu A dipilih\"><text x=\"130\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Graf G</text><line x1=\"40\" y1=\"64\" x2=\"130\" y2=\"52\" stroke=\"var(--vena)\" stroke-width=\"3\"></line><line x1=\"130\" y1=\"52\" x2=\"220\" y2=\"72\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><line x1=\"40\" y1=\"64\" x2=\"70\" y2=\"170\" stroke=\"var(--vena)\" stroke-width=\"3\"></line><line x1=\"70\" y1=\"170\" x2=\"190\" y2=\"172\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><line x1=\"190\" y1=\"172\" x2=\"220\" y2=\"72\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><line x1=\"130\" y1=\"52\" x2=\"190\" y2=\"172\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><path d=\"M130 52 Q127.8 128.1 190 172\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"2\"></path><circle cx=\"220\" cy=\"50\" r=\"11\" fill=\"none\" stroke=\"var(--ink3)\" stroke-width=\"2\"></circle><line x1=\"130\" y1=\"52\" x2=\"70\" y2=\"170\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><circle cx=\"40\" cy=\"64\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"40\" y=\"68\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">A</text><circle cx=\"130\" cy=\"52\" r=\"13\" fill=\"var(--surface)\" stroke=\"var(--ink2)\" stroke-width=\"1.8\"></circle><text x=\"130\" y=\"56\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">B</text><circle cx=\"220\" cy=\"72\" r=\"13\" fill=\"var(--surface)\" stroke=\"var(--ink2)\" stroke-width=\"1.8\"></circle><text x=\"220\" y=\"76\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">C</text><circle cx=\"70\" cy=\"170\" r=\"13\" fill=\"var(--surface)\" stroke=\"var(--ink2)\" stroke-width=\"1.8\"></circle><text x=\"70\" y=\"174\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">D</text><circle cx=\"190\" cy=\"172\" r=\"13\" fill=\"var(--surface)\" stroke=\"var(--ink2)\" stroke-width=\"1.8\"></circle><text x=\"190\" y=\"176\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">E</text><text class=\"jmi-hasil\" x=\"8\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--vena)\" font-weight=\"700\">Darjah bucu A = 2</text><text class=\"jmi-hasil\" x=\"8\" y=\"242\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">Bilangan tepi = 9</text><text class=\"jmi-hasil\" x=\"8\" y=\"260\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Jumlah darjah = 18 = 2 × 9</text><text class=\"jmi-hasil\" x=\"8\" y=\"278\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\" font-weight=\"700\">Bukan graf mudah:</text><text class=\"jmi-hasil\" x=\"8\" y=\"294\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">ada gelung dan berbilang tepi</text></svg></div><figcaption>Rajah 1 · Graf G dengan gelung di C dan dua tepi antara B dan E. Pilih bucu.</figcaption></figure>",
  "t": "<figure class=\"figure jmi\" data-w=\"t4graf\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4graf&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Rangkaian sosial: anak panah X → Y bermaksud X mengikuti Y. Pilih bucu.&quot;,&quot;alt&quot;:&quot;Rajah interaktif graf terarah lima pengguna media sosial A hingga E; cip memilih pengguna dan darjah masuk serta darjah keluar dipaparkan&quot;,&quot;mod&quot;:&quot;terarah&quot;,&quot;tajuk&quot;:&quot;Siapa mengikuti siapa?&quot;,&quot;makna&quot;:&quot;Darjah masuk = bilangan pengikut&quot;,&quot;bucu&quot;:[{&quot;n&quot;:&quot;A&quot;,&quot;x&quot;:130,&quot;y&quot;:48},{&quot;n&quot;:&quot;B&quot;,&quot;x&quot;:224,&quot;y&quot;:104},{&quot;n&quot;:&quot;C&quot;,&quot;x&quot;:188,&quot;y&quot;:190},{&quot;n&quot;:&quot;D&quot;,&quot;x&quot;:72,&quot;y&quot;:190},{&quot;n&quot;:&quot;E&quot;,&quot;x&quot;:36,&quot;y&quot;:104}],&quot;tepi&quot;:[[&quot;A&quot;,&quot;B&quot;],[&quot;B&quot;,&quot;A&quot;],[&quot;C&quot;,&quot;A&quot;],[&quot;D&quot;,&quot;A&quot;],[&quot;E&quot;,&quot;A&quot;],[&quot;A&quot;,&quot;D&quot;],[&quot;B&quot;,&quot;C&quot;],[&quot;D&quot;,&quot;E&quot;],[&quot;E&quot;,&quot;C&quot;]]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 272\" role=\"img\" aria-label=\"Rajah graf terarah; bucu A mempunyai darjah masuk 4 dan darjah keluar 2\"><text x=\"130\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Siapa mengikuti siapa?</text><line x1=\"130\" y1=\"48\" x2=\"224\" y2=\"104\" stroke=\"var(--arteri)\" stroke-width=\"2.6\"></line><path d=\"M211.1 96.3 L202.2 95.1 L205.8 89.1 Z\" fill=\"var(--arteri)\" stroke=\"var(--arteri)\" stroke-width=\"1\" stroke-linejoin=\"round\"></path><path d=\"M224 104 Q195.4 45.1 130 48\" fill=\"none\" stroke=\"var(--teal)\" stroke-width=\"2.6\"></path><path d=\"M145 47.3 L153.1 43.5 L153.4 50.5 Z\" fill=\"var(--teal)\" stroke=\"var(--teal)\" stroke-width=\"1\" stroke-linejoin=\"round\"></path><line x1=\"188\" y1=\"190\" x2=\"130\" y2=\"48\" stroke=\"var(--teal)\" stroke-width=\"2.6\"></line><path d=\"M135.7 61.9 L142.1 68.2 L135.6 70.9 Z\" fill=\"var(--teal)\" stroke=\"var(--teal)\" stroke-width=\"1\" stroke-linejoin=\"round\"></path><line x1=\"72\" y1=\"190\" x2=\"130\" y2=\"48\" stroke=\"var(--teal)\" stroke-width=\"2.6\"></line><path d=\"M124.3 61.9 L124.4 70.9 L117.9 68.2 Z\" fill=\"var(--teal)\" stroke=\"var(--teal)\" stroke-width=\"1\" stroke-linejoin=\"round\"></path><line x1=\"36\" y1=\"104\" x2=\"130\" y2=\"48\" stroke=\"var(--teal)\" stroke-width=\"2.6\"></line><path d=\"M117.1 55.7 L111.8 62.9 L108.2 56.9 Z\" fill=\"var(--teal)\" stroke=\"var(--teal)\" stroke-width=\"1\" stroke-linejoin=\"round\"></path><path d=\"M130 48 Q67.7 105.4 72 190\" fill=\"none\" stroke=\"var(--arteri)\" stroke-width=\"2.6\"></path><path d=\"M71.2 175 L67.3 166.9 L74.3 166.6 Z\" fill=\"var(--arteri)\" stroke=\"var(--arteri)\" stroke-width=\"1\" stroke-linejoin=\"round\"></path><line x1=\"224\" y1=\"104\" x2=\"188\" y2=\"190\" stroke=\"var(--ink3)\" stroke-width=\"1.8\"></line><path d=\"M193.8 176.2 L193.8 167.2 L200.2 169.9 Z\" fill=\"var(--ink3)\" stroke=\"var(--ink3)\" stroke-width=\"1\" stroke-linejoin=\"round\"></path><line x1=\"72\" y1=\"190\" x2=\"36\" y2=\"104\" stroke=\"var(--ink3)\" stroke-width=\"1.8\"></line><path d=\"M41.8 117.8 L48.2 124.1 L41.8 126.8 Z\" fill=\"var(--ink3)\" stroke=\"var(--ink3)\" stroke-width=\"1\" stroke-linejoin=\"round\"></path><line x1=\"36\" y1=\"104\" x2=\"188\" y2=\"190\" stroke=\"var(--ink3)\" stroke-width=\"1.8\"></line><path d=\"M174.9 182.6 L166 181.6 L169.5 175.5 Z\" fill=\"var(--ink3)\" stroke=\"var(--ink3)\" stroke-width=\"1\" stroke-linejoin=\"round\"></path><circle cx=\"130\" cy=\"48\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"130\" y=\"52\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">A</text><circle cx=\"224\" cy=\"104\" r=\"13\" fill=\"var(--surface)\" stroke=\"var(--ink2)\" stroke-width=\"1.8\"></circle><text x=\"224\" y=\"108\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">B</text><circle cx=\"188\" cy=\"190\" r=\"13\" fill=\"var(--surface)\" stroke=\"var(--ink2)\" stroke-width=\"1.8\"></circle><text x=\"188\" y=\"194\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">C</text><circle cx=\"72\" cy=\"190\" r=\"13\" fill=\"var(--surface)\" stroke=\"var(--ink2)\" stroke-width=\"1.8\"></circle><text x=\"72\" y=\"194\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">D</text><circle cx=\"36\" cy=\"104\" r=\"13\" fill=\"var(--surface)\" stroke=\"var(--ink2)\" stroke-width=\"1.8\"></circle><text x=\"36\" y=\"108\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">E</text><text class=\"jmi-hasil\" x=\"8\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" font-weight=\"700\">Darjah masuk A = 4</text><text class=\"jmi-hasil\" x=\"8\" y=\"242\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--arteri)\" font-weight=\"700\">Darjah keluar A = 2</text><text x=\"8\" y=\"262\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">Darjah masuk = bilangan pengikut</text></svg></div><figcaption>Rajah 1 · Rangkaian sosial: anak panah X → Y bermaksud X mengikuti Y. Pilih bucu.</figcaption></figure>",
  "p": "<figure class=\"figure jmi\" data-w=\"t4graf\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4graf&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Graf G dan lima subgraf S1 hingga S5. Pilih subgraf dan semak sama ada ia pokok.&quot;,&quot;alt&quot;:&quot;Rajah interaktif graf G dengan enam bucu; cip memilih subgraf yang diserlahkan dan rajah menyatakan sama ada ia terkait, ada kitaran dan merupakan pokok&quot;,&quot;mod&quot;:&quot;pokok&quot;,&quot;subgraf&quot;:[{&quot;nama&quot;:&quot;S1&quot;,&quot;tepi&quot;:[0,1,3,5,6]},{&quot;nama&quot;:&quot;S2&quot;,&quot;tepi&quot;:[0,2,3]},{&quot;nama&quot;:&quot;S3&quot;,&quot;tepi&quot;:[0,1,7]},{&quot;nama&quot;:&quot;S4&quot;,&quot;tepi&quot;:[5,6,7]},{&quot;nama&quot;:&quot;S5&quot;,&quot;tepi&quot;:[8,5,3,1]}],&quot;bucu&quot;:[{&quot;n&quot;:&quot;P&quot;,&quot;x&quot;:40,&quot;y&quot;:60},{&quot;n&quot;:&quot;Q&quot;,&quot;x&quot;:130,&quot;y&quot;:46},{&quot;n&quot;:&quot;R&quot;,&quot;x&quot;:220,&quot;y&quot;:60},{&quot;n&quot;:&quot;S&quot;,&quot;x&quot;:56,&quot;y&quot;:180},{&quot;n&quot;:&quot;T&quot;,&quot;x&quot;:130,&quot;y&quot;:122},{&quot;n&quot;:&quot;U&quot;,&quot;x&quot;:204,&quot;y&quot;:180}],&quot;tepi&quot;:[[&quot;P&quot;,&quot;Q&quot;],[&quot;Q&quot;,&quot;R&quot;],[&quot;P&quot;,&quot;T&quot;],[&quot;Q&quot;,&quot;T&quot;],[&quot;R&quot;,&quot;T&quot;],[&quot;S&quot;,&quot;T&quot;],[&quot;T&quot;,&quot;U&quot;],[&quot;S&quot;,&quot;U&quot;],[&quot;P&quot;,&quot;S&quot;]]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 290\" role=\"img\" aria-label=\"Rajah graf G dengan subgraf S1 yang mempunyai 6 bucu dan 5 tepi\"><text x=\"130\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Graf G (kelabu) dan subgraf (ungu)</text><line x1=\"40\" y1=\"60\" x2=\"130\" y2=\"46\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></line><line x1=\"130\" y1=\"46\" x2=\"220\" y2=\"60\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></line><line x1=\"40\" y1=\"60\" x2=\"130\" y2=\"122\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></line><line x1=\"130\" y1=\"46\" x2=\"130\" y2=\"122\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></line><line x1=\"220\" y1=\"60\" x2=\"130\" y2=\"122\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></line><line x1=\"56\" y1=\"180\" x2=\"130\" y2=\"122\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></line><line x1=\"130\" y1=\"122\" x2=\"204\" y2=\"180\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></line><line x1=\"56\" y1=\"180\" x2=\"204\" y2=\"180\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></line><line x1=\"40\" y1=\"60\" x2=\"56\" y2=\"180\" stroke=\"var(--line2)\" stroke-width=\"1.5\"></line><line x1=\"40\" y1=\"60\" x2=\"130\" y2=\"46\" stroke=\"var(--vena)\" stroke-width=\"3.5\"></line><line x1=\"130\" y1=\"46\" x2=\"220\" y2=\"60\" stroke=\"var(--vena)\" stroke-width=\"3.5\"></line><line x1=\"130\" y1=\"46\" x2=\"130\" y2=\"122\" stroke=\"var(--vena)\" stroke-width=\"3.5\"></line><line x1=\"56\" y1=\"180\" x2=\"130\" y2=\"122\" stroke=\"var(--vena)\" stroke-width=\"3.5\"></line><line x1=\"130\" y1=\"122\" x2=\"204\" y2=\"180\" stroke=\"var(--vena)\" stroke-width=\"3.5\"></line><circle cx=\"40\" cy=\"60\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"40\" y=\"64\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">P</text><circle cx=\"130\" cy=\"46\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"130\" y=\"50\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Q</text><circle cx=\"220\" cy=\"60\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"220\" y=\"64\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">R</text><circle cx=\"56\" cy=\"180\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"56\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">S</text><circle cx=\"130\" cy=\"122\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"130\" y=\"126\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">T</text><circle cx=\"204\" cy=\"180\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"204\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">U</text><text x=\"8\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Bucu = 6, tepi = 5</text><text class=\"jmi-hasil\" x=\"8\" y=\"242\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">Terkait</text><text class=\"jmi-hasil\" x=\"8\" y=\"260\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink2)\">Tiada kitaran</text><text class=\"jmi-hasil\" x=\"8\" y=\"280\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"13\" fill=\"var(--teal)\" font-weight=\"700\">Pokok ✓ (tepi = bucu − 1)</text></svg></div><figcaption>Rajah 1 · Graf G dan lima subgraf S1 hingga S5. Pilih subgraf dan semak sama ada ia pokok.</figcaption></figure>",
  "l": "<figure class=\"figure jmi\" data-w=\"t4graf\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4graf&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Peta jalan antara enam kampung, jarak dalam km. Pilih laluan dari A ke F.&quot;,&quot;alt&quot;:&quot;Rajah interaktif rangkaian berpemberat enam kampung dengan jarak dalam kilometer; cip memilih laluan dari A ke F dan jumlah jarak serta laluan terpendek dipaparkan&quot;,&quot;mod&quot;:&quot;laluan&quot;,&quot;mula&quot;:&quot;A&quot;,&quot;akhir&quot;:&quot;F&quot;,&quot;kriteria&quot;:[&quot;j&quot;],&quot;laluan&quot;:[[&quot;A&quot;,&quot;B&quot;,&quot;E&quot;,&quot;F&quot;],[&quot;A&quot;,&quot;B&quot;,&quot;D&quot;,&quot;F&quot;],[&quot;A&quot;,&quot;C&quot;,&quot;F&quot;],[&quot;A&quot;,&quot;B&quot;,&quot;D&quot;,&quot;E&quot;,&quot;F&quot;],[&quot;A&quot;,&quot;C&quot;,&quot;D&quot;,&quot;E&quot;,&quot;F&quot;]],&quot;bucu&quot;:[{&quot;n&quot;:&quot;A&quot;,&quot;x&quot;:28,&quot;y&quot;:118},{&quot;n&quot;:&quot;B&quot;,&quot;x&quot;:100,&quot;y&quot;:50},{&quot;n&quot;:&quot;C&quot;,&quot;x&quot;:100,&quot;y&quot;:190},{&quot;n&quot;:&quot;D&quot;,&quot;x&quot;:170,&quot;y&quot;:120},{&quot;n&quot;:&quot;E&quot;,&quot;x&quot;:236,&quot;y&quot;:56},{&quot;n&quot;:&quot;F&quot;,&quot;x&quot;:236,&quot;y&quot;:190}],&quot;tepi&quot;:[[&quot;A&quot;,&quot;B&quot;,{&quot;j&quot;:4}],[&quot;A&quot;,&quot;C&quot;,{&quot;j&quot;:7}],[&quot;B&quot;,&quot;D&quot;,{&quot;j&quot;:5}],[&quot;C&quot;,&quot;D&quot;,{&quot;j&quot;:3}],[&quot;B&quot;,&quot;E&quot;,{&quot;j&quot;:10}],[&quot;D&quot;,&quot;E&quot;,{&quot;j&quot;:4}],[&quot;D&quot;,&quot;F&quot;,{&quot;j&quot;:8}],[&quot;E&quot;,&quot;F&quot;,{&quot;j&quot;:3}],[&quot;C&quot;,&quot;F&quot;,{&quot;j&quot;:12}]]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 290\" role=\"img\" aria-label=\"Rajah rangkaian berpemberat dari A ke F; laluan A→B→E→F dipilih dengan kriteria jarak\"><text x=\"130\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Dari A ke F · label = jarak</text><line x1=\"28\" y1=\"118\" x2=\"100\" y2=\"50\" stroke=\"var(--vena)\" stroke-width=\"4\"></line><rect x=\"46.8\" y=\"75\" width=\"34.4\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"64\" y=\"87\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">4 km</text><line x1=\"28\" y1=\"118\" x2=\"100\" y2=\"190\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><rect x=\"46.8\" y=\"145\" width=\"34.4\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"64\" y=\"157\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">7 km</text><line x1=\"100\" y1=\"50\" x2=\"170\" y2=\"120\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><rect x=\"117.8\" y=\"76\" width=\"34.4\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"135\" y=\"88\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">5 km</text><line x1=\"100\" y1=\"190\" x2=\"170\" y2=\"120\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><rect x=\"117.8\" y=\"146\" width=\"34.4\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"135\" y=\"158\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">3 km</text><line x1=\"100\" y1=\"50\" x2=\"236\" y2=\"56\" stroke=\"var(--vena)\" stroke-width=\"4\"></line><rect x=\"147.5\" y=\"44\" width=\"41\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"168\" y=\"56\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">10 km</text><line x1=\"170\" y1=\"120\" x2=\"236\" y2=\"56\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><rect x=\"185.8\" y=\"79\" width=\"34.4\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"203\" y=\"91\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">4 km</text><line x1=\"170\" y1=\"120\" x2=\"236\" y2=\"190\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><rect x=\"185.8\" y=\"146\" width=\"34.4\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"203\" y=\"158\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">8 km</text><line x1=\"236\" y1=\"56\" x2=\"236\" y2=\"190\" stroke=\"var(--vena)\" stroke-width=\"4\"></line><rect x=\"218.8\" y=\"114\" width=\"34.4\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"236\" y=\"126\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">3 km</text><line x1=\"100\" y1=\"190\" x2=\"236\" y2=\"190\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><rect x=\"147.5\" y=\"181\" width=\"41\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"168\" y=\"193\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">12 km</text><circle cx=\"28\" cy=\"118\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"28\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">A</text><circle cx=\"100\" cy=\"50\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"100\" y=\"54\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">B</text><circle cx=\"100\" cy=\"190\" r=\"13\" fill=\"var(--surface)\" stroke=\"var(--ink2)\" stroke-width=\"1.8\"></circle><text x=\"100\" y=\"194\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">C</text><circle cx=\"170\" cy=\"120\" r=\"13\" fill=\"var(--surface)\" stroke=\"var(--ink2)\" stroke-width=\"1.8\"></circle><text x=\"170\" y=\"124\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">D</text><circle cx=\"236\" cy=\"56\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"236\" y=\"60\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">E</text><circle cx=\"236\" cy=\"190\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"236\" y=\"194\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">F</text><text x=\"8\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Laluan A→B→E→F</text><text class=\"jmi-hasil\" x=\"8\" y=\"242\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">Jumlah jarak = 17 km</text><text class=\"jmi-hasil\" x=\"8\" y=\"262\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Optimum: A→B→D→E→F</text><text class=\"jmi-hasil\" x=\"8\" y=\"280\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">(16 km)</text></svg></div><figcaption>Rajah 1 · Peta jalan antara enam kampung, jarak dalam km. Pilih laluan dari A ke F.</figcaption></figure>",
  "k": "<figure class=\"figure jmi cabar\" data-w=\"t4graf\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4graf&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Rumah (R) ke pantai (P): jarak, masa dan kos tol. Kira dahulu, kemudian semak.&quot;,&quot;alt&quot;:&quot;Rajah interaktif rangkaian berpemberat dari rumah ke pantai dengan tiga kriteria jarak, masa dan kos tol; cip memilih laluan dan kriteria, dalam mod cabar&quot;,&quot;mod&quot;:&quot;laluan&quot;,&quot;cabar&quot;:true,&quot;mula&quot;:&quot;R&quot;,&quot;akhir&quot;:&quot;P&quot;,&quot;kriteria&quot;:[&quot;j&quot;,&quot;m&quot;,&quot;k&quot;],&quot;laluan&quot;:[[&quot;R&quot;,&quot;A&quot;,&quot;C&quot;,&quot;P&quot;],[&quot;R&quot;,&quot;B&quot;,&quot;C&quot;,&quot;P&quot;],[&quot;R&quot;,&quot;B&quot;,&quot;P&quot;]],&quot;bucu&quot;:[{&quot;n&quot;:&quot;R&quot;,&quot;x&quot;:28,&quot;y&quot;:112},{&quot;n&quot;:&quot;A&quot;,&quot;x&quot;:104,&quot;y&quot;:48},{&quot;n&quot;:&quot;B&quot;,&quot;x&quot;:104,&quot;y&quot;:180},{&quot;n&quot;:&quot;C&quot;,&quot;x&quot;:178,&quot;y&quot;:112},{&quot;n&quot;:&quot;P&quot;,&quot;x&quot;:236,&quot;y&quot;:182}],&quot;tepi&quot;:[[&quot;R&quot;,&quot;A&quot;,{&quot;j&quot;:20,&quot;m&quot;:25,&quot;k&quot;:3}],[&quot;R&quot;,&quot;B&quot;,{&quot;j&quot;:15,&quot;m&quot;:30,&quot;k&quot;:0}],[&quot;A&quot;,&quot;C&quot;,{&quot;j&quot;:25,&quot;m&quot;:20,&quot;k&quot;:5}],[&quot;B&quot;,&quot;C&quot;,{&quot;j&quot;:18,&quot;m&quot;:35,&quot;k&quot;:0}],[&quot;C&quot;,&quot;P&quot;,{&quot;j&quot;:10,&quot;m&quot;:12,&quot;k&quot;:0}],[&quot;B&quot;,&quot;P&quot;,{&quot;j&quot;:40,&quot;m&quot;:45,&quot;k&quot;:1}]]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 290\" role=\"img\" aria-label=\"Rajah rangkaian berpemberat dari R ke P; laluan R→A→C→P dipilih dengan kriteria jarak\"><text x=\"130\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Dari R ke P · label = jarak</text><line x1=\"28\" y1=\"112\" x2=\"104\" y2=\"48\" stroke=\"var(--vena)\" stroke-width=\"4\"></line><rect x=\"45.5\" y=\"71\" width=\"41\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"66\" y=\"83\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">20 km</text><line x1=\"28\" y1=\"112\" x2=\"104\" y2=\"180\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><rect x=\"45.5\" y=\"137\" width=\"41\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"66\" y=\"149\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">15 km</text><line x1=\"104\" y1=\"48\" x2=\"178\" y2=\"112\" stroke=\"var(--vena)\" stroke-width=\"4\"></line><rect x=\"120.5\" y=\"71\" width=\"41\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"141\" y=\"83\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">25 km</text><line x1=\"104\" y1=\"180\" x2=\"178\" y2=\"112\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><rect x=\"120.5\" y=\"137\" width=\"41\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"141\" y=\"149\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">18 km</text><line x1=\"178\" y1=\"112\" x2=\"236\" y2=\"182\" stroke=\"var(--vena)\" stroke-width=\"4\"></line><rect x=\"186.5\" y=\"138\" width=\"41\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"207\" y=\"150\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">10 km</text><line x1=\"104\" y1=\"180\" x2=\"236\" y2=\"182\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><rect x=\"149.5\" y=\"172\" width=\"41\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"170\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">40 km</text><circle cx=\"28\" cy=\"112\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"28\" y=\"116\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">R</text><circle cx=\"104\" cy=\"48\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"104\" y=\"52\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">A</text><circle cx=\"104\" cy=\"180\" r=\"13\" fill=\"var(--surface)\" stroke=\"var(--ink2)\" stroke-width=\"1.8\"></circle><text x=\"104\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">B</text><circle cx=\"178\" cy=\"112\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"178\" y=\"116\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">C</text><circle cx=\"236\" cy=\"182\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"236\" y=\"186\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">P</text><text x=\"8\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Laluan R→A→C→P</text><text class=\"jmi-hasil\" x=\"8\" y=\"242\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">Jumlah jarak = 55 km</text><text class=\"jmi-hasil\" x=\"8\" y=\"262\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Optimum: R→B→C→P</text><text class=\"jmi-hasil\" x=\"8\" y=\"280\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">(43 km)</text></svg></div><figcaption>Rajah 1 · Rumah (R) ke pantai (P): jarak, masa dan kos tol. Kira dahulu, kemudian semak.</figcaption></figure>",
  "j": "<figure class=\"figure jmi\" data-w=\"t4graf\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;t4graf&quot;,&quot;kapsyen&quot;:&quot;Rajah 1 · Majlis daerah mahu membina satu jalan baharu (hijau). Bandingkan pelan.&quot;,&quot;alt&quot;:&quot;Rajah interaktif rangkaian jalan enam kampung dengan tiga pelan: tiada jalan baharu, jalan baharu A ke D atau jalan baharu C ke E; cip memilih pelan dan laluan&quot;,&quot;mod&quot;:&quot;laluan&quot;,&quot;mula&quot;:&quot;A&quot;,&quot;akhir&quot;:&quot;F&quot;,&quot;kriteria&quot;:[&quot;j&quot;],&quot;laluan&quot;:[[&quot;A&quot;,&quot;B&quot;,&quot;D&quot;,&quot;E&quot;,&quot;F&quot;],[&quot;A&quot;,&quot;D&quot;,&quot;E&quot;,&quot;F&quot;],[&quot;A&quot;,&quot;C&quot;,&quot;E&quot;,&quot;F&quot;]],&quot;pelan&quot;:[{&quot;nama&quot;:&quot;Tiada jalan baharu&quot;,&quot;tepi&quot;:[]},{&quot;nama&quot;:&quot;Jalan A–D&quot;,&quot;tepi&quot;:[[&quot;A&quot;,&quot;D&quot;,{&quot;j&quot;:6}]]},{&quot;nama&quot;:&quot;Jalan C–E&quot;,&quot;tepi&quot;:[[&quot;C&quot;,&quot;E&quot;,{&quot;j&quot;:5},{&quot;lengkung&quot;:1}]]}],&quot;bucu&quot;:[{&quot;n&quot;:&quot;A&quot;,&quot;x&quot;:28,&quot;y&quot;:118},{&quot;n&quot;:&quot;B&quot;,&quot;x&quot;:100,&quot;y&quot;:50},{&quot;n&quot;:&quot;C&quot;,&quot;x&quot;:100,&quot;y&quot;:190},{&quot;n&quot;:&quot;D&quot;,&quot;x&quot;:170,&quot;y&quot;:120},{&quot;n&quot;:&quot;E&quot;,&quot;x&quot;:236,&quot;y&quot;:56},{&quot;n&quot;:&quot;F&quot;,&quot;x&quot;:236,&quot;y&quot;:190}],&quot;tepi&quot;:[[&quot;A&quot;,&quot;B&quot;,{&quot;j&quot;:4}],[&quot;A&quot;,&quot;C&quot;,{&quot;j&quot;:7}],[&quot;B&quot;,&quot;D&quot;,{&quot;j&quot;:5}],[&quot;C&quot;,&quot;D&quot;,{&quot;j&quot;:3}],[&quot;B&quot;,&quot;E&quot;,{&quot;j&quot;:10}],[&quot;D&quot;,&quot;E&quot;,{&quot;j&quot;:4}],[&quot;D&quot;,&quot;F&quot;,{&quot;j&quot;:8}],[&quot;E&quot;,&quot;F&quot;,{&quot;j&quot;:3}],[&quot;C&quot;,&quot;F&quot;,{&quot;j&quot;:12}]]}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 290\" role=\"img\" aria-label=\"Rajah rangkaian berpemberat dari A ke F; laluan A→B→D→E→F dipilih dengan kriteria jarak\"><text x=\"130\" y=\"18\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">Dari A ke F · label = jarak</text><line x1=\"28\" y1=\"118\" x2=\"100\" y2=\"50\" stroke=\"var(--vena)\" stroke-width=\"4\"></line><rect x=\"46.8\" y=\"75\" width=\"34.4\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"64\" y=\"87\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">4 km</text><line x1=\"28\" y1=\"118\" x2=\"100\" y2=\"190\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><rect x=\"46.8\" y=\"145\" width=\"34.4\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"64\" y=\"157\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">7 km</text><line x1=\"100\" y1=\"50\" x2=\"170\" y2=\"120\" stroke=\"var(--vena)\" stroke-width=\"4\"></line><rect x=\"117.8\" y=\"76\" width=\"34.4\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"135\" y=\"88\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">5 km</text><line x1=\"100\" y1=\"190\" x2=\"170\" y2=\"120\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><rect x=\"117.8\" y=\"146\" width=\"34.4\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"135\" y=\"158\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">3 km</text><line x1=\"100\" y1=\"50\" x2=\"236\" y2=\"56\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><rect x=\"147.5\" y=\"44\" width=\"41\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"168\" y=\"56\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">10 km</text><line x1=\"170\" y1=\"120\" x2=\"236\" y2=\"56\" stroke=\"var(--vena)\" stroke-width=\"4\"></line><rect x=\"185.8\" y=\"79\" width=\"34.4\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"203\" y=\"91\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">4 km</text><line x1=\"170\" y1=\"120\" x2=\"236\" y2=\"190\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><rect x=\"185.8\" y=\"146\" width=\"34.4\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"203\" y=\"158\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">8 km</text><line x1=\"236\" y1=\"56\" x2=\"236\" y2=\"190\" stroke=\"var(--vena)\" stroke-width=\"4\"></line><rect x=\"218.8\" y=\"114\" width=\"34.4\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"236\" y=\"126\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">3 km</text><line x1=\"100\" y1=\"190\" x2=\"236\" y2=\"190\" stroke=\"var(--ink3)\" stroke-width=\"2\"></line><rect x=\"147.5\" y=\"181\" width=\"41\" height=\"16\" rx=\"4\" fill=\"var(--surface)\" stroke=\"var(--line)\" stroke-width=\"1\"></rect><text x=\"168\" y=\"193\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\" font-weight=\"700\">12 km</text><circle cx=\"28\" cy=\"118\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"28\" y=\"122\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">A</text><circle cx=\"100\" cy=\"50\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"100\" y=\"54\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">B</text><circle cx=\"100\" cy=\"190\" r=\"13\" fill=\"var(--surface)\" stroke=\"var(--ink2)\" stroke-width=\"1.8\"></circle><text x=\"100\" y=\"194\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">C</text><circle cx=\"170\" cy=\"120\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"170\" y=\"124\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">D</text><circle cx=\"236\" cy=\"56\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"236\" y=\"60\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">E</text><circle cx=\"236\" cy=\"190\" r=\"13\" fill=\"var(--gen-soft)\" stroke=\"var(--vena)\" stroke-width=\"2.5\"></circle><text x=\"236\" y=\"194\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" text-anchor=\"middle\" font-weight=\"700\">F</text><text x=\"8\" y=\"222\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Laluan A→B→D→E→F</text><text class=\"jmi-hasil\" x=\"8\" y=\"242\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\">Jumlah jarak = 16 km</text><text class=\"jmi-hasil\" x=\"8\" y=\"262\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Optimum: A→B→D→E→F</text><text class=\"jmi-hasil\" x=\"8\" y=\"280\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">(16 km)</text></svg></div><figcaption>Rajah 1 · Majlis daerah mahu membina satu jalan baharu (hijau). Bandingkan pelan.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Stesen Bucu",
   "sk": "5.1.1 Rangkaian sebagai graf; bucu, tepi dan darjah",
   "lampiran": "d",
   "kadNama": "Bucu dan Tepi",
   "kadEm": "🔵",
   "kadFakta": "Graf terdiri daripada bintik yang dipanggil bucu dan garis yang dipanggil tepi. Darjah suatu bucu ialah bilangan tepi yang bertemu di bucu itu.",
   "bosKadNama": "Jumlah Darjah",
   "bosKadEm": "➕",
   "bosKadFakta": "Setiap tepi menyumbang 2 kepada jumlah darjah (satu bagi setiap hujung), jadi jumlah darjah = 2 × bilangan tepi. Gelung menyumbang 2 kepada darjah bucunya.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam teori graf, bintik dan garis dalam suatu graf masing-masing dipanggil:",
     "p": [
      "bucu dan tepi",
      "tepi dan bucu",
      "titik dan sisi",
      "nod dan sempadan"
     ],
     "b": 0,
     "u": "Menurut DSKP: bintik dikenali sebagai bucu dan garis sebagai tepi."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih bucu A. Berapakah darjah bucu A?",
     "tol": 0.001000000001,
     "b": 2,
     "u": "Dua tepi bertemu di A: A–B dan A–D."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih bucu B. Berapakah darjah bucu B?",
     "tol": 0.001000000001,
     "b": 5,
     "u": "Tepi di B: B–A, B–C, B–D dan dua tepi B–E. Jumlah 5."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih bucu C. Berapakah darjah bucu C?",
     "tol": 0.001000000001,
     "b": 4,
     "u": "C–B dan C–E menyumbang 2, dan gelung di C menyumbang 2 lagi. Darjah C = 4."
    },
    {
     "j": "nombor",
     "t": "Berapakah bilangan tepi dalam graf G pada Rajah 1?",
     "tol": 0.001000000001,
     "b": 9,
     "u": "Kira setiap garis, termasuk gelung di C dan kedua-dua tepi B–E: 9 tepi."
    },
    {
     "j": "pilih",
     "t": "Graf G dalam Rajah 1 bukan graf mudah kerana:",
     "p": [
      "Ia mempunyai lebih daripada empat bucu",
      "Ia mempunyai gelung dan berbilang tepi",
      "Setiap bucunya berdarjah genap",
      "Graf itu tidak mempunyai sebarang anak panah"
     ],
     "b": 1,
     "u": "Graf mudah ialah graf tak terarah tanpa gelung dan tanpa berbilang tepi. G mempunyai gelung di C dan dua tepi B–E."
    },
    {
     "j": "pilih",
     "t": "Rangkaian ialah suatu graf yang:",
     "p": [
      "Mempunyai bucu yang semuanya berdarjah sifar",
      "Tidak mempunyai sebarang tepi langsung",
      "Mempunyai sekurang-kurangnya sepasang bintik berkait",
      "Mempunyai gelung pada setiap bucunya"
     ],
     "b": 2,
     "u": "Menurut DSKP, rangkaian ialah graf yang mempunyai sekurang-kurangnya sepasang bintik berkait."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah jumlah darjah semua bucu?",
     "tol": 0.001000000001,
     "b": 18,
     "u": "2 + 5 + 4 + 3 + 4 = 18, iaitu 2 × 9 tepi."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Suatu graf mudah mempunyai 6 bucu dan darjah setiap bucu ialah 3. Berapakah bilangan tepi graf itu?",
    "tol": 0.001000000001,
    "b": 9,
    "u": "Jumlah darjah = 6 × 3 = 18. Bilangan tepi = 18 ÷ 2 = 9."
   }
  },
  {
   "n": 2,
   "tempat": "Menara Pengikut",
   "sk": "5.1.2 Graf terarah dan graf tak terarah; berpemberat dan tak berpemberat",
   "lampiran": "t",
   "kadNama": "Graf Terarah",
   "kadEm": "➡️",
   "kadFakta": "Dalam graf terarah, setiap tepi mempunyai arah (anak panah). Darjah masuk = bilangan anak panah yang menuju ke bucu, darjah keluar = bilangan yang keluar dari bucu.",
   "bosKadNama": "Berpemberat",
   "bosKadEm": "⚖️",
   "bosKadFakta": "Graf berpemberat mempunyai nilai pada setiap tepi, seperti jarak, masa atau kos. Graf tak berpemberat hanya menunjukkan sama ada dua bucu berkait.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih bucu A. Berapakah darjah masuk bucu A?",
     "tol": 0.001000000001,
     "b": 4,
     "u": "Anak panah dari B, C, D dan E menuju ke A. Darjah masuk A = 4, iaitu A mempunyai 4 pengikut."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih bucu A. Berapakah darjah keluar bucu A?",
     "tol": 0.001000000001,
     "b": 2,
     "u": "A mengikuti B dan D, jadi darjah keluar A = 2."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, siapakah yang mempunyai paling ramai pengikut?",
     "p": [
      "B",
      "C",
      "E",
      "A"
     ],
     "b": 3,
     "u": "Bilangan pengikut = darjah masuk. A mempunyai darjah masuk 4, lebih tinggi daripada bucu lain."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, ada dua anak panah antara A dan B. Ini bermaksud:",
     "p": [
      "A dan B saling mengikuti",
      "A mengikuti B dua kali",
      "B tidak mengikuti A",
      "Tepi itu ialah satu gelung"
     ],
     "b": 0,
     "u": "A → B bermaksud A mengikuti B, dan B → A bermaksud B mengikuti A. Kedua-duanya saling mengikuti."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah jumlah darjah masuk semua bucu?",
     "tol": 0.001000000001,
     "b": 9,
     "u": "Setiap anak panah menyumbang 1 darjah masuk. Ada 9 anak panah, jadi jumlahnya 9 (sama dengan jumlah darjah keluar)."
    },
    {
     "j": "pilih",
     "t": "Antara situasi berikut, yang manakah paling sesuai diwakili oleh graf terarah?",
     "p": [
      "Rakan sekelas yang saling mengenali",
      "Jalan sehala di bandar",
      "Jalan dua hala antara dua pekan",
      "Kabel elektrik antara dua rumah"
     ],
     "b": 1,
     "u": "Jalan sehala hanya boleh dilalui satu arah, jadi tepinya memerlukan anak panah. Hubungan saling mengenali tiada arah."
    },
    {
     "j": "pilih",
     "t": "Perbezaan utama graf berpemberat dengan graf tak berpemberat ialah graf berpemberat:",
     "p": [
      "Mempunyai anak panah pada setiap tepi",
      "Mempunyai lebih banyak bucu",
      "Mempunyai nilai pada setiap tepi",
      "Tidak mempunyai sebarang gelung"
     ],
     "b": 2,
     "u": "Pemberat ialah nilai seperti jarak, masa atau kos pada tepi. Anak panah menentukan graf terarah, bukan berpemberat."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, bucu yang mempunyai darjah keluar lebih besar daripada darjah masuk ialah:",
     "p": [
      "A dan C",
      "A, B dan C",
      "C, D dan E",
      "B, D dan E"
     ],
     "b": 3,
     "u": "B: keluar 2, masuk 1. D: keluar 2, masuk 1. E: keluar 2, masuk 1. A dan C mempunyai darjah masuk yang lebih besar."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Sebuah graf menunjukkan penerbangan terus antara bandar dengan masa penerbangan pada setiap tepi, dan sesetengah laluan sehala. Graf ini ialah:",
    "p": [
     "Graf terarah dan berpemberat",
     "Graf tak terarah dan berpemberat",
     "Graf terarah dan tak berpemberat",
     "Graf tak terarah dan tak berpemberat"
    ],
    "b": 0,
    "u": "Laluan sehala memerlukan arah (terarah) dan masa penerbangan ialah pemberat (berpemberat)."
   }
  },
  {
   "n": 3,
   "tempat": "Taman Pokok",
   "sk": "5.1.3 Subgraf dan pokok",
   "lampiran": "p",
   "kadNama": "Subgraf",
   "kadEm": "🌿",
   "kadFakta": "Subgraf ialah sebahagian daripada graf: bucu dan tepinya semua diambil daripada graf asal.",
   "bosKadNama": "Pokok",
   "bosKadEm": "🌳",
   "bosKadFakta": "Pokok ialah graf terkait tanpa kitaran. Bagi pokok, bilangan tepi = bilangan bucu − 1.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih S1. Adakah S1 suatu pokok?",
     "p": [
      "Bukan; ia mempunyai kitaran P–Q–T",
      "Ya; terkait, tiada kitaran, 5 tepi bagi 6 bucu",
      "Bukan; ia tidak terkait",
      "Ya; kerana setiap bucu berdarjah 2"
     ],
     "b": 1,
     "u": "S1 mempunyai 6 bucu dan 5 tepi, terkait dan tanpa kitaran, jadi ia pokok (malah pokok merentang bagi G)."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih S2. Mengapakah S2 bukan pokok?",
     "p": [
      "Ia tidak terkait",
      "Ia tidak mempunyai bucu T",
      "Ia mempunyai kitaran P–Q–T",
      "Bilangan tepinya kurang daripada bucu"
     ],
     "b": 2,
     "u": "S2 mempunyai tepi P–Q, Q–T dan P–T yang membentuk kitaran. 3 bucu tetapi 3 tepi, lebih daripada 3 − 1."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih S3. Mengapakah S3 bukan pokok?",
     "p": [
      "Ia mempunyai kitaran",
      "Ia mempunyai gelung",
      "Bilangan tepinya terlalu banyak",
      "Ia tidak terkait"
     ],
     "b": 3,
     "u": "S3 terdiri daripada P–Q–R dan S–U yang terpisah. Pokok mesti terkait."
    },
    {
     "j": "pilih",
     "t": "Dalam Rajah 1, pilih S5. Kesimpulan yang betul ialah:",
     "p": [
      "S5 ialah pokok tetapi tidak merangkumi bucu U",
      "S5 ialah pokok yang merangkumi semua bucu G",
      "S5 bukan pokok kerana mempunyai kitaran",
      "S5 bukan pokok kerana tidak terkait"
     ],
     "b": 0,
     "u": "S5 mempunyai 5 bucu (P, Q, R, S, T) dan 4 tepi, terkait dan tanpa kitaran. Bucu U tiada dalam S5."
    },
    {
     "j": "nombor",
     "t": "Suatu pokok mempunyai 8 bucu. Berapakah bilangan tepinya?",
     "tol": 0.001000000001,
     "b": 7,
     "u": "Bagi pokok, tepi = bucu − 1 = 8 − 1 = 7."
    },
    {
     "j": "nombor",
     "t": "Graf G dalam Rajah 1 mempunyai 6 bucu dan 9 tepi. Berapakah bilangan tepi yang mesti dibuang untuk mendapatkan pokok merentang?",
     "tol": 0.001000000001,
     "b": 4,
     "u": "Pokok merentang dengan 6 bucu mempunyai 5 tepi. Buang 9 − 5 = 4 tepi."
    },
    {
     "j": "pilih",
     "t": "Antara berikut, yang manakah BUKAN subgraf bagi graf G dalam Rajah 1?",
     "p": [
      "Graf dengan tepi P–Q dan Q–R",
      "Graf dengan tepi P–R",
      "Graf dengan bucu T sahaja",
      "Graf dengan tepi S–T dan T–U"
     ],
     "b": 1,
     "u": "Tiada tepi P–R dalam G, jadi graf itu tidak boleh menjadi subgraf G."
    },
    {
     "j": "susun",
     "t": "Susun langkah menyemak sama ada suatu subgraf ialah pokok.",
     "p": [
      "Kira bilangan bucu dan tepi subgraf",
      "Semak sama ada tepi = bucu − 1",
      "Semak sama ada setiap bucu boleh dihubungi",
      "Pastikan tiada kitaran dalam subgraf"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Pokok mesti memenuhi tiga syarat: tepi = bucu − 1, terkait dan tanpa kitaran."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA pernyataan yang BENAR tentang pokok.",
    "p": [
     "Pokok ialah graf yang terkait",
     "Pokok tidak mempunyai kitaran",
     "Pokok dengan n bucu mempunyai n − 1 tepi",
     "Pokok mesti mempunyai gelung",
     "Pokok dengan 5 bucu mempunyai 5 tepi",
     "Pokok ialah graf yang tidak terkait"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Pokok terkait, tanpa kitaran (jadi tanpa gelung) dan mempunyai n − 1 tepi. Pokok 5 bucu mempunyai 4 tepi."
   }
  },
  {
   "n": 4,
   "tempat": "Peta Kampung",
   "sk": "5.1.4 / 5.1.5 Mewakilkan maklumat dan masalah rangkaian",
   "lampiran": "l",
   "kadNama": "Laluan Terpendek",
   "kadEm": "🚌",
   "kadFakta": "Untuk mencari laluan terpendek, bandingkan jumlah pemberat bagi setiap laluan yang mungkin, dan pilih yang terkecil.",
   "bosKadNama": "Kebaikan Rangkaian",
   "bosKadEm": "🗺️",
   "bosKadFakta": "Rangkaian pengangkutan lebih ringkas daripada peta: ia hanya menunjukkan sambungan dan pemberat, jadi laluan mudah dibandingkan. Namun ia tidak menunjukkan bentuk sebenar jalan.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih laluan A→B→E→F. Berapakah jumlah jarak, dalam km?",
     "tol": 0.001000000001,
     "b": 17,
     "u": "4 + 10 + 3 = 17 km."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih laluan A→C→F. Berapakah jumlah jarak, dalam km?",
     "tol": 0.001000000001,
     "b": 19,
     "u": "7 + 12 = 19 km."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih laluan A→B→D→E→F. Berapakah jumlah jarak, dalam km?",
     "tol": 0.001000000001,
     "b": 16,
     "u": "4 + 5 + 4 + 3 = 16 km."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan Rajah 1, laluan terpendek dari A ke F ialah:",
     "p": [
      "A→B→E→F",
      "A→C→F",
      "A→B→D→E→F",
      "A→C→D→E→F"
     ],
     "b": 2,
     "u": "Bandingkan: A→B→D→E→F = 16 km, A→B→E→F = 17 km, A→C→D→E→F = 17 km, A→C→F = 19 km."
    },
    {
     "j": "pilih",
     "t": "Laluan terpendek dalam Rajah 1 melalui lebih banyak kampung daripada laluan A→C→F. Apakah kesimpulannya?",
     "p": [
      "Laluan yang melalui sedikit bucu selalu terpendek",
      "Bilangan tepi menentukan jumlah jarak",
      "Laluan A→C→F ialah laluan terpendek",
      "Laluan dengan lebih banyak bucu boleh menjadi lebih pendek"
     ],
     "b": 3,
     "u": "Jumlah jarak bergantung pada pemberat, bukan bilangan tepi. 16 km melalui 4 tepi lebih pendek daripada 19 km melalui 2 tepi."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, berapakah darjah bucu D?",
     "tol": 0.001000000001,
     "b": 4,
     "u": "D disambungkan kepada B, C, E dan F."
    },
    {
     "j": "pilih",
     "t": "Antara berikut, yang manakah kelebihan rangkaian pengangkutan berbanding peta?",
     "p": [
      "Sambungan dan pemberat mudah dibandingkan",
      "Ia menunjukkan bentuk sebenar setiap jalan",
      "Ia menunjukkan bangunan di tepi jalan",
      "Ia sentiasa dilukis mengikut skala"
     ],
     "b": 0,
     "u": "Rangkaian meringkaskan maklumat kepada bucu, tepi dan pemberat. Bentuk sebenar jalan dan skala ialah kelebihan peta."
    },
    {
     "j": "nombor",
     "t": "Seorang pemandu bas bertolak dari A, singgah di D, kemudian ke F melalui laluan terpendek. Berapakah jumlah jarak, dalam km?",
     "tol": 0.001000000001,
     "b": 16,
     "u": "A ke D terpendek: A→B→D = 9 km (A→C→D = 10 km). D ke F terpendek: D→E→F = 7 km (D→F = 8 km). Jumlah 16 km."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Jalan B–D dalam Rajah 1 ditutup untuk dibaiki. Berapakah jarak terpendek baharu dari A ke F, dalam km?",
    "tol": 0.001000000001,
    "b": 17,
    "u": "Tanpa B–D: A→B→E→F = 17, A→C→D→E→F = 17, A→C→F = 19. Jarak terpendek baharu ialah 17 km."
   }
  },
  {
   "n": 5,
   "tempat": "Jalan ke Pantai",
   "sk": "5.1.5 Masalah kos optimum (masa, jarak dan perbelanjaan)",
   "lampiran": "k",
   "kadNama": "Kos Optimum",
   "kadEm": "🏖️",
   "kadFakta": "Kos dalam rangkaian boleh bermaksud jarak, masa atau perbelanjaan. Laluan optimum bergantung pada kriteria yang dipilih.",
   "bosKadNama": "Timbang Pilihan",
   "bosKadEm": "🤔",
   "bosKadFakta": "Laluan terpantas tidak semestinya termurah. Keputusan yang baik menimbang semua kriteria mengikut keperluan pengguna.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih laluan R→A→C→P dan kriteria masa. Berapakah jumlah masa, dalam minit? Kira dahulu.",
     "tol": 0.001000000001,
     "b": 57,
     "u": "25 + 20 + 12 = 57 minit."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih laluan R→B→C→P dan kriteria jarak. Berapakah jumlah jarak, dalam km?",
     "tol": 0.001000000001,
     "b": 43,
     "u": "15 + 18 + 10 = 43 km."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan Rajah 1, laluan manakah paling pantas?",
     "p": [
      "R→B→C→P",
      "R→A→C→P",
      "R→B→P",
      "Semua laluan sama pantas"
     ],
     "b": 1,
     "u": "Masa: R→A→C→P = 57 min, R→B→P = 75 min, R→B→C→P = 77 min."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan Rajah 1, laluan manakah paling murah?",
     "p": [
      "R→A→C→P",
      "R→B→P",
      "R→B→C→P",
      "R→A→C→B→P"
     ],
     "b": 2,
     "u": "Kos tol: R→B→C→P = RM0, R→B→P = RM1, R→A→C→P = RM8."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah masa yang dijimatkan (minit) jika keluarga memilih laluan terpantas berbanding laluan terpendek?",
     "tol": 0.001000000001,
     "b": 20,
     "u": "Laluan terpendek R→B→C→P mengambil 77 minit. Laluan terpantas R→A→C→P mengambil 57 minit. Jimat 20 minit."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, kereta menggunakan petrol RM0.20 sekilometer. Berapakah jumlah kos (petrol dan tol) bagi laluan R→A→C→P, dalam RM?",
     "tol": 0.001000000001,
     "b": 19,
     "u": "Jarak 55 km × RM0.20 = RM11. Tambah tol RM8. Jumlah RM19."
    },
    {
     "j": "nombor",
     "t": "Dengan kadar petrol yang sama (RM0.20 sekilometer), berapakah jumlah kos bagi laluan R→B→C→P, dalam RM?",
     "tol": 0.01000000001,
     "b": 8.6,
     "u": "Jarak 43 km × RM0.20 = RM8.60. Tiada tol. Jumlah RM8.60."
    },
    {
     "j": "pilih",
     "t": "Keluarga Aiman perlu tiba di pantai dalam masa satu jam. Laluan manakah yang perlu dipilih?",
     "p": [
      "R→B→C→P, kerana jaraknya paling pendek",
      "R→B→P, kerana ia melalui paling sedikit bucu",
      "R→B→C→P, kerana tiada bayaran tol",
      "R→A→C→P, kerana hanya laluan ini kurang daripada 60 minit"
     ],
     "b": 3,
     "u": "Masa: 57, 77 dan 75 minit. Hanya R→A→C→P memenuhi syarat kurang daripada 60 minit, walaupun kosnya lebih tinggi."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Tol A–C dinaikkan daripada RM5 kepada RM9. Seorang pemandu menilai masanya RM0.30 seminit. Berdasarkan jumlah tol dan nilai masa, laluan manakah paling jimat?",
    "p": [
     "R→B→C→P, jumlah RM23.10",
     "R→A→C→P, jumlah RM29.10",
     "R→B→P, jumlah RM23.50",
     "R→A→C→P, jumlah RM20.10"
    ],
    "b": 0,
    "u": "R→A→C→P: tol RM3 + RM9 = RM12, masa 57 × RM0.30 = RM17.10, jumlah RM29.10. R→B→C→P: RM0 + 77 × RM0.30 = RM23.10. R→B→P: RM1 + 75 × RM0.30 = RM23.50. Paling jimat: R→B→C→P."
   }
  },
  {
   "n": 6,
   "tempat": "Pejabat Perancang",
   "sk": "5.1.5 Masalah rangkaian bukan rutin",
   "lampiran": "j",
   "kadNama": "Jalan Baharu",
   "kadEm": "🚧",
   "kadFakta": "Menambah satu tepi baharu boleh mengubah laluan optimum. Perancang membandingkan penjimatan dengan kos membina jalan itu.",
   "bosKadNama": "Perancang Bandar",
   "bosKadEm": "🧭",
   "bosKadFakta": "Keputusan perancangan yang baik menggunakan data rangkaian (jarak, masa, kos) dan mengambil kira pengguna yang terkesan.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih pelan \"Tiada jalan baharu\" dan laluan A→B→D→E→F. Berapakah jaraknya, dalam km?",
     "tol": 0.001000000001,
     "b": 16,
     "u": "4 + 5 + 4 + 3 = 16 km, iaitu laluan terpendek tanpa jalan baharu."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih pelan \"Jalan A–D\" dan laluan A→D→E→F. Berapakah jaraknya, dalam km?",
     "tol": 0.001000000001,
     "b": 13,
     "u": "6 + 4 + 3 = 13 km."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, pilih pelan \"Jalan C–E\" dan laluan A→C→E→F. Berapakah jaraknya, dalam km?",
     "tol": 0.001000000001,
     "b": 15,
     "u": "7 + 5 + 3 = 15 km."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan Rajah 1, pelan manakah memberi laluan terpendek dari A ke F?",
     "p": [
      "Jalan C–E, 15 km",
      "Jalan A–D, 13 km",
      "Tiada jalan baharu, 16 km",
      "Kedua-dua pelan sama baik"
     ],
     "b": 1,
     "u": "Bandingkan jarak terpendek setiap pelan: 13 km, 15 km dan 16 km."
    },
    {
     "j": "nombor",
     "t": "Sebuah bas berulang-alik dari A ke F (pergi dan balik) 20 kali sehari. Jika jalan A–D dibina, berapakah jumlah jarak yang dijimatkan sehari, dalam km?",
     "tol": 0.001000000001,
     "b": 120,
     "u": "Jimat sehala = 16 − 13 = 3 km. Pergi dan balik = 6 km. 20 kali × 6 km = 120 km sehari."
    },
    {
     "j": "pilih",
     "t": "Jalan C–E memberi penjimatan yang lebih kecil bagi perjalanan A ke F. Dalam keadaan apakah jalan C–E mungkin lebih wajar dibina?",
     "p": [
      "Jika jalan A–D lebih murah untuk dibina",
      "Jika kampung F mempunyai paling ramai penduduk",
      "Jika ramai penduduk berulang-alik antara C dan E",
      "Jika jarak A ke B bertambah panjang"
     ],
     "b": 2,
     "u": "Tanpa jalan baharu, C ke E memerlukan C→D→E = 7 km. Jalan C–E (5 km) menjimatkan perjalanan penduduk C dan E, bukan sahaja perjalanan A ke F."
    },
    {
     "j": "nombor",
     "t": "Tanpa sebarang jalan baharu, berapakah jarak terpendek dari C ke E dalam Rajah 1, dalam km?",
     "tol": 0.001000000001,
     "b": 7,
     "u": "C→D→E = 3 + 4 = 7 km. Laluan lain lebih jauh."
    },
    {
     "j": "pilih",
     "t": "Seorang pegawai berkata, \"Jalan baharu mesti menyambungkan bucu yang berdarjah paling rendah.\" Nilaikan cadangan ini.",
     "p": [
      "Tepat; bucu berdarjah rendah selalu berada pada laluan terpendek",
      "Tepat; menambah tepi menurunkan darjah setiap bucu",
      "Tidak tepat; jalan baharu tidak mengubah sebarang laluan",
      "Tidak tepat; yang penting ialah penjimatan pemberat bagi laluan yang kerap digunakan"
     ],
     "b": 3,
     "u": "Darjah hanya mengira sambungan. Keputusan membina jalan bergantung pada jarak, masa atau kos yang dijimatkan dan bilangan pengguna."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Reka satu rangkaian pengangkutan atau sosial bagi kawasan sekolah awak yang mempunyai sekurang-kurangnya lima bucu dan pemberat pada setiap tepi.",
    "arahan": "Lukis rangkaian itu dan nyatakan maksud bucu, tepi dan pemberat. Tentukan laluan optimum antara dua bucu, kemudian cadangkan satu tepi baharu yang mengurangkan kos. Tunjukkan pengiraan sebelum dan selepas, dan bincangkan satu kelebihan serta satu kekurangan cadangan awak.",
    "u": "Jawapan TP6 yang kukuh mempunyai rangkaian yang jelas dengan pemberat yang munasabah, perbandingan laluan yang lengkap, cadangan tepi baharu yang benar-benar mengurangkan kos optimum, dan penilaian kelebihan serta kekurangan berdasarkan situasi sebenar."
   }
  }
 ]
};
