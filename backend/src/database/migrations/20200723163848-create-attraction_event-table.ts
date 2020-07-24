const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {    
    await queryInterface.createTable('attraction_event', {
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
      cod_atracao: {
        type: DataTypes.INTEGER,      
        allowNull: false,
        references: {
          model: 'attraction',
          key: 'codigo',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    }).then(() => {
      return queryInterface.sequelize.query('ALTER TABLE "attraction_event" ADD CONSTRAINT "attraction_event_constraint" PRIMARY KEY ("cod_evento", "cod_atracao")');
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('attraction_event');
  }
};
