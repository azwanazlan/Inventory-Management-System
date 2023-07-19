const { DataTypes } = require('sequelize');
const {sequelize} = require('../Services/db');

const Employee = sequelize.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false,
    }
    // Add other properties as needed (e.g., email, jobTitle, etc.)
});

module.exports = Employee;
