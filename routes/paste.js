var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('add');
});

//POST request
router.post('/', function(req, res, next) {
    var paste = req.body.paste;
    var d = new Date();
    var key = "paste-"+d.getTime()+"-"+Math.floor((Math.random() * 100) + 1);
    //wrzucic dane do bazy!!!
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect("mongodb://localhost:27017/myDB", function(err, db) {
        if(!err) {
            console.log("We are connected");
        }
        var collection = db.collection('paste');
        var doc1 = {};
        doc1["pasteID"]=key;
        doc1["paste"]=paste;
        doc1["syntax"]=req.body.syntax;

        collection.insert(doc1);
    });



    res.render('done',
        {
            KEY:key
        });
});

module.exports = router;
