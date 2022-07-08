var request = require("request");
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();


let jwtSecretKey = process.env.JWT_SECRET_KEY;
    let data = {
        time: Date(),
        userId: 12,
    }
const token = jwt.sign(data, jwtSecretKey, {expiresIn: '1d' });
console.log(token)
var headers = { 
    'gfg_token_header_key': token 
};

