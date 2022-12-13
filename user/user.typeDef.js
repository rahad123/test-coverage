const { gql } = require("apollo-server-express");

const usersTypeDefs = gql`
  input CreateUserInput {
    username: String
    email: String
    password: String
  }

  input UpdateUserInput {
    id: ID!
    username: String
    email: String
    password: String
  }

  type User {
    id: ID!
    username: String
    email: String
    password: String
    userInformation: [UserInformation]
    agencyConfig: AgencyConfig
  }

  type UserInformation {
    id: ID
    firstName: String
    lastName: String
    age: Int
    birthDate: String
  }

  input UserInformationInput {
    firstName: String
    lastName: String
    age: Int
    birthDate: String
  }

  type AgencyConfig {
    providerId: String
    chatProvider: String
    brandingColor: String
  }

  input AgencyConfigInput {
    providerId: String
    chatProvider: String
    brandingColor: String
  }

  input RegistrationInput {
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Query {
    getUsers: [User]!
    getSingleUser(id: ID): User!
  }

  type Mutation {
    deleteUser(id: ID): User!
    createUser(createUserInput: CreateUserInput): User!
    updateUser(updateUserInput: UpdateUserInput): User!
    updateUserInfo(id: ID, userInformationInput: UserInformationInput): User!
    updateAgencyConfig(id: ID, agencyConfigInput: AgencyConfigInput): User!
    registration(registrationInput: RegistrationInput): User!
    login(loginInput: LoginInput): Boolean!
  }
`;

module.exports = usersTypeDefs;
