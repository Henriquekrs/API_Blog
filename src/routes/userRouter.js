const route = require('express').Router();
const { userController } = require('../controller');
const { validateToken } = require('../middleware/validateToken');
const {
  validateDisplayName,
  validateEmail,
  validatePassword,
} = require('../middleware/validateInputs');

route.post(
  '/',
  validateDisplayName,
  validateEmail,
  validatePassword,
  userController.createUser,
);
route.get('/', validateToken, userController.findAll);
route.get('/:id', validateToken, userController.findById);

module.exports = route;