import { Task } from 'core/task/task.entity';
import { TaskRepo } from '../../core/task/task.repo';
import { PrismaClient } from '@prisma/client';

interface Dependencies {}

const prisma = new PrismaClient();

export class PrismaTaskRepo implements TaskRepo {

  constructor(private readonly dependencies: Dependencies) {}

  public async findById(id: string): Promise<Task> {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });

    // todo: map to domain entity
    return post;
  }

  public async save(task: Task): Promise<void> {
    await prisma.post.create({
      data: {
        title: task.title,
        description: task.description,
        authorId: task.authorId,
        createdAt: task.createdAt,
        updatedAt: task.updatedAt,
        status: task.status,
      },
    });
  }

  public async findAll(): Promise<Task[]> {
    const posts = await prisma.post.findMany();

    // todo: map to domain entities
    return posts;
  }

}
