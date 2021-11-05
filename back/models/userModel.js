const connect = require('./connection');

const getLoginByEmail = async () => {
  const data = await connect.then((db) => db.collection('users'));

  return data.find().toArray();
}

module.exports = {
  getLoginByEmail,
}
