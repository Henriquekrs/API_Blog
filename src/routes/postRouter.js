const route = require('express').Router();
const { validateToken } = require('../middleware/validateToken');
const { validatePostInput, validatePostCategories } = require('../middleware/validatePosts');
const { postController } = require('../controller');

route.post(
  '/',
  validateToken,
  validatePostInput,
  validatePostCategories, 
  postController.createPost,
);
route.get('/', validateToken, postController.findAll);
route.get('/:id', validateToken, postController.findById);

module.exports = route;