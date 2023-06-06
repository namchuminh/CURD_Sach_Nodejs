const express = require('express');
const router = express.Router();

const booksController = require('../controllers/booksController.js');

router.get('/them', booksController.create);
router.post('/them', booksController.createAction);
router.get('/xem/:id', booksController.view);
router.post('/sua', booksController.update);
router.get('/xoa/:id', booksController.delete);
router.get('/', booksController.index);


module.exports = router;