import { Model, DataTypes } from 'sequelize';
import database from '../../database';

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

class Event extends Model<EventAttributes> implements EventAttributes {
  public codigo!: number;
  public codEmpresa!: number;
  public codAtracao!: number;
  public codLocal!: number;
  public codOrcamento!: number;
  public codIngresso!: number;
  public dados!: string;
  public horario!: string;
}

Event.init(
  {
    codigo: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    codEmpresa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    codAtracao: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    codLocal: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    codOrcamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    codIngresso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dados: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    horario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database.connection,
    tableName: 'events',
  }
);

// class Event extends Model<EventAttributes> implements EventAttributes {
//   static init(sequelize: Sequelize.Sequelize) {
//     super.init.call(
//       {
//         codigo: {
//           type: Sequelize.INTEGER,
//           primaryKey: true,
//           autoIncrement: true,
//         },
//         codEmpresa: Sequelize.INTEGER,
//         codAtracao: Sequelize.INTEGER,
//         codLocal: Sequelize.INTEGER,
//         codOrcamento: Sequelize.INTEGER,
//         codIngresso: Sequelize.INTEGER,
//         dados: Sequelize.STRING,
//         horario: Sequelize.STRING,
//       },
//       {
//         sequelize,
//       }
//     );
//     return this;
//   }
// }

export default Event;
