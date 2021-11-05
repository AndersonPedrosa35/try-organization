const connection = require('./connection');

const getLoginByEmail = async ({ email, senha }) => {
  const data = await connection().then((db) => db.collection('users'));
  
  const user = await data.find({ email, password: senha });
  return user;
}

const createUser = async ({ email, senha }) => {
  const data = await connection().then((db) => db.collection('users'));

  const user = await data.insertOne({ email, password: senha });
  return user;
}

module.exports = {
  getLoginByEmail,
  createUser
}
