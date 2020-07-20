'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('events', 'codAtracao');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('events', 'codAtracao', Sequelize.INTEGER);
  },
};

