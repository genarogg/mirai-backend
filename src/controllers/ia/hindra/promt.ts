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
};

const prompt = `

Analyze the provided photograph and conduct a detailed analysis exclusively of the face and physical features of the person.

### General Instructions:
- Limit the analysis **exclusively** to the face and visible physical features.
- **Do not** include details about clothing, background, or external elements.
- Use **Pantone Skintone Guide** and the **Fitzpatrick method**.

### JSON Output Format:
- The response **must** be a valid JSON object, structured **exactly** like this:
\`\`\`json
${JSON.stringify(formJson, null, 2)}
\`\`\`
- Fill in each field with the appropriate values based on the analysis.
- **Do not** modify the structure, keys, or format of the JSON.
- Respond **exclusively** with a **single-line** valid JSON object.
- **No explanations, no text before or after the JSON.**

Now, analyze the image and return the JSON response:
`;

export default prompt;
