import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { CreateOrderDto } from "./DTO/create-order.dto";
import { Order } from "./Entity/order.entity";
import { OrderService } from "./order.service";

@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService
  ) {}

  @Get('allOrders')
  orders(): Promise<Order[]> {
    return this.orderService.orders();
  }

  @Get('orderById/:orderId')
  orderById(
    @Param('orderId') orderId: string,
  ): Promise<Order> {
    return this.orderService.orderById(orderId);
  }

  @Get('ordersByClientId/:clientId')
  ordersByClientId(
    @Param('clientId') clientId: string,
  ): Promise<Order[]> {
    return this.orderService.ordersByClientId(clientId);
  }

  @Post('placeOrder')
  placeOrder(
    @Body() createOrderDto: CreateOrderDto,
  ): Promise<Order> {
    return this.orderService.placeOrder(createOrderDto);
  }
}