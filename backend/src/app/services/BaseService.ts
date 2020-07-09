import { decorate, injectable } from 'inversify';

import constants from '../../config/constants';
import { ApiError } from '../../config/ErrorHandler';
import { IBaseRepository } from '../repositories/IBaseRepository';

export abstract class BaseService<EntityModel> {
  protected repository: IBaseRepository<EntityModel>;

  public async getById(_id: string): Promise<EntityModel> {
    return this.repository.findOne({ _id });
  }

  public async create(entity: EntityModel): Promise<EntityModel> {
    const res = await this.repository.create(entity);
    return this.getById((res as any)._id);
  }

  public async update(id: string, entity: EntityModel): Promise<EntityModel> {
    await this.repository.update(id, entity);
    return this.getById(id);
  }

  public async delete(id: string): Promise<void> {
    const res = await this.repository.delete(id);
    if (!res.n) throw new ApiError(constants.errorTypes.notFound);
  }
}

decorate(injectable(), BaseService);
