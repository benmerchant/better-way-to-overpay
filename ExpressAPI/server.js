"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var host = 'http://localhost';
var port = 8000;
app.get('/', function (req, res) {
    res.send('Heyooooo, World!');
});
app.listen(port, function () {
    console.log("oPay API listening on " + host + port);
});
