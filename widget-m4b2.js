/* Widget Tingkatan 4 Bab 2 Asas Nombor. Satu widget `t4asas` dengan enam mod (spec.mod):
   - blok   : nombor N (asas 10) dikumpul mengikut asas b. Setiap lajur nilai tempat menunjukkan
              bilangan blok = digit. Gelongsor N, cip asas. Spek: nMin, nMaks, asas [..].
   - nilai  : nombor dalam asas b diurai kepada nilai tempat, nilai digit dan nilai nombor.
              Cip memilih nombor. Spek: senarai [{d:"2341", b:5}].
   - tukar  : penukaran asas 10 ke asas b dengan pembahagian berulang (tangga baki).
              Gelongsor N daripada senarai, cip asas. Spek: nSet, asas.
   - tambah : tambah atau tolak lajur demi lajur dalam asas b, dengan bawa/pinjam.
              Cip pasangan dan cip operasi. Spek: pasangan [{x:"34", y:"23", b:5}].
   - lampu  : n mentol sebagai digit asas 2 (hidup = 1). Gelongsor N. Spek: bit.
   - jambatan: nombor asas p ditukar ke asas 10, kemudian ke asas q. Cip nombor dan cip asas q.
              Spek: senarai [{d, b}], asas [..].
   Semua nombor dikira daripada formula. Unsur jawapan bertanda jmi-hasil (tersembunyi dalam mod cabar). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;

    function keAsas(n, b) { if (n === 0) return "0"; var o = ""; while (n > 0) { o = (n % b) + o; n = Math.floor(n / b); } return o; }
    function dariAsas(d, b) {
      var v = 0, i;
      for (i = 0; i < d.length; i++) { var g = +d[i]; if (!(g >= 0 && g < b)) throw new Error("digit " + d[i] + " tidak sah dalam asas " + b); v = v * b + g; }
      return v;
    }
    function tangga(n, b) { var o = []; while (n > 0) { o.push({ n: n, q: Math.floor(n / b), r: n % b }); n = Math.floor(n / b); } return o; }

    /* Baris teks dengan subskrip asas: segs = ["teks", {b:"5"}, ...], rata kiri atau tengah. */
    function lebarSeg(segs, sz) {
      var j = 0; segs.forEach(function (g) { j += typeof g === "string" ? g.length * sz * 0.6 : String(g.b).length * 11 * 0.6; }); return j;
    }
    function baris(x, y, segs, o) {
      o = o || {};
      var sz = o.saiz || 13, out = "", lb = lebarSeg(segs, sz);
      if (o.tengah) x = x - lb / 2;
      segs.forEach(function (g) {
        if (typeof g === "string") { out += teks(x, y, g, { saiz: sz, warna: o.warna || "tinta", tebal: o.tebal, hasil: o.hasil }); x += g.length * sz * 0.6; }
        else { out += teks(x, y + 4, String(g.b), { saiz: 11, warna: o.warna || "tinta", tebal: o.tebal, hasil: o.hasil }); x += String(g.b).length * 11 * 0.6; }
      });
      return out;
    }
    function bulat(cx, cy, r, isi, tepi, kelas) {
      return '<circle' + (kelas ? ' class="' + kelas + '"' : "") + ' cx="' + b1(cx) + '" cy="' + b1(cy) + '" r="' + r + '" fill="' + h.w(isi) + '" stroke="' + h.w(tepi) + '" stroke-width="1.5"></circle>';
    }

    W.t4asas = {
      mula: function (c) {
        if (c.mod === "blok") return { n: c.nMin, b: 0 };
        if (c.mod === "nilai") return { i: 0 };
        if (c.mod === "tukar") return { n: 0, b: 0 };
        if (c.mod === "tambah") return { i: 0, op: 0 };
        if (c.mod === "lampu") return { n: 0 };
        if (c.mod === "jambatan") return { i: 0, b: 0 };
        throw new Error("mod t4asas tidak dikenali: " + c.mod);
      },
      kawalan: function (c) {
        var asasCip = function () { return { k: "b", label: "asas", min: 0, maks: c.asas.length - 1, teks: c.asas.map(String), pilih: true }; };
        if (c.mod === "blok") return [{ k: "n", label: "N (asas 10)", min: c.nMin, maks: c.nMaks }, asasCip()];
        if (c.mod === "nilai") return [{ k: "i", label: "nombor", min: 0, maks: c.senarai.length - 1, teks: c.senarai.map(function (x) { return x.d + " (asas " + x.b + ")"; }), pilih: true }];
        if (c.mod === "tukar") return [{ k: "n", label: "N (asas 10)", min: 0, maks: c.nSet.length - 1, teks: c.nSet.map(String) }, asasCip()];
        if (c.mod === "tambah") return [
          { k: "i", label: "soalan", min: 0, maks: c.pasangan.length - 1, teks: c.pasangan.map(function (p, i) { return String.fromCharCode(80) + (i + 1); }), pilih: true },
          { k: "op", label: "operasi", min: 0, maks: 1, teks: ["tambah +", "tolak −"], pilih: true }];
        if (c.mod === "lampu") return [{ k: "n", label: "N (asas 10)", min: 0, maks: Math.pow(2, c.bit) - 1 }];
        return [{ k: "i", label: "nombor", min: 0, maks: c.senarai.length - 1, teks: c.senarai.map(function (x) { return x.d + " (asas " + x.b + ")"; }), pilih: true },
          { k: "b", label: "tukar ke asas", min: 0, maks: c.asas.length - 1, teks: c.asas.map(String), pilih: true }];
      },
      kira: function (c, s) {
        if (c.mod === "blok") { var bb = c.asas[s.b]; return { n: s.n, b: bb, digit: keAsas(s.n, bb) }; }
        if (c.mod === "nilai") {
          var x = c.senarai[s.i], nd = x.d.length, bah = [];
          for (var i = 0; i < nd; i++) { var k = nd - 1 - i; bah.push({ digit: +x.d[i], tempat: Math.pow(x.b, k), kuasa: k, nilaiDigit: +x.d[i] * Math.pow(x.b, k) }); }
          return { d: x.d, b: x.b, bahagian: bah, nilai: dariAsas(x.d, x.b) };
        }
        if (c.mod === "tukar") { var N = c.nSet[s.n], B = c.asas[s.b]; return { n: N, b: B, langkah: tangga(N, B), hasil: keAsas(N, B) }; }
        if (c.mod === "tambah") {
          var p = c.pasangan[s.i], X = dariAsas(p.x, p.b), Y = dariAsas(p.y, p.b), R = s.op === 0 ? X + Y : X - Y;
          if (R < 0) throw new Error("tolak memberi nombor negatif");
          return { b: p.b, x: p.x, y: p.y, op: s.op === 0 ? "+" : "−", X: X, Y: Y, R: R, hasil: keAsas(R, p.b) };
        }
        if (c.mod === "lampu") { var d = keAsas(s.n, 2); while (d.length < c.bit) d = "0" + d; return { n: s.n, digit: d, hidup: d.split("").filter(function (z) { return z === "1"; }).length }; }
        var q = c.senarai[s.i], Bq = c.asas[s.b], v = dariAsas(q.d, q.b);
        return { d: q.d, b: q.b, nilai: v, ke: Bq, langkah: tangga(v, Bq), hasil: keAsas(v, Bq) };
      },
      lukis: function (c, s) {
        var r = W.t4asas.kira(c, s);
        if (c.mod === "blok") return lukisBlok(c, r);
        if (c.mod === "nilai") return lukisNilai(c, r);
        if (c.mod === "tukar") return lukisTukar(c, r);
        if (c.mod === "tambah") return lukisTambah(c, r);
        if (c.mod === "lampu") return lukisLampu(c, r);
        return lukisJambatan(c, r);
      }
    };

    function lukisBlok(c, r) {
      var o = "", b = r.b, dg = r.digit, n = dg.length, lajur = Math.max(n, 3);
      var lb = Math.min(60, 244 / lajur), x0 = (260 - lb * n) / 2, yT = 54, sel = 11, ruang = 13;
      o += teks(130, 22, r.n + " guli, kumpulan " + b, { tengah: true, saiz: 12, warna: "tinta", tebal: true });
      for (var i = 0; i < n; i++) {
        var k = n - 1 - i, cx = x0 + i * lb + lb / 2, g = +dg[i];
        o += h.kotak(x0 + i * lb + 2, 32, lb - 4, 112, { isi: i % 2 ? "kertas2" : "kertas", garis: "garis2", bulat: 6, tebal: 1 });
        o += teks(cx, yT - 4, String(Math.pow(b, k)), { tengah: true, saiz: 11, warna: "tinta3" });
        for (var j = 0; j < g; j++) {
          var lj = j % 2, bj = Math.floor(j / 2);
          o += '<g class="jmi-hasil">' + h.kotak(cx - sel - 1 + lj * (sel + 2), yT + 4 + bj * ruang, sel, sel, { isi: k === 0 ? "kuningLembut" : k === 1 ? "hijauLembut" : "lembayungLembut", garis: k === 0 ? "kuning" : k === 1 ? "hijau" : "ungu", bulat: 2, tebal: 1 }) + "</g>";
        }
        o += teks(cx, 136, String(g), { tengah: true, saiz: 16, warna: "ungu", tebal: true, hasil: true });
      }
      o += teks(8, 166, "Nilai tempat (atas) ialah kuasa " + b + ".", { saiz: 11, warna: "tinta2" });
      o += baris(130, 190, [String(r.n), { b: "10" }, " = " + dg, { b: String(b) }], { tengah: true, saiz: 15, warna: "merah", tebal: true, hasil: true });
      return h.svg(204, o, "Rajah " + r.n + " guli dikumpul mengikut asas " + b + "; digit setiap nilai tempat ialah bilangan kumpulan, memberi " + dg + " dalam asas " + b);
    }

    function lukisNilai(c, r) {
      var o = "", n = r.bahagian.length, lb = Math.min(50, 196 / n), x0 = 56 + (196 - lb * n) / 2;
      o += baris(130, 22, ["Nombor: " + r.d, { b: String(r.b) }], { tengah: true, saiz: 14, tebal: true });
      o += teks(8, 72, "Tempat", { saiz: 11, warna: "tinta3" });
      o += teks(8, 102, "Digit", { saiz: 11, warna: "tinta3" });
      o += teks(8, 136, "Nilai", { saiz: 11, warna: "tinta3" });
      r.bahagian.forEach(function (p, i) {
        var cx = x0 + i * lb + lb / 2;
        o += h.ungkap(cx, 72, [String(r.b), { p: String(p.kuasa) }], { saiz: 13, warna: "tinta2" });
        o += h.kotak(x0 + i * lb + 3, 80, lb - 6, 30, { isi: "lembayungLembut", garis: "ungu", bulat: 6 });
        o += teks(cx, 101, String(p.digit), { tengah: true, saiz: 16, warna: "tinta", tebal: true });
        o += teks(cx, 136, String(p.nilaiDigit), { tengah: true, saiz: 13, warna: "ungu", tebal: true, hasil: true });
      });
      o += teks(8, 166, "Nilai nombor = jumlah nilai digit", { saiz: 11, warna: "tinta2" });
      o += teks(8, 186, "= " + r.bahagian.map(function (p) { return p.nilaiDigit; }).join(" + "), { saiz: 12, warna: "tinta2", hasil: true });
      o += baris(8, 208, ["= " + r.nilai, { b: "10" }], { saiz: 15, warna: "merah", tebal: true, hasil: true });
      return h.svg(220, o, "Rajah nilai tempat, digit dan nilai digit bagi " + r.d + " asas " + r.b + "; nilai nombornya " + r.nilai + " dalam asas sepuluh");
    }

    function tanggaSvg(langkah, b, y0, tinggiBaris) {
      var o = "", xb = 60, xn = 76, xr = 168;
      langkah.forEach(function (L, i) {
        var y = y0 + i * tinggiBaris;
        o += teks(xb, y, String(b), { kanan: true, saiz: 13, warna: "tinta2" });
        o += h.garis(xb + 6, y - 14, xb + 6, y + 4, { warna: "tinta3", tebal: 1.2 });
        o += h.garis(xb + 6, y + 4, xb + 80, y + 4, { warna: "tinta3", tebal: 1.2 });
        o += teks(xn, y, String(L.n), { saiz: 13, warna: "tinta", tebal: true });
        o += teks(xr, y, "baki " + L.r, { saiz: 12, warna: "merah", tebal: true, hasil: true });
      });
      var yAkhir = y0 + langkah.length * tinggiBaris;
      o += teks(xn, yAkhir, "0", { saiz: 13, warna: "tinta3" });
      /* anak panah membaca baki dari bawah ke atas */
      o += '<g class="jmi-hasil">' + h.garis(240, yAkhir - tinggiBaris + 2, 240, y0 - 8, { warna: "merah", tebal: 2 }) +
        h.laluan("M240 " + b1(y0 - 14) + " L235 " + b1(y0 - 6) + " L245 " + b1(y0 - 6) + " Z", { isi: "merah", warna: "merah", tebal: 1 }) + "</g>";
      return { svg: o, y: yAkhir };
    }

    function lukisTukar(c, r) {
      var o = "", tb = r.langkah.length > 6 ? 18 : 20;
      o += baris(130, 22, ["Tukar " + r.n, { b: "10" }, " ke asas " + r.b], { tengah: true, saiz: 13, tebal: true });
      var T = tanggaSvg(r.langkah, r.b, 50, tb);
      o += T.svg;
      o += teks(8, T.y + 26, "Baca baki dari bawah ke atas", { saiz: 11, warna: "tinta2" });
      o += baris(130, T.y + 50, [String(r.n), { b: "10" }, " = " + r.hasil, { b: String(r.b) }], { tengah: true, saiz: 15, warna: "merah", tebal: true, hasil: true });
      return h.svg(T.y + 62, o, "Rajah pembahagian berulang " + r.n + " dengan " + r.b + "; baki dibaca dari bawah ke atas memberi " + r.hasil + " dalam asas " + r.b);
    }

    function lukisTambah(c, r) {
      var o = "", b = r.b, x = r.x, y = r.y, hasil = r.hasil;
      var n = Math.max(x.length, y.length, hasil.length), lb = 26, xR = 200;
      var X = x.split("").reverse(), Y = y.split("").reverse(), atas = [];
      /* bawa (tambah) atau pinjam (tolak), lajur demi lajur dari kanan */
      var simpan = 0, i;
      for (i = 0; i < n; i++) {
        var a = +(X[i] || 0), bb = +(Y[i] || 0);
        if (r.op === "+") { var j = a + bb + simpan; atas.push(simpan ? "1" : ""); simpan = j >= b ? 1 : 0; }
        else { var t = a - simpan - bb; atas.push(t < 0 ? "+" + b : ""); simpan = t < 0 ? 1 : 0; }
      }
      o += teks(130, 18, (r.op === "+" ? "Tambah" : "Tolak") + " dalam asas " + b, { tengah: true, saiz: 13, warna: "tinta", tebal: true });
      for (i = 0; i < n; i++) {
        var cx = xR - i * lb;
        if (atas[i]) o += teks(cx, 44, atas[i], { tengah: true, saiz: 11, warna: "kuning", tebal: true, hasil: true });
        if (X[i] != null) o += teks(cx, 70, X[i], { tengah: true, saiz: 18, warna: "tinta", tebal: true });
        if (Y[i] != null) o += teks(cx, 98, Y[i], { tengah: true, saiz: 18, warna: "tinta", tebal: true });
      }
      o += teks(xR - n * lb, 98, r.op, { tengah: true, saiz: 18, warna: "tinta2", tebal: true });
      o += h.garis(xR - n * lb - 12, 108, xR + 16, 108, { warna: "tinta2", tebal: 2 });
      var H = hasil.split("").reverse();
      for (i = 0; i < H.length; i++) o += teks(xR - i * lb, 134, H[i], { tengah: true, saiz: 18, warna: "merah", tebal: true, hasil: true });
      o += teks(8, 166, r.op === "+" ? "Lajur ≥ " + b + ": tolak " + b + ", bawa 1 ke kiri" : "Jika digit atas kecil, pinjam " + b, { saiz: 11, warna: "tinta2" });
      o += baris(8, 190, ["Semak: " + r.X + " " + r.op + " " + r.Y + " = " + r.R, { b: "10" }], { saiz: 12, warna: "ungu", tebal: true, hasil: true });
      o += baris(8, 212, ["Jawapan: " + hasil, { b: String(b) }], { saiz: 14, warna: "merah", tebal: true, hasil: true });
      return h.svg(224, o, "Rajah " + (r.op === "+" ? "penambahan " : "penolakan ") + x + " dan " + y + " dalam asas " + b + " lajur demi lajur, memberi " + hasil);
    }

    function lukisLampu(c, r) {
      var o = "", n = c.bit, lb = 236 / n, x0 = 12;
      o += teks(130, 20, "Mentol hidup = 1, padam = 0", { tengah: true, saiz: 12, warna: "tinta", tebal: true });
      for (var i = 0; i < n; i++) {
        var cx = x0 + i * lb + lb / 2, on = r.digit[i] === "1", k = n - 1 - i;
        o += teks(cx, 44, String(Math.pow(2, k)), { tengah: true, saiz: 11, warna: "tinta3" });
        o += '<g class="jmi-hasil">' + bulat(cx, 72, 15, on ? "kuning" : "kertas2", on ? "kuning" : "tinta3") +
          h.garis(cx - 5, 92, cx + 5, 92, { warna: "tinta3", tebal: 3 }) + "</g>";
        o += teks(cx, 120, r.digit[i], { tengah: true, saiz: 16, warna: "ungu", tebal: true, hasil: true });
      }
      var tambah = []; for (var j = 0; j < n; j++) if (r.digit[j] === "1") tambah.push(Math.pow(2, n - 1 - j));
      o += teks(8, 150, "= " + (tambah.length ? tambah.join(" + ") : "0"), { saiz: 12, warna: "tinta2", hasil: true });
      o += baris(8, 174, [String(r.n), { b: "10" }, " = " + r.digit, { b: "2" }], { saiz: 15, warna: "merah", tebal: true, hasil: true });
      return h.svg(186, o, "Rajah " + n + " mentol mewakili nombor asas dua " + r.digit + ", iaitu " + r.n + " dalam asas sepuluh");
    }

    function lukisJambatan(c, r) {
      var o = "", tb = 18;
      o += baris(130, 20, [r.d, { b: String(r.b) }, " → asas 10 → asas " + r.ke], { tengah: true, saiz: 13, tebal: true });
      var bah = [], nd = r.d.length;
      for (var i = 0; i < nd; i++) bah.push(r.d[i] + "×" + Math.pow(r.b, nd - 1 - i));
      o += teks(8, 44, "Langkah 1: nilai nombor", { saiz: 11, warna: "tinta3" });
      o += teks(8, 64, bah.length > 4 ? bah.slice(0, 3).join(" + ") + " + ..." : bah.join(" + "), { saiz: 11, warna: "tinta2" });
      o += baris(8, 86, ["= " + r.nilai, { b: "10" }], { saiz: 13, warna: "ungu", tebal: true, hasil: true });
      o += teks(8, 110, "Langkah 2: bahagi dengan " + r.ke, { saiz: 11, warna: "tinta3" });
      var T = tanggaSvg(r.langkah, r.ke, 136, tb);
      o += T.svg;
      o += baris(130, T.y + 30, [r.d, { b: String(r.b) }, " = " + r.hasil, { b: String(r.ke) }], { tengah: true, saiz: 15, warna: "merah", tebal: true, hasil: true });
      return h.svg(T.y + 42, o, "Rajah menukar " + r.d + " asas " + r.b + " kepada asas sepuluh, iaitu " + r.nilai + ", kemudian kepada asas " + r.ke + " memberi " + r.hasil);
    }
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
