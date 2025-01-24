import { encriptarContrasena, prisma } from "@fn"

const seedUsers = async () => {
    const users = [
        {
            name: "Customer",
            lastName: "User",
            email: "customer@customer.com",
            password: "demo",
            role: "customer",
        },

        {
            name: "Seller",
            lastName: "User",
            email: "seller@seller.com",
            password: "demo",
            role: "seller",
        },

        {
            name: "Admin",
            lastName: "User",
            email: "admin@admin.com",
            password: "demo",
            role: "admin",
        },
    ]

    for (const user of users) {

        const { name, lastName, email, password, role } = user
        const existingUser = await prisma.user.findUnique({
            where: { email: user.email },
        })



        if (!existingUser) {
            const hashedPassword = await encriptarContrasena({ password })
            await prisma.user.create({
                data: {
                    name,
                    lastName,
                    email,
                    password: hashedPassword,
                    role
                },
            })
            console.log(`Usuario ${user.email} creado`)
        } else {
            console.log(`Usuario ${user.email} ya existe`)
        }
    }
}

export default seedUsers