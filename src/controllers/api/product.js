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
        db.Category.findAll({ include: "product"})
            .then(function (totalCategories) {
                if (totalCategories.length > 0) {
                    let arrayOfCategories = []
                    for(let i = 0; i < totalCategories.length; i++){
                        arrayOfCategories.push({
                            name:totalCategories[i].dataValues.title,
                            totalProds:totalCategories[i].dataValues.product.length
                        })
                    }
                    let apiResponse = {
                        meta: {
                            status: 200,
                            url: "/api/category",
                            total: totalCategories.length
                        },
                        data:arrayOfCategories
                        
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
    
    lastProduct: function (req, res) {
        db.Product.findAll({ include: "category", order:[["created_at","DESC"]], limit:1 })
            .then(function (products) {
               products[0].setDataValue("endpoint", "/api/products/last/" + products.length)
                let apiResponse= {
                    meta: {
                        status: 200,
                        url: "/api/products/last",
                        total: products.length, 
                    },
                    data: products
                }
                res.json(apiResponse)
        })
        .catch(function (error) {
            res.json({ status: 500 })
            console.log(error)
        })
    },

}