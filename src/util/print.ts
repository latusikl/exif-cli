import figlet, { Fonts } from "figlet";
import chalk from "chalk";

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
}

export default new Print();
