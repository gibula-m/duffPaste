var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {

    //odebrac dane z bazy i podmienic wartosc w obiekcie wysylanym do widoku

    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect("mongodb://localhost:27017/myDB", function(err, db) {
        if(!err) {
            console.log("We are connected");
        }
        var collection = db.collection('paste');
        collection.findOne({pasteID:req.params.id}, function(err, document) {
            res.render("result",{
                data:document.paste,
                syntax:document.syntax
            });
        });
    });



});


module.exports = router;
