import { CLEAR_ERRORS, SET_ERRORS } from 'store/action/types';

export const clear = () => {
    return {
        type: CLEAR_ERRORS
    };
};

export const set = errors => {
    if (typeof errors === 'undefined') {
        return clear();
    } else {
        return {
            type: SET_ERRORS,
            payload: errors
        };
    }
};
