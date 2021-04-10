const express = require('express');
const router = express.Router();
const apiProductController = require ("../../controllers/api/product")

router.get('/api/products', apiProductController.list);
router.get('/api/products/:id', apiProductController.detail);
router.get('/api/category', apiProductController.totalCategory);
router.get('/api/products/category', apiProductController.productForCategory)

module.exports = router;