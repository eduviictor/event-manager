import { Sequelize } from 'sequelize-typescript';
import Event from '../app/models/Event';
const databaseConfig = require('../config/database');

const models = [Event];

class Database {
  public connection: Sequelize;

  constructor() {
    this.init();
  }

  init(): void {
    this.connection = new Sequelize(databaseConfig);
    this.connection.addModels(models);
  }
}

const database: Database = new Database();

export default database;
