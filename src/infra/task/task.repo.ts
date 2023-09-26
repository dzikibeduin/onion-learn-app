import { Task } from 'core/task/task.entity';
import { TaskRepo } from '../../core/task/task.repo';
import { PrismaClient } from '@prisma/client';

export class PrismaTaskRepo implements TaskRepo {

  private databaseConnection = new PrismaClient();

  public async findById(id: string): Promise<Task> {
    const existingTask = await this.databaseConnection.task.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!existingTask) {
      throw new Error('Task not found');
    }

    // todo: map to domain entity
    return Task.asObject(JSON.parse(existingTask));
  }

  public async save(task: Task): Promise<void> {
    const { id, ...data } = task.toJson();

    await this.databaseConnection.task.create({
      data: {
        id: Number(id)
        // todo: map to prisma entity
      },
    });
  }

  public async findAll(): Promise<Task[]> {
    const tasks = await this.databaseConnection.task.findMany();

    // todo: map to domain entities
    return tasks.map(Task.asObject);
  }

}
