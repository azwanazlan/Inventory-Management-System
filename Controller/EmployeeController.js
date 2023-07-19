const Employee = require('../Models/Employee')

exports.getAllItems = async (req, res) => {
    try {
      const employee = await Employee.findAll();
      res.json(employee);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch products'});
    }
  };