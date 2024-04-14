const route = require('express').Router();
const { categoryController } = require('../controller');
const { validateToken } = require('../middleware/validateToken');

route.post('/', validateToken, categoryController.create);
route.get('/', validateToken, categoryController.findAll);

module.exports = route;