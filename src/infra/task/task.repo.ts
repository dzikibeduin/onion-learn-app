import { Task } from 'core/task/task.entity';
import { TaskRepo } from '../../core/task/task.repo';
import { PrismaClient } from '@prisma/client';
import { RawTask } from 'core/task/task.types';

export class PrismaTaskRepo implements TaskRepo {
  private databaseConnection = new PrismaClient();

  public async findById(id: string): Promise<Task> {
    const existingTask = await this.databaseConnection.task.findUnique({
      where: {
        id: Number(id),
      },
    });

    return Task.asObject(JSON.parse(JSON.stringify(existingTask)) as RawTask);
  }

  public async save(task: Task): Promise<void> {
    const { id, ...data } = task.toJson();

    await this.databaseConnection.task.create({
      data: {
        id: Number(id),
        title: data.title,
        description: data.description,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        authorId: Number(data.author.id),
        status: data.status,
      },
    });
  }

  public async findAll(): Promise<Task[]> {
    const tasks = await this.databaseConnection.task.findMany();

    const promisingTasks = await Promise.all(
      tasks.map(async (task) => {
        return await Task.asObject(JSON.parse(JSON.stringify(task)) as RawTask);
      }),
    );

    return promisingTasks;
  }
}
