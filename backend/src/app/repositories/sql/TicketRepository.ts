import * as Sequelize from 'sequelize';
import '../../../database';

import Ticket from '../../models/Ticket';

export default class TicketRepository {
  protected formatter: any = Object;
  protected entityModel = Ticket;
  protected getInclude: Sequelize.IncludeOptions[] = [];
  protected saveInclude: Sequelize.IncludeOptions[] = [];

  public async create(model: Ticket): Promise<Ticket> {
    const res = await this.entityModel.create(model);
    return new this.formatter(res);
  }

  public async update(
    codigo: string,
    model: Ticket
  ): Promise<[number, Ticket[]]> {
    return this.entityModel.update(model, {
      where: { codigo },
    });
  }

  public async delete(codigo: string): Promise<number> {
    return this.entityModel.destroy({ where: { codigo } });
  }

  public async find(): Promise<Ticket[]> {
    return (await this.entityModel.findAll()).map(
      (item) => new this.formatter(item)
    );
  }

  public async findOne<T>(codigo: string): Promise<Ticket> {
    return this.entityModel.findByPk(codigo);
  }
}
