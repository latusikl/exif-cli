import Command from "./api/command";
import argParser from "./util/args-parser";
import display from "./util/print";

runCommand(process.argv);

async function runCommand(processArgv: string[]) {
  display.appLogo();
  if (processArgv.length >= 3) {
    const commandName = processArgv[2];
    try {
      const command = await import(buildImportPath(commandName)).then(
        (obj) => obj.default
      );
      if (command instanceof Command) {
        display.info(`Executing ${commandName} command.`);
        command.execute(argParser.parseCommandParameters(processArgv.slice(3)));
      } else {
        display.error("Command does not fulfill contract or does not exist.");
        process.exit(-1);
      }
    } catch (e) {
      display.error(`Unable to load command "${commandName}"`);
      // console.debug(e);
    }
  } else {
    display.error("No command specified.");
  }
}

function buildImportPath(commandName: string) {
  return `./commands/${commandName}`;
}
