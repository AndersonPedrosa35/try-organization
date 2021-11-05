const userService = require('../services/userService');
const { createToken } = require('../utils/token');

const getLoginByEmail = async (req, res, next) => {
  const { body } = req;
  const validate = await userService.getLoginByEmail(body);
  console.log(validate);
  if (validate.message) {
    return next(validate);
  }
  const token = createToken();
  console.log(token);
  return res.status(200).json({ token });
}

const createUser = async (req, res, next) => {
  const { body } = req;
  const validate = await userService.createUser(body);
  console.log(validate);
  if (validate.message) {
    return next(validate);
  }
  return res.status(201).send('OK')
}

module.exports = {
  getLoginByEmail,
  createUser
}
