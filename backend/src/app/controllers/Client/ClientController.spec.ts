import { ClientController } from './ClientController';
import Client, { ClientAttributesBody } from '../../models/Client';
import User from '../../models/User';
import ClientService from '../../services/ClientService';

describe('Client Controller', () => {
  const clientController = new ClientController();

  it('Get all clients: index()', async () => {
    Client.findAll = jest.fn().mockReturnValue([
      {
        cpf: '21212112',
        nome: 'Teste',
        email: 'email@email.com',
        telefone: '84999999999',
        cidade: 'Caicó',
        estado: 'RN',
        login: 'adm',
        created_at: '2020-07-22T02:28:11.215Z',
        updated_at: '2020-07-22T02:28:11.215Z',
      },
    ]);

    const clients = await clientController.index();
    expect(Array.isArray(clients)).toBe(true);
    expect(clients[0]).toMatchObject({
      cpf: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      cidade: 'Caicó',
      estado: 'RN',
      login: 'adm',
    });
  });

  it('Get one client: show()', async () => {
    Client.findOne = jest.fn().mockReturnValue({
      cpf: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      cidade: 'Caicó',
      estado: 'RN',
      login: 'adm',
      created_at: '2020-07-22T02:28:11.215Z',
      updated_at: '2020-07-22T02:28:11.215Z',
    });

    const client = await clientController.show('8');
    expect(client).toEqual({
      cpf: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      cidade: 'Caicó',
      estado: 'RN',
      login: 'adm',
      created_at: '2020-07-22T02:28:11.215Z',
      updated_at: '2020-07-22T02:28:11.215Z',
    });
  });

  it('Create one client: store()', async () => {
    Client.findOne = jest.fn().mockReturnValue(null);
    User.findOne = jest.fn().mockReturnValue(null);
    Client.create = jest.fn().mockReturnValue({
      cpf: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      cidade: 'Caicó',
      estado: 'RN',
      login: 'adm',
      created_at: '2020-07-22T02:55:54.036Z',
      updated_at: '2020-07-22T02:55:54.036Z',
    });
    User.create = jest.fn().mockReturnValue({
      login: 'adm',
      senha: '12345',
      created_at: '2020-07-22T02:55:54.036Z',
      updated_at: '2020-07-22T02:55:54.036Z',
    });

    const clientPost: ClientAttributesBody = {
      cpf: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      cidade: 'Caicó',
      estado: 'RN',
      login: 'adm',
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
      login: 'adm',
    });
  });

  it('Update one client: update()', async () => {
    Client.findOne = jest.fn().mockReturnValue(null);
    User.findOne = jest.fn().mockReturnValue(null);

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
          login: 'adm',
          created_at: '2020-07-22T02:55:54.036Z',
          updated_at: '2020-07-22T02:55:54.036Z',
        },
      ],
    ]);
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

    clientController.service.getById = jest.fn().mockReturnValue({
      cpf: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      cidade: 'Caicó',
      estado: 'RN',
      login: 'adm',
      created_at: '2020-07-22T02:28:11.215Z',
      updated_at: '2020-07-22T02:28:11.215Z',
    });

    const clientPut: ClientAttributesBody = {
      cpf: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      cidade: 'Caicó',
      estado: 'RN',
      login: 'adm',
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
      login: 'adm',
    });
  });

  it('Delete one client: delete()', async () => {
    User.destroy = jest.fn().mockReturnValue(1);
    Client.findOne = jest.fn().mockReturnValue({
      cpf: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      cidade: 'Caicó',
      estado: 'RN',
      login: 'adm',
      created_at: '2020-07-22T02:28:11.215Z',
      updated_at: '2020-07-22T02:28:11.215Z',
    });

    const deleted = await clientController.delete('21212112');
    expect(deleted).toEqual('Client deleted with success');
  });
});
