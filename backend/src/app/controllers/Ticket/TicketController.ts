import { Controller, Get, Route, Path, Post, Body, Put, Delete } from 'tsoa';
// import { ProvideSingleton } from '../../../ioc';
import Ticket, { TicketAttributes } from '../../models/Ticket';

import TicketService from '../../services/TicketService';

@Route('tickets')
export class TicketController extends Controller {
  service: TicketService = new TicketService();

  @Get('')
  public async index(): Promise<TicketAttributes[]> {
    return this.service.findAll();
  }

  @Get('{codigo}')
  public async show(@Path() codigo: string): Promise<TicketAttributes> {
    return this.service.getById(codigo);
  }

  @Post('')
  public async store(@Body() body: Ticket): Promise<TicketAttributes> {
    return this.service.create(body);
  }

  @Put('{codigo}')
  public async update(
    @Path() codigo: string,
    @Body() body: Ticket
  ): Promise<Ticket> {
    return this.service.update(codigo, body);
  }

  @Delete('{codigo}')
  public async delete(@Path() codigo: string): Promise<string> {
    return this.service.delete(codigo);
  }
}
