import { Controller, Get, Route, Path, Post, Body, Put, Delete } from 'tsoa';

import Ticket_Type, { Ticket_TypeAttributes } from '../../models/Ticket_Type';

import Ticket_TypeService from '../../services/Ticket_TypeService';

@Route('tickets_types')
export class Ticket_TypeController extends Controller {
  service: Ticket_TypeService = new Ticket_TypeService();

  @Get('')
  public async index(): Promise<Ticket_TypeAttributes[]> {
    return this.service.findAll();
  }

  @Get('{cod_ingresso}')
  public async show(@Path() cod_ingresso: string): Promise<Ticket_TypeAttributes> {
    return this.service.getById(cod_ingresso);
  }

  @Post('')
  public async store(@Body() body: Ticket_Type): Promise<Ticket_TypeAttributes> {
    return this.service.create(body);
  }

  @Put('{cod_ingresso}')
  public async update(
    @Path() cod_ingresso: string,
    @Body() body: Ticket_Type
  ): Promise<Ticket_Type> {
    return this.service.update(cod_ingresso, body);
  }

  @Delete('{cod_ingresso}')
  public async delete(@Path() cod_ingresso: string): Promise<string> {
    return this.service.delete(cod_ingresso);
  }
}
