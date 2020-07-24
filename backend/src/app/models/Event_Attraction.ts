import {
    Table,
    Column,
    Model,
    PrimaryKey,
    AllowNull,
    Unique,
} from 'sequelize-typescript';


export interface Event_AttractionAttributes {
    cod_evento: number;
    cod_atracao: number;    
}

@Table({
    timestamps: true,
    tableName: 'attraction_event',
})


class Event_Attraction extends Model<Event_AttractionAttributes> {
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
  
  }
  
  export default Event_Attraction;
  