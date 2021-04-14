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
    lastUser: function (req, res) {
        db.User.findAll({ order:[["created_at","DESC"]], limit:1 })
            .then(function (users) {
               users[0].setDataValue("endpoint", "/api/users/last/" + users.length)
                

                let apiResponse= {
                    meta: {
                        status: 200,
                        url: "/api/users/last",
                        total: users.length, 
                    },
                    data: users
                }
                res.json(apiResponse)
        })
        .catch(function (error) {
            res.json({ status: 500 })
            console.log(error)
        })
    },
}