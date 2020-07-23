import { Controller, Get, Route, Path, Post, Body, Put, Delete } from 'tsoa';
// import { ProvideSingleton } from '../../../ioc';
import Type, { TypeAttributes } from '../../models/Type';

import TypeService from '../../services/TypeService';

@Route('types')
export class TypeController extends Controller {
  service: TypeService = new TypeService();

  @Get('')
  public async index(): Promise<TypeAttributes[]> {
    return this.service.findAll();
  }

  @Get('{codigo}')
  public async show(@Path() codigo: string): Promise<TypeAttributes> {
    return this.service.getById(codigo);
  }

  @Post('')
  public async store(@Body() body: Type): Promise<TypeAttributes> {
    return this.service.create(body);
  }

  @Put('{codigo}')
  public async update(
    @Path() codigo: string,
    @Body() body: Type
  ): Promise<Type> {
    return this.service.update(codigo, body);
  }

  @Delete('{codigo}')
  public async delete(@Path() codigo: string): Promise<string> {
    return this.service.delete(codigo);
  }
}
