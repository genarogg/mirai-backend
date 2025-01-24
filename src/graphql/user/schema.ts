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
  }

  input LoginUserInput {
    email: String!
    password: String!
  }

  type AuthPayload {
    type: String!
    message: String!
    token: String
  }

  extend type Query {
    users: [User]
  }

  extend type Mutation {
    createUser(input: CreateUserInput): AuthPayload
    loginUser(input: LoginUserInput): AuthPayload
  }
`

export default userSchema