const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swagger = require("./swagger/swagger");
const swaggerDoc = require("./swagger/swagger.json");
const dotenv = require('dotenv');
var bodyParser = require('body-parser')
const a = require("./requires/config");
var cookieParser = require('cookie-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())

//routes
const capteur = require("./routes/capteur");
const token = require("./routes/token");
const user = require("./routes/users");
// Set up Global configuration access
dotenv.config();

app.use(
  "/documentation",
  swaggerUi.serveFiles(swaggerDoc, swagger.options),
  swaggerUi.setup(swaggerDoc)
);

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', "Content-Type , gfg_token_header_key");
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use("/token" , token)
app.use("/capteur", capteur);
app.use("/user", user);

app.listen(a.port, () => {
  console.log(`App running on port ${a.port}.`);
});
