"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const error_middleWare_1 = require("./middlewares/error.middleWare");
const mountRoutes_1 = require("./routes/mountRoutes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, mountRoutes_1.mountRoutes)(app);
app.use(error_middleWare_1.globalErrorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map