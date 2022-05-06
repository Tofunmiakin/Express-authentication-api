const User = require('../Models/users.model');
const bcrypt = require('bcrypt');
// const { getToken, COOKIE_OPTIONS, getRefreshToken } = require('../authenticate');

module.exports = {
  register: async (req, res, next) => {
    try {
      await User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] }).then((user) => {
        if (user) {
          return res.status(400).json({ msg: 'Another user has signed up with this username / email' });
        } else {
          const salt = bcrypt.genSaltSync(10);
          const hash = bcrypt.hashSync(req.body.password, salt);
          const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
          });
          // const token = getToken({ _id: newUser._id });
          // const refreshToken = getRefreshToken({ _id: newUser._id });
          // newUser.refreshToken.push({ refreshToken })
          newUser.save();
          // newUser.save((err, user) =>{
          //   if(err){
          //     res.statusCode = 500;
          //     res.send(err);
          //   }else{
          //     res.cookie('refreshToken', refreshToken, COOKIE_OPTIONS);
          //     res.send({success:true, token})
          //   }
          // });
          return res.status(200).json({ msg: `signed up successfully!, Welcome ${req.body.username}` });
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
}