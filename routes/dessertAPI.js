const db = require('../models');

module.exports = function(app) {


// -------------------------------------------------------------------------POSTS-----



    app.post("/api/dessertPost", function ( req, res, next ) {
        db.DessertItem.create(req.body).then(function (dessertPost, err) {
            if(err){
                next(err)
            } else {
                res.json(dessertPost);
            }
            
        });
    });


// -------------------------------------------------------------------------GET-----



    app.get("/api/dessertGet", function (req, res) {
        db.DessertItem.findAll().then(function(dessertGet) {
            res.json(dessertGet)
        });
    });



// // -------------------------------------------------------------------------DELETE-----



    app.delete("/api/dessertDelete:id", function (req, res) {
        console.log("DELETE ROUTE HIT");
        db.DessertItem.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dessertItem) {
            res.json(dessertItem);
        });
    });

};