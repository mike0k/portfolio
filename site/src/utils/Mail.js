import Request from 'utils/Request';
import { store } from 'store/store';
import * as ErrorAction from 'store/action/ErrorAction';

export const save = (data) => {
    store.dispatch(ErrorAction.clear());
    return Request.post('contact', data).then((res) => {
        if (!res.data.valid) {
            store.dispatch(ErrorAction.set(res.data.errors));
        }
        return res.data.valid;
    });
};
