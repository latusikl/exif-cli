import { Execute } from "./execute";
import { Describe } from "./describe";
import { Parametrize } from "./parametrize";
import { CommandArg } from "./command-arg";
import print from "../util/print";

export default abstract class Command
  implements Execute, Describe, Parametrize {

  protected readonly commandName : string;
  protected readonly commandDescription : string;
  protected readonly commandArgs : CommandArg[];


  constructor(commandName: string, commandDescription: string, commandArgs: CommandArg[]) {
    this.commandName = commandName;
    this.commandDescription = commandDescription;
    this.commandArgs = commandArgs;
  }

  abstract execute(commandArgs: Map<string, string | undefined>): void;

  describeCommand(): void {
    print.commandUsage(this.commandName);
    print.commandDescribe(this.commandDescription);
    print.commandOptionsDescribe(this.commandArgs);
  }

  getRequiredParameters(): CommandArg[] {
    return this.commandArgs.filter((commandArg) => commandArg.required);
  }

  getParameterByLongName(longName: string): CommandArg | undefined {
    return this.commandArgs
      .filter((arg) => arg.longName === longName)
      .pop();
  }

  getParameterByShortName(shortName: string): CommandArg | undefined {
    return this.commandArgs
      .filter((arg) => arg.shortName === shortName)
      .pop();
  }

  isHelpRequest(): boolean {
    return false;
  }
}
