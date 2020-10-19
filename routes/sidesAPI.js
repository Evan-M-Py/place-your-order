const db = require('../models');

module.exports = function(app) {


// -------------------------------------------------------------------------POSTS-----


    app.post("/api/sidesPost", function ( req, res, next ) {
        db.SidesItem.create(req.body).then(function (sidesPost, err) {
            if(err){
                next(err)
            } else {
                res.json(sidesPost);
            }
            
        });
    });



// -------------------------------------------------------------------------GET-----



    app.get("/api/sidesGet", function (req, res) {
        db.SidesItem.findAll().then(function(sidesGet) {
            res.json(sidesGet)
        });
    });



// // -------------------------------------------------------------------------DELETE-----


    app.delete("/api/sidesdelete:id", function (req, res) {
        console.log("DELETE ROUTE HIT");
        db.SidesItem.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (SidesItem) {
            res.json(sideItem);
        });
    });

};