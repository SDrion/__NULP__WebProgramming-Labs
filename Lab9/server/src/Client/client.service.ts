import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateClientDto } from './DTO/create-client.dto';
import { Client } from './Entity/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) { }

  async addClient(createClientDto: CreateClientDto): Promise<Client> {
    const client = new Client();

    client.address = createClientDto.address;
    client.email = createClientDto.email;
    client.first_name = createClientDto.first_name;
    client.last_name = createClientDto.last_name;
    client.phone_number = createClientDto.phone_number;

    return await this.clientRepository.save(client);
  }

  async clients(): Promise<Client[]> {
    return await this.clientRepository.find();
  }
}
