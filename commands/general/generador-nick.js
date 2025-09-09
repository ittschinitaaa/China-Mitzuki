const fetch = require("node-fetch");

module.exports = {
  command: ["nickbase", "nickapi", "nickconbase"],
  description: "Genera un nickname desde API pública. Puedes incluir un nombre base opcional.",
  category: "general",
  use: "(opcional: nombre base)",
  run: async (client, m, args) => {
    let base = args.join(" ").trim(); // nombre opcional
    try {
      let url = "https://randommer.io/randommer-api/name";
      if (base) {
        // incluimos base como género “neutral” para personalizar
        url += `?nationality=us`; // puedes ajustar según lo que quieras
      }
      let res = await fetch(url);
      if (!res.ok) throw await res.text();
      let data = await res.json();
      let nickname = data.name;
      if (!nickname) {
        return m.reply("No se pudo obtener un nickname en este momento 😿");
      }
      // Si hay base, lo incluimos de forma creativa
      if (base) {
        nickname = `${base}_${nickname.replace(/\s+/g, "")}`;
      }
      m.reply("✨ Tu nickname es:\n\n" + nickname);
    } catch (e) {
      console.error(e);
      m.reply("⚠️ Error al generar el nickname desde la API");
    }
  },
};
