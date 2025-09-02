// commands/general/creador.js
module.exports = {
  command: ["owner", "creador"],
  description: "Muestra información del creador del bot",
  category: "general",
  async run(client, m) {
    try {
      const name = "Mía (Chinita) 💖"; 
      const number = "923256941884"; 

      const caption = `
🌸 *Creadora del Bot* 🌸

👑 Nombre: ${name}
📱 WhatsApp: wa.me/${number}
💻 País: Argentina 🇦🇷
`;

      const buttons = [
        { buttonId: "menu", buttonText: { displayText: "📖 Menú" }, type: 1 },
        { buttonId: "help", buttonText: { displayText: "❓ Ayuda" }, type: 1 }
      ];

      const msg = {
        text: caption,
        footer: "Gracias por usar el bot 💕",
        buttons: buttons
      };

      await client.sendMessage(m.chat, msg, { quoted: m });

    } catch (e) {
      console.log(e);
      await client.sendMessage(m.chat, { text: "❌ Hubo un error al mostrar el creador." }, { quoted: m });
    }
  }
};

/*
module.exports = {
  command: ["creador", "owner"],
  description: "Muestra la información del creador de manera linda",
  category: "info",
  isGroup: false,
  run: async (client, m, args) => {
    try {
      // Foto del creador (puedes poner un enlace a su foto real)
      const fotoCreador = "https://files.catbox.moe/sklz18.png";

      // Texto bonito con emojis
      let mensaje = `👑 *Conoce al Creador del Bot*\n\n`;
      mensaje += `✨ Nombre: Mía "Chinita"\n`;
      mensaje += `📱 WhatsApp: +92 325 6941884\n`;
      mensaje += `🌎 País: Argentina\n`;
      mensaje += `💌 Bio: "Siempre creando cosas lindas para mis bots 😸"\n\n`;
      mensaje += `🔹 Para soporte o consultas, toca el botón de abajo.`;

      // Botones interactivos
      const buttons = [
        { buttonId: "contacto_creador", buttonText: { displayText: "📩 Contactar" }, type: 1 },
        { buttonId: "mas_info", buttonText: { displayText: "ℹ️ Más Info" }, type: 1 }
      ];

      // Enviar mensaje con foto y botones
      await client.sendMessage(m.chat, {
        image: { url: fotoCreador },
        caption: mensaje,
        footer: "✨ 𝐒𝐭𝐚𝐫𝐥𝐢𝐠𝐡𝐭𝐬 ✨",
        buttons: buttons,
        headerType: 4
      }, { quoted: m });

    } catch (e) {
      console.error(e);
      m.reply("❌ No se pudo mostrar la información del creador");
    }
  },
};
*/
