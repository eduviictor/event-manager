import { TicketAttributesBody } from '../models/Ticket';
import * as yup from 'yup';
import { ApiError } from '../../config/ErrorHandler';
import constants from '../../config/constants';

export default class TicketValidator {
  public async create(body: TicketAttributesBody) {
    const schema = yup.object().shape({
        valor: yup.number().required(),
        quantidade: yup.number().required(),
        cod_evento: yup.number().required(),
    });

    const result = await schema.isValid(body);

    if (!result) {
      throw new ApiError(constants.errorTypes.validation);
    }
  }
  public async update(body: TicketAttributesBody) {
    const schema = yup.object().shape({
        valor: yup.number().required(),
        quantidade: yup.number().required(),
        cod_evento: yup.number().required(),
    });

    const result = await schema.isValid(body);

    if (!result) {
      throw new ApiError(constants.errorTypes.validation);
    }
  }
}
