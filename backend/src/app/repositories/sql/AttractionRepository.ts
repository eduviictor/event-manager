import '../../../database';

import Attraction, { AttractionAttributes } from '../../models/Attraction';

export default class AttractionRepository { 
    protected formatter: any = Object;

    public async create(model: AttractionAttributes): Promise<Attraction> {
        const { codigo, email, nome, telefone, horario_fim, horario_inicio, descricao } = model;        
    
        const attraction = await Attraction.create({
          codigo,
          email,
          nome,
          telefone,
          horario_fim, 
          horario_inicio, 
          descricao,
        });
        return new this.formatter(attraction);
      }

    public async update(
        codigo: number,
        model: AttractionAttributes
      ): Promise<[number, Attraction[]]> {
        const { email, nome, telefone, horario_fim, horario_inicio, descricao  } = model;
        const attraction = await Attraction.update(
          { codigo: model.codigo, email, nome, telefone, horario_fim, horario_inicio, descricao },
          { where: { codigo } }
        );
    
        return attraction;
    }

    public async delete(codigo: number): Promise<number> {
        const attraction = await Attraction.findOne({ where: { codigo } });
    
        if (!attraction) {
          return 0;
        }
    
        return Attraction.destroy({ where: { codigo: attraction.codigo } });
      }
    
      public async find(): Promise<Attraction[]> {
        return (await Attraction.findAll()).map((item) => new this.formatter(item));
      }
    
      public async findOne<T>(codigo: number): Promise<Attraction> {
        return Attraction.findByPk(codigo);
      }
}