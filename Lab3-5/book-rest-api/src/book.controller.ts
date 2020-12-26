import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { BookService } from './book.service';
import { CreateBookDto } from './DTO/create_book.dto';
import { UpdateBookDto } from './DTO/update_book.dto';
import { Book } from './Entity/book.entity';

@Controller('book')
export class BookController {
  constructor(
    private readonly bookService: BookService,
  ) {}

  @Get('get_books')
  getBooks(): Promise<Book[]> {
    return this.bookService.getBooks();
  }

  @Post('add_book')
  addBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.createBook(createBookDto);
  }

  @Delete('remove_book/:dto')
  removeBook(@Param('dto') id: number): Promise<string> {
    return this.bookService.removeBook(id);
  }

  @Put('update_book')
  updateBook(@Body() updateBookDto: UpdateBookDto): Promise<string> {
    return this.bookService.updateBook(updateBookDto);
  }
}