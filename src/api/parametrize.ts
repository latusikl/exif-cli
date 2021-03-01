import {CommandArg} from "./command-arg";

export interface Parametrize{
    getRequiredParameters() : CommandArg[];
    getParameterByName(shortName : string,longName: string) : CommandArg;
}
