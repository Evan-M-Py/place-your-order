const db = require('../models');

module.exports = function(app) {


// -------------------------------------------------------------------------POSTS-----


    app.post("/api/dinnerPost", function ( req, res, next ) {
        db.DinnerItem.create(req.body).then(function (dinnerPost, err) {
            if(err){
                next(err)
            } else {
                res.json(dinnerPost);
            }
            
        });
    });
    


// -------------------------------------------------------------------------GET-----

var dinnerFunc = function (req, res, next) {

    console.log('dinner')

    db.DinnerItem.findAll().then(function(dinnerGet) {

        res.json(dinnerGet)

        next()

    });

}

var lunchFunc = function (req, res, next) {

    console.log('lunch')

    db.LunchItem.findAll().then(function(lunchGet) {

        res.json(lunchGet)

        next()

    });

}

var appetizersFunc = function (req, res, next) {

    console.log('appetizers')

    db.AppetizersItem.findAll().then(function(appetizersGet) {

      const menuObject  res.json(appetizersGet)

        next()
    });

}

var sidesFunc = function (req, res, next) {

    console.log('sides')

    db.SidesItem.findAll().then(function(sidesGet) {

        res.json(sidesGet)

        next()

    });

}

var miscFunc = function (req, res) {

    console.log('misc')

    db.MiscItem.findAll().then(function(miscGet) {

        res.json(miscGet)

    });

}

    app.get("/api/wholeMenuGet/", [dinnerFunc, lunchFunc, appetizersFunc, sidesFunc, miscFunc]);



};