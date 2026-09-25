/* Sumber kandungan — Matematik KSSM Tingkatan 3, Bab 3 Matematik Pengguna:
   Simpanan dan Pelaburan, Kredit dan Hutang.
   Fail ini disunting tangan. Jalankan `node bina.js m3b3` untuk menyemaknya
   dan menghasilkan bank-m3b3.js dengan kedudukan jawapan yang seimbang.

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan 3, Bahagian Pembangunan Kurikulum, muka 44 (dskp/matematik-t3.pdf).

   Jawapan bagi soalan yang merujuk rajah interaktif dikira daripada
   formula widget (interaktif.js) supaya rajah dan jawapan tidak boleh
   bercanggah. Medan `kira` ialah semakan bebas (tools/semak-jawapan.js). */
const { s, rm } = require("./_k");
const JMI = require("../interaktif");
const bunda2 = x => Math.round(x * 100) / 100;

const SPI = [
"Mempamerkan pengetahuan asas tentang simpanan, pelaburan, kredit dan hutang.",
"Mempamerkan kefahaman tentang simpanan, pelaburan, kredit dan hutang.",
"Mengaplikasikan kefahaman tentang simpanan, pelaburan, kredit dan hutang untuk melaksanakan tugasan mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang simpanan, pelaburan, kredit dan hutang dalam konteks penyelesaian masalah rutin yang mudah.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang simpanan, pelaburan, kredit dan hutang dalam konteks penyelesaian masalah rutin yang kompleks.",
"Mengaplikasikan pengetahuan dan kemahiran yang sesuai tentang simpanan, pelaburan, kredit dan hutang dalam konteks penyelesaian masalah bukan rutin secara kreatif."];

/* ---------- lampiran: jadual ---------- */

const T_JENIS =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Jenis</th><th>Risiko</th><th>Pulangan</th><th>Kecairan</th></tr></thead><tbody>'+
'<tr><td>Akaun semasa</td><td>Rendah</td><td>Tiada</td><td>Tinggi</td></tr>'+
'<tr><td>Akaun simpanan</td><td>Rendah</td><td>Rendah</td><td>Tinggi</td></tr>'+
'<tr><td>Akaun simpanan tetap</td><td>Rendah</td><td>Sederhana</td><td>Rendah</td></tr>'+
'<tr><td>Amanah saham</td><td>Sederhana</td><td>Sederhana</td><td>Sederhana</td></tr>'+
'<tr><td>Saham</td><td>Tinggi</td><td>Tinggi</td><td>Sederhana</td></tr>'+
'<tr><td>Hartanah</td><td>Sederhana</td><td>Sederhana hingga tinggi</td><td>Sangat rendah</td></tr>'+
'</tbody></table></div><p class="qnote">Jadual 1 · Perbandingan ringkas jenis simpanan dan pelaburan. Kecairan ialah kemudahan menukar kepada wang tunai.</p>';

/* Pemurataan kos ringgit: RM300 dilabur setiap bulan, harga seunit berubah. */
const HARGA = [2.00, 2.50, 1.50], LABUR = 300;
const UNIT = HARGA.map(h => LABUR / h);
const JUM_UNIT = UNIT.reduce((a, b) => a + b, 0);
const JUM_LABUR = LABUR * HARGA.length;
const PURATA_KOS = bunda2(JUM_LABUR / JUM_UNIT);
const PURATA_HARGA = bunda2(HARGA.reduce((a, b) => a + b, 0) / HARGA.length);
const BULAN = ["Januari", "Februari", "Mac"];
const T_KOS =
'<div class="scrollx"><table class="datatable"><thead><tr><th>Bulan</th><th class="n">Harga seunit (RM)</th><th class="n">Dilabur (RM)</th><th class="n">Unit dibeli</th></tr></thead><tbody>'+
HARGA.map((h, i) => `<tr><td>${BULAN[i]}</td><td class="n">${h.toFixed(2)}</td><td class="n">${LABUR}</td><td class="n">${Math.round(UNIT[i])}</td></tr>`).join("")+
`<tr><td><b>Jumlah</b></td><td class="n">&ndash;</td><td class="n"><b>${JUM_LABUR}</b></td><td class="n"><b>${Math.round(JUM_UNIT)}</b></td></tr>`+
'</tbody></table></div><p class="qnote">Jadual 1 · RM300 dilabur dalam amanah saham pada awal setiap bulan. Bilangan unit = wang dilabur ÷ harga seunit.</p>';

/* ---------- lampiran: rajah interaktif ---------- */

const R_KOMPAUN1 = {
  jenis:"interaktif", w:"kompaun", P:5000, r:4, n:1, tMaks:10, t:5,
  kapsyen:"Rajah 1 · Simpanan RM5 000 pada 4% setahun. Garis hijau ialah faedah mudah, garis gelap ialah faedah kompaun tahunan.",
  alt:"Rajah interaktif graf nilai simpanan RM5000 pada 4 peratus setahun, faedah mudah lawan faedah kompaun"
};
const R_KOMPAUN2 = {
  jenis:"interaktif", w:"kompaun", P:10000, r:6, n:12, tMaks:10, t:3,
  kapsyen:"Rajah 1 · Simpanan RM10 000 pada 6% setahun. Garis gelap dikompaun setiap bulan, garis hijau ialah faedah mudah.",
  alt:"Rajah interaktif graf nilai simpanan RM10000 pada 6 peratus setahun dikompaun bulanan lawan faedah mudah"
};
const R_KAD = {
  jenis:"interaktif", w:"kad", baki:3000, kadar:15, minPeratus:5, minRM:50, bMaks:12, b:3,
  kapsyen:"Rajah 1 · Baki kad kredit RM3 000, faedah 15% setahun. Bayaran minimum ialah 5% baki atau RM50, yang mana lebih besar.",
  alt:"Rajah interaktif graf baki kad kredit RM3000 jika hanya bayar minimum setiap bulan, gelongsor bulan"
};
const R_PINJAMAN = {
  jenis:"interaktif", w:"pinjaman", P:30000, r:3.5, tMaks:9, t:5,
  kapsyen:"Rajah 1 · Pinjaman RM30 000 pada kadar rata 3.5% setahun. Gerakkan tempoh untuk melihat faedah dan ansuran.",
  alt:"Rajah interaktif pinjaman RM30000 kadar rata 3.5 peratus; gelongsor tempoh menunjukkan faedah dan ansuran bulanan"
};

const K2 = JMI.W.kompaun, KD = JMI.W.kad, PJ = JMI.W.pinjaman;
const kompaun2 = t => K2.kira(R_KOMPAUN2, { t });
const kad = b => KD.kira(R_KAD, { b });
const pinjam = t => PJ.kira(R_PINJAMAN, { t });
const mv = (P, r, n, t) => bunda2(P * Math.pow(1 + r / 100 / n, n * t));

/* Perbandingan wang RM10 000, 10 tahun (hentian 3, soalan 8) */
const BANDING10 = [
  ["6% dikompaun bulanan", mv(10000, 6, 12, 10)],
  ["6% dikompaun setahun", mv(10000, 6, 1, 10)],
  ["6% faedah mudah", 10000 * (1 + 0.06 * 10)],
  ["5% dikompaun bulanan", mv(10000, 5, 12, 10)]];

/* Pinjaman kereta (hentian 6, soalan 4): peraturan 40% */
const ANSURAN_A = (20000 + 20000 * 0.03 * 5) / 60;
const ANSURAN_B = (20000 + 20000 * 0.04 * 3) / 36;
const DSR_A = Math.round((1500 + ANSURAN_A) / 5000 * 1000) / 10;
const DSR_B = Math.round((1500 + ANSURAN_B) / 5000 * 1000) / 10;

/* ---------- hentian ---------- */

const ARAS = [

{n:1, tempat:"Kaunter Bank", sk:"3.1.1 / 3.2.1 Jenis simpanan, pelaburan, kredit dan hutang", lampiran:"jenis",
 kadNama:"Simpanan Bijak", kadEm:"\u{1F437}", kadFakta:"Menyimpan sedikit demi sedikit lebih berkesan daripada menunggu wang banyak. Wang yang disimpan awal sempat berkembang lebih lama.",
 bosKadNama:"Wang Kecemasan", bosKadEm:"\u{1F6DF}", bosKadFakta:"Pakar kewangan mencadangkan simpanan kecemasan sebanyak tiga hingga enam bulan perbelanjaan, di tempat yang mudah dikeluarkan.",
 soalan:[
 {j:"pilih",t:"Jenis simpanan yang membenarkan wang dikeluarkan bila-bila masa tanpa penalti ialah:",p:["Akaun simpanan","Akaun simpanan tetap","Amanah saham","Hartanah"],b:0,u:"Akaun simpanan tetap mengunci wang untuk tempoh tertentu; mengeluarkan awal boleh dikenakan penalti."},
 {j:"pilih",t:"Manakah antara berikut ialah jenis pelaburan?",p:["Amanah saham","Akaun semasa","Akaun simpanan","Akaun simpanan tetap"],b:0,u:"Akaun semasa, simpanan dan simpanan tetap ialah jenis simpanan. Saham, amanah saham dan hartanah ialah pelaburan."},
 {j:"pilih",t:"Berdasarkan Jadual 1, jenis manakah yang berisiko tinggi dan berpulangan tinggi?",p:["Saham","Akaun simpanan","Akaun semasa","Akaun simpanan tetap"],b:0,u:"Jadual 1 menunjukkan saham berisiko tinggi dan berpulangan tinggi."},
 {j:"pilih",t:"Kredit bermaksud:",p:["Kemudahan berbelanja sekarang dan membayar kemudian","Wang yang disimpan dalam akaun bank untuk jangka panjang","Keuntungan yang diperoleh daripada pelaburan saham","Nilai matang bagi sesuatu simpanan tetap"],b:0,u:"Kredit membolehkan seseorang berbelanja terlebih dahulu dan membayar pada masa akan datang, biasanya dengan faedah."},
 {j:"pilih",t:"Dalam kewangan, apakah yang dimaksudkan dengan hutang?",p:["Jumlah wang yang dipinjam dan mesti dibayar balik","Wang lebihan selepas semua perbelanjaan bulanan dibayar","Faedah yang diterima daripada akaun simpanan di bank","Keuntungan bersih yang diperoleh daripada pelaburan"],b:0,u:"Hutang wujud apabila seseorang meminjam wang atau menggunakan kredit dan wajib membayar balik."},
 {j:"pilih",t:"Berdasarkan Jadual 1, jenis manakah yang mempunyai kecairan paling rendah?",p:["Hartanah","Akaun semasa","Akaun simpanan","Saham"],b:0,u:"Hartanah mengambil masa lama untuk dijual, jadi kecairannya sangat rendah."},
 {j:"pilih",t:"Manakah yang BUKAN jenis kredit?",p:["Akaun simpanan","Kad kredit","Pinjaman kereta","Pinjaman peribadi"],b:0,u:"Akaun simpanan ialah wang milik sendiri. Kad kredit dan pinjaman ialah kredit kerana wang milik pemberi pinjam."},
 {j:"susun",t:"Susun mengikut kecairan daripada yang paling cair kepada yang paling kurang cair.",p:["Akaun semasa","Akaun simpanan","Akaun simpanan tetap","Hartanah"],b:[0,1,2,3],u:"Akaun semasa dan simpanan boleh dikeluarkan serta-merta, simpanan tetap dikunci, hartanah paling lambat ditunaikan."}],
 bos:{j:"banyak",t:"Pilih SEMUA yang termasuk jenis pelaburan.",p:["Saham","Amanah saham","Hartanah","Akaun semasa","Akaun simpanan","Akaun simpanan tetap"],b:[0,1,2],u:"Pelaburan bertujuan menambah nilai wang tetapi ada risiko. Tiga yang lain ialah jenis simpanan."}},

{n:2, tempat:"Kaunter Faedah", sk:"3.1.2 Faedah mudah dan faedah kompaun", lampiran:"kompaun1",
 kadNama:"Faedah Berbunga", kadEm:"\u{1F33C}", kadFakta:"Faedah kompaun sering dipanggil 'faedah atas faedah', kerana faedah tahun lepas turut menghasilkan faedah baharu tahun ini.",
 bosKadNama:"Kuasa Masa", bosKadEm:"\u{23F3}", bosKadFakta:"Dalam kompaun, tempoh yang lebih lama memberi kesan lebih besar daripada kadar faedah yang sedikit lebih tinggi.",
 soalan:[
 {j:"pilih",t:"Faedah mudah dikira ke atas:",p:["Prinsipal asal sahaja","Prinsipal dan faedah terkumpul","Baki akaun pada akhir setiap bulan","Nilai matang pada tahun sebelumnya"],b:0,u:"Faedah mudah sentiasa dikira daripada jumlah asal yang disimpan, iaitu prinsipal."},
 {j:"pilih",t:"Faedah kompaun dikira ke atas:",p:["Prinsipal dan faedah terkumpul","Prinsipal asal sahaja","Faedah tahun pertama sahaja","Kadar faedah tahunan sahaja"],b:0,u:"Faedah kompaun ditambah kepada prinsipal, jadi tahun berikutnya faedah dikira ke atas jumlah yang lebih besar."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan tahun kepada 4. Berapakah nilai simpanan dengan faedah mudah?",b:5000*(1+0.04*4),tol:0.5,suf:"RM",u:"Faedah mudah I = Prt = 5 000 × 0.04 × 4 = RM800. Nilai simpanan = 5 000 + 800 = RM5 800.",kira:()=>5000+5000*0.04*4},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan tahun kepada 10. Berapakah beza antara nilai kompaun dan nilai mudah, kepada ringgit terdekat?",b:bunda2(K2.kira(R_KOMPAUN1,{t:10}).kompaun-K2.kira(R_KOMPAUN1,{t:10}).mudah),tol:0.5,suf:"RM",u:`Pada tahun 10, nilai kompaun ialah ${rm(K2.kira(R_KOMPAUN1,{t:10}).kompaun)} dan nilai mudah ${rm(K2.kira(R_KOMPAUN1,{t:10}).mudah)}. Bezanya kira-kira RM401.`,kira:()=>bunda2(5000*Math.pow(1.04,10)-7000)},
 {j:"pilih",t:"Pada tahun pertama, faedah mudah dan faedah kompaun (dikompaun setahun sekali) memberi nilai yang:",p:["Sama","Kompaun lebih tinggi","Mudah lebih tinggi","Tidak dapat ditentukan"],b:0,u:"Pada tahun pertama belum ada faedah terkumpul, jadi kedua-duanya memberi RM5 200 dalam Rajah 1.",kira:()=>Math.abs(5000*1.04-5000*(1+0.04))<1e-9},
 {j:"pilih",t:"Apabila tempoh simpanan bertambah, jurang antara nilai kompaun dan nilai mudah:",p:["Semakin besar","Semakin kecil","Kekal sama","Menjadi sifar"],b:0,u:"Faedah atas faedah bertambah setiap tahun, jadi kompaun semakin jauh meninggalkan faedah mudah."},
 {j:"pilih",t:"Dalam rumus faedah mudah I = Prt, simbol t bermaksud:",p:["Tempoh dalam tahun","Kadar faedah","Prinsipal","Jumlah faedah"],b:0,u:"I ialah faedah, P prinsipal, r kadar dan t masa dalam tahun."},
 {j:"pilih",t:"Wang RM2 000 disimpan dengan faedah mudah 3% setahun selama 5 tahun. Berapakah jumlah faedahnya?",p:[rm(2000*0.03*5),rm(2000*0.03),rm(2000*5),rm(2000+2000*0.03*5)],b:0,u:"I = Prt = 2 000 × 0.03 × 5 = RM300. RM2 300 ialah nilai keseluruhan, bukan faedah.",kira:()=>2000*0.03*5}],
 bos:{j:"nombor",t:"Prinsipal RM5 000 disimpan pada faedah mudah 4% setahun. Selepas berapa tahun nilai simpanan mencapai RM7 000?",b:10,tol:0.5,suf:"tahun",u:"Faedah yang diperlukan ialah RM2 000. Setiap tahun RM200, jadi 2 000 ÷ 200 = 10 tahun.",kira:()=>(7000-5000)/(5000*0.04)}},

{n:3, tempat:"Portfolio Pelaburan", sk:"3.1.2 / 3.1.3 Nilai matang dan pulangan pelaburan", lampiran:"kompaun2",
 kadNama:"Pulangan Sebenar", kadEm:"\u{1F4C8}", kadFakta:"Pulangan pelaburan mesti dibandingkan dengan kadar inflasi. Pulangan 3% apabila harga barang naik 3% bermakna nilai sebenar wang tidak bertambah.",
 bosKadNama:"Pelbagaikan!", bosKadEm:"\u{1F9FA}", bosKadFakta:"Peribahasa lama berkata jangan letak semua telur dalam satu bakul. Pelaburan yang dipelbagaikan mengurangkan kesan jika satu pelaburan rugi.",
 soalan:[
 {j:"pilih",t:"Dalam rumus MV = P(1 + r/n)^nt, n ialah:",p:["Kekerapan kompaun setahun","Bilangan tahun simpanan","Kadar faedah tahunan","Nilai matang"],b:0,u:"n ialah kekerapan pengkompaunan setahun. Contohnya bulanan ialah n = 12."},
 {j:"nombor",t:"Dalam Rajah 1, tetapkan tahun kepada 5. Berapakah nilai kompaun simpanan RM10 000 pada 6% setahun dikompaun setiap bulan, kepada ringgit terdekat?",b:kompaun2(5).kompaun,tol:1,suf:"RM",u:`MV = 10 000 × (1 + 0.06/12) kuasa 60 = ${rm(kompaun2(5).kompaun)}.`,kira:()=>bunda2(10000*Math.pow(1+0.06/12,60))},
 {j:"pilih",t:"Apabila kekerapan pengkompaunan bertambah, contohnya daripada setahun sekali kepada setiap bulan, nilai matang:",p:["Bertambah sedikit","Berkurang","Kekal sama","Menjadi dua kali ganda"],b:0,u:"Faedah dikira lebih kerap, jadi faedah atas faedah bermula lebih awal. Perbezaannya kecil tetapi sentiasa positif.",kira:()=>mv(10000,6,12,10)>mv(10000,6,1,10)},
 {j:"nombor",t:"Hitung nilai matang bagi RM4 000 pada 5% setahun dikompaun setahun sekali selama 3 tahun.",b:mv(4000,5,1,3),tol:0.05,suf:"RM",u:"MV = 4 000 × (1.05) kuasa 3 = 4 000 × 1.157625 = RM4 630.50.",kira:()=>4000*1.157625},
 {j:"pilih",t:"Pulangan pelaburan (ROI) dikira sebagai:",p:["(Untung bersih ÷ modal) × 100%","(Modal ÷ untung bersih) × 100%","Untung bersih + modal","Modal × kadar × tempoh"],b:0,u:"ROI membandingkan keuntungan bersih dengan wang yang dilaburkan sebagai peratusan."},
 {j:"nombor",t:"Ali melabur RM8 000 dalam amanah saham dan menjualnya RM8 800. Berapakah ROI?",b:10,tol:0.05,suf:"%",u:"Untung bersih = 8 800 − 8 000 = RM800. ROI = 800 ÷ 8 000 × 100% = 10%.",kira:()=>(8800-8000)/8000*100},
 {j:"pilih",t:"Sebuah hartanah dibeli RM300 000 dan disewakan RM15 000 setahun. Kadar pulangan sewa setahun ialah:",p:["5%","20%","0.5%","15%"],b:0,u:"15 000 ÷ 300 000 × 100% = 5%.",kira:()=>15000/300000*100},
 {j:"pilih",t:"Manakah pilihan yang memberi nilai matang tertinggi selepas 10 tahun bagi RM10 000?",p:BANDING10.map(x=>x[0]),b:0,u:`Nilai selepas 10 tahun: ${BANDING10.map(x=>x[0]+" = "+rm(x[1])).join("; ")}.`,kira:()=>BANDING10[0][1]===Math.max(...BANDING10.map(x=>x[1]))}],
 bos:{j:"pilih",t:"Seorang pelabur berkata, 'ROI 20% setahun lebih baik daripada ROI 8%, jadi semua wang saya akan dilabur dalam pelaburan pertama.' Apakah kelemahan pertimbangannya?",p:["ROI tinggi biasanya berisiko tinggi, jadi wang perlu dipelbagaikan","ROI 8% lebih baik kerana angkanya lebih kecil dan selamat","ROI tidak berkait dengan keuntungan pelaburan sebenar","Pelabur perlu sentiasa memilih ROI yang paling rendah"],b:0,u:"Pulangan tinggi selalunya datang bersama risiko lebih tinggi. Pelaburan yang dipelbagaikan melindungi daripada kerugian besar."}},

{n:4, tempat:"Meja Perancangan", sk:"3.1.4 / 3.1.5 / 3.1.6 Risiko, pulangan, kecairan dan purata kos sesyer", lampiran:"kos",
 kadNama:"Purata Kos", kadEm:"\u{1F4CA}", kadFakta:"Membeli dengan jumlah wang sama setiap bulan bermakna awak beli lebih banyak unit apabila harga murah dan kurang unit apabila harga mahal, secara automatik.",
 bosKadNama:"Sabar Melabur", bosKadEm:"\u{1F422}", bosKadFakta:"Pelabur berjaya biasanya melabur dengan sabar dan berkala, bukan cuba meneka masa harga paling rendah, kerana tiada sesiapa yang dapat meramalnya dengan tepat.",
 soalan:[
 {j:"nombor",t:"Berdasarkan Jadual 1, berapakah jumlah unit yang dibeli dalam tiga bulan?",b:Math.round(JUM_UNIT),tol:0.5,suf:"unit",u:"150 + 120 + 200 = 470 unit.",kira:()=>300/2+300/2.5+300/1.5},
 {j:"nombor",t:"Jumlah wang dilaburkan dalam tiga bulan ialah RM900. Berapakah purata kos seunit, kepada 2 tempat perpuluhan?",b:PURATA_KOS,tol:0.005,suf:"RM",u:"Purata kos = 900 ÷ 470 = RM1.91 seunit.",kira:()=>bunda2(900/470)},
 {j:"pilih",t:"Strategi pemurataan kos ringgit bermaksud:",p:["Melabur jumlah wang yang sama secara berkala tanpa mengira harga","Membeli hanya apabila harga paling rendah","Menjual semua unit apabila harga naik","Melabur semua wang sekali gus pada awal tahun"],b:0,u:"Pelabur melabur jumlah tetap secara berkala, jadi kos purata diratakan."},
 {j:"pilih",t:"Manfaat utama strategi pemurataan kos ringgit ialah:",p:["Meratakan kesan turun naik harga","Menjamin keuntungan setiap bulan","Menghapuskan semua risiko pelaburan","Menaikkan harga saham"],b:0,u:"Strategi ini tidak menjamin untung, tetapi mengurangkan risiko membeli semua unit pada harga tertinggi."},
 {j:"pilih",t:`Berdasarkan Jadual 1, mengapa purata kos seunit (${rm(PURATA_KOS)}) lebih rendah daripada purata harga (RM${PURATA_HARGA.toFixed(2)})?`,p:["Lebih banyak unit dibeli apabila harga rendah","Kerana harga tidak berubah","Kerana bilangan unit sama setiap bulan","Kerana jumlah dilabur berbeza setiap bulan"],b:0,u:"Pada bulan Mac harga paling rendah, jadi 200 unit dibeli, lebih banyak daripada bulan lain.",kira:()=>PURATA_KOS<PURATA_HARGA},
 {j:"pilih",t:"Sebuah bank Islam menyatakan kadar pulangan 4% setahun untuk akaun pelaburannya. Apakah maksud kadar itu?",p:["Kadar rujukan, pulangan sebenar diketahui pada tarikh matang","Pulangan sebenar dijamin tepat 4% setiap tahun","Bank tidak memberi apa-apa pulangan kepada pelanggan","Pulangan sentiasa lebih tinggi daripada 4%"],b:0,u:"Dalam perbankan Islam, kadar pulangan hanya sebagai rujukan. Kadar pulangan sebenar hanya diketahui pada tempoh matang atau pada tarikh wang dikeluarkan."},
 {j:"pilih",t:"Pelaburan yang biasanya memberi pulangan tinggi tetapi berisiko tinggi ialah:",p:["Saham","Akaun simpanan","Akaun semasa","Akaun simpanan tetap"],b:0,u:"Harga saham naik dan turun dengan banyak, jadi pulangan tinggi tetapi risiko tinggi."},
 {j:"pilih",t:"Puan Rina mahu wang kecemasan yang boleh dikeluarkan bila-bila masa dengan risiko rendah. Pilihan paling sesuai ialah:",p:["Akaun simpanan","Saham syarikat","Hartanah sewaan","Akaun simpanan tetap 5 tahun"],b:0,u:"Wang kecemasan mesti cair dan selamat, jadi akaun simpanan lebih sesuai."}],
 bos:{j:"nombor",t:"Dalam tiga bulan seterusnya, harga seunit ialah RM2.20, RM1.80 dan RM2.00, dengan RM300 dilabur setiap bulan. Berapakah purata kos seunit, kepada 2 tempat perpuluhan?",b:bunda2(900/(300/2.2+300/1.8+300/2.0)),tol:0.005,suf:"RM",u:"Unit: 136.36 + 166.67 + 150 = 453.03. Purata kos = 900 ÷ 453.03 = RM1.99.",kira:()=>bunda2(900/(300/2.2+300/1.8+300/2.0))}},

{n:5, tempat:"Penyata Kad Kredit", sk:"3.2.2 / 3.2.3 / 3.2.4 Kad kredit dan bayaran minimum", lampiran:"kad",
 kadNama:"Perangkap Minimum", kadEm:"\u{1FAA4}", kadFakta:"Bayaran minimum kad kredit dikira untuk memastikan awak kekal berhutang lama. Faedah yang dibayar boleh mengatasi pembelian asal.",
 bosKadNama:"Bayar Penuh", bosKadEm:"\u{2705}", bosKadFakta:"Kebanyakan kad kredit memberi tempoh bebas faedah jika baki dibayar penuh sebelum tarikh akhir. Itulah cara paling bijak menggunakan kad.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan bulan kepada 6. Berapakah baki hutang selepas bayar minimum sahaja selama 6 bulan, kepada ringgit terdekat?",b:kad(6).baki,tol:1,suf:"RM",u:`Setiap bulan bayar 5% baki (atau RM50), kemudian faedah 15%/12 ditambah. Selepas 6 bulan, baki ialah ${rm(kad(6).baki)}.`,kira:()=>{let b=3000;for(let i=0;i<6;i++){let x=Math.max(0.05*b,50);if(x>b)x=b;b-=x;b+=b*0.15/12;}return bunda2(b);}},
 {j:"pilih",t:"Bayaran minimum kad kredit biasanya:",p:["Peratusan baki atau jumlah tetap, mana lebih besar","Sama dengan jumlah baki penuh kad kredit","RM1 setiap bulan tanpa mengira jumlah baki","Kosong jika baki kurang daripada RM1 000"],b:0,u:"Bank mengenakan minimum peratusan baki atau jumlah tetap supaya baki dan faedah tidak dibiarkan bertambah."},
 {j:"pilih",t:"Jika hanya bayaran minimum dibuat, faedah dikenakan ke atas:",p:["Baki yang belum dibayar","Jumlah pembelian asal sahaja","Bayaran minimum sahaja","Kadar tukaran mata wang"],b:0,u:"Faedah baki dikira atas hutang yang masih tinggal selepas bayaran."},
 {j:"nombor",t:"Berdasarkan Rajah 1, berapakah jumlah faedah yang dikenakan dalam 12 bulan jika hanya bayar minimum, kepada ringgit terdekat?",b:kad(12).faedah,tol:1,suf:"RM",u:`Jumlah faedah selama 12 bulan ialah ${rm(kad(12).faedah)}.`,kira:()=>{let b=3000,f=0;for(let i=0;i<12;i++){let x=Math.max(0.05*b,50);if(x>b)x=b;b-=x;const y=b*0.15/12;f+=y;b+=y;}return bunda2(f);}},
 {j:"pilih",t:"Faedah kad kredit Nora ialah 1.5% sebulan atas baki RM2 000. Berapakah faedah untuk sebulan?",p:[rm(2000*0.015),rm(2000*0.0015),rm(2000*0.15),rm(2000*0.01)],b:0,u:"1.5% daripada 2 000 = 0.015 × 2 000 = RM30.",kira:()=>2000*0.015},
 {j:"pilih",t:"Manakah tindakan paling bijak untuk mengelak caj faedah kad kredit?",p:["Bayar penuh baki sebelum tarikh akhir","Bayar minimum setiap bulan","Bayar lewat sehari sahaja","Guna kad kredit lain untuk membayar"],b:0,u:"Bayar penuh sebelum tarikh akhir bermakna tiada faedah dikenakan pada pembelian biasa."},
 {j:"pilih",t:"Harga sebuah barang dalam talian ialah 40 dolar AS dan 1 dolar AS bersamaan RM4.50. Berapakah harganya dalam ringgit?",p:[rm(40*4.5),rm(4.5+40),rm(40/4.5),rm(40*4.5*10)],b:0,u:"40 × 4.50 = RM180. Ingat pertukaran mata wang boleh mengenakan caj tambahan.",kira:()=>40*4.5},
 {j:"pilih",t:"Membayar kad kredit lewat biasanya menyebabkan:",p:["Caj lewat dan kesan buruk pada rekod kredit","Faedah dihapuskan","Had kredit bertambah automatik","Ganjaran mata digandakan"],b:0,u:"Bayaran lewat dikenakan caj dan boleh menjejaskan kelayakan pinjaman pada masa depan."}],
 bos:{j:"pilih",t:"Danial hanya membayar minimum setiap bulan dan berkata, 'Baki saya menurun, jadi tiada masalah.' Berdasarkan Rajah 1, apakah kelemahan pertimbangannya?",p:["Baki menurun perlahan, faedah yang dibayar sangat besar","Baki sebenarnya bertambah pada setiap bulan bayaran","Bayaran minimum sentiasa meningkat setiap bulan","Faedah hanya dikenakan pada bulan pertama sahaja"],b:0,u:"Baki memang menurun, tetapi lambat. Hutang RM3 000 masih besar selepas setahun dan faedah terus dikenakan."}},

{n:6, tempat:"Bilik Rundingan", sk:"3.2.5 / 3.2.6 Pinjaman, bayaran balik dan ansuran", lampiran:"pinjam",
 kadNama:"Beban 40%", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Pakar kewangan menasihatkan jumlah bayaran hutang bulanan tidak melebihi kira-kira 40% pendapatan supaya belanjawan tidak tercekik.",
 bosKadNama:"Rundingan Bijak", bosKadEm:"\u{1F91D}", bosKadFakta:"Membandingkan sekurang-kurangnya tiga tawaran pinjaman sebelum memilih boleh menjimatkan ribuan ringgit sepanjang tempoh pinjaman.",
 soalan:[
 {j:"nombor",t:"Dalam Rajah 1, tetapkan tempoh kepada 7 tahun. Berapakah ansuran bulanan bagi pinjaman RM30 000 pada kadar rata 3.5% setahun?",b:pinjam(7).bulanan,tol:0.05,suf:"RM",u:`Jumlah bayar balik A = P + Prt = 30 000 + 30 000 × 0.035 × 7 = ${rm(pinjam(7).jumlah)}. Bahagi 84 bulan: ${rm(pinjam(7).bulanan)}.`,kira:()=>bunda2((30000+30000*0.035*7)/84)},
 {j:"pilih",t:"Pinjaman kereta RM60 000 pada kadar rata 4% setahun selama 5 tahun. Berapakah jumlah bayar balik?",p:[rm(60000+60000*0.04*5),rm(60000*0.04*5),rm(60000+60000*0.04),rm(60000*0.04*5*12)],b:0,u:"A = P + Prt = 60 000 + 60 000 × 0.04 × 5 = RM72 000. RM12 000 ialah faedah sahaja.",kira:()=>60000+60000*0.04*5},
 {j:"pilih",t:"Encik Ali membandingkan dua pinjaman RM20 000. Pinjaman A: 3% selama 5 tahun. Pinjaman B: 4% selama 3 tahun. Yang manakah jumlah faedahnya lebih rendah?",p:["B, faedah RM2 400 berbanding RM3 000","A, faedah RM3 000 berbanding RM2 400","Sama, RM3 000 setiap satu","Tidak dapat ditentukan tanpa ansuran"],b:0,u:"Faedah A = 20 000 × 0.03 × 5 = RM3 000. Faedah B = 20 000 × 0.04 × 3 = RM2 400.",kira:()=>20000*0.04*3<20000*0.03*5},
 {j:"pilih",t:`Nur bergaji RM5 000 dan sudah ada komitmen RM1 500 sebulan. Peraturan asas: jumlah bayaran hutang bulanan tidak melebihi 40% gaji. Pinjaman A ansuran ${rm(ANSURAN_A)}, pinjaman B ansuran ${rm(ANSURAN_B)}. Yang manakah sesuai?`,p:[`Pinjaman A, komitmen ${DSR_A}% daripada gaji`,`Pinjaman B, komitmen ${DSR_B}% daripada gaji`,"Kedua-duanya sesuai","Tiada satu pun sesuai"],b:0,u:`Dengan A: (1 500 + ${rm(ANSURAN_A)}) ÷ 5 000 = ${DSR_A}%, di bawah 40%. Dengan B: ${DSR_B}%, melebihi 40%.`,kira:()=>DSR_A<=40&&DSR_B>40},
 {j:"nombor",t:"Seorang pelanggan membayar ansuran RM500 sebulan selama 4 tahun untuk pinjaman RM18 000. Berapakah jumlah faedah yang dibayar?",b:500*48-18000,tol:0.5,suf:"RM",u:"Jumlah bayar = 500 × 48 = RM24 000. Faedah = 24 000 − 18 000 = RM6 000.",kira:()=>500*48-18000},
 {j:"nombor",t:"Pinjaman RM20 000 selama 3 tahun dibayar balik sebanyak RM22 400. Berapakah kadar faedah rata setahun?",b:4,tol:0.05,suf:"%",u:"Faedah = 22 400 − 20 000 = RM2 400. Dari I = Prt, r = 2 400 ÷ (20 000 × 3) = 0.04 = 4%.",kira:()=>(22400-20000)/(20000*3)*100},
 {j:"pilih",t:"Pinjaman segera (pemberi pinjam tidak berlesen) sering berbahaya kerana:",p:["Kadar faedah dan caj sering sangat tinggi","Ia tidak perlu dibayar balik","Kadar faedahnya sentiasa paling rendah","Ia hanya diberi kepada mereka yang tiada hutang"],b:0,u:"Pinjaman tidak berlesen sering mengenakan faedah yang tidak munasabah dan cara kutipan yang menekan."},
 {j:"pilih",t:"Sebelum menandatangani perjanjian pinjaman, tindakan paling bijak ialah:",p:["Baca semua syarat, kadar dan caj","Tandatangan dahulu, baca kemudian","Pilih ansuran paling rendah sahaja","Pinjam sebanyak yang ditawarkan"],b:0,u:"Perjanjian mengandungi kadar, caj dan penalti. Ia perlu difahami sebelum ditandatangani."}],
 bos:{j:"buka",
  t:"Seorang guru muda bergaji RM5 500 dan sudah ada komitmen RM1 300 sebulan. Dia mahu membeli kereta RM50 000 dengan pinjaman kadar rata 3.2% setahun. Bank menawarkan tempoh 7 tahun atau 9 tahun. Peraturan asas: jumlah bayaran hutang bulanan tidak melebihi 40% gaji.",
  arahan:"Kira jumlah bayar balik dan ansuran bulanan bagi kedua-dua tempoh, semak peraturan 40%, dan cadangkan tempoh yang lebih sesuai dengan justifikasi. Pertimbangkan jumlah faedah dan keselamatan belanjawan.",
  u:"Jawapan TP6 yang kukuh mengira kedua-dua pilihan dengan betul (7 tahun: RM728.57 sebulan, 9 tahun: RM596.30 sebulan), menyemak peraturan 40%, dan memberi keputusan dengan justifikasi kewangan yang jelas."}}
];

module.exports = {
  id:"m3b3", tingkatan:3, kod:"3.0 Matematik Pengguna",
  tajuk:"Wang Bijak",
  subtajuk:"Matematik Ting. 3 · Bab 3 Matematik Pengguna: Simpanan dan Pelaburan, Kredit dan Hutang",
  spi:SPI,
  /* Ulasan PBD mengikut tahap penguasaan. {n} diganti dengan nama pertama murid. */
  ulasan:{
   1:"{n} dapat mengingat kembali jenis-jenis simpanan, pelaburan dan maksud kredit serta hutang. Langkah seterusnya ialah memahami cara faedah dikira, bukan sekadar mengingati nama produk kewangan.",
   2:"{n} memahami perbezaan faedah mudah dan faedah kompaun serta kesan tempoh terhadap nilai simpanan. Perlu lebih latihan menggunakan rumus sebelum bergerak ke TP3.",
   3:"{n} boleh mengaplikasikan rumus nilai matang dan ROI untuk melaksanakan pengiraan simpanan dan pelaburan yang mudah. Galakkan membandingkan kesan kekerapan pengkompaunan.",
   4:"{n} mampu menyelesaikan masalah rutin yang mudah seperti purata kos sesyer dan memilih simpanan atau pelaburan mengikut risiko, pulangan dan kecairan. Seterusnya latih pertimbangan keputusan dengan justifikasi.",
   5:"{n} dapat menyelesaikan masalah kad kredit yang kompleks, termasuk kesan bayaran minimum dan faedah baki. Sudah bersedia untuk membuat keputusan pinjaman yang bijak.",
   6:"{n} berjaya membandingkan tawaran pinjaman, mengira jumlah bayar balik dan ansuran, dan membuat keputusan yang wajar dengan justifikasi yang jelas. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Matematik Pengguna. Cadangan: ulang hentian pertama menggunakan Jadual 1 dengan bimbingan rakan sebaya."
  },
  lampiran:{ jenis:T_JENIS, kompaun1:R_KOMPAUN1, kompaun2:R_KOMPAUN2, kos:T_KOS, kad:R_KAD, pinjam:R_PINJAMAN },
  aras:ARAS
};
