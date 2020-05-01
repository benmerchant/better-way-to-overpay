"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./components/home/routes"));
var automobiles_routes_1 = __importDefault(require("./components/automobiles/automobiles.routes"));
var contracts_routes_1 = __importDefault(require("./components/contracts/contracts.routes"));
var routes_2 = __importDefault(require("./components/creditCardSystems/routes"));
var users_routes_1 = __importDefault(require("./components/users/users.routes"));
var router = express_1["default"].Router();
router.use('/', routes_1["default"]);
router.use('/automobiles', automobiles_routes_1["default"]);
router.use('/contracts', contracts_routes_1["default"]);
router.use('/creditCardSystems', routes_2["default"]);
router.use('/users', users_routes_1["default"]);
exports["default"] = router;
