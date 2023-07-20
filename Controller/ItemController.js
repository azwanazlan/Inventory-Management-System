const Item = require('../Models/Item');

exports.getAllItems = async (req, res) => {
    try {
      const items = await Item.findAll();
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch items'});
    }
  };

exports.getItembyId = async (req, res) => {
    const itemId = req.params.id
    
    try {
    const itemById = await Item.findByPk(itemId);
    res.json(itemById);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch item'});
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
      res.status(500).json({ message: 'Failed to create item' });
    }
};

exports.updateAnItem = async (req, res) => {
  const ItemId = req.params.id;
  const { name, price, quantity, description, category} = req.body;

  try {
    const item = await Item.findByPk(ItemId);
    
    if(!item) {
      return res.status(404).json({
        message: 'Item not found'
      });
    }

    item.name = name;
    item.price = price;
    item.quantity = quantity;
    item.description = description;
    item.category = category;
    
    await item.save();

    res.status(200).json(item);
  } catch(err) {
    return res.status(500).json({ message: 'Failed to update item.' });
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

    res.status(204).json({
      message: `Item with id:${itemId} was deleted.`,
    });
  
  } catch (err) {
    res.status(500).json({
      message: `Failed to delete item: ${err}`,
    });
  }
};
