const db = require('../../../database/models/Index');


module.exports = {
    list: function (req, res) {
        db.Product.findAll({ include: "category" })
            .then(function (products) {
                for (let i = 0; i < products.length; i++) {
                    products[i].setDataValue("endpoint", "/api/products/" + products[i].id)
                }

                let apiResponse= {
                    meta: {
                        status: 200,
                        url: "/api/products",
                        total: products.length
                    },
                    data: products
                }
                res.json(apiResponse)
            })
            .catch(function () {
                res.json({ status: 500 })
            })
    },



    detail: function (req, res) {
        db.Product.findByPk(req.params.id, {
            include: "category"
        })
            .then(function (product) {
                if (product != undefined) {
                    let apiResponse= {
                        meta: {
                            status: 200,
                            url: "/api/products/" + product.id,
                        },
                        data: product
                    }
                    return res.json(apiResponse)
                } else {
                    return res.json({ status: 204 })
                }
            })
            .catch(function () {
                res.json({ status: 500 })
            })
    },
    listFilter: function (req, res) {
        db.Product.findAll({
            include: "category",
            where: {
                id_category: req.params.id,
            }
        })

            .then(function (filtredProducts) {
                if (filtredProducts.length > 0) {
                    let apiResponse = {
                        meta: {
                            status: 200,
                            category_name: filtredProducts[1].category.title,
                            url: "/api/products/category/" + req.params.id,
                            total: filtredProducts.length
                        },
                        data: filtredProducts
                    }
                    return res.json(apiResponse)
                } else {
                    return res.json({ status: 204 })
                }
            })
            .catch(function () {
                res.json({ status: 500 })
            })
    },

}