export interface CommandArg {
  shortName: string;
  longName: string;
  description: string;
  value?: string;
  required: boolean;
  validator : (value : string) => [boolean,string | undefined];
}
