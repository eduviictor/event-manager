import { AttractionAttributes } from '../models/Attraction';
import * as yup from 'yup';
import { ApiError } from '../../config/ErrorHandler';
import constants from '../../config/constants';


export default class AttractionValidator {
  public async create(body: AttractionAttributes) {
    const schema = yup.object().shape({
      codigo: yup.number().required(),
      nome: yup.string().required(),
      email: yup.string().email().required(),
      telefone: yup.string().required(),
      horario_fim: yup.string().required(),
      horario_inicio: yup.string().required(),
      descricao: yup.string().required(),
            
    });

    const result = await schema.isValid(body);

    if (!result) {
      throw new ApiError(constants.errorTypes.validation);
    }
  }
  public async update(body: AttractionAttributes) {
    const schema = yup.object().shape({
        codigo: yup.number().required(),
        nome: yup.string().required(),
        email: yup.string().email().required(),
        telefone: yup.string().required(),
        horario_fim: yup.string().required(),
        horario_inicio: yup.string().required(),
        descricao: yup.string().required(),
    });

    const result = await schema.isValid(body);

    if (!result) {
      throw new ApiError(constants.errorTypes.validation);
    }
  }
 
}
