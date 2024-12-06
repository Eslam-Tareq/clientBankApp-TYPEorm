import { Request, Response, NextFunction } from "express";
import catchAsync from "express-async-handler";
import { createBankerService } from "../services/bankerServices";

export const createBanker = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const banker = await createBankerService(req);
      res.status(201).json({ message: "Banker created successfully", banker });
    } catch (err) {
      next(err);
    }
  }
);
