import { createStore } from 'redux';
import { appStates } from './rootReducer';

export const store = createStore(appStates);
