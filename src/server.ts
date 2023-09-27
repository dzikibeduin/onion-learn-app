import { TasksController } from './api/task/tasks.controller';
import cors from 'cors';
import express, { Application } from 'express';

interface Dependencies {
  controllers: any[];
}

class Server {
  private app: Application;

  constructor(private readonly dependencies: Dependencies) {
    this.app = express();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors);

    this.dependencies.controllers.forEach((controller) => {
      this.app.use(controller.route, controller.getRouter());
    });
  }

  public listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  }
}

const server = new Server({ controllers: [new TasksController()] });

server.listen(Number(process.env.PORT) || 3000);
