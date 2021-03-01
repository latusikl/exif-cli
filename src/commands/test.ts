import Command from "../api/command";
import {CommandArg} from "../api/command-arg";

class Test extends Command {
    constructor() {
        super([],"Short description");
    }

    execute(commandArgs: Map<string, string | undefined>): void {
        console.log(commandArgs);
    }

    describe(): string {
        return "";
    }

    getParameterByName(shortName: string, longName: string): CommandArg {
        return {
            description: "",
            longName: "",
            required: false,
            shortName: "",
            validator(value: string): boolean {
                return false;
            },
        };
    }

    getRequiredParameters(): CommandArg[] {
        return [];
    }
}

export default new Test()
