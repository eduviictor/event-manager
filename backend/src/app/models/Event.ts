export interface EventAttributesBody {
  nome: string;
  descricao: string;
  horario_inicio: string;
  horario_fim: string;
}

export interface EventAttributes extends EventAttributesBody {
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
} from 'sequelize-typescript';

@Table({
  timestamps: true,
  tableName: 'events',
})
class Event extends Model<EventAttributes> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  codigo: number;

  @AllowNull(false)
  @Column
  nome: string;

  @AllowNull(false)
  @Column
  descricao: string;

  @AllowNull(false)
  @Column
  horario_inicio: string;

  @AllowNull(false)
  @Column
  horario_fim: string;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}

export default Event;
