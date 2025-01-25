import { Request, Response } from 'express'
import ollama from 'ollama'
import { log } from '@fn'

import promtColorimetria from './fn/promtAnalizarImg'
import toJson from './fn/toJson'
import convertToBase64 from './fn/convertToBase64'

const analizarImgAzura = async (req: Request, res: Response) => {
  const base64Img = await convertToBase64("https://scontent-mia3-1.cdninstagram.com/v/t51.2885-15/101001367_142381824080831_2724769573220125866_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYyODg1LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=scontent-mia3-1.cdninstagram.com&_nc_cat=111&_nc_ohc=xzB2uVhP2TAQ7kNvgFwxKq_&_nc_gid=fe5db7bb4d014ae1b88051493fae5b39&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MjMxOTI0MzIzOTIxNDU3NTU0NA%3D%3D.3-ccb7-5&oh=00_AYAPuiOFz-ApkmcSC0SttL4ethUD1pjIIJch_kmYC8hVIQ&oe=6799A7F5&_nc_sid=7a9f4b")

  const response = await ollama.chat({
    model: 'llama3.2-vision',// llava, llava-phi3,llama3.2-vision
    messages: [{
      role: 'user',
      content: promtColorimetria,
      images: [base64Img]
    }]
  })

  log.success("colorimetria terminada")
  res.json({ data: toJson(response.message.content) })
}

export default analizarImgAzura