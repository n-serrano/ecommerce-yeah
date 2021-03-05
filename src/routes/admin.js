const express = require('express');
const router = express.Router();
const path = require('path');
const adminController = require('../controllers/admin.js');

router.get('/users/admin', adminController.admin);

module.exports = router