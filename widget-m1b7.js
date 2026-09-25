/* Widget Tingkatan 1 Bab 7 Ketaksamaan Linear: garis nombor interaktif.
   Satu widget `t1ketaksamaan` dengan empat mod (spec.mod):
   - garis    : gelongsor nilai sempadan dan simbol (>, >=, <, <=); bulatan kosong atau penuh,
                anak panah dan titik yang memenuhi syarat
   - sifat    : dua nombor a < b diubah dengan operasi (tambah, tolak, darab, bahagi, termasuk
                nombor negatif); tanda ketaksamaan dibandingkan sebelum dan selepas
   - uji      : ax + b (simbol) c; gelongsor x menguji nilai, sinar penyelesaian dikira daripada formula
   - serentak : dua ketaksamaan dalam satu pemboleh ubah; sinar 1, sinar 2 dan persilangan
   Semua nombor dikira daripada formula. Unsur jawapan bertanda hasil supaya tersembunyi
   dalam mod cabar. Fail ini didaftarkan oleh interaktif.js (Node: readdirSync widget-*.js;
   pelayar: tag <script> selepas interaktif.js). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks;
    var X0 = 18, X1 = 242;
    var SIM = [">", "≥", "<", "≤"];

    function fm(n) { n = Math.round(n * 100) / 100; return String(n === 0 ? 0 : n); }
    function skala(lo, hi) { var u = (X1 - X0) / (hi - lo); return function (v) { return X0 + (v - lo) * u; }; }
    function padan(s, v, k) { return s === ">" ? v > k + 1e-9 : s === "≥" ? v >= k - 1e-9 : s === "<" ? v < k - 1e-9 : v <= k + 1e-9; }
    function kanan(s) { return s === ">" || s === "≥"; }
    function tutup(s) { return s === "≥" || s === "≤"; }
    function tandaTerbalik(s) { return s === ">" ? "<" : s === "<" ? ">" : s === "≥" ? "≤" : "≥"; }
    function sekeliling(a, b) { return a < b - 1e-9 ? "<" : a > b + 1e-9 ? ">" : "="; }

    function gar(x1, y1, x2, y2, warna, tebal, hasil, op) {
      return '<line' + (hasil ? ' class="jmi-hasil"' : "") + ' x1="' + h.b1(x1) + '" y1="' + h.b1(y1) + '" x2="' + h.b1(x2) + '" y2="' + h.b1(y2) +
        '" stroke="' + h.w(warna) + '" stroke-width="' + tebal + '" stroke-linecap="round"' + (op ? ' stroke-opacity="' + op + '"' : "") + "></line>";
    }
    function bul(x, y, r, isi, warna, tebal, hasil) {
      return '<circle' + (hasil ? ' class="jmi-hasil"' : "") + ' cx="' + h.b1(x) + '" cy="' + h.b1(y) + '" r="' + r + '" fill="' + (isi ? h.w(isi) : "none") +
        '" stroke="' + h.w(warna) + '" stroke-width="' + tebal + '"></circle>';
    }
    function segi(pts, warna, hasil) {
      return '<polygon' + (hasil ? ' class="jmi-hasil"' : "") + ' points="' + pts.map(function (p) { return h.b1(p[0]) + "," + h.b1(p[1]); }).join(" ") +
        '" fill="' + h.w(warna) + '"></polygon>';
    }

    /* Garis nombor: tanda pada setiap dl, label pada setiap lb (gandaan). */
    function paksi(X, y, lo, hi, dl, lb, labelY) {
      var o = h.garis(X(lo) - 6, y, X(hi) + 6, y, { warna: "tinta3", tebal: 1.5 });
      var n = Math.round((hi - lo) / dl), i, v;
      for (i = 0; i <= n; i++) {
        v = lo + i * dl;
        o += h.garis(X(v), y - 3, X(v), y + 3, { warna: "tinta3", tebal: 1 });
      }
      if (labelY) {
        for (i = 0; i <= n; i++) {
          v = lo + i * dl;
          if (Math.abs(Math.round(v / lb) * lb - v) < 1e-9) o += teks(X(v), labelY, fm(v), { tengah: true, saiz: 11, warna: "tinta3" });
        }
      }
      return o;
    }

    /* Sinar daripada sempadan k ke arah simbol s. Bulatan kosong jika sempadan tidak termasuk. */
    function sinar(X, y, s, k, warna, lo, hi, hasil) {
      var arah = kanan(s), o = "";
      var xk = X(Math.max(lo - 1, Math.min(hi + 1, k)));
      var hujung = arah ? X(hi) + 3 : X(lo) - 3;
      var ada = arah ? k <= hi + 1e-9 : k >= lo - 1e-9;
      if (!ada) return "";
      if (arah ? xk < hujung : xk > hujung) o += gar(xk, y, hujung, y, warna, 6, hasil, 0.4);
      var tip = arah ? hujung + 8 : hujung - 8;
      o += segi([[hujung, y - 6], [tip, y], [hujung, y + 6]], warna, hasil);
      if (k >= lo - 1e-9 && k <= hi + 1e-9) o += bul(xk, y, 6, tutup(s) ? warna : "kertas", warna, 2.5, hasil);
      return o;
    }
    function butir(c) {
      var lo = c.lo != null ? c.lo : -8, hi = c.hi != null ? c.hi : 8, dl = c.dl || 1, lb = c.lb || 2;
      return { lo: lo, hi: hi, dl: dl, lb: lb, X: skala(lo, hi), n: Math.round((hi - lo) / dl) };
    }
    function titikGaris(a, s, k) {
      var out = [], i, v;
      for (i = 0; i <= a.n; i++) { v = a.lo + i * a.dl; if (padan(s, v, k)) out.push(Math.round(v * 1000) / 1000); }
      return out;
    }
    function contoh(a, s, k) {
      var t = titikGaris(a, s, k);
      if (!t.length) return "";
      var dekat = kanan(s) ? t.slice(0, 3) : t.slice(-3).reverse();
      return dekat.map(fm).join(", ") + (t.length > 3 ? ", ..." : "");
    }
    function kotakLegenda(y) {
      var o = bul(16, y - 4, 5, "kertas", "tinta", 2, false) + teks(28, y, "kosong: sempadan tidak termasuk", { saiz: 11, warna: "tinta2" });
      o += bul(16, y + 14, 5, "tinta", "tinta", 2, false) + teks(28, y + 18, "penuh: sempadan termasuk", { saiz: 11, warna: "tinta2" });
      return o;
    }
    function ungkapan(a, b, nama) {
      var kof = a === 1 ? "" : a === -1 ? "-" : fm(a);
      return kof + nama + (b === 0 ? "" : b > 0 ? " + " + fm(b) : " - " + fm(-b));
    }
    function senaraiBulat(a, list) {
      if (!list.length) return "tiada";
      var p = list.slice(0, 5).map(fm).join(", ");
      return p + (list.length > 5 ? ", ..." : "");
    }

    var T = {};

    /* ------------------- mod garis ------------------- */
    T.garis = {
      mula: function (c) { return { k: c.i0 != null ? c.i0 : Math.floor(c.nilai.length / 2), s: c.s0 != null ? c.s0 : 0 }; },
      kawalan: function (c) {
        var sm = c.simbol || [0, 1, 2, 3];
        return [
          { k: "k", label: c.nama || "x", min: 0, maks: c.nilai.length - 1, teks: c.nilai.map(fm) },
          { k: "s", label: "tanda", min: 0, maks: sm.length - 1, teks: sm.map(function (i) { return SIM[i]; }) }
        ];
      },
      kira: function (c, s) {
        var a = butir(c), sm = c.simbol || [0, 1, 2, 3];
        var k = c.nilai[s.k], simbol = SIM[sm[s.s]], t = titikGaris(a, simbol, k);
        return { k: k, simbol: simbol, bilangan: t.length, jumlah: a.n + 1, titik: t, contoh: contoh(a, simbol, k) };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), a = butir(c), nama = c.nama || "x", y = 78, o = "";
        if (c.tajuk) o += teks(130, 14, c.tajuk, { tengah: true, saiz: 11, warna: "tinta2" });
        o += teks(130, 40, nama + " " + r.simbol + " " + fm(r.k), { tengah: true, saiz: 17, warna: "tinta", tebal: true });
        o += sinar(a.X, y, r.simbol, r.k, "hijau", a.lo, a.hi, true);
        o += paksi(a.X, y, a.lo, a.hi, a.dl, a.lb, y + 22);
        r.titik.forEach(function (v) { o += bul(a.X(v), y, 3.5, "hijau", "kertas", 1, true); });
        o += kotakLegenda(y + 46);
        o += teks(8, y + 90, "Contoh: " + (r.contoh || "tiada"), { saiz: 12, warna: "hijau", tebal: true, hasil: true });
        o += teks(8, y + 108, r.bilangan + " daripada " + r.jumlah + " titik memenuhi", { saiz: 11, warna: "tinta2", hasil: true });
        return h.svg(y + 120, o, "Garis nombor bagi " + nama + " " + r.simbol + " " + fm(r.k) + ", " + r.bilangan + " daripada " + r.jumlah + " titik memenuhi ketaksamaan");
      }
    };

    /* ------------------- mod sifat ------------------- */
    function opNama(op) {
      var n = op[1];
      return op[0] === "+" ? "tambah " + fm(n) : op[0] === "-" ? "tolak " + fm(n) : op[0] === "*" ? "darab " + fm(n) : "bahagi " + fm(n);
    }
    function opLaku(v, op) {
      var n = op[1];
      return op[0] === "+" ? v + n : op[0] === "-" ? v - n : op[0] === "*" ? v * n : v / n;
    }
    T.sifat = {
      mula: function (c) { return { o: c.o0 || 0 }; },
      kawalan: function (c) { return [{ k: "o", label: "operasi", min: 0, maks: c.ops.length - 1, teks: c.ops.map(opNama) }]; },
      kira: function (c, s) {
        var op = c.ops[s.o], a2 = opLaku(c.a, op), b2 = opLaku(c.b, op), sim = sekeliling(a2, b2);
        return { a: c.a, b: c.b, a2: a2, b2: b2, simbol: sim, bertukar: sim !== "<", operasi: opNama(op) };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), J = c.julat || 12, X = skala(-J, J), lb = c.lb || 4, o = "";
        function baris(y, av, bv, tanda, hasil) {
          var j = paksi(X, y, -J, J, 1, lb, y + 20);
          function lbl(v, nama, warna) {
            var x = Math.max(24, Math.min(236, X(v)));
            return teks(x, y - 12, nama + "=" + fm(v), { tengah: true, saiz: 11, warna: warna, tebal: true, hasil: hasil });
          }
          j += bul(X(av), y, 5.5, "merah", "kertas", 1.5, hasil) + bul(X(bv), y, 5.5, "ungu", "kertas", 1.5, hasil);
          j += lbl(av, "a", "merah") + lbl(bv, "b", "ungu");
          return j;
        }
        o += teks(8, 20, "Asal:  a " + "<" + " b", { saiz: 13, warna: "tinta", tebal: true });
        o += baris(56, r.a, r.b, "<", false);
        o += teks(8, 104, "Kedua-dua belah " + r.operasi, { saiz: 12, warna: "tinta", tebal: true });
        o += teks(8, 122, "Selepas:  " + fm(r.a2) + " " + r.simbol + " " + fm(r.b2), { saiz: 13, warna: "tinta", tebal: true, hasil: true });
        o += baris(158, r.a2, r.b2, r.simbol, true);
        o += teks(8, 196, r.bertukar ? "Tanda BERTUKAR: a " + r.simbol + " b" : "Tanda kekal: a " + r.simbol + " b", { saiz: 13, warna: r.bertukar ? "merah" : "hijau", tebal: true, hasil: true });
        return h.svg(208, o, "Garis nombor bagi a = " + fm(r.a) + " dan b = " + fm(r.b) + " sebelum dan selepas kedua-dua belah " + r.operasi + "; selepas itu a " + r.simbol + " b");
      }
    };

    /* ------------------- mod uji ------------------- */
    T.uji = {
      mula: function (c) { return { x: c.x0 != null ? c.x0 : Math.round(butir(c).n / 2) }; },
      kawalan: function (c) {
        var a = butir(c), t = [], i;
        for (i = 0; i <= a.n; i++) t.push(fm(a.lo + i * a.dl));
        return [{ k: "x", label: c.nama || "x", min: 0, maks: a.n, teks: t }];
      },
      kira: function (c, s) {
        var a = butir(c), x = a.lo + s.x * a.dl, nilai = c.a * x + c.b;
        var sempadan = (c.c - c.b) / c.a, simbolX = c.a > 0 ? c.s : tandaTerbalik(c.s);
        return { x: x, nilai: nilai, betul: padan(c.s, nilai, c.c), sempadan: sempadan, simbolX: simbolX };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), a = butir(c), nama = c.nama || "x", y = 76, o = "";
        o += teks(130, 26, ungkapan(c.a, c.b, nama) + " " + c.s + " " + fm(c.c), { tengah: true, saiz: 16, warna: "tinta", tebal: true });
        o += sinar(a.X, y, r.simbolX, r.sempadan, "hijau", a.lo, a.hi, true);
        o += paksi(a.X, y, a.lo, a.hi, a.dl, a.lb, y + 22);
        o += bul(a.X(r.x), y, 7, r.betul ? "hijau" : "merah", "kertas", 2, false);
        o += teks(Math.max(24, Math.min(236, a.X(r.x))), y - 14, nama + "=" + fm(r.x), { tengah: true, saiz: 11, warna: "tinta", tebal: true });
        o += teks(8, y + 52, "Bila " + nama + " = " + fm(r.x) + ", ungkapan = " + fm(r.nilai), { saiz: 12, warna: "tinta" });
        o += teks(8, y + 72, fm(r.nilai) + " " + c.s + " " + fm(c.c) + " ?  " + (r.betul ? "BETUL" : "SALAH"), { saiz: 13, warna: r.betul ? "hijau" : "merah", tebal: true });
        o += teks(8, y + 96, "Penyelesaian: " + nama + " " + r.simbolX + " " + fm(r.sempadan), { saiz: 12, warna: "hijau", tebal: true, hasil: true });
        return h.svg(y + 108, o, "Uji nilai " + nama + " = " + fm(r.x) + " dalam ketaksamaan " + ungkapan(c.a, c.b, nama) + " " + c.s + " " + fm(c.c) + ": " + (r.betul ? "betul" : "salah"));
      }
    };

    /* ------------------- mod serentak ------------------- */
    function selesaiSerentak(a, cs) {
      var bawah = null, atas = null;
      cs.forEach(function (q) {
        if (kanan(q.s)) {
          if (bawah === null || q.v > bawah.v + 1e-9 || (Math.abs(q.v - bawah.v) < 1e-9 && !tutup(q.s))) bawah = { v: q.v, tutup: tutup(q.s) };
        } else if (atas === null || q.v < atas.v - 1e-9 || (Math.abs(q.v - atas.v) < 1e-9 && !tutup(q.s))) atas = { v: q.v, tutup: tutup(q.s) };
      });
      var ada = true;
      if (bawah && atas) ada = bawah.v < atas.v - 1e-9 || (Math.abs(bawah.v - atas.v) < 1e-9 && bawah.tutup && atas.tutup);
      var bulat = [], i, v;
      if (ada) for (i = 0; i <= a.n; i++) {
        v = Math.round((a.lo + i * a.dl) * 1000) / 1000;
        if (cs.every(function (q) { return padan(q.s, v, q.v); })) bulat.push(v);
      }
      return { bawah: bawah, atas: atas, ada: ada, bulat: bulat };
    }
    function teksSelesai(nama, r) {
      if (!r.ada) return "tiada penyelesaian";
      if (r.bawah && r.atas) return fm(r.bawah.v) + (r.bawah.tutup ? " ≤ " : " < ") + nama + (r.atas.tutup ? " ≤ " : " < ") + fm(r.atas.v);
      if (r.bawah) return nama + (r.bawah.tutup ? " ≥ " : " > ") + fm(r.bawah.v);
      return nama + (r.atas.tutup ? " ≤ " : " < ") + fm(r.atas.v);
    }
    T.serentak = {
      mula: function (c) { return { p: c.p0 != null ? c.p0 : 0, q: c.q0 != null ? c.q0 : c.q.length - 1 }; },
      kawalan: function (c) {
        return [
          { k: "p", label: "sempadan 1", min: 0, maks: c.p.length - 1, teks: c.p.map(fm) },
          { k: "q", label: "sempadan 2", min: 0, maks: c.q.length - 1, teks: c.q.map(fm) }
        ];
      },
      kira: function (c, s) {
        var a = butir(c), p = c.p[s.p], q = c.q[s.q], r = selesaiSerentak(a, [{ s: c.s1, v: p }, { s: c.s2, v: q }]);
        r.p = p; r.q = q; r.teks = teksSelesai(c.nama || "x", r);
        return r;
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), a = butir(c), nama = c.nama || "x", o = "", y1 = 62, y2 = 100, y3 = 146;
        o += teks(130, 22, nama + " " + c.s1 + " " + fm(r.p) + "   dan   " + nama + " " + c.s2 + " " + fm(r.q), { tengah: true, saiz: 14, warna: "tinta", tebal: true });
        function nombor(v, y, warna) {
          return teks(Math.max(16, Math.min(244, a.X(v))), y - 12, fm(v), { tengah: true, saiz: 11, warna: warna, tebal: true });
        }
        o += paksi(a.X, y1, a.lo, a.hi, a.dl, a.lb, 0) + sinar(a.X, y1, c.s1, r.p, "hijau", a.lo, a.hi, false) + nombor(r.p, y1, "hijau");
        o += paksi(a.X, y2, a.lo, a.hi, a.dl, a.lb, 0) + sinar(a.X, y2, c.s2, r.q, "ungu", a.lo, a.hi, false) + nombor(r.q, y2, "ungu");
        o += paksi(a.X, y3, a.lo, a.hi, a.dl, a.lb, y3 + 20);
        if (r.ada) {
          var lo3 = r.bawah ? r.bawah.v : a.lo - 1, hi3 = r.atas ? r.atas.v : a.hi + 1;
          var xa = a.X(Math.max(a.lo - 1, lo3)), xb = a.X(Math.min(a.hi + 1, hi3));
          o += gar(xa, y3, xb, y3, "kuning", 7, true, 0.55);
          if (r.bawah) o += bul(a.X(r.bawah.v), y3, 6, r.bawah.tutup ? "kuning" : "kertas", "kuning", 2.5, true);
          else o += segi([[X0 - 3, y3 - 6], [X0 - 11, y3], [X0 - 3, y3 + 6]], "kuning", true);
          if (r.atas) o += bul(a.X(r.atas.v), y3, 6, r.atas.tutup ? "kuning" : "kertas", "kuning", 2.5, true);
          else o += segi([[X1 + 3, y3 - 6], [X1 + 11, y3], [X1 + 3, y3 + 6]], "kuning", true);
        }
        o += teks(8, y3 + 46, "Penyelesaian: " + r.teks, { saiz: 12, warna: r.ada ? "tinta" : "merah", tebal: true, hasil: true });
        o += teks(8, y3 + 64, "Nombor bulat: " + senaraiBulat(a, r.bulat), { saiz: 11, warna: "tinta2", hasil: true });
        return h.svg(y3 + 76, o, "Dua ketaksamaan serentak " + nama + " " + c.s1 + " " + fm(r.p) + " dan " + nama + " " + c.s2 + " " + fm(r.q) + " pada garis nombor; penyelesaian " + r.teks);
      }
    };

    /* ------------------- daftar widget ------------------- */
    W.t1ketaksamaan = {
      mula: function (c) { return T[c.mod].mula(c); },
      kawalan: function (c) { return T[c.mod].kawalan(c); },
      kira: function (c, s) { return T[c.mod].kira(c, s); },
      lukis: function (c, s) { return T[c.mod].lukis.call(T[c.mod], c, s); }
    };
  }
  if (typeof module !== "undefined") module.exports = pasang; else pasang(window.JMI);
})();
