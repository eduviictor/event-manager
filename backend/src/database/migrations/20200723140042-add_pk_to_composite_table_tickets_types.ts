'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('ALTER TABLE "tickets_types" ADD CONSTRAINT "tickets_types_constraint" PRIMARY KEY ("cod_ingresso", "cod_tipo")');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query('ALTER TABLE "tickets_types" DROP CONSTRAINT "tickets_types_constraint"');
  }
};
