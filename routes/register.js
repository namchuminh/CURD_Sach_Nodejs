const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController.js');

router.get('/', registerController.index);
router.post('/', registerController.actionRegister);

module.exports = router;