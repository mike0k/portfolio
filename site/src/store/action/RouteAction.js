import { CLEAR_ROUTE, SET_ROUTE, SET_ROUTE_LOG } from 'store/action/types';

export const clear = () => {
    return {
        type: CLEAR_ROUTE,
    };
};

export const set = (data) => {
    return {
        type: SET_ROUTE,
        payload: data,
    };
};

export const setLog = (data) => {
    return {
        type: SET_ROUTE_LOG,
        payload: data,
    };
};
