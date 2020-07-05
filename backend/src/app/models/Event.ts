// import { Model, DataTypes } from 'sequelize';
// import database from '../../database';

interface EventAttributes {
  codigo: number;
  codEmpresa: number;
  codAtracao: number;
  codLocal: number;
  codOrcamento: number;
  codIngresso: number;
  dados: string;
  horario: string;
}

// class Event extends Model<EventAttributes> implements EventAttributes {
//   public codigo!: number;
//   public codEmpresa!: number;
//   public codAtracao!: number;
//   public codLocal!: number;
//   public codOrcamento!: number;
//   public codIngresso!: number;
//   public dados!: string;
//   public horario!: string;
// }

// Event.init(
//   {
//     codigo: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//       allowNull: false,
//     },
//     codEmpresa: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     codAtracao: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     codLocal: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     codOrcamento: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     codIngresso: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     dados: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     horario: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize: database.connection,
//     tableName: 'events',
//   }
// );

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
