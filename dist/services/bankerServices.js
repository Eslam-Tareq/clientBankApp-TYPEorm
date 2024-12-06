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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBankerService = void 0;
const banker_1 = require("../entities/banker");
const createBankerService = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, cardNumber, employee_number } = req.body;
    const banker = banker_1.Banker.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        cardNumber: cardNumber,
        employee_number: employee_number,
    });
    const result = yield banker.save();
    return result;
});
exports.createBankerService = createBankerService;
//# sourceMappingURL=bankerServices.js.map