const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('inventory_management_system', 'root', null , {
    host:'127.0.0.1',
    dialect: 'mysql'
});

//Test the database connection
const testDatabaseConnection = async() => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

module.exports = {
    sequelize,
    testDatabaseConnection
};