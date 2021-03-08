const db = require("../../database/models/Index");

module.exports = {
    admin: function(req,res){
        req.session.usrInput = null;
        res.render("admin");
    },
    create: function (req, res) {
        db.Product.create({
            imgpath: req.files[0].filename,
            name: req.body.name,
            description: req.body.description,
            id_status: 1
        })
        .then( function () {
            res.redirect('/')
        })

    }
}