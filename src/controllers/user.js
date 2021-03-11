const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
// const db = require("../../database/models/Index")

const { validationResult } = require('express-validator');
const db = require('../../database/models/Index');

let usuarios = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf8');
usuarios = JSON.parse(usuarios);

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
          res.cookie("recordarme", 0, {maxAge: 3800});
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
            // fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), JSON.stringify(usuarios, null, 4))
            // res.redirect('/')
        } else {
            res.render('register', {
                errors: errors.mapped()
            })
        }


    },
    checkUser: function(req, res) {
        db.User.findOne({
            where : {
                email:req.body.email,
            }
        })
        .then(function (usuarios) {
            if (usuarios && bcrypt.compareSync(req.body.password, usuarios.password)) {
                let usuarioLogeado = {
                    id: usuarios.id,
                    admin: usuarios.admin,
                    username: usuarios.username,
                    avatar: usuarios.avatar
                }
                req.session.usuarioLogeado = usuarioLogeado;
            if(req.body.remember != undefined){ 
                res.cookie("recordarme", usuarioLogeado.id, { maxAge: 864000});
            }
            return res.redirect('/')
        
            }
            
            
    })
    },
    
}
