const promtColorimetria = `
Analiza la fotografía proporcionada y realiza un análisis detallado exclusivamente del rostro y las características físicas de la persona, organizado en las siguientes secciones. Presenta los resultados al final en una estructura JSON usando únicamente el formato HSL.

1. Instrucciones Generales
Idioma del análisis: [especificar idioma: español, inglés, etc.].
Limita el análisis exclusivamente al rostro y las características físicas visibles. No incluyas detalles sobre ropa, fondo o elementos externos.
Usa terminología precisa y presenta los resultados organizados de manera clara y detallada.

2. Piel
Identifica el color predominante de la piel en formato HSL.
Determina los subtonos de la piel (frío, cálido o neutro) y explica brevemente cómo llegaste a esta conclusión.
Analiza las variaciones de color en las siguientes áreas del rostro, indicando sus valores HSL:
Frente
Mejillas
Nariz
Mentón

3. Ojos
Extrae el color predominante del iris en formato HSL.
Describe los detalles secundarios del iris, incluyendo:
Presencia de manchas (doradas, azuladas, grisáceas, etc.).
Proporción aproximada de estos colores.
Analiza el anillo limbal (si es visible), especificando:
Color en HSL.
Grosor y nivel de definición.
Evalúa el contraste entre el iris y la esclerótica, clasificándolo como alto, medio o bajo.

4. Cabello
Proporciona el color base del cabello en formato HSL.
Indica la presencia de reflejos, especificando:
Tonos (dorados, rojizos, cenizos, plateados, etc.).
Proporción aproximada respecto al color base.
Analiza las variaciones de color entre las raíces y las puntas, si son visibles, en formato HSL.

5. Características Generales
Determina el nivel de contraste general entre la piel, los ojos y el cabello (alto, medio o bajo).
Analiza la saturación y brillo de los colores predominantes del rostro.
Describe cualquier rasgo que influya en la percepción del color, como:
Textura de la piel.
Brillo o reflectividad del cabello.
Aspecto general de las áreas sombreadas.

6. Opcional: Paleta Cromática y Tonalidades
Genera una paleta cromática aproximada con los 5 colores predominantes en el rostro, presentando sus valores en formato HSL.

7. Resultado en JSON
Al finalizar, organiza los resultados en la siguiente estructura JSON:

data:
{
  "idioma": "español",
  "piel": {
    "colorPredominante": {
      "hsl": "(h, s, l)"
    },
    "subtonos": "cálido",
    "variaciones": {
      "frente": { "hsl": "(h, s, l)" },
      "mejillas": { "hsl": "(h, s, l)" },
      "nariz": { "hsl": "(h, s, l)" },
      "mentón": { "hsl": "(h, s, l)" }
    }
  },
  "ojos": {
    "colorPredominante": { "hsl": "(h, s, l)" },
    "detallesSecundarios": {
      "manchas": {
        "doradas": "20%",
        "azuladas": "10%"
      }
    },
    "anilloLimbal": {
      "color": { "hsl": "(h, s, l)" },
      "grosor": "definido"
    },
    "contrasteEsclerotica": "alto"
  },
  "cabello": {
    "colorBase": { "hsl": "(h, s, l)" },
    "reflejos": {
      "tonos": "dorados",
      "proporcion": "15%"
    },
    "variacionesRaizPuntas": {
      "raiz": { "hsl": "(h, s, l)" },
      "puntas": { "hsl": "(h, s, l)" }
    }
  },
  "caracteristicasGenerales": {
    "contrasteGeneral": "medio",
    "saturacion": "alta",
    "brillo": "moderado",
    "otrosRasgos": "textura suave"
  },
  "paletaCromatica": [
    { "hsl": "(h, s, l)" },
    { "hsl": "(h, s, l)" },
    { "hsl": "(h, s, l)" },
    { "hsl": "(h, s, l)" },
    { "hsl": "(h, s, l)" }
  ]
}

Responde exclusivamente con el JSON generado, sin agregar texto adicional o explicaciones fuera de este formato.
`

export default promtColorimetria