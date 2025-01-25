const toJson = (responseStr: string): any => {
    // Eliminar los caracteres de escape y limpiar la cadena
    const cleanStr = responseStr
    .trim()
    .replace(/\\n/g, '')
    .replace(/\\"/g, '"')
    .replace(/```json/g, '')
    .replace(/```/g, '')
    .replace(/data: /g, '')
    .replace(/\\ñ/g, 'ñ')  // Reemplazar \ñ por ñ
    .replace(/\\á/g, 'á')  // Reemplazar \á por á
    .replace(/\\é/g, 'é')  // Reemplazar \é por é
    .replace(/\\í/g, 'í')  // Reemplazar \í por í
    .replace(/\\ó/g, 'ó')  // Reemplazar \ó por ó
    .replace(/\\ú/g, 'ú'); // Reemplazar \ú por ú
        
    try {
        return JSON.parse(cleanStr);
    } catch (error) {
        return { error: { error: 'No se pudo convertir en JSON', originalResponse: responseStr } };
    }
}

export default toJson;