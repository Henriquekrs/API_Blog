const jwt = require('jsonwebtoken');
const { User } = require('../models');

const login = async (emailInput, passwordInput) => {
  const dataLogin = await User.findOne(
    { where: { email: emailInput, password: passwordInput } },
  );
  if (!dataLogin) return { status: 400, data: { message: 'Invalid fields' } };

  const payload = {
    id: dataLogin.id,
    email: dataLogin.email,
    password: dataLogin.password,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return { status: 200, data: { token } };
};

const createUser = async (displayName, email, password, image) => {
  const dataUser = await User.create({
    displayName,
    email,
    password,
    image,
  });
  console.log(dataUser);
  const payload = {
    email: dataUser.email,
    password: dataUser.password,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return { status: 200, data: { token } };
};

module.exports = {
  login,
  createUser,
};