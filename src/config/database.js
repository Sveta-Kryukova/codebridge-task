const { Sequelize } = require('sequelize');
require('dotenv').config();

const {
  DB_DATABASE,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT
} = process.env;

const sequelize = new Sequelize(DB_DATABASE || DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
});

module.exports = sequelize;
