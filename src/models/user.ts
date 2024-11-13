import { IOrganiz } from "./organiz";


export interface IUser extends Document {
  username: string;
  password: string;
  organiz: IOrganiz;
  area: string;
}



