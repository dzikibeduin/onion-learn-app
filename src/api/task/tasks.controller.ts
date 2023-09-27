import { Router } from 'express';
import createTaskAction from './actions/create-task.action';
import getAllTasksAction from './actions/get-all-tasks.action';
import { Controller } from 'base/controller';

class TasksController implements Controller {
  public readonly route = '/';

  public getRouter(): Router {
    const router = Router();

    router.get(this.route, (req, res) => {
      res.send('Hello Worldddd!');
    });

    router.post(this.route, createTaskAction);

    return router;
  }
}

export default TasksController;
