import { Store, Persistor } from '../store/Store.jsx';
import * as UserReducer from '../store/reducer/UserReducer.jsx';

export const clear = () => Store.dispatch(UserReducer.clear());
export const get = () => Store.getState().user;
export const set = (data) => Store.dispatch(UserReducer.set(data));
//const update = (data) => Store.dispatch(UserReducer.merge(data));

//fully reset the state saved in the browser cache
export const reset = () => {
    Persistor.purge();
    window.location.reload();
};

export const toggleMute = () => {
    const { mute } = get();
    set({ mute: !mute });
};

export const toggleStyle = () => {
    const { style } = get();
    const newStyle = style === 'dark' ? 'light' : 'dark';
    set({ style: newStyle });
};
