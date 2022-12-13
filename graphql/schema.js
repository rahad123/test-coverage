const typeDef = require('./typeDefs')
const resolver = require('./resolvers')
// console.log("test")

const schema = {
  typeDefs: typeDef,
  resolvers: resolver,
};

module.exports = schema;