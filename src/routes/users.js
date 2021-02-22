const express = require('express');
const users = require('../controllers/users');
const router = express.Router();
const multerRegister = require('../middlewares/multerRegister');
const registerValidation = require('../validations/registerValidation');

// Rutas del Register 
router.get('/users/register', users.register);
router.post('/users/register', multerRegister.any(), registerValidation, users.create);

// Rutas del login
router.get('/users/login', users.login);
router.post('/users/login', users.checkUser);


module.exports = router;