import {
    createSelector
} from 'reselect';
import {
    CHANGE_DISPLAY,
    LOADING,
    LOAD_FAIL,
    LOAD_SUCCESS } from './HomeActions';
import {
    isEqual,
    get } from 'lodash';


export const HomeState = (state = { loading: false, display: 'home' }, action = {}) => {
    let newState;
    switch (action.type) {
        case LOADING:

            newState = {
                ...state,
                loading: true
            };

            return isEqual(state, newState) ? state : newState;
        case CHANGE_DISPLAY:

            newState = {
                ...state,
                display: action.display
            };

            return isEqual(state, newState) ? state : newState;

        case LOAD_SUCCESS:

            newState = {
                ...state,
                loading: false,
                info: action.info

            };

            return isEqual(state, newState) ? state : newState;

        case LOAD_FAIL:

            newState = {
                ...state,
                loading: false,
                error: action.error
            };

            return isEqual(state, newState) ? state : newState;
        default:
            return state;
    }
};
