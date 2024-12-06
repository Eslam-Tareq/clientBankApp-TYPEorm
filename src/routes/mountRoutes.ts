import { Express } from "express";
import clientRouter from "./clientRoutes";
import bankerRouter from "./bankerRoutes";
import transactionRouter from "./transactionRoutes";

export const mountRoutes = (app: Express) => {
  const baseUrl = "/api/v1";
  app.use(`${baseUrl}/client`, clientRouter);
  app.use(`${baseUrl}/banker`, bankerRouter);
  app.use(`${baseUrl}/transaction`, transactionRouter);
};
