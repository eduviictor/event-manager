import { OrganizerController } from './OrganizerController';
import Organizer, { OrganizerAttributesBody } from '../../models/Organizer';
import User from '../../models/User';

describe('Organizer Controller', () => {
  const organizerController = new OrganizerController();

  it('Get all organizers: index()', async () => {
    Organizer.findAll = jest.fn().mockReturnValue([
      {
        cnpj: '21212112',
        nome: 'Teste',
        email: 'email@email.com',
        telefone: '84999999999',
        login: 'adm',
        created_at: '2020-07-22T02:28:11.215Z',
        updated_at: '2020-07-22T02:28:11.215Z',
      },
    ]);

    const organizers = await organizerController.index();
    expect(Array.isArray(organizers)).toBe(true);
    expect(organizers[0]).toMatchObject({
      cnpj: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      login: 'adm',
    });
  });

  it('Get one organizer: show()', async () => {
    Organizer.findOne = jest.fn().mockReturnValue({
      cnpj: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      login: 'adm',
      created_at: '2020-07-22T02:28:11.215Z',
      updated_at: '2020-07-22T02:28:11.215Z',
    });

    const organizer = await organizerController.show('8');
    expect(organizer).toEqual({
      cnpj: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      login: 'adm',
      created_at: '2020-07-22T02:28:11.215Z',
      updated_at: '2020-07-22T02:28:11.215Z',
    });
  });

  it('Create one organizer: store()', async () => {
    Organizer.findOne = jest.fn().mockReturnValue(null);
    User.findOne = jest.fn().mockReturnValue(null);
    Organizer.create = jest.fn().mockReturnValue({
      cnpj: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
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

    const organizerPost: OrganizerAttributesBody = {
      cnpj: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      login: 'adm',
      senha: 'odadsa',
    };

    const organizer = await organizerController.store(organizerPost);
    expect(organizer).toMatchObject({
      cnpj: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      login: 'adm',
    });
  });

  it('Update one organizer: update()', async () => {
    Organizer.findOne = jest.fn().mockReturnValue(null);
    User.findOne = jest.fn().mockReturnValue(null);

    Organizer.update = jest.fn().mockReturnValue([
      1,
      [
        {
          cnpj: '21212112',
          nome: 'Teste',
          email: 'email@email.com',
          telefone: '84999999999',
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

    organizerController.service.getById = jest.fn().mockReturnValue({
      cnpj: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      login: 'adm',
      created_at: '2020-07-22T02:28:11.215Z',
      updated_at: '2020-07-22T02:28:11.215Z',
    });

    const organizerPut: OrganizerAttributesBody = {
      cnpj: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      login: 'adm',
      senha: 'odadsa',
    };

    const organizer = await organizerController.update('8', organizerPut);
    expect(organizer).toMatchObject({
      cnpj: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      login: 'adm',
    });
  });

  it('Delete one organizer: delete()', async () => {
    User.destroy = jest.fn().mockReturnValue(1);
    Organizer.findOne = jest.fn().mockReturnValue({
      cnpj: '21212112',
      nome: 'Teste',
      email: 'email@email.com',
      telefone: '84999999999',
      login: 'adm',
      created_at: '2020-07-22T02:28:11.215Z',
      updated_at: '2020-07-22T02:28:11.215Z',
    });

    const deleted = await organizerController.delete('9');
    expect(deleted).toEqual('Organizer deleted with success');
  });
});
