const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const tokenGenerator = ({ nome, sobrenome, endereco }) => {
  const key = jwt.sign({ nome, sobrenome, endereco }, SECRET, jwtConfig);
  return key;
};

module.exports = tokenGenerator;