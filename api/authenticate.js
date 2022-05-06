const passport = require("passport");
const jwt = require("jsonwebtoken");
const env = require('./Config/index')

exports.COOKIE_OPTIONS = {
  httpOnly: true,
  // Since localhost is not having https protocol,
  // secure cookies do not work correctly (in postman)
  signed: true,
  maxAge: eval(env.REFRESH_TOKEN_EXPIRY) * 1000,
  sameSite: "none",
};

exports.getToken = user => {
  return jwt.sign(user, env.JWT_SECRET, {
    expiresIn: eval(env.SESSION_EXPIRY),
  });
};

exports.getRefreshToken = user => {
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: eval(env.REFRESH_TOKEN_EXPIRY),
  });
  return refreshToken;
};

exports.verifyUser = passport.authenticate("jwt", { session: false });