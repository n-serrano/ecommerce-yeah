const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/products')

router.get('/products/cart', productsController.cart)

module.exports = router