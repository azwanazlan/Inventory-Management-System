const express = require('express');
const Product = require('');
const Item = require('../Models/Item');
const router = express.Router();

exports.getAllItems = async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch products'});
    }
  };

exports.getItembyId = async (req, res) => {
    const itemId = req.params.itemId;
    try {
    const itemById = await Item.findByPk(itemId);
    res.json(itemId);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch products'});
    }
  };

exports.createProduct = async (req, res) => {
    const { name, price, quantity, description, category } = req.body;
  
    try {
      const item = await Item.create({
        name,
        price,
        quantity,
        description,
        category,
      });
  
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ message: 'Failed to create product' });
    }
};