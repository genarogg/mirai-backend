import { Request, Response } from 'express'
import ollama from 'ollama'
import { log } from '@fn'

import promtColorimetria from './fn/promtAnalizarImg'
import toJson from './fn/toJson'

const analizarImgAzura = async (req: Request, res: Response) => {

  res.status(200).json({ message: 'Imagen cargada' })

  try {
    const response = await ollama.chat({
      model: 'llama3.2-vision', // llava, llava-phi3, llama3.2-vision
      messages: [{
        role: 'user',
        content: promtColorimetria,
        images: [req.body.base64Img]
      }]
    })

    const data = toJson(response.message.content)

    if (data.error) {
      log.error(data.error)
      console.log(data)
    }

    log.success("colorimetria terminada")

  } catch (error) {
    log.error(`Error en analizarImgAzura:, ${error}`)
    res.status(500).json({ message: 'Error processing image analysis', error })
  }
}

export default analizarImgAzura