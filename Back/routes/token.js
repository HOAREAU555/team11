const express = require("express");
const app = express();
const token = require("../queries/token");

//First choose CodeAirport and after use for fly

app.post("/user/generateToken", token.PostToken);

app.get("/user/validateToken" , token.GetToken)


module.exports = app;