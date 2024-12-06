import { Router } from "express";
import { createTransaction } from "../controllers/transactionControllers";
const bankerRouter = Router();

bankerRouter.post("/", createTransaction);
export default bankerRouter;
