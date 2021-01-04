import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClientController } from './client.controller';
import { ClientService } from './client.service';
import { Client } from './Entity/client.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Client,
    ])
  ],
  providers: [
    ClientService
  ],
  controllers: [
    ClientController
  ],
  exports: [
    ClientService,
  ]
})
export class ClientModule {}
