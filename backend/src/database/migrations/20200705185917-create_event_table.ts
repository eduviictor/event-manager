const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('events', {
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('events');
  },
};
