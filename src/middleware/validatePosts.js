const { Category } = require('../models');

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

module.exports = {
  validatePostInput,
  validatePostCategories,
};