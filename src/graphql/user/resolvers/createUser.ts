import {
    prisma,
    encriptarContrasena,
    generarToken,
    successResponse,
    errorResponse
} from '@fn'

const createUser = async (_: any, { input }: any) => {
    
    const data = Object.assign({}, input)

    const existingUser = await prisma.user.findUnique({
        where: { email: data.email }
    })

    if (existingUser) {
        return errorResponse({ message: "Email ya registrado" })
    }

    const password = await encriptarContrasena({ password: data.password })

    const user = await prisma.user.create({
        data: {
            ...data,
            password
        }
    })

    const token = generarToken(user)

    return successResponse({ message: "Usuario creado exitosamente", token })
}

export default createUser
