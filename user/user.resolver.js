// const User = require('./user.model')
const User = require("./user.model.js");
const {
  app: { secret },
} = require("../config/config");
const {
  getUsers,
  getSingleUser,
  deleteUser,
  createUser,
  updateUser,
  userInfo,
  updateAForAgencyConfig,
  registrationConfig,
  loginConfig,
} = require("./user.service");
const logger = require("../utils/logger");
const { hashedPassword } = require("../utils/hashPassword");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userResolvers = {
  Query: {
    getUsers: async (_, args, ctx) => {
      try {
        const { username, email } = args;
        const users = await getUsers(args);
        return users;
      } catch (err) {
        logger.error(err);
        return errors.withApolloError("INTERNAL_SERVER_ERROR");
      }
    },
    getSingleUser: async (_, args, ctx, info) => { 
      try {
        const user = await getSingleUser(args);
        return user;
      } catch (err) {
        logger.error(err);
        return errors.withApolloError("INTERNAL_SERVER_ERROR"); 
      }
    },
  },

  Mutation: {
    createUser: async (_, args, context, info) => {
      try {
        const { createUserInput } = args;
        console.log('createUserInput', createUserInput);
        const user = await createUser(createUserInput);
        return user;
      } catch (err) {
        logger.error(err);
        return errors.withApolloError("INTERNAL_SERVER_ERROR");
      }
    },
    deleteUser: async (_, args, ctx) => {
      try {
        const removeUser = await deleteUser(args);
        return removeUser;
      } catch (err) {
        logger.error(err);
        return errors.withApolloError("INTERNAL_SERVER_ERROR");
      }
    },
    updateUser: async (_, args, context, info) => {
      const { updateUserInput } = args;
      const user = await updateUser(updateUserInput);
      return user;
    },
    updateUserInfo: async (_, args, ctx, info) => {
      const { userInformationInput, id } = args;
      const user = await userInfo({ id, userInformationInput });
      return user;
    },
    updateAgencyConfig: async (_, args, ctx, info) => {
      const { agencyConfigInput, id } = args;
      const user = await updateAForAgencyConfig({ id, agencyConfigInput });
      return user;
    },
    registration: async (_, args, ctx, info) => {
      const { registrationInput } = args;
      const hashPassword = await hashedPassword(registrationInput.password);
      const registration = await registrationConfig(registrationInput); 
      return registration;
    },
    login: async (_, args, ctx, info) => {
      const { email, password } = args;
      // const user = await loginConfig(email, password);
      // if (!user) {
      //   console.log("user is not authenticated");
      // }
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        console.log("email or password is not mached");
      }
      const token = jwt.sign({}, secret, { expiresIn: '30d' });
      return true;
    },
  },
};

module.exports = userResolvers;
