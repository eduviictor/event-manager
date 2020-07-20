'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('events', 'codOrcamento');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('events', 'codOrcamento', Sequelize.INTEGER);
  },
};

