import { Component, ViewEncapsulation, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';

import { UsersService } from '@living/cest/ts';

import { IStore } from '../reflux/store/store.interface';
import { IUser } from '../reflux/state/user/user.interface';

declare var jQuery: any;

@Component({
  selector: 'login',
  templateUrl: './login.template.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'login-page app'
  },
  providers: [ UsersService ]
})
export class LoginComponent implements OnInit {

    private user$: Observable<IUser>;
    private userSub: Subscription;

    constructor(private store$: Store<IStore>, private router: Router)
    {
        this.user$ = this.store$.select(state => state.user);
    }

    ngOnInit():void {
        this.store$.dispatch({ type: 'USER_REDUCER_USER_LOGIN', payload: { username: 'user', password: 'passwd' } });

    }

    ngOnDestroy():void {
        this.userSub.unsubscribe();
    }
}
