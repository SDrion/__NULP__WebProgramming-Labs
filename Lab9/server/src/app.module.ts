import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { BookModule } from './Book/book.module';
import { ClientModule } from './Client/client.module';
import { OrderModule } from './Order/order.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: ['dist/**/*.entity.js'],
        synchronize: true
      }
    ),
    MailerModule.forRootAsync(
      {
        useFactory: () => ({
          transport: {
            host: 'smtp.meta.ua',
            port: 465,
            secure: true,
            auth: {
              user: process.env.MAIL_LOGIN,
              pass: process.env.MAIL_PASSWORD,
            },
            defaults: {
              from: '"Pol BookShop" <polros2020@meta.ua>',
            },
            template: {
              dir: process.cwd() + '/templates/',
              adapter: new HandlebarsAdapter(),
              options: {
                strict: true,
              },
            },
          }
        })
      }
    ),
    BookModule,
    ClientModule,
    OrderModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule { }
