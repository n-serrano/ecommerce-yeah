const express = require('express');
const router = express.Router();
const path = require('path');

const userController = require('../controllers/userController');

const multerRegister = require('../middlewares/multerRegister');

const registerValidation = require('../validations/registerValidation');

router.get('/', userController.index);

// Rutas del Register 
router.get('/users/register', userController.register);
router.post('/users/register', multerRegister.any(), registerValidation, userController.create);

// Rutas del login
router.get('/users/login', userController.login);
router.post('/users/login', userController.checkUser);

// Rutas del carrito
router.get('/products/cart', userController.cart)

module.exports = router