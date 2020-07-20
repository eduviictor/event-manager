'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('events', 'codIngresso');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('events', 'codIngresso', Sequelize.INTEGER);
  },
};

