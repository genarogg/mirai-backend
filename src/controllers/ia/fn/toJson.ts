const toJson = (responseStr: string): any => {
    // Eliminar los caracteres de escape y limpiar la cadena
    const cleanStr = responseStr.trim()
        .replace(/\\n/g, '')
        .replace(/\\"/g, '"')
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .replace(/data: /g, '');
        
    try {
        return JSON.parse(cleanStr);
    } catch (error) {
        return { error: { error: 'No se pudo convertir en JSON', originalResponse: responseStr } };
    }
}

export default toJson;