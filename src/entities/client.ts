import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { Person } from "./utils/person";
import { Transaction } from "./transaction";
import { Banker } from "./banker";
@Entity()
export class Client extends Person {
  @Column({ type: "numeric" })
  balance: number;
  @Column({ default: true })
  is_active: boolean;
  @Column({ type: "simple-json", nullable: true })
  additionalInfo: {
    phone: string;
    age: number;
  };
  @Column({ type: "simple-array", default: [] })
  family: string[];
  @OneToMany(() => Transaction, (transaction) => transaction.client)
  transactions: Transaction[];
  @ManyToMany(() => Banker, { cascade: false })
  bankers: Banker[];
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
