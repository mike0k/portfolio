import { store } from 'store/store';
import * as RouteAction from 'store/action/RouteAction';

export const addLog = (route) => {
    const log = get().log;
    log.push({
        route: route,
        time: Date.now(),
    });
    store.dispatch(RouteAction.setLog(log));
};

export const goBack = () => {
    const back = get().back;
    if (back !== '') {
        set({
            back: '',
            redirect: back,
        });
    }
};

export const get = () => {
    return store.getState().route;
};

export const getUrlParam = (param) => {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    const params = {};
    for (let i = 0; i < vars.length; i++) {
        const pair = vars[i].split('=');
        if (typeof param !== 'undefined') {
            if (pair[0] === param) {
                return pair[1];
            }
        } else {
            params[pair[0]] = pair[1];
        }
    }
    return params;
};

export const redirect = (route) => {
    set({ redirect: route });
};

export const set = (data) => {
    store.dispatch(RouteAction.set(data));
};
