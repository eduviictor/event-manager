export interface EventAttributesBody {
  codEmpresa: number;
  codAtracao: number;
  codLocal: number;
  codOrcamento: number;
  codIngresso: number;
  dados: string;
  horario: string;
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
  codEmpresa: number;

  @AllowNull(false)
  @Column
  codAtracao: number;

  @AllowNull(false)
  @Column
  codLocal: number;

  @AllowNull(false)
  @Column
  codOrcamento: number;

  @AllowNull(false)
  @Column
  codIngresso: number;

  @AllowNull(false)
  @Column
  dados: string;

  @AllowNull(false)
  @Column
  horario: string;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}

export default Event;
