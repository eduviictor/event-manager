import AttractionRepository from '../repositories/sql/AttractionRepository';
import Attraction, { AttractionAttributes } from '../models/Attraction';
import { ApiError } from '../../config/ErrorHandler';
import constants from '../../config/constants';
import AttractionValidator from '../validators/AttractionValidator';

export default class AttractionService { 
    repository: AttractionRepository = new AttractionRepository();
    validator: AttractionValidator = new AttractionValidator();

    public async findAll(): Promise<Attraction[]> {
        return this.repository.find();
    }

    public async getById(codigo: number): Promise<Attraction> {
        const attraction = await this.repository.findOne(codigo);
        if (!attraction) {
          throw new ApiError(constants.errorTypes.notFound);
        }
    
        return attraction;
    }

    public async create(entity: AttractionAttributes): Promise<Attraction> {
      await this.validator.create(entity);  
      const { codigo } = entity;
        const codigoExists = await this.repository.findOne(codigo);
    
        if (codigoExists) {
          throw new ApiError(constants.errorTypes.alreadyExists);
        }
    
        const attractionExists = await Attraction.findOne({ where: { codigo } });
    
        if (attractionExists) {
          throw new ApiError(constants.errorTypes.alreadyExists);
        }
    
        try {
          return this.repository.create(entity);
        } catch (err) {
          throw new ApiError(constants.errorTypes.db);
        }
    }

    public async update(
        codigo: number,
        entity: AttractionAttributes
      ): Promise<Attraction> {
    
        const attraction = await this.repository.update(codigo, entity);
    
        if (attraction[0] !== 1) {
          throw new ApiError(constants.errorTypes.notFound);
        }
        return this.getById(codigo);
    }

    public async delete(codigo: number): Promise<string> {
        const attraction = await this.repository.delete(codigo);
    
        if (attraction !== 1) {
          throw new ApiError(constants.errorTypes.notFound);
        }
    
        return 'Attraction deleted with success';
    }
    
    
}
