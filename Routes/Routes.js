const express = require('express');
const router = express.Router();

const itemController = require('../Controller/ItemController');
const employeeController = require('../Controller/EmployeeController');
const agentController = require('../Controller/AgentController');

//GET ALL ITEMS
router.get('/items', itemController.getAllItems);

router.get('/items/:id', itemController.getItembyId);

router.post('/items', itemController.createAnItem);

router.patch('/items/:id', itemController.updateAnItem);

router.delete('/items/:id', itemController.deleteItem);

router.get('/employee', employeeController.getAllItems);

router.get('/employee/:id', employeeController.getEmployeeById);

router.post('/employee', employeeController.createAnEmployee);

router.patch('/employee/:id', employeeController.updateAnEmployee);

router.delete('/employee/:id', employeeController.deleteAnEmployee);

module.exports = router;