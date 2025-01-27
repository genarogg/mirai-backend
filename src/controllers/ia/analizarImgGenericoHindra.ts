import { Request, Response } from 'express'
import ollama from 'ollama'
import { prisma, log, successResponse } from '@fn'

import promt from './hindra/promt'
import toJson from './fn/toJson'

const analizarImgGenericoHindra = async (req: Request, res: Response) => {
  res.status(200).json(successResponse({ message: 'Imagen cargada' }))


  console.log("req.body")
  try {
    const startTime = Date.now();
    const response = await ollama.chat({
      model: 'llama3.2-vision', // llava, llava-phi3, llama3.2-vision
      messages: [{
        role: 'user',
        content: promt,
        images: [req.body.base64Img]
      }]
    })

    const data = toJson(response.message.content)

    if (data.error) {
      log.error(data.error)
      console.log(data)
      return
    }

    // Guardar la información de analisisFacial en la base de datos
    const analisisFacialData = {
      userId: req.body.usuario.id,
      imgProcessed: req.body.nameImg,
      colorDePiel: data.colorDePiel,
      colorDePelo: data.colorDePelo,
      colorDeOjos: data.colorDeOjos,
      tonoDePiel: data.tonoDePiel,
      subtonoDePiel: data.subtonoDePiel,
      estacionDelAno: data.estacionDelAno,
      tipoDeRostro: data.tipoDeRostro,
      sistemaFitzpatrick: data.sistemaFitzpatrick,
      PantoneSkintone: data.PantoneSkintone,
      NARSSkinToneSystem: data.NARSSkinToneSystem,
      LOrealColorCode: data.LOrealColorCode,
      ColorMeBeautiful: data.ColorMeBeautiful,
      MunsellColorSystem: data.MunsellColorSystem
    };

    await prisma.analisisFacial.create({
      data: analisisFacialData
    });

    const endTime = Date.now();

    const responseTimeInSeconds = (endTime - startTime) / 1000;

    log.success("Análisis facial guardado en la base de datos");
    log.success(`Tiempo de respuesta: ${responseTimeInSeconds} segundos`);
    log.success(data);


  } catch (error) {
    log.error(`Error en analizarImgGenericoHindra:, ${error}`)

  }
}

export default analizarImgGenericoHindra