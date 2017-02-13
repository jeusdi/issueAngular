import { IUser } from './user.interface';

export function initialUserState(): IUser {
    return {
        id: '',
        name: '',
        username: '',
        customer: '',
        sources: []
    };
};