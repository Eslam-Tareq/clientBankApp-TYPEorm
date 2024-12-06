import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Person } from "./utils/person";
import { Client } from "./client";
@Entity()
export class Banker extends Person {
  @Column({ unique: true, length: 10 })
  employee_number: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
  @ManyToMany(() => Client, { cascade: false })
  @JoinTable({
    name: "bankersAndClients",
    joinColumn: { name: "banker_id", referencedColumnName: "id" },
    inverseJoinColumn: { name: "client_id", referencedColumnName: "id" },
  })
  clients: Client[];
}
