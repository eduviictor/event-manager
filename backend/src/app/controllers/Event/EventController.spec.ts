import { EventController } from './EventController';
import Event, { EventAttributes } from '../../models/Event';

describe('Event Controller', () => {
  const eventController = new EventController();
  beforeAll(async () => {
    Event.findAll = jest.fn().mockReturnValue([
      {
        codigo: 9,
        codEmpresa: 1,
        codAtracao: 1,
        codLocal: 1,
        codOrcamento: 1,
        codIngresso: 1,
        dados: 'dsadasdsa',
        horario: '323232',
        created_at: '2020-07-09T15:52:54.165Z',
        updated_at: '2020-07-09T15:52:54.165Z',
      },
    ]);
    Event.findOne = jest.fn().mockReturnValue({
      codigo: 9,
      codEmpresa: 1,
      codAtracao: 1,
      codLocal: 1,
      codOrcamento: 1,
      codIngresso: 1,
      dados: 'dsadasdsa',
      horario: '323232',
      created_at: '2020-07-09T15:52:54.165Z',
      updated_at: '2020-07-09T15:52:54.165Z',
    });
    Event.create = jest.fn().mockReturnValue({
      codigo: 9,
      codEmpresa: 1,
      codAtracao: 1,
      codLocal: 1,
      codOrcamento: 1,
      codIngresso: 1,
      dados: 'dsadasdsa',
      horario: '323232',
      created_at: '2020-07-09T16:27:45.227Z',
      updated_at: '2020-07-09T16:27:45.227Z',
    });
    Event.update = jest.fn().mockReturnValue([
      1,
      [
        {
          codigo: 8,
          codEmpresa: 1,
          codAtracao: 5,
          codLocal: 2,
          codOrcamento: 2,
          codIngresso: 2,
          dados: 'dsadasdsa',
          horario: '323232',
          created_at: '2020-07-09T14:14:20.288Z',
          updated_at: '2020-07-09T14:15:31.324Z',
        },
      ],
    ]);
    Event.destroy = jest.fn().mockReturnValue(1);
  });

  it('Get all events: index()', async () => {
    const events = await eventController.index();
    expect(events).toEqual([
      {
        codigo: 9,
        codEmpresa: 1,
        codAtracao: 1,
        codLocal: 1,
        codOrcamento: 1,
        codIngresso: 1,
        dados: 'dsadasdsa',
        horario: '323232',
        created_at: '2020-07-09T15:52:54.165Z',
        updated_at: '2020-07-09T15:52:54.165Z',
      },
    ]);
  });

  it('Get one event: show()', async () => {
    const event = await eventController.show('9');
    expect(event).toEqual({
      codigo: 9,
      codEmpresa: 1,
      codAtracao: 1,
      codLocal: 1,
      codOrcamento: 1,
      codIngresso: 1,
      dados: 'dsadasdsa',
      horario: '323232',
      created_at: '2020-07-09T15:52:54.165Z',
      updated_at: '2020-07-09T15:52:54.165Z',
    });
  });

  it('Create one user: store()', async () => {
    const eventPost: Event = new Event({
      codigo: 9,
      codEmpresa: 1,
      codAtracao: 1,
      codLocal: 1,
      codOrcamento: 1,
      codIngresso: 1,
      dados: 'dsadasdsa',
      horario: '323232',
    });

    const event = await eventController.store(eventPost);
    expect(event).toMatchObject({
      codigo: 9,
      codEmpresa: 1,
      codAtracao: 1,
      codLocal: 1,
      codOrcamento: 1,
      codIngresso: 1,
      dados: 'dsadasdsa',
      horario: '323232',
    });
  });

  it('Update one user: update()', async () => {
    const eventPut: Event = new Event({
      codigo: 9,
      codEmpresa: 1,
      codAtracao: 1,
      codLocal: 1,
      codOrcamento: 1,
      codIngresso: 1,
      dados: 'dsadasdsa',
      horario: '323232',
    });

    const event = await eventController.update('8', eventPut);
    expect(event).toMatchObject({
      codigo: 9,
      codEmpresa: 1,
      codAtracao: 1,
      codLocal: 1,
      codOrcamento: 1,
      codIngresso: 1,
      dados: 'dsadasdsa',
      horario: '323232',
    });
  });

  it('Delete one event: delete()', async () => {
    const deleted = await eventController.delete('9');
    expect(deleted).toEqual('Event deleted with success');
  });
});
