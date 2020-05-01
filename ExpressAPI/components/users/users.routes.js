"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var users_controller_1 = __importDefault(require("./users.controller"));
var EmployeeRouter = express_1["default"].Router();
EmployeeRouter.get('/', users_controller_1["default"].getUsers);
exports["default"] = EmployeeRouter;
