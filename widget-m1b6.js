/* Widget Tingkatan 1 Bab 6 Persamaan Linear. Tiga widget:
   - t1neraca   : neraca timbang bagi ax + b = dx + c.
                  mod "cuba"   : gelongsor andaian x, neraca condong sehingga seimbang (cuba jaya)
                  mod "langkah": gelongsor langkah, operasi yang sama pada kedua-dua belah
   - t1dua      : graf ax + by = c pada satah Cartes; gelongsor memilih x (atau y bagi x tetap)
                  dan titik penyelesaian bergerak di sepanjang garis
   - t1serentak : dua persamaan linear serentak
                  mod "graf"   : dua garis; gelongsor pekali x dan c bagi L2 (bersilang, selari, bertindih)
                  mod "hapus"  : kaedah penghapusan langkah demi langkah
                  mod "ganti"  : kaedah penggantian langkah demi langkah
   Semua nombor dikira daripada formula. Fail ini didaftarkan oleh interaktif.js
   (Node: readdirSync widget-*.js; pelayar: tag <script> selepas interaktif.js). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks;

    function bul(n) { var r = Math.round(n * 100) / 100; return r === 0 ? 0 : r; }
    function fmt(n) { return String(bul(n)); }
    function tanda(n) { return n < 0 ? "(" + fmt(n) + ")" : fmt(n); }
    /* ungkapan a x + b y dengan pekali 0, 1 dan -1 ditulis ringkas */
    function ungkapan(a, b, x, y) {
      var s = "";
      function tambah(k, v) {
        if (!k) return;
        var t = (Math.abs(k) === 1 ? "" : fmt(Math.abs(k))) + v;
        if (!s) s = (k < 0 ? "-" : "") + t; else s += (k < 0 ? " - " : " + ") + t;
      }
      tambah(a, x); tambah(b, y);
      return s || "0";
    }
    function pers(a, b, c) { return ungkapan(a, b, "x", "y") + " = " + fmt(c); }
    function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = a % b; a = b; b = t; } return a; }
    function lcm(a, b) { return Math.abs(a * b) / gcd(a, b); }
    function tepat(n) { return Math.abs(n - Math.round(n)) < 1e-9; }

    /* ================= t1neraca ================= */
    var LB = 16, GB = 18, LU = 7, GU = 8, LPAN = 76;
    function sisi(ax, k) {
      var p = [];
      if (ax) p.push(ax === 1 ? "x" : ax + "x");
      if (k || !ax) p.push(String(k));
      return p.join(" + ");
    }
    /* langkah penyelesaian: operasi yang sama pada kedua-dua belah */
    function langkahNeraca(c) {
      var a = c.a, b = c.b || 0, d = c.d || 0, k = c.c;
      var st = [{ a: a, b: b, d: d, c: k, ops: "Persamaan asal" }];
      if (d > 0) {
        a -= d;
        st.push({ a: a, b: b, d: 0, c: k, ops: "Tolak " + (d === 1 ? "x" : d + "x") + " kedua-dua belah" });
        d = 0;
      }
      if (b > 0) {
        k -= b;
        st.push({ a: a, b: 0, d: 0, c: k, ops: "Tolak " + b + " kedua-dua belah" });
        b = 0;
      }
      if (a > 1) {
        k = k / a;
        st.push({ a: 1, b: 0, d: 0, c: k, ops: "Bahagi kedua-dua belah dengan " + a });
        a = 1;
      }
      return st;
    }
    function penyelesaianNeraca(c) { return (c.c - (c.b || 0)) / (c.a - (c.d || 0)); }

    /* satu pan: beg pembolehubah (kotak) + unit (petak kecil) di atas lantai pan */
    function pan(cx, lantaiY, beg, unit, labelBeg, hasilLabel) {
      var o = "", x0 = cx - LPAN / 2, i;
      o += h.garis(x0, lantaiY, x0 + LPAN, lantaiY, { warna: "tinta2", tebal: 4 });
      var bawah = lantaiY - 3;
      for (i = 0; i < beg; i++) {
        var bx = x0 + 2 + i * GB;
        o += h.kotak(bx, bawah - 18, LB, 18, { isi: "lembayungLembut", garis: "ungu", bulat: 3, tebal: 1.4 });
        o += teks(bx + LB / 2, bawah - 5, labelBeg, { tengah: true, saiz: 11, warna: "tinta", tebal: true, hasil: hasilLabel });
      }
      var barisU = beg ? bawah - 18 - 4 : bawah;
      var lajur = Math.floor((LPAN - 4) / GU);
      for (i = 0; i < unit; i++) {
        var r = Math.floor(i / lajur), l = i % lajur;
        o += h.kotak(x0 + 2 + l * GU, barisU - LU - r * GU, LU, LU, { isi: "kuningLembut", garis: "kuning", bulat: 1, tebal: 1 });
      }
      return o;
    }
    function sudutCondong(diff) {
      if (diff === 0) return 0;
      var s = diff > 0 ? 1 : -1;
      return s * Math.max(4, Math.min(12, Math.abs(diff) * 1.5));
    }
    function lukisNeraca(eqTeks, ops, kiriBeg, kiriUnit, kananBeg, kananUnit, labelBeg, diff, baris, alt, hasilLabel) {
      var CXP = 130, PY = 66, S = 86, rad = sudutCondong(diff) * Math.PI / 180;
      var kx = CXP - S * Math.cos(rad), ky = PY + S * Math.sin(rad);
      var rx = CXP + S * Math.cos(rad), ry = PY - S * Math.sin(rad);
      var o = teks(CXP, 18, eqTeks, { tengah: true, saiz: 15, warna: "tinta", tebal: true });
      if (ops) o += teks(CXP, 36, ops, { tengah: true, saiz: 12, warna: "ungu", tebal: true });
      /* penyokong */
      o += h.garis(CXP, PY, CXP, 184, { warna: "tinta3", tebal: 3 });
      o += h.garis(CXP - 34, 184, CXP + 34, 184, { warna: "tinta3", tebal: 4 });
      /* rasuk */
      o += h.garis(kx, ky, rx, ry, { warna: "tinta", tebal: 4 });
      o += '<circle cx="' + CXP + '" cy="' + PY + '" r="5" fill="' + h.w("ungu") + '" stroke="' + h.w("kertas") + '" stroke-width="1.5"></circle>';
      var pkY = ky + 62, prY = ry + 62;
      /* tali pan */
      o += h.garis(kx, ky, kx - LPAN / 2, pkY, { warna: "tinta3", tebal: 1.2 }) + h.garis(kx, ky, kx + LPAN / 2, pkY, { warna: "tinta3", tebal: 1.2 });
      o += h.garis(rx, ry, rx - LPAN / 2, prY, { warna: "tinta3", tebal: 1.2 }) + h.garis(rx, ry, rx + LPAN / 2, prY, { warna: "tinta3", tebal: 1.2 });
      o += pan(kx, pkY, kiriBeg, kiriUnit, labelBeg, hasilLabel);
      o += pan(rx, prY, kananBeg, kananUnit, labelBeg, hasilLabel);
      o += baris;
      return h.svg(246, o, alt);
    }
    function barisNeraca(n, t, warna, hasil) {
      return teks(8, 204 + n * 17, t, { saiz: 12, warna: warna || "tinta", tebal: n === 2, hasil: hasil });
    }

    W.t1neraca = {
      mula: function (c) { return c.mod === "langkah" ? { l: 0 } : { x: c.x0 == null ? 0 : c.x0 }; },
      kawalan: function (c) {
        if (c.mod === "langkah") {
          var st = langkahNeraca(c);
          return [{ k: "l", label: "langkah", min: 0, maks: st.length - 1, teks: st.map(function (_, i) { return i === 0 ? "asal" : String(i); }) }];
        }
        var xs = penyelesaianNeraca(c);
        return [{ k: "x", label: "x", min: 0, maks: c.xMaks == null ? Math.min(12, Math.ceil(xs) + 3) : c.xMaks }];
      },
      kira: function (c, s) {
        if (c.mod === "langkah") {
          var st = langkahNeraca(c), z = st[Math.min(s.l, st.length - 1)];
          return { eq: sisi(z.a, z.b) + " = " + sisi(z.d, z.c), a: z.a, b: z.b, d: z.d, c: z.c, ops: z.ops, x: penyelesaianNeraca(c) };
        }
        var kiri = c.a * s.x + (c.b || 0), kanan = (c.d || 0) * s.x + c.c;
        return { x: s.x, kiri: kiri, kanan: kanan, seimbang: kiri === kanan, penyelesaian: penyelesaianNeraca(c) };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), a = c.a, b = c.b || 0, d = c.d || 0;
        var alt = "Rajah neraca timbang bagi persamaan " + sisi(a, b) + " = " + sisi(d, c.c) + ". Beg mewakili x dan petak kecil mewakili 1 unit.";
        if (c.mod === "langkah") {
          var ba = barisNeraca(0, "Kedua-dua pan sentiasa seimbang.", "tinta2", false);
          if (r.a === 1 && r.b === 0 && r.d === 0) ba += barisNeraca(2, "x = " + fmt(r.c), "hijau", false);
          else ba += barisNeraca(2, "Ringkaskan sehingga x tunggal.", "tinta2", false);
          return lukisNeraca(r.eq, r.ops, r.a, r.b, r.d, r.c, "x", 0, ba, alt, false);
        }
        var x = s.x, ba2 = "";
        ba2 += barisNeraca(0, "Kiri  = " + fmt(a) + "(" + x + ")" + (b ? " + " + b : "") + " = " + r.kiri, "tinta", true);
        ba2 += barisNeraca(1, "Kanan = " + (d ? fmt(d) + "(" + x + ") + " : "") + c.c + " = " + r.kanan, "tinta", true);
        ba2 += barisNeraca(2, r.seimbang ? "Seimbang! x = " + x : (r.kiri > r.kanan ? "Kiri berat: kecilkan x" : "Kanan berat: besarkan x"),
          r.seimbang ? "hijau" : "merah", true);
        return lukisNeraca(sisi(a, b) + " = " + sisi(d, c.c), "Andaian: x = " + x, a, b, d, c.c, String(x), r.kiri - r.kanan, ba2, alt, false);
      }
    };

    /* ================= satah Cartes bersama ================= */
    var R0 = 6, U = 17, OX = 130, OY = 118, BARIS = 244, JARAK = 17;
    function px(x) { return OX + x * U; }
    function py(y) { return OY - y * U; }
    function satah() {
      var i, o = h.kotak(px(-R0), py(R0), 2 * R0 * U, 2 * R0 * U, { garis: "garis2", bulat: 0, tebal: 1 });
      for (i = -R0 + 1; i < R0; i++) {
        if (i === 0) continue;
        o += h.garis(px(i), py(R0), px(i), py(-R0), { warna: "garis", tebal: 0.6 });
        o += h.garis(px(-R0), py(i), px(R0), py(i), { warna: "garis", tebal: 0.6 });
      }
      o += h.garis(px(-R0), OY, px(R0), OY, { warna: "tinta3", tebal: 1.5 });
      o += h.garis(OX, py(R0), OX, py(-R0), { warna: "tinta3", tebal: 1.5 });
      for (i = -R0; i <= R0; i++) {
        if (i === 0 || i % 2) continue;
        o += teks(px(i), OY + 13, String(i), { tengah: true, saiz: 11, warna: "tinta3" });
        o += teks(OX - 4, py(i) + 4, String(i), { kanan: true, saiz: 11, warna: "tinta3" });
      }
      o += teks(px(R0) + 3, OY - 5, "x", { saiz: 12, warna: "tinta", tebal: true });
      o += teks(OX + 5, py(R0) - 4, "y", { saiz: 12, warna: "tinta", tebal: true });
      return o;
    }
    /* garis ax + by = c dipotong pada kotak grid; null jika di luar */
    function potong(a, b, c) {
      var p = [], t = 1e-9;
      function dalam(v) { return Math.abs(v) <= R0 + t; }
      if (b !== 0) [-R0, R0].forEach(function (x) { var y = (c - a * x) / b; if (dalam(y)) p.push([x, y]); });
      if (a !== 0) [-R0, R0].forEach(function (y) { var x = (c - b * y) / a; if (dalam(x)) p.push([x, y]); });
      if (p.length < 2) return null;
      var u = [];
      p.forEach(function (q) { if (!u.some(function (z) { return Math.abs(z[0] - q[0]) < 1e-6 && Math.abs(z[1] - q[1]) < 1e-6; })) u.push(q); });
      if (u.length < 2) return null;
      return [u[0], u[u.length - 1]];
    }
    function garisPers(a, b, c, warna, tebal, hasil, putus) {
      var p = potong(a, b, c); if (!p) return "";
      return '<line' + (hasil ? ' class="jmi-hasil"' : "") + ' x1="' + h.b1(px(p[0][0])) + '" y1="' + h.b1(py(p[0][1])) + '" x2="' + h.b1(px(p[1][0])) +
        '" y2="' + h.b1(py(p[1][1])) + '" stroke="' + h.w(warna) + '" stroke-width="' + (tebal || 3) + '" stroke-linecap="round"' +
        (putus ? ' stroke-dasharray="' + putus + '"' : "") + "></line>";
    }
    function titik(x, y, warna, hasil, r) {
      return '<circle' + (hasil ? ' class="jmi-hasil"' : "") + ' cx="' + h.b1(px(x)) + '" cy="' + h.b1(py(y)) + '" r="' + (r || 5) + '" fill="' + h.w(warna) +
        '" stroke="' + h.w("kertas") + '" stroke-width="1.5"></circle>';
    }
    function dalamGrid(x, y) { return Math.abs(x) <= R0 + 1e-9 && Math.abs(y) <= R0 + 1e-9; }
    function baris(n, t, o) {
      o = o || {};
      return teks(8, BARIS + n * JARAK, t, { saiz: o.saiz || 12, warna: o.warna || "tinta", tebal: o.tebal, hasil: o.hasil });
    }
    function tinggiGrid(nb) { return BARIS + (nb - 1) * JARAK + 12; }

    /* ================= t1dua ================= */
    /* spec: {a, b, c, t:[nilai parameter]}. Jika b = 0 (x tetap) t ialah nilai y; jika tidak, t ialah nilai x. */
    function titikDua(c, i) {
      var t = c.t[Math.max(0, Math.min(c.t.length - 1, i))];
      if (c.b === 0) return { x: c.c / c.a, y: t };
      return { x: t, y: (c.c - c.a * t) / c.b };
    }
    W.t1dua = {
      mula: function (c) { var n = c.t.indexOf(c.t0 == null ? c.t[Math.floor(c.t.length / 2)] : c.t0); return { i: n < 0 ? 0 : n }; },
      kawalan: function (c) {
        return [{ k: "i", label: c.b === 0 ? "y" : "x", min: 0, maks: c.t.length - 1, teks: c.t.map(String) }];
      },
      kira: function (c, s) {
        var p = titikDua(c, s.i);
        return { x: bul(p.x), y: bul(p.y), nilai: c.a * p.x + c.b * p.y, bulat: tepat(p.x) && tepat(p.y) };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), o = satah(), n = 0, rows = "";
        o += garisPers(c.a, c.b, c.c, "merah", 3, true);
        c.t.forEach(function (_, j) {
          var q = titikDua(c, j);
          if (tepat(q.x) && tepat(q.y) && dalamGrid(q.x, q.y)) o += titik(q.x, q.y, "kuning", true, 3.2);
        });
        var dalam = dalamGrid(r.x, r.y);
        if (dalam) o += titik(r.x, r.y, "hijau", true, 5.5);
        rows += baris(n++, pers(c.a, c.b, c.c), { warna: "merah", tebal: true, saiz: 13 });
        rows += baris(n++, "x = " + fmt(r.x) + ",  y = " + fmt(r.y) + (dalam ? "" : "  (luar grid)"), { hasil: true, tebal: true });
        rows += baris(n++, "Semak: " + fmt(c.a) + "×" + tanda(r.x) + " + " + fmt(c.b) + "×" + tanda(r.y) + " = " + fmt(r.nilai), { warna: "tinta2", hasil: true });
        return h.svg(tinggiGrid(n), o + rows, "Rajah satah Cartes dengan garis lurus " + pers(c.a, c.b, c.c) + ". Titik penyelesaian bergerak di sepanjang garis apabila nilai berubah.");
      }
    };

    /* ================= t1serentak ================= */
    function hubungan(a1, b1, c1, a2, b2, c2) {
      var det = a1 * b2 - a2 * b1;
      if (det !== 0) return { jenis: "unik", x: bul((c1 * b2 - c2 * b1) / det), y: bul((a1 * c2 - a2 * c1) / det) };
      var sama = c1 * b2 === c2 * b1 && a1 * c2 === a2 * c1;
      return { jenis: sama ? "bertindih" : "selari" };
    }
    /* langkah kaedah penghapusan atau penggantian; setiap langkah menambah baris */
    function langkahAlgebra(c) {
      var st = [], a1 = c.a1, b1 = c.b1, c1 = c.c1, a2 = c.a2, b2 = c.b2, c2 = c.c2;
      var sol = hubungan(a1, b1, c1, a2, b2, c2);
      if (c.mod === "ganti") {
        /* (1) y = p x + q ; (2) a x + b y = c */
        var p = c.p, q = c.q, a = c.a2, b = c.b2, cc = c.c2;
        var dlm = fmt(p) + "x" + (q ? (q < 0 ? " - " + fmt(-q) : " + " + fmt(q)) : "");
        if (p === 1) dlm = "x" + (q ? (q < 0 ? " - " + fmt(-q) : " + " + fmt(q)) : "");
        var kiriGanti = ungkapan(a, 0, "x", "y") + (b < 0 ? " - " : " + ") + (Math.abs(b) === 1 ? "" : fmt(Math.abs(b))) + "(" + dlm + ")";
        var x = (cc - b * q) / (a + b * p), y = p * x + q;
        st.push({ warna: "ungu", baris: ["(1) y = " + dlm.replace(/^/, ""), "(2) " + pers(a, b, cc)] });
        st.push({ warna: "tinta", baris: ["Ganti (1) dalam (2):", kiriGanti + " = " + fmt(cc)] });
        st.push({ warna: "tinta", baris: ["Kembangkan: " + ungkapan(a + b * p, 0, "x", "y") + (b * q ? (b * q < 0 ? " - " + fmt(-b * q) : " + " + fmt(b * q)) : "") + " = " + fmt(cc)] });
        st.push({ warna: "hijau", baris: [ungkapan(a + b * p, 0, "x", "y") + " = " + fmt(cc - b * q), "x = " + fmt(x)], hasil: true });
        st.push({ warna: "hijau", baris: ["Ganti x = " + fmt(x) + " dalam (1):", "y = " + fmt(p) + "(" + fmt(x) + ")" + (q ? (q < 0 ? " - " + fmt(-q) : " + " + fmt(q)) : "") + " = " + fmt(y)], hasil: true });
        return { langkah: st, x: x, y: y };
      }
      /* penghapusan */
      var hapusY = c.hapus !== "x";
      var k1 = hapusY ? Math.abs(b1) : Math.abs(a1), k2 = hapusY ? Math.abs(b2) : Math.abs(a2);
      var L = lcm(k1, k2), m1 = L / k1, m2 = L / k2;
      var A1 = a1 * m1, B1 = b1 * m1, C1 = c1 * m1, A2 = a2 * m2, B2 = b2 * m2, C2 = c2 * m2;
      st.push({ warna: "ungu", baris: ["(1) " + pers(a1, b1, c1), "(2) " + pers(a2, b2, c2)] });
      var e1 = "(1)", e2 = "(2)";
      if (m1 !== 1 || m2 !== 1) {
        var b = [];
        if (m1 !== 1) b.push("(1)×" + m1 + ": " + pers(A1, B1, C1));
        if (m2 !== 1) b.push("(2)×" + m2 + ": " + pers(A2, B2, C2));
        st.push({ warna: "tinta", baris: b });
        e1 = m1 !== 1 ? "(1)×" + m1 : "(1)"; e2 = m2 !== 1 ? "(2)×" + m2 : "(2)";
      }
      var sama = hapusY ? (B1 * B2 > 0) : (A1 * A2 > 0);
      var op = sama ? -1 : 1;
      var AA = A1 + op * A2, BB = B1 + op * B2, CC = C1 + op * C2;
      st.push({ warna: "tinta", baris: [(sama ? "Tolak" : "Tambah") + " persamaan:", (sama ? "(1) - (2): " : "(1) + (2): ") + ungkapan(AA, BB, "x", "y") + " = " + fmt(CC)] });
      var nilaiPertama = hapusY ? CC / AA : CC / BB;
      var namaPertama = hapusY ? "x" : "y";
      st.push({ warna: "hijau", baris: [namaPertama + " = " + fmt(nilaiPertama)], hasil: true });
      var xx = hapusY ? nilaiPertama : (c1 - b1 * nilaiPertama) / a1;
      var yy = hapusY ? (c1 - a1 * nilaiPertama) / b1 : nilaiPertama;
      var kedua = hapusY ? "y" : "x";
      var ganti = hapusY ? ungkapan(a1, b1, "(" + fmt(nilaiPertama) + ")", "y") : ungkapan(a1, b1, "x", "(" + fmt(nilaiPertama) + ")");
      st.push({ warna: "hijau", baris: ["Ganti dalam (1):", ganti + " = " + fmt(c1), kedua + " = " + fmt(hapusY ? yy : xx)], hasil: true });
      return { langkah: st, x: bul(xx), y: bul(yy), sol: sol };
    }

    W.t1serentak = {
      mula: function (c) {
        if (c.mod === "hapus" || c.mod === "ganti") return { l: 0 };
        var cN = c.c2Nilai, aN = c.a2Nilai || [c.a2];
        var j = cN.indexOf(c.c20 == null ? c.c2 : c.c20), k = aN.indexOf(c.a2);
        return { j: j < 0 ? 0 : j, k: k < 0 ? 0 : k };
      },
      kawalan: function (c) {
        if (c.mod === "hapus" || c.mod === "ganti") {
          var n = langkahAlgebra(c).langkah.length;
          var t = []; for (var i = 0; i < n; i++) t.push(i === 0 ? "asal" : String(i));
          return [{ k: "l", label: "langkah", min: 0, maks: n - 1, teks: t }];
        }
        var kw = [];
        if (c.a2Nilai && c.a2Nilai.length > 1) kw.push({ k: "k", label: "x dalam L2", min: 0, maks: c.a2Nilai.length - 1, teks: c.a2Nilai.map(fmt) });
        kw.push({ k: "j", label: "c dalam L2", min: 0, maks: c.c2Nilai.length - 1, teks: c.c2Nilai.map(fmt) });
        return kw;
      },
      kira: function (c, s) {
        if (c.mod === "hapus" || c.mod === "ganti") {
          var r = langkahAlgebra(c);
          return { x: r.x, y: r.y, langkah: r.langkah.length };
        }
        var a2 = (c.a2Nilai || [c.a2])[s.k || 0], c2 = c.c2Nilai[s.j];
        var hb = hubungan(c.a1, c.b1, c.c1, a2, c.b2, c2);
        hb.a2 = a2; hb.c2 = c2;
        return hb;
      },
      lukis: function (c, s) {
        var i;
        if (c.mod === "hapus" || c.mod === "ganti") {
          var r = langkahAlgebra(c), o = "", n = 0;
          o += teks(8, 20, c.mod === "ganti" ? "Kaedah penggantian" : "Kaedah penghapusan", { saiz: 13, warna: "tinta", tebal: true });
          var y = 44;
          for (i = 0; i <= Math.min(s.l, r.langkah.length - 1); i++) {
            var L = r.langkah[i];
            for (var j = 0; j < L.baris.length; j++) {
              o += teks(8, y, L.baris[j], { saiz: 12, warna: L.warna, tebal: i === s.l && j === L.baris.length - 1 && i > 0, hasil: L.hasil });
              y += 18; n++;
            }
            y += 4;
          }
          var akhir = s.l >= r.langkah.length - 1;
          if (akhir) { o += teks(8, y + 6, "Penyelesaian: x = " + fmt(r.x) + ", y = " + fmt(r.y), { saiz: 13, warna: "hijau", tebal: true, hasil: true }); y += 24; }
          var jum = 44 + r.langkah.reduce(function (t, L) { return t + L.baris.length * 18 + 4; }, 0) + 24;
          return h.svg(jum + 14, o, "Rajah langkah penyelesaian persamaan linear serentak " + pers(c.a1, c.b1, c.c1) + " dan " + pers(c.a2, c.b2, c.c2) + " dengan kaedah " + (c.mod === "ganti" ? "penggantian" : "penghapusan"));
        }
        var q = this.kira(c, s), a2 = q.a2, c2 = q.c2, g = satah(), rows = "", m = 0;
        g += garisPers(c.a1, c.b1, c.c1, "ungu", 3, false);
        g += garisPers(a2, c.b2, c2, "merah", 3, false, q.jenis === "bertindih" ? "6 5" : null);
        var teksHasil;
        if (q.jenis === "unik") {
          if (dalamGrid(q.x, q.y)) g += titik(q.x, q.y, "kuning", true, 6);
          teksHasil = "Bersilang di (" + fmt(q.x) + ", " + fmt(q.y) + ")" + (dalamGrid(q.x, q.y) ? "" : " luar grid");
        } else if (q.jenis === "selari") teksHasil = "Selari: tiada penyelesaian";
        else teksHasil = "Bertindih: tak terhingga";
        rows += baris(m++, "L1: " + pers(c.a1, c.b1, c.c1), { warna: "ungu", tebal: true, saiz: 13 });
        rows += baris(m++, "L2: " + pers(a2, c.b2, c2), { warna: "merah", tebal: true, saiz: 13 });
        rows += baris(m++, teksHasil, { tebal: true, hasil: true });
        return h.svg(tinggiGrid(m), g + rows, "Rajah satah Cartes dengan dua garis lurus " + pers(c.a1, c.b1, c.c1) + " dan " + pers(a2, c.b2, c2) + ". " + teksHasil);
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
