const express = require('express');
const router = express.Router();
const path = require('path');
const multerRegister = require('../middlewares/multerRegister');
const registerValidation = require('../validations/registerValidation');
const userController = require('../controllers/user')


// Rutas del Register 
router.get('/users/register', userController.register);
router.post('/users/register', multerRegister.any(), registerValidation, userController.create);

// Rutas del login
router.get('/users/login', userController.login);
router.post('/users/login', userController.checkUser);
router.get('/:id', userController.logout);
router.get('/users/perfil/<%= usuarioLogeado.id %>', userController.perfil);

module.exports = router