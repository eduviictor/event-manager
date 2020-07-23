export interface Ticket_TypeAttributes {
  cod_ingresso: number;
  cod_tipo: number;
}

import {
  Table,
  Column,
  Model,
  AllowNull,
  ForeignKey,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

import Ticket from './Ticket';
import Type from './Type';

@Table({
  timestamps: true,
  tableName: 'tickets_types',
})
class Ticket_Type extends Model<Ticket_TypeAttributes> {
  @PrimaryKey
  @ForeignKey(() => Ticket)
  @AllowNull(false)
  @Column
  cod_ingresso: number;
  
  @ForeignKey(() => Type)
  @AllowNull(false)
  @Column
  cod_tipo: number;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}

export default Ticket_Type;
