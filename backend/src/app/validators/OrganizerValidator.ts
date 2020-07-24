import { OrganizerAttributesBody } from '../models/Organizer';
import * as yup from 'yup';
import { ApiError } from '../../config/ErrorHandler';
import constants from '../../config/constants';

export default class OrganizerValidator {
  public async create(body: OrganizerAttributesBody) {
    const schema = yup.object().shape({
        cnpj: yup.string().required(),
        nome: yup.string().required(),
        email: yup.string().required(),
        telefone: yup.string().required(),
        login: yup.string().required(),
    });

    const result = await schema.isValid(body);

    if (!result) {
      throw new ApiError(constants.errorTypes.validation);
    }
  }
}
