const {DataTypes} = require('sequelize');
const db = require('./Services/db');

const Item =  db.define('Product', {
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
    description: { type: DataTypes.TEXT },
    category: { type: DataTypes.STRING },
});

module.exports = Item;