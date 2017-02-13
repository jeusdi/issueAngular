import { ISource } from '../source/source.interface';

export interface IUser {
    id: string;
    name: string;
    username: string;
    customer: string;
    sources: Array<ISource>;
}