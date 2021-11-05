const getLoginByEmail = require('../services/userService');

const getLoginByEmail = async (req, res, next) => {
  const { body } = req;
  const validate = await getLoginByEmail(body);
  if (validate.message) {
    return next(validate);
  }
  
}

module.exports = {
  getLogin,
}
