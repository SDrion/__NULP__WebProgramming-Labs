import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { OrderService } from './order.service';
import { Order } from './Entity/order.entity';
import { OrderBook } from './Entity/order-book.entity';
import { OrderController } from './order.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      OrderBook,
    ]),
  ],
  controllers: [
    OrderController
  ],
  providers: [
    OrderService,
  ]
})
export class OrderModule { }
