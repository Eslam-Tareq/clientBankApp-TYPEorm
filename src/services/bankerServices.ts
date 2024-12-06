import { Request } from "express";
import { Banker } from "../entities/banker";
export const createBankerService = async (req: Request) => {
  const { firstName, lastName, email, cardNumber, employee_number } = req.body;
  const banker = Banker.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
    cardNumber: cardNumber,
    employee_number: employee_number,
  });
  const result = await banker.save();
  return result;
};
