import { EventController } from './EventController';
import Event from '../../models/Event';

describe('Event Controller', () => {
  const eventController = new EventController();
  beforeAll(async () => {
    Event.findAll = jest.fn().mockReturnValue([
      {
        codigo: 9,
        nome: "Party",
        descricao: "A nice party!",
        horario_inicio: "July 4, 9 PM",
        horario_fim: "July 5, 10 PM",
        created_at: '2020-07-09T15:52:54.165Z',
        updated_at: '2020-07-09T15:52:54.165Z',
      },
    ]);
    Event.findOne = jest.fn().mockReturnValue({
      codigo: 9,
      nome: "Party",
      descricao: "A nice party!",
      horario_inicio: "July 4, 9 PM",
      horario_fim: "July 5, 10 PM",
      created_at: '2020-07-09T15:52:54.165Z',
      updated_at: '2020-07-09T15:52:54.165Z',
    });
    Event.create = jest.fn().mockReturnValue({
      codigo: 9,
      nome: "Party",
      descricao: "A nice party!",
      horario_inicio: "July 4, 9 PM",
      horario_fim: "July 5, 10 PM",
      created_at: '2020-07-09T16:27:45.227Z',
      updated_at: '2020-07-09T16:27:45.227Z',
    });
    Event.update = jest.fn().mockReturnValue([
      1,
      [
        {
          codigo: 8,
          nome: "Party",
          descricao: "A nice party!",
          horario_inicio: "July 4, 9 PM",
          horario_fim: "July 5, 10 PM",
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
        nome: "Party",
        descricao: "A nice party!",
        horario_inicio: "July 4, 9 PM",
        horario_fim: "July 5, 10 PM",
        created_at: '2020-07-09T15:52:54.165Z',
        updated_at: '2020-07-09T15:52:54.165Z',
      },
    ]);
  });

  it('Get one event: show()', async () => {
    const event = await eventController.show('9');
    expect(event).toEqual({
      codigo: 9,
      nome: "Party",
      descricao: "A nice party!",
      horario_inicio: "July 4, 9 PM",
      horario_fim: "July 5, 10 PM",
      created_at: '2020-07-09T15:52:54.165Z',
      updated_at: '2020-07-09T15:52:54.165Z',
    });
  });

  it('Create one event: store()', async () => {
    const eventPost: Event = new Event({
      codigo: 9,
      nome: "Party",
      descricao: "A nice party!",
      horario_inicio: "July 4, 9 PM",
      horario_fim: "July 5, 10 PM",
    });

    const event = await eventController.store(eventPost);
    expect(event).toMatchObject({
      codigo: 9,
      nome: "Party",
      descricao: "A nice party!",
      horario_inicio: "July 4, 9 PM",
      horario_fim: "July 5, 10 PM",
    });
  });

  it('Update one event: update()', async () => {
    const eventPut: Event = new Event({
      codigo: 9,
      nome: "Party",
      descricao: "A nice party!",
      horario_inicio: "July 4, 9 PM",
      horario_fim: "July 5, 10 PM",
    });

    const event = await eventController.update('8', eventPut);
    expect(event).toMatchObject({
      codigo: 9,
      nome: "Party",
      descricao: "A nice party!",
      horario_inicio: "July 4, 9 PM",
      horario_fim: "July 5, 10 PM",
    });
  });

  it('Delete one event: delete()', async () => {
    const deleted = await eventController.delete('9');
    expect(deleted).toEqual('Event deleted with success');
  });
});
