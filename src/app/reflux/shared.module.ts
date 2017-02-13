import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
/*import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';*/
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const modules = [
  CommonModule,
  /*ReactiveFormsModule,
  HttpModule,
  RouterModule,*/
  StoreModule,
  StoreDevtoolsModule
];

export const declarations = [];

@NgModule({
  imports: modules,
  exports: [...modules, ...declarations],
  declarations
})
export class SharedModule { }
