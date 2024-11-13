import { IOrganiz } from "./organiz";

export interface IUser extends Document {
  _id: string;
  username: string;
  password: string;
  organiz: IOrganiz;
  area: string;
}
