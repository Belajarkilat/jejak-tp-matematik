/* Widget Tingkatan 1 Bab 9 Poligon Asas: satu widget "t1poligon" dengan enam mod.

   poligon    poligon sekata n sisi: bucu, sisi, pepenjuru dari satu bucu dan jumlah pepenjuru
   segitiga   segi tiga daripada dua sudut (A, B): jenis sisi, jenis sudut, paksi simetri
   peluaran   segi tiga dengan sisi AB dipanjangkan: sudut peluaran = jumlah dua sudut dalam bertentangan
   sisiempat  enam jenis sisi empat khas: sisi selari, sisi sama, pepenjuru, paksi simetri
   jumlah     sisi empat ABCD daripada dua segi tiga: jumlah sudut dalam 360, sudut peluaran di C
   selari     segi empat selari: sudut bertentangan sama, sudut bersebelahan berjumlah 180

   Semua sudut, panjang dan bilangan paksi simetri dikira daripada koordinat
   (paksi simetri diuji dengan pantulan), bukan ditaip tangan. Fail ini
   didaftarkan oleh interaktif.js (Node dan pelayar). */
(function () {
  "use strict";
  function daftar(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, garis = h.garis, laluan = h.laluan, svg = h.svg, b1 = h.b1;
    var D = Math.PI / 180, HUFUR = "ABCDEFGHIJ";

    /* ---------- geometri ---------- */
    function jarak(p, q) { return Math.hypot(p.x - q.x, p.y - q.y); }
    function sudutDi(V, X, Y) {                     /* sudut XVY dalam darjah */
      var ax = X.x - V.x, ay = X.y - V.y, bx = Y.x - V.x, by = Y.y - V.y;
      var d = (ax * bx + ay * by) / (Math.hypot(ax, ay) * Math.hypot(bx, by));
      return Math.acos(Math.max(-1, Math.min(1, d))) / D;
    }
    function bulat(x) { return Math.round(x); }
    function pusatBucu(P) {
      var x = 0, y = 0; P.forEach(function (p) { x += p.x; y += p.y; });
      return { x: x / P.length, y: y / P.length };
    }
    /* Bilangan paksi simetri: pantul semua bucu pada garis melalui pusat; paksi
       calon ialah arah pusat ke bucu dan pusat ke titik tengah sisi. */
    function paksiSimetri(P) {
      var c = pusatBucu(P), calon = [], n = P.length, ada = [];
      P.forEach(function (p, i) {
        calon.push(Math.atan2(p.y - c.y, p.x - c.x));
        var q = P[(i + 1) % n];
        calon.push(Math.atan2((p.y + q.y) / 2 - c.y, (p.x + q.x) / 2 - c.x));
      });
      calon.forEach(function (a) {
        var ux = Math.cos(a), uy = Math.sin(a);
        var sama = P.every(function (p) {
          var dx = p.x - c.x, dy = p.y - c.y, dot = dx * ux + dy * uy;
          var rx = c.x + 2 * dot * ux - dx, ry = c.y + 2 * dot * uy - dy;
          return P.some(function (q) { return Math.hypot(q.x - rx, q.y - ry) < 1e-6 * (1 + jarak(p, c)); });
        });
        if (!sama) return;
        var m = ((a % Math.PI) + Math.PI) % Math.PI;
        if (!ada.some(function (x) { return Math.abs(x - m) < 1e-6 || Math.abs(Math.abs(x - m) - Math.PI) < 1e-6; })) ada.push(m);
      });
      return ada.length;
    }
    function selariDua(p1, p2, q1, q2) {
      var ax = p2.x - p1.x, ay = p2.y - p1.y, bx = q2.x - q1.x, by = q2.y - q1.y;
      return Math.abs(ax * by - ay * bx) < 1e-9 * Math.hypot(ax, ay) * Math.hypot(bx, by);
    }
    function samaPjg(a, b) { return Math.abs(a - b) < 1e-9 * Math.max(1, a, b); }

    /* ---------- pemetaan ke skrin ---------- */
    /* Titik dalam ruang matematik (y ke atas) dimuatkan ke kotak [x0,x1] x [y0,y1] piksel. */
    function muat(P, x0, y0, x1, y1, maks) {
      var mnx = 1e9, mxx = -1e9, mny = 1e9, mxy = -1e9;
      P.forEach(function (p) { mnx = Math.min(mnx, p.x); mxx = Math.max(mxx, p.x); mny = Math.min(mny, p.y); mxy = Math.max(mxy, p.y); });
      var bw = Math.max(mxx - mnx, 1e-9), bh = Math.max(mxy - mny, 1e-9);
      var k = Math.min((x1 - x0) / bw, (y1 - y0) / bh); if (maks) k = Math.min(k, maks);
      var ox = (x0 + x1) / 2 - k * (mnx + mxx) / 2, oy = (y0 + y1) / 2 + k * (mny + mxy) / 2;
      return function (p) { return { x: ox + k * p.x, y: oy - k * p.y }; };
    }

    /* ---------- pembantu lukisan ---------- */
    function titik(p) {
      return '<circle cx="' + b1(p.x) + '" cy="' + b1(p.y) + '" r="3" fill="' + h.w("tinta") + '" stroke="none"></circle>';
    }
    function huruf(p, pusat, t, jauh) {
      var dx = p.x - pusat.x, dy = p.y - pusat.y, n = Math.hypot(dx, dy) || 1;
      return teks(p.x + dx / n * jauh, p.y + dy / n * jauh + 4, t, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
    }
    function busur(V, X, Y, r, warna) {
      var a1 = Math.atan2(X.y - V.y, X.x - V.x), a2 = Math.atan2(Y.y - V.y, Y.x - V.x), dl = a2 - a1;
      while (dl > Math.PI) dl -= 2 * Math.PI;
      while (dl < -Math.PI) dl += 2 * Math.PI;
      var p1 = { x: V.x + r * Math.cos(a1), y: V.y + r * Math.sin(a1) }, p2 = { x: V.x + r * Math.cos(a2), y: V.y + r * Math.sin(a2) };
      return laluan("M" + b1(p1.x) + " " + b1(p1.y) + " A" + r + " " + r + " 0 0 " + (dl > 0 ? 1 : 0) + " " + b1(p2.x) + " " + b1(p2.y), { warna: warna, tebal: 2.6 });
    }
    function tegak(V, X, Y, s) {
      var ax = X.x - V.x, ay = X.y - V.y, an = Math.hypot(ax, ay), bx = Y.x - V.x, by = Y.y - V.y, bn = Math.hypot(bx, by);
      var u = { x: ax / an * s, y: ay / an * s }, v = { x: bx / bn * s, y: by / bn * s };
      return laluan("M" + b1(V.x + u.x) + " " + b1(V.y + u.y) + " L" + b1(V.x + u.x + v.x) + " " + b1(V.y + u.y + v.y) + " L" + b1(V.x + v.x) + " " + b1(V.y + v.y), { warna: "tinta3", tebal: 1.4 });
    }
    function sudutTanda(V, X, Y, nilai, r, warna) {
      return Math.abs(nilai - 90) < 0.05 ? tegak(V, X, Y, 9) : busur(V, X, Y, r, warna);
    }
    /* garis kecil melintang di tengah sisi: bilangan garis = kumpulan panjang sama */
    function tanda(p, q, bil) {
      var mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2, dx = q.x - p.x, dy = q.y - p.y, n = Math.hypot(dx, dy) || 1;
      var ux = dx / n, uy = dy / n, nx = -uy, ny = ux, o = "";
      for (var i = 0; i < bil; i++) {
        var s = (i - (bil - 1) / 2) * 4;
        o += garis(mx + ux * s - nx * 5, my + uy * s - ny * 5, mx + ux * s + nx * 5, my + uy * s + ny * 5, { warna: "tinta", tebal: 1.6 });
      }
      return o;
    }
    function baris(y, t, warna, hasil, x) { return teks(x == null ? 8 : x, y, t, { saiz: 12, warna: warna || "tinta", tebal: true, hasil: hasil }); }
    var Y0 = 196, LANGKAH = 16;
    function tinggiInfo(n) { return Y0 + LANGKAH * (n - 1) + 12; }

    /* kumpulkan sisi berpanjang sama: pulangkan tatasusunan kumpulan (1, 2, ...) bagi setiap sisi */
    function kumpulSisi(P) {
      var n = P.length, pj = [], kump = [], k = 0, i, j;
      for (i = 0; i < n; i++) pj.push(jarak(P[i], P[(i + 1) % n]));
      for (i = 0; i < n; i++) kump.push(0);
      for (i = 0; i < n; i++) {
        if (kump[i]) continue;
        k++; kump[i] = k;
        for (j = i + 1; j < n; j++) if (!kump[j] && samaPjg(pj[i], pj[j])) kump[j] = k;
      }
      var kiraan = {}; kump.forEach(function (g) { kiraan[g] = (kiraan[g] || 0) + 1; });
      return { pj: pj, kump: kump, kiraan: kiraan };
    }

    /* ---------- segi tiga daripada dua sudut ---------- */
    function segiTiga(A, B) {
      var C = 180 - A - B;
      var pA = { x: 0, y: 0 }, pB = { x: 1, y: 0 };
      var AC = Math.sin(B * D) / Math.sin(C * D);
      var pC = { x: AC * Math.cos(A * D), y: AC * Math.sin(A * D) };
      return { A: A, B: B, C: C, P: [pA, pB, pC] };
    }
    var NAMA_JENIS = ["Segi empat tepat", "Segi empat sama", "Segi empat selari", "Rombus", "Lelayang", "Trapezium"];
    var BENTUK = {
      tepat: [[0, 0], [9, 0], [9, 5], [0, 5]],
      sama: [[0, 0], [6, 0], [6, 6], [0, 6]],
      selari: [[0, 0], [8, 0], [11, 5], [3, 5]],
      rombus: [[0, 0], [5, 0], [8, 4], [3, 4]],
      lelayang: [[4, 0], [8, 3], [4, 9], [0, 3]],
      trapezium: [[0, 0], [9, 0], [6, 5], [2, 5]]
    };

    W.t1poligon = {
      mula: function (c) { return { i: c.i == null ? 0 : c.i }; },
      kawalan: function (c) {
        var m = c.mod, t = [], i;
        if (m === "poligon") { for (i = 0; i < c.ns.length; i++) t.push(c.ns[i] + " sisi"); return [{ k: "i", label: "bilangan sisi", min: 0, maks: c.ns.length - 1, teks: t }]; }
        if (m === "segitiga" || m === "peluaran") { for (i = 0; i < c.pasang.length; i++) t.push(String(i + 1)); return [{ k: "i", label: "segi tiga", min: 0, maks: c.pasang.length - 1, teks: t }]; }
        if (m === "sisiempat") { return [{ k: "i", label: "bentuk", min: 0, maks: c.bentuk.length - 1, teks: c.bentuk.map(function (j) { return String(c.bentuk.indexOf(j) + 1); }) }]; }
        if (m === "jumlah") { for (i = 0; i < c.set.length; i++) t.push(String(i + 1)); return [{ k: "i", label: "sisi empat", min: 0, maks: c.set.length - 1, teks: t }]; }
        if (m === "selari") { return [{ k: "i", label: "sudut A", min: 0, maks: c.sudut.length - 1, teks: c.sudut.map(function (x) { return x + "°"; }) }]; }
        throw new Error("mod t1poligon tidak dikenali: " + m);
      },

      kira: function (c, s) {
        var m = c.mod, o = { mod: m }, i, n;
        if (m === "poligon") {
          n = c.ns[s.i]; o.n = n; o.sisi = n; o.bucu = n; o.pepenjuruBucu = n - 3; o.jumlahPepenjuru = n * (n - 3) / 2;
          o.nama = ["", "", "", "segi tiga", "sisi empat", "segi lima", "segi enam", "segi tujuh", "segi lapan", "segi sembilan", "segi sepuluh"][n];
          return o;
        }
        if (m === "segitiga" || m === "peluaran") {
          var pr = c.pasang[s.i], t = segiTiga(pr[0], pr[1]), ks = kumpulSisi(t.P);
          o.A = t.A; o.B = t.B; o.C = t.C; o.jumlah = t.A + t.B + t.C;
          o.samaSisi = Object.keys(ks.kiraan).some(function (g) { return ks.kiraan[g] === 3; });
          o.samaKaki = !o.samaSisi && Object.keys(ks.kiraan).some(function (g) { return ks.kiraan[g] === 2; });
          o.jenisSisi = o.samaSisi ? "sama sisi" : o.samaKaki ? "sama kaki" : "sebarang";
          o.jenisSudut = Math.max(t.A, t.B, t.C) === 90 ? "tegak" : Math.max(t.A, t.B, t.C) > 90 ? "cakah" : "tirus";
          o.paksi = paksiSimetri(t.P);
          o.peluaranB = 180 - t.B; o.jumlahDalamBertentangan = t.A + t.C;
          return o;
        }
        if (m === "sisiempat") {
          var nk = c.bentuk[s.i], P = BENTUK[nk].map(function (q) { return { x: q[0], y: q[1] }; }), k2 = kumpulSisi(P);
          o.jenis = nk; o.nama = NAMA_JENIS[["tepat", "sama", "selari", "rombus", "lelayang", "trapezium"].indexOf(nk)];
          o.pasangSelari = (selariDua(P[0], P[1], P[3], P[2]) ? 1 : 0) + (selariDua(P[1], P[2], P[0], P[3]) ? 1 : 0);
          o.semuaSama = Object.keys(k2.kiraan).length === 1;
          o.sisiSama = [];
          for (i = 0; i < 4; i++) for (var j = i + 1; j < 4; j++) if (samaPjg(k2.pj[i], k2.pj[j])) o.sisiSama.push(HUFUR[i] + HUFUR[(i + 1) % 4] + "=" + HUFUR[j] + HUFUR[(j + 1) % 4]);
          var d1 = jarak(P[0], P[2]), d2 = jarak(P[1], P[3]);
          o.pepenjuruSama = samaPjg(d1, d2);
          o.pepenjuruSerenjang = Math.abs((P[2].x - P[0].x) * (P[3].x - P[1].x) + (P[2].y - P[0].y) * (P[3].y - P[1].y)) < 1e-9 * d1 * d2;
          o.paksi = paksiSimetri(P);
          o.sudut = [0, 1, 2, 3].map(function (q) { return sudutDi(P[q], P[(q + 3) % 4], P[(q + 1) % 4]); });
          return o;
        }
        if (m === "jumlah") {
          var q = c.set[s.i], a1 = q[0], c1 = q[1], a2 = q[2], c2 = q[3];
          o.A = a1 + a2; o.B = 180 - a1 - c1; o.C = c1 + c2; o.D = 180 - a2 - c2;
          o.jumlah = o.A + o.B + o.C + o.D; o.peluaranC = 180 - o.C;
          return o;
        }
        if (m === "selari") {
          var a = c.sudut[s.i];
          o.A = a; o.B = 180 - a; o.C = a; o.D = 180 - a; o.jumlahBersebelahan = 180;
          return o;
        }
        throw new Error("mod t1poligon tidak dikenali: " + m);
      },

      lukis: function (c, s) {
        var r = this.kira(c, s), m = c.mod, isi = "", n, i, bilInfo;

        /* ===== poligon sekata ===== */
        if (m === "poligon") {
          n = r.n; var CX = 130, CY = 92, R = 62, V = [];
          for (i = 0; i < n; i++) { var ang = (-90 + i * 360 / n) * D; V.push({ x: CX + R * Math.cos(ang), y: CY + R * Math.sin(ang) }); }
          /* semua pepenjuru samar, pepenjuru dari A tebal */
          for (i = 0; i < n; i++) for (var j = i + 2; j < n; j++) {
            if (i === 0 && j === n - 1) continue;
            if (i === 0) continue;
            isi += garis(V[i].x, V[i].y, V[j].x, V[j].y, { warna: "garis", tebal: 1.2, putus: "3 3" });
          }
          var d = "M" + b1(V[0].x) + " " + b1(V[0].y);
          for (i = 1; i < n; i++) d += " L" + b1(V[i].x) + " " + b1(V[i].y);
          isi += laluan(d + " Z", { isi: "hijauLembut", warna: "hijau", tebal: 2.4 });
          for (i = 2; i <= n - 2; i++) isi += garis(V[0].x, V[0].y, V[i].x, V[i].y, { warna: "merah", tebal: 2 });
          V.forEach(function (p, k) { isi += titik(p) + huruf(p, { x: CX, y: CY }, HUFUR[k], 13); });
          isi += baris(Y0, "Nama: " + r.nama, "tinta");
          isi += baris(Y0 + LANGKAH, "Sisi = " + r.sisi + "   Bucu = " + r.bucu, "tinta");
          isi += baris(Y0 + 2 * LANGKAH, "Pepenjuru dari A = " + r.pepenjuruBucu, "merah", true);
          isi += baris(Y0 + 3 * LANGKAH, "Jumlah pepenjuru = " + r.jumlahPepenjuru, "ungu", true);
          return svg(tinggiInfo(4), isi, "Rajah " + r.nama + " dengan " + n + " sisi, bucu berlabel A hingga " + HUFUR[n - 1] + ", " + r.pepenjuruBucu + " pepenjuru dari bucu A dan " + r.jumlahPepenjuru + " pepenjuru semuanya");
        }

        /* ===== segi tiga dan sudut peluaran ===== */
        if (m === "segitiga" || m === "peluaran") {
          var t = segiTiga(r.A, r.B), pts = t.P.slice();
          var ext = null;
          if (m === "peluaran") { ext = { x: 1 + 0.45, y: 0 }; pts.push(ext); }
          var mp = muat(pts, 26, 22, 234, 170), S = t.P.map(mp), ks = kumpulSisi(t.P);
          var pc = { x: (S[0].x + S[1].x + S[2].x) / 3, y: (S[0].y + S[1].y + S[2].y) / 3 };
          var warnaSisi = ["hijau", "merah", "ungu"];
          isi += laluan("M" + b1(S[0].x) + " " + b1(S[0].y) + " L" + b1(S[1].x) + " " + b1(S[1].y) + " L" + b1(S[2].x) + " " + b1(S[2].y) + " Z", { isi: "kuningLembut", warna: "garis2", tebal: 1.2 });
          for (i = 0; i < 3; i++) isi += garis(S[i].x, S[i].y, S[(i + 1) % 3].x, S[(i + 1) % 3].y, { warna: warnaSisi[i], tebal: 3 });
          if (m === "segitiga") for (i = 0; i < 3; i++) if (ks.kiraan[ks.kump[i]] > 1) isi += tanda(S[i], S[(i + 1) % 3], ks.kump[i]);
          if (m === "peluaran") {
            var E = mp(ext);
            isi += garis(S[1].x, S[1].y, E.x, E.y, { warna: "tinta3", tebal: 2, putus: "5 3" });
            isi += busur(S[1], S[0], S[2], 15, "hijau") + busur(S[1], S[2], E, 20, "merah");
            isi += busur(S[0], S[1], S[2], 22, "ungu") + busur(S[2], S[0], S[1], 16, "ungu");
          } else {
            isi += sudutTanda(S[0], S[1], S[2], r.A, 20, "hijau") + sudutTanda(S[1], S[2], S[0], r.B, 20, "merah") + sudutTanda(S[2], S[0], S[1], r.C, 16, "ungu");
          }
          S.forEach(function (p, k) { isi += titik(p) + huruf(p, pc, HUFUR[k], 12); });
          if (m === "peluaran") isi += huruf(E, S[1], "D", 12) + titik(E);
          if (m === "segitiga") {
            isi += baris(Y0, "∠A=" + r.A + "° ∠B=" + r.B + "° ∠C=" + r.C + "°", "tinta");
            isi += baris(Y0 + LANGKAH, "Jumlah sudut = " + r.jumlah + "°", "ungu", true);
            isi += baris(Y0 + 2 * LANGKAH, "Segi tiga " + r.jenisSisi, "merah", true);
            isi += baris(Y0 + 3 * LANGKAH, "Jenis sudut: " + r.jenisSudut, "hijau", true);
            isi += baris(Y0 + 4 * LANGKAH, "Paksi simetri: " + r.paksi, "tinta", true);
            return svg(tinggiInfo(5), isi, "Rajah segi tiga ABC dengan sudut A " + r.A + " darjah, sudut B " + r.B + " darjah dan sudut C " + r.C + " darjah; segi tiga " + r.jenisSisi + ", " + r.paksi + " paksi simetri");
          }
          isi += baris(Y0, "∠A=" + r.A + "°  ∠C=" + r.C + "°", "tinta");
          isi += baris(Y0 + LANGKAH, "Dalam ∠ABC = " + r.B + "°", "hijau", true);
          isi += baris(Y0 + 2 * LANGKAH, "Luar ∠CBD = " + r.peluaranB + "°", "merah", true);
          isi += baris(Y0 + 3 * LANGKAH, "Dalam + luar = " + (r.B + r.peluaranB) + "°", "tinta", true);
          isi += baris(Y0 + 4 * LANGKAH, "∠A + ∠C = " + r.jumlahDalamBertentangan + "°", "ungu", true);
          return svg(tinggiInfo(5), isi, "Rajah segi tiga ABC dengan sisi AB dipanjangkan ke D; sudut A " + r.A + " darjah, sudut C " + r.C + " darjah, sudut dalam B " + r.B + " darjah dan sudut peluaran CBD " + r.peluaranB + " darjah");
        }

        /* ===== sisi empat khas ===== */
        if (m === "sisiempat") {
          var raw = BENTUK[r.jenis].map(function (q) { return { x: q[0], y: q[1] }; });
          var mp2 = muat(raw, 30, 38, 230, 156, 22), S2 = raw.map(mp2), ks2 = kumpulSisi(raw);
          var pc2 = pusatBucu(S2);
          isi += garis(S2[0].x, S2[0].y, S2[2].x, S2[2].y, { warna: "tinta3", tebal: 1.3, putus: "4 3" });
          isi += garis(S2[1].x, S2[1].y, S2[3].x, S2[3].y, { warna: "tinta3", tebal: 1.3, putus: "4 3" });
          var dd = "M" + b1(S2[0].x) + " " + b1(S2[0].y);
          for (i = 1; i < 4; i++) dd += " L" + b1(S2[i].x) + " " + b1(S2[i].y);
          isi += laluan(dd + " Z", { isi: "kuningLembut", warna: "merah", tebal: 3 });
          for (i = 0; i < 4; i++) if (ks2.kiraan[ks2.kump[i]] > 1 && Object.keys(ks2.kiraan).length > 1) isi += tanda(S2[i], S2[(i + 1) % 4], ks2.kump[i]);
          S2.forEach(function (p, k) { isi += titik(p) + huruf(p, pc2, HUFUR[k], 13); });
          isi += teks(130, 14, r.nama, { tengah: true, saiz: 13, warna: "ungu", tebal: true, hasil: true });
          isi += baris(Y0, "Sisi selari: " + r.pasangSelari + " pasang", "hijau", true);
          isi += baris(Y0 + LANGKAH, r.semuaSama ? "Semua 4 sisi sama panjang" : (r.sisiSama.length ? r.sisiSama.join(" ") : "Tiada sisi sama panjang"), "merah", true);
          isi += baris(Y0 + 2 * LANGKAH, "Pepenjuru sama: " + (r.pepenjuruSama ? "ya" : "tidak"), "tinta", true);
          isi += baris(Y0 + 3 * LANGKAH, "Pepenjuru serenjang: " + (r.pepenjuruSerenjang ? "ya" : "tidak"), "tinta", true);
          isi += baris(Y0 + 4 * LANGKAH, "Paksi simetri: " + r.paksi, "ungu", true);
          return svg(tinggiInfo(5), isi, "Rajah sisi empat ABCD, bentuk " + r.nama + ", " + r.pasangSelari + " pasang sisi selari, " + r.paksi + " paksi simetri, dengan pepenjuru putus-putus");
        }

        /* ===== jumlah sudut sisi empat ===== */
        if (m === "jumlah") {
          var q2 = c.set[s.i], a1 = q2[0], c1 = q2[1], a2 = q2[2], c2 = q2[3];
          var Bd = 180 - a1 - c1, Dd = 180 - a2 - c2;
          var pA = { x: 0, y: 0 }, pC = { x: 1, y: 0 };
          var AB = Math.sin(c1 * D) / Math.sin(Bd * D), AD = Math.sin(c2 * D) / Math.sin(Dd * D);
          var pB = { x: AB * Math.cos(a1 * D), y: AB * Math.sin(a1 * D) }, pD = { x: AD * Math.cos(a2 * D), y: -AD * Math.sin(a2 * D) };
          var pE = { x: pC.x + (pC.x - pB.x) * 0.5, y: pC.y + (pC.y - pB.y) * 0.5 };
          var mp3 = muat([pA, pB, pC, pD, pE], 28, 20, 232, 172, 130), Q = [pA, pB, pC, pD].map(mp3), E2 = mp3(pE);
          var pc3 = pusatBucu(Q);
          isi += garis(Q[0].x, Q[0].y, Q[2].x, Q[2].y, { warna: "tinta3", tebal: 1.3, putus: "4 3" });
          isi += garis(Q[2].x, Q[2].y, E2.x, E2.y, { warna: "tinta3", tebal: 2, putus: "5 3" });
          var dq = "M" + b1(Q[0].x) + " " + b1(Q[0].y);
          for (i = 1; i < 4; i++) dq += " L" + b1(Q[i].x) + " " + b1(Q[i].y);
          isi += laluan(dq + " Z", { isi: "hijauLembut", warna: "hijau", tebal: 2.6 });
          isi += sudutTanda(Q[0], Q[3], Q[1], r.A, 16, "hijau") + sudutTanda(Q[1], Q[0], Q[2], r.B, 16, "merah") + sudutTanda(Q[2], Q[1], Q[3], r.C, 16, "ungu") + sudutTanda(Q[3], Q[2], Q[0], r.D, 16, "kuning");
          isi += busur(Q[2], Q[3], E2, 22, "merah");
          Q.forEach(function (p, k) { isi += titik(p) + huruf(p, pc3, HUFUR[k], 12); });
          isi += huruf(E2, Q[2], "E", 12) + titik(E2);
          isi += baris(Y0, "∠A = " + r.A + "°", "hijau") + baris(Y0, "∠B = " + r.B + "°", "merah", false, 134);
          isi += baris(Y0 + LANGKAH, "∠C = " + r.C + "°", "ungu") + baris(Y0 + LANGKAH, "∠D = " + r.D + "°", "tinta", true, 134);
          isi += baris(Y0 + 2 * LANGKAH, "A+B+C+D = " + r.jumlah + "°", "tinta", true);
          isi += baris(Y0 + 3 * LANGKAH, "Luar ∠DCE = " + r.peluaranC + "°", "merah", true);
          return svg(tinggiInfo(4), isi, "Rajah sisi empat ABCD dengan sudut A " + r.A + " darjah, B " + r.B + " darjah, C " + r.C + " darjah dan D " + r.D + " darjah, jumlah " + r.jumlah + " darjah; BC dipanjangkan ke E dengan sudut peluaran " + r.peluaranC + " darjah");
        }

        /* ===== segi empat selari ===== */
        var a = r.A, pa = { x: 0, y: 0 }, pb = { x: 8, y: 0 }, pd = { x: 5 * Math.cos(a * D), y: 5 * Math.sin(a * D) }, pcc = { x: pb.x + pd.x, y: pb.y + pd.y };
        var mp4 = muat([pa, pb, pcc, pd], 34, 26, 226, 168, 20), Z = [pa, pb, pcc, pd].map(mp4), pc4 = pusatBucu(Z);
        isi += garis(Z[0].x, Z[0].y, Z[2].x, Z[2].y, { warna: "tinta3", tebal: 1.3, putus: "4 3" });
        var dz = "M" + b1(Z[0].x) + " " + b1(Z[0].y);
        for (i = 1; i < 4; i++) dz += " L" + b1(Z[i].x) + " " + b1(Z[i].y);
        isi += laluan(dz + " Z", { isi: "lembayungLembut", warna: "ungu", tebal: 2.6 });
        isi += sudutTanda(Z[0], Z[3], Z[1], r.A, 16, "hijau") + sudutTanda(Z[1], Z[0], Z[2], r.B, 16, "merah") + sudutTanda(Z[2], Z[1], Z[3], r.C, 16, "hijau") + sudutTanda(Z[3], Z[2], Z[0], r.D, 16, "merah");
        Z.forEach(function (p, k) { isi += titik(p) + huruf(p, pc4, HUFUR[k], 12); });
        isi += baris(Y0, "∠A = " + r.A + "°", "hijau") + baris(Y0, "∠B = " + r.B + "°", "merah", true, 134);
        isi += baris(Y0 + LANGKAH, "∠C = " + r.C + "°", "hijau", true) + baris(Y0 + LANGKAH, "∠D = " + r.D + "°", "merah", true, 134);
        isi += baris(Y0 + 2 * LANGKAH, "∠A + ∠B = " + (r.A + r.B) + "°", "tinta", true);
        return svg(tinggiInfo(3), isi, "Rajah segi empat selari ABCD dengan sudut A " + r.A + " darjah, B " + r.B + " darjah, C " + r.C + " darjah dan D " + r.D + " darjah; sudut bertentangan sama dan sudut bersebelahan berjumlah 180 darjah");
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = daftar;
  else if (typeof window !== "undefined" && window.JMI) daftar(window.JMI);
})();
