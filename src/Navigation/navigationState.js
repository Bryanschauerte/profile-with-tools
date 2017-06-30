import { createSelector } from 'reselect';
import {
    get,
    isEqual } from 'lodash';
import { getAppStateByName } from '../stateManagement/rootReducer';
import {
    CHANGE_DISPLAY
} from './navigationActions';

export const navigationState = (state = { display: 'initial' }, action = {}) => {
    let newState;

    switch (action.type) {
        case CHANGE_DISPLAY:
            newState = {
                ...state,
                display: action.targetDisplay
            };

            return isEqual(newState, state) ? state : newState;
        default:
            return state;
    }
};

export const getNavigationState = createSelector(
	state => state,
	state => getAppStateByName(state, 'navigationState')
);

export const getNavigationValueByName = createSelector(
    getNavigationState,
    (state, name) => name,
    (state, name) => get(state, name)
);
