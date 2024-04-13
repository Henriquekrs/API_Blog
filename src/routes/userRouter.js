const route = require('express').Router();
const { userController } = require('../controller');
const { validateToken } = require('../middleware/validationToken');
const {
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('../middleware/validationsInputs');

route.post('/login', userController.login);
route.post(
  '/user',
  validateDisplayName,
  validateEmail,
  validatePassword,
  userController.createUser,
);
route.get('/user', validateToken, userController.findAll);

module.exports = route;