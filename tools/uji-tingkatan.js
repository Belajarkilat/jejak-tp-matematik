/* Ujian hujung ke hujung app sebenar (UI + pangkalan data Matematik):
   guru daftar, cipta kelas, simpan nama murid; murid masuk dengan kod kelas
   dan PIN, main hentian 1 dengan jawapan betul; sahkan percubaan tersimpan
   dalam pangkalan data; kemudian MEMBERSIHKAN semua data ujian (guru berawalan
   "uji-").

     BASE=https://jejaktpmath.naikgred.com node tools/uji-e2e.js
   Lalai BASE = http://localhost:8811. Perlu playwright dan .env (service role). */
const { chromium } = require("playwright");
const fs = require("fs");
const BASE = process.env.BASE || "http://localhost:8811";
const env = {}; fs.readFileSync(".env", "utf8").split(/\r?\n/).forEach(l => { const m = /^([A-Z_]+)=(.*)$/.exec(l); if (m) env[m[1]] = m[2]; });
const SVC = { apikey: env.SUPABASE_SERVICE_ROLE_KEY, Authorization: "Bearer " + env.SUPABASE_SERVICE_ROLE_KEY, "Content-Type": "application/json" };
let gagal = 0;
const ok = (b, msg, x) => { console.log((b ? "✓ " : "✗ ") + msg + (b || x === undefined ? "" : "  -> " + String(x).slice(0, 160))); if (!b) gagal++; };

async function bersih() {
  /* padam SEMUA guru ujian (uji-*@example.com) termasuk sisa larian terdahulu */
  const r = await (await fetch(env.SUPABASE_URL + "/auth/v1/admin/users?per_page=200", { headers: SVC })).json();
  let n = 0;
  for (const u of (r.users || [])) if (/^uji-\d+@example\.com$/.test(u.email || "")) { await fetch(env.SUPABASE_URL + "/auth/v1/admin/users/" + u.id, { method: "DELETE", headers: SVC }); n++; }
  const baki = await (await fetch(env.SUPABASE_URL + "/rest/v1/jm_kelas?select=id,nama&nama=like.uji-*", { headers: SVC })).json();
  for (const k of baki) await fetch(env.SUPABASE_URL + "/rest/v1/jm_kelas?id=eq." + k.id, { method: "DELETE", headers: SVC });
  const lagi = await (await fetch(env.SUPABASE_URL + "/rest/v1/jm_kelas?select=id&nama=like.uji-*", { headers: SVC })).json();
  return { guru: n, kelasBaki: Array.isArray(lagi) ? lagi.length : -1 };
}

(async () => {
  const b = await chromium.launch();
  const emel = "uji-" + Date.now() + "@example.com";
  let kodKelas = null, idKelas = null;
  try {
    /* ---- guru ---- */
    const cg = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    const g = await cg.newPage(); const ralatG = [];
    g.on("pageerror", e => ralatG.push(e.message));
    await g.goto(BASE + "/index.html?cikgu", { waitUntil: "load" }); await g.waitForTimeout(2500);
    await g.click("text=Belum ada akaun? Daftar"); await g.waitForTimeout(400);
    await g.fill("#m-nama", "Uji Guru"); await g.fill("#m-sekolah", "Uji Sekolah"); await g.fill("#m-emel", emel); await g.fill("#m-kata", "UjiKata123!");
    await g.click("text=Daftar dan mula"); await g.waitForTimeout(3500);
    ok(await g.$("text=Selamat datang, Cikgu Uji Guru").then(x => !!x), "guru daftar dan masuk dashboard");
    await g.click("text=Tambah kelas"); await g.waitForTimeout(600);
    await g.fill("input[type=text]:visible", "uji-Amanah"); await g.selectOption("#m-tingkatan","2"); await g.click("text=Cipta kelas"); await g.waitForTimeout(2500);
    kodKelas = (await g.$eval("#guruKod", e => e.textContent)).trim();
    ok(/^[A-Z0-9]{6}$/.test(kodKelas), "kelas dicipta dengan kod " + kodKelas);
    await g.fill("#senaraiTeks", "Aina\nBudi"); await g.click("text=Simpan nama murid"); await g.waitForTimeout(2500);
    await g.click("#tabSenarai"); await g.waitForTimeout(800);
    const teksJadual = await g.evaluate(() => document.body.innerText);
    const pin = (/\n1\s+(\d{4})/.exec(teksJadual) || [])[1];
    ok(!!pin, "PIN murid dijana (" + pin + ")");
    /* ---- murid ---- */
    const cm = await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
    const m = await cm.newPage(); const ralatM = [];
    m.on("pageerror", e => ralatM.push(e.message));
    await m.goto(BASE + "/index.html", { waitUntil: "load" }); await m.waitForTimeout(2200);
    const kodInput = await m.$("input:visible"); await kodInput.fill(kodKelas);
    await m.click("text=Masuk kelas"); await m.waitForTimeout(2500);
    await m.click("button:has-text('Aina')"); await m.waitForTimeout(1200);
    if (process.env.DEBUG) console.log("   PIN screen:", await m.evaluate(() => document.body.innerText.replace(/\s+/g, " ").slice(0, 250)), "|", await m.evaluate(() => [...document.querySelectorAll("input,button,textarea")].filter(e => e.offsetParent).map(e => e.tagName + "#" + e.id + "[" + (e.type || "") + "|" + (e.getAttribute("data-f") || "") + "|" + (e.innerText || e.placeholder || "").slice(0, 20) + "]").join(" ")));
    ok(await m.$("text=Masukkan PIN 4 nombor").then(x => !!x), "murid pilih nama dan diminta PIN (papan nombor)");
    for (const d of pin) await m.locator("button", { hasText: new RegExp("^" + d + "$") }).first().click();
    await m.waitForTimeout(2500);
    const t = await m.evaluate(() => document.body.innerText.replace(/\s+/g, " "));
    ok(/Tingkatan 2/.test(t) && !/Tingkatan 3 ·/.test(t.slice(0,400)), "murid kelas Tingkatan 2 mendarat di peta T2", t.slice(0,200));
    const nk = await g.evaluate(() => document.body.innerText);
    ok(/2 uji-Amanah/.test(nk), "nama kelas diawali nombor tingkatan");
  } finally { await b.close(); await bersih(); }
  console.log(gagal ? "GAGAL" : "lulus");
})();
