const route = require('express').Router();
const { validateToken } = require('../middleware/validateToken');
const {
  validatePostInput, 
  validatePostCategories,
  validatePostUserId,
} = require('../middleware/validatePosts');
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
route.put('/:id', validateToken, validatePostUserId, validatePostInput, postController.updatePost);

module.exports = route;