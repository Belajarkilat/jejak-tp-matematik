/* Ujian main penuh: murid maya menjawab SETIAP soalan setiap hentian dengan
   jawapan betul melalui UI sebenar (klik, taip, susun), pada telefon 390px.
   Mengesahkan bahawa setiap item boleh dijawab dan dinilai betul oleh app,
   bukan sekadar lulus semakan bina.

     node tools/uji-penuh.js m3b1 [m3b2 m3b3]

   App ujian ialah salinan index.html dengan SOALAN_SET=9 supaya semua soalan
   muncul dalam satu pusingan (app biasa memilih 4 rawak + bos). */
const { chromium } = require("playwright");
const fs = require("fs");
const babDiuji = process.argv.slice(2).filter(x => !x.startsWith("--"));
const tanpaLaporanPenuh = process.argv.includes("--ringkas");
(async () => {
  let html = fs.readFileSync("index.html", "utf8");
  if (!/SOALAN_SET=4/.test(html)) throw new Error("SOALAN_SET=4 tidak dijumpai");
  fs.writeFileSync("index-uji.html", html.replace("SOALAN_SET=4", "SOALAN_SET=9"));
  const b = await chromium.launch();
  let jumlahGagal = 0;
  for (const bab of babDiuji) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, serviceWorkers: "block" });
    await require("./_buka").bukaSemua(ctx);
    await ctx.addInitScript(id => { try { localStorage.setItem("jm-bab", id); } catch (e) {} }, bab);
    const p = await ctx.newPage();
    const ralat = [];
    p.on("pageerror", e => ralat.push("pageerror: " + e.message));
    p.on("dialog", d => d.dismiss().catch(() => {}));
    await p.goto("http://localhost:8811/index-uji.html?demo=murid", { waitUntil: "domcontentloaded" });
    await p.waitForTimeout(1800);
    await p.fill("#namaBebas", "Aina"); await p.click("text=Mula main"); await p.waitForTimeout(800);
    const teks = h => String(h).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
    const laporan = { pilih: 0, banyak: 0, susun: 0, nombor: 0, buka: 0, bos: 0 };
    const gagal = [];
    let hentian = 1, sudah = new Set();
    const jumlahBank = await p.evaluate(id => window.BANK[id].aras.reduce((n, a) => n + a.soalan.length + 1, 0), bab);
    let lg = 1;
    await p.click('[data-f="stop-1"]').catch(() => {}); await p.waitForTimeout(500);
    for (let langkah = 0; langkah < 420; langkah++) {
      const soalan = await p.$(".qtext");
      const aksi = await p.$('[data-f="aksi"]');
      if (!soalan) {
        if (aksi) { await aksi.click().catch(() => {}); await p.waitForTimeout(350); continue; }
        lg++;
        const stop = await p.$(`[data-f="stop-${lg}"]`);
        if (!stop) break;
        await stop.click().catch(() => {}); await p.waitForTimeout(500); continue;
      }
      const bersihHtml = e => { const c = e.cloneNode(true); c.querySelectorAll(".sr-sahaja").forEach(x => x.remove()); c.querySelectorAll("[data-sr]").forEach(x => { x.removeAttribute("data-sr"); x.removeAttribute("aria-hidden"); }); return c.innerHTML; };
      const tq = teks(await soalan.evaluate(bersihHtml));
      if (process.env.UJI_LOG) console.log(`   l${langkah} ${tq.slice(0, 70)}`);
      const cari = await p.evaluate(({ id, tq }) => {
        const strip = h => String(h).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
        const bank = window.BANK[id]; if (!bank) return null;
        for (const a of bank.aras) for (const q of a.soalan.concat([a.bos])) {
          if (strip(q.t) === tq) return { j: q.j, p: q.p ? q.p.map(x => String(x).replace(/\s+/g, " ").trim()) : null, b: q.b, tol: q.tol, bos: q === a.bos };
        }
        return null;
      }, { id: bab, tq });
      if (!cari) { gagal.push(`soalan tidak dijumpai dalam BANK: ${tq.slice(0, 70)}`); break; }
      if (cari.bos) laporan.bos++;
      laporan[cari.j] = (laporan[cari.j] || 0) + 1;
      sudah.add(tq);
      const optTeks = await p.$$eval('[data-f^="opt-"]', els => els.map(e => { const c = e.querySelector("span:last-child").cloneNode(true); c.querySelectorAll(".sr-sahaja").forEach(x => x.remove()); c.querySelectorAll("[data-sr]").forEach(x => { x.removeAttribute("data-sr"); x.removeAttribute("aria-hidden"); }); return { f: e.getAttribute("data-f"), t: c.innerHTML }; }));
      const keOpt = t => (optTeks.find(o => String(o.t).replace(/\s+/g, " ").trim() === t) || {}).f;
      if (cari.j === "pilih") await p.click(`[data-f="${keOpt(cari.p[cari.b])}"]`);
      else if (cari.j === "banyak") for (const i of cari.b) await p.click(`[data-f="${keOpt(cari.p[i])}"]`);
      else if (cari.j === "susun") for (const i of cari.b) await p.click(`[data-f="${keOpt(cari.p[i])}"]`);
      else if (cari.j === "nombor") await p.fill('[data-f="num"]', String(cari.b));
      else if (cari.j === "buka") await p.fill('[data-f="buka"]', "Soalan saya ialah bakteria berganda setiap jam. Penyelesaian ditulis langkah demi langkah dan hukum indeks dinamakan pada setiap langkah dengan jelas.");
      await p.waitForTimeout(120);
      await p.click('[data-f="aksi"]', { timeout: 4000 }).catch(() => gagal.push(`butang semak tidak boleh diklik: ${tq.slice(0, 60)}`));
      await p.waitForTimeout(420);
      if (cari.j === "pilih" || cari.j === "banyak") {
        const salah = await p.$$('[data-mark="no"],[data-mark="miss"]');
        if (salah.length) gagal.push(`ditanda salah walaupun jawapan betul: ${tq.slice(0, 70)}`);
      }
      if (cari.j === "susun") {
        const salah = await p.$$('[data-mark="no"]');
        if (salah.length) gagal.push(`susunan ditanda salah: ${tq.slice(0, 70)}`);
      }
      await p.click('[data-f="aksi"]', { timeout: 3000 }).catch(() => {});
      await p.waitForTimeout(380);
      if (sudah.size >= jumlahBank) break;
    }
    console.log(`${bab}: soalan dijawab ${sudah.size}/${jumlahBank}  ${JSON.stringify(laporan)}`);
    if (sudah.size !== jumlahBank) gagal.push(`hanya ${sudah.size} daripada ${jumlahBank} soalan dijawab`);
    gagal.forEach(x => console.log("  ✗ " + x));
    if (ralat.length) ralat.forEach(x => console.log("  ✗ " + x));
    jumlahGagal += gagal.length + ralat.length;
    await ctx.close();
  }
  await b.close();
  try { fs.unlinkSync("index-uji.html"); } catch (e) {}
  process.exit(jumlahGagal ? 1 : 0);
})();
