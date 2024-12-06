import { Request, Response, NextFunction } from "express";
import catchAsync from "express-async-handler";
import { createTransactionService } from "../services/transactionServices";

export const createTransaction = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const transaction = await createTransactionService(req);
      res
        .status(201)
        .json({ message: "transaction created successfully", transaction });
    } catch (err) {
      return next(err);
    }
  }
);
