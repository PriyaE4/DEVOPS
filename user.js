const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

// Initialize Sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
});

// Define User model without timestamps and validations
const User = sequelize.define('user', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  event: DataTypes.STRING
}, {
  timestamps: false
});

sequelize.sync();

module.exports = { User, sequelize };
