import express from 'express';
import cors from 'cors';
import path from 'path';

import './database';

import routes from './routes';

class App {
  public server: express.Express;

  public constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.server.use(express.json());
    this.server.use(cors());

    console.log('opa');
  }

  private routes(): void {
    this.server.use(
      '/docs',
      express.static(path.resolve(__dirname, '..', 'docs-api'))
    );
    this.server.use(routes);
  }
}

export default new App().server;
