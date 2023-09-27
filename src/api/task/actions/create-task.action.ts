import { CreateTaskCommand } from '../../../app/commands/create-task/create-task.command';
import { CommandBus } from '../../../base/command-bus';
import { RequestHandler } from 'express';

interface Dependencies {
  commandBus: CommandBus;
}

const createNewTaskAction =
  ({ commandBus }: Dependencies): RequestHandler =>
  (req, res, next) =>
    commandBus
      .execute(new CreateTaskCommand(req.body.title, req.body.description, req.body.userId))
      .then((task) => res.status(201).json(task))
      .catch(next);

export default createNewTaskAction;
