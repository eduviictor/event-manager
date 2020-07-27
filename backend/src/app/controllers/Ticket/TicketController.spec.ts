import { TicketController } from './TicketController';
import Ticket from '../../models/Ticket';

describe('Ticket Controller', () => {
  const ticketController = new TicketController();
  beforeAll(async () => {
    Ticket.findAll = jest.fn().mockReturnValue([
      {
        codigo: 1234,
        valor: 106.50,
        quantidade: 200,
        cod_evento: 9,
        created_at: '2020-07-09T15:52:54.165Z',
        updated_at: '2020-07-09T15:52:54.165Z',
      },
    ]);
    Ticket.findOne = jest.fn().mockReturnValue({
      codigo: 1234,
      valor: 106.50,
      quantidade: 200,
      cod_evento: 9,
      created_at: '2020-07-09T15:52:54.165Z',
      updated_at: '2020-07-09T15:52:54.165Z',
    });
    Ticket.create = jest.fn().mockReturnValue({
      codigo: 1234,
      valor: 106.50,
      quantidade: 200,
      cod_evento: 9,
      created_at: '2020-07-09T15:52:54.165Z',
      updated_at: '2020-07-09T15:52:54.165Z',
    });
    Ticket.update = jest.fn().mockReturnValue([
      1,
      [
        {
          codigo: 1233,
          valor: 107,
          quantidade: 190,
          cod_evento: 9,
          created_at: '2020-07-09T15:52:54.165Z',
          updated_at: '2020-07-09T15:52:54.165Z',
        },
      ],
    ]);
    Ticket.destroy = jest.fn().mockReturnValue(1);
  });

  it('Get all tickets: index()', async () => {
    const tickets = await ticketController.index();
    expect(tickets).toEqual([
      {
        codigo: 1234,
        valor: 106.50,
        quantidade: 200,
        cod_evento: 9,
        created_at: '2020-07-09T15:52:54.165Z',
        updated_at: '2020-07-09T15:52:54.165Z',
      },
    ]);
  });

  it('Get one ticket: show()', async () => {
    const ticket = await ticketController.show('1234');
    expect(ticket).toEqual({
      codigo: 1234,
      valor: 106.50,
      quantidade: 200,
      cod_evento: 9,
      created_at: '2020-07-09T15:52:54.165Z',
      updated_at: '2020-07-09T15:52:54.165Z',
    });
  });

  it('Create one ticket: store()', async () => {
    const ticketPost: Ticket = new Ticket({
      codigo: 1234,
      valor: 106.50,
      quantidade: 200,
      cod_evento: 9,
      created_at: '2020-07-09T15:52:54.165Z',
      updated_at: '2020-07-09T15:52:54.165Z',
    });

    const ticket = await ticketController.store(ticketPost);
    expect(ticket).toMatchObject({
      codigo: 1234,
      valor: 106.50,
      quantidade: 200,
      cod_evento: 9,
      created_at: '2020-07-09T15:52:54.165Z',
      updated_at: '2020-07-09T15:52:54.165Z',
    });
  });

  it('Update one ticket: update()', async () => {
    const ticketPut: Ticket = new Ticket({
      codigo: 1234,
      valor: 106.50,
      quantidade: 200,
      cod_evento: 9,
      created_at: '2020-07-09T15:52:54.165Z',
      updated_at: '2020-07-09T15:52:54.165Z',
    });

    const ticket = await ticketController.update('8', ticketPut);
    expect(ticket).toMatchObject({
      codigo: 1234,
      valor: 106.50,
      quantidade: 200,
      cod_evento: 9,
      created_at: '2020-07-09T15:52:54.165Z',
      updated_at: '2020-07-09T15:52:54.165Z',
    });
  });

  it('Delete one ticket: delete()', async () => {
    const deleted = await ticketController.delete('9');
    expect(deleted).toEqual('Ticket deleted with success');
  });
});
