"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var contracts_model_1 = __importDefault(require("./contracts.model"));
var ContractController = {
    // GET all contracts
    getContracts: function (req, res, next) {
        contracts_model_1["default"].find({}).exec(function (err, contracts) {
            if (err)
                res.status(500).json({ error: err });
            return res.status(200).json({ contracts: contracts });
        });
    }
};
exports["default"] = ContractController;
