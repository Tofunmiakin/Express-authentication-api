# Express-authentication-api
A user authentication API with Node.js (Express) and [Passport.js local strategy](https://www.passportjs.org/packages/passport-local/)

[Working link to the API](https://express-auth970.herokuapp.com/)

## Documentation

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
  
### Signing In
- Endpoint -> https://express-auth970.herokuapp.com/auth/login
- Payload -> 
  ``` json
  {
    "username": "username",
    "password" : "password"
  }
  ```
