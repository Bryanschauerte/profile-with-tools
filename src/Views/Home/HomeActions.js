import { makeFetch } from '../../Fetch/fetchActions';

export const CHANGE_DISPLAY = 'HOME/CHANGE_DISPLAY';
export const LOADING = 'HOME/LOADING';
export const LOAD_SUCCESS = 'HOME/LOAD_SUCCESS';
export const LOAD_FAIL = 'HOME/LOAD_FAIL';

// dispatch, fetchParams, loadingAction, successAction, failAction
export const fetchWar = (dispatch, fetchParams) => makeFetch(dispatch, fetchParams, loading, successfulLoad, failingLoad);

export const loading = () => {
    return {
        type: LOADING
    };
};

export const successfulLoad = (info) =>{

    return {
        type: LOAD_SUCCESS,
        info
    };
};

export const failingLoad = (error) =>{
    return {
        type: LOAD_SUCCESS,
        error
    };
};

export const changeDisplay = (display) => {
    return {
        type: CHANGE_DISPLAY,
        display
    };
};
