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
    cod_evento: number,
    cod_atracao: number
}

@Table({
    timestamps: true,
    tableName: 'attraction_event',
})


class Attraction extends Model<AttractionAttributes> {
    @PrimaryKey
    @AllowNull(false)
    @Unique
    @Column
    cod_evento: number;

    @PrimaryKey
    @AllowNull(false)
    @Unique
    @Column
    cod_atracao: number;

    @CreatedAt
    @Column
    created_at: Date;
  
    @UpdatedAt
    @Column
    updated_at: Date;

  }
  
  export default Attraction;
  