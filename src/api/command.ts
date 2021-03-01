import { Execute } from "./execute";
import { Describe } from "./describe";
import { Parametrize } from "./parametrize";
import { CommandArg } from "./command-arg";

export default abstract class Command
  implements Execute, Describe, Parametrize {
  constructor(commandArgs: CommandArg[], commandDescription: string) {
    this.commandArgs = commandArgs;
    this.commandDescription = commandDescription;
  }

  protected commandArgs: CommandArg[];
  protected commandDescription: string;

  abstract execute(commandArgs: Map<string, string | undefined>): void;

  abstract describe(): string;

  abstract getParameterByName(shortName: string, longName: string): CommandArg;

  abstract getRequiredParameters(): CommandArg[];
}
