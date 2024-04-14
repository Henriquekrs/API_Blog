const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const [type, token] = authorization.split(' ');
  
  if (type !== 'Bearer') {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  next();
};

module.exports = {
  validateToken,
};