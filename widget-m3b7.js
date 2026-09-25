/* Widget Bab 7 Pelan dan Dongakan: unjuran ortogon objek kubus.

   Satu objek disimpan sebagai data tinggi lajur (tinggi[y][x], baris depan
   dahulu) atau lapisan (lapis[z][y], rentetan '#' dan '.'). Segala-galanya
   dikira daripada data itu: rajah isometrik, unjuran ortogon, jenis garis
   (padu = nampak, sempang = terlindung), bilangan petak dan permukaan.
   Jadi rajah tidak boleh bercanggah dengan jawapan soalan.

   Paksi: x ke kanan, y ke belakang (y = 0 ialah muka depan), z ke atas.
   Pandangan ialah 0 Objek, 1 Dongakan depan, 2 Dongakan sisi (dari kanan),
   3 Pelan (dari atas), 4 Pelan dan dongakan dalam satu rajah dengan garis binaan.

   Fail ini dimuat selepas interaktif.js. Di Node, interaktif.js memuatkannya
   sendiri; dalam pelayar ia mendaftar pada window.JMI. */
(function () {
  function pasang(JMI) {
    var h = JMI.h, teks = h.teks, garis = h.garis, kotak = h.kotak, laluan = h.laluan, svg = h.svg, LEBAR = h.LEBAR;
    var NAMA_PANDANG = ["Objek", "Depan", "Sisi", "Pelan", "Gabung"];
    var TAJUK = ["Objek dan tiga pandangan", "Dongakan depan", "Dongakan sisi (dari kanan)", "Pelan (dari atas)", "Pelan dan dongakan"];
    var C30 = Math.cos(Math.PI / 6);

    /* ---------- data objek ---------- */
    function bina(o) {
      var lapis = o.lapis, i, j;
      if (!lapis) {
        var mz = 0;
        o.tinggi.forEach(function (r) { r.forEach(function (v) { mz = Math.max(mz, v); }); });
        lapis = [];
        for (var z = 0; z < mz; z++) lapis.push(o.tinggi.map(function (r) { return r.map(function (v) { return v > z ? "#" : "."; }).join(""); }));
      }
      var Z = lapis.length, Y = 0, X = 0;
      lapis.forEach(function (L) { Y = Math.max(Y, L.length); L.forEach(function (r) { X = Math.max(X, r.length); }); });
      var V = [];
      for (i = 0; i < X; i++) { V.push([]); for (j = 0; j < Y; j++) { V[i].push([]); for (z = 0; z < Z; z++) V[i][j].push(!!(lapis[z][j] && lapis[z][j][i] === "#")); } }
      return { X: X, Y: Y, Z: Z, V: V };
    }
    function ada(m, x, y, z) { return x >= 0 && y >= 0 && z >= 0 && x < m.X && y < m.Y && z < m.Z && m.V[x][y][z]; }

    /* Ubah kepada koordinat pandangan (u kanan, v atas, d jauh dari mata). */
    function ubah(m, jenis) {
      if (jenis === "depan") return { U: m.X, T: m.Z, D: m.Y, f: function (u, v, d) { return ada(m, u, d, v); } };
      if (jenis === "sisi") return { U: m.Y, T: m.Z, D: m.X, f: function (u, v, d) { return ada(m, m.X - 1 - d, u, v); } };
      return { U: m.X, T: m.Y, D: m.Z, f: function (u, v, d) { return ada(m, u, v, m.Z - 1 - d); } };
    }

    /* Tepi sebenar pepejal: satu unit garis ialah tepi jika empat voksel di
       sekelilingnya bukan rata (satu, tiga atau dua bersilang). Tepi terlindung
       jika kedua-dua sel unjuran di kiri dan kanannya ada voksel yang lebih
       dekat dengan mata. */
    function jadiTepi(a, b, c, e) {
      var n = (a ? 1 : 0) + (b ? 1 : 0) + (c ? 1 : 0) + (e ? 1 : 0);
      return n === 1 || n === 3 || (n === 2 && ((a && e) || (b && c)));
    }
    function unjuran(m, jenis) {
      var t = ubah(m, jenis), U = t.U, T = t.T, D = t.D, u, v, d;
      function f(a, b, c) { return a >= 0 && b >= 0 && c >= 0 && a < U && b < T && c < D && t.f(a, b, c); }
      var dekat = [];
      for (u = 0; u < U; u++) { dekat.push([]); for (v = 0; v < T; v++) { var nd = Infinity; for (d = 0; d < D; d++) if (f(u, v, d)) { nd = d; break; } dekat[u].push(nd); } }
      function tutup(a, b, dl) { return a >= 0 && b >= 0 && a < U && b < T && dekat[a][b] < dl; }
      var seg = {};
      function letak(jen, a, b, terlindung) {
        var k = jen + a + "," + b;
        if (!seg[k]) seg[k] = { jen: jen, a: a, b: b, nampak: false };
        if (!terlindung) seg[k].nampak = true;
      }
      var vl, dl, ul;
      for (vl = 0; vl <= T; vl++) for (dl = 0; dl <= D; dl++) for (u = 0; u < U; u++)
        if (jadiTepi(f(u, vl - 1, dl - 1), f(u, vl, dl - 1), f(u, vl - 1, dl), f(u, vl, dl)))
          letak("h", u, vl, tutup(u, vl - 1, dl) && tutup(u, vl, dl));
      for (ul = 0; ul <= U; ul++) for (dl = 0; dl <= D; dl++) for (v = 0; v < T; v++)
        if (jadiTepi(f(ul - 1, v, dl - 1), f(ul, v, dl - 1), f(ul - 1, v, dl), f(ul, v, dl)))
          letak("v", ul, v, tutup(ul - 1, v, dl) && tutup(ul, v, dl));
      var petak = 0, sel = [];
      for (u = 0; u < U; u++) { sel.push([]); for (v = 0; v < T; v++) { var isi = dekat[u][v] < Infinity; sel[u].push(isi); if (isi) petak++; } }
      var garisan = Object.keys(seg).map(function (k) { return seg[k]; });
      return {
        U: U, T: T, sel: sel, petak: petak, garis: garisan,
        nampak: garisan.filter(function (g) { return g.nampak; }).length,
        sempang: garisan.filter(function (g) { return !g.nampak; }).length
      };
    }
    /* Baca-lihat ASCII untuk ujian: X = petak, - | = tepi nampak, ~ ! = tepi terlindung. */
    function ascii(m, jenis) {
      var p = unjuran(m, jenis), baris = [], v, u;
      function cari(jen, a, b) { for (var i = 0; i < p.garis.length; i++) { var g = p.garis[i]; if (g.jen === jen && g.a === a && g.b === b) return g; } return null; }
      for (v = p.T; v >= 0; v--) {
        var s = "";
        for (u = 0; u < p.U; u++) { var g1 = cari("h", u, v); s += "+" + (g1 ? (g1.nampak ? "--" : "~~") : "  "); }
        s += "+"; baris.push(s);
        if (v > 0) {
          var s2 = "";
          for (u = 0; u <= p.U; u++) { var g2 = cari("v", u, v - 1); s2 += (g2 ? (g2.nampak ? "|" : "!") : " ") + (u < p.U ? (p.sel[u][v - 1] ? "XX" : "  ") : ""); }
          baris.push(s2);
        }
      }
      return baris.join("\n");
    }

    function kiraObjek(o) {
      var m = bina(o), n = 0, x, y, z, permukaan = 0;
      for (x = 0; x < m.X; x++) for (y = 0; y < m.Y; y++) for (z = 0; z < m.Z; z++) if (m.V[x][y][z]) {
        n++;
        [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]].forEach(function (a) { if (!ada(m, x + a[0], y + a[1], z + a[2])) permukaan++; });
      }
      var dp = unjuran(m, "depan"), sp = unjuran(m, "sisi"), pp = unjuran(m, "pelan");
      return {
        X: m.X, Y: m.Y, Z: m.Z, kubus: n, permukaan: permukaan,
        depan: dp.petak, sisi: sp.petak, pelan: pp.petak,
        sempangDepan: dp.sempang, sempangSisi: sp.sempang, sempangPelan: pp.sempang,
        model: m
      };
    }

    /* ---------- lukisan ---------- */
    var LATAR = { depan: "hijauLembut", sisi: "kuningLembut", pelan: "lembayungLembut" };
    var TEKS_WARNA = { depan: "hijau", sisi: "kuning", pelan: "lembayung" };

    function iso(m, pandang, mendatar, atas, lebarMaks, tinggiMaks) {
      var X = m.X, Y = m.Y, Z = m.Z;
      var s = Math.min(24, lebarMaks / ((X + Y) * C30), tinggiMaks / ((X + Y) * 0.5 + Z));
      var minSy = (0 - Y) * 0.5 - Z, maxSy = X * 0.5, tinggi = (maxSy - minSy) * s, lebar = (X + Y) * C30 * s;
      var ox = mendatar + (lebarMaks - lebar) / 2, oy = atas + (tinggiMaks - tinggi) / 2 - minSy * s;
      function P(x, y, z) { return (Math.round((ox + (x + y) * C30 * s) * 10) / 10) + "," + (Math.round((oy + ((x - y) * 0.5 - z) * s) * 10) / 10); }
      var wDepan = pandang === 1 ? LATAR.depan : pandang === 0 ? LATAR.depan : "kertas2";
      var wSisi = pandang === 2 || pandang === 0 ? LATAR.sisi : "kertas2";
      var wAtas = pandang === 3 || pandang === 0 ? LATAR.pelan : "kertas2";
      if (pandang === 4) { wDepan = LATAR.depan; wAtas = LATAR.pelan; wSisi = "kertas2"; }
      var out = "", x, y, z;
      var op = { warna: "tinta3", tebal: 1 };
      function muka(pt, isi) { return laluan("M" + pt.join("L") + "Z", { isi: isi, warna: op.warna, tebal: op.tebal }); }
      for (x = 0; x < X; x++) for (y = Y - 1; y >= 0; y--) for (z = 0; z < Z; z++) {
        if (!ada(m, x, y, z)) continue;
        if (!ada(m, x, y - 1, z)) out += muka([P(x, y, z), P(x + 1, y, z), P(x + 1, y, z + 1), P(x, y, z + 1)], wDepan);
        if (!ada(m, x + 1, y, z)) out += muka([P(x + 1, y, z), P(x + 1, y + 1, z), P(x + 1, y + 1, z + 1), P(x + 1, y, z + 1)], wSisi);
        if (!ada(m, x, y, z + 1)) out += muka([P(x, y, z + 1), P(x + 1, y, z + 1), P(x + 1, y + 1, z + 1), P(x, y + 1, z + 1)], wAtas);
      }
      return out;
    }

    /* Satu unjuran pada grid: kisi kosong sentiasa nampak, isi dan garis ialah hasil. */
    function grid(p, ox, ybawah, cs, warnaIsi) {
      var kisi = "", isi = "", tersembunyi = "", nampak = "", u, v;
      for (u = 0; u < p.U; u++) for (v = 0; v < p.T; v++) {
        var x = ox + u * cs, y = ybawah - (v + 1) * cs;
        kisi += kotak(x, y, cs, cs, { garis: "garis", tebal: 0.5, bulat: 0 });
        if (p.sel[u][v]) isi += kotak(x, y, cs, cs, { isi: warnaIsi, garis: "garis", tebal: 0.5, bulat: 0 });
      }
      p.garis.forEach(function (g) {
        var l;
        if (g.jen === "h") l = [ox + g.a * cs, ybawah - g.b * cs, ox + (g.a + 1) * cs, ybawah - g.b * cs];
        else l = [ox + g.a * cs, ybawah - g.b * cs, ox + g.a * cs, ybawah - (g.b + 1) * cs];
        if (g.nampak) nampak += garis(l[0], l[1], l[2], l[3], { warna: "tinta", tebal: 2.2 });
        else tersembunyi += garis(l[0], l[1], l[2], l[3], { warna: "tinta2", tebal: 1.6, putus: "4 3" });
      });
      return { kisi: kisi, hasil: '<g class="jmi-hasil">' + isi + tersembunyi + nampak + "</g>" };
    }

    function saiz(c) {
      var mx = 0, my = 0, mz = 0;
      c.objek.forEach(function (o) { var m = bina(o); mx = Math.max(mx, m.X); my = Math.max(my, m.Y); mz = Math.max(mz, m.Z); });
      var cs = Math.min(22, Math.floor(104 / Math.max(mx, my)));
      return { mx: mx, my: my, mz: mz, cs: cs, gabung: mz * cs + 22 + my * cs, satu: Math.max(mz, my) * cs };
    }

    JMI.W.unjuran = {
      mula: function (c) { return { p: c.p == null ? 1 : c.p, o: c.o || 0 }; },
      kawalan: function (c) {
        var k = [{ k: "p", label: "pandangan", min: 0, maks: 4, teks: NAMA_PANDANG }];
        if (c.objek.length > 1) k.push({ k: "o", label: "objek", min: 0, maks: c.objek.length - 1, teks: c.objek.map(function (o) { return o.nama; }) });
        return k;
      },
      hitung: kiraObjek,
      unjuran: function (o, jenis) { return unjuran(bina(o), jenis); },
      ascii: function (o, jenis) { return ascii(bina(o), jenis); },
      kira: function (c, s) { var o = c.objek[s.o || 0], r = kiraObjek(o); r.nama = o.nama; return r; },
      lukis: function (c, s) {
        var o = c.objek[s.o || 0], r = kiraObjek(o), m = r.model, z = saiz(c), cs = z.cs, p = s.p;
        var yAtas = 30, H0 = Math.max(118, z.gabung, z.satu);
        var isi = teks(LEBAR / 2, 16, TAJUK[p], { tengah: true, saiz: 12, warna: "tinta", tebal: true });
        var unit = c.unit ? "1 petak = " + c.unit + " cm" : "";
        var ox = 146;
        if (p !== 4) isi += iso(m, p, 6, yAtas, 128, 118);
        if (p === 0) {
          ["Gelongsor", "pandangan", "untuk lihat", "unjuran"].forEach(function (t, i) { isi += teks(ox + 4, yAtas + 40 + i * 16, t, { saiz: 12, warna: "tinta2" }); });
        } else if (p === 1 || p === 2 || p === 3) {
          var jenis = p === 1 ? "depan" : p === 2 ? "sisi" : "pelan", pr = unjuran(m, jenis);
          var g = grid(pr, ox, yAtas + pr.T * cs, cs, LATAR[jenis]);
          isi += g.kisi + g.hasil;
        } else {
          var oxg = 96, pd = unjuran(m, "depan"), pp = unjuran(m, "pelan");
          var yb1 = yAtas + m.Z * cs, yb2 = yb1 + 22 + m.Y * cs;
          var g1 = grid(pd, oxg, yb1, cs, LATAR.depan), g2 = grid(pp, oxg, yb2, cs, LATAR.pelan);
          var binaan = "";
          for (var u = 0; u <= m.X; u++) {
            var ada2 = pd.garis.concat(pp.garis).some(function (e) { return (e.jen === "v" && e.a === u) || (e.jen === "h" && (e.a === u || e.a === u - 1)); });
            if (ada2) binaan += garis(oxg + u * cs, yb1 + 1, oxg + u * cs, yb1 + 21, { warna: "tinta3", tebal: 0.8 });
          }
          isi += g1.kisi + g2.kisi + '<g class="jmi-hasil">' + binaan + "</g>" + g1.hasil + g2.hasil;
          isi += teks(8, yb1 - m.Z * cs / 2 + 4, "Dongakan", { saiz: 12, warna: "hijau", tebal: true });
          isi += teks(8, yb2 - m.Y * cs / 2 + 4, "Pelan", { saiz: 12, warna: "lembayung", tebal: true });
        }
        var yt = yAtas + H0 + 18;
        isi += teks(8, yt, o.nama, { saiz: 11, warna: "tinta2" });
        isi += teks(8 + (o.nama.length + 1) * 6.6, yt, "· " + r.kubus + " kubus", { saiz: 11, warna: "tinta2", hasil: true });
        var info = ["", r.depan + " petak dongakan depan", r.sisi + " petak dongakan sisi", r.pelan + " petak pelan", "Dongakan " + r.depan + " · Pelan " + r.pelan + " petak"][p];
        if (p > 0) {
          isi += teks(8, yt + 16, info, { saiz: 11, warna: "tinta", tebal: true, hasil: true });
          isi += garis(8, yt + 30, 24, yt + 30, { warna: "tinta", tebal: 2.2 }) + teks(28, yt + 34, "nampak", { saiz: 11, warna: "tinta2" });
          isi += garis(84, yt + 30, 100, yt + 30, { warna: "tinta2", tebal: 1.6, putus: "4 3" }) + teks(104, yt + 34, "sempang", { saiz: 11, warna: "tinta2" });
          isi += garis(160, yt + 30, 176, yt + 30, { warna: "tinta3", tebal: 0.8 }) + teks(180, yt + 34, "binaan", { saiz: 11, warna: "tinta2" });
        } else {
          isi += teks(8, yt + 16, "Pilih pandangan untuk lihat unjuran", { saiz: 11, warna: "tinta2" });
        }
        if (unit) isi += teks(8, yt + 52, unit, { saiz: 11, warna: "tinta2" });
        return svg(yt + (unit ? 60 : 44), isi, "Rajah objek " + o.nama + " daripada " + r.kubus + " kubus dalam tiga dimensi. Gelongsor memilih pandangan: dongakan depan, dongakan sisi, pelan dan gabungan pelan dengan dongakan, dengan garis nampak, sempang dan binaan");
      }
    };
  }
  if (typeof module !== "undefined" && module.exports) module.exports = pasang;
  else if (typeof window !== "undefined" && window.JMI) pasang(window.JMI);
})();
