/* Widget Tingkatan 1 Bab 8 Garis dan Sudut: satu widget `t1sudut` dengan enam mod (spec.mod):
   - protraktor : gelongsor sudut 0-360, jenis sudut, sudut konjugat
   - pasangan   : sudut pelengkap / penggenap / konjugat (gelongsor jenis dan sudut a)
   - bina       : pembinaan jangka lukis langkah demi langkah (pembahagi dua sama serenjang
                  dan pembahagi dua sama sudut)
   - bersilang  : dua garis bersilang, sudut bertentang bucu dan sudut bersebelahan
   - selari     : garis selari dan garis rentas lintang, sudut sepadan / selang-seli /
                  pedalaman; gelongsor condong menguji sama ada garis selari
   - dongak     : sudut dongak dan sudut tunduk (sama kerana sudut selang-seli)
   Semua nombor dikira daripada formula. Unsur jawapan bertanda jmi-hasil supaya
   tersembunyi dalam mod cabar. Didaftarkan oleh interaktif.js (Node: widget-*.js;
   pelayar: tag <script> selepas interaktif.js). */
(function () {
  "use strict";
  function pasang(JMI) {
    var h = JMI.h, W = JMI.W, teks = h.teks, b1 = h.b1;

    /* ---------- pembantu geometri dan lukisan ---------- */
    function pt(cx, cy, r, d) { var a = d * Math.PI / 180; return [cx + r * Math.cos(a), cy - r * Math.sin(a)]; }
    function tanda(x, y) { return b1(x) + " " + b1(y); }
    function kelas(hasil) { return hasil ? ' class="jmi-hasil"' : ""; }
    function garisH(x1, y1, x2, y2, o) {
      o = o || {};
      return "<line" + kelas(o.hasil) + ' x1="' + b1(x1) + '" y1="' + b1(y1) + '" x2="' + b1(x2) + '" y2="' + b1(y2) +
        '" stroke="' + h.w(o.warna || "tinta2") + '" stroke-width="' + (o.tebal || 2) + '" stroke-linecap="round"' +
        (o.putus ? ' stroke-dasharray="' + o.putus + '"' : "") + "></line>";
    }
    function laluanH(d, o) {
      o = o || {};
      return "<path" + kelas(o.hasil) + ' d="' + d + '" fill="' + (o.isi ? h.w(o.isi) : "none") + '" stroke="' +
        (o.warna ? h.w(o.warna) : "none") + '" stroke-width="' + (o.tebal || 1.5) + '" stroke-linejoin="round" stroke-linecap="round"' +
        (o.putus ? ' stroke-dasharray="' + o.putus + '"' : "") + "></path>";
    }
    function bulatH(cx, cy, r, o) {
      o = o || {};
      return "<circle" + kelas(o.hasil) + ' cx="' + b1(cx) + '" cy="' + b1(cy) + '" r="' + r + '" fill="' + (o.isi ? h.w(o.isi) : "none") +
        '" stroke="' + (o.warna ? h.w(o.warna) : "none") + '" stroke-width="' + (o.tebal || 1.5) + '"></circle>';
    }
    /* Sektor bulatan (a0 hingga a1 darjah, lawan arah jam) dengan sempadan. */
    function sektor(cx, cy, r, a0, a1, o) {
      o = o || {};
      if (a1 - a0 >= 359.99) return bulatH(cx, cy, r, o);
      if (a1 - a0 <= 0.01) return "";
      var p0 = pt(cx, cy, r, a0), p1 = pt(cx, cy, r, a1), besar = a1 - a0 > 180 ? 1 : 0;
      var d = "M" + tanda(cx, cy) + " L" + tanda(p0[0], p0[1]) + " A" + r + " " + r + " 0 " + besar + " 0 " + tanda(p1[0], p1[1]) + " Z";
      return laluanH(d, o);
    }
    /* Lengkok sahaja (tiada sisi). */
    function lengkok(cx, cy, r, a0, a1, o) {
      o = o || {};
      if (a1 - a0 <= 0.01) return "";
      var p0 = pt(cx, cy, r, a0), p1 = pt(cx, cy, r, a1), besar = a1 - a0 > 180 ? 1 : 0;
      var d = "M" + tanda(p0[0], p0[1]) + " A" + r + " " + r + " 0 " + besar + " 0 " + tanda(p1[0], p1[1]);
      return laluanH(d, { warna: o.warna || "tinta2", tebal: o.tebal || 1.5, putus: o.putus, hasil: o.hasil });
    }
    /* Tanda sudut tegak di bucu (cx,cy) antara arah a dan a+90. */
    function kotakTegak(cx, cy, a, r, hasil) {
      var p = pt(cx, cy, r, a), q = pt(cx, cy, r, a + 90), t = pt(p[0], p[1], r, a + 90);
      return laluanH("M" + tanda(p[0], p[1]) + " L" + tanda(t[0], t[1]) + " L" + tanda(q[0], q[1]), { warna: "tinta3", tebal: 1.2, hasil: hasil });
    }
    function huruf(cx, cy, r, sudutTengah, t, warna, hasil) {
      var p = pt(cx, cy, r, sudutTengah);
      return teks(p[0], p[1] + 4, t, { tengah: true, saiz: 12, warna: warna || "tinta", tebal: true, hasil: hasil });
    }
    function bulat1(n) { return Math.round(n * 10) / 10; }
    function der(n) { return bulat1(n) + "°"; }
    function nilaiAda(a, i) { return a[Math.max(0, Math.min(a.length - 1, i))]; }
    function teksDer(a) { return a.map(function (x) { return x + "°"; }); }

    /* ================= 1. protraktor ================= */
    var SUDUT_PROT = [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 210, 240, 270, 300, 330, 360];
    function jenisSudut(t) {
      if (t === 0) return "sifar";
      if (t < 90) return "tirus";
      if (t === 90) return "tegak";
      if (t < 180) return "cakah";
      if (t === 180) return "lurus";
      if (t < 360) return "refleks";
      return "putaran lengkap";
    }
    var protraktor = {
      mula: function (c) { return { i: c.i == null ? 4 : c.i }; },
      kawalan: function (c) { var l = c.sudut || SUDUT_PROT; return [{ k: "i", label: "sudut", min: 0, maks: l.length - 1, teks: teksDer(l) }]; },
      kira: function (c, s) {
        var t = nilaiAda(c.sudut || SUDUT_PROT, s.i);
        return { sudut: t, jenis: jenisSudut(t), konjugat: t === 0 ? 360 : 360 - t,
          pelengkap: t <= 90 ? 90 - t : null, penggenap: t <= 180 ? 180 - t : null };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), t = r.sudut, cx = 100, cy = 92, R = 74, isi = "", i;
        isi += bulatH(cx, cy, R, { isi: "kertas2", warna: "garis2", tebal: 1 });
        for (i = 0; i < 360; i += 30) {
          var a = pt(cx, cy, R, i), b = pt(cx, cy, R - (i % 90 === 0 ? 9 : 5), i);
          isi += garisH(a[0], a[1], b[0], b[1], { warna: "tinta3", tebal: i % 90 === 0 ? 1.4 : 0.8 });
        }
        if (t > 0) isi += sektor(cx, cy, 34, 0, t, { isi: "kuningLembut", warna: "kuning", tebal: 1.5 });
        if (t === 90) isi += kotakTegak(cx, cy, 0, 14, false);
        var ujung = pt(cx, cy, 88, 0), u2 = pt(cx, cy, 88, t);
        isi += garisH(cx, cy, ujung[0], ujung[1], { warna: "hijau", tebal: 3 });
        if (t !== 0 && t !== 360) isi += garisH(cx, cy, u2[0], u2[1], { warna: "ungu", tebal: 3 });
        isi += bulatH(cx, cy, 3.5, { isi: "tinta" });
        if (t >= 30 && t < 360) isi += huruf(cx, cy, 50, t / 2, "θ", "tinta", false);
        if (t === 360) isi += huruf(cx, cy, 50, 180, "θ", "tinta", false);
        isi += teks(8, 186, "Sudut θ = " + t + "°", { saiz: 13, warna: "tinta", tebal: true });
        isi += teks(8, 204, "Jenis: " + r.jenis, { saiz: 12, warna: "ungu", tebal: true, hasil: true });
        isi += teks(8, 222, "Sudut konjugat = " + r.konjugat + "°", { saiz: 12, warna: "hijau", tebal: true, hasil: true });
        return h.svg(232, isi, "Rajah protraktor interaktif dengan sudut " + t + " darjah, jenis " + r.jenis);
      }
    };

    /* ================= 2. pasangan: pelengkap, penggenap, konjugat ================= */
    /* Satu senarai sudut a yang sah untuk ketiga-tiga jenis (a < 90°). */
    var LIS_PASANGAN = [15, 20, 30, 40, 45, 50, 60, 70, 80];
    var JENIS_PASANGAN = ["pelengkap (90°)", "penggenap (180°)", "konjugat (360°)"];
    var NAMA_PASANGAN = ["pelengkap", "penggenap", "konjugat"];
    var JUM_PASANGAN = [90, 180, 360];
    var pasangan = {
      mula: function (c) { return { j: c.j == null ? 1 : c.j, i: c.i == null ? 2 : c.i }; },
      kawalan: function (c) {
        var lis = c.sudut || LIS_PASANGAN;
        return [{ k: "j", label: "jenis", min: 0, maks: 2, teks: JENIS_PASANGAN },
                { k: "i", label: "sudut a", min: 0, maks: lis.length - 1, teks: teksDer(lis) }];
      },
      kira: function (c, s) {
        var a = nilaiAda(c.sudut || LIS_PASANGAN, s.i), T = JUM_PASANGAN[s.j];
        return { jenis: NAMA_PASANGAN[s.j], jumlah: T, a: a, b: T - a };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), a = r.a, T = r.jumlah, isi = "", cx, cy, mid;
        if (s.j === 0) {
          cx = 60; cy = 150;
          isi += sektor(cx, cy, 52, 0, a, { isi: "merahLembut", warna: "merah", tebal: 1.2 });
          isi += sektor(cx, cy, 52, a, 90, { isi: "hijauLembut", warna: "hijau", tebal: 1.2 });
          isi += garisH(cx, cy, cx + 130, cy, { warna: "tinta2", tebal: 3 }) + garisH(cx, cy, cx, cy - 120, { warna: "tinta2", tebal: 3 });
          var m0 = pt(cx, cy, 120, a);
          isi += garisH(cx, cy, m0[0], m0[1], { warna: "ungu", tebal: 3 });
          isi += kotakTegak(cx, cy, 0, 14, false);
          isi += huruf(cx, cy, 70, a / 2, "a", "merah", false) + huruf(cx, cy, 70, (a + 90) / 2, "b", "hijau", true);
        } else if (s.j === 1) {
          cx = 130; cy = 140;
          isi += sektor(cx, cy, 50, 0, a, { isi: "merahLembut", warna: "merah", tebal: 1.2 });
          isi += sektor(cx, cy, 50, a, 180, { isi: "hijauLembut", warna: "hijau", tebal: 1.2 });
          isi += garisH(cx - 112, cy, cx + 112, cy, { warna: "tinta2", tebal: 3 });
          var m1 = pt(cx, cy, 104, a);
          isi += garisH(cx, cy, m1[0], m1[1], { warna: "ungu", tebal: 3 });
          isi += huruf(cx, cy, 68, a / 2, "a", "merah", false) + huruf(cx, cy, 68, (a + 180) / 2, "b", "hijau", true);
        } else {
          cx = 130; cy = 92;
          isi += bulatH(cx, cy, 44, { isi: "hijauLembut", warna: "hijau", tebal: 1.2 });
          isi += sektor(cx, cy, 44, 0, a, { isi: "merahLembut", warna: "merah", tebal: 1.2 });
          var e0 = pt(cx, cy, 78, 0), e1 = pt(cx, cy, 78, a);
          isi += garisH(cx, cy, e0[0], e0[1], { warna: "tinta2", tebal: 3 }) + garisH(cx, cy, e1[0], e1[1], { warna: "ungu", tebal: 3 });
          isi += huruf(cx, cy, 60, a / 2, "a", "merah", false) + huruf(cx, cy, 60, (a + 360) / 2, "b", "hijau", true);
        }
        isi += bulatH(cx, cy, 3.5, { isi: "tinta" });
        isi += teks(8, 188, "a = " + a + "°", { saiz: 13, warna: "merah", tebal: true });
        isi += teks(8, 206, "b = " + T + "° − " + a + "° = " + r.b + "°", { saiz: 13, warna: "hijau", tebal: true, hasil: true });
        isi += teks(8, 224, "Sudut " + r.jenis + ": a + b = " + T + "°", { saiz: 12, warna: "tinta2" });
        return h.svg(234, isi, "Rajah sudut " + r.jenis + " a dan b dengan a = " + a + " darjah dan a tambah b sama dengan " + T + " darjah");
      }
    };

    /* ================= 3. bina: pembinaan jangka lukis ================= */
    var LANGKAH = ["Awal", "Langkah 1", "Langkah 2", "Langkah 3"];
    var JENIS_BINA = ["pembahagi dua sama serenjang", "pembahagi dua sama sudut"];
    var TEKS_SEGMEN = [
      ["Diberi tembereng garis AB.", ""],
      ["Langkah 1: pusat A, jejari > ½AB,", "lukis lengkok atas dan bawah."],
      ["Langkah 2: pusat B, jejari sama,", "lukis lengkok yang bersilang."],
      ["Langkah 3: sambung dua titik silang.", "Ini pembahagi dua sama serenjang AB."]
    ];
    var TEKS_SUDUT = [
      ["Diberi sudut AOB.", ""],
      ["Langkah 1: pusat O, lukis lengkok", "memotong OA di P dan OB di Q."],
      ["Langkah 2: pusat P dan Q, jejari sama,", "lukis lengkok bersilang di R."],
      ["Langkah 3: sambung O ke R. OR ialah", "pembahagi dua sama sudut AOB."]
    ];
    var bina = {
      mula: function (c) { return { j: c.pil == null ? (c.j == null ? 0 : c.j) : c.pil, l: c.l == null ? 0 : c.l }; },
      kawalan: function (c) {
        var k = [];
        if (c.pil == null) k.push({ k: "j", label: "pembinaan", min: 0, maks: 1, teks: JENIS_BINA });
        k.push({ k: "l", label: "langkah", min: 0, maks: 3, teks: LANGKAH });
        return k;
      },
      kira: function (c, s) {
        var ab = c.ab || 8, th = c.sudut || 70;
        return s.j === 0 ? { jenis: "segmen", separuh: ab / 2, sudutM: 90 } : { jenis: "sudut", separuh: th / 2, sudut: th };
      },
      lukis: function (c, s) {
        var isi = "", r = this.kira(c, s), l = s.l, t;
        if (s.j === 0) {
          var A = [45, 92], B = [215, 92], R = 105, phi = Math.acos(85 / R) * 180 / Math.PI, y2 = Math.sqrt(R * R - 85 * 85);
          isi += garisH(A[0], A[1], B[0], B[1], { warna: "tinta2", tebal: 3 });
          isi += bulatH(A[0], A[1], 3.5, { isi: "tinta" }) + bulatH(B[0], B[1], 3.5, { isi: "tinta" });
          if (l >= 1) isi += lengkok(A[0], A[1], R, -(phi + 16), phi + 16, { warna: "ungu", tebal: 2 });
          if (l >= 2) isi += lengkok(B[0], B[1], R, 180 - (phi + 16), 180 + phi + 16, { warna: "merah", tebal: 2 });
          if (l >= 2) isi += bulatH(130, 92 - y2, 3.5, { isi: "hijau" }) + bulatH(130, 92 + y2, 3.5, { isi: "hijau" });
          if (l >= 3) {
            isi += garisH(130, 92 - y2 - 14, 130, 92 + y2 + 14, { warna: "hijau", tebal: 3, hasil: true });
            isi += bulatH(130, 92, 3.5, { isi: "hijau", hasil: true });
            isi += kotakTegak(130, 92, 0, 11, true);
            isi += garisH(87, 84, 87, 100, { warna: "tinta3", tebal: 1.4, hasil: true }) + garisH(173, 84, 173, 100, { warna: "tinta3", tebal: 1.4, hasil: true });
            isi += teks(136, 87, "M", { saiz: 12, warna: "hijau", tebal: true, hasil: true });
          }
          isi += teks(A[0] - 4, A[1] + 20, "A", { saiz: 12, warna: "tinta", tebal: true }) + teks(B[0] - 4, B[1] + 20, "B", { saiz: 12, warna: "tinta", tebal: true });
          t = TEKS_SEGMEN[l];
          isi += teks(4, 178, t[0], { saiz: 11, warna: "tinta", tebal: true });
          if (t[1]) isi += teks(4, 194, t[1], { saiz: 11, warna: "tinta", tebal: true });
          isi += teks(4, 212, l < 3 ? "Panjang AB = " + (c.ab || 8) + " cm" : "AM = MB = " + r.separuh + " cm, sudut di M = 90°", { saiz: 11, warna: l < 3 ? "tinta2" : "hijau", tebal: l >= 3, hasil: l >= 3 });
        } else {
          var O = [35, 150], th = c.sudut || 70, P = pt(O[0], O[1], 60, 0), Q = pt(O[0], O[1], 60, th);
          var tt = 60 * Math.cos(th / 2 * Math.PI / 180) + Math.sqrt(2500 - 3600 * Math.pow(Math.sin(th / 2 * Math.PI / 180), 2));
          var Rr = pt(O[0], O[1], tt, th / 2);
          var A2 = pt(O[0], O[1], 205, 0), B2 = pt(O[0], O[1], 135, th);
          isi += garisH(O[0], O[1], A2[0], A2[1], { warna: "tinta2", tebal: 3 }) + garisH(O[0], O[1], B2[0], B2[1], { warna: "tinta2", tebal: 3 });
          isi += bulatH(O[0], O[1], 3.5, { isi: "tinta" });
          if (l === 0) isi += lengkok(O[0], O[1], 24, 0, th, { warna: "merah", tebal: 1.6 });
          if (l >= 1) {
            isi += lengkok(O[0], O[1], 60, -6, th + 6, { warna: "ungu", tebal: 2 });
            isi += bulatH(P[0], P[1], 3.5, { isi: "ungu" }) + bulatH(Q[0], Q[1], 3.5, { isi: "ungu" });
            isi += teks(P[0] - 3, P[1] + 17, "P", { saiz: 12, warna: "ungu", tebal: true }) + teks(Q[0] - 17, Q[1] - 2, "Q", { saiz: 12, warna: "ungu", tebal: true });
          }
          if (l >= 2) {
            /* arah dari P ke R dan dari Q ke R (darjah, paksi matematik) */
            var dP = Math.atan2(P[1] - Rr[1], Rr[0] - P[0]) * 180 / Math.PI, dQ = Math.atan2(Q[1] - Rr[1], Rr[0] - Q[0]) * 180 / Math.PI;
            isi += lengkok(P[0], P[1], 50, dP - 24, dP + 24, { warna: "merah", tebal: 2 });
            isi += lengkok(Q[0], Q[1], 50, dQ - 24, dQ + 24, { warna: "merah", tebal: 2 });
            isi += bulatH(Rr[0], Rr[1], 3.5, { isi: "hijau" });
            isi += teks(Rr[0] + 8, Rr[1] - 6, "R", { saiz: 12, warna: "hijau", tebal: true });
          }
          if (l >= 3) {
            var ujung = pt(O[0], O[1], 155, th / 2);
            isi += garisH(O[0], O[1], ujung[0], ujung[1], { warna: "hijau", tebal: 3, hasil: true });
            isi += lengkok(O[0], O[1], 30, 0, th / 2, { warna: "merah", tebal: 1.8, hasil: true });
            isi += lengkok(O[0], O[1], 30, th / 2, th, { warna: "hijau", tebal: 1.8, hasil: true });
          }
          isi += teks(A2[0] - 12, A2[1] + 18, "A", { saiz: 12, warna: "tinta", tebal: true }) + teks(B2[0] + 6, B2[1] + 4, "B", { saiz: 12, warna: "tinta", tebal: true });
          isi += teks(O[0] - 20, O[1] + 4, "O", { saiz: 12, warna: "tinta", tebal: true });
          t = TEKS_SUDUT[l];
          isi += teks(4, 178, t[0], { saiz: 11, warna: "tinta", tebal: true });
          if (t[1]) isi += teks(4, 194, t[1], { saiz: 11, warna: "tinta", tebal: true });
          isi += teks(4, 212, l < 3 ? "Sudut AOB = " + th + "°" : "Setiap bahagian = " + r.separuh + "°", { saiz: 11, warna: l < 3 ? "tinta2" : "hijau", tebal: l >= 3, hasil: l >= 3 });
        }
        return h.svg(222, isi, "Rajah pembinaan jangka lukis: " + JENIS_BINA[s.j] + ", " + LANGKAH[l].toLowerCase());
      }
    };

    /* ================= 4. bersilang ================= */
    var SUDUT_SILANG = [30, 40, 50, 60, 70, 75, 90, 110, 120, 130, 140, 150];
    var bersilang = {
      mula: function (c) { return { i: c.i == null ? 3 : c.i }; },
      kawalan: function (c) { var l = c.sudut || SUDUT_SILANG; return [{ k: "i", label: "sudut a", min: 0, maks: l.length - 1, teks: teksDer(l) }]; },
      kira: function (c, s) { var a = nilaiAda(c.sudut || SUDUT_SILANG, s.i); return { a: a, b: 180 - a, c: a, d: 180 - a }; },
      lukis: function (c, s) {
        var r = this.kira(c, s), a = r.a, cx = 130, cy = 88, isi = "";
        isi += sektor(cx, cy, 32, 0, a, { isi: "merahLembut", warna: "merah", tebal: 1.2 });
        isi += sektor(cx, cy, 32, a, 180, { isi: "hijauLembut", warna: "hijau", tebal: 1.2 });
        isi += sektor(cx, cy, 32, 180, 180 + a, { isi: "merahLembut", warna: "merah", tebal: 1.2 });
        isi += sektor(cx, cy, 32, 180 + a, 360, { isi: "hijauLembut", warna: "hijau", tebal: 1.2 });
        var p1 = pt(cx, cy, 105, 0), p2 = pt(cx, cy, 105, 180), q1 = pt(cx, cy, 78, a), q2 = pt(cx, cy, 78, a + 180);
        isi += garisH(p1[0], p1[1], p2[0], p2[1], { warna: "tinta2", tebal: 3 }) + garisH(q1[0], q1[1], q2[0], q2[1], { warna: "ungu", tebal: 3 });
        if (a === 90) isi += kotakTegak(cx, cy, 0, 13, false) + kotakTegak(cx, cy, 90, 13, false) + kotakTegak(cx, cy, 180, 13, false) + kotakTegak(cx, cy, 270, 13, false);
        isi += huruf(cx, cy, 50, a / 2, "a", "merah", false) + huruf(cx, cy, 50, (a + 180) / 2, "b", "hijau", true);
        isi += huruf(cx, cy, 50, 180 + a / 2, "c", "merah", true) + huruf(cx, cy, 50, (a + 540) / 2, "d", "hijau", true);
        isi += bulatH(cx, cy, 3.5, { isi: "tinta" });
        isi += teks(8, 184, "a = " + a + "° (diberi)", { saiz: 13, warna: "merah", tebal: true });
        isi += teks(8, 202, "c = a = " + a + "° (bertentang bucu)", { saiz: 12, warna: "merah", tebal: true, hasil: true });
        isi += teks(8, 220, "b = d = 180° − " + a + "° = " + r.b + "°", { saiz: 12, warna: "hijau", tebal: true, hasil: true });
        isi += teks(8, 238, a === 90 ? "Dua garis serenjang" : "a + b = 180° (sudut bersebelahan)", { saiz: 12, warna: "tinta2" });
        return h.svg(248, isi, "Rajah dua garis bersilang dengan sudut a " + a + " darjah; sudut bertentang bucu sama dan sudut bersebelahan berjumlah 180 darjah");
      }
    };

    /* ================= 5. selari dan garis rentas lintang ================= */
    var SUDUT_SELARI = [40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140];
    var CONDONG = [-10, -5, 0, 5, 10];
    var PASANG_SELARI = ["sepadan", "selang-seli", "pedalaman"];
    function silang(M, d, L, e) {
      var cr = function (p, q) { return p[0] * q[1] - p[1] * q[0]; };
      var t = cr([L[0] - M[0], L[1] - M[1]], e) / cr(d, e);
      return [M[0] + t * d[0], M[1] + t * d[1]];
    }
    var selari = {
      mula: function (c) { return { i: c.i == null ? 2 : c.i, j: c.j == null ? 0 : c.j, e: c.e == null ? 2 : c.e }; },
      kawalan: function (c) {
        var l = c.sudut || SUDUT_SELARI, k = [{ k: "i", label: "sudut", min: 0, maks: l.length - 1, teks: teksDer(l) },
          { k: "j", label: "pasangan", min: 0, maks: 2, teks: PASANG_SELARI }];
        if (c.condong) k.push({ k: "e", label: "condong", min: 0, maks: CONDONG.length - 1, teks: CONDONG.map(function (x) { return x + "°"; }) });
        return k;
      },
      kira: function (c, s) {
        var al = nilaiAda(c.sudut || SUDUT_SELARI, s.i), ep = c.condong ? CONDONG[s.e] : 0, sudutB = al - ep, p1, p2;
        if (s.j === 0) { p1 = al; p2 = sudutB; }
        else if (s.j === 1) { p1 = al; p2 = sudutB; }
        else { p1 = 180 - al; p2 = sudutB; }
        var selariYa = ep === 0;
        return { alfa: al, condong: ep, pertama: p1, kedua: p2, selari: selariYa, jenis: PASANG_SELARI[s.j],
          hubungan: s.j === 2 ? "jumlah 180" : "sama", jumlah: p1 + p2 };
      },
      lukis: function (c, s) {
        var r = this.kira(c, s), al = r.alfa, ep = r.condong, isi = "", M = [130, 88], d = [Math.cos(al * Math.PI / 180), -Math.sin(al * Math.PI / 180)];
        var y1 = 52, y2 = 124, I1 = [M[0] + (M[1] - y1) / Math.sin(al * Math.PI / 180) * d[0], y1];
        var e = [Math.cos(ep * Math.PI / 180), -Math.sin(ep * Math.PI / 180)], L2 = [130, y2], I2 = silang(M, d, L2, e);
        var i;
        /* sudut sektor: pasangan yang diserlahkan */
        var pos = { NE: 0, NW: 1, SW: 2, SE: 3 };
        function sekt(I, fi, posn) {
          var b = [fi, al, fi + 180, al + 180, fi + 360][posn], b2 = [al, fi + 180, al + 180, fi + 360][posn];
          return { a0: b, a1: b2 };
        }
        var atas, bawah;
        if (s.j === 0) { atas = pos.NE; bawah = pos.NE; }
        else if (s.j === 1) { atas = pos.SW; bawah = pos.NE; }
        else { atas = pos.SE; bawah = pos.NE; }
        var sa = sekt(I1, 0, atas), sb = sekt(I2, ep, bawah);
        isi += sektor(I1[0], I1[1], 24, sa.a0, sa.a1, { isi: "merahLembut", warna: "merah", tebal: 1.4 });
        isi += sektor(I2[0], I2[1], 24, sb.a0, sb.a1, { isi: "hijauLembut", warna: "hijau", tebal: 1.4, hasil: false });
        isi += garisH(18, y1, 242, y1, { warna: "tinta2", tebal: 3 });
        var a2 = pt(L2[0], L2[1], 112, ep), a3 = pt(L2[0], L2[1], 112, ep + 180);
        isi += garisH(a3[0], a3[1], a2[0], a2[1], { warna: "tinta2", tebal: 3 });
        var t1 = pt(M[0], M[1], 76, al), t2 = pt(M[0], M[1], 76, al + 180);
        isi += garisH(t1[0], t1[1], t2[0], t2[1], { warna: "ungu", tebal: 3 });
        /* penanda selari (>) */
        function anak(x, y) { return laluanH("M" + tanda(x - 5, y - 5) + " L" + tanda(x, y) + " L" + tanda(x - 5, y + 5), { warna: "tinta", tebal: 1.6 }); }
        isi += anak(232, y1);
        if (ep === 0) isi += anak(232, y2);
        isi += bulatH(I1[0], I1[1], 3.5, { isi: "tinta" }) + bulatH(I2[0], I2[1], 3.5, { isi: "tinta" });
        /* nilai pada sudut */
        function labelSudut(I, sk, t, warna, hasil) {
          var mid = (sk.a0 + sk.a1) / 2, p = pt(I[0], I[1], 32, mid);
          return teks(p[0], p[1] + 4, t, { tengah: true, saiz: 11, warna: warna, tebal: true, hasil: hasil });
        }
        isi += labelSudut(I1, sa, r.pertama + "°", "merah", false) + labelSudut(I2, sb, r.kedua + "°", "hijau", true);
        var hub;
        if (s.j === 2) hub = ep === 0 ? "Jumlah 180°, jadi garis selari" : "Jumlah bukan 180°, tidak selari";
        else hub = ep === 0 ? "Sama, jadi garis selari" : "Tidak sama, garis tidak selari";
        isi += teks(8, 186, "Sudut " + r.jenis, { saiz: 13, warna: "tinta", tebal: true });
        isi += teks(8, 204, "Sudut merah = " + r.pertama + "°", { saiz: 12, warna: "merah", tebal: true });
        isi += teks(8, 222, "Sudut hijau = " + r.kedua + "°", { saiz: 12, warna: "hijau", tebal: true, hasil: true });
        isi += teks(8, 240, hub, { saiz: 12, warna: "tinta2", tebal: true, hasil: true });
        return h.svg(250, isi, "Rajah dua garis dipotong garis rentas lintang; sudut " + r.jenis + " bernilai " + r.pertama + " dan " + r.kedua + " darjah");
      }
    };

    /* ================= 6. dongak dan tunduk ================= */
    var SUDUT_DONGAK = [10, 15, 20, 25, 30, 35, 40, 45, 50];
    var dongak = {
      mula: function (c) { return { i: c.i == null ? 4 : c.i }; },
      kawalan: function (c) { var l = c.sudut || SUDUT_DONGAK; return [{ k: "i", label: "sudut dongak", min: 0, maks: l.length - 1, teks: teksDer(l) }]; },
      kira: function (c, s) { var a = nilaiAda(c.sudut || SUDUT_DONGAK, s.i); return { dongak: a, tunduk: a }; },
      lukis: function (c, s) {
        var r = this.kira(c, s), a = r.dongak, isi = "", gy = 184, E = [32, 150], xT = 144, tinggiT = 112 * Math.tan(a * Math.PI / 180);
        var T = [xT, E[1] - tinggiT];
        isi += garisH(8, gy, 252, gy, { warna: "tinta3", tebal: 2 });
        isi += h.kotak(xT, T[1], 16, gy - T[1], { isi: "kertas2", garis: "tinta3", tebal: 1.4, bulat: 0 });
        /* sektor dongak di P */
        isi += sektor(E[0], E[1], 42, 0, a, { isi: "merahLembut", warna: "merah", tebal: 1.4 });
        /* sektor tunduk di T: antara arah 180 dan 180 + a */
        isi += sektor(T[0], T[1], 42, 180, 180 + a, { isi: "hijauLembut", warna: "hijau", tebal: 1.4, hasil: true });
        isi += garisH(E[0], E[1], 196, E[1], { warna: "tinta3", tebal: 1.4, putus: "5 4" });
        isi += garisH(E[0], T[1], T[0], T[1], { warna: "tinta3", tebal: 1.4, putus: "5 4" });
        isi += garisH(E[0], E[1], T[0], T[1], { warna: "ungu", tebal: 3 });
        /* orang */
        isi += bulatH(E[0], E[1] + 1, 6, { isi: "kertas", warna: "tinta", tebal: 1.6 });
        isi += garisH(E[0], E[1] + 7, E[0], gy - 12, { warna: "tinta", tebal: 2 });
        isi += garisH(E[0], gy - 12, E[0] - 6, gy, { warna: "tinta", tebal: 2 }) + garisH(E[0], gy - 12, E[0] + 6, gy, { warna: "tinta", tebal: 2 });
        isi += bulatH(T[0], T[1], 4, { isi: "ungu" });
        isi += teks(E[0] - 3, gy + 16, "P", { saiz: 12, warna: "tinta", tebal: true }) + teks(xT + 3, gy + 16, "T", { saiz: 12, warna: "tinta", tebal: true });
        isi += teks(8, 216, "Sudut dongak dari P = " + a + "°", { saiz: 12, warna: "merah", tebal: true });
        isi += teks(8, 234, "Sudut tunduk dari T = " + r.tunduk + "°", { saiz: 12, warna: "hijau", tebal: true, hasil: true });
        isi += teks(8, 252, "Sama kerana sudut selang-seli", { saiz: 12, warna: "tinta2", hasil: true });
        return h.svg(262, isi, "Rajah sudut dongak " + a + " darjah dari P ke puncak T dan sudut tunduk yang sama dari T ke P");
      }
    };

    var MOD = { protraktor: protraktor, pasangan: pasangan, bina: bina, bersilang: bersilang, selari: selari, dongak: dongak };
    function ambil(c) { var m = MOD[c.mod]; if (!m) throw new Error("mod t1sudut " + c.mod + " tidak dikenali"); return m; }
    W.t1sudut = {
      mula: function (c) { return ambil(c).mula(c); },
      kawalan: function (c) { return ambil(c).kawalan(c); },
      kira: function (c, s) { return ambil(c).kira(c, s); },
      lukis: function (c, s) { return ambil(c).lukis(c, s); }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else pasang(window.JMI);
})();
