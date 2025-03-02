import Store from '../store/Store';
import * as LayoutReducer from '../store/reducer/LayoutReducer';
import Config from '../../config/Config';

export const clear = () => Store.dispatch(LayoutReducer.clear());
export const get = () => Store.getState().layout;
export const set = (data: LayoutReducer.StateType) => Store.dispatch(LayoutReducer.set(data));
//const update = (data: LayoutReducer.StateType) => Store.dispatch(LayoutReducer.merge(data));

type FormData = {
    name: string;
    email: string;
    message: string;
    //website?: string;
};
export const contact = async (formData: FormData) => {
    //formData.website = 'Portfolio';
    const json = JSON.stringify(formData);

    const res = await fetch(Config.url.domain + 'api/mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: json,
    }).then((res) => res.json());

    if (res.ok) {
        addFlash('Email sent successfully');
    } else {
        addFlash('Error, email not sent');
    }

    return res;
};

export const clearFlash = () => {
    set({ flash: [] });
};

export const addFlash = (msg: string) => {
    const { flash } = get();
    flash?.push(msg);
    set({ flash });
};

export const scroll = (anchor: string) => {
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
};
