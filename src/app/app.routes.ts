import { Routes } from '@angular/router';


export const ROUTES: Routes = [{
   path: '', redirectTo: 'login', pathMatch: 'full'
  }, {
    path: 'login', loadChildren: () => System.import('./login/login.module')
  }, {
    path: '**', loadChildren: () => System.import('./login/login.module')
  }
];