import { createSelector } from 'reselect';
import {
    get,
    isEqual } from 'lodash';
import {
    GITHUB_REPOSITORIES_FAILURE,
    GITHUB_REPOSITORIES_LOAD,
    GITHUB_REPOSITORIES_SUCCESS
} from './ContentActions';
import { getAppStateByName } from '../stateManagement/rootReducer';

export const ContentState = (state = {}, action = {}) =>{
    let newState;
    switch (action.type) {
        case GITHUB_REPOSITORIES_FAILURE:
            newState = {
                ...state,
                error: action.error,
                loading: false
            };

            return isEqual(newState, state) ? state : newState;

        case GITHUB_REPOSITORIES_SUCCESS:
            console.log(action, 'ACTIOOON');

            newState = {
                ...state,
                loading: false,
                repositories: action.repositories
            };

            return isEqual(state, newState) ? state : newState;

        case GITHUB_REPOSITORIES_LOAD:
            newState = {
                ...state,
                loading: true
            };

            return isEqual(state, newState) ? state : newState;

        default:
            return state;
    }
};

export const getContentState = createSelector(
    (state) => state,
    (state) => getAppStateByName(state, 'ContentState')
);

export const getContentStateByName = createSelector(
    getContentState,
    (state, name) => name,
    (state, name) => get(state, name)
);
