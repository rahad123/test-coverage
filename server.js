const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { ApolloServer } = require("apollo-server-express");
const schema = require("./graphql/schema");
const _p = require("./utils/asyncWrapper");

const app = express();

async function startApolloServer() {
  const server = new ApolloServer({
    ...schema,
    context: async (res, req) => {
      let user,
        token = null;
      if (req.headers.authorization) {
        token = req.headers.authorization.split(" ")[1];
        if (!token) {
          console.log("token is not validated");
        }
        const [err, userInfo] = _p();
      }
    },
  });

  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer();

app.listen({ port: 3000 }, () => {
  console.info("Server running on port 3000");
});

module.exports = app;
