import { createStore, applyMiddleware } from 'redux';
import { appStates } from './rootReducer';
import thunk from 'redux-thunk';

export const store = createStore(appStates, applyMiddleware(thunk));
