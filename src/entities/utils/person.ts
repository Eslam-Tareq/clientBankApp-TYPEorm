import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column({ unique: true })
  email: string;
  @Column({ length: 10 })
  cardNumber: string;
}
