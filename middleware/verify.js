const jwt = require("jsonwebtoken");
const {
  app: { secret },
} = require("../config/config");
module.exports = {
  verify: async (token) => {
    return new Promise((resolve) => {
      jwt.verify(token, secret, { algorithms: ["RS256"] }, (err, payload) => {
        if (err) {
          console.error(err.message || "JWT docoded error");
          return resolve(null);
        } else {
          return resolve(payload);
        }
      });
    });
  },
};
