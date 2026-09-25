/* Ujian luar talian: buka app dalam talian sekali (service worker memasang
   cache), putuskan rangkaian, muat semula, dan pastikan murid masih boleh
   bermain sebuah soalan.   node tools/uji-luar-talian.js  (perlu server 8811) */
const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await ctx.addInitScript(() => { try { localStorage.setItem("jm-bab", "m3b2"); } catch (e) {} });
  const p = await ctx.newPage(); const ralat = [];
  p.on("pageerror", e => ralat.push(e.message));
  await p.goto("http://localhost:8811/index.html?demo=murid", { waitUntil: "load" });
  await p.waitForTimeout(3500);
  const sw = await p.evaluate(async () => { const r = await navigator.serviceWorker.getRegistration(); return r ? (r.active ? "aktif" : "belum aktif") : "tiada"; });
  console.log("service worker:", sw);
  const kunci = await p.evaluate(async () => { const ks = await caches.keys(); const c = await caches.open(ks[0]); return { cache: ks[0], fail: (await c.keys()).length }; });
  console.log("cache:", JSON.stringify(kunci));
  await ctx.setOffline(true);
  await p.reload({ waitUntil: "domcontentloaded" });
  await p.waitForTimeout(2500);
  const tajuk = await p.title();
  console.log("tajuk luar talian:", tajuk);
  const fonOk = await p.evaluate(async () => { await document.fonts.ready; return [...document.fonts].filter(f => f.status === "loaded").map(f => f.family).filter((v, i, a) => a.indexOf(v) === i); });
  console.log("fon dimuat dari cache:", fonOk.join(", ") || "tiada");
  await p.click("text=Main dahulu tanpa rekod"); await p.waitForTimeout(700); await p.fill("#namaBebas", "Aina"); await p.click("text=Mula main"); await p.waitForTimeout(900);
  await p.click('[data-f="stop-1"]'); await p.waitForTimeout(800);
  console.log("soalan dipaparkan luar talian:", !!(await p.$(".qtext")), " bank dimuat:", await p.evaluate(() => !!window.BANK && Object.keys(window.BANK).join(",")));
  console.log("ralat:", ralat.length ? ralat : "tiada");
  await b.close();
})();
