import { Body, Controller, Get, Param, Post } from "@nestjs/common";

import { BookService } from "./book.service";
import { CreateBookDto } from "./DTO/create-book.dto";
import { SearchByPriceDto } from "./DTO/search-price.dto";
import { Book } from "./Entity/book.entity";

@Controller('book')
export class BookController {
  constructor(
    private readonly bookService: BookService,
  ) {}

  @Get('allBooks')
  books(): Promise<Book[]> {
    return this.bookService.books();
  }

  @Post('addBook')
  addBook(
    @Body() createBookDto: CreateBookDto,
  ): Promise<Book> {
    return this.bookService.addBook(createBookDto);
  }

  @Get('bookById/:bookId')
  bookById(
    @Param('bookId') bookId: string,
  ): Promise<Book> {
    return this.bookService.bookById(bookId);
  }

  @Get('bookByPrice/:priceFrom/:priceTo')
  searchByPrice(
    @Param('priceFrom') priceFrom: number,
    @Param('priceTo') priceTo: number,
  ): Promise<Book[]> {
    return this.bookService.searchByPrice(priceFrom, priceTo);
  }

  @Get('bookSearch/:searchKey')
  bookSearch(
    @Param('searchKey') searchKey: string,
  ): Promise<Book[]> {
    return this.bookService.autoCompleteSearch(searchKey);
  }
}