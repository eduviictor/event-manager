import { Sequelize } from 'sequelize-typescript';
import Event from '../app/models/Event';
import User from '../app/models/User';
import Client from '../app/models/Client';
const databaseConfig = require('../config/database');

const models = [Event, User, Client];

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
