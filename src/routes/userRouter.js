const route = require('express').Router();
const { userController } = require('../controller');
// inporta middlewares

route.post('/login', userController.login);

module.exports = route;