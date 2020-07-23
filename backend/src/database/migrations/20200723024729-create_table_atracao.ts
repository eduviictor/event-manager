const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('atracao', {
      codigo: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      horario_fim: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      horario_inicio: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      descrição: {
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
    await queryInterface.dropTable('atracao');
  }
};
