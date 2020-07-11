import { request, deleteMany } from '../../../utils/tests';
import { EventController } from './EventController';
import Event from '../../models/Event';

describe('Event Controller', () => {
  beforeEach(async () => {
    await deleteMany([Event]);

    const event = {
      codigo: 9,
      codEmpresa: 1,
      codAtracao: 1,
      codLocal: 1,
      codOrcamento: 1,
      codIngresso: 1,
      dados: 'dsadasdsa',
      horario: '323232',
    };

    await Event.create(event);
  });

  describe('Index - /events', () => {
    it('Should be able to return a list of events', async () => {
      const response = await request.get('/events');
      expect(response.body).toMatchObject([
        {
          codigo: 9,
          codEmpresa: 1,
          codAtracao: 1,
          codLocal: 1,
          codOrcamento: 1,
          codIngresso: 1,
          dados: 'dsadasdsa',
          horario: '323232',
        },
      ]);
    });
  });

  describe('Show - /events/id', () => {
    it('Should be able to return one user', async () => {
      const response = await request.get('/events/9');
      expect(response.body).toMatchObject({
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

    it('Should return "404" if not found a event', async () => {
      const response = await request.get('/events/8');
      expect(response.status).toBe(404);
    });
  });

  describe('Create - /events', () => {
    it('Should be able to create a event', async () => {
      const response = await request.post('/events').send({
        codEmpresa: 1,
        codAtracao: 1,
        codLocal: 1,
        codOrcamento: 1,
        codIngresso: 1,
        dados: 'dsadasdsa',
        horario: '323232',
      });
      expect(response.body).toMatchObject({
        codEmpresa: 1,
        codAtracao: 1,
        codLocal: 1,
        codOrcamento: 1,
        codIngresso: 1,
        dados: 'dsadasdsa',
        horario: '323232',
      });
    });
  });

  describe('Update - /events/id', () => {
    it('Should be able to update a event', async () => {
      const response = await request.put('/events/9').send({
        codEmpresa: 2,
        codAtracao: 2,
        codLocal: 2,
        codOrcamento: 2,
        codIngresso: 2,
        dados: 'dsadasdsa2',
        horario: '323232',
      });
      expect(response.body).toMatchObject({
        codEmpresa: 2,
        codAtracao: 2,
        codLocal: 2,
        codOrcamento: 2,
        codIngresso: 2,
        dados: 'dsadasdsa2',
        horario: '323232',
      });
    });

    it('Should return "404" if not found a event', async () => {
      const response = await request.put('/events/8');
      expect(response.status).toBe(404);
    });
  });

  describe('Delete - /events/id', () => {
    it('Should be able to delete a event', async () => {
      const response = await request.delete('/events/9');
      expect(response.body).toEqual('Event deleted with success');
    });

    it('Should return "404" if not found a event', async () => {
      const response = await request.delete('/events/8');
      expect(response.status).toBe(404);
    });
  });
});
