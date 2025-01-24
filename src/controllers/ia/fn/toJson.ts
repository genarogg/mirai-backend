const toJson = (responseStr: string): any => {
    const cleanStr = responseStr.replace(/```json/g, '').replace(/```/g, '').trim()
    try {
        return JSON.parse(cleanStr)
    } catch (error) {
        return { error: 'No se pudo convertir en JSON', originalResponse: responseStr }
    }
}

export default toJson