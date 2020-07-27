import TicketRepository from '../repositories/sql/TicketRepository';
import Ticket from '../models/Ticket';
import { ApiError } from '../../config/ErrorHandler';
import constants from '../../config/constants';
import TicketValidator from '../validators/TicketValidator';

export default class TicketService {
  repository: TicketRepository = new TicketRepository();
  validator: TicketValidator = new TicketValidator();

  public async findAll(): Promise<Ticket[]> {
    return this.repository.find();
  }

  public async getById(codigo: string): Promise<Ticket> {
    const ticket = await this.repository.findOne(codigo);
    if (!ticket) {
      throw new ApiError(constants.errorTypes.notFound);
    }

    return ticket;
  }

  public async create(entity: Ticket): Promise<Ticket> {
    await this.validator.create(entity);
    try {
      const res = await this.repository.create(entity);
      return this.getById((res as any).codigo);
    } catch (err) {
      throw new ApiError(constants.errorTypes.db);
    }
  }

  public async update(codigo: string, entity: Ticket): Promise<Ticket> {
    const ticket = await this.repository.update(codigo, entity);
    await this.validator.create(entity);
    if (ticket[0] !== 1) {
      throw new ApiError(constants.errorTypes.notFound);
    }
    return this.getById(codigo);
  }

  public async delete(codigo: string): Promise<string> {
    const ticket = await this.repository.delete(codigo);

    if (ticket !== 1) {
      throw new ApiError(constants.errorTypes.notFound);
    }
    return 'Ticket deleted with success';
  }
}
