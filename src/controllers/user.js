const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../../database/models/Index');



module.exports = {
    index: function(req, res) {
        res.render('index');
    },
    register: function(req, res) {
        res.render('register');
    },
    login: function(req, res) {
        res.render('login')
    },
    logout: function (req, res){
        if (req.params.id != undefined) {
          req.session.usuarioLogeado = undefined;
          res.cookie("recordarme", 0, {maxAge: 0});
          res.redirect("/");
        } 
    },
    perfil: function(req,res) {
        res.render('perfil')
    },
    create: function(req, res) {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
            db.User.create({
                admin:0,
                username: req.body.username,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 12),
                avatar: req.files.length > 0 ? req.files[0].filename : ""
            })
            .then(function (){
                res.redirect('/')
            })
        } else {
            res.render('register', {
                errors: errors.mapped()
            })
        }


    },
    checkUser: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
        db.User.findOne({
            where: {
                email: req.body.email
            }   
        })
        .then(function(user){
            if(user && bcrypt.compareSync(req.body.password, user.password)){
                let usuarioLogeado = {
                    id: user.id,
                    admin: user.admin,
                    username: user.username,
                    email: user.email,
                    avatar: user.avatar
                }
                req.session.usuarioLogeado = usuarioLogeado;
            if(req.body.remember != undefined){ 
                res.cookie("recordarme", usuarioLogeado.id, { maxAge: 15*24*60*60*1000});
            }
            return res.redirect('/')
        }else {
            return res.render("login", { errors: errors.mapped(), old: req.body })
        }
       
        
        })
    } 
    },
    // edit: function(req,res){
    //     db.User.findByPk(req.params.id)
    //         .then(function(user){
    //         res.render('editUser', {user})
    //     })
    // },
    // update: function(req,res){
    //     db.User.findOne({
    //         where: {
    //             id: req.params.id,
    //         }
    //     })
    //     .then(function (user) {
    //         let foto = user.imgpath
    //         db.User.update({
    //             username: req.body.username,
    //             email: req.body.email,
    //             password: bcrypt.hashSync(req.body.password, 12),
    //             avatar: req.files.length > 0 ? req.files[0].filename : foto
    //         }, {
    //             where: {
    //                 id: req.params.id
    //             }
    //         })
    //         .then(function(usuarios) {
    //             let usuarioLogeado = {
    //                 id: usuarios.id,
    //                 admin: usuarios.admin,
    //                 username: usuarios.username,
    //                 email: usuarios.email,
    //                 avatar: usuarios.avatar
    //             }
    //             req.session.usuarioLogeado = usuarioLogeado;
    //             res.redirect('/')
    //         }).catch(function(e){
    //             res.send(e)
    //         })
    //     })
        
    // },
}
