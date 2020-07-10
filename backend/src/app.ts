import express, { Response as ExResponse, Request as ExRequest } from 'express';
import cors from 'cors';
import { RegisterRoutes } from '../dist/routes';
import swaggerUi from 'swagger-ui-express';

import './database';
import { ErrorHandler } from './config/ErrorHandler';

class App {
  public server: express.Express;

  public constructor() {
    this.server = express();

    this.middlewares();
    this.routes();

    this.server.use(ErrorHandler.handleError);
  }

  private middlewares(): void {
    this.server.use(express.json());
    this.server.use(cors());

    // this.server.use(function errorHandler(
    //   err: unknown,
    //   req: ExRequest,
    //   res: ExResponse,
    //   next: NextFunction
    // ): ExResponse | void {
    //   if (err instanceof ValidateError) {
    //     console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
    //     return res.status(422).json({
    //       message: 'Validation Failed',
    //       details: err?.fields,
    //     });
    //   }
    //   if (err instanceof Error) {
    //     return res.status(500).json({
    //       message: 'Internal Server Error',
    //     });
    //   }

    //   next();
    // });

    console.log('opa');
  }

  private routes(): void {
    this.server.use(
      '/docs',
      swaggerUi.serve,
      async (_req: ExRequest, res: ExResponse) => {
        return res.send(
          swaggerUi.generateHTML(await import('../dist/swagger.json'))
        );
      }
    );

    RegisterRoutes(this.server);
  }
}

export default new App().server;
