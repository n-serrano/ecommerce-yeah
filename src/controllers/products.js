const db = require("../../database/models/Index")

module.exports = {
    explain: function(req, res) {
        res.render('explain')
    },
    detail: function(req, res) {
        db.Product.findByPk(req.params.id)
        .then(function(product) {
            return res.render('detail', {
                product: product
            })
        })
    },
    search: function(req, res) {
        db.Product.findAll({
            where: {
                name: {
                    [db.Sequelize.Op.like]: '%' + req.query.search + '%',
                }
            }
        })
        .then(function(listado) {
            return res.render('searchResult', {
                listado: listado,
                laQuery: req.query.search
            })
        })
    },
     cart: function(req, res) {
        res.render('cart')
    }

    }


