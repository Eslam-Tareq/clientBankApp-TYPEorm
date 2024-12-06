"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bankerControllers_1 = require("../controllers/bankerControllers");
const bankerRouter = (0, express_1.Router)();
bankerRouter.post("/", bankerControllers_1.createBanker);
exports.default = bankerRouter;
//# sourceMappingURL=bankerRoutes.js.map