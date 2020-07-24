module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('events', 'codEmpresa');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('events', 'codEmpresa', Sequelize.INTEGER);
  },
};