import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateOrderDto } from './DTO/create-order.dto';
import { OrderBook } from './Entity/order-book.entity';
import { Order } from './Entity/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(OrderBook)
    private readonly orderBookRepository: Repository<OrderBook>,
  ) { }

  async orders(): Promise<Order[]> {
    return await this.orderRepository.find();
  }

  async orderById(orderId: string): Promise<Order> {
    return await this.orderRepository.findOne({ id: orderId });
  }

  async ordersByClientId(clientId: string): Promise<Order[]> {
    return await this.orderRepository.find({ clientId: clientId });
  }

  async placeOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = new Order();

    order.clientId = createOrderDto.clientId;
    order.totalPrice = createOrderDto.totalPrice;

    const savedOrder = await this.orderRepository.save(order);

    createOrderDto.books.map(async (bookInOrder) => {
      const orderBook = new OrderBook();

      orderBook.bookId = bookInOrder.bookId;
      orderBook.orderId = savedOrder.id;
      orderBook.quantity = bookInOrder.quantity;

      await this.orderBookRepository.save(orderBook);
    });

    return savedOrder;
  }
}
