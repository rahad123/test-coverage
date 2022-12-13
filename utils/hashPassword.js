const bcrypt = require("bcrypt");
module.exports = {
  hashedPassword: (password) => {
    const salt = bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  },
};
