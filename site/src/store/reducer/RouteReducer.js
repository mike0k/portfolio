import { CLEAR_ROUTE, SET_ROUTE } from 'store/action/types';
import * as R from 'ramda';

const initialState = {
    back: '',
    current: '',
    redirect: '',
    log: [],
    loading: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case CLEAR_ROUTE:
            return R.clone(initialState);
        case SET_ROUTE:
            return R.mergeDeepRight(state, action.payload);
        default:
            return state;
    }
}
