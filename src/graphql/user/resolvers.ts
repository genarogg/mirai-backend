import createUser from "./resolvers/createUser"
import loginUser from "./resolvers/loginUser"
import verificarToken from "./resolvers/verificarToken"
import getAllUsers from "./resolvers/getAllUsers"
import getUser from "./resolvers/getUser"

const resolvers = {
  Query: {
    getAllUsers,
    verificarToken,
    getUser
  },

  Mutation: {
    createUser,
    loginUser,
  }
}

export default resolvers