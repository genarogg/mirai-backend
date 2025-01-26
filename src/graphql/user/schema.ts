const userSchema = /* GraphQL */ `
  type User {
    id: Int!
    name: String!
    lastName: String!
    email: String!
    password: String!
    phoneNumber: String
    address: String
    city: String
    state: String
    postalCode: String
    country: String
    dateOfBirth: String
    gender: String
    preferredPayment: String
    subscription: Boolean
    createdAt: String
    updatedAt: String
    role: String
    isActive: Boolean
    isVerified: Boolean
    profileImage: String
    notificationsEnabled: Boolean
    lastLogin: String
    totalOrders: Int
    preferredLanguage: String
    preferredCurrency: String
    referralCode: String
    referrerId: Int
  }

  input CreateUserInput {
    name: String!
    lastName: String!
    email: String!
    password: String!
    recaptcha: String
    token: String
  }

  input LoginUserInput {
    email: String!
    password: String!
    recaptcha: String
    token: String
  }

  type AuthPayload {
    type: String!
    message: String
    token: String
  }

  type UsuarioPayload {
    message: String
    data: [User]
  }

  type VerificarTokenPayload {
    type: String!
    message: String!
    isValid: Boolean!
  }

  extend type Query {
    getAllUsers(token: String!): UsuarioPayload
    verificarToken(token: String!): VerificarTokenPayload
  }

  extend type Mutation {
    createUser(input: CreateUserInput): AuthPayload
    loginUser(input: LoginUserInput): AuthPayload
  }
`

export default userSchema