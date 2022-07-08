const express = require('express');
const app = express();
const token = require("../queries/token");
const users = require('../queries/users')

//Get User informations
app.get('/profile', token.GetToken, users.getUserById)

//Register user
app.post('/register', users.registerUser)

// Login user
app.post('/login', users.loginUser)

// Logout user
app.post('/logout', token.GetToken, users.logoutUser)

// Update user
app.put('/profile/update', token.GetToken, users.updatingUser)

// Change password of user (unused)
app.put('/changpass', token.GetToken, users.changeUserPass)

app.get('/all', token.GetToken, users.getAll)

module.exports = app;
