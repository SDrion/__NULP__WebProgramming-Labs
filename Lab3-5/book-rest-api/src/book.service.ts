import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateBookDto } from './DTO/create_book.dto';
import { UpdateBookDto } from './DTO/update_book.dto';
import { Book } from './Entity/book.entity';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>
  ) {}

  async getBooks(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async createBook(createBookDto: CreateBookDto): Promise<Book> {
    const book = new Book;

    book.author = createBookDto.author;
    book.description = createBookDto.description;
    book.pages = createBookDto.pages;
    book.price = createBookDto.price;
    book.title = createBookDto.title;

    return await this.bookRepository.save(book);
  }

  async removeBook(book_id: number): Promise<string> {
    return await this.bookRepository
        .createQueryBuilder()
        .delete()
        .where(`id = :book_id`, { book_id: book_id })
        .execute()
        .then((data) => {
          if(data.affected !== 0) {
            return 'Deleted';
          } else {
            return 'Not correct data';
          }
        })
        .catch((err) => {
          return err;
        });
  }

  async updateBook(updateBookDto: UpdateBookDto): Promise<string> {
    return await this.bookRepository
        .createQueryBuilder()
        .update()
        .set({
          title: () => updateBookDto.title ? `'${updateBookDto.title}'` : `"title"`,
          author: () => updateBookDto.author ? `'${updateBookDto.author}'` : `"author"`,
          description: () => updateBookDto.description ? `'${updateBookDto.description}'` : `"description"`,
          pages: () => updateBookDto.pages ? `'${updateBookDto.pages}'` : `"pages"`,
          price: () => updateBookDto.price ? `'${updateBookDto.price}'` : `"price"` 
        })
        .where('id = :id', { id: updateBookDto.id })
        .execute()
        .then((data) => {
          if(data.affected !== 0) {
            return 'Updated';
          } else {
            return 'Not correct data';
          }
        })
        .catch((err) => {
          return err;
        });
  }
}