import ClientRepository from '../repositories/sql/ClientRepository';
import Client, { ClientAttributesBody } from '../models/Client';
import { ApiError } from '../../config/ErrorHandler';
import constants from '../../config/constants';

export default class ClientService {
  repository: ClientRepository = new ClientRepository();

  public async findAll(): Promise<Client[]> {
    return this.repository.find();
  }

  public async getById(cpf: string): Promise<Client> {
    const user = await this.repository.findOne(cpf);
    if (!user) {
      throw new ApiError(constants.errorTypes.notFound);
    }

    return user;
  }

  public async create(entity: ClientAttributesBody): Promise<Client> {
    try {
      const res = await this.repository.create(entity);
      return this.getById((res as any).cpf);
    } catch (err) {
      console.log('err', err);
      throw new ApiError(constants.errorTypes.db);
    }
  }

  public async update(
    cpf: string,
    entity: ClientAttributesBody
  ): Promise<Client> {
    const user = await this.repository.update(cpf, entity);

    if (user[0] !== 1) {
      throw new ApiError(constants.errorTypes.notFound);
    }
    return this.getById(cpf);
  }

  public async delete(cpf: string): Promise<string> {
    const user = await this.repository.delete(cpf);

    if (user !== 1) {
      throw new ApiError(constants.errorTypes.notFound);
    }
    return 'Client deleted with success';
  }
}
