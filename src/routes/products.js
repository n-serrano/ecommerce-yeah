const express = require('express');
const router = express.Router();
const userController = require('../controllers/products');

router.get('/products/cart', userController.cart)

module.exports = router;