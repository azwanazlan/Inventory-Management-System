const express = require('express');
const router = express.Router();

const itemController = require('../Controller/ItemController');
const employeeController = require('../Controller/EmployeeController');
const agentController = require('../Controller/AgentController');

//GET ALL ITEMS
router.get('/items', itemController.getAllItems);

router.delete('/items/:id', itemController.deleteItem)

router.get('/employee', employeeController.getAllItems);

//router.get('/agent', agentController.);

module.exports = router;