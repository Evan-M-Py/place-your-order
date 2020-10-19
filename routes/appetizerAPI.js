const db = require('../models');


module.exports = function(app) {


// -------------------------------------------------------------------------POSTS-----



    app.post("/api/appetizerPost", function ( req, res, next ) {
        db.AppetizerItem.create(req.body).then(function (appPost, err) {
            if(err){
                next(err)
            } else {
                res.json(appPost);
            }
            
        });
    });



// -------------------------------------------------------------------------GET-----



    app.get("/api/appetizerGet", function (req, res) {
        db.AppetizerItem.findAll().then(function(appGet) {
            res.json(appGet)
        });
    });




// // -------------------------------------------------------------------------DELETE-----


    app.delete("/api/appetizersdelete:id", function (req, res) {
        console.log("DELETE ROUTE HIT");
        db.AppetizerItem.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (appItem) {
            res.json(appItem);
        });
    });

};