const User = require('../Models/users.model');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

//The serializeUser function stores a cookie containing the user's id inside the browser
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//The deserializeUser function takes the cookie, unravels it, and returns the user
//It checks the database if the cookie id matches any of the ids on there
passport.deserializeUser((id, done) => {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy((username, password, done) => {
  User.findOne({ username: username }, (err, user) => {
    if (err) throw err;
    if (!user) return done(null, false, { message: 'Incorrect username.' });

    bcrypt.compare(password, user.password, (err, res) => {
      if (err) throw err;
      if (res === true) {
        return done(null, user);
      }
      else {
        return done(null, false, { message: 'Incorrect password.' })
      }
    });
  });
}));

module.exports = passport;