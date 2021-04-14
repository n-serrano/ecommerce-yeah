const express = require('express');
const router = express.Router();
const apiProductController = require ("../../controllers/api/product")

router.get('/api/products', apiProductController.list);
router.get('/api/category', apiProductController.totalCategory);
router.get('/api/products/last', apiProductController.lastProduct);
router.get('/api/products/:id', apiProductController.detail);
module.exports = router;