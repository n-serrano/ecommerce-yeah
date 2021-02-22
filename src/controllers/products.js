const db = require('../../database/models/index')

module.exports = {
    cart: function(req, res) {
        res.render('cart')
    },
}
