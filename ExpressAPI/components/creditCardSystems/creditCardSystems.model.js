"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1["default"].Schema;
var CreditCardSystemSchema = new Schema({
    firstNumber: {
        type: String,
        required: true
    },
    system: {
        type: String,
        required: true
    }
});
exports["default"] = mongoose_1["default"].model('CreditCardSystem', CreditCardSystemSchema);
