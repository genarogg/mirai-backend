import { prisma, verificarTokenUtil, successResponse, errorResponse } from '@fn'

const getAllUsers = async (_: any, { token }: { token: string }) => {
    try {
        if (!token) {
            return errorResponse({ message: "Token no proporcionado" })
        }

        const usuario = await verificarTokenUtil(token)

        if (!usuario || usuario.role !== 'admin') {
            return errorResponse({ message: "Usuario no autorizado" })
        }

        const users = await prisma.user.findMany()

        return successResponse({
            message: "Usuarios recuperados exitosamente",
            data: users
        })

    } catch (error) {
        console.error("Error al obtener usuarios:", error)
        return errorResponse({ message: "Error en el servidor" })
    }
}

export default getAllUsers