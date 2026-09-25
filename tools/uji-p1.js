/* Ujian pelayar untuk penambahbaikan P1: panel bunyi, mod cabar, kertas
   conteng, maklum balas amber + langkah + cuba lagi. Tangkapan skrin disimpan
   dalam folder yang diberi.   node tools/uji-p1.js <folder> */
const { chromium } = require("playwright");
const BASE = process.env.BASE || "http://localhost:8811";
const dir = process.argv[2] || ".";
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
  await ctx.addInitScript(() => { try { localStorage.setItem("jm-bab", "m3b1"); } catch (e) {} });
  const p = await ctx.newPage(); const ralat = [];
  p.on("pageerror", e => ralat.push("pageerror: " + e.message));
  await p.goto(BASE + "/index.html?demo=murid", { waitUntil: "domcontentloaded" });
  await p.waitForTimeout(1800);
  await p.fill("#namaBebas", "Aina"); await p.click("text=Mula main"); await p.waitForTimeout(900);
  console.log("seg Cikgu kelihatan:", await p.$eval("#segMod", e => getComputedStyle(e).display !== "none"));
  await p.click("#btnBunyi"); await p.waitForTimeout(300);
  console.log("panel bunyi:", await p.$eval("#bunyiPanel", e => !e.hidden));
  await p.screenshot({ path: dir + "/p1-bunyi.png" });
  await p.click("#swMuzik"); await p.waitForTimeout(200);
  console.log("muzik selepas togol:", await p.evaluate(() => window.JM_MUZIK.hidup()));
  await p.click("#btnBunyi");
  await p.click('[data-f="stop-4"]'); await p.waitForTimeout(800);
  console.log("mod tenang lalai (#hud.tenang):", await p.$eval("#hud", e => e.classList.contains("tenang")));
  for (let i = 0; i < 12; i++) {
    if (await p.$("figure.jmi")) break;
    const o = await p.$('[data-f^="opt-"]'); const n = await p.$('[data-f="num"]');
    if (o) await o.click(); else if (n) await n.fill("1");
    await p.click('[data-f="aksi"]', { timeout: 2000 }).catch(() => {}); await p.waitForTimeout(450);
    await p.click('[data-f="aksi"]', { timeout: 2000 }).catch(() => {}); await p.waitForTimeout(450);
  }
  const fig = await p.$("figure.jmi");
  console.log("rajah cabar:", !!fig, await p.$eval("figure.jmi", e => e.className).catch(() => ""));
  if (fig) {
    await fig.scrollIntoViewIfNeeded(); await p.waitForTimeout(300);
    const nampak1 = await p.$$eval("figure.jmi .jmi-hasil", els => els.map(e => getComputedStyle(e).visibility));
    console.log("hasil tersembunyi:", nampak1.length ? nampak1.every(v => v === "hidden") : "tiada .jmi-hasil");
    await p.screenshot({ path: dir + "/p1-cabar.png" });
    await p.click(".jmi-semak"); await p.waitForTimeout(200);
    const nampak2 = await p.$$eval("figure.jmi .jmi-hasil", els => els.map(e => getComputedStyle(e).visibility));
    console.log("hasil selepas semak:", nampak2.every(v => v === "visible"));
  }
  /* kertas conteng */
  await p.click("[data-conteng]"); await p.waitForTimeout(300);
  const kv = await p.$("#conteng canvas"); const bb = await kv.boundingBox();
  await p.mouse.move(bb.x + 40, bb.y + 40); await p.mouse.down(); await p.mouse.move(bb.x + 160, bb.y + 90, { steps: 8 }); await p.mouse.move(bb.x + 240, bb.y + 60, { steps: 8 }); await p.mouse.up();
  const berwarna = await p.$eval("#conteng canvas", c => { const d = c.getContext("2d").getImageData(0, 0, c.width, c.height).data; let n = 0; for (let i = 3; i < d.length; i += 4) if (d[i] > 0) n++; return n; });
  console.log("piksel dilukis pada conteng:", berwarna > 50);
  await p.screenshot({ path: dir + "/p1-conteng.png" });
  await p.click('#conteng [data-alat="tutup"]');
  /* jawab salah dengan sengaja */
  const opt = await p.$('[data-f^="opt-"]'); const num = await p.$('[data-f="num"]');
  if (num) await num.fill("12345"); else if (opt) { const semua = await p.$$('[data-f^="opt-"]'); await semua[semua.length - 1].click(); }
  await p.click('[data-f="aksi"]'); await p.waitForTimeout(500);
  const fbNo = await p.$(".fb.no");
  console.log("maklum balas amber (.fb.no):", !!fbNo, fbNo ? (await p.$eval(".fb b", e => e.textContent)) : "");
  await p.screenshot({ path: dir + "/p1-salah.png" });
  const cl = await p.$('[data-f="cuba-lagi"]');
  console.log("butang cuba lagi:", !!cl);
  if (cl) { await cl.click(); await p.waitForTimeout(500); await p.screenshot({ path: dir + "/p1-cubalagi.png" }); }
  console.log("ralat:", ralat.length ? ralat : "tiada");
  await b.close();
})();
