const { check, body } = require('express-validator');

module.exports = [
    check("price")
    .isLength({max:2})
    .withMessage("fuaaa sandra eso es el PBI argentino pa, bajale un poco"),
    ]