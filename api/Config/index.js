const dotenv = require('dotenv');

dotenv.config();

const env = {
  MONGODB: {
    url: process.env.MONGO_DB_URL,
  },

  JWT_SECRET : process.env.JWT_SECRET,
  REFRESH_TOKEN_EXPIRY : process.env.REFRESH_TOKEN_EXPIRY,
  SESSION_EXPIRY: process.env.SESSION_EXPIRY,
  COOKIE_SECRET: process.env.COOKIE_SECRET,
  SESSION_SECRET : process.env.SESSION_SECRET,
};

module.exports = env;