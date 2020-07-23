const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tickets', {
      codigo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      valor: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      cod_evento: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'events',
          key: 'codigo',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tickets');
  },
};