import figlet, {Fonts} from "figlet";
import chalk from "chalk";
import {CommandArg} from "../api/command-arg";

class Print {
  private APP_NAME = "Exif CLI";
  private LOGO_FONT: Fonts = "Star Wars";

  appLogo() {
    console.log(chalk.green(figlet.textSync(this.APP_NAME, this.LOGO_FONT)));
  }

  info(message: string) {
    console.log(
        `${chalk.bgGreen(" INFO  ")}${chalk.inverse(` ${message} `)}\n`
    );
  }

  warn(message: string) {
    console.log(
        `${chalk.bgYellow(" WARN  ")}${chalk.inverse(` ${message} `)}\n`
    );
  }

  error(message: string) {
    console.log(`${chalk.bgRed(" ERROR ")}${chalk.inverse(` ${message} `)}\n`);
  }

  commandUsage(commandName: string) {
    console.log(`\n${chalk.bold("Usage:")} ${commandName} [OPTIONS]`);
  }

  commandDescribe(commandDescription : string){
    console.log(`\n${chalk.italic(commandDescription)}`)
  }

  commandOptionsDescribe(commandArgs : CommandArg[]){
    for(const arg of commandArgs){
      console.log(`\n${arg.shortName}, ${arg.longName}\n${arg.description}`)
    }
  }

}

export default new Print();
