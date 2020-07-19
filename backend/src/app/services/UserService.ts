import UserRepository from '../repositories/sql/UserRepository';
import User from '../models/User';
import { ApiError } from '../../config/ErrorHandler';
import constants from '../../config/constants';

export default class UserService {
  repository: UserRepository = new UserRepository();

  public async findAll(): Promise<User[]> {
    return this.repository.find();
  }

  public async getById(codigo: string): Promise<User> {
    const user = await this.repository.findOne(codigo);
    if (!user) {
      throw new ApiError(constants.errorTypes.notFound);
    }

    return user;
  }

  public async create(entity: User): Promise<User> {
    try {
      const res = await this.repository.create(entity);
      return this.getById((res as any).codigo);
    } catch (err) {
      throw new ApiError(constants.errorTypes.db);
    }
  }

  public async update(codigo: string, entity: User): Promise<User> {
    const user = await this.repository.update(codigo, entity);

    if (user[0] !== 1) {
      throw new ApiError(constants.errorTypes.notFound);
    }
    return this.getById(codigo);
  }

  public async delete(codigo: string): Promise<string> {
    const user = await this.repository.delete(codigo);

    if (user !== 1) {
      throw new ApiError(constants.errorTypes.notFound);
    }
    return 'User deleted with success';
  }
}
