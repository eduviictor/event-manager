import { request, deleteMany } from '../../../utils/tests';
import Event from '../../models/Event';
import User from '../../models/User';
import Organizer, { OrganizerAttributes } from '../../models/Organizer';
import Client from '../../models/Client';
import bcrypt from 'bcryptjs';

describe('Event Controller', () => {
  let token: string;

  const defaultOrganizer: OrganizerAttributes = {
    cnpj: '21212112',
    nome: 'Teste',
    email: 'email@email.com',
    telefone: '84999999999',
    login: 'adm',
  };

  beforeAll(async () => {
    await deleteMany([Event, User]);
    const passHash = await bcrypt.hash('adm', 8);
    const user: User = new User({
      login: defaultOrganizer.login,
      senha: passHash,
    });
    const organizer: Organizer = new Organizer({ ...defaultOrganizer });

    await user.save();
    await organizer.save();

    const responseLogin = await request
      .post('/session')
      .send({ login: defaultOrganizer.login, senha: 'adm' });
    console.log('responseLogin', responseLogin.body);
    token = responseLogin.body.token;
  });

  beforeEach(async () => {
    await deleteMany([Event]);

    const event = {
      codigo: 9,
      nome: "Party",
      descricao: "A nice party!",
      horario_inicio: "July 4, 9 PM",
      horario_fim: "July 5, 10 PM",
    };

    await Event.create(event);
  });

  describe('Index - /events', () => {
    it('Should be able to return a list of events', async () => {
      console.log('TOKEN', token);
      const response = await request
        .get('/events')
        .set('Authorization', `bearer ${token}`);
      expect(response.body).toMatchObject([
        {
          codigo: 9,
          nome: "Party",
          descricao: "A nice party!",
          horario_inicio: "July 4, 9 PM",
          horario_fim: "July 5, 10 PM",
        },
      ]);
    });
  });

  describe('Show - /events/id', () => {
    it('Should be able to return one user', async () => {
      const response = await request
        .get('/events/9')
        .set('Authorization', `bearer ${token}`);
      expect(response.body).toMatchObject({
        codigo: 9,
        nome: "Party",
        descricao: "A nice party!",
        horario_inicio: "July 4, 9 PM",
        horario_fim: "July 5, 10 PM",
      });
    });

    it('Should return "404" if not found a event', async () => {
      const response = await request
        .get('/events/8')
        .set('Authorization', `bearer ${token}`);
      expect(response.status).toBe(404);
    });
  });

  describe('Create - /events', () => {
    it('Should be able to create a event', async () => {
      const response = await request
        .post('/events')
        .send({
          nome: "Party",
          descricao: "A nice party!",
          horario_inicio: "July 4, 9 PM",
          horario_fim: "July 5, 10 PM",
        })
        .set('Authorization', `bearer ${token}`);
      expect(response.body).toMatchObject({
        nome: "Party",
        descricao: "A nice party!",
        horario_inicio: "July 4, 9 PM",
        horario_fim: "July 5, 10 PM",
      });
    });
  });

  describe('Update - /events/id', () => {
    it('Should be able to update a event', async () => {
      const response = await request
        .put('/events/9')
        .send({
          nome: "Party",
          descricao: "A nice party!",
          horario_inicio: "July 4, 9 PM",
          horario_fim: "July 5, 10 PM",
        })
        .set('Authorization', `bearer ${token}`);
      expect(response.body).toMatchObject({
        nome: "Party",
        descricao: "A nice party!",
        horario_inicio: "July 4, 9 PM",
        horario_fim: "July 5, 10 PM",
      });
    });

    it('Should return "404" if not found a event', async () => {
      const response = await request
        .put('/events/8')
        .set('Authorization', `bearer ${token}`);
      expect(response.status).toBe(404);
    });
  });

  describe('Delete - /events/id', () => {
    it('Should be able to delete a event', async () => {
      const response = await request
        .delete('/events/9')
        .set('Authorization', `bearer ${token}`);
      expect(response.body).toEqual('Event deleted with success');
    });

    it('Should return "404" if not found a event', async () => {
      const response = await request
        .delete('/events/8')
        .set('Authorization', `bearer ${token}`);
      expect(response.status).toBe(404);
    });
  });
});
