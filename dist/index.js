"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbconnection_1 = require("./config/dbconnection");
(0, dbconnection_1.postgresConnection)();
const app_1 = __importDefault(require("./app"));
app_1.default.listen(8010, () => {
    console.log("app is running on port 8010");
});
//# sourceMappingURL=index.js.map