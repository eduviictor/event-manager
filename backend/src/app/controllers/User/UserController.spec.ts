import { UserController } from './UserController';
import User from '../../models/User';

describe('User Controller', () => {
  const userController = new UserController();
  beforeAll(async () => {
    User.findAll = jest.fn().mockReturnValue([
      {
        codigo: 9,
        nome: 'Nome 1',
        email: 'nome@email.com',
        senha: '123dasdasdas',
        nivel_acesso: 1,
        created_at: '2020-07-09T15:52:54.165Z',
        updated_at: '2020-07-09T15:52:54.165Z',
      },
    ]);
    User.findOne = jest.fn().mockReturnValue({
      codigo: 8,
      nome: 'Nome 1',
      email: 'nome@email.com',
      senha: '123dasdasdas',
      nivel_acesso: 1,
      created_at: '2020-07-09T15:52:54.165Z',
      updated_at: '2020-07-09T15:52:54.165Z',
    });
    User.create = jest.fn().mockReturnValue({
      codigo: 9,
      nome: 'Nome 1',
      email: 'nome@email.com',
      senha: '123dasdasdas',
      nivel_acesso: 1,
      created_at: '2020-07-09T15:52:54.165Z',
      updated_at: '2020-07-09T15:52:54.165Z',
    });
    User.update = jest.fn().mockReturnValue([
      1,
      [
        {
          codigo: 8,
          nome: 'Nome 1',
          email: 'nome@email.com',
          senha: '123dasdasdas',
          nivel_acesso: 1,
          created_at: '2020-07-09T15:52:54.165Z',
          updated_at: '2020-07-09T15:52:54.165Z',
        },
      ],
    ]);
    User.destroy = jest.fn().mockReturnValue(1);
  });

  it('Get all users: index()', async () => {
    const users = await userController.index();
    expect(users).toEqual([
      {
        codigo: 9,
        nome: 'Nome 1',
        email: 'nome@email.com',
        senha: '123dasdasdas',
        nivel_acesso: 1,
        created_at: '2020-07-09T15:52:54.165Z',
        updated_at: '2020-07-09T15:52:54.165Z',
      },
    ]);
  });

  it('Get one user: show()', async () => {
    const user = await userController.show('8');
    expect(user).toEqual({
      codigo: 8,
      nome: 'Nome 1',
      email: 'nome@email.com',
      senha: '123dasdasdas',
      nivel_acesso: 1,
      created_at: '2020-07-09T15:52:54.165Z',
      updated_at: '2020-07-09T15:52:54.165Z',
    });
  });

  it('Create one user: store()', async () => {
    const userPost: User = new User({
      codigo: 8,
      nome: 'Nome 1',
      email: 'nome@email.com',
      senha: '123dasdasdas',
      nivel_acesso: 1,
    });

    const user = await userController.store(userPost);
    expect(user).toMatchObject({
      codigo: 8,
      nome: 'Nome 1',
      email: 'nome@email.com',
      senha: '123dasdasdas',
      nivel_acesso: 1,
    });
  });

  it('Update one user: update()', async () => {
    const userPut: User = new User({
      codigo: 8,
      nome: 'Nome 1',
      email: 'nome@email.com',
      senha: '123dasdasdas',
      nivel_acesso: 1,
      created_at: '2020-07-09T15:52:54.165Z',
      updated_at: '2020-07-09T15:52:54.165Z',
    });

    const user = await userController.update('8', userPut);
    console.log('user', user);
    expect(user).toMatchObject({
      codigo: 8,
      nome: 'Nome 1',
      email: 'nome@email.com',
      senha: '123dasdasdas',
      nivel_acesso: 1,
    });
  });

  it('Delete one user: delete()', async () => {
    const deleted = await userController.delete('9');
    expect(deleted).toEqual('User deleted with success');
  });
});
