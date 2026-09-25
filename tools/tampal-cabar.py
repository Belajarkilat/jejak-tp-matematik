"""Tampalan sekali guna: mod cabar untuk rajah interaktif (25 Sep 2026).
Teks hasil ditanda class jmi-hasil; dalam mod cabar ia disembunyikan sehingga
murid menekan 'Semak dengan rajah'. Soalan TP tinggi tidak lagi dijawab
dengan hanya membaca rajah."""
import sys
p = 'interaktif.js'
s = open(p, encoding='utf-8').read()

def g(a, b, kali=1):
    global s
    n = s.count(a)
    if n != kali:
        sys.exit('GAGAL (%d kali, jangka %d): %r' % (n, kali, a[:90]))
    s = s.replace(a, b)

# teks(): terima o.hasil -> class jmi-hasil
g('''    return '<text x="' + b1(x) + '" y="' + b1(y) + '" xml:space="preserve" style="white-space:pre" font-family="' ''',
  '''    return '<text' + (o.hasil ? ' class="jmi-hasil"' : "") + ' x="' + b1(x) + '" y="' + b1(y) + '" xml:space="preserve" style="white-space:pre" font-family="' ''')
# ungkap(): sebarkan o.hasil
g('out += teks(x, y, segs[i], { saiz: sz, warna: o.warna || "tinta", tebal: o.tebal });',
  'out += teks(x, y, segs[i], { saiz: sz, warna: o.warna || "tinta", tebal: o.tebal, hasil: o.hasil });')
g('out += teks(x, y - 6, segs[i].p, { saiz: esz, warna: o.warna || "tinta", tebal: o.tebal });',
  'out += teks(x, y - 6, segs[i].p, { saiz: esz, warna: o.warna || "tinta", tebal: o.tebal, hasil: o.hasil });')

# kuasa: garis nilai blok
g('isi += teks(LEBAR / 2, 46, "= " + nilai.toLocaleString("en-US").replace(/,/g, " ") + " blok", { tengah: true, saiz: 14, warna: "ungu", tebal: true });',
  'isi += teks(LEBAR / 2, 46, "= " + nilai.toLocaleString("en-US").replace(/,/g, " ") + " blok", { tengah: true, saiz: 14, warna: "ungu", tebal: true, hasil: true });')
# lipat: lapisan dan tebal
g('isi += ungkap(LEBAR / 2, 38, ["Lapisan: 2", { p: String(s.n) }, " = " + lap], { saiz: 13, warna: "ungu", tebal: true });',
  'isi += ungkap(LEBAR / 2, 38, ["Lapisan: 2", { p: String(s.n) }, " = " + lap], { saiz: 13, warna: "ungu", tebal: true, hasil: true });')
g('isi += teks(LEBAR / 2, 176, "Tebal: " + lap + " × " + c.tebal + " mm = " + r.tebal + " mm", { tengah: true, saiz: 12, warna: "ungu", tebal: true });',
  'isi += teks(LEBAR / 2, 176, "Tebal: " + lap + " × " + c.tebal + " mm = " + r.tebal + " mm", { tengah: true, saiz: 12, warna: "ungu", tebal: true, hasil: true });')
# hukum: garis hasil (tiga mod)
g('isi += ungkap(LEBAR / 2, y, ["= " + a, K(s.m + " + " + s.n), " = " + a, K(r.indeks)], { saiz: 14, warna: "ungu", tebal: true });',
  'isi += ungkap(LEBAR / 2, y, ["= " + a, K(s.m + " + " + s.n), " = " + a, K(r.indeks)], { saiz: 14, warna: "ungu", tebal: true, hasil: true });')
g('isi += ungkap(LEBAR / 2, y, hasilB, { saiz: 14, warna: r.indeks < 0 ? "merah" : "ungu", tebal: true });',
  'isi += ungkap(LEBAR / 2, y, hasilB, { saiz: 14, warna: r.indeks < 0 ? "merah" : "ungu", tebal: true, hasil: true });')
g('isi += ungkap(LEBAR / 2, y, ["= " + a, K(s.m + " × " + s.n), " = " + a, K(r.indeks)], { saiz: 14, warna: "ungu", tebal: true });',
  'isi += ungkap(LEBAR / 2, y, ["= " + a, K(s.m + " × " + s.n), " = " + a, K(r.indeks)], { saiz: 14, warna: "ungu", tebal: true, hasil: true });')
# piawai: ungkapan dan lencana
g('isi += ungkap(LEBAR / 2, 90, ["= " + r.pekali + " × 10", { p: String(s.k) }], { saiz: 14, warna: "ungu", tebal: true });',
  'isi += ungkap(LEBAR / 2, 90, ["= " + r.pekali + " × 10", { p: String(s.k) }], { saiz: 14, warna: "ungu", tebal: true, hasil: true });')
g('isi += teks(LEBAR / 2, 119, r.piawai ? "Bentuk piawai: 1 ≤ A < 10" : "Belum: A mesti 1 ≤ A < 10", { tengah: true, saiz: 11, warna: "tinta", tebal: true });',
  'isi += teks(LEBAR / 2, 119, r.piawai ? "Bentuk piawai: 1 ≤ A < 10" : "Belum: A mesti 1 ≤ A < 10", { tengah: true, saiz: 11, warna: "tinta", tebal: true, hasil: true });')
# ab: keputusan bundar
g('isi += teks(LEBAR / 2, 92, r.bundar, { tengah: true, saiz: 16, warna: "ungu", tebal: true });',
  'isi += teks(LEBAR / 2, 92, r.bundar, { tengah: true, saiz: 16, warna: "ungu", tebal: true, hasil: true });')

# figura(): class cabar
g('''    return '<figure class="figure jmi" data-w="' ''', '''    return '<figure class="figure jmi' + (spec.cabar ? ' cabar' : '') + '" data-w="' ''')

# hidupkanSatu(): nota + butang semak dalam mod cabar
g('''    var cap = fig.querySelector("figcaption");
    fig.insertBefore(panel, cap);''',
  '''    var cap = fig.querySelector("figcaption");
    fig.insertBefore(panel, cap);
    if (spec.cabar) {
      var kotakCabar = document.createElement("div"); kotakCabar.className = "jmi-cabar";
      var nota = document.createElement("p"); nota.textContent = "Mod cabar: kira dahulu di kertas conteng, kemudian semak jawapan awak dengan rajah.";
      var sb = document.createElement("button"); sb.type = "button"; sb.className = "jmi-semak"; sb.setAttribute("aria-pressed", "false");
      sb.textContent = "\\uD83D\\uDC41 Semak dengan rajah";
      sb.onclick = function () {
        var on = !fig.classList.contains("tunjuk");
        fig.classList.toggle("tunjuk", on); sb.setAttribute("aria-pressed", on ? "true" : "false");
        sb.textContent = on ? "Sembunyi hasil rajah" : "\\uD83D\\uDC41 Semak dengan rajah"; klik();
      };
      kotakCabar.appendChild(nota); kotakCabar.appendChild(sb);
      fig.insertBefore(kotakCabar, panel);
    }''')

open(p, 'w', encoding='utf-8').write(s)
print('ok')
