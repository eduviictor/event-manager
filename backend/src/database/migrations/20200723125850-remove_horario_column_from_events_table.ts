module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('events', 'horario');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('events', 'horario', Sequelize.STRING);
  },
};