import { TypeAttributesBody } from '../models/Type';
import * as yup from 'yup';
import { ApiError } from '../../config/ErrorHandler';
import constants from '../../config/constants';

export default class TypeValidator {
  public async create(body: TypeAttributesBody) {
    const schema = yup.object().shape({
        nome: yup.string().required(),
    });

    const result = await schema.isValid(body);

    if (!result) {
      throw new ApiError(constants.errorTypes.validation);
    }
  }
  public async update(body: TypeAttributesBody) {
    const schema = yup.object().shape({
        nome: yup.string().required(),
    });

    const result = await schema.isValid(body);

    if (!result) {
      throw new ApiError(constants.errorTypes.validation);
    }
  }
}
