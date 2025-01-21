import Store from '../store/Store.jsx';
import * as LayoutReducer from '../store/reducer/LayoutReducer.jsx';
import Config from '../config/Config.jsx';

export const clear = () => Store.dispatch(LayoutReducer.clear());
export const get = () => Store.getState().layout;
export const set = (data) => Store.dispatch(LayoutReducer.set(data));
//const update = (data) => Store.dispatch(LayoutReducer.merge(data));

export const contact = async (formData) => {
    formData.website = 'Portfolio';
    //formData.access_key = Config.api.web3forms;
    const json = JSON.stringify(formData);

    const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: json,
    }).then((res) => res.json());

    if (res.success) {
        console.log('Success', res);
        set({ contactForm: 2 });
    }
};

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
