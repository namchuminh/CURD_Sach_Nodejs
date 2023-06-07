const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController.js');


router.get('/quan-ly', loginController.index);
router.post('/quan-ly', loginController.loginAdmin);



module.exports = router;