export interface TicketAttributesBody {
  valor: number;
  quantidade: number;
  cod_evento: number;
}

export interface TicketAttributes extends TicketAttributesBody {
  codigo: number;
}

import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  ForeignKey
} from 'sequelize-typescript';

import Event from './Event';

@Table({
  timestamps: true,
  tableName: 'tickets',
})
class Ticket extends Model<TicketAttributes> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  codigo: number;

  @AllowNull(false)
  @Column
  valor: number;

  @AllowNull(false)
  @Column
  quantidade: number;

  @ForeignKey(() => Event)
  @AllowNull(false)
  @Column
  cod_evento: number;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}

export default Ticket;
