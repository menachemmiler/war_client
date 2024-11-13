export interface IAttack {
    name: string;
    timeToHit: number;
    idAttacker: string;
    idIntercepted?: string;//אם הוא יורט באמת
}
