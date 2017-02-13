import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { CoreModule } from './reflux/store/core.module';
import { SharedModule } from './reflux/shared.module';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';

import { App } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ApiModule } from '@living/cest';

import { getRootReducer } from './reflux/state/root.reducer';
import { UserEffects } from './reflux/state/user/user.effects';


// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ App ],
  declarations: [ App ],
  imports: [
    BrowserModule,
    ApiModule,
    StoreModule.provideStore(getRootReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.runAfterBootstrap(UserEffects),
    //CoreModule,
    //StoreModule,
    //StoreDevtoolsModule
    //SharedModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}

}

