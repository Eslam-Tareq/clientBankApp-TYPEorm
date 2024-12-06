import { Request } from "express";
import { Transaction } from "../entities/transaction";
import { Client } from "../entities/client";
import { TransactionType } from "../types/types";
import AppError from "../utils/appError";
export const createTransactionService = async (req: Request) => {
  const { client_id, amount, type } = req.body;
  const client = await Client.findOne({ where: { id: client_id } });
  if (!client) {
    throw new AppError("Client not found", 404);
  }
  const transaction = Transaction.create({
    type: type,
    amount: amount,
    client: client,
  });
  const result = await transaction.save();
  if (transaction.type === TransactionType.DEPOSIT) {
    client.balance += amount;
  } else if (transaction.type === TransactionType.WITHDRAW) {
    if (client.balance >= amount) {
      client.balance -= amount;
    } else throw new AppError("you don't have enough balance ", 400);
  }
  await client.save();
  return result;
};
