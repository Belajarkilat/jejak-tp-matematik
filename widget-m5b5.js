/* Widget Tingkatan 5 Bab 5 Kekongruenan, Pembesaran dan Gabungan Transformasi. Widget `t5trans`:
   - syarat   : cip memilih syarat (SSS, SAS, ASA, AAS, AAA, SSA). Dua segi tiga P dan Q dilukis
                daripada koordinat spek; ukuran yang ditanda (sisi/sudut) dikira daripada koordinat.
                Spek: pasangan [{t, P:[3 titik], Q:[3 titik], tanda:["AB","∠A",...], kongruen:bool, ket}].
   - besar    : pembesaran pada satah Cartes. Cip memilih faktor skala k; objek, imej, pusat dan
                garis dari pusat dilukis. Spek: obj [titik], pusat, k [..], kt [teks k].
   - gabung   : gabungan transformasi. Cip memilih paparan (A, B, AB, BA). AB bermaksud B dahulu,
                kemudian A. Spek: obj, A:{j,...,nama}, B:{...}.
                j: "T" (a, b) translasi; "P" (paksi "x"|"y"|"y=x"|"x=k"|"y=k", k) pantulan;
                   "R" (d: 90 ikut arah jam, −90 lawan arah jam, 180; c pusat) putaran;
                   "B" (k, c) pembesaran.
   - teselasi : cip memilih poligon sekata; sudut pedalaman dan bilangan bucu pada satu titik
                ditunjukkan, dengan corak jubin jika poligon itu menghasilkan teselasi.
                Spek: poligon [{n, nama}].
   Semua koordinat, panjang dan sudut dikira. Unsur jawapan bertanda jmi-hasil. */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;

    function bul(n, d) { var p = Math.pow(10, d == null ? 2 : d), r = Math.round(n * p) / p; return r === 0 ? 0 : r; }
    function neg(n) { n = bul(n); return (n < 0 ? "−" : "") + Math.abs(n); }
    function koor(p) { return "(" + neg(p[0]) + ", " + neg(p[1]) + ")"; }
    function jarak(p, q) { return Math.hypot(p[0] - q[0], p[1] - q[1]); }
    function sudut(a, b, c) { /* sudut pada b */
      var u = [a[0] - b[0], a[1] - b[1]], v = [c[0] - b[0], c[1] - b[1]];
      return Math.acos(Math.max(-1, Math.min(1, (u[0] * v[0] + u[1] * v[1]) / (Math.hypot(u[0], u[1]) * Math.hypot(v[0], v[1]))))) * 180 / Math.PI;
    }
    function hasil(s) { return '<g class="jmi-hasil">' + s + "</g>"; }
    function poli(P, X, Y, isi, garis, tebal, putus) {
      return '<polygon points="' + P.map(function (p) { return b1(X(p[0])) + "," + b1(Y(p[1])); }).join(" ") + '" fill="' + (isi ? h.w(isi) : "none") +
        '" stroke="' + h.w(garis) + '" stroke-width="' + (tebal || 2) + '" stroke-linejoin="round"' + (putus ? ' stroke-dasharray="' + putus + '"' : "") + "></polygon>";
    }
    function bulat(x, y, r, warna) { return '<circle cx="' + b1(x) + '" cy="' + b1(y) + '" r="' + r + '" fill="' + h.w(warna) + '"></circle>'; }

    /* ---------- transformasi ---------- */
    function ubah(t, p) {
      var x = p[0], y = p[1];
      if (t.j === "T") return [x + t.a, y + t.b];
      if (t.j === "P") {
        if (t.paksi === "y") return [-x, y];
        if (t.paksi === "x") return [x, -y];
        if (t.paksi === "y=x") return [y, x];
        if (t.paksi === "x=k") return [2 * t.k - x, y];
        if (t.paksi === "y=k") return [x, 2 * t.k - y];
      }
      if (t.j === "R") {
        var cx = t.c[0], cy = t.c[1], dx = x - cx, dy = y - cy;
        if (t.d === 90) return [cx + dy, cy - dx];
        if (t.d === -90) return [cx - dy, cy + dx];
        if (t.d === 180) return [cx - dx, cy - dy];
      }
      if (t.j === "B") return [t.c[0] + t.k * (x - t.c[0]), t.c[1] + t.k * (y - t.c[1])];
      throw new Error("transformasi tidak dikenali");
    }
    function ubahP(t, P) { return P.map(function (p) { return ubah(t, p).map(function (v) { return bul(v, 6); }); }); }
    function luas(P) { var s = 0; for (var i = 0; i < P.length; i++) { var a = P[i], b = P[(i + 1) % P.length]; s += a[0] * b[1] - b[0] * a[1]; } return Math.abs(s) / 2; }

    /* satah Cartes: julat [lo, hi] pada kedua-dua paksi, kotak 244 px */
    /* Satah Cartes: grid dari x = 30 hingga 250. Nombor paksi diletakkan DI LUAR grid
       (bawah dan kiri) supaya tidak bertindih dengan label bucu di dalam grid. */
    function satah(lo, hi) {
      var U = 220 / (hi - lo), X = function (x) { return 30 + (x - lo) * U; }, Y = function (y) { return 28 + (hi - y) * U; }, o = "";
      for (var v = lo; v <= hi; v++) {
        o += h.garis(X(v), Y(lo), X(v), Y(hi), { warna: v === 0 ? "tinta3" : "garis", tebal: v === 0 ? 1.4 : 0.7 });
        o += h.garis(X(lo), Y(v), X(hi), Y(v), { warna: v === 0 ? "tinta3" : "garis", tebal: v === 0 ? 1.4 : 0.7 });
      }
      for (var w = lo + (((lo % 2) + 2) % 2); w <= hi; w += 2) {
        o += teks(X(w), Y(lo) + 13, neg(w), { tengah: true, saiz: 11, warna: "tinta3" });
        if (w > lo) o += teks(X(lo) - 4, Y(w) + 4, neg(w), { kanan: true, saiz: 11, warna: "tinta3" });
      }
      o += teks(X(hi) + 3, Y(0) + 4, "x", { saiz: 11, warna: "tinta3", tebal: true }) + teks(X(0), Y(hi) - 4, "y", { tengah: true, saiz: 11, warna: "tinta3", tebal: true });
      return { X: X, Y: Y, svg: o, bawah: Y(lo) + 16, kotak: [] };
    }
    /* Penempat label: cuba arah keluar dari pusat bentuk dahulu, kemudian lapan arah lain
       pada dua jejari, dan pilih kedudukan pertama yang tidak bertindih dengan label lain. */
    function label(P, X, Y, huruf, warna, tanda, kotak) {
      kotak = kotak || [];
      var cx = 0, cy = 0, o = ""; P.forEach(function (p) { cx += p[0] / P.length; cy += p[1] / P.length; });
      P.forEach(function (p, i) {
        var str = huruf[i] + (tanda || ""), w = str.length * 6.8 + 2, px = X(p[0]), py = Y(p[1]);
        var dx = p[0] - cx, dy = -(p[1] - cy), L = Math.hypot(dx, dy) || 1, mula = Math.atan2(dy / L, dx / L), pilih = null;
        for (var r = 10; r <= 22 && !pilih; r += 6) for (var k = 0; k < 8 && !pilih; k++) {
          var a = mula + (k % 2 ? 1 : -1) * Math.ceil(k / 2) * Math.PI / 4, x = px + r * Math.cos(a), y = py + r * Math.sin(a) + 4;
          var bx = { x0: x - w / 2, x1: x + w / 2, y0: y - 11, y1: y + 2 };
          if (bx.x0 < 2 || bx.x1 > 258) continue;
          if (kotak.every(function (q) { return bx.x1 < q.x0 || bx.x0 > q.x1 || bx.y1 < q.y0 || bx.y0 > q.y1; })) pilih = { x: x, y: y, bx: bx };
        }
        if (!pilih) { var x2 = px + dx / L * 10, y2 = py + dy / L * 10 + 4; pilih = { x: x2, y: y2, bx: { x0: x2 - w / 2, x1: x2 + w / 2, y0: y2 - 11, y1: y2 + 2 } }; }
        kotak.push(pilih.bx);
        o += teks(pilih.x, pilih.y, str, { tengah: true, saiz: 11, warna: warna, tebal: true });
      });
      return o;
    }

    var Wd = W.t5trans = {
      mula: function () { return { i: 0 }; },
      kawalan: function (c) {
        if (c.mod === "syarat") return [{ k: "i", label: "syarat", min: 0, maks: c.pasangan.length - 1, teks: c.pasangan.map(function (p) { return p.t; }), pilih: true }];
        if (c.mod === "besar") return [{ k: "i", label: "faktor skala k", min: 0, maks: c.k.length - 1, teks: c.kt, pilih: true }];
        if (c.mod === "gabung") return [{ k: "i", label: "paparan", min: 0, maks: 4, teks: ["Objek", c.A.nama, c.B.nama, c.A.nama + c.B.nama, c.B.nama + c.A.nama], pilih: true }];
        return [{ k: "i", label: "poligon", min: 0, maks: c.poligon.length - 1, teks: c.poligon.map(function (p) { return p.nama; }), pilih: true }];
      },
      kira: function (c, s) {
        if (c.mod === "syarat") {
          var p = c.pasangan[s.i];
          var uk = function (T) { return { AB: jarak(T[0], T[1]), BC: jarak(T[1], T[2]), CA: jarak(T[2], T[0]), "∠A": sudut(T[2], T[0], T[1]), "∠B": sudut(T[0], T[1], T[2]), "∠C": sudut(T[1], T[2], T[0]) }; };
          return { p: p, P: uk(p.P), Q: uk(p.Q), luasP: luas(p.P), luasQ: luas(p.Q) };
        }
        if (c.mod === "besar") { var k = c.k[s.i], t = { j: "B", k: k, c: c.pusat }, I = ubahP(t, c.obj); return { k: k, I: I, luasO: luas(c.obj), luasI: luas(I) }; }
        if (c.mod === "gabung") {
          var A = c.A, B = c.B, iA = ubahP(A, c.obj), iB = ubahP(B, c.obj), AB = ubahP(A, iB), BA = ubahP(B, iA);
          var tukar = AB.every(function (p, i) { return Math.abs(p[0] - BA[i][0]) < 1e-9 && Math.abs(p[1] - BA[i][1]) < 1e-9; });
          return { iA: iA, iB: iB, AB: AB, BA: BA, tukar: tukar };
        }
        var n = c.poligon[s.i].n, dalam = (n - 2) * 180 / n, m = 360 / dalam;
        return { n: n, dalam: dalam, m: m, tesel: Math.abs(m - Math.round(m)) < 1e-9 };
      },
      lukis: function (c, s) {
        var r = Wd.kira(c, s), o = "";
        if (c.mod === "syarat") {
          var p = r.p, U = 13, segi = function (T, x0, y0, nama, ukur, warna) {
            var X = function (x) { return x0 + x * U; }, Y = function (y) { return y0 - y * U; }, g = poli(T, X, Y, warna === "ungu" ? "lembayungLembut" : warna + "Lembut", warna, 2);
            g += label(T, X, Y, nama, warna);
            var tepi = { AB: [0, 1], BC: [1, 2], CA: [2, 0] }, puncak = { "∠A": 0, "∠B": 1, "∠C": 2 }, cx = (T[0][0] + T[1][0] + T[2][0]) / 3, cy = (T[0][1] + T[1][1] + T[2][1]) / 3;
            p.tanda.forEach(function (m) {
              if (tepi[m]) {
                var a = T[tepi[m][0]], b = T[tepi[m][1]], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = mx - cx, dy = my - cy, L = Math.hypot(dx, dy) || 1;
                g += teks(X(mx) + dx / L * 12, Y(my) - dy / L * 12 + 4, String(bul(ukur[m], 1)), { tengah: true, saiz: 11, warna: "tinta", tebal: true });
              } else {
                var v = T[puncak[m]], ex = cx - v[0], ey = cy - v[1], L2 = Math.hypot(ex, ey) || 1;
                g += teks(X(v[0]) + ex / L2 * 22, Y(v[1]) - ey / L2 * 22 + 4, Math.round(ukur[m]) + "°", { tengah: true, saiz: 11, warna: "merah", tebal: true });
              }
            });
            return g;
          };
          o += teks(130, 16, "Syarat " + p.t, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          o += segi(p.P, 14, 130, ["A", "B", "C"], r.P, "ungu");
          o += segi(p.Q, 136, 130, ["P", "Q", "R"], r.Q, "hijau");
          o += teks(8, 160, "Ditanda: " + p.tanda.join(", "), { saiz: 11, warna: "tinta3" });
          o += teks(8, 182, p.kongruen ? "Kongruen (" + p.t + ")" : "Tidak semestinya kongruen", { saiz: 13, warna: p.kongruen ? "hijau" : "merah", tebal: true, hasil: true });
          p.ket.forEach(function (b, i) { o += teks(8, 202 + i * 16, b, { saiz: 11, warna: "tinta2", hasil: true }); });
          return h.svg(208 + p.ket.length * 16, o, "Dua segi tiga dengan syarat " + p.t + ": " + (p.kongruen ? "kongruen" : "tidak semestinya kongruen"));
        }
        if (c.mod === "besar" || c.mod === "gabung") {
          var S = satah(c.lo || -6, c.hi || 6);
          o += S.svg;
          if (c.mod === "besar") {
            var P = c.pusat;
            c.obj.forEach(function (q, i) { var im = r.I[i]; o += h.garis(S.X(P[0]), S.Y(P[1]), S.X(im[0]), S.Y(im[1]), { warna: "kuning", tebal: 1, putus: "3 3" }); });
            o += bulat(S.X(P[0]), S.Y(P[1]), 4, "tinta") + label([P], S.X, S.Y, ["P"], "tinta", "", S.kotak);
            o += poli(c.obj, S.X, S.Y, "lembayungLembut", "ungu", 2) + label(c.obj, S.X, S.Y, c.nama || ["A", "B", "C"], "ungu", "", S.kotak);
            o += hasil(poli(r.I, S.X, S.Y, "merahLembut", "merah", 2) + label(r.I, S.X, S.Y, c.nama || ["A", "B", "C"], "merah", "′", S.kotak));
            var yb = S.bawah + 24, nm = (c.nama || ["A"])[0];
            o += teks(8, yb, "k = " + c.kt[s.i] + ", pusat P" + koor(P), { saiz: 12, warna: "tinta2" });
            o += teks(8, yb + 20, nm + "′ = " + koor(r.I[0]) + (r.k < 0 ? "  (imej songsang)" : ""), { saiz: 12, warna: "merah", tebal: true, hasil: true });
            o += teks(8, yb + 40, "Luas imej = k² × luas objek", { saiz: 11, warna: "tinta3" });
            o += teks(8, yb + 58, "= " + neg(bul(r.k * r.k, 4)) + " × " + neg(r.luasO) + " = " + neg(bul(r.luasI, 3)) + " unit²", { saiz: 12, warna: "ungu", tebal: true, hasil: true });
            return h.svg(yb + 68, o, "Pembesaran pada pusat " + koor(P) + " dengan faktor skala " + c.kt[s.i] + "; imej " + nm + "′ " + koor(r.I[0]));
          }
          var nmA = c.A.nama, nmB = c.B.nama, mana = s.i;
          o += poli(c.obj, S.X, S.Y, "lembayungLembut", "ungu", 2) + label(c.obj, S.X, S.Y, ["P", "Q", "R"], "ungu", "", S.kotak);
          var akhir = null, tengah = null, tajuk = "Objek";
          if (mana === 1) { akhir = r.iA; tajuk = nmA + ": " + c.A.t; }
          if (mana === 2) { akhir = r.iB; tajuk = nmB + ": " + c.B.t; }
          if (mana === 3) { tengah = r.iB; akhir = r.AB; tajuk = nmA + nmB + ": " + nmB + " dahulu, kemudian " + nmA; }
          if (mana === 4) { tengah = r.iA; akhir = r.BA; tajuk = nmB + nmA + ": " + nmA + " dahulu, kemudian " + nmB; }
          if (tengah) o += hasil(poli(tengah, S.X, S.Y, null, "tinta3", 1.4, "4 3"));
          if (akhir) o += hasil(poli(akhir, S.X, S.Y, "merahLembut", "merah", 2) + label(akhir, S.X, S.Y, ["P", "Q", "R"], "merah", mana >= 3 ? "″" : "′", S.kotak));
          var y2 = S.bawah + 24;
          o += teks(8, y2, tajuk, { saiz: 11, warna: "tinta", tebal: true });
          if (akhir) o += teks(8, y2 + 20, "Imej P" + (mana >= 3 ? "″" : "′") + " = " + koor(akhir[0]), { saiz: 12, warna: "merah", tebal: true, hasil: true });
          else o += teks(8, y2 + 20, "P = " + koor(c.obj[0]), { saiz: 12, warna: "ungu", tebal: true });
          if (mana >= 3) o += teks(8, y2 + 40, r.tukar ? nmA + nmB + " = " + nmB + nmA + ": imej sama" : nmA + nmB + " ≠ " + nmB + nmA + ": imej berbeza", { saiz: 12, warna: "hijau", tebal: true, hasil: true });
          else { o += teks(8, y2 + 40, nmA + ": " + c.A.t, { saiz: 11, warna: "tinta3" }); o += teks(8, y2 + 56, nmB + ": " + c.B.t, { saiz: 11, warna: "tinta3" }); }
          return h.svg(y2 + 64, o, "Gabungan transformasi: " + tajuk + (akhir ? "; imej P = " + koor(akhir[0]) : ""));
        }
        /* teselasi */
        var pg = c.poligon[s.i], n = r.n, R0 = 22, cx0 = 130, cy0 = 92, o2 = "";
        var bentuk = function (cx, cy, rot, isi) {
          var pts = [];
          for (var k = 0; k < n; k++) { var a = rot + 2 * Math.PI * k / n; pts.push(b1(cx + R0 * Math.cos(a)) + "," + b1(cy + R0 * Math.sin(a))); }
          return '<polygon points="' + pts.join(" ") + '" fill="' + h.w(isi) + '" stroke="' + h.w("ungu") + '" stroke-width="1.5"></polygon>';
        };
        o += teks(130, 16, pg.nama + " (" + n + " sisi)", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
        /* susunan pada satu bucu: m salinan diputar mengelilingi bucu */
        var bilangan = Math.floor(r.m + 1e-9), apot = R0 * Math.cos(Math.PI / n);
        for (var j = 0; j < bilangan; j++) {
          var arah = 2 * Math.PI * j / r.m * (r.tesel ? 1 : 1), pusatX = cx0 + R0 * Math.cos(arah + Math.PI * (r.dalam / 360)) , pusatY = cy0 + R0 * Math.sin(arah + Math.PI * (r.dalam / 360));
          var sud = arah + Math.PI * (r.dalam / 360) + Math.PI;
          o2 += bentuk(pusatX, pusatY, sud, j % 2 ? "hijauLembut" : "lembayungLembut");
        }
        o += o2 + bulat(cx0, cy0, 3.5, "merah");
        var y3 = 150;
        o += teks(8, y3, "Sudut pedalaman = (" + n + " − 2) × 180° ÷ " + n, { saiz: 11, warna: "tinta2" });
        o += teks(8, y3 + 20, "= " + bul(r.dalam, 1) + "°", { saiz: 12, warna: "ungu", tebal: true, hasil: true });
        o += teks(8, y3 + 40, "360° ÷ " + bul(r.dalam, 1) + "° = " + bul(r.m, 2), { saiz: 12, warna: "tinta2", hasil: true });
        o += teks(8, y3 + 62, r.tesel ? "Integer: membentuk teselasi" : "Bukan integer: ada ruang kosong", { saiz: 12, warna: r.tesel ? "hijau" : "merah", tebal: true, hasil: true });
        return h.svg(y3 + 72, o, pg.nama + ": sudut pedalaman " + bul(r.dalam, 1) + " darjah; " + (r.tesel ? "membentuk teselasi" : "tidak membentuk teselasi sendirian"));
      }
    };
    Wd.ubah = ubah; Wd.luas = luas;
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
