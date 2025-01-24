import { prisma } from "@fn"
import createUser from "./resolvers/createUser"

const resolvers = {
  Query: {
    users: async () => {
      return await prisma.user.findMany()
    }
  },

  Mutation: {
    createUser
  }
}

export default resolvers