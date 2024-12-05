import store from 'store/store';
import * as ErrorAction from 'store/action/ErrorAction';

export const clear = () => {
    store.dispatch(ErrorAction.clear());
};
