import { combineReducers, provideStore } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { enableBatching } from 'redux-batched-actions';

import { IStore } from '../store/store.interface';
import { UserReducer } from './user/user.reducer';
import { SourceReducer } from './source/source.reducer';

const reducers = {
  // pass your reducers here
  user: UserReducer.reducer,
  sources: SourceReducer.reducer
};

// if environment is != from production
// use storeFreeze to avoid state mutation
const developmentReducer = compose(storeFreeze, enableBatching, combineReducers)(reducers);
const productionReducer = compose(enableBatching, combineReducers)(reducers);

// enableBatching allows us to dispatch multiple actions
// without letting the subscribers being warned between the actions
// only at the end : https://github.com/tshelburne/redux-batched-actions
// can be very handy when normalizing HTTP response
export function getRootReducer(state: any, action: any) {
    //if (environment.production) {
    if ('production' === ENV)
        return productionReducer(state, action);
    else
        return developmentReducer(state, action);
}