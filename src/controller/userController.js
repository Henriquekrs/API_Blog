// importa a service
const { userService } = require('../service');

// const ExemplofindAll = async (req, res) => {
//     const { status, data } = await productService.findAll();
//     return res.status(status).json(data);
//   };

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const { status, data } = await userService.login(email, password);
  return res.status(status).json(data);
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, data } = await userService.createUser(displayName, email, password, image);
  return res.status(status).json(data);
};

const findAll = async (req, res) => {
  const { status, data } = await userService.findAll();
  return res.status(status).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.findById(id);
  return res.status(status).json(data);
};

module.exports = {
  login,
  createUser,
  findAll,
  findById,
};