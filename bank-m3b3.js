/* Bank soalan — Matematik Ting. 3 · Bab 3 Matematik Pengguna: Simpanan dan Pelaburan, Kredit dan Hutang.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/m3b3.js
   kemudian jalankan: node bina.js m3b3

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 3, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK["m3b3"] =
{
 "id": "m3b3",
 "tingkatan": 3,
 "kod": "3.0 Matematik Pengguna",
 "tajuk": "Wang Bijak",
 "subtajuk": "Matematik Ting. 3 · Bab 3 Matematik Pengguna: Simpanan dan Pelaburan, Kredit dan Hutang",
 "spi": [
  "Mempamerkan pengetahuan asas tentang simpanan, pelaburan, kredit dan hutang.",
  "Mempamerkan kefahaman tentang simpanan, pelaburan, kredit dan hutang.",
  "Mengaplikasikan kefahaman tentang simpanan, pelaburan, kredit dan hutang untuk melaksanakan tugasan mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang simpanan, pelaburan, kredit dan hutang dalam konteks penyelesaian masalah rutin yang mudah.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang simpanan, pelaburan, kredit dan hutang dalam konteks penyelesaian masalah rutin yang kompleks.",
  "Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang simpanan, pelaburan, kredit dan hutang dalam konteks penyelesaian masalah bukan rutin secara kreatif."
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
  "1": "{n} dapat mengingat kembali jenis-jenis simpanan, pelaburan dan maksud kredit serta hutang. Langkah seterusnya ialah memahami cara faedah dikira, bukan sekadar mengingati nama produk kewangan.",
  "2": "{n} memahami perbezaan faedah mudah dan faedah kompaun serta kesan tempoh terhadap nilai simpanan. Perlu lebih latihan menggunakan rumus sebelum bergerak ke TP3.",
  "3": "{n} boleh mengaplikasikan rumus nilai matang dan ROI untuk melaksanakan pengiraan simpanan dan pelaburan yang mudah. Galakkan membandingkan kesan kekerapan pengkompaunan.",
  "4": "{n} mampu menyelesaikan masalah rutin yang mudah seperti purata kos sesyer dan memilih simpanan atau pelaburan mengikut risiko, pulangan dan kecairan. Seterusnya latih pertimbangan keputusan dengan justifikasi.",
  "5": "{n} dapat menyelesaikan masalah kad kredit yang kompleks, termasuk kesan bayaran minimum dan faedah baki. Sudah bersedia untuk membuat keputusan pinjaman yang bijak.",
  "6": "{n} berjaya membandingkan tawaran pinjaman, mengira jumlah bayar balik dan ansuran, dan membuat keputusan yang wajar dengan justifikasi yang jelas. Pencapaian cemerlang bagi bab ini.",
  "tiada": "{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Matematik Pengguna. Cadangan: ulang hentian pertama menggunakan Jadual 1 dengan bimbingan rakan sebaya."
 },
 "lampiran": {
  "jenis": "<div class=\"scrollx\"><table class=\"datatable\"><thead><tr><th>Jenis</th><th>Risiko</th><th>Pulangan</th><th>Kecairan</th></tr></thead><tbody><tr><td>Akaun semasa</td><td>Rendah</td><td>Tiada</td><td>Tinggi</td></tr><tr><td>Akaun simpanan</td><td>Rendah</td><td>Rendah</td><td>Tinggi</td></tr><tr><td>Akaun simpanan tetap</td><td>Rendah</td><td>Sederhana</td><td>Rendah</td></tr><tr><td>Amanah saham</td><td>Sederhana</td><td>Sederhana</td><td>Sederhana</td></tr><tr><td>Saham</td><td>Tinggi</td><td>Tinggi</td><td>Sederhana</td></tr><tr><td>Hartanah</td><td>Sederhana</td><td>Sederhana hingga tinggi</td><td>Sangat rendah</td></tr></tbody></table></div><p class=\"qnote\">Jadual 1 · Perbandingan ringkas jenis simpanan dan pelaburan. Kecairan ialah kemudahan menukar kepada wang tunai.</p>",
  "kompaun1": "<figure class=\"figure jmi\" data-w=\"kompaun\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;kompaun&quot;,&quot;P&quot;:5000,&quot;r&quot;:4,&quot;n&quot;:1,&quot;tMaks&quot;:10,&quot;t&quot;:5,&quot;kapsyen&quot;:&quot;Rajah 1 · Simpanan RM5 000 pada 4% setahun. Garis hijau ialah faedah mudah, garis gelap ialah faedah kompaun tahunan.&quot;,&quot;alt&quot;:&quot;Rajah interaktif graf nilai simpanan RM5000 pada 4 peratus setahun, faedah mudah lawan faedah kompaun&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 214\" role=\"img\" aria-label=\"Graf nilai simpanan RM5 000 pada kadar 4 peratus: faedah kompaun lawan faedah mudah, tahun 5\"><line x1=\"44\" y1=\"150\" x2=\"248\" y2=\"150\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"44\" y1=\"30\" x2=\"44\" y2=\"150\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"40\" y=\"154\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">5k</text><text x=\"40\" y=\"44\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">7.4k</text><text x=\"4\" y=\"26\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">RM</text><text x=\"146\" y=\"166\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Tahun</text><path d=\"M44 150 L64 140.8 L84 131.7 L104 122.5 L124 113.4 L144 104.2 L164 95 L184 85.9 L204 76.7 L224 67.5 L244 58.4\" fill=\"none\" stroke=\"var(--teal)\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><path d=\"M44 150 L64 140.8 L84 131.3 L104 121.4 L124 111.1 L144 100.4 L164 89.2 L184 77.6 L204 65.6 L224 53 L244 40\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.5\" stroke-linejoin=\"round\"></path><line x1=\"144\" y1=\"30\" x2=\"144\" y2=\"150\" stroke=\"var(--amber)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"></line><text x=\"8\" y=\"14\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">Selepas tahun 5</text><text x=\"8\" y=\"188\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Kompaun RM6 083.26</text><text x=\"8\" y=\"206\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">Mudah   RM6 000</text></svg></div><figcaption>Rajah 1 · Simpanan RM5 000 pada 4% setahun. Garis hijau ialah faedah mudah, garis gelap ialah faedah kompaun tahunan.</figcaption></figure>",
  "kompaun2": "<figure class=\"figure jmi\" data-w=\"kompaun\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;kompaun&quot;,&quot;P&quot;:10000,&quot;r&quot;:6,&quot;n&quot;:12,&quot;tMaks&quot;:10,&quot;t&quot;:3,&quot;kapsyen&quot;:&quot;Rajah 1 · Simpanan RM10 000 pada 6% setahun. Garis gelap dikompaun setiap bulan, garis hijau ialah faedah mudah.&quot;,&quot;alt&quot;:&quot;Rajah interaktif graf nilai simpanan RM10000 pada 6 peratus setahun dikompaun bulanan lawan faedah mudah&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 214\" role=\"img\" aria-label=\"Graf nilai simpanan RM10 000 pada kadar 6 peratus: faedah kompaun lawan faedah mudah, tahun 3\"><line x1=\"44\" y1=\"150\" x2=\"248\" y2=\"150\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"44\" y1=\"30\" x2=\"44\" y2=\"150\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"40\" y=\"154\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">10k</text><text x=\"40\" y=\"44\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">18.2k</text><text x=\"4\" y=\"26\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">RM</text><text x=\"146\" y=\"166\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Tahun</text><path d=\"M44 150 L64 141.9 L84 133.9 L104 125.8 L124 117.8 L144 109.7 L164 101.7 L184 93.6 L204 85.6 L224 77.5 L244 69.5\" fill=\"none\" stroke=\"var(--teal)\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><path d=\"M44 150 L64 141.7 L84 132.9 L104 123.6 L124 113.7 L144 103.2 L164 92 L184 80.1 L204 67.6 L224 54.2 L244 40\" fill=\"none\" stroke=\"var(--vena)\" stroke-width=\"2.5\" stroke-linejoin=\"round\"></path><line x1=\"104\" y1=\"30\" x2=\"104\" y2=\"150\" stroke=\"var(--amber)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"></line><text x=\"8\" y=\"14\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">Selepas tahun 3</text><text x=\"8\" y=\"188\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Kompaun RM11 966.81</text><text x=\"8\" y=\"206\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--teal)\" font-weight=\"700\">Mudah   RM11 800</text></svg></div><figcaption>Rajah 1 · Simpanan RM10 000 pada 6% setahun. Garis gelap dikompaun setiap bulan, garis hijau ialah faedah mudah.</figcaption></figure>",
  "kos": "<div class=\"scrollx\"><table class=\"datatable\"><thead><tr><th>Bulan</th><th class=\"n\">Harga seunit (RM)</th><th class=\"n\">Dilabur (RM)</th><th class=\"n\">Unit dibeli</th></tr></thead><tbody><tr><td>Januari</td><td class=\"n\">2.00</td><td class=\"n\">300</td><td class=\"n\">150</td></tr><tr><td>Februari</td><td class=\"n\">2.50</td><td class=\"n\">300</td><td class=\"n\">120</td></tr><tr><td>Mac</td><td class=\"n\">1.50</td><td class=\"n\">300</td><td class=\"n\">200</td></tr><tr><td><b>Jumlah</b></td><td class=\"n\">&ndash;</td><td class=\"n\"><b>900</b></td><td class=\"n\"><b>470</b></td></tr></tbody></table></div><p class=\"qnote\">Jadual 1 · RM300 dilabur dalam amanah saham pada awal setiap bulan. Bilangan unit = wang dilabur ÷ harga seunit.</p>",
  "kad": "<figure class=\"figure jmi\" data-w=\"kad\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;kad&quot;,&quot;baki&quot;:3000,&quot;kadar&quot;:15,&quot;minPeratus&quot;:5,&quot;minRM&quot;:50,&quot;bMaks&quot;:12,&quot;b&quot;:3,&quot;kapsyen&quot;:&quot;Rajah 1 · Baki kad kredit RM3 000, faedah 15% setahun. Bayaran minimum ialah 5% baki atau RM50, yang mana lebih besar.&quot;,&quot;alt&quot;:&quot;Rajah interaktif graf baki kad kredit RM3000 jika hanya bayar minimum setiap bulan, gelongsor bulan&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 210\" role=\"img\" aria-label=\"Graf baki kad kredit RM3 000 jika bayar minimum sahaja, selepas 3 bulan baki RM2 669.79\"><line x1=\"40\" y1=\"130\" x2=\"248\" y2=\"130\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><line x1=\"40\" y1=\"26\" x2=\"40\" y2=\"130\" stroke=\"var(--ink3)\" stroke-width=\"1.2\"></line><text x=\"36\" y=\"34\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">3k</text><text x=\"36\" y=\"134\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"end\">0</text><text x=\"4\" y=\"52\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\">RM</text><text x=\"144\" y=\"146\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink2)\" text-anchor=\"middle\">Bulan</text><path d=\"M40 30 L57.2 33.8 L74.3 37.5 L91.5 41 L108.7 44.4 L125.8 47.7 L143 50.8 L160.2 53.8 L177.3 56.7 L194.5 59.5 L211.7 62.2 L228.8 64.8 L246 67.3\" fill=\"none\" stroke=\"var(--arteri)\" stroke-width=\"2.5\" stroke-linejoin=\"round\"></path><line x1=\"91.5\" y1=\"26\" x2=\"91.5\" y2=\"130\" stroke=\"var(--amber)\" stroke-width=\"1.5\" stroke-dasharray=\"4 3\"></line><text x=\"8\" y=\"14\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--ink)\" font-weight=\"700\">Bayar minimum sahaja, bulan 3</text><text x=\"8\" y=\"166\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Baki hutang:  RM2 669.79</text><text x=\"8\" y=\"184\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Jumlah bayar: RM433.06</text><text x=\"8\" y=\"202\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Faedah kena:  RM102.85</text></svg></div><figcaption>Rajah 1 · Baki kad kredit RM3 000, faedah 15% setahun. Bayaran minimum ialah 5% baki atau RM50, yang mana lebih besar.</figcaption></figure>",
  "pinjam": "<figure class=\"figure jmi\" data-w=\"pinjaman\" data-c=\"{&quot;jenis&quot;:&quot;interaktif&quot;,&quot;w&quot;:&quot;pinjaman&quot;,&quot;P&quot;:30000,&quot;r&quot;:3.5,&quot;tMaks&quot;:9,&quot;t&quot;:5,&quot;kapsyen&quot;:&quot;Rajah 1 · Pinjaman RM30 000 pada kadar rata 3.5% setahun. Gerakkan tempoh untuk melihat faedah dan ansuran.&quot;,&quot;alt&quot;:&quot;Rajah interaktif pinjaman RM30000 kadar rata 3.5 peratus; gelongsor tempoh menunjukkan faedah dan ansuran bulanan&quot;}\"><div class=\"jmi-svg\"><svg viewBox=\"0 0 260 150\" role=\"img\" aria-label=\"Rajah pinjaman RM30 000 kadar rata 3.5 peratus selama 5 tahun, ansuran bulanan RM587.50\"><text x=\"8\" y=\"16\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Pinjaman RM30 000, 3.5% setahun</text><rect x=\"30\" y=\"30\" width=\"152.1\" height=\"30\" rx=\"3\" fill=\"var(--teal-soft)\" stroke=\"var(--teal)\" stroke-width=\"1.2\"></rect><rect x=\"182.1\" y=\"30\" width=\"26.6\" height=\"30\" rx=\"3\" fill=\"var(--arteri-soft)\" stroke=\"var(--arteri)\" stroke-width=\"1.2\"></rect><text x=\"30\" y=\"76\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--teal)\" font-weight=\"700\">Pokok</text><text x=\"232\" y=\"76\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"11\" fill=\"var(--arteri)\" text-anchor=\"end\" font-weight=\"700\">Faedah</text><text x=\"8\" y=\"100\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--arteri)\" font-weight=\"700\">Faedah 5 tahun: RM5 250</text><text x=\"8\" y=\"120\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--ink)\" font-weight=\"700\">Jumlah bayar:   RM35 250</text><text x=\"8\" y=\"140\" xml:space=\"preserve\" style=\"white-space:pre\" font-family=\"DM Mono,monospace\" font-size=\"12\" fill=\"var(--vena)\" font-weight=\"700\">Ansuran bulanan: RM587.50</text></svg></div><figcaption>Rajah 1 · Pinjaman RM30 000 pada kadar rata 3.5% setahun. Gerakkan tempoh untuk melihat faedah dan ansuran.</figcaption></figure>"
 },
 "aras": [
  {
   "n": 1,
   "tempat": "Kaunter Bank",
   "sk": "3.1.1 / 3.2.1 Jenis simpanan, pelaburan, kredit dan hutang",
   "lampiran": "jenis",
   "kadNama": "Simpanan Bijak",
   "kadEm": "🐷",
   "kadFakta": "Menyimpan sedikit demi sedikit lebih berkesan daripada menunggu wang banyak. Wang yang disimpan awal sempat berkembang lebih lama.",
   "bosKadNama": "Wang Kecemasan",
   "bosKadEm": "🛟",
   "bosKadFakta": "Pakar kewangan mencadangkan simpanan kecemasan sebanyak tiga hingga enam bulan perbelanjaan, di tempat yang mudah dikeluarkan.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Jenis simpanan yang membenarkan wang dikeluarkan bila-bila masa tanpa penalti ialah:",
     "p": [
      "Akaun simpanan",
      "Akaun simpanan tetap",
      "Amanah saham",
      "Hartanah"
     ],
     "b": 0,
     "u": "Akaun simpanan tetap mengunci wang untuk tempoh tertentu; mengeluarkan awal boleh dikenakan penalti."
    },
    {
     "j": "pilih",
     "t": "Manakah antara berikut ialah jenis pelaburan?",
     "p": [
      "Akaun semasa",
      "Amanah saham",
      "Akaun simpanan",
      "Akaun simpanan tetap"
     ],
     "b": 1,
     "u": "Akaun semasa, simpanan dan simpanan tetap ialah jenis simpanan. Saham, amanah saham dan hartanah ialah pelaburan."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan Jadual 1, jenis manakah yang berisiko tinggi dan berpulangan tinggi?",
     "p": [
      "Akaun simpanan",
      "Akaun semasa",
      "Saham",
      "Akaun simpanan tetap"
     ],
     "b": 2,
     "u": "Jadual 1 menunjukkan saham berisiko tinggi dan berpulangan tinggi."
    },
    {
     "j": "pilih",
     "t": "Kredit bermaksud:",
     "p": [
      "Wang yang disimpan dalam akaun bank untuk jangka panjang",
      "Keuntungan yang diperoleh daripada pelaburan saham",
      "Nilai matang bagi sesuatu simpanan tetap",
      "Kemudahan berbelanja sekarang dan membayar kemudian"
     ],
     "b": 3,
     "u": "Kredit membolehkan seseorang berbelanja terlebih dahulu dan membayar pada masa akan datang, biasanya dengan faedah."
    },
    {
     "j": "pilih",
     "t": "Dalam kewangan, apakah yang dimaksudkan dengan hutang?",
     "p": [
      "Jumlah wang yang dipinjam dan mesti dibayar balik",
      "Wang lebihan selepas semua perbelanjaan bulanan dibayar",
      "Faedah yang diterima daripada akaun simpanan di bank",
      "Keuntungan bersih yang diperoleh daripada pelaburan"
     ],
     "b": 0,
     "u": "Hutang wujud apabila seseorang meminjam wang atau menggunakan kredit dan wajib membayar balik."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan Jadual 1, jenis manakah yang mempunyai kecairan paling rendah?",
     "p": [
      "Akaun semasa",
      "Hartanah",
      "Akaun simpanan",
      "Saham"
     ],
     "b": 1,
     "u": "Hartanah mengambil masa lama untuk dijual, jadi kecairannya sangat rendah."
    },
    {
     "j": "pilih",
     "t": "Manakah yang BUKAN jenis kredit?",
     "p": [
      "Kad kredit",
      "Pinjaman kereta",
      "Akaun simpanan",
      "Pinjaman peribadi"
     ],
     "b": 2,
     "u": "Akaun simpanan ialah wang milik sendiri. Kad kredit dan pinjaman ialah kredit kerana wang milik pemberi pinjam."
    },
    {
     "j": "susun",
     "t": "Susun mengikut kecairan daripada yang paling cair kepada yang paling kurang cair.",
     "p": [
      "Akaun semasa",
      "Akaun simpanan",
      "Akaun simpanan tetap",
      "Hartanah"
     ],
     "b": [
      0,
      1,
      2,
      3
     ],
     "u": "Akaun semasa dan simpanan boleh dikeluarkan serta-merta, simpanan tetap dikunci, hartanah paling lambat ditunaikan."
    }
   ],
   "bos": {
    "j": "banyak",
    "t": "Pilih SEMUA yang termasuk jenis pelaburan.",
    "p": [
     "Saham",
     "Amanah saham",
     "Hartanah",
     "Akaun semasa",
     "Akaun simpanan",
     "Akaun simpanan tetap"
    ],
    "b": [
     0,
     1,
     2
    ],
    "u": "Pelaburan bertujuan menambah nilai wang tetapi ada risiko. Tiga yang lain ialah jenis simpanan."
   }
  },
  {
   "n": 2,
   "tempat": "Kaunter Faedah",
   "sk": "3.1.2 Faedah mudah dan faedah kompaun",
   "lampiran": "kompaun1",
   "kadNama": "Faedah Berbunga",
   "kadEm": "🌼",
   "kadFakta": "Faedah kompaun sering dipanggil 'faedah atas faedah', kerana faedah tahun lepas turut menghasilkan faedah baharu tahun ini.",
   "bosKadNama": "Kuasa Masa",
   "bosKadEm": "⏳",
   "bosKadFakta": "Dalam kompaun, tempoh yang lebih lama memberi kesan lebih besar daripada kadar faedah yang sedikit lebih tinggi.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Faedah mudah dikira ke atas:",
     "p": [
      "Prinsipal dan faedah terkumpul",
      "Baki akaun pada akhir setiap bulan",
      "Nilai matang pada tahun sebelumnya",
      "Prinsipal asal sahaja"
     ],
     "b": 3,
     "u": "Faedah mudah sentiasa dikira daripada jumlah asal yang disimpan, iaitu prinsipal."
    },
    {
     "j": "pilih",
     "t": "Faedah kompaun dikira ke atas:",
     "p": [
      "Prinsipal dan faedah terkumpul",
      "Prinsipal asal sahaja",
      "Faedah tahun pertama sahaja",
      "Kadar faedah tahunan sahaja"
     ],
     "b": 0,
     "u": "Faedah kompaun ditambah kepada prinsipal, jadi tahun berikutnya faedah dikira ke atas jumlah yang lebih besar."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan tahun kepada 4. Berapakah nilai simpanan dengan faedah mudah?",
     "b": 5800,
     "tol": 0.5,
     "suf": "RM",
     "u": "Faedah mudah I = Prt = 5 000 × 0.04 × 4 = RM800. Nilai simpanan = 5 000 + 800 = RM5 800."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan tahun kepada 10. Berapakah beza antara nilai kompaun dan nilai mudah, kepada ringgit terdekat?",
     "b": 401.22,
     "tol": 0.5,
     "suf": "RM",
     "u": "Pada tahun 10, nilai kompaun ialah RM7 401.22 dan nilai mudah RM7 000. Bezanya kira-kira RM401."
    },
    {
     "j": "pilih",
     "t": "Pada tahun pertama, faedah mudah dan faedah kompaun (dikompaun setahun sekali) memberi nilai yang:",
     "p": [
      "Kompaun lebih tinggi",
      "Sama",
      "Mudah lebih tinggi",
      "Tidak dapat ditentukan"
     ],
     "b": 1,
     "u": "Pada tahun pertama belum ada faedah terkumpul, jadi kedua-duanya memberi RM5 200 dalam Rajah 1."
    },
    {
     "j": "pilih",
     "t": "Apabila tempoh simpanan bertambah, jurang antara nilai kompaun dan nilai mudah:",
     "p": [
      "Semakin kecil",
      "Kekal sama",
      "Semakin besar",
      "Menjadi sifar"
     ],
     "b": 2,
     "u": "Faedah atas faedah bertambah setiap tahun, jadi kompaun semakin jauh meninggalkan faedah mudah."
    },
    {
     "j": "pilih",
     "t": "Dalam rumus faedah mudah I = Prt, simbol t bermaksud:",
     "p": [
      "Kadar faedah",
      "Prinsipal",
      "Jumlah faedah",
      "Tempoh dalam tahun"
     ],
     "b": 3,
     "u": "I ialah faedah, P prinsipal, r kadar dan t masa dalam tahun."
    },
    {
     "j": "pilih",
     "t": "Wang RM2 000 disimpan dengan faedah mudah 3% setahun selama 5 tahun. Berapakah jumlah faedahnya?",
     "p": [
      "RM300",
      "RM60",
      "RM10 000",
      "RM2 300"
     ],
     "b": 0,
     "u": "I = Prt = 2 000 × 0.03 × 5 = RM300. RM2 300 ialah nilai keseluruhan, bukan faedah."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Prinsipal RM5 000 disimpan pada faedah mudah 4% setahun. Selepas berapa tahun nilai simpanan mencapai RM7 000?",
    "b": 10,
    "tol": 0.5,
    "suf": "tahun",
    "u": "Faedah yang diperlukan ialah RM2 000. Setiap tahun RM200, jadi 2 000 ÷ 200 = 10 tahun."
   }
  },
  {
   "n": 3,
   "tempat": "Portfolio Pelaburan",
   "sk": "3.1.2 / 3.1.3 Nilai matang dan pulangan pelaburan",
   "lampiran": "kompaun2",
   "kadNama": "Pulangan Sebenar",
   "kadEm": "📈",
   "kadFakta": "Pulangan pelaburan mesti dibandingkan dengan kadar inflasi. Pulangan 3% apabila harga barang naik 3% bermakna nilai sebenar wang tidak bertambah.",
   "bosKadNama": "Pelbagaikan!",
   "bosKadEm": "🧺",
   "bosKadFakta": "Peribahasa lama berkata jangan letak semua telur dalam satu bakul. Pelaburan yang dipelbagaikan mengurangkan kesan jika satu pelaburan rugi.",
   "soalan": [
    {
     "j": "pilih",
     "t": "Dalam rumus MV = P(1 + r/n)^nt, n ialah:",
     "p": [
      "Bilangan tahun simpanan",
      "Kekerapan kompaun setahun",
      "Kadar faedah tahunan",
      "Nilai matang"
     ],
     "b": 1,
     "u": "n ialah kekerapan pengkompaunan setahun. Contohnya bulanan ialah n = 12."
    },
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan tahun kepada 5. Berapakah nilai kompaun simpanan RM10 000 pada 6% setahun dikompaun setiap bulan, kepada ringgit terdekat?",
     "b": 13488.5,
     "tol": 1,
     "suf": "RM",
     "u": "MV = 10 000 × (1 + 0.06/12) kuasa 60 = RM13 488.50."
    },
    {
     "j": "pilih",
     "t": "Apabila kekerapan pengkompaunan bertambah, contohnya daripada setahun sekali kepada setiap bulan, nilai matang:",
     "p": [
      "Berkurang",
      "Kekal sama",
      "Bertambah sedikit",
      "Menjadi dua kali ganda"
     ],
     "b": 2,
     "u": "Faedah dikira lebih kerap, jadi faedah atas faedah bermula lebih awal. Perbezaannya kecil tetapi sentiasa positif."
    },
    {
     "j": "nombor",
     "t": "Hitung nilai matang bagi RM4 000 pada 5% setahun dikompaun setahun sekali selama 3 tahun.",
     "b": 4630.5,
     "tol": 0.05,
     "suf": "RM",
     "u": "MV = 4 000 × (1.05) kuasa 3 = 4 000 × 1.157625 = RM4 630.50."
    },
    {
     "j": "pilih",
     "t": "Pulangan pelaburan (ROI) dikira sebagai:",
     "p": [
      "(Modal ÷ untung bersih) × 100%",
      "Untung bersih + modal",
      "Modal × kadar × tempoh",
      "(Untung bersih ÷ modal) × 100%"
     ],
     "b": 3,
     "u": "ROI membandingkan keuntungan bersih dengan wang yang dilaburkan sebagai peratusan."
    },
    {
     "j": "nombor",
     "t": "Ali melabur RM8 000 dalam amanah saham dan menjualnya RM8 800. Berapakah ROI?",
     "b": 10,
     "tol": 0.05,
     "suf": "%",
     "u": "Untung bersih = 8 800 − 8 000 = RM800. ROI = 800 ÷ 8 000 × 100% = 10%."
    },
    {
     "j": "pilih",
     "t": "Sebuah hartanah dibeli RM300 000 dan disewakan RM15 000 setahun. Kadar pulangan sewa setahun ialah:",
     "p": [
      "5%",
      "20%",
      "0.5%",
      "15%"
     ],
     "b": 0,
     "u": "15 000 ÷ 300 000 × 100% = 5%."
    },
    {
     "j": "pilih",
     "t": "Manakah pilihan yang memberi nilai matang tertinggi selepas 10 tahun bagi RM10 000?",
     "p": [
      "6% dikompaun setahun",
      "6% dikompaun bulanan",
      "6% faedah mudah",
      "5% dikompaun bulanan"
     ],
     "b": 1,
     "u": "Nilai selepas 10 tahun: 6% dikompaun bulanan = RM18 193.97; 6% dikompaun setahun = RM17 908.48; 6% faedah mudah = RM16 000; 5% dikompaun bulanan = RM16 470.09."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Seorang pelabur berkata, 'ROI 20% setahun lebih baik daripada ROI 8%, jadi semua wang saya akan dilabur dalam pelaburan pertama.' Apakah kelemahan pertimbangannya?",
    "p": [
     "ROI 8% lebih baik kerana angkanya lebih kecil dan selamat",
     "ROI tidak berkait dengan keuntungan pelaburan sebenar",
     "ROI tinggi biasanya berisiko tinggi, jadi wang perlu dipelbagaikan",
     "Pelabur perlu sentiasa memilih ROI yang paling rendah"
    ],
    "b": 2,
    "u": "Pulangan tinggi selalunya datang bersama risiko lebih tinggi. Pelaburan yang dipelbagaikan melindungi daripada kerugian besar."
   }
  },
  {
   "n": 4,
   "tempat": "Meja Perancangan",
   "sk": "3.1.4 / 3.1.5 / 3.1.6 Risiko, pulangan, kecairan dan purata kos sesyer",
   "lampiran": "kos",
   "kadNama": "Purata Kos",
   "kadEm": "📊",
   "kadFakta": "Membeli dengan jumlah wang sama setiap bulan bermakna awak beli lebih banyak unit apabila harga murah dan kurang unit apabila harga mahal, secara automatik.",
   "bosKadNama": "Sabar Melabur",
   "bosKadEm": "🐢",
   "bosKadFakta": "Pelabur berjaya biasanya melabur dengan sabar dan berkala, bukan cuba meneka masa harga paling rendah, kerana tiada sesiapa yang dapat meramalnya dengan tepat.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Berdasarkan Jadual 1, berapakah jumlah unit yang dibeli dalam tiga bulan?",
     "b": 470,
     "tol": 0.5,
     "suf": "unit",
     "u": "150 + 120 + 200 = 470 unit."
    },
    {
     "j": "nombor",
     "t": "Jumlah wang dilaburkan dalam tiga bulan ialah RM900. Berapakah purata kos seunit, kepada 2 tempat perpuluhan?",
     "b": 1.91,
     "tol": 0.005,
     "suf": "RM",
     "u": "Purata kos = 900 ÷ 470 = RM1.91 seunit."
    },
    {
     "j": "pilih",
     "t": "Strategi pemurataan kos ringgit bermaksud:",
     "p": [
      "Membeli hanya apabila harga paling rendah",
      "Menjual semua unit apabila harga naik",
      "Melabur semua wang sekali gus pada awal tahun",
      "Melabur jumlah wang yang sama secara berkala tanpa mengira harga"
     ],
     "b": 3,
     "u": "Pelabur melabur jumlah tetap secara berkala, jadi kos purata diratakan."
    },
    {
     "j": "pilih",
     "t": "Manfaat utama strategi pemurataan kos ringgit ialah:",
     "p": [
      "Meratakan kesan turun naik harga",
      "Menjamin keuntungan setiap bulan",
      "Menghapuskan semua risiko pelaburan",
      "Menaikkan harga saham"
     ],
     "b": 0,
     "u": "Strategi ini tidak menjamin untung, tetapi mengurangkan risiko membeli semua unit pada harga tertinggi."
    },
    {
     "j": "pilih",
     "t": "Berdasarkan Jadual 1, mengapa purata kos seunit (RM1.91) lebih rendah daripada purata harga (RM2.00)?",
     "p": [
      "Kerana harga tidak berubah",
      "Lebih banyak unit dibeli apabila harga rendah",
      "Kerana bilangan unit sama setiap bulan",
      "Kerana jumlah dilabur berbeza setiap bulan"
     ],
     "b": 1,
     "u": "Pada bulan Mac harga paling rendah, jadi 200 unit dibeli, lebih banyak daripada bulan lain."
    },
    {
     "j": "pilih",
     "t": "Sebuah bank Islam menyatakan kadar pulangan 4% setahun untuk akaun pelaburannya. Apakah maksud kadar itu?",
     "p": [
      "Pulangan sebenar dijamin tepat 4% setiap tahun",
      "Bank tidak memberi apa-apa pulangan kepada pelanggan",
      "Kadar rujukan, pulangan sebenar diketahui pada tarikh matang",
      "Pulangan sentiasa lebih tinggi daripada 4%"
     ],
     "b": 2,
     "u": "Dalam perbankan Islam, kadar pulangan hanya sebagai rujukan. Kadar pulangan sebenar hanya diketahui pada tempoh matang atau pada tarikh wang dikeluarkan."
    },
    {
     "j": "pilih",
     "t": "Pelaburan yang biasanya memberi pulangan tinggi tetapi berisiko tinggi ialah:",
     "p": [
      "Akaun simpanan",
      "Akaun semasa",
      "Akaun simpanan tetap",
      "Saham"
     ],
     "b": 3,
     "u": "Harga saham naik dan turun dengan banyak, jadi pulangan tinggi tetapi risiko tinggi."
    },
    {
     "j": "pilih",
     "t": "Puan Rina mahu wang kecemasan yang boleh dikeluarkan bila-bila masa dengan risiko rendah. Pilihan paling sesuai ialah:",
     "p": [
      "Akaun simpanan",
      "Saham syarikat",
      "Hartanah sewaan",
      "Akaun simpanan tetap 5 tahun"
     ],
     "b": 0,
     "u": "Wang kecemasan mesti cair dan selamat, jadi akaun simpanan lebih sesuai."
    }
   ],
   "bos": {
    "j": "nombor",
    "t": "Dalam tiga bulan seterusnya, harga seunit ialah RM2.20, RM1.80 dan RM2.00, dengan RM300 dilabur setiap bulan. Berapakah purata kos seunit, kepada 2 tempat perpuluhan?",
    "b": 1.99,
    "tol": 0.005,
    "suf": "RM",
    "u": "Unit: 136.36 + 166.67 + 150 = 453.03. Purata kos = 900 ÷ 453.03 = RM1.99."
   }
  },
  {
   "n": 5,
   "tempat": "Penyata Kad Kredit",
   "sk": "3.2.2 / 3.2.3 / 3.2.4 Kad kredit dan bayaran minimum",
   "lampiran": "kad",
   "kadNama": "Perangkap Minimum",
   "kadEm": "🪤",
   "kadFakta": "Bayaran minimum kad kredit dikira untuk memastikan awak kekal berhutang lama. Faedah yang dibayar boleh mengatasi pembelian asal.",
   "bosKadNama": "Bayar Penuh",
   "bosKadEm": "✅",
   "bosKadFakta": "Kebanyakan kad kredit memberi tempoh bebas faedah jika baki dibayar penuh sebelum tarikh akhir. Itulah cara paling bijak menggunakan kad.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan bulan kepada 6. Berapakah baki hutang selepas bayar minimum sahaja selama 6 bulan, kepada ringgit terdekat?",
     "b": 2375.93,
     "tol": 1,
     "suf": "RM",
     "u": "Setiap bulan bayar 5% baki (atau RM50), kemudian faedah 15%/12 ditambah. Selepas 6 bulan, baki ialah RM2 375.93."
    },
    {
     "j": "pilih",
     "t": "Bayaran minimum kad kredit biasanya:",
     "p": [
      "Sama dengan jumlah baki penuh kad kredit",
      "Peratusan baki atau jumlah tetap, mana lebih besar",
      "RM1 setiap bulan tanpa mengira jumlah baki",
      "Kosong jika baki kurang daripada RM1 000"
     ],
     "b": 1,
     "u": "Bank mengenakan minimum peratusan baki atau jumlah tetap supaya baki dan faedah tidak dibiarkan bertambah."
    },
    {
     "j": "pilih",
     "t": "Jika hanya bayaran minimum dibuat, faedah dikenakan ke atas:",
     "p": [
      "Jumlah pembelian asal sahaja",
      "Bayaran minimum sahaja",
      "Baki yang belum dibayar",
      "Kadar tukaran mata wang"
     ],
     "b": 2,
     "u": "Faedah baki dikira atas hutang yang masih tinggal selepas bayaran."
    },
    {
     "j": "nombor",
     "t": "Berdasarkan Rajah 1, berapakah jumlah faedah yang dikenakan dalam 12 bulan jika hanya bayar minimum, kepada ringgit terdekat?",
     "b": 348.33,
     "tol": 1,
     "suf": "RM",
     "u": "Jumlah faedah selama 12 bulan ialah RM348.33."
    },
    {
     "j": "pilih",
     "t": "Faedah kad kredit Nora ialah 1.5% sebulan atas baki RM2 000. Berapakah faedah untuk sebulan?",
     "p": [
      "RM3",
      "RM300",
      "RM20",
      "RM30"
     ],
     "b": 3,
     "u": "1.5% daripada 2 000 = 0.015 × 2 000 = RM30."
    },
    {
     "j": "pilih",
     "t": "Manakah tindakan paling bijak untuk mengelak caj faedah kad kredit?",
     "p": [
      "Bayar penuh baki sebelum tarikh akhir",
      "Bayar minimum setiap bulan",
      "Bayar lewat sehari sahaja",
      "Guna kad kredit lain untuk membayar"
     ],
     "b": 0,
     "u": "Bayar penuh sebelum tarikh akhir bermakna tiada faedah dikenakan pada pembelian biasa."
    },
    {
     "j": "pilih",
     "t": "Harga sebuah barang dalam talian ialah 40 dolar AS dan 1 dolar AS bersamaan RM4.50. Berapakah harganya dalam ringgit?",
     "p": [
      "RM44.50",
      "RM180",
      "RM8.89",
      "RM1 800"
     ],
     "b": 1,
     "u": "40 × 4.50 = RM180. Ingat pertukaran mata wang boleh mengenakan caj tambahan."
    },
    {
     "j": "pilih",
     "t": "Membayar kad kredit lewat biasanya menyebabkan:",
     "p": [
      "Faedah dihapuskan",
      "Had kredit bertambah automatik",
      "Caj lewat dan kesan buruk pada rekod kredit",
      "Ganjaran mata digandakan"
     ],
     "b": 2,
     "u": "Bayaran lewat dikenakan caj dan boleh menjejaskan kelayakan pinjaman pada masa depan."
    }
   ],
   "bos": {
    "j": "pilih",
    "t": "Danial hanya membayar minimum setiap bulan dan berkata, 'Baki saya menurun, jadi tiada masalah.' Berdasarkan Rajah 1, apakah kelemahan pertimbangannya?",
    "p": [
     "Baki sebenarnya bertambah pada setiap bulan bayaran",
     "Bayaran minimum sentiasa meningkat setiap bulan",
     "Faedah hanya dikenakan pada bulan pertama sahaja",
     "Baki menurun perlahan, faedah yang dibayar sangat besar"
    ],
    "b": 3,
    "u": "Baki memang menurun, tetapi lambat. Hutang RM3 000 masih besar selepas setahun dan faedah terus dikenakan."
   }
  },
  {
   "n": 6,
   "tempat": "Bilik Rundingan",
   "sk": "3.2.5 / 3.2.6 Pinjaman, bayaran balik dan ansuran",
   "lampiran": "pinjam",
   "kadNama": "Beban 40%",
   "kadEm": "⚖️",
   "kadFakta": "Pakar kewangan menasihatkan jumlah bayaran hutang bulanan tidak melebihi kira-kira 40% pendapatan supaya belanjawan tidak tercekik.",
   "bosKadNama": "Rundingan Bijak",
   "bosKadEm": "🤝",
   "bosKadFakta": "Membandingkan sekurang-kurangnya tiga tawaran pinjaman sebelum memilih boleh menjimatkan ribuan ringgit sepanjang tempoh pinjaman.",
   "soalan": [
    {
     "j": "nombor",
     "t": "Dalam Rajah 1, tetapkan tempoh kepada 7 tahun. Berapakah ansuran bulanan bagi pinjaman RM30 000 pada kadar rata 3.5% setahun?",
     "b": 444.64,
     "tol": 0.05,
     "suf": "RM",
     "u": "Jumlah bayar balik A = P + Prt = 30 000 + 30 000 × 0.035 × 7 = RM37 350. Bahagi 84 bulan: RM444.64."
    },
    {
     "j": "pilih",
     "t": "Pinjaman kereta RM60 000 pada kadar rata 4% setahun selama 5 tahun. Berapakah jumlah bayar balik?",
     "p": [
      "RM72 000",
      "RM12 000",
      "RM62 400",
      "RM144 000"
     ],
     "b": 0,
     "u": "A = P + Prt = 60 000 + 60 000 × 0.04 × 5 = RM72 000. RM12 000 ialah faedah sahaja."
    },
    {
     "j": "pilih",
     "t": "Encik Ali membandingkan dua pinjaman RM20 000. Pinjaman A: 3% selama 5 tahun. Pinjaman B: 4% selama 3 tahun. Yang manakah jumlah faedahnya lebih rendah?",
     "p": [
      "A, faedah RM3 000 berbanding RM2 400",
      "B, faedah RM2 400 berbanding RM3 000",
      "Sama, RM3 000 setiap satu",
      "Tidak dapat ditentukan tanpa ansuran"
     ],
     "b": 1,
     "u": "Faedah A = 20 000 × 0.03 × 5 = RM3 000. Faedah B = 20 000 × 0.04 × 3 = RM2 400."
    },
    {
     "j": "pilih",
     "t": "Nur bergaji RM5 000 dan sudah ada komitmen RM1 500 sebulan. Peraturan asas: jumlah bayaran hutang bulanan tidak melebihi 40% gaji. Pinjaman A ansuran RM383.33, pinjaman B ansuran RM622.22. Yang manakah sesuai?",
     "p": [
      "Pinjaman B, komitmen 42.4% daripada gaji",
      "Kedua-duanya sesuai",
      "Pinjaman A, komitmen 37.7% daripada gaji",
      "Tiada satu pun sesuai"
     ],
     "b": 2,
     "u": "Dengan A: (1 500 + RM383.33) ÷ 5 000 = 37.7%, di bawah 40%. Dengan B: 42.4%, melebihi 40%."
    },
    {
     "j": "nombor",
     "t": "Seorang pelanggan membayar ansuran RM500 sebulan selama 4 tahun untuk pinjaman RM18 000. Berapakah jumlah faedah yang dibayar?",
     "b": 6000,
     "tol": 0.5,
     "suf": "RM",
     "u": "Jumlah bayar = 500 × 48 = RM24 000. Faedah = 24 000 − 18 000 = RM6 000."
    },
    {
     "j": "nombor",
     "t": "Pinjaman RM20 000 selama 3 tahun dibayar balik sebanyak RM22 400. Berapakah kadar faedah rata setahun?",
     "b": 4,
     "tol": 0.05,
     "suf": "%",
     "u": "Faedah = 22 400 − 20 000 = RM2 400. Dari I = Prt, r = 2 400 ÷ (20 000 × 3) = 0.04 = 4%."
    },
    {
     "j": "pilih",
     "t": "Pinjaman segera (pemberi pinjam tidak berlesen) sering berbahaya kerana:",
     "p": [
      "Ia tidak perlu dibayar balik",
      "Kadar faedahnya sentiasa paling rendah",
      "Ia hanya diberi kepada mereka yang tiada hutang",
      "Kadar faedah dan caj sering sangat tinggi"
     ],
     "b": 3,
     "u": "Pinjaman tidak berlesen sering mengenakan faedah yang tidak munasabah dan cara kutipan yang menekan."
    },
    {
     "j": "pilih",
     "t": "Sebelum menandatangani perjanjian pinjaman, tindakan paling bijak ialah:",
     "p": [
      "Baca semua syarat, kadar dan caj",
      "Tandatangan dahulu, baca kemudian",
      "Pilih ansuran paling rendah sahaja",
      "Pinjam sebanyak yang ditawarkan"
     ],
     "b": 0,
     "u": "Perjanjian mengandungi kadar, caj dan penalti. Ia perlu difahami sebelum ditandatangani."
    }
   ],
   "bos": {
    "j": "buka",
    "t": "Seorang guru muda bergaji RM5 500 dan sudah ada komitmen RM1 300 sebulan. Dia mahu membeli kereta RM50 000 dengan pinjaman kadar rata 3.2% setahun. Bank menawarkan tempoh 7 tahun atau 9 tahun. Peraturan asas: jumlah bayaran hutang bulanan tidak melebihi 40% gaji.",
    "arahan": "Kira jumlah bayar balik dan ansuran bulanan bagi kedua-dua tempoh, semak peraturan 40%, dan cadangkan tempoh yang lebih sesuai dengan justifikasi. Pertimbangkan jumlah faedah dan keselamatan belanjawan.",
    "u": "Jawapan TP6 yang kukuh mengira kedua-dua pilihan dengan betul (7 tahun: RM728.57 sebulan, 9 tahun: RM596.30 sebulan), menyemak peraturan 40%, dan memberi keputusan dengan justifikasi kewangan yang jelas."
   }
  }
 ]
};
