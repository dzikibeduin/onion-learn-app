import { CreateTaskPayload, TaskProps, TaskStatus } from "./task.types";
import { Entity } from "../../../base/entity";

export class Task extends Entity<TaskProps> {
  private constructor(props: TaskProps, id?: string) {
    super(props, id ? id : null);
  }

  public static create({ authorId, title, description }: CreateTaskPayload)  {
    return new Task(
      {
        title,
        description,
        authorId,
        createdAt: new Date(),
        updatedAt: new Date(),
        status: TaskStatus.OPEN,
      }
    );
  }
}
