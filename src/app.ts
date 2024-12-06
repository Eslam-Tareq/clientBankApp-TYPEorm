import express from "express";
import { globalErrorHandler } from "./middlewares/error.middleWare";
import { mountRoutes } from "./routes/mountRoutes";
const app = express();

app.use(express.json());
mountRoutes(app);
app.use(globalErrorHandler);

export default app;
