import { createSelector } from 'reselect';
import { get } from 'lodash';
import { combineReducers } from 'redux';
import { navigationState } from '../Navigation/navigationState';
import { ContentState } from '../ContentDisplay/ContentState';

export const appStates = combineReducers({
    ContentState,
    navigationState
});

export const getAppStateByName = createSelector(
    state => state,
    (state, name) => name,
    (state, name) => get(state, name)
);

export const getNavigationValueByName = createSelector(
    getAppStateByName,
    (state, name) => name,
    (state, name) => get(state, name)
);
