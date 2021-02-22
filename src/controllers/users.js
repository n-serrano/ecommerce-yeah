const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator')


const db = require('../../database/models/index')

let usuarios = fs.readFileSync(path.join(__dirname, '../data/usuarios.json'), 'utf8');
usuarios = JSON.parse(usuarios);


module.exports = {
    register: function(req, res) {
        res.render('register');
    },
    
    login: function(req, res) {
        res.render('login')
    },
    
    create: function(req, res) {

        let errors = validationResult(req);
        if(errors.isEmpty()) {
            usuarios.push({
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 12),
                avatar: req.files[0].filename
            })
            fs.writeFileSync(path.join(__dirname, '../data/usuarios.json'), JSON.stringify(usuarios, null, 4))
            res.redirect('/')
        } else {
            res.render('register', {
                errors: errors.mapped()
            })
        }


    },
    checkUser: function(req, res) {
        for(let i = 0; i < usuarios.length; i++) {
            if(usuarios[i].email == req.body.email) {
                if(bcrypt.compareSync(req.body.password, usuarios[i].password)) {
                    req.session.usuarioLogueado = {
                        email: usuarios[i].email,
                        avatar: usuarios[i].avatar
                    }
                    return res.redirect('/')
                } else {
                    return res.send('Los datos ingresados no coinciden. Seguí participando.')
                }
            }
        }
        return res.send("El usuario no existe, por favor registrate....")
    }
}