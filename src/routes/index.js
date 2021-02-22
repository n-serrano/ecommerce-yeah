const express = require('express');
const usersController = require('../controllers/index');
const router = express.Router();


router.get('/', usersController.index);

module.exports = router;