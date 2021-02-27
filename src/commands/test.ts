import {CommandArg} from "../api/command-arg";
import Command from "../api/command";

class Test extends Command {
    execute(commandArgs: CommandArg[]): void {
        console.log(commandArgs);
    }
}

export default new Test()
