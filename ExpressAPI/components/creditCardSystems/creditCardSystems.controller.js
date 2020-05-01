"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var creditCardSystems_model_1 = __importDefault(require("./creditCardSystems.model"));
var CreditCardSystemController = {
    // GET all creditCardSystems
    getCreditCardSystems: function (req, res, next) {
        creditCardSystems_model_1["default"].find({}).exec(function (err, creditCardSystems) {
            if (err)
                res.status(500).json({ error: err });
            return res.status(200).json({ creditCardSystems: creditCardSystems });
        });
    }
};
exports["default"] = CreditCardSystemController;
