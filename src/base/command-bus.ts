export interface CommandBus {
  execute(command: any): Promise<unknown>;
}
