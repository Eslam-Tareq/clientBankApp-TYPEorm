"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientFilter = exports.getAllClients = exports.deleteClient = exports.connectClientToBanker = exports.createClient = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const clientServices_1 = require("../services/clientServices");
exports.createClient = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = yield (0, clientServices_1.createClientService)(req);
        res.status(201).json({ message: "Client created successfully", client });
    }
    catch (err) {
        next(err);
    }
}));
exports.connectClientToBanker = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, clientServices_1.connectClientToBankerService)(req);
        res
            .status(201)
            .json({ message: "Client connected To banker successfully" });
    }
    catch (err) {
        next(err);
    }
}));
exports.deleteClient = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, clientServices_1.clientDeleteService)(req);
        res.status(201).json({ message: "Client deleted successfully" });
    }
    catch (err) {
        next(err);
    }
}));
exports.getAllClients = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clients = yield (0, clientServices_1.getAllClientsService)(req);
        res.status(201).json({ message: "done", clients });
    }
    catch (err) {
        next(err);
    }
}));
exports.clientFilter = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clients = yield (0, clientServices_1.filterClientService)(req);
        res.status(201).json({ message: "done", clients });
    }
    catch (err) {
        next(err);
    }
}));
//# sourceMappingURL=clientControllers.js.map