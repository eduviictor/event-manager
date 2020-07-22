const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tickets_types', {
      cod_tipo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'types',
          key: 'codigo',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      cod_ingresso: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tickets',
          key: 'codigo',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
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
    await queryInterface.dropTable('tickets_types');
  },
};