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
exports.filterClientService = exports.getAllClientsService = exports.clientDeleteService = exports.connectClientToBankerService = exports.createClientService = void 0;
const client_1 = require("../entities/client");
const banker_1 = require("../entities/banker");
const appError_1 = __importDefault(require("../utils/appError"));
const createClientService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, cardNumber, balance, family } = req.body;
    const client = client_1.Client.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        cardNumber: cardNumber,
        balance: balance,
        family: family,
    });
    const result = yield client.save();
    return result;
});
exports.createClientService = createClientService;
const connectClientToBankerService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { client_id, banker_id } = req.body;
    const client = yield client_1.Client.findOne({ where: { id: client_id } });
    const banker = yield banker_1.Banker.findOne({ where: { id: banker_id } });
    if (!banker || !client) {
        throw new appError_1.default("Client or Banker not found", 404);
    }
    banker.clients = [client];
    yield banker.save();
});
exports.connectClientToBankerService = connectClientToBankerService;
const clientDeleteService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { client_id } = req.params;
    yield client_1.Client.delete({ id: client_id });
});
exports.clientDeleteService = clientDeleteService;
const getAllClientsService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { client_id } = req.params;
    const clients = yield client_1.Client.createQueryBuilder("clients")
        .select("client")
        .from(client_1.Client, "client")
        .getMany();
    return clients;
});
exports.getAllClientsService = getAllClientsService;
const filterClientService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { client_id } = req.params;
    const clients = yield client_1.Client.createQueryBuilder("clients")
        .select("client")
        .from(client_1.Client, "client")
        .where("client.id = :client_id", { client_id: client_id })
        .getMany();
    return clients;
});
exports.filterClientService = filterClientService;
//# sourceMappingURL=clientServices.js.map