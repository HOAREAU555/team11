const db = require('../requires/db')
const a = require('../requires/config')
const func = require('../requires/functions')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const queries = require('../requires/sql')

const jwt_decode = require('jwt-decode');

// Get a user by id from db
const getUserById = async (request, response) => {
  // console.log(JSON.stringify(request.headers.gfg_token_header_key))
  var decoded = jwt_decode(request.headers.gfg_token_header_key);
  var id = decoded.id
  console.log(id)
  db.query(queries.GetUserById, [id], (error, results) => {
      if (error)
        response.status(400).json(error)
      else
        response.status(200).send(results.rows[0])
  })
}

// login user
const loginUser = async (request, response) => {
    const { email, password } = request.body
    const hashedPassword = crypto.createHash('sha256').update(password).digest('base64');
    db.query(queries.LoginUser, [email, hashedPassword], (error, results) => {
    if (results.rows[0] != null) {
      const accessToken = jwt.sign({ id: results.rows[0].id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
      response.status(200).json({ 'token': accessToken });
    } else
      response.status(400).send('Email and password doesnt match');
  })
}

// register user
const registerUser = async (request, response) => {
  const id = func.guid()
  const { email, password, firstname, lastname } = request.body
  const hashedPassword = crypto.createHash('sha256').update(password).digest('base64');
  const obj = {email: email, password: hashedPassword, firstname: firstname, lastname: lastname};
  console.log(obj)
  db.query(queries.InsertUser, [id, email, hashedPassword, firstname, lastname], (error, results) => {
      if (error)
        response.status(400).send(error)
      else
        response.status(201).json(obj)
  })
}

// update profile informations of user
const updatingUser = async (request, response) => {
    const { firstname, lastname, id } = request.body
    db.query(queries.UpdateUser, [firstname, lastname, id], (error, results) => {
      if (error)
        response.status(400).json(error)
      else
        response.status(201).send('Updated')
    })
}

// change password of user
const changeUserPass = async (request, response) => {
    const { password, id } = request.body
    const hashedPassword = crypto.createHash('sha256').update(password).digest('base64');
    db.query(queries.ChangePass, [hashedPassword, id], (error, results) => {
      if (error)
        response.status(400).json(error)
      else
        response.status(201).send('Changed')
    })
}

// change password of user
const getAll = async (request, response) => {
  db.query(queries.GetAllUser, (error, results) => {
    if (error)
      response.status(400).json(error)
    else
      response.status(200).send(results.rows)
  })
}

// logout user
const logoutUser = (req, res) => {
    res.status(200).send("Logout");
};


module.exports = { getUserById, loginUser, registerUser, changeUserPass, updatingUser, getAll,  logoutUser }