const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/products')

// router.get('/', productsController.showAll);

router.get('/products/cart', productsController.cart)

router.get('/detail/:id', productsController.detail);

router.get('/search', productsController.search);

module.exports = router
