import UserRepository from '../repositories/sql/ClientRepository';
import User from '../models/User';
import { ApiError } from '../../config/ErrorHandler';
import constants from '../../config/constants';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';
import {
  SessionBody,
  ReturnBody,
} from '../controllers/Session/SessionController';
import Client from '../models/Client';
import Organizer from '../models/Organizer';

export default class UserService {
  repository: UserRepository = new UserRepository();

  public async checkPassword(password: string, hash: string): Promise<boolean> {
    const result = await bcrypt.compare(password, hash);
    return result;
  }

  public async login(entity: SessionBody): Promise<ReturnBody> {
    const { login, senha } = entity;
    const user = await User.findOne({ where: { login } });

    if (!user) {
      throw new ApiError(constants.errorTypes.notFound);
    }

    if (!(await this.checkPassword(senha, user.senha))) {
      throw new ApiError(constants.errorTypes.auth);
    }

    const client = await Client.findOne({ where: { login } });

    const organizer = await Organizer.findOne({ where: { login } });
    console.log('client', client);
    if (client) {
      const { cpf, email } = client;

      return {
        user: { cpf, login, email, type_user: 'client' },
        token: jwt.sign(
          { codigo: String(client.cpf), scopes: ['client'] },
          authConfig.secret,
          {
            expiresIn: authConfig.expiresIn,
          }
        ),
      };
    }

    const { cnpj, email } = organizer;

    return {
      user: { cnpj, login, email, type_user: 'organizer' },
      token: jwt.sign(
        { codigo: String(organizer.cnpj), scopes: ['organizer'] },
        authConfig.secret,
        {
          expiresIn: authConfig.expiresIn,
        }
      ),
    };
  }
}
