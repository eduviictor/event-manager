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

export interface OrganizerAttributes {
  cnpj: string;
  nome: string;
  email: string;
  telefone: string;
  login: string;
}

export interface OrganizerAttributesBody extends OrganizerAttributes {
  senha: string;
}

@Table({
  timestamps: true,
  tableName: 'organizers',
})
class Organizer extends Model<OrganizerAttributes> {
  @PrimaryKey
  @AllowNull(false)
  @Unique
  @Column
  cnpj: string;

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
  @Unique
  @BelongsTo(() => User, {
    as: 'loginOrganizer',
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

export default Organizer;
