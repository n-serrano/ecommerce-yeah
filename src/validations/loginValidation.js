const { check, body } = require('express-validator');

module.exports = [
    check("email")
    .isEmail()
    .withMessage("Debe ingresar un email válido"),
    body("password").custom((value, { req }) => {
        if (value !== req.body.password) {
          return Promise.reject("tu contraseña no es correcta");
        }
        return true;
      })
    
]