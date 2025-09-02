// commands/info/creador.js
module.exports = {
  command: ["creador", "owner"],
  description: "Muestra la información del creador de manera linda",
  category: "info",
  isGroup: false,
  run: async (client, m, args) => {
    try {
      const fotoCreador = "https://files.catbox.moe/sklz18.png";

      let mensaje = `👑 *Conoce al Creador del Bot*\n\n`;
      mensaje += `✨ Nombre: Mía "Chinita"\n`;
      mensaje += `🌎 País: Argentina\n`;
      mensaje += `💌 Bio: "Siempre creando cosas lindas para mis bots 😸"\n\n`;
      mensaje += `🔹 Presiona los botones para recibir mi contacto o ver mi Instagram.`;

      // Botones tipo quick reply
      const buttons = [
        {
          buttonId: "contactame",
          buttonText: { displayText: "📩 Contactarme" },
          type: 1
        },
        {
          url: "https://www.instagram.com/its.chinitaaa_",
          displayText: "ℹ️ Mi Instagram",
          type: 1
        }
      ];

      await client.sendMessage(m.chat, {
        image: { url: fotoCreador },
        caption: mensaje,
        footer: "✨ 𝐒𝐭𝐚𝐫𝐥𝐢𝐠𝐡𝐭𝐬 ✨",
        templateButtons: buttons,
        headerType: 4
      }, { quoted: m });

      // Escuchar la acción del botón "contactame"
      client.on("message.upsert", async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message || !msg.key.fromMe) return;

        if (msg.message.buttonsResponseMessage?.selectedButtonId === "contactame") {
          await client.sendContact(m.chat, "923256941884", "𝐂𝐇𝐈𝐍𝐈𝐓𝐀", m);
        }
      });

    } catch (e) {
      console.error(e);
      m.reply("❌ No se pudo mostrar la información del creador");
    }
  },
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
