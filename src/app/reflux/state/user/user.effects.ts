import { Injectable } from '@angular/core';

import { Store, Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { IStore } from '../../store/store.interface';

import { UsersService, UserDTO } from '@living/cest';

@Injectable()
export class UserEffects {
  constructor(
    private _actions$: Actions,
    private _store$: Store<IStore>,
    private _userService: UsersService,
  ) { }

  @Effect({ dispatch: true }) userLogin$: Observable<Action> = this._actions$
    .ofType('USER_REDUCER_USER_LOGIN')
    .switchMap((action: Action) =>
      this._userService.checkPasswd(action.payload.username, action.payload.password)
        .map((user: any) => {
          return { type: 'USER_REDUCER_USER_LOGIN_SUCCESS', payload: user };
        })
        .catch((err) => {
          return Observable.of({
            type: 'USER_REDUCER_USER_LOGIN_ERROR',
            payload: { error: err }
          });
        })
    );
}