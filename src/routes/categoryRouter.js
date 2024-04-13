const route = require('express').Router();
const { categoryController } = require('../controller');
const { validateToken } = require('../middleware/validationToken');

route.post('/', validateToken, categoryController.create);

module.exports = route;