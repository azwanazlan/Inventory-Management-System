const express = require('express');
const router = express.Router();

const itemController = require('../Controller/ItemController');
const employeeController = require('../Controller/EmployeeController');
const agentController = require('../Controller/AgentController');

router.get('/', (req,res) => {
    const welcomeMessage = 'Welcome';
    const environmentVariables = process.env;

    res.json({
        message: welcomeMessage,
        environmentVariables: environmentVariables
    });
});
//ITEMS
router.get('/items', itemController.getAllItems);
router.get('/items/:id', itemController.getItembyId);
router.post('/items', itemController.createAnItem);
router.patch('/items/:id', itemController.updateAnItem);
router.delete('/items/:id', itemController.deleteItem);

//EMPLOYEE
router.get('/employee', employeeController.getAllEmployee);
router.get('/employee/:id', employeeController.getEmployeeById);
router.post('/employee', employeeController.createAnEmployee);
router.patch('/employee/:id', employeeController.updateAnEmployee);
router.delete('/employee/:id', employeeController.deleteAnEmployee);

//AGENT
router.get('/agent', agentController.getAllAgents);
router.get('/agent/:id', agentController.getAgentbyId);
router.post('/agent', agentController.createAnAgent);
router.patch('/agent/:id', agentController.updateAnAgent);
router.delete('/agent/:id', agentController.deleteAgent);

module.exports = router;