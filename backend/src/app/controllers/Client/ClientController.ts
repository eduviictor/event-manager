import { Controller, Get, Route, Path, Post, Body, Put, Delete } from 'tsoa';
import Client, { ClientAttributesBody } from '../../models/Client';

import ClientService from '../../services/ClientService';

@Route('clients')
export class ClientController extends Controller {
  service: ClientService = new ClientService();

  @Get('')
  public async index(): Promise<Client[]> {
    return this.service.findAll();
  }

  @Get('{cpf}')
  public async show(@Path() cpf: string): Promise<Client> {
    return this.service.getById(cpf);
  }

  @Post('')
  public async store(@Body() body: ClientAttributesBody): Promise<Client> {
    return this.service.create(body);
  }

  @Put('{cpf}')
  public async update(
    @Path() cpf: string,
    @Body() body: ClientAttributesBody
  ): Promise<Client> {
    return this.service.update(cpf, body);
  }

  @Delete('{cpf}')
  public async delete(@Path() cpf: string): Promise<string> {
    return this.service.delete(cpf);
  }
}
