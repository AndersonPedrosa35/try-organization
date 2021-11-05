const getLoginByEmail = require('../models/userModel');

const isValidEmail = (email) => {
  if(!email || email === '') {
    return { status: 400, message: '"email" is required' }
  }
  if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
    return { status: 400, message: '"email" is not valid' }
  }
  return true;
}

const isValidPass = (senha) => {
  if (!senha || senha === '') {
    return { status: 400, message: '"senha" is required' }
  }
  if (senha.length <= 6) {
    return { status: 400, message: '"senha" is not valid' }
  }
  return true;
}

const getLoginByEmail = async ({ email, senha }) => {
  const validEmail = isValidEmail(email);
  const validPass = isValidPass(senha);
  if (validEmail.message) {
    return validEmail;
  }
  if (validPass.message) {
    return validPass;
  }
  const user = await getLoginByEmail({ email, senha });
  return true;
}

module.exports = {
  getLoginByEmail,
}
