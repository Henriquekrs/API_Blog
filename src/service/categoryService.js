const { Category } = require('../models');

const create = async (nameInput) => {
  const dataCategory = await Category.create({ name: nameInput });
  return { status: 201, data: dataCategory };
};

const findAll = async () => {
  const dataCategory = await Category.findAll({ attributes: ['id', 'name'] });
  return { status: 200, data: dataCategory };
};

module.exports = {
  create,
  findAll,
};