import { Controller, Route, Post, Body } from 'tsoa';

import SessionService from '../../services/SessionService';
import { ClientAttributes } from '../../models/Client';

export interface SessionBody {
  login: string;
  password: string;
}

export interface UserReturn {
  cpf?: string;
  cnpj?: string;
  login: string;
  email: string;
  type_user: string;
}

export interface ReturnBody {
  user: UserReturn;
  token: string;
}

@Route('session')
export class SessionController extends Controller {
  service: SessionService = new SessionService();

  @Post('')
  public async login(@Body() body: SessionBody): Promise<ReturnBody> {
    return this.service.login(body);
  }
}
