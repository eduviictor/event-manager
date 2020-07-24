module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('events', 'dados');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('events', 'dados', Sequelize.STRING);
  },
};