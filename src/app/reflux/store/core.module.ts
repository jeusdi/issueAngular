import { NgModule, ModuleWithProviders } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ApiModule } from '@living/cest';

import { getRootReducer } from '../state/root.reducer';
import { UserEffects } from '../state/user/user.effects';

@NgModule({
  imports: [
    // TODO : Keep an eye on ngrx V3 to have lazy loaded reducers
    // https://github.com/ngrx/store/pull/269
    ApiModule,
    StoreModule.provideStore(getRootReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.runAfterBootstrap(UserEffects)
  ],
  providers: [
    // use hash location strategy or not based on env
    {
      provide: LocationStrategy,
      useClass: ('production' === ENV ? HashLocationStrategy : PathLocationStrategy)
    }
  ]
})
export class CoreModule { }