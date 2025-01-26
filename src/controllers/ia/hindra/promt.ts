const formJson = {
    colorDePiel: "",
    colorDePelo: "",
    colorDeOjos: "",
    tonoDePiel: "",
    subtonoDePiel: "",
    estacionDelAno: "",
    tipoDeRostro: "",
    sistemaFitzpatrick: "",
    PantoneSkintone: "",
    NARSSkinToneSystem: "",
    LOrealColorCode: "",
    ColorMeBeautiful: "",
    MunsellColorSystem: ""
}

const promt = `
Analyze the provided photograph and conduct a detailed analysis exclusively of the face and physical features of the person.

General Instructions
Limit the analysis exclusively to the face and visible physical features. Do not include details about clothing, background, or external elements.

Use the Pantone Skintone Guide method and the Fitzpatrick method.

Structure: ${JSON.stringify(formJson, null, 2)}

Present the results at the end in a JSON structure.

Respond exclusively with a fully valid, structured, and compressed JSON object in a single line, without adding any text or explanations outside of the JSON object.
`

export default promt;
