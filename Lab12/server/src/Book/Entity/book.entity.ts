import { OrderBook } from "../../Order/Entity/order-book.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('book')
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  description: string;

  @Column()
  pages: number;

  @Column('numeric')
  price: number;

  @OneToMany(() => OrderBook, (orderBook) => orderBook.book)
  orderBooks: OrderBook[];
}