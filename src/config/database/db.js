const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME_DEV,
  process.env.DB_USERNAME_DEV,
  process.env.DB_PASSWORD_DEV,
  {
    host: process.env.DB_HOST_DEV,
    dialect: 'postgres'
  }
);

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(error => console.error('Unable to connect to the database:', error));

module.exports = sequelize;