import * as Sequelize from 'sequelize';
import '../../../database';
import bcrypt from 'bcryptjs';

import User from '../../models/User';

export default class UserRepository {
  protected formatter: any = Object;
  protected entityModel = User;
  protected getInclude: Sequelize.IncludeOptions[] = [];
  protected saveInclude: Sequelize.IncludeOptions[] = [];

  public async create(model: User): Promise<User> {
    const passHash = await bcrypt.hash(model.senha, 8);
    const res = await this.entityModel.create({ ...model, senha: passHash });
    return new this.formatter(res);
  }

  public async update(codigo: string, model: User): Promise<[number, User[]]> {
    return this.entityModel.update(model, {
      where: { codigo },
    });
  }

  public async delete(codigo: string): Promise<number> {
    return this.entityModel.destroy({ where: { codigo } });
  }

  public async find(): Promise<User[]> {
    return (
      await this.entityModel.findAll({
        attributes: { exclude: ['senha'] },
      })
    ).map((item) => new this.formatter(item));
  }

  public async findOne<T>(codigo: string): Promise<User> {
    return this.entityModel.findByPk(codigo, {
      attributes: { exclude: ['senha'] },
    });
  }
}
