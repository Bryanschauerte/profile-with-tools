import {
    createSelector
} from 'reselect';
import { get } from 'lodash';

export const getStateByName = createSelector(
    (state, name) => get(state, name)
);
