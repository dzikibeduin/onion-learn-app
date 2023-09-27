import { Router } from 'express';
import createTaskAction from './actions/create-task.action';

export class TasksController {
  public readonly route = '/tasks';

  public getRouter(): Router {
    const router = Router();

    router.post(this.route, createTaskAction);

    return router;
  }
}
