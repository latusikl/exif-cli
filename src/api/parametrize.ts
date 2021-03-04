import {CommandArg} from "./command-arg";

export interface    Parametrize{
    getRequiredParameters() : CommandArg[];
    getParameterByShortName(shortName : string) : CommandArg | undefined;
    getParameterByLongName(longName : string) : CommandArg | undefined;
}
