const express = require('express');
const router = express.Router();
const passport = require('passport')
const loginController = require('../controllers/loginController.js');


router.get('/quan-ly', loginController.index);
router.post('/quan-ly', passport.authenticate('local', {successRedirect: '/quan-ly',failureRedirect: '/dang-nhap/quan-ly'}));



module.exports = router;