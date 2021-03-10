const db = require("../../database/models/Index");

module.exports = {
    admin: function(req,res){
        res.render("admin");
    },
    create: function (req, res) {
        db.Product.create({
            imgpath: req.files[0].filename,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            id_status: 1
        })
        .then( function () {
            res.redirect('/')
        })
    },
    delete: function(req,res){
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(borrada) {
            res.redirect('/')
        })
        .catch(function(e) {
            return res.send(e)
        })
    },
    edit: function(req,res){
        db.Product.findByPk(req.params.id)
            .then(function(product){
            res.render('editForm', {product})
        })
    },
    update: function(req,res){
        db.Product.update({
            imgpath: req.files[0].filename,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function() {
            res.redirect('/')
        }).catch(function(e){
            res.send(e)
        })
    },
}