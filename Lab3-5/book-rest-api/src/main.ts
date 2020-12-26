import { NestFactory } from '@nestjs/core';
import { BookModule } from './book.module'

async function bootstrap() {
  const app = await NestFactory.create(BookModule, { cors: true });
  await app.listen(3000);
}
bootstrap();
