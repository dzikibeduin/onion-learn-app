import TasksController from './api/task/tasks.controller';
import App from './app';

const server = new App([new TasksController()]);

server.listen();
