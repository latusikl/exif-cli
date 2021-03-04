import Command from "../api/command";
import * as fs from "fs";

class Show extends Command {
    constructor() {
    super(
      "show",
      "Command prints file exif metadata values with short description to console.",
      [
        {
          shortName: "-p",
          longName: "--path",
          description:
            "Path for file for which command is going to be executed.",
          required: true,
          validator: (value) =>
            fs.existsSync(value)
              ? [true, undefined]
              : [false, "File for given path does not exist."],
        },
      ]
    );
  }

  execute(commandArgs: Map<string, string | undefined>): void {
    //TODO implement
    console.log("Command executed");
  }
}

export default new Show();
