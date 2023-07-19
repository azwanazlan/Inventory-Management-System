const express = require('express');
const Item = require('../Models/Item');

exports.getAllItems = async (req, res) => {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch products'});
    }
  };

exports.getItembyId = async (req, res) => {
    const itemId = req.params.id
    try {
    const itemById = await Item.findByPk(itemId);
    res.json(itemById);
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

exports.deleteProduct = async (req, res) => {
  const itemId = req.params.id;

  try {
    const item = await Item.destroy;
  }
}