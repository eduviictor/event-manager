'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('events', 'codLocal');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('events', 'codLocal', Sequelize.INTEGER);
  },
};

