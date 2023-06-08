const express = require('express');
const router = express.Router();
const orderedController = require('../controllers/orderedController.js');

router.get('/huy-don/:id', orderedController.cancel);
router.get('/', orderedController.index);


module.exports = router;