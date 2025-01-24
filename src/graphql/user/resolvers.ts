import { prisma } from "@fn"
import createUser from "./resolvers/createUser"
import loginUser from "./resolvers/loginUser"

const resolvers = {
  Query: {
    users: async () => {
      return await prisma.user.findMany()
    }
  },

  Mutation: {
    createUser,
    loginUser
  }
}

export default resolvers