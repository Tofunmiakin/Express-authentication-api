const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy, ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require ('../Models/users.model');
const env = require('./index');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = env.JWT_SECRET;

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) =>{
    User.findOne({_id: jwt_payload._id}, (err, user)=>{
      if (err) {
        return done(err, false)
      }
      if(user) {
        return done(null, user)
      } else{
        return done(null, false)
      }
    })
  })
)