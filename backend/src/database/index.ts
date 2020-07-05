import { Sequelize } from 'sequelize';
const databaseConfig = require('../config/database');

class Database {
  public connection: Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize(JSON.stringify(databaseConfig));
  }
}

const database: Database = new Database();

export default database;
