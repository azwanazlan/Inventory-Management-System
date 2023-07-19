const { DataTypes } = require('sequelize');
const {sequelize} = require('../Services/db');

const Agent = sequelize.define('Agent', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // Add other properties as needed (e.g., email, phone, etc.)
});

module.exports=Agent;