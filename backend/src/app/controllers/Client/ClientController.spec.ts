import { ClientController } from './ClientController';
import Client, { ClientAttributesBody } from '../../models/Client';
import User from '../../models/User';

describe('Client Controller', () => {
  const clientController = new ClientController();
  beforeAll(async () => {
    Client.findAll = jest.fn().mockReturnValue([
      {
        cpf: '21212112',
        nome: 'Teste',
        email: 'email@email.com',
        telefone: '84999999999',
        cidade: 'Caicó',
        estado: 'RN',
        login_user: 'adm',
        created_at: '2020-07-22T02:28:11.215Z',
        updated_at: '2020-07-22T02:28:11.215Z',
      },
    ]);
    Client.findOne = jest.fn().mockReturnValue({
      cpf: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      cidade: 'Caicó',
      estado: 'RN',
      login_user: 'adm',
      created_at: '2020-07-22T02:28:11.215Z',
      updated_at: '2020-07-22T02:28:11.215Z',
    });
    Client.create = jest.fn().mockReturnValue({
      cpf: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      cidade: 'Caicó',
      estado: 'RN',
      login_user: 'adm',
      created_at: '2020-07-22T02:55:54.036Z',
      updated_at: '2020-07-22T02:55:54.036Z',
    });
    Client.update = jest.fn().mockReturnValue([
      1,
      [
        {
          cpf: '21212112',
          nome: 'Teste',
          email: 'email@email.com',
          telefone: '84999999999',
          cidade: 'Caicó',
          estado: 'RN',
          login_user: 'adm',
          created_at: '2020-07-22T02:55:54.036Z',
          updated_at: '2020-07-22T02:55:54.036Z',
        },
      ],
    ]);
    Client.destroy = jest.fn().mockReturnValue(1);

    User.create = jest.fn().mockReturnValue({
      login: 'adm',
      senha: '12345',
      created_at: '2020-07-22T02:55:54.036Z',
      updated_at: '2020-07-22T02:55:54.036Z',
    });

    User.update = jest.fn().mockReturnValue([
      1,
      [
        {
          login: 'adm',
          senha: '12345',
          created_at: '2020-07-22T02:55:54.036Z',
          updated_at: '2020-07-22T02:55:54.036Z',
        },
      ],
    ]);

    User.destroy = jest.fn().mockReturnValue(1);
  });

  it('Get all clients: index()', async () => {
    const clients = await clientController.index();
    expect(Array.isArray(clients)).toBe(true);
    expect(clients[0]).toMatchObject({
      cpf: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      cidade: 'Caicó',
      estado: 'RN',
      login_user: 'adm',
    });
  });

  it('Get one client: show()', async () => {
    const client = await clientController.show('8');
    expect(client).toEqual({
      cpf: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      cidade: 'Caicó',
      estado: 'RN',
      login_user: 'adm',
      created_at: '2020-07-22T02:28:11.215Z',
      updated_at: '2020-07-22T02:28:11.215Z',
    });
  });

  it('Create one client: store()', async () => {
    const clientPost: ClientAttributesBody = {
      cpf: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      cidade: 'Caicó',
      estado: 'RN',
      login_user: 'adm',
      senha: 'odadsa',
    };

    const client = await clientController.store(clientPost);
    expect(client).toMatchObject({
      cpf: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      cidade: 'Caicó',
      estado: 'RN',
      login_user: 'adm',
    });
  });

  it('Update one user: update()', async () => {
    const clientPut: ClientAttributesBody = {
      cpf: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      cidade: 'Caicó',
      estado: 'RN',
      login_user: 'adm',
      senha: 'odadsa',
    };

    const client = await clientController.update('8', clientPut);
    expect(client).toMatchObject({
      cpf: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      cidade: 'Caicó',
      estado: 'RN',
      login_user: 'adm',
    });
  });

  it('Delete one client: delete()', async () => {
    const deleted = await clientController.delete('9');
    expect(deleted).toEqual('Client deleted with success');
  });
});
