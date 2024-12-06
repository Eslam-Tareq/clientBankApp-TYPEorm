import { TransactionType } from "../types/types";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client";
@Entity()
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ type: "enum", enum: TransactionType })
  type: string;
  @Column({ type: "numeric" })
  amount: number;
  @ManyToOne(() => Client, (client) => client.transactions)
  @JoinColumn({ name: "client_id" })
  client: Client;
}
