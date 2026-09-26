/* Widget Tingkatan 2 Bab 10 Kecerunan Garis Lurus.
   Satu widget `t2cerun` dengan empat mod (spec.mod):
   - tangga   : tanjakan (segi tiga). Gelongsor naik, larian dan arah (naik/turun ke kanan);
                m = jarak mencancang / jarak mengufuk dikira dan dipaparkan
   - arah     : garis y = mx melalui asalan. Gelongsor m (termasuk sifar dan garis mencancang);
                tanda dan nilai mutlak kecerunan menunjukkan arah dan kecuraman
   - dua      : kecerunan daripada dua titik A dan B pada satah Cartes. Gelongsor menggerakkan B;
                naik, larian dan m = (y2 - y1) / (x2 - x1)
   - pintasan : garis melalui (a, 0) dan (0, b). Gelongsor pintasan-x dan pintasan-y;
                m = -pintasan-y / pintasan-x
   Semua nombor dikira daripada formula. Unsur jawapan (naik, larian, m) bertanda hasil supaya
   tersembunyi dalam mod cabar. Didaftarkan oleh interaktif.js (Node: readdirSync widget-*.js;
   pelayar: tag <script> selepas interaktif.js). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks;

    /* ---------- pembantu nombor ---------- */
    function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a || 1; }
    function neg(n) { return n < 0 ? "(" + n + ")" : String(n); }
    /* Pecahan termudah sebagai teks: 4/2 -> "2", -3/6 -> "-1/2". */
    function pecah(n, d) {
      if (d === 0) return "tak tertakrif";
      if (n === 0) return "0";
      var g = gcd(n, d), a = n / g, b = d / g;
      if (b < 0) { a = -a; b = -b; }
      return b === 1 ? String(a) : a + "/" + b;
    }
    function nilaiM(n, d) { return d === 0 ? null : n / d; }
    function fm(n) { n = Math.round(n * 100) / 100; return String(n === 0 ? 0 : n); }
    function mutlak(n) { return Math.abs(n); }

    /* ---------- pembantu lukisan ---------- */
    function gar(x1, y1, x2, y2, warna, tebal, o) {
      o = o || {};
      return "<line" + (o.hasil ? ' class="jmi-hasil"' : "") + ' x1="' + h.b1(x1) + '" y1="' + h.b1(y1) + '" x2="' + h.b1(x2) + '" y2="' + h.b1(y2) +
        '" stroke="' + h.w(warna) + '" stroke-width="' + tebal + '" stroke-linecap="round"' +
        (o.putus ? ' stroke-dasharray="' + o.putus + '"' : "") + "></line>";
    }
    function bulat(x, y, r, isi, warna, tebal, hasil) {
      return "<circle" + (hasil ? ' class="jmi-hasil"' : "") + ' cx="' + h.b1(x) + '" cy="' + h.b1(y) + '" r="' + r + '" fill="' + (isi ? h.w(isi) : "none") +
        '" stroke="' + h.w(warna) + '" stroke-width="' + tebal + '"></circle>';
    }
    function segi(pts, isi, garisWarna, hasil, tebal) {
      return "<polygon" + (hasil ? ' class="jmi-hasil"' : "") + ' points="' + pts.map(function (p) { return h.b1(p[0]) + "," + h.b1(p[1]); }).join(" ") +
        '" fill="' + h.w(isi) + '" stroke="' + h.w(garisWarna) + '" stroke-width="' + (tebal || 2) + '" stroke-linejoin="round"></polygon>';
    }

    /* ---------- satah Cartes -4..4 ---------- */
    var U = 24, GX = 34, GY = 22, N = 4, LEB = 2 * N * U;         /* kotak grid 192 x 192 */
    function px(x) { return GX + (x + N) * U; }
    function py(y) { return GY + (N - y) * U; }
    function satah() {
      var o = "", i;
      for (i = -N; i <= N; i++) {
        if (i === 0) continue;
        o += h.garis(px(i), GY, px(i), GY + LEB, { warna: "garis", tebal: 1 });
        o += h.garis(GX, py(i), GX + LEB, py(i), { warna: "garis", tebal: 1 });
      }
      o += h.garis(GX, py(0), GX + LEB, py(0), { warna: "tinta3", tebal: 1.5 });
      o += h.garis(px(0), GY, px(0), GY + LEB, { warna: "tinta3", tebal: 1.5 });
      o += h.kotak(GX, GY, LEB, LEB, { garis: "garis2", tebal: 1.2, bulat: 0 });
      [-4, -2, 0, 2, 4].forEach(function (v) { o += teks(px(v), GY + LEB + 14, String(v), { tengah: true, saiz: 11, warna: "tinta3" }); });
      [-4, -2, 2, 4].forEach(function (v) { o += teks(GX - 6, py(v) + 4, String(v), { kanan: true, saiz: 11, warna: "tinta3" }); });
      o += teks(GX + LEB + 8, py(0) + 4, "x", { saiz: 12, warna: "tinta2", tebal: true });
      o += teks(px(0), GY - 8, "y", { tengah: true, saiz: 12, warna: "tinta2", tebal: true });
      return o;
    }
    /* Garis melalui (x0, y0) dengan arah (dx, dy), dipotong pada kotak [-4, 4]. */
    function potong(x0, y0, dx, dy) {
      var tmin = -1e9, tmax = 1e9;
      [[x0, dx], [y0, dy]].forEach(function (a) {
        if (a[1] !== 0) {
          var t1 = (-N - a[0]) / a[1], t2 = (N - a[0]) / a[1];
          tmin = Math.max(tmin, Math.min(t1, t2)); tmax = Math.min(tmax, Math.max(t1, t2));
        }
      });
      if (tmin > tmax) return null;
      return [x0 + tmin * dx, y0 + tmin * dy, x0 + tmax * dx, y0 + tmax * dy];
    }
    function garisPanjang(x0, y0, dx, dy, warna, tebal) {
      var s = potong(x0, y0, dx, dy);
      return s ? gar(px(s[0]), py(s[1]), px(s[2]), py(s[3]), warna, tebal) : "";
    }
    /* Label titik: sebelah kiri atau kanan bergantung pada x, atas atau bawah diberi. */
    function labelTitik(x, y, isi, atas, warna) {
      var kiri = x > 0;
      if (y >= 4) atas = false; else if (y <= -4) atas = true;   /* jauhi label paksi di tepi grid */
      return teks(kiri ? px(x) - 6 : px(x) + 6, atas ? py(y) - 8 : py(y) + 16, isi, { kanan: kiri, saiz: 11, warna: warna, tebal: true });
    }
    function baris(y, isi, o) { o = o || {}; return teks(8, y, isi, { saiz: o.saiz || 11, warna: o.warna || "tinta2", tebal: o.tebal, hasil: o.hasil }); }
    var TB = GY + LEB + 34;   /* baris teks pertama di bawah satah */

    var T = {};

    /* ------------------- tangga: tanjakan ------------------- */
    T.tangga = {
      mula: function (c) { return { n: c.n0 != null ? c.n0 : 3, l: c.l0 != null ? c.l0 : 5, a: c.a0 || 0 }; },
      kawalan: function (c) {
        var lst = [], i;
        for (i = 1; i <= 10; i++) lst.push(String(i));
        var k = [
          { k: "n", label: "jarak mencancang", min: 0, maks: 8, teks: [0, 1, 2, 3, 4, 5, 6, 7, 8].map(String) },
          { k: "l", label: "jarak mengufuk", min: 0, maks: 9, teks: lst }
        ];
        if (!c.satuArah) k.push({ k: "a", label: "arah", min: 0, maks: 1, teks: ["naik ke kanan", "turun ke kanan"] });
        return k;
      },
      kira: function (c, s) {
        var n = s.n, l = s.l + 1, tanda = s.a ? -1 : 1, naik = tanda * n;
        return { naik: naik, larian: l, m: naik / l, teks: pecah(naik, l), mutlak: n };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), S = 15, x0 = 56, yb = 146, n = s.n, l = s.l + 1, turun = !!s.a, o = "";
        var xa = x0, xb = x0 + l * S, yt = yb - n * S;
        o += gar(x0 - 30, yb, 246, yb, "tinta3", 2);
        var pts = turun ? [[xa, yt], [xa, yb], [xb, yb]] : [[xa, yb], [xb, yb], [xb, yt]];
        o += segi(pts, "hijauLembut", "hijau", false, 2);
        if (n > 0) o += gar(xa, turun ? yt : yb, xb, turun ? yb : yt, "ungu", 4);
        var xv = turun ? xa : xb;
        if (n >= 1) {
          var sz = Math.min(9, n * S - 2);
          o += h.kotak(turun ? xa : xb - sz, yb - sz, sz, sz, { garis: "tinta3", tebal: 1.2, bulat: 0 });
        }
        o += teks((xa + xb) / 2, yb + 18, "mengufuk " + l, { tengah: true, saiz: 11, warna: "hijau", tebal: true });
        var lbl = (turun ? "turun " : "naik ") + n;
        o += teks(turun ? xv - 8 : xv + 8, n === 0 ? yb - 8 : yb - n * S / 2 + 4, lbl, { kanan: turun, saiz: 11, warna: "merah", tebal: true });
        o += baris(TBt(), "m = jarak mencancang / jarak mengufuk", { saiz: 11 });
        o += baris(TBt() + 18, "m = " + (turun && n > 0 ? "-" : "") + n + " / " + l + " = " + r.teks, { saiz: 12, warna: "tinta", tebal: true, hasil: true });
        o += baris(TBt() + 34, n === 0 ? "Landasan rata: m = 0" : turun ? "Turun ke kanan: m negatif" : "Naik ke kanan: m positif", { saiz: 11, warna: "tinta2", hasil: true });
        return h.svg(TBt() + 46, o, "Rajah tanjakan yang " + (turun ? "turun" : "naik") + " " + n + " unit dan mengufuk " + l + " unit; kecerunan " + r.teks);
      }
    };
    function TBt() { return 186; }

    /* ------------------- arah: y = mx ------------------- */
    T.arah = {
      mula: function (c) { return { i: c.i0 != null ? c.i0 : c.m.indexOf(2) >= 0 ? c.m.indexOf(2) : 0 }; },
      kawalan: function (c) {
        var t = c.m.map(String);
        if (c.tegak) t.push("tegak");
        return [{ k: "i", label: "kecerunan m", min: 0, maks: t.length - 1, teks: t }];
      },
      kira: function (c, s) {
        if (s.i >= c.m.length) return { tegak: true, m: null, mutlak: null };
        var m = c.m[s.i];
        return { tegak: false, m: m, mutlak: mutlak(m) };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), o = satah(), ket, alt;
        var asal = bulat(px(0), py(0), 4, "kertas", "tinta", 2, false);
        if (r.tegak) {
          o += gar(px(0), GY, px(0), GY + LEB, "ungu", 3);
          o += asal;
          o += baris(TB, "Mencancang (x = 0): m tak tertakrif", { saiz: 11, warna: "tinta", tebal: true });
          o += baris(TB + 18, "Jarak mengufuk 0: tak boleh dibahagi", { saiz: 11 });
          o += baris(TB + 34, "Paling curam, tiada nilai m", { saiz: 11 });
          return h.svg(TB + 46, o, "Rajah garis mencancang x sama dengan 0; kecerunan tak tertakrif");
        }
        var m = r.m;
        o += garisPanjang(0, 0, 1, m, "ungu", 3);
        if (m !== 0) {
          var yy = Math.max(-N, Math.min(N, m));
          o += gar(px(0), py(0), px(1), py(0), "hijau", 3);
          o += gar(px(1), py(0), px(1), py(m), "merah", 3);
          var atasAxis = m < 0;
          o += teks(px(0.5), atasAxis ? py(0) - 6 : py(0) + 16, "1", { tengah: true, saiz: 11, warna: "hijau", tebal: true });
          o += teks(px(1) + 8, py(m / 2) + 4, fm(m), { saiz: 11, warna: "merah", tebal: true });
        }
        o += asal;
        ket = m > 0 ? "Positif: garis naik ke kanan" : m < 0 ? "Negatif: garis turun ke kanan" : "Sifar: garis mengufuk";
        o += baris(TB, "y = " + (m === 0 ? "0" : m === 1 ? "x" : m === -1 ? "-x" : fm(m) + "x") + ",  m = " + fm(m), { saiz: 12, warna: "tinta", tebal: true });
        o += baris(TB + 18, ket, { saiz: 11 });
        o += baris(TB + 34, "|m| = " + fm(r.mutlak) + ". Lebih besar = lebih curam.", { saiz: 11 });
        return h.svg(TB + 46, o, "Rajah garis y sama dengan " + fm(m) + " kali x melalui asalan; " + ket);
      }
    };

    /* ------------------- dua: dua titik ------------------- */
    T.dua = {
      mula: function (c) { return { p: c.p0 != null ? c.p0 : 0, q: c.q0 != null ? c.q0 : 0 }; },
      kawalan: function (c) {
        return [
          { k: "p", label: "x bagi B", min: 0, maks: c.bx.length - 1, teks: c.bx.map(String) },
          { k: "q", label: "y bagi B", min: 0, maks: c.by.length - 1, teks: c.by.map(String) }
        ];
      },
      kira: function (c, s) {
        var x1 = c.A[0], y1 = c.A[1], x2 = c.bx[s.p], y2 = c.by[s.q], naik = y2 - y1, lari = x2 - x1;
        return { x1: x1, y1: y1, x2: x2, y2: y2, naik: naik, larian: lari, sama: naik === 0 && lari === 0,
          m: nilaiM(naik, lari), teks: pecah(naik, lari) };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), o = satah(), alt;
        var atasB = r.y2 >= r.y1;
        if (!r.sama) {
          o += garisPanjang(r.x1, r.y1, r.larian, r.naik, "ungu", 2.5);
          if (r.larian !== 0 && r.naik !== 0) {
            o += gar(px(r.x1), py(r.y1), px(r.x2), py(r.y1), "hijau", 3, { hasil: true });
            o += gar(px(r.x2), py(r.y1), px(r.x2), py(r.y2), "merah", 3, { hasil: true });
          } else if (r.larian !== 0) {
            o += gar(px(r.x1), py(r.y1), px(r.x2), py(r.y1), "hijau", 3, { hasil: true });
          } else {
            o += gar(px(r.x1), py(r.y1), px(r.x1), py(r.y2), "merah", 3, { hasil: true });
          }
        }
        o += bulat(px(r.x1), py(r.y1), 5, "ungu", "kertas", 1.5, false);
        o += bulat(px(r.x2), py(r.y2), 5, "merah", "kertas", 1.5, false);
        o += labelTitik(r.x1, r.y1, "A(" + r.x1 + ", " + r.y1 + ")", !atasB, "ungu");
        o += labelTitik(r.x2, r.y2, "B(" + r.x2 + ", " + r.y2 + ")", atasB, "merah");
        if (r.sama) {
          o += baris(TB, "A dan B di tempat sama: tiada garis", { saiz: 12, warna: "tinta", tebal: true });
          alt = "Titik A dan B di tempat sama";
        } else {
          o += baris(TB, "naik = " + r.y2 + " - " + neg(r.y1) + " = " + r.naik, { saiz: 11, warna: "merah", tebal: true, hasil: true });
          o += baris(TB + 16, "larian = " + r.x2 + " - " + neg(r.x1) + " = " + r.larian, { saiz: 11, warna: "hijau", tebal: true, hasil: true });
          o += baris(TB + 34, r.larian === 0 ? "m tak tertakrif (garis mencancang)" : "m = " + r.naik + " / " + r.larian + " = " + r.teks + (r.naik === 0 ? " (garis mengufuk)" : ""),
            { saiz: 12, warna: "tinta", tebal: true, hasil: true });
          alt = "Garis melalui A(" + r.x1 + ", " + r.y1 + ") dan B(" + r.x2 + ", " + r.y2 + "); kecerunan " + r.teks;
        }
        return h.svg(TB + 46, o, "Rajah satah Cartes. " + alt);
      }
    };

    /* ------------------- pintasan: (a, 0) dan (0, b) ------------------- */
    T.pintasan = {
      mula: function (c) { return { p: c.p0 != null ? c.p0 : 0, q: c.q0 != null ? c.q0 : 0 }; },
      kawalan: function (c) {
        return [
          { k: "p", label: "pintasan-x", min: 0, maks: c.ax.length - 1, teks: c.ax.map(String) },
          { k: "q", label: "pintasan-y", min: 0, maks: c.by.length - 1, teks: c.by.map(String) }
        ];
      },
      kira: function (c, s) {
        var a = c.ax[s.p], b = c.by[s.q], m = -b / a;
        return { a: a, b: b, m: m, teks: pecah(-b, a) };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), o = satah(), a = r.a, b = r.b;
        o += garisPanjang(a, 0, -a, b, "ungu", 2.5);
        o += bulat(px(a), py(0), 5, "hijau", "kertas", 1.5, false);
        o += bulat(px(0), py(b), 5, "merah", "kertas", 1.5, false);
        o += teks(px(a), b < 0 ? py(0) - 8 : py(0) + 16, "(" + a + ", 0)", { tengah: true, saiz: 11, warna: "hijau", tebal: true });
        o += teks(a > 0 ? px(0) - 8 : px(0) + 8, py(b) + 4, "(0, " + b + ")", { kanan: a > 0, saiz: 11, warna: "merah", tebal: true });
        o += baris(TB, "pintasan-x = " + a + ",  pintasan-y = " + b, { saiz: 11, warna: "tinta", tebal: true });
        o += baris(TB + 18, "m = -(" + b + ") / " + a + " = " + r.teks, { saiz: 12, warna: "tinta", tebal: true, hasil: true });
        o += baris(TB + 34, r.m > 0 ? "Positif: garis naik ke kanan" : "Negatif: garis turun ke kanan", { saiz: 11, hasil: true });
        return h.svg(TB + 46, o, "Rajah garis melalui (" + a + ", 0) dan (0, " + b + "); kecerunan " + r.teks);
      }
    };

    /* ------------------- daftar widget ------------------- */
    W.t2cerun = {
      mula: function (c) { return T[c.mod].mula(c); },
      kawalan: function (c) { return T[c.mod].kawalan(c); },
      kira: function (c, s) { return T[c.mod].kira(c, s); },
      lukis: function (c, s) { return T[c.mod].lukis.call(T[c.mod], c, s); }
    };
  }
  if (typeof module !== "undefined") module.exports = pasang; else pasang(window.JMI);
})();
