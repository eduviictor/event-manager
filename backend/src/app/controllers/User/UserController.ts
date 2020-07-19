import { Controller, Get, Route, Path, Post, Body, Put, Delete } from 'tsoa';
import User, { UserAttributes } from '../../models/User';

import UserService from '../../services/UserService';

@Route('users')
export class UserController extends Controller {
  service: UserService = new UserService();

  @Get('')
  public async index(): Promise<UserAttributes[]> {
    return this.service.findAll();
  }

  @Get('{codigo}')
  public async show(@Path() codigo: string): Promise<UserAttributes> {
    return this.service.getById(codigo);
  }

  @Post('')
  public async store(@Body() body: User): Promise<UserAttributes> {
    return this.service.create(body);
  }

  @Put('{codigo}')
  public async update(
    @Path() codigo: string,
    @Body() body: User
  ): Promise<User> {
    return this.service.update(codigo, body);
  }

  @Delete('{codigo}')
  public async delete(@Path() codigo: string): Promise<string> {
    return this.service.delete(codigo);
  }
}
