const formJson = {
  idioma: "español",
  descripcionGeneral: {
    formaDeOjos: "",
    formaDelrostro: "", // ejemplo: ovalada, redonda, cuadrada, etc.
    tipoDePiel: "", // ejemplo: normal, seca, etc
    simetriaFacial: "", // Puede ser: simetría perfecta, simetría leve, asimetría moderada, asimetría marcada
  },
  piel: {
    colorPredominante: { hex: "#" },
    subtonos: "",
    variaciones: {
      frente: { hex: "#" },
      mejillas: { hex: "#" },
      nariz: { hex: "#" },
      menton: { hex: "#" }
    }
  },
  ojos: {
    colorPredominante: { hex: "#" },
    anilloLimbal: {
      color: { hex: "#" },
      grosor: "descripcion del grosor"
    },
    contrasteEsclerotica: "",
    proporcionOjosCara: "",
    distanciaInterocular: "",
  },
  nariz: {
    formaDeLaNariz: "",
    anchoDeLasFosas: "",
  },
  bocaYLabios: {
    formaDeLosLabios: "",
    contornoDeLabios: "",
    tamañoDeLaBoca: ""
  },
  cabello: {
    colorBase: { hex: "#" },
    reflejos: {
      tonos: "dorados",
      proporcion: "0%"
    },
    variacionesRaizPuntas: {
      raiz: { hex: "#" },
      puntas: { hex: "#" }
    },
    cejas: {
      forma: "",
      densidad: "",
      grosor: "",
      color: { hex: "#" }
    },
    texturaCabello: "",
    volumen: ""
  },
  colorimetria: {
    coloresQueFavorecen: [
      { nombre: "", hex: "#" },
      { nombre: "", hex: "#" },
      { nombre: "", hex: "#" },
      { nombre: "", hex: "#" },
      { nombre: "", hex: "#" }
    ],
    coloresQueDesfavorecen: [
      { nombre: "", hex: "#" },
      { nombre: "", hex: "#" },
      { nombre: "", hex: "#" },
      { nombre: "", hex: "#" },
      { nombre: "", hex: "#" }
    ],
    estacionDeColor: "" // Ejemplo: "Primavera cálida", "Invierno profundo", "Otoño suave", etc.
  }
};

const promtAnalizarImg = `
Analiza la fotografía proporcionada y realiza un análisis detallado exclusivamente del rostro y las características físicas de la persona, organizado en las siguientes secciones. Presenta los resultados al final en una estructura JSON usando únicamente el formato HEX.

1. Instrucciones Generales
Idioma del análisis de respuesta: inglés
Limita el análisis exclusivamente al rostro y las características físicas visibles. No incluyas detalles sobre ropa, fondo o elementos externos.
Usa terminología precisa y presenta los resultados organizados de manera clara y detallada.

Estructura: ${JSON.stringify(formJson, null, 2)}

Responde exclusivamente con el JSON generado (sin saltos de línea y todo comprimido en una sola línea), sin agregar texto adicional o explicaciones fuera de este formato.

Por favor, genera un JSON completamente válido y estructurado, sin ningún texto adicional fuera del objeto. La respuesta debe ser directamente usable como un objeto JSON.
`;

export default promtAnalizarImg;
