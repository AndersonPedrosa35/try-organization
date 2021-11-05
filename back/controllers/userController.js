const userService = require('../services/userService');
const { createToken } = require('../utils/token');

const getLoginByEmail = async (req, res, next) => {
  const { body } = req;
  const validate = await userService.getLoginByEmail(body);
  if (validate.message) {
    return next(validate);
  }
  const token = createToken(body);
  return res.status(200).json({ token });
}

const createUser = async (req, res, next) => {
  const { body } = req;
  const validate = await userService.createUser(body);
  if (validate.message) {
    return next(validate);
  }
  return res.status(201).send(validate);
}

module.exports = {
  getLoginByEmail,
  createUser
}
