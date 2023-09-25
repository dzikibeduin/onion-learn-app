import { Task } from "./task.entity";

export interface TaskRepo {
  findById: (id: string) => Promise<Task>;
  save: (task: Task) => Promise<void>;
  findAll: () => Promise<Task[]>;
}
