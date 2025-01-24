import sharp from 'sharp'

const convertToBase64 = async (url: string): Promise<string> => {
    const response = await fetch(url)
    const arrayBuffer = await response.arrayBuffer()
    const imageBuffer = await sharp(Buffer.from(arrayBuffer)).toBuffer()
    return imageBuffer.toString('base64')
}

export default convertToBase64