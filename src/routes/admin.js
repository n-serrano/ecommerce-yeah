const express = require('express');
const router = express.Router();
const path = require('path');
const adminController = require('../controllers/admin.js');
const multerProduct = require('../middlewares/multerProduct');

router.get('/users/admin', adminController.admin);

router.post('/create', multerProduct.any(), adminController.create);

router.post('/delete/:id', adminController.delete);

router.get('/edit/:id', adminController.edit)

router.post('/edit/:id', multerProduct.any(), adminController.update)

module.exports = router