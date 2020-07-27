require('dotenv/config');
const path = require('path');

module.exports = {
  dialect: 'postgres',
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  storage: ':memory:',
  port: 5432,
  logging: false
};
