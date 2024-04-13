const { categoryService } = require('../service');

const create = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const { status, data } = await categoryService.create(name);
  return res.status(status).json(data);
};

const findAll = async (req, res) => {
  const { status, data } = await categoryService.findAll();
  return res.status(status).json(data);
};

module.exports = {
  create,
  findAll,
};