const fetch = require("node-fetch");

module.exports = {
  command: ["clima", "tiempo", "weather"],
  description: "Muestra el clima de una ciudad",
  category: "general",
  use: "(ciudad)",
  run: async (client, m, args) => {
    if (!args[0]) return m.reply("🌍 Escribe una ciudad para consultar el clima");

    try {
      let city = args.join(" ");
      let res = await fetch(`https://wttr.in/${city}?format=j1`);
      let data = await res.json();

      let clima = data.current_condition[0];
      let msg = `🌤 *Clima en ${city}*\n\n🌡 Temperatura: ${clima.temp_C}°C\n☁️ Estado: ${clima.weatherDesc[0].value}\n💧 Humedad: ${clima.humidity}%\n🌬 Viento: ${clima.windspeedKmph} km/h`;
      
      m.reply(msg);
    } catch (e) {
      console.error(e);
      m.reply("⚠️ No pude obtener el clima, intenta con otra ciudad");
    }
  },
};
