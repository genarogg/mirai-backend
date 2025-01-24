import { Request, Response } from 'express'
import ollama from 'ollama'

import promtColorimetria from './fn/promtColorimetria'
import toJson from './fn/toJson'
import convertToBase64 from './fn/convertToBase64'

const analizarImgAzura = async (req: Request, res: Response) => {
  const base64Img = await convertToBase64("https://cristypalacios.com/wp-content/uploads/2023/09/Poses-Perfil-Profesional-Mujeres-ago.-10-2023-1-819x1024.jpg")

  const response = await ollama.chat({
    model: 'llava',
    messages: [{
      role: 'user',
      content: promtColorimetria,
      images: [base64Img]
    }]
  })
  res.json({ data: toJson(response.message.content) })
}

export default analizarImgAzura