"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountRoutes = void 0;
const clientRoutes_1 = __importDefault(require("./clientRoutes"));
const bankerRoutes_1 = __importDefault(require("./bankerRoutes"));
const transactionRoutes_1 = __importDefault(require("./transactionRoutes"));
const mountRoutes = (app) => {
    const baseUrl = "/api/v1";
    app.use(`${baseUrl}/client`, clientRoutes_1.default);
    app.use(`${baseUrl}/banker`, bankerRoutes_1.default);
    app.use(`${baseUrl}/transaction`, transactionRoutes_1.default);
};
exports.mountRoutes = mountRoutes;
//# sourceMappingURL=mountRoutes.js.map