import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';

import { CreateBookDto } from './DTO/create-book.dto';
import { SearchByPriceDto } from './DTO/search-price.dto';
import { Book } from './Entity/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) { }

  async books(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async addBook(createBookDto: CreateBookDto): Promise<Book> {
    const book = new Book();

    book.author = createBookDto.author;
    book.description = createBookDto.description;
    book.pages = createBookDto.pages;
    book.price = createBookDto.price;
    book.title = createBookDto.title;

    return await this.bookRepository.save(book);
  }

  async bookById(bookId: string): Promise<Book> {
    return await this.bookRepository.findOne({ id: bookId });
  }

  async searchByPrice(priceFrom: number, priceTo: number): Promise<Book[]> {
    return await this.bookRepository.find({
      price: Between(priceFrom, priceTo),
    });
  }

  async autoCompleteSearch(searchSequence: string): Promise<Book[]> {
    const books = await this.bookRepository.find();

    const filteredBooks = books.filter(book => {
      if (book.title.toLowerCase().includes(searchSequence.toLowerCase()) || book.author.toLowerCase().includes(searchSequence.toLowerCase())) {
        return book;
      }
    });

    return filteredBooks;
  }
}
