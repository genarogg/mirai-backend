import { prisma, verificarTokenUtil, successResponse, errorResponse } from '@fn';

const getUser = async (_: any, { token }: { token: string }) => {
    try {

        console.log('token', token);
        if (!token) {
            return errorResponse({ message: "Token no proporcionado" });
        }

        const usuario = await verificarTokenUtil(token);

        if (!usuario) {
            return errorResponse({ message: "Token no válido" });
        }

        const userId = usuario.id;

        console.log('userId', userId);

        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                AnalisisFacial: true,
                userProfile: true
            }
        });

        if (!user) {
            return errorResponse({ message: "Usuario no encontrado" });
        }

        console.log('user', user);

        return successResponse({
            message: "Usuario recuperado exitosamente",
            data: user
        });

    } catch (error) {
        console.error("Error al obtener usuario:", error);
        return errorResponse({ message: "Error en el servidor" });
    }
};

export default getUser;