import { Ticket_TypeAttributes } from '../models/Ticket_Type';
import * as yup from 'yup';
import { ApiError } from '../../config/ErrorHandler';
import constants from '../../config/constants';

export default class Ticket_TypeValidator {
  public async create(body: Ticket_TypeAttributes) {
    const schema = yup.object().shape({
        cod_ingresso: yup.number().required(),
        cod_tipo: yup.number().required(),
    });

    const result = await schema.isValid(body);

    if (!result) {
      throw new ApiError(constants.errorTypes.validation);
    }
  }
  public async update(body: Ticket_TypeValidator) {
    const schema = yup.object().shape({
      cpf: yup.string().required(),
      email: yup.string().email().required(),
      cidade: yup.string().required(),
      estado: yup.string().required(),
      nome: yup.string().required(),
      senha: yup.string().required(),
      telefone: yup.string().required(),
    });

    const result = await schema.isValid(body);

    if (!result) {
      throw new ApiError(constants.errorTypes.validation);
    }
  }
}
