var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/cart', function(req, res, next) {
  res.render('cart');
});

module.exports = router;
