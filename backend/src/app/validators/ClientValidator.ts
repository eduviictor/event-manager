import { ClientAttributesBody } from '../models/Client';
import * as yup from 'yup';
import { ApiError } from '../../config/ErrorHandler';
import constants from '../../config/constants';

export default class ClientValidator {
  public async create(body: ClientAttributesBody) {
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
