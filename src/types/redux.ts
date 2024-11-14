import { IAttack } from "../models/attack";
import { IOrganiz } from "../models/organiz";
import { IUser } from "../models/user";


export enum DataStatus {
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  IDLE = "IDLE",
}

export interface userState {
  error: string | null;
  status: DataStatus;
  user: null | IUser;
  data?: any;
}

export interface organizState {
  error: string | null;
  status: DataStatus;
  organiz: null | string[];
  data?: any;
}


export interface attackState {
  error: string | null;
  status: DataStatus;
  attack: null | IAttack[];
  data?: any;
}

