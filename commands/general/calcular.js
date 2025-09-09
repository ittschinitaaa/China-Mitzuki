module.exports = {
  command: ["calcular", "calc", "math"],
  description: "Resuelve operaciones matemáticas básicas",
  category: "general",
  use: "(operación)",
  run: async (client, m, args) => {
    if (!args[0]) return m.reply("✏️ Escribe una operación para calcular\n\nEjemplo: #calcular 5+5*2");

    try {
      let operacion = args.join(" ");
      let resultado = eval(operacion);

      if (isNaN(resultado)) return m.reply("⚠️ Operación inválida");
      m.reply(`📊 Operación: *${operacion}*\n✅ Resultado: *${resultado}*`);
    } catch (e) {
      m.reply("❌ Error al calcular, revisa la operación");
    }
  },
};
