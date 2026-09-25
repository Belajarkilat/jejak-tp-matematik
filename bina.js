/* Pembina bank soalan.
   Guna: node bina.js t3b1 t3b3        (atau tanpa hujah untuk semua)

   Mengambil sumber/<id>.js yang disunting tangan, menyemaknya, mengagihkan
   kedudukan jawapan supaya tidak semuanya A, dan menulis bank-<id>.js.
   Pembinaan gagal jika mana-mana semakan tidak lulus, supaya bank yang
   rosak tidak pernah sampai ke murid. */
const fs = require("fs");
const path = require("path");
const { lukisLampiran } = require("./tools/lukis");

const KKO = ["Mengingat","Memahami","Mengaplikasi","Menganalisis","Menilai","Mereka cipta"];

function semak(bab){
  const m = [];
  const lihat = (ada, mesej) => { if(!ada) m.push(mesej); };

  lihat(bab.id && /^[a-z0-9]+$/.test(bab.id), "id bab tidak sah");
  lihat(Array.isArray(bab.spi) && bab.spi.length === 6, "perlu tepat enam Standard Prestasi");
  lihat(Array.isArray(bab.aras) && bab.aras.length === 6, "perlu tepat enam hentian");
  /* Ulasan PBD disalin cikgu terus ke SPPB, jadi setiap bab mesti ada
     ulasannya sendiri. Ulasan bab lain yang tertinggal di sini akan
     masuk ke rekod rasmi murid. */
  const ul = bab.ulasan || {};
  ["1","2","3","4","5","6","tiada"].forEach(k =>
    lihat(typeof ul[k] === "string" && ul[k].includes("{n}") && ul[k].length > 60,
      `ulasan "${k}" tiada, terlalu pendek, atau tidak mengandungi {n}`));
  if(m.length) return m;

  const idDilihat = new Set();
  bab.aras.forEach((a, i) => {
    const di = `H${i+1}`;
    lihat(a.n === i+1, `${di}: nombor hentian tidak sepadan dengan kedudukannya`);
    lihat(a.tempat && a.sk, `${di}: tempat atau standard kandungan tiada`);
    ["kadNama","kadEm","kadFakta","bosKadNama","bosKadEm","bosKadFakta"].forEach(k =>
      lihat(a[k], `${di}: medan kad ${k} tiada`));
    if(a.lampiran) lihat(bab.lampiran && bab.lampiran[a.lampiran],
      `${di}: merujuk lampiran "${a.lampiran}" yang tidak wujud`);
    /* Hentian yang ada rajah mesti ada sekurang-kurangnya satu soalan yang
       benar-benar merujuknya. Rajah yang tiada soalan bergantung padanya
       hanyalah hiasan yang melambatkan telefon murid. */
    const spekL = a.lampiran && bab.lampiran ? bab.lampiran[a.lampiran] : null;
    const sebutRajah = (a.soalan || []).concat(a.bos ? [a.bos] : [])
      .some(q => /\bRajah\b/.test(String(q.t) + " " + String(q.arahan || "")));
    if(spekL && typeof spekL === "object"){
      lihat(sebutRajah, `${di}: ada rajah tetapi tiada soalan yang merujuk "Rajah"`);
    } else if(sebutRajah){
      /* Arah bertentangan sama bahaya: soalan berkata "Berdasarkan Rajah 1"
         tetapi hentian ini memaparkan jadual atau tiada apa-apa. Ini berlaku
         apabila dua lampiran berkongsi nama kunci dan JavaScript menimpa
         yang pertama tanpa sebarang amaran. */
      lihat(false, `${di}: soalan merujuk "Rajah" tetapi lampiran hentian ini bukan rajah`);
    }
    lihat(Array.isArray(a.soalan) && a.soalan.length === 8,
      `${di}: ${a.soalan ? a.soalan.length : 0} soalan, sepatutnya 8`);
    lihat(a.bos, `${di}: tiada soalan bos`);

    (a.soalan || []).concat(a.bos ? [a.bos] : []).forEach((q, k) => {
      const id = `${di} item ${k+1}`;
      const kunci = `a${a.n}${k < 8 ? "q"+(k+1) : "bos"}`;
      lihat(!idDilihat.has(kunci), `${id}: id soalan berulang`);
      idDilihat.add(kunci);
      lihat(q.t && q.t.length > 15, `${id}: teks soalan terlalu pendek`);

      if(q.j === "pilih"){
        lihat(Array.isArray(q.p) && q.p.length >= 3, `${id}: kurang daripada tiga pilihan`);
        lihat(Number.isInteger(q.b) && q.b >= 0 && q.b < (q.p||[]).length, `${id}: indeks jawapan luar julat`);
        lihat(new Set(q.p||[]).size === (q.p||[]).length, `${id}: ada pilihan berulang`);
        lihat((q.p||[]).length <= 8, `${id}: lebih lapan pilihan, terlalu panjang untuk telefon`);
        lihat(q.u, `${id}: tiada penjelasan`);
      } else if(q.j === "banyak"){
        lihat(Array.isArray(q.b) && q.b.length >= 1, `${id}: tiada jawapan betul`);
        lihat(new Set(q.b||[]).size === (q.b||[]).length, `${id}: indeks jawapan berulang`);
        (q.b||[]).forEach(x => lihat(x >= 0 && x < q.p.length, `${id}: indeks ${x} luar julat`));
        lihat((q.b||[]).length < (q.p||[]).length, `${id}: semua pilihan ditanda betul`);
        lihat((q.p||[]).length <= 8, `${id}: lebih lapan pilihan, terlalu panjang untuk telefon`);
        lihat(q.u, `${id}: tiada penjelasan`);
      } else if(q.j === "susun"){
        const urut = (q.b||[]).slice().sort((x,y)=>x-y).join(",");
        lihat(urut === (q.p||[]).map((_,n)=>n).join(","), `${id}: susunan tidak meliputi setiap item tepat sekali`);
        lihat(q.u, `${id}: tiada penjelasan`);
      } else if(q.j === "nombor"){
        lihat(typeof q.b === "number" && isFinite(q.b), `${id}: jawapan berangka tidak sah`);
        lihat(typeof q.tol === "number" && q.tol > 0, `${id}: toleransi tiada`);
        lihat(q.u, `${id}: tiada penjelasan`);
      } else if(q.j === "buka"){
        lihat(k === 8, `${id}: tugasan bertulis hanya dibenarkan sebagai soalan bos`);
        lihat(a.n === 6, `${id}: tugasan bertulis hanya dibenarkan pada hentian TP6`);
        lihat(q.arahan, `${id}: tiada arahan tugasan`);
      } else {
        m.push(`${id}: jenis soalan tidak dikenali (${q.j})`);
      }
    });
  });
  return m;
}

/* Petunjuk panjang jawapan.
   Jika jawapan betul selalunya pilihan yang paling panjang dan paling
   terperinci, murid boleh lulus dengan memilih ayat terpanjang tanpa
   memahami sains. Itu memusnahkan nilai rekod sebagai bukti PBD, jadi
   pembinaan gagal jika coraknya terlalu kuat.

   Had setiap bab:
   - jawapan betul ialah pilihan paling panjang dalam <= 35% soalan satu
     jawapan (peluang rawak bagi empat pilihan ialah 25%)
   - purata panjang jawapan betul <= 1.20 kali purata pengganggu
   - jawapan betul ialah pilihan paling pendek dalam 10% hingga 35% soalan satu
     jawapan. Jika jawapan betul hampir tidak pernah paling pendek, murid
     boleh membuang pilihan terpendek tanpa membaca soalan.
   Had setiap soalan:
   - jawapan betul tidak boleh melebihi 1.5 kali pengganggu terpanjang
   - bagi soalan pelbagai jawapan, purata pilihan betul <= 1.3 kali
     purata pilihan salah */
function semakPetunjuk(bab, butiran){
  const m = [];
  let n = 0, terpanjang = 0, terpendek = 0, nisbahJumlah = 0;
  bab.aras.forEach(a => {
    a.soalan.concat([a.bos]).forEach((q, k) => {
      const id = `H${a.n} item ${k+1}`;
      if(q.j === "pilih"){
        const len = q.p.map(x => x.length);
        const betul = len[q.b];
        const lain = len.filter((_, i) => i !== q.b);
        const purataLain = lain.reduce((x, y) => x + y, 0) / lain.length;
        n++;
        if(betul > Math.max(...lain)) terpanjang++;
        if(betul < Math.min(...lain)) terpendek++;
        nisbahJumlah += betul / purataLain;
        /* pilihan sangat pendek seperti "AB" lawan "O" tidak membawa petunjuk */
        if(Math.max(...lain) >= 15 && betul > 1.5 * Math.max(...lain))
          m.push(`${id}: jawapan betul ${betul} aksara, pengganggu terpanjang ${Math.max(...lain)} — terlalu ketara`);
        if(butiran) butiran.push({id, betul, lain, nisbah: +(betul / purataLain).toFixed(2), t: q.t.slice(0, 60)});
      } else if(q.j === "banyak"){
        const b = q.b.map(i => q.p[i].length), s = q.p.filter((_, i) => q.b.indexOf(i) < 0).map(x => x.length);
        const mb = b.reduce((x, y) => x + y, 0) / b.length, ms = s.reduce((x, y) => x + y, 0) / s.length;
        if(ms >= 15 && mb > 1.3 * ms) m.push(`${id}: pilihan betul purata ${Math.round(mb)} aksara, pilihan salah ${Math.round(ms)} — terlalu ketara`);
      }
    });
  });
  const peratus = n ? terpanjang / n : 0;
  const purataNisbah = n ? nisbahJumlah / n : 0;
  if(peratus > 0.35) m.push(`jawapan betul paling panjang dalam ${Math.round(100*peratus)}% soalan satu jawapan (had 35%)`);
  if(purataNisbah > 1.20) m.push(`purata panjang jawapan betul ${purataNisbah.toFixed(2)} kali pengganggu (had 1.20)`);
  const pendek = n ? terpendek / n : 0;
  if(pendek < 0.10) m.push(`jawapan betul paling pendek dalam ${Math.round(100*pendek)}% soalan satu jawapan sahaja (had minimum 10%)`);
  if(pendek > 0.35) m.push(`jawapan betul paling pendek dalam ${Math.round(100*pendek)}% soalan satu jawapan (had 35%)`);
  return { masalah: m, peratus, pendek, purataNisbah };
}

/* Kedudukan jawapan dipusing merentas keseluruhan bab supaya fail sumber
   sendiri sudah seimbang. Pengocok dalam aplikasi mengagihkannya semula
   pada setiap muatan halaman. */
function imbang(bab){
  const taburan = {};
  let kaunter = 0;
  bab.aras.forEach(a => {
    a.soalan.concat([a.bos]).forEach(q => {
      if(q.j !== "pilih") return;
      const n = q.p.length;
      const sasaran = kaunter++ % n;
      const betul = q.p[q.b];
      const lain = q.p.filter((_, i) => i !== q.b);
      const baru = [];
      let c = 0;
      for(let i = 0; i < n; i++) baru.push(i === sasaran ? betul : lain[c++]);
      q.p = baru;
      q.b = sasaran;
      taburan[sasaran] = (taburan[sasaran] || 0) + 1;
    });
  });
  return taburan;
}

/* Semakan rajah. Rajah gagal secara SENYAP: ia tetap nampak cantik walaupun
   warnanya lesap dalam tema gelap atau teksnya terlalu kecil untuk dibaca.
   Jadi setiap rajah diperiksa selepas dijana, bukan dipercayai. */
function semakRajah(bab){
  const m = [];
  const lampiran = bab.lampiran || {};
  for(const kunci of Object.keys(lampiran)){
    const spek = lampiran[kunci];
    if(typeof spek === "string") continue;
    let html;
    try { html = lukisLampiran(spek); }
    catch(e){ m.push(`rajah "${kunci}": ${e.message}`); continue; }

    /* Warna tetap lesap dalam tema gelap. */
    const tetap = html.match(/(?:fill|stroke)="(#[0-9a-fA-F]{3,8}|rgb[^"]*|black|white)"/g);
    if(tetap) m.push(`rajah "${kunci}": warna tetap ${tetap[0]}, guna var(--...) sahaja`);

    /* Fon terlalu kecil tidak terbaca pada telefon. */
    for(const f of html.match(/font-size="([0-9.]+)"/g) || []){
      const saiz = parseFloat(f.match(/[0-9.]+/)[0]);
      if(saiz < 11) m.push(`rajah "${kunci}": font-size ${saiz}px, minimum 11px`);
    }

    /* viewBox jauh lebih lebar daripada kotak rajah pada telefon (lebih
       kurang 272px) akan mengecilkan semua teks. */
    const vb = html.match(/viewBox="0 0 ([0-9.]+) ([0-9.]+)"/);
    if(!vb) m.push(`rajah "${kunci}": tiada viewBox`);
    else {
      const lebar = parseFloat(vb[1]), tinggi = parseFloat(vb[2]);
      if(lebar > 300) m.push(`rajah "${kunci}": viewBox ${lebar} terlalu lebar, teks mengecil pada telefon`);
      if(tinggi > 420) m.push(`rajah "${kunci}": viewBox tinggi ${tinggi}, murid terpaksa menatal`);
      /* Tiada teks boleh keluar daripada viewBox. Kedudukan x sahaja tidak
         cukup: label paksi kanan bermula di dalam kotak tetapi hujungnya
         boleh terpotong, jadi lebar teks dianggarkan juga (DM Mono, lebar
         satu aksara lebih kurang 0.6 kali saiz fon). */
      const kotakTeks = [];
      for(const t of html.match(/<text [^>]*>[^<]*<\/text>/g) || []){
        const x = parseFloat((t.match(/ x="([-0-9.]+)"/) || [])[1]);
        const y = parseFloat((t.match(/ y="([-0-9.]+)"/) || [])[1]);
        const saiz = parseFloat((t.match(/font-size="([0-9.]+)"/) || [])[1]) || 12;
        const isiTeks = (t.match(/>([^<]*)<\/text>/) || ["", ""])[1];
        const w = isiTeks.length * saiz * 0.6;
        const hujung = /text-anchor="middle"/.test(t) ? x + w / 2
          : /text-anchor="end"/.test(t) ? x : x + w;
        const mula = /text-anchor="middle"/.test(t) ? x - w / 2
          : /text-anchor="end"/.test(t) ? x - w : x;
        /* y ialah garis dasar teks, jadi bahagian atas huruf berada kira-kira
           0.8 x saiz fon lebih tinggi. Semakan y < 0 sahaja membiarkan label
           "Normal" pada y = 8 lulus walaupun puncaknya terpotong. */
        if(mula < -1 || hujung > lebar + 1 || y - saiz * 0.8 < -1 || y > tinggi)
          m.push(`rajah "${kunci}": teks "${isiTeks}" menjangkau ${Math.round(mula)}..${Math.round(hujung)} di luar viewBox ${lebar}x${tinggi}`);
        if(isiTeks) kotakTeks.push({ isiTeks, mula, hujung, atas: y - saiz * 0.78, bawah: y + saiz * 0.24 });
      }

      /* Dua teks yang bertindih. Semakan sempadan viewBox sahaja tidak
         menangkapnya: label graf palang boleh muat dalam viewBox tetapi
         tetap melanggar label palang di sebelahnya, kerana setiap label
         dipusatkan pada palangnya sendiri. Ia lolos audit kod sehingga
         galeri dibuka dalam pelayar, jadi semakan itu dibawa masuk ke sini. */
      for(let i = 0; i < kotakTeks.length; i++){
        for(let j = i + 1; j < kotakTeks.length; j++){
          const a = kotakTeks[i], b = kotakTeks[j];
          const tindihX = Math.min(a.hujung, b.hujung) - Math.max(a.mula, b.mula);
          const tindihY = Math.min(a.bawah, b.bawah) - Math.max(a.atas, b.atas);
          if(tindihX > 1.5 && tindihY > 1.5)
            m.push(`rajah "${kunci}": teks "${a.isiTeks}" bertindih dengan "${b.isiTeks}"`);
        }
      }

      /* Bentuk juga tidak boleh keluar viewBox: kotak mod kitar pernah
         terpotong 7px di kiri dan kanan kerana saiznya masih ditetapkan
         untuk viewBox lama yang lebih lebar. */
      for(const r of html.match(/<rect [^>]*>/g) || []){
        const rx = parseFloat((r.match(/ x="([-0-9.]+)"/) || [])[1]);
        const rw = parseFloat((r.match(/ width="([-0-9.]+)"/) || [])[1]);
        if(rx < -1 || rx + rw > lebar + 1)
          m.push(`rajah "${kunci}": kotak ${Math.round(rx)}..${Math.round(rx + rw)} di luar viewBox lebar ${lebar}`);
      }
      for(const c of html.match(/<circle [^>]*>/g) || []){
        const cx = parseFloat((c.match(/cx="([-0-9.]+)"/) || [])[1]);
        const cr = parseFloat((c.match(/ r="([-0-9.]+)"/) || [])[1]);
        if(cx - cr < -1 || cx + cr > lebar + 1)
          m.push(`rajah "${kunci}": bulatan ${Math.round(cx - cr)}..${Math.round(cx + cr)} di luar viewBox lebar ${lebar}`);
      }
    }

    if(!/aria-label="[^"]{15,}"/.test(html)) m.push(`rajah "${kunci}": aria-label tiada atau terlalu pendek`);
    if(!/<figcaption>/.test(html)) m.push(`rajah "${kunci}": tiada kapsyen`);
    if(!/^Rajah \d/.test(spek.kapsyen || "")) m.push(`rajah "${kunci}": kapsyen mesti bermula "Rajah <n>"`);
  }
  return m;
}

function tulis(bab){
  const lampiran = {};
  for(const k of Object.keys(bab.lampiran || {})) lampiran[k] = lukisLampiran(bab.lampiran[k]);
  const keluar = {
    id: bab.id, tingkatan: bab.tingkatan, kod: bab.kod,
    tajuk: bab.tajuk, subtajuk: bab.subtajuk,
    spi: bab.spi, kko: KKO, ulasan: bab.ulasan,
    lampiran: lampiran,
    aras: bab.aras.map(a => ({
      n: a.n, tempat: a.tempat, sk: a.sk, lampiran: a.lampiran || null,
      kadNama: a.kadNama, kadEm: a.kadEm, kadFakta: a.kadFakta,
      bosKadNama: a.bosKadNama, bosKadEm: a.bosKadEm, bosKadFakta: a.bosKadFakta,
      soalan: a.soalan, bos: a.bos,
    })),
  };
  const kepala =
`/* Bank soalan — ${bab.subtajuk}.
   DIJANA. Jangan sunting fail ini terus; sunting sumber/${bab.id}.js
   kemudian jalankan: node bina.js ${bab.id}

   Standard Prestasi disalin kata demi kata daripada DSKP KSSM Matematik
   Tingkatan ${bab.tingkatan}, Bahagian Pembangunan Kurikulum.
*/
window.BANK = window.BANK || {};
window.BANK[${JSON.stringify(bab.id)}] =
`;
  const fail = `bank-${bab.id}.js`;
  fs.writeFileSync(fail, kepala + JSON.stringify(keluar, null, 1) + ";\n", "utf8");
  return fail;
}

module.exports = { semak, semakPetunjuk, semakRajah };
if(require.main === module){
const hujah = process.argv.slice(2);
const laporan = hujah.includes("--laporan");
const minta = hujah.filter(x => !x.startsWith("--"));
const senarai = minta.length ? minta
  : fs.readdirSync("sumber").filter(f => f.endsWith(".js") && !f.startsWith("_")).map(f => path.basename(f, ".js"));

let gagal = 0;
senarai.forEach(id => {
  const bab = require(path.resolve("sumber", id + ".js"));
  const masalah = semak(bab);
  if(!masalah.length){
    const butiran = laporan ? [] : null;
    const p = semakPetunjuk(bab, butiran);
    masalah.push(...p.masalah);
    masalah.push(...semakRajah(bab));
    for(const [k, v] of Object.entries(bab.lampiran || {}))
      if(v && v.jenis === "interaktif") masalah.push(...require("./tools/audit-rajah").auditSpek(k, v));
    if(laporan){
      console.log(`\n${id}: jawapan betul paling panjang ${Math.round(100*p.peratus)}%, nisbah purata ${p.purataNisbah.toFixed(2)}`);
      butiran.filter(x => x.nisbah > 1.2 || x.betul > Math.max(...x.lain))
        .forEach(x => console.log(`   ${x.id.padEnd(12)} betul ${String(x.betul).padStart(3)} | lain ${x.lain.join("/")} | ${x.nisbah}x | ${x.t}`));
    }
  }
  if(masalah.length){
    gagal++;
    console.log(`\n✗ ${id} — ${masalah.length} masalah`);
    masalah.forEach(x => console.log("   " + x));
    return;
  }
  const taburan = imbang(bab);
  const fail = tulis(bab);
  const item = bab.aras.reduce((n, a) => n + a.soalan.length + 1, 0);
  const kedudukan = Object.keys(taburan).sort().map(k => ("ABCDEFGHIJKLMNOPQRSTUVWXYZ"[k] || k) + ":" + taburan[k]).join(" ");
  console.log(`✓ ${id}  ${item} item  ·  ${fail}  ${fs.statSync(fail).size} bait  ·  kedudukan ${kedudukan}`);
});

if(gagal) process.exit(1);
}
