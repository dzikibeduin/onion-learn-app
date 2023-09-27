import { CreateTaskPayload, RawTask, TaskProps, TaskStatus } from './task.types';
import { Entity } from '../../../base/entity';
import { TaskTitleMustBeValidRule } from './rules/task-title-must-be-valid.rule';

export class Task extends Entity<TaskProps> {
  private constructor(props: TaskProps, id?: string) {
    super(props, id ? id : null);
  }

  public static create({ authorId, title, description }: CreateTaskPayload) {
    Task.validate(new TaskTitleMustBeValidRule(title));

    return new Task({
      title,
      description,
      author: { id: authorId, email: '' },
      createdAt: new Date(),
      updatedAt: new Date(),
      status: TaskStatus.OPEN,
    });
  }

  public static asObject({ id, author, createdAt, updatedAt, ...data }: RawTask) {
    return new Task(
      {
        ...data,
        author: { id: author.id, email: author.email },
        createdAt: new Date(createdAt),
        updatedAt: new Date(updatedAt),
      },
      id,
    );
  }

  // todo: id should be present, add author entity
  public toJson(): RawTask {
    return {
      id: this.id ? this.id : '',
      title: this.props.title,
      description: this.props.description,
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt,
      status: this.props.status,
      author: { id: this.props.author.id, email: '' },
    };
  }
}
