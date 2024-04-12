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

module.exports = {
  login,
};