"use strict";
exports.__esModule = true;
var express_1 = require("express");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config();
var host = process.env.HOST;
var port = process.env.PORT;
var app = express_1["default"]();
app.get('/', function (_req, res) {
    res.send('Heyooooo, World!');
});
app.listen(port, function () {
    console.log("oPay API listening on " + host + port);
});
