/**
 * Created by student on 21.07.17.
 */
var express = require('express');
var router = express.Router();
var os = require('os');
/* GET users listing. */
router.get('/', function(req, res, next) {

    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect("mongodb://localhost:27017/myDB", function (err, db) {
        var results_from_mongo = [];
        var i =0;
        var collection = db.collection('paste');
        collection.find({}).toArray().then(function (data) {
            var result='';
            for(var i = 0;i<data.length;i++){
                result+=data[i].pasteID+"\r\n\t";
            }

            res.render('all', {"results": result});
        });

    });



});


module.exports = router;
