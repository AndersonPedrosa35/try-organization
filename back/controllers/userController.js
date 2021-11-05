const getLoginByEmail = require('../services/userService');
const { createToken } = require('../utils/token');

const getLoginByEmail = async (req, res, next) => {
  const { body } = req;
  const validate = await getLoginByEmail(body);
  if (validate.message) {
    return next(validate);
  }
  const token = createToken();
  return res.status(200).json({ token });
}

module.exports = {
  getLoginByEmail,
}
