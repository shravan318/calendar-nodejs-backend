let user = require('express').Router();

const postUser = require('../controllers/user/createuser')

user.post('/', postUser)

module.exports = user