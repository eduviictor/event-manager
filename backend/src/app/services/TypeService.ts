import TypeRepository from '../repositories/sql/TypeRepository';
import Type from '../models/Type';
import { ApiError } from '../../config/ErrorHandler';
import constants from '../../config/constants';
import TypeValidator from '../validators/TypeValidator';

export default class TypeService {
  repository: TypeRepository = new TypeRepository();
  validator: TypeValidator = new TypeValidator();

  public async findAll(): Promise<Type[]> {
    return this.repository.find();
  }

  public async getById(codigo: string): Promise<Type> {
    const type = await this.repository.findOne(codigo);
    if (!type) {
      throw new ApiError(constants.errorTypes.notFound);
    }

    return type;
  }

  public async create(entity: Type): Promise<Type> {
    await this.validator.create(entity);
    try {
      const res = await this.repository.create(entity);
      return this.getById((res as any).codigo);
    } catch (err) {
      throw new ApiError(constants.errorTypes.db);
    }
  }

  public async update(codigo: string, entity: Type): Promise<Type> {
    await this.validator.update(entity);
    const type = await this.repository.update(codigo, entity);

    if (type[0] !== 1) {
      throw new ApiError(constants.errorTypes.notFound);
    }
    return this.getById(codigo);
  }

  public async delete(codigo: string): Promise<string> {
    const type = await this.repository.delete(codigo);

    if (type !== 1) {
      throw new ApiError(constants.errorTypes.notFound);
    }
    return 'Type deleted with success';
  }
}
