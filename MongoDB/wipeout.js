"use strict";
exports.__esModule = true;
var MongoClient = require('mongodb').MongoClient;
var assert = require("assert");
var COLLECTIONS = [
    'users',
    'contracts',
    'creditCardSystems',
    'automobiles'
];
var dbName = 'opay';
var port = 27017;
var host = '127.0.0.1';
var uri = "mongodb://" + host + ":" + port + "/" + dbName;
var options = { useNewUrlParser: true, useUnifiedTopology: true };
var client = new MongoClient(uri, options);
client.connect(function (err) {
    assert.equal(null, err);
    var deletePromises = [];
    console.log('You have successfully connected to MongoDB...\n');
    var db = client.db(dbName);
    var _loop_1 = function (ii) {
        deletePromises.push(new Promise(function (resolve, reject) {
            db.collection(COLLECTIONS[ii])
                .deleteMany({}, function (err, res) {
                if (err)
                    reject(err);
                else
                    resolve({ mongoResult: res['result'], collectionName: COLLECTIONS[ii] });
            });
        }));
    };
    for (var ii = 0; ii < COLLECTIONS.length; ii++) {
        _loop_1(ii);
    }
    Promise.all(deletePromises)
        .then(function (messages) {
        messages.forEach(function (message) {
            console.log(message.mongoResult.n + " " + message.collectionName + " documents successfully deleted...");
        });
    });
});
