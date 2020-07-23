import { Controller, Get, Route, Path, Post, Body, Put, Delete } from 'tsoa';
import Attraction, { AttractionAttributes } from '../../models/Attraction';

import AttractionService from '../../services/AttractionService';

@Route('attractions')
export class AttractionController extends Controller {
service: AttractionService = new AttractionService();

  @Get('')
  public async index(): Promise<Attraction[]> {
    return this.service.findAll();
  }

  @Get('{codigo}')
  public async show(@Path() codigo: number): Promise<Attraction> {
    return this.service.getById(codigo);
  }

  @Post('')
  public async store(
    @Body() body: AttractionAttributes
  ): Promise<Attraction> {
    return this.service.create(body);
  }

  @Put('{codigo}')
  public async update(
    @Path() codigo: number,
    @Body() body: AttractionAttributes
  ): Promise<Attraction> {
    return this.service.update(codigo, body);
  }

  @Delete('{codigo}')
  public async delete(@Path() codigo: number): Promise<string> {
    return this.service.delete(codigo);
  }
}