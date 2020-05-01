"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var automobiles_controller_1 = __importDefault(require("./automobiles.controller"));
var AutomobileRouter = express_1["default"].Router();
AutomobileRouter.get('/', automobiles_controller_1["default"].getAutomobiles);
exports["default"] = AutomobileRouter;
