const express = require('express');
const router = express.Router();
const apiProductController = require ("../../controllers/api/product")

router.get('/', apiProductController.list);
router.get('/:id', apiProductController.detail);
router.get('/category/:id', apiProductController.listFilter);

module.exports = router;