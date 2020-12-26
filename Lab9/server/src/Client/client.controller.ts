import { Body, Controller, Get, Post } from "@nestjs/common";

import { ClientService } from "./client.service";
import { CreateClientDto } from "./DTO/create-client.dto";
import { Client } from "./Entity/client.entity";

@Controller('client')
export class ClientController {
  constructor(
    private readonly clientService: ClientService,
  ) {}
  
  @Get('allClients')
  clients(): Promise<Client[]> {
    return this.clientService.clients();
  }

  @Post('addClient')
  addClient(
    @Body() createClientDto: CreateClientDto,
  ): Promise<Client> {
    return this.clientService.addClient(createClientDto);
  }
}