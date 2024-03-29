const express = require('express');
const router = express.Router();
const multerRegister = require('../middlewares/multerRegister');
const registerValidation = require('../validations/registerValidation');
const userController = require('../controllers/user')
const loginValidation = require('../validations/loginValidation')


// Rutas del Register 
router.get('/users/register', userController.register);
router.post('/users/register', multerRegister.any(), registerValidation, userController.create);

// Rutas del login
router.get('/users/login', userController.login);

router.post('/users/login',loginValidation, userController.checkUser);

router.get('/users/perfil/:id', userController.perfil);

router.get('/:id', userController.logout);

// router.get('/edit/:id', userController.edit)

// router.post('/edit/:id', multerRegister.any(), userController.update)

module.exports = router