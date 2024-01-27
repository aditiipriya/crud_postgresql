require('dotenv').config({ debug: process.env.DEBUG });

const config = require("./config/config");
const express = require('express');
const { Sequelize } = require('sequelize');
const userRoutes = require('./routes/userRoutes');
const sequelize  = require('./models/index');
const userModel= require('./models/user');

const app = express();
const PORT = config.development.SERVERPORT;

const connection = async() =>{
  let User=null;
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connection();


app.use(express.json());

// Routes
app.use('/user', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
