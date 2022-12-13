const jwt = require("jsonwebtoken");
const { verify } = require("./verify");
const _p = require('../utils/asyncWrapper');

const authMiddleware = async((req, res, next) => {
  const token = req.headers.authorization().split(" ")[1];
  if (!token) {
    throw new error("unauthenticated");
  }
  const [err, userInfo] = await _p(verify(token));
});
