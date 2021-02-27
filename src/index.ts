import Command from "./api/command";
import argParser from "./util/args/args-parser";

runCommand(process.argv);

async function runCommand(processArgv: string[]) {
  if (processArgv.length >= 3) {
    const commandName = processArgv[2];
    try {
      const command = await import(buildImportPath(commandName)).then(
        (obj) => obj.default
      );
      if (command instanceof Command) {
        command.execute(argParser.parseCommandParameters(processArgv.slice(3)));
      } else {
        console.error("Command does not fulfill contract.");
        process.exit(-1);
      }
    } catch (e) {
      console.error("Command does not exist.");
      console.debug(e);
    }
  } else {
    console.error("No command specified.");
  }
}

function buildImportPath(commandName: string) {
  return `./commands/${commandName}`;
}
