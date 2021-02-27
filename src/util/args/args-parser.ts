class ArgsParser {
  private LONG_PREFIX = "--";
  private SHORT_PREFIX = "-";
  private MAX_PARAM_LENGTH = 20;
  private INVALID_PARAM_MSG =
    "Invalid parameters. Missing parameter name for parameter.";

  parseCommandParameters(argv: string[]): Map<string, string | undefined> {
    this.throwIfMaxParamNumberExceeded(argv.length);
    return this.extractParams(argv);
  }

  private isParamName(argValue?: string) {
    return argValue
      ? argValue.startsWith(this.LONG_PREFIX) ||
          argValue.startsWith(this.SHORT_PREFIX)
      : false;
  }

  private throwIfMaxParamNumberExceeded(amountOfParams: number) {
    if (amountOfParams > this.MAX_PARAM_LENGTH) {
      throw new Error("Maximum amount of params exceeded.");
    }
  }

  private extractParams(argv: string[]): Map<string, string | undefined> {
    const paramMap = new Map<string, string | undefined>();
    for (let i = 0; i < argv.length; i++) {
      const val = argv[i];
      if (this.isParamName(val) && !paramMap.has(val)) {
        paramMap.set(
          val,
          this.isParamName(argv[i + 1]) ? undefined : argv[++i]
        );
      } else {
        throw new Error(this.INVALID_PARAM_MSG);
      }
    }
    return paramMap;
  }
}

export default new ArgsParser();
