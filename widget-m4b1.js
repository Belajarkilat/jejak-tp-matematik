/* Widget Tingkatan 4 Bab 1 Fungsi dan Persamaan Kuadratik dalam Satu Pemboleh Ubah.
   Satu widget `t4kuad` dengan lima mod (spec.mod):
   - graf    : f(x) = ax² + bx + c. Cip a, gelongsor b dan c. Rajah menunjukkan bentuk graf,
               titik maksimum/minimum, paksi simetri dan punca (jika ada).
               Spek: aSet, bSet, cSet (senarai nilai), awal {a, b, c} (indeks).
   - cancang : graf tetap f (a, b, c). Gelongsor garis mencancang x = h dan garis mengufuk y = k.
               Garis mencancang menyilang sekali (fungsi); garis mengufuk boleh menyilang dua kali
               (hubungan banyak kepada satu). Spek: a, b, c, xSet, kSet.
   - punca   : f(x) = (x − p)(x − q). Gelongsor p dan q. Bentuk am dikembangkan dan punca ditanda
               pada paksi-x. Spek: pMin, pMaks.
   - segi    : pagar sepanjang P m membentuk segi empat tepat dengan lebar x. Luas A = x(P/2 − x)
               dilukis sebagai segi empat dan titik pada graf A melawan x. Spek: P.
   - lontar  : bola dilambung, h(t) = h0 + v t − 5t². Gelongsor t (langkah 0.5 s).
               Spek: v, h0, tMaks (dalam langkah 0.5 s).
   Semua nombor dikira daripada formula. Unsur jawapan bertanda jmi-hasil (tersembunyi dalam mod cabar).
   Fail ini didaftarkan oleh interaktif.js (Node: readdirSync widget-*.js; pelayar: tag <script>). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;

    function bul(n) { var r = Math.round(n * 100) / 100; return r === 0 ? 0 : r; }
    function fmt(n) { return String(bul(n)).replace("-", "−"); }
    function sH(hasil) { return hasil ? ' class="jmi-hasil"' : ""; }
    function f(c, x) { return c.a * x * x + c.b * x + c.c; }

    /* Segmen ungkapan ax² + bx + c untuk h.ungkap (indeks dilukis sebagai teks berasingan). */
    function segKuad(kiri, a, b, c) {
      var s = [], k = a === 1 ? "" : a === -1 ? "−" : fmt(a);
      s.push(kiri + k + "x"); s.push({ p: "2" });
      var ekor = "";
      if (b) ekor += (b < 0 ? " − " : " + ") + (Math.abs(b) === 1 ? "" : fmt(Math.abs(b))) + "x";
      if (c) ekor += (c < 0 ? " − " : " + ") + fmt(Math.abs(c));
      if (ekor) s.push(ekor);
      return s;
    }
    function teksKuad(a, b, c) {
      var k = a === 1 ? "" : a === -1 ? "−" : fmt(a), o = k + "x²";
      if (b) o += (b < 0 ? " − " : " + ") + (Math.abs(b) === 1 ? "" : fmt(Math.abs(b))) + "x";
      if (c) o += (c < 0 ? " − " : " + ") + fmt(Math.abs(c));
      return o;
    }
    function punca(a, b, c) {
      var D = b * b - 4 * a * c;
      if (D < -1e-9) return [];
      if (Math.abs(D) < 1e-9) return [-b / (2 * a)];
      var r1 = (-b - Math.sqrt(D)) / (2 * a), r2 = (-b + Math.sqrt(D)) / (2 * a);
      return r1 < r2 ? [r1, r2] : [r2, r1];
    }

    /* ================= satah Cartes dalam kotak ================= */
    function langkahAuto(jarak) {
      var s = [1, 2, 5, 10, 20, 25, 50, 100], i;
      for (i = 0; i < s.length; i++) if (jarak / s[i] <= 7) return s[i];
      return 100;
    }
    function bingkai(K, x0, x1, y0, y1, o) {
      o = o || {};
      var G = { x0: x0, x1: x1, y0: y0, y1: y1, K: K };
      G.px = function (x) { return K.x + (x - x0) / (x1 - x0) * K.w; };
      G.py = function (y) { return K.y + K.h - (y - y0) / (y1 - y0) * K.h; };
      G.dalam = function (x, y) { return x >= x0 - 1e-9 && x <= x1 + 1e-9 && y >= y0 - 1e-9 && y <= y1 + 1e-9; };
      var d = h.kotak(K.x, K.y, K.w, K.h, { garis: "garis2", bulat: 0, tebal: 1 });
      var sx = o.sx || langkahAuto(x1 - x0), sy = o.sy || langkahAuto(y1 - y0), i;
      for (i = Math.ceil(x0 / sx) * sx; i <= x1 + 1e-9; i += sx) {
        if (i > x0 + 1e-9 && i < x1 - 1e-9) d += h.garis(G.px(i), K.y, G.px(i), K.y + K.h, { warna: "garis", tebal: 0.6 });
        d += teks(G.px(i), K.y + K.h + 14, fmt(i), { tengah: true, saiz: 11, warna: "tinta3" });
      }
      for (i = Math.ceil(y0 / sy) * sy; i <= y1 + 1e-9; i += sy) {
        if (i > y0 + 1e-9 && i < y1 - 1e-9) d += h.garis(K.x, G.py(i), K.x + K.w, G.py(i), { warna: "garis", tebal: 0.6 });
        /* label-y paling bawah dilangkau supaya tidak berlaga dengan label-x di sudut */
        if (i > y0 + 1e-9) d += teks(K.x - 4, G.py(i) + 4, fmt(i), { kanan: true, saiz: 11, warna: "tinta3" });
      }
      if (y0 <= 0 && y1 >= 0) d += h.garis(K.x, G.py(0), K.x + K.w, G.py(0), { warna: "tinta3", tebal: 1.5 });
      if (x0 <= 0 && x1 >= 0) d += h.garis(G.px(0), K.y, G.px(0), K.y + K.h, { warna: "tinta3", tebal: 1.5 });
      if (o.labelX) d += teks(K.x + K.w, K.y + K.h + 28, o.labelX, { kanan: true, saiz: 11, warna: "tinta3" });
      if (o.labelY) d += teks(K.x - 30, K.y - 8, o.labelY, { saiz: 11, warna: "tinta3" });
      G.lukis = d;
      return G;
    }
    function lengkung(G, fn, warna, tebal, hasil, xa, xb) {
      var N = 240, d = "", buka = false, i, x, y, a = xa == null ? G.x0 : xa, b = xb == null ? G.x1 : xb;
      for (i = 0; i <= N; i++) {
        x = a + (b - a) * i / N; y = fn(x);
        if (y >= G.y0 - 1e-9 && y <= G.y1 + 1e-9) { d += (buka ? " L" : "M") + b1(G.px(x)) + " " + b1(G.py(y)); buka = true; }
        else buka = false;
      }
      if (!d) return "";
      return '<path' + sH(hasil) + ' d="' + d + '" fill="none" stroke="' + h.w(warna) + '" stroke-width="' + (tebal || 2.5) + '" stroke-linejoin="round" stroke-linecap="round"></path>';
    }
    function titik(G, x, y, warna, r, hasil) {
      if (!G.dalam(x, y)) return "";
      return '<circle' + sH(hasil) + ' cx="' + b1(G.px(x)) + '" cy="' + b1(G.py(y)) + '" r="' + (r || 4.5) + '" fill="' + h.w(warna) +
        '" stroke="' + h.w("kertas") + '" stroke-width="1.5"></circle>';
    }
    function garisHasil(x1, y1, x2, y2, o) {
      return '<g class="jmi-hasil">' + h.garis(x1, y1, x2, y2, o) + "</g>";
    }

    var KOTAK = { x: 40, y: 34, w: 206, h: 136 };

    /* ================= t4kuad ================= */
    W.t4kuad = {
      mula: function (c) {
        var aw = c.awal || {};
        if (c.mod === "graf") return { a: 0, b: 0, c: 0 };
        if (c.mod === "cancang") return { x: Math.floor(c.xSet.length / 2), k: Math.floor(c.kSet.length / 2) };
        if (c.mod === "punca") return { p: 1, q: 3 };
        if (c.mod === "segi") return { x: 2 };
        if (c.mod === "lontar") return { t: 2 };
        throw new Error("mod t4kuad tidak dikenali: " + c.mod);
      },
      kawalan: function (c) {
        if (c.mod === "graf") return [
          { k: "a", label: "a", min: 0, maks: c.aSet.length - 1, teks: c.aSet.map(fmt), pilih: true },
          { k: "b", label: "b", min: 0, maks: c.bSet.length - 1, teks: c.bSet.map(fmt) },
          { k: "c", label: "c", min: 0, maks: c.cSet.length - 1, teks: c.cSet.map(fmt) }];
        if (c.mod === "cancang") return [
          { k: "x", label: "garis mencancang x", min: 0, maks: c.xSet.length - 1, teks: c.xSet.map(fmt) },
          { k: "k", label: "garis mengufuk y", min: 0, maks: c.kSet.length - 1, teks: c.kSet.map(fmt) }];
        if (c.mod === "punca") {
          var P = []; for (var i = c.pMin; i <= c.pMaks; i++) P.push(fmt(i));
          return [{ k: "p", label: "p", min: 0, maks: P.length - 1, teks: P }, { k: "q", label: "q", min: 0, maks: P.length - 1, teks: P }];
        }
        if (c.mod === "segi") {
          var X = []; for (var j = 1; j < c.P / 2; j++) X.push(String(j));
          return [{ k: "x", label: "lebar x (m)", min: 0, maks: X.length - 1, teks: X }];
        }
        var T = []; for (var t = 0; t <= c.tMaks; t++) T.push(fmt(t / 2));
        return [{ k: "t", label: "masa t (s)", min: 0, maks: T.length - 1, teks: T }];
      },
      kira: function (c, s) {
        if (c.mod === "graf") {
          var a = c.aSet[s.a], b = c.bSet[s.b], cc = c.cSet[s.c], xv = -b / (2 * a);
          return { a: a, b: b, c: cc, bentuk: a > 0 ? "minimum" : "maksimum", paksi: bul(xv), titik: [bul(xv), bul(a * xv * xv + b * xv + cc)], punca: punca(a, b, cc).map(bul), pintasanY: cc };
        }
        if (c.mod === "cancang") {
          var x0 = c.xSet[s.x], k = c.kSet[s.k], pk = punca(c.a, c.b, c.c - k);
          return { x: x0, y: bul(f(c, x0)), k: k, silangK: pk.map(bul) };
        }
        if (c.mod === "punca") {
          var p = c.pMin + s.p, q = c.pMin + s.q;
          return { p: p, q: q, b: -(p + q), c: p * q, punca: p === q ? [p] : [Math.min(p, q), Math.max(p, q)] };
        }
        if (c.mod === "segi") {
          var x = s.x + 1, pj = c.P / 2 - x;
          return { lebar: x, panjang: pj, luas: x * pj, luasMaks: (c.P / 4) * (c.P / 4), xMaks: c.P / 4 };
        }
        var tt = s.t / 2, hh = c.h0 + c.v * tt - 5 * tt * tt, tp = c.v / 10;
        var akarL = punca(-5, c.v, c.h0).filter(function (r) { return r > 0; });
        return { t: tt, tinggi: bul(hh), tPuncak: bul(tp), hMaks: bul(c.h0 + c.v * tp - 5 * tp * tp), tMendarat: bul(akarL[akarL.length - 1]) };
      },
      lukis: function (c, s) {
        if (c.mod === "graf") return lukisGraf(c, s);
        if (c.mod === "cancang") return lukisCancang(c, s);
        if (c.mod === "punca") return lukisPunca(c, s);
        if (c.mod === "segi") return lukisSegi(c, s);
        return lukisLontar(c, s);
      }
    };

    function lukisGraf(c, s) {
      var r = W.t4kuad.kira(c, s), a = r.a, b = r.b, cc = r.c, o = "";
      o += h.ungkap(130, 20, segKuad("f(x) = ", a, b, cc), { saiz: 13, tebal: true });
      var G = bingkai(KOTAK, -6, 6, -10, 10, { sx: 2, sy: 5 });
      o += G.lukis;
      var xv = -b / (2 * a), yv = a * xv * xv + b * xv + cc;
      if (xv > G.x0 && xv < G.x1) o += garisHasil(G.px(xv), KOTAK.y, G.px(xv), KOTAK.y + KOTAK.h, { warna: "kuning", tebal: 1.5, putus: "5 4" });
      o += lengkung(G, function (x) { return a * x * x + b * x + cc; }, "ungu", 2.5);
      o += titik(G, 0, cc, "hijau", 4);
      r.punca.forEach(function (x) { o += titik(G, x, 0, "merah", 4.5, true); });
      o += titik(G, xv, yv, "kuning", 5, true);
      var y = 204;
      o += teks(8, y, "Graf berbentuk " + (a > 0 ? "∪ (a > 0)" : "∩ (a < 0)"), { saiz: 12, warna: "tinta", tebal: true });
      o += teks(8, y + 18, "Titik " + r.bentuk + ": (" + fmt(r.titik[0]) + ", " + fmt(r.titik[1]) + ")", { saiz: 12, warna: "ungu", tebal: true, hasil: true });
      o += teks(8, y + 36, "Paksi simetri: x = " + fmt(r.paksi), { saiz: 12, warna: "tinta2", hasil: true });
      o += teks(8, y + 54, r.punca.length ? "Punca: x = " + r.punca.map(fmt).join(" dan x = ") : "Tiada punca nyata", { saiz: 11, warna: "merah", hasil: true });
      return h.svg(y + 64, o, "Rajah graf fungsi kuadratik f(x) = " + teksKuad(a, b, cc) + " berbentuk " + (a > 0 ? "minimum" : "maksimum") + ", pintasan-y " + fmt(cc));
    }

    function lukisCancang(c, s) {
      var r = W.t4kuad.kira(c, s), o = "";
      o += h.ungkap(130, 20, segKuad("f(x) = ", c.a, c.b, c.c), { saiz: 13, tebal: true });
      var G = bingkai(KOTAK, c.x0 == null ? -4 : c.x0, c.x1 == null ? 4 : c.x1, c.y0 == null ? -2 : c.y0, c.y1 == null ? 10 : c.y1);
      o += G.lukis;
      o += lengkung(G, function (x) { return f(c, x); }, "ungu", 2.5);
      o += h.garis(G.px(r.x), KOTAK.y, G.px(r.x), KOTAK.y + KOTAK.h, { warna: "hijau", tebal: 2, putus: "6 3" });
      o += h.garis(KOTAK.x, G.py(r.k), KOTAK.x + KOTAK.w, G.py(r.k), { warna: "merah", tebal: 2, putus: "6 3" });
      o += titik(G, r.x, r.y, "hijau", 5, true);
      r.silangK.forEach(function (x) { o += titik(G, x, r.k, "merah", 5, true); });
      var y = 204, n = r.silangK.length;
      o += teks(8, y, "x = " + fmt(r.x) + " menyilang graf pada 1 titik", { saiz: 12, warna: "hijau", tebal: true, hasil: true });
      o += teks(8, y + 18, "f(" + fmt(r.x) + ") = " + fmt(r.y), { saiz: 12, warna: "tinta2", hasil: true });
      o += teks(8, y + 36, "y = " + fmt(r.k) + " menyilang graf pada " + n + " titik", { saiz: 12, warna: "merah", tebal: true, hasil: true });
      o += teks(8, y + 54, n === 2 ? "2 nilai x → 1 nilai y: banyak-satu" : n === 1 ? "1 nilai x sahaja: titik pusingan" : "Tiada x memberi nilai y ini", { saiz: 11, warna: "tinta2", hasil: true });
      return h.svg(y + 64, o, "Rajah ujian garis mencancang pada graf f(x) = " + teksKuad(c.a, c.b, c.c) + "; garis x = " + fmt(r.x) + " dan garis y = " + fmt(r.k));
    }

    function lukisPunca(c, s) {
      var r = W.t4kuad.kira(c, s), o = "";
      o += teks(130, 18, "f(x) = (x " + (r.p < 0 ? "+ " + fmt(-r.p) : "− " + fmt(r.p)) + ")(x " + (r.q < 0 ? "+ " + fmt(-r.q) : "− " + fmt(r.q)) + ")", { tengah: true, saiz: 13, warna: "tinta", tebal: true });
      var G = bingkai(KOTAK, -6, 6, -10, 10, { sx: 2, sy: 5 });
      o += G.lukis;
      o += lengkung(G, function (x) { return (x - r.p) * (x - r.q); }, "ungu", 2.5);
      r.punca.forEach(function (x) { o += titik(G, x, 0, "merah", 5, true); });
      var y = 204;
      o += h.ungkap(130, y, segKuad("= ", 1, r.b, r.c), { saiz: 12, warna: "tinta2", tebal: true, hasil: true });
      o += teks(8, y + 20, "f(x) = 0 ⇔ x − p = 0 atau x − q = 0", { saiz: 11, warna: "tinta2" });
      o += teks(8, y + 38, "Punca: x = " + r.punca.map(fmt).join(" dan x = "), { saiz: 12, warna: "merah", tebal: true, hasil: true });
      o += teks(8, y + 56, "Tambah punca " + fmt(r.p + r.q) + ", darab punca " + fmt(r.c), { saiz: 11, warna: "ungu", hasil: true });
      return h.svg(y + 66, o, "Rajah graf f(x) = (x − " + r.p + ")(x − " + r.q + ") dengan punca pada paksi-x");
    }

    function lukisSegi(c, s) {
      var r = W.t4kuad.kira(c, s), o = "", sk = Math.min(150 / (c.P / 2), 100 / (c.P / 2 - 1), 12);
      var lw = r.panjang * sk, lh = r.lebar * sk, x0 = 16, y0 = 30;
      o += teks(130, 18, "Perimeter pagar = " + c.P + " m", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
      o += h.kotak(x0, y0, lw, lh, { isi: "hijauLembut", garis: "hijau", bulat: 2, tebal: 2 });
      o += teks(x0 + lw / 2, y0 + lh + 14, (c.P / 2 - r.lebar) + " m", { tengah: true, saiz: 11, warna: "tinta2" });
      o += teks(x0 + lw + 6, y0 + lh / 2 + 4, r.lebar + " m", { saiz: 11, warna: "tinta2" });
      var K = { x: 40, y: 164, w: 206, h: 110 };
      var G = bingkai(K, 0, c.P / 2, 0, Math.ceil(r.luasMaks / 10) * 10 + 5, { labelX: "x (m)" });
      o += G.lukis;
      o += lengkung(G, function (x) { return x * (c.P / 2 - x); }, "ungu", 2.2, true, 0, c.P / 2);
      o += titik(G, r.lebar, r.luas, "merah", 5);
      o += teks(8, 322, "A = x(" + (c.P / 2) + " − x) = " + r.lebar + " × " + r.panjang, { saiz: 12, warna: "tinta2" });
      o += teks(8, 340, "Luas = " + fmt(r.luas) + " m²", { saiz: 13, warna: "merah", tebal: true, hasil: true });
      return h.svg(350, o, "Rajah pagar segi empat tepat dengan lebar " + r.lebar + " meter, panjang " + r.panjang + " meter dan graf luas melawan lebar");
    }

    function lukisLontar(c, s) {
      var r = W.t4kuad.kira(c, s), o = "";
      var tAkhir = c.tMaks / 2, hMax = Math.ceil((r.hMaks + 2) / 5) * 5;
      o += teks(130, 18, "h(t) = " + (c.h0 ? fmt(c.h0) + " + " : "") + fmt(c.v) + "t − 5t²", { tengah: true, saiz: 13, warna: "tinta", tebal: true });
      var K = { x: 40, y: 34, w: 206, h: 150 };
      var G = bingkai(K, 0, tAkhir, 0, hMax, { labelX: "t (s)", labelY: "h (m)" });
      o += G.lukis;
      o += lengkung(G, function (t) { return c.h0 + c.v * t - 5 * t * t; }, "ungu", 2.5, false, 0, tAkhir);
      if (r.tinggi >= 0) {
        o += h.garis(G.px(r.t), G.py(0), G.px(r.t), G.py(r.tinggi), { warna: "kuning", tebal: 1.5, putus: "4 3" });
        o += '<circle cx="' + b1(G.px(r.t)) + '" cy="' + b1(G.py(r.tinggi)) + '" r="7" fill="' + h.w("merah") + '" stroke="' + h.w("tinta") + '" stroke-width="1.5"></circle>';
      }
      var y = 234;
      o += teks(8, y, "t = " + fmt(r.t) + " s", { saiz: 12, warna: "tinta", tebal: true });
      o += teks(8, y + 18, r.tinggi >= 0 ? "Tinggi h = " + fmt(r.tinggi) + " m" : "Bola sudah mendarat", { saiz: 12, warna: "merah", tebal: true, hasil: true });
      o += teks(8, y + 36, "Tinggi maksimum " + fmt(r.hMaks) + " m pada t = " + fmt(r.tPuncak) + " s", { saiz: 11, warna: "ungu", hasil: true });
      o += teks(8, y + 54, "Mendarat apabila h = 0: t = " + fmt(r.tMendarat) + " s", { saiz: 11, warna: "tinta2", hasil: true });
      return h.svg(y + 64, o, "Rajah graf tinggi bola h melawan masa t bagi h(t) = " + c.h0 + " + " + c.v + "t − 5t kuasa dua, bola pada t = " + fmt(r.t) + " saat");
    }
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
