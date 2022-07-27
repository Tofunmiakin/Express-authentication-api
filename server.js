const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const passport = require("passport");
const MongoStore = require("connect-mongo");
const LocalStrategy = require("passport-local").Strategy;
const localAuthStrategy = require("./Config/passport.local");

const conn = require("./Config/db");
const AuthRoute = require("./Routes/auth.route");
const env = require("./Config/index");

const app = express();

app.get("/", (req, res) => {
  res.send("Ready to Serve!");
});

// ********************Session and Cookies********************
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(env.SESSION_SECRET));

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: env.SESSION_SECRET,
    name: "session-id",
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: env.MONGODB.url,
      collectionName: "sessions ",
    }),
    cookie: {
      maxAge: 1000 * 60 * 2,
      httpOnly: true,
      secure: false,
      sameSite: "none",
    },
    resave: false,
  })
);

// ********************Passport********************
app.use(passport.initialize());
app.use(passport.session());

// ********************Route********************
app.use("/auth", AuthRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
