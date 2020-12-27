import { Order } from "../../Order/Entity/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('client')
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column()
  address: string;

  @OneToMany(() => Order, (order) => order.client)
  orders: Order[];
}