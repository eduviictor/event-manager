import ClientRepository from '../repositories/sql/ClientRepository';
import Client, { ClientAttributesBody } from '../models/Client';
import { ApiError } from '../../config/ErrorHandler';
import constants from '../../config/constants';
import User from '../models/User';
import ClientValidator from '../validators/ClientValidator';

export default class ClientService {
  repository: ClientRepository = new ClientRepository();
  validator: ClientValidator = new ClientValidator();

  public async findAll(): Promise<Client[]> {
    return this.repository.find();
  }

  public async getById(cpf: string): Promise<Client> {
    const client = await this.repository.findOne(cpf);
    if (!client) {
      throw new ApiError(constants.errorTypes.notFound);
    }

    return client;
  }

  public async create(entity: ClientAttributesBody): Promise<Client> {
    await this.validator.create(entity);

    const { cpf, login } = entity;
    const cnpjExists = await this.repository.findOne(cpf);

    if (cnpjExists) {
      throw new ApiError(constants.errorTypes.alreadyExists);
    }

    const userExists = await User.findOne({ where: { login } });

    if (userExists) {
      throw new ApiError(constants.errorTypes.alreadyExists);
    }

    try {
      return this.repository.create(entity);
    } catch (err) {
      throw new ApiError(constants.errorTypes.db);
    }
  }

  public async update(
    cpf: string,
    entity: ClientAttributesBody
  ): Promise<Client> {
    await this.validator.update(entity);
    const client = await this.repository.update(cpf, entity);

    if (client[0] !== 1) {
      throw new ApiError(constants.errorTypes.notFound);
    }
    return this.getById(cpf);
  }

  public async delete(cpf: string): Promise<string> {
    const client = await this.repository.delete(cpf);

    if (client !== 1) {
      throw new ApiError(constants.errorTypes.notFound);
    }
    return 'Client deleted with success';
  }
}