import { Request, Response } from 'express'
import ollama from 'ollama'
import { log } from '@fn'

import promtColorimetria from './fn/promtAnalizarImg'
import toJson from './fn/toJson'

const analizarImgAzura = async (req: Request, res: Response) => {
  try {
    const response = await ollama.chat({
      model: 'llama3.2-vision', // llava, llava-phi3, llama3.2-vision
      messages: [{
        role: 'user',
        content: promtColorimetria,
        images: [req.body.base64Img]
      }]
    })

    log.success("colorimetria terminada")
    res.json({ data: toJson(response.message.content) })
  } catch (error) {
    log.error(`Error en analizarImgAzura:, ${error}`)
    res.status(500).json({ message: 'Error processing image analysis', error })
  }
}

export default analizarImgAzura