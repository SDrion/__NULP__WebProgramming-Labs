import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Book } from './Entity/book.entity';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 8080,
      username: 'postgres',
      password: 'qwerty',
      database: 'book',
      entities: ['dist/**/*.entity.js'],
      synchronize: true
    }
  ), 
  TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}