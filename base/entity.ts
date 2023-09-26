import { BusinessRule } from "./business-rule";

export abstract class Entity<T> {
  constructor(
    protected readonly props: T, 
    protected readonly id: string | null
  ) {}

  protected static validate(rule: BusinessRule): void {
    if (rule.isBroken()) {
      throw new Error(rule.message);
    }
  }

  public equals(object: Entity<T>): boolean {
    if (object == null || object == undefined) {
      return false;
    } 
    return this.id === object.id;
  }
}
