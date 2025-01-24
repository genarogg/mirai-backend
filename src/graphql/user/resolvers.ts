import { prisma } from "@fn"
import createUser from "./resolvers/createUser"
import loginUser from "./resolvers/loginUser"
import verificarToken from "./resolvers/verificarToken"

const resolvers = {
  Query: {
    users: async () => {
      return await prisma.user.findMany()
    },
    verificarToken
  },

  Mutation: {
    createUser,
    loginUser,
  }
}

export default resolvers