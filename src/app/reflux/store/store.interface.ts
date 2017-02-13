import { IUser } from '../state/user/user.interface';
import { ISourceRedux } from '../state/source/source.interface';

export interface IStore {
  user: IUser;
  sources: ISourceRedux;
}