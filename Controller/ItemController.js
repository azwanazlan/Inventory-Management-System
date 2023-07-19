const { request } = require('express');
const Item = require('../Models/Item');


exports.getAllItems = async (req, res) => {
    try {
      const items = await Item.findAll();
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

exports.createAnItem = async (req, res) => {
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

exports.deleteItem = async (req, res) => {
  const itemId = req.params.id;

  try {

    const item = await Item.findByPk(itemId);

    if (!item) {
      return res.status(404).json({
        message: 'Item not found.',
      });
    }
    await item.destroy();

    res.status(200).json({
      message: `Item with id:${itemId} was deleted.`,
    });
  
  } catch (err) {
    res.status(500).json({
      message: `Failed to delete product:${err}`,
    });
  }
};
