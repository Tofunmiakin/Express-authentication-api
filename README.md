# Express-authentication-api
A user authentication API with Node.js (Express) and [Passport.js local strategy](https://www.passportjs.org/packages/passport-local/)

[Working link to the API](https://express-auth970.herokuapp.com/)

### Features
- NoSQL database: [MongoDB](https://www.mongodb.com/), object data modeling using [Mongoose](https://mongoosejs.com/)
- Dependency management using [NPM](https://www.npmjs.com/)
- Environmental variables using [dotenv](https://github.com/motdotla/dotenv)
- Cross-Origin Resource-Sharing enabled using [CORS](https://github.com/expressjs/cors)
- Session cookies created using [Express Session](https://expressjs.com/en/resources/middleware/session.html)

### Registration
- Endpoint -> https://express-auth970.herokuapp.com/auth/signup
- Payload -> 
  ``` json
  {
    "username": "username",
    "email" : "email@email.com",
    "password" : "password"
  }
  ```
- Success response ->
  ```
  {
    "msg": "signed up successfully!, Welcome bot"
  }
  ```
  
### Signing In
- Endpoint -> https://express-auth970.herokuapp.com/auth/login
- Payload -> 
  ``` json
  {
    "username": "username",
    "password" : "password"
  }
  ```
  
- Success response -> 
  ```
  Successfully authenticated
  ```
  
- Failure response -> 
  ```
  No User Exists
  ```
