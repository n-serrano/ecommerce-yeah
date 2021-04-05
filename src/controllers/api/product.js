const db = require('../../../database/models/Index');


module.exports = {
    list: function (req, res) {
        db.Category.findAll().then( function (category){

        
            db.Product.findAll({ include: "category" })
                .then(function (products) {
                    for (let i = 0; i < products.length; i++) {
                        products[i].setDataValue("endpoint", "/api/products/" + products[i].id)
                    }

                    let apiResponse= {
                        meta: {
                            status: 200,
                            url: "/api/products",
                            total: products.length, categories: category.length
                        },
                        data: products
                    }
                    res.json(apiResponse)
            })
        })
            .catch(function () {
                res.json({ status: 500 })
            })
    },
    
    totalProducts: function (req, res) {
        db.Product.count().then(function(number){
            res.json(number)
        })
    },
    
    productDetail: function (req, res) {
        db.Product.products().then(function(number){
            res.json(number)
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
    categoryFilter: function (req, res) {
        db.Category.findAll(totalCategories)

            .then(function (totalCategories) {
                if (totalCategories.length > 0) {
                    let apiResponse = {
                        meta: {
                            status: 200,
                            url: "/api/products/category",
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

}