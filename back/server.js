require("dotenv").config();
const cors = require("cors");
const express = require("express");
const userController = require('./controllers/userController');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', userController.getLoginByEmail);
 
app.listen(PORT, () => {
  console.log(`Online na porta: ${PORT}`);
});