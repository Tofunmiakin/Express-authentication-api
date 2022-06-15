const express = require('express');
const router = express.Router();
const AuthController = require('../Controllers/auth.controller');
const passport = require('passport');

router.post('/signup', AuthController.register);

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) res.status(500).send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully authenticated");
      })
    }
  })(req, res, next);
});

router.get('/home', (req, res) => {
  res.send(req.user);
});

module.exports = router;