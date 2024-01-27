const config = require('../config/config'); 
const { Sequelize } = require('sequelize');

const sequelize= new Sequelize(config.development.database, config.development.username, config.development.password,{
  host:"localhost",
  dialect:"postgres"
})

module.exports = sequelize;


