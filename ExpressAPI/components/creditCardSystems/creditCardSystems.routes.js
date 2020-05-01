"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var creditCardSystems_controller_1 = __importDefault(require("./creditCardSystems.controller"));
var CreditCardSystemsRouter = express_1["default"].Router();
CreditCardSystemsRouter.get('/', creditCardSystems_controller_1["default"].getCreditCardSystems);
exports["default"] = CreditCardSystemsRouter;
