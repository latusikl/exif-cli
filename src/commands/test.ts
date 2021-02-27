import Command from "../api/command";

class Test extends Command {
    execute(commandArgs: Map<string, string | undefined>): void {
        console.log(commandArgs);
    }
}

export default new Test()
