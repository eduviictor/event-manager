import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AllowNull,
    CreatedAt,
    UpdatedAt,
    Unique,
} from 'sequelize-typescript';


export interface AttractionAttributes {
    codigo: number;
    nome: string;
    email: string;
    telefone: string;
    horario_fim: string;
    horario_inicio: string;
    descricao: string;
}

@Table({
    timestamps: true,
    tableName: 'attraction',
})


class Attraction extends Model<AttractionAttributes> {
    @PrimaryKey
    @AllowNull(false)
    @Unique
    @Column
    codigo: number;
  
    @AllowNull(false)
    @Column
    nome: string;
  
    @AllowNull(false)
    @Unique
    @Column
    email: string;
  
    @AllowNull(false)
    @Column
    telefone: number;
  
    @AllowNull(false)
    @Column
    horario_fim: string;

    @AllowNull(false)
    @Column
    horario_inicio: string;
    
    @AllowNull(false)
    @Column
    descricao: string;
  
    @CreatedAt
    @Column
    created_at: Date;
  
    @UpdatedAt
    @Column
    updated_at: Date;

  }
  
  export default Attraction;
  