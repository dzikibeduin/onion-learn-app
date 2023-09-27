import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express, { Application } from 'express';
import morgan from 'morgan';
import ErrorHandler from './base/error.handler';
import { Controller } from 'base/controller';

export default class App {
  private express: Application;
  public readonly port = Number(process.env.PORT) || 3000;

  constructor(controllers: Controller[]) {
    this.express = express();
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(cors());
    this.express.use(morgan('dev'));
    this.express.use(compression());

    controllers.forEach((controller) => {
      this.express.use(controller.route, controller.getRouter());
    });

    this.express.use(ErrorHandler);
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }
}
