require('dotenv').config();
const jwt = require('jsonwebtoken');

const JwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
}

const { JWT_SECRET } = process.env;

function createToken(payload) {
  return jwt.sign(payload, JWT_SECRET, JwtConfig);
}

module.exports = {
  createToken,
}
