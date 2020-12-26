import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Client } from "../../Client/Entity/client.entity";
import { OrderBook } from "./order-book.entity";

@Entity('order')
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'client_id' })
  clientId: string;

  @Column('numeric', { name: 'total_price' })
  totalPrice: number;

  @ManyToOne(() => Client, (client) => client.orders)
  @JoinColumn({ name: 'client_id' })
  client: Client;

  @OneToMany(() => OrderBook, (orderBook) => orderBook.order)
  orderBooks: OrderBook[];
}