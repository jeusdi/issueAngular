import { ActionReducer, Action } from '@ngrx/store';

import { initialUserState } from './user.initial-state';
import { IUser } from './user.interface';

export class UserReducer {
  private static reducerName = 'USER_REDUCER';

  public static reducer(user = initialUserState(), {type, payload}: Action) {
    if (typeof UserReducer.mapActionsToMethod[type] === 'undefined') {
      return user;
    }

    return UserReducer.mapActionsToMethod[type](user, type, payload);
  }

    // tslint:disable-next-line:member-ordering
    /**
     * Default reducer type. I want all sources.
     */
    public static USER_LOGIN = `${UserReducer.reducerName}_USER_LOGIN`;

    /**
     * User login success.
     */
    public static USER_LOGIN_SUCCESS = `${UserReducer.reducerName}_USER_LOGIN_SUCCESS`;
    private static userLoginSuccess(sourcesRdx, type, payload) {
        return Object.assign(<IUser>{}, sourcesRdx, payload);
    }

    /**
     * User login fails.
     */
    public static USER_LOGIN_FAILED = `${UserReducer.reducerName}_USER_LOGIN_FAILED`;
    private static userLoginFailed(sourcesRdx, type, payload) {
        return Object.assign(<IUser>{}, sourcesRdx, payload);
    }

  // ---------------------------------------------------------------

  // tslint:disable-next-line:member-ordering
  private static mapActionsToMethod = {
      [UserReducer.USER_LOGIN_SUCCESS]: UserReducer.userLoginSuccess,
      [UserReducer.USER_LOGIN_FAILED]: UserReducer.userLoginFailed,
  };
}