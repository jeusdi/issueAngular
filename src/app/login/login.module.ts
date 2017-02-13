import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ng2-bootstrap';

import { SharedModule } from '../reflux/shared.module';

import { LoginComponent } from './login.component';

import { ApiModule } from '@living/cest';

export const routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlertModule,
    ApiModule,
    //SharedModule,
    RouterModule.forChild(routes),
  ]
})
export default class LoginModule {
  static routes = routes;
}
