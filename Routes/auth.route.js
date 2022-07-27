const express = require("express");
const router = express.Router();
const AuthController = require("../Controllers/auth.controller");
const passport = require("passport");

router.post("/signup", AuthController.register);

router.post("/login", async (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.status(500).send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        const userSession = { username: user.username };
        req.session.user = userSession;
        res.status(200).send("Successfully authenticated");
        // res.send(user.username);
        // console.log(req.user);
        // console.log(req.session);
      });
    }
  })(req, res, next);
});

router.get("/isAuth", (req, res) => {
  const sessUser = req.session.user;
  console.log(sessUser);
  if (sessUser === undefined) {
    return res.status(400).send({ msg: "unauthorized" });
  } else {
    return res
      .status(200)
      .send({ msg: "Authenticated Successfully", sessUser });
    // console.log(req.cookies);
  }
  // console.log(req.session.user);
});

router.delete("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.clearCookie("session-id");
    res.send("logged out successfully");
  });
  // console.log(req.session);
});

module.exports = router;
