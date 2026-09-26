/* Widget Tingkatan 2 Bab 7 Koordinat: satah Cartes interaktif.
   Satu widget `t2kor` dengan enam mod (spec.mod):
   - jarak    : titik B digerakkan (gelongsor x dan y), segi tiga bersudut tegak dan jarak AB
   - tengah   : titik B digerakkan, titik tengah M bagi AB dikira
   - kedua    : jarak dan titik tengah sekali gus
   - peta     : pilih dua tempat pada peta (gelongsor dari / ke), jarak dan titik tengah
   - segitiga : titik C digerakkan, panjang tiga sisi dan jenis segi tiga
   - cari     : A dan titik tengah M diberi, gerakkan B sehingga titik tengah AB sama dengan M
   Semua nombor dikira daripada koordinat. Unsur jawapan bertanda hasil, jadi
   tersembunyi dalam mod cabar. Fail ini didaftarkan oleh interaktif.js
   (Node: readdirSync widget-*.js; pelayar: tag <script> selepas interaktif.js). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks;
    var R0 = 5, U = 21, OX = 130, OY = 126, BARIS = 254, JARAK = 17;
    var JULAT = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

    function bul(n) { var r = Math.round(n * 100) / 100; return r === 0 ? 0 : r; }
    function fmt(n) { return String(bul(n)); }
    function tp(p) { return "(" + fmt(p[0]) + ", " + fmt(p[1]) + ")"; }
    function px(x) { return OX + x * U; }
    function py(y) { return OY - y * U; }
    function sgn(n) { return n > 0 ? 1 : n < 0 ? -1 : 0; }
    function jumlah(a, b) { return fmt(a) + " + " + (b < 0 ? "(" + fmt(b) + ")" : fmt(b)); }
    function bulat(n) { var r = Math.round(Math.sqrt(n)); return r * r === n; }
    /* Jarak sebagai punca: 100 -> "10", 52 -> "√52 ≈ 7.21". */
    function akar(n) { return bulat(n) ? String(Math.round(Math.sqrt(n))) : "√" + n + " ≈ " + fmt(Math.sqrt(n)); }
    function nilai(c, k) { return (c[k] && c[k].length) ? c[k] : JULAT; }
    function idx(a, v) { var n = a.indexOf(v); return n < 0 ? Math.floor(a.length / 2) : n; }
    function di(a, i) { return a[Math.max(0, Math.min(a.length - 1, i))]; }

    /* ----- kotak teks untuk mengelak label bertindih (sama anggaran dengan bina.js) ----- */
    function kt(x, y, isi, saiz, jenis) {
      var w = String(isi).length * saiz * 0.6;
      var m = jenis === "tengah" ? x - w / 2 : jenis === "kanan" ? x - w : x;
      return { mula: m, hujung: m + w, atas: y - saiz * 0.78, bawah: y + saiz * 0.24 };
    }
    function tindih(a, b) {
      return Math.min(a.hujung, b.hujung) - Math.max(a.mula, b.mula) > 1.5 &&
             Math.min(a.bawah, b.bawah) - Math.max(a.atas, b.atas) > 1.5;
    }
    /* Label huruf di sebelah titik: cuba beberapa kedudukan sehingga bebas. */
    function label(isi, x, y, warna, kot, hasil) {
      var w = String(isi).length * 13 * 0.6;
      var opsi = [[8, -6], [-8 - w, -6], [8, 17], [-8 - w, 17], [-w / 2, -11], [-w / 2, 22], [10, 4], [-10 - w, 4]];
      var pilih = null, i;
      for (i = 0; i < opsi.length && !pilih; i++) {
        var bx = x + opsi[i][0], by = y + opsi[i][1], b = kt(bx, by, isi, 13, "mula"), ok = true, j;
        if (b.mula < 2 || b.hujung > 258 || b.atas < 2 || b.bawah > 248) ok = false;
        for (j = 0; ok && j < kot.length; j++) if (tindih(b, kot[j])) ok = false;
        if (ok) pilih = { x: bx, y: by, b: b };
      }
      if (!pilih) { pilih = { x: x + 8, y: y - 6, b: kt(x + 8, y - 6, isi, 13, "mula") }; }
      kot.push(pilih.b);
      return teks(pilih.x, pilih.y, isi, { saiz: 13, warna: warna, tebal: true, hasil: hasil });
    }

    /* ----- unsur lukisan ----- */
    function sambung(x1, y1, x2, y2, warna, tebal, hasil, putus) {
      return '<line' + (hasil ? ' class="jmi-hasil"' : "") + ' x1="' + h.b1(px(x1)) + '" y1="' + h.b1(py(y1)) + '" x2="' + h.b1(px(x2)) +
        '" y2="' + h.b1(py(y2)) + '" stroke="' + h.w(warna) + '" stroke-width="' + tebal + '" stroke-linecap="round"' +
        (putus ? ' stroke-dasharray="' + putus + '"' : "") + "></line>";
    }
    function titik(x, y, warna, hasil, r) {
      return '<circle' + (hasil ? ' class="jmi-hasil"' : "") + ' cx="' + h.b1(px(x)) + '" cy="' + h.b1(py(y)) + '" r="' + (r || 5) + '" fill="' + h.w(warna) +
        '" stroke="' + h.w("tinta") + '" stroke-width="1.5"></circle>';
    }
    function cincin(x, y, warna, r) {
      return '<circle cx="' + h.b1(px(x)) + '" cy="' + h.b1(py(y)) + '" r="' + (r || 8) + '" fill="none" stroke="' + h.w(warna) +
        '" stroke-width="2.5" stroke-dasharray="3 3"></circle>';
    }
    function satah(kot) {
      var i, o = h.kotak(px(-R0), py(R0), 2 * R0 * U, 2 * R0 * U, { garis: "garis2", bulat: 0, tebal: 1 });
      for (i = -R0 + 1; i < R0; i++) {
        if (i === 0) continue;
        o += h.garis(px(i), py(R0), px(i), py(-R0), { warna: "garis", tebal: 0.6 });
        o += h.garis(px(-R0), py(i), px(R0), py(i), { warna: "garis", tebal: 0.6 });
      }
      o += h.garis(px(-R0), OY, px(R0), OY, { warna: "tinta3", tebal: 1.5 });
      o += h.garis(OX, py(R0), OX, py(-R0), { warna: "tinta3", tebal: 1.5 });
      for (i = -R0; i <= R0; i++) {
        if (i === 0) continue;
        o += teks(px(i), OY + 13, String(i), { tengah: true, saiz: 11, warna: "tinta3" });
        kot.push(kt(px(i), OY + 13, String(i), 11, "tengah"));
        o += teks(OX - 5, py(i) + 4, String(i), { kanan: true, saiz: 11, warna: "tinta3" });
        kot.push(kt(OX - 5, py(i) + 4, String(i), 11, "kanan"));
      }
      o += teks(px(R0) + 4, OY + 4, "x", { saiz: 12, warna: "tinta", tebal: true });
      kot.push(kt(px(R0) + 4, OY + 4, "x", 12, "mula"));
      o += teks(OX + 6, py(R0) - 5, "y", { saiz: 12, warna: "tinta", tebal: true });
      kot.push(kt(OX + 6, py(R0) - 5, "y", 12, "mula"));
      return o;
    }
    function baris(n, t, o) {
      o = o || {};
      return teks(8, BARIS + n * JARAK, t, { saiz: o.saiz || 12, warna: o.warna || "tinta", tebal: o.tebal, hasil: o.hasil });
    }
    function tinggi(nb) { return BARIS + (nb - 1) * JARAK + 12; }
    function sudutTegak(cx, cy, hx, hy) {
      /* penanda sudut tegak di (cx,cy): hx, hy ialah arah unit (piksel) sepanjang dua kaki. */
      var a = 7;
      return h.laluan("M" + h.b1(px(cx) + hx * a) + " " + h.b1(py(cy)) + " L" + h.b1(px(cx) + hx * a) + " " + h.b1(py(cy) + hy * a) +
        " L" + h.b1(px(cx)) + " " + h.b1(py(cy) + hy * a), { warna: "tinta3", tebal: 1.3 });
    }
    /* Baris rumus dengan indeks 2: d^2 = dx^2 + dy^2. */
    function rumusJarak(y, dx, dy, d2) {
      return h.ungkap(130, y, ["d", { p: "2" }, " = " + Math.abs(dx), { p: "2" }, " + " + Math.abs(dy), { p: "2" }, " = " + d2], { saiz: 12, warna: "tinta", tebal: true, hasil: true });
    }

    function titikB(c, s) { return [di(nilai(c, "xs"), s.a), di(nilai(c, "ys"), s.b)]; }
    function tengahAB(A, B) { return [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2]; }

    W.t2kor = {
      mula: function (c) {
        var mod = c.mod;
        if (mod === "peta") return { a: c.dari == null ? 0 : c.dari, b: c.ke == null ? 1 : c.ke };
        var B = c.B || [3, 2];
        return { a: idx(nilai(c, "xs"), B[0]), b: idx(nilai(c, "ys"), B[1]) };
      },
      kawalan: function (c) {
        var mod = c.mod;
        if (mod === "peta") {
          var n = c.tempat.map(function (t) { return t.k; });
          return [{ k: "a", label: "dari", min: 0, maks: n.length - 1, teks: n },
                  { k: "b", label: "ke", min: 0, maks: n.length - 1, teks: n }];
        }
        var nm = mod === "segitiga" ? "C" : "B", xs = nilai(c, "xs"), ys = nilai(c, "ys");
        return [{ k: "a", label: "x bagi " + nm, min: 0, maks: xs.length - 1, teks: xs.map(fmt) },
                { k: "b", label: "y bagi " + nm, min: 0, maks: ys.length - 1, teks: ys.map(fmt) }];
      },
      kira: function (c, s) {
        var mod = c.mod, r = {}, A, B, T;
        if (mod === "peta") {
          T = c.tempat; A = [T[s.a].x, T[s.a].y]; B = [T[s.b].x, T[s.b].y];
        } else if (mod === "segitiga") {
          A = c.A; B = c.B; r.C = titikB(c, s);
          r.ab2 = Math.pow(B[0] - A[0], 2) + Math.pow(B[1] - A[1], 2);
          r.ac2 = Math.pow(r.C[0] - A[0], 2) + Math.pow(r.C[1] - A[1], 2);
          r.bc2 = Math.pow(r.C[0] - B[0], 2) + Math.pow(r.C[1] - B[1], 2);
          r.luas2 = Math.abs((B[0] - A[0]) * (r.C[1] - A[1]) - (B[1] - A[1]) * (r.C[0] - A[0]));
          return r;
        } else { A = c.A; B = titikB(c, s); }
        r.A = A; r.B = B; r.dx = B[0] - A[0]; r.dy = B[1] - A[1];
        r.d2 = r.dx * r.dx + r.dy * r.dy; r.d = Math.sqrt(r.d2); r.M = tengahAB(A, B);
        if (mod === "peta") r.km = r.d * (c.skala || 1);
        if (mod === "cari") { r.sepadan = r.M[0] === c.M[0] && r.M[1] === c.M[1]; }
        return r;
      },
      lukis: function (c, s) {
        var mod = c.mod, r = this.kira(c, s), kot = [], isi = "", n = 0, A, B, M;
        isi += satah(kot);

        if (mod === "jarak" || mod === "tengah" || mod === "kedua") {
          A = r.A; B = r.B; M = r.M;
          if (mod !== "tengah" && r.dx !== 0) isi += sambung(A[0], A[1], B[0], A[1], "hijau", 2, false, "4 3");
          if (mod !== "tengah" && r.dy !== 0) isi += sambung(B[0], A[1], B[0], B[1], "merah", 2, false, "4 3");
          if (mod !== "tengah" && r.dx !== 0 && r.dy !== 0) isi += sudutTegak(B[0], A[1], -sgn(r.dx), -sgn(r.dy));
          isi += sambung(A[0], A[1], B[0], B[1], "ungu", 3);
          isi += titik(A[0], A[1], "hijau", false) + titik(B[0], B[1], "merah", false);
          if (mod !== "jarak") isi += titik(M[0], M[1], "kuning", true, 5);
          isi += label("A", px(A[0]), py(A[1]), "hijau", kot, false);
          if (r.dx !== 0 || r.dy !== 0) isi += label("B", px(B[0]), py(B[1]), "merah", kot, false);
          if (mod !== "jarak" && (r.dx !== 0 || r.dy !== 0)) isi += label("M", px(M[0]), py(M[1]), "tinta", kot, true);
          isi += baris(n++, "A" + tp(A) + "  B" + tp(B));
          if (mod !== "tengah") {
            isi += baris(n++, "dx = " + Math.abs(r.dx) + "   dy = " + Math.abs(r.dy));
            isi += rumusJarak(BARIS + n * JARAK, r.dx, r.dy, r.d2); n++;
            isi += baris(n++, "d = " + akar(r.d2), { tebal: true, hasil: true, warna: "ungu" });
          }
          if (mod !== "jarak") {
            isi += baris(n++, "x = (" + jumlah(A[0], B[0]) + ") / 2 = " + fmt(M[0]), { hasil: true });
            isi += baris(n++, "y = (" + jumlah(A[1], B[1]) + ") / 2 = " + fmt(M[1]), { hasil: true });
            isi += baris(n++, "M = " + tp(M), { tebal: true, hasil: true, warna: "tinta" });
          }
          return h.svg(tinggi(n), isi, "Rajah satah Cartes dengan titik A " + tp(A) + " dan B " + tp(B) + (mod === "tengah" ? "; titik tengah AB ialah " + tp(M) : "; jarak AB ialah " + akar(r.d2)));
        }

        if (mod === "peta") {
          var T = c.tempat, i;
          A = r.A; B = r.B; M = r.M;
          if (s.a !== s.b) isi += sambung(A[0], A[1], B[0], B[1], "ungu", 3);
          for (i = 0; i < T.length; i++) {
            var pilih = i === s.a || i === s.b;
            isi += titik(T[i].x, T[i].y, i === s.a ? "hijau" : i === s.b ? "merah" : "kertas2", false, pilih ? 5 : 4);
          }
          if (s.a !== s.b) isi += titik(M[0], M[1], "kuning", true, 4);
          for (i = 0; i < T.length; i++) isi += label(T[i].k, px(T[i].x), py(T[i].y), i === s.a ? "hijau" : i === s.b ? "merah" : "tinta", kot, false);
          isi += baris(n++, T[s.a].k + " " + T[s.a].n + " " + tp(A));
          isi += baris(n++, T[s.b].k + " " + T[s.b].n + " " + tp(B));
          isi += baris(n++, "Jarak = " + (c.skala ? fmt(r.km) + " " + (c.unit || "km") : akar(r.d2) + " unit"), { tebal: true, hasil: true, warna: "ungu" });
          isi += baris(n++, "Titik tengah = " + tp(M), { hasil: true });
          return h.svg(tinggi(n), isi, "Peta pada satah Cartes dengan " + T.length + " tempat berlabel " + T.map(function (t) { return t.k; }).join(", ") + "; jarak dan titik tengah antara dua tempat dipilih");
        }

        if (mod === "segitiga") {
          A = c.A; B = c.B; var C = r.C;
          isi += sambung(A[0], A[1], B[0], B[1], "ungu", 3);
          isi += sambung(A[0], A[1], C[0], C[1], "hijau", 3);
          isi += sambung(B[0], B[1], C[0], C[1], "merah", 3);
          isi += titik(A[0], A[1], "kertas", false) + titik(B[0], B[1], "kertas", false) + titik(C[0], C[1], "kuning", false);
          isi += label("A", px(A[0]), py(A[1]), "tinta", kot, false);
          isi += label("B", px(B[0]), py(B[1]), "tinta", kot, false);
          if (!(C[0] === A[0] && C[1] === A[1]) && !(C[0] === B[0] && C[1] === B[1])) isi += label("C", px(C[0]), py(C[1]), "tinta", kot, false);
          isi += baris(n++, "A" + tp(A) + " B" + tp(B) + " C" + tp(C), { saiz: 11 });
          isi += h.ungkap(130, BARIS + n * JARAK, ["AB", { p: "2" }, " = " + r.ab2 + "  AC", { p: "2" }, " = " + r.ac2 + "  BC", { p: "2" }, " = " + r.bc2], { saiz: 12, warna: "tinta", tebal: true, hasil: true }); n++;
          var jenis, k = [r.ab2, r.ac2, r.bc2].slice().sort(function (p, q) { return p - q; });
          if (r.luas2 === 0) jenis = "bukan segi tiga (satu garis lurus)";
          else if (r.ab2 === r.ac2 && r.ac2 === r.bc2) jenis = "sama sisi";
          else {
            var kaki = r.ab2 === r.ac2 ? "AB = AC" : r.ab2 === r.bc2 ? "AB = BC" : r.ac2 === r.bc2 ? "AC = BC" : "";
            jenis = kaki ? "sama kaki (" + kaki + ")" : "tiga sisi berbeza";
            if (k[0] + k[1] === k[2]) jenis += ", bersudut tegak";
          }
          isi += baris(n++, jenis, { tebal: true, hasil: true, warna: "ungu", saiz: jenis.length > 30 ? 11 : 12 });
          return h.svg(tinggi(n), isi, "Rajah satah Cartes dengan segi tiga ABC; titik C boleh digerakkan dan jenis segi tiga ditentukan daripada panjang sisi");
        }

        /* cari */
        A = c.A; B = r.B; M = c.M;
        var Mb = r.M;
        isi += sambung(A[0], A[1], B[0], B[1], "ungu", 3);
        isi += cincin(M[0], M[1], "kuning", 9) + titik(M[0], M[1], "kuning", false, 4);
        isi += titik(A[0], A[1], "hijau", false) + titik(B[0], B[1], "merah", false);
        if (!r.sepadan) isi += '<circle cx="' + h.b1(px(Mb[0])) + '" cy="' + h.b1(py(Mb[1])) + '" r="3" fill="' + h.w("tinta") + '"></circle>';
        isi += label("A", px(A[0]), py(A[1]), "hijau", kot, false);
        isi += label("B", px(B[0]), py(B[1]), "merah", kot, false);
        isi += label("M", px(M[0]), py(M[1]), "tinta", kot, false);
        isi += baris(n++, "A" + tp(A) + "  M" + tp(M) + "  B" + tp(B));
        isi += baris(n++, "Titik tengah AB = " + tp(Mb), { hasil: true });
        isi += baris(n++, r.sepadan ? "Sepadan! Titik tengah AB ialah M" : "Belum sama dengan M, cuba lagi", { tebal: true, hasil: true, warna: r.sepadan ? "hijau" : "merah" });
        return h.svg(tinggi(n), isi, "Rajah satah Cartes dengan titik A " + tp(A) + " dan titik tengah M " + tp(M) + "; gerakkan B supaya titik tengah AB sama dengan M");
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
