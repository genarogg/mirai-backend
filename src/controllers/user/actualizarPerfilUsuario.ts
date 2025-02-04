import { Request, Response } from 'express';
import { prisma, errorResponse, successResponse, verificarTokenUtil } from '@fn';

export const actualizarPerfilUsuario = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return errorResponse({ message: 'Token no proporcionado' });
        }

        const usuario = await verificarTokenUtil(token);

        if (!usuario) {
            return errorResponse({ message: "Token no válido" });
        }

        const { id } = usuario;

        const {
            address,
            altura,
            city,
            country,
            dateOfBirth,
            etnia,
            idiomas,
            peso,
            phoneNumber,
            postalCode,
            sexo,
            state,
            tallaDeRopa
        } = req.body;

        const edad =   new Date().getFullYear() - new Date(dateOfBirth).getFullYear()

        const newProfile = await prisma.userProfile.create({
            data: {
                userId: id,
                address,
                altura: altura || null,
                city,
                country,
                dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
                etnia,
                idiomas,
                peso: peso || null,
                phoneNumber,
                postalCode,
                sexo,
                state,
                tallaDeRopa: tallaDeRopa || null,
                edad
            }
        });

        res.status(200).json(successResponse({ message: 'Datos cargados correctamente', profile: newProfile }));

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el perfil del usuario' });
    }
};

export default actualizarPerfilUsuario;