// interface RespTest {
//   text: string;
// }

import Event from '../models/Event';

class EventController {
  public async index(req, res): Promise<any> {
    const events = await Event.findAll();

    return res.json(events);
  }
}

export default new EventController();
