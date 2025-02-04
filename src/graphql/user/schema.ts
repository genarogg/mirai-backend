const userSchema = /* GraphQL */ `
  type AnalisisFacial {
    id: Int
    userId: Int
    imgProcessed: String
    colorDePiel: String
    colorDePelo: String
    colorDeOjos: String
    tonoDePiel: String
    subtonoDePiel: String
    estacionDelAno: String
    tipoDeRostro: String
    sistemaFitzpatrick: String
    PantoneSkintone: String
    NARSSkinToneSystem: String
    LOrealColorCode: String
    ColorMeBeautiful: String
    MunsellColorSystem: String
  }

  type UserProfile {
    id: Int
    userId: Int
    phoneNumber: String
    address: String
    city: String
    state: String
    postalCode: String
    country: String
    dateOfBirth: String

    etnia: String
    idiomas: String
    sexo: String
    altura: String
    peso: String
    tallaDeRopa: String
    edad: Int
  }

  type User {
    id: Int!
    name: String!
    lastName: String!
    email: String!
    password: String!
    subscription: Boolean
    createdAt: String
    updatedAt: String
    role: String
    isActive: Boolean
    isVerified: Boolean
    imgForChange: String
    profileImage: String
    notificationsEnabled: Boolean
    lastLogin: String
    totalOrders: Int
    preferredLanguage: String
    preferredCurrency: String
    referralCode: String
    referrerId: Int
    AnalisisFacial: [AnalisisFacial]
    userProfile: [UserProfile]
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
    data: User
  }

  type VerificarTokenPayload {
    type: String!
    message: String!
    isValid: Boolean!
  }

  extend type Query {
    getAllUsers(token: String!): UsuarioPayload
    getUser(token: String!): UsuarioPayload
    verificarToken(token: String!): VerificarTokenPayload
  }

  extend type Mutation {
    createUser(input: CreateUserInput): AuthPayload
    loginUser(input: LoginUserInput): AuthPayload
  }
`

export default userSchema