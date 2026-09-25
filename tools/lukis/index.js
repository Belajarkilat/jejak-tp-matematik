/* Pendaftar penjana rajah.

   Sumber bab menulis spesifikasi, bukan SVG:

     lampiran: {
       refleks: { jenis:"aliran", mod:"turun", nod:[...],
                  kapsyen:"Rajah 1 · ...", alt:"..." }
     }

   bina.js memanggil lukisLampiran() untuk setiap nilai yang berupa objek,
   dan membiarkan nilai yang sudah berupa string (jadual HTML sedia ada).

   Setiap penjana mesti mematuhi asas.js: warna logik sahaja, fon minimum
   11px, dan viewBox selebar lebih kurang 300 supaya teks kekal terbaca
   pada telefon. */
const penjana = {
  aliran: require("./aliran"),
  skala: require("./skala"),
  graf: require("./graf"),
  struktur: require("./struktur"),
  sinar: require("./sinar"),
  daya: require("./daya"),
  kanta: require("./kanta"),
  /* Matematik: rajah interaktif, SVG keadaan awal dijana oleh fail yang sama
     yang menghidupkannya dalam pelayar. */
  interaktif: { lukis: (spec) => require("../../interaktif").lukis(spec) },
};

function lukisLampiran(spec){
  if(typeof spec === "string") return spec;
  if(!spec || typeof spec !== "object") throw new Error("lampiran mesti string atau objek spesifikasi");
  const p = penjana[spec.jenis];
  if(!p) throw new Error(`jenis rajah "${spec.jenis}" tidak dikenali; ada: ${Object.keys(penjana).join(", ")}`);
  return p.lukis(spec);
}

module.exports = { lukisLampiran, penjana };
