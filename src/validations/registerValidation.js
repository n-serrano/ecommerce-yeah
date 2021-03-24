const { check, body } = require('express-validator');
const db = require("../../database/models/Index");

module.exports = [
    check("email")
    .isEmail()
    .withMessage("Debe ingresar un email válido"),
    check("password")
    .isLength({min:6})
    .withMessage("Su contraseña debe contener al menos 8 caracteres"),
    body('email').custom(value => {
        return db.User.findByPk(value).then((user, value) => {
          if (user == value) {
            return Promise.reject('Ups... este correo electrónico ya pertenece a otra persona (o robot), intentá con otro!');
          }
        });
      })
]
