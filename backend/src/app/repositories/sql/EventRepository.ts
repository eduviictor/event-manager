import * as Sequelize from 'sequelize';
import '../../../database';

import Event from '../../models/Event';

export default class EventRepository {
  protected formatter: any = Object;
  protected entityModel = Event;
  protected getInclude: Sequelize.IncludeOptions[] = [];
  protected saveInclude: Sequelize.IncludeOptions[] = [];

  public async create(model: Event): Promise<Event> {
    const res = await this.entityModel.create(model);
    return new this.formatter(res);
  }

  public async update(
    codigo: string,
    model: Event
  ): Promise<[number, Event[]]> {
    delete model.codigo;
    return this.entityModel.update(model, {
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
}
