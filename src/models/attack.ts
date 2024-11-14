export interface IAttack {
  _id?: string;
  name: string;
  timeToHit: number;
  idAttacker: string;
  idIntercepted?: string; //אם הוא יורט באמת
  area?: string;
  status?: "sent" | "fell" | "intercepted";
}
