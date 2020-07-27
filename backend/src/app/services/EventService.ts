import EventRepository from '../repositories/sql/EventRepository';
import Event from '../models/Event';
import { ApiError } from '../../config/ErrorHandler';
import constants from '../../config/constants';
import EventValidator from '../validators/EventValidator';

export default class EventService {
  repository: EventRepository = new EventRepository();
  validator: EventValidator = new EventValidator();

  public async findAll(): Promise<Event[]> {
    return this.repository.find();
  }

  public async getById(codigo: string): Promise<Event> {
    const event = await this.repository.findOne(codigo);
    if (!event) {
      throw new ApiError(constants.errorTypes.notFound);
    }

    return event;
  }

  public async create(entity: Event): Promise<Event> {
    await this.validator.create(entity);
    try {
      const res = await this.repository.create(entity);
      return this.getById((res as any).codigo);
    } catch (err) {
      throw new ApiError(constants.errorTypes.db);
    }
  }

  public async update(codigo: string, entity: Event): Promise<Event> {
    await this.validator.update(entity);
    const event = await this.repository.update(codigo, entity);

    if (event[0] !== 1) {
      throw new ApiError(constants.errorTypes.notFound);
    }
    return this.getById(codigo);
  }

  public async delete(codigo: string): Promise<string> {
    const event = await this.repository.delete(codigo);

    if (event !== 1) {
      throw new ApiError(constants.errorTypes.notFound);
    }
    return 'Event deleted with success';
  }
}
