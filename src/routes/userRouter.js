const route = require('express').Router();
const { userController } = require('../controller');
const {
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('../middleware/validations');

route.post('/login', userController.login);
route.post(
  '/user',
  validateDisplayName,
  validateEmail,
  validatePassword,
  userController.createUser,
);

module.exports = route;