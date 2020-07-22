import '../../../database';
import bcrypt from 'bcryptjs';

import User from '../../models/User';
import Organizer, { OrganizerAttributesBody } from '../../models/Organizer';
import constants from '../../../config/constants';
import { ApiError } from '../../../config/ErrorHandler';

export default class OrganizerRepository {
  protected formatter: any = Object;
  protected entityModel = User;

  public async create(model: OrganizerAttributesBody): Promise<User> {
    const { cnpj, senha, email, nome, telefone, login } = model;
    const passHash = await bcrypt.hash(senha, 8);

    await this.entityModel.create({ login, senha: passHash });
    const organizer = await Organizer.create({
      cnpj,
      email,
      nome,
      telefone,
      login,
    });
    return new this.formatter(organizer);
  }

  public async update(
    cnpj: string,
    model: OrganizerAttributesBody
  ): Promise<[number, Organizer[]]> {
    const { senha, email, nome, telefone, login } = model;
    const organizer = await Organizer.update(
      { cnpj: model.cnpj, email, nome, telefone, login },
      { where: { cnpj } }
    );
    await this.entityModel.update({ login, senha }, { where: { login } });

    return organizer;
  }

  public async delete(cnpj: string): Promise<number> {
    const organizer = await Organizer.findOne({ where: { cnpj } });

    if (!organizer) {
      return 0;
    }

    return this.entityModel.destroy({ where: { login: organizer.login } });
  }

  public async find(): Promise<Organizer[]> {
    return (await Organizer.findAll()).map((item) => new this.formatter(item));
  }

  public async findOne<T>(cnpj: string): Promise<Organizer> {
    return Organizer.findByPk(cnpj);
  }
}
