"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var users_model_1 = __importDefault(require("./users.model"));
var UserController = {
    // GET all users
    getUsers: function (req, res, next) {
        users_model_1["default"].find({}).exec(function (err, users) {
            if (err)
                res.status(500).json({ error: err });
            return res.status(200).json({ users: users });
        });
    }
};
exports["default"] = UserController;
