const route = require('express').Router();
const { userController } = require('../controller');

route.post('/', userController.login);

module.exports = route;