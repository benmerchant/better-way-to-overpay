"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var contracts_controller_1 = __importDefault(require("./contracts.controller"));
var ContractRouter = express_1["default"].Router();
ContractRouter.get('/', contracts_controller_1["default"].getContracts);
exports["default"] = ContractRouter;
