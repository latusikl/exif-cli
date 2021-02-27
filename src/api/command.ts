import { Execute } from "./execute";
import { CommandArg } from "./command-arg";

export default abstract class Command implements Execute {
  abstract execute(commandArgs: CommandArg[]): void;
}

