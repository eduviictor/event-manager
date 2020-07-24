import * as Sequelize from 'sequelize';
import '../../../database';

import Ticket_Type from '../../models/Ticket_Type';

export default class Ticket_TypeRepository {
  protected formatter: any = Object;
  protected entityModel = Ticket_Type;
  protected getInclude: Sequelize.IncludeOptions[] = [];
  protected saveInclude: Sequelize.IncludeOptions[] = [];

  public async create(model: Ticket_Type): Promise<Ticket_Type> {
    const res = await this.entityModel.create(model);
    return new this.formatter(res);
  }

  public async update(
    cod_ingresso: string,
    model: Ticket_Type
  ): Promise<[number, Ticket_Type[]]> {
    return this.entityModel.update(model, {
      where: { cod_ingresso },
    });
  }

  public async delete(cod_ingresso: string): Promise<number> {
    return this.entityModel.destroy({ where: { cod_ingresso } });
  }

  public async find(): Promise<Ticket_Type[]> {
    return (await this.entityModel.findAll()).map(
      (item) => new this.formatter(item)
    );
  }

  public async findOne<T>(codigo: string): Promise<Ticket_Type> {
    return this.entityModel.findByPk(codigo);
  }
}
