export interface TypeAttributesBody {
  nome: string
}

export interface TypeAttributes extends TypeAttributesBody {
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
  tableName: 'types',
})
class Type extends Model<TypeAttributes> {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  codigo: number;

  @AllowNull(false)
  @Column
  nome: string;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}

export default Type;
