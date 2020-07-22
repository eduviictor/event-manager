import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  Unique,
  BelongsTo,
} from 'sequelize-typescript';
import User from './User';

export interface ClientAttributes {
  cpf: string;
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  estado: string;
  login: string;
}

export interface ClientAttributesBody extends ClientAttributes {
  senha: string;
}

@Table({
  timestamps: true,
  tableName: 'clients',
})
class Client extends Model<ClientAttributes> {
  @PrimaryKey
  @AllowNull(false)
  @Unique
  @Column
  cpf: string;

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
  cidade: string;

  @AllowNull(false)
  @Column
  estado: string;

  @AllowNull(false)
  @Unique
  @BelongsTo(() => User, {
    as: 'loginClient',
    onDelete: 'CASCADE',
    foreignKey: 'login',
  })
  @Column
  login: string;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}

export default Client;
