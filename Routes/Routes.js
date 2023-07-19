const express = require('express');
const router = express.Router();

const itemController = require('../Controller/ItemController');

//GET ALL ITEMS
router.get('/items', itemController.getAllItems);

module.exports = router;