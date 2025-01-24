import jwt, { JwtPayload } from "jsonwebtoken";
import { prisma } from "@fn"

const verificarTokenUtil = async (token: string) => {
    const JWTSECRETO = process.env.JWTSECRETO || "jwt-secret";

    try {
        const payload = jwt.verify(token, JWTSECRETO) as JwtPayload | undefined;

        if (!payload || !payload.id) {
            throw new Error("El token no contiene un id de usuario válido");
        }

        const usuario = await prisma.user.findUnique({
            where: { id: payload.id },
        });

        if (!usuario) {
            throw new Error("Usuario no encontrado");
            
        }

        return usuario;
    } catch (err) {
        console.error("Error al verificar el token:", err);
    } finally {
        await prisma.$disconnect();
    }
};

export default verificarTokenUtil;