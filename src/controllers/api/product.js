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
                            total: products.length, 
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
    totalCategory: function (req, res) {
        db.Category.findAll()

            .then(function (totalCategories) {
                if (totalCategories.length > 0) {
                    let apiResponse = {
                        meta: {
                            status: 200,
                            url: "/api/category",
                            total: totalCategories.length
                        },
                        data: totalCategories
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
    productForCategory: function (req, res) {
        db.Product.findAll({ include: "category" })
            .then(function (products) {
                for (let i = 0; i < products.length; i++) {
                    let relatedProducts = products[i].category
                }

                let apiResponse= {
                    meta: {
                        status: 200,
                        url: "/api/products/category",
                        total: relatedProducts.length, 
                    },
                    data: products
                }
                res.json(apiResponse)
        })
        .catch(function () {
            res.json({ status: 500 })
        })
},

}