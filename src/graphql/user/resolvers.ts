import createUser from "./resolvers/createUser"
import loginUser from "./resolvers/loginUser"
import verificarToken from "./resolvers/verificarToken"
import getAllUsers from "./resolvers/getAllUsers"

const resolvers = {
  Query: {
    getAllUsers,
    verificarToken
  },

  Mutation: {
    createUser,
    loginUser,
  }
}

export default resolvers