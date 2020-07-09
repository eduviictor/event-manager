import * as Sequelize from 'sequelize';

import { ApiError } from '../../../config/ErrorHandler';
import constants from '../../../config/constants';
import Event from '../../models/Event';

export default class EventRepository {
  protected formatter: any = Object;
  protected entityModel = Event;
  protected getInclude: Sequelize.IncludeOptions[] = [];
  protected saveInclude: Sequelize.IncludeOptions[] = [];

  public async create(model: Event): Promise<Event> {
    try {
      const res = await this.entityModel.create(this.cleanToSave(model));

      return new this.formatter(res);
    } catch (err) {
      throw new ApiError(constants.errorTypes.db);
    }
  }

  public async update(codigo: string, model: Event): Promise<void> {
    const event = await this.entityModel.update(this.cleanToSave(model), {
      where: { codigo },
    });

    if (event[0] !== 1) {
      throw new ApiError(constants.errorTypes.notFound);
    }
  }

  public async delete(codigo: string): Promise<void> {
    const event = await this.entityModel.destroy({ where: { codigo } });

    if (event !== 1) {
      throw new ApiError(constants.errorTypes.notFound);
    }
  }

  public async find(): Promise<Event[]> {
    return (await this.entityModel.findAll()).map(
      (item) => new this.formatter(item)
    );
  }

  public async findOne<T>(codigo: string): Promise<Event> {
    const event: Event = await this.entityModel.findByPk(codigo);

    if (!event) {
      throw new ApiError(constants.errorTypes.notFound);
    }

    return event;
  }

  protected cleanToSave(entity: any): any {
    const copy: any = new this.formatter(entity);
    const loop = (value: any): any => {
      if (!value || typeof value !== 'object') return;
      /** formatting logic to save goes here */
      Object.keys(value).forEach((key) => loop(value[key]));
    };
    loop(copy);
    return copy;
  }
}
