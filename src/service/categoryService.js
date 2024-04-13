const { Category } = require('../models');

const create = async (nameInput) => {
  const dataCategory = await Category.create({ name: nameInput });
  return { status: 201, data: dataCategory };
};

module.exports = {
  create,
};