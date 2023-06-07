const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController.js');

router.get('/:id', productsController.detail);
router.post('/binh-luan/:id', productsController.comment);


module.exports = router;