import { Sequelize } from 'sequelize-typescript';
import Event from '../app/models/Event';
import User from '../app/models/User';
import Client from '../app/models/Client';
import Organizer from '../app/models/Organizer';
const databaseConfig = require('../config/database');

const models = [Event, User, Client, Organizer];

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
