const { User } = require('../models');

const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400).json({
      message: 'displayName length must be at least 8 characters long',
    });
  }
  next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const isValid = regex.test(email);
  if (isValid !== true) {
    return res.status(400).json({ message: 'email must be a valid email' });
  }

  const userAlreadyExists = await User.findOne({ where: { email } });
  if (userAlreadyExists) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400).json({ message: 'password length must be at least 6 characters long' });
  }
  next();
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
};