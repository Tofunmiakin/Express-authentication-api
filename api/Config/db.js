const mongoose = require('mongoose');
const env = require('./index');

const { MONGODB } = env;

mongoose.connect(process.env.MONGODB_URI || MONGODB.url, {
  useNewUrlParser: "true",
  useUnifiedTopology: "true",
});

const conn = mongoose.connection;

conn.on('connected', function () {
  console.log('database is connected');
});
conn.on('disconnected', function () {
  console.log('database disconnected');
})
conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = conn;