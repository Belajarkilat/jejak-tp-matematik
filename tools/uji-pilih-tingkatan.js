/* Ujian B5: pelawat main bebas memilih tingkatan pada skrin nama.
     node tools/uji-pilih-tingkatan.js   (perlu server 8811, atau BASE=...) */
const { chromium } = require("playwright");
const BASE = process.env.BASE || "http://localhost:8811";
let gagal = 0;
function semak(ok, teks) { console.log((ok ? "✓ " : "✗ ") + teks); if (!ok) gagal++; }

(async () => {
  const b = await chromium.launch();

  // 1. Pelawat baharu: tiada tingkatan dipilih, mesti pilih dahulu.
  let ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  let p = await ctx.newPage();
  const ralat = []; p.on("pageerror", e => ralat.push(e.message));
  await p.goto(BASE + "/index.html?demo=murid", { waitUntil: "load" }); await p.waitForTimeout(1500);
  semak(await p.locator("[data-ting]").count() === 5, "5 butang tingkatan dipaparkan");
  semak(await p.locator('[data-ting][aria-pressed="true"]').count() === 0, "pelawat baharu: tiada tingkatan dipilih lebih dahulu");
  await p.fill("#namaBebas", "Aina"); await p.click("text=Mula main"); await p.waitForTimeout(400);
  semak((await p.textContent(".ralat")).includes("Pilih tingkatan"), "tanpa tingkatan: mesej 'Pilih tingkatan awak dahulu'");
  semak(await p.locator("#namaBebas").count() === 1, "tanpa tingkatan: kekal di skrin nama");
  await p.click('[data-ting="5"]'); await p.click("text=Mula main"); await p.waitForTimeout(1800);
  semak(await p.evaluate(() => localStorage.getItem("jm-bab")) === "m5b1", "pilih T5: mendarat di m5b1");
  semak(await p.locator('.tingpilih button[aria-pressed="true"]').textContent() === "Tingkatan 5", "peta menanda Tingkatan 5");
  await p.reload({ waitUntil: "load" }); await p.waitForTimeout(1500);
  semak(await p.evaluate(() => localStorage.getItem("jm-bab")) === "m5b1" && await p.locator("#namaBebas").count() === 0, "muat semula: terus ke peta T5");
  semak(ralat.length === 0, "tiada ralat JavaScript" + (ralat.length ? ": " + ralat[0] : ""));
  await ctx.close();

  // 2. Pelawat lama yang sudah ada bab disimpan: tingkatannya ditanda lebih dahulu.
  ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  await ctx.addInitScript(() => { if (!sessionStorage.getItem("x")) { localStorage.setItem("jm-bab", "m2b3"); sessionStorage.setItem("x", 1); } });
  p = await ctx.newPage();
  await p.goto(BASE + "/index.html?demo=murid", { waitUntil: "load" }); await p.waitForTimeout(1500);
  semak(await p.getAttribute('[data-ting="2"]', "aria-pressed") === "true", "pelawat lama (m2b3): Tingkatan 2 ditanda");
  await p.fill("#namaBebas", "Aina"); await p.click("text=Mula main"); await p.waitForTimeout(1200);
  semak(await p.evaluate(() => localStorage.getItem("jm-bab")) === "m2b3", "pelawat lama: kekal di bab yang disimpan (m2b3)");
  await ctx.close();

  await b.close();
  console.log(gagal ? gagal + " gagal" : "semua ujian pilih tingkatan lulus");
  process.exit(gagal ? 1 : 0);
})();
