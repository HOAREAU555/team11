const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
// Set up Global configuration access
dotenv.config();

// Return a json with infos city
var PostToken = async (request, response) => {
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: 12,
    }
  
    const token = jwt.sign(data, jwtSecretKey);
  
    response.send(token);
  };

  var GetToken = async (request, response , next) => {
    let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
  
    try {
        const token = request.header(tokenHeaderKey);
  
        const verified = jwt.verify(token, jwtSecretKey);
        if(verified){
            next()
        }else{
            // Access Denied
            return response.status(401).send(error);
        }
    } catch (error) {
        // Access Denied
        return response.status(401).send(error);
    }
  };

module.exports = {PostToken , GetToken}