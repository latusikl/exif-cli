export interface Execute {
  execute(commandArgs: Map<string, string | undefined>): void;
}
