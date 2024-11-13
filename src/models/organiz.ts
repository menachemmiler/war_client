
export interface IResources  {
  name: string;
  amount: number;
}

export interface IOrganiz  {
  _id:string;
  name: string;
  resources: IResources[];
  budget: number;
}



