import {
    prisma,
    compararContrasena,
    generarToken,
    successResponse,
    errorResponse
} from '@fn'

const loginUser = async (_: any, { input }: any) => {
    try {
        const { email, password } = input

        if (!email || !password) {
            return errorResponse({ message: "Email y contraseña son requeridos" })
        }

        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) {
            return errorResponse({ message: "Credenciales incorrectas" })
        }

        const isPasswordValid = await compararContrasena({ password, hashedPassword: user.password })

        if (!isPasswordValid) {
            return errorResponse({ message: "Credenciales incorrectas" })
        }

        const token = generarToken(user)

        return successResponse({ message: "Inicio de sesión exitoso", token })
    } catch (error) {
        console.error("Error al iniciar sesión:", error)
        return errorResponse({ message: "Error al iniciar sesión" })
    }
}

export default loginUser