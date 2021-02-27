import { CommandArg } from "./command-arg";

export interface Execute {
  execute(commandArgs: CommandArg[]): void;
}
