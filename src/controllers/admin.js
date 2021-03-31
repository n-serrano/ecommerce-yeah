const db = require("../../database/models/Index");

module.exports = {
    admin: function(req,res){
        db.Category.findAll()
        .then(function (category){
            res.render('admin', {category});
        })
        
        
    },
    create: function (req, res) {
        db.Product.create({
            imgpath: req.files[0].filename,
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            id_status: 1,
            id_category: req.body.category
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
        db.Product.findOne({
            where: {
                id: req.params.id,
            }
        })
        .then(function (producto) {
            let foto = producto.imgpath
            db.Product.update({
                imgpath: req.files.length > 0 ? req.files[0].filename : foto,
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
        })
        
    },
}