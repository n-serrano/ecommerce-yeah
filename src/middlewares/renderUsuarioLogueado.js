let fs = require("fs");
let path = require("path");

function userMiddleware(req, res, next){
    console.log( "hola", req.session.usuarioLogeado)
    if(typeof req.session.usuarioLogeado != "undefined"){    
        res.locals.usuarioLogeado = req.session.usuarioLogeado;
    }
    next();
}

module.exports = userMiddleware;