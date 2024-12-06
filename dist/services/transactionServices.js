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
exports.createTransactionService = void 0;
const transaction_1 = require("../entities/transaction");
const client_1 = require("../entities/client");
const types_1 = require("../types/types");
const appError_1 = __importDefault(require("../utils/appError"));
const createTransactionService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { client_id, amount, type } = req.body;
    const client = yield client_1.Client.findOne({ where: { id: client_id } });
    if (!client) {
        throw new appError_1.default("Client not found", 404);
    }
    const transaction = transaction_1.Transaction.create({
        type: type,
        amount: amount,
        client: client,
    });
    const result = yield transaction.save();
    if (transaction.type === types_1.TransactionType.DEPOSIT) {
        client.balance += amount;
    }
    else if (transaction.type === types_1.TransactionType.WITHDRAW) {
        if (client.balance >= amount) {
            client.balance -= amount;
        }
        else
            throw new appError_1.default("you don't have enough balance ", 400);
    }
    yield client.save();
    return result;
});
exports.createTransactionService = createTransactionService;
//# sourceMappingURL=transactionServices.js.map