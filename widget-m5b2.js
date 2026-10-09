/* Widget Tingkatan 5 Bab 2 Matriks. Widget `t5mat`, enam mod (spec.mod):
   - unsur    : satu matriks dengan label baris dan lajur (situasi sebenar). Gelongsor i dan j
                menyerlahkan unsur aᵢⱼ. Spek: A, baris [..], lajur [..], tajuk.
   - operasi  : dua matriks A dan B; cip memilih operasi (A + B, A − B, B − A, kA).
                Spek: A, B, ops [{t, jenis:"tambah"|"tolak"|"tolakB"|"skalar", k}].
   - darab    : C = AB. Gelongsor memilih unsur C; baris A dan lajur B yang terlibat diserlahkan
                dan hasil darab dalam dikira. Spek: A, B.
   - songsang : cip memilih matriks 2 × 2; penentu ad − bc, matriks songsang dan semakan AA⁻¹ = I.
                Spek: senarai [A, ...].
   - serentak : ax + by = p, cx + dy = q diselesaikan dengan matriks songsang, langkah demi langkah.
                Spek: A, P, nama [x, y].
   - kod      : kod rahsia. Pasangan huruf (A = 1, ..., Z = 26) didarab dengan kunci K.
                Cip memilih pasangan; paparan sulit atau nyahsulit. Spek: K, mesej.
   Semua nilai dikira daripada spek. Unsur jawapan bertanda jmi-hasil. */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks;

    function bul(n) { var r = Math.round(n * 1000) / 1000; return r === 0 ? 0 : r; }
    function fmt(n) { return String(bul(n)).replace("-", "−"); }
    function pecahan(n, d) {
      if (d < 0) { n = -n; d = -d; }
      var g = (function gcd(a, b) { return b ? gcd(b, a % b) : Math.abs(a); })(Math.round(n), Math.round(d));
      if (Number.isInteger(n) && Number.isInteger(d) && g) { n /= g; d /= g; }
      return d === 1 ? fmt(n) : fmt(n) + "/" + fmt(d);
    }
    function darab(A, B) { return A.map(function (r) { return B[0].map(function (_, j) { return r.reduce(function (s, v, k) { return s + v * B[k][j]; }, 0); }); }); }
    function penentu(A) { return A[0][0] * A[1][1] - A[0][1] * A[1][0]; }
    function songsang(A) { var d = penentu(A); if (!d) return null; return [[A[1][1] / d, -A[0][1] / d], [-A[1][0] / d, A[0][0] / d]]; }

    /* Lukis matriks: x, y = sudut kiri atas; cw lebar sel; sorot(i, j) -> nama warna atau null */
    function matriks(x, y, M, o) {
      o = o || {};
      var cw = o.cw || 30, ch = o.ch || 20, m = M.length, n = M[0].length, w = n * cw + 8, hh = m * ch + 6, s = "";
      M.forEach(function (r, i) {
        r.forEach(function (v, j) {
          var war = o.sorot ? o.sorot(i, j) : null, cx = x + 4 + j * cw + cw / 2, cy = y + 3 + i * ch + ch / 2;
          if (war) s += h.kotak(cx - cw / 2 + 2, cy - ch / 2 + 1, cw - 4, ch - 2, { isi: LEMBUT[war], garis: war, bulat: 4 });
          s += teks(cx, cy + 4.5, o.f ? o.f(v) : fmt(v), { tengah: true, saiz: o.saiz || 12, warna: war ? "tinta" : (o.warna || "tinta2"), tebal: !!war, hasil: o.hasil });
        });
      });
      /* kurungan bulat seperti buku teks KSSM */
      s += h.laluan("M" + (x + 6) + " " + y + "Q" + (x - 2) + " " + (y + hh / 2) + " " + (x + 6) + " " + (y + hh), { warna: "tinta3", tebal: 1.6 });
      s += h.laluan("M" + (x + w - 6) + " " + y + "Q" + (x + w + 2) + " " + (y + hh / 2) + " " + (x + w - 6) + " " + (y + hh), { warna: "tinta3", tebal: 1.6 });
      return { svg: s, w: w, h: hh };
    }
    function teksMat(M) { return "[" + M.map(function (r) { return r.map(fmt).join(" "); }).join("; ") + "]"; }
    var HURUF = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var LEMBUT = { merah: "merahLembut", hijau: "hijauLembut", kuning: "kuningLembut", ungu: "lembayungLembut" };

    W.t5mat = {
      mula: function (c) {
        if (c.mod === "unsur") return { i: 0, j: 0 };
        if (c.mod === "darab" || c.mod === "serentak") return { e: 0 };
        if (c.mod === "kod") return { p: 0, v: 0 };
        return { i: 0 };
      },
      kawalan: function (c) {
        if (c.mod === "unsur") return [{ k: "i", label: "baris i", min: 0, maks: c.A.length - 1, teks: c.A.map(function (_, i) { return String(i + 1); }) }, { k: "j", label: "lajur j", min: 0, maks: c.A[0].length - 1, teks: c.A[0].map(function (_, j) { return String(j + 1); }) }];
        if (c.mod === "operasi") return [{ k: "i", label: "operasi", min: 0, maks: c.ops.length - 1, teks: c.ops.map(function (o) { return o.t; }), pilih: true }];
        if (c.mod === "darab") { var C = darab(c.A, c.B), t = []; C.forEach(function (r, i) { r.forEach(function (_, j) { t.push("c" + (i + 1) + (j + 1)); }); }); return [{ k: "e", label: "unsur", min: 0, maks: t.length - 1, teks: t }]; }
        if (c.mod === "songsang") return [{ k: "i", label: "matriks", min: 0, maks: c.senarai.length - 1, teks: c.senarai.map(function (_, i) { return String.fromCharCode(80 + i); }), pilih: true }];
        if (c.mod === "serentak") return [{ k: "e", label: "langkah", min: 0, maks: 3, teks: ["1 bentuk matriks", "2 penentu", "3 songsang", "4 penyelesaian"] }];
        var pas = []; for (var q = 0; q < c.mesej.length; q += 2) pas.push(c.mesej.substr(q, 2));
        return [{ k: "p", label: "pasangan", min: 0, maks: pas.length - 1, teks: pas, pilih: true }, { k: "v", label: "arah", min: 0, maks: 1, teks: ["Sulitkan", "Nyahsulit"], pilih: true }];
      },
      kira: function (c, s) {
        if (c.mod === "unsur") return { nilai: c.A[s.i][s.j], m: c.A.length, n: c.A[0].length };
        if (c.mod === "operasi") {
          var o = c.ops[s.i], R;
          if (o.jenis === "tambah") R = c.A.map(function (r, i) { return r.map(function (v, j) { return v + c.B[i][j]; }); });
          else if (o.jenis === "tolak") R = c.A.map(function (r, i) { return r.map(function (v, j) { return v - c.B[i][j]; }); });
          else if (o.jenis === "tolakB") R = c.B.map(function (r, i) { return r.map(function (v, j) { return v - c.A[i][j]; }); });
          else if (o.jenis === "skalar") R = (o.atas === "B" ? c.B : c.A).map(function (r) { return r.map(function (v) { return o.k * v; }); });
          else throw new Error("operasi tidak dikenali: " + o.jenis);
          return { R: R };
        }
        if (c.mod === "darab") { var C = darab(c.A, c.B), n = C[0].length; return { C: C, i: Math.floor(s.e / n), j: s.e % n }; }
        if (c.mod === "songsang") { var A = c.senarai[s.i]; return { A: A, d: penentu(A), inv: songsang(A) }; }
        if (c.mod === "serentak") { var inv = songsang(c.A), X = inv ? darab(inv, c.P.map(function (v) { return [v]; })) : null; return { d: penentu(c.A), inv: inv, x: X && X[0][0], y: X && X[1][0] }; }
        var pas = c.mesej.substr(2 * s.p, 2), v = [HURUF.indexOf(pas[0]) + 1, HURUF.indexOf(pas[1]) + 1], kod = darab(c.K, [[v[0]], [v[1]]]);
        return { v: v, kod: [kod[0][0], kod[1][0]], invK: songsang(c.K), d: penentu(c.K) };
      },
      lukis: function (c, s) {
        var r = W.t5mat.kira(c, s), o = "";
        if (c.mod === "unsur") {
          o += teks(130, 16, c.tajuk, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
          var x0 = 96, y0 = 40, cw = 52, ch = 24;
          c.lajur.forEach(function (l, j) { o += teks(x0 + 4 + j * cw + cw / 2, y0 - 6, l, { tengah: true, saiz: 11, warna: j === s.j ? "merah" : "tinta3", tebal: j === s.j }); });
          c.baris.forEach(function (b, i) { o += teks(x0 - 6, y0 + 3 + i * ch + ch / 2 + 4.5, b, { kanan: true, saiz: 11, warna: i === s.i ? "merah" : "tinta3", tebal: i === s.i }); });
          var M = matriks(x0, y0, c.A, { cw: cw, ch: ch, sorot: function (i, j) { return i === s.i && j === s.j ? "merah" : (i === s.i || j === s.j ? "kuning" : null); } });
          o += M.svg;
          var yb = y0 + M.h + 28;
          o += teks(8, yb, "Peringkat: " + r.m + " × " + r.n + " (" + r.m + " baris, " + r.n + " lajur)", { saiz: 12, warna: "tinta2", hasil: true });
          o += teks(8, yb + 22, "a" + (s.i + 1) + (s.j + 1) + " = " + fmt(r.nilai) + "  (baris " + (s.i + 1) + ", lajur " + (s.j + 1) + ")", { saiz: 13, warna: "merah", tebal: true, hasil: true });
          o += teks(8, yb + 42, c.baris[s.i] + ", " + c.lajur[s.j], { saiz: 11, warna: "tinta3" });
          return h.svg(yb + 52, o, "Matriks " + r.m + " dengan " + r.n + " bagi " + c.tajuk + "; unsur a" + (s.i + 1) + (s.j + 1) + " = " + fmt(r.nilai));
        }
        if (c.mod === "operasi") {
          var op = c.ops[s.i];
          o += teks(8, 22, "A =", { saiz: 13, warna: "ungu", tebal: true }) + matriks(40, 8, c.A).svg;
          o += teks(136, 22, "B =", { saiz: 13, warna: "hijau", tebal: true }) + matriks(168, 8, c.B).svg;
          var y2 = 80;
          o += teks(8, y2, op.t + " =", { saiz: 13, warna: "tinta", tebal: true });
          var Mr = matriks(110, y2 - 18, r.R, { warna: "merah", hasil: true });
          o += Mr.svg;
          var ket = op.jenis === "skalar" ? "Darab setiap unsur dengan " + fmt(op.k) + "." : "Operasi pada unsur yang sepadan.";
          o += teks(8, y2 + Mr.h + 8, ket, { saiz: 11, warna: "tinta3" });
          var contoh = op.jenis === "skalar" ? fmt(op.k) + " × " + fmt((op.atas === "B" ? c.B : c.A)[0][0]) + " = " + fmt(r.R[0][0])
            : (op.jenis === "tolakB" ? fmt(c.B[0][0]) + " − " + fmt(c.A[0][0]).replace(/^−/, "(−") + (c.A[0][0] < 0 ? ")" : "") : fmt(c.A[0][0]) + (op.jenis === "tambah" ? " + " : " − ") + (c.B[0][0] < 0 ? "(" + fmt(c.B[0][0]) + ")" : fmt(c.B[0][0]))) + " = " + fmt(r.R[0][0]);
          o += teks(8, y2 + Mr.h + 26, "Contoh unsur baris 1, lajur 1: " , { saiz: 11, warna: "tinta3" });
          o += teks(8, y2 + Mr.h + 44, contoh, { saiz: 12, warna: "merah", tebal: true, hasil: true });
          return h.svg(y2 + Mr.h + 54, o, "Matriks A dan B serta hasil " + op.t + " = " + teksMat(r.R));
        }
        if (c.mod === "darab") {
          var i = r.i, j = r.j;
          var MA = matriks(4, 30, c.A, { cw: 26, sorot: function (a) { return a === i ? "ungu" : null; } });
          var MB = matriks(4 + MA.w + 14, 30, c.B, { cw: 26, sorot: function (a, b) { return b === j ? "hijau" : null; } });
          var xC = 4 + MA.w + 14 + MB.w + 20;
          var MC = matriks(xC, 30, r.C, { cw: 30, sorot: function (a, b) { return a === i && b === j ? "merah" : null; }, f: function (v) { return v === r.C[i][j] ? fmt(v) : fmt(v); } });
          o += teks(4 + MA.w / 2, 20, "A", { tengah: true, saiz: 12, warna: "ungu", tebal: true }) + MA.svg;
          o += teks(4 + MA.w + 14 + MB.w / 2, 20, "B", { tengah: true, saiz: 12, warna: "hijau", tebal: true }) + MB.svg;
          o += teks(xC - 10, 30 + Math.max(MA.h, MB.h) / 2 + 4, "=", { tengah: true, saiz: 13, warna: "tinta" });
          o += teks(xC + MC.w / 2, 20, "AB", { tengah: true, saiz: 12, warna: "merah", tebal: true }) + MC.svg;
          var yb2 = 30 + Math.max(MA.h, MB.h, MC.h) + 26;
          var sebutan = c.A[i].map(function (v, k) { return fmt(v) + "×" + (c.B[k][j] < 0 ? "(" + fmt(c.B[k][j]) + ")" : fmt(c.B[k][j])); }).join(" + ");
          o += teks(8, yb2, "c" + (i + 1) + (j + 1) + " = baris " + (i + 1) + " A · lajur " + (j + 1) + " B", { saiz: 11, warna: "tinta3" });
          o += teks(8, yb2 + 20, "= " + sebutan, { saiz: 12, warna: "tinta2" });
          o += teks(8, yb2 + 40, "= " + fmt(r.C[i][j]), { saiz: 13, warna: "merah", tebal: true, hasil: true });
          o += teks(8, yb2 + 62, "Peringkat: (" + c.A.length + " × " + c.A[0].length + ")(" + c.B.length + " × " + c.B[0].length + ") → " + r.C.length + " × " + r.C[0].length, { saiz: 11, warna: "tinta3", hasil: true });
          return h.svg(yb2 + 72, o, "Pendaraban matriks A dan B; unsur c" + (i + 1) + (j + 1) + " = " + fmt(r.C[i][j]) + "; AB = " + teksMat(r.C));
        }
        if (c.mod === "songsang") {
          var A = r.A, nm = String.fromCharCode(80 + s.i);
          o += teks(8, 26, nm + " =", { saiz: 13, warna: "ungu", tebal: true }) + matriks(40, 12, A).svg;
          o += teks(120, 26, "Penentu = ad − bc", { saiz: 11, warna: "tinta3" });
          o += teks(120, 44, "= " + fmt(A[0][0]) + "×" + fmt(A[1][1]) + " − " + fmt(A[0][1]) + "×" + fmt(A[1][0]), { saiz: 11, warna: "tinta2" });
          o += teks(120, 62, "= " + fmt(r.d), { saiz: 13, warna: "merah", tebal: true, hasil: true });
          var y3 = 92;
          if (!r.inv) {
            o += teks(8, y3, "Penentu = 0, jadi " + nm + "⁻¹ tidak wujud.", { saiz: 12, warna: "merah", tebal: true, hasil: true });
            o += teks(8, y3 + 20, "(baris 2 = 2 × baris 1)", { saiz: 11, warna: "tinta3" });
            return h.svg(y3 + 30, o, "Matriks " + nm + " = " + teksMat(A) + " dengan penentu 0; matriks songsang tidak wujud");
          }
          o += teks(8, y3, nm + "⁻¹ = 1/" + fmt(r.d) + " ×", { saiz: 12, warna: "tinta2" });
          o += matriks(110, y3 - 18, [[A[1][1], -A[0][1]], [-A[1][0], A[0][0]]]).svg;
          var y4 = y3 + 46;
          o += teks(8, y4 + 14, nm + "⁻¹ =", { saiz: 13, warna: "hijau", tebal: true });
          o += matriks(60, y4, r.inv, { cw: 46, f: function (v) { return pecahan(v * r.d, r.d); }, warna: "hijau", hasil: true }).svg;
          o += teks(8, y4 + 68, nm + nm + "⁻¹ = I = [1 0; 0 1]", { saiz: 12, warna: "ungu", tebal: true, hasil: true });
          return h.svg(y4 + 78, o, "Matriks " + nm + " = " + teksMat(A) + ", penentu " + fmt(r.d) + ", matriks songsang " + teksMat(r.inv));
        }
        if (c.mod === "serentak") {
          var n = c.nama, E = s.e, A2 = c.A, Pv = c.P;
          var pk = function (a, v, depan) { var t = Math.abs(a) === 1 ? v : fmt(Math.abs(a)) + v; return depan ? (a < 0 ? "−" : "") + t : (a < 0 ? " − " : " + ") + t; };
          o += teks(8, 18, pk(A2[0][0], n[0], true) + pk(A2[0][1], n[1]) + " = " + fmt(Pv[0]), { saiz: 12, warna: "tinta2" });
          o += teks(8, 36, pk(A2[1][0], n[0], true) + pk(A2[1][1], n[1]) + " = " + fmt(Pv[1]), { saiz: 12, warna: "tinta2" });
          var y5 = 56;
          var MA2 = matriks(8, y5, A2, { cw: 26, warna: "ungu" });
          o += MA2.svg + matriks(8 + MA2.w + 6, y5, [[n[0]], [n[1]]], { cw: 22, f: String }).svg;
          o += teks(8 + MA2.w + 44, y5 + 27, "=", { saiz: 13, warna: "tinta" }) + matriks(8 + MA2.w + 58, y5, Pv.map(function (v) { return [v]; }), { cw: 30 }).svg;
          var y6 = y5 + 66;
          if (E >= 1) o += teks(8, y6, "Penentu = " + fmt(A2[0][0]) + "×" + fmt(A2[1][1]) + " − " + fmt(A2[0][1]) + "×" + fmt(A2[1][0]) + " = " + fmt(r.d), { saiz: 12, warna: "merah", tebal: true, hasil: true });
          if (E >= 2) { o += teks(8, y6 + 26, "Songsang = 1/" + fmt(r.d) + " ×", { saiz: 12, warna: "tinta2" }); o += matriks(150, y6 + 8, [[A2[1][1], -A2[0][1]], [-A2[1][0], A2[0][0]]], { hasil: true }).svg; }
          if (E >= 3) {
            o += teks(8, y6 + 74, n[0] + " = (" + fmt(A2[1][1]) + "×" + fmt(Pv[0]) + " − " + fmt(A2[0][1]) + "×" + fmt(Pv[1]) + ") ÷ " + fmt(r.d) + " = " + fmt(r.x), { saiz: 12, warna: "hijau", tebal: true, hasil: true });
            o += teks(8, y6 + 94, n[1] + " = (" + fmt(A2[0][0]) + "×" + fmt(Pv[1]) + " − " + fmt(A2[1][0]) + "×" + fmt(Pv[0]) + ") ÷ " + fmt(r.d) + " = " + fmt(r.y), { saiz: 12, warna: "hijau", tebal: true, hasil: true });
          }
          var lk = ["Tulis sistem dalam bentuk AX = B.", "Kira penentu ad − bc.", "Tulis matriks songsang A⁻¹.", "X = A⁻¹B."];
          o += teks(8, y6 + 120, "Langkah " + (E + 1) + " daripada 4:", { saiz: 11, warna: "tinta3", tebal: true });
          o += teks(8, y6 + 136, lk[E], { saiz: 11, warna: "tinta3" });
          return h.svg(y6 + 146, o, "Persamaan linear serentak diselesaikan dengan kaedah matriks, langkah " + (E + 1) + " daripada 4");
        }
        var pasang2 = c.mesej.substr(2 * s.p, 2), nyah = s.v === 1;
        o += teks(8, 18, "Kunci K =", { saiz: 12, warna: "ungu", tebal: true }) + matriks(84, 4, c.K, { cw: 26 }).svg;
        o += teks(8, 66, "Huruf: A = 1, B = 2, …, Z = 26", { saiz: 11, warna: "tinta3" });
        var y7 = 92;
        if (!nyah) {
          o += teks(8, y7, "Pasangan " + pasang2 + " → " + pasang2[0] + " = " + r.v[0] + ", " + pasang2[1] + " = " + r.v[1], { saiz: 12, warna: "tinta2" });
          o += teks(8, y7 + 22, "K × [" + r.v[0] + "; " + r.v[1] + "]", { saiz: 12, warna: "tinta2" });
          o += teks(8, y7 + 42, "= [" + fmt(c.K[0][0]) + "×" + r.v[0] + " + " + fmt(c.K[0][1]) + "×" + r.v[1] + "; " + fmt(c.K[1][0]) + "×" + r.v[0] + " + " + fmt(c.K[1][1]) + "×" + r.v[1] + "]", { saiz: 11, warna: "tinta3" });
          o += teks(8, y7 + 64, "Kod = " + r.kod[0] + ", " + r.kod[1], { saiz: 14, warna: "merah", tebal: true, hasil: true });
          return h.svg(y7 + 74, o, "Kod rahsia: pasangan " + pasang2 + " disulitkan dengan kunci K menjadi " + r.kod.join(" dan "));
        }
        o += teks(8, y7, "Kod diterima: " + r.kod[0] + ", " + r.kod[1], { saiz: 12, warna: "tinta2" });
        o += teks(8, y7 + 24, "K⁻¹ =", { saiz: 12, warna: "hijau", tebal: true }) + matriks(56, y7 + 8, r.invK, { cw: 30, warna: "hijau", hasil: true }).svg;
        o += teks(130, y7 + 24, "(penentu K = " + fmt(r.d) + ")", { saiz: 11, warna: "tinta3" });
        var asal = darab(r.invK, [[r.kod[0]], [r.kod[1]]]);
        o += teks(8, y7 + 76, "K⁻¹ × kod = [" + fmt(asal[0][0]) + "; " + fmt(asal[1][0]) + "]", { saiz: 12, warna: "tinta2", hasil: true });
        o += teks(8, y7 + 98, "Mesej = " + HURUF[asal[0][0] - 1] + HURUF[asal[1][0] - 1], { saiz: 14, warna: "merah", tebal: true, hasil: true });
        return h.svg(y7 + 108, o, "Kod rahsia: kod " + r.kod.join(" dan ") + " dinyahsulit dengan matriks songsang K menjadi " + pasang2);
      }
    };
    W.t5mat.darab = darab; W.t5mat.songsang = songsang; W.t5mat.penentu = penentu;
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
