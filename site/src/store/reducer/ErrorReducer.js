import { CLEAR_ERRORS, SET_ERRORS } from '../action/types';

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case CLEAR_ERRORS:
            return {};
        case SET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}
