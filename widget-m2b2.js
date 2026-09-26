/* Widget Tingkatan 2 Bab 2 Pemfaktoran dan Pecahan Algebra. Tiga widget:
   - t2jubin   : jubin algebra sebagai luas segi empat.
                 mod "kembang": (x + a)(x + b); gelongsor a dan b menukar jubin dan hasil kembangan
                 mod "faktor" : sasaran x² + px + q; gelongsor memilih pasangan (m, n) dan melihat sama ada
                                segi empat yang terbentuk padan dengan sasaran
                 mod "beza"   : x² − a²; petak besar ditolak petak kecil disusun semula menjadi segi empat
                                (x + a)(x − a)
   - t2jadual  : kaedah jadual (px + q)(rx + s); gelongsor nilai x menyemak kesetaraan sebelum dan
                 selepas kembangan
   - t2pecahan : pecahan algebra; kiri dan kanan disemak dengan menggantikan nilai x
                 (permudah, tambah/tolak, darab/bahagi). Nilai x yang menjadikan penyebut sifar
                 ditandakan "tak tertakrif".
   Semua nombor dikira daripada formula. Fail ini didaftarkan oleh interaktif.js
   (Node: readdirSync widget-*.js; pelayar: tag <script> selepas interaktif.js). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, ungkap = h.ungkap, kotak = h.kotak, garis = h.garis, svg = h.svg, LEB = h.LEBAR;
    var MIN = "−";

    function bul(n) { var r = Math.round(n * 1000) / 1000; return r === 0 ? 0 : r; }
    function nm(n) { return String(bul(n)).replace("-", MIN); }
    /* koefisien tulen ditulis bersama pemboleh ubah: 1x -> x, -1x -> -x */
    function sebutan(c, d, v) {
      var a = Math.abs(c), s;
      if (d === 0) s = String(a);
      else s = (a === 1 ? "" : String(a)) + v;
      return s;
    }
    /* poli: koefisien tertinggi dahulu, contoh [1, 5, 6] -> x^2 + 5x + 6. Kembalikan segmen untuk ungkap(). */
    function poli(cs, v) {
      v = v || "x";
      var segs = [], teksKini = "", pertama = true, n = cs.length;
      for (var i = 0; i < n; i++) {
        var c = cs[i], d = n - 1 - i;
        if (!c) continue;
        var tanda = c < 0 ? MIN : "+";
        if (pertama) teksKini += (c < 0 ? MIN : "");
        else teksKini += " " + tanda + " ";
        teksKini += sebutan(c, d, d >= 1 ? v : "");
        if (d >= 2) { segs.push(teksKini); segs.push({ p: String(d) }); teksKini = ""; }
        pertama = false;
      }
      if (pertama) teksKini = "0";
      if (teksKini) segs.push(teksKini);
      return segs;
    }
    function poliTeks(cs, v) {
      return poli(cs, v).map(function (s) { return typeof s === "string" ? s : "^" + s.p; }).join("");
    }
    function nilaiPoli(cs, x) { var r = 0; for (var i = 0; i < cs.length; i++) r = r * x + cs[i]; return r; }
    /* "x^2 - 9" -> ["x", {p:"2"}, " - 9"] */
    function keSegs(str) {
      var segs = [], re = /\^(\d)/g, last = 0, m;
      while ((m = re.exec(str))) { segs.push(str.slice(last, m.index)); segs.push({ p: m[1] }); last = m.index + 2; }
      segs.push(str.slice(last));
      return segs.filter(function (s) { return s !== ""; });
    }
    function panjangSegs(segs, sz) {
      var t = 0;
      segs.forEach(function (s) { t += typeof s === "string" ? s.length * sz * 0.6 : s.p.length * 11 * 0.6; });
      return t;
    }
    function ung(cx, y, segs, o) { return ungkap(cx, y, segs, o); }
    /* ungkapan linear px + q sebagai teks */
    function linTeks(p, q) {
      var s = "";
      if (p) s += (p < 0 ? MIN : "") + (Math.abs(p) === 1 ? "" : Math.abs(p)) + "x";
      if (q || !p) s += (p ? (q < 0 ? " " + MIN + " " : " + ") + Math.abs(q) : (q < 0 ? MIN : "") + Math.abs(q));
      return s;
    }
    function fak(p, q) { return "(" + linTeks(p, q) + ")"; }

    /* ================= t2jubin ================= */
    var X = 66; /* panjang x pada lukisan jubin (piksel) */

    function blok(a, b, y0) {
      var U = Math.min(12, Math.floor(64 / Math.max(a, b, 1)));
      var w = X + a * U, hh = X + b * U, x0 = Math.round((LEB - w) / 2) + 6, o = "", i, j;
      o += kotak(x0, y0, X, X, { isi: "kuningLembut", garis: "kuning", tebal: 1.6, bulat: 2 });
      for (i = 0; i < a; i++) o += kotak(x0 + X + i * U, y0, U, X, { isi: "hijauLembut", garis: "hijau", tebal: 1, bulat: 1 });
      for (j = 0; j < b; j++) o += kotak(x0, y0 + X + j * U, X, U, { isi: "hijauLembut", garis: "hijau", tebal: 1, bulat: 1 });
      for (i = 0; i < a; i++) for (j = 0; j < b; j++)
        o += kotak(x0 + X + i * U, y0 + X + j * U, U, U, { isi: "merahLembut", garis: "merah", tebal: 1, bulat: 1 });
      o += ung(x0 + X / 2, y0 + X / 2 + 6, ["x", { p: "2" }], { saiz: 16, tebal: true });
      o += teks(x0 + X / 2, y0 - 6, "x", { tengah: true, saiz: 13, tebal: true });
      o += teks(x0 + X + a * U / 2, y0 - 6, String(a), { tengah: true, saiz: 13, tebal: true, warna: "hijau" });
      o += teks(x0 - 8, y0 + X / 2 + 4, "x", { kanan: true, saiz: 13, tebal: true });
      o += teks(x0 - 8, y0 + X + b * U / 2 + 4, String(b), { kanan: true, saiz: 13, tebal: true, warna: "hijau" });
      return { isi: o, bawah: y0 + hh };
    }

    W.t2jubin = {
      mula: function (c) {
        if (c.mod === "kembang") return { a: c.a == null ? 2 : c.a, b: c.b == null ? 3 : c.b };
        if (c.mod === "faktor") return { i: c.i == null ? 0 : c.i };
        if (c.mod === "beza") return { a: c.a == null ? 3 : c.a };
        throw new Error("mod t2jubin tidak dikenali: " + c.mod);
      },
      kawalan: function (c) {
        if (c.mod === "kembang") {
          var mk = c.maks || 5;
          return [{ k: "a", label: "a", min: 1, maks: mk }, { k: "b", label: "b", min: 1, maks: mk }];
        }
        if (c.mod === "faktor")
          return [{ k: "i", label: "pasangan", min: 0, maks: c.pasang.length - 1, teks: c.pasang.map(function (p) { return p[0] + " dan " + p[1]; }) }];
        return [{ k: "a", label: "a", min: 1, maks: c.aMaks || 7 }];
      },
      kira: function (c, s) {
        if (c.mod === "kembang") return { a: s.a, b: s.b, koef: [1, s.a + s.b, s.a * s.b] };
        if (c.mod === "faktor") {
          var m = c.pasang[s.i][0], n = c.pasang[s.i][1];
          return { m: m, n: n, koef: [1, m + n, m * n], padan: m + n === c.p && m * n === c.q };
        }
        var a = s.a, x = c.x || 10;
        return { a: a, x: x, luas: x * x - a * a, panjang: x + a, lebar: x - a };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), o = "", y;
        if (c.mod === "kembang") {
          var bk = blok(r.a, r.b, 30); o += bk.isi; y = bk.bawah + 22;
          o += teks(LEB / 2, y, "(x + " + r.a + ")(x + " + r.b + ")", { tengah: true, saiz: 13, tebal: true });
          o += ung(LEB / 2, y + 20, ["x", { p: "2" }, " + " + (r.a === 1 ? "" : r.a) + "x + " + (r.b === 1 ? "" : r.b) + "x + " + (r.a * r.b)], { saiz: 12, hasil: true });
          o += ung(LEB / 2, y + 40, ["= "].concat(poli(r.koef)), { saiz: 13, tebal: true, warna: "ungu", hasil: true });
          return svg(y + 52, o, "Rajah jubin algebra bagi (x + " + r.a + ")(x + " + r.b + "): satu jubin x kuasa dua, " + r.a + " jalur x menegak, " + r.b + " jalur x mengufuk dan " + (r.a * r.b) + " petak unit. Kembangan ialah " + poliTeks(r.koef));
        }
        if (c.mod === "faktor") {
          var bf = blok(r.m, r.n, 30); o += bf.isi; y = bf.bawah + 22;
          o += ung(LEB / 2, y, ["Sasaran: x", { p: "2" }, " + " + c.p + "x + " + c.q], { saiz: 12, tebal: true });
          o += ung(LEB / 2, y + 18, ["Lukisan: "].concat(poli(r.koef)), { saiz: 12, hasil: true });
          o += teks(LEB / 2, y + 36, "Jumlah m + n = " + (r.m + r.n) + " (perlu " + c.p + ")", { tengah: true, saiz: 11, hasil: true });
          o += teks(LEB / 2, y + 52, "Darab m × n = " + (r.m * r.n) + " (perlu " + c.q + ")", { tengah: true, saiz: 11, hasil: true });
          o += teks(LEB / 2, y + 72, r.padan ? "Padan! " + fak(1, r.m) + fak(1, r.n) : "Belum padan, cuba pasangan lain", { tengah: true, saiz: 13, tebal: true, warna: r.padan ? "hijau" : "merah", hasil: true });
          return svg(y + 84, o, "Rajah jubin algebra mencuba faktor " + r.m + " dan " + r.n + " bagi x kuasa dua tambah " + c.p + "x tambah " + c.q + ". " + (r.padan ? "Padan." : "Belum padan."));
        }
        /* beza dua kuasa dua */
        var U = 8, x = r.x, a = r.a, W0 = x * U, x0 = Math.round((LEB - W0) / 2), y0 = 30, k = x - a;
        o += kotak(x0, y0 + a * U, W0, k * U, { isi: "hijauLembut", garis: "hijau", tebal: 1.4, bulat: 1 });
        o += kotak(x0, y0, k * U, a * U, { isi: "kuningLembut", garis: "kuning", tebal: 1.4, bulat: 1 });
        var rx = x0 + k * U;
        o += garis(rx, y0, rx + a * U, y0, { warna: "merah", tebal: 1.4, putus: "3 3" });
        o += garis(rx + a * U, y0, rx + a * U, y0 + a * U, { warna: "merah", tebal: 1.4, putus: "3 3" });
        o += garis(rx, y0, rx, y0 + a * U, { warna: "merah", tebal: 1.4, putus: "3 3" });
        o += garis(rx, y0 + a * U, rx + a * U, y0 + a * U, { warna: "merah", tebal: 1.4, putus: "3 3" });
        o += teks(x0 + k * U / 2, y0 - 6, String(k), { tengah: true, saiz: 12, tebal: true });
        o += teks(rx + a * U / 2, y0 - 6, String(a), { tengah: true, saiz: 12, tebal: true, warna: "merah" });
        o += teks(x0 - 6, y0 + W0 / 2 + 4, "x", { kanan: true, saiz: 13, tebal: true });
        o += teks(x0 + W0 / 2, y0 + W0 + 16, "x = " + x + " unit", { tengah: true, saiz: 11 });
        var y1 = y0 + W0 + 34, w1 = (x + a) * U, x1 = Math.round((LEB - w1) / 2), sus = "";
        sus += kotak(x1, y1, W0, k * U, { isi: "hijauLembut", garis: "hijau", tebal: 1.4, bulat: 1 });
        sus += kotak(x1 + W0, y1, a * U, k * U, { isi: "kuningLembut", garis: "kuning", tebal: 1.4, bulat: 1 });
        sus += teks(x1 + w1 / 2, y1 - 6, String(x + a), { tengah: true, saiz: 12, tebal: true });
        sus += teks(x1 + w1 + 6, y1 + k * U / 2 + 4, String(k), { saiz: 12, tebal: true });
        o += c.cabar ? '<g class="jmi-hasil">' + sus + "</g>" : sus;
        y = y1 + k * U + 24;
        o += ung(LEB / 2, y, ["x", { p: "2" }, " " + MIN + " " + (a * a)], { saiz: 13, tebal: true });
        o += teks(LEB / 2, y + 18, "= (x + " + a + ")(x " + MIN + " " + a + ")", { tengah: true, saiz: 13, tebal: true, warna: "ungu", hasil: true });
        o += teks(LEB / 2, y + 36, "x = " + x + ": " + r.luas + " = " + r.panjang + " " + String.fromCharCode(215) + " " + r.lebar, { tengah: true, saiz: 12, hasil: true });
        return svg(y + 48, o, "Rajah beza dua kuasa dua: petak sisi " + x + " unit ditolak petak sisi " + a + " unit ditukar menjadi segi empat tepat " + r.panjang + " kali " + r.lebar + ", luas " + r.luas);
      }
    };

    /* ================= t2jadual ================= */
    function segsSebutan(c, d, tandaAwal) {
      /* sebutan tunggal c x^d dengan tanda eksplisit jika tandaAwal */
      var pre = c < 0 ? MIN : (tandaAwal ? "+" : "");
      var body = d === 0 ? String(Math.abs(c)) : (Math.abs(c) === 1 ? "" : String(Math.abs(c))) + "x";
      var s = pre + body;
      return d >= 2 ? [s, { p: String(d) }] : [s];
    }

    W.t2jadual = {
      mula: function (c) { return { i: c.i0 == null ? Math.floor(c.nilai.length / 2) : c.i0 }; },
      kawalan: function (c) { return [{ k: "i", label: "x", min: 0, maks: c.nilai.length - 1, teks: c.nilai.map(nm) }]; },
      kira: function (c, s) {
        var x = c.nilai[s.i], A = c.p * c.r, B = c.q * c.r + c.p * c.s, C = c.q * c.s;
        return {
          x: x, koef: [A, B, C],
          kiri: (c.p * x + c.q) * (c.r * x + c.s),
          kanan: A * x * x + B * x + C
        };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), o = "";
        var gx = 44, cw = 102, ch = 36, gy = 44;
        /* pengepala */
        o += ung(gx + cw / 2, gy - 12, segsSebutan(c.p, 1, false), { saiz: 13, tebal: true, warna: "hijau" });
        o += ung(gx + cw + cw / 2, gy - 12, segsSebutan(c.q, 0, true), { saiz: 13, tebal: true, warna: "hijau" });
        o += ung(gx - 20, gy + ch / 2 + 5, segsSebutan(c.r, 1, false), { saiz: 13, tebal: true, warna: "merah" });
        o += ung(gx - 20, gy + ch + ch / 2 + 5, segsSebutan(c.s, 0, true), { saiz: 13, tebal: true, warna: "merah" });
        var sel = [
          [c.p * c.r, 2, "kuningLembut", "kuning"], [c.q * c.r, 1, "hijauLembut", "hijau"],
          [c.p * c.s, 1, "hijauLembut", "hijau"], [c.q * c.s, 0, "merahLembut", "merah"]
        ];
        sel.forEach(function (e, n) {
          var cx = gx + (n % 2) * cw, cy = gy + Math.floor(n / 2) * ch;
          o += kotak(cx, cy, cw, ch, { isi: e[2], garis: e[3], tebal: 1.4, bulat: 2 });
          o += ung(cx + cw / 2, cy + ch / 2 + 5, segsSebutan(e[0], e[1], false), { saiz: 13, tebal: true });
        });
        var y = gy + 2 * ch + 24;
        o += teks(LEB / 2, y, fak(c.p, c.q) + fak(c.r, c.s), { tengah: true, saiz: 13, tebal: true });
        o += ung(LEB / 2, y + 20, ["= "].concat(poli(r.koef)), { saiz: 13, tebal: true, warna: "ungu", hasil: true });
        o += teks(LEB / 2, y + 44, "Kurungan: " + nm(r.kiri), { tengah: true, saiz: 12, hasil: true });
        o += teks(LEB / 2, y + 62, "Dikembang: " + nm(r.kanan), { tengah: true, saiz: 12, hasil: true });
        o += teks(LEB / 2, y + 80, r.kiri === r.kanan ? "Sama" : "Tak sama", { tengah: true, saiz: 13, tebal: true, warna: r.kiri === r.kanan ? "hijau" : "merah", hasil: true });
        return svg(y + 94, o, "Rajah kaedah jadual bagi " + fak(c.p, c.q) + fak(c.r, c.s) + ", kembangan " + poliTeks(r.koef) + ". Apabila x = " + nm(r.x) + " kedua-dua bentuk bernilai " + nm(r.kiri));
      }
    };

    /* ================= t2pecahan ================= */
    /* Setiap sebutan: {n:"x + 1", d:"2", fn:[1,1], fd:[2]}; d null = ungkapan biasa tanpa penyebut.
       Operator: {op:"+"} | "-" | "x" | ":" dipaparkan sebagai + − × ÷. */
    var OPS = { "+": "+", "-": MIN, "x": String.fromCharCode(215), ":": String.fromCharCode(247) };
    function nilaiSebutan(t, x) {
      var pn = nilaiPoli(t.fn, x), pd = t.fd ? nilaiPoli(t.fd, x) : 1;
      if (Math.abs(pd) < 1e-12) return null;
      return pn / pd;
    }
    function nilaiRuang(senarai, x) {
      var v = null, op = null, i, t, u;
      for (i = 0; i < senarai.length; i++) {
        t = senarai[i];
        if (t.op) { op = t.op; continue; }
        u = nilaiSebutan(t, x);
        if (u === null) return null;
        if (v === null) v = u;
        else if (op === "+") v = v + u;
        else if (op === "-") v = v - u;
        else if (op === "x") v = v * u;
        else if (op === ":") { if (Math.abs(u) < 1e-12) return null; v = v / u; }
        else throw new Error("operator pecahan tidak dikenali: " + op);
      }
      return v;
    }
    function ruangan(senarai) {
      return senarai.map(function (t) {
        if (t.op) return { op: t.op, w: 24 };
        var sn = keSegs(t.n), w;
        if (t.d == null) w = panjangSegs(sn, 13) + 6;
        else w = Math.max(panjangSegs(sn, 13), panjangSegs(keSegs(t.d), 13)) + 12;
        return { t: t, w: w };
      });
    }

    W.t2pecahan = {
      mula: function (c) {
        /* semak setiap nilai x: kiri dan kanan mesti setara (atau kedua-duanya tak tertakrif hanya jika sengaja) */
        c.nilai.forEach(function (x) {
          var a = nilaiRuang(c.kiri, x), b = nilaiRuang([c.kanan], x);
          if (a !== null && b !== null && Math.abs(a - b) > 1e-9) throw new Error("pecahan tidak setara pada x = " + x + ": " + a + " lawan " + b);
        });
        return { i: c.i0 == null ? Math.floor(c.nilai.length / 2) : c.i0 };
      },
      kawalan: function (c) { return [{ k: "i", label: "x", min: 0, maks: c.nilai.length - 1, teks: c.nilai.map(nm) }]; },
      kira: function (c, s) {
        var x = c.nilai[s.i], a = nilaiRuang(c.kiri, x), b = nilaiRuang([c.kanan], x);
        return { x: x, kiri: a === null ? null : bul(a), kanan: b === null ? null : bul(b), sama: a !== null && b !== null && Math.abs(a - b) < 1e-9 };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), o = "", cy = 40;
        var item = ruangan(c.kiri).concat([{ op: "=", w: 24 }, ruangan([c.kanan])[0]]);
        var jum = 0; item.forEach(function (e) { jum += e.w; });
        if (jum > LEB - 8) throw new Error("t2pecahan terlalu lebar: " + Math.round(jum));
        var x = (LEB - jum) / 2, kanan = false, kn = "";
        item.forEach(function (e) {
          var cx = x + e.w / 2, sub = "";
          if (e.op === "=") kanan = true;
          if (e.op) sub += teks(cx, cy + 5, e.op === "=" ? "=" : OPS[e.op], { tengah: true, saiz: 15, tebal: true });
          else if (e.t.d == null) sub += ung(cx, cy + 5, keSegs(e.t.n), { saiz: 13, tebal: true, warna: "ungu" });
          else {
            sub += ung(cx, cy - 6, keSegs(e.t.n), { saiz: 13, tebal: true });
            sub += garis(x + 2, cy, x + e.w - 2, cy, { warna: "tinta", tebal: 1.6 });
            sub += ung(cx, cy + 16, keSegs(e.t.d), { saiz: 13, tebal: true });
          }
          if (kanan && c.cabar) kn += sub; else o += sub;
          x += e.w;
        });
        if (kn) o += '<g class="jmi-hasil">' + kn + "</g>";
        var y = cy + 44;
        o += teks(LEB / 2, y, "Kiri  : " + (r.kiri === null ? "tak tertakrif" : nm(r.kiri)), { tengah: true, saiz: 12, hasil: true });
        o += teks(LEB / 2, y + 18, "Kanan : " + (r.kanan === null ? "tak tertakrif" : nm(r.kanan)), { tengah: true, saiz: 12, hasil: true });
        var st = r.sama ? "Sama" : (r.kiri === null && r.kanan === null ? "Kedua-duanya tak tertakrif" : (r.kiri === null ? "Kiri tak tertakrif (penyebut 0)" : (r.kanan === null ? "Kanan tak tertakrif" : "Tak sama")));
        o += teks(LEB / 2, y + 38, st, { tengah: true, saiz: st.length > 26 ? 11 : 13, tebal: true, warna: r.sama ? "hijau" : "merah", hasil: true });
        var bawah = y + 52;
        if (c.nota) { o += teks(LEB / 2, y + 58, c.nota, { tengah: true, saiz: 11, hasil: true }); bawah = y + 70; }
        return svg(bawah, o, "Rajah pecahan algebra: " + (c.alt2 || "kedua-dua belah") + ". Apabila x = " + nm(r.x) + ", kiri " + (r.kiri === null ? "tak tertakrif" : nm(r.kiri)) + " dan kanan " + (r.kanan === null ? "tak tertakrif" : nm(r.kanan)));
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
