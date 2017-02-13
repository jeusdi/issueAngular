import { ActionReducer, Action } from '@ngrx/store';

import { sourceState } from './source.initial-state';
import { ISourceRedux } from './source.interface';

export class SourceReducer {

    private static reducerName = 'SOURCES_REDUCER';

    public static reducer(sourcesRdx = sourceState(), {type, payload}: Action) {
        if (typeof SourceReducer.mapActionsToMethod[type] === 'undefined')
            return sourcesRdx;

        return SourceReducer.mapActionsToMethod[type](sourcesRdx, type, payload);
    }

    // tslint:disable-next-line:member-ordering
    /**
     * Default reducer type. I want all sources.
     */
    public static LOAD_SOURCES = `${SourceReducer.reducerName}_LOAD_SOURCES`;

    // tslint:disable-next-line:member-ordering
    /**
     * I want all sources where it's type is "card".
     */
    public static LOAD_SOURCE_CARDS = `${SourceReducer.reducerName}_LOAD_SOURCE_CARDS`;
    private static loadSourceCards(sourcesRdx, type, payload) {
        return Object.assign(<ISourceRedux>{}, sourcesRdx, payload);
    }

    // ---------------------------------------------------------------

    // tslint:disable-next-line:member-ordering
    private static mapActionsToMethod = {
        [SourceReducer.LOAD_SOURCE_CARDS]: SourceReducer.loadSourceCards,
    };

}