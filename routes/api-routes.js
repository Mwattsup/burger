const db = require('../models');
const main = require('../views/layouts/main');
const allBurgers = require('../views/allburgers');
const allDevoured = require('../views/devourall');

module.exports = function (app) {
    app.get("/", function (req, res) {

        let bodyOne

        db.burger.findAll({
            raw: true,
            where: {
                devoured: false
            }
        }).then(function (data) {
            bodyOne = data;
        })

        db.burger.findAll({
            raw: true,
            where: {
                devoured: true
            }
        }).then(function (bodyTwo) {
            console.log(bodyTwo);
            res.send(main.render(allBurgers.render(bodyOne), allDevoured.render(bodyTwo)));
        })

    });

    app.post("/", function (req, res) {
        db.burger.create(req.body).then(function (yonge) {
            res.json(yonge);
        })
    });

    app.put("/", function (req, res) {
        console.log(req.body);
        db.burger.update( 
            {
            devoured: true
            },
            {
                where: {
                    id: req.body.id
                }
            }).then(function (yonge) {
                res.json(yonge);
            });
    });
};