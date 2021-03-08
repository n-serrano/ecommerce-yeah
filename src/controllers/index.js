const db = require("../../database/models/Index")

module.exports = {
    index: function(req,res){
        db.Product.findAll()
        .then(function(product){
     return res.render('index', {product})
        })
        res.render("../views/index")
    }
}
