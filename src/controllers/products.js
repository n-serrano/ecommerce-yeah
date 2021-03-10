const db = require("../../database/models/Index")

module.exports = {

    // showAll: function (req, res) {
    //     db.Product.findAll().then(function (product) {
    //         return res.render('/', { product })
    //     })
    // },
    detail: function(req, res) {
        db.Product.findByPk(req.params.id)
        .then(function(product) {
            return res.render('detail', {
                product: product
            })
        })
    },
    // search: function (req, res) {
    //     db.Product.findAll({
    //         where: {
    //             nombre: { [db.Sequelize.Op.like]: "%" + req.query.search + "%" }
    //         }.then(function (listado) {
    //             if (listado.lenght != 0)
    //                 return res.send(listado)
    //         })
    //     })
    // },
     cart: function(req, res) {
        res.render('cart')
    }

    }


