import {
    prisma,
    encriptarContrasena,
    generarToken,
    successResponse,
    errorResponse
} from '@fn'

const createUser = async (_: any, { input }: any) => {
    try {
        const { email, password, name, lastName } = input

        const existingUser = await prisma.user.findUnique({
            where: { email }
        })

        if (existingUser) {
            return errorResponse({ message: "Email ya registrado" })
        }

        const hashedPassword = await encriptarContrasena({ password })

        const user = await prisma.user.create({
            data: {
            name, 
            lastName,
            email,
            password: hashedPassword
        }
        })

    const token = generarToken(user)

    return successResponse({ message: "Usuario creado exitosamente", token })

} catch (error) {
    console.error("Error al crear el usuario:", error)
    return errorResponse({ message: "Error al crear el usuario" })
}
}

export default createUser