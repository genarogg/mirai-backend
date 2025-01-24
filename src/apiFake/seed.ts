import { prisma, log } from "@fn"
import seedUsers from "./seedUsers"

const seed = async () => {
    try {
        const adminUser = await prisma.user.findUnique({
            where: { email: "admin@admin.com" },
        })

        if (adminUser) {
            log.info("Usuario admin@admin.com ya existe. Saltando la creación de usuarios.")
            return
        }

        await seedUsers()
        log.info("Usuarios creados exitosamente.")
    } catch (error) {
        console.error("Error al sembrar la base de datos:", error)
    }
}

export default seed