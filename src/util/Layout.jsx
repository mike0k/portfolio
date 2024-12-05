import Store from '../store/Store.jsx';
import * as LayoutReducer from '../store/reducer/LayoutReducer.jsx';

export const clear = () => Store.dispatch(LayoutReducer.clear());
export const get = () => Store.getState().layout;
export const set = (data) => Store.dispatch(LayoutReducer.set(data));
//const update = (data) => Store.dispatch(LayoutReducer.merge(data));

export const redirect = (url) => {
    if (typeof url !== 'string') {
        url = '';
    }
    if (url !== get().redirect) {
        set({ redirect: url });
    }
};

export const scroll = (anchor) => {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
};
