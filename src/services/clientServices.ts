import { Request } from "express";
import { Client } from "../entities/client";
import { Banker } from "../entities/banker";

import AppError from "../utils/appError";
export const createClientService = async (req: Request) => {
  const { firstName, lastName, email, cardNumber, balance, family } = req.body;
  const client = Client.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    cardNumber: cardNumber,
    balance: balance,
    family: family,
  });
  const result = await client.save();
  return result;
};

export const connectClientToBankerService = async (req: Request) => {
  const { client_id, banker_id } = req.body;
  const client = await Client.findOne({ where: { id: client_id } });
  const banker = await Banker.findOne({ where: { id: banker_id } });
  if (!banker || !client) {
    throw new AppError("Client or Banker not found", 404);
  }
  banker.clients = [client];
  await banker.save();
};

export const clientDeleteService = async (req: Request) => {
  const { client_id } = req.params;

  await Client.delete({ id: client_id });
};

export const getAllClientsService = async (req: Request) => {
  const { client_id } = req.params;
  const clients = await Client.createQueryBuilder("clients")
    .select("client")
    .from(Client, "client")
    .getMany();
  return clients;
};

export const filterClientService = async (req: Request) => {
  const { client_id } = req.params;
  const clients = await Client.createQueryBuilder("clients")
    .select("client")
    .from(Client, "client")
    .where("client.id = :client_id", { client_id: client_id })
    .getMany();
  return clients;
};
