/* Service worker Jejak TP Matematik: app boleh dibuka tanpa internet.

   Wifi sekolah sering perlahan atau terputus. Selepas satu kali dibuka dalam
   talian, app shell (halaman, muzik, fon) dan bank bab yang pernah dibuka dimuatkan dari
   cache. Bank setiap bab dimuat (dan dicache) hanya bila bab itu dibuka. Panggilan ke pelayan (Supabase) TIDAK pernah dicache: app sedia
   menyimpan jawapan murid dan menghantarnya bila talian pulih.

   Strategi:
   - halaman (navigasi): rangkaian dahulu (3 saat), jatuh balik ke cache
   - fail statik sama asal: cache dahulu, dikemas kini di latar (stale-while-revalidate)
   Tukar VERSI setiap kali fail app diterbitkan supaya cache lama dibuang. */
const VERSI = "jm-2026-09-27e";
const SHELL = [
  "./", "index.html", "math-ext.css", "fon/fon.css", "interaktif.js", "muzik.js", "conteng.js", "akses.js",
  "konfig.js", "bab-indeks.js?v=1", "bank-m3b1.js?v=1"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSI).then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("jm-") && k !== VERSI).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== "GET" || u.origin !== location.origin) return;     /* Supabase dan lain-lain: terus ke rangkaian */
  if (r.mode === "navigate") {
    e.respondWith(
      Promise.race([fetch(r), new Promise((_, tolak) => setTimeout(tolak, 3000))])
        .then(res => { const salin = res.clone(); caches.open(VERSI).then(c => c.put("index.html", salin)); return res; })
        .catch(() => caches.match("index.html").then(c => c || caches.match("./")))
    );
    return;
  }
  e.respondWith(
    caches.match(r).then(ada => {
      const segar = fetch(r).then(res => {
        if (res && res.ok) { const salin = res.clone(); caches.open(VERSI).then(c => c.put(r, salin)); }
        return res;
      }).catch(() => ada);
      return ada || segar;
    })
  );
});
