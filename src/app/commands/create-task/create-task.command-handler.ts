import { TaskRepo } from 'core/task/task.repo';
import { TaskStatus } from 'core/task/task.types';
import { CreateTaskCommand } from './create-task.command';
import { Task } from 'core/task/task.entity';

interface Dependencies {
  taskRepository: TaskRepo;
}

export class CreateTaskCommandHandler {
  private readonly taskRepository: TaskRepo;

  constructor(dependencies: Dependencies) {
    this.taskRepository = dependencies.taskRepository;
  }

  public async execute(command: CreateTaskCommand): Promise<Task> {
    const taskProps = {
      authorId: command.authorId,
      title: command.title,
      description: command.description,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: TaskStatus.OPEN,
    };

    const task = await Task.create(taskProps);

    await this.taskRepository.save(task);

    return task;
  }
}
