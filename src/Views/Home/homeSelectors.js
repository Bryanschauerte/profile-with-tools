import {
    createSelector
} from 'reselect';

import { get } from 'lodash';
import { getStateByName } from '../../State/selectors';

export const getHomeState = createSelector(
    state => state,
    (state) => get(state, 'HomeState')
);

export const getHomeStateValue = createSelector(
    getHomeState,
    (state, name) => name,
    (state, name) => get(state, name)
);
