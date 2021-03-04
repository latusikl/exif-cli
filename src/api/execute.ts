export interface Execute {
  execute(inputCommandArgs: Map<string, string | undefined>): void;
}
