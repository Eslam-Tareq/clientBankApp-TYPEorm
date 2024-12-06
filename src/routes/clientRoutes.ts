import { Router } from "express";
import {
  clientFilter,
  connectClientToBanker,
  createClient,
  deleteClient,
  getAllClients,
} from "../controllers/clientControllers";
const clientRouter = Router();

clientRouter.post("/", createClient);
clientRouter.put("/connectToBanker", connectClientToBanker);
clientRouter.delete("/:client_id", deleteClient);
clientRouter.get("/filter/:client_id", clientFilter);
clientRouter.get("/", getAllClients);

export default clientRouter;
