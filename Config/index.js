const dotenv = require('dotenv');

dotenv.config();

const env = {
  MONGODB: {
    url: process.env.MONGO_DB_URL,
  },
  SESSION_SECRET: process.env.SESSION_SECRET,
};

module.exports = env;