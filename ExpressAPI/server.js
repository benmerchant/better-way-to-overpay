"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
var router_1 = __importDefault(require("./router"));
dotenv_1["default"].config();
var host = process.env.HOST;
var port = process.env.PORT;
var database = process.env.DATABASE;
var dbBaseUrl = process.env.DB_BASE_URL;
var connString = dbBaseUrl + "/" + database;
var options = { useNewUrlParser: true };
var app = express_1["default"]();
mongoose_1["default"].connect("" + connString, options);
var db = mongoose_1["default"].connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected to MongoDB");
});
app.use(router_1["default"]);
app.listen(port, function () {
    console.log("oPay API listening on " + host + port);
});
