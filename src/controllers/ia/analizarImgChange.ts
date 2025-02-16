import { Request, Response } from 'express'

import { prisma, log, errorResponse, successResponse } from '@fn'

const analizarImgChange = async (req: Request, res: Response) => {

  const { usuario, originalNameFile } = req.body;

  const { id } = usuario

  if (!id || !originalNameFile) {
    return res.status(400).json(errorResponse({ message: 'id y nameImg son requeridos' }));
  }

  try {

    const imgForChange = originalNameFile

    await prisma.user.update({
      where: { id },
      data: { imgForChange }
    });

    res.status(200).json(successResponse({ message: 'Imagen cargada' }))
  } catch (error: any) {
    log.error(`Error en analizarImgGenericoHindra:, ${error}`)
    res.status(500).json(errorResponse({ message: 'error al cargar la img' }))
  }
}

export default analizarImgChange