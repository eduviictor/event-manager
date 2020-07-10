import * as Sequelize from 'sequelize';
import '../../../database';

import { ApiError } from '../../../config/ErrorHandler';
import constants from '../../../config/constants';
import Event from '../../models/Event';

export default class EventRepository {
  protected formatter: any = Object;
  protected entityModel = Event;
  protected getInclude: Sequelize.IncludeOptions[] = [];
  protected saveInclude: Sequelize.IncludeOptions[] = [];

  public async create(model: Event): Promise<Event> {
    const res = await this.entityModel.create(this.cleanToSave(model));
    return new this.formatter(res);
  }

  public async update(
    codigo: string,
    model: Event
  ): Promise<[number, Event[]]> {
    return this.entityModel.update(this.cleanToSave(model), {
      where: { codigo },
    });
  }

  public async delete(codigo: string): Promise<number> {
    return this.entityModel.destroy({ where: { codigo } });
  }

  public async find(): Promise<Event[]> {
    return (await this.entityModel.findAll()).map(
      (item) => new this.formatter(item)
    );
  }

  public async findOne<T>(codigo: string): Promise<Event> {
    return this.entityModel.findByPk(codigo);
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
