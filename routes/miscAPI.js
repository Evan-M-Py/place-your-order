const db = require('../models');

module.exports = function(app) {


// -------------------------------------------------------------------------POSTS-----


    app.post("/api/miscPost", function ( req, res, next ) {
        db.MiscItem.create(req.body).then(function (miscPost, err) {
            if(err){
                next(err)
            } else {
                res.json(miscPost);
            }
            
        });
    });


// -------------------------------------------------------------------------GET-----


    app.get("/api/miscGet", function (req, res) {
        db.MiscItem.findAll().then(function(miscGet) {
            res.json(miscGet)
        });
    });


// // -------------------------------------------------------------------------DELETE-----


    app.delete("/api/miscdelete:id", function (req, res) {
        console.log("DELETE ROUTE HIT");
        db.MiscItem.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (miscItem) {
            res.json(miscItem);
        });
    });

};