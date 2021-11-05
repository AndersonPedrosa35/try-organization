const connect = require('./connection');

const getLoginByEmail = async ({ email, senha }) => {
  const data = await connect.then((db) => db.collection('users'));

  return data.find({ email, password: senha });
}

module.exports = {
  getLoginByEmail,
}
