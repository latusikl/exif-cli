import { Execute } from "./execute";
import { Describe } from "./describe";
import { Parametrize } from "./parametrize";
import { CommandArg } from "./command-arg";
import print from "../util/print";

export default abstract class Command
  implements Execute, Describe, Parametrize {
  private readonly helpParamShort = "-h";
  private readonly helpParamLong = "--help";
  protected readonly commandName: string;
  protected readonly commandDescription: string;
  protected readonly commandArgs: CommandArg[];

  protected constructor(
    commandName: string,
    commandDescription: string,
    definedCommandArgs: CommandArg[]
  ) {
    this.commandName = commandName;
    this.commandDescription = commandDescription;
    this.commandArgs = definedCommandArgs;
  }

  execute(inputCommandArgs: Map<string, string | undefined>): void {
    console.log("Common execution part");
    this.executeInternal(inputCommandArgs);
  }

  protected abstract executeInternal(
    commandArgs: Map<string, string | undefined>
  ): void;

  private isParamWithRestrictedNameExplicitlyDefined(
    commandArgs: CommandArg[]
  ): boolean {
    return (
      commandArgs.filter(
        (arg) =>
          arg.shortName === this.helpParamShort ||
          arg.longName === this.helpParamLong
      ).length === 0
    );
  }

  describeCommand(): void {
    print.commandUsage(this.commandName);
    print.commandDescribe(this.commandDescription);
    print.commandOptionsDescribe(this.commandArgs);
  }

  getRequiredParameters(): CommandArg[] {
    return this.commandArgs.filter((commandArg) => commandArg.required);
  }

  getParameterByLongName(longName: string): CommandArg | undefined {
    return this.commandArgs.filter((arg) => arg.longName === longName).pop();
  }

  getParameterByShortName(shortName: string): CommandArg | undefined {
    return this.commandArgs.filter((arg) => arg.shortName === shortName).pop();
  }

  isHelpRequest(): boolean {
    return this.isParamWithRestrictedNameExplicitlyDefined(this.commandArgs);
  }
}
