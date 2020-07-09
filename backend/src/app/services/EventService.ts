import EventRepository from '../repositories/sql/EventRepository';
import Event from '../models/Event';

export default class EventService {
  repository: EventRepository = new EventRepository();

  public async findAll(): Promise<Event[]> {
    return this.repository.find();
  }

  public async getById(codigo: string): Promise<Event> {
    return this.repository.findOne(codigo);
  }

  public async create(entity: Event): Promise<Event> {
    const res = await this.repository.create(entity);
    return this.getById((res as any).codigo);
  }

  public async update(codigo: string, entity: Event): Promise<Event> {
    await this.repository.update(codigo, entity);
    return this.getById(codigo);
  }

  public async delete(codigo: string): Promise<string> {
    await this.repository.delete(codigo);
    return 'Event updated with success';
  }
}
