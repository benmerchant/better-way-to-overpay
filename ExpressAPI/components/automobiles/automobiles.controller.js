"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var automobiles_model_1 = __importDefault(require("./automobiles.model"));
var AutomobileController = {
    // GET all automobiles
    getAutomobiles: function (req, res, next) {
        automobiles_model_1["default"].find({}).exec(function (err, automobiles) {
            if (err)
                res.status(500).json({ error: err });
            return res.status(200).json({ automobiles: automobiles });
        });
    }
};
exports["default"] = AutomobileController;
