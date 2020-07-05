import { Request, Response } from 'express';
import Event, { EventAttributes } from '../models/Event';

class EventController {
  public async index(req: Request, res: Response): Promise<any> {
    try {
      const events: EventAttributes[] = await Event.findAll();

      return res.json(events);
    } catch (err) {
      throw new Error('Internal Server Error');
    }
  }

  public async show(req: Request, res: Response): Promise<any> {
    const id = req.params.id;

    try {
      const event: EventAttributes = await Event.findByPk(id);

      return res.json(event);
    } catch (err) {
      throw new Error('Internal Server Error');
    }
  }
}

export default new EventController();
