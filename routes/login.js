const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController.js');


router.get('/quan-ly', loginController.index);
router.post('/quan-ly', loginController.loginAdmin);
router.get('/', loginController.indexUserLogin);
router.post('/', loginController.userLogin);



module.exports = router;