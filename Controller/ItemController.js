const Item = require('../Models/Item');


const getAllItems = async (req, res) => {
    try {
      const items = await Item.findAll();
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch products'});
    }
  };

const getItembyId = async (req, res) => {
    const itemId = req.params
    try {
    const itemById = await Item.findByPk(itemId);
    res.json(itemById);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch products'});
    }
  };

const createAnItem = async (req, res) => {
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

const deleteItem = async (req, res) => {
  const itemId = req.params.id;

  try {
    const item = await Item.destroy(itemId);
    res.status(200).json({message: 'item with id:${itemId} was deleted...'});
  } catch(err){
    res.status(500).json({ message: 'Failed to create product'});
  }
};

module.exports = {
  getAllItems,
  getItembyId,
  createAnItem,
  deleteItem
}