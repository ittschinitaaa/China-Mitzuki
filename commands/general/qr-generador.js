const fetch = require("node-fetch");

module.exports = {
  command: ["qr", "qrgenerator", "generarqr"],
  description: "Genera un código QR de un texto o enlace",
  category: "general",
  use: "(texto o link)",
  run: async (client, m, args) => {
    if (!args[0]) return m.reply("✏️ Escribe un texto o link para generar el QR");

    try {
      let text = args.join(" ");
      let url = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(text)}`;
      await client.sendMessage(m.chat, { image: { url }, caption: `📄 QR de: ${text}` }, { quoted: m });
    } catch (e) {
      console.error(e);
      m.reply("⚠️ Error al generar el QR");
    }
  },
};
