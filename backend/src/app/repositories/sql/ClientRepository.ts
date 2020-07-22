import '../../../database';
import bcrypt from 'bcryptjs';

import User from '../../models/User';
import Client, { ClientAttributesBody } from '../../models/Client';

export default class ClientRepository {
  protected formatter: any = Object;
  protected entityModel = User;

  public async create(model: ClientAttributesBody): Promise<Client> {
    const {
      cpf,
      senha,
      cidade,
      email,
      estado,
      login_user,
      nome,
      telefone,
    } = model;
    const passHash = await bcrypt.hash(senha, 8);
    await this.entityModel.create({ login: login_user, senha: passHash });
    const client = await Client.create({
      cpf,
      cidade,
      email,
      estado,
      nome,
      login_user,
      telefone,
    });
    return new this.formatter(client);
  }

  public async update(
    cpf: string,
    model: ClientAttributesBody
  ): Promise<[number, Client[]]> {
    const { senha, cidade, email, estado, login_user, nome, telefone } = model;
    const client = await Client.update(
      { cpf: model.cpf, cidade, estado, email, nome, telefone, login_user },
      { where: { cpf } }
    );
    await this.entityModel.update(
      { login: login_user, senha },
      { where: { login: login_user } }
    );

    return client;
  }

  public async delete(cpf: string): Promise<number> {
    const client = await Client.findOne({ where: { cpf } });

    if (!client) {
      return 0;
    }

    return this.entityModel.destroy({ where: { login: client.login_user } });
  }

  public async find(): Promise<Client[]> {
    return (await Client.findAll()).map((item) => new this.formatter(item));
  }

  public async findOne<T>(cpf: string): Promise<Client> {
    return Client.findByPk(cpf);
  }
}
