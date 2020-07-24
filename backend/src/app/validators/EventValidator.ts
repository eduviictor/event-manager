import { EventAttributesBody } from '../models/Event';
import * as yup from 'yup';
import { ApiError } from '../../config/ErrorHandler';
import constants from '../../config/constants';


export default class EventValidator {
  public async create(body: EventAttributesBody) {
    const schema = yup.object().shape({
      nome: yup.string().required(),
      descricao: yup.string().required(),
      horario_inicio: yup.string().required(),
      horario_fim: yup.string().required(),
    });

    const result = await schema.isValid(body);

    if (!result) {
      throw new ApiError(constants.errorTypes.validation);
    }
  }
  public async update(body: EventAttributesBody) {
    const schema = yup.object().shape({
        nome: yup.string().required(),
        descricao: yup.string().required(),
        horario_inicio: yup.string().required(),
        horario_fim: yup.string().required(),
    });

    const result = await schema.isValid(body);

    if (!result) {
      throw new ApiError(constants.errorTypes.validation);
    }
  }
}
