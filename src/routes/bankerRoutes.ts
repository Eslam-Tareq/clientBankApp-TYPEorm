import { Router } from "express";
import { createBanker } from "../controllers/bankerControllers";
const bankerRouter = Router();

bankerRouter.post("/", createBanker);
export default bankerRouter;
