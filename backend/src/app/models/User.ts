import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  Default,
} from 'sequelize-typescript';

export interface UserAttributesBody {
  nome: string;
  email: string;
  senha: string;
  nivel_acesso: number;
}

export interface UserAttributes extends UserAttributesBody {
  codigo: number;
}

@Table({
  timestamps: true,
  tableName: 'users',
})
class User extends Model<UserAttributes> {
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
  email: string;

  @AllowNull(false)
  @Column
  senha: string;

  @AllowNull(false)
  @Default(1)
  @Column
  nivel_acesso: number;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}

export default User;
