import { Execute } from "./execute";

export default abstract class Command implements Execute {
  abstract execute(commandArgs: Map<string, string | undefined>): void;
}

