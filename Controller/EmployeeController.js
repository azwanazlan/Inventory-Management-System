const Employee = require('../Models/Employee')

exports.getAllEmployee = async (req, res) => {
    try {
      const employee = await Employee.findAll();
      res.json(employee);
    } catch (err) {
      res.status(500).json({ message: 'Failed to fetch products'});
    }
  };

exports.getEmployeeById = async (req,res) => {
  const employeeId = req.params.id;

  try {
    const employeeById = await Employee.findByPk(employeeId);

    if(!employeeById) {
      return res.status(404).json({
        message: 'Employee not found'
      });  
    }

    res.status(200).json(employeeById);
  } catch (err) {
    res.status(500).json(err);
  }
}

exports.createAnEmployee = async (req, res) => {
  const { firstName , lastName } = req.body;

  try {
    const employee = await Employee.create({
      firstName,
      lastName
    });

    res.status(201).json(employee);
  } catch(err) {
    res.status(500).json({ message: `Failed to create employee: ${err}`})
  }
}

exports.updateAnEmployee = async (req, res) => {
  const employeeId = req.params.id;
  const { firstName, lastName } = req.body;

  try {
    const employee = await Employee.findByPk(employeeId);

    if(!employeeById) {
      return res.status(404).json({ message: 'Not found.'});
    }

    employee.firstName = firstName;
    employee.lastName = lastName;

    await employee.save();
  } catch(err) {
    res.status(500).json({ message: `Fail to update an employee: &{err}`})
  }
}

exports.deleteAnEmployee = async (req,res) => {
  const employeeId = req.params.id

  try {
    const employee = await Employee.findByPk(employeeId);

    if(!employee) {
      return res.status(404).json({ message: 'Not Found.'})
    }

    await employee.destroy()
  } catch(err) {
    res.status(500).json({ message: `Failed to delete employee ${err}`})
  }
}