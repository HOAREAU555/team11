const express = require('express');
const app = express();
const token = require("../queries/token");
const capteur = require('../queries/capteur')

app.post('/create', capteur.InsertByCapteur)

app.get('/:table/:order', token.GetToken, capteur.getByCapteur)

app.post('/:name', token.GetToken, capteur.CreateCapteur)

module.exports = app;