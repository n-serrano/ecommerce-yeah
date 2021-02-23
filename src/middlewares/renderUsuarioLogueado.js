let fs = require("fs");
let path = require("path");
function userMiddleware(req, res, next){
    if(req.session.usuarioLogeado != undefined){    
        res.locals.usuarioLogeado = req.session.usuarioLogeado;
    }
    next();
}

module.exports = userMiddleware;