import { AttractionController } from './AttractionController';
import Attraction, { AttractionAttributes } from '../../models/Attraction';

describe('Attraction Controller', () => {
  const attractioncontroller = new AttractionController();

  it('Get all attractions: index()', async () => {
    Attraction.findAll = jest.fn().mockReturnValue([
      {
        codigo: 21212112,
        nome: 'Atração teste',
        email: 'atracaoteste0@mail.com',
        telefone: '84999999999',
        horario_fim: '18:00',
        horario_inicio: '19:00',
        descricao: 'atração teste',
        created_at: '2020-07-23T18:17:22.365Z',
        updated_at: '2020-07-23T18:17:22.365Z'        
      },
    ]);

    const attractions = await attractioncontroller.index();
    expect(Array.isArray(attractions)).toBe(true);
    expect(attractions[0]).toMatchObject({
      codigo: 21212112,
      nome: 'Atração teste',
      email: 'atracaoteste0@mail.com',
      telefone: '84999999999',
      horario_fim: '18:00',
      horario_inicio: '19:00',
      descricao: 'atração teste',
    });
  });

  it('Get one attraction: show()', async () => {
    Attraction.findOne = jest.fn().mockReturnValue({
      codigo: 21212112,
      nome: 'Atração teste',
      email: 'atracaoteste0@mail.com',
      telefone: '84999999999',
      horario_fim: '18:00',
      horario_inicio: '19:00',
      descricao: 'atração teste',
      created_at: '2020-07-23T18:17:22.365Z',
      updated_at: '2020-07-23T18:17:22.365Z' 
    });

    const attraction = await attractioncontroller.show(8);
    expect(attraction).toEqual({
      codigo: 21212112,
      nome: 'Atração teste',
      email: 'atracaoteste0@mail.com',
      telefone: '84999999999',
      horario_fim: '18:00',
      horario_inicio: '19:00',
      descricao: 'atração teste',
      created_at: '2020-07-23T18:17:22.365Z',
      updated_at: '2020-07-23T18:17:22.365Z' 
    });
  });

  it('Create one attraction: store()', async () => {
    Attraction.findOne = jest.fn().mockReturnValue(null);    
    Attraction.create = jest.fn().mockReturnValue({
      codigo: 21212112,
      nome: 'Atração teste',
      email: 'atracaoteste0@mail.com',
      telefone: '84999999999',
      horario_fim: '18:00',
      horario_inicio: '19:00',
      descricao: 'atração teste',
      created_at: '2020-07-23T18:17:22.365Z',
      updated_at: '2020-07-23T18:17:22.365Z' 
    });

    const attractionPost: AttractionAttributes = {
      codigo: 21212112,
      nome: 'Atração teste',
      email: 'atracaoteste0@mail.com',
      telefone: '84999999999',
      horario_fim: '18:00',
      horario_inicio: '19:00',
      descricao: 'atração teste',
    };

    const attraction = await attractioncontroller.store(attractionPost);
    expect(attraction).toMatchObject({
        codigo: 21212112,
        nome: 'Atração teste',
        email: 'atracaoteste0@mail.com',
        telefone: '84999999999',
        horario_fim: '18:00',
        horario_inicio: '19:00',
        descricao: 'atração teste',
    });
  });

  it('Update one attraction: update()', async () => {
    Attraction.findOne = jest.fn().mockReturnValue(null);    
    Attraction.update = jest.fn().mockReturnValue([
      1,
      [
        {  
            codigo: 21212112,
            nome: 'Atração teste',
            email: 'atracaoteste0@mail.com',
            telefone: '84999999999',
            horario_fim: '18:00',
            horario_inicio: '19:00',
            descricao: 'atração teste',
            created_at: '2020-07-23T18:17:22.365Z',
            updated_at: '2020-07-23T18:17:22.365Z'  
        },
      ],
    ]);

    attractioncontroller.service.getById = jest.fn().mockReturnValue({
        codigo: 21212112,
        nome: 'Atração teste',
        email: 'atracaoteste0@mail.com',
        telefone: '84999999999',
        horario_fim: '18:00',
        horario_inicio: '19:00',
        descricao: 'atração teste',
        created_at: '2020-07-23T18:17:22.365Z',
        updated_at: '2020-07-23T18:17:22.365Z' 
    });

    const attractionPut: AttractionAttributes = {
        codigo: 21212112,
        nome: 'Atração teste',
        email: 'atracaoteste0@mail.com',
        telefone: '84999999999',
        horario_fim: '18:00',
        horario_inicio: '19:00',
        descricao: 'atração teste',
    };

    const attraction = await attractioncontroller.update(8, attractionPut);
    expect(attraction).toMatchObject({
        codigo: 21212112,
        nome: 'Atração teste',
        email: 'atracaoteste0@mail.com',
        telefone: '84999999999',
        horario_fim: '18:00',
        horario_inicio: '19:00',
        descricao: 'atração teste',
    });
  });

  it('Delete one attraction: delete()', async () => {  
    Attraction.destroy = jest.fn().mockReturnValue(1);  
    Attraction.findOne = jest.fn().mockReturnValue({
      codigo: 21212112,
      nome: 'Atração teste',
      email: 'atracaoteste0@mail.com',
      telefone: '84999999999',
      horario_fim: '18:00',
      horario_inicio: '19:00',
      descricao: 'atração teste',
      created_at: '2020-07-23T18:17:22.365Z',
      updated_at: '2020-07-23T18:17:22.365Z' 
    });
    

    const deleted = await attractioncontroller.delete(21212112);
    expect(deleted).toEqual('Attraction deleted with success');
  });
});
