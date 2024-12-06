"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientControllers_1 = require("../controllers/clientControllers");
const clientRouter = (0, express_1.Router)();
clientRouter.post("/", clientControllers_1.createClient);
clientRouter.put("/connectToBanker", clientControllers_1.connectClientToBanker);
clientRouter.delete("/:client_id", clientControllers_1.deleteClient);
clientRouter.get("/filter/:client_id", clientControllers_1.clientFilter);
clientRouter.get("/", clientControllers_1.getAllClients);
exports.default = clientRouter;
//# sourceMappingURL=clientRoutes.js.map