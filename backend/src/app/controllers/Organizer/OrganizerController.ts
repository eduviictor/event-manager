import { Controller, Get, Route, Path, Post, Body, Put, Delete } from 'tsoa';
import Organizer, { OrganizerAttributesBody } from '../../models/Organizer';

import OrganizerService from '../../services/OrganizerService';

@Route('organizers')
export class OrganizerController extends Controller {
  service: OrganizerService = new OrganizerService();

  @Get('')
  public async index(): Promise<Organizer[]> {
    return this.service.findAll();
  }

  @Get('{cnpj}')
  public async show(@Path() cnpj: string): Promise<Organizer> {
    return this.service.getById(cnpj);
  }

  @Post('')
  public async store(
    @Body() body: OrganizerAttributesBody
  ): Promise<Organizer> {
    return this.service.create(body);
  }

  @Put('{cnpj}')
  public async update(
    @Path() cnpj: string,
    @Body() body: OrganizerAttributesBody
  ): Promise<Organizer> {
    return this.service.update(cnpj, body);
  }

  @Delete('{cnpj}')
  public async delete(@Path() cnpj: string): Promise<string> {
    return this.service.delete(cnpj);
  }
}
