const express = require('express');
const router = express.Router();
const passport = require('passport')
const loginController = require('../controllers/loginController.js');


router.get('/quan-ly', loginController.logout);


module.exports = router;