import Store from '../store/Store';
import * as UserReducer from '../store/reducer/UserReducer';

export const clear = () => Store.dispatch(UserReducer.clear());
export const get = () => Store.getState().user;
export const set = (data: UserReducer.StateType) => Store.dispatch(UserReducer.set(data));
//const update = (data: UserReducer.StateType) => Store.dispatch(UserReducer.merge(data));

export const toggleMute = () => {
    const { mute } = get();
    set({ mute: !mute });
};

export const toggleStyle = () => {
    const { style } = get();
    const newStyle = style === 'dark' ? 'light' : 'dark';
    set({ style: newStyle });
};
