import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Book } from './Entity/book.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Book
    ])
  ],
  providers: [
    BookService
  ],
  controllers: [
    BookController,
  ],
  exports: [
    BookService,
  ]
})
export class BookModule {}
