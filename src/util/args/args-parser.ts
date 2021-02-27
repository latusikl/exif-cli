import { CommandArg } from "../../api/command-arg";

class ArgsParser {
  private longPrefix = "--";
  private shortPrefix = "-";

  parseCommandParameters(argv: string[]): CommandArg[] {
    //TODO implement
    return [
      {
        name: "param1",
        value: "Parser not implemented yet.",
      },
    ];
  }

  private isParamName(argValue: string) {
    return (
      argValue.startsWith(this.longPrefix) ||
      argValue.startsWith(this.shortPrefix)
    );
  }
}

export default new ArgsParser();
