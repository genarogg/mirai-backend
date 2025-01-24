import { verificarTokenUtil, successResponse, errorResponse } from '@fn'

const verificarToken = async (_: any, { token }: any) => {

    try {
        const usuario = await verificarTokenUtil(token)

        if (!usuario) {
            return errorResponse({ message: "Token no válido" })
        }

        return successResponse({
            message: "Sesion recuperada"
        })
    } catch (error) {
        console.error("Error al verificar el token:", error)
        return errorResponse({ message: "Error en el servidor" })
    }
}

export default verificarToken