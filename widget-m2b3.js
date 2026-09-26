/* Widget Tingkatan 2 Bab 3 Rumus Algebra. Empat widget:
   - t2bentuk  : membentuk rumus daripada situasi (bahagian tetap + bahagian berubah).
                 Gelongsor n, blok bertambah dan gantian dipaparkan.
   - t2ganti   : menentukan nilai pemboleh ubah dengan gantian. Pratetap:
                 "suhu" (F = 9C/5 + 32), "trapezium" (L = (a + b) x t / 2), "laju" (v = u + at).
   - t2tukar   : menukar perkara rumus langkah demi langkah (gelongsor langkah).
                 Pratetap: vut (u atau a), perimeter (w), segi3 (h), suhu (C), petak (s).
   - t2situasi : "kuasa dua suatu nombor ialah N": gelongsor n, petak n x n dibanding sasaran.
   Semua nombor dikira daripada formula. Fail ini didaftarkan oleh interaktif.js
   (Node: readdirSync widget-*.js; pelayar: tag <script> selepas interaktif.js). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, ungkap = h.ungkap;

    function bul(n) { var r = Math.round(n * 100) / 100; return r === 0 ? 0 : r; }
    function fmt(n) { return String(bul(n)); }
    function tanda(n) { return n < 0 ? "(" + fmt(n) + ")" : fmt(n); }
    function wang(c, n) { return (c.awalan || "") + fmt(n) + (c.akhiran || ""); }

    /* ================= t2bentuk ================= */
    W.t2bentuk = {
      mula: function (c) { return { n: c.n0 == null ? 3 : c.n0 }; },
      kawalan: function (c) { return [{ k: "n", label: c.label || c.h, min: 0, maks: c.maks }]; },
      kira: function (c, s) { return { n: s.n, berubah: c.kadar * s.n, jumlah: (c.tetap || 0) + c.kadar * s.n }; },
      lukis: function (c, s) {
        var r = this.kira(c, s), tetap = c.tetap || 0, kadar = c.kadar;
        var rumus = c.j + " = " + (tetap ? fmt(tetap) + " + " : "") + (kadar === 1 ? "" : fmt(kadar)) + c.h;
        var isi = teks(130, 18, rumus, { tengah: true, saiz: 14, warna: "tinta", tebal: true });
        var jumSkala = tetap + kadar * c.maks, sk = 236 / jumSkala, x = 12, by = 34, bt = 24, i;
        if (tetap) {
          isi += h.kotak(x, by, tetap * sk, bt, { isi: "kuningLembut", garis: "kuning", bulat: 2, tebal: 1.4 });
          if (tetap * sk >= String(tetap).length * 7 + 6) isi += teks(x + tetap * sk / 2, by + 16, fmt(tetap), { tengah: true, saiz: 11, warna: "tinta", tebal: true });
          x += tetap * sk;
        }
        for (i = 0; i < s.n; i++) {
          isi += h.kotak(x + 1, by, kadar * sk - 2, bt, { isi: "hijauLembut", garis: "hijau", bulat: 2, tebal: 1.2 });
          if (kadar * sk - 2 >= String(kadar).length * 7 + 4) isi += teks(x + kadar * sk / 2, by + 16, fmt(kadar), { tengah: true, saiz: 11, warna: "tinta", tebal: true });
          x += kadar * sk;
        }
        var y = 78;
        if (tetap) {
          isi += h.kotak(8, y - 9, 10, 10, { isi: "kuningLembut", garis: "kuning", bulat: 1, tebal: 1 });
          isi += teks(24, y, "Tetap: " + wang(c, tetap), { saiz: 12, warna: "tinta2" });
          y += 18;
        }
        isi += h.kotak(8, y - 9, 10, 10, { isi: "hijauLembut", garis: "hijau", bulat: 1, tebal: 1 });
        isi += teks(24, y, "Berubah: " + s.n + " × " + wang(c, kadar) + " = " + wang(c, r.berubah), { saiz: 12, warna: "tinta2", hasil: true });
        y += 26;
        isi += teks(8, y, c.j + " = " + (tetap ? fmt(tetap) + " + " : "") + (kadar === 1 ? "" : fmt(kadar) + "(") + s.n + (kadar === 1 ? "" : ")"), { saiz: 13, warna: "tinta", hasil: true });
        y += 22;
        isi += teks(8, y, c.j + " = " + wang(c, r.jumlah), { saiz: 14, warna: "ungu", tebal: true, hasil: true });
        return h.svg(y + 12, isi, "Rajah rumus " + rumus + " dengan " + s.n + " langkah berubah; jumlah " + wang(c, r.jumlah));
      }
    };

    /* ================= t2ganti ================= */
    var SUHU = [-10, 0, 10, 20, 25, 30, 37, 40, 60, 100];
    var PRA = {
      suhu: {
        rumus: "F = 9C/5 + 32",
        pemb: [{ k: "c", label: "C (°C)", nilai: SUHU }],
        f: function (v) { return 9 * v.c / 5 + 32; },
        lukis: function (v, F) {
          var o = "", frac = (v.c + 10) / 110, tinggi = 120, atas = 36;
          o += h.kotak(28, atas, 18, tinggi, { garis: "tinta3", tebal: 1.6, bulat: 9 });
          o += h.kotak(30, atas + tinggi - Math.max(2, frac * tinggi) + 1, 14, Math.max(2, frac * tinggi) - 1, { isi: "merah", garis: "merah", bulat: 6, tebal: 1 });
          o += '<circle cx="37" cy="' + (atas + tinggi + 10) + '" r="12" fill="' + h.w("merah") + '" stroke="' + h.w("tinta3") + '" stroke-width="1.6"></circle>';
          o += teks(70, 62, "C = " + v.c, { saiz: 13, warna: "tinta", tebal: true });
          o += teks(70, 92, "F = 9(" + v.c + ")/5 + 32", { saiz: 12, warna: "tinta", hasil: true });
          o += teks(70, 116, "F = " + fmt(F), { saiz: 14, warna: "ungu", tebal: true, hasil: true });
          return { isi: o, tinggi: 190 };
        }
      },
      trapezium: {
        rumus: "L = (a + b) × t / 2",
        pemb: [{ k: "a", label: "a (cm)", min: 2, maks: 8 }, { k: "b", label: "b (cm)", min: 6, maks: 12 }, { k: "t", label: "t (cm)", min: 2, maks: 8 }],
        f: function (v) { return (v.a + v.b) * v.t / 2; },
        lukis: function (v, L) {
          var sc = 12, o = "", bp = v.b * sc, ap = v.a * sc, ty = 150 - v.t * sc, cx = 130;
          o += h.laluan("M" + (cx - bp / 2) + " 150 L" + (cx + bp / 2) + " 150 L" + (cx + ap / 2) + " " + ty + " L" + (cx - ap / 2) + " " + ty + " Z", { isi: "kuningLembut", warna: "kuning", tebal: 2 });
          o += h.garis(cx, ty, cx, 150, { warna: "tinta3", tebal: 1.4, putus: "4 3" });
          o += teks(cx + bp / 2 + 8, (ty + 150) / 2 + 4, "t = " + v.t, { saiz: 11, warna: "tinta", tebal: true });
          o += teks(cx, ty - 6, "a = " + v.a, { tengah: true, saiz: 11, warna: "hijau", tebal: true });
          o += teks(cx, 166, "b = " + v.b, { tengah: true, saiz: 11, warna: "merah", tebal: true });
          o += teks(8, 188, "L = (" + v.a + " + " + v.b + ") × " + v.t + " / 2", { saiz: 12, warna: "tinta", hasil: true });
          o += ungkap(8 + (("L = " + fmt(L) + " cm").length * 8.4 + 8) / 2, 208, ["L = " + fmt(L) + " cm", { p: "2" }], { saiz: 14, warna: "ungu", tebal: true, hasil: true });
          return { isi: o, tinggi: 218 };
        }
      },
      laju: {
        rumus: "v = u + at",
        pemb: [{ k: "u", label: "u (m/s)", min: 0, maks: 10 }, { k: "a", label: "a (m/s²)", min: 1, maks: 5 }, { k: "t", label: "t (s)", min: 1, maks: 8 }],
        f: function (v) { return v.u + v.a * v.t; },
        lukis: function (v, V) {
          var sc = 4.4, x0 = 15, y0 = 34, bt = 26, o = "", i;
          var up = v.u * sc, ap = v.a * v.t * sc;
          if (v.u) o += h.kotak(x0, y0, up, bt, { isi: "lembayungLembut", garis: "lembayung", bulat: 2, tebal: 1.4 });
          if (v.u && up >= 14) o += teks(x0 + up / 2, y0 + 17, "u", { tengah: true, saiz: 11, warna: "tinta", tebal: true });
          o += h.kotak(x0 + up, y0, ap, bt, { isi: "hijauLembut", garis: "hijau", bulat: 2, tebal: 1.4 });
          if (ap >= 20) o += teks(x0 + up + ap / 2, y0 + 17, "at", { tengah: true, saiz: 11, warna: "tinta", tebal: true });
          o += h.garis(x0, y0 + bt + 8, x0 + 50 * sc, y0 + bt + 8, { warna: "tinta3", tebal: 1 });
          for (i = 0; i <= 50; i += 10) {
            o += h.garis(x0 + i * sc, y0 + bt + 5, x0 + i * sc, y0 + bt + 11, { warna: "tinta3", tebal: 1 });
            o += teks(x0 + i * sc, y0 + bt + 25, String(i), { tengah: true, saiz: 11, warna: "tinta2" });
          }
          o += teks(8, 116, "u = " + v.u + " m/s", { saiz: 12, warna: "tinta", tebal: true });
          o += teks(8, 134, "at = " + v.a + " × " + v.t + " = " + (v.a * v.t), { saiz: 12, warna: "tinta", hasil: true });
          o += teks(8, 158, "v = " + v.u + " + " + (v.a * v.t) + " = " + V + " m/s", { saiz: 14, warna: "ungu", tebal: true, hasil: true });
          return { isi: o, tinggi: 170 };
        }
      }
    };
    function nilaiPemb(p, i) { return p.nilai ? p.nilai[i] : p.min + i; }
    function keadaanNilai(c, s) {
      var p = PRA[c.set], v = {};
      p.pemb.forEach(function (x) { v[x.k] = nilaiPemb(x, s[x.k]); });
      return v;
    }
    W.t2ganti = {
      mula: function (c) {
        var s = {}, aw = c.awal || {};
        PRA[c.set].pemb.forEach(function (x) { s[x.k] = aw[x.k] == null ? 0 : aw[x.k]; });
        return s;
      },
      kawalan: function (c) {
        return PRA[c.set].pemb.map(function (x) {
          var ada = x.nilai ? x.nilai.length : x.maks - x.min + 1;
          return { k: x.k, label: x.label, min: 0, maks: ada - 1, teks: x.nilai ? x.nilai.map(String) : undefined };
        });
      },
      kira: function (c, s) { var v = keadaanNilai(c, s); return { nilai: v, hasil: bul(PRA[c.set].f(v)) }; },
      lukis: function (c, s) {
        var p = PRA[c.set], v = keadaanNilai(c, s), F = bul(p.f(v));
        var isi = teks(130, 18, p.rumus, { tengah: true, saiz: 14, warna: "tinta", tebal: true });
        var d = p.lukis(v, F);
        return h.svg(d.tinggi, isi + d.isi, "Rajah rumus " + p.rumus + " dengan nilai " + JSON.stringify(v) + " memberi " + F);
      }
    };

    /* ================= t2tukar ================= */
    var TUKAR = {
      vut: {
        u: { rumus: "v = u + at", langkah: [["v = u + at", "Rumus asal"], ["v - at = u", "Tolak at kedua-dua belah"], ["u = v - at", "Tulis u di sebelah kiri"]],
          semak: function () { var u = 5, a = 2, t = 3, v = u + a * t; return "Semak: v=" + v + ", a=" + a + ", t=" + t + " → u = " + v + " - " + (a * t) + " = " + (v - a * t); } },
        a: { rumus: "v = u + at", langkah: [["v = u + at", "Rumus asal"], ["v - u = at", "Tolak u kedua-dua belah"], ["(v - u) / t = a", "Bahagi kedua-dua belah dengan t"], ["a = (v - u) / t", "Tulis a di sebelah kiri"]],
          semak: function () { var u = 5, a = 2, t = 3, v = u + a * t; return "Semak: v=" + v + ", u=" + u + ", t=" + t + " → a = " + (v - u) + " / " + t + " = " + ((v - u) / t); } }
      },
      perimeter: {
        w: { rumus: "P = 2(l + w)", langkah: [["P = 2(l + w)", "Rumus asal"], ["P / 2 = l + w", "Bahagi kedua-dua belah dengan 2"], ["P / 2 - l = w", "Tolak l kedua-dua belah"], ["w = P / 2 - l", "Tulis w di sebelah kiri"]],
          semak: function () { var l = 8, w = 5, P = 2 * (l + w); return "Semak: P=" + P + ", l=" + l + " → w = " + P + "/2 - " + l + " = " + (P / 2 - l); } }
      },
      segi3: {
        h: { rumus: "A = bh / 2", langkah: [["A = bh / 2", "Rumus asal"], ["2A = bh", "Darab kedua-dua belah dengan 2"], ["2A / b = h", "Bahagi kedua-dua belah dengan b"], ["h = 2A / b", "Tulis h di sebelah kiri"]],
          semak: function () { var b = 6, hh = 4, A = b * hh / 2; return "Semak: A=" + A + ", b=" + b + " → h = 2(" + A + ") / " + b + " = " + (2 * A / b); } }
      },
      suhu: {
        C: { rumus: "F = 9C/5 + 32", langkah: [["F = 9C/5 + 32", "Rumus asal"], ["F - 32 = 9C/5", "Tolak 32 kedua-dua belah"], ["5(F - 32) = 9C", "Darab kedua-dua belah dengan 5"], ["5(F - 32) / 9 = C", "Bahagi kedua-dua belah dengan 9"], ["C = 5(F - 32) / 9", "Tulis C di sebelah kiri"]],
          semak: function () { var C = 20, F = 9 * C / 5 + 32; return "Semak: F=" + F + " → C = 5(" + (F - 32) + ") / 9 = " + (5 * (F - 32) / 9); } }
      },
      petak: {
        s: { rumus: "A = s²", langkah: [["A = s²", "Rumus asal"], ["punca A = s", "Punca kuasa dua kedua-dua belah"], ["s = punca A", "Tulis s di sebelah kiri"]],
          semak: function () { var s = 7, A = s * s; return "Semak: A=" + A + " → s = √" + A + " = " + Math.sqrt(A); } }
      }
    };
    function rumusTeks(y, t, o) {
      /* baris yang mengandungi kuasa dua ditulis dengan ungkap() */
      var i = t.indexOf("²");
      if (i < 0) return teks(130, y, t, Object.assign({ tengah: true }, o));
      return ungkap(130, y, [t.slice(0, i), { p: "2" }], o);
    }
    W.t2tukar = {
      mula: function (c) { return { l: c.l0 || 0 }; },
      kawalan: function (c) { return [{ k: "l", label: "langkah", min: 0, maks: TUKAR[c.set][c.perkara].langkah.length - 1 }]; },
      kira: function (c, s) { var d = TUKAR[c.set][c.perkara]; return { langkah: s.l, jumlah: d.langkah.length, semasa: d.langkah[s.l][0] }; },
      lukis: function (c, s) {
        var d = TUKAR[c.set][c.perkara], n = d.langkah.length, i;
        var isi = teks(130, 18, "Jadikan " + c.perkara + " perkara rumus", { tengah: true, saiz: 13, warna: "tinta", tebal: true });
        for (i = 0; i <= s.l; i++) {
          var y = 52 + i * 38, semasa = i === s.l, hs = i > 0;
          if (semasa && i > 0) isi += h.kotak(8, y - 20, 244, 40, { isi: "kuningLembut", garis: "kuning", bulat: 6, tebal: 1.4 });
          isi += rumusTeks(y, d.langkah[i][0].replace("punca A", "√A").replace("punca", "√"), { saiz: 14, warna: semasa ? "tinta" : "tinta2", tebal: semasa, hasil: hs });
          isi += teks(130, y + 13, d.langkah[i][1], { tengah: true, saiz: 11, warna: "ungu", hasil: hs });
        }
        var bawah = 52 + (n - 1) * 38 + 36;
        if (s.l === n - 1) isi += teks(130, bawah, d.semak(), { tengah: true, saiz: 11, warna: "hijau", tebal: true, hasil: true });
        return h.svg(bawah + 12, isi, "Rajah menukar perkara rumus " + d.rumus + " kepada " + c.perkara + ", langkah " + (s.l + 1) + " daripada " + n);
      }
    };

    /* ================= t2situasi ================= */
    function nilaiSituasi(c) {
      var m = Math.floor(Math.sqrt(c.sasaran)) + 3, a = [], i;
      for (i = -m; i <= m; i++) a.push(i);
      return a;
    }
    W.t2situasi = {
      mula: function (c) { return { i: c.i0 == null ? nilaiSituasi(c).indexOf(1) : c.i0 }; },
      kawalan: function (c) {
        var a = nilaiSituasi(c);
        return [{ k: "i", label: "n", min: 0, maks: a.length - 1, teks: a.map(String) }];
      },
      kira: function (c, s) { var n = nilaiSituasi(c)[s.i]; return { n: n, kuasaDua: n * n, sepadan: n * n === c.sasaran }; },
      lukis: function (c, s) {
        var r = this.kira(c, s), m = Math.floor(Math.sqrt(c.sasaran)) + 3;
        var sc = Math.min(16, Math.floor(120 / m)), x0 = 16, by = 168;
        var isi = ungkap(130, 20, ["n", { p: "2" }, " = " + c.sasaran], { saiz: 14, warna: "tinta", tebal: true });
        var sasSisi = Math.sqrt(c.sasaran) * sc, sisi = Math.abs(r.n) * sc;
        if (sisi > 0) isi += h.kotak(x0, by - sisi, sisi, sisi, { isi: r.sepadan ? "hijauLembut" : "kuningLembut", garis: r.sepadan ? "hijau" : "kuning", bulat: 1, tebal: 1.6 });
        isi += '<rect x="' + x0 + '" y="' + h.b1(by - sasSisi) + '" width="' + h.b1(sasSisi) + '" height="' + h.b1(sasSisi) + '" rx="1" fill="none" stroke="' + h.w("merah") + '" stroke-width="1.6" stroke-dasharray="5 3"></rect>';
        isi += h.garis(x0, by, x0 + 100, by, { warna: "tinta3", tebal: 1 });
        isi += teks(140, 60, "n = " + r.n, { saiz: 13, warna: "tinta", tebal: true });
        isi += teks(140, 88, "n × n = " + r.kuasaDua, { saiz: 12, warna: "tinta", hasil: true });
        isi += teks(140, 112, r.sepadan ? "Tepat " + c.sasaran + "!" : "Belum " + c.sasaran, { saiz: 13, warna: r.sepadan ? "hijau" : "merah", tebal: true, hasil: true });
        isi += teks(140, 140, "Garis putus: luas", { saiz: 11, warna: "tinta2" });
        isi += teks(140, 154, "sasaran " + c.sasaran, { saiz: 11, warna: "tinta2" });
        return h.svg(184, isi, "Rajah petak bersisi " + Math.abs(r.n) + " dengan luas " + r.kuasaDua + ", dibandingkan dengan sasaran " + c.sasaran);
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
