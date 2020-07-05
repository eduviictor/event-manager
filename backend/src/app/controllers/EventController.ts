import { Request, Response } from 'express';
import Event, { EventAttributes } from '../models/Event';

class EventController {
  public async index(req: Request, res: Response): Promise<any> {
    try {
      const events: EventAttributes[] = await Event.findAll();

      return res.json(events).status(200);
    } catch (err) {
      throw new Error('Internal Server Error');
    }
  }

  public async show(req: Request, res: Response): Promise<any> {
    const id = req.params.id;

    if (!id) {
      return res.json('Id não informado').status(400);
    }

    try {
      const event: EventAttributes = await Event.findByPk(id);

      if (!event) {
        return res.json('Evento não encontrado').status(404);
      }

      return res.json(event).status(200);
    } catch (err) {
      throw new Error('Internal Server Error');
    }
  }

  public async store(req: Request, res: Response): Promise<any> {
    const { body } = req;

    try {
      const event: EventAttributes = await Event.create(body);

      return res.json(event).status(200);
    } catch (err) {
      throw new Error('Internal Server Error');
    }
  }

  public async update(req: Request, res: Response): Promise<any> {
    const id = req.params.id;
    const { body } = req;

    if (!id) {
      return res.json('Id não informado').status(400);
    }

    try {
      const event = await Event.update(body, {
        where: { codigo: id },
      });

      console.log('event', event);

      if (event[0] !== 1) {
        return res.json('Evento não encontrado').status(404);
      }

      return res.json(event).status(200);
    } catch (err) {
      throw new Error('Internal Server Error');
    }
  }

  public async delete(req: Request, res: Response): Promise<any> {
    const id = req.params.id;

    if (!id) {
      return res.json('Id não informado').status(400);
    }

    try {
      const event = await Event.destroy({
        where: { codigo: id },
      });

      if (event[0] !== 1) {
        return res.json('Evento não encontrado').status(404);
      }

      return res.json(event).status(200);
    } catch (err) {
      throw new Error('Internal Server Error');
    }
  }
}

export default new EventController();
