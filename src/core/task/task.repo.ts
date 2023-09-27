import { Task } from './task.entity';

export interface TaskRepo {
  findById(id: string): Promise<Task | null>;
  save(task: Task): Promise<void>;
  findAll(): Promise<Task[]>;
}
