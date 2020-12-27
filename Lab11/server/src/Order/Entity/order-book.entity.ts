import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Book } from "../../Book/Entity/book.entity";
import { Order } from './order.entity';

@Entity('order_book')
export class OrderBook {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  quantity: number;

  @Column({ name: 'book_id' })
  bookId: string;

  @Column({ name: 'order_id' })
  orderId: string;

  @ManyToOne(() => Order, (order) => order.orderBooks)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => Book, (book) => book.orderBooks)
  @JoinColumn({ name: 'book_id' })
  book: Book;
}