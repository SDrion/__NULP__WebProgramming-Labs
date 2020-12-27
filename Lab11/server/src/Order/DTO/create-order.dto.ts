import { OrderBookDto } from "./order-book.dto";

export class CreateOrderDto {
  clientId: string;

  books: OrderBookDto[];

  totalPrice: number;
}