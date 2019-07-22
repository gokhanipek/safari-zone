import { createStore } from 'redux';
import { allReducers, safariZoneReducer } from './../reducers/reducers'

export const store = createStore(allReducers, {
    allReducers
    },
    window.devToolsExtension && window.devToolsExtension()
);

