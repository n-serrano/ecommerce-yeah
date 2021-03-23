let fs = require("fs");
let path = require("path");
const db = require("../../database/models/Index");

function userMiddleware(req, res, next){

    if(typeof req.session.usuarioLogeado != "undefined"){    
        res.locals.usuarioLogeado = req.session.usuarioLogeado;
    } else if (typeof req.cookies.recordarme != "undefined") {
        db.User.findByPk(req.cookies.recordarme)
        .then(function(resultado){
            res.locals.usuarioLogeado = resultado,
            req.session.usuarioLogeado = resultado
        })
    }
    next();
}

module.exports = userMiddleware;