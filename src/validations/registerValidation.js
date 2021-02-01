const { check, body } = require('express-validator');

module.exports = [
    check('email')
      .isEmail().withMessage("Debés ingresar un email válido. No te olvides del @"),
    check('password')
      .isLength({min: 6, max:12}).withMessage("El mínimo de caracteres es 6 y el máximo es 12")  
]