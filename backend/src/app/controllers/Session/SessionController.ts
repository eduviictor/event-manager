import { Controller, Route, Post, Body } from 'tsoa';

import SessionService from '../../services/SessionService';

export interface SessionBody {
  login: string;
  senha: string;
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
