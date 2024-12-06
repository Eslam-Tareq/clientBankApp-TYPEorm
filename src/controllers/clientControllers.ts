import { Request, Response, NextFunction } from "express";
import catchAsync from "express-async-handler";
import {
  clientDeleteService,
  connectClientToBankerService,
  createClientService,
  getAllClientsService,
  filterClientService,
} from "../services/clientServices";

export const createClient = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const client = await createClientService(req);
      res.status(201).json({ message: "Client created successfully", client });
    } catch (err) {
      next(err);
    }
  }
);

export const connectClientToBanker = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await connectClientToBankerService(req);
      res
        .status(201)
        .json({ message: "Client connected To banker successfully" });
    } catch (err) {
      next(err);
    }
  }
);

export const deleteClient = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await clientDeleteService(req);
      res.status(201).json({ message: "Client deleted successfully" });
    } catch (err) {
      next(err);
    }
  }
);

export const getAllClients = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const clients = await getAllClientsService(req);
      res.status(201).json({ message: "done", clients });
    } catch (err) {
      next(err);
    }
  }
);

export const clientFilter = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const clients = await filterClientService(req);
      res.status(201).json({ message: "done", clients });
    } catch (err) {
      next(err);
    }
  }
);
