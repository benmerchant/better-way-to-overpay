"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1["default"].Schema;
var ContractSchema = new Schema({
    dateCreated: {
        type: Date,
        required: true
    },
    originalBalance: {
        type: Number,
        required: true
    },
    paymentFrequency: {
        type: String,
        required: true
    },
    normalPaymentAmount: {
        type: Number,
        required: true
    },
    automobiles: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    payments: [
        {
            dateOfPayment: {
                type: Date,
                required: true
            },
            amount: {
                type: Number,
                required: true
            },
            paymentInstrument: {
                type: String,
                required: true
            }
        }
    ]
});
exports["default"] = mongoose_1["default"].model('Contract', ContractSchema);
