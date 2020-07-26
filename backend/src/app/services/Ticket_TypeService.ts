import Ticket_TypeRepository from '../repositories/sql/Ticket_TypeRepository';
import Ticket_Type, { Ticket_TypeAttributes } from '../models/Ticket_Type';
import { ApiError } from '../../config/ErrorHandler';
import constants from '../../config/constants';
import Ticket_TypeValidator from '../validators/Ticket_TypeValidator';


export default class Ticket_TypeService {
  repository: Ticket_TypeRepository = new Ticket_TypeRepository();
  validator: Ticket_TypeValidator = new (Ticket_TypeValidator);

  public async findAll(): Promise<Ticket_Type[]> {
    return this.repository.find();
  }

  public async getById(codigo: string): Promise<Ticket_Type> {
    const ticket_type = await this.repository.findOne(codigo);
    if (!ticket_type) {
      throw new ApiError(constants.errorTypes.notFound);
    }

    return ticket_type;
  }

  public async create(entity: Ticket_Type): Promise<Ticket_Type> {
    await this.validator.create(entity);
    try {
      const res = await this.repository.create(entity);
      return this.getById((res as any).cod_ingresso);
    } catch (err) {
      throw new ApiError(constants.errorTypes.db);
    }
  }

  public async update(codigo: string, entity: Ticket_Type): Promise<Ticket_Type> {
    const ticket_type = await this.repository.update(codigo, entity);

    if (ticket_type[0] !== 1) {
      throw new ApiError(constants.errorTypes.notFound);
    }
    return this.getById(codigo);
  }

  public async delete(codigo: string): Promise<string> {
    const ticket_type = await this.repository.delete(codigo);

    if (ticket_type !== 1) {
      throw new ApiError(constants.errorTypes.notFound);
    }
    return 'Ticket type deleted with success';
  }
}
