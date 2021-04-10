const express = require('express');
const router = express.Router();
const apiUserController = require ("../../controllers/api/user")

router.get('/api/users/', apiUserController.list);
router.get('/api/users/:id', apiUserController.detail);

module.exports = router;