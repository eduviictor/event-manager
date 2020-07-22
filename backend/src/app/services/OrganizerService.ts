import OrganizerRepository from '../repositories/sql/OrganizerRepository';
import Organizer, { OrganizerAttributesBody } from '../models/Organizer';
import { ApiError } from '../../config/ErrorHandler';
import constants from '../../config/constants';
import User from '../models/User';

export default class OrganizerService {
  repository: OrganizerRepository = new OrganizerRepository();

  public async findAll(): Promise<Organizer[]> {
    return this.repository.find();
  }

  public async getById(cnpj: string): Promise<Organizer> {
    const user = await this.repository.findOne(cnpj);
    if (!user) {
      throw new ApiError(constants.errorTypes.notFound);
    }

    return user;
  }

  public async create(entity: OrganizerAttributesBody): Promise<Organizer> {
    const { cnpj, login } = entity;
    const cnpjExists = await this.repository.findOne(cnpj);

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
    cnpj: string,
    entity: OrganizerAttributesBody
  ): Promise<Organizer> {
    const { login } = entity;
    const cnpjExists = await this.repository.findOne(cnpj);

    if (cnpjExists) {
      throw new ApiError(constants.errorTypes.alreadyExists);
    }

    const userExists = await User.findOne({ where: { login } });

    if (userExists) {
      throw new ApiError(constants.errorTypes.alreadyExists);
    }

    const user = await this.repository.update(cnpj, entity);

    if (user[0] !== 1) {
      throw new ApiError(constants.errorTypes.notFound);
    }
    return this.getById(cnpj);
  }

  public async delete(cnpj: string): Promise<string> {
    const user = await this.repository.delete(cnpj);

    if (user !== 1) {
      throw new ApiError(constants.errorTypes.notFound);
    }

    return 'Organizer deleted with success';
  }
}
