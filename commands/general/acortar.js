const fetch = require("node-fetch");

module.exports = {
  command: ["acortar", "short", "linkcorto"],
  description: "Acorta un enlace usando una API pública",
  category: "general",
  use: "(link)",
  run: async (client, m, args) => {
    if (!args[0]) return m.reply("🔗 Escribe un enlace para acortar");

    try {
      let link = args[0];
      let res = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(link)}`);
      let data = await res.json();
      if (!data.ok) return m.reply("⚠️ No se pudo acortar el enlace");

      m.reply(`🔗 Link original: ${link}\n✂️ Link corto: ${data.result.full_short_link}`);
    } catch (e) {
      console.error(e);
      m.reply("⚠️ Error al acortar el enlace");
    }
  },
};
