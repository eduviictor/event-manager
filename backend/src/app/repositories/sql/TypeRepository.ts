import * as Sequelize from 'sequelize';
import '../../../database';

import Type from '../../models/Type';

export default class TypeRepository {
  protected formatter: any = Object;
  protected entityModel = Type;
  protected getInclude: Sequelize.IncludeOptions[] = [];
  protected saveInclude: Sequelize.IncludeOptions[] = [];

  public async create(model: Type): Promise<Type> {
    const res = await this.entityModel.create(model);
    return new this.formatter(res);
  }

  public async update(
    codigo: string,
    model: Type
  ): Promise<[number, Type[]]> {
    return this.entityModel.update(model, {
      where: { codigo },
    });
  }

  public async delete(codigo: string): Promise<number> {
    return this.entityModel.destroy({ where: { codigo } });
  }

  public async find(): Promise<Type[]> {
    return (await this.entityModel.findAll()).map(
      (item) => new this.formatter(item)
    );
  }

  public async findOne<T>(codigo: string): Promise<Type> {
    return this.entityModel.findByPk(codigo);
  }
}
