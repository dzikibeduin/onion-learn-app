export interface CommandBus {
  execute(command: {payload: any}): Promise<unknown>;
}
