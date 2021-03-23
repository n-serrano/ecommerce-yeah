const { check, body } = require('express-validator');
const db = require("../../database/models/Index");

module.exports = [
    check("email")
    .isEmail()
    .withMessage("Debe ingresar un email válido"),
    check("password")
    .isLength({min:8})
    .withMessage("Su contraseña debe contener al menos 8 caracteres"),
    body('email').custom(value => {
        return db.User.findUserByEmail(value).then(user => {
          if (user) {
            return Promise.reject('E-mail already in use');
          }
        });
      })
    // body("email").custom(function(value){}
    // los campos contraseña y correo electronico deben ser los mismo datos que pusimos en el campo name del formulario
]
