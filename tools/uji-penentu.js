/* Ujian soalan penentu dan cadangan TP gabungan (9 Okt 2026).

     node tools/uji-penentu.js [bab]

   Murid maya bermain hentian 1 dengan corak betul/salah yang ditetapkan.
   Jawapan dimasukkan terus ke S.pilihan dan dinilai oleh semak() sebenar,
   jadi yang diuji ialah logik keputusan, bukan input UI (itu kerja uji-penuh).
   Juga menyemak lulusCadangan() dan tpAuto() dengan rekod pertama/kedua. */
const { chromium } = require("playwright");
const bab = process.argv[2] || "m4b1";
const { RE } = require("./_buka");
/* Buka semua bab dan dedahkan dalaman app kepada ujian sahaja (window.U). */
async function sediakan(ctx) {
  await ctx.route(/\/index\.html(\?.*)?$/, async route => {
    const balas = await route.fetch();
    let html = (await balas.text()).replace(RE, "function bebasBab(id){ return true; }");
    const akhir = /mula\(\);(\s*)\}\)\(\);/;
    if (!akhir.test(html)) throw new Error("hujung skrip utama tidak dijumpai");
    html = html.replace(akhir, "window.U={get S(){return S;},semak:semak,lulusCadangan:lulusCadangan,tpAuto:tpAuto,ambangItem:ambangItem,CUBAAN:CUBAAN,kunciC:kunciC,SKEMA:SKEMA};\nmula();$1})();");
    await route.fulfill({ response: balas, body: html });
  });
}
const SENARIO = [
  { nama: "5/7 + penentu 2/2 -> lulus 7/9", biasa: "TTTTFF", bos: true, penentu: "TT", item: 9, lulus: true },
  { nama: "5/7 + penentu 1/2 -> gagal 6/9", biasa: "TTTTFF", bos: true, penentu: "TF", item: 9, lulus: false },
  { nama: "5/7 tanpa bos (bos salah) + penentu 2/2 -> lulus 7/9", biasa: "TTTTTF", bos: false, penentu: "TT", item: 9, lulus: true },
  { nama: "4/7 gagal terus, tiada penentu sia-sia", biasa: "TTTFFF", bos: true, penentu: "", item: 7, lulus: false },
  { nama: "6/7 jelas lulus, tiada penentu", biasa: "TTTTTF", bos: true, penentu: "", item: 7, lulus: true },
  { nama: "7/7 sempurna, tiada penentu", biasa: "TTTTTT", bos: true, penentu: "", item: 7, lulus: true },
  { nama: "3/7 jelas gagal, tiada penentu", biasa: "TTFFFF", bos: true, penentu: "", item: 7, lulus: false },
];
let gagal = 0;
const ok = (c, m, x) => { console.log((c ? "✓ " : "✗ ") + m + (c ? "" : "  " + JSON.stringify(x))); if (!c) gagal++; };

(async () => {
  const b = await chromium.launch();
  for (const sc of SENARIO) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: "block" });
    await sediakan(ctx);
    await ctx.addInitScript(id => { try { localStorage.setItem("jm-bab", id); } catch (e) {} }, bab);
    const p = await ctx.newPage();
    const ralat = [];
    p.on("pageerror", e => ralat.push(e.message));
    await p.goto("http://localhost:8811/index.html?demo=murid", { waitUntil: "domcontentloaded" });
    await p.waitForTimeout(1500);
    await p.fill("#namaBebas", "Aina"); await p.evaluate(()=>{const b=document.querySelector('[data-ting][aria-pressed="true"]')||document.querySelector('[data-ting="3"]');if(b)b.click();}); await p.click("text=Mula main"); await p.waitForTimeout(600);
    await p.click('[data-f="stop-1"]'); await p.waitForTimeout(400);

    const corak = sc.biasa + (sc.bos ? "T" : "F") + sc.penentu;
    const log = [];
    for (let i = 0; i < 12; i++) {
      const info = await p.evaluate(() => ({ skrin: U.S.skrin, qi: U.S.qi, n: U.S.set.length, penentu: !!(U.S.set[U.S.qi] && U.S.set[U.S.qi]._penentu) }));
      if (info.skrin !== "main") break;
      const mahu = corak[i] === "T";
      if (info.penentu) {
        const chip = await p.$eval(".chip-ulang", e => e.textContent).catch(() => "");
        log.push(/Soalan penentu/.test(chip) ? "P" : "P?");
      }
      await p.evaluate(mahu => {
        const q = U.S.set[U.S.qi];
        if (q.j === "pilih") U.S.pilihan = mahu ? q.b : (q.b + 1) % q.p.length;
        else if (q.j === "banyak") U.S.pilihan = mahu ? q.b.slice() : q.p.map((_, k) => k).filter(k => q.b.indexOf(k) < 0).slice(0, 1).concat(q.b.length > 1 ? [] : [q.b[0]]);
        else if (q.j === "susun") U.S.pilihan = mahu ? q.b.slice() : q.b.slice().reverse();
        else if (q.j === "nombor") U.S.pilihan = String(mahu ? q.b : q.b + 999);
        U.semak(false);
      }, mahu);
      const butang = await p.$eval('[data-f="aksi"]', e => e.textContent).catch(() => "");
      log.push(butang === "Lihat keputusan" ? "|" : ".");
      await p.click('[data-f="aksi"]'); await p.waitForTimeout(150);
    }
    const hasil = await p.evaluate(() => ({ skrin: U.S.skrin, n: U.S.set.length, jum: U.S.jumlahBiasa + 1, betul: U.S.betulBiasa + (U.S.bosBetul ? 1 : 0), lulus: !!U.S.lulus[1], tajuk: (document.querySelector(".result h2") || {}).textContent }));
    const babak = sc.penentu.length;
    const chipOk = log.filter(x => x === "P").length === babak && !log.includes("P?");
    const butangOk = log.filter(x => x === "|").length === 1 && log[log.length - 1] === "|";
    ok(hasil.skrin === "hasil" && hasil.n === sc.item && hasil.jum === sc.item && hasil.lulus === sc.lulus && chipOk && butangOk && !ralat.length,
      `${sc.nama}  [${hasil.betul}/${hasil.jum}, "${hasil.tajuk}"]`, { hasil, log, ralat });
    await ctx.close();
  }

  /* Cadangan TP gabungan */
  const ctx = await b.newContext({ serviceWorkers: "block" });
  await sediakan(ctx);
  const p = await ctx.newPage();
  await p.goto("http://localhost:8811/index.html", { waitUntil: "domcontentloaded" });
  await p.waitForTimeout(1200);
  const t = await p.evaluate(() => {
    const R = (betul, jumlah, bos, lulus) => ({ betul, jumlah, bos, lulus, masa: 1 });
    const kes = [
      ["pertama lulus", { pertama: R(5, 6, false, true) }, true],
      ["pertama gagal, tiada kedua", { pertama: R(3, 6, true, false) }, false],
      ["4/7 + 7/7 = 11/14 -> lulus", { pertama: R(3, 6, true, false), kedua: R(6, 6, true, true) }, true],
      ["4/7 + 5/7 = 9/14 -> gagal", { pertama: R(3, 6, true, false), kedua: R(4, 6, true, true) }, false],
      ["6/9 + 7/9 = 13/18 -> lulus", { pertama: R(5, 8, true, false), kedua: R(6, 8, true, true) }, true],
      ["5/9 + 7/9 = 12/18 -> gagal", { pertama: R(4, 8, true, false), kedua: R(6, 8, true, true) }, false],
      ["rekod lama 5 item: 3/5 + 4/5 = 7/10 -> lulus", { pertama: R(2, 4, true, false), kedua: R(3, 4, true, true) }, true],
    ].map(([n, c, mahu]) => [n, U.lulusCadangan(c) === mahu]);
    /* tpAuto: hentian 2 gagal pertama tetapi lulus selepas gabung, rantai diteruskan */
    const K = (a, c) => { U.CUBAAN[U.kunciC("ujiK", "1", a)] = Object.assign({ v: U.SKEMA, kelas: "ujiK", no: "1", aras: a, kali: 1 }, c); };
    K(1, { pertama: R(6, 6, true, true) });
    K(2, { pertama: R(3, 6, true, false), kedua: R(6, 6, true, true) });
    K(3, { pertama: R(5, 6, true, true) });
    K(4, { pertama: R(3, 6, false, false) });
    kes.push(["tpAuto dengan gabungan = 3", U.tpAuto("ujiK", "1") === 3]);
    kes.push(["ambangItem 7/9/10/14/18 = 5/7/7/10/13", [7, 9, 10, 14, 18].map(U.ambangItem).join() === "5,7,7,10,13"]);
    return kes;
  });
  t.forEach(([n, lulus]) => ok(lulus, n));
  await b.close();
  console.log(gagal ? gagal + " ujian gagal" : "semua ujian penentu lulus");
  process.exit(gagal ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
