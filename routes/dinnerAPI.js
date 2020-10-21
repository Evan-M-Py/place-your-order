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



    app.get("/api/dinnerGet/", function (req, res) {

        console.log('this far')

        db.DinnerItem.findAll().then(function(dinnerGet) {

            res.json(dinnerGet)

        });

    });



// // -------------------------------------------------------------------------DELETE-----


    app.delete("/api/dinnerDelete:id", function (req, res) {
        console.log("DELETE ROUTE HIT");
        db.DinnerItem.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dinnerItem) {
            res.json(dinnerItem);
        });
    });


};