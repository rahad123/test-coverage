const { findOne } = require("./user.model.js");
const User = require("./user.model.js");

const totalUser = async () => {
  const userCount = (await User.find({})).length;
  return userCount;
};

module.exports = {
  getUsers: async () => {
    await totalUser();
    return User.find({});
  },
  getSingleUser: async ({ id: _id }) => {
    return User.findById({ _id });
  },
  deleteUser: async ({ id: _id }) => {
    return User.findByIdAndDelete({ _id });
  },
  createUser: async (user) => {
    return User.create(user);
  },
  updateUser: async ({ id: userId, ...args }) => {
    return User.findByIdAndUpdate(userId, args, { new: true });
  },
  userInfo: async ({ id, ...args }) => {
    return User.findByIdAndUpdate(
      id,
      { $push: { userInformation: { ...args } } },
      { new: true }
    );
  },
  updateAForAgencyConfig: async ({ id, ...args }) => {
    return User.findByIdAndUpdate(
      id,
      { agencyConfig: { ...args } },
      { new: true }
    );
  },

  registrationConfig: async ({ ...args }) => {
    return User.create({ ...args });
  },
  loginConfig: async ({ email, password }) => {
    return findOne({ email: email, password: password });
  },
};
