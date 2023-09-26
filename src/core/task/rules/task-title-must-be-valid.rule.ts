import { BusinessRule } from "../../../../base/business-rule";

export class TaskTitleMustBeValidRule implements BusinessRule {
  constructor(private readonly title: string) {}

  public message = "Task title must be valid.";

  public isBroken() {
    return this.title.length < 3;
  }
}
