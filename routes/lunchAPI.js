const db = require('../models');

module.exports = function(app) {


// -------------------------------------------------------------------------POSTS-----

    
    app.post("/api/lunchPost", function ( req, res, next ) {
        db.LunchItem.create(req.body).then(function (lunchPost, err) {
            if(err){
                next(err)
            } else {
                res.json(lunchPost);
            }
            
        });
    });



// -------------------------------------------------------------------------GET-----



    app.get("/api/lunchGet", function (req, res) {
        db.LunchItem.findAll().then(function(lunchGet) {
            res.json(lunchGet)
        });
    });



// // -------------------------------------------------------------------------DELETE-----


    app.delete("/api/lunchdelete:id", function (req, res) {
        console.log("DELETE ROUTE HIT");
        db.LunchItem.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (lunchItem) {
            res.json(lunchItem);
        });
    });

};