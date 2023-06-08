const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController.js');

router.post('/thong-tin', ordersController.infoOrder);
router.post('/', ordersController.orderAction);



module.exports = router;