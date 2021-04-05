const db = require('../../../database/models/Index');

module.exports = {
    list: function (req, res) {
        db.User.findAll({
            attributes: ['id', 'username', "avatar", "email"]
        })
            .then(function (users) {
                for (let i = 0; i < users.length; i++) {
                    users[i].setDataValue("endpoint", "/api/users/" + users[i].id)
                }

                let apiResponse = {
                    meta: {
                        status: 200,
                        url: "/api/users",
                        total: users.length
                    },
                    data: users
                }
                res.json(apiResponse)
            })
            .catch(function () {
                res.json({ status: 500 })
            })
    },
    totalUsers: function (req, res) {
        db.User.count().then(function(number){
            res.json(number)
        })
    },


    detail: function (req, res) {
        db.User.findByPk(req.params.id, {
            attributes: ['id', 'username', "avatar", "email"]
        })
            .then(function (user) {
                if (user == undefined) {
                    res.json({ status: 204 })
                } else {

                    let apiResponse = {
                        meta: {
                            status: 200,
                            url: "/api/users/" + user.id,
                        },
                        data: user
                    }
                    res.json(apiResponse)
                }

            })


            .catch(function () {
                res.json({ status: 500 })
            })
    },
}