const express = require('express');
const router = express.Router();
const path = require('path');
const productsController = require('../controllers/products')

// router.get('/', productsController.showAll);

router.get('/products/cart', productsController.cart)

router.get('/search', productsController.search);

router.get('/products/explain', productsController.explain)

router.get('/detail/:id', productsController.detail);


module.exports = router
