const { merge } = require("lodash");
const usersTypeDefs = require("../user/user.typeDef");
const siteTypeDefs = require("../src/sites/sites.typeDef");
const typeDef = merge(usersTypeDefs, siteTypeDefs);

module.exports = typeDef;
