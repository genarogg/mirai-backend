import sharp from 'sharp';

const convertToBase64 = async (
    url: string,
    width: number = 1000,
    height: number = 1000): Promise<string> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error al obtener la imagen: ${response.statusText}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        const imageBuffer = await sharp(Buffer.from(arrayBuffer))
            .resize(width, height, {
                fit: sharp.fit.contain,
                background: { r: 255, g: 255, b: 255, alpha: 0 }
            })
            .toBuffer();
        return imageBuffer.toString('base64');
    } catch (error) {
        console.error("Error en convertToBase64:", error);
        throw error;
    }
}

export default convertToBase64;