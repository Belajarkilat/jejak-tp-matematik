/* Widget Tingkatan 1 Bab 1 Nombor Nisbah: garis nombor interaktif.
   Satu widget `t1nombor` dengan lima mod (spec.mod):
   - letak   : gelongsor kedudukan satu nombor (integer, pecahan atau perpuluhan) pada garis nombor
   - banding : dua nombor A dan B pada garis yang sama; tanda banding dikira
   - operasi : a tambah atau tolak b sebagai lompatan pada garis nombor
   - darab   : n lompatan berukuran b (pendaraban integer sebagai lompatan berulang)
   - tukar   : pecahan p/d ditukar kepada perpuluhan dan bentuk termudah
   Semua nombor disimpan sebagai integer dalam unit 1/d (tiada ralat titik apung) dan
   dikira daripada formula. Unsur jawapan bertanda jmi-hasil supaya tersembunyi dalam
   mod cabar. Fail ini didaftarkan oleh interaktif.js (Node: readdirSync widget-*.js;
   pelayar: tag <script> selepas interaktif.js). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks;
    var X0 = 14, X1 = 246, XT = 130, Y0 = 118, TINGGI = 214;
    var BARIS = [158, 174, 190, 206];

    function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a || 1; }
    function des(v, d) { var s = String(Math.round(v / d * 1000) / 1000); return s === "-0" ? "0" : s; }
    function satuDes(v, d) { var t = (v / d).toFixed(1); return t === "-0.0" ? "0.0" : t; }
    function pec(v, d) { if (v === 0) return "0"; if (d === 1 || v % d === 0) return String(v / d); return v + "/" + d; }
    function termudah(v, d) { var g = gcd(v, d), p = v / g, q = d / g; return q === 1 ? String(p) : p + "/" + q; }
    /* Nilai dalam unit 1/d dipaparkan mengikut format: int, pec atau per. */
    function nilaiTeks(fmt, v, d) { return fmt === "pec" ? pec(v, d) : fmt === "per" ? satuDes(v, d) : String(v / d); }
    function kurung(t) { return t.charAt(0) === "-" ? "(" + t + ")" : t; }
    function lb(t, z) { return String(t).length * z * 0.6; }

    function butiran(c) {
      var d = c.d || 1, mod = c.mod, R, N;
      if (mod === "darab") { N = c.n || 4; R = N * (c.bMaks || N); return { d: 1, N: N, R: R, bN: c.bMaks || N }; }
      if (mod === "operasi") { N = c.n; R = Math.ceil(2 * N / d); return { d: d, N: N, R: R }; }
      R = c.R; N = R * d; return { d: d, N: N, R: R };
    }
    function pentas(c) { var b = butiran(c); return (X1 - X0) / (2 * b.R); }
    function X(c, u) { return XT + u * pentas(c); }

    function garisNombor(c) {
      var b = butiran(c), ux = pentas(c), R = b.R, d = b.d, o = "", k, u, langkah = 1, senarai = [1, 2, 5, 10];
      for (k = 0; k < senarai.length; k++) { if (ux * senarai[k] >= 24) { langkah = senarai[k]; break; } langkah = senarai[k]; }
      o += h.garis(X0 - 4, Y0, X1 + 4, Y0, { warna: "tinta3", tebal: 2 });
      if (d > 1) for (k = -R * d; k <= R * d; k++) if (k % d) o += h.garis(X(c, k / d), Y0 - 3, X(c, k / d), Y0 + 3, { warna: "garis2", tebal: 1 });
      for (u = -R; u <= R; u++) {
        o += h.garis(X(c, u), Y0 - 6, X(c, u), Y0 + 6, { warna: u === 0 ? "tinta" : "tinta3", tebal: u === 0 ? 2.2 : 1.2 });
        if (u % langkah === 0) o += teks(X(c, u), Y0 + 20, String(u), { tengah: true, saiz: 11, warna: u === 0 ? "tinta" : "tinta3", tebal: u === 0 });
      }
      return o;
    }
    function titik(c, u, warna, hasil) {
      return "<circle" + (hasil ? ' class="jmi-hasil"' : "") + ' cx="' + h.b1(X(c, u)) + '" cy="' + Y0 + '" r="6" fill="' + h.w(warna) +
        '" stroke="' + h.w("kertas") + '" stroke-width="2"></circle>';
    }
    /* Lompatan melengkung dari u1 ke u2 di atas garis, dengan anak panah dan label. */
    function lompat(c, u1, u2, warna, label, hasil) {
      var x1 = X(c, u1), x2 = X(c, u2), dx = x2 - x1;
      if (Math.abs(dx) < 0.5) return "";
      var ys = Y0 - 9, ht = Math.min(38, 9 + Math.abs(dx) * 0.4), xm = (x1 + x2) / 2, yc = ys - 2 * ht;
      var ux = dx / 2, uy = 2 * ht, pj = Math.sqrt(ux * ux + uy * uy); ux /= pj; uy /= pj;
      var bx = x2 - 8 * ux, by = ys - 8 * uy, px = -uy, py = ux;
      var cls = hasil ? ' class="jmi-hasil"' : "", col = h.w(warna);
      var o = "<g" + cls + '><path d="M' + h.b1(x1) + " " + ys + " Q" + h.b1(xm) + " " + h.b1(yc) + " " + h.b1(x2) + " " + ys + '" fill="none" stroke="' + col + '" stroke-width="2.4" stroke-linecap="round"></path>';
      o += '<path d="M' + h.b1(x2) + " " + ys + " L" + h.b1(bx + 4.5 * px) + " " + h.b1(by + 4.5 * py) + " L" + h.b1(bx - 4.5 * px) + " " + h.b1(by - 4.5 * py) + ' Z" fill="' + col + '"></path></g>';
      if (label && Math.abs(dx) >= 22) o += teks(xm, ys - ht - 5, label, { tengah: true, saiz: 12, warna: warna, tebal: true, hasil: hasil });
      return o;
    }
    function ungkapan(kiri, hasilT, warnaHasil) {
      var z = 14, jum = lb(kiri, z) + lb(hasilT, z), xs = XT - jum / 2;
      return teks(xs, 22, kiri, { saiz: z, warna: "tinta", tebal: true }) +
        teks(xs + lb(kiri, z), 22, hasilT, { saiz: z, warna: warnaHasil || "merah", tebal: true, hasil: true });
    }
    function tekan(y, t, warna, hasil, z) { return teks(10, y, t, { saiz: z || 12, warna: warna, tebal: true, hasil: hasil }); }
    function ubah(n) { return n === 0 ? 0 : n; }

    function senaraiTeks(c, N, d) {
      var a = [], i; for (i = 0; i <= 2 * N; i++) a.push(nilaiTeks(c.fmt || "int", i - N, d)); return a;
    }

    W.t1nombor = {
      mula: function (c) {
        var b = butiran(c), s = { i: c.i == null ? b.N : c.i };
        if (c.mod === "banding" || c.mod === "operasi") s.j = c.j == null ? b.N : c.j;
        if (c.mod === "darab") s.j = c.j == null ? b.bN : c.j;
        if (c.mod === "operasi" && c.op == null) s.o = c.o == null ? 0 : c.o;
        return s;
      },
      kawalan: function (c) {
        var b = butiran(c), d = b.d, N = b.N, fmt = c.fmt || "int", mod = c.mod;
        if (mod === "darab") {
          var sen = []; for (var q = -b.N; q <= b.N; q++) sen.push(String(q));
          var sb = []; for (q = -b.bN; q <= b.bN; q++) sb.push(String(q));
          return [{ k: "i", label: "n (lompatan)", min: 0, maks: 2 * b.N, teks: sen }, { k: "j", label: "b (saiz)", min: 0, maks: 2 * b.bN, teks: sb }];
        }
        var t = senaraiTeks(c, N, d);
        if (mod === "letak") return [{ k: "i", label: c.label || "nilai", min: 0, maks: 2 * N, teks: t }];
        if (mod === "tukar") return [{ k: "i", label: "pengangka", min: 0, maks: 2 * N, teks: t.map(function (x, i) { return String(i - N); }) }];
        if (mod === "banding") return [{ k: "i", label: "A", min: 0, maks: 2 * N, teks: t }, { k: "j", label: "B", min: 0, maks: 2 * N, teks: t }];
        var kw = [{ k: "i", label: "a", min: 0, maks: 2 * N, teks: t }, { k: "j", label: "b", min: 0, maks: 2 * N, teks: t }];
        if (c.op == null) kw.push({ k: "o", label: "operasi", min: 0, maks: 1, teks: ["tambah", "tolak"] });
        return kw;
      },
      kira: function (c, s) {
        var b = butiran(c), d = b.d, N = b.N, mod = c.mod, a = s.i - N;
        if (mod === "darab") {
          var n = s.i - b.N, bb = s.j - b.bN;
          return { n: n, b: bb, hasil: n * bb, lompatan: Math.abs(n), arah: n < 0 ? -1 : 1 };
        }
        if (mod === "letak") return { nilai: a / d, v: a, d: d, perpuluhan: a / d, termudah: termudah(a, d) };
        if (mod === "tukar") return { p: a, d: d, perpuluhan: a / d, termudah: termudah(a, d) };
        var bv = s.j - N;
        if (mod === "banding") return { a: a / d, b: bv / d, tanda: a < bv ? "<" : a > bv ? ">" : "=", av: a, bv: bv };
        var op = c.op != null ? c.op : (s.o ? "-" : "+"), r = op === "+" ? a + bv : a - bv;
        return { a: a / d, b: bv / d, op: op, hasil: r / d, hv: r, av: a, bv: bv, d: d, termudah: termudah(r, d) };
      },
      lukis: function (c, s) {
        var b = butiran(c), d = b.d, fmt = c.fmt || "int", mod = c.mod, r = this.kira(c, s), o = "", alt;
        var g = garisNombor(c);
        if (mod === "letak") {
          var tv = nilaiTeks(fmt, r.v, d);
          o += teks(XT, 24, tv, { tengah: true, saiz: 18, warna: "ungu", tebal: true });
          o += g + titik(c, r.nilai, "ungu", false);
          var arah = r.v < 0 ? "kiri" : "kanan", jarak = Math.abs(r.v);
          if (fmt === "int") o += tekan(BARIS[0], jarak === 0 ? "tepat di sifar" : jarak + " langkah ke " + arah + " dari 0", "ungu", true);
          else if (fmt === "pec") o += tekan(BARIS[0], "perpuluhan: " + des(r.v, d), "ungu", true);
          else o += tekan(BARIS[0], "pecahan: " + r.termudah, "ungu", true);
          o += tekan(BARIS[1], r.v < 0 ? "negatif: di sebelah kiri 0" : r.v > 0 ? "positif: di sebelah kanan 0" : "sifar: bukan positif, bukan negatif", "tinta2", true, 11);
          alt = "nilai " + tv;
        } else if (mod === "banding") {
          var ta = nilaiTeks(fmt, r.av, d), tb = nilaiTeks(fmt, r.bv, d);
          o += teks(XT, 24, "A dan B pada garis nombor", { tengah: true, saiz: 13, warna: "tinta2", tebal: true });
          o += g + titik(c, r.a, "hijau", false) + titik(c, r.b, "merah", false);
          o += tekan(BARIS[0], "A = " + ta, "hijau", false) + tekan(BARIS[1], "B = " + tb, "merah", false);
          o += tekan(BARIS[2], r.tanda === "=" ? "A = B : sama, satu titik" : "A " + r.tanda + " B : A di " + (r.tanda === "<" ? "kiri" : "kanan") + " B", "ungu", true);
          alt = "A " + ta + " dan B " + tb;
        } else if (mod === "operasi") {
          var ta2 = nilaiTeks(fmt, r.av, d), tb2 = nilaiTeks(fmt, r.bv, d), th = nilaiTeks(fmt, r.hv, d);
          var lompatV = r.op === "+" ? r.bv : -r.bv;
          o += ungkapan(kurung(ta2) + " " + (r.op === "+" ? "+" : "-") + " " + kurung(tb2) + " = ", th);
          o += g + lompat(c, r.a, r.hasil, "ungu", (lompatV >= 0 ? "+" : "") + nilaiTeks(fmt, lompatV, d), true);
          o += titik(c, r.a, "hijau", false) + titik(c, r.hasil, "merah", true);
          o += tekan(BARIS[0], "a = " + ta2 + " (mula)", "hijau", false);
          o += tekan(BARIS[1], (r.op === "+" ? "tambah " : "tolak ") + tb2, "ungu", false);
          o += tekan(BARIS[2], "hasil = " + th, "merah", true);
          if (fmt === "pec" && r.termudah !== pec(r.hv, d)) o += tekan(BARIS[3], "bentuk termudah: " + r.termudah, "tinta2", true, 11);
          alt = ta2 + (r.op === "+" ? " tambah " : " tolak ") + tb2;
        } else if (mod === "darab") {
          var lomp = r.arah * r.b, k, mula = 0;
          o += ungkapan(kurung(String(r.n)) + " × " + kurung(String(r.b)) + " = ", String(r.hasil));
          o += g;
          for (k = 0; k < r.lompatan; k++) { o += lompat(c, mula, mula + lomp, "ungu", (lomp >= 0 ? "+" : "") + lomp, true); mula += lomp; }
          o += titik(c, 0, "hijau", false) + titik(c, r.hasil, "merah", true);
          o += tekan(BARIS[0], "n = " + r.n + " lompatan", "hijau", false);
          o += tekan(BARIS[1], "b = " + r.b + " (saiz lompatan)", "ungu", false);
          o += tekan(BARIS[2], r.n + " × " + kurung(String(r.b)) + " = " + r.hasil, "merah", true);
          if (r.n < 0) o += tekan(BARIS[3], "n negatif: arah lompatan terbalik", "tinta2", true, 11);
          alt = r.n + " lompatan berukuran " + r.b;
        } else {
          var tp = pec(r.p, d);
          o += ungkapan(kurung(tp) + " = ", des(r.p, d));
          o += g + titik(c, r.perpuluhan, "hijau", false);
          o += tekan(BARIS[0], "pecahan: " + tp + "  (penyebut " + d + ")", "hijau", false);
          o += tekan(BARIS[1], "perpuluhan: " + des(r.p, d), "merah", true);
          o += tekan(BARIS[2], "bentuk termudah: " + r.termudah, "ungu", true);
          alt = "pecahan " + tp;
        }
        return h.svg(TINGGI, o, "Rajah garis nombor interaktif, " + alt);
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
