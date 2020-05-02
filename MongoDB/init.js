"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var MongoClient = require('mongodb').MongoClient; // TODO: obvs, fix these module imports
var assert = require("assert");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var users_1 = __importDefault(require("./documents/users"));
var contracts_1 = __importDefault(require("./documents/contracts"));
var automobiles_1 = __importDefault(require("./documents/automobiles"));
var creditCardSystems_1 = __importDefault(require("./documents/creditCardSystems"));
var dbName = 'opay';
// TODO: cant auth in
// const dbUser = 'benjo'
// const dbPassword = 'changeToYourPassword'
var port = process.env.PORT;
var dbUrl = process.env.DB_BASE_URL;
var uri = dbUrl + ":" + port + "/" + dbName;
var options = { useNewUrlParser: true, useUnifiedTopology: true };
var client = new MongoClient(uri, options);
client.connect(function (err) {
    assert.equal(null, err);
    var seedPromises = [];
    console.log('You have successfully connected to MongoDB...\n');
    var db = client.db(dbName);
    seedPromises.push(new Promise(function (resolve, reject) {
        var collectionName = 'users';
        db.collection(collectionName)
            .insertMany(users_1["default"], function (err, res) {
            if (err)
                reject(err);
            else
                resolve({ mongoResult: res['result'], collectionName: collectionName });
        });
    }));
    seedPromises.push(new Promise(function (resolve, reject) {
        var collectionName = 'contracts';
        db.collection(collectionName)
            .insertMany(contracts_1["default"], function (err, res) {
            if (err)
                reject(err);
            else
                resolve({ mongoResult: res['result'], collectionName: collectionName });
        });
    }));
    seedPromises.push(new Promise(function (resolve, reject) {
        var collectionName = 'creditCardSystems';
        db.collection(collectionName)
            .insertMany(creditCardSystems_1["default"], function (err, res) {
            if (err)
                reject(err);
            else
                resolve({ mongoResult: res['result'], collectionName: collectionName });
        });
    }));
    seedPromises.push(new Promise(function (resolve, reject) {
        var collectionName = 'automobiles';
        db.collection(collectionName)
            .insertMany(automobiles_1["default"], function (err, res) {
            if (err)
                reject(err);
            else
                resolve({ mongoResult: res['result'], collectionName: collectionName });
        });
    }));
    // TODO: handle errors
    Promise.all(seedPromises)
        .then(function (messages) {
        messages.forEach(function (message) {
            // TODO: implement dynamic plural
            console.log(message.mongoResult.n + " " + message.collectionName + " documents successfully inserted...");
        });
    });
});
