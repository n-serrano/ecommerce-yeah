const db = require('../../database/models/index')

module.exports = {
    index: function(req, res) {
        res.render('index');
    },
}