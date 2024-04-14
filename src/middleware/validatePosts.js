const { Category, BlogPost } = require('../models');

const validatePostInput = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validatePostCategories = async (req, res, next) => {
  const { categoryIds } = req.body;
  
  try {
    await Promise.all(categoryIds.map(async (categoryId) => {
      const category = await Category.findByPk(categoryId);
      if (!category) {
        throw new Error('one or more "categoryIds" not found');
      }
    }));
    next();
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const validatePostUserId = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user.id;
  const post = await BlogPost.findByPk(id);
  if (post.userId !== userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  next();
};

module.exports = {
  validatePostInput,
  validatePostCategories,
  validatePostUserId,
};