"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const transactionControllers_1 = require("../controllers/transactionControllers");
const bankerRouter = (0, express_1.Router)();
bankerRouter.post("/", transactionControllers_1.createTransaction);
exports.default = bankerRouter;
//# sourceMappingURL=transactionRoutes.js.map