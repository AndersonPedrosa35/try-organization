require('dotenv').config();
const { MongoClient } = require("mongodb");
const { DB_URL, DB_NAME } = process.env;

let schema = null;

function connection() {
  return schema ? Promise.resolve(schema) :
    MongoClient.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(DB_NAME))
    .then((dbSchema) => {
      schema = dbSchema;
      return schema;
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
  }

module.exports = connection;