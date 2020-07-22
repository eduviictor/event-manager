import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  CreatedAt,
  UpdatedAt,
  Unique,
} from 'sequelize-typescript';

export interface UserAttributes {
  login: string;
  senha: string;
}

@Table({
  timestamps: true,
  tableName: 'users',
})
class User extends Model<UserAttributes> {
  @PrimaryKey
  @AllowNull(false)
  @Unique
  @Column
  login: string;

  @AllowNull(false)
  @Column
  senha: string;

  @CreatedAt
  @Column
  created_at: Date;

  @UpdatedAt
  @Column
  updated_at: Date;
}

export default User;
