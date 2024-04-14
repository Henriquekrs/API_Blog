const { Category } = require('../models');

const create = async (nameInput) => {
  const dataCategory = await Category.create({ name: nameInput });
  return { status: 201, data: dataCategory };
};

const findAll = async () => {
  const dataCategory = await Category.findAll({ attributes: ['id', 'name'] });
  return { status: 200, data: dataCategory };
};

const findById = async (id) => {
  const dataCategory = await Category.findByPk(id);
  return { status: 200, data: dataCategory };
};

module.exports = {
  create,
  findAll,
  findById,
};