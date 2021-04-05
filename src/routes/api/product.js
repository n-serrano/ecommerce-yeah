const express = require('express');
const router = express.Router();
const apiProductController = require ("../../controllers/api/product")

router.get('/api/products', apiProductController.list);
router.get('/api/products/total', apiProductController.totalProducts)
router.get('/api/products/:id', apiProductController.detail);
router.get('/api/products/category', apiProductController.categoryFilter);

module.exports = router;